/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { ChangeColumnConfigurationType, ColumnConfigUtil, EventScope, TableHelisaType, TotalType, ColumnType } from './table-helisa.interface';
import { TableHelisaService } from './table-helisa.service';
import { TableHelisaConnectComponent } from './table-helisa-connect.component';
import { moveItemInArray } from '@angular/cdk/drag-drop';
/**
 * @record
 * @template T
 */
export function RowData() { }
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
        this.indexRowStartDrag = -1;
        this.lastIndexRowDrag = -1;
        this.dataBeforeDrag = null;
        this.dataSource$ = [];
        this.scrollX = 0;
        this.scrollY = 0;
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
        this.addRowButton = { showButton: false, text: '' };
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
            if (data !== undefined && data != null) {
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
                if (this.addBookButton) {
                    /** @type {?} */
                    var columnCount = columnConfiguration.length;
                    /** @type {?} */
                    var countSubtitle_1 = 0;
                    /** @type {?} */
                    var showBookButton_1 = false;
                    columnConfiguration.forEach((/**
                     * @param {?} column
                     * @return {?}
                     */
                    function (column) {
                        if (!!column.subtitle) {
                            countSubtitle_1 = countSubtitle_1 + 1;
                        }
                        if ((!showBookButton_1) && (column.name === 'bookButton')) {
                            showBookButton_1 = true;
                        }
                    }));
                    /** @type {?} */
                    var subtitleTemp = columnCount === countSubtitle_1;
                    if (!showBookButton_1) {
                        columnConfiguration.push({
                            name: 'bookButton',
                            title: '',
                            subtitle: subtitleTemp ? '' : undefined,
                            visible: true
                        });
                    }
                }
                columnConfiguration.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    if (column.visible) {
                        _this.displayedColumns.push(column.name);
                    }
                    if (!_this.hasSubtitle) {
                        _this.hasSubtitle = column.subtitle !== undefined;
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
        get: /**
         * @return {?}
         */
        function () {
            return this.dataSource$;
        },
        set: /**
         * @param {?} dataSource
         * @return {?}
         */
        function (dataSource) {
            this.dataSource$ = dataSource;
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
            if (haveGroup && (changeData.length === 0 || _this.compare((/** @type {?} */ (changeData[changeData.length - 1].data)), row) !== 0)) {
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
            if (this.indexRowSelect >= this.rawData.length || this.indexRowSelect < 0) {
                this.indexRowSelect = 0;
            }
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
                    rowTotal[index] = { sum: ((/** @type {?} */ (new ColumnConfigUtil().getValue(row, column)))), count: 1 };
                }
                else {
                    rowTotal[index].sum += ((/** @type {?} */ (new ColumnConfigUtil().getValue(row, column))));
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
                if (((/** @type {?} */ (new ColumnConfigUtil().getValue(a, column)))) < ((/** @type {?} */ (new ColumnConfigUtil().getValue(b, column))))) {
                    ws = -1;
                }
                else if (((/** @type {?} */ (new ColumnConfigUtil().getValue(a, column)))) > ((/** @type {?} */ (new ColumnConfigUtil().getValue(b, column))))) {
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
                result += (result.length ? ' - ' : '') + (new ColumnConfigUtil().getValue(obj, column));
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
        return (/** @type {?} */ (new ColumnConfigUtil().getValue(obj, column)));
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
            return (/** @type {?} */ (new ColumnConfigUtil().getValue(obj, column)));
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
     * @param {?=} column
     * @return {?}
     */
    TableHelisaComponent.prototype.selectRow = /**
     * @param {?} row
     * @param {?} isUser
     * @param {?=} column
     * @return {?}
     */
    function (row, isUser, column) {
        if (row === undefined || row === null) {
            return;
        }
        if ((column === undefined || column === null) || (!!column && column.name !== 'bookButton')) {
            this.selectedObject = (/** @type {?} */ (row.data));
            this.select.emit(this.selectedObject);
            this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
        }
        else if (!!column && column.name === 'bookButton') {
            if (this.selectedObject !== row.data) {
                this.selectedObject = (/** @type {?} */ (row.data));
                this.select.emit(this.selectedObject);
                this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
            }
            this.bookClicked.emit(this.selectedObject);
        }
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
        var element = (/** @type {?} */ (event.target));
        /** @type {?} */
        var isScrollY;
        if (this.scrollY !== element.scrollTop) {
            isScrollY = true;
            this.scrollY = element.scrollTop;
            this.scrollX = element.scrollLeft;
        }
        if (this.scrollX !== element.scrollLeft) {
            isScrollY = false;
            this.scrollY = element.scrollTop;
            this.scrollX = element.scrollLeft;
        }
        if ((element.scrollHeight - element.scrollTop < 1000) && isScrollY) {
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
        this.selectCell.emit((/** @type {?} */ (this.selectedCells)));
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
        this.selectRow(element, true, column);
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
                    ((/** @type {?} */ (this.selectedCells.row))).data === row.data) {
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
        if (column.columnStyle) {
            classToCell.push(column.columnStyle);
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
        var classToRow = new Array();
        if (row === this.selectedObject && !this.isCellSelection) {
            classToRow.push('');
        }
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
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            /** @type {?} */
            var rowIndex = this.getRowIndex(event.pageY);
            /** @type {?} */
            var array = this.dataBeforeDrag.data;
            /** @type {?} */
            var rawData = this.rawData;
            moveItemInArray(array, this.indexRowStartDrag, rowIndex);
            moveItemInArray(rawData, this.indexRowStartDrag, rowIndex);
            this.drop.emit({ value: (/** @type {?} */ (array[rowIndex].data)), order: rowIndex });
            this.rawData = rawData;
            this.data = new MatTableDataSource(array);
            event.stopPropagation();
        }
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
                    if (newSelection_1 === -10 && index > currentIndex_1 && row.rowType === RowType.ROW) {
                        newSelection_1 = index;
                    }
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
                    if (newSelection_1 === -10 && index > currentIndex_1 && row.rowType === RowType.ROW) {
                        newSelection_1 = index;
                    }
                }));
                this.data.data.reverse();
                if (newSelection_1 !== -10) {
                    newSelection_1 = this.data.data.length - newSelection_1 - 1;
                }
            }
            if (newSelection_1 !== -10) {
                this.selectRow(this.data.data[newSelection_1], true);
            }
            if (Math.abs(this.scrollCount) >= 2) {
                this.scrollCount = 0;
            }
            else {
                event.preventDefault();
            }
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
            if (column.visible && column.subtitle !== undefined) {
                return 'subtitle' + index;
            }
            else {
                return null;
            }
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
            return column.visible && column.title !== undefined;
        })).map((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return col.name; }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TableHelisaComponent.prototype.dragger = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            /** @type {?} */
            var rowIndex = this.getRowIndex(event.pageY);
            if (rowIndex !== this.lastIndexRowDrag) {
                this.lastIndexRowDrag = rowIndex;
                // This can have a memory problem with big data
                /** @type {?} */
                var array = tslib_1.__spread(this.dataBeforeDrag.data);
                moveItemInArray(array, this.indexRowStartDrag, rowIndex);
                this.data = new MatTableDataSource(array);
            }
            event.preventDefault();
            return true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TableHelisaComponent.prototype.startDrag = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.indexRowStartDrag = this.getRowIndex(event.pageY);
        this.lastIndexRowDrag = this.indexRowStartDrag;
        this.dataBeforeDrag = this.data;
    };
    /**
     * @private
     * @param {?} pageY
     * @return {?}
     */
    TableHelisaComponent.prototype.getRowIndex = /**
     * @private
     * @param {?} pageY
     * @return {?}
     */
    function (pageY) {
        /** @type {?} */
        var offsetTop = 0;
        /** @type {?} */
        var container = this.containerTable.nativeElement;
        while ((container !== null) && (offsetTop === 0)) {
            offsetTop = container.offsetTop;
            container = container.parentElement;
        }
        /** @type {?} */
        var rowIndex = -1;
        /** @type {?} */
        var rows = this.matTableElement.nativeElement.children[1].children;
        for (var i = 0; i < rows.length; i++) {
            /** @type {?} */
            var row = ((/** @type {?} */ (rows[i])));
            if (pageY - offsetTop > row.offsetTop - this.containerTable.nativeElement.scrollTop) {
                rowIndex = i;
            }
        }
        if (rowIndex < 0) {
            rowIndex = 0;
        }
        return rowIndex;
    };
    Object.defineProperty(TableHelisaComponent.prototype, "columnType", {
        get: /**
         * @return {?}
         */
        function () {
            return ColumnType;
        },
        enumerable: true,
        configurable: true
    });
    TableHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-table',
                    template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\r\n<div class=\"div-table-helisa\">\r\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\r\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\r\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\r\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\r\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\r\n          <ng-container *ngIf=\"column.title != undefined\">\r\n            <div *ngIf=\"!column.sortable\">\r\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\r\n                {{column.title}} </th>\r\n            </div>\r\n            <div *ngIf=\"column.sortable\">\r\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\r\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton'\"> \r\n                  <th mat-header-cell *matHeaderCellDef ></th>\r\n                  <td mat-cell *matCellDef=\"let element;\" (click)=\"selectedCell(element, column)\">\r\n                    <button mat-icon-button *ngIf=\"element.data === selectedObject\">\r\n                      <i class=\"material-icons-outlined\">description</i>\r\n                    </button>\r\n                  </td>\r\n          </ng-container>\r\n\r\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\r\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\r\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\r\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{ getValue(element.data, column) }}</a>\r\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\r\n          </td>\r\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\r\n        </ng-container>\r\n\r\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\r\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\r\n            {{column.subtitle}}</th>\r\n        </ng-container>\r\n      </ng-container>\r\n \r\n      <ng-container matColumnDef=\"groupHeader\">\r\n        <td mat-cell *matCellDef=\"let group\">\r\n          <strong>{{ getGroupDescription(group.data) }}</strong>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\r\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\r\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\r\n          [ngClass]=\"getClassToRow(row.data)\" [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\r\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\r\n        </tr>\r\n      </ng-container>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n",
                    styles: ["table{table-layout:fixed}tbody tr,tfoot tr,thead tr{height:26px}tbody tr td,tbody tr th,tfoot tr td,tfoot tr th,thead tr td,thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}tbody tr td button{line-height:inherit;height:auto}tfoot{display:none}tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table{position:relative}/deep/ hel-table>button{justify-content:center;align-items:flex-start;background:0 0;position:absolute;color:transparent;overflow:hidden;cursor:pointer;display:flex;border:none;height:26px;z-index:101;width:20px;opacity:.5;right:0;top:0}/deep/ hel-table>button:focus{outline:0}/deep/ hel-table>button:hover{opacity:1}/deep/ hel-table>button:before{justify-content:center;align-items:center;position:absolute;font-size:20px;display:flex;content:'+';color:#fff;height:26px;width:20px}/deep/ hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}/deep/ hel-table .buttons-container{order:2}/deep/ hel-table .buttons-container.hasTitle{padding-top:26px}/deep/ hel-table .buttons-container.hasSubtitle{padding-top:26px}/deep/ hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}/deep/ hel-table .buttons-container>div{height:26px}/deep/ hel-table .buttons-container>div button{justify-content:center;align-items:center;display:flex;height:26px}/deep/ hel-table .buttons-container>div button>*{display:flex;height:100%}/deep/ hel-table .div-table-helisa{height:100%}/deep/ hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa{width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ table{table-layout:fixed}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr{height:26px}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td button{line-height:inherit;height:auto}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot{display:none}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table .div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
                }] }
    ];
    /** @nocollapse */
    TableHelisaComponent.ctorParameters = function () { return [
        { type: TableHelisaService }
    ]; };
    TableHelisaComponent.propDecorators = {
        matSort: [{ type: ViewChild, args: [MatSort,] }],
        matTable: [{ type: ViewChild, args: [MatTable,] }],
        matTableElement: [{ type: ViewChild, args: [MatTable, { read: ElementRef },] }],
        containerTable: [{ type: ViewChild, args: ['containerTable',] }],
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
        hideDelay: [{ type: Input }],
        showDelay: [{ type: Input }],
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
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.indexRowStartDrag;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.lastIndexRowDrag;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.dataBeforeDrag;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.dataSource$;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.scrollX;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.scrollY;
    /** @type {?} */
    TableHelisaComponent.prototype.matSort;
    /** @type {?} */
    TableHelisaComponent.prototype.matTable;
    /** @type {?} */
    TableHelisaComponent.prototype.matTableElement;
    /** @type {?} */
    TableHelisaComponent.prototype.containerTable;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcxRSxPQUFPLEVBR0wsNkJBQTZCLEVBRTdCLGdCQUFnQixFQUtoQixVQUFVLEVBSVYsZUFBZSxFQUVmLFNBQVMsRUFDVCxVQUFVLEVBRVgsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUd0RSw2QkFHQzs7O0lBRkMsdUJBQWE7O0lBQ2IsMEJBQWlCOzs7O0lBSWpCLGNBQVcsRUFBRSxlQUFZLEVBQUUsTUFBRzs7Ozs7Ozs7QUFLaEM7SUEwRUUsOEJBQW9CLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQS9EdkQscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBQ2hDLDhCQUF5QixHQUFhLEVBQUUsQ0FBQztRQUN6QyxpQ0FBNEIsR0FBYSxFQUFFLENBQUM7UUFDNUMsK0JBQTBCLEdBQWEsRUFBRSxDQUFDO1FBSTFDLFNBQUksR0FBb0IsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUV0QyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUNoQyxnQkFBVyxHQUFZLEtBQUss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QUF5Qzs7SUFDekMsNERBQTRDOztJQUM1QywwREFBMEM7O0lBQzFDLDRDQUFrQzs7SUFDbEMsOENBQWtCOztJQUNsQiwwQ0FBbUI7O0lBQ25CLG9DQUE4Qzs7SUFDOUMsOENBQXVCOzs7OztJQUN2QiwyQ0FBZ0M7O0lBQ2hDLDJDQUE2Qjs7Ozs7SUFDN0IsaURBQXVDOzs7OztJQUN2QyxnREFBc0M7Ozs7O0lBQ3RDLDhDQUFzRDs7Ozs7SUFDdEQsMkNBQW1DOzs7OztJQUNuQyx1Q0FBNEI7Ozs7O0lBQzVCLHVDQUE0Qjs7SUFFNUIsdUNBQXFDOztJQUNyQyx3Q0FBMkM7O0lBQzNDLCtDQUF1RTs7SUFDdkUsOENBQXdEOztJQUV4RCxvQ0FBNEU7O0lBQzVFLHFDQUE2RTs7SUFDN0Usc0NBQThFOzs7OztJQUs5RSxzQ0FBMEQ7O0lBQzFELDBDQUEwRTs7SUFDMUUsNENBQTRGOztJQUM1Rix3Q0FBb0c7O0lBQ3BHLHlDQUFtQzs7SUFDbkMsK0NBQTBDOztJQUMxQyxxQ0FBdUI7O0lBQ3ZCLGdEQUFzRDs7SUFDdEQseURBQThEOztJQUM5RCw2Q0FBZ0M7O0lBQ2hDLG9DQUFrRjs7SUFDbEYseUNBQW9DOztJQUNwQyw0Q0FBc0U7O0lBQ3RFLHNDQUFnRTs7SUFDaEUsMkNBQStEOztJQUMvRCw2Q0FBd0M7O0lBQ3hDLDJDQUFxQzs7SUFDckMsMENBQTRCOztJQUM1QiwwQ0FBNEI7Ozs7O0lBTzVCLHlDQUFpQzs7Ozs7SUFLakMseUNBQWlDOzs7OztJQUdyQiw0Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0U29ydCwgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgU29ydCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3R5cGluZ3Mvc29ydCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFkZFJvd0J1dHRvbixcclxuICBDZWxsLFxyXG4gIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLFxyXG4gIENvbHVtbkNvbmZpZyxcclxuICBDb2x1bW5Db25maWdVdGlsLFxyXG4gIENvbmZpZ0NlbGxTdHlsZXMsXHJcbiAgQ29uZmlnUm93U3R5bGVzLFxyXG4gIERyb3BFbGVtZW50LFxyXG4gIEV2ZW50Q29sdW1uLFxyXG4gIEV2ZW50U2NvcGUsXHJcbiAgRXZlbnRTZWFyY2gsXHJcbiAgUmVxdWVzdFRhYmxlSGVsaXNhLFxyXG4gIFNlbGVjdE9iamVjdCxcclxuICBUYWJsZUhlbGlzYVR5cGUsXHJcbiAgVG90YWxHcm91cCxcclxuICBUb3RhbFR5cGUsXHJcbiAgQ29sdW1uVHlwZSxcclxuICBUb3RhbFRhYmxlSGVsaXNhXHJcbn0gZnJvbSAnLi90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGFibGVIZWxpc2FTZXJ2aWNlLCBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvIH0gZnJvbSAnLi90YWJsZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtaGVsaXNhLWNvbm5lY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb3dEYXRhPFQ+IHtcclxuICBkYXRhOiB7fSB8IFQ7XHJcbiAgcm93VHlwZTogUm93VHlwZTtcclxufVxyXG5cclxuZW51bSBSb3dUeXBlIHtcclxuICBHUk9VUF9USVRMRSwgR1JPVVBfRk9PVEVSLCBST1dcclxufVxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSB0YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ6IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDxUPjtcclxuICB0b3RhbERhdGE6IEFycmF5PG51bWJlcj47XHJcbiAgcmF3RGF0YTogQXJyYXk8VD47XHJcbiAgZGF0YTogTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE8VD4+O1xyXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XHJcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZTogc3RyaW5nW10gPSBbXTtcclxuICBkaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxuICBzZWxlY3RlZE9iamVjdDogVDtcclxuICBsYXN0U2VhcmNoOiBzdHJpbmc7XHJcbiAgdHlwZTogVGFibGVIZWxpc2FUeXBlID0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xyXG4gIGluZGV4Um93U2VsZWN0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzY3JvbGxDb3VudDogbnVtYmVyID0gMDtcclxuICBoYXNTdWJ0aXRsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaW5kZXhSb3dTdGFydERyYWc6IG51bWJlciA9IC0xO1xyXG4gIHByaXZhdGUgbGFzdEluZGV4Um93RHJhZzogbnVtYmVyID0gLTE7XHJcbiAgcHJpdmF0ZSBkYXRhQmVmb3JlRHJhZzogeyBkYXRhOiBSb3dEYXRhPFQ+W10gfSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkYXRhU291cmNlJDogQXJyYXk8VD4gPSBbXTtcclxuICBwcml2YXRlIHNjcm9sbFg6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzY3JvbGxZOiBudW1iZXIgPSAwO1xyXG5cclxuICBAVmlld0NoaWxkKE1hdFNvcnQpIG1hdFNvcnQ6IE1hdFNvcnQ7XHJcbiAgQFZpZXdDaGlsZChNYXRUYWJsZSkgbWF0VGFibGU6IE1hdFRhYmxlPFQ+O1xyXG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBtYXRUYWJsZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyVGFibGUnKSBjb250YWluZXJUYWJsZTogRWxlbWVudFJlZjtcclxuXHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xyXG4gIEBPdXRwdXQoKSB0b3RhbDogRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+KCk7XHJcbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2FkbywgY2FtYmlhciBwb3IgZWxlY3RPYmplY3RcclxuICAgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdENlbGw6IEV2ZW50RW1pdHRlcjxDZWxsPFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbDxUPj4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PigpO1xyXG4gIEBPdXRwdXQoKSBuZXh0UGFnZTogRXZlbnRFbWl0dGVyPFJlcXVlc3RUYWJsZUhlbGlzYTxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFJlcXVlc3RUYWJsZUhlbGlzYTxUPj4oKTtcclxuICBASW5wdXQoKSBzaG93VGl0bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGlzQ2VsbFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY29uZmlnQ2VsbFN0eWxlczogQXJyYXk8Q29uZmlnQ2VsbFN0eWxlczxUPj47XHJcbiAgQElucHV0KCkgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbjogQXJyYXk8Q29uZmlnUm93U3R5bGVzPFQ+PjtcclxuICBASW5wdXQoKSBzZWxlY3RlZENlbGxzOiBDZWxsPFQ+O1xyXG4gIEBPdXRwdXQoKSBkcm9wOiBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRWxlbWVudDxUPj4oKTtcclxuICBASW5wdXQoKSBpc0RyYWdnZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBhZGRSb3dCdXR0b246IEFkZFJvd0J1dHRvbiA9IHsgc2hvd0J1dHRvbjogZmFsc2UsIHRleHQ6ICcnIH07XHJcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBib29rQ2xpY2tlZDogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG4gIEBJbnB1dCgpIGFkZEJvb2tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XHJcbiAgc2hvd0Zvb3RlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNob3dTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamUgZGVsIHRvb2x0aXBcclxuICAgKi9cclxuICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlU2VydmljZTogVGFibGVIZWxpc2FTZXJ2aWNlPFQ+KSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYmxlU2VydmljZS5uZXh0UGFnZVJldHVybi5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhOiBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4pID0+IHtcclxuICAgICAgICBpZiAoIWRhdGEudGFibGUgfHwgZGF0YS50YWJsZSA9PT0gdGhpcykge1xyXG4gICAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLm9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy50YWJsZVNlcnZpY2UudG90YWxSZXR1cm4uc3Vic2NyaWJlKChpbmZvOiBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+KSA9PiB7XHJcbiAgICAgIGlmIChpbmZvKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBpZiAoY29sdW1uID09PSBpbmZvLm9iai5jb2x1bW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b3RhbERhdGFbaWR4XSA9IHRoaXMuZ2V0R3JvdXBWYWx1ZShjb2x1bW4sIHsgc3VtOiBpbmZvLm9iai52YWx1ZSwgY291bnQ6IHRoaXMuY291bnQgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYXRTb3J0LnNvcnRDaGFuZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAoZXZlbnQ6IFNvcnQpID0+IHtcclxuICAgICAgICBjb25zdCBjb2x1bW46IENvbHVtbkNvbmZpZyA9IHRoaXMuY29sdW1uQ29uZmlnLmZpbmQoKGM6IENvbHVtbkNvbmZpZykgPT4gYy5uYW1lID09PSBldmVudC5hY3RpdmUpO1xyXG4gICAgICAgIGNvbHVtbi5zb3J0RGlyZWN0aW9uID0gZXZlbnQuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuc29ydC5lbWl0KHsgY29sdW1uLCBjb2x1bW5Db25maWd1cmF0aW9uczogdGhpcy5jb2x1bW5Db25maWcsIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLlNPUlQgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy50YWJsZVNlcnZpY2UuZW1pdFZpc2libGVCdXR0b24uc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMubWF0VGFibGUucmVuZGVyUm93cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaXNSZW1vdGUodzogYm9vbGVhbikge1xyXG4gICAgdGhpcy50eXBlID0gdyA/IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUgOiBUYWJsZUhlbGlzYVR5cGUuTE9DQUw7XHJcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCA9IG5ldyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD4oKTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUpIHtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5wYWdlKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb2x1bW5Db25maWd1cmF0aW9uKGNvbHVtbkNvbmZpZ3VyYXRpb246IEFycmF5PENvbHVtbkNvbmZpZz4pIHtcclxuICAgIHRoaXMuaGFzU3VidGl0bGUgPSBmYWxzZTtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnID0gY29sdW1uQ29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCk7XHJcblxyXG4gICAgaWYgKGNvbHVtbkNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgaWYgKHRoaXMuYWRkQm9va0J1dHRvbikge1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbkNvdW50OiBudW1iZXIgPSBjb2x1bW5Db25maWd1cmF0aW9uLmxlbmd0aDtcclxuICAgICAgICBsZXQgY291bnRTdWJ0aXRsZTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgc2hvd0Jvb2tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBjb2x1bW5Db25maWd1cmF0aW9uLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgICBpZiAoISFjb2x1bW4uc3VidGl0bGUpIHtcclxuICAgICAgICAgICAgY291bnRTdWJ0aXRsZSA9IGNvdW50U3VidGl0bGUgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCghc2hvd0Jvb2tCdXR0b24pICYmIChjb2x1bW4ubmFtZSA9PT0gJ2Jvb2tCdXR0b24nKSkge1xyXG4gICAgICAgICAgICBzaG93Qm9va0J1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc3VidGl0bGVUZW1wOiBib29sZWFuID0gY29sdW1uQ291bnQgPT09IGNvdW50U3VidGl0bGU7XHJcbiAgICAgICAgaWYgKCFzaG93Qm9va0J1dHRvbikge1xyXG4gICAgICAgICAgY29sdW1uQ29uZmlndXJhdGlvbi5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogJ2Jvb2tCdXR0b24nLFxyXG4gICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgIHN1YnRpdGxlOiBzdWJ0aXRsZVRlbXAgPyAnJyA6IHVuZGVmaW5lZCAsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29sdW1uQ29uZmlndXJhdGlvbi5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xyXG4gICAgICAgIGlmIChjb2x1bW4udmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnB1c2goY29sdW1uLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaGFzU3VidGl0bGUpIHtcclxuICAgICAgICAgIHRoaXMuaGFzU3VidGl0bGUgPSBjb2x1bW4uc3VidGl0bGUgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5yYXdEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5yYXdEYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZS5sZW5ndGgpO1xyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGUubGVuZ3RoKTtcclxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIubGVuZ3RoKTtcclxuICAgIHRoaXMuZ2V0Q29sdW1uc1dpdGhUaXRsZSgpLmZvckVhY2goKGNvbDogc3RyaW5nKSA9PiB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUucHVzaChjb2wpKTtcclxuICAgIHRoaXMuZ2V0SGVhZGVyU3VidGl0bGUoKS5mb3JFYWNoKChjb2w6IHN0cmluZykgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLnB1c2goY29sKSk7XHJcbiAgICB0aGlzLmZvb3RlckRpc3BsYXllZENvbHVtbnMoKS5mb3JFYWNoKChjb2w6IHN0cmluZykgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aEZvb3Rlci5wdXNoKGNvbCkpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRhU291cmNlKGRhdGFTb3VyY2U6IEFycmF5PFQ+KSB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UkID0gZGF0YVNvdXJjZTtcclxuICAgIHRoaXMucmF3RGF0YSA9IGRhdGFTb3VyY2U7XHJcbiAgICBpZiAodGhpcy5yYXdEYXRhKSB7IHRoaXMucHJlcGFyZURhdGFTb3VyY2UoKTsgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGFTb3VyY2UoKTogQXJyYXk8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZSQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZEluZGV4Um93KGlkUm93U2VsZWN0ZWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IGlkUm93U2VsZWN0ZWQ7XHJcbiAgICBpZiAodGhpcy5yYXdEYXRhICYmIHRoaXMucmF3RGF0YS5sZW5ndGgpIHtcclxuICAgICAgaWYgKChpZFJvd1NlbGVjdGVkID49IHRoaXMucmF3RGF0YS5sZW5ndGggfHwgaWRSb3dTZWxlY3RlZCA8IDApKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJlcGFyZURhdGFTb3VyY2UoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGFuZ2VEYXRhOiBBcnJheTxSb3dEYXRhPFQ+PiA9IEFycmF5PFJvd0RhdGE8VD4+KCk7XHJcbiAgICBsZXQgaGF2ZUdyb3VwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZXQgZ3JvdXBGb290ZXI6IEFycmF5PFRvdGFsR3JvdXA+O1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCAmJiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuTE9DQUwgfHwgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSA8PSAxKSkge1xyXG4gICAgICAgIHRoaXMudG90YWxEYXRhID0gbmV3IEFycmF5PG51bWJlcj4odGhpcy5jb2x1bW5Db25maWcubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnNob3dGb290ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG90YWwuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5UT1RBTCB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dTZWFyY2ggPSB0aGlzLnNob3dTZWFyY2ggfHwgY29sdW1uLnNlYXJjaGFibGU7XHJcbiAgICAgIGhhdmVHcm91cCA9IGhhdmVHcm91cCB8fCBjb2x1bW4uZ3JvdXBhYmxlO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoaGF2ZUdyb3VwKSB7XHJcbiAgICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5zb3J0KChhOiBULCBiOiBUKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogbnVtYmVyID0gMDtcclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmNvbXBhcmUoYSwgYik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhd0RhdGEuZm9yRWFjaCgocm93OiBUKSA9PiB7XHJcbiAgICAgIGlmIChoYXZlR3JvdXAgJiYgKGNoYW5nZURhdGEubGVuZ3RoID09PSAwIHx8IHRoaXMuY29tcGFyZShjaGFuZ2VEYXRhW2NoYW5nZURhdGEubGVuZ3RoIC0gMV0uZGF0YSBhcyBULCByb3cpICE9PSAwKSkge1xyXG4gICAgICAgIGlmIChncm91cEZvb3Rlcikge1xyXG4gICAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogZ3JvdXBGb290ZXIsIHJvd1R5cGU6IFJvd1R5cGUuR1JPVVBfRk9PVEVSIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuR1JPVVBfVElUTEUgfSk7XHJcbiAgICAgICAgZ3JvdXBGb290ZXIgPSBuZXcgQXJyYXk8VG90YWxHcm91cD4odGhpcy5jb2x1bW5Db25maWcubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGF2ZUdyb3VwKSB7IHRoaXMuYWRkVG90YWxHcm91cChncm91cEZvb3Rlciwgcm93KTsgfVxyXG4gICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE8VD4+KGNoYW5nZURhdGEpO1xyXG4gICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoICYmIHRoaXMuaW5kZXhSb3dTZWxlY3QgJiYgIXRoaXMuc2VsZWN0ZWRPYmplY3QpIHtcclxuICAgICAgaWYgKHRoaXMuaW5kZXhSb3dTZWxlY3QgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCB0aGlzLmluZGV4Um93U2VsZWN0IDwgMCkge1xyXG4gICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0Um93KHsgZGF0YTogdGhpcy5yYXdEYXRhW3RoaXMuaW5kZXhSb3dTZWxlY3RdLCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFRvdGFsR3JvdXAocm93VG90YWw6IEFycmF5PFRvdGFsR3JvdXA+LCByb3c6IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAocm93VG90YWxbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XSA9IHsgc3VtOiAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShyb3csIGNvbHVtbikgYXMgbnVtYmVyKSwgY291bnQ6IDEgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLnN1bSArPSAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShyb3csIGNvbHVtbikgYXMgbnVtYmVyKTtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5jb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBhcmUoYTogVCwgYjogVCk6IG51bWJlciB7XHJcbiAgICBsZXQgd3M6IG51bWJlciA9IDA7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xyXG4gICAgICBpZiAod3MgPT09IDAgJiYgY29sdW1uLmdyb3VwYWJsZSkge1xyXG4gICAgICAgIGlmICgobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShhLCBjb2x1bW4pIGFzIG51bWJlcikgPCAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShiLCBjb2x1bW4pIGFzIG51bWJlcikpIHtcclxuICAgICAgICAgIHdzID0gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmICgobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShhLCBjb2x1bW4pIGFzIG51bWJlcikgPiAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShiLCBjb2x1bW4pIGFzIG51bWJlcikpIHtcclxuICAgICAgICAgIHdzID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHdzO1xyXG4gIH1cclxuXHJcbiAgZ2V0R3JvdXBEZXNjcmlwdGlvbihvYmo6IFQpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nID0gJyc7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLmdyb3VwYWJsZSkge1xyXG4gICAgICAgIHJlc3VsdCArPSAocmVzdWx0Lmxlbmd0aCA/ICcgLSAnIDogJycpICsgKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUob2JqLCBjb2x1bW4pKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgaXNHcm91cFRpdGxlKGluZGV4OiBudW1iZXIsIGl0ZW06IFJvd0RhdGE8VD4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfVElUTEU7XHJcbiAgfVxyXG5cclxuICBpc1JvdyhpbmRleDogbnVtYmVyLCBpdGVtOiBSb3dEYXRhPFQ+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLlJPVztcclxuICB9XHJcblxyXG4gIGlzR3JvdXBGb290ZXIoaW5kZXg6IG51bWJlciwgaXRlbTogUm93RGF0YTxUPik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9GT09URVI7XHJcbiAgfVxyXG5cclxuICBmb290ZXJEaXNwbGF5ZWRDb2x1bW5zKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5tYXAoKG5hbWU6IHN0cmluZykgPT4gJ2Zvb3Rlci0nICsgbmFtZSk7XHJcbiAgfVxyXG5cclxuICBnZXRHcm91cFZhbHVlKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBkYXRhOiBUb3RhbEdyb3VwKTogbnVtYmVyIHtcclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuU1VNKSB7IHJldHVybiBkYXRhLnN1bTsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5DT1VOVCkgeyByZXR1cm4gZGF0YS5jb3VudDsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5BVkVSQUdFKSB7IHJldHVybiAxLiAqIGRhdGEuc3VtIC8gZGF0YS5jb3VudDsgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKG9iajogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBUIHtcclxuICAgIHJldHVybiBuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSBhcyBUO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWVUb29sdGlwKG9iajogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuc2hvd1Rvb2xUaXApIHtcclxuICAgICAgcmV0dXJuIG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUob2JqLCBjb2x1bW4pIGFzIHN0cmluZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoVGV4dCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubGFzdFNlYXJjaCA9IHRleHQ7XHJcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHsgdGV4dCwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KHJvdzogUm93RGF0YTxUPiwgaXNVc2VyOiBib29sZWFuLCBjb2x1bW4/OiBDb2x1bW5Db25maWcpOiB2b2lkIHtcclxuICAgIGlmIChyb3cgPT09IHVuZGVmaW5lZCB8fCByb3cgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKChjb2x1bW4gPT09IHVuZGVmaW5lZCB8fCBjb2x1bW4gPT09IG51bGwpIHx8ICghIWNvbHVtbiAmJiBjb2x1bW4ubmFtZSAhPT0gJ2Jvb2tCdXR0b24nKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0gcm93LmRhdGEgYXMgVDtcclxuICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkT2JqZWN0LCBzY29wZTogaXNVc2VyID8gRXZlbnRTY29wZS5VU0VSIDogRXZlbnRTY29wZS5DT0RFX0NBTEwgfSk7XHJcbiAgICB9IGVsc2UgaWYgKCEhY29sdW1uICYmIGNvbHVtbi5uYW1lID09PSAnYm9va0J1dHRvbicpIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmplY3QgIT09IHJvdy5kYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHJvdy5kYXRhIGFzIFQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRPYmplY3QsIHNjb3BlOiBpc1VzZXIgPyBFdmVudFNjb3BlLlVTRVIgOiBFdmVudFNjb3BlLkNPREVfQ0FMTCB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJvb2tDbGlja2VkLmVtaXQodGhpcy5zZWxlY3RlZE9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbGV0IGlzU2Nyb2xsWTogYm9vbGVhbjtcclxuXHJcbiAgICBpZiAodGhpcy5zY3JvbGxZICE9PSBlbGVtZW50LnNjcm9sbFRvcCkge1xyXG4gICAgICBpc1Njcm9sbFkgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNjcm9sbFkgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgdGhpcy5zY3JvbGxYID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNjcm9sbFggIT09IGVsZW1lbnQuc2Nyb2xsTGVmdCkge1xyXG4gICAgICBpc1Njcm9sbFkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zY3JvbGxZID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgIHRoaXMuc2Nyb2xsWCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxUb3AgPCAxMDAwKSAmJiBpc1Njcm9sbFkpIHtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb05leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlICYmICF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQpIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5uZXh0UGFnZS5lbWl0KHtcclxuICAgICAgICBwYWdlOiB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5uZXh0UGFnZSgpLFxyXG4gICAgICAgIGJvZHk6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmdldEJvZHkodGhpcy5jb2x1bW5Db25maWcsIHRoaXMubGFzdFNlYXJjaClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlY2VpdmVQYWdlKGRhdGE6IFRbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnJhd0RhdGEpIHtcclxuICAgICAgdGhpcy5yYXdEYXRhID0gbmV3IEFycmF5PFQ+KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuY29uY2F0KGRhdGEpO1xyXG4gICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5yYXdEYXRhO1xyXG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNMYXN0UGFnZSA9IGRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkYmxDbGlja0NlbGwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdENlbGwuZW1pdCh0aGlzLnNlbGVjdGVkQ2VsbHMgYXMgQ2VsbDxUPik7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZENlbGwoZWxlbWVudDogUm93RGF0YTxUPiwgY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0Um93KGVsZW1lbnQsIHRydWUsIGNvbHVtbik7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZENlbGxzID0geyBjb2x1bW4sIHJvdzogZWxlbWVudCB9O1xyXG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRDZWxsKHJvdzogUm93RGF0YTxUPiwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZENlbGxzICE9IG51bGwpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENlbGxzLmNvbHVtbi5uYW1lID09PSBjb2x1bW4ubmFtZSAmJlxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0ZWRDZWxscy5yb3cgYXMgUm93RGF0YTxUPikuZGF0YSA9PT0gcm93LmRhdGEpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NUb0NlbGwocm93OiBULCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGNsYXNzVG9DZWxsOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIGlmICh0aGlzLmNvbmZpZ0NlbGxTdHlsZXMpIHtcclxuICAgICAgY29uc3QgZm91bmQ6IENvbmZpZ0NlbGxTdHlsZXM8VD4gPSB0aGlzLmNvbmZpZ0NlbGxTdHlsZXMuZmluZCgoYzogQ29uZmlnQ2VsbFN0eWxlczxUPikgPT4ge1xyXG4gICAgICAgIHJldHVybiBjLmNlbGxEYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgY29sdW1uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgIGNsYXNzVG9DZWxsLnB1c2goZm91bmQuY2xhc3NDZWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNvbHVtbi5jb2x1bW5TdHlsZSkge1xyXG4gICAgICBjbGFzc1RvQ2VsbC5wdXNoKGNvbHVtbi5jb2x1bW5TdHlsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NUb0NlbGw7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc1RvUm93KHJvdzogVCk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGNsYXNzVG9Sb3c6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgaWYgKHJvdyA9PT0gdGhpcy5zZWxlY3RlZE9iamVjdCAmJiAhdGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcclxuICAgICAgY2xhc3NUb1Jvdy5wdXNoKCcnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4pIHtcclxuICAgICAgY29uc3QgZm91bmQ6IENvbmZpZ1Jvd1N0eWxlczxUPiA9IHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbi5maW5kKChjOiBDb25maWdSb3dTdHlsZXM8VD4pID0+IHtcclxuICAgICAgICByZXR1cm4gYy5kYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgYy5jb2x1bW4pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgY2xhc3NUb1Jvdy5wdXNoKGZvdW5kLmNsYXNzUm93KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzVG9Sb3c7XHJcbiAgfVxyXG5cclxuICBvbkRyb3AoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJhZ2dlZCAmJiB0aGlzLmluZGV4Um93U3RhcnREcmFnID49IDApIHtcclxuICAgICAgY29uc3Qgcm93SW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xyXG4gICAgICBjb25zdCBhcnJheTogUm93RGF0YTxUPltdID0gdGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhO1xyXG4gICAgICBjb25zdCByYXdEYXRhOiBUW10gPSB0aGlzLnJhd0RhdGE7XHJcbiAgICAgIG1vdmVJdGVtSW5BcnJheShhcnJheSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xyXG4gICAgICBtb3ZlSXRlbUluQXJyYXkocmF3RGF0YSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xyXG4gICAgICB0aGlzLmRyb3AuZW1pdCh7IHZhbHVlOiBhcnJheVtyb3dJbmRleF0uZGF0YSBhcyBULCBvcmRlcjogcm93SW5kZXggfSk7XHJcbiAgICAgIHRoaXMucmF3RGF0YSA9IHJhd0RhdGE7XHJcbiAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoYXJyYXkpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRhYmxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICBsZXQgY3VycmVudEluZGV4OiBudW1iZXIgPSB0aGlzLmRhdGEuZGF0YS5maW5kSW5kZXgoKHJvdzogUm93RGF0YTxUPikgPT4gcm93LmRhdGEgPT09IHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uOiBudW1iZXIgPSAtMTA7XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCsrO1xyXG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLmZvckVhY2goKHJvdzogUm93RGF0YTxUPiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEwICYmIGluZGV4ID4gY3VycmVudEluZGV4ICYmIHJvdy5yb3dUeXBlID09PSBSb3dUeXBlLlJPVykge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBpbmRleDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbENvdW50LS07XHJcbiAgICAgICAgY3VycmVudEluZGV4ID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoIC0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCkuZm9yRWFjaCgocm93OiBSb3dEYXRhPFQ+LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMTAgJiYgaW5kZXggPiBjdXJyZW50SW5kZXggJiYgcm93LnJvd1R5cGUgPT09IFJvd1R5cGUuUk9XKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IGluZGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLnJldmVyc2UoKTtcclxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uICE9PSAtMTApIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IHRoaXMuZGF0YS5kYXRhLmxlbmd0aCAtIG5ld1NlbGVjdGlvbiAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gIT09IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMuZGF0YS5kYXRhW25ld1NlbGVjdGlvbl0sIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNjcm9sbENvdW50KSA+PSAyKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCA9IDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgZWwgZXZlbnRvIGN1YW5kbyBzZSBkYSBjbGljayBhbCBib3RvbiBBZGRSb3dcclxuICAgKi9cclxuICBvbkFkZFJvdygpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkUm93LmVtaXQoKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRIZWFkZXJTdWJ0aXRsZSgpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCB4OiBzdHJpbmdbXSA9IHRoaXMuY29sdW1uQ29uZmlnLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi52aXNpYmxlICYmIGNvbHVtbi5zdWJ0aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuICdzdWJ0aXRsZScgKyBpbmRleDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSkuZmlsdGVyKChkYXRhOiBzdHJpbmcpID0+IGRhdGEgIT0gbnVsbCk7XHJcbiAgICByZXR1cm4geDtcclxuICB9XHJcblxyXG4gIGdldENvbHVtbnNXaXRoVGl0bGUoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1uQ29uZmlnLmZpbHRlcigoY29sdW1uOiBDb2x1bW5Db25maWcpID0+XHJcbiAgICAgIGNvbHVtbi52aXNpYmxlICYmIGNvbHVtbi50aXRsZSAhPT0gdW5kZWZpbmVkXHJcbiAgICApLm1hcCgoY29sOiBDb2x1bW5Db25maWcpID0+IGNvbC5uYW1lKTtcclxuICB9XHJcblxyXG4gIGRyYWdnZXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmlzRHJhZ2dlZCAmJiB0aGlzLmluZGV4Um93U3RhcnREcmFnID49IDApIHtcclxuICAgICAgY29uc3Qgcm93SW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xyXG4gICAgICBpZiAocm93SW5kZXggIT09IHRoaXMubGFzdEluZGV4Um93RHJhZykge1xyXG4gICAgICAgIHRoaXMubGFzdEluZGV4Um93RHJhZyA9IHJvd0luZGV4O1xyXG4gICAgICAgIC8vIFRoaXMgY2FuIGhhdmUgYSBtZW1vcnkgcHJvYmxlbSB3aXRoIGJpZyBkYXRhXHJcbiAgICAgICAgY29uc3QgYXJyYXk6IFJvd0RhdGE8VD5bXSA9IFsuLi50aGlzLmRhdGFCZWZvcmVEcmFnLmRhdGFdO1xyXG4gICAgICAgIG1vdmVJdGVtSW5BcnJheShhcnJheSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoYXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnREcmFnKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmluZGV4Um93U3RhcnREcmFnID0gdGhpcy5nZXRSb3dJbmRleChldmVudC5wYWdlWSk7XHJcbiAgICB0aGlzLmxhc3RJbmRleFJvd0RyYWcgPSB0aGlzLmluZGV4Um93U3RhcnREcmFnO1xyXG4gICAgdGhpcy5kYXRhQmVmb3JlRHJhZyA9IHRoaXMuZGF0YTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Um93SW5kZXgocGFnZVk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgb2Zmc2V0VG9wOiBudW1iZXIgPSAwO1xyXG4gICAgbGV0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lclRhYmxlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoKGNvbnRhaW5lciAhPT0gbnVsbCkgJiYgKG9mZnNldFRvcCA9PT0gMCkpIHtcclxuICAgICAgb2Zmc2V0VG9wID0gY29udGFpbmVyLm9mZnNldFRvcDtcclxuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBsZXQgcm93SW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgY29uc3Qgcm93czogSFRNTENvbGxlY3Rpb24gPSB0aGlzLm1hdFRhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuO1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgcm93OiBIVE1MRWxlbWVudCA9IChyb3dzW2ldIGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgaWYgKHBhZ2VZIC0gb2Zmc2V0VG9wID4gcm93Lm9mZnNldFRvcCAtIHRoaXMuY29udGFpbmVyVGFibGUubmF0aXZlRWxlbWVudC5zY3JvbGxUb3ApIHtcclxuICAgICAgICByb3dJbmRleCA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChyb3dJbmRleCA8IDApIHsgcm93SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gcm93SW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sdW1uVHlwZSgpOiB0eXBlb2YgQ29sdW1uVHlwZSB7XHJcbiAgICByZXR1cm4gQ29sdW1uVHlwZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==