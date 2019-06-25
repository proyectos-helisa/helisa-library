/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatTable } from '@angular/material';
import { ChangeColumnConfigurationType, ColumnConfigUtil, TableHelisaType, TotalType } from './table-helisa.interface';
import { TableHelisaService } from './table-helisa.service';
import { TableHelisaConnectComponent } from './table-helisa-connect.component';
/**
 * @record
 */
function RowData() { }
if (false) {
    /** @type {?} */
    RowData.prototype.data;
    /** @type {?} */
    RowData.prototype.rowType;
}
/** @enum {number} */
const RowType = {
    GROUP_TITLE: 0, GROUP_FOOTER: 1, ROW: 2,
};
RowType[RowType.GROUP_TITLE] = 'GROUP_TITLE';
RowType[RowType.GROUP_FOOTER] = 'GROUP_FOOTER';
RowType[RowType.ROW] = 'ROW';
/**
 * @template T
 */
export class TableHelisaComponent {
    /**
     * @param {?} tableService
     */
    constructor(tableService) {
        this.tableService = tableService;
        this.displayedColumns = [];
        this.type = TableHelisaType.LOCAL;
        this.isSetSelectedRow = false;
        this.sort = new EventEmitter();
        this.total = new EventEmitter();
        this.search = new EventEmitter();
        this.select = new EventEmitter();
        this.selectCell = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.showTitle = true;
        this.multipleCell = false;
        this.selectedCells = new Array();
        this.showFooter = false;
        this.showSearch = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tableService.nextPageReturn.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (!data.table || data.table === this) {
                this.receivePage(data.obj);
            }
        }));
        this.tableService.totalReturn.subscribe((/**
         * @param {?} info
         * @return {?}
         */
        info => {
            if (info) {
                this.columnConfig.forEach((/**
                 * @param {?} column
                 * @param {?} idx
                 * @return {?}
                 */
                (column, idx) => {
                    if (column === info.obj.column) {
                        this.totalData[idx] = this.getGroupValue(column, { sum: info.obj.value, count: this.count });
                    }
                }));
            }
        }));
        this.matSort.sortChange.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const column = this.columnConfig.find((/**
             * @param {?} c
             * @return {?}
             */
            c => c.name === event.active));
            column.sortDirection = event.direction;
            this.sort.emit({ column, columnConfigurations: this.columnConfig, type: ChangeColumnConfigurationType.SORT });
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.multipleCell) {
            this.matTable.renderRows();
        }
    }
    /**
     * @param {?} w
     * @return {?}
     */
    set isRemote(w) {
        this.type = w ? TableHelisaType.REMOTE : TableHelisaType.LOCAL;
        if (this.type === TableHelisaType.REMOTE) {
            this.tableHelisaConnectComponent = new TableHelisaConnectComponent();
            this.goNextPage();
        }
        else {
            this.tableHelisaConnectComponent = undefined;
        }
    }
    /**
     * @param {?} columnConfiguration
     * @return {?}
     */
    set columnConfiguration(columnConfiguration) {
        this.columnConfig = columnConfiguration;
        this.displayedColumns.splice(0, this.displayedColumns.length);
        if (columnConfiguration) {
            columnConfiguration.forEach((/**
             * @param {?} column
             * @return {?}
             */
            column => {
                if (column.visible) {
                    this.displayedColumns.push(column.name);
                }
            }));
            if (this.rawData) {
                this.dataSource = this.rawData;
            }
        }
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    set dataSource(dataSource) {
        this.rawData = dataSource;
        if (this.rawData) {
            this.prepareDataSource();
        }
    }
    /**
     * @param {?} idRowSelected
     * @return {?}
     */
    set selectedIndexRow(idRowSelected) {
        if (this.rawData && this.rawData.length) {
            if ((idRowSelected < this.rawData.length && idRowSelected >= 0)) {
                this.selectRow({ data: this.rawData[idRowSelected], rowType: RowType.ROW });
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    prepareDataSource() {
        /** @type {?} */
        const changeData = Array();
        /** @type {?} */
        let haveGroup = false;
        /** @type {?} */
        let groupFooter;
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        column => {
            if (column.totalType !== undefined && (this.type === TableHelisaType.LOCAL || this.tableHelisaConnectComponent.page <= 1)) {
                this.totalData = new Array(this.columnConfig.length);
                this.showFooter = true;
                this.total.emit({ column, columnConfigurations: this.columnConfig, type: ChangeColumnConfigurationType.TOTAL });
            }
            this.showSearch = this.showSearch || column.searchable;
            haveGroup = haveGroup || column.groupable;
        }));
        if (haveGroup) {
            this.rawData = this.rawData.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                /** @type {?} */
                let result = 0;
                this.columnConfig.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                column => {
                    if (result === 0) {
                        result = this.compare(a, b);
                    }
                }));
                return result;
            }));
        }
        this.rawData.forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            if (haveGroup && (changeData.length === 0 || this.compare(changeData[changeData.length - 1].data, row) !== 0)) {
                if (groupFooter) {
                    changeData.push({ data: groupFooter, rowType: RowType.GROUP_FOOTER });
                }
                changeData.push({ data: row, rowType: RowType.GROUP_TITLE });
                groupFooter = new Array(this.columnConfig.length);
            }
            if (haveGroup) {
                this.addTotalGroup(groupFooter, row);
            }
            changeData.push({ data: row, rowType: RowType.ROW });
        }));
        this.data = new MatTableDataSource(changeData);
    }
    /**
     * @private
     * @param {?} rowTotal
     * @param {?} row
     * @return {?}
     */
    addTotalGroup(rowTotal, row) {
        this.columnConfig.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
            if (column.totalType !== undefined) {
                if (rowTotal[index] === undefined) {
                    rowTotal[index] = { sum: ColumnConfigUtil.getValue(row, column), count: 1 };
                }
                else {
                    rowTotal[index].sum += ColumnConfigUtil.getValue(row, column);
                    rowTotal[index].count++;
                }
            }
        }));
    }
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    compare(a, b) {
        /** @type {?} */
        let ws = 0;
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        column => {
            if (ws === 0 && column.groupable) {
                if (ColumnConfigUtil.getValue(a, column) < ColumnConfigUtil.getValue(b, column)) {
                    ws = -1;
                }
                else if (ColumnConfigUtil.getValue(a, column) > ColumnConfigUtil.getValue(b, column)) {
                    ws = 1;
                }
            }
        }));
        return ws;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getGroupDescription(obj) {
        /** @type {?} */
        let result = '';
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        column => {
            if (column.groupable) {
                result += (result.length ? ' - ' : '') + ColumnConfigUtil.getValue(obj, column);
            }
        }));
        return result;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    isGroupTitle(index, item) {
        return item.rowType === RowType.GROUP_TITLE;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    isRow(index, item) {
        return item.rowType === RowType.ROW;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    isGroupFooter(index, item) {
        return item.rowType === RowType.GROUP_FOOTER;
    }
    /**
     * @return {?}
     */
    footerDisplayedColumns() {
        return this.displayedColumns.map((/**
         * @param {?} name
         * @return {?}
         */
        name => 'footer-' + name));
    }
    /**
     * @param {?} column
     * @param {?} data
     * @return {?}
     */
    getGroupValue(column, data) {
        if (column.totalType === TotalType.SUM) {
            return data.sum;
        }
        if (column.totalType === TotalType.COUNT) {
            return data.count;
        }
        if (column.totalType === TotalType.AVERAGE) {
            return 1. * data.sum / data.count;
        }
        return undefined;
    }
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    getValue(obj, column) {
        return ColumnConfigUtil.getValue(obj, column);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    searchText(text) {
        this.lastSearch = text;
        this.search.emit({ text, columnConfigurations: this.columnConfig });
    }
    /**
     * @param {?} row
     * @return {?}
     */
    selectRow(row) {
        this.selectedObject = row.data;
        this.select.emit(this.selectedObject);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        /** @type {?} */
        const element = event.target;
        if (element.scrollHeight - element.scrollTop < 1000) {
            this.goNextPage();
        }
    }
    /**
     * @private
     * @return {?}
     */
    goNextPage() {
        if (this.type === TableHelisaType.REMOTE && !this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
            this.tableHelisaConnectComponent.isUsed = true;
            this.nextPage.emit({
                page: this.tableHelisaConnectComponent.nextPage(),
                body: this.tableHelisaConnectComponent.getBody(this.columnConfig, this.lastSearch)
            });
        }
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    receivePage(data) {
        if (!this.rawData) {
            this.rawData = new Array();
        }
        this.rawData = this.rawData.concat(data);
        this.dataSource = this.rawData;
        if (this.type === TableHelisaType.REMOTE) {
            this.tableHelisaConnectComponent.isLastPage = data.length === 0;
            this.tableHelisaConnectComponent.isUsed = false;
        }
    }
    /**
     * @param {?} element
     * @param {?} column
     * @return {?}
     */
    selectedCell(element, column) {
        /** @type {?} */
        let index = this.isSelectedCell(element, column);
        if (index >= 0) {
            this.selectedCells.splice(index, 1);
        }
        else {
            this.selectedCells.push({ column: column, row: element });
        }
        this.selectCell.emit(this.selectedCells);
    }
    /**
     * @param {?} element
     * @param {?} column
     * @return {?}
     */
    isSelectedCell(element, column) {
        if (this.multipleCell) {
            for (let index = 0; index < this.selectedCells.length; index++) {
                if (this.selectedCells[index].column.name === column.name &&
                    this.selectedCells[index].row.data === element.data) {
                    return index;
                }
            }
        }
        return -1;
    }
    /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    getClassToCell(row, column) {
        /** @type {?} */
        let classToCell = '';
        if (this.configCellStyles) {
            /** @type {?} */
            let found = this.configCellStyles.find((/**
             * @param {?} c
             * @return {?}
             */
            c => {
                return c.cellData === this.getValue(row, column);
            }));
            if (found) {
                classToCell = found.classCell;
            }
        }
        return classToCell;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getClassToRow(row) {
        /** @type {?} */
        let classToRow = '';
        if (this.configRowStylesFromColumn) {
            /** @type {?} */
            let found = this.configRowStylesFromColumn.find((/**
             * @param {?} c
             * @return {?}
             */
            c => {
                return c.data === this.getValue(row, c.column);
            }));
            if (found) {
                classToRow = found.classRow;
            }
        }
        return classToRow;
    }
}
TableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-table',
                template: "<div class=\"div-table-helisa\">\r\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\r\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\">\r\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort matTable>\r\n      <ng-container [matColumnDef]=\"column.name\" *ngFor=\"let column of columnConfig; let idx = index\">\r\n        <div *ngIf=\"!column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef > {{column.title}} </th>\r\n        </div>\r\n        <div *ngIf=\"column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{column.title}} </th>\r\n        </div>\r\n        <td mat-cell *matCellDef=\"let element\" (click)=\"selectedCell(element, column)\" \r\n          [class.selected-row]= \"isSelectedCell(element, column) >= 0\" [ngClass]=\"getClassToCell(element.data, column)\">\r\n            {{ getValue(element.data, column) }} \r\n        </td>\r\n        <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"groupHeader\">\r\n        <td mat-cell *matCellDef=\"let group\">\r\n          <strong>{{ getGroupDescription(group.data) }}</strong>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\r\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\r\n      </ng-container>\r\n\r\n      <div *ngIf=\"showFooter\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\r\n      </div>\r\n      <div *ngIf=\"showTitle\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></tr>\r\n      </div>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row)\" \r\n        [class.selected-row]=\"row.data === selectedObject && !multipleCell\" [ngClass]=\"getClassToRow(row.data)\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: footerDisplayedColumns(); when: isGroupFooter\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n",
                styles: [".div-table-helisa{height:500px;width:800px}.div-table-helisa .container-table{overflow:scroll;width:100%;height:100%}.div-table-helisa .container-table .table-helisa{width:100%}.div-table-helisa .container-table .table-helisa /deep/ tbody tr,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr,.div-table-helisa .container-table .table-helisa /deep/ thead tr{height:26px}.div-table-helisa .container-table .table-helisa /deep/ tbody tr td,.div-table-helisa .container-table .table-helisa /deep/ tbody tr th,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,.div-table-helisa .container-table .table-helisa /deep/ thead tr td,.div-table-helisa .container-table .table-helisa /deep/ thead tr th{padding:2px 10px 0}.div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}.div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}.div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}.div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}.div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
            }] }
];
/** @nocollapse */
TableHelisaComponent.ctorParameters = () => [
    { type: TableHelisaService }
];
TableHelisaComponent.propDecorators = {
    matSort: [{ type: ViewChild, args: [MatSort,] }],
    matTable: [{ type: ViewChild, args: [MatTable,] }],
    sort: [{ type: Output }],
    total: [{ type: Output }],
    search: [{ type: Output }],
    select: [{ type: Output }],
    selectCell: [{ type: Output }],
    nextPage: [{ type: Output }],
    showTitle: [{ type: Input }],
    multipleCell: [{ type: Input }],
    count: [{ type: Input }],
    configCellStyles: [{ type: Input }],
    configRowStylesFromColumn: [{ type: Input }],
    selectedCells: [{ type: Input }],
    isRemote: [{ type: Input }],
    columnConfiguration: [{ type: Input }],
    dataSource: [{ type: Input }],
    selectedIndexRow: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.tableHelisaConnectComponent;
    /** @type {?} */
    TableHelisaComponent.prototype.totalData;
    /** @type {?} */
    TableHelisaComponent.prototype.rawData;
    /** @type {?} */
    TableHelisaComponent.prototype.data;
    /** @type {?} */
    TableHelisaComponent.prototype.displayedColumns;
    /** @type {?} */
    TableHelisaComponent.prototype.columnConfig;
    /** @type {?} */
    TableHelisaComponent.prototype.selectedObject;
    /** @type {?} */
    TableHelisaComponent.prototype.lastSearch;
    /** @type {?} */
    TableHelisaComponent.prototype.type;
    /** @type {?} */
    TableHelisaComponent.prototype.isSetSelectedRow;
    /** @type {?} */
    TableHelisaComponent.prototype.matSort;
    /** @type {?} */
    TableHelisaComponent.prototype.matTable;
    /** @type {?} */
    TableHelisaComponent.prototype.sort;
    /** @type {?} */
    TableHelisaComponent.prototype.total;
    /** @type {?} */
    TableHelisaComponent.prototype.search;
    /** @type {?} */
    TableHelisaComponent.prototype.select;
    /** @type {?} */
    TableHelisaComponent.prototype.selectCell;
    /** @type {?} */
    TableHelisaComponent.prototype.nextPage;
    /** @type {?} */
    TableHelisaComponent.prototype.showTitle;
    /** @type {?} */
    TableHelisaComponent.prototype.multipleCell;
    /** @type {?} */
    TableHelisaComponent.prototype.count;
    /** @type {?} */
    TableHelisaComponent.prototype.configCellStyles;
    /** @type {?} */
    TableHelisaComponent.prototype.configRowStylesFromColumn;
    /** @type {?} */
    TableHelisaComponent.prototype.selectedCells;
    /** @type {?} */
    TableHelisaComponent.prototype.showFooter;
    /** @type {?} */
    TableHelisaComponent.prototype.showSearch;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.tableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFeEUsT0FBTyxFQUNMLDZCQUE2QixFQUU3QixnQkFBZ0IsRUFJaEIsZUFBZSxFQUVmLFNBQVMsRUFJVixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7O0FBRTdFLHNCQUdDOzs7SUFGQyx1QkFBVTs7SUFDViwwQkFBaUI7Ozs7SUFJakIsY0FBVyxFQUFFLGVBQVksRUFBRSxNQUFHOzs7Ozs7OztBQVFoQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBK0IvQixZQUFvQixZQUFtQztRQUFuQyxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUF6QnZELHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUloQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDOUMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBS2YsU0FBSSxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ2xFLFVBQUssR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNuRSxXQUFNLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFDcEUsV0FBTSxHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDO1FBQ2hELGVBQVUsR0FB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Qjs7Ozs7SUFFUCw0Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZSwgTWF0VGFibGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90eXBpbmdzL3NvcnQnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLFxyXG4gIENvbHVtbkNvbmZpZyxcclxuICBDb2x1bW5Db25maWdVdGlsLFxyXG4gIEV2ZW50Q29sdW1uLFxyXG4gIEV2ZW50U2VhcmNoLFxyXG4gIFJlcXVlc3RUYWJsZUhlbGlzYSxcclxuICBUYWJsZUhlbGlzYVR5cGUsXHJcbiAgVG90YWxHcm91cCxcclxuICBUb3RhbFR5cGUsXHJcbiAgQ2VsbCxcclxuICBDb25maWdDZWxsU3R5bGVzLFxyXG4gIENvbmZpZ1Jvd1N0eWxlc1xyXG59IGZyb20gJy4vdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7VGFibGVIZWxpc2FTZXJ2aWNlfSBmcm9tICcuL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHtUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnR9IGZyb20gJy4vdGFibGUtaGVsaXNhLWNvbm5lY3QuY29tcG9uZW50JztcclxuXHJcbmludGVyZmFjZSBSb3dEYXRhIHtcclxuICBkYXRhOiBhbnk7XHJcbiAgcm93VHlwZTogUm93VHlwZTtcclxufVxyXG5cclxuZW51bSBSb3dUeXBlIHtcclxuICBHUk9VUF9USVRMRSwgR1JPVVBfRk9PVEVSLCBST1dcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgdGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50OiBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD47XHJcbiAgdG90YWxEYXRhOiBBcnJheTxudW1iZXI+O1xyXG4gIHJhd0RhdGE6IEFycmF5PFQ+O1xyXG4gIGRhdGE6IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPjtcclxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxuICBzZWxlY3RlZE9iamVjdDogVDtcclxuICBsYXN0U2VhcmNoOiBzdHJpbmc7XHJcbiAgdHlwZTogVGFibGVIZWxpc2FUeXBlID0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xyXG4gIGlzU2V0U2VsZWN0ZWRSb3cgPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBtYXRTb3J0OiBNYXRTb3J0O1xyXG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUpIG1hdFRhYmxlOiBNYXRUYWJsZTxhbnk+O1xyXG5cclxuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+KCk7XHJcbiAgQE91dHB1dCgpIHRvdGFsOiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcclxuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudFNlYXJjaD4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdENlbGwgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxbXT4oKTtcclxuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E+KCk7XHJcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBtdWx0aXBsZUNlbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvbmZpZ0NlbGxTdHlsZXM6IEFycmF5PENvbmZpZ0NlbGxTdHlsZXM+O1xyXG4gIEBJbnB1dCgpIGNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW46IEFycmF5PENvbmZpZ1Jvd1N0eWxlcz47XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRDZWxsczogQXJyYXk8Q2VsbD4gPSBuZXcgQXJyYXk8Q2VsbD4oKTtcclxuICBzaG93Rm9vdGVyID0gZmFsc2U7XHJcbiAgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlU2VydmljZTogVGFibGVIZWxpc2FTZXJ2aWNlPFQ+KSB7ICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50YWJsZVNlcnZpY2UubmV4dFBhZ2VSZXR1cm4uc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhID0+IHtcclxuICAgICAgICBpZiAoIWRhdGEudGFibGUgfHwgZGF0YS50YWJsZSA9PT0gdGhpcykge1xyXG4gICAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLm9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy50YWJsZVNlcnZpY2UudG90YWxSZXR1cm4uc3Vic2NyaWJlKGluZm8gPT4ge1xyXG4gICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbiwgaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoY29sdW1uID09PSBpbmZvLm9iai5jb2x1bW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b3RhbERhdGFbaWR4XSA9IHRoaXMuZ2V0R3JvdXBWYWx1ZShjb2x1bW4sIHtzdW06IGluZm8ub2JqLnZhbHVlLCBjb3VudDogdGhpcy5jb3VudH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWF0U29ydC5zb3J0Q2hhbmdlLnN1YnNjcmliZShcclxuICAgICAgKGV2ZW50OiBTb3J0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uOiBDb2x1bW5Db25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZy5maW5kKGMgPT4gYy5uYW1lID09PSBldmVudC5hY3RpdmUpO1xyXG4gICAgICAgIGNvbHVtbi5zb3J0RGlyZWN0aW9uID0gZXZlbnQuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuc29ydC5lbWl0KHtjb2x1bW4sIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZywgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUuU09SVH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgIGlmICh0aGlzLm11bHRpcGxlQ2VsbCkge1xyXG4gICAgICB0aGlzLm1hdFRhYmxlLnJlbmRlclJvd3MoKTtcclxuICAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpc1JlbW90ZSh3OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB3ID8gVGFibGVIZWxpc2FUeXBlLlJFTU9URSA6IFRhYmxlSGVsaXNhVHlwZS5MT0NBTDtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUpIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgPSBuZXcgVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+KCk7XHJcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xyXG4gICAgfSBlbHNlIHsgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgPSB1bmRlZmluZWQ7IH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbHVtbkNvbmZpZ3VyYXRpb24oY29sdW1uQ29uZmlndXJhdGlvbjogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcgPSBjb2x1bW5Db25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKTtcclxuICAgIGlmIChjb2x1bW5Db25maWd1cmF0aW9uKSB7XHJcbiAgICAgIGNvbHVtbkNvbmZpZ3VyYXRpb24uZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICAgIGlmIChjb2x1bW4udmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnB1c2goY29sdW1uLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnJhd0RhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGFTb3VyY2UoZGF0YVNvdXJjZTogQXJyYXk8YW55Pikge1xyXG4gICAgdGhpcy5yYXdEYXRhID0gZGF0YVNvdXJjZTtcclxuICAgIGlmICh0aGlzLnJhd0RhdGEpIHsgdGhpcy5wcmVwYXJlRGF0YVNvdXJjZSgpOyB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZEluZGV4Um93KGlkUm93U2VsZWN0ZWQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoKSB7XHJcbiAgICAgIGlmICgoaWRSb3dTZWxlY3RlZCA8IHRoaXMucmF3RGF0YS5sZW5ndGggJiYgaWRSb3dTZWxlY3RlZCA+PSAwKSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Um93KHtkYXRhOiB0aGlzLnJhd0RhdGFbaWRSb3dTZWxlY3RlZF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJlcGFyZURhdGFTb3VyY2UoKSB7XHJcbiAgICBjb25zdCBjaGFuZ2VEYXRhID0gQXJyYXk8Um93RGF0YT4oKTtcclxuICAgIGxldCBoYXZlR3JvdXAgPSBmYWxzZTtcclxuICAgIGxldCBncm91cEZvb3RlcjogQXJyYXk8VG90YWxHcm91cD47XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQgJiYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMIHx8IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LnBhZ2UgPD0gMSkpIHtcclxuICAgICAgICB0aGlzLnRvdGFsRGF0YSA9IG5ldyBBcnJheTxudW1iZXI+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9vdGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRvdGFsLmVtaXQoe2NvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5UT1RBTH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd1NlYXJjaCA9IHRoaXMuc2hvd1NlYXJjaCB8fCBjb2x1bW4uc2VhcmNoYWJsZTtcclxuICAgICAgaGF2ZUdyb3VwID0gaGF2ZUdyb3VwIHx8IGNvbHVtbi5ncm91cGFibGU7XHJcbiAgICB9KTtcclxuICAgIGlmIChoYXZlR3JvdXApIHtcclxuICAgICAgdGhpcy5yYXdEYXRhID0gdGhpcy5yYXdEYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuY29tcGFyZShhLCBiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMucmF3RGF0YS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIGlmIChoYXZlR3JvdXAgJiYgKGNoYW5nZURhdGEubGVuZ3RoID09PSAwIHx8IHRoaXMuY29tcGFyZShjaGFuZ2VEYXRhW2NoYW5nZURhdGEubGVuZ3RoIC0gMV0uZGF0YSwgcm93KSAhPT0gMCkpIHtcclxuICAgICAgICBpZiAoZ3JvdXBGb290ZXIpIHtcclxuICAgICAgICAgIGNoYW5nZURhdGEucHVzaCh7ZGF0YTogZ3JvdXBGb290ZXIsIHJvd1R5cGU6IFJvd1R5cGUuR1JPVVBfRk9PVEVSfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoYW5nZURhdGEucHVzaCh7ZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX1RJVExFfSk7XHJcbiAgICAgICAgZ3JvdXBGb290ZXIgPSBuZXcgQXJyYXk8VG90YWxHcm91cD4odGhpcy5jb2x1bW5Db25maWcubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGF2ZUdyb3VwKSB7IHRoaXMuYWRkVG90YWxHcm91cChncm91cEZvb3Rlciwgcm93KTsgfVxyXG4gICAgICBjaGFuZ2VEYXRhLnB1c2goe2RhdGE6IHJvdywgcm93VHlwZTogUm93VHlwZS5ST1d9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPihjaGFuZ2VEYXRhKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVG90YWxHcm91cChyb3dUb3RhbDogQXJyYXk8VG90YWxHcm91cD4sIHJvdzogYW55KSB7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAocm93VG90YWxbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XSA9IHtzdW06IENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUocm93LCBjb2x1bW4pLCBjb3VudDogMX07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5zdW0gKz0gQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShyb3csIGNvbHVtbik7XHJcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0uY291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21wYXJlKGE6IGFueSwgYjogYW55KTogbnVtYmVyIHtcclxuICAgIGxldCB3cyA9IDA7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgIGlmICh3cyA9PT0gMCAmJiBjb2x1bW4uZ3JvdXBhYmxlKSB7XHJcbiAgICAgICAgaWYgKENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUoYSwgY29sdW1uKSA8IENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUoYiwgY29sdW1uKSkgeyB3cyA9IC0xOyB9IGVsc2UgaWYgKENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUoYSwgY29sdW1uKSA+IENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUoYiwgY29sdW1uKSkgeyB3cyA9IDE7IH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gd3M7XHJcbiAgfVxyXG5cclxuICBnZXRHcm91cERlc2NyaXB0aW9uKG9iajogYW55KTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi5ncm91cGFibGUpIHtcclxuICAgICAgICByZXN1bHQgKz0gKHJlc3VsdC5sZW5ndGggPyAnIC0gJyA6ICcnKSArIENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUob2JqLCBjb2x1bW4pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpc0dyb3VwVGl0bGUoaW5kZXgsIGl0ZW0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfVElUTEU7XHJcbiAgfVxyXG5cclxuICBpc1JvdyhpbmRleCwgaXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5ST1c7XHJcbiAgfVxyXG5cclxuICBpc0dyb3VwRm9vdGVyKGluZGV4LCBpdGVtKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLkdST1VQX0ZPT1RFUjtcclxuICB9XHJcblxyXG4gIGZvb3RlckRpc3BsYXllZENvbHVtbnMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLm1hcChuYW1lID0+ICdmb290ZXItJyArIG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0R3JvdXBWYWx1ZShjb2x1bW46IENvbHVtbkNvbmZpZywgZGF0YTogVG90YWxHcm91cCk6IG51bWJlciB7XHJcbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLlNVTSkgeyByZXR1cm4gZGF0YS5zdW07IH1cclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuQ09VTlQpIHsgcmV0dXJuIGRhdGEuY291bnQ7IH1cclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuQVZFUkFHRSkgeyByZXR1cm4gMS4gKiBkYXRhLnN1bSAvIGRhdGEuY291bnQ7IH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZShvYmo6IGFueSwgY29sdW1uOiBDb2x1bW5Db25maWcpIHtcclxuICAgIHJldHVybiBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKG9iaiwgY29sdW1uKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaFRleHQodGV4dCkge1xyXG4gICAgdGhpcy5sYXN0U2VhcmNoID0gdGV4dDtcclxuICAgIHRoaXMuc2VhcmNoLmVtaXQoe3RleHQsIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KHJvdykge1xyXG4gICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHJvdy5kYXRhO1xyXG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmIChlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wIDwgMTAwMCkge1xyXG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpIHtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUgJiYgIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgJiYgIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCkge1xyXG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLm5leHRQYWdlLmVtaXQoe1xyXG4gICAgICAgIHBhZ2U6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50Lm5leHRQYWdlKCksXHJcbiAgICAgICAgYm9keTogdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuZ2V0Qm9keSh0aGlzLmNvbHVtbkNvbmZpZywgdGhpcy5sYXN0U2VhcmNoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogVFtdKSB7XHJcbiAgICBpZiAoIXRoaXMucmF3RGF0YSkgeyB0aGlzLnJhd0RhdGEgPSBuZXcgQXJyYXk8VD4oKTsgfVxyXG4gICAgdGhpcy5yYXdEYXRhID0gdGhpcy5yYXdEYXRhLmNvbmNhdChkYXRhKTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUpIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNMYXN0UGFnZSA9IGRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdGVkQ2VsbChlbGVtZW50LCBjb2x1bW46IENvbHVtbkNvbmZpZykge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5pc1NlbGVjdGVkQ2VsbChlbGVtZW50LCBjb2x1bW4pO1xyXG4gICAgaWYoaW5kZXggPj0gMCl7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDZWxscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZENlbGxzLnB1c2goe2NvbHVtbjogY29sdW1uLCByb3c6IGVsZW1lbnR9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHRoaXMuc2VsZWN0ZWRDZWxscyk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkQ2VsbChlbGVtZW50LCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IG51bWJlciB7XHJcbiAgICBpZih0aGlzLm11bHRpcGxlQ2VsbCkge1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zZWxlY3RlZENlbGxzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2VsbHNbaW5kZXhdLmNvbHVtbi5uYW1lID09PSBjb2x1bW4ubmFtZSAmJlxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2VsbHNbaW5kZXhdLnJvdy5kYXRhID09PSBlbGVtZW50LmRhdGEpIHtcclxuICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIGdldENsYXNzVG9DZWxsKHJvdywgY29sdW1uOiBDb2x1bW5Db25maWcpe1xyXG4gICAgbGV0IGNsYXNzVG9DZWxsID0gJyc7XHJcbiAgICBpZih0aGlzLmNvbmZpZ0NlbGxTdHlsZXMpe1xyXG4gICAgICBsZXQgZm91bmQgPSB0aGlzLmNvbmZpZ0NlbGxTdHlsZXMuZmluZChjID0+IHtcclxuICAgICAgICByZXR1cm4gYy5jZWxsRGF0YSA9PT0gdGhpcy5nZXRWYWx1ZShyb3csIGNvbHVtbik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZihmb3VuZCl7XHJcbiAgICAgICAgY2xhc3NUb0NlbGwgPSBmb3VuZC5jbGFzc0NlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc1RvQ2VsbDtcclxuICB9XHJcblxyXG4gIGdldENsYXNzVG9Sb3cocm93KXtcclxuICAgIGxldCBjbGFzc1RvUm93ID0gJyc7XHJcbiAgICBpZih0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4pe1xyXG4gICAgICBsZXQgZm91bmQgPSB0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4uZmluZChjID0+IHtcclxuICAgICAgICByZXR1cm4gYy5kYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgYy5jb2x1bW4pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYoZm91bmQpe1xyXG4gICAgICAgIGNsYXNzVG9Sb3cgPSBmb3VuZC5jbGFzc1JvdztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzVG9Sb3c7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=