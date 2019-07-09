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
var RowType = {
    GROUP_TITLE: 0, GROUP_FOOTER: 1, ROW: 2,
};
RowType[RowType.GROUP_TITLE] = 'GROUP_TITLE';
RowType[RowType.GROUP_FOOTER] = 'GROUP_FOOTER';
RowType[RowType.ROW] = 'ROW';
/**
 * @template T
 */
var TableHelisaComponent = /** @class */ (function () {
    function TableHelisaComponent(tableService) {
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
        this.showFooter = false;
        this.showSearch = false;
    }
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tableService.nextPageReturn.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data.table || data.table === _this) {
                _this.receivePage(data.obj);
            }
        }));
        this.tableService.totalReturn.subscribe((/**
         * @param {?} info
         * @return {?}
         */
        function (info) {
            if (info) {
                _this.columnConfig.forEach((/**
                 * @param {?} column
                 * @param {?} idx
                 * @return {?}
                 */
                function (column, idx) {
                    if (column === info.obj.column) {
                        _this.totalData[idx] = _this.getGroupValue(column, { sum: info.obj.value, count: _this.count });
                    }
                }));
            }
        }));
        this.matSort.sortChange.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var column = _this.columnConfig.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.name === event.active; }));
            column.sortDirection = event.direction;
            _this.sort.emit({ column: column, columnConfigurations: _this.columnConfig, type: ChangeColumnConfigurationType.SORT });
        }));
    };
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.multipleCell) {
            this.matTable.renderRows();
        }
    };
    Object.defineProperty(TableHelisaComponent.prototype, "isRemote", {
        set: /**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            this.type = w ? TableHelisaType.REMOTE : TableHelisaType.LOCAL;
            if (this.type === TableHelisaType.REMOTE) {
                this.tableHelisaConnectComponent = new TableHelisaConnectComponent();
                this.goNextPage();
            }
            else {
                this.tableHelisaConnectComponent = undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHelisaComponent.prototype, "columnConfiguration", {
        set: /**
         * @param {?} columnConfiguration
         * @return {?}
         */
        function (columnConfiguration) {
            var _this = this;
            this.columnConfig = columnConfiguration;
            this.displayedColumns.splice(0, this.displayedColumns.length);
            if (columnConfiguration) {
                columnConfiguration.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    if (column.visible) {
                        _this.displayedColumns.push(column.name);
                    }
                }));
                if (this.rawData) {
                    this.dataSource = this.rawData;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHelisaComponent.prototype, "dataSource", {
        set: /**
         * @param {?} dataSource
         * @return {?}
         */
        function (dataSource) {
            this.rawData = dataSource;
            if (this.rawData) {
                this.prepareDataSource();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHelisaComponent.prototype, "selectedIndexRow", {
        set: /**
         * @param {?} idRowSelected
         * @return {?}
         */
        function (idRowSelected) {
            this.indexRowSelect = idRowSelected;
            if (this.rawData && this.rawData.length) {
                if ((idRowSelected >= this.rawData.length || idRowSelected < 0)) {
                    this.indexRowSelect = 0;
                }
                this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    TableHelisaComponent.prototype.prepareDataSource = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var changeData = Array();
        /** @type {?} */
        var haveGroup = false;
        /** @type {?} */
        var groupFooter;
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (column.totalType !== undefined && (_this.type === TableHelisaType.LOCAL || _this.tableHelisaConnectComponent.page <= 1)) {
                _this.totalData = new Array(_this.columnConfig.length);
                _this.showFooter = true;
                _this.total.emit({ column: column, columnConfigurations: _this.columnConfig, type: ChangeColumnConfigurationType.TOTAL });
            }
            _this.showSearch = _this.showSearch || column.searchable;
            haveGroup = haveGroup || column.groupable;
        }));
        if (haveGroup) {
            this.rawData = this.rawData.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                /** @type {?} */
                var result = 0;
                _this.columnConfig.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    if (result === 0) {
                        result = _this.compare(a, b);
                    }
                }));
                return result;
            }));
        }
        this.rawData.forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            if (haveGroup && (changeData.length === 0 || _this.compare(changeData[changeData.length - 1].data, row) !== 0)) {
                if (groupFooter) {
                    changeData.push({ data: groupFooter, rowType: RowType.GROUP_FOOTER });
                }
                changeData.push({ data: row, rowType: RowType.GROUP_TITLE });
                groupFooter = new Array(_this.columnConfig.length);
            }
            if (haveGroup) {
                _this.addTotalGroup(groupFooter, row);
            }
            changeData.push({ data: row, rowType: RowType.ROW });
        }));
        this.data = new MatTableDataSource(changeData);
        if (this.rawData && this.rawData.length && this.indexRowSelect && !this.selectedObject) {
            if (this.indexRowSelect >= this.rawData.length || this.indexRowSelect < 0)
                this.indexRowSelect = 0;
            this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW });
        }
    };
    /**
     * @private
     * @param {?} rowTotal
     * @param {?} row
     * @return {?}
     */
    TableHelisaComponent.prototype.addTotalGroup = /**
     * @private
     * @param {?} rowTotal
     * @param {?} row
     * @return {?}
     */
    function (rowTotal, row) {
        this.columnConfig.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) {
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
    };
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    TableHelisaComponent.prototype.compare = /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        /** @type {?} */
        var ws = 0;
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
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
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    TableHelisaComponent.prototype.getGroupDescription = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var result = '';
        this.columnConfig.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (column.groupable) {
                result += (result.length ? ' - ' : '') + ColumnConfigUtil.getValue(obj, column);
            }
        }));
        return result;
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    TableHelisaComponent.prototype.isGroupTitle = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.rowType === RowType.GROUP_TITLE;
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    TableHelisaComponent.prototype.isRow = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.rowType === RowType.ROW;
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    TableHelisaComponent.prototype.isGroupFooter = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.rowType === RowType.GROUP_FOOTER;
    };
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.footerDisplayedColumns = /**
     * @return {?}
     */
    function () {
        return this.displayedColumns.map((/**
         * @param {?} name
         * @return {?}
         */
        function (name) { return 'footer-' + name; }));
    };
    /**
     * @param {?} column
     * @param {?} data
     * @return {?}
     */
    TableHelisaComponent.prototype.getGroupValue = /**
     * @param {?} column
     * @param {?} data
     * @return {?}
     */
    function (column, data) {
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
    };
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    TableHelisaComponent.prototype.getValue = /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    function (obj, column) {
        return ColumnConfigUtil.getValue(obj, column);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    TableHelisaComponent.prototype.searchText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.lastSearch = text;
        this.search.emit({ text: text, columnConfigurations: this.columnConfig });
    };
    /**
     * @param {?} row
     * @return {?}
     */
    TableHelisaComponent.prototype.selectRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.selectedObject = row.data;
        this.select.emit(this.selectedObject);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TableHelisaComponent.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var element = event.target;
        if (element.scrollHeight - element.scrollTop < 1000) {
            this.goNextPage();
        }
    };
    /**
     * @private
     * @return {?}
     */
    TableHelisaComponent.prototype.goNextPage = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.type === TableHelisaType.REMOTE && !this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
            this.tableHelisaConnectComponent.isUsed = true;
            this.nextPage.emit({
                page: this.tableHelisaConnectComponent.nextPage(),
                body: this.tableHelisaConnectComponent.getBody(this.columnConfig, this.lastSearch)
            });
        }
    };
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    TableHelisaComponent.prototype.receivePage = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (!this.rawData) {
            this.rawData = new Array();
        }
        this.rawData = this.rawData.concat(data);
        this.dataSource = this.rawData;
        if (this.type === TableHelisaType.REMOTE) {
            this.tableHelisaConnectComponent.isLastPage = data.length === 0;
            this.tableHelisaConnectComponent.isUsed = false;
        }
    };
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.dblClickCell = /**
     * @return {?}
     */
    function () {
        this.selectCell.emit(this.selectedCells);
    };
    /**
     * @param {?} element
     * @param {?} column
     * @return {?}
     */
    TableHelisaComponent.prototype.selectedCell = /**
     * @param {?} element
     * @param {?} column
     * @return {?}
     */
    function (element, column) {
        /** @type {?} */
        var index = this.isSelectedCell(element, column);
        if (index >= 0) {
            this.selectedCells.splice(index, 1);
        }
        else {
            this.selectedCells.push({ column: column, row: element });
        }
        this.selectCell.emit(this.selectedCells);
    };
    /**
     * @param {?} element
     * @param {?} column
     * @return {?}
     */
    TableHelisaComponent.prototype.isSelectedCell = /**
     * @param {?} element
     * @param {?} column
     * @return {?}
     */
    function (element, column) {
        if (this.multipleCell) {
            for (var index = 0; index < this.selectedCells.length; index++) {
                if (this.selectedCells[index].column.name === column.name &&
                    this.selectedCells[index].row.data === element.data) {
                    return index;
                }
            }
        }
        return -1;
    };
    /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    TableHelisaComponent.prototype.getClassToCell = /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    function (row, column) {
        var _this = this;
        /** @type {?} */
        var classToCell = '';
        if (this.configCellStyles) {
            /** @type {?} */
            var found = this.configCellStyles.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                return c.cellData === _this.getValue(row, column);
            }));
            if (found) {
                classToCell = found.classCell;
            }
        }
        return classToCell;
    };
    /**
     * @param {?} row
     * @return {?}
     */
    TableHelisaComponent.prototype.getClassToRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        /** @type {?} */
        var classToRow = '';
        if (this.configRowStylesFromColumn) {
            /** @type {?} */
            var found = this.configRowStylesFromColumn.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                return c.data === _this.getValue(row, c.column);
            }));
            if (found) {
                classToRow = found.classRow;
            }
        }
        return classToRow;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TableHelisaComponent.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var array = this.data.data;
        moveItemInArray(array, event.previousIndex, event.currentIndex);
        this.drop.emit({ value: array[event.previousIndex].data, order: event.currentIndex });
        this.data.data = clonedeep(array);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TableHelisaComponent.prototype.tableKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.multipleCell) {
            /** @type {?} */
            var currentIndex_1 = this.data.data.findIndex((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return row.data === _this.selectedObject; }));
            /** @type {?} */
            var newSelection_1 = -10;
            if (event.key === 'ArrowDown') {
                this.scrollCount++;
                this.data.data.forEach((/**
                 * @param {?} row
                 * @param {?} index
                 * @return {?}
                 */
                function (row, index) {
                    if (newSelection_1 == -10 && index > currentIndex_1 && row.rowType == RowType.ROW)
                        newSelection_1 = index;
                }));
            }
            if (event.key === 'ArrowUp') {
                this.scrollCount--;
                currentIndex_1 = this.data.data.length - currentIndex_1 - 1;
                this.data.data.reverse().forEach((/**
                 * @param {?} row
                 * @param {?} index
                 * @return {?}
                 */
                function (row, index) {
                    if (newSelection_1 == -10 && index > currentIndex_1 && row.rowType == RowType.ROW)
                        newSelection_1 = index;
                }));
                this.data.data.reverse();
                if (newSelection_1 != -10) {
                    newSelection_1 = this.data.data.length - newSelection_1 - 1;
                }
            }
            if (newSelection_1 != -10) {
                this.selectedObject = this.data.data[newSelection_1].data;
            }
            if (Math.abs(this.scrollCount) >= 2)
                this.scrollCount = 0;
            else
                event.preventDefault();
        }
    };
    TableHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-table',
                    template: "<div class=\"div-table-helisa\">\r\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\r\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\">\r\n    <table cdkDropList (cdkDropListDropped)=\"onDrop($event)\" mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\r\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" >\r\n      <ng-container [matColumnDef]=\"column.name\" *ngFor=\"let column of columnConfig; let idx = index\">\r\n        <div *ngIf=\"!column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef> {{column.title}} </th>\r\n        </div>\r\n        <div *ngIf=\"column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{column.title}} </th>\r\n        </div>\r\n        <td mat-cell *matCellDef=\"let element\" (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\r\n          [class.selected-row]=\"isSelectedCell(element, column) >= 0\" [ngClass]=\"getClassToCell(element.data, column)\">\r\n          {{ getValue(element.data, column) }}\r\n        </td>\r\n        <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"groupHeader\">\r\n        <td mat-cell *matCellDef=\"let group\">\r\n          <strong>{{ getGroupDescription(group.data) }}</strong>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\r\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\r\n      </ng-container>\r\n\r\n      <div *ngIf=\"showFooter\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\r\n      </div>\r\n      <div *ngIf=\"showTitle\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></tr>\r\n      </div>\r\n      <div *ngIf=\"isDragged\">\r\n        <tr cdkDrag [cdkDragData]=\"row\" mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\r\n          (click)=\"selectRow(row)\" [class.selected-row]=\"row.data === selectedObject && !multipleCell\"\r\n          [ngClass]=\"getClassToRow(row.data)\"></tr>\r\n      </div>\r\n      <div *ngIf=\"!isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row)\"\r\n          [class.selected-row]=\"row.data === selectedObject && !multipleCell\" [ngClass]=\"getClassToRow(row.data)\"></tr>\r\n      </div>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: footerDisplayedColumns(); when: isGroupFooter\"></tr>\r\n    </table>\r\n  </div>\r\n</div>",
                    styles: [".div-table-helisa .container-table{width:100%;height:100%}.div-table-helisa .container-table .table-helisa{width:100%}.div-table-helisa .container-table .table-helisa /deep/ tbody tr,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr,.div-table-helisa .container-table .table-helisa /deep/ thead tr{height:26px}.div-table-helisa .container-table .table-helisa /deep/ tbody tr td,.div-table-helisa .container-table .table-helisa /deep/ tbody tr th,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,.div-table-helisa .container-table .table-helisa /deep/ thead tr td,.div-table-helisa .container-table .table-helisa /deep/ thead tr th{padding:2px 10px 0}.div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}.div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}.div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}.div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}.div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
                }] }
    ];
    /** @nocollapse */
    TableHelisaComponent.ctorParameters = function () { return [
        { type: TableHelisaService }
    ]; };
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
        isRemote: [{ type: Input }],
        columnConfiguration: [{ type: Input }],
        dataSource: [{ type: Input }],
        selectedIndexRow: [{ type: Input }]
    };
    return TableHelisaComponent;
}());
export { TableHelisaComponent };
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
    TableHelisaComponent.prototype.showFooter;
    /** @type {?} */
    TableHelisaComponent.prototype.showSearch;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.tableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUUsT0FBTyxTQUFTLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxFQUNMLDZCQUE2QixFQUU3QixnQkFBZ0IsRUFJaEIsZUFBZSxFQUVmLFNBQVMsRUFLVixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBZSxlQUFlLEVBQXFCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFekYsc0JBR0M7OztJQUZDLHVCQUFVOztJQUNWLDBCQUFpQjs7OztJQUlqQixjQUFXLEVBQUUsZUFBWSxFQUFFLE1BQUc7Ozs7Ozs7O0FBR2hDO0lBd0NFLDhCQUFvQixZQUFtQztRQUFuQyxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUE3QnZELHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUloQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDOUMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBS3RCLFNBQUksR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNsRSxVQUFLLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFD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LHFDQUF1Qjs7SUFDdkIsZ0RBQW1EOztJQUNuRCx5REFBMkQ7O0lBQzNELDZDQUF3RDs7SUFDeEQsb0NBQWtGOztJQUNsRix5Q0FBMkI7O0lBQzNCLDBDQUFtQjs7SUFDbkIsMENBQW1COzs7OztJQUVQLDRDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRTb3J0LCBNYXRUYWJsZURhdGFTb3VyY2UsIE1hdFRhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHlwaW5ncy9zb3J0JztcclxuaW1wb3J0IGNsb25lZGVlcCBmcm9tICdsb2Rhc2guY2xvbmVkZWVwJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZSxcclxuICBDb2x1bW5Db25maWcsXHJcbiAgQ29sdW1uQ29uZmlnVXRpbCxcclxuICBFdmVudENvbHVtbixcclxuICBFdmVudFNlYXJjaCxcclxuICBSZXF1ZXN0VGFibGVIZWxpc2EsXHJcbiAgVGFibGVIZWxpc2FUeXBlLFxyXG4gIFRvdGFsR3JvdXAsXHJcbiAgVG90YWxUeXBlLFxyXG4gIENlbGwsXHJcbiAgQ29uZmlnQ2VsbFN0eWxlcyxcclxuICBDb25maWdSb3dTdHlsZXMsXHJcbiAgRHJvcEVsZW1lbnRcclxufSBmcm9tICcuL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUYWJsZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1oZWxpc2EtY29ubmVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuaW50ZXJmYWNlIFJvd0RhdGEge1xyXG4gIGRhdGE6IGFueTtcclxuICByb3dUeXBlOiBSb3dUeXBlO1xyXG59XHJcblxyXG5lbnVtIFJvd1R5cGUge1xyXG4gIEdST1VQX1RJVExFLCBHUk9VUF9GT09URVIsIFJPV1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSB0YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ6IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDxUPjtcclxuICB0b3RhbERhdGE6IEFycmF5PG51bWJlcj47XHJcbiAgcmF3RGF0YTogQXJyYXk8VD47XHJcbiAgZGF0YTogTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE+O1xyXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XHJcbiAgY29sdW1uQ29uZmlnOiBBcnJheTxDb2x1bW5Db25maWc+O1xyXG4gIHNlbGVjdGVkT2JqZWN0OiBUO1xyXG4gIGxhc3RTZWFyY2g6IHN0cmluZztcclxuICB0eXBlOiBUYWJsZUhlbGlzYVR5cGUgPSBUYWJsZUhlbGlzYVR5cGUuTE9DQUw7XHJcbiAgaXNTZXRTZWxlY3RlZFJvdyA9IGZhbHNlO1xyXG4gIGluZGV4Um93U2VsZWN0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzY3JvbGxDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBtYXRTb3J0OiBNYXRTb3J0O1xyXG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUpIG1hdFRhYmxlOiBNYXRUYWJsZTxhbnk+O1xyXG5cclxuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+KCk7XHJcbiAgQE91dHB1dCgpIHRvdGFsOiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcclxuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudFNlYXJjaD4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdENlbGwgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxbXT4oKTtcclxuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E+KCk7XHJcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBtdWx0aXBsZUNlbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvbmZpZ0NlbGxTdHlsZXM6IEFycmF5PENvbmZpZ0NlbGxTdHlsZXM+O1xyXG4gIEBJbnB1dCgpIGNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW46IEFycmF5PENvbmZpZ1Jvd1N0eWxlcz47XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRDZWxsczogQXJyYXk8Q2VsbD4gPSBuZXcgQXJyYXk8Q2VsbD4oKTtcclxuICBAT3V0cHV0KCkgZHJvcDogRXZlbnRFbWl0dGVyPERyb3BFbGVtZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+KCk7XHJcbiAgQElucHV0KCkgaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgc2hvd0Zvb3RlciA9IGZhbHNlO1xyXG4gIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlSGVsaXNhU2VydmljZTxUPikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50YWJsZVNlcnZpY2UubmV4dFBhZ2VSZXR1cm4uc3Vic2NyaWJlKFxyXG4gICAgICBkYXRhID0+IHtcclxuICAgICAgICBpZiAoIWRhdGEudGFibGUgfHwgZGF0YS50YWJsZSA9PT0gdGhpcykge1xyXG4gICAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLm9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy50YWJsZVNlcnZpY2UudG90YWxSZXR1cm4uc3Vic2NyaWJlKGluZm8gPT4ge1xyXG4gICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbiwgaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoY29sdW1uID09PSBpbmZvLm9iai5jb2x1bW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b3RhbERhdGFbaWR4XSA9IHRoaXMuZ2V0R3JvdXBWYWx1ZShjb2x1bW4sIHsgc3VtOiBpbmZvLm9iai52YWx1ZSwgY291bnQ6IHRoaXMuY291bnQgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYXRTb3J0LnNvcnRDaGFuZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAoZXZlbnQ6IFNvcnQpID0+IHtcclxuICAgICAgICBjb25zdCBjb2x1bW46IENvbHVtbkNvbmZpZyA9IHRoaXMuY29sdW1uQ29uZmlnLmZpbmQoYyA9PiBjLm5hbWUgPT09IGV2ZW50LmFjdGl2ZSk7XHJcbiAgICAgICAgY29sdW1uLnNvcnREaXJlY3Rpb24gPSBldmVudC5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5zb3J0LmVtaXQoeyBjb2x1bW4sIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZywgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUuU09SVCB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLm11bHRpcGxlQ2VsbCkge1xyXG4gICAgICB0aGlzLm1hdFRhYmxlLnJlbmRlclJvd3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlzUmVtb3RlKHc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHlwZSA9IHcgPyBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFIDogVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLlJFTU9URSkge1xyXG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCA9IG5ldyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD4oKTtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9IGVsc2UgeyB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCA9IHVuZGVmaW5lZDsgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY29sdW1uQ29uZmlndXJhdGlvbihjb2x1bW5Db25maWd1cmF0aW9uOiBBcnJheTxDb2x1bW5Db25maWc+KSB7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZyA9IGNvbHVtbkNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpO1xyXG4gICAgaWYgKGNvbHVtbkNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgY29sdW1uQ29uZmlndXJhdGlvbi5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgaWYgKGNvbHVtbi52aXNpYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaChjb2x1bW4ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMucmF3RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLnJhd0RhdGEgPSBkYXRhU291cmNlO1xyXG4gICAgaWYgKHRoaXMucmF3RGF0YSkgeyB0aGlzLnByZXBhcmVEYXRhU291cmNlKCk7IH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkSW5kZXhSb3coaWRSb3dTZWxlY3RlZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gaWRSb3dTZWxlY3RlZDtcclxuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCkge1xyXG4gICAgICBpZiAoKGlkUm93U2VsZWN0ZWQgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCBpZFJvd1NlbGVjdGVkIDwgMCkpIHtcclxuICAgICAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdFJvdyh7IGRhdGE6IHRoaXMucmF3RGF0YVt0aGlzLmluZGV4Um93U2VsZWN0XSwgcm93VHlwZTogUm93VHlwZS5ST1cgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVEYXRhU291cmNlKCkge1xyXG4gICAgY29uc3QgY2hhbmdlRGF0YSA9IEFycmF5PFJvd0RhdGE+KCk7XHJcbiAgICBsZXQgaGF2ZUdyb3VwID0gZmFsc2U7XHJcbiAgICBsZXQgZ3JvdXBGb290ZXI6IEFycmF5PFRvdGFsR3JvdXA+O1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSAhPT0gdW5kZWZpbmVkICYmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5MT0NBTCB8fCB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5wYWdlIDw9IDEpKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbERhdGEgPSBuZXcgQXJyYXk8bnVtYmVyPih0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0Zvb3RlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b3RhbC5lbWl0KHsgY29sdW1uLCBjb2x1bW5Db25maWd1cmF0aW9uczogdGhpcy5jb2x1bW5Db25maWcsIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLlRPVEFMIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd1NlYXJjaCA9IHRoaXMuc2hvd1NlYXJjaCB8fCBjb2x1bW4uc2VhcmNoYWJsZTtcclxuICAgICAgaGF2ZUdyb3VwID0gaGF2ZUdyb3VwIHx8IGNvbHVtbi5ncm91cGFibGU7XHJcbiAgICB9KTtcclxuICAgIGlmIChoYXZlR3JvdXApIHtcclxuICAgICAgdGhpcy5yYXdEYXRhID0gdGhpcy5yYXdEYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuY29tcGFyZShhLCBiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMucmF3RGF0YS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIGlmIChoYXZlR3JvdXAgJiYgKGNoYW5nZURhdGEubGVuZ3RoID09PSAwIHx8IHRoaXMuY29tcGFyZShjaGFuZ2VEYXRhW2NoYW5nZURhdGEubGVuZ3RoIC0gMV0uZGF0YSwgcm93KSAhPT0gMCkpIHtcclxuICAgICAgICBpZiAoZ3JvdXBGb290ZXIpIHtcclxuICAgICAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IGdyb3VwRm9vdGVyLCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX0ZPT1RFUiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX1RJVExFIH0pO1xyXG4gICAgICAgIGdyb3VwRm9vdGVyID0gbmV3IEFycmF5PFRvdGFsR3JvdXA+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhhdmVHcm91cCkgeyB0aGlzLmFkZFRvdGFsR3JvdXAoZ3JvdXBGb290ZXIsIHJvdyk7IH1cclxuICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPihjaGFuZ2VEYXRhKTtcclxuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCAmJiB0aGlzLmluZGV4Um93U2VsZWN0ICYmICF0aGlzLnNlbGVjdGVkT2JqZWN0KSB7XHJcbiAgICAgIGlmICh0aGlzLmluZGV4Um93U2VsZWN0ID49IHRoaXMucmF3RGF0YS5sZW5ndGggfHwgdGhpcy5pbmRleFJvd1NlbGVjdCA8IDApXHJcbiAgICAgICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IDA7XHJcbiAgICAgIHRoaXMuc2VsZWN0Um93KHsgZGF0YTogdGhpcy5yYXdEYXRhW3RoaXMuaW5kZXhSb3dTZWxlY3RdLCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVG90YWxHcm91cChyb3dUb3RhbDogQXJyYXk8VG90YWxHcm91cD4sIHJvdzogYW55KSB7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAocm93VG90YWxbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XSA9IHsgc3VtOiBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKHJvdywgY29sdW1uKSwgY291bnQ6IDEgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLnN1bSArPSBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKHJvdywgY29sdW1uKTtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5jb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBhcmUoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xyXG4gICAgbGV0IHdzID0gMDtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgaWYgKHdzID09PSAwICYmIGNvbHVtbi5ncm91cGFibGUpIHtcclxuICAgICAgICBpZiAoQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShhLCBjb2x1bW4pIDwgQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShiLCBjb2x1bW4pKSB7IHdzID0gLTE7IH0gZWxzZSBpZiAoQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShhLCBjb2x1bW4pID4gQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShiLCBjb2x1bW4pKSB7IHdzID0gMTsgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB3cztcclxuICB9XHJcblxyXG4gIGdldEdyb3VwRGVzY3JpcHRpb24ob2JqOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLmdyb3VwYWJsZSkge1xyXG4gICAgICAgIHJlc3VsdCArPSAocmVzdWx0Lmxlbmd0aCA/ICcgLSAnIDogJycpICsgQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShvYmosIGNvbHVtbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzR3JvdXBUaXRsZShpbmRleCwgaXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9USVRMRTtcclxuICB9XHJcblxyXG4gIGlzUm93KGluZGV4LCBpdGVtKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLlJPVztcclxuICB9XHJcblxyXG4gIGlzR3JvdXBGb290ZXIoaW5kZXgsIGl0ZW0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfRk9PVEVSO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZENvbHVtbnMubWFwKG5hbWUgPT4gJ2Zvb3Rlci0nICsgbmFtZSk7XHJcbiAgfVxyXG5cclxuICBnZXRHcm91cFZhbHVlKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBkYXRhOiBUb3RhbEdyb3VwKTogbnVtYmVyIHtcclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuU1VNKSB7IHJldHVybiBkYXRhLnN1bTsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5DT1VOVCkgeyByZXR1cm4gZGF0YS5jb3VudDsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5BVkVSQUdFKSB7IHJldHVybiAxLiAqIGRhdGEuc3VtIC8gZGF0YS5jb3VudDsgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKG9iajogYW55LCBjb2x1bW46IENvbHVtbkNvbmZpZykge1xyXG4gICAgcmV0dXJuIENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUob2JqLCBjb2x1bW4pO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoVGV4dCh0ZXh0KSB7XHJcbiAgICB0aGlzLmxhc3RTZWFyY2ggPSB0ZXh0O1xyXG4gICAgdGhpcy5zZWFyY2guZW1pdCh7IHRleHQsIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZyB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhyb3cpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSByb3cuZGF0YTtcclxuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5zZWxlY3RlZE9iamVjdCk7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChldmVudCkge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZiAoZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LnNjcm9sbFRvcCA8IDEwMDApIHtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdvTmV4dFBhZ2UoKSB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFICYmICF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlICYmICF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQpIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5uZXh0UGFnZS5lbWl0KHtcclxuICAgICAgICBwYWdlOiB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5uZXh0UGFnZSgpLFxyXG4gICAgICAgIGJvZHk6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmdldEJvZHkodGhpcy5jb2x1bW5Db25maWcsIHRoaXMubGFzdFNlYXJjaClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlY2VpdmVQYWdlKGRhdGE6IFRbXSkge1xyXG4gICAgaWYgKCF0aGlzLnJhd0RhdGEpIHsgdGhpcy5yYXdEYXRhID0gbmV3IEFycmF5PFQ+KCk7IH1cclxuICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5jb25jYXQoZGF0YSk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFKSB7XHJcbiAgICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgPSBkYXRhLmxlbmd0aCA9PT0gMDtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRibENsaWNrQ2VsbCgpIHtcclxuICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHRoaXMuc2VsZWN0ZWRDZWxscyk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZENlbGwoZWxlbWVudCwgY29sdW1uOiBDb2x1bW5Db25maWcpIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuaXNTZWxlY3RlZENlbGwoZWxlbWVudCwgY29sdW1uKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDZWxscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZENlbGxzLnB1c2goeyBjb2x1bW46IGNvbHVtbiwgcm93OiBlbGVtZW50IH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRDZWxsKGVsZW1lbnQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLm11bHRpcGxlQ2VsbCkge1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zZWxlY3RlZENlbGxzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2VsbHNbaW5kZXhdLmNvbHVtbi5uYW1lID09PSBjb2x1bW4ubmFtZSAmJlxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZENlbGxzW2luZGV4XS5yb3cuZGF0YSA9PT0gZWxlbWVudC5kYXRhKSB7XHJcbiAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc1RvQ2VsbChyb3csIGNvbHVtbjogQ29sdW1uQ29uZmlnKSB7XHJcbiAgICBsZXQgY2xhc3NUb0NlbGwgPSAnJztcclxuICAgIGlmICh0aGlzLmNvbmZpZ0NlbGxTdHlsZXMpIHtcclxuICAgICAgbGV0IGZvdW5kID0gdGhpcy5jb25maWdDZWxsU3R5bGVzLmZpbmQoYyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGMuY2VsbERhdGEgPT09IHRoaXMuZ2V0VmFsdWUocm93LCBjb2x1bW4pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgY2xhc3NUb0NlbGwgPSBmb3VuZC5jbGFzc0NlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc1RvQ2VsbDtcclxuICB9XHJcblxyXG4gIGdldENsYXNzVG9Sb3cocm93KSB7XHJcbiAgICBsZXQgY2xhc3NUb1JvdyA9ICcnO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbikge1xyXG4gICAgICBsZXQgZm91bmQgPSB0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4uZmluZChjID0+IHtcclxuICAgICAgICByZXR1cm4gYy5kYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgYy5jb2x1bW4pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgY2xhc3NUb1JvdyA9IGZvdW5kLmNsYXNzUm93O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NUb1JvdztcclxuICB9XHJcblxyXG4gIG9uRHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8YW55Pikge1xyXG4gICAgbGV0IGFycmF5OiBSb3dEYXRhW10gPSB0aGlzLmRhdGEuZGF0YTtcclxuICAgIG1vdmVJdGVtSW5BcnJheShhcnJheSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuZHJvcC5lbWl0KHt2YWx1ZTogYXJyYXlbZXZlbnQucHJldmlvdXNJbmRleF0uZGF0YSwgb3JkZXI6IGV2ZW50LmN1cnJlbnRJbmRleH0pO1xyXG4gICAgdGhpcy5kYXRhLmRhdGEgPSBjbG9uZWRlZXAoYXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgdGFibGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMubXVsdGlwbGVDZWxsKSB7XHJcbiAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuZGF0YS5maW5kSW5kZXgocm93ID0+IHJvdy5kYXRhID09PSB0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IC0xMDtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbENvdW50Kys7XHJcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PSAtMTAgJiYgaW5kZXggPiBjdXJyZW50SW5kZXggJiYgcm93LnJvd1R5cGUgPT0gUm93VHlwZS5ST1cpXHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQtLTtcclxuICAgICAgICBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLnJldmVyc2UoKS5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09IC0xMCAmJiBpbmRleCA+IGN1cnJlbnRJbmRleCAmJiByb3cucm93VHlwZSA9PSBSb3dUeXBlLlJPVylcclxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEucmV2ZXJzZSgpO1xyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gIT0gLTEwKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBuZXdTZWxlY3Rpb24gLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uICE9IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSB0aGlzLmRhdGEuZGF0YVtuZXdTZWxlY3Rpb25dLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgaWYoTWF0aC5hYnModGhpcy5zY3JvbGxDb3VudCk+PTIpXHJcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCA9IDA7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=