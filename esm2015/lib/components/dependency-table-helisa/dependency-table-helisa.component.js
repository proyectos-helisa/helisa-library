import { Component, EventEmitter, Output, ViewChildren, Input } from '@angular/core';
import { DependencyTableHelisaService } from './dependency-table-helisa.service';
import { TableHelisaService } from '../table-helisa/table-helisa.service';
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
        this.selectObject = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.total = new EventEmitter();
        this.sort = new EventEmitter();
        this.drop = new EventEmitter();
        this.addRow = new EventEmitter();
        this.selectCell = new EventEmitter();
        this.bookClicked = new EventEmitter();
        this.selectedObject = null;
        /**
         * Tiempo antes de ocultarla el mensaje del tooltip
         */
        this.hideDelay = 600;
        /**
         * Tiempo antes de mostra el mensaje del tooltip
         */
        this.showDelay = 500;
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
}
DependencyTableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-dependency-table',
                template: "<div>    \r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\"\r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (selectObject)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\r\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\r\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\" [configColumnClass]=\"table.configColumnClass\"\r\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\r\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\r\n    (bookClicked)=\"onBookClicked(i,$event)\"\r\n    [showToolTip]=\"showToolTip\"\r\n    [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\">\r\n  </hel-table>\r\n</div>\r\n",
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
    selectObject: [{ type: Output }],
    nextPage: [{ type: Output }],
    total: [{ type: Output }],
    sort: [{ type: Output }],
    drop: [{ type: Output }],
    addRow: [{ type: Output }],
    selectCell: [{ type: Output }],
    bookClicked: [{ type: Output }],
    hideDelay: [{ type: Input }],
    showDelay: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EvZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBYSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBQyw0QkFBNEIsRUFBYyxNQUFNLG1DQUFtQyxDQUFDO0FBRTVGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBY3hFLE1BQU0sT0FBTyw4QkFBOEI7SUFnQ3pDLFlBQW9CLDRCQUE2RCxFQUFVLFlBQW1DO1FBQTFHLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBaUM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUE5QjlILFdBQU0sR0FBMEIsRUFBRSxDQUFDO1FBRTFCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRXJDOztXQUVHO1FBQ08sYUFBUSxHQUFxQyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUNwRixpQkFBWSxHQUEwQyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUNsRyxhQUFRLEdBQTBDLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQzlGLFVBQUssR0FBMEMsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFDdkYsU0FBSSxHQUEwQyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQUN0RixTQUFJLEdBQTBDLElBQUksWUFBWSxFQUF1QixDQUFDO1FBQ3RGLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMxRCxlQUFVLEdBQTBDLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQ2hHLGdCQUFXLEdBQTBD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QUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYSxFQUFFLEtBQWM7UUFDeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYSxFQUFFLEtBQXlCO1FBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQXhNRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsOGhDQUF1RDtnQkFFdkQsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7O2FBQzFDOzs7WUFmTyw0QkFBNEI7WUFFNUIsa0JBQWtCOzs7eUJBaUJ2QixZQUFZLFNBQUMsWUFBWTswQkFDekIsS0FBSzt1QkFLTCxNQUFNOzJCQUNOLE1BQU07dUJBQ04sTUFBTTtvQkFDTixNQUFNO21CQUNOLE1BQU07bUJBQ04sTUFBTTtxQkFDTixNQUFNO3lCQUNOLE1BQU07MEJBQ04sTUFBTTt3QkFPTixLQUFLO3dCQUtMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLCBDb25maWdUYWJsZX0gZnJvbSAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHtDZWxsLCBDb2x1bW5Db25maWcsIEV2ZW50Q29sdW1uLCBSZXF1ZXN0VGFibGVIZWxpc2EsIFNlbGVjdE9iamVjdCwgVG90YWxUYWJsZUhlbGlzYX0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1RhYmxlSGVsaXNhU2VydmljZX0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHtUYWJsZUhlbGlzYUNvbXBvbmVudH0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudERlcGVuZGVuY3k8VD4ge1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgZGF0YTogVDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtZGVwZW5kZW5jeS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddLFxyXG4gIHByb3ZpZGVyczogW0RlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5VGFibGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB0YWJsZXM6IEFycmF5PENvbmZpZ1RhYmxlPFQ+PiA9IFtdO1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ3ZpZXdUYWJsZXMnKSB2aWV3VGFibGVzOiBRdWVyeUxpc3Q8VGFibGVIZWxpc2FDb21wb25lbnQ8VD4+O1xyXG4gIEBJbnB1dCgpIHNob3dUb29sVGlwOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogZGVwcmVjYXRlZCwgdXNlIHNlbGVjdE9iamVjdFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTxUPj4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcclxuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PigpO1xyXG4gIEBPdXRwdXQoKSB0b3RhbDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9Pj4oKTtcclxuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9Pj4oKTtcclxuICBAT3V0cHV0KCkgZHJvcDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9Pj4oKTtcclxuICBAT3V0cHV0KCkgYWRkUm93OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RDZWxsOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcclxuICBAT3V0cHV0KCkgYm9va0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PigpO1xyXG4gIHNlbGVjdGVkT2JqZWN0OiBFdmVudERlcGVuZGVuY3k8e30+ID0gbnVsbDtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFRpZW1wbyBhbnRlcyBkZSBvY3VsdGFybGEgZWwgbWVuc2FqZSBkZWwgdG9vbHRpcFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGhpZGVEZWxheTogbnVtYmVyID0gNjAwO1xyXG5cclxuICAvKipcclxuICAgKiBUaWVtcG8gYW50ZXMgZGUgbW9zdHJhIGVsIG1lbnNhamUgZGVsIHRvb2x0aXBcclxuICAgKi9cclxuICBASW5wdXQoKSBzaG93RGVsYXk6IG51bWJlciA9IDUwMDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTogRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTxUPiwgcHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlSGVsaXNhU2VydmljZTxUPikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldFRhYmxlcygpO1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXROZXh0UGFnZS5zdWJzY3JpYmUoXHJcbiAgICAgIChldmVudDogRXZlbnREZXBlbmRlbmN5PFRbXT4pOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5hZGRQYWdlKGV2ZW50LmRhdGEsIHRoaXMudmlld1RhYmxlcy50b0FycmF5KClbZXZlbnQuaW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFRvdGFsLnN1YnNjcmliZShcclxuICAgICAgKGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VG90YWxUYWJsZUhlbGlzYT4pOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5zZXRUb3RhbChldmVudC5kYXRhLCB0aGlzLnZpZXdUYWJsZXNbZXZlbnQuaW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgbW9zdHJhciBvIGVzY29uZGVyIGVsIGJvdG9uIGRlIHVuYSB0YWJsYVxyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRWaXNpYmlsaXR5QnV0dG9uLnN1YnNjcmliZShcclxuICAgICAgKGRhdGE6IEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjb25zdCB0YWJsZTogQ29uZmlnVGFibGU8VD4gPSB0aGlzLnRhYmxlc1tkYXRhLmluZGV4XTtcclxuICAgICAgICAgIGlmICghIXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgaGFiaWxpdGFyIG8gZGVzaGFiaWxpdGFyIGVsIGJvdMOzbiB5IG1vc3RyYXIgdGl0dWxvXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdEVuYWJsZWRCdXR0b24uc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YTogRXZlbnREZXBlbmRlbmN5PHtpc0Rpc2FibGVkOiBib29sZWFuLCB0ZXh0OiBzdHJpbmd9Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjb25zdCB0YWJsZTogQ29uZmlnVGFibGU8VD4gPSB0aGlzLnRhYmxlc1tkYXRhLmluZGV4XTtcclxuICAgICAgICAgIGlmICghIXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmFkZFJvd0J1dHRvbi5pc0Rpc2FibGVkID0gZGF0YS5kYXRhLmlzRGlzYWJsZWQ7XHJcbiAgICAgICAgICAgIHRhYmxlLmFkZFJvd0J1dHRvbi50b29sVGlwVGV4dCA9IGRhdGEuZGF0YS50ZXh0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgbW9zdHJhciBvIGVzY29uZGVyIGxvcyBib3RvbmVzIGRlIHRvZGFzIGxhcyB0YWJsYXNcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VmlzaWJpbGl0eUFsbEJ1dHRvbnMuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YTogYm9vbGVhbik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLnRhYmxlcy5mb3JFYWNoKChlbGVtZW50OiBDb25maWdUYWJsZTxUPik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoISFlbGVtZW50LmFkZFJvd0J1dHRvbikge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQuYWRkUm93QnV0dG9uLnNob3dCdXR0b24gPSBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBwYXJhIG1hbmVqbyBkZSBzZWxlY2Npw7NuIGRlIGNlbGRhc1xyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRJc0NlbGxTZWxlY3Rpb24uc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YTogRXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHRhYmxlOiBDb25maWdUYWJsZTxUPiA9IHRoaXMudGFibGVzW2RhdGEuaW5kZXhdO1xyXG4gICAgICAgICAgaWYgKHRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmlzQ2VsbFNlbGVjdGlvbiA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUgcGFyYSBtYW5lam8gZGUgY29sdW1uYXNcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0Q2hhbmdlQ29sdW1ucy5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhOiBFdmVudERlcGVuZGVuY3k8Q29sdW1uQ29uZmlnW10+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHRhYmxlOiBDb25maWdUYWJsZTxUPiA9IHRoaXMudGFibGVzW2RhdGEuaW5kZXhdO1xyXG4gICAgICAgICAgaWYgKHRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldG9ybmEgZWwgc2VydmljaW8gcXVlIGdlc3Rpb25hIGVsIGNvbXBvbmVudGUuXHJcbiAgICovXHJcbiAgZ2V0U2VydmljZSgpOiBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPYnRpZW5lIHVuIG9ic2VydmFibGUgY29uIGxhcyB0YWJsYXMgZGVwZW5kaWVudGVzIGRlc2RlIGVsIHNlcnZpY2lvLlxyXG4gICAqL1xyXG4gIGdldFRhYmxlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5nZXRUYWJsZXMoKVxyXG4gICAgICAuc3Vic2NyaWJlKCh0YWJsZXM6IENvbmZpZ1RhYmxlPFQ+W10pOiB2b2lkID0+IHtcclxuICAgICAgICAgIHRoaXMudGFibGVzLnNwbGljZSgwLCB0aGlzLnRhYmxlcy5sZW5ndGgsIC4uLnRhYmxlcyk7XHJcbiAgICAgICAgICB0aGlzLnZpZXdUYWJsZXMuZm9yRWFjaCgoaXRlbTogVGFibGVIZWxpc2FDb21wb25lbnQ8VD4pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgaXRlbS5yZWxvYWQoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHNlbGVjY2lvbmFkYVxyXG4gICAqIEBwYXJhbSBkYXRhIHJldG9ybmEgbGEgZmlsYSBxdWUgZnVlIHNlbGVjY2lvbmFkYVxyXG4gICAqL1xyXG4gIG9uU2VsZWN0ZWREZXBlbmRlbmN5KGluZGV4OiBudW1iZXIsIGV2ZW50OiBTZWxlY3RPYmplY3Q8VD4pOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSB7aW5kZXgsIGRhdGE6IGV2ZW50fTtcclxuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh7aW5kZXgsIGRhdGE6IGV2ZW50LnZhbHVlfSk7XHJcbiAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHtpbmRleCwgZGF0YTogZXZlbnR9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uTmV4dFBhZ2UoaW5kZXg6IG51bWJlciwgZXZlbnQ6IFJlcXVlc3RUYWJsZUhlbGlzYTxUPik6IHZvaWQge1xyXG4gICAgdGhpcy5uZXh0UGFnZS5lbWl0KHtpbmRleCwgZGF0YTogZXZlbnR9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uVG90YWwoaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50Q29sdW1uKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdGFsLmVtaXQoe2luZGV4LCBkYXRhOiBldmVudH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25Tb3J0KGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudENvbHVtbik6IHZvaWQge1xyXG4gICAgdGhpcy5zb3J0LmVtaXQoe2luZGV4LCBkYXRhOiBldmVudH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXHJcbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgcXVlIGdlbmVyYSBlbCBldmVudG9cclxuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXHJcbiAgICovXHJcbiAgb25Ecm9wKGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudERlcGVuZGVuY3k8VD4pOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcC5lbWl0KHtpbmRleCwgZGF0YTogZXZlbnR9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRlIGVsIGluZGljZSBkZSBsYSB0YWJsYSBhbCBjdWFsIHNlIGxlIGRlYmUgYcOxYWRpciB1bmEgbnVldmEgZmlsYVxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIGRlIGxhIGN1YWwgc2UgZGlzcGFyYSBlbCBldmVudG9cclxuICAgKi9cclxuICBvbkFkZFJvdyhpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkZFJvdy5lbWl0KGluZGV4KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdGVkQ2VsbChpbmRleDogbnVtYmVyLCBldmVudDogQ2VsbDxUPik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGFibGVzW2luZGV4XS5pc0NlbGxTZWxlY3Rpb24pIHtcclxuICAgICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQoe2luZGV4LCBkYXRhOiBldmVudH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Cb29rQ2xpY2tlZChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnREZXBlbmRlbmN5PFQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLmJvb2tDbGlja2VkLmVtaXQoe2luZGV4LCBkYXRhOiBldmVudH0pO1xyXG4gIH1cclxufVxyXG4iXX0=