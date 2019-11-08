/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort, MatTable, MatTableDataSource } from '@angular/material';
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
        this.displayedColumnsWithTitle = [];
        this.displayedColumnsWithSubtitle = [];
        this.displayedColumnsWithFooter = [];
        this.type = TableHelisaType.LOCAL;
        this.scrollCount = 0;
        this.hasSubtitle = false;
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
        this.showToolTip = true;
        this.showFooter = false;
        this.showSearch = false;
        /**
         * Tiempo antes de ocultarla el mensaje del tooltip
         */
        this.hideDelay = 600;
        /**
         * Tiempo antes de mostra el mensaje del tooltip
         */
        this.showDelay = 500;
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
        this.tableService.emitVisibleButton.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data != undefined && data != null) {
                _this.addRowButton.showButton = data;
            }
        }));
    };
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.isCellSelection) {
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
            this.tableHelisaConnectComponent = new TableHelisaConnectComponent();
            if (this.type === TableHelisaType.REMOTE) {
                this.goNextPage();
            }
            else {
                this.tableHelisaConnectComponent.page++;
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
            this.hasSubtitle = false;
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
                    if (!_this.hasSubtitle) {
                        _this.hasSubtitle = column.subtitle != undefined;
                    }
                }));
                if (this.rawData) {
                    this.dataSource = this.rawData;
                }
            }
            this.displayedColumnsWithTitle.splice(0, this.displayedColumnsWithTitle.length);
            this.displayedColumnsWithSubtitle.splice(0, this.displayedColumnsWithSubtitle.length);
            this.displayedColumnsWithFooter.splice(0, this.displayedColumnsWithFooter.length);
            this.getColumnsWithTitle().forEach((/**
             * @param {?} col
             * @return {?}
             */
            function (col) { return _this.displayedColumnsWithTitle.push(col); }));
            this.getHeaderSubtitle().forEach((/**
             * @param {?} col
             * @return {?}
             */
            function (col) { return _this.displayedColumnsWithSubtitle.push(col); }));
            this.footerDisplayedColumns().forEach((/**
             * @param {?} col
             * @return {?}
             */
            function (col) { return _this.displayedColumnsWithFooter.push(col); }));
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
                this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
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
            this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
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
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    TableHelisaComponent.prototype.getValueTooltip = /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    function (obj, column) {
        if (this.showToolTip) {
            return ColumnConfigUtil.getValue(obj, column);
        }
        else {
            return null;
        }
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
     * @param {?} isUser
     * @return {?}
     */
    TableHelisaComponent.prototype.selectRow = /**
     * @param {?} row
     * @param {?} isUser
     * @return {?}
     */
    function (row, isUser) {
        this.selectedObject = row.data;
        this.select.emit(this.selectedObject);
        this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
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
        if (!this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
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
        this.tableHelisaConnectComponent.isLastPage = data.length === 0;
        this.tableHelisaConnectComponent.isUsed = false;
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
        this.selectedCells = { column: column, row: element };
        this.selectCell.emit(this.selectedCells);
    };
    /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    TableHelisaComponent.prototype.isSelectedCell = /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    function (row, column) {
        if (this.isCellSelection) {
            if (this.selectedCells != null) {
                if (this.selectedCells.column.name === column.name &&
                    this.selectedCells.row.data === row.data) {
                    return true;
                }
            }
        }
        return false;
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
        var classToCell = new Array();
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
                classToCell.push(found.classCell);
            }
        }
        if (column.columnStyle)
            classToCell.push(column.columnStyle);
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
        var classToRow = new Array();
        if (row === this.selectedObject && !this.isCellSelection)
            classToRow.push('');
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
                classToRow.push(found.classRow);
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
        this.drop.emit({ value: array[event.currentIndex].data, order: event.currentIndex });
        this.data = new MatTableDataSource(array);
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
        if (!this.isCellSelection) {
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
                this.selectRow(this.data.data[newSelection_1], true);
            }
            if (Math.abs(this.scrollCount) >= 2)
                this.scrollCount = 0;
            else
                event.preventDefault();
        }
    };
    /**
     * Emite el evento cuando se da click al boton AddRow
     */
    /**
     * Emite el evento cuando se da click al boton AddRow
     * @return {?}
     */
    TableHelisaComponent.prototype.onAddRow = /**
     * Emite el evento cuando se da click al boton AddRow
     * @return {?}
     */
    function () {
        this.addRow.emit();
    };
    /**
     * @param {?} selectedObject
     * @return {?}
     */
    TableHelisaComponent.prototype.onBookClicked = /**
     * @param {?} selectedObject
     * @return {?}
     */
    function (selectedObject) {
        this.bookClicked.emit(selectedObject);
    };
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.getHeaderSubtitle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x = this.columnConfig.map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) {
            if (column.visible && column.subtitle != undefined)
                return 'subtitle' + index;
            else
                return null;
        })).filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data != null; }));
        return x;
    };
    /**
     * @return {?}
     */
    TableHelisaComponent.prototype.getColumnsWithTitle = /**
     * @return {?}
     */
    function () {
        return this.columnConfig.filter((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            return column.visible && column.title != undefined;
        })).map((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return col.name; }));
    };
    TableHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-table',
                    template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\r\n<div class=\"div-table-helisa\">\r\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\r\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\">\r\n    <ng-container *ngIf=\"addBookButton\">\r\n      <div class=\"buttons-container\" [ngClass]=\"{'hasTitle':showTitle, 'hasSubtitle': hasSubtitle}\">\r\n        <div *ngFor=\"let item of rawData\">\r\n          <button mat-icon-button *ngIf=\"item === selectedObject\" (click)=\"onBookClicked(selectedObject)\">\r\n            <i class=\"material-icons-outlined\">description</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <table cdkDropList (cdkDropListDropped)=\"onDrop($event)\" mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\r\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\">\r\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\r\n        <ng-container [matColumnDef]=\"column.name\">\r\n          <ng-container *ngIf=\"column.title != undefined\">\r\n            <div *ngIf=\"!column.sortable\">\r\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\r\n                {{column.title}} </th>\r\n            </div>\r\n            <div *ngIf=\"column.sortable\">\r\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\r\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\r\n            </div>\r\n          </ng-container>\r\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\r\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\r\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\r\n            {{ getValue(element.data, column) }}\r\n          </td>\r\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\r\n        </ng-container>\r\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\r\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\r\n            {{column.subtitle}}</th>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"groupHeader\">\r\n        <td mat-cell *matCellDef=\"let group\">\r\n          <strong>{{ getGroupDescription(group.data) }}</strong>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\r\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"isDragged\">\r\n        <tr cdkDrag [cdkDragData]=\"row\" mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\r\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\r\n          [ngClass]=\"getClassToRow(row.data)\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row, true)\"\r\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\r\n        </tr>\r\n      </ng-container>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n",
                    styles: ["table{table-layout:fixed}tbody tr,tfoot tr,thead tr{height:26px}tbody tr td,tbody tr th,tfoot tr td,tfoot tr th,thead tr td,thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table{position:relative}/deep/ hel-table>button{justify-content:center;align-items:flex-start;background:0 0;position:absolute;color:transparent;overflow:hidden;cursor:pointer;display:flex;border:none;height:26px;z-index:101;width:20px;opacity:.5;right:0;top:0}/deep/ hel-table>button:focus{outline:0}/deep/ hel-table>button:hover{opacity:1}/deep/ hel-table>button:before{justify-content:center;align-items:center;position:absolute;font-size:20px;display:flex;content:'+';color:#fff;height:26px;width:20px}/deep/ hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}/deep/ hel-table .buttons-container{order:2}/deep/ hel-table .buttons-container.hasTitle{padding-top:26px}/deep/ hel-table .buttons-container.hasSubtitle{padding-top:26px}/deep/ hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}/deep/ hel-table .buttons-container>div{height:26px}/deep/ hel-table .buttons-container>div button{justify-content:center;align-items:center;display:flex;height:26px}/deep/ hel-table .buttons-container>div button>*{display:flex;height:100%}/deep/ hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa{width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ table{table-layout:fixed}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr{height:26px}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table .div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
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
        showToolTip: [{ type: Input }],
        hideDelay: [{ type: Input, args: ['hideDelay',] }],
        showDelay: [{ type: Input, args: ['showDelay',] }],
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
    TableHelisaComponent.prototype.displayedColumnsWithTitle;
    /** @type {?} */
    TableHelisaComponent.prototype.displayedColumnsWithSubtitle;
    /** @type {?} */
    TableHelisaComponent.prototype.displayedColumnsWithFooter;
    /** @type {?} */
    TableHelisaComponent.prototype.columnConfig;
    /** @type {?} */
    TableHelisaComponent.prototype.selectedObject;
    /** @type {?} */
    TableHelisaComponent.prototype.lastSearch;
    /** @type {?} */
    TableHelisaComponent.prototype.type;
    /** @type {?} */
    TableHelisaComponent.prototype.indexRowSelect;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.scrollCount;
    /** @type {?} */
    TableHelisaComponent.prototype.hasSubtitle;
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
    TableHelisaComponent.prototype.showToolTip;
    /** @type {?} */
    TableHelisaComponent.prototype.showFooter;
    /** @type {?} */
    TableHelisaComponent.prototype.showSearch;
    /**
     * Tiempo antes de ocultarla el mensaje del tooltip
     * @type {?}
     */
    TableHelisaComponent.prototype.hideDelay;
    /**
     * Tiempo antes de mostra el mensaje del tooltip
     * @type {?}
     */
    TableHelisaComponent.prototype.showDelay;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.tableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHMUUsT0FBTyxFQUdMLDZCQUE2QixFQUU3QixnQkFBZ0IsRUFLaEIsVUFBVSxFQUlWLGVBQWUsRUFFZixTQUFTLEVBQ1YsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFdEUsc0JBR0M7OztJQUZDLHVCQUFVOztJQUNWLDBCQUFpQjs7OztJQUlqQixjQUFXLEVBQUUsZUFBWSxFQUFFLE1BQUc7Ozs7Ozs7O0FBS2hDO0lBa0VFLDhCQUFvQixZQUFtQztRQUFuQyxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUF2RHZELHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyw4QkFBeUIsR0FBYSxFQUFFLENBQUM7UUFDekMsaUNBQTRCLEdBQWEsRUFBRSxDQUFDO1FBQzVDLCtCQUEwQixHQUFhLEVBQUUsQ0FBQztRQUkxQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFFdEMsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFLVixTQUFJLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFDbEUsVUFBSyxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ25FLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQzs7OztRQUtwRSxXQUFNLEdBQW9CLElBQUksWUFBWSxFQUFLLENBQUM7UUFDaEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdEMsaUJBQVksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbEYsYUFBUSxHQUFxQyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUNyRixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBS3ZCLFNBQUksR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDekUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixpQkFBWSxHQUFpQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzVELFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0RCxnQkFBVyxHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDO1FBQ3RELGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQU9HLGNBQVMsR0FBVyxHQUFHLENBQUM7Ozs7UUFLeEIsY0FBUyxHQUFXLEdBQUcsQ0FBQztJQUdhLENBQUM7Ozs7SUFFNUQsdUNBQVE7OztJQUFSO1FBQUEsaUJBaUNDO1FBaENDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFNBQVM7Ozs7UUFDeEMsVUFBQSxJQUFJO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFJLEVBQUU7Z0JBQ3RDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxFQUNGLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQzFDLElBQUksSUFBSSxFQUFFO2dCQUNSLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7Ozs7Z0JBQUMsVUFBQyxNQUFNLEVBQUUsR0FBRztvQkFDcEMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7d0JBQzlCLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3FCQUM5RjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQy9CLFVBQUMsS0FBVzs7Z0JBQ0osTUFBTSxHQUFpQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBdkIsQ0FBdUIsRUFBQztZQUNqRixNQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDdkMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxvQkFBb0IsRUFBRSxLQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hILENBQUMsRUFDRixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTOzs7O1FBQzNDLFVBQUEsSUFBSTtZQUNGLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNyQyxLQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDckM7UUFFSCxDQUFDLEVBQ0YsQ0FBQTtJQUNILENBQUM7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxzQkFDSSwwQ0FBUTs7Ozs7UUFEWixVQUNhLENBQVU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7WUFDL0QsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksMkJBQTJCLEVBQUssQ0FBQztZQUN4RSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6QztRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQ0kscURBQW1COzs7OztRQUR2QixVQUN3QixtQkFBd0M7WUFEaEUsaUJBd0JDO1lBdEJDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsbUJBQW1CLENBQUM7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlELElBQUksbUJBQW1CLEVBQUU7Z0JBQ3ZCLG1CQUFtQixDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxNQUFNO29CQUNoQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7d0JBQ2xCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN6QztvQkFDRCxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRTt3QkFDckIsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQztxQkFDakQ7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ2hDO2FBQ0Y7WUFDRCxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEYsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RGLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUF4QyxDQUF3QyxFQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBM0MsQ0FBMkMsRUFBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQXpDLENBQXlDLEVBQUMsQ0FBQztRQUMxRixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLDRDQUFVOzs7OztRQURkLFVBQ2UsVUFBc0I7WUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQUU7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxrREFBZ0I7Ozs7O1FBRHBCLFVBQ3FCLGFBQXFCO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1lBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDdkMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQy9ELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QjtnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDMUY7UUFDSCxDQUFDOzs7T0FBQTs7Ozs7SUFFTyxnREFBaUI7Ozs7SUFBekI7UUFBQSxpQkF5Q0M7O1lBeENPLFVBQVUsR0FBRyxLQUFLLEVBQVc7O1lBQy9CLFNBQVMsR0FBRyxLQUFLOztZQUNqQixXQUE4QjtRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE1BQU07WUFDOUIsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLEtBQUssSUFBSSxLQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUN6SCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFTLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdELEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLG9CQUFvQixFQUFFLEtBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLDZCQUE2QixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDakg7WUFDRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN2RCxTQUFTLEdBQUcsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7OztZQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7O29CQUNoQyxNQUFNLEdBQUcsQ0FBQztnQkFDZCxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxNQUFNO29CQUM5QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQ2hCLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDN0I7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsR0FBRztZQUN0QixJQUFJLFNBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUM3RyxJQUFJLFdBQVcsRUFBRTtvQkFDZixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7aUJBQ3ZFO2dCQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDN0QsV0FBVyxHQUFHLElBQUksS0FBSyxDQUFhLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0Q7WUFDRCxJQUFJLFNBQVMsRUFBRTtnQkFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUFFO1lBQ3hELFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBVSxVQUFVLENBQUMsQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEYsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQztnQkFDdkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFGO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLDRDQUFhOzs7Ozs7SUFBckIsVUFBc0IsUUFBMkIsRUFBRSxHQUFRO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO1lBQ3RDLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDakMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUM3RTtxQkFBTTtvQkFDTCxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzlELFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDekI7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLHNDQUFPOzs7Ozs7SUFBZixVQUFnQixDQUFNLEVBQUUsQ0FBTTs7WUFDeEIsRUFBRSxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE1BQU07WUFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFO29CQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFBRTtxQkFBTSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBRTtvQkFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUFFO2FBQ2hNO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7O0lBRUQsa0RBQW1COzs7O0lBQW5CLFVBQW9CLEdBQVE7O1lBQ3RCLE1BQU0sR0FBRyxFQUFFO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxNQUFNO1lBQzlCLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDcEIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2pGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFRCwyQ0FBWTs7Ozs7SUFBWixVQUFhLEtBQUssRUFBRSxJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVELG9DQUFLOzs7OztJQUFMLFVBQU0sS0FBSyxFQUFFLElBQUk7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFRCw0Q0FBYTs7Ozs7SUFBYixVQUFjLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxxREFBc0I7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLFNBQVMsR0FBRyxJQUFJLEVBQWhCLENBQWdCLEVBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFRCw0Q0FBYTs7Ozs7SUFBYixVQUFjLE1BQW9CLEVBQUUsSUFBZ0I7UUFDbEQsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7U0FBRTtRQUM1RCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUFFO1FBQ2hFLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQUU7UUFDbEYsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsdUNBQVE7Ozs7O0lBQVIsVUFBUyxHQUFRLEVBQUUsTUFBb0I7UUFDckMsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQUVELDhDQUFlOzs7OztJQUFmLFVBQWdCLEdBQVEsRUFBRSxNQUFvQjtRQUM1QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFBRSxPQUFPLElBQUksQ0FBQTtTQUFFO0lBQ3hCLENBQUM7Ozs7O0lBRUQseUNBQVU7Ozs7SUFBVixVQUFXLElBQUk7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7OztJQUVELHdDQUFTOzs7OztJQUFULFVBQVUsR0FBRyxFQUFFLE1BQU07UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2pILENBQUM7Ozs7O0lBRUQsdUNBQVE7Ozs7SUFBUixVQUFTLEtBQUs7O1lBQ04sT0FBTyxHQUFtQixLQUFLLENBQUMsTUFBTTtRQUM1QyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Ozs7SUFFTyx5Q0FBVTs7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sRUFBRTtZQUM1RixJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pELElBQUksRUFBRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNuRixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQUVPLDBDQUFXOzs7OztJQUFuQixVQUFvQixJQUFTO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUssQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELDJDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCwyQ0FBWTs7Ozs7SUFBWixVQUFhLE9BQU8sRUFBRSxNQUFvQjtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELDZDQUFjOzs7OztJQUFkLFVBQWUsR0FBRyxFQUFFLE1BQW9CO1FBQ3RDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO2dCQUM5QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSTtvQkFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQzFDLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRUQsNkNBQWM7Ozs7O0lBQWQsVUFBZSxHQUFHLEVBQUUsTUFBb0I7UUFBeEMsaUJBYUM7O1lBWkssV0FBVyxHQUFHLElBQUksS0FBSyxFQUFVO1FBQ3JDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFOztnQkFDckIsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUN0QyxPQUFPLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkQsQ0FBQyxFQUFDO1lBQ0YsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbkM7U0FDRjtRQUNELElBQUksTUFBTSxDQUFDLFdBQVc7WUFDcEIsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCw0Q0FBYTs7OztJQUFiLFVBQWMsR0FBRztRQUFqQixpQkFhQzs7WUFaTyxVQUFVLEdBQUcsSUFBSSxLQUFLLEVBQVU7UUFDdEMsSUFBRyxHQUFHLEtBQUssSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ3JELFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7O2dCQUM5QixLQUFLLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsQ0FBQyxFQUFDO1lBQ0YsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakM7U0FDRjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQscUNBQU07Ozs7SUFBTixVQUFPLEtBQXVCOztZQUN4QixLQUFLLEdBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1FBQ3JDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELDJDQUFZOzs7O0lBQVosVUFBYSxLQUFvQjtRQUFqQyxpQkErQkM7UUE5QkMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7O2dCQUNyQixjQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksS0FBSyxLQUFJLENBQUMsY0FBYyxFQUFoQyxDQUFnQyxFQUFDOztnQkFDaEYsY0FBWSxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssV0FBVyxFQUFFO2dCQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7O2dCQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7b0JBQ2hDLElBQUksY0FBWSxJQUFJLENBQUMsRUFBRSxJQUFJLEtBQUssR0FBRyxjQUFZLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRzt3QkFDM0UsY0FBWSxHQUFHLEtBQUssQ0FBQztnQkFDekIsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUNELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsY0FBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPOzs7OztnQkFBQyxVQUFDLEdBQUcsRUFBRSxLQUFLO29CQUMxQyxJQUFJLGNBQVksSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFLLEdBQUcsY0FBWSxJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEdBQUc7d0JBQzNFLGNBQVksR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLENBQUMsRUFBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QixJQUFJLGNBQVksSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDdkIsY0FBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFZLEdBQUcsQ0FBQyxDQUFDO2lCQUN6RDthQUNGO1lBQ0QsSUFBSSxjQUFZLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDcEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDOztnQkFFckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHVDQUFROzs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsNENBQWE7Ozs7SUFBYixVQUFjLGNBQWM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELGdEQUFpQjs7O0lBQWpCOztZQUNNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7O1FBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztZQUMxQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxTQUFTO2dCQUNoRCxPQUFPLFVBQVUsR0FBRyxLQUFLLENBQUM7O2dCQUUxQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLElBQUksSUFBSSxFQUFaLENBQVksRUFBQztRQUMvQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7SUFFRCxrREFBbUI7OztJQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ2xDLE9BQUEsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLFNBQVM7UUFBM0MsQ0FBMkMsRUFDOUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFSLENBQVEsRUFBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQTFhRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGlxSkFBNEM7O2lCQUU3Qzs7OztnQkFuQlEsa0JBQWtCOzs7MEJBc0N4QixTQUFTLFNBQUMsT0FBTzsyQkFDakIsU0FBUyxTQUFDLFFBQVE7dUJBRWxCLE1BQU07d0JBQ04sTUFBTTt5QkFDTixNQUFNO3lCQUtOLE1BQU07NkJBQ04sTUFBTTsrQkFDTixNQUFNOzJCQUNOLE1BQU07NEJBQ04sS0FBSztrQ0FDTCxLQUFLO3dCQUNMLEtBQUs7bUNBQ0wsS0FBSzs0Q0FDTCxLQUFLO2dDQUNMLEtBQUs7dUJBQ0wsTUFBTTs0QkFDTixLQUFLOytCQUNMLEtBQUs7eUJBQ0wsTUFBTTs4QkFDTixNQUFNO2dDQUNOLEtBQUs7OEJBQ0wsS0FBSzs0QkFTSCxLQUFLLFNBQUMsV0FBVzs0QkFLakIsS0FBSyxTQUFDLFdBQVc7MkJBOENuQixLQUFLO3NDQVdMLEtBQUs7NkJBMEJMLEtBQUs7bUNBTUwsS0FBSzs7SUFvUlIsMkJBQUM7Q0FBQSxBQTVhRCxJQTRhQztTQXZhWSxvQkFBb0I7Ozs7OztJQUUvQiwyREFBb0U7O0lBQ3BFLHlDQUF5Qjs7SUFDekIsdUNBQWtCOztJQUNsQixvQ0FBa0M7O0lBQ2xDLGdEQUFnQzs7SUFDaEMseURBQXlDOztJQUN6Qyw0REFBNEM7O0lBQzVDLDBEQUEwQzs7SUFDMUMsNENBQWtDOztJQUNsQyw4Q0FBa0I7O0lBQ2xCLDBDQUFtQjs7SUFDbkIsb0NBQThDOztJQUM5Qyw4Q0FBdUI7Ozs7O0lBQ3ZCLDJDQUFnQzs7SUFDaEMsMkNBQW9COztJQUVwQix1Q0FBcUM7O0lBQ3JDLHdDQUE2Qzs7SUFFN0Msb0NBQTRFOztJQUM1RSxxQ0FBNkU7O0lBQzdFLHNDQUE4RTs7Ozs7SUFLOUUsc0NBQTBEOztJQUMxRCwwQ0FBZ0Q7O0lBQ2hELDRDQUE0Rjs7SUFDNUYsd0NBQThGOztJQUM5Rix5Q0FBMEI7O0lBQzFCLCtDQUFpQzs7SUFDakMscUNBQXVCOztJQUN2QixnREFBbUQ7O0lBQ25ELHlEQUEyRDs7SUFDM0QsNkNBQTZCOztJQUM3QixvQ0FBa0Y7O0lBQ2xGLHlDQUEyQjs7SUFDM0IsNENBQXNFOztJQUN0RSxzQ0FBZ0U7O0lBQ2hFLDJDQUErRDs7SUFDL0QsNkNBQXdDOztJQUN4QywyQ0FBcUM7O0lBQ3JDLDBDQUFtQjs7SUFDbkIsMENBQW1COzs7OztJQU9qQix5Q0FBNEM7Ozs7O0lBSzVDLHlDQUE0Qzs7Ozs7SUFHbEMsNENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNvcnQsIE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90eXBpbmdzL3NvcnQnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBZGRSb3dCdXR0b24sXHJcbiAgQ2VsbCxcclxuICBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZSxcclxuICBDb2x1bW5Db25maWcsXHJcbiAgQ29sdW1uQ29uZmlnVXRpbCxcclxuICBDb25maWdDZWxsU3R5bGVzLFxyXG4gIENvbmZpZ1Jvd1N0eWxlcyxcclxuICBEcm9wRWxlbWVudCxcclxuICBFdmVudENvbHVtbixcclxuICBFdmVudFNjb3BlLFxyXG4gIEV2ZW50U2VhcmNoLFxyXG4gIFJlcXVlc3RUYWJsZUhlbGlzYSxcclxuICBTZWxlY3RPYmplY3QsXHJcbiAgVGFibGVIZWxpc2FUeXBlLFxyXG4gIFRvdGFsR3JvdXAsXHJcbiAgVG90YWxUeXBlXHJcbn0gZnJvbSAnLi90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGFibGVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi90YWJsZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtaGVsaXNhLWNvbm5lY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuaW50ZXJmYWNlIFJvd0RhdGEge1xyXG4gIGRhdGE6IGFueTtcclxuICByb3dUeXBlOiBSb3dUeXBlO1xyXG59XHJcblxyXG5lbnVtIFJvd1R5cGUge1xyXG4gIEdST1VQX1RJVExFLCBHUk9VUF9GT09URVIsIFJPV1xyXG59XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIHRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDogVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+O1xyXG4gIHRvdGFsRGF0YTogQXJyYXk8bnVtYmVyPjtcclxuICByYXdEYXRhOiBBcnJheTxUPjtcclxuICBkYXRhOiBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YT47XHJcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcclxuICBkaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGU6IHN0cmluZ1tdID0gW107XHJcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXI6IHN0cmluZ1tdID0gW107XHJcbiAgY29sdW1uQ29uZmlnOiBBcnJheTxDb2x1bW5Db25maWc+O1xyXG4gIHNlbGVjdGVkT2JqZWN0OiBUO1xyXG4gIGxhc3RTZWFyY2g6IHN0cmluZztcclxuICB0eXBlOiBUYWJsZUhlbGlzYVR5cGUgPSBUYWJsZUhlbGlzYVR5cGUuTE9DQUw7XHJcbiAgaW5kZXhSb3dTZWxlY3Q6IG51bWJlcjtcclxuICBwcml2YXRlIHNjcm9sbENvdW50OiBudW1iZXIgPSAwO1xyXG4gIGhhc1N1YnRpdGxlID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgbWF0U29ydDogTWF0U29ydDtcclxuICBAVmlld0NoaWxkKE1hdFRhYmxlKSBtYXRUYWJsZTogTWF0VGFibGU8YW55PjtcclxuXHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xyXG4gIEBPdXRwdXQoKSB0b3RhbDogRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+KCk7XHJcbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2FkbywgY2FtYmlhciBwb3IgZWxlY3RPYmplY3RcclxuICAgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdENlbGwgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGw+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdE9iamVjdDogRXZlbnRFbWl0dGVyPFNlbGVjdE9iamVjdDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdE9iamVjdDxUPj4oKTtcclxuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E+KCk7XHJcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBpc0NlbGxTZWxlY3Rpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvbmZpZ0NlbGxTdHlsZXM6IEFycmF5PENvbmZpZ0NlbGxTdHlsZXM+O1xyXG4gIEBJbnB1dCgpIGNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW46IEFycmF5PENvbmZpZ1Jvd1N0eWxlcz47XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRDZWxsczogQ2VsbDtcclxuICBAT3V0cHV0KCkgZHJvcDogRXZlbnRFbWl0dGVyPERyb3BFbGVtZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+KCk7XHJcbiAgQElucHV0KCkgaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWRkUm93QnV0dG9uOiBBZGRSb3dCdXR0b24gPSB7IHNob3dCdXR0b246IGZhbHNlLCB0ZXh0OiBcIlwiIH07XHJcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBib29rQ2xpY2tlZDogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG4gIEBJbnB1dCgpIGFkZEJvb2tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XHJcbiAgc2hvd0Zvb3RlciA9IGZhbHNlO1xyXG4gIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuXHJcblxyXG5cclxuICAvKipcclxuICAgICAqIFRpZW1wbyBhbnRlcyBkZSBvY3VsdGFybGEgZWwgbWVuc2FqZSBkZWwgdG9vbHRpcFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoJ2hpZGVEZWxheScpIGhpZGVEZWxheTogbnVtYmVyID0gNjAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgnc2hvd0RlbGF5Jykgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XHJcbiAgIFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlU2VydmljZTogVGFibGVIZWxpc2FTZXJ2aWNlPFQ+KSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRhYmxlU2VydmljZS5uZXh0UGFnZVJldHVybi5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgIGlmICghZGF0YS50YWJsZSB8fCBkYXRhLnRhYmxlID09PSB0aGlzKSB7XHJcbiAgICAgICAgICB0aGlzLnJlY2VpdmVQYWdlKGRhdGEub2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnRhYmxlU2VydmljZS50b3RhbFJldHVybi5zdWJzY3JpYmUoaW5mbyA9PiB7XHJcbiAgICAgIGlmIChpbmZvKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uLCBpZHgpID0+IHtcclxuICAgICAgICAgIGlmIChjb2x1bW4gPT09IGluZm8ub2JqLmNvbHVtbikge1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsRGF0YVtpZHhdID0gdGhpcy5nZXRHcm91cFZhbHVlKGNvbHVtbiwgeyBzdW06IGluZm8ub2JqLnZhbHVlLCBjb3VudDogdGhpcy5jb3VudCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hdFNvcnQuc29ydENoYW5nZS5zdWJzY3JpYmUoXHJcbiAgICAgIChldmVudDogU29ydCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbjogQ29sdW1uQ29uZmlnID0gdGhpcy5jb2x1bW5Db25maWcuZmluZChjID0+IGMubmFtZSA9PT0gZXZlbnQuYWN0aXZlKTtcclxuICAgICAgICBjb2x1bW4uc29ydERpcmVjdGlvbiA9IGV2ZW50LmRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLnNvcnQuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5TT1JUIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMudGFibGVTZXJ2aWNlLmVtaXRWaXNpYmxlQnV0dG9uLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgIT0gdW5kZWZpbmVkICYmIGRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMubWF0VGFibGUucmVuZGVyUm93cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaXNSZW1vdGUodzogYm9vbGVhbikge1xyXG4gICAgdGhpcy50eXBlID0gdyA/IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUgOiBUYWJsZUhlbGlzYVR5cGUuTE9DQUw7XHJcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCA9IG5ldyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD4oKTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUpIHtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5wYWdlKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb2x1bW5Db25maWd1cmF0aW9uKGNvbHVtbkNvbmZpZ3VyYXRpb246IEFycmF5PENvbHVtbkNvbmZpZz4pIHtcclxuICAgIHRoaXMuaGFzU3VidGl0bGUgPSBmYWxzZTtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnID0gY29sdW1uQ29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCk7XHJcbiAgICBpZiAoY29sdW1uQ29uZmlndXJhdGlvbikge1xyXG4gICAgICBjb2x1bW5Db25maWd1cmF0aW9uLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgICBpZiAoY29sdW1uLnZpc2libGUpIHtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5wdXNoKGNvbHVtbi5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc1N1YnRpdGxlKSB7XHJcbiAgICAgICAgICB0aGlzLmhhc1N1YnRpdGxlID0gY29sdW1uLnN1YnRpdGxlICE9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5yYXdEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5yYXdEYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZS5sZW5ndGgpO1xyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGUubGVuZ3RoKTtcclxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIubGVuZ3RoKTtcclxuICAgIHRoaXMuZ2V0Q29sdW1uc1dpdGhUaXRsZSgpLmZvckVhY2goY29sID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZS5wdXNoKGNvbCkpO1xyXG4gICAgdGhpcy5nZXRIZWFkZXJTdWJ0aXRsZSgpLmZvckVhY2goY29sID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZS5wdXNoKGNvbCkpO1xyXG4gICAgdGhpcy5mb290ZXJEaXNwbGF5ZWRDb2x1bW5zKCkuZm9yRWFjaChjb2wgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aEZvb3Rlci5wdXNoKGNvbCkpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLnJhd0RhdGEgPSBkYXRhU291cmNlO1xyXG4gICAgaWYgKHRoaXMucmF3RGF0YSkgeyB0aGlzLnByZXBhcmVEYXRhU291cmNlKCk7IH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkSW5kZXhSb3coaWRSb3dTZWxlY3RlZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gaWRSb3dTZWxlY3RlZDtcclxuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCkge1xyXG4gICAgICBpZiAoKGlkUm93U2VsZWN0ZWQgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCBpZFJvd1NlbGVjdGVkIDwgMCkpIHtcclxuICAgICAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdFJvdyh7IGRhdGE6IHRoaXMucmF3RGF0YVt0aGlzLmluZGV4Um93U2VsZWN0XSwgcm93VHlwZTogUm93VHlwZS5ST1cgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmVwYXJlRGF0YVNvdXJjZSgpIHtcclxuICAgIGNvbnN0IGNoYW5nZURhdGEgPSBBcnJheTxSb3dEYXRhPigpO1xyXG4gICAgbGV0IGhhdmVHcm91cCA9IGZhbHNlO1xyXG4gICAgbGV0IGdyb3VwRm9vdGVyOiBBcnJheTxUb3RhbEdyb3VwPjtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCAmJiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuTE9DQUwgfHwgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSA8PSAxKSkge1xyXG4gICAgICAgIHRoaXMudG90YWxEYXRhID0gbmV3IEFycmF5PG51bWJlcj4odGhpcy5jb2x1bW5Db25maWcubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnNob3dGb290ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG90YWwuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5UT1RBTCB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dTZWFyY2ggPSB0aGlzLnNob3dTZWFyY2ggfHwgY29sdW1uLnNlYXJjaGFibGU7XHJcbiAgICAgIGhhdmVHcm91cCA9IGhhdmVHcm91cCB8fCBjb2x1bW4uZ3JvdXBhYmxlO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoaGF2ZUdyb3VwKSB7XHJcbiAgICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmNvbXBhcmUoYSwgYik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhd0RhdGEuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBpZiAoaGF2ZUdyb3VwICYmIChjaGFuZ2VEYXRhLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNvbXBhcmUoY2hhbmdlRGF0YVtjaGFuZ2VEYXRhLmxlbmd0aCAtIDFdLmRhdGEsIHJvdykgIT09IDApKSB7XHJcbiAgICAgICAgaWYgKGdyb3VwRm9vdGVyKSB7XHJcbiAgICAgICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiBncm91cEZvb3Rlciwgcm93VHlwZTogUm93VHlwZS5HUk9VUF9GT09URVIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IHJvdywgcm93VHlwZTogUm93VHlwZS5HUk9VUF9USVRMRSB9KTtcclxuICAgICAgICBncm91cEZvb3RlciA9IG5ldyBBcnJheTxUb3RhbEdyb3VwPih0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChoYXZlR3JvdXApIHsgdGhpcy5hZGRUb3RhbEdyb3VwKGdyb3VwRm9vdGVyLCByb3cpOyB9XHJcbiAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IHJvdywgcm93VHlwZTogUm93VHlwZS5ST1cgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YT4oY2hhbmdlRGF0YSk7XHJcbiAgICBpZiAodGhpcy5yYXdEYXRhICYmIHRoaXMucmF3RGF0YS5sZW5ndGggJiYgdGhpcy5pbmRleFJvd1NlbGVjdCAmJiAhdGhpcy5zZWxlY3RlZE9iamVjdCkge1xyXG4gICAgICBpZiAodGhpcy5pbmRleFJvd1NlbGVjdCA+PSB0aGlzLnJhd0RhdGEubGVuZ3RoIHx8IHRoaXMuaW5kZXhSb3dTZWxlY3QgPCAwKVxyXG4gICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xyXG4gICAgICB0aGlzLnNlbGVjdFJvdyh7IGRhdGE6IHRoaXMucmF3RGF0YVt0aGlzLmluZGV4Um93U2VsZWN0XSwgcm93VHlwZTogUm93VHlwZS5ST1cgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUb3RhbEdyb3VwKHJvd1RvdGFsOiBBcnJheTxUb3RhbEdyb3VwPiwgcm93OiBhbnkpIHtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChyb3dUb3RhbFtpbmRleF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdID0geyBzdW06IENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUocm93LCBjb2x1bW4pLCBjb3VudDogMSB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0uc3VtICs9IENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUocm93LCBjb2x1bW4pO1xyXG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLmNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tcGFyZShhOiBhbnksIGI6IGFueSk6IG51bWJlciB7XHJcbiAgICBsZXQgd3MgPSAwO1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAod3MgPT09IDAgJiYgY29sdW1uLmdyb3VwYWJsZSkge1xyXG4gICAgICAgIGlmIChDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKGEsIGNvbHVtbikgPCBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKGIsIGNvbHVtbikpIHsgd3MgPSAtMTsgfSBlbHNlIGlmIChDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKGEsIGNvbHVtbikgPiBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKGIsIGNvbHVtbikpIHsgd3MgPSAxOyB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHdzO1xyXG4gIH1cclxuXHJcbiAgZ2V0R3JvdXBEZXNjcmlwdGlvbihvYmo6IGFueSk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4uZ3JvdXBhYmxlKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IChyZXN1bHQubGVuZ3RoID8gJyAtICcgOiAnJykgKyBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKG9iaiwgY29sdW1uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgaXNHcm91cFRpdGxlKGluZGV4LCBpdGVtKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLkdST1VQX1RJVExFO1xyXG4gIH1cclxuXHJcbiAgaXNSb3coaW5kZXgsIGl0ZW0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuUk9XO1xyXG4gIH1cclxuXHJcbiAgaXNHcm91cEZvb3RlcihpbmRleCwgaXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9GT09URVI7XHJcbiAgfVxyXG5cclxuICBmb290ZXJEaXNwbGF5ZWRDb2x1bW5zKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5tYXAobmFtZSA9PiAnZm9vdGVyLScgKyBuYW1lKTtcclxuICB9XHJcblxyXG4gIGdldEdyb3VwVmFsdWUoY29sdW1uOiBDb2x1bW5Db25maWcsIGRhdGE6IFRvdGFsR3JvdXApOiBudW1iZXIge1xyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5TVU0pIHsgcmV0dXJuIGRhdGEuc3VtOyB9XHJcbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLkNPVU5UKSB7IHJldHVybiBkYXRhLmNvdW50OyB9XHJcbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLkFWRVJBR0UpIHsgcmV0dXJuIDEuICogZGF0YS5zdW0gLyBkYXRhLmNvdW50OyB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUob2JqOiBhbnksIGNvbHVtbjogQ29sdW1uQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShvYmosIGNvbHVtbik7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZVRvb2x0aXAob2JqOiBhbnksIGNvbHVtbjogQ29sdW1uQ29uZmlnKSB7XHJcbiAgICBpZiAodGhpcy5zaG93VG9vbFRpcCkge1xyXG4gICAgICByZXR1cm4gQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShvYmosIGNvbHVtbik7XHJcbiAgICB9IGVsc2UgeyByZXR1cm4gbnVsbCB9XHJcbiAgfVxyXG5cclxuICBzZWFyY2hUZXh0KHRleHQpIHtcclxuICAgIHRoaXMubGFzdFNlYXJjaCA9IHRleHQ7XHJcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHsgdGV4dCwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KHJvdywgaXNVc2VyKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0gcm93LmRhdGE7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xyXG4gICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkT2JqZWN0LCBzY29wZTogaXNVc2VyID8gRXZlbnRTY29wZS5VU0VSIDogRXZlbnRTY29wZS5DT0RFX0NBTEwgfSk7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChldmVudCkge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZiAoZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LnNjcm9sbFRvcCA8IDEwMDApIHtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdvTmV4dFBhZ2UoKSB7XHJcbiAgICBpZiAoIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgJiYgIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCkge1xyXG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLm5leHRQYWdlLmVtaXQoe1xyXG4gICAgICAgIHBhZ2U6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50Lm5leHRQYWdlKCksXHJcbiAgICAgICAgYm9keTogdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuZ2V0Qm9keSh0aGlzLmNvbHVtbkNvbmZpZywgdGhpcy5sYXN0U2VhcmNoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogVFtdKSB7XHJcbiAgICBpZiAoIXRoaXMucmF3RGF0YSkge1xyXG4gICAgICB0aGlzLnJhd0RhdGEgPSBuZXcgQXJyYXk8VD4oKTtcclxuICAgIH1cclxuICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5jb25jYXQoZGF0YSk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XHJcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XHJcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRibENsaWNrQ2VsbCgpIHtcclxuICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHRoaXMuc2VsZWN0ZWRDZWxscyk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZENlbGwoZWxlbWVudCwgY29sdW1uOiBDb2x1bW5Db25maWcpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDZWxscyA9IHsgY29sdW1uOiBjb2x1bW4sIHJvdzogZWxlbWVudCB9O1xyXG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRDZWxsKHJvdywgY29sdW1uOiBDb2x1bW5Db25maWcpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZENlbGxzICE9IG51bGwpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENlbGxzLmNvbHVtbi5uYW1lID09PSBjb2x1bW4ubmFtZSAmJlxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZENlbGxzLnJvdy5kYXRhID09PSByb3cuZGF0YSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc1RvQ2VsbChyb3csIGNvbHVtbjogQ29sdW1uQ29uZmlnKSB7XHJcbiAgICBsZXQgY2xhc3NUb0NlbGwgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnQ2VsbFN0eWxlcykge1xyXG4gICAgICBsZXQgZm91bmQgPSB0aGlzLmNvbmZpZ0NlbGxTdHlsZXMuZmluZChjID0+IHtcclxuICAgICAgICByZXR1cm4gYy5jZWxsRGF0YSA9PT0gdGhpcy5nZXRWYWx1ZShyb3csIGNvbHVtbik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICBjbGFzc1RvQ2VsbC5wdXNoKGZvdW5kLmNsYXNzQ2VsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjb2x1bW4uY29sdW1uU3R5bGUpXHJcbiAgICAgIGNsYXNzVG9DZWxsLnB1c2goY29sdW1uLmNvbHVtblN0eWxlKTtcclxuICAgIHJldHVybiBjbGFzc1RvQ2VsbDtcclxuICB9XHJcblxyXG4gIGdldENsYXNzVG9Sb3cocm93KSB7XHJcbiAgICBjb25zdCBjbGFzc1RvUm93ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIGlmKHJvdyA9PT0gdGhpcy5zZWxlY3RlZE9iamVjdCAmJiAhdGhpcy5pc0NlbGxTZWxlY3Rpb24pXHJcbiAgICAgIGNsYXNzVG9Sb3cucHVzaCgnJyk7XHJcbiAgICBpZiAodGhpcy5jb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uKSB7XHJcbiAgICAgIGxldCBmb3VuZCA9IHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbi5maW5kKGMgPT4ge1xyXG4gICAgICAgIHJldHVybiBjLmRhdGEgPT09IHRoaXMuZ2V0VmFsdWUocm93LCBjLmNvbHVtbik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICBjbGFzc1RvUm93LnB1c2goZm91bmQuY2xhc3NSb3cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NUb1JvdztcclxuICB9XHJcblxyXG4gIG9uRHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8YW55Pikge1xyXG4gICAgbGV0IGFycmF5OiBSb3dEYXRhW10gPSB0aGlzLmRhdGEuZGF0YTtcclxuICAgIG1vdmVJdGVtSW5BcnJheShhcnJheSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuZHJvcC5lbWl0KHsgdmFsdWU6IGFycmF5W2V2ZW50LmN1cnJlbnRJbmRleF0uZGF0YSwgb3JkZXI6IGV2ZW50LmN1cnJlbnRJbmRleCB9KTtcclxuICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoYXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgdGFibGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XHJcbiAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuZGF0YS5maW5kSW5kZXgocm93ID0+IHJvdy5kYXRhID09PSB0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbiA9IC0xMDtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbENvdW50Kys7XHJcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PSAtMTAgJiYgaW5kZXggPiBjdXJyZW50SW5kZXggJiYgcm93LnJvd1R5cGUgPT0gUm93VHlwZS5ST1cpXHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQtLTtcclxuICAgICAgICBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLnJldmVyc2UoKS5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09IC0xMCAmJiBpbmRleCA+IGN1cnJlbnRJbmRleCAmJiByb3cucm93VHlwZSA9PSBSb3dUeXBlLlJPVylcclxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEucmV2ZXJzZSgpO1xyXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gIT0gLTEwKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBuZXdTZWxlY3Rpb24gLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uICE9IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMuZGF0YS5kYXRhW25ld1NlbGVjdGlvbl0sIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNjcm9sbENvdW50KSA+PSAyKVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQgPSAwO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRlIGVsIGV2ZW50byBjdWFuZG8gc2UgZGEgY2xpY2sgYWwgYm90b24gQWRkUm93XHJcbiAgICovXHJcbiAgb25BZGRSb3coKSB7XHJcbiAgICB0aGlzLmFkZFJvdy5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbkJvb2tDbGlja2VkKHNlbGVjdGVkT2JqZWN0KSB7XHJcbiAgICB0aGlzLmJvb2tDbGlja2VkLmVtaXQoc2VsZWN0ZWRPYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGVhZGVyU3VidGl0bGUoKTogc3RyaW5nW10ge1xyXG4gICAgbGV0IHggPSB0aGlzLmNvbHVtbkNvbmZpZy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi52aXNpYmxlICYmIGNvbHVtbi5zdWJ0aXRsZSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuICdzdWJ0aXRsZScgKyBpbmRleDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSkuZmlsdGVyKGRhdGEgPT4gZGF0YSAhPSBudWxsKTtcclxuICAgIHJldHVybiB4O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sdW1uc1dpdGhUaXRsZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1uQ29uZmlnLmZpbHRlcihjb2x1bW4gPT4gXHJcbiAgICAgICAgY29sdW1uLnZpc2libGUgJiYgY29sdW1uLnRpdGxlICE9IHVuZGVmaW5lZFxyXG4gICAgKS5tYXAoY29sID0+IGNvbC5uYW1lKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIl19