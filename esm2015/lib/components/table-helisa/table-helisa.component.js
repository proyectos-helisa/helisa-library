/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort, MatTable, MatTableDataSource } from '@angular/material';
import clonedeep from 'lodash.clonedeep';
import { ChangeColumnConfigurationType, ColumnConfigUtil, EventScope, TableHelisaType, TotalType } from './table-helisa.interface';
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
        /**
         * Deprecado, cambiar por electObject
         */
        this.select = new EventEmitter();
        this.selectCell = new EventEmitter();
        this.selectObject = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.showTitle = true;
        this.isCellSelection = false;
        this.drop = new EventEmitter();
        this.isDragged = false;
        this.addRowButton = { showButton: false, text: "" };
        this.addRow = new EventEmitter();
        this.bookClicked = new EventEmitter();
        this.addBookButton = false;
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
        this.tableService.emitVisibleButton.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data != undefined && data != null) {
                this.addRowButton.showButton = data;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.isCellSelection) {
            this.matTable.renderRows();
        }
    }
    /**
     * @param {?} w
     * @return {?}
     */
    set isRemote(w) {
        this.type = w ? TableHelisaType.REMOTE : TableHelisaType.LOCAL;
        this.tableHelisaConnectComponent = new TableHelisaConnectComponent();
        if (this.type === TableHelisaType.REMOTE) {
            this.goNextPage();
        }
        else {
            this.tableHelisaConnectComponent.page++;
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
            this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
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
            this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
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
     * @param {?} isUser
     * @return {?}
     */
    selectRow(row, isUser) {
        this.selectedObject = row.data;
        this.select.emit(this.selectedObject);
        this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
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
        if (!this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
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
        //if (this.type === TableHelisaType.REMOTE) {
        this.tableHelisaConnectComponent.isLastPage = data.length === 0;
        this.tableHelisaConnectComponent.isUsed = false;
        //}
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
        this.selectedCells = { column: column, row: element };
        this.selectCell.emit(this.selectedCells);
    }
    /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    isSelectedCell(row, column) {
        if (this.isCellSelection) {
            if (this.selectedCells != null) {
                if (this.selectedCells.column.name === column.name &&
                    this.selectedCells.row.data === row.data) {
                    return true;
                }
            }
        }
        return false;
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
        this.drop.emit({ value: array[event.currentIndex].data, order: event.currentIndex });
        this.data.data = clonedeep(array);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    tableKeydown(event) {
        if (!this.isCellSelection) {
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
    /**
     * @param {?} selectedObject
     * @return {?}
     */
    onBookClicked(selectedObject) {
        this.bookClicked.emit(selectedObject);
    }
}
TableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-table',
                template: "\r\n<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\r\n<div class=\"div-table-helisa\">\r\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\r\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\">\r\n      <ng-container *ngIf=\"addBookButton\">\r\n          <div class=\"buttons-container\" [ngClass]=\"{'hasTitle':showTitle}\">\r\n              <div *ngFor=\"let item of rawData\">   \r\n                  <button mat-icon-button *ngIf=\"item === selectedObject\" (click)=\"onBookClicked(selectedObject)\">\r\n                      <mat-icon>import_contacts</mat-icon>\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </ng-container>\r\n    <table cdkDropList (cdkDropListDropped)=\"onDrop($event)\" mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\r\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" >\r\n      <ng-container [matColumnDef]=\"column.name\" *ngFor=\"let column of columnConfig; let idx = index\">\r\n        <div *ngIf=\"!column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef> {{column.title}} </th>\r\n        </div>\r\n        <div *ngIf=\"column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{column.title}} </th>\r\n        </div>\r\n        <td mat-cell *matCellDef=\"let element\" (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\r\n          [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\r\n          {{ getValue(element.data, column) }}          \r\n        </td>       \r\n        <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"groupHeader\">\r\n        <td mat-cell *matCellDef=\"let group\">\r\n          <strong>{{ getGroupDescription(group.data) }}</strong>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\r\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\r\n      </ng-container>\r\n\r\n      <div *ngIf=\"showFooter\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\r\n      </div>\r\n      <div *ngIf=\"showTitle\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></tr>\r\n      </div>\r\n      <div *ngIf=\"isDragged\">\r\n        <tr cdkDrag [cdkDragData]=\"row\" mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\r\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\r\n          [ngClass]=\"getClassToRow(row.data)\"></tr>\r\n      </div>\r\n      <div *ngIf=\"!isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row, true)\"\r\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\"></tr>\r\n      </div>     \r\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: footerDisplayedColumns(); when: isGroupFooter\"></tr>\r\n    </table>\r\n   \r\n    \r\n  </div>\r\n</div>\r\n",
                styles: ["/deep/ hel-table{position:relative}/deep/ hel-table>button{justify-content:center;align-items:flex-start;background:0 0;position:absolute;color:transparent;overflow:hidden;cursor:pointer;display:flex;border:none;height:26px;z-index:101;width:20px;opacity:.5;right:0;top:0}/deep/ hel-table>button:focus{outline:0}/deep/ hel-table>button:hover{opacity:1}/deep/ hel-table>button:before{justify-content:center;align-items:center;position:absolute;font-size:20px;display:flex;content:'+';color:#fff;height:26px;width:20px}/deep/ hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}/deep/ hel-table .buttons-container{order:2}/deep/ hel-table .buttons-container.hasTitle{padding-top:26px}/deep/ hel-table .buttons-container>div{height:26px}/deep/ hel-table .buttons-container>div button{justify-content:center;align-items:center;display:flex;height:26px}/deep/ hel-table .buttons-container>div button>*{display:flex;height:100%}/deep/ hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa{width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr{height:26px}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{padding:2px 10px 0}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table .div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
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
    selectObject: [{ type: Output }],
    nextPage: [{ type: Output }],
    showTitle: [{ type: Input }],
    isCellSelection: [{ type: Input }],
    count: [{ type: Input }],
    configCellStyles: [{ type: Input }],
    configRowStylesFromColumn: [{ type: Input }],
    selectedCells: [{ type: Input }],
    drop: [{ type: Output }],
    isDragged: [{ type: Input }],
    addRowButton: [{ type: Input }],
    addRow: [{ type: Output }],
    bookClicked: [{ type: Output }],
    addBookButton: [{ type: Input }],
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
    /**
     * Deprecado, cambiar por electObject
     * @type {?}
     */
    TableHelisaComponent.prototype.select;
    /** @type {?} */
    TableHelisaComponent.prototype.selectCell;
    /** @type {?} */
    TableHelisaComponent.prototype.selectObject;
    /** @type {?} */
    TableHelisaComponent.prototype.nextPage;
    /** @type {?} */
    TableHelisaComponent.prototype.showTitle;
    /** @type {?} */
    TableHelisaComponent.prototype.isCellSelection;
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
    TableHelisaComponent.prototype.bookClicked;
    /** @type {?} */
    TableHelisaComponent.prototype.addBookButton;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFeEUsT0FBTyxTQUFTLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxFQUdMLDZCQUE2QixFQUU3QixnQkFBZ0IsRUFLaEIsVUFBVSxFQUlWLGVBQWUsRUFFZixTQUFTLEVBQ1YsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RSxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFcEUsc0JBR0M7OztJQUZDLHVCQUFVOztJQUNWLDBCQUFpQjs7OztJQUlqQixjQUFXLEVBQUUsZUFBWSxFQUFFLE1BQUc7Ozs7Ozs7O0FBVWhDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUE0Qy9CLFlBQW9CLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQXRDdkQscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBSWhDLFNBQUksR0FBb0IsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUM5QyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFakIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFLdEIsU0FBSSxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ2xFLFVBQUss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SUFDNUUscUNBQTZFOztJQUM3RSxzQ0FBOEU7Ozs7O0lBSzlFLHNDQUEwRDs7SUFDMUQsMENBQWdEOztJQUNoRCw0Q0FBNEY7O0lBQzVGLHdDQUE4Rjs7SUFDOUYseUNBQTBCOztJQUMxQiwrQ0FBaUM7O0lBQ2pDLHFDQUF1Qjs7SUFDdkIsZ0RBQW1EOztJQUNuRCx5REFBMkQ7O0lBQzNELDZDQUE2Qjs7SUFDN0Isb0NBQWtGOztJQUNsRix5Q0FBMkI7O0lBQzNCLDRDQUFpRTs7SUFDakUsc0NBQWdFOztJQUNoRSwyQ0FBK0Q7O0lBQy9ELDZDQUF1Qzs7SUFDdkMsMENBQW1COztJQUNuQiwwQ0FBbUI7Ozs7O0lBRVAsNENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFNvcnQsIE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90eXBpbmdzL3NvcnQnO1xyXG5pbXBvcnQgY2xvbmVkZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xyXG5pbXBvcnQge1xyXG4gIEFkZFJvd0J1dHRvbixcclxuICBDZWxsLFxyXG4gIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLFxyXG4gIENvbHVtbkNvbmZpZyxcclxuICBDb2x1bW5Db25maWdVdGlsLFxyXG4gIENvbmZpZ0NlbGxTdHlsZXMsXHJcbiAgQ29uZmlnUm93U3R5bGVzLFxyXG4gIERyb3BFbGVtZW50LFxyXG4gIEV2ZW50Q29sdW1uLFxyXG4gIEV2ZW50U2NvcGUsXHJcbiAgRXZlbnRTZWFyY2gsXHJcbiAgUmVxdWVzdFRhYmxlSGVsaXNhLFxyXG4gIFNlbGVjdE9iamVjdCxcclxuICBUYWJsZUhlbGlzYVR5cGUsXHJcbiAgVG90YWxHcm91cCxcclxuICBUb3RhbFR5cGVcclxufSBmcm9tICcuL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1RhYmxlSGVsaXNhU2VydmljZX0gZnJvbSAnLi90YWJsZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7VGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50fSBmcm9tICcuL3RhYmxlLWhlbGlzYS1jb25uZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5pbnRlcmZhY2UgUm93RGF0YSB7XHJcbiAgZGF0YTogYW55O1xyXG4gIHJvd1R5cGU6IFJvd1R5cGU7XHJcbn1cclxuXHJcbmVudW0gUm93VHlwZSB7XHJcbiAgR1JPVVBfVElUTEUsIEdST1VQX0ZPT1RFUiwgUk9XXHJcbn1cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgdGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50OiBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD47XHJcbiAgdG90YWxEYXRhOiBBcnJheTxudW1iZXI+O1xyXG4gIHJhd0RhdGE6IEFycmF5PFQ+O1xyXG4gIGRhdGE6IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPjtcclxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxuICBzZWxlY3RlZE9iamVjdDogVDtcclxuICBsYXN0U2VhcmNoOiBzdHJpbmc7XHJcbiAgdHlwZTogVGFibGVIZWxpc2FUeXBlID0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xyXG4gIGlzU2V0U2VsZWN0ZWRSb3cgPSBmYWxzZTtcclxuICBpbmRleFJvd1NlbGVjdDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc2Nyb2xsQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgbWF0U29ydDogTWF0U29ydDtcclxuICBAVmlld0NoaWxkKE1hdFRhYmxlKSBtYXRUYWJsZTogTWF0VGFibGU8YW55PjtcclxuXHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xyXG4gIEBPdXRwdXQoKSB0b3RhbDogRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+KCk7XHJcbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2FkbywgY2FtYmlhciBwb3IgZWxlY3RPYmplY3RcclxuICAgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdENlbGwgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGw+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdE9iamVjdDogRXZlbnRFbWl0dGVyPFNlbGVjdE9iamVjdDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdE9iamVjdDxUPj4oKTtcclxuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E+KCk7XHJcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBpc0NlbGxTZWxlY3Rpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvbmZpZ0NlbGxTdHlsZXM6IEFycmF5PENvbmZpZ0NlbGxTdHlsZXM+O1xyXG4gIEBJbnB1dCgpIGNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW46IEFycmF5PENvbmZpZ1Jvd1N0eWxlcz47XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRDZWxsczogQ2VsbDtcclxuICBAT3V0cHV0KCkgZHJvcDogRXZlbnRFbWl0dGVyPERyb3BFbGVtZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+KCk7XHJcbiAgQElucHV0KCkgaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWRkUm93QnV0dG9uOkFkZFJvd0J1dHRvbiA9IHtzaG93QnV0dG9uOmZhbHNlLCB0ZXh0OlwiXCJ9O1xyXG4gIEBPdXRwdXQoKSBhZGRSb3c6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgYm9va0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTsgIFxyXG4gIEBJbnB1dCgpIGFkZEJvb2tCdXR0b246Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHNob3dGb290ZXIgPSBmYWxzZTtcclxuICBzaG93U2VhcmNoID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8VD4pIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudGFibGVTZXJ2aWNlLm5leHRQYWdlUmV0dXJuLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKCFkYXRhLnRhYmxlIHx8IGRhdGEudGFibGUgPT09IHRoaXMpIHtcclxuICAgICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5vYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMudGFibGVTZXJ2aWNlLnRvdGFsUmV0dXJuLnN1YnNjcmliZShpbmZvID0+IHtcclxuICAgICAgaWYgKGluZm8pIHtcclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW4sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNvbHVtbiA9PT0gaW5mby5vYmouY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxEYXRhW2lkeF0gPSB0aGlzLmdldEdyb3VwVmFsdWUoY29sdW1uLCB7IHN1bTogaW5mby5vYmoudmFsdWUsIGNvdW50OiB0aGlzLmNvdW50IH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWF0U29ydC5zb3J0Q2hhbmdlLnN1YnNjcmliZShcclxuICAgICAgKGV2ZW50OiBTb3J0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uOiBDb2x1bW5Db25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZy5maW5kKGMgPT4gYy5uYW1lID09PSBldmVudC5hY3RpdmUpO1xyXG4gICAgICAgIGNvbHVtbi5zb3J0RGlyZWN0aW9uID0gZXZlbnQuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuc29ydC5lbWl0KHsgY29sdW1uLCBjb2x1bW5Db25maWd1cmF0aW9uczogdGhpcy5jb2x1bW5Db25maWcsIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLlNPUlQgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy50YWJsZVNlcnZpY2UuZW1pdFZpc2libGVCdXR0b24uc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhID0+e1xyXG4gICAgICAgIGlmKGRhdGEgIT0gdW5kZWZpbmVkICYmIGRhdGEgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIClcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLm1hdFRhYmxlLnJlbmRlclJvd3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlzUmVtb3RlKHc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHlwZSA9IHcgPyBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFIDogVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xyXG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgPSBuZXcgVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+KCk7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFKSB7XHJcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY29sdW1uQ29uZmlndXJhdGlvbihjb2x1bW5Db25maWd1cmF0aW9uOiBBcnJheTxDb2x1bW5Db25maWc+KSB7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZyA9IGNvbHVtbkNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpO1xyXG4gICAgaWYgKGNvbHVtbkNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgY29sdW1uQ29uZmlndXJhdGlvbi5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgaWYgKGNvbHVtbi52aXNpYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaChjb2x1bW4ubmFtZSk7ICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnJhd0RhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGFTb3VyY2UoZGF0YVNvdXJjZTogQXJyYXk8YW55Pikge1xyXG4gICAgdGhpcy5yYXdEYXRhID0gZGF0YVNvdXJjZTtcclxuICAgIGlmICh0aGlzLnJhd0RhdGEpIHsgdGhpcy5wcmVwYXJlRGF0YVNvdXJjZSgpOyB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZEluZGV4Um93KGlkUm93U2VsZWN0ZWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IGlkUm93U2VsZWN0ZWQ7XHJcbiAgICBpZiAodGhpcy5yYXdEYXRhICYmIHRoaXMucmF3RGF0YS5sZW5ndGgpIHtcclxuICAgICAgaWYgKChpZFJvd1NlbGVjdGVkID49IHRoaXMucmF3RGF0YS5sZW5ndGggfHwgaWRSb3dTZWxlY3RlZCA8IDApKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJlcGFyZURhdGFTb3VyY2UoKSB7XHJcbiAgICBjb25zdCBjaGFuZ2VEYXRhID0gQXJyYXk8Um93RGF0YT4oKTtcclxuICAgIGxldCBoYXZlR3JvdXAgPSBmYWxzZTtcclxuICAgIGxldCBncm91cEZvb3RlcjogQXJyYXk8VG90YWxHcm91cD47XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQgJiYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMIHx8IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LnBhZ2UgPD0gMSkpIHtcclxuICAgICAgICB0aGlzLnRvdGFsRGF0YSA9IG5ldyBBcnJheTxudW1iZXI+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9vdGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRvdGFsLmVtaXQoeyBjb2x1bW4sIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZywgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUuVE9UQUwgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93U2VhcmNoID0gdGhpcy5zaG93U2VhcmNoIHx8IGNvbHVtbi5zZWFyY2hhYmxlO1xyXG4gICAgICBoYXZlR3JvdXAgPSBoYXZlR3JvdXAgfHwgY29sdW1uLmdyb3VwYWJsZTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGhhdmVHcm91cCkge1xyXG4gICAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jb21wYXJlKGEsIGIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yYXdEYXRhLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgaWYgKGhhdmVHcm91cCAmJiAoY2hhbmdlRGF0YS5sZW5ndGggPT09IDAgfHwgdGhpcy5jb21wYXJlKGNoYW5nZURhdGFbY2hhbmdlRGF0YS5sZW5ndGggLSAxXS5kYXRhLCByb3cpICE9PSAwKSkge1xyXG4gICAgICAgIGlmIChncm91cEZvb3Rlcikge1xyXG4gICAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogZ3JvdXBGb290ZXIsIHJvd1R5cGU6IFJvd1R5cGUuR1JPVVBfRk9PVEVSIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuR1JPVVBfVElUTEUgfSk7XHJcbiAgICAgICAgZ3JvdXBGb290ZXIgPSBuZXcgQXJyYXk8VG90YWxHcm91cD4odGhpcy5jb2x1bW5Db25maWcubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGF2ZUdyb3VwKSB7IHRoaXMuYWRkVG90YWxHcm91cChncm91cEZvb3Rlciwgcm93KTsgfVxyXG4gICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE+KGNoYW5nZURhdGEpO1xyXG4gICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoICYmIHRoaXMuaW5kZXhSb3dTZWxlY3QgJiYgIXRoaXMuc2VsZWN0ZWRPYmplY3QpIHtcclxuICAgICAgaWYgKHRoaXMuaW5kZXhSb3dTZWxlY3QgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCB0aGlzLmluZGV4Um93U2VsZWN0IDwgMClcclxuICAgICAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gMDtcclxuICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVG90YWxHcm91cChyb3dUb3RhbDogQXJyYXk8VG90YWxHcm91cD4sIHJvdzogYW55KSB7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAocm93VG90YWxbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XSA9IHsgc3VtOiBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKHJvdywgY29sdW1uKSwgY291bnQ6IDEgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLnN1bSArPSBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKHJvdywgY29sdW1uKTtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5jb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBhcmUoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xyXG4gICAgbGV0IHdzID0gMDtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgaWYgKHdzID09PSAwICYmIGNvbHVtbi5ncm91cGFibGUpIHtcclxuICAgICAgICBpZiAoQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShhLCBjb2x1bW4pIDwgQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShiLCBjb2x1bW4pKSB7IHdzID0gLTE7IH0gZWxzZSBpZiAoQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShhLCBjb2x1bW4pID4gQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShiLCBjb2x1bW4pKSB7IHdzID0gMTsgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB3cztcclxuICB9XHJcblxyXG4gIGdldEdyb3VwRGVzY3JpcHRpb24ob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLmdyb3VwYWJsZSkge1xyXG4gICAgICAgIHJlc3VsdCArPSAocmVzdWx0Lmxlbmd0aCA/ICcgLSAnIDogJycpICsgQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShvYmosIGNvbHVtbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzR3JvdXBUaXRsZShpbmRleCwgaXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9USVRMRTtcclxuICB9XHJcblxyXG4gIGlzUm93KGluZGV4LCBpdGVtKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLlJPVztcclxuICB9XHJcblxyXG4gIGlzR3JvdXBGb290ZXIoaW5kZXgsIGl0ZW0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfRk9PVEVSO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZENvbHVtbnMubWFwKG5hbWUgPT4gJ2Zvb3Rlci0nICsgbmFtZSk7XHJcbiAgfVxyXG5cclxuICBnZXRHcm91cFZhbHVlKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBkYXRhOiBUb3RhbEdyb3VwKTogbnVtYmVyIHtcclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuU1VNKSB7IHJldHVybiBkYXRhLnN1bTsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5DT1VOVCkgeyByZXR1cm4gZGF0YS5jb3VudDsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5BVkVSQUdFKSB7IHJldHVybiAxLiAqIGRhdGEuc3VtIC8gZGF0YS5jb3VudDsgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKG9iajogYW55LCBjb2x1bW46IENvbHVtbkNvbmZpZykge1xyXG4gICAgcmV0dXJuIENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUob2JqLCBjb2x1bW4pO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoVGV4dCh0ZXh0KSB7XHJcbiAgICB0aGlzLmxhc3RTZWFyY2ggPSB0ZXh0O1xyXG4gICAgdGhpcy5zZWFyY2guZW1pdCh7IHRleHQsIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZyB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhyb3csIGlzVXNlcikge1xyXG4gICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHJvdy5kYXRhO1xyXG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICAgIHRoaXMuc2VsZWN0T2JqZWN0LmVtaXQoe3ZhbHVlOiB0aGlzLnNlbGVjdGVkT2JqZWN0LCBzY29wZTogaXNVc2VyID8gRXZlbnRTY29wZS5VU0VSIDogRXZlbnRTY29wZS5DT0RFX0NBTEx9KTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmIChlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wIDwgMTAwMCkge1xyXG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpIHtcclxuICAgIGlmICghdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNMYXN0UGFnZSAmJiAhdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkKSB7XHJcbiAgICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7XHJcbiAgICAgICAgcGFnZTogdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQubmV4dFBhZ2UoKSxcclxuICAgICAgICBib2R5OiB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5nZXRCb2R5KHRoaXMuY29sdW1uQ29uZmlnLCB0aGlzLmxhc3RTZWFyY2gpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWNlaXZlUGFnZShkYXRhOiBUW10pIHtcclxuICAgIGlmICghdGhpcy5yYXdEYXRhKSB7IHRoaXMucmF3RGF0YSA9IG5ldyBBcnJheTxUPigpOyB9XHJcbiAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuY29uY2F0KGRhdGEpO1xyXG4gICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5yYXdEYXRhO1xyXG4gICAgLy9pZiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFKSB7XHJcbiAgICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgPSBkYXRhLmxlbmd0aCA9PT0gMDtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XHJcbiAgICAvL31cclxuICB9XHJcblxyXG4gIGRibENsaWNrQ2VsbCgpIHtcclxuICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHRoaXMuc2VsZWN0ZWRDZWxscyk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZENlbGwoZWxlbWVudCwgY29sdW1uOiBDb2x1bW5Db25maWcpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDZWxscyA9IHsgY29sdW1uOiBjb2x1bW4sIHJvdzogZWxlbWVudCB9O1xyXG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRDZWxsKHJvdywgY29sdW1uOiBDb2x1bW5Db25maWcpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDZWxscyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2VsbHMuY29sdW1uLm5hbWUgPT09IGNvbHVtbi5uYW1lICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2VsbHMucm93LmRhdGEgPT09IHJvdy5kYXRhICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc1RvQ2VsbChyb3csIGNvbHVtbjogQ29sdW1uQ29uZmlnKSB7XHJcbiAgICBsZXQgY2xhc3NUb0NlbGwgPSAnJztcclxuICAgIGlmICh0aGlzLmNvbmZpZ0NlbGxTdHlsZXMpIHtcclxuICAgICAgbGV0IGZvdW5kID0gdGhpcy5jb25maWdDZWxsU3R5bGVzLmZpbmQoYyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGMuY2VsbERhdGEgPT09IHRoaXMuZ2V0VmFsdWUocm93LCBjb2x1bW4pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgY2xhc3NUb0NlbGwgPSBmb3VuZC5jbGFzc0NlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc1RvQ2VsbDtcclxuICB9XHJcblxyXG4gIGdldENsYXNzVG9Sb3cocm93KSB7XHJcbiAgICBsZXQgY2xhc3NUb1JvdyA9ICcnO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbikge1xyXG4gICAgICBsZXQgZm91bmQgPSB0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4uZmluZChjID0+IHtcclxuICAgICAgICByZXR1cm4gYy5kYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgYy5jb2x1bW4pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgY2xhc3NUb1JvdyA9IGZvdW5kLmNsYXNzUm93O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NUb1JvdztcclxuICB9XHJcblxyXG4gIG9uRHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8YW55Pikge1xyXG4gICAgbGV0IGFycmF5OiBSb3dEYXRhW10gPSB0aGlzLmRhdGEuZGF0YTtcclxuICAgIG1vdmVJdGVtSW5BcnJheShhcnJheSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuZHJvcC5lbWl0KHt2YWx1ZTogYXJyYXlbZXZlbnQuY3VycmVudEluZGV4XS5kYXRhLCBvcmRlcjogZXZlbnQuY3VycmVudEluZGV4fSk7XHJcbiAgICB0aGlzLmRhdGEuZGF0YSA9IGNsb25lZGVlcChhcnJheSk7XHJcbiAgfVxyXG5cclxuICB0YWJsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcclxuICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuZGF0YS5kYXRhLmZpbmRJbmRleChyb3cgPT4gcm93LmRhdGEgPT09IHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gLTEwO1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQrKztcclxuICAgICAgICB0aGlzLmRhdGEuZGF0YS5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09IC0xMCAmJiBpbmRleCA+IGN1cnJlbnRJbmRleCAmJiByb3cucm93VHlwZSA9PSBSb3dUeXBlLlJPVylcclxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudC0tO1xyXG4gICAgICAgIGN1cnJlbnRJbmRleCA9IHRoaXMuZGF0YS5kYXRhLmxlbmd0aCAtIGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEucmV2ZXJzZSgpLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT0gLTEwICYmIGluZGV4ID4gY3VycmVudEluZGV4ICYmIHJvdy5yb3dUeXBlID09IFJvd1R5cGUuUk9XKVxyXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBpbmRleDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCk7XHJcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiAhPSAtMTApIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IHRoaXMuZGF0YS5kYXRhLmxlbmd0aCAtIG5ld1NlbGVjdGlvbiAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gIT0gLTEwKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHRoaXMuZGF0YS5kYXRhW25ld1NlbGVjdGlvbl0uZGF0YTtcclxuICAgICAgfVxyXG4gICAgICBpZihNYXRoLmFicyh0aGlzLnNjcm9sbENvdW50KT49MilcclxuICAgICAgICB0aGlzLnNjcm9sbENvdW50ID0gMDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0ZSBlbCBldmVudG8gY3VhbmRvIHNlIGRhIGNsaWNrIGFsIGJvdG9uIEFkZFJvd1xyXG4gICAqL1xyXG4gIG9uQWRkUm93KCl7XHJcbiAgICB0aGlzLmFkZFJvdy5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbkJvb2tDbGlja2VkKHNlbGVjdGVkT2JqZWN0KXtcclxuICAgIHRoaXMuYm9va0NsaWNrZWQuZW1pdChzZWxlY3RlZE9iamVjdCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=