/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatTable } from '@angular/material';
import clonedeep from 'lodash.clonedeep';
import { ChangeColumnConfigurationType, ColumnConfigUtil, TableHelisaType, TotalType } from './table-helisa.interface';
import { TableHelisaService } from './table-helisa.service';
import { TableHelisaConnectComponent } from './table-helisa-connect.component';
import { moveItemInArray } from '@angular/cdk/drag-drop';
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
 * @record
 */
export function AddRowButton() { }
if (false) {
    /** @type {?} */
    AddRowButton.prototype.text;
    /** @type {?} */
    AddRowButton.prototype.showButton;
}
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
        this.scrollCount = 0;
        this.sort = new EventEmitter();
        this.total = new EventEmitter();
        this.search = new EventEmitter();
        this.select = new EventEmitter();
        this.selectCell = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.showTitle = true;
        this.multipleCell = false;
        this.selectedCells = new Array();
        this.drop = new EventEmitter();
        this.isDragged = false;
        this.addRowButton = { showButton: false, text: "" };
        this.addRow = new EventEmitter();
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
        this.indexRowSelect = idRowSelected;
        if (this.rawData && this.rawData.length) {
            if ((idRowSelected >= this.rawData.length || idRowSelected < 0)) {
                this.indexRowSelect = 0;
            }
            this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW });
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
        if (this.rawData && this.rawData.length && this.indexRowSelect && !this.selectedObject) {
            if (this.indexRowSelect >= this.rawData.length || this.indexRowSelect < 0)
                this.indexRowSelect = 0;
            this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW });
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
     * @return {?}
     */
    dblClickCell() {
        this.selectCell.emit(this.selectedCells);
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
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        let array = this.data.data;
        moveItemInArray(array, event.previousIndex, event.currentIndex);
        this.drop.emit({ value: array[event.previousIndex].data, order: event.currentIndex });
        this.data.data = clonedeep(array);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    tableKeydown(event) {
        if (!this.multipleCell) {
            /** @type {?} */
            let currentIndex = this.data.data.findIndex((/**
             * @param {?} row
             * @return {?}
             */
            row => row.data === this.selectedObject));
            /** @type {?} */
            let newSelection = -10;
            if (event.key === 'ArrowDown') {
                this.scrollCount++;
                this.data.data.forEach((/**
                 * @param {?} row
                 * @param {?} index
                 * @return {?}
                 */
                (row, index) => {
                    if (newSelection == -10 && index > currentIndex && row.rowType == RowType.ROW)
                        newSelection = index;
                }));
            }
            if (event.key === 'ArrowUp') {
                this.scrollCount--;
                currentIndex = this.data.data.length - currentIndex - 1;
                this.data.data.reverse().forEach((/**
                 * @param {?} row
                 * @param {?} index
                 * @return {?}
                 */
                (row, index) => {
                    if (newSelection == -10 && index > currentIndex && row.rowType == RowType.ROW)
                        newSelection = index;
                }));
                this.data.data.reverse();
                if (newSelection != -10) {
                    newSelection = this.data.data.length - newSelection - 1;
                }
            }
            if (newSelection != -10) {
                this.selectedObject = this.data.data[newSelection].data;
            }
            if (Math.abs(this.scrollCount) >= 2)
                this.scrollCount = 0;
            else
                event.preventDefault();
        }
    }
    /**
     * Emite el evento cuando se da click al boton AddRow
     * @return {?}
     */
    onAddRow() {
        this.addRow.emit();
    }
}
TableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-table',
                template: "\r\n<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\r\n<div class=\"div-table-helisa\">\r\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\r\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\">\r\n    <table cdkDropList (cdkDropListDropped)=\"onDrop($event)\" mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\r\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" >\r\n      <ng-container [matColumnDef]=\"column.name\" *ngFor=\"let column of columnConfig; let idx = index\">\r\n        <div *ngIf=\"!column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef> {{column.title}} </th>\r\n        </div>\r\n        <div *ngIf=\"column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{column.title}} </th>\r\n        </div>\r\n        <td mat-cell *matCellDef=\"let element\" (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\r\n          [class.selected-row]=\"isSelectedCell(element, column) >= 0\" [ngClass]=\"getClassToCell(element.data, column)\">\r\n          {{ getValue(element.data, column) }}\r\n        </td>\r\n        <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"groupHeader\">\r\n        <td mat-cell *matCellDef=\"let group\">\r\n          <strong>{{ getGroupDescription(group.data) }}</strong>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\r\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\r\n      </ng-container>\r\n\r\n      <div *ngIf=\"showFooter\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\r\n      </div>\r\n      <div *ngIf=\"showTitle\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></tr>\r\n      </div>\r\n      <div *ngIf=\"isDragged\">\r\n        <tr cdkDrag [cdkDragData]=\"row\" mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\r\n          (click)=\"selectRow(row)\" [class.selected-row]=\"row.data === selectedObject && !multipleCell\"\r\n          [ngClass]=\"getClassToRow(row.data)\"></tr>\r\n      </div>\r\n      <div *ngIf=\"!isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row)\"\r\n          [class.selected-row]=\"row.data === selectedObject && !multipleCell\" [ngClass]=\"getClassToRow(row.data)\"></tr>\r\n      </div>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: footerDisplayedColumns(); when: isGroupFooter\"></tr>\r\n    </table>\r\n  </div>\r\n</div>",
                styles: [".div-table-helisa .container-table{width:100%;height:100%}.div-table-helisa .container-table .table-helisa{width:100%}.div-table-helisa .container-table .table-helisa /deep/ tbody tr,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr,.div-table-helisa .container-table .table-helisa /deep/ thead tr{height:26px}.div-table-helisa .container-table .table-helisa /deep/ tbody tr td,.div-table-helisa .container-table .table-helisa /deep/ tbody tr th,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,.div-table-helisa .container-table .table-helisa /deep/ thead tr td,.div-table-helisa .container-table .table-helisa /deep/ thead tr th{padding:2px 10px 0}.div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}.div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}.div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}.div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}.div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
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
    drop: [{ type: Output }],
    isDragged: [{ type: Input }],
    addRowButton: [{ type: Input }],
    addRow: [{ type: Output }],
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
    TableHelisaComponent.prototype.indexRowSelect;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.scrollCount;
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
    TableHelisaComponent.prototype.drop;
    /** @type {?} */
    TableHelisaComponent.prototype.isDragged;
    /** @type {?} */
    TableHelisaComponent.prototype.addRowButton;
    /** @type {?} */
    TableHelisaComponent.prototype.addRow;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUUsT0FBTyxTQUFTLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxFQUNMLDZCQUE2QixFQUU3QixnQkFBZ0IsRUFJaEIsZUFBZSxFQUVmLFNBQVMsRUFLVixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBZSxlQUFlLEVBQXFCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFekYsc0JBR0M7OztJQUZDLHVCQUFVOztJQUNWLDBCQUFpQjs7OztJQUlqQixjQUFXLEVBQUUsZUFBWSxFQUFFLE1BQUc7Ozs7Ozs7O0FBR2hDLGtDQUdDOzs7SUFGQyw0QkFBYTs7SUFDYixrQ0FBbUI7Ozs7O0FBUXJCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFxQy9CLFlBQW9CLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQS9CdkQscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBSWhDLFNBQUksR0FBb0IsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUM5QyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFakIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFLdEIsU0FBSSxHQUE4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RTs7SUFDaEUsMENBQW1COztJQUNuQiwwQ0FBbUI7Ozs7O0lBRVAsNENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZSwgTWF0VGFibGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90eXBpbmdzL3NvcnQnO1xyXG5pbXBvcnQgY2xvbmVkZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLFxyXG4gIENvbHVtbkNvbmZpZyxcclxuICBDb2x1bW5Db25maWdVdGlsLFxyXG4gIEV2ZW50Q29sdW1uLFxyXG4gIEV2ZW50U2VhcmNoLFxyXG4gIFJlcXVlc3RUYWJsZUhlbGlzYSxcclxuICBUYWJsZUhlbGlzYVR5cGUsXHJcbiAgVG90YWxHcm91cCxcclxuICBUb3RhbFR5cGUsXHJcbiAgQ2VsbCxcclxuICBDb25maWdDZWxsU3R5bGVzLFxyXG4gIENvbmZpZ1Jvd1N0eWxlcyxcclxuICBEcm9wRWxlbWVudFxyXG59IGZyb20gJy4vdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRhYmxlSGVsaXNhU2VydmljZSB9IGZyb20gJy4vdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWhlbGlzYS1jb25uZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5pbnRlcmZhY2UgUm93RGF0YSB7XHJcbiAgZGF0YTogYW55O1xyXG4gIHJvd1R5cGU6IFJvd1R5cGU7XHJcbn1cclxuXHJcbmVudW0gUm93VHlwZSB7XHJcbiAgR1JPVVBfVElUTEUsIEdST1VQX0ZPT1RFUiwgUk9XXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkUm93QnV0dG9ueyAgXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHNob3dCdXR0b246Ym9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgdGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50OiBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD47XHJcbiAgdG90YWxEYXRhOiBBcnJheTxudW1iZXI+O1xyXG4gIHJhd0RhdGE6IEFycmF5PFQ+O1xyXG4gIGRhdGE6IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPjtcclxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxuICBzZWxlY3RlZE9iamVjdDogVDtcclxuICBsYXN0U2VhcmNoOiBzdHJpbmc7XHJcbiAgdHlwZTogVGFibGVIZWxpc2FUeXBlID0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xyXG4gIGlzU2V0U2VsZWN0ZWRSb3cgPSBmYWxzZTtcclxuICBpbmRleFJvd1NlbGVjdDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc2Nyb2xsQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgbWF0U29ydDogTWF0U29ydDtcclxuICBAVmlld0NoaWxkKE1hdFRhYmxlKSBtYXRUYWJsZTogTWF0VGFibGU8YW55PjtcclxuXHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xyXG4gIEBPdXRwdXQoKSB0b3RhbDogRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+KCk7XHJcbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RDZWxsID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsW10+KCk7XHJcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8UmVxdWVzdFRhYmxlSGVsaXNhPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmVxdWVzdFRhYmxlSGVsaXNhPigpO1xyXG4gIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XHJcbiAgQElucHV0KCkgbXVsdGlwbGVDZWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBjb25maWdDZWxsU3R5bGVzOiBBcnJheTxDb25maWdDZWxsU3R5bGVzPjtcclxuICBASW5wdXQoKSBjb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uOiBBcnJheTxDb25maWdSb3dTdHlsZXM+O1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkQ2VsbHM6IEFycmF5PENlbGw+ID0gbmV3IEFycmF5PENlbGw+KCk7XHJcbiAgQE91dHB1dCgpIGRyb3A6IEV2ZW50RW1pdHRlcjxEcm9wRWxlbWVudDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BFbGVtZW50PFQ+PigpO1xyXG4gIEBJbnB1dCgpIGlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFkZFJvd0J1dHRvbjpBZGRSb3dCdXR0b24gPSB7c2hvd0J1dHRvbjpmYWxzZSwgdGV4dDpcIlwifTtcclxuICBAT3V0cHV0KCkgYWRkUm93OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgc2hvd0Zvb3RlciA9IGZhbHNlO1xyXG4gIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlSGVsaXNhU2VydmljZTxUPikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50YWJsZVNlcnZpY2UubmV4dFBhZ2VSZXR1cm4uc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhID0+IHtcclxuICAgICAgICBpZiAoIWRhdGEudGFibGUgfHwgZGF0YS50YWJsZSA9PT0gdGhpcykge1xyXG4gICAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLm9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy50YWJsZVNlcnZpY2UudG90YWxSZXR1cm4uc3Vic2NyaWJlKGluZm8gPT4ge1xyXG4gICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbiwgaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoY29sdW1uID09PSBpbmZvLm9iai5jb2x1bW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b3RhbERhdGFbaWR4XSA9IHRoaXMuZ2V0R3JvdXBWYWx1ZShjb2x1bW4sIHsgc3VtOiBpbmZvLm9iai52YWx1ZSwgY291bnQ6IHRoaXMuY291bnQgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYXRTb3J0LnNvcnRDaGFuZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAoZXZlbnQ6IFNvcnQpID0+IHtcclxuICAgICAgICBjb25zdCBjb2x1bW46IENvbHVtbkNvbmZpZyA9IHRoaXMuY29sdW1uQ29uZmlnLmZpbmQoYyA9PiBjLm5hbWUgPT09IGV2ZW50LmFjdGl2ZSk7XHJcbiAgICAgICAgY29sdW1uLnNvcnREaXJlY3Rpb24gPSBldmVudC5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5zb3J0LmVtaXQoeyBjb2x1bW4sIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZywgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUuU09SVCB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLm11bHRpcGxlQ2VsbCkge1xyXG4gICAgICB0aGlzLm1hdFRhYmxlLnJlbmRlclJvd3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlzUmVtb3RlKHc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHlwZSA9IHcgPyBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFIDogVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLlJFTU9URSkge1xyXG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCA9IG5ldyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD4oKTtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9IGVsc2UgeyB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCA9IHVuZGVmaW5lZDsgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY29sdW1uQ29uZmlndXJhdGlvbihjb2x1bW5Db25maWd1cmF0aW9uOiBBcnJheTxDb2x1bW5Db25maWc+KSB7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZyA9IGNvbHVtbkNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpO1xyXG4gICAgaWYgKGNvbHVtbkNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgY29sdW1uQ29uZmlndXJhdGlvbi5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgaWYgKGNvbHVtbi52aXNpYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaChjb2x1bW4ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMucmF3RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLnJhd0RhdGEgPSBkYXRhU291cmNlO1xyXG4gICAgaWYgKHRoaXMucmF3RGF0YSkgeyB0aGlzLnByZXBhcmVEYXRhU291cmNlKCk7IH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkSW5kZXhSb3coaWRSb3dTZWxlY3RlZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gaWRSb3dTZWxlY3RlZDtcclxuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCkge1xyXG4gICAgICBpZiAoKGlkUm93U2VsZWN0ZWQgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCBpZFJvd1NlbGVjdGVkIDwgMCkpIHtcclxuICAgICAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdFJvdyh7IGRhdGE6IHRoaXMucmF3RGF0YVt0aGlzLmluZGV4Um93U2VsZWN0XSwgcm93VHlwZTogUm93VHlwZS5ST1cgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVEYXRhU291cmNlKCkge1xyXG4gICAgY29uc3QgY2hhbmdlRGF0YSA9IEFycmF5PFJvd0RhdGE+KCk7XHJcbiAgICBsZXQgaGF2ZUdyb3VwID0gZmFsc2U7XHJcbiAgICBsZXQgZ3JvdXBGb290ZXI6IEFycmF5PFRvdGFsR3JvdXA+O1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSAhPT0gdW5kZWZpbmVkICYmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5MT0NBTCB8fCB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5wYWdlIDw9IDEpKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbERhdGEgPSBuZXcgQXJyYXk8bnVtYmVyPih0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0Zvb3RlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b3RhbC5lbWl0KHsgY29sdW1uLCBjb2x1bW5Db25maWd1cmF0aW9uczogdGhpcy5jb2x1bW5Db25maWcsIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLlRPVEFMIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd1NlYXJjaCA9IHRoaXMuc2hvd1NlYXJjaCB8fCBjb2x1bW4uc2VhcmNoYWJsZTtcclxuICAgICAgaGF2ZUdyb3VwID0gaGF2ZUdyb3VwIHx8IGNvbHVtbi5ncm91cGFibGU7XHJcbiAgICB9KTtcclxuICAgIGlmIChoYXZlR3JvdXApIHtcclxuICAgICAgdGhpcy5yYXdEYXRhID0gdGhpcy5yYXdEYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuY29tcGFyZShhLCBiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMucmF3RGF0YS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIGlmIChoYXZlR3JvdXAgJiYgKGNoYW5nZURhdGEubGVuZ3RoID09PSAwIHx8IHRoaXMuY29tcGFyZShjaGFuZ2VEYXRhW2NoYW5nZURhdGEubGVuZ3RoIC0gMV0uZGF0YSwgcm93KSAhPT0gMCkpIHtcclxuICAgICAgICBpZiAoZ3JvdXBGb290ZXIpIHtcclxuICAgICAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IGdyb3VwRm9vdGVyLCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX0ZPT1RFUiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX1RJVExFIH0pO1xyXG4gICAgICAgIGdyb3VwRm9vdGVyID0gbmV3IEFycmF5PFRvdGFsR3JvdXA+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhhdmVHcm91cCkgeyB0aGlzLmFkZFRvdGFsR3JvdXAoZ3JvdXBGb290ZXIsIHJvdyk7IH1cclxuICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPihjaGFuZ2VEYXRhKTtcclxuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCAmJiB0aGlzLmluZGV4Um93U2VsZWN0ICYmICF0aGlzLnNlbGVjdGVkT2JqZWN0KSB7XHJcbiAgICAgIGlmICh0aGlzLmluZGV4Um93U2VsZWN0ID49IHRoaXMucmF3RGF0YS5sZW5ndGggfHwgdGhpcy5pbmRleFJvd1NlbGVjdCA8IDApXHJcbiAgICAgICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IDA7XHJcbiAgICAgIHRoaXMuc2VsZWN0Um93KHsgZGF0YTogdGhpcy5yYXdEYXRhW3RoaXMuaW5kZXhSb3dTZWxlY3RdLCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVG90YWxHcm91cChyb3dUb3RhbDogQXJyYXk8VG90YWxHcm91cD4sIHJvdzogYW55KSB7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAocm93VG90YWxbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XSA9IHsgc3VtOiBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKHJvdywgY29sdW1uKSwgY291bnQ6IDEgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLnN1bSArPSBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKHJvdywgY29sdW1uKTtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5jb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBhcmUoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xyXG4gICAgbGV0IHdzID0gMDtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgaWYgKHdzID09PSAwICYmIGNvbHVtbi5ncm91cGFibGUpIHtcclxuICAgICAgICBpZiAoQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShhLCBjb2x1bW4pIDwgQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShiLCBjb2x1bW4pKSB7IHdzID0gLTE7IH0gZWxzZSBpZiAoQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShhLCBjb2x1bW4pID4gQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShiLCBjb2x1bW4pKSB7IHdzID0gMTsgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB3cztcclxuICB9XHJcblxyXG4gIGdldEdyb3VwRGVzY3JpcHRpb24ob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLmdyb3VwYWJsZSkge1xyXG4gICAgICAgIHJlc3VsdCArPSAocmVzdWx0Lmxlbmd0aCA/ICcgLSAnIDogJycpICsgQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShvYmosIGNvbHVtbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzR3JvdXBUaXRsZShpbmRleCwgaXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9USVRMRTtcclxuICB9XHJcblxyXG4gIGlzUm93KGluZGV4LCBpdGVtKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLlJPVztcclxuICB9XHJcblxyXG4gIGlzR3JvdXBGb290ZXIoaW5kZXgsIGl0ZW0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfRk9PVEVSO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZENvbHVtbnMubWFwKG5hbWUgPT4gJ2Zvb3Rlci0nICsgbmFtZSk7XHJcbiAgfVxyXG5cclxuICBnZXRHcm91cFZhbHVlKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBkYXRhOiBUb3RhbEdyb3VwKTogbnVtYmVyIHtcclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuU1VNKSB7IHJldHVybiBkYXRhLnN1bTsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5DT1VOVCkgeyByZXR1cm4gZGF0YS5jb3VudDsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5BVkVSQUdFKSB7IHJldHVybiAxLiAqIGRhdGEuc3VtIC8gZGF0YS5jb3VudDsgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKG9iajogYW55LCBjb2x1bW46IENvbHVtbkNvbmZpZykge1xyXG4gICAgcmV0dXJuIENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUob2JqLCBjb2x1bW4pO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoVGV4dCh0ZXh0KSB7XHJcbiAgICB0aGlzLmxhc3RTZWFyY2ggPSB0ZXh0O1xyXG4gICAgdGhpcy5zZWFyY2guZW1pdCh7IHRleHQsIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZyB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhyb3cpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSByb3cuZGF0YTtcclxuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5zZWxlY3RlZE9iamVjdCk7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChldmVudCkge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZiAoZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LnNjcm9sbFRvcCA8IDEwMDApIHtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdvTmV4dFBhZ2UoKSB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFICYmICF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlICYmICF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQpIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5uZXh0UGFnZS5lbWl0KHtcclxuICAgICAgICBwYWdlOiB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5uZXh0UGFnZSgpLFxyXG4gICAgICAgIGJvZHk6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmdldEJvZHkodGhpcy5jb2x1bW5Db25maWcsIHRoaXMubGFzdFNlYXJjaClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlY2VpdmVQYWdlKGRhdGE6IFRbXSkge1xyXG4gICAgaWYgKCF0aGlzLnJhd0RhdGEpIHsgdGhpcy5yYXdEYXRhID0gbmV3IEFycmF5PFQ+KCk7IH1cclxuICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5jb25jYXQoZGF0YSk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFKSB7XHJcbiAgICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgPSBkYXRhLmxlbmd0aCA9PT0gMDtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRibENsaWNrQ2VsbCgpIHtcclxuICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHRoaXMuc2VsZWN0ZWRDZWxscyk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZENlbGwoZWxlbWVudCwgY29sdW1uOiBDb2x1bW5Db25maWcpIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuaXNTZWxlY3RlZENlbGwoZWxlbWVudCwgY29sdW1uKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDZWxscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZENlbGxzLnB1c2goeyBjb2x1bW46IGNvbHVtbiwgcm93OiBlbGVtZW50IH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRDZWxsKGVsZW1lbnQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLm11bHRpcGxlQ2VsbCkge1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zZWxlY3RlZENlbGxzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2VsbHNbaW5kZXhdLmNvbHVtbi5uYW1lID09PSBjb2x1bW4ubmFtZSAmJlxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZENlbGxzW2luZGV4XS5yb3cuZGF0YSA9PT0gZWxlbWVudC5kYXRhKSB7XHJcbiAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc1RvQ2VsbChyb3csIGNvbHVtbjogQ29sdW1uQ29uZmlnKSB7XHJcbiAgICBsZXQgY2xhc3NUb0NlbGwgPSAnJztcclxuICAgIGlmICh0aGlzLmNvbmZpZ0NlbGxTdHlsZXMpIHtcclxuICAgICAgbGV0IGZvdW5kID0gdGhpcy5jb25maWdDZWxsU3R5bGVzLmZpbmQoYyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGMuY2VsbERhdGEgPT09IHRoaXMuZ2V0VmFsdWUocm93LCBjb2x1bW4pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgY2xhc3NUb0NlbGwgPSBmb3VuZC5jbGFzc0NlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc1RvQ2VsbDtcclxuICB9XHJcblxyXG4gIGdldENsYXNzVG9Sb3cocm93KSB7XHJcbiAgICBsZXQgY2xhc3NUb1JvdyA9ICcnO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbikge1xyXG4gICAgICBsZXQgZm91bmQgPSB0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4uZmluZChjID0+IHtcclxuICAgICAgICByZXR1cm4gYy5kYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgYy5jb2x1bW4pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgY2xhc3NUb1JvdyA9IGZvdW5kLmNsYXNzUm93O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NUb1JvdztcclxuICB9XHJcblxyXG4gIG9uRHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8YW55Pikge1xyXG4gICAgbGV0IGFycmF5OiBSb3dEYXRhW10gPSB0aGlzLmRhdGEuZGF0YTtcclxuICAgIG1vdmVJdGVtSW5BcnJheShhcnJheSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuZHJvcC5lbWl0KHt2YWx1ZTogYXJyYXlbZXZlbnQucHJldmlvdXNJbmRleF0uZGF0YSwgb3JkZXI6IGV2ZW50LmN1cnJlbnRJbmRleH0pO1xyXG4gICAgdGhpcy5kYXRhLmRhdGEgPSBjbG9uZWRlZXAoYXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgdGFibGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMubXVsdGlwbGVDZWxsKSB7XHJcbiAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuZGF0YS5maW5kSW5kZXgocm93ID0+IHJvdy5kYXRhID09PSB0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IC0xMDtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbENvdW50Kys7XHJcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PSAtMTAgJiYgaW5kZXggPiBjdXJyZW50SW5kZXggJiYgcm93LnJvd1R5cGUgPT0gUm93VHlwZS5ST1cpXHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQtLTtcclxuICAgICAgICBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLnJldmVyc2UoKS5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09IC0xMCAmJiBpbmRleCA+IGN1cnJlbnRJbmRleCAmJiByb3cucm93VHlwZSA9PSBSb3dUeXBlLlJPVylcclxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEucmV2ZXJzZSgpO1xyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gIT0gLTEwKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBuZXdTZWxlY3Rpb24gLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uICE9IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSB0aGlzLmRhdGEuZGF0YVtuZXdTZWxlY3Rpb25dLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgaWYoTWF0aC5hYnModGhpcy5zY3JvbGxDb3VudCk+PTIpXHJcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCA9IDA7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgZWwgZXZlbnRvIGN1YW5kbyBzZSBkYSBjbGljayBhbCBib3RvbiBBZGRSb3dcclxuICAgKi9cclxuICBvbkFkZFJvdygpe1xyXG4gICAgdGhpcy5hZGRSb3cuZW1pdCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19