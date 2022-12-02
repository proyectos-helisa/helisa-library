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
        this.modeImportEnabled = true;
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
                template: "<div tabindex=\"0\">\n  <hel-table [modeImportEnabled]=\"modeImportingEnabled\" [resizeConfig]=\"resizingConfig\" #viewTables *ngFor=\"let table of tables; let i = index;\" [tableIndex]=\"i\" class=\"table-test hw-min-width-120\"\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\n    (selectObject)=\"onSelectedDependency(i, $event)\" (selectToImport)=\"onSelectedDependencyImport(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\" [configColumnClass]=\"table.configColumnClass\"\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\n    (bookClicked)=\"onBookClicked(i,$event)\"\n    [showToolTip]=\"showToolTip\"\n    [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\"\n    (afterViewInit)=\"onAfterViewInitTable($event)\">\n  </hel-table>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EvZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBYSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw0QkFBNEIsRUFBZSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBUTFFLE1BQU0sQ0FBTixJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDeEIsbURBQUksQ0FBQTtJQUNKLCtEQUFVLENBQUE7SUFDVixpRUFBVyxDQUFBO0FBQ2IsQ0FBQyxFQUpXLGNBQWMsS0FBZCxjQUFjLFFBSXpCO0FBRUQsTUFBTSxPQUFPLFlBQVk7SUFLdkI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGNBQWM7Q0FHMUI7QUFRRCxNQUFNLE9BQU8sOEJBQThCO0lBb0N6QyxZQUFvQiw0QkFBNkQsRUFBVSxZQUFtQztRQUExRyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQWlDO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBbEM5SCxXQUFNLEdBQTBCLEVBQUUsQ0FBQztRQUUxQixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUVyQzs7V0FFRztRQUNPLGFBQVEsR0FBcUMsSUFB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YUFBYSxDQUFDLEtBQWEsRUFBRSxLQUF5QjtRQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsY0FBOEI7UUFDakQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTtZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDdEIsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFDakMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO2FBQ1IsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7O1lBak9GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxtdkNBQXVEO2dCQUV2RCxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzs7YUFDMUM7OztZQXRDUSw0QkFBNEI7WUFFNUIsa0JBQWtCOzs7eUJBd0N4QixZQUFZLFNBQUMsWUFBWTswQkFDekIsS0FBSzt1QkFLTCxNQUFNOzZCQUNOLE1BQU07MkJBQ04sTUFBTTt1QkFDTixNQUFNO29CQUNOLE1BQU07bUJBQ04sTUFBTTttQkFDTixNQUFNO3FCQUNOLE1BQU07eUJBQ04sTUFBTTswQkFDTixNQUFNOzRCQUNOLE1BQU07d0JBT04sS0FBSzt3QkFLTCxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLCBDb25maWdUYWJsZSB9IGZyb20gJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZSc7XG5pbXBvcnQgeyBDZWxsLCBDb2x1bW5Db25maWcsIEV2ZW50Q29sdW1uLCBSZXF1ZXN0VGFibGVIZWxpc2EsIFNlbGVjdE9iamVjdCwgVG90YWxUYWJsZUhlbGlzYSB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRhYmxlSGVsaXNhU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2Euc2VydmljZSc7XG5pbXBvcnQgeyBUYWJsZUhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudERlcGVuZGVuY3k8VD4ge1xuICBpbmRleDogbnVtYmVyO1xuICBkYXRhOiBUO1xufVxuXG5leHBvcnQgZW51bSBUeXBlUmVzaXplRW51bSB7XG4gIEJPVEgsXG4gIE9OTFlfQ0VMTFMsXG4gIE9OTFlfVEFCTEVTXG59XG5cbmV4cG9ydCBjbGFzcyBSZXNpemVDb25maWcge1xuICBlbmFibGVSZXNpemU6IGJvb2xlYW47XG4gIHR5cGVSZXNpemU6IFR5cGVSZXNpemVFbnVtO1xuICB1dWlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lbmFibGVSZXNpemUgPSBmYWxzZTtcbiAgICB0aGlzLnR5cGVSZXNpemUgPSBUeXBlUmVzaXplRW51bS5PTkxZX0NFTExTO1xuICAgIHRoaXMudXVpZCA9ICd0ZXN0aW5nJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzaXplUmVzcG9uc2Uge1xuICBxdWFudGl0eVRhYmxlITogbnVtYmVyO1xuICB1dWlkOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1kZXBlbmRlbmN5LXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXSxcbiAgcHJvdmlkZXJzOiBbRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeVRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB0YWJsZXM6IEFycmF5PENvbmZpZ1RhYmxlPFQ+PiA9IFtdO1xuICBAVmlld0NoaWxkcmVuKCd2aWV3VGFibGVzJykgdmlld1RhYmxlczogUXVlcnlMaXN0PFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+PjtcbiAgQElucHV0KCkgc2hvd1Rvb2xUaXA6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBkZXByZWNhdGVkLCB1c2Ugc2VsZWN0T2JqZWN0XG4gICAqL1xuICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8VD4+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RUb0ltcG9ydDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RPYmplY3Q6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PigpO1xuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PigpO1xuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fT4+KCk7XG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30+PigpO1xuICBAT3V0cHV0KCkgZHJvcDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9Pj4oKTtcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdENlbGw6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PigpO1xuICBAT3V0cHV0KCkgYm9va0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PigpO1xuICBAT3V0cHV0KCkgYWZ0ZXJWaWV3SW5pdDogRXZlbnRFbWl0dGVyPFJlc2l6ZVJlc3BvbnNlPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzaXplUmVzcG9uc2U+KCk7XG4gIHNlbGVjdGVkT2JqZWN0OiBFdmVudERlcGVuZGVuY3k8e30+ID0gbnVsbDtcblxuXG4gIC8qKlxuICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamUgZGVsIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIGhpZGVEZWxheTogbnVtYmVyID0gNjAwO1xuXG4gIC8qKlxuICAgKiBUaWVtcG8gYW50ZXMgZGUgbW9zdHJhIGVsIG1lbnNhamUgZGVsIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIHNob3dEZWxheTogbnVtYmVyID0gNTAwO1xuICBASW5wdXQoKSByZXNpemVDb25maWc6IFJlc2l6ZUNvbmZpZyA9IG5ldyBSZXNpemVDb25maWcoKTtcbiAgQElucHV0KCkgbW9kZUltcG9ydEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlOiBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlPFQ+LCBwcml2YXRlIHRhYmxlU2VydmljZTogVGFibGVIZWxpc2FTZXJ2aWNlPFQ+KSB7XG4gIH1cblxuICBnZXQgbW9kZUltcG9ydGluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZUltcG9ydEVuYWJsZWQ7XG4gIH1cblxuICBnZXQgcmVzaXppbmdDb25maWcoKTogUmVzaXplQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5yZXNpemVDb25maWc7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldFRhYmxlcygpO1xuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0TmV4dFBhZ2Uuc3Vic2NyaWJlKFxuICAgICAgKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VFtdPik6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5hZGRQYWdlKGV2ZW50LmRhdGEsIHRoaXMudmlld1RhYmxlcy50b0FycmF5KClbZXZlbnQuaW5kZXhdKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRUb3RhbC5zdWJzY3JpYmUoXG4gICAgICAoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUb3RhbFRhYmxlSGVsaXNhPik6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5zZXRUb3RhbChldmVudC5kYXRhLCB0aGlzLnZpZXdUYWJsZXNbZXZlbnQuaW5kZXhdKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBwYXJhIG1vc3RyYXIgbyBlc2NvbmRlciBlbCBib3RvbiBkZSB1bmEgdGFibGFcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFZpc2liaWxpdHlCdXR0b24uc3Vic2NyaWJlKFxuICAgICAgKGRhdGE6IEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoISFkYXRhICYmIGRhdGEuaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IHRhYmxlOiBDb25maWdUYWJsZTxUPiA9IHRoaXMudGFibGVzW2RhdGEuaW5kZXhdO1xuICAgICAgICAgIGlmICghIXRhYmxlKSB7XG4gICAgICAgICAgICB0YWJsZS5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGEuZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBwYXJhIGhhYmlsaXRhciBvIGRlc2hhYmlsaXRhciBlbCBib3TDs24geSBtb3N0cmFyIHRpdHVsb1xuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0RW5hYmxlZEJ1dHRvbi5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogRXZlbnREZXBlbmRlbmN5PHsgaXNEaXNhYmxlZDogYm9vbGVhbiwgdGV4dDogc3RyaW5nIH0+KTogdm9pZCA9PiB7XG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgdGFibGU6IENvbmZpZ1RhYmxlPFQ+ID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XG4gICAgICAgICAgaWYgKCEhdGFibGUpIHtcbiAgICAgICAgICAgIHRhYmxlLmFkZFJvd0J1dHRvbi5pc0Rpc2FibGVkID0gZGF0YS5kYXRhLmlzRGlzYWJsZWQ7XG4gICAgICAgICAgICB0YWJsZS5hZGRSb3dCdXR0b24udG9vbFRpcFRleHQgPSBkYXRhLmRhdGEudGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBwYXJhIG1vc3RyYXIgbyBlc2NvbmRlciBsb3MgYm90b25lcyBkZSB0b2RhcyBsYXMgdGFibGFzXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRWaXNpYmlsaXR5QWxsQnV0dG9ucy5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudGFibGVzLmZvckVhY2goKGVsZW1lbnQ6IENvbmZpZ1RhYmxlPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoISFlbGVtZW50LmFkZFJvd0J1dHRvbikge1xuICAgICAgICAgICAgICBlbGVtZW50LmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgbWFuZWpvIGRlIHNlbGVjY2nDs24gZGUgY2VsZGFzXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRJc0NlbGxTZWxlY3Rpb24uc3Vic2NyaWJlKFxuICAgICAgKGRhdGE6IEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoISFkYXRhICYmIGRhdGEuaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IHRhYmxlOiBDb25maWdUYWJsZTxUPiA9IHRoaXMudGFibGVzW2RhdGEuaW5kZXhdO1xuICAgICAgICAgIGlmICh0YWJsZSkge1xuICAgICAgICAgICAgdGFibGUuaXNDZWxsU2VsZWN0aW9uID0gZGF0YS5kYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgbWFuZWpvIGRlIGNvbHVtbmFzXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRDaGFuZ2VDb2x1bW5zLnN1YnNjcmliZShcbiAgICAgIChkYXRhOiBFdmVudERlcGVuZGVuY3k8Q29sdW1uQ29uZmlnW10+KTogdm9pZCA9PiB7XG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgdGFibGU6IENvbmZpZ1RhYmxlPFQ+ID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XG4gICAgICAgICAgaWYgKHRhYmxlKSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zID0gZGF0YS5kYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0b3JuYSBlbCBzZXJ2aWNpbyBxdWUgZ2VzdGlvbmEgZWwgY29tcG9uZW50ZS5cbiAgICovXG4gIGdldFNlcnZpY2UoKTogRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnRpZW5lIHVuIG9ic2VydmFibGUgY29uIGxhcyB0YWJsYXMgZGVwZW5kaWVudGVzIGRlc2RlIGVsIHNlcnZpY2lvLlxuICAgKi9cbiAgZ2V0VGFibGVzKCk6IHZvaWQge1xuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5nZXRUYWJsZXMoKVxuICAgICAgLnN1YnNjcmliZSgodGFibGVzOiBDb25maWdUYWJsZTxUPltdKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMudGFibGVzLnNwbGljZSgwLCB0aGlzLnRhYmxlcy5sZW5ndGgsIC4uLnRhYmxlcyk7XG4gICAgICAgIHRoaXMudmlld1RhYmxlcy5mb3JFYWNoKChpdGVtOiBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPik6IHZvaWQgPT4ge1xuICAgICAgICAgIGl0ZW0ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgc2VsZWNjaW9uYWRhXG4gICAqIEBwYXJhbSBkYXRhIHJldG9ybmEgbGEgZmlsYSBxdWUgZnVlIHNlbGVjY2lvbmFkYVxuICAgKi9cbiAgb25TZWxlY3RlZERlcGVuZGVuY3koaW5kZXg6IG51bWJlciwgZXZlbnQ6IFNlbGVjdE9iamVjdDxUPik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSB7IGluZGV4LCBkYXRhOiBldmVudCB9O1xuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudC52YWx1ZSB9KTtcbiAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xuICB9XG5cbiAgb25TZWxlY3RlZERlcGVuZGVuY3lJbXBvcnQoaW5kZXg6IG51bWJlciwgZXZlbnQ6IFNlbGVjdE9iamVjdDxUPik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0VG9JbXBvcnQuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxuICAgKi9cbiAgb25OZXh0UGFnZShpbmRleDogbnVtYmVyLCBldmVudDogUmVxdWVzdFRhYmxlSGVsaXNhPFQ+KTogdm9pZCB7XG4gICAgdGhpcy5uZXh0UGFnZS5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXG4gICAqL1xuICBvblRvdGFsKGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudENvbHVtbik6IHZvaWQge1xuICAgIHRoaXMudG90YWwuZW1pdCh7IGluZGV4LCBkYXRhOiBldmVudCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxuICAgKi9cbiAgb25Tb3J0KGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudENvbHVtbik6IHZvaWQge1xuICAgIHRoaXMuc29ydC5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXG4gICAqL1xuICBvbkRyb3AoaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUPik6IHZvaWQge1xuICAgIHRoaXMuZHJvcC5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRlIGVsIGluZGljZSBkZSBsYSB0YWJsYSBhbCBjdWFsIHNlIGxlIGRlYmUgYcOxYWRpciB1bmEgbnVldmEgZmlsYVxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBkZSBsYSBjdWFsIHNlIGRpc3BhcmEgZWwgZXZlbnRvXG4gICAqL1xuICBvbkFkZFJvdyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGRSb3cuZW1pdChpbmRleCk7XG4gIH1cblxuICBzZWxlY3RlZENlbGwoaW5kZXg6IG51bWJlciwgZXZlbnQ6IENlbGw8VD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWJsZXNbaW5kZXhdLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQoeyBpbmRleCwgZGF0YTogZXZlbnQgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Cb29rQ2xpY2tlZChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnREZXBlbmRlbmN5PFQ+KTogdm9pZCB7XG4gICAgdGhpcy5ib29rQ2xpY2tlZC5lbWl0KHsgaW5kZXgsIGRhdGE6IGV2ZW50IH0pO1xuICB9XG5cbiAgb25BZnRlclZpZXdJbml0VGFibGUocmVzaXplUmVzcG9uc2U6IFJlc2l6ZVJlc3BvbnNlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVzaXplQ29uZmlnLmVuYWJsZVJlc2l6ZSkge1xuICAgICAgdGhpcy5hZnRlclZpZXdJbml0LmVtaXQoe1xuICAgICAgICBxdWFudGl0eVRhYmxlOiB0aGlzLnRhYmxlcy5sZW5ndGgsXG4gICAgICAgIHV1aWQ6IHJlc2l6ZVJlc3BvbnNlLnV1aWRcbiAgICAgIH0gYXMgUmVzaXplUmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRhYmxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAvLyAgIGlmICh0aGlzLm1vZGVJbXBvcnRFbmFibGVkKSB7XG4gIC8vICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAvLyAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgLy8gICAgICAgLy8gdGhpcy5zZWxlY3RUb0ltcG9ydC5lbWl0KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRPYmplY3QsIHNjb3BlOiBFdmVudFNjb3BlLlVTRVIsIGtleUFjdGlvbkltcG9ydDogZXZlbnQua2V5IH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICBpZiAoIXRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gIC8vICAgICB0aGlzLmFycm93c0V2ZW50cyhldmVudCk7XG4gIC8vICAgfVxuICAvLyB9XG59XG4iXX0=