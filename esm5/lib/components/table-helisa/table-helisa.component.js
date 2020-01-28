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
        this.indexRowStartDrag = -1;
        this.lastIndexRowDrag = -1;
        this.dataBeforeDrag = null;
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
        this._dataSource = [];
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
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} dataSource
         * @return {?}
         */
        function (dataSource) {
            this._dataSource = dataSource;
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
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            /** @type {?} */
            var rowIndex = this.getRowIndex(event.pageY);
            /** @type {?} */
            var array = this.dataBeforeDrag.data;
            /** @type {?} */
            var rawData = this.rawData;
            moveItemInArray(array, this.indexRowStartDrag, rowIndex);
            moveItemInArray(rawData, this.indexRowStartDrag, rowIndex);
            this.drop.emit({ value: array[rowIndex].data, order: rowIndex });
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
            if (rowIndex != this.lastIndexRowDrag) {
                this.lastIndexRowDrag = rowIndex;
                //This can have a memory problem with big data
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
        while ((container != null) && (offsetTop == 0)) {
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
            if (pageY - offsetTop > row.offsetTop - this.containerTable.nativeElement.scrollTop)
                rowIndex = i;
        }
        if (rowIndex < 0)
            rowIndex = 0;
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
                    template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\n<div class=\"div-table-helisa\">\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\n    <ng-container *ngIf=\"addBookButton\">\n      <div class=\"buttons-container\" [ngClass]=\"{'hasTitle':showTitle, 'hasSubtitle': hasSubtitle}\">\n        <div *ngFor=\"let item of rawData\">\n          <button mat-icon-button *ngIf=\"item === selectedObject\" (click)=\"onBookClicked(selectedObject)\">\n            <i class=\"material-icons-outlined\">description</i>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\n        <ng-container [matColumnDef]=\"column.name\">\n          <ng-container *ngIf=\"column.title != undefined\">\n            <div *ngIf=\"!column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\n                {{column.title}} </th>\n            </div>\n            <div *ngIf=\"column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\n            </div>\n          </ng-container>\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{ getValue(element.data, column) }}</a>\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\n        </ng-container>\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\n            {{column.subtitle}}</th>\n        </ng-container>\n      </ng-container>\n\n      <ng-container matColumnDef=\"groupHeader\">\n        <td mat-cell *matCellDef=\"let group\">\n          <strong>{{ getGroupDescription(group.data) }}</strong>\n        </td>\n      </ng-container>\n\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\n      </ng-container>\n\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\n          [ngClass]=\"getClassToRow(row.data)\" [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"!isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row, true)\"\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\n        </tr>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\n    </table>\n  </div>\n</div>\n",
                    styles: ["table{table-layout:fixed}tbody tr,tfoot tr,thead tr{height:26px}tbody tr td,tbody tr th,tfoot tr td,tfoot tr th,thead tr td,thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table{position:relative}/deep/ hel-table>button{justify-content:center;align-items:flex-start;background:0 0;position:absolute;color:transparent;overflow:hidden;cursor:pointer;display:flex;border:none;height:26px;z-index:101;width:20px;opacity:.5;right:0;top:0}/deep/ hel-table>button:focus{outline:0}/deep/ hel-table>button:hover{opacity:1}/deep/ hel-table>button:before{justify-content:center;align-items:center;position:absolute;font-size:20px;display:flex;content:'+';color:#fff;height:26px;width:20px}/deep/ hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}/deep/ hel-table .buttons-container{order:2}/deep/ hel-table .buttons-container.hasTitle{padding-top:26px}/deep/ hel-table .buttons-container.hasSubtitle{padding-top:26px}/deep/ hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}/deep/ hel-table .buttons-container>div{height:26px}/deep/ hel-table .buttons-container>div button{justify-content:center;align-items:center;display:flex;height:26px}/deep/ hel-table .buttons-container>div button>*{display:flex;height:100%}/deep/ hel-table .div-table-helisa{height:100%}/deep/ hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa{width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ table{table-layout:fixed}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr{height:26px}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table .div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
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
        containerTable: [{ type: ViewChild, args: ["containerTable",] }],
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
    TableHelisaComponent.prototype._dataSource;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.tableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcxRSxPQUFPLEVBR0wsNkJBQTZCLEVBRTdCLGdCQUFnQixFQUtoQixVQUFVLEVBSVYsZUFBZSxFQUVmLFNBQVMsRUFDVCxVQUFVLEVBQ1gsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFHdEUsc0JBR0M7OztJQUZDLHVCQUFVOztJQUNWLDBCQUFpQjs7OztJQUlqQixjQUFXLEVBQUUsZUFBWSxFQUFFLE1BQUc7Ozs7Ozs7O0FBS2hDO0lBdUVFLDhCQUFvQixZQUFtQztRQUFuQyxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUE1RHZELHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyw4QkFBeUIsR0FBYSxFQUFFLENBQUM7UUFDekMsaUNBQTRCLEdBQWEsRUFBRSxDQUFDO1FBQzVDLCtCQUEwQixHQUFhLEVBQUUsQ0FBQztRQUkxQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFFdEMsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxLQUFLLENB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QUM5Rix5Q0FBMEI7O0lBQzFCLCtDQUFpQzs7SUFDakMscUNBQXVCOztJQUN2QixnREFBbUQ7O0lBQ25ELHlEQUEyRDs7SUFDM0QsNkNBQTZCOztJQUM3QixvQ0FBa0Y7O0lBQ2xGLHlDQUEyQjs7SUFDM0IsNENBQXNFOztJQUN0RSxzQ0FBZ0U7O0lBQ2hFLDJDQUErRDs7SUFDL0QsNkNBQXdDOztJQUN4QywyQ0FBcUM7O0lBQ3JDLDBDQUFtQjs7SUFDbkIsMENBQW1COzs7OztJQU9qQix5Q0FBNEM7Ozs7O0lBSzVDLHlDQUE0Qzs7Ozs7SUFtRjlDLDJDQUFxQzs7Ozs7SUFoRnpCLDRDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U29ydCwgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90eXBpbmdzL3NvcnQnO1xuXG5pbXBvcnQge1xuICBBZGRSb3dCdXR0b24sXG4gIENlbGwsXG4gIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLFxuICBDb2x1bW5Db25maWcsXG4gIENvbHVtbkNvbmZpZ1V0aWwsXG4gIENvbmZpZ0NlbGxTdHlsZXMsXG4gIENvbmZpZ1Jvd1N0eWxlcyxcbiAgRHJvcEVsZW1lbnQsXG4gIEV2ZW50Q29sdW1uLFxuICBFdmVudFNjb3BlLFxuICBFdmVudFNlYXJjaCxcbiAgUmVxdWVzdFRhYmxlSGVsaXNhLFxuICBTZWxlY3RPYmplY3QsXG4gIFRhYmxlSGVsaXNhVHlwZSxcbiAgVG90YWxHcm91cCxcbiAgVG90YWxUeXBlLFxuICBDb2x1bW5UeXBlXG59IGZyb20gJy4vdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUYWJsZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtaGVsaXNhLWNvbm5lY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7b2Z9IGZyb20gJ3J4anMnO1xuXG5pbnRlcmZhY2UgUm93RGF0YSB7XG4gIGRhdGE6IGFueTtcbiAgcm93VHlwZTogUm93VHlwZTtcbn1cblxuZW51bSBSb3dUeXBlIHtcbiAgR1JPVVBfVElUTEUsIEdST1VQX0ZPT1RFUiwgUk9XXG59XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIHByaXZhdGUgdGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50OiBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD47XG4gIHRvdGFsRGF0YTogQXJyYXk8bnVtYmVyPjtcbiAgcmF3RGF0YTogQXJyYXk8VD47XG4gIGRhdGE6IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPjtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZTogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZTogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXI6IHN0cmluZ1tdID0gW107XG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcbiAgc2VsZWN0ZWRPYmplY3Q6IFQ7XG4gIGxhc3RTZWFyY2g6IHN0cmluZztcbiAgdHlwZTogVGFibGVIZWxpc2FUeXBlID0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xuICBpbmRleFJvd1NlbGVjdDogbnVtYmVyO1xuICBwcml2YXRlIHNjcm9sbENvdW50OiBudW1iZXIgPSAwO1xuICBoYXNTdWJ0aXRsZSA9IGZhbHNlO1xuICBwcml2YXRlIGluZGV4Um93U3RhcnREcmFnID0gLTE7XG4gIHByaXZhdGUgbGFzdEluZGV4Um93RHJhZyA9IC0xO1xuICBwcml2YXRlIGRhdGFCZWZvcmVEcmFnID0gbnVsbDtcblxuICBAVmlld0NoaWxkKE1hdFNvcnQpIG1hdFNvcnQ6IE1hdFNvcnQ7XG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUpIG1hdFRhYmxlOiBNYXRUYWJsZTxhbnk+O1xuICBAVmlld0NoaWxkKE1hdFRhYmxlLHtyZWFkOkVsZW1lbnRSZWZ9KSBtYXRUYWJsZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJUYWJsZVwiKSBjb250YWluZXJUYWJsZTpFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcbiAgQE91dHB1dCgpIHRvdGFsOiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+KCk7XG5cbiAgLyoqXG4gICAqIERlcHJlY2FkbywgY2FtYmlhciBwb3IgZWxlY3RPYmplY3RcbiAgICovXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdENlbGwgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGw+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RPYmplY3Q6IEV2ZW50RW1pdHRlcjxTZWxlY3RPYmplY3Q8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RPYmplY3Q8VD4+KCk7XG4gIEBPdXRwdXQoKSBuZXh0UGFnZTogRXZlbnRFbWl0dGVyPFJlcXVlc3RUYWJsZUhlbGlzYT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJlcXVlc3RUYWJsZUhlbGlzYT4oKTtcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNDZWxsU2VsZWN0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGNvbmZpZ0NlbGxTdHlsZXM6IEFycmF5PENvbmZpZ0NlbGxTdHlsZXM+O1xuICBASW5wdXQoKSBjb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uOiBBcnJheTxDb25maWdSb3dTdHlsZXM+O1xuICBASW5wdXQoKSBzZWxlY3RlZENlbGxzOiBDZWxsO1xuICBAT3V0cHV0KCkgZHJvcDogRXZlbnRFbWl0dGVyPERyb3BFbGVtZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+KCk7XG4gIEBJbnB1dCgpIGlzRHJhZ2dlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBhZGRSb3dCdXR0b246IEFkZFJvd0J1dHRvbiA9IHsgc2hvd0J1dHRvbjogZmFsc2UsIHRleHQ6IFwiXCIgfTtcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgYm9va0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQElucHV0KCkgYWRkQm9va0J1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XG4gIHNob3dGb290ZXIgPSBmYWxzZTtcbiAgc2hvd1NlYXJjaCA9IGZhbHNlO1xuXG5cblxuICAvKipcbiAgICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamUgZGVsIHRvb2x0aXBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2hpZGVEZWxheScpIGhpZGVEZWxheTogbnVtYmVyID0gNjAwO1xuXG4gICAgLyoqXG4gICAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAgICovXG4gICAgQElucHV0KCdzaG93RGVsYXknKSBzaG93RGVsYXk6IG51bWJlciA9IDUwMDtcbiAgIFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8VD4pIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGFibGVTZXJ2aWNlLm5leHRQYWdlUmV0dXJuLnN1YnNjcmliZShcbiAgICAgIGRhdGEgPT4ge1xuICAgICAgICBpZiAoIWRhdGEudGFibGUgfHwgZGF0YS50YWJsZSA9PT0gdGhpcykge1xuICAgICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5vYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnRhYmxlU2VydmljZS50b3RhbFJldHVybi5zdWJzY3JpYmUoaW5mbyA9PiB7XG4gICAgICBpZiAoaW5mbykge1xuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW4sIGlkeCkgPT4ge1xuICAgICAgICAgIGlmIChjb2x1bW4gPT09IGluZm8ub2JqLmNvbHVtbikge1xuICAgICAgICAgICAgdGhpcy50b3RhbERhdGFbaWR4XSA9IHRoaXMuZ2V0R3JvdXBWYWx1ZShjb2x1bW4sIHsgc3VtOiBpbmZvLm9iai52YWx1ZSwgY291bnQ6IHRoaXMuY291bnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm1hdFNvcnQuc29ydENoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAoZXZlbnQ6IFNvcnQpID0+IHtcbiAgICAgICAgY29uc3QgY29sdW1uOiBDb2x1bW5Db25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZy5maW5kKGMgPT4gYy5uYW1lID09PSBldmVudC5hY3RpdmUpO1xuICAgICAgICBjb2x1bW4uc29ydERpcmVjdGlvbiA9IGV2ZW50LmRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5zb3J0LmVtaXQoeyBjb2x1bW4sIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZywgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUuU09SVCB9KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy50YWJsZVNlcnZpY2UuZW1pdFZpc2libGVCdXR0b24uc3Vic2NyaWJlKFxuICAgICAgZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhICE9IHVuZGVmaW5lZCAmJiBkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5tYXRUYWJsZS5yZW5kZXJSb3dzKCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGlzUmVtb3RlKHc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnR5cGUgPSB3ID8gVGFibGVIZWxpc2FUeXBlLlJFTU9URSA6IFRhYmxlSGVsaXNhVHlwZS5MT0NBTDtcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCA9IG5ldyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD4oKTtcbiAgICBpZiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFKSB7XG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSsrO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2x1bW5Db25maWd1cmF0aW9uKGNvbHVtbkNvbmZpZ3VyYXRpb246IEFycmF5PENvbHVtbkNvbmZpZz4pIHtcbiAgICB0aGlzLmhhc1N1YnRpdGxlID0gZmFsc2U7XG4gICAgdGhpcy5jb2x1bW5Db25maWcgPSBjb2x1bW5Db25maWd1cmF0aW9uO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCk7XG4gICAgaWYgKGNvbHVtbkNvbmZpZ3VyYXRpb24pIHtcbiAgICAgIGNvbHVtbkNvbmZpZ3VyYXRpb24uZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaChjb2x1bW4ubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmhhc1N1YnRpdGxlKSB7XG4gICAgICAgICAgdGhpcy5oYXNTdWJ0aXRsZSA9IGNvbHVtbi5zdWJ0aXRsZSAhPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMucmF3RGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZS5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLmxlbmd0aCk7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGUubGVuZ3RoKTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLmxlbmd0aCk7XG4gICAgdGhpcy5nZXRDb2x1bW5zV2l0aFRpdGxlKCkuZm9yRWFjaChjb2wgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLnB1c2goY29sKSk7XG4gICAgdGhpcy5nZXRIZWFkZXJTdWJ0aXRsZSgpLmZvckVhY2goY29sID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZS5wdXNoKGNvbCkpO1xuICAgIHRoaXMuZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpLmZvckVhY2goY29sID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIucHVzaChjb2wpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2RhdGFTb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5fZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgdGhpcy5yYXdEYXRhID0gZGF0YVNvdXJjZTtcbiAgICBpZiAodGhpcy5yYXdEYXRhKSB7IHRoaXMucHJlcGFyZURhdGFTb3VyY2UoKTsgfVxuICB9XG5cbiAgZ2V0IGRhdGFTb3VyY2UoKTpBcnJheTxhbnk+e1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXhSb3coaWRSb3dTZWxlY3RlZDogbnVtYmVyKSB7XG4gICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IGlkUm93U2VsZWN0ZWQ7XG4gICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoKSB7XG4gICAgICBpZiAoKGlkUm93U2VsZWN0ZWQgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCBpZFJvd1NlbGVjdGVkIDwgMCkpIHtcbiAgICAgICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdFJvdyh7IGRhdGE6IHRoaXMucmF3RGF0YVt0aGlzLmluZGV4Um93U2VsZWN0XSwgcm93VHlwZTogUm93VHlwZS5ST1cgfSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZURhdGFTb3VyY2UoKSB7XG4gICAgY29uc3QgY2hhbmdlRGF0YSA9IEFycmF5PFJvd0RhdGE+KCk7XG4gICAgbGV0IGhhdmVHcm91cCA9IGZhbHNlO1xuICAgIGxldCBncm91cEZvb3RlcjogQXJyYXk8VG90YWxHcm91cD47XG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCAmJiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuTE9DQUwgfHwgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSA8PSAxKSkge1xuICAgICAgICB0aGlzLnRvdGFsRGF0YSA9IG5ldyBBcnJheTxudW1iZXI+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuc2hvd0Zvb3RlciA9IHRydWU7XG4gICAgICAgIHRoaXMudG90YWwuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5UT1RBTCB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvd1NlYXJjaCA9IHRoaXMuc2hvd1NlYXJjaCB8fCBjb2x1bW4uc2VhcmNoYWJsZTtcbiAgICAgIGhhdmVHcm91cCA9IGhhdmVHcm91cCB8fCBjb2x1bW4uZ3JvdXBhYmxlO1xuICAgIH0pO1xuICAgIGlmIChoYXZlR3JvdXApIHtcbiAgICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jb21wYXJlKGEsIGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5yYXdEYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGlmIChoYXZlR3JvdXAgJiYgKGNoYW5nZURhdGEubGVuZ3RoID09PSAwIHx8IHRoaXMuY29tcGFyZShjaGFuZ2VEYXRhW2NoYW5nZURhdGEubGVuZ3RoIC0gMV0uZGF0YSwgcm93KSAhPT0gMCkpIHtcbiAgICAgICAgaWYgKGdyb3VwRm9vdGVyKSB7XG4gICAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogZ3JvdXBGb290ZXIsIHJvd1R5cGU6IFJvd1R5cGUuR1JPVVBfRk9PVEVSIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IHJvdywgcm93VHlwZTogUm93VHlwZS5HUk9VUF9USVRMRSB9KTtcbiAgICAgICAgZ3JvdXBGb290ZXIgPSBuZXcgQXJyYXk8VG90YWxHcm91cD4odGhpcy5jb2x1bW5Db25maWcubGVuZ3RoKTtcbiAgICAgIH1cbiAgICAgIGlmIChoYXZlR3JvdXApIHsgdGhpcy5hZGRUb3RhbEdyb3VwKGdyb3VwRm9vdGVyLCByb3cpOyB9XG4gICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YT4oY2hhbmdlRGF0YSk7XG4gICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoICYmIHRoaXMuaW5kZXhSb3dTZWxlY3QgJiYgIXRoaXMuc2VsZWN0ZWRPYmplY3QpIHtcbiAgICAgIGlmICh0aGlzLmluZGV4Um93U2VsZWN0ID49IHRoaXMucmF3RGF0YS5sZW5ndGggfHwgdGhpcy5pbmRleFJvd1NlbGVjdCA8IDApXG4gICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xuICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFRvdGFsR3JvdXAocm93VG90YWw6IEFycmF5PFRvdGFsR3JvdXA+LCByb3c6IGFueSkge1xuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHJvd1RvdGFsW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdID0geyBzdW06IENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUocm93LCBjb2x1bW4pLCBjb3VudDogMSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5zdW0gKz0gQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShyb3csIGNvbHVtbik7XG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcGFyZShhOiBhbnksIGI6IGFueSk6IG51bWJlciB7XG4gICAgbGV0IHdzID0gMDtcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBpZiAod3MgPT09IDAgJiYgY29sdW1uLmdyb3VwYWJsZSkge1xuICAgICAgICBpZiAoQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShhLCBjb2x1bW4pIDwgQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShiLCBjb2x1bW4pKSB7IHdzID0gLTE7IH0gZWxzZSBpZiAoQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShhLCBjb2x1bW4pID4gQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShiLCBjb2x1bW4pKSB7IHdzID0gMTsgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB3cztcbiAgfVxuXG4gIGdldEdyb3VwRGVzY3JpcHRpb24ob2JqOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBpZiAoY29sdW1uLmdyb3VwYWJsZSkge1xuICAgICAgICByZXN1bHQgKz0gKHJlc3VsdC5sZW5ndGggPyAnIC0gJyA6ICcnKSArIENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUob2JqLCBjb2x1bW4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpc0dyb3VwVGl0bGUoaW5kZXgsIGl0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLkdST1VQX1RJVExFO1xuICB9XG5cbiAgaXNSb3coaW5kZXgsIGl0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLlJPVztcbiAgfVxuXG4gIGlzR3JvdXBGb290ZXIoaW5kZXgsIGl0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLkdST1VQX0ZPT1RFUjtcbiAgfVxuXG4gIGZvb3RlckRpc3BsYXllZENvbHVtbnMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5tYXAobmFtZSA9PiAnZm9vdGVyLScgKyBuYW1lKTtcbiAgfVxuXG4gIGdldEdyb3VwVmFsdWUoY29sdW1uOiBDb2x1bW5Db25maWcsIGRhdGE6IFRvdGFsR3JvdXApOiBudW1iZXIge1xuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuU1VNKSB7IHJldHVybiBkYXRhLnN1bTsgfVxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuQ09VTlQpIHsgcmV0dXJuIGRhdGEuY291bnQ7IH1cbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLkFWRVJBR0UpIHsgcmV0dXJuIDEuICogZGF0YS5zdW0gLyBkYXRhLmNvdW50OyB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFZhbHVlKG9iajogYW55LCBjb2x1bW46IENvbHVtbkNvbmZpZykge1xuICAgIHJldHVybiBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKG9iaiwgY29sdW1uKTtcbiAgfVxuXG4gIGdldFZhbHVlVG9vbHRpcChvYmo6IGFueSwgY29sdW1uOiBDb2x1bW5Db25maWcpIHtcbiAgICBpZiAodGhpcy5zaG93VG9vbFRpcCkge1xuICAgICAgcmV0dXJuIENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUob2JqLCBjb2x1bW4pO1xuICAgIH0gZWxzZSB7IHJldHVybiBudWxsIH1cbiAgfVxuXG4gIHNlYXJjaFRleHQodGV4dCkge1xuICAgIHRoaXMubGFzdFNlYXJjaCA9IHRleHQ7XG4gICAgdGhpcy5zZWFyY2guZW1pdCh7IHRleHQsIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZyB9KTtcbiAgfVxuXG4gIHNlbGVjdFJvdyhyb3csIGlzVXNlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSByb3cuZGF0YTtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xuICAgIHRoaXMuc2VsZWN0T2JqZWN0LmVtaXQoeyB2YWx1ZTogdGhpcy5zZWxlY3RlZE9iamVjdCwgc2NvcGU6IGlzVXNlciA/IEV2ZW50U2NvcGUuVVNFUiA6IEV2ZW50U2NvcGUuQ09ERV9DQUxMIH0pO1xuICB9XG5cbiAgb25TY3JvbGwoZXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LnNjcm9sbFRvcCA8IDEwMDApIHtcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpIHtcbiAgICBpZiAoIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgJiYgIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCkge1xuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7XG4gICAgICAgIHBhZ2U6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50Lm5leHRQYWdlKCksXG4gICAgICAgIGJvZHk6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmdldEJvZHkodGhpcy5jb2x1bW5Db25maWcsIHRoaXMubGFzdFNlYXJjaClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogVFtdKSB7XG4gICAgaWYgKCF0aGlzLnJhd0RhdGEpIHtcbiAgICAgIHRoaXMucmF3RGF0YSA9IG5ldyBBcnJheTxUPigpO1xuICAgIH1cbiAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuY29uY2F0KGRhdGEpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XG4gIH1cblxuICBkYmxDbGlja0NlbGwoKSB7XG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzKTtcbiAgfVxuXG4gIHNlbGVjdGVkQ2VsbChlbGVtZW50LCBjb2x1bW46IENvbHVtbkNvbmZpZykge1xuICAgIHRoaXMuc2VsZWN0ZWRDZWxscyA9IHsgY29sdW1uOiBjb2x1bW4sIHJvdzogZWxlbWVudCB9O1xuICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHRoaXMuc2VsZWN0ZWRDZWxscyk7XG4gIH1cblxuICBpc1NlbGVjdGVkQ2VsbChyb3csIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZENlbGxzICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDZWxscy5jb2x1bW4ubmFtZSA9PT0gY29sdW1uLm5hbWUgJiZcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2VsbHMucm93LmRhdGEgPT09IHJvdy5kYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0Q2xhc3NUb0NlbGwocm93LCBjb2x1bW46IENvbHVtbkNvbmZpZykge1xuICAgIGxldCBjbGFzc1RvQ2VsbCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgaWYgKHRoaXMuY29uZmlnQ2VsbFN0eWxlcykge1xuICAgICAgbGV0IGZvdW5kID0gdGhpcy5jb25maWdDZWxsU3R5bGVzLmZpbmQoYyA9PiB7XG4gICAgICAgIHJldHVybiBjLmNlbGxEYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgY29sdW1uKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGNsYXNzVG9DZWxsLnB1c2goZm91bmQuY2xhc3NDZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbHVtbi5jb2x1bW5TdHlsZSlcbiAgICAgIGNsYXNzVG9DZWxsLnB1c2goY29sdW1uLmNvbHVtblN0eWxlKTtcbiAgICByZXR1cm4gY2xhc3NUb0NlbGw7XG4gIH1cblxuICBnZXRDbGFzc1RvUm93KHJvdykge1xuICAgIGNvbnN0IGNsYXNzVG9Sb3cgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgIGlmKHJvdyA9PT0gdGhpcy5zZWxlY3RlZE9iamVjdCAmJiAhdGhpcy5pc0NlbGxTZWxlY3Rpb24pXG4gICAgICBjbGFzc1RvUm93LnB1c2goJycpO1xuICAgIGlmICh0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4pIHtcbiAgICAgIGxldCBmb3VuZCA9IHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbi5maW5kKGMgPT4ge1xuICAgICAgICByZXR1cm4gYy5kYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgYy5jb2x1bW4pO1xuICAgICAgfSk7XG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgY2xhc3NUb1Jvdy5wdXNoKGZvdW5kLmNsYXNzUm93KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzVG9Sb3c7XG4gIH1cblxuICBvbkRyb3AoZXZlbnQpIHtcbiAgICBpZih0aGlzLmlzRHJhZ2dlZCAmJiB0aGlzLmluZGV4Um93U3RhcnREcmFnID49IDApIHtcbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gdGhpcy5nZXRSb3dJbmRleChldmVudC5wYWdlWSk7XG4gICAgICBjb25zdCBhcnJheTogUm93RGF0YVtdID0gdGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhO1xuICAgICAgY29uc3QgcmF3RGF0YSA9IHRoaXMucmF3RGF0YTtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShhcnJheSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KHJhd0RhdGEsIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcbiAgICAgIHRoaXMuZHJvcC5lbWl0KHsgdmFsdWU6IGFycmF5W3Jvd0luZGV4XS5kYXRhLCBvcmRlcjogcm93SW5kZXggfSk7XG4gICAgICB0aGlzLnJhd0RhdGEgPSByYXdEYXRhO1xuICAgICAgdGhpcy5kYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShhcnJheSk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICB0YWJsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5kYXRhLmRhdGEuZmluZEluZGV4KHJvdyA9PiByb3cuZGF0YSA9PT0gdGhpcy5zZWxlY3RlZE9iamVjdCk7XG4gICAgICBsZXQgbmV3U2VsZWN0aW9uID0gLTEwO1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCsrO1xuICAgICAgICB0aGlzLmRhdGEuZGF0YS5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PSAtMTAgJiYgaW5kZXggPiBjdXJyZW50SW5kZXggJiYgcm93LnJvd1R5cGUgPT0gUm93VHlwZS5ST1cpXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBpbmRleDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudC0tO1xuICAgICAgICBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBjdXJyZW50SW5kZXggLSAxO1xuICAgICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCkuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT0gLTEwICYmIGluZGV4ID4gY3VycmVudEluZGV4ICYmIHJvdy5yb3dUeXBlID09IFJvd1R5cGUuUk9XKVxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gaW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCk7XG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gIT0gLTEwKSB7XG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoIC0gbmV3U2VsZWN0aW9uIC0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiAhPSAtMTApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RSb3codGhpcy5kYXRhLmRhdGFbbmV3U2VsZWN0aW9uXSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoTWF0aC5hYnModGhpcy5zY3JvbGxDb3VudCkgPj0gMilcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCA9IDA7XG4gICAgICBlbHNlXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRlIGVsIGV2ZW50byBjdWFuZG8gc2UgZGEgY2xpY2sgYWwgYm90b24gQWRkUm93XG4gICAqL1xuICBvbkFkZFJvdygpIHtcbiAgICB0aGlzLmFkZFJvdy5lbWl0KCk7XG4gIH1cblxuICBvbkJvb2tDbGlja2VkKHNlbGVjdGVkT2JqZWN0KSB7XG4gICAgdGhpcy5ib29rQ2xpY2tlZC5lbWl0KHNlbGVjdGVkT2JqZWN0KTtcbiAgfVxuXG4gIGdldEhlYWRlclN1YnRpdGxlKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgeCA9IHRoaXMuY29sdW1uQ29uZmlnLm1hcCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGNvbHVtbi52aXNpYmxlICYmIGNvbHVtbi5zdWJ0aXRsZSAhPSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiAnc3VidGl0bGUnICsgaW5kZXg7XG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pLmZpbHRlcihkYXRhID0+IGRhdGEgIT0gbnVsbCk7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICBnZXRDb2x1bW5zV2l0aFRpdGxlKCl7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uQ29uZmlnLmZpbHRlcihjb2x1bW4gPT4gXG4gICAgICAgIGNvbHVtbi52aXNpYmxlICYmIGNvbHVtbi50aXRsZSAhPSB1bmRlZmluZWRcbiAgICApLm1hcChjb2wgPT4gY29sLm5hbWUpO1xuICB9XG5cbiAgZHJhZ2dlcihldmVudCkge1xuICAgIGlmICh0aGlzLmlzRHJhZ2dlZCAmJiB0aGlzLmluZGV4Um93U3RhcnREcmFnID49IDApIHtcbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gdGhpcy5nZXRSb3dJbmRleChldmVudC5wYWdlWSk7XG4gICAgICBpZiAocm93SW5kZXggIT0gdGhpcy5sYXN0SW5kZXhSb3dEcmFnKSB7XG4gICAgICAgIHRoaXMubGFzdEluZGV4Um93RHJhZyA9IHJvd0luZGV4O1xuICAgICAgICAvL1RoaXMgY2FuIGhhdmUgYSBtZW1vcnkgcHJvYmxlbSB3aXRoIGJpZyBkYXRhXG4gICAgICAgIGNvbnN0IGFycmF5OiBSb3dEYXRhW10gPSBbLi4udGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhXTtcbiAgICAgICAgbW92ZUl0ZW1JbkFycmF5KGFycmF5LCB0aGlzLmluZGV4Um93U3RhcnREcmFnLCByb3dJbmRleCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoYXJyYXkpO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0RHJhZyhldmVudCkge1xuICAgIHRoaXMuaW5kZXhSb3dTdGFydERyYWcgPSB0aGlzLmdldFJvd0luZGV4KGV2ZW50LnBhZ2VZKTtcbiAgICB0aGlzLmxhc3RJbmRleFJvd0RyYWcgPSB0aGlzLmluZGV4Um93U3RhcnREcmFnO1xuICAgIHRoaXMuZGF0YUJlZm9yZURyYWcgPSB0aGlzLmRhdGE7XG4gIH1cblxuICBwcml2YXRlIGdldFJvd0luZGV4KHBhZ2VZKSB7XG4gICAgbGV0IG9mZnNldFRvcCA9IDA7XG4gICAgbGV0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyVGFibGUubmF0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAoKGNvbnRhaW5lciAhPSBudWxsKSAmJiAob2Zmc2V0VG9wID09IDApKSB7XG4gICAgICBvZmZzZXRUb3AgPSBjb250YWluZXIub2Zmc2V0VG9wO1xuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGxldCByb3dJbmRleCA9IC0xO1xuICAgIGNvbnN0IHJvd3M6IEhUTUxDb2xsZWN0aW9uID0gdGhpcy5tYXRUYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3Qgcm93OiBIVE1MRWxlbWVudCA9IChyb3dzW2ldIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgIGlmIChwYWdlWSAtIG9mZnNldFRvcCA+IHJvdy5vZmZzZXRUb3AgLSB0aGlzLmNvbnRhaW5lclRhYmxlLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wKVxuICAgICAgICByb3dJbmRleCA9IGk7XG4gICAgfVxuICAgIGlmIChyb3dJbmRleCA8IDApIHJvd0luZGV4ID0gMDtcbiAgICByZXR1cm4gcm93SW5kZXg7XG4gIH1cblxuICBnZXQgY29sdW1uVHlwZSgpIHtcbiAgICByZXR1cm4gQ29sdW1uVHlwZTtcbiAgfVxuXG59XG4iXX0=