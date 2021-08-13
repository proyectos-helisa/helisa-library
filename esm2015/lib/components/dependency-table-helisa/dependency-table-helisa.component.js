import { Component, EventEmitter, Output, ViewChildren, Input } from '@angular/core';
import { DependencyTableHelisaService } from './dependency-table-helisa.service';
import { TableHelisaService } from '../table-helisa/table-helisa.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './dependency-table-helisa.service';
import * as ɵngcc2 from '../table-helisa/table-helisa.service';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '../table-helisa/table-helisa.component';

const _c0 = ["viewTables"];
function DependencyTableHelisaComponent_hel_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "hel-table", 1, 2);
    ɵngcc0.ɵɵlistener("selectObject", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_selectObject_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onSelectedDependency(i_r2, $event); })("nextPage", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_nextPage_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onNextPage(i_r2, $event); })("total", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_total_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onTotal(i_r2, $event); })("sort", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_sort_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onSort(i_r2, $event); })("drop", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onDrop(i_r2, $event); })("addRow", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_addRow_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onAddRow(i_r2); })("selectCell", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_selectCell_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.selectedCell(i_r2, $event); })("bookClicked", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_bookClicked_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onBookClicked(i_r2, $event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("dataSource", table_r1.dataSource)("columnConfiguration", table_r1.columns)("isRemote", table_r1.isRemote)("count", table_r1.count)("selectedIndexRow", table_r1.indexRowSelect)("isDragged", table_r1.isDragged)("addRowButton", table_r1.addRowButton)("configRowStylesFromColumn", table_r1.configRowStylesFromColumn)("configColumnClass", table_r1.configColumnClass)("isCellSelection", table_r1.isCellSelection)("addBookButton", table_r1.addBookButton != null ? table_r1.addBookButton : false)("showToolTip", ctx_r0.showToolTip)("hideDelay", ctx_r0.hideDelay)("showDelay", ctx_r0.showDelay);
} }
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
DependencyTableHelisaComponent.ɵfac = function DependencyTableHelisaComponent_Factory(t) { return new (t || DependencyTableHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DependencyTableHelisaService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TableHelisaService)); };
DependencyTableHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DependencyTableHelisaComponent, selectors: [["hel-dependency-table"]], viewQuery: function DependencyTableHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewTables = _t);
    } }, inputs: { showToolTip: "showToolTip", hideDelay: "hideDelay", showDelay: "showDelay" }, outputs: { selected: "selected", selectObject: "selectObject", nextPage: "nextPage", total: "total", sort: "sort", drop: "drop", addRow: "addRow", selectCell: "selectCell", bookClicked: "bookClicked" }, features: [ɵngcc0.ɵɵProvidersFeature([DependencyTableHelisaService])], decls: 2, vars: 1, consts: [["class", "table-test", 3, "dataSource", "columnConfiguration", "isRemote", "count", "selectedIndexRow", "isDragged", "addRowButton", "configRowStylesFromColumn", "configColumnClass", "isCellSelection", "addBookButton", "showToolTip", "hideDelay", "showDelay", "selectObject", "nextPage", "total", "sort", "drop", "addRow", "selectCell", "bookClicked", 4, "ngFor", "ngForOf"], [1, "table-test", 3, "dataSource", "columnConfiguration", "isRemote", "count", "selectedIndexRow", "isDragged", "addRowButton", "configRowStylesFromColumn", "configColumnClass", "isCellSelection", "addBookButton", "showToolTip", "hideDelay", "showDelay", "selectObject", "nextPage", "total", "sort", "drop", "addRow", "selectCell", "bookClicked"], ["viewTables", ""]], template: function DependencyTableHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, DependencyTableHelisaComponent_hel_table_1_Template, 2, 14, "hel-table", 0);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tables);
    } }, directives: [ɵngcc3.NgForOf, ɵngcc4.TableHelisaComponent], styles: [""] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DependencyTableHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-dependency-table',
                template: "<div>    \n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\"\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\n    (selectObject)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\" [configColumnClass]=\"table.configColumnClass\"\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\n    (bookClicked)=\"onBookClicked(i,$event)\"\n    [showToolTip]=\"showToolTip\"\n    [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\">\n  </hel-table>\n</div>\n",
                providers: [DependencyTableHelisaService],
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc1.DependencyTableHelisaService }, { type: ɵngcc2.TableHelisaService }]; }, { showToolTip: [{
            type: Input
        }], selected: [{
            type: Output
        }], selectObject: [{
            type: Output
        }], nextPage: [{
            type: Output
        }], total: [{
            type: Output
        }], sort: [{
            type: Output
        }], drop: [{
            type: Output
        }], addRow: [{
            type: Output
        }], selectCell: [{
            type: Output
        }], bookClicked: [{
            type: Output
        }], hideDelay: [{
            type: Input
        }], showDelay: [{
            type: Input
        }], viewTables: [{
            type: ViewChildren,
            args: ['viewTables']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy9saWIvY29tcG9uZW50cy9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFhLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFDLDRCQUE0QixFQUFjLE1BQU0sbUNBQW1DLENBQUM7QUFFNUYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN4RSxNQUFNLE9BQU8sOEJBQThCO0FBQUcsSUFnQzVDLFlBQW9CLDRCQUE2RCxFQUFVLFlBQW1DO0FBQ2hJLFFBRHNCLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBaUM7QUFBQyxRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtBQUFDLFFBOUIvSCxXQUFNLEdBQTBCLEVBQUUsQ0FBQztBQUNyQyxRQUNXLGdCQUFXLEdBQVksSUFBSSxDQUFDO0FBQ3ZDLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFZLGFBQVEsR0FBcUMsSUFBSSxZQUFZLEVBQXNCLENBQUM7QUFDaEcsUUFBWSxpQkFBWSxHQUEwQyxJQUFJLFlBQVksRUFBMkIsQ0FBQztBQUM5RyxRQUFZLGFBQVEsR0FBMEMsSUFBSSxZQUFZLEVBQTJCLENBQUM7QUFDMUcsUUFBWSxVQUFLLEdBQTBDLElBQUksWUFBWSxFQUF1QixDQUFDO0FBQ25HLFFBQVksU0FBSSxHQUEwQyxJQUFJLFlBQVksRUFBdUIsQ0FBQztBQUNsRyxRQUFZLFNBQUksR0FBMEMsSUFBSSxZQUFZLEVBQXVCLENBQUM7QUFDbEcsUUFBWSxXQUFNLEdBQXlCLElBQUksWUFB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QUssb0JBQ1gsTUFBTTtBQUFLLG1CQUNYLE1BQU07QUFBSyxtQkFDWCxNQUFNO0FBQUsscUJBQ1gsTUFBTTtBQUFLLHlCQUNYLE1BQU07QUFBSywwQkFDWCxNQUFNO0FBQUssd0JBT1gsS0FBSztBQUFLLHdCQUtWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZSwgQ29uZmlnVGFibGV9IGZyb20gJy4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2Euc2VydmljZSc7XG5pbXBvcnQge0NlbGwsIENvbHVtbkNvbmZpZywgRXZlbnRDb2x1bW4sIFJlcXVlc3RUYWJsZUhlbGlzYSwgU2VsZWN0T2JqZWN0LCBUb3RhbFRhYmxlSGVsaXNhfSBmcm9tICcuLi90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XG5pbXBvcnQge1RhYmxlSGVsaXNhU2VydmljZX0gZnJvbSAnLi4vdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcbmltcG9ydCB7VGFibGVIZWxpc2FDb21wb25lbnR9IGZyb20gJy4uL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudERlcGVuZGVuY3k8VD4ge1xuICBpbmRleDogbnVtYmVyO1xuICBkYXRhOiBUO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtZGVwZW5kZW5jeS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXBlbmRlbmN5LXRhYmxlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RlcGVuZGVuY3ktdGFibGUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ10sXG4gIHByb3ZpZGVyczogW0RlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY3lUYWJsZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGFibGVzOiBBcnJheTxDb25maWdUYWJsZTxUPj4gPSBbXTtcbiAgQFZpZXdDaGlsZHJlbigndmlld1RhYmxlcycpIHZpZXdUYWJsZXM6IFF1ZXJ5TGlzdDxUYWJsZUhlbGlzYUNvbXBvbmVudDxUPj47XG4gIEBJbnB1dCgpIHNob3dUb29sVGlwOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogZGVwcmVjYXRlZCwgdXNlIHNlbGVjdE9iamVjdFxuICAgKi9cbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PFQ+PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcbiAgQE91dHB1dCgpIHRvdGFsOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30+PigpO1xuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fSB8IFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9Pj4oKTtcbiAgQE91dHB1dCgpIGRyb3A6IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGVwZW5kZW5jeTx7fT4+KCk7XG4gIEBPdXRwdXQoKSBhZGRSb3c6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RDZWxsOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcbiAgQE91dHB1dCgpIGJvb2tDbGlja2VkOiBFdmVudEVtaXR0ZXI8RXZlbnREZXBlbmRlbmN5PHt9IHwgVD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERlcGVuZGVuY3k8e30gfCBUPj4oKTtcbiAgc2VsZWN0ZWRPYmplY3Q6IEV2ZW50RGVwZW5kZW5jeTx7fT4gPSBudWxsO1xuXG5cbiAgLyoqXG4gICAqIFRpZW1wbyBhbnRlcyBkZSBvY3VsdGFybGEgZWwgbWVuc2FqZSBkZWwgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgaGlkZURlbGF5OiBudW1iZXIgPSA2MDA7XG5cbiAgLyoqXG4gICAqIFRpZW1wbyBhbnRlcyBkZSBtb3N0cmEgZWwgbWVuc2FqZSBkZWwgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U6IERlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2U8VD4sIHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8VD4pIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0VGFibGVzKCk7XG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmVtaXROZXh0UGFnZS5zdWJzY3JpYmUoXG4gICAgICAoZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUW10+KTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLmFkZFBhZ2UoZXZlbnQuZGF0YSwgdGhpcy52aWV3VGFibGVzLnRvQXJyYXkoKVtldmVudC5pbmRleF0pO1xuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFRvdGFsLnN1YnNjcmliZShcbiAgICAgIChldmVudDogRXZlbnREZXBlbmRlbmN5PFRvdGFsVGFibGVIZWxpc2E+KTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLnNldFRvdGFsKGV2ZW50LmRhdGEsIHRoaXMudmlld1RhYmxlc1tldmVudC5pbmRleF0pO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgbW9zdHJhciBvIGVzY29uZGVyIGVsIGJvdG9uIGRlIHVuYSB0YWJsYVxuICAgIHRoaXMuZGVwZW5kZW5jeVRhYmxlSGVsaXNhU2VydmljZS5lbWl0VmlzaWJpbGl0eUJ1dHRvbi5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogRXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+KTogdm9pZCA9PiB7XG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgdGFibGU6IENvbmZpZ1RhYmxlPFQ+ID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XG4gICAgICAgICAgaWYgKCEhdGFibGUpIHtcbiAgICAgICAgICAgIHRhYmxlLmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YS5kYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHBhcmEgbW9zdHJhciBvIGVzY29uZGVyIGxvcyBib3RvbmVzIGRlIHRvZGFzIGxhcyB0YWJsYXNcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdFZpc2liaWxpdHlBbGxCdXR0b25zLnN1YnNjcmliZShcbiAgICAgIChkYXRhOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50YWJsZXMuZm9yRWFjaCgoZWxlbWVudDogQ29uZmlnVGFibGU8VD4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmICghIWVsZW1lbnQuYWRkUm93QnV0dG9uKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuYWRkUm93QnV0dG9uLnNob3dCdXR0b24gPSBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIE9ic2VydmFibGUgcGFyYSBtYW5lam8gZGUgc2VsZWNjacOzbiBkZSBjZWxkYXNcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdElzQ2VsbFNlbGVjdGlvbi5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogRXZlbnREZXBlbmRlbmN5PGJvb2xlYW4+KTogdm9pZCA9PiB7XG4gICAgICAgIGlmICghIWRhdGEgJiYgZGF0YS5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgdGFibGU6IENvbmZpZ1RhYmxlPFQ+ID0gdGhpcy50YWJsZXNbZGF0YS5pbmRleF07XG4gICAgICAgICAgaWYgKHRhYmxlKSB7XG4gICAgICAgICAgICB0YWJsZS5pc0NlbGxTZWxlY3Rpb24gPSBkYXRhLmRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIC8vIE9ic2VydmFibGUgcGFyYSBtYW5lam8gZGUgY29sdW1uYXNcbiAgICB0aGlzLmRlcGVuZGVuY3lUYWJsZUhlbGlzYVNlcnZpY2UuZW1pdENoYW5nZUNvbHVtbnMuc3Vic2NyaWJlKFxuICAgICAgKGRhdGE6IEV2ZW50RGVwZW5kZW5jeTxDb2x1bW5Db25maWdbXT4pOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKCEhZGF0YSAmJiBkYXRhLmluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCB0YWJsZTogQ29uZmlnVGFibGU8VD4gPSB0aGlzLnRhYmxlc1tkYXRhLmluZGV4XTtcbiAgICAgICAgICBpZiAodGFibGUpIHtcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXRvcm5hIGVsIHNlcnZpY2lvIHF1ZSBnZXN0aW9uYSBlbCBjb21wb25lbnRlLlxuICAgKi9cbiAgZ2V0U2VydmljZSgpOiBEZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE9idGllbmUgdW4gb2JzZXJ2YWJsZSBjb24gbGFzIHRhYmxhcyBkZXBlbmRpZW50ZXMgZGVzZGUgZWwgc2VydmljaW8uXG4gICAqL1xuICBnZXRUYWJsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5kZXBlbmRlbmN5VGFibGVIZWxpc2FTZXJ2aWNlLmdldFRhYmxlcygpXG4gICAgICAuc3Vic2NyaWJlKCh0YWJsZXM6IENvbmZpZ1RhYmxlPFQ+W10pOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLnRhYmxlcy5zcGxpY2UoMCwgdGhpcy50YWJsZXMubGVuZ3RoLCAuLi50YWJsZXMpO1xuICAgICAgICAgIHRoaXMudmlld1RhYmxlcy5mb3JFYWNoKChpdGVtOiBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaXRlbS5yZWxvYWQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgZGVzZGUgdW5hIHRhYmxhLCBlbWl0aWVuZG8gdW4gbnVldm8gZXZlbnRvIGNvbiBlbCBpbmlkaWNlIGRlIGxhIHRhYmxhIHF1ZSBkaXNwYXJhIGVsIGV2ZW50byB5IGVsIGV2ZW50byBnZW5lcmFkby5cbiAgICogQHBhcmFtIGluZGV4IGluZGljYSBlbCBpbmRpY2UgZGUgbGEgdGFibGEgc2VsZWNjaW9uYWRhXG4gICAqIEBwYXJhbSBkYXRhIHJldG9ybmEgbGEgZmlsYSBxdWUgZnVlIHNlbGVjY2lvbmFkYVxuICAgKi9cbiAgb25TZWxlY3RlZERlcGVuZGVuY3koaW5kZXg6IG51bWJlciwgZXZlbnQ6IFNlbGVjdE9iamVjdDxUPik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSB7aW5kZXgsIGRhdGE6IGV2ZW50fTtcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQoe2luZGV4LCBkYXRhOiBldmVudC52YWx1ZX0pO1xuICAgIHRoaXMuc2VsZWN0T2JqZWN0LmVtaXQoe2luZGV4LCBkYXRhOiBldmVudH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXG4gICAqL1xuICBvbk5leHRQYWdlKGluZGV4OiBudW1iZXIsIGV2ZW50OiBSZXF1ZXN0VGFibGVIZWxpc2E8VD4pOiB2b2lkIHtcbiAgICB0aGlzLm5leHRQYWdlLmVtaXQoe2luZGV4LCBkYXRhOiBldmVudH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRpZW5kbyB1biBudWV2byBldmVudG8gY29uIGVsIGluaWRpY2UgZGUgbGEgdGFibGEgcXVlIGRpc3BhcmEgZWwgZXZlbnRvIHkgZWwgZXZlbnRvIGdlbmVyYWRvLlxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBxdWUgZ2VuZXJhIGVsIGV2ZW50b1xuICAgKiBAcGFyYW0gZXZlbnQgZXZlbnRvIGdlbmVyYWRvIGRlc2RlIGxhIHRhYmxhXG4gICAqL1xuICBvblRvdGFsKGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudENvbHVtbik6IHZvaWQge1xuICAgIHRoaXMudG90YWwuZW1pdCh7aW5kZXgsIGRhdGE6IGV2ZW50fSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcbiAgICovXG4gIG9uU29ydChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnRDb2x1bW4pOiB2b2lkIHtcbiAgICB0aGlzLnNvcnQuZW1pdCh7aW5kZXgsIGRhdGE6IGV2ZW50fSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGRlc2RlIHVuYSB0YWJsYSwgZW1pdGllbmRvIHVuIG51ZXZvIGV2ZW50byBjb24gZWwgaW5pZGljZSBkZSBsYSB0YWJsYSBxdWUgZGlzcGFyYSBlbCBldmVudG8geSBlbCBldmVudG8gZ2VuZXJhZG8uXG4gICAqIEBwYXJhbSBpbmRleCBpbmRpY2EgZWwgaW5kaWNlIGRlIGxhIHRhYmxhIHF1ZSBnZW5lcmEgZWwgZXZlbnRvXG4gICAqIEBwYXJhbSBldmVudCBldmVudG8gZ2VuZXJhZG8gZGVzZGUgbGEgdGFibGFcbiAgICovXG4gIG9uRHJvcChpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnREZXBlbmRlbmN5PFQ+KTogdm9pZCB7XG4gICAgdGhpcy5kcm9wLmVtaXQoe2luZGV4LCBkYXRhOiBldmVudH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBkZXNkZSB1bmEgdGFibGEsIGVtaXRlIGVsIGluZGljZSBkZSBsYSB0YWJsYSBhbCBjdWFsIHNlIGxlIGRlYmUgYcOxYWRpciB1bmEgbnVldmEgZmlsYVxuICAgKiBAcGFyYW0gaW5kZXggaW5kaWNhIGVsIGluZGljZSBkZSBsYSB0YWJsYSBkZSBsYSBjdWFsIHNlIGRpc3BhcmEgZWwgZXZlbnRvXG4gICAqL1xuICBvbkFkZFJvdyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGRSb3cuZW1pdChpbmRleCk7XG4gIH1cblxuICBzZWxlY3RlZENlbGwoaW5kZXg6IG51bWJlciwgZXZlbnQ6IENlbGw8VD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWJsZXNbaW5kZXhdLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQoe2luZGV4LCBkYXRhOiBldmVudH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQm9va0NsaWNrZWQoaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50RGVwZW5kZW5jeTxUPik6IHZvaWQge1xuICAgIHRoaXMuYm9va0NsaWNrZWQuZW1pdCh7aW5kZXgsIGRhdGE6IGV2ZW50fSk7XG4gIH1cbn1cbiJdfQ==