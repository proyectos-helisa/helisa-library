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
                template: "<div>    \r\n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\"\r\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\r\n    (selectObject)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\r\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\r\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\"\r\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\r\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\r\n    (bookClicked)=\"onBookClicked(i,$event)\"\r\n    [showToolTip]=\"showToolTip\"\r\n    [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\">\r\n  </hel-table>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EvZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBYSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBQyw0QkFBNEIsRUFBYyxNQUFNLG1DQUFtQyxDQUFDO0FBRTVGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBY3hFLE1BQU0sT0FBTyw4QkFBOEI7SUFnQ3pDLFlBQW9CLDRCQUE2RCxFQUFVLFlBQW1DO1FBQTFHLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBaUM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUE5QjlILFdBQU0sR0FBMEIsRUFBRSxDQUFDO1FBRTFCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRXJDOztXQUVHO1FBQ08sYUFBUSxHQUFxQyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUNwRixpQkFBWSxHQUEwQyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUNsRyxhQUFRLEdBQTBDLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQzlGLFVBQUssR0FBMEMsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFDdkYsU0FBSSxHQUEwQyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQUN0RixTQUFJLEdBQTBDLElBQUksWUFBWSxFQUF1QixDQUFDO1FBQ3RGLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMxRCxlQUFVLEdBQTBDLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQ2hHLGdCQUFXLEdBQTBDLElBQUksWUFB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OzthQUMxQzs7O1lBZk8sNEJBQTRCO1lBRTVCLGtCQUFrQjs7O3lCQWlCdkIsWUFBWSxTQUFDLFlBQVk7MEJBQ3pCLEtBQUs7dUJBS0wsTUFBTTsyQkFDTixNQUFNO3VCQUNOLE1BQU07b0JBQ04sTUFBTTttQkFDTixNQUFNO21CQUNOLE1BQU07cUJBQ04sTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU07d0JBT04sS0FBSzt3QkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSwgQ29uZmlnVGFibGV9IGZyb20gJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7Q2VsbCwgQ29sdW1uQ29uZmlnLCBFdmVudENvbHVtbiwgUmVxdWVzdFRhYmxlSGVsaXNhLCBTZWxlY3RPYmplY3QsIFRvdGFsVGFibGVIZWxpc2F9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtUYWJsZUhlbGlzYVNlcnZpY2V9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7VGFibGVIZWxpc2FDb21wb25lbnR9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnREZXBlbmRlbmN5PFQ+IHtcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIGRhdGE6IFQ7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWRlcGVuZGVuY3ktdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXSxcclxuICBwcm92aWRlcnM6IFtEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeVRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdGFibGVzOiBBcnJheTxDb25maWdUYWJsZTxUPj4gPSBbXTtcclxuICBAVmlld0NoaWxkcmVuKCd2aWV3VGFibGVzJykgdmlld1RhYmxlczogUXVlcnlMaXN0PFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+PjtcclxuICBASW5wdXQoKSBzaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlcHJlY2F0ZWQsIHVzZSBzZWxlY3RPYmplY3RcclxuICAgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8VD4+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdE9iamVjdDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+KCk7XHJcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcclxuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fT4+KCk7XHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fT4+KCk7XHJcbiAgQE91dHB1dCgpIGRyb3A6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fT4+KCk7XHJcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0Q2VsbDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+KCk7XHJcbiAgQE91dHB1dCgpIGJvb2tDbGlja2VkOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcclxuICBzZWxlY3RlZE9iamVjdDogRXZlbnREZXBlbmRlbmN5PHt9PiA9IG51bGw7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamUgZGVsIHRvb2x0aXBcclxuICAgKi9cclxuICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U6IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U8VD4sIHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8VD4pIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXRUYWJsZXMoKTtcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0TmV4dFBhZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUW10+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2UuYWRkUGFnZShldmVudC5kYXRhLCB0aGlzLnZpZXdUYWJsZXMudG9BcnJheSgpW2V2ZW50LmluZGV4XSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXRUb3RhbC5zdWJzY3JpYmUoXHJcbiAgICAgIChldmVudDogRXZlbnREZXBlbmRlbmN5PFRvdGFsVGFibGVIZWxpc2E+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uuc2V0VG90YWwoZXZlbnQuZGF0YSwgdGhpcy52aWV3VGFibGVzW2V2ZW50LmluZGV4XSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBwYXJhIG1vc3RyYXIgbyBlc2NvbmRlciBlbCBib3RvbiBkZSB1bmEgdGFibGFcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VmlzaWJpbGl0eUJ1dHRvbi5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhOiBFdmVudERlcGVuZGVuY3k8Ym9vbGVhbj4pOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAoISFkYXRhICYmIGRhdGEuaW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29uc3QgdGFibGU6IENvbmZpZ1RhYmxlPFQ+ID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XHJcbiAgICAgICAgICBpZiAoISF0YWJsZSkge1xyXG4gICAgICAgICAgICB0YWJsZS5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBwYXJhIG1vc3RyYXIgbyBlc2NvbmRlciBsb3MgYm90b25lcyBkZSB0b2RhcyBsYXMgdGFibGFzXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zLnN1YnNjcmliZShcclxuICAgICAgKGRhdGE6IGJvb2xlYW4pOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy50YWJsZXMuZm9yRWFjaCgoZWxlbWVudDogQ29uZmlnVGFibGU8VD4pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgaWYgKCEhZWxlbWVudC5hZGRSb3dCdXR0b24pIHtcclxuICAgICAgICAgICAgICBlbGVtZW50LmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUgcGFyYSBtYW5lam8gZGUgc2VsZWNjacOzbiBkZSBjZWxkYXNcclxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0SXNDZWxsU2VsZWN0aW9uLnN1YnNjcmliZShcclxuICAgICAgKGRhdGE6IEV2ZW50RGVwZW5kZW5jeTxib29sZWFuPik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjb25zdCB0YWJsZTogQ29uZmlnVGFibGU8VD4gPSB0aGlzLnRhYmxlc1tkYXRhLmluZGV4XTtcclxuICAgICAgICAgIGlmICh0YWJsZSkge1xyXG4gICAgICAgICAgICB0YWJsZS5pc0NlbGxTZWxlY3Rpb24gPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgbWFuZWpvIGRlIGNvbHVtbmFzXHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdENoYW5nZUNvbHVtbnMuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YTogRXZlbnREZXBlbmRlbmN5PENvbHVtbkNvbmZpZ1tdPik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjb25zdCB0YWJsZTogQ29uZmlnVGFibGU8VD4gPSB0aGlzLnRhYmxlc1tkYXRhLmluZGV4XTtcclxuICAgICAgICAgIGlmICh0YWJsZSkge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXRvcm5hIGVsIHNlcnZpY2lvIHF1ZSBnZXN0aW9uYSBlbCBjb21wb25lbnRlLlxyXG4gICAqL1xyXG4gIGdldFNlcnZpY2UoKTogRGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT2J0aWVuZSB1biBvYnNlcnZhYmxlIGNvbiBsYXMgdGFibGFzIGRlcGVuZGllbnRlcyBkZXNkZSBlbCBzZXJ2aWNpby5cclxuICAgKi9cclxuICBnZXRUYWJsZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZ2V0VGFibGVzKClcclxuICAgICAgLnN1YnNjcmliZSgodGFibGVzOiBDb25maWdUYWJsZTxUPltdKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRhYmxlcy5zcGxpY2UoMCwgdGhpcy50YWJsZXMubGVuZ3RoLCAuLi50YWJsZXMpO1xyXG4gICAgICAgICAgdGhpcy52aWV3VGFibGVzLmZvckVhY2goKGl0ZW06IFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVsb2FkKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBzZWxlY2Npb25hZGFcclxuICAgKiBAcGFyYW0gZGF0YSByZXRvcm5hIGxhIGZpbGEgcXVlIGZ1ZSBzZWxlY2Npb25hZGFcclxuICAgKi9cclxuICBvblNlbGVjdGVkRGVwZW5kZW5jeShpbmRleDogbnVtYmVyLCBldmVudDogU2VsZWN0T2JqZWN0PFQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0ge2luZGV4LCBkYXRhOiBldmVudH07XHJcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQoe2luZGV4LCBkYXRhOiBldmVudC52YWx1ZX0pO1xyXG4gICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7aW5kZXgsIGRhdGE6IGV2ZW50fSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvbk5leHRQYWdlKGluZGV4OiBudW1iZXIsIGV2ZW50OiBSZXF1ZXN0VGFibGVIZWxpc2E8VD4pOiB2b2lkIHtcclxuICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7aW5kZXgsIGRhdGE6IGV2ZW50fSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xyXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcclxuICAgKi9cclxuICBvblRvdGFsKGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudENvbHVtbik6IHZvaWQge1xyXG4gICAgdGhpcy50b3RhbC5lbWl0KHtpbmRleCwgZGF0YTogZXZlbnR9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uU29ydChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnRDb2x1bW4pOiB2b2lkIHtcclxuICAgIHRoaXMuc29ydC5lbWl0KHtpbmRleCwgZGF0YTogZXZlbnR9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxyXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXHJcbiAgICogQHBhcmFtIGV2ZW50IGV2ZW50byBnZW5lcmFkbyBkZXNkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIG9uRHJvcChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnREZXBlbmRlbmN5PFQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3AuZW1pdCh7aW5kZXgsIGRhdGE6IGV2ZW50fSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0ZSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgYWwgY3VhbCBzZSBsZSBkZWJlIGHDsWFkaXIgdW5hIG51ZXZhIGZpbGFcclxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBkZSBsYSBjdWFsIHNlIGRpc3BhcmEgZWwgZXZlbnRvXHJcbiAgICovXHJcbiAgb25BZGRSb3coaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hZGRSb3cuZW1pdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZENlbGwoaW5kZXg6IG51bWJlciwgZXZlbnQ6IENlbGw8VD4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhYmxlc1tpbmRleF0uaXNDZWxsU2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHtpbmRleCwgZGF0YTogZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQm9va0NsaWNrZWQoaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUPik6IHZvaWQge1xyXG4gICAgdGhpcy5ib29rQ2xpY2tlZC5lbWl0KHtpbmRleCwgZGF0YTogZXZlbnR9KTtcclxuICB9XHJcbn1cclxuIl19