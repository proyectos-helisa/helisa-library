import { Component, EventEmitter, Output, ViewChildren, Input } from '@angular/core';
import { DependencyTableHelisaService } from './dependency-table-helisa.service';
import { TableHelisaService } from '../table-helisa/table-helisa.service';
export var TypeResizeEnum;
(function (TypeResizeEnum) {
    TypeResizeEnum[TypeResizeEnum["BOTH"] = 0] = "BOTH";
    TypeResizeEnum[TypeResizeEnum["ONLY_CELLS"] = 1] = "ONLY_CELLS";
    TypeResizeEnum[TypeResizeEnum["ONLY_TABLES"] = 2] = "ONLY_TABLES";
})(TypeResizeEnum || (TypeResizeEnum = {}));
export class ResizeConfig {
    constructor() {
        this.enableResize = false;
        this.typeResize = TypeResizeEnum.ONLY_CELLS;
        this.uuid = 'testing';
    }
}
export class ResizeResponse {
}
export class DependencyTableHelisaComponent {
    constructor(dependencyTableHelisaService, tableService) {
        this.dependencyTableHelisaService = dependencyTableHelisaService;
        this.tableService = tableService;
        this.tables = [];
        this.showToolTip = true;
        /**
         * deprecated, use selectObject
         */
        this.selected = new EventEmitter();
        this.selectToImport = new EventEmitter();
        this.selectObject = new EventEmitter();
        this.selectHeaderCellDependency = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.total = new EventEmitter();
        this.sort = new EventEmitter();
        this.drop = new EventEmitter();
        this.addRow = new EventEmitter();
        this.selectCell = new EventEmitter();
        this.bookClicked = new EventEmitter();
        this.afterViewInit = new EventEmitter();
        this.selectedObject = null;
        /**
         * Tiempo antes de ocultarla el mensaje del tooltip
         */
        this.hideDelay = 600;
        /**
         * Tiempo antes de mostra el mensaje del tooltip
         */
        this.showDelay = 500;
        this.resizeConfig = new ResizeConfig();
        this.modeImportEnabled = false;
    }
    get modeImportingEnabled() {
        return this.modeImportEnabled;
    }
    get resizingConfig() {
        return this.resizeConfig;
    }
    ngOnInit() {
        this.getTables();
        this.dependencyTableHelisaService.emitNextPage.subscribe((event) => {
            this.tableService.addPage(event.data, this.viewTables.toArray()[event.index]);
        });
        this.dependencyTableHelisaService.emitTotal.subscribe((event) => {
            this.tableService.setTotal(event.data, this.viewTables[event.index]);
        });
        // Observable para mostrar o esconder el boton de una tabla
        this.dependencyTableHelisaService.emitVisibilityButton.subscribe((data) => {
            if (!!data && data.index !== undefined) {
                const table = this.tables[data.index];
                if (!!table) {
                    table.addRowButton.showButton = data.data;
                }
            }
        });
        // Observable para habilitar o deshabilitar el botón y mostrar titulo
        this.dependencyTableHelisaService.emitEnabledButton.subscribe((data) => {
            if (!!data && data.index !== undefined) {
                const table = this.tables[data.index];
                if (!!table) {
                    table.addRowButton.isDisabled = data.data.isDisabled;
                    table.addRowButton.toolTipText = data.data.text;
                }
            }
        });
        // Observable para mostrar o esconder los botones de todas las tablas
        this.dependencyTableHelisaService.emitVisibilityAllButtons.subscribe((data) => {
            if (data !== undefined && data != null) {
                this.tables.forEach((element) => {
                    if (!!element.addRowButton) {
                        element.addRowButton.showButton = data;
                    }
                });
            }
        });
        // Observable para manejo de selección de celdas
        this.dependencyTableHelisaService.emitIsCellSelection.subscribe((data) => {
            if (!!data && data.index !== undefined) {
                const table = this.tables[data.index];
                if (table) {
                    table.isCellSelection = data.data;
                }
            }
        });
        // Observable para manejo de columnas
        this.dependencyTableHelisaService.emitChangeColumns.subscribe((data) => {
            if (!!data && data.index !== undefined) {
                const table = this.tables[data.index];
                if (table) {
                    table.columns = data.data;
                }
            }
        });
    }
    /**
     * retorna el servicio que gestiona el componente.
     */
    getService() {
        return this.dependencyTableHelisaService;
    }
    /**
     * Obtiene un observable con las tablas dependientes desde el servicio.
     */
    getTables() {
        this.dependencyTableHelisaService.getTables()
            .subscribe((tables) => {
            this.tables.splice(0, this.tables.length, ...tables);
            this.viewTables.forEach((item) => {
                item.reload();
            });
        });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla seleccionada
     * @param data retorna la fila que fue seleccionada
     */
    onSelectHeaderCell(index, event) {
        this.selectHeaderCellDependency.emit({ index, data: event });
    }
    onSelectedDependency(index, event) {
        this.selectedObject = { index, data: event };
        this.selected.emit({ index, data: event.value });
        this.selectObject.emit({ index, data: event });
    }
    onSelectedDependencyImport(index, event) {
        this.selectToImport.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onNextPage(index, event) {
        this.nextPage.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onTotal(index, event) {
        this.total.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onSort(index, event) {
        this.sort.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onDrop(index, event) {
        this.drop.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emite el indice de la tabla al cual se le debe añadir una nueva fila
     * @param index indica el indice de la tabla de la cual se dispara el evento
     */
    onAddRow(index) {
        this.addRow.emit(index);
    }
    selectedCell(index, event) {
        if (this.tables[index].isCellSelection) {
            this.selectCell.emit({ index, data: event });
        }
    }
    onBookClicked(index, event) {
        this.bookClicked.emit({ index, data: event });
    }
    onAfterViewInitTable(resizeResponse) {
        if (this.resizeConfig.enableResize) {
            this.afterViewInit.emit({
                quantityTable: this.tables.length,
                uuid: resizeResponse.uuid
            });
        }
    }
}
DependencyTableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-dependency-table',
                template: "<div tabindex=\"0\">\n  <hel-table [modeImportEnabled]=\"modeImportingEnabled\" [resizeConfig]=\"resizingConfig\" #viewTables *ngFor=\"let table of tables; let i = index;\" [tableIndex]=\"i\" class=\"table-test hw-min-width-120\"\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\n    (selectObject)=\"onSelectedDependency(i, $event)\" (selectToImport)=\"onSelectedDependencyImport(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\" [configColumnClass]=\"table.configColumnClass\"\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\n    (bookClicked)=\"onBookClicked(i,$event)\"\n    [showToolTip]=\"showToolTip\"\n    [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\"\n    (afterViewInit)=\"onAfterViewInitTable($event)\"\n    (selectHeaderCell)=\"onSelectHeaderCell(i, $event)\"\n    >\n  </hel-table>\n</div>\n",
                providers: [DependencyTableHelisaService],
                styles: [""]
            },] }
];
DependencyTableHelisaComponent.ctorParameters = () => [
    { type: DependencyTableHelisaService },
    { type: TableHelisaService }
];
DependencyTableHelisaComponent.propDecorators = {
    viewTables: [{ type: ViewChildren, args: ['viewTables',] }],
    showToolTip: [{ type: Input }],
    selected: [{ type: Output }],
    selectToImport: [{ type: Output }],
    selectObject: [{ type: Output }],
    selectHeaderCellDependency: [{ type: Output }],
    nextPage: [{ type: Output }],
    total: [{ type: Output }],
    sort: [{ type: Output }],
    drop: [{ type: Output }],
    addRow: [{ type: Output }],
    selectCell: [{ type: Output }],
    bookClicked: [{ type: Output }],
    afterViewInit: [{ type: Output }],
    hideDelay: [{ type: Input }],
    showDelay: [{ type: Input }],
    resizeConfig: [{ type: Input }],
    modeImportEnabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EvZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBYSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw0QkFBNEIsRUFBZSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBUTFFLE1BQU0sQ0FBTixJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDeEIsbURBQUksQ0FBQTtJQUNKLCtEQUFVLENBQUE7SUFDVixpRUFBVyxDQUFBO0FBQ2IsQ0FBQyxFQUpXLGNBQWMsS0FBZCxjQUFjLFFBSXpCO0FBRUQsTUFBTSxPQUFPLFlBQVk7SUFLdkI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGNBQWM7Q0FHMUI7QUFRRCxNQUFNLE9BQU8sOEJBQThCO0lBcUN6QyxZQUFvQiw0QkFBNkQsRUFBVSxZQUFtQztRQUExRyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQWlDO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBbkM5SCxXQUFNLEdBQTBCLEVBQUUsQ0FBQztRQUUxQixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUVyQzs7V0FFRztRQUNPLGFBQVEsR0FBcUMsSUFB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QUFFLEtBQWM7UUFDeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYSxFQUFFLEtBQXlCO1FBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxjQUE4QjtRQUNqRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUN0QixhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUNqQyxJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUk7YUFDUixDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7WUF0T0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLG16Q0FBdUQ7Z0JBRXZELFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDOzthQUMxQzs7O1lBdENRLDRCQUE0QjtZQUU1QixrQkFBa0I7Ozt5QkF3Q3hCLFlBQVksU0FBQyxZQUFZOzBCQUN6QixLQUFLO3VCQUtMLE1BQU07NkJBQ04sTUFBTTsyQkFDTixNQUFNO3lDQUNOLE1BQU07dUJBQ04sTUFBTTtvQkFDTixNQUFNO21CQUNOLE1BQU07bUJBQ04sTUFBTTtxQkFDTixNQUFNO3lCQUNOLE1BQU07MEJBQ04sTUFBTTs0QkFDTixNQUFNO3dCQU9OLEtBQUs7d0JBS0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSwgQ29uZmlnVGFibGUgfSBmcm9tICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2VsbCwgQ29sdW1uQ29uZmlnLCBFdmVudENvbHVtbiwgUmVxdWVzdFRhYmxlSGVsaXNhLCBTZWxlY3RPYmplY3QsIFRvdGFsVGFibGVIZWxpc2EgfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUYWJsZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFibGVIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnREZXBlbmRlbmN5PFQ+IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgZGF0YTogVDtcbn1cblxuZXhwb3J0IGVudW0gVHlwZVJlc2l6ZUVudW0ge1xuICBCT1RILFxuICBPTkxZX0NFTExTLFxuICBPTkxZX1RBQkxFU1xufVxuXG5leHBvcnQgY2xhc3MgUmVzaXplQ29uZmlnIHtcbiAgZW5hYmxlUmVzaXplOiBib29sZWFuO1xuICB0eXBlUmVzaXplOiBUeXBlUmVzaXplRW51bTtcbiAgdXVpZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZW5hYmxlUmVzaXplID0gZmFsc2U7XG4gICAgdGhpcy50eXBlUmVzaXplID0gVHlwZVJlc2l6ZUVudW0uT05MWV9DRUxMUztcbiAgICB0aGlzLnV1aWQgPSAndGVzdGluZyc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2l6ZVJlc3BvbnNlIHtcbiAgcXVhbnRpdHlUYWJsZSE6IG51bWJlcjtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtZGVwZW5kZW5jeS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ10sXG4gIHByb3ZpZGVyczogW0RlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lUYWJsZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGFibGVzOiBBcnJheTxDb25maWdUYWJsZTxUPj4gPSBbXTtcbiAgQFZpZXdDaGlsZHJlbigndmlld1RhYmxlcycpIHZpZXdUYWJsZXM6IFF1ZXJ5TGlzdDxUYWJsZUhlbGlzYUNvbXBvbmVudDxUPj47XG4gIEBJbnB1dCgpIHNob3dUb29sVGlwOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogZGVwcmVjYXRlZCwgdXNlIHNlbGVjdE9iamVjdFxuICAgKi9cbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PFQ+PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0VG9JbXBvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdEhlYWRlckNlbGxEZXBlbmRlbmN5OiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcbiAgQE91dHB1dCgpIHRvdGFsOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30+PigpO1xuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9Pj4oKTtcbiAgQE91dHB1dCgpIGRyb3A6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fT4+KCk7XG4gIEBPdXRwdXQoKSBhZGRSb3c6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RDZWxsOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcbiAgQE91dHB1dCgpIGJvb2tDbGlja2VkOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcbiAgQE91dHB1dCgpIGFmdGVyVmlld0luaXQ6IEV2ZW50RW1pdHRlcjxSZXNpemVSZXNwb25zZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2l6ZVJlc3BvbnNlPigpO1xuICBzZWxlY3RlZE9iamVjdDogRXZlbnREZXBlbmRlbmN5PHt9PiA9IG51bGw7XG5cblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG9jdWx0YXJsYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBzaG93RGVsYXk6IG51bWJlciA9IDUwMDtcbiAgQElucHV0KCkgcmVzaXplQ29uZmlnOiBSZXNpemVDb25maWcgPSBuZXcgUmVzaXplQ29uZmlnKCk7XG4gIEBJbnB1dCgpIG1vZGVJbXBvcnRFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U6IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U8VD4sIHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8VD4pIHtcbiAgfVxuXG4gIGdldCBtb2RlSW1wb3J0aW5nRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlSW1wb3J0RW5hYmxlZDtcbiAgfVxuXG4gIGdldCByZXNpemluZ0NvbmZpZygpOiBSZXNpemVDb25maWcge1xuICAgIHJldHVybiB0aGlzLnJlc2l6ZUNvbmZpZztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0VGFibGVzKCk7XG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXROZXh0UGFnZS5zdWJzY3JpYmUoXG4gICAgICAoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUW10+KTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLmFkZFBhZ2UoZXZlbnQuZGF0YSwgdGhpcy52aWV3VGFibGVzLnRvQXJyYXkoKVtldmVudC5pbmRleF0pO1xuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFRvdGFsLnN1YnNjcmliZShcbiAgICAgIChldmVudDogRXZlbnREZXBlbmRlbmN5PFRvdGFsVGFibGVIZWxpc2E+KTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLnNldFRvdGFsKGV2ZW50LmRhdGEsIHRoaXMudmlld1RhYmxlc1tldmVudC5pbmRleF0pO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgbW9zdHJhciBvIGVzY29uZGVyIGVsIGJvdG9uIGRlIHVuYSB0YWJsYVxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VmlzaWJpbGl0eUJ1dHRvbi5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogRXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+KTogdm9pZCA9PiB7XG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgdGFibGU6IENvbmZpZ1RhYmxlPFQ+ID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XG4gICAgICAgICAgaWYgKCEhdGFibGUpIHtcbiAgICAgICAgICAgIHRhYmxlLmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YS5kYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgaGFiaWxpdGFyIG8gZGVzaGFiaWxpdGFyIGVsIGJvdMOzbiB5IG1vc3RyYXIgdGl0dWxvXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRFbmFibGVkQnV0dG9uLnN1YnNjcmliZShcbiAgICAgIChkYXRhOiBFdmVudERlcGVuZGVuY3k8eyBpc0Rpc2FibGVkOiBib29sZWFuLCB0ZXh0OiBzdHJpbmcgfT4pOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCB0YWJsZTogQ29uZmlnVGFibGU8VD4gPSB0aGlzLnRhYmxlc1tkYXRhLmluZGV4XTtcbiAgICAgICAgICBpZiAoISF0YWJsZSkge1xuICAgICAgICAgICAgdGFibGUuYWRkUm93QnV0dG9uLmlzRGlzYWJsZWQgPSBkYXRhLmRhdGEuaXNEaXNhYmxlZDtcbiAgICAgICAgICAgIHRhYmxlLmFkZFJvd0J1dHRvbi50b29sVGlwVGV4dCA9IGRhdGEuZGF0YS50ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgbW9zdHJhciBvIGVzY29uZGVyIGxvcyBib3RvbmVzIGRlIHRvZGFzIGxhcyB0YWJsYXNcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zLnN1YnNjcmliZShcbiAgICAgIChkYXRhOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50YWJsZXMuZm9yRWFjaCgoZWxlbWVudDogQ29uZmlnVGFibGU8VD4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmICghIWVsZW1lbnQuYWRkUm93QnV0dG9uKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuYWRkUm93QnV0dG9uLnNob3dCdXR0b24gPSBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIE9ic2VydmFibGUgcGFyYSBtYW5lam8gZGUgc2VsZWNjacOzbiBkZSBjZWxkYXNcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdElzQ2VsbFNlbGVjdGlvbi5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogRXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+KTogdm9pZCA9PiB7XG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgdGFibGU6IENvbmZpZ1RhYmxlPFQ+ID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XG4gICAgICAgICAgaWYgKHRhYmxlKSB7XG4gICAgICAgICAgICB0YWJsZS5pc0NlbGxTZWxlY3Rpb24gPSBkYXRhLmRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIC8vIE9ic2VydmFibGUgcGFyYSBtYW5lam8gZGUgY29sdW1uYXNcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdENoYW5nZUNvbHVtbnMuc3Vic2NyaWJlKFxuICAgICAgKGRhdGE6IEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4pOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCB0YWJsZTogQ29uZmlnVGFibGU8VD4gPSB0aGlzLnRhYmxlc1tkYXRhLmluZGV4XTtcbiAgICAgICAgICBpZiAodGFibGUpIHtcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXRvcm5hIGVsIHNlcnZpY2lvIHF1ZSBnZXN0aW9uYSBlbCBjb21wb25lbnRlLlxuICAgKi9cbiAgZ2V0U2VydmljZSgpOiBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE9idGllbmUgdW4gb2JzZXJ2YWJsZSBjb24gbGFzIHRhYmxhcyBkZXBlbmRpZW50ZXMgZGVzZGUgZWwgc2VydmljaW8uXG4gICAqL1xuICBnZXRUYWJsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmdldFRhYmxlcygpXG4gICAgICAuc3Vic2NyaWJlKCh0YWJsZXM6IENvbmZpZ1RhYmxlPFQ+W10pOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy50YWJsZXMuc3BsaWNlKDAsIHRoaXMudGFibGVzLmxlbmd0aCwgLi4udGFibGVzKTtcbiAgICAgICAgdGhpcy52aWV3VGFibGVzLmZvckVhY2goKGl0ZW06IFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgaXRlbS5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBzZWxlY2Npb25hZGFcbiAgICogQHBhcmFtIGRhdGEgcmV0b3JuYSBsYSBmaWxhIHF1ZSBmdWUgc2VsZWNjaW9uYWRhXG4gICAqL1xuICBvblNlbGVjdEhlYWRlckNlbGwoaW5kZXg6IG51bWJlciwgZXZlbnQ6IFNlbGVjdE9iamVjdDxUPik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0SGVhZGVyQ2VsbERlcGVuZGVuY3kuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudCB9KTtcbiAgfVxuXG4gIG9uU2VsZWN0ZWREZXBlbmRlbmN5KGluZGV4OiBudW1iZXIsIGV2ZW50OiBTZWxlY3RPYmplY3Q8VD4pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0geyBpbmRleCwgZGF0YTogZXZlbnQgfTtcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQoeyBpbmRleCwgZGF0YTogZXZlbnQudmFsdWUgfSk7XG4gICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudCB9KTtcbiAgfVxuXG4gIG9uU2VsZWN0ZWREZXBlbmRlbmN5SW1wb3J0KGluZGV4OiBudW1iZXIsIGV2ZW50OiBTZWxlY3RPYmplY3Q8VD4pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdFRvSW1wb3J0LmVtaXQoeyBpbmRleCwgZGF0YTogZXZlbnQgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcbiAgICovXG4gIG9uTmV4dFBhZ2UoaW5kZXg6IG51bWJlciwgZXZlbnQ6IFJlcXVlc3RUYWJsZUhlbGlzYTxUPik6IHZvaWQge1xuICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxuICAgKi9cbiAgb25Ub3RhbChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnRDb2x1bW4pOiB2b2lkIHtcbiAgICB0aGlzLnRvdGFsLmVtaXQoeyBpbmRleCwgZGF0YTogZXZlbnQgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcbiAgICovXG4gIG9uU29ydChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnRDb2x1bW4pOiB2b2lkIHtcbiAgICB0aGlzLnNvcnQuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxuICAgKi9cbiAgb25Ecm9wKGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VD4pOiB2b2lkIHtcbiAgICB0aGlzLmRyb3AuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0ZSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgYWwgY3VhbCBzZSBsZSBkZWJlIGHDsWFkaXIgdW5hIG51ZXZhIGZpbGFcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgZGUgbGEgY3VhbCBzZSBkaXNwYXJhIGVsIGV2ZW50b1xuICAgKi9cbiAgb25BZGRSb3coaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWRkUm93LmVtaXQoaW5kZXgpO1xuICB9XG5cbiAgc2VsZWN0ZWRDZWxsKGluZGV4OiBudW1iZXIsIGV2ZW50OiBDZWxsPFQ+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFibGVzW2luZGV4XS5pc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQm9va0NsaWNrZWQoaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUPik6IHZvaWQge1xuICAgIHRoaXMuYm9va0NsaWNrZWQuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudCB9KTtcbiAgfVxuXG4gIG9uQWZ0ZXJWaWV3SW5pdFRhYmxlKHJlc2l6ZVJlc3BvbnNlOiBSZXNpemVSZXNwb25zZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZUNvbmZpZy5lbmFibGVSZXNpemUpIHtcbiAgICAgIHRoaXMuYWZ0ZXJWaWV3SW5pdC5lbWl0KHtcbiAgICAgICAgcXVhbnRpdHlUYWJsZTogdGhpcy50YWJsZXMubGVuZ3RoLFxuICAgICAgICB1dWlkOiByZXNpemVSZXNwb25zZS51dWlkXG4gICAgICB9IGFzIFJlc2l6ZVJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICAvLyB0YWJsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgLy8gICBpZiAodGhpcy5tb2RlSW1wb3J0RW5hYmxlZCkge1xuICAvLyAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgLy8gICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIC8vICAgICAgIC8vIHRoaXMuc2VsZWN0VG9JbXBvcnQuZW1pdCh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkT2JqZWN0LCBzY29wZTogRXZlbnRTY29wZS5VU0VSLCBrZXlBY3Rpb25JbXBvcnQ6IGV2ZW50LmtleSB9KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgaWYgKCF0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAvLyAgICAgdGhpcy5hcnJvd3NFdmVudHMoZXZlbnQpO1xuICAvLyAgIH1cbiAgLy8gfVxufVxuIl19