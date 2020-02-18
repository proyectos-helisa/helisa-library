/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    ngOnInit() {
        this.tableService.nextPageReturn.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (!data.table || data.table) {
                this.receivePage(data.obj);
            }
        }));
        this.tableService.totalReturn.subscribe((/**
         * @param {?} info
         * @return {?}
         */
        (info) => {
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
            (c) => c.name === event.active));
            column.sortDirection = event.direction;
            this.sort.emit({ column, columnConfigurations: this.columnConfig, type: ChangeColumnConfigurationType.SORT });
        }));
        this.tableService.emitVisibleButton.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data !== undefined && data != null) {
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
        this.hasSubtitle = false;
        this.columnConfig = columnConfiguration;
        this.displayedColumns.splice(0, this.displayedColumns.length);
        if (columnConfiguration) {
            if (this.addBookButton) {
                /** @type {?} */
                const columnCount = columnConfiguration.length;
                /** @type {?} */
                let countSubtitle = 0;
                /** @type {?} */
                let showBookButton = false;
                columnConfiguration.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    if (!!column.subtitle) {
                        countSubtitle = countSubtitle + 1;
                    }
                    if ((!showBookButton) && (column.name === 'bookButton')) {
                        showBookButton = true;
                    }
                }));
                /** @type {?} */
                const subtitleTemp = columnCount === countSubtitle;
                if (!showBookButton) {
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
            (column) => {
                if (column.visible) {
                    this.displayedColumns.push(column.name);
                }
                if (!this.hasSubtitle) {
                    this.hasSubtitle = column.subtitle !== undefined;
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
        (col) => this.displayedColumnsWithTitle.push(col)));
        this.getHeaderSubtitle().forEach((/**
         * @param {?} col
         * @return {?}
         */
        (col) => this.displayedColumnsWithSubtitle.push(col)));
        this.footerDisplayedColumns().forEach((/**
         * @param {?} col
         * @return {?}
         */
        (col) => this.displayedColumnsWithFooter.push(col)));
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    set dataSource(dataSource) {
        this.dataSource$ = dataSource;
        this.rawData = dataSource;
        if (this.rawData) {
            this.prepareDataSource();
        }
    }
    /**
     * @return {?}
     */
    get dataSource() {
        return this.dataSource$;
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
        (column) => {
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
                (column) => {
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
        (row) => {
            if (haveGroup && (changeData.length === 0 || this.compare((/** @type {?} */ (changeData[changeData.length - 1].data)), row) !== 0)) {
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
            if (this.indexRowSelect >= this.rawData.length || this.indexRowSelect < 0) {
                this.indexRowSelect = 0;
            }
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
                    rowTotal[index] = { sum: ((/** @type {?} */ (new ColumnConfigUtil().getValue(row, column)))), count: 1 };
                }
                else {
                    rowTotal[index].sum += ((/** @type {?} */ (new ColumnConfigUtil().getValue(row, column))));
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
        (column) => {
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
        (column) => {
            if (column.groupable) {
                result += (result.length ? ' - ' : '') + (new ColumnConfigUtil().getValue(obj, column));
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
        (name) => 'footer-' + name));
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
        return (/** @type {?} */ (new ColumnConfigUtil().getValue(obj, column)));
    }
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    getValueTooltip(obj, column) {
        if (this.showToolTip) {
            return (/** @type {?} */ (new ColumnConfigUtil().getValue(obj, column)));
        }
        else {
            return null;
        }
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
        this.selectedObject = (/** @type {?} */ (row.data));
        this.select.emit(this.selectedObject);
        this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        /** @type {?} */
        const element = (/** @type {?} */ (event.target));
        /** @type {?} */
        let isScrollY;
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
        this.tableHelisaConnectComponent.isLastPage = data.length === 0;
        this.tableHelisaConnectComponent.isUsed = false;
    }
    /**
     * @return {?}
     */
    dblClickCell() {
        this.selectCell.emit((/** @type {?} */ (this.selectedCells)));
    }
    /**
     * @param {?} element
     * @param {?} column
     * @return {?}
     */
    selectedCell(element, column) {
        this.selectedCells = { column, row: element };
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
                    ((/** @type {?} */ (this.selectedCells.row))).data === row.data) {
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
        const classToCell = new Array();
        if (this.configCellStyles) {
            /** @type {?} */
            const found = this.configCellStyles.find((/**
             * @param {?} c
             * @return {?}
             */
            (c) => {
                return c.cellData === this.getValue(row, column);
            }));
            if (found) {
                classToCell.push(found.classCell);
            }
        }
        if (column.columnStyle) {
            classToCell.push(column.columnStyle);
        }
        return classToCell;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getClassToRow(row) {
        /** @type {?} */
        const classToRow = new Array();
        if (row === this.selectedObject && !this.isCellSelection) {
            classToRow.push('');
        }
        if (this.configRowStylesFromColumn) {
            /** @type {?} */
            const found = this.configRowStylesFromColumn.find((/**
             * @param {?} c
             * @return {?}
             */
            (c) => {
                return c.data === this.getValue(row, c.column);
            }));
            if (found) {
                classToRow.push(found.classRow);
            }
        }
        return classToRow;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            /** @type {?} */
            const rowIndex = this.getRowIndex(event.pageY);
            /** @type {?} */
            const array = this.dataBeforeDrag.data;
            /** @type {?} */
            const rawData = this.rawData;
            moveItemInArray(array, this.indexRowStartDrag, rowIndex);
            moveItemInArray(rawData, this.indexRowStartDrag, rowIndex);
            this.drop.emit({ value: (/** @type {?} */ (array[rowIndex].data)), order: rowIndex });
            this.rawData = rawData;
            this.data = new MatTableDataSource(array);
            event.stopPropagation();
        }
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
            (row) => row.data === this.selectedObject));
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
                    if (newSelection === -10 && index > currentIndex && row.rowType === RowType.ROW) {
                        newSelection = index;
                    }
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
                    if (newSelection === -10 && index > currentIndex && row.rowType === RowType.ROW) {
                        newSelection = index;
                    }
                }));
                this.data.data.reverse();
                if (newSelection !== -10) {
                    newSelection = this.data.data.length - newSelection - 1;
                }
            }
            if (newSelection !== -10) {
                this.selectRow(this.data.data[newSelection], true);
            }
            if (Math.abs(this.scrollCount) >= 2) {
                this.scrollCount = 0;
            }
            else {
                event.preventDefault();
            }
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
    /**
     * @return {?}
     */
    getHeaderSubtitle() {
        /** @type {?} */
        const x = this.columnConfig.map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
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
        (data) => data != null));
        return x;
    }
    /**
     * @return {?}
     */
    getColumnsWithTitle() {
        return this.columnConfig.filter((/**
         * @param {?} column
         * @return {?}
         */
        (column) => column.visible && column.title !== undefined)).map((/**
         * @param {?} col
         * @return {?}
         */
        (col) => col.name));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragger(event) {
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            /** @type {?} */
            const rowIndex = this.getRowIndex(event.pageY);
            if (rowIndex !== this.lastIndexRowDrag) {
                this.lastIndexRowDrag = rowIndex;
                // This can have a memory problem with big data
                /** @type {?} */
                const array = [...this.dataBeforeDrag.data];
                moveItemInArray(array, this.indexRowStartDrag, rowIndex);
                this.data = new MatTableDataSource(array);
            }
            event.preventDefault();
            return true;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    startDrag(event) {
        this.indexRowStartDrag = this.getRowIndex(event.pageY);
        this.lastIndexRowDrag = this.indexRowStartDrag;
        this.dataBeforeDrag = this.data;
    }
    /**
     * @private
     * @param {?} pageY
     * @return {?}
     */
    getRowIndex(pageY) {
        /** @type {?} */
        let offsetTop = 0;
        /** @type {?} */
        let container = this.containerTable.nativeElement;
        while ((container !== null) && (offsetTop === 0)) {
            offsetTop = container.offsetTop;
            container = container.parentElement;
        }
        /** @type {?} */
        let rowIndex = -1;
        /** @type {?} */
        const rows = this.matTableElement.nativeElement.children[1].children;
        for (let i = 0; i < rows.length; i++) {
            /** @type {?} */
            const row = ((/** @type {?} */ (rows[i])));
            if (pageY - offsetTop > row.offsetTop - this.containerTable.nativeElement.scrollTop) {
                rowIndex = i;
            }
        }
        if (rowIndex < 0) {
            rowIndex = 0;
        }
        return rowIndex;
    }
    /**
     * @return {?}
     */
    get columnType() {
        return ColumnType;
    }
}
TableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-table',
                template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\r\n<div class=\"div-table-helisa\">\r\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\r\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\r\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\r\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\r\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\r\n          <ng-container *ngIf=\"column.title != undefined\">\r\n            <div *ngIf=\"!column.sortable\">\r\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\r\n                {{column.title}} </th>\r\n            </div>\r\n            <div *ngIf=\"column.sortable\">\r\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\r\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton'\"> \r\n                  <th mat-header-cell *matHeaderCellDef ></th>\r\n                  <td mat-cell *matCellDef=\"let element;\">\r\n                    <button mat-icon-button *ngIf=\"element.data === selectedObject\" (click)=\"onBookClicked(selectedObject)\">\r\n                      <i class=\"material-icons-outlined\">description</i>\r\n                    </button>\r\n                  </td>\r\n          </ng-container>\r\n\r\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\r\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\r\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\r\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{ getValue(element.data, column) }}</a>\r\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\r\n          </td>\r\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\r\n        </ng-container>\r\n\r\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\r\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\r\n            {{column.subtitle}}</th>\r\n        </ng-container>\r\n      </ng-container>\r\n \r\n      <ng-container matColumnDef=\"groupHeader\">\r\n        <td mat-cell *matCellDef=\"let group\">\r\n          <strong>{{ getGroupDescription(group.data) }}</strong>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\r\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\r\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\r\n          [ngClass]=\"getClassToRow(row.data)\" [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row, true)\"\r\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\r\n        </tr>\r\n      </ng-container>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n",
                styles: ["table{table-layout:fixed}tbody tr,tfoot tr,thead tr{height:26px}tbody tr td,tbody tr th,tfoot tr td,tfoot tr th,thead tr td,thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}tbody tr td button{line-height:inherit;height:auto}tfoot{display:none}tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table{position:relative}/deep/ hel-table>button{justify-content:center;align-items:flex-start;background:0 0;position:absolute;color:transparent;overflow:hidden;cursor:pointer;display:flex;border:none;height:26px;z-index:101;width:20px;opacity:.5;right:0;top:0}/deep/ hel-table>button:focus{outline:0}/deep/ hel-table>button:hover{opacity:1}/deep/ hel-table>button:before{justify-content:center;align-items:center;position:absolute;font-size:20px;display:flex;content:'+';color:#fff;height:26px;width:20px}/deep/ hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}/deep/ hel-table .buttons-container{order:2}/deep/ hel-table .buttons-container.hasTitle{padding-top:26px}/deep/ hel-table .buttons-container.hasSubtitle{padding-top:26px}/deep/ hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}/deep/ hel-table .buttons-container>div{height:26px}/deep/ hel-table .buttons-container>div button{justify-content:center;align-items:center;display:flex;height:26px}/deep/ hel-table .buttons-container>div button>*{display:flex;height:100%}/deep/ hel-table .div-table-helisa{height:100%}/deep/ hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa{width:100%}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ table{table-layout:fixed}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr{height:26px}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr td,/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tbody tr td button{line-height:inherit;height:auto}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot{display:none}/deep/ hel-table .div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}/deep/ hel-table .div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
            }] }
];
/** @nocollapse */
TableHelisaComponent.ctorParameters = () => [
    { type: TableHelisaService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRzFFLE9BQU8sRUFHTCw2QkFBNkIsRUFFN0IsZ0JBQWdCLEVBS2hCLFVBQVUsRUFJVixlQUFlLEVBRWYsU0FBUyxFQUNULFVBQVUsRUFFWCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBR3RFLDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYiwwQkFBaUI7Ozs7SUFJakIsY0FBVyxFQUFFLGVBQVksRUFBRSxNQUFHOzs7Ozs7OztBQVVoQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBcUUvQixZQUFvQixZQUFtQztRQUFuQyxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUEvRHZELHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyw4QkFBeUIsR0FBYSxFQUFFLENBQUM7UUFDekMsaUNBQTRCLEdBQWEsRUFBRSxDQUFDO1FBQzVDLCtCQUEwQixHQUFhLEVBQUUsQ0FBQztRQUkxQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFFdEMsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDaEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDckIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDL0IscUJBQWdCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsbUJBQWMsR0FBMkIsSUFBSSxDQUFDO1FBQzlDLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQU9sQixTQUFJLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFDbEUsVUFBSyxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ25FLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQzs7OztRQUtwRSxXQUFNLEdBQW9CLElBQUksWUFBWSxFQUFLLENBQUM7UUFDaEQsZUFBVSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ2hFLGlCQUFZLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ2xGLGFBQVEsR0FBd0MsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFDM0YsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUtoQyxTQUFJLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQ3pFLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsaUJBQVksR0FBaUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM1RCxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdEQsZ0JBQVcsR0FBb0IsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUN0RCxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNyQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7Ozs7UUFPbkIsY0FBUyxHQUFXLEdBQUcsQ0FBQzs7OztRQUt4QixjQUFTLEdBQVcsR0FBRyxDQUFDO0lBRzBCLENBQUM7Ozs7SUFFNUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFNBQVM7Ozs7UUFDeEMsQ0FBQyxJQUFpQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDLEVBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQThDLEVBQUUsRUFBRTtZQUN6RixJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7O2dCQUFDLENBQUMsTUFBb0IsRUFBRSxHQUFXLEVBQUUsRUFBRTtvQkFDOUQsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7d0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3FCQUM5RjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQy9CLENBQUMsS0FBVyxFQUFFLEVBQUU7O2tCQUNSLE1BQU0sR0FBaUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBQztZQUNqRyxNQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsNkJBQTZCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoSCxDQUFDLEVBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsU0FBUzs7OztRQUMzQyxDQUFDLElBQWEsRUFBRSxFQUFFO1lBQ2hCLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDckM7UUFFSCxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7OztJQUVELElBQ0ksUUFBUSxDQUFDLENBQVU7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksMkJBQTJCLEVBQUssQ0FBQztRQUN4RSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUN4QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7YUFBTTtZQUNMLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsSUFDSSxtQkFBbUIsQ0FBQyxtQkFBd0M7UUFDOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxtQkFBbUIsQ0FBQztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUQsSUFBSSxtQkFBbUIsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7O3NCQUNoQixXQUFXLEdBQVcsbUJBQW1CLENBQUMsTUFBTTs7b0JBQ2xELGFBQWEsR0FBVyxDQUFDOztvQkFDekIsY0FBYyxHQUFZLEtBQUs7Z0JBQ25DLG1CQUFtQixDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7b0JBQ25ELElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7d0JBQ3JCLGFBQWEsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO3FCQUNuQztvQkFDRCxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLEVBQUU7d0JBQ3ZELGNBQWMsR0FBRyxJQUFJLENBQUM7cUJBQ3ZCO2dCQUNILENBQUMsRUFBQyxDQUFDOztzQkFDRyxZQUFZLEdBQVksV0FBVyxLQUFLLGFBQWE7Z0JBQzNELElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ25CLG1CQUFtQixDQUFDLElBQUksQ0FBQzt3QkFDdkIsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLEtBQUssRUFBRSxFQUFFO3dCQUNULFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUzt3QkFDdkMsT0FBTyxFQUFFLElBQUk7cUJBQ2QsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7WUFFRCxtQkFBbUIsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7Z0JBQ25ELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3pDO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDO2lCQUNsRDtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDaEM7U0FDRjtRQUNELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7O0lBSUQsSUFDSSxVQUFVLENBQUMsVUFBb0I7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FBRTtJQUNqRCxDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFDSSxnQkFBZ0IsQ0FBQyxhQUFxQjtRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFGO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7O2NBQ2pCLFVBQVUsR0FBc0IsS0FBSyxFQUFjOztZQUNyRCxTQUFTLEdBQVksS0FBSzs7WUFDMUIsV0FBOEI7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7WUFDakQsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUN6SCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFTLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ2pIO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdkQsU0FBUyxHQUFHLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQzVDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7Ozs7WUFBQyxDQUFDLENBQUksRUFBRSxDQUFJLEVBQUUsRUFBRTs7b0JBQzFDLE1BQU0sR0FBVyxDQUFDO2dCQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7b0JBQ2pELElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTt3QkFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUM3QjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxHQUFNLEVBQUUsRUFBRTtZQUM5QixJQUFJLFNBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQUEsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xILElBQUksV0FBVyxFQUFFO29CQUNmLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztpQkFDdkU7Z0JBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RCxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQWEsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvRDtZQUNELElBQUksU0FBUyxFQUFFO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQUU7WUFDeEQsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtCQUFrQixDQUFhLFVBQVUsQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN0RixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFGO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGFBQWEsQ0FBQyxRQUEyQixFQUFFLEdBQU07UUFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUNoRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUNsQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLG1CQUFBLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQy9GO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBQSxJQUFJLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBVSxDQUFDLENBQUM7b0JBQ2hGLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDekI7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLE9BQU8sQ0FBQyxDQUFJLEVBQUUsQ0FBSTs7WUFDcEIsRUFBRSxHQUFXLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7WUFDakQsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxtQkFBQSxJQUFJLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBVSxDQUFDLEVBQUU7b0JBQ25ILEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDVDtxQkFBTSxJQUFJLENBQUMsbUJBQUEsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQVUsQ0FBQyxHQUFHLENBQUMsbUJBQUEsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQVUsQ0FBQyxFQUFFO29CQUMxSCxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNSO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxHQUFNOztZQUNwQixNQUFNLEdBQVcsRUFBRTtRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTtZQUNqRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ3pGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBYSxFQUFFLElBQWdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVELEtBQUssQ0FBQyxLQUFhLEVBQUUsSUFBZ0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWEsRUFBRSxJQUFnQjtRQUMzQyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLFlBQVksQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksRUFBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxNQUFvQixFQUFFLElBQWdCO1FBQ2xELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQUU7UUFDNUQsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FBRTtRQUNoRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUFFO1FBQ2xGLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxHQUFNLEVBQUUsTUFBb0I7UUFDbkMsT0FBTyxtQkFBQSxJQUFJLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBSyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxHQUFNLEVBQUUsTUFBb0I7UUFDMUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLE9BQU8sbUJBQUEsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQVUsQ0FBQztTQUMvRDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQWUsRUFBRSxNQUFlO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsbUJBQUEsR0FBRyxDQUFDLElBQUksRUFBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2pILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQVk7O2NBQ2IsT0FBTyxHQUFtQixtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFrQjs7WUFDMUQsU0FBa0I7UUFFdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdkMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUU7WUFDbEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBRUgsQ0FBQzs7Ozs7SUFFTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sRUFBRTtZQUM1RixJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pELElBQUksRUFBRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNuRixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxJQUFTO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUssQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBbUIsRUFBRSxNQUFvQjtRQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLEdBQWUsRUFBRSxNQUFvQjtRQUNsRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtnQkFDOUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUk7b0JBQ2hELENBQUMsbUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQWMsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUMxRCxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxHQUFNLEVBQUUsTUFBb0I7O2NBQ25DLFdBQVcsR0FBa0IsSUFBSSxLQUFLLEVBQVU7UUFDdEQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O2tCQUNuQixLQUFLLEdBQXdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFzQixFQUFFLEVBQUU7Z0JBQ3ZGLE9BQU8sQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuRCxDQUFDLEVBQUM7WUFDRixJQUFJLEtBQUssRUFBRTtnQkFDVCxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNuQztTQUNGO1FBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQ3RCLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsR0FBTTs7Y0FDWixVQUFVLEdBQWtCLElBQUksS0FBSyxFQUFVO1FBQ3JELElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hELFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDckI7UUFDRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTs7a0JBQzVCLEtBQUssR0FBdUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQXFCLEVBQUUsRUFBRTtnQkFDOUYsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxDQUFDLEVBQUM7WUFDRixJQUFJLEtBQUssRUFBRTtnQkFDVCxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqQztTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBaUI7UUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLEVBQUU7O2tCQUMzQyxRQUFRLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztrQkFDaEQsS0FBSyxHQUFpQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUk7O2tCQUM5QyxPQUFPLEdBQVEsSUFBSSxDQUFDLE9BQU87WUFDakMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekQsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFvQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTs7Z0JBQ3JCLFlBQVksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxHQUFlLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFBQzs7Z0JBQ3RHLFlBQVksR0FBVyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFdBQVcsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7OztnQkFBQyxDQUFDLEdBQWUsRUFBRSxLQUFhLEVBQUUsRUFBRTtvQkFDeEQsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFLElBQUksS0FBSyxHQUFHLFlBQVksSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxHQUFHLEVBQUU7d0JBQy9FLFlBQVksR0FBRyxLQUFLLENBQUM7cUJBQ3RCO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO2dCQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTzs7Ozs7Z0JBQUMsQ0FBQyxHQUFlLEVBQUUsS0FBYSxFQUFFLEVBQUU7b0JBQ2xFLElBQUksWUFBWSxLQUFLLENBQUMsRUFBRSxJQUFJLEtBQUssR0FBRyxZQUFZLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFFO3dCQUMvRSxZQUFZLEdBQUcsS0FBSyxDQUFDO3FCQUN0QjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFLEVBQUU7b0JBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxHQUFHLENBQUMsQ0FBQztpQkFDekQ7YUFDRjtZQUNELElBQUksWUFBWSxLQUFLLENBQUMsRUFBRSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN4QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxjQUFpQjtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsaUJBQWlCOztjQUNULENBQUMsR0FBYSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ2hGLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDbkQsT0FBTyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLEVBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUM7UUFDekMsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUUsQ0FDdkQsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFDN0MsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxHQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLEVBQUU7O2tCQUMzQyxRQUFRLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3RELElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQzs7O3NCQUUzQixLQUFLLEdBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFDekQsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQztZQUNELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBaUI7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFhOztZQUMzQixTQUFTLEdBQVcsQ0FBQzs7WUFDckIsU0FBUyxHQUFnQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWE7UUFDOUQsT0FBTyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoRCxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUNoQyxTQUFTLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQztTQUNyQzs7WUFDRyxRQUFRLEdBQVcsQ0FBQyxDQUFDOztjQUNuQixJQUFJLEdBQW1CLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO1FBQ3BGLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDdEMsR0FBRyxHQUFnQixDQUFDLG1CQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBZSxDQUFDO1lBQ2pELElBQUksS0FBSyxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtnQkFDbkYsUUFBUSxHQUFHLENBQUMsQ0FBQzthQUNkO1NBQ0Y7UUFDRCxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQUU7UUFDbkMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7OztZQWhpQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwwZ0tBQTRDOzthQUU3Qzs7OztZQXBCUSxrQkFBa0I7OztzQkE2Q3hCLFNBQVMsU0FBQyxPQUFPO3VCQUNqQixTQUFTLFNBQUMsUUFBUTs4QkFDbEIsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7NkJBQ3hDLFNBQVMsU0FBQyxnQkFBZ0I7bUJBRTFCLE1BQU07b0JBQ04sTUFBTTtxQkFDTixNQUFNO3FCQUtOLE1BQU07eUJBQ04sTUFBTTsyQkFDTixNQUFNO3VCQUNOLE1BQU07d0JBQ04sS0FBSzs4QkFDTCxLQUFLO29CQUNMLEtBQUs7K0JBQ0wsS0FBSzt3Q0FDTCxLQUFLOzRCQUNMLEtBQUs7bUJBQ0wsTUFBTTt3QkFDTixLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsTUFBTTswQkFDTixNQUFNOzRCQUNOLEtBQUs7MEJBQ0wsS0FBSzt3QkFTTCxLQUFLO3dCQUtMLEtBQUs7dUJBOENMLEtBQUs7a0NBV0wsS0FBSzt5QkFvREwsS0FBSzsrQkFXTCxLQUFLOzs7Ozs7O0lBeExOLDJEQUFvRTs7SUFDcEUseUNBQXlCOztJQUN6Qix1Q0FBa0I7O0lBQ2xCLG9DQUFxQzs7SUFDckMsZ0RBQWdDOztJQUNoQyx5REFBeUM7O0lBQ3pDLDREQUE0Qzs7SUFDNUMsMERBQTBDOztJQUMxQyw0Q0FBa0M7O0lBQ2xDLDhDQUFrQjs7SUFDbEIsMENBQW1COztJQUNuQixvQ0FBOEM7O0lBQzlDLDhDQUF1Qjs7Ozs7SUFDdkIsMkNBQWdDOztJQUNoQywyQ0FBNkI7Ozs7O0lBQzdCLGlEQUF1Qzs7Ozs7SUFDdkMsZ0RBQXNDOzs7OztJQUN0Qyw4Q0FBc0Q7Ozs7O0lBQ3RELDJDQUFtQzs7Ozs7SUFDbkMsdUNBQTRCOzs7OztJQUM1Qix1Q0FBNEI7O0lBRTVCLHVDQUFxQzs7SUFDckMsd0NBQTJDOztJQUMzQywrQ0FBdUU7O0lBQ3ZFLDhDQUF3RDs7SUFFeEQsb0NBQTRFOztJQUM1RSxxQ0FBNkU7O0lBQzdFLHNDQUE4RTs7Ozs7SUFLOUUsc0NBQTBEOztJQUMxRCwwQ0FBMEU7O0lBQzFFLDRDQUE0Rjs7SUFDNUYsd0NBQW9HOztJQUNwRyx5Q0FBbUM7O0lBQ25DLCtDQUEwQzs7SUFDMUMscUNBQXVCOztJQUN2QixnREFBc0Q7O0lBQ3RELHlEQUE4RDs7SUFDOUQsNkNBQWdDOztJQUNoQyxvQ0FBa0Y7O0lBQ2xGLHlDQUFvQzs7SUFDcEMsNENBQXNFOztJQUN0RSxzQ0FBZ0U7O0lBQ2hFLDJDQUErRDs7SUFDL0QsNkNBQXdDOztJQUN4QywyQ0FBcUM7O0lBQ3JDLDBDQUE0Qjs7SUFDNUIsMENBQTRCOzs7OztJQU81Qix5Q0FBaUM7Ozs7O0lBS2pDLHlDQUFpQzs7Ozs7SUFHckIsNENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNvcnQsIE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90eXBpbmdzL3NvcnQnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBZGRSb3dCdXR0b24sXHJcbiAgQ2VsbCxcclxuICBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZSxcclxuICBDb2x1bW5Db25maWcsXHJcbiAgQ29sdW1uQ29uZmlnVXRpbCxcclxuICBDb25maWdDZWxsU3R5bGVzLFxyXG4gIENvbmZpZ1Jvd1N0eWxlcyxcclxuICBEcm9wRWxlbWVudCxcclxuICBFdmVudENvbHVtbixcclxuICBFdmVudFNjb3BlLFxyXG4gIEV2ZW50U2VhcmNoLFxyXG4gIFJlcXVlc3RUYWJsZUhlbGlzYSxcclxuICBTZWxlY3RPYmplY3QsXHJcbiAgVGFibGVIZWxpc2FUeXBlLFxyXG4gIFRvdGFsR3JvdXAsXHJcbiAgVG90YWxUeXBlLFxyXG4gIENvbHVtblR5cGUsXHJcbiAgVG90YWxUYWJsZUhlbGlzYVxyXG59IGZyb20gJy4vdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRhYmxlSGVsaXNhU2VydmljZSwgVGFibGVIZWxpc2FTZXJ2aWNlSW5mbyB9IGZyb20gJy4vdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWhlbGlzYS1jb25uZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm93RGF0YTxUPiB7XHJcbiAgZGF0YToge30gfCBUO1xyXG4gIHJvd1R5cGU6IFJvd1R5cGU7XHJcbn1cclxuXHJcbmVudW0gUm93VHlwZSB7XHJcbiAgR1JPVVBfVElUTEUsIEdST1VQX0ZPT1RFUiwgUk9XXHJcbn1cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgdGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50OiBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD47XHJcbiAgdG90YWxEYXRhOiBBcnJheTxudW1iZXI+O1xyXG4gIHJhd0RhdGE6IEFycmF5PFQ+O1xyXG4gIGRhdGE6IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPFQ+PjtcclxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGU6IHN0cmluZ1tdID0gW107XHJcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZTogc3RyaW5nW10gPSBbXTtcclxuICBkaXNwbGF5ZWRDb2x1bW5zV2l0aEZvb3Rlcjogc3RyaW5nW10gPSBbXTtcclxuICBjb2x1bW5Db25maWc6IEFycmF5PENvbHVtbkNvbmZpZz47XHJcbiAgc2VsZWN0ZWRPYmplY3Q6IFQ7XHJcbiAgbGFzdFNlYXJjaDogc3RyaW5nO1xyXG4gIHR5cGU6IFRhYmxlSGVsaXNhVHlwZSA9IFRhYmxlSGVsaXNhVHlwZS5MT0NBTDtcclxuICBpbmRleFJvd1NlbGVjdDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc2Nyb2xsQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgaGFzU3VidGl0bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGluZGV4Um93U3RhcnREcmFnOiBudW1iZXIgPSAtMTtcclxuICBwcml2YXRlIGxhc3RJbmRleFJvd0RyYWc6IG51bWJlciA9IC0xO1xyXG4gIHByaXZhdGUgZGF0YUJlZm9yZURyYWc6IHsgZGF0YTogUm93RGF0YTxUPltdIH0gPSBudWxsO1xyXG4gIHByaXZhdGUgZGF0YVNvdXJjZSQ6IEFycmF5PFQ+ID0gW107XHJcbiAgcHJpdmF0ZSBzY3JvbGxYOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgc2Nyb2xsWTogbnVtYmVyID0gMDtcclxuXHJcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBtYXRTb3J0OiBNYXRTb3J0O1xyXG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUpIG1hdFRhYmxlOiBNYXRUYWJsZTxUPjtcclxuICBAVmlld0NoaWxkKE1hdFRhYmxlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgbWF0VGFibGVFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lclRhYmxlJykgY29udGFpbmVyVGFibGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcclxuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xyXG4gIEBPdXRwdXQoKSBzZWFyY2g6IEV2ZW50RW1pdHRlcjxFdmVudFNlYXJjaD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPigpO1xyXG5cclxuICAvKipcclxuICAgKiBEZXByZWNhZG8sIGNhbWJpYXIgcG9yIGVsZWN0T2JqZWN0XHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RDZWxsOiBFdmVudEVtaXR0ZXI8Q2VsbDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENlbGw8VD4+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdE9iamVjdDogRXZlbnRFbWl0dGVyPFNlbGVjdE9iamVjdDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdE9iamVjdDxUPj4oKTtcclxuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E8VD4+KCk7XHJcbiAgQElucHV0KCkgc2hvd1RpdGxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBpc0NlbGxTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvbmZpZ0NlbGxTdHlsZXM6IEFycmF5PENvbmZpZ0NlbGxTdHlsZXM8VD4+O1xyXG4gIEBJbnB1dCgpIGNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW46IEFycmF5PENvbmZpZ1Jvd1N0eWxlczxUPj47XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRDZWxsczogQ2VsbDxUPjtcclxuICBAT3V0cHV0KCkgZHJvcDogRXZlbnRFbWl0dGVyPERyb3BFbGVtZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+KCk7XHJcbiAgQElucHV0KCkgaXNEcmFnZ2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWRkUm93QnV0dG9uOiBBZGRSb3dCdXR0b24gPSB7IHNob3dCdXR0b246IGZhbHNlLCB0ZXh0OiAnJyB9O1xyXG4gIEBPdXRwdXQoKSBhZGRSb3c6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgYm9va0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBASW5wdXQoKSBhZGRCb29rQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1Rvb2xUaXA6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHNob3dGb290ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93U2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogVGllbXBvIGFudGVzIGRlIG9jdWx0YXJsYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXHJcbiAgICovXHJcbiAgQElucHV0KCkgaGlkZURlbGF5OiBudW1iZXIgPSA2MDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRpZW1wbyBhbnRlcyBkZSBtb3N0cmEgZWwgbWVuc2FqZSBkZWwgdG9vbHRpcFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dEZWxheTogbnVtYmVyID0gNTAwO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlSGVsaXNhU2VydmljZTxUPikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJsZVNlcnZpY2UubmV4dFBhZ2VSZXR1cm4uc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YTogVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+KSA9PiB7XHJcbiAgICAgICAgaWYgKCFkYXRhLnRhYmxlIHx8IGRhdGEudGFibGUpIHtcclxuICAgICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5vYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMudGFibGVTZXJ2aWNlLnRvdGFsUmV0dXJuLnN1YnNjcmliZSgoaW5mbzogVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUb3RhbFRhYmxlSGVsaXNhPikgPT4ge1xyXG4gICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgaWYgKGNvbHVtbiA9PT0gaW5mby5vYmouY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxEYXRhW2lkeF0gPSB0aGlzLmdldEdyb3VwVmFsdWUoY29sdW1uLCB7IHN1bTogaW5mby5vYmoudmFsdWUsIGNvdW50OiB0aGlzLmNvdW50IH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWF0U29ydC5zb3J0Q2hhbmdlLnN1YnNjcmliZShcclxuICAgICAgKGV2ZW50OiBTb3J0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uOiBDb2x1bW5Db25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZy5maW5kKChjOiBDb2x1bW5Db25maWcpID0+IGMubmFtZSA9PT0gZXZlbnQuYWN0aXZlKTtcclxuICAgICAgICBjb2x1bW4uc29ydERpcmVjdGlvbiA9IGV2ZW50LmRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLnNvcnQuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5TT1JUIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMudGFibGVTZXJ2aWNlLmVtaXRWaXNpYmxlQnV0dG9uLnN1YnNjcmliZShcclxuICAgICAgKGRhdGE6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLm1hdFRhYmxlLnJlbmRlclJvd3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlzUmVtb3RlKHc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHlwZSA9IHcgPyBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFIDogVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xyXG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgPSBuZXcgVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+KCk7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFKSB7XHJcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY29sdW1uQ29uZmlndXJhdGlvbihjb2x1bW5Db25maWd1cmF0aW9uOiBBcnJheTxDb2x1bW5Db25maWc+KSB7XHJcbiAgICB0aGlzLmhhc1N1YnRpdGxlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZyA9IGNvbHVtbkNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpO1xyXG5cclxuICAgIGlmIChjb2x1bW5Db25maWd1cmF0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLmFkZEJvb2tCdXR0b24pIHtcclxuICAgICAgICBjb25zdCBjb2x1bW5Db3VudDogbnVtYmVyID0gY29sdW1uQ29uZmlndXJhdGlvbi5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGNvdW50U3VidGl0bGU6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHNob3dCb29rQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgY29sdW1uQ29uZmlndXJhdGlvbi5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgaWYgKCEhY29sdW1uLnN1YnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGNvdW50U3VidGl0bGUgPSBjb3VudFN1YnRpdGxlICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICgoIXNob3dCb29rQnV0dG9uKSAmJiAoY29sdW1uLm5hbWUgPT09ICdib29rQnV0dG9uJykpIHtcclxuICAgICAgICAgICAgc2hvd0Jvb2tCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHN1YnRpdGxlVGVtcDogYm9vbGVhbiA9IGNvbHVtbkNvdW50ID09PSBjb3VudFN1YnRpdGxlO1xyXG4gICAgICAgIGlmICghc2hvd0Jvb2tCdXR0b24pIHtcclxuICAgICAgICAgIGNvbHVtbkNvbmZpZ3VyYXRpb24ucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdib29rQnV0dG9uJyxcclxuICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBzdWJ0aXRsZTogc3VidGl0bGVUZW1wID8gJycgOiB1bmRlZmluZWQgLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbHVtbkNvbmZpZ3VyYXRpb24uZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcclxuICAgICAgICBpZiAoY29sdW1uLnZpc2libGUpIHtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5wdXNoKGNvbHVtbi5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc1N1YnRpdGxlKSB7XHJcbiAgICAgICAgICB0aGlzLmhhc1N1YnRpdGxlID0gY29sdW1uLnN1YnRpdGxlICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMucmF3RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUubGVuZ3RoKTtcclxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZS5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLmxlbmd0aCk7XHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLmxlbmd0aCk7XHJcbiAgICB0aGlzLmdldENvbHVtbnNXaXRoVGl0bGUoKS5mb3JFYWNoKChjb2w6IHN0cmluZykgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLnB1c2goY29sKSk7XHJcbiAgICB0aGlzLmdldEhlYWRlclN1YnRpdGxlKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZS5wdXNoKGNvbCkpO1xyXG4gICAgdGhpcy5mb290ZXJEaXNwbGF5ZWRDb2x1bW5zKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIucHVzaChjb2wpKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBBcnJheTxUPikge1xyXG4gICAgdGhpcy5kYXRhU291cmNlJCA9IGRhdGFTb3VyY2U7XHJcbiAgICB0aGlzLnJhd0RhdGEgPSBkYXRhU291cmNlO1xyXG4gICAgaWYgKHRoaXMucmF3RGF0YSkgeyB0aGlzLnByZXBhcmVEYXRhU291cmNlKCk7IH1cclxuICB9XHJcblxyXG4gIGdldCBkYXRhU291cmNlKCk6IEFycmF5PFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRJbmRleFJvdyhpZFJvd1NlbGVjdGVkOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSBpZFJvd1NlbGVjdGVkO1xyXG4gICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoKSB7XHJcbiAgICAgIGlmICgoaWRSb3dTZWxlY3RlZCA+PSB0aGlzLnJhd0RhdGEubGVuZ3RoIHx8IGlkUm93U2VsZWN0ZWQgPCAwKSkge1xyXG4gICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0Um93KHsgZGF0YTogdGhpcy5yYXdEYXRhW3RoaXMuaW5kZXhSb3dTZWxlY3RdLCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVEYXRhU291cmNlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2hhbmdlRGF0YTogQXJyYXk8Um93RGF0YTxUPj4gPSBBcnJheTxSb3dEYXRhPFQ+PigpO1xyXG4gICAgbGV0IGhhdmVHcm91cDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbGV0IGdyb3VwRm9vdGVyOiBBcnJheTxUb3RhbEdyb3VwPjtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQgJiYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMIHx8IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LnBhZ2UgPD0gMSkpIHtcclxuICAgICAgICB0aGlzLnRvdGFsRGF0YSA9IG5ldyBBcnJheTxudW1iZXI+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9vdGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRvdGFsLmVtaXQoeyBjb2x1bW4sIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZywgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUuVE9UQUwgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93U2VhcmNoID0gdGhpcy5zaG93U2VhcmNoIHx8IGNvbHVtbi5zZWFyY2hhYmxlO1xyXG4gICAgICBoYXZlR3JvdXAgPSBoYXZlR3JvdXAgfHwgY29sdW1uLmdyb3VwYWJsZTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGhhdmVHcm91cCkge1xyXG4gICAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuc29ydCgoYTogVCwgYjogVCkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jb21wYXJlKGEsIGIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yYXdEYXRhLmZvckVhY2goKHJvdzogVCkgPT4ge1xyXG4gICAgICBpZiAoaGF2ZUdyb3VwICYmIChjaGFuZ2VEYXRhLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNvbXBhcmUoY2hhbmdlRGF0YVtjaGFuZ2VEYXRhLmxlbmd0aCAtIDFdLmRhdGEgYXMgVCwgcm93KSAhPT0gMCkpIHtcclxuICAgICAgICBpZiAoZ3JvdXBGb290ZXIpIHtcclxuICAgICAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IGdyb3VwRm9vdGVyLCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX0ZPT1RFUiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX1RJVExFIH0pO1xyXG4gICAgICAgIGdyb3VwRm9vdGVyID0gbmV3IEFycmF5PFRvdGFsR3JvdXA+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhhdmVHcm91cCkgeyB0aGlzLmFkZFRvdGFsR3JvdXAoZ3JvdXBGb290ZXIsIHJvdyk7IH1cclxuICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPFQ+PihjaGFuZ2VEYXRhKTtcclxuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCAmJiB0aGlzLmluZGV4Um93U2VsZWN0ICYmICF0aGlzLnNlbGVjdGVkT2JqZWN0KSB7XHJcbiAgICAgIGlmICh0aGlzLmluZGV4Um93U2VsZWN0ID49IHRoaXMucmF3RGF0YS5sZW5ndGggfHwgdGhpcy5pbmRleFJvd1NlbGVjdCA8IDApIHtcclxuICAgICAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdFJvdyh7IGRhdGE6IHRoaXMucmF3RGF0YVt0aGlzLmluZGV4Um93U2VsZWN0XSwgcm93VHlwZTogUm93VHlwZS5ST1cgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUb3RhbEdyb3VwKHJvd1RvdGFsOiBBcnJheTxUb3RhbEdyb3VwPiwgcm93OiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHJvd1RvdGFsW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0gPSB7IHN1bTogKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUocm93LCBjb2x1bW4pIGFzIG51bWJlciksIGNvdW50OiAxIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5zdW0gKz0gKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUocm93LCBjb2x1bW4pIGFzIG51bWJlcik7XHJcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0uY291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXIge1xyXG4gICAgbGV0IHdzOiBudW1iZXIgPSAwO1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcclxuICAgICAgaWYgKHdzID09PSAwICYmIGNvbHVtbi5ncm91cGFibGUpIHtcclxuICAgICAgICBpZiAoKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYSwgY29sdW1uKSBhcyBudW1iZXIpIDwgKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYiwgY29sdW1uKSBhcyBudW1iZXIpKSB7XHJcbiAgICAgICAgICB3cyA9IC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYSwgY29sdW1uKSBhcyBudW1iZXIpID4gKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYiwgY29sdW1uKSBhcyBudW1iZXIpKSB7XHJcbiAgICAgICAgICB3cyA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB3cztcclxuICB9XHJcblxyXG4gIGdldEdyb3VwRGVzY3JpcHRpb24ob2JqOiBUKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi5ncm91cGFibGUpIHtcclxuICAgICAgICByZXN1bHQgKz0gKHJlc3VsdC5sZW5ndGggPyAnIC0gJyA6ICcnKSArIChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzR3JvdXBUaXRsZShpbmRleDogbnVtYmVyLCBpdGVtOiBSb3dEYXRhPFQ+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLkdST1VQX1RJVExFO1xyXG4gIH1cclxuXHJcbiAgaXNSb3coaW5kZXg6IG51bWJlciwgaXRlbTogUm93RGF0YTxUPik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5ST1c7XHJcbiAgfVxyXG5cclxuICBpc0dyb3VwRm9vdGVyKGluZGV4OiBudW1iZXIsIGl0ZW06IFJvd0RhdGE8VD4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfRk9PVEVSO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZENvbHVtbnMubWFwKChuYW1lOiBzdHJpbmcpID0+ICdmb290ZXItJyArIG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0R3JvdXBWYWx1ZShjb2x1bW46IENvbHVtbkNvbmZpZywgZGF0YTogVG90YWxHcm91cCk6IG51bWJlciB7XHJcbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLlNVTSkgeyByZXR1cm4gZGF0YS5zdW07IH1cclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuQ09VTlQpIHsgcmV0dXJuIGRhdGEuY291bnQ7IH1cclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuQVZFUkFHRSkgeyByZXR1cm4gMS4gKiBkYXRhLnN1bSAvIGRhdGEuY291bnQ7IH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZShvYmo6IFQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogVCB7XHJcbiAgICByZXR1cm4gbmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShvYmosIGNvbHVtbikgYXMgVDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlVG9vbHRpcChvYmo6IFQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLnNob3dUb29sVGlwKSB7XHJcbiAgICAgIHJldHVybiBuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSBhcyBzdHJpbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaFRleHQodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxhc3RTZWFyY2ggPSB0ZXh0O1xyXG4gICAgdGhpcy5zZWFyY2guZW1pdCh7IHRleHQsIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZyB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhyb3c6IFJvd0RhdGE8VD4sIGlzVXNlcjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHJvdy5kYXRhIGFzIFQ7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xyXG4gICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkT2JqZWN0LCBzY29wZTogaXNVc2VyID8gRXZlbnRTY29wZS5VU0VSIDogRXZlbnRTY29wZS5DT0RFX0NBTEwgfSk7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbGV0IGlzU2Nyb2xsWTogYm9vbGVhbjtcclxuXHJcbiAgICBpZiAodGhpcy5zY3JvbGxZICE9PSBlbGVtZW50LnNjcm9sbFRvcCkge1xyXG4gICAgICBpc1Njcm9sbFkgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNjcm9sbFkgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgdGhpcy5zY3JvbGxYID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNjcm9sbFggIT09IGVsZW1lbnQuc2Nyb2xsTGVmdCkge1xyXG4gICAgICBpc1Njcm9sbFkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zY3JvbGxZID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgIHRoaXMuc2Nyb2xsWCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxUb3AgPCAxMDAwKSAmJiBpc1Njcm9sbFkpIHtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb05leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlICYmICF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQpIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5uZXh0UGFnZS5lbWl0KHtcclxuICAgICAgICBwYWdlOiB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5uZXh0UGFnZSgpLFxyXG4gICAgICAgIGJvZHk6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmdldEJvZHkodGhpcy5jb2x1bW5Db25maWcsIHRoaXMubGFzdFNlYXJjaClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlY2VpdmVQYWdlKGRhdGE6IFRbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnJhd0RhdGEpIHtcclxuICAgICAgdGhpcy5yYXdEYXRhID0gbmV3IEFycmF5PFQ+KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuY29uY2F0KGRhdGEpO1xyXG4gICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5yYXdEYXRhO1xyXG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNMYXN0UGFnZSA9IGRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkYmxDbGlja0NlbGwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdENlbGwuZW1pdCh0aGlzLnNlbGVjdGVkQ2VsbHMgYXMgQ2VsbDxUPik7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZENlbGwoZWxlbWVudDogUm93RGF0YTxUPiwgY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDZWxscyA9IHsgY29sdW1uLCByb3c6IGVsZW1lbnQgfTtcclxuICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHRoaXMuc2VsZWN0ZWRDZWxscyk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkQ2VsbChyb3c6IFJvd0RhdGE8VD4sIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDZWxscyAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDZWxscy5jb2x1bW4ubmFtZSA9PT0gY29sdW1uLm5hbWUgJiZcclxuICAgICAgICAgICh0aGlzLnNlbGVjdGVkQ2VsbHMucm93IGFzIFJvd0RhdGE8VD4pLmRhdGEgPT09IHJvdy5kYXRhKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldENsYXNzVG9DZWxsKHJvdzogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBjbGFzc1RvQ2VsbDogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICBpZiAodGhpcy5jb25maWdDZWxsU3R5bGVzKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kOiBDb25maWdDZWxsU3R5bGVzPFQ+ID0gdGhpcy5jb25maWdDZWxsU3R5bGVzLmZpbmQoKGM6IENvbmZpZ0NlbGxTdHlsZXM8VD4pID0+IHtcclxuICAgICAgICByZXR1cm4gYy5jZWxsRGF0YSA9PT0gdGhpcy5nZXRWYWx1ZShyb3csIGNvbHVtbik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICBjbGFzc1RvQ2VsbC5wdXNoKGZvdW5kLmNsYXNzQ2VsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjb2x1bW4uY29sdW1uU3R5bGUpIHtcclxuICAgICAgY2xhc3NUb0NlbGwucHVzaChjb2x1bW4uY29sdW1uU3R5bGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzVG9DZWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NUb1Jvdyhyb3c6IFQpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBjbGFzc1RvUm93OiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIGlmIChyb3cgPT09IHRoaXMuc2VsZWN0ZWRPYmplY3QgJiYgIXRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XHJcbiAgICAgIGNsYXNzVG9Sb3cucHVzaCgnJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kOiBDb25maWdSb3dTdHlsZXM8VD4gPSB0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4uZmluZCgoYzogQ29uZmlnUm93U3R5bGVzPFQ+KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGMuZGF0YSA9PT0gdGhpcy5nZXRWYWx1ZShyb3csIGMuY29sdW1uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgIGNsYXNzVG9Sb3cucHVzaChmb3VuZC5jbGFzc1Jvdyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc1RvUm93O1xyXG4gIH1cclxuXHJcbiAgb25Ecm9wKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0RyYWdnZWQgJiYgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA+PSAwKSB7XHJcbiAgICAgIGNvbnN0IHJvd0luZGV4OiBudW1iZXIgPSB0aGlzLmdldFJvd0luZGV4KGV2ZW50LnBhZ2VZKTtcclxuICAgICAgY29uc3QgYXJyYXk6IFJvd0RhdGE8VD5bXSA9IHRoaXMuZGF0YUJlZm9yZURyYWcuZGF0YTtcclxuICAgICAgY29uc3QgcmF3RGF0YTogVFtdID0gdGhpcy5yYXdEYXRhO1xyXG4gICAgICBtb3ZlSXRlbUluQXJyYXkoYXJyYXksIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcclxuICAgICAgbW92ZUl0ZW1JbkFycmF5KHJhd0RhdGEsIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcclxuICAgICAgdGhpcy5kcm9wLmVtaXQoeyB2YWx1ZTogYXJyYXlbcm93SW5kZXhdLmRhdGEgYXMgVCwgb3JkZXI6IHJvd0luZGV4IH0pO1xyXG4gICAgICB0aGlzLnJhd0RhdGEgPSByYXdEYXRhO1xyXG4gICAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGFycmF5KTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0YWJsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcclxuICAgICAgbGV0IGN1cnJlbnRJbmRleDogbnVtYmVyID0gdGhpcy5kYXRhLmRhdGEuZmluZEluZGV4KChyb3c6IFJvd0RhdGE8VD4pID0+IHJvdy5kYXRhID09PSB0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgbGV0IG5ld1NlbGVjdGlvbjogbnVtYmVyID0gLTEwO1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQrKztcclxuICAgICAgICB0aGlzLmRhdGEuZGF0YS5mb3JFYWNoKChyb3c6IFJvd0RhdGE8VD4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xMCAmJiBpbmRleCA+IGN1cnJlbnRJbmRleCAmJiByb3cucm93VHlwZSA9PT0gUm93VHlwZS5ST1cpIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gaW5kZXg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudC0tO1xyXG4gICAgICAgIGN1cnJlbnRJbmRleCA9IHRoaXMuZGF0YS5kYXRhLmxlbmd0aCAtIGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEucmV2ZXJzZSgpLmZvckVhY2goKHJvdzogUm93RGF0YTxUPiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEwICYmIGluZGV4ID4gY3VycmVudEluZGV4ICYmIHJvdy5yb3dUeXBlID09PSBSb3dUeXBlLlJPVykge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBpbmRleDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCk7XHJcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiAhPT0gLTEwKSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBuZXdTZWxlY3Rpb24gLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3U2VsZWN0aW9uICE9PSAtMTApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLmRhdGEuZGF0YVtuZXdTZWxlY3Rpb25dLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoTWF0aC5hYnModGhpcy5zY3JvbGxDb3VudCkgPj0gMikge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQgPSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRlIGVsIGV2ZW50byBjdWFuZG8gc2UgZGEgY2xpY2sgYWwgYm90b24gQWRkUm93XHJcbiAgICovXHJcbiAgb25BZGRSb3coKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkZFJvdy5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbkJvb2tDbGlja2VkKHNlbGVjdGVkT2JqZWN0OiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmJvb2tDbGlja2VkLmVtaXQoc2VsZWN0ZWRPYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGVhZGVyU3VidGl0bGUoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgeDogc3RyaW5nW10gPSB0aGlzLmNvbHVtbkNvbmZpZy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4udmlzaWJsZSAmJiBjb2x1bW4uc3VidGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAnc3VidGl0bGUnICsgaW5kZXg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pLmZpbHRlcigoZGF0YTogc3RyaW5nKSA9PiBkYXRhICE9IG51bGwpO1xyXG4gICAgcmV0dXJuIHg7XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5zV2l0aFRpdGxlKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbkNvbmZpZy5maWx0ZXIoKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PlxyXG4gICAgICBjb2x1bW4udmlzaWJsZSAmJiBjb2x1bW4udGl0bGUgIT09IHVuZGVmaW5lZFxyXG4gICAgKS5tYXAoKGNvbDogQ29sdW1uQ29uZmlnKSA9PiBjb2wubmFtZSk7XHJcbiAgfVxyXG5cclxuICBkcmFnZ2VyKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5pc0RyYWdnZWQgJiYgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA+PSAwKSB7XHJcbiAgICAgIGNvbnN0IHJvd0luZGV4OiBudW1iZXIgPSB0aGlzLmdldFJvd0luZGV4KGV2ZW50LnBhZ2VZKTtcclxuICAgICAgaWYgKHJvd0luZGV4ICE9PSB0aGlzLmxhc3RJbmRleFJvd0RyYWcpIHtcclxuICAgICAgICB0aGlzLmxhc3RJbmRleFJvd0RyYWcgPSByb3dJbmRleDtcclxuICAgICAgICAvLyBUaGlzIGNhbiBoYXZlIGEgbWVtb3J5IHByb2JsZW0gd2l0aCBiaWcgZGF0YVxyXG4gICAgICAgIGNvbnN0IGFycmF5OiBSb3dEYXRhPFQ+W10gPSBbLi4udGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhXTtcclxuICAgICAgICBtb3ZlSXRlbUluQXJyYXkoYXJyYXksIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGFycmF5KTtcclxuICAgICAgfVxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0RHJhZyhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xyXG4gICAgdGhpcy5sYXN0SW5kZXhSb3dEcmFnID0gdGhpcy5pbmRleFJvd1N0YXJ0RHJhZztcclxuICAgIHRoaXMuZGF0YUJlZm9yZURyYWcgPSB0aGlzLmRhdGE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJvd0luZGV4KHBhZ2VZOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IG9mZnNldFRvcDogbnVtYmVyID0gMDtcclxuICAgIGxldCBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy5jb250YWluZXJUYWJsZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgd2hpbGUgKChjb250YWluZXIgIT09IG51bGwpICYmIChvZmZzZXRUb3AgPT09IDApKSB7XHJcbiAgICAgIG9mZnNldFRvcCA9IGNvbnRhaW5lci5vZmZzZXRUb3A7XHJcbiAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgbGV0IHJvd0luZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIGNvbnN0IHJvd3M6IEhUTUxDb2xsZWN0aW9uID0gdGhpcy5tYXRUYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlbjtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdzogSFRNTEVsZW1lbnQgPSAocm93c1tpXSBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgIGlmIChwYWdlWSAtIG9mZnNldFRvcCA+IHJvdy5vZmZzZXRUb3AgLSB0aGlzLmNvbnRhaW5lclRhYmxlLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgcm93SW5kZXggPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocm93SW5kZXggPCAwKSB7IHJvd0luZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHJvd0luZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbHVtblR5cGUoKTogdHlwZW9mIENvbHVtblR5cGUge1xyXG4gICAgcmV0dXJuIENvbHVtblR5cGU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=