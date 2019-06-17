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
        if (this.rawData && this.rawData.length) {
            this.selectRow({ data: this.rawData[0], rowType: RowType.ROW });
        }
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
    dataSource: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFeEUsT0FBTyxFQUNMLDZCQUE2QixFQUU3QixnQkFBZ0IsRUFJaEIsZUFBZSxFQUVmLFNBQVMsRUFJVixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7O0FBRTdFLHNCQUdDOzs7SUFGQyx1QkFBVTs7SUFDViwwQkFBaUI7Ozs7SUFJakIsY0FBVyxFQUFFLGVBQVksRUFBRSxNQUFHOzs7Ozs7OztBQVFoQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBK0IvQixZQUFvQixZQUFtQztRQUFuQyxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUF6QnZELHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUloQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFLcEMsU0FBSSxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ2xFLFVBQUssR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNuRSxXQUFNLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFDcEUsV0FBTSxHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDO1FBQ2hELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3hD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VUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDN0I7U0FDRjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7OztZQTVSRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDR6RUFBNEM7O2FBRTdDOzs7O1lBaEJPLGtCQUFrQjs7O3NCQTZCdkIsU0FBUyxTQUFDLE9BQU87dUJBQ2pCLFNBQVMsU0FBQyxRQUFRO21CQUVsQixNQUFNO29CQUNOLE1BQU07cUJBQ04sTUFBTTtxQkFDTixNQUFNO3lCQUNOLE1BQU07dUJBQ04sTUFBTTt3QkFDTixLQUFLOzJCQUNMLEtBQUs7b0JBQ0wsS0FBSzsrQkFDTCxLQUFLO3dDQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkF3Q0wsS0FBSztrQ0FTTCxLQUFLO3lCQWdCTCxLQUFLOzs7Ozs7O0lBekZOLDJEQUFvRTs7SUFDcEUseUNBQXlCOztJQUN6Qix1Q0FBa0I7O0lBQ2xCLG9DQUFrQzs7SUFDbEMsZ0RBQWdDOztJQUNoQyw0Q0FBa0M7O0lBQ2xDLDhDQUFrQjs7SUFDbEIsMENBQW1COztJQUNuQixvQ0FBOEM7O0lBRTlDLHVDQUFxQzs7SUFDckMsd0NBQTZDOztJQUU3QyxvQ0FBNEU7O0lBQzVFLHFDQUE2RTs7SUFDN0Usc0NBQThFOztJQUM5RSxzQ0FBMEQ7O0lBQzFELDBDQUFrRDs7SUFDbEQsd0NBQThGOztJQUM5Rix5Q0FBMEI7O0lBQzFCLDRDQUE4Qjs7SUFDOUIscUNBQXVCOztJQUN2QixnREFBbUQ7O0lBQ25ELHlEQUEyRDs7SUFDM0QsNkNBQXdEOztJQUV4RCwwQ0FBbUI7O0lBQ25CLDBDQUFtQjs7Ozs7SUFFUCw0Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZSwgTWF0VGFibGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90eXBpbmdzL3NvcnQnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLFxyXG4gIENvbHVtbkNvbmZpZyxcclxuICBDb2x1bW5Db25maWdVdGlsLFxyXG4gIEV2ZW50Q29sdW1uLFxyXG4gIEV2ZW50U2VhcmNoLFxyXG4gIFJlcXVlc3RUYWJsZUhlbGlzYSxcclxuICBUYWJsZUhlbGlzYVR5cGUsXHJcbiAgVG90YWxHcm91cCxcclxuICBUb3RhbFR5cGUsXHJcbiAgQ2VsbCxcclxuICBDb25maWdDZWxsU3R5bGVzLFxyXG4gIENvbmZpZ1Jvd1N0eWxlc1xyXG59IGZyb20gJy4vdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7VGFibGVIZWxpc2FTZXJ2aWNlfSBmcm9tICcuL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHtUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnR9IGZyb20gJy4vdGFibGUtaGVsaXNhLWNvbm5lY3QuY29tcG9uZW50JztcclxuXHJcbmludGVyZmFjZSBSb3dEYXRhIHtcclxuICBkYXRhOiBhbnk7XHJcbiAgcm93VHlwZTogUm93VHlwZTtcclxufVxyXG5cclxuZW51bSBSb3dUeXBlIHtcclxuICBHUk9VUF9USVRMRSwgR1JPVVBfRk9PVEVSLCBST1dcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgdGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50OiBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD47XHJcbiAgdG90YWxEYXRhOiBBcnJheTxudW1iZXI+O1xyXG4gIHJhd0RhdGE6IEFycmF5PFQ+O1xyXG4gIGRhdGE6IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPjtcclxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxuICBzZWxlY3RlZE9iamVjdDogVDtcclxuICBsYXN0U2VhcmNoOiBzdHJpbmc7XHJcbiAgdHlwZTogVGFibGVIZWxpc2FUeXBlID0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xyXG4gIFxyXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgbWF0U29ydDogTWF0U29ydDtcclxuICBAVmlld0NoaWxkKE1hdFRhYmxlKSBtYXRUYWJsZTogTWF0VGFibGU8YW55PjtcclxuXHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xyXG4gIEBPdXRwdXQoKSB0b3RhbDogRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+KCk7XHJcbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RDZWxsID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsW10+KCk7XHJcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8UmVxdWVzdFRhYmxlSGVsaXNhPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmVxdWVzdFRhYmxlSGVsaXNhPigpO1xyXG4gIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XHJcbiAgQElucHV0KCkgbXVsdGlwbGVDZWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBjb25maWdDZWxsU3R5bGVzOiBBcnJheTxDb25maWdDZWxsU3R5bGVzPjtcclxuICBASW5wdXQoKSBjb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uOiBBcnJheTxDb25maWdSb3dTdHlsZXM+O1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkQ2VsbHM6IEFycmF5PENlbGw+ID0gbmV3IEFycmF5PENlbGw+KCk7XHJcblxyXG4gIHNob3dGb290ZXIgPSBmYWxzZTtcclxuICBzaG93U2VhcmNoID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8VD4pIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudGFibGVTZXJ2aWNlLm5leHRQYWdlUmV0dXJuLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKCFkYXRhLnRhYmxlIHx8IGRhdGEudGFibGUgPT09IHRoaXMpIHtcclxuICAgICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5vYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMudGFibGVTZXJ2aWNlLnRvdGFsUmV0dXJuLnN1YnNjcmliZShpbmZvID0+IHtcclxuICAgICAgaWYgKGluZm8pIHtcclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW4sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNvbHVtbiA9PT0gaW5mby5vYmouY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxEYXRhW2lkeF0gPSB0aGlzLmdldEdyb3VwVmFsdWUoY29sdW1uLCB7c3VtOiBpbmZvLm9iai52YWx1ZSwgY291bnQ6IHRoaXMuY291bnR9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hdFNvcnQuc29ydENoYW5nZS5zdWJzY3JpYmUoXHJcbiAgICAgIChldmVudDogU29ydCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbjogQ29sdW1uQ29uZmlnID0gdGhpcy5jb2x1bW5Db25maWcuZmluZChjID0+IGMubmFtZSA9PT0gZXZlbnQuYWN0aXZlKTtcclxuICAgICAgICBjb2x1bW4uc29ydERpcmVjdGlvbiA9IGV2ZW50LmRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLnNvcnQuZW1pdCh7Y29sdW1uLCBjb2x1bW5Db25maWd1cmF0aW9uczogdGhpcy5jb2x1bW5Db25maWcsIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLlNPUlR9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLm11bHRpcGxlQ2VsbCkge1xyXG4gICAgICB0aGlzLm1hdFRhYmxlLnJlbmRlclJvd3MoKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpc1JlbW90ZSh3OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB3ID8gVGFibGVIZWxpc2FUeXBlLlJFTU9URSA6IFRhYmxlSGVsaXNhVHlwZS5MT0NBTDtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUpIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgPSBuZXcgVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+KCk7XHJcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xyXG4gICAgfSBlbHNlIHsgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgPSB1bmRlZmluZWQ7IH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbHVtbkNvbmZpZ3VyYXRpb24oY29sdW1uQ29uZmlndXJhdGlvbjogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcgPSBjb2x1bW5Db25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKTtcclxuICAgIGlmIChjb2x1bW5Db25maWd1cmF0aW9uKSB7XHJcbiAgICAgIGNvbHVtbkNvbmZpZ3VyYXRpb24uZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICAgIGlmIChjb2x1bW4udmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnB1c2goY29sdW1uLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnJhd0RhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGFTb3VyY2UoZGF0YVNvdXJjZTogQXJyYXk8YW55Pikge1xyXG4gICAgdGhpcy5yYXdEYXRhID0gZGF0YVNvdXJjZTtcclxuICAgIGlmICh0aGlzLnJhd0RhdGEpIHsgdGhpcy5wcmVwYXJlRGF0YVNvdXJjZSgpOyB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVEYXRhU291cmNlKCkge1xyXG4gICAgY29uc3QgY2hhbmdlRGF0YSA9IEFycmF5PFJvd0RhdGE+KCk7XHJcbiAgICBsZXQgaGF2ZUdyb3VwID0gZmFsc2U7XHJcbiAgICBsZXQgZ3JvdXBGb290ZXI6IEFycmF5PFRvdGFsR3JvdXA+O1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSAhPT0gdW5kZWZpbmVkICYmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5MT0NBTCB8fCB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5wYWdlIDw9IDEpKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbERhdGEgPSBuZXcgQXJyYXk8bnVtYmVyPih0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0Zvb3RlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b3RhbC5lbWl0KHtjb2x1bW4sIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZywgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUuVE9UQUx9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dTZWFyY2ggPSB0aGlzLnNob3dTZWFyY2ggfHwgY29sdW1uLnNlYXJjaGFibGU7XHJcbiAgICAgIGhhdmVHcm91cCA9IGhhdmVHcm91cCB8fCBjb2x1bW4uZ3JvdXBhYmxlO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoaGF2ZUdyb3VwKSB7XHJcbiAgICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmNvbXBhcmUoYSwgYik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhd0RhdGEuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBpZiAoaGF2ZUdyb3VwICYmIChjaGFuZ2VEYXRhLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNvbXBhcmUoY2hhbmdlRGF0YVtjaGFuZ2VEYXRhLmxlbmd0aCAtIDFdLmRhdGEsIHJvdykgIT09IDApKSB7XHJcbiAgICAgICAgaWYgKGdyb3VwRm9vdGVyKSB7XHJcbiAgICAgICAgICBjaGFuZ2VEYXRhLnB1c2goe2RhdGE6IGdyb3VwRm9vdGVyLCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX0ZPT1RFUn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFuZ2VEYXRhLnB1c2goe2RhdGE6IHJvdywgcm93VHlwZTogUm93VHlwZS5HUk9VUF9USVRMRX0pO1xyXG4gICAgICAgIGdyb3VwRm9vdGVyID0gbmV3IEFycmF5PFRvdGFsR3JvdXA+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhhdmVHcm91cCkgeyB0aGlzLmFkZFRvdGFsR3JvdXAoZ3JvdXBGb290ZXIsIHJvdyk7IH1cclxuICAgICAgY2hhbmdlRGF0YS5wdXNoKHtkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuUk9XfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YT4oY2hhbmdlRGF0YSk7XHJcbiAgICBpZiAodGhpcy5yYXdEYXRhICYmIHRoaXMucmF3RGF0YS5sZW5ndGgpIHsgdGhpcy5zZWxlY3RSb3coe2RhdGE6IHRoaXMucmF3RGF0YVswXSwgcm93VHlwZTogUm93VHlwZS5ST1d9KTsgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUb3RhbEdyb3VwKHJvd1RvdGFsOiBBcnJheTxUb3RhbEdyb3VwPiwgcm93OiBhbnkpIHtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChyb3dUb3RhbFtpbmRleF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdID0ge3N1bTogQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShyb3csIGNvbHVtbiksIGNvdW50OiAxfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLnN1bSArPSBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKHJvdywgY29sdW1uKTtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5jb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBhcmUoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xyXG4gICAgbGV0IHdzID0gMDtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgaWYgKHdzID09PSAwICYmIGNvbHVtbi5ncm91cGFibGUpIHtcclxuICAgICAgICBpZiAoQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShhLCBjb2x1bW4pIDwgQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShiLCBjb2x1bW4pKSB7IHdzID0gLTE7IH0gZWxzZSBpZiAoQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShhLCBjb2x1bW4pID4gQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShiLCBjb2x1bW4pKSB7IHdzID0gMTsgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB3cztcclxuICB9XHJcblxyXG4gIGdldEdyb3VwRGVzY3JpcHRpb24ob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLmdyb3VwYWJsZSkge1xyXG4gICAgICAgIHJlc3VsdCArPSAocmVzdWx0Lmxlbmd0aCA/ICcgLSAnIDogJycpICsgQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShvYmosIGNvbHVtbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzR3JvdXBUaXRsZShpbmRleCwgaXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9USVRMRTtcclxuICB9XHJcblxyXG4gIGlzUm93KGluZGV4LCBpdGVtKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLlJPVztcclxuICB9XHJcblxyXG4gIGlzR3JvdXBGb290ZXIoaW5kZXgsIGl0ZW0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfRk9PVEVSO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZENvbHVtbnMubWFwKG5hbWUgPT4gJ2Zvb3Rlci0nICsgbmFtZSk7XHJcbiAgfVxyXG5cclxuICBnZXRHcm91cFZhbHVlKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBkYXRhOiBUb3RhbEdyb3VwKTogbnVtYmVyIHtcclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuU1VNKSB7IHJldHVybiBkYXRhLnN1bTsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5DT1VOVCkgeyByZXR1cm4gZGF0YS5jb3VudDsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5BVkVSQUdFKSB7IHJldHVybiAxLiAqIGRhdGEuc3VtIC8gZGF0YS5jb3VudDsgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKG9iajogYW55LCBjb2x1bW46IENvbHVtbkNvbmZpZykge1xyXG4gICAgcmV0dXJuIENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUob2JqLCBjb2x1bW4pO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoVGV4dCh0ZXh0KSB7XHJcbiAgICB0aGlzLmxhc3RTZWFyY2ggPSB0ZXh0O1xyXG4gICAgdGhpcy5zZWFyY2guZW1pdCh7dGV4dCwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RSb3cocm93KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0gcm93LmRhdGE7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxUb3AgPCAxMDAwKSB7XHJcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb05leHRQYWdlKCkge1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLlJFTU9URSAmJiAhdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNMYXN0UGFnZSAmJiAhdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkKSB7XHJcbiAgICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7XHJcbiAgICAgICAgcGFnZTogdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQubmV4dFBhZ2UoKSxcclxuICAgICAgICBib2R5OiB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5nZXRCb2R5KHRoaXMuY29sdW1uQ29uZmlnLCB0aGlzLmxhc3RTZWFyY2gpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWNlaXZlUGFnZShkYXRhOiBUW10pIHtcclxuICAgIGlmICghdGhpcy5yYXdEYXRhKSB7IHRoaXMucmF3RGF0YSA9IG5ldyBBcnJheTxUPigpOyB9XHJcbiAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuY29uY2F0KGRhdGEpO1xyXG4gICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5yYXdEYXRhO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLlJFTU9URSkge1xyXG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XHJcbiAgICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0ZWRDZWxsKGVsZW1lbnQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKSB7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLmlzU2VsZWN0ZWRDZWxsKGVsZW1lbnQsIGNvbHVtbik7XHJcbiAgICBpZihpbmRleCA+PSAwKXtcclxuICAgICAgdGhpcy5zZWxlY3RlZENlbGxzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2VsbHMucHVzaCh7Y29sdW1uOiBjb2x1bW4sIHJvdzogZWxlbWVudH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRDZWxsKGVsZW1lbnQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogbnVtYmVyIHtcclxuICAgIGlmKHRoaXMubXVsdGlwbGVDZWxsKSB7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnNlbGVjdGVkQ2VsbHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDZWxsc1tpbmRleF0uY29sdW1uLm5hbWUgPT09IGNvbHVtbi5uYW1lICYmXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDZWxsc1tpbmRleF0ucm93LmRhdGEgPT09IGVsZW1lbnQuZGF0YSkge1xyXG4gICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NUb0NlbGwocm93LCBjb2x1bW46IENvbHVtbkNvbmZpZyl7XHJcbiAgICBsZXQgY2xhc3NUb0NlbGwgPSAnJztcclxuICAgIGlmKHRoaXMuY29uZmlnQ2VsbFN0eWxlcyl7XHJcbiAgICAgIGxldCBmb3VuZCA9IHRoaXMuY29uZmlnQ2VsbFN0eWxlcy5maW5kKGMgPT4ge1xyXG4gICAgICAgIHJldHVybiBjLmNlbGxEYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgY29sdW1uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKGZvdW5kKXtcclxuICAgICAgICBjbGFzc1RvQ2VsbCA9IGZvdW5kLmNsYXNzQ2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzVG9DZWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NUb1Jvdyhyb3cpe1xyXG4gICAgbGV0IGNsYXNzVG9Sb3cgPSAnJztcclxuICAgIGlmKHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbil7XHJcbiAgICAgIGxldCBmb3VuZCA9IHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbi5maW5kKGMgPT4ge1xyXG4gICAgICAgIHJldHVybiBjLmRhdGEgPT09IHRoaXMuZ2V0VmFsdWUocm93LCBjLmNvbHVtbik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZihmb3VuZCl7XHJcbiAgICAgICAgY2xhc3NUb1JvdyA9IGZvdW5kLmNsYXNzUm93O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NUb1JvdztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==