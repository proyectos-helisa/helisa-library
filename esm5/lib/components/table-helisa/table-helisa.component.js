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
            if (!data.table || data.table) {
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
        if ((column === undefined || column === null)) {
            this.selectedObject = (/** @type {?} */ (row.data));
            this.select.emit(this.selectedObject);
            this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
        }
        else if (!!column && column.name !== 'bookButton') {
            this.selectedObject = (/** @type {?} */ (row.data));
            this.select.emit(this.selectedObject);
            this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
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
                    template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\n<div class=\"div-table-helisa\">\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\n\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\n          <ng-container *ngIf=\"column.title != undefined\">\n            <div *ngIf=\"!column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\n                {{column.title}} </th>\n            </div>\n            <div *ngIf=\"column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\n            </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton'\"> \n                  <th mat-header-cell *matHeaderCellDef ></th>\n                  <td mat-cell *matCellDef=\"let element;\" (click)=\"onBookClicked(selectedObject)\">\n                    <button mat-icon-button *ngIf=\"element.data === selectedObject\">\n                      <i class=\"material-icons-outlined\">description</i>\n                    </button>\n                  </td>\n          </ng-container>\n\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{ getValue(element.data, column) }}</a>\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\n        </ng-container>\n\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\n            {{column.subtitle}}</th>\n        </ng-container>\n      </ng-container>\n \n      <ng-container matColumnDef=\"groupHeader\">\n        <td mat-cell *matCellDef=\"let group\">\n          <strong>{{ getGroupDescription(group.data) }}</strong>\n        </td>\n      </ng-container>\n\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\n      </ng-container>\n\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\n          [ngClass]=\"getClassToRow(row.data)\" [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"!isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" \n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\n        </tr>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\n    </table>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcxRSxPQUFPLEVBR0wsNkJBQTZCLEVBRTdCLGdCQUFnQixFQUtoQixVQUFVLEVBSVYsZUFBZSxFQUVmLFNBQVMsRUFDVCxVQUFVLEVBRVgsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUd0RSw2QkFHQzs7O0lBRkMsdUJBQWE7O0lBQ2IsMEJBQWlCOzs7O0lBSWpCLGNBQVcsRUFBRSxlQUFZLEVBQUUsTUFBRzs7Ozs7Ozs7QUFLaEM7SUEwRUUsOEJBQW9CLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQS9EdkQscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBQ2hDLDhCQUF5QixHQUFhLEVBQUUsQ0FBQztRQUN6QyxpQ0FBNEIsR0FBYSxFQUFFLENBQUM7UUFDNUMsK0JBQTBCLEdBQWEsRUFBRSxDQUFDO1FBSTFDLFNBQUksR0FBb0IsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUV0QyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUNoQyxnQkFBVyxHQUFZLEtBQUss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LGdEQUFzQzs7Ozs7SUFDdEMsOENBQXNEOzs7OztJQUN0RCwyQ0FBbUM7Ozs7O0lBQ25DLHVDQUE0Qjs7Ozs7SUFDNUIsdUNBQTRCOztJQUU1Qix1Q0FBcUM7O0lBQ3JDLHdDQUEyQzs7SUFDM0MsK0NBQXVFOztJQUN2RSw4Q0FBd0Q7O0lBRXhELG9DQUE0RTs7SUFDNUUscUNBQTZFOztJQUM3RSxzQ0FBOEU7Ozs7O0lBSzlFLHNDQUEwRDs7SUFDMUQsMENBQTBFOztJQUMxRSw0Q0FBNEY7O0lBQzVGLHdDQUFvRzs7SUFDcEcseUNBQW1DOztJQUNuQywrQ0FBMEM7O0lBQzFDLHFDQUF1Qjs7SUFDdkIsZ0RBQXNEOztJQUN0RCx5REFBOEQ7O0lBQzlELDZDQUFnQzs7SUFDaEMsb0NBQWtGOztJQUNsRix5Q0FBb0M7O0lBQ3BDLDRDQUFzRTs7SUFDdEUsc0NBQWdFOztJQUNoRSwyQ0FBK0Q7O0lBQy9ELDZDQUF3Qzs7SUFDeEMsMkNBQXFDOztJQUNyQywwQ0FBNEI7O0lBQzVCLDBDQUE0Qjs7Ozs7SUFPNUIseUNBQWlDOzs7OztJQUtqQyx5Q0FBaUM7Ozs7O0lBR3JCLDRDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U29ydCwgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90eXBpbmdzL3NvcnQnO1xuXG5pbXBvcnQge1xuICBBZGRSb3dCdXR0b24sXG4gIENlbGwsXG4gIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLFxuICBDb2x1bW5Db25maWcsXG4gIENvbHVtbkNvbmZpZ1V0aWwsXG4gIENvbmZpZ0NlbGxTdHlsZXMsXG4gIENvbmZpZ1Jvd1N0eWxlcyxcbiAgRHJvcEVsZW1lbnQsXG4gIEV2ZW50Q29sdW1uLFxuICBFdmVudFNjb3BlLFxuICBFdmVudFNlYXJjaCxcbiAgUmVxdWVzdFRhYmxlSGVsaXNhLFxuICBTZWxlY3RPYmplY3QsXG4gIFRhYmxlSGVsaXNhVHlwZSxcbiAgVG90YWxHcm91cCxcbiAgVG90YWxUeXBlLFxuICBDb2x1bW5UeXBlLFxuICBUb3RhbFRhYmxlSGVsaXNhXG59IGZyb20gJy4vdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUYWJsZUhlbGlzYVNlcnZpY2UsIFRhYmxlSGVsaXNhU2VydmljZUluZm8gfSBmcm9tICcuL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtaGVsaXNhLWNvbm5lY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm93RGF0YTxUPiB7XG4gIGRhdGE6IHt9IHwgVDtcbiAgcm93VHlwZTogUm93VHlwZTtcbn1cblxuZW51bSBSb3dUeXBlIHtcbiAgR1JPVVBfVElUTEUsIEdST1VQX0ZPT1RFUiwgUk9XXG59XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIHByaXZhdGUgdGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50OiBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD47XG4gIHRvdGFsRGF0YTogQXJyYXk8bnVtYmVyPjtcbiAgcmF3RGF0YTogQXJyYXk8VD47XG4gIGRhdGE6IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPFQ+PjtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZTogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZTogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXI6IHN0cmluZ1tdID0gW107XG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcbiAgc2VsZWN0ZWRPYmplY3Q6IFQ7XG4gIGxhc3RTZWFyY2g6IHN0cmluZztcbiAgdHlwZTogVGFibGVIZWxpc2FUeXBlID0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xuICBpbmRleFJvd1NlbGVjdDogbnVtYmVyO1xuICBwcml2YXRlIHNjcm9sbENvdW50OiBudW1iZXIgPSAwO1xuICBoYXNTdWJ0aXRsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGluZGV4Um93U3RhcnREcmFnOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBsYXN0SW5kZXhSb3dEcmFnOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBkYXRhQmVmb3JlRHJhZzogeyBkYXRhOiBSb3dEYXRhPFQ+W10gfSA9IG51bGw7XG4gIHByaXZhdGUgZGF0YVNvdXJjZSQ6IEFycmF5PFQ+ID0gW107XG4gIHByaXZhdGUgc2Nyb2xsWDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBzY3JvbGxZOiBudW1iZXIgPSAwO1xuXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgbWF0U29ydDogTWF0U29ydDtcbiAgQFZpZXdDaGlsZChNYXRUYWJsZSkgbWF0VGFibGU6IE1hdFRhYmxlPFQ+O1xuICBAVmlld0NoaWxkKE1hdFRhYmxlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgbWF0VGFibGVFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjb250YWluZXJUYWJsZScpIGNvbnRhaW5lclRhYmxlOiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcbiAgQE91dHB1dCgpIHRvdGFsOiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+KCk7XG5cbiAgLyoqXG4gICAqIERlcHJlY2FkbywgY2FtYmlhciBwb3IgZWxlY3RPYmplY3RcbiAgICovXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdENlbGw6IEV2ZW50RW1pdHRlcjxDZWxsPFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbDxUPj4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdE9iamVjdDogRXZlbnRFbWl0dGVyPFNlbGVjdE9iamVjdDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdE9iamVjdDxUPj4oKTtcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8UmVxdWVzdFRhYmxlSGVsaXNhPFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmVxdWVzdFRhYmxlSGVsaXNhPFQ+PigpO1xuICBASW5wdXQoKSBzaG93VGl0bGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc0NlbGxTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgY29uZmlnQ2VsbFN0eWxlczogQXJyYXk8Q29uZmlnQ2VsbFN0eWxlczxUPj47XG4gIEBJbnB1dCgpIGNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW46IEFycmF5PENvbmZpZ1Jvd1N0eWxlczxUPj47XG4gIEBJbnB1dCgpIHNlbGVjdGVkQ2VsbHM6IENlbGw8VD47XG4gIEBPdXRwdXQoKSBkcm9wOiBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRWxlbWVudDxUPj4oKTtcbiAgQElucHV0KCkgaXNEcmFnZ2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFkZFJvd0J1dHRvbjogQWRkUm93QnV0dG9uID0geyBzaG93QnV0dG9uOiBmYWxzZSwgdGV4dDogJycgfTtcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgYm9va0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQElucHV0KCkgYWRkQm9va0J1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XG4gIHNob3dGb290ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG9jdWx0YXJsYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBzaG93RGVsYXk6IG51bWJlciA9IDUwMDtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8VD4pIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGFibGVTZXJ2aWNlLm5leHRQYWdlUmV0dXJuLnN1YnNjcmliZShcbiAgICAgIChkYXRhOiBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4pID0+IHtcbiAgICAgICAgaWYgKCFkYXRhLnRhYmxlIHx8IGRhdGEudGFibGUpIHtcbiAgICAgICAgICB0aGlzLnJlY2VpdmVQYWdlKGRhdGEub2JqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy50YWJsZVNlcnZpY2UudG90YWxSZXR1cm4uc3Vic2NyaWJlKChpbmZvOiBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+KSA9PiB7XG4gICAgICBpZiAoaW5mbykge1xuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAoY29sdW1uID09PSBpbmZvLm9iai5jb2x1bW4pIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxEYXRhW2lkeF0gPSB0aGlzLmdldEdyb3VwVmFsdWUoY29sdW1uLCB7IHN1bTogaW5mby5vYmoudmFsdWUsIGNvdW50OiB0aGlzLmNvdW50IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5tYXRTb3J0LnNvcnRDaGFuZ2Uuc3Vic2NyaWJlKFxuICAgICAgKGV2ZW50OiBTb3J0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbHVtbjogQ29sdW1uQ29uZmlnID0gdGhpcy5jb2x1bW5Db25maWcuZmluZCgoYzogQ29sdW1uQ29uZmlnKSA9PiBjLm5hbWUgPT09IGV2ZW50LmFjdGl2ZSk7XG4gICAgICAgIGNvbHVtbi5zb3J0RGlyZWN0aW9uID0gZXZlbnQuZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLnNvcnQuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5TT1JUIH0pO1xuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLnRhYmxlU2VydmljZS5lbWl0VmlzaWJsZUJ1dHRvbi5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYWRkUm93QnV0dG9uLnNob3dCdXR0b24gPSBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5tYXRUYWJsZS5yZW5kZXJSb3dzKCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGlzUmVtb3RlKHc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnR5cGUgPSB3ID8gVGFibGVIZWxpc2FUeXBlLlJFTU9URSA6IFRhYmxlSGVsaXNhVHlwZS5MT0NBTDtcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCA9IG5ldyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD4oKTtcbiAgICBpZiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFKSB7XG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSsrO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2x1bW5Db25maWd1cmF0aW9uKGNvbHVtbkNvbmZpZ3VyYXRpb246IEFycmF5PENvbHVtbkNvbmZpZz4pIHtcbiAgICB0aGlzLmhhc1N1YnRpdGxlID0gZmFsc2U7XG4gICAgdGhpcy5jb2x1bW5Db25maWcgPSBjb2x1bW5Db25maWd1cmF0aW9uO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCk7XG5cbiAgICBpZiAoY29sdW1uQ29uZmlndXJhdGlvbikge1xuICAgICAgaWYgKHRoaXMuYWRkQm9va0J1dHRvbikge1xuICAgICAgICBjb25zdCBjb2x1bW5Db3VudDogbnVtYmVyID0gY29sdW1uQ29uZmlndXJhdGlvbi5sZW5ndGg7XG4gICAgICAgIGxldCBjb3VudFN1YnRpdGxlOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgc2hvd0Jvb2tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgY29sdW1uQ29uZmlndXJhdGlvbi5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuICAgICAgICAgIGlmICghIWNvbHVtbi5zdWJ0aXRsZSkge1xuICAgICAgICAgICAgY291bnRTdWJ0aXRsZSA9IGNvdW50U3VidGl0bGUgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoKCFzaG93Qm9va0J1dHRvbikgJiYgKGNvbHVtbi5uYW1lID09PSAnYm9va0J1dHRvbicpKSB7XG4gICAgICAgICAgICBzaG93Qm9va0J1dHRvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc3VidGl0bGVUZW1wOiBib29sZWFuID0gY29sdW1uQ291bnQgPT09IGNvdW50U3VidGl0bGU7XG4gICAgICAgIGlmICghc2hvd0Jvb2tCdXR0b24pIHtcbiAgICAgICAgICBjb2x1bW5Db25maWd1cmF0aW9uLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJ2Jvb2tCdXR0b24nLFxuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgc3VidGl0bGU6IHN1YnRpdGxlVGVtcCA/ICcnIDogdW5kZWZpbmVkICxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb2x1bW5Db25maWd1cmF0aW9uLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4udmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5wdXNoKGNvbHVtbi5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaGFzU3VidGl0bGUpIHtcbiAgICAgICAgICB0aGlzLmhhc1N1YnRpdGxlID0gY29sdW1uLnN1YnRpdGxlICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMucmF3RGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZS5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLmxlbmd0aCk7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGUubGVuZ3RoKTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLmxlbmd0aCk7XG4gICAgdGhpcy5nZXRDb2x1bW5zV2l0aFRpdGxlKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZS5wdXNoKGNvbCkpO1xuICAgIHRoaXMuZ2V0SGVhZGVyU3VidGl0bGUoKS5mb3JFYWNoKChjb2w6IHN0cmluZykgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLnB1c2goY29sKSk7XG4gICAgdGhpcy5mb290ZXJEaXNwbGF5ZWRDb2x1bW5zKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIucHVzaChjb2wpKTtcbiAgfVxuXG5cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBBcnJheTxUPikge1xuICAgIHRoaXMuZGF0YVNvdXJjZSQgPSBkYXRhU291cmNlO1xuICAgIHRoaXMucmF3RGF0YSA9IGRhdGFTb3VyY2U7XG4gICAgaWYgKHRoaXMucmF3RGF0YSkgeyB0aGlzLnByZXBhcmVEYXRhU291cmNlKCk7IH1cbiAgfVxuXG4gIGdldCBkYXRhU291cmNlKCk6IEFycmF5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlJDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4Um93KGlkUm93U2VsZWN0ZWQ6IG51bWJlcikge1xuICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSBpZFJvd1NlbGVjdGVkO1xuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCkge1xuICAgICAgaWYgKChpZFJvd1NlbGVjdGVkID49IHRoaXMucmF3RGF0YS5sZW5ndGggfHwgaWRSb3dTZWxlY3RlZCA8IDApKSB7XG4gICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVEYXRhU291cmNlKCk6IHZvaWQge1xuICAgIGNvbnN0IGNoYW5nZURhdGE6IEFycmF5PFJvd0RhdGE8VD4+ID0gQXJyYXk8Um93RGF0YTxUPj4oKTtcbiAgICBsZXQgaGF2ZUdyb3VwOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGdyb3VwRm9vdGVyOiBBcnJheTxUb3RhbEdyb3VwPjtcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCAmJiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuTE9DQUwgfHwgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSA8PSAxKSkge1xuICAgICAgICB0aGlzLnRvdGFsRGF0YSA9IG5ldyBBcnJheTxudW1iZXI+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuc2hvd0Zvb3RlciA9IHRydWU7XG4gICAgICAgIHRoaXMudG90YWwuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5UT1RBTCB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvd1NlYXJjaCA9IHRoaXMuc2hvd1NlYXJjaCB8fCBjb2x1bW4uc2VhcmNoYWJsZTtcbiAgICAgIGhhdmVHcm91cCA9IGhhdmVHcm91cCB8fCBjb2x1bW4uZ3JvdXBhYmxlO1xuICAgIH0pO1xuICAgIGlmIChoYXZlR3JvdXApIHtcbiAgICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5zb3J0KChhOiBULCBiOiBUKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IDA7XG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jb21wYXJlKGEsIGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5yYXdEYXRhLmZvckVhY2goKHJvdzogVCkgPT4ge1xuICAgICAgaWYgKGhhdmVHcm91cCAmJiAoY2hhbmdlRGF0YS5sZW5ndGggPT09IDAgfHwgdGhpcy5jb21wYXJlKGNoYW5nZURhdGFbY2hhbmdlRGF0YS5sZW5ndGggLSAxXS5kYXRhIGFzIFQsIHJvdykgIT09IDApKSB7XG4gICAgICAgIGlmIChncm91cEZvb3Rlcikge1xuICAgICAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IGdyb3VwRm9vdGVyLCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX0ZPT1RFUiB9KTtcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuR1JPVVBfVElUTEUgfSk7XG4gICAgICAgIGdyb3VwRm9vdGVyID0gbmV3IEFycmF5PFRvdGFsR3JvdXA+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICBpZiAoaGF2ZUdyb3VwKSB7IHRoaXMuYWRkVG90YWxHcm91cChncm91cEZvb3Rlciwgcm93KTsgfVxuICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE8VD4+KGNoYW5nZURhdGEpO1xuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCAmJiB0aGlzLmluZGV4Um93U2VsZWN0ICYmICF0aGlzLnNlbGVjdGVkT2JqZWN0KSB7XG4gICAgICBpZiAodGhpcy5pbmRleFJvd1NlbGVjdCA+PSB0aGlzLnJhd0RhdGEubGVuZ3RoIHx8IHRoaXMuaW5kZXhSb3dTZWxlY3QgPCAwKSB7XG4gICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFRvdGFsR3JvdXAocm93VG90YWw6IEFycmF5PFRvdGFsR3JvdXA+LCByb3c6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocm93VG90YWxbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0gPSB7IHN1bTogKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUocm93LCBjb2x1bW4pIGFzIG51bWJlciksIGNvdW50OiAxIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLnN1bSArPSAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShyb3csIGNvbHVtbikgYXMgbnVtYmVyKTtcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0uY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXIge1xuICAgIGxldCB3czogbnVtYmVyID0gMDtcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuICAgICAgaWYgKHdzID09PSAwICYmIGNvbHVtbi5ncm91cGFibGUpIHtcbiAgICAgICAgaWYgKChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKGEsIGNvbHVtbikgYXMgbnVtYmVyKSA8IChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKGIsIGNvbHVtbikgYXMgbnVtYmVyKSkge1xuICAgICAgICAgIHdzID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYSwgY29sdW1uKSBhcyBudW1iZXIpID4gKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYiwgY29sdW1uKSBhcyBudW1iZXIpKSB7XG4gICAgICAgICAgd3MgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHdzO1xuICB9XG5cbiAgZ2V0R3JvdXBEZXNjcmlwdGlvbihvYmo6IFQpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9ICcnO1xuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICBpZiAoY29sdW1uLmdyb3VwYWJsZSkge1xuICAgICAgICByZXN1bHQgKz0gKHJlc3VsdC5sZW5ndGggPyAnIC0gJyA6ICcnKSArIChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlzR3JvdXBUaXRsZShpbmRleDogbnVtYmVyLCBpdGVtOiBSb3dEYXRhPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9USVRMRTtcbiAgfVxuXG4gIGlzUm93KGluZGV4OiBudW1iZXIsIGl0ZW06IFJvd0RhdGE8VD4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLlJPVztcbiAgfVxuXG4gIGlzR3JvdXBGb290ZXIoaW5kZXg6IG51bWJlciwgaXRlbTogUm93RGF0YTxUPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfRk9PVEVSO1xuICB9XG5cbiAgZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLm1hcCgobmFtZTogc3RyaW5nKSA9PiAnZm9vdGVyLScgKyBuYW1lKTtcbiAgfVxuXG4gIGdldEdyb3VwVmFsdWUoY29sdW1uOiBDb2x1bW5Db25maWcsIGRhdGE6IFRvdGFsR3JvdXApOiBudW1iZXIge1xuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuU1VNKSB7IHJldHVybiBkYXRhLnN1bTsgfVxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuQ09VTlQpIHsgcmV0dXJuIGRhdGEuY291bnQ7IH1cbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLkFWRVJBR0UpIHsgcmV0dXJuIDEuICogZGF0YS5zdW0gLyBkYXRhLmNvdW50OyB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFZhbHVlKG9iajogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBUIHtcbiAgICByZXR1cm4gbmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShvYmosIGNvbHVtbikgYXMgVDtcbiAgfVxuXG4gIGdldFZhbHVlVG9vbHRpcChvYmo6IFQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zaG93VG9vbFRpcCkge1xuICAgICAgcmV0dXJuIG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUob2JqLCBjb2x1bW4pIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoVGV4dCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxhc3RTZWFyY2ggPSB0ZXh0O1xuICAgIHRoaXMuc2VhcmNoLmVtaXQoeyB0ZXh0LCBjb2x1bW5Db25maWd1cmF0aW9uczogdGhpcy5jb2x1bW5Db25maWcgfSk7XG4gIH1cblxuICBzZWxlY3RSb3cocm93OiBSb3dEYXRhPFQ+LCBpc1VzZXI6IGJvb2xlYW4sIGNvbHVtbj86IENvbHVtbkNvbmZpZyk6IHZvaWQge1xuICAgIGlmICgoY29sdW1uID09PSB1bmRlZmluZWQgfHwgY29sdW1uID09PSBudWxsKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHJvdy5kYXRhIGFzIFQ7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xuICAgICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkT2JqZWN0LCBzY29wZTogaXNVc2VyID8gRXZlbnRTY29wZS5VU0VSIDogRXZlbnRTY29wZS5DT0RFX0NBTEwgfSk7XG4gICAgfSBlbHNlIGlmICghIWNvbHVtbiAmJiBjb2x1bW4ubmFtZSAhPT0gJ2Jvb2tCdXR0b24nKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0gcm93LmRhdGEgYXMgVDtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5zZWxlY3RlZE9iamVjdCk7XG4gICAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRPYmplY3QsIHNjb3BlOiBpc1VzZXIgPyBFdmVudFNjb3BlLlVTRVIgOiBFdmVudFNjb3BlLkNPREVfQ0FMTCB9KTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBsZXQgaXNTY3JvbGxZOiBib29sZWFuO1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsWSAhPT0gZWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgIGlzU2Nyb2xsWSA9IHRydWU7XG4gICAgICB0aGlzLnNjcm9sbFkgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHRoaXMuc2Nyb2xsWCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxYICE9PSBlbGVtZW50LnNjcm9sbExlZnQpIHtcbiAgICAgIGlzU2Nyb2xsWSA9IGZhbHNlO1xuICAgICAgdGhpcy5zY3JvbGxZID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB0aGlzLnNjcm9sbFggPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgaWYgKChlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wIDwgMTAwMCkgJiYgaXNTY3JvbGxZKSB7XG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgJiYgIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCkge1xuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7XG4gICAgICAgIHBhZ2U6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50Lm5leHRQYWdlKCksXG4gICAgICAgIGJvZHk6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmdldEJvZHkodGhpcy5jb2x1bW5Db25maWcsIHRoaXMubGFzdFNlYXJjaClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogVFtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJhd0RhdGEpIHtcbiAgICAgIHRoaXMucmF3RGF0YSA9IG5ldyBBcnJheTxUPigpO1xuICAgIH1cbiAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuY29uY2F0KGRhdGEpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XG4gIH1cblxuICBkYmxDbGlja0NlbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzIGFzIENlbGw8VD4pO1xuICB9XG5cbiAgc2VsZWN0ZWRDZWxsKGVsZW1lbnQ6IFJvd0RhdGE8VD4sIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RSb3coZWxlbWVudCwgdHJ1ZSwgY29sdW1uKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRDZWxscyA9IHsgY29sdW1uLCByb3c6IGVsZW1lbnQgfTtcbiAgICB0aGlzLnNlbGVjdENlbGwuZW1pdCh0aGlzLnNlbGVjdGVkQ2VsbHMpO1xuICB9XG5cbiAgaXNTZWxlY3RlZENlbGwocm93OiBSb3dEYXRhPFQ+LCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDZWxscyAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2VsbHMuY29sdW1uLm5hbWUgPT09IGNvbHVtbi5uYW1lICYmXG4gICAgICAgICAgKHRoaXMuc2VsZWN0ZWRDZWxscy5yb3cgYXMgUm93RGF0YTxUPikuZGF0YSA9PT0gcm93LmRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRDbGFzc1RvQ2VsbChyb3c6IFQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNsYXNzVG9DZWxsOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBpZiAodGhpcy5jb25maWdDZWxsU3R5bGVzKSB7XG4gICAgICBjb25zdCBmb3VuZDogQ29uZmlnQ2VsbFN0eWxlczxUPiA9IHRoaXMuY29uZmlnQ2VsbFN0eWxlcy5maW5kKChjOiBDb25maWdDZWxsU3R5bGVzPFQ+KSA9PiB7XG4gICAgICAgIHJldHVybiBjLmNlbGxEYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgY29sdW1uKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGNsYXNzVG9DZWxsLnB1c2goZm91bmQuY2xhc3NDZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbHVtbi5jb2x1bW5TdHlsZSkge1xuICAgICAgY2xhc3NUb0NlbGwucHVzaChjb2x1bW4uY29sdW1uU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NUb0NlbGw7XG4gIH1cblxuICBnZXRDbGFzc1RvUm93KHJvdzogVCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjbGFzc1RvUm93OiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBpZiAocm93ID09PSB0aGlzLnNlbGVjdGVkT2JqZWN0ICYmICF0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgY2xhc3NUb1Jvdy5wdXNoKCcnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbikge1xuICAgICAgY29uc3QgZm91bmQ6IENvbmZpZ1Jvd1N0eWxlczxUPiA9IHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbi5maW5kKChjOiBDb25maWdSb3dTdHlsZXM8VD4pID0+IHtcbiAgICAgICAgcmV0dXJuIGMuZGF0YSA9PT0gdGhpcy5nZXRWYWx1ZShyb3csIGMuY29sdW1uKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGNsYXNzVG9Sb3cucHVzaChmb3VuZC5jbGFzc1Jvdyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc1RvUm93O1xuICB9XG5cbiAgb25Ecm9wKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEcmFnZ2VkICYmIHRoaXMuaW5kZXhSb3dTdGFydERyYWcgPj0gMCkge1xuICAgICAgY29uc3Qgcm93SW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xuICAgICAgY29uc3QgYXJyYXk6IFJvd0RhdGE8VD5bXSA9IHRoaXMuZGF0YUJlZm9yZURyYWcuZGF0YTtcbiAgICAgIGNvbnN0IHJhd0RhdGE6IFRbXSA9IHRoaXMucmF3RGF0YTtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShhcnJheSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KHJhd0RhdGEsIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcbiAgICAgIHRoaXMuZHJvcC5lbWl0KHsgdmFsdWU6IGFycmF5W3Jvd0luZGV4XS5kYXRhIGFzIFQsIG9yZGVyOiByb3dJbmRleCB9KTtcbiAgICAgIHRoaXMucmF3RGF0YSA9IHJhd0RhdGE7XG4gICAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGFycmF5KTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHRhYmxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgIGxldCBjdXJyZW50SW5kZXg6IG51bWJlciA9IHRoaXMuZGF0YS5kYXRhLmZpbmRJbmRleCgocm93OiBSb3dEYXRhPFQ+KSA9PiByb3cuZGF0YSA9PT0gdGhpcy5zZWxlY3RlZE9iamVjdCk7XG4gICAgICBsZXQgbmV3U2VsZWN0aW9uOiBudW1iZXIgPSAtMTA7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICB0aGlzLnNjcm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLmZvckVhY2goKHJvdzogUm93RGF0YTxUPiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xMCAmJiBpbmRleCA+IGN1cnJlbnRJbmRleCAmJiByb3cucm93VHlwZSA9PT0gUm93VHlwZS5ST1cpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IGluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudC0tO1xuICAgICAgICBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBjdXJyZW50SW5kZXggLSAxO1xuICAgICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCkuZm9yRWFjaCgocm93OiBSb3dEYXRhPFQ+LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEwICYmIGluZGV4ID4gY3VycmVudEluZGV4ICYmIHJvdy5yb3dUeXBlID09PSBSb3dUeXBlLlJPVykge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gaW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEucmV2ZXJzZSgpO1xuICAgICAgICBpZiAobmV3U2VsZWN0aW9uICE9PSAtMTApIHtcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBuZXdTZWxlY3Rpb24gLSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobmV3U2VsZWN0aW9uICE9PSAtMTApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RSb3codGhpcy5kYXRhLmRhdGFbbmV3U2VsZWN0aW9uXSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoTWF0aC5hYnModGhpcy5zY3JvbGxDb3VudCkgPj0gMikge1xuICAgICAgICB0aGlzLnNjcm9sbENvdW50ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRlIGVsIGV2ZW50byBjdWFuZG8gc2UgZGEgY2xpY2sgYWwgYm90b24gQWRkUm93XG4gICAqL1xuICBvbkFkZFJvdygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZFJvdy5lbWl0KCk7XG4gIH1cblxuICBvbkJvb2tDbGlja2VkKHNlbGVjdGVkT2JqZWN0OiBUKTogdm9pZCB7XG4gICAgdGhpcy5ib29rQ2xpY2tlZC5lbWl0KHNlbGVjdGVkT2JqZWN0KTtcbiAgfVxuXG4gIGdldEhlYWRlclN1YnRpdGxlKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB4OiBzdHJpbmdbXSA9IHRoaXMuY29sdW1uQ29uZmlnLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChjb2x1bW4udmlzaWJsZSAmJiBjb2x1bW4uc3VidGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gJ3N1YnRpdGxlJyArIGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSkuZmlsdGVyKChkYXRhOiBzdHJpbmcpID0+IGRhdGEgIT0gbnVsbCk7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICBnZXRDb2x1bW5zV2l0aFRpdGxlKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5Db25maWcuZmlsdGVyKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT5cbiAgICAgIGNvbHVtbi52aXNpYmxlICYmIGNvbHVtbi50aXRsZSAhPT0gdW5kZWZpbmVkXG4gICAgKS5tYXAoKGNvbDogQ29sdW1uQ29uZmlnKSA9PiBjb2wubmFtZSk7XG4gIH1cblxuICBkcmFnZ2VyKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNEcmFnZ2VkICYmIHRoaXMuaW5kZXhSb3dTdGFydERyYWcgPj0gMCkge1xuICAgICAgY29uc3Qgcm93SW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xuICAgICAgaWYgKHJvd0luZGV4ICE9PSB0aGlzLmxhc3RJbmRleFJvd0RyYWcpIHtcbiAgICAgICAgdGhpcy5sYXN0SW5kZXhSb3dEcmFnID0gcm93SW5kZXg7XG4gICAgICAgIC8vIFRoaXMgY2FuIGhhdmUgYSBtZW1vcnkgcHJvYmxlbSB3aXRoIGJpZyBkYXRhXG4gICAgICAgIGNvbnN0IGFycmF5OiBSb3dEYXRhPFQ+W10gPSBbLi4udGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhXTtcbiAgICAgICAgbW92ZUl0ZW1JbkFycmF5KGFycmF5LCB0aGlzLmluZGV4Um93U3RhcnREcmFnLCByb3dJbmRleCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoYXJyYXkpO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0RHJhZyhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaW5kZXhSb3dTdGFydERyYWcgPSB0aGlzLmdldFJvd0luZGV4KGV2ZW50LnBhZ2VZKTtcbiAgICB0aGlzLmxhc3RJbmRleFJvd0RyYWcgPSB0aGlzLmluZGV4Um93U3RhcnREcmFnO1xuICAgIHRoaXMuZGF0YUJlZm9yZURyYWcgPSB0aGlzLmRhdGE7XG4gIH1cblxuICBwcml2YXRlIGdldFJvd0luZGV4KHBhZ2VZOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBvZmZzZXRUb3A6IG51bWJlciA9IDA7XG4gICAgbGV0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lclRhYmxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKChjb250YWluZXIgIT09IG51bGwpICYmIChvZmZzZXRUb3AgPT09IDApKSB7XG4gICAgICBvZmZzZXRUb3AgPSBjb250YWluZXIub2Zmc2V0VG9wO1xuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGxldCByb3dJbmRleDogbnVtYmVyID0gLTE7XG4gICAgY29uc3Qgcm93czogSFRNTENvbGxlY3Rpb24gPSB0aGlzLm1hdFRhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3c6IEhUTUxFbGVtZW50ID0gKHJvd3NbaV0gYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgaWYgKHBhZ2VZIC0gb2Zmc2V0VG9wID4gcm93Lm9mZnNldFRvcCAtIHRoaXMuY29udGFpbmVyVGFibGUubmF0aXZlRWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgcm93SW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocm93SW5kZXggPCAwKSB7IHJvd0luZGV4ID0gMDsgfVxuICAgIHJldHVybiByb3dJbmRleDtcbiAgfVxuXG4gIGdldCBjb2x1bW5UeXBlKCk6IHR5cGVvZiBDb2x1bW5UeXBlIHtcbiAgICByZXR1cm4gQ29sdW1uVHlwZTtcbiAgfVxuXG59XG4iXX0=