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
     * @param {?=} column
     * @return {?}
     */
    selectRow(row, isUser, column) {
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
        this.selectRow(element, true, column);
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
                template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\n<div class=\"div-table-helisa\">\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\n\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\n          <ng-container *ngIf=\"column.title != undefined\">\n            <div *ngIf=\"!column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\n                {{column.title}} </th>\n            </div>\n            <div *ngIf=\"column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\n            </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton'\"> \n                  <th mat-header-cell *matHeaderCellDef ></th>\n                  <td mat-cell *matCellDef=\"let element;\" (click)=\"onBookClicked(selectedObject)\">\n                    <button mat-icon-button *ngIf=\"element.data === selectedObject\">\n                      <i class=\"material-icons-outlined\">description</i>\n                    </button>\n                  </td>\n          </ng-container>\n\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{ getValue(element.data, column) }}</a>\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\n        </ng-container>\n\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\n            {{column.subtitle}}</th>\n        </ng-container>\n      </ng-container>\n \n      <ng-container matColumnDef=\"groupHeader\">\n        <td mat-cell *matCellDef=\"let group\">\n          <strong>{{ getGroupDescription(group.data) }}</strong>\n        </td>\n      </ng-container>\n\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\n      </ng-container>\n\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\n          [ngClass]=\"getClassToRow(row.data)\" [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"!isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" \n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\n        </tr>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\n    </table>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRzFFLE9BQU8sRUFHTCw2QkFBNkIsRUFFN0IsZ0JBQWdCLEVBS2hCLFVBQVUsRUFJVixlQUFlLEVBRWYsU0FBUyxFQUNULFVBQVUsRUFFWCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBR3RFLDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYiwwQkFBaUI7Ozs7SUFJakIsY0FBVyxFQUFFLGVBQVksRUFBRSxNQUFHOzs7Ozs7OztBQVVoQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBcUUvQixZQUFvQixZQUFtQztRQUFuQyxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUEvRHZELHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyw4QkFBeUIsR0FBYSxFQUFFLENBQUM7UUFDekMsaUNBQTRCLEdBQWEsRUFBRSxDQUFDO1FBQzVDLCtCQUEwQixHQUFhLEVBQUUsQ0FBQztRQUkxQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFFdEMsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFD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RSwyQ0FBK0Q7O0lBQy9ELDZDQUF3Qzs7SUFDeEMsMkNBQXFDOztJQUNyQywwQ0FBNEI7O0lBQzVCLDBDQUE0Qjs7Ozs7SUFPNUIseUNBQWlDOzs7OztJQUtqQyx5Q0FBaUM7Ozs7O0lBR3JCLDRDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U29ydCwgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90eXBpbmdzL3NvcnQnO1xuXG5pbXBvcnQge1xuICBBZGRSb3dCdXR0b24sXG4gIENlbGwsXG4gIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLFxuICBDb2x1bW5Db25maWcsXG4gIENvbHVtbkNvbmZpZ1V0aWwsXG4gIENvbmZpZ0NlbGxTdHlsZXMsXG4gIENvbmZpZ1Jvd1N0eWxlcyxcbiAgRHJvcEVsZW1lbnQsXG4gIEV2ZW50Q29sdW1uLFxuICBFdmVudFNjb3BlLFxuICBFdmVudFNlYXJjaCxcbiAgUmVxdWVzdFRhYmxlSGVsaXNhLFxuICBTZWxlY3RPYmplY3QsXG4gIFRhYmxlSGVsaXNhVHlwZSxcbiAgVG90YWxHcm91cCxcbiAgVG90YWxUeXBlLFxuICBDb2x1bW5UeXBlLFxuICBUb3RhbFRhYmxlSGVsaXNhXG59IGZyb20gJy4vdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUYWJsZUhlbGlzYVNlcnZpY2UsIFRhYmxlSGVsaXNhU2VydmljZUluZm8gfSBmcm9tICcuL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtaGVsaXNhLWNvbm5lY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm93RGF0YTxUPiB7XG4gIGRhdGE6IHt9IHwgVDtcbiAgcm93VHlwZTogUm93VHlwZTtcbn1cblxuZW51bSBSb3dUeXBlIHtcbiAgR1JPVVBfVElUTEUsIEdST1VQX0ZPT1RFUiwgUk9XXG59XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIHByaXZhdGUgdGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50OiBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD47XG4gIHRvdGFsRGF0YTogQXJyYXk8bnVtYmVyPjtcbiAgcmF3RGF0YTogQXJyYXk8VD47XG4gIGRhdGE6IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPFQ+PjtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZTogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZTogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXI6IHN0cmluZ1tdID0gW107XG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcbiAgc2VsZWN0ZWRPYmplY3Q6IFQ7XG4gIGxhc3RTZWFyY2g6IHN0cmluZztcbiAgdHlwZTogVGFibGVIZWxpc2FUeXBlID0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xuICBpbmRleFJvd1NlbGVjdDogbnVtYmVyO1xuICBwcml2YXRlIHNjcm9sbENvdW50OiBudW1iZXIgPSAwO1xuICBoYXNTdWJ0aXRsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGluZGV4Um93U3RhcnREcmFnOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBsYXN0SW5kZXhSb3dEcmFnOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBkYXRhQmVmb3JlRHJhZzogeyBkYXRhOiBSb3dEYXRhPFQ+W10gfSA9IG51bGw7XG4gIHByaXZhdGUgZGF0YVNvdXJjZSQ6IEFycmF5PFQ+ID0gW107XG4gIHByaXZhdGUgc2Nyb2xsWDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBzY3JvbGxZOiBudW1iZXIgPSAwO1xuXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgbWF0U29ydDogTWF0U29ydDtcbiAgQFZpZXdDaGlsZChNYXRUYWJsZSkgbWF0VGFibGU6IE1hdFRhYmxlPFQ+O1xuICBAVmlld0NoaWxkKE1hdFRhYmxlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgbWF0VGFibGVFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjb250YWluZXJUYWJsZScpIGNvbnRhaW5lclRhYmxlOiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcbiAgQE91dHB1dCgpIHRvdGFsOiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+KCk7XG5cbiAgLyoqXG4gICAqIERlcHJlY2FkbywgY2FtYmlhciBwb3IgZWxlY3RPYmplY3RcbiAgICovXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdENlbGw6IEV2ZW50RW1pdHRlcjxDZWxsPFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbDxUPj4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdE9iamVjdDogRXZlbnRFbWl0dGVyPFNlbGVjdE9iamVjdDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdE9iamVjdDxUPj4oKTtcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8UmVxdWVzdFRhYmxlSGVsaXNhPFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmVxdWVzdFRhYmxlSGVsaXNhPFQ+PigpO1xuICBASW5wdXQoKSBzaG93VGl0bGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc0NlbGxTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgY29uZmlnQ2VsbFN0eWxlczogQXJyYXk8Q29uZmlnQ2VsbFN0eWxlczxUPj47XG4gIEBJbnB1dCgpIGNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW46IEFycmF5PENvbmZpZ1Jvd1N0eWxlczxUPj47XG4gIEBJbnB1dCgpIHNlbGVjdGVkQ2VsbHM6IENlbGw8VD47XG4gIEBPdXRwdXQoKSBkcm9wOiBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRWxlbWVudDxUPj4oKTtcbiAgQElucHV0KCkgaXNEcmFnZ2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFkZFJvd0J1dHRvbjogQWRkUm93QnV0dG9uID0geyBzaG93QnV0dG9uOiBmYWxzZSwgdGV4dDogJycgfTtcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgYm9va0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQElucHV0KCkgYWRkQm9va0J1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XG4gIHNob3dGb290ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG9jdWx0YXJsYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBzaG93RGVsYXk6IG51bWJlciA9IDUwMDtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8VD4pIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGFibGVTZXJ2aWNlLm5leHRQYWdlUmV0dXJuLnN1YnNjcmliZShcbiAgICAgIChkYXRhOiBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4pID0+IHtcbiAgICAgICAgaWYgKCFkYXRhLnRhYmxlIHx8IGRhdGEudGFibGUpIHtcbiAgICAgICAgICB0aGlzLnJlY2VpdmVQYWdlKGRhdGEub2JqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy50YWJsZVNlcnZpY2UudG90YWxSZXR1cm4uc3Vic2NyaWJlKChpbmZvOiBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRvdGFsVGFibGVIZWxpc2E+KSA9PiB7XG4gICAgICBpZiAoaW5mbykge1xuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAoY29sdW1uID09PSBpbmZvLm9iai5jb2x1bW4pIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxEYXRhW2lkeF0gPSB0aGlzLmdldEdyb3VwVmFsdWUoY29sdW1uLCB7IHN1bTogaW5mby5vYmoudmFsdWUsIGNvdW50OiB0aGlzLmNvdW50IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5tYXRTb3J0LnNvcnRDaGFuZ2Uuc3Vic2NyaWJlKFxuICAgICAgKGV2ZW50OiBTb3J0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbHVtbjogQ29sdW1uQ29uZmlnID0gdGhpcy5jb2x1bW5Db25maWcuZmluZCgoYzogQ29sdW1uQ29uZmlnKSA9PiBjLm5hbWUgPT09IGV2ZW50LmFjdGl2ZSk7XG4gICAgICAgIGNvbHVtbi5zb3J0RGlyZWN0aW9uID0gZXZlbnQuZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLnNvcnQuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5TT1JUIH0pO1xuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLnRhYmxlU2VydmljZS5lbWl0VmlzaWJsZUJ1dHRvbi5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYWRkUm93QnV0dG9uLnNob3dCdXR0b24gPSBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5tYXRUYWJsZS5yZW5kZXJSb3dzKCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGlzUmVtb3RlKHc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnR5cGUgPSB3ID8gVGFibGVIZWxpc2FUeXBlLlJFTU9URSA6IFRhYmxlSGVsaXNhVHlwZS5MT0NBTDtcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCA9IG5ldyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD4oKTtcbiAgICBpZiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFKSB7XG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSsrO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2x1bW5Db25maWd1cmF0aW9uKGNvbHVtbkNvbmZpZ3VyYXRpb246IEFycmF5PENvbHVtbkNvbmZpZz4pIHtcbiAgICB0aGlzLmhhc1N1YnRpdGxlID0gZmFsc2U7XG4gICAgdGhpcy5jb2x1bW5Db25maWcgPSBjb2x1bW5Db25maWd1cmF0aW9uO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCk7XG5cbiAgICBpZiAoY29sdW1uQ29uZmlndXJhdGlvbikge1xuICAgICAgaWYgKHRoaXMuYWRkQm9va0J1dHRvbikge1xuICAgICAgICBjb25zdCBjb2x1bW5Db3VudDogbnVtYmVyID0gY29sdW1uQ29uZmlndXJhdGlvbi5sZW5ndGg7XG4gICAgICAgIGxldCBjb3VudFN1YnRpdGxlOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgc2hvd0Jvb2tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgY29sdW1uQ29uZmlndXJhdGlvbi5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuICAgICAgICAgIGlmICghIWNvbHVtbi5zdWJ0aXRsZSkge1xuICAgICAgICAgICAgY291bnRTdWJ0aXRsZSA9IGNvdW50U3VidGl0bGUgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoKCFzaG93Qm9va0J1dHRvbikgJiYgKGNvbHVtbi5uYW1lID09PSAnYm9va0J1dHRvbicpKSB7XG4gICAgICAgICAgICBzaG93Qm9va0J1dHRvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc3VidGl0bGVUZW1wOiBib29sZWFuID0gY29sdW1uQ291bnQgPT09IGNvdW50U3VidGl0bGU7XG4gICAgICAgIGlmICghc2hvd0Jvb2tCdXR0b24pIHtcbiAgICAgICAgICBjb2x1bW5Db25maWd1cmF0aW9uLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJ2Jvb2tCdXR0b24nLFxuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgc3VidGl0bGU6IHN1YnRpdGxlVGVtcCA/ICcnIDogdW5kZWZpbmVkICxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb2x1bW5Db25maWd1cmF0aW9uLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4udmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5wdXNoKGNvbHVtbi5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaGFzU3VidGl0bGUpIHtcbiAgICAgICAgICB0aGlzLmhhc1N1YnRpdGxlID0gY29sdW1uLnN1YnRpdGxlICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMucmF3RGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZS5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLmxlbmd0aCk7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGUubGVuZ3RoKTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLmxlbmd0aCk7XG4gICAgdGhpcy5nZXRDb2x1bW5zV2l0aFRpdGxlKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZS5wdXNoKGNvbCkpO1xuICAgIHRoaXMuZ2V0SGVhZGVyU3VidGl0bGUoKS5mb3JFYWNoKChjb2w6IHN0cmluZykgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLnB1c2goY29sKSk7XG4gICAgdGhpcy5mb290ZXJEaXNwbGF5ZWRDb2x1bW5zKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIucHVzaChjb2wpKTtcbiAgfVxuXG5cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBBcnJheTxUPikge1xuICAgIHRoaXMuZGF0YVNvdXJjZSQgPSBkYXRhU291cmNlO1xuICAgIHRoaXMucmF3RGF0YSA9IGRhdGFTb3VyY2U7XG4gICAgaWYgKHRoaXMucmF3RGF0YSkgeyB0aGlzLnByZXBhcmVEYXRhU291cmNlKCk7IH1cbiAgfVxuXG4gIGdldCBkYXRhU291cmNlKCk6IEFycmF5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlJDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4Um93KGlkUm93U2VsZWN0ZWQ6IG51bWJlcikge1xuICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSBpZFJvd1NlbGVjdGVkO1xuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCkge1xuICAgICAgaWYgKChpZFJvd1NlbGVjdGVkID49IHRoaXMucmF3RGF0YS5sZW5ndGggfHwgaWRSb3dTZWxlY3RlZCA8IDApKSB7XG4gICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVEYXRhU291cmNlKCk6IHZvaWQge1xuICAgIGNvbnN0IGNoYW5nZURhdGE6IEFycmF5PFJvd0RhdGE8VD4+ID0gQXJyYXk8Um93RGF0YTxUPj4oKTtcbiAgICBsZXQgaGF2ZUdyb3VwOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGdyb3VwRm9vdGVyOiBBcnJheTxUb3RhbEdyb3VwPjtcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCAmJiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuTE9DQUwgfHwgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSA8PSAxKSkge1xuICAgICAgICB0aGlzLnRvdGFsRGF0YSA9IG5ldyBBcnJheTxudW1iZXI+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuc2hvd0Zvb3RlciA9IHRydWU7XG4gICAgICAgIHRoaXMudG90YWwuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5UT1RBTCB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvd1NlYXJjaCA9IHRoaXMuc2hvd1NlYXJjaCB8fCBjb2x1bW4uc2VhcmNoYWJsZTtcbiAgICAgIGhhdmVHcm91cCA9IGhhdmVHcm91cCB8fCBjb2x1bW4uZ3JvdXBhYmxlO1xuICAgIH0pO1xuICAgIGlmIChoYXZlR3JvdXApIHtcbiAgICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5zb3J0KChhOiBULCBiOiBUKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IDA7XG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jb21wYXJlKGEsIGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5yYXdEYXRhLmZvckVhY2goKHJvdzogVCkgPT4ge1xuICAgICAgaWYgKGhhdmVHcm91cCAmJiAoY2hhbmdlRGF0YS5sZW5ndGggPT09IDAgfHwgdGhpcy5jb21wYXJlKGNoYW5nZURhdGFbY2hhbmdlRGF0YS5sZW5ndGggLSAxXS5kYXRhIGFzIFQsIHJvdykgIT09IDApKSB7XG4gICAgICAgIGlmIChncm91cEZvb3Rlcikge1xuICAgICAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IGdyb3VwRm9vdGVyLCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX0ZPT1RFUiB9KTtcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuR1JPVVBfVElUTEUgfSk7XG4gICAgICAgIGdyb3VwRm9vdGVyID0gbmV3IEFycmF5PFRvdGFsR3JvdXA+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICBpZiAoaGF2ZUdyb3VwKSB7IHRoaXMuYWRkVG90YWxHcm91cChncm91cEZvb3Rlciwgcm93KTsgfVxuICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE8VD4+KGNoYW5nZURhdGEpO1xuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCAmJiB0aGlzLmluZGV4Um93U2VsZWN0ICYmICF0aGlzLnNlbGVjdGVkT2JqZWN0KSB7XG4gICAgICBpZiAodGhpcy5pbmRleFJvd1NlbGVjdCA+PSB0aGlzLnJhd0RhdGEubGVuZ3RoIHx8IHRoaXMuaW5kZXhSb3dTZWxlY3QgPCAwKSB7XG4gICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFRvdGFsR3JvdXAocm93VG90YWw6IEFycmF5PFRvdGFsR3JvdXA+LCByb3c6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocm93VG90YWxbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0gPSB7IHN1bTogKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUocm93LCBjb2x1bW4pIGFzIG51bWJlciksIGNvdW50OiAxIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLnN1bSArPSAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShyb3csIGNvbHVtbikgYXMgbnVtYmVyKTtcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0uY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXIge1xuICAgIGxldCB3czogbnVtYmVyID0gMDtcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuICAgICAgaWYgKHdzID09PSAwICYmIGNvbHVtbi5ncm91cGFibGUpIHtcbiAgICAgICAgaWYgKChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKGEsIGNvbHVtbikgYXMgbnVtYmVyKSA8IChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKGIsIGNvbHVtbikgYXMgbnVtYmVyKSkge1xuICAgICAgICAgIHdzID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYSwgY29sdW1uKSBhcyBudW1iZXIpID4gKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYiwgY29sdW1uKSBhcyBudW1iZXIpKSB7XG4gICAgICAgICAgd3MgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHdzO1xuICB9XG5cbiAgZ2V0R3JvdXBEZXNjcmlwdGlvbihvYmo6IFQpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9ICcnO1xuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICBpZiAoY29sdW1uLmdyb3VwYWJsZSkge1xuICAgICAgICByZXN1bHQgKz0gKHJlc3VsdC5sZW5ndGggPyAnIC0gJyA6ICcnKSArIChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlzR3JvdXBUaXRsZShpbmRleDogbnVtYmVyLCBpdGVtOiBSb3dEYXRhPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9USVRMRTtcbiAgfVxuXG4gIGlzUm93KGluZGV4OiBudW1iZXIsIGl0ZW06IFJvd0RhdGE8VD4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLlJPVztcbiAgfVxuXG4gIGlzR3JvdXBGb290ZXIoaW5kZXg6IG51bWJlciwgaXRlbTogUm93RGF0YTxUPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfRk9PVEVSO1xuICB9XG5cbiAgZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLm1hcCgobmFtZTogc3RyaW5nKSA9PiAnZm9vdGVyLScgKyBuYW1lKTtcbiAgfVxuXG4gIGdldEdyb3VwVmFsdWUoY29sdW1uOiBDb2x1bW5Db25maWcsIGRhdGE6IFRvdGFsR3JvdXApOiBudW1iZXIge1xuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuU1VNKSB7IHJldHVybiBkYXRhLnN1bTsgfVxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuQ09VTlQpIHsgcmV0dXJuIGRhdGEuY291bnQ7IH1cbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLkFWRVJBR0UpIHsgcmV0dXJuIDEuICogZGF0YS5zdW0gLyBkYXRhLmNvdW50OyB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFZhbHVlKG9iajogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBUIHtcbiAgICByZXR1cm4gbmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShvYmosIGNvbHVtbikgYXMgVDtcbiAgfVxuXG4gIGdldFZhbHVlVG9vbHRpcChvYmo6IFQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zaG93VG9vbFRpcCkge1xuICAgICAgcmV0dXJuIG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUob2JqLCBjb2x1bW4pIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoVGV4dCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxhc3RTZWFyY2ggPSB0ZXh0O1xuICAgIHRoaXMuc2VhcmNoLmVtaXQoeyB0ZXh0LCBjb2x1bW5Db25maWd1cmF0aW9uczogdGhpcy5jb2x1bW5Db25maWcgfSk7XG4gIH1cblxuICBzZWxlY3RSb3cocm93OiBSb3dEYXRhPFQ+LCBpc1VzZXI6IGJvb2xlYW4sIGNvbHVtbj86IENvbHVtbkNvbmZpZyk6IHZvaWQge1xuICAgIGlmICgoY29sdW1uID09PSB1bmRlZmluZWQgfHwgY29sdW1uID09PSBudWxsKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHJvdy5kYXRhIGFzIFQ7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xuICAgICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkT2JqZWN0LCBzY29wZTogaXNVc2VyID8gRXZlbnRTY29wZS5VU0VSIDogRXZlbnRTY29wZS5DT0RFX0NBTEwgfSk7XG4gICAgfSBlbHNlIGlmICghIWNvbHVtbiAmJiBjb2x1bW4ubmFtZSAhPT0gJ2Jvb2tCdXR0b24nKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0gcm93LmRhdGEgYXMgVDtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5zZWxlY3RlZE9iamVjdCk7XG4gICAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRPYmplY3QsIHNjb3BlOiBpc1VzZXIgPyBFdmVudFNjb3BlLlVTRVIgOiBFdmVudFNjb3BlLkNPREVfQ0FMTCB9KTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBsZXQgaXNTY3JvbGxZOiBib29sZWFuO1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsWSAhPT0gZWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgIGlzU2Nyb2xsWSA9IHRydWU7XG4gICAgICB0aGlzLnNjcm9sbFkgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHRoaXMuc2Nyb2xsWCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxYICE9PSBlbGVtZW50LnNjcm9sbExlZnQpIHtcbiAgICAgIGlzU2Nyb2xsWSA9IGZhbHNlO1xuICAgICAgdGhpcy5zY3JvbGxZID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB0aGlzLnNjcm9sbFggPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgaWYgKChlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wIDwgMTAwMCkgJiYgaXNTY3JvbGxZKSB7XG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgJiYgIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCkge1xuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7XG4gICAgICAgIHBhZ2U6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50Lm5leHRQYWdlKCksXG4gICAgICAgIGJvZHk6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmdldEJvZHkodGhpcy5jb2x1bW5Db25maWcsIHRoaXMubGFzdFNlYXJjaClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogVFtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJhd0RhdGEpIHtcbiAgICAgIHRoaXMucmF3RGF0YSA9IG5ldyBBcnJheTxUPigpO1xuICAgIH1cbiAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuY29uY2F0KGRhdGEpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XG4gIH1cblxuICBkYmxDbGlja0NlbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzIGFzIENlbGw8VD4pO1xuICB9XG5cbiAgc2VsZWN0ZWRDZWxsKGVsZW1lbnQ6IFJvd0RhdGE8VD4sIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RSb3coZWxlbWVudCwgdHJ1ZSwgY29sdW1uKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRDZWxscyA9IHsgY29sdW1uLCByb3c6IGVsZW1lbnQgfTtcbiAgICB0aGlzLnNlbGVjdENlbGwuZW1pdCh0aGlzLnNlbGVjdGVkQ2VsbHMpO1xuICB9XG5cbiAgaXNTZWxlY3RlZENlbGwocm93OiBSb3dEYXRhPFQ+LCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDZWxscyAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2VsbHMuY29sdW1uLm5hbWUgPT09IGNvbHVtbi5uYW1lICYmXG4gICAgICAgICAgKHRoaXMuc2VsZWN0ZWRDZWxscy5yb3cgYXMgUm93RGF0YTxUPikuZGF0YSA9PT0gcm93LmRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRDbGFzc1RvQ2VsbChyb3c6IFQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNsYXNzVG9DZWxsOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBpZiAodGhpcy5jb25maWdDZWxsU3R5bGVzKSB7XG4gICAgICBjb25zdCBmb3VuZDogQ29uZmlnQ2VsbFN0eWxlczxUPiA9IHRoaXMuY29uZmlnQ2VsbFN0eWxlcy5maW5kKChjOiBDb25maWdDZWxsU3R5bGVzPFQ+KSA9PiB7XG4gICAgICAgIHJldHVybiBjLmNlbGxEYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgY29sdW1uKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGNsYXNzVG9DZWxsLnB1c2goZm91bmQuY2xhc3NDZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbHVtbi5jb2x1bW5TdHlsZSkge1xuICAgICAgY2xhc3NUb0NlbGwucHVzaChjb2x1bW4uY29sdW1uU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NUb0NlbGw7XG4gIH1cblxuICBnZXRDbGFzc1RvUm93KHJvdzogVCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjbGFzc1RvUm93OiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBpZiAocm93ID09PSB0aGlzLnNlbGVjdGVkT2JqZWN0ICYmICF0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgY2xhc3NUb1Jvdy5wdXNoKCcnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbikge1xuICAgICAgY29uc3QgZm91bmQ6IENvbmZpZ1Jvd1N0eWxlczxUPiA9IHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbi5maW5kKChjOiBDb25maWdSb3dTdHlsZXM8VD4pID0+IHtcbiAgICAgICAgcmV0dXJuIGMuZGF0YSA9PT0gdGhpcy5nZXRWYWx1ZShyb3csIGMuY29sdW1uKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGNsYXNzVG9Sb3cucHVzaChmb3VuZC5jbGFzc1Jvdyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc1RvUm93O1xuICB9XG5cbiAgb25Ecm9wKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEcmFnZ2VkICYmIHRoaXMuaW5kZXhSb3dTdGFydERyYWcgPj0gMCkge1xuICAgICAgY29uc3Qgcm93SW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xuICAgICAgY29uc3QgYXJyYXk6IFJvd0RhdGE8VD5bXSA9IHRoaXMuZGF0YUJlZm9yZURyYWcuZGF0YTtcbiAgICAgIGNvbnN0IHJhd0RhdGE6IFRbXSA9IHRoaXMucmF3RGF0YTtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShhcnJheSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KHJhd0RhdGEsIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcbiAgICAgIHRoaXMuZHJvcC5lbWl0KHsgdmFsdWU6IGFycmF5W3Jvd0luZGV4XS5kYXRhIGFzIFQsIG9yZGVyOiByb3dJbmRleCB9KTtcbiAgICAgIHRoaXMucmF3RGF0YSA9IHJhd0RhdGE7XG4gICAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGFycmF5KTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHRhYmxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgIGxldCBjdXJyZW50SW5kZXg6IG51bWJlciA9IHRoaXMuZGF0YS5kYXRhLmZpbmRJbmRleCgocm93OiBSb3dEYXRhPFQ+KSA9PiByb3cuZGF0YSA9PT0gdGhpcy5zZWxlY3RlZE9iamVjdCk7XG4gICAgICBsZXQgbmV3U2VsZWN0aW9uOiBudW1iZXIgPSAtMTA7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICB0aGlzLnNjcm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLmZvckVhY2goKHJvdzogUm93RGF0YTxUPiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xMCAmJiBpbmRleCA+IGN1cnJlbnRJbmRleCAmJiByb3cucm93VHlwZSA9PT0gUm93VHlwZS5ST1cpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IGluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudC0tO1xuICAgICAgICBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBjdXJyZW50SW5kZXggLSAxO1xuICAgICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCkuZm9yRWFjaCgocm93OiBSb3dEYXRhPFQ+LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEwICYmIGluZGV4ID4gY3VycmVudEluZGV4ICYmIHJvdy5yb3dUeXBlID09PSBSb3dUeXBlLlJPVykge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gaW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEucmV2ZXJzZSgpO1xuICAgICAgICBpZiAobmV3U2VsZWN0aW9uICE9PSAtMTApIHtcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLmRhdGEuZGF0YS5sZW5ndGggLSBuZXdTZWxlY3Rpb24gLSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobmV3U2VsZWN0aW9uICE9PSAtMTApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RSb3codGhpcy5kYXRhLmRhdGFbbmV3U2VsZWN0aW9uXSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoTWF0aC5hYnModGhpcy5zY3JvbGxDb3VudCkgPj0gMikge1xuICAgICAgICB0aGlzLnNjcm9sbENvdW50ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRlIGVsIGV2ZW50byBjdWFuZG8gc2UgZGEgY2xpY2sgYWwgYm90b24gQWRkUm93XG4gICAqL1xuICBvbkFkZFJvdygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZFJvdy5lbWl0KCk7XG4gIH1cblxuICBvbkJvb2tDbGlja2VkKHNlbGVjdGVkT2JqZWN0OiBUKTogdm9pZCB7XG4gICAgdGhpcy5ib29rQ2xpY2tlZC5lbWl0KHNlbGVjdGVkT2JqZWN0KTtcbiAgfVxuXG4gIGdldEhlYWRlclN1YnRpdGxlKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB4OiBzdHJpbmdbXSA9IHRoaXMuY29sdW1uQ29uZmlnLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChjb2x1bW4udmlzaWJsZSAmJiBjb2x1bW4uc3VidGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gJ3N1YnRpdGxlJyArIGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSkuZmlsdGVyKChkYXRhOiBzdHJpbmcpID0+IGRhdGEgIT0gbnVsbCk7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICBnZXRDb2x1bW5zV2l0aFRpdGxlKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5Db25maWcuZmlsdGVyKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT5cbiAgICAgIGNvbHVtbi52aXNpYmxlICYmIGNvbHVtbi50aXRsZSAhPT0gdW5kZWZpbmVkXG4gICAgKS5tYXAoKGNvbDogQ29sdW1uQ29uZmlnKSA9PiBjb2wubmFtZSk7XG4gIH1cblxuICBkcmFnZ2VyKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNEcmFnZ2VkICYmIHRoaXMuaW5kZXhSb3dTdGFydERyYWcgPj0gMCkge1xuICAgICAgY29uc3Qgcm93SW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xuICAgICAgaWYgKHJvd0luZGV4ICE9PSB0aGlzLmxhc3RJbmRleFJvd0RyYWcpIHtcbiAgICAgICAgdGhpcy5sYXN0SW5kZXhSb3dEcmFnID0gcm93SW5kZXg7XG4gICAgICAgIC8vIFRoaXMgY2FuIGhhdmUgYSBtZW1vcnkgcHJvYmxlbSB3aXRoIGJpZyBkYXRhXG4gICAgICAgIGNvbnN0IGFycmF5OiBSb3dEYXRhPFQ+W10gPSBbLi4udGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhXTtcbiAgICAgICAgbW92ZUl0ZW1JbkFycmF5KGFycmF5LCB0aGlzLmluZGV4Um93U3RhcnREcmFnLCByb3dJbmRleCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoYXJyYXkpO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0RHJhZyhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaW5kZXhSb3dTdGFydERyYWcgPSB0aGlzLmdldFJvd0luZGV4KGV2ZW50LnBhZ2VZKTtcbiAgICB0aGlzLmxhc3RJbmRleFJvd0RyYWcgPSB0aGlzLmluZGV4Um93U3RhcnREcmFnO1xuICAgIHRoaXMuZGF0YUJlZm9yZURyYWcgPSB0aGlzLmRhdGE7XG4gIH1cblxuICBwcml2YXRlIGdldFJvd0luZGV4KHBhZ2VZOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBvZmZzZXRUb3A6IG51bWJlciA9IDA7XG4gICAgbGV0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lclRhYmxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKChjb250YWluZXIgIT09IG51bGwpICYmIChvZmZzZXRUb3AgPT09IDApKSB7XG4gICAgICBvZmZzZXRUb3AgPSBjb250YWluZXIub2Zmc2V0VG9wO1xuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGxldCByb3dJbmRleDogbnVtYmVyID0gLTE7XG4gICAgY29uc3Qgcm93czogSFRNTENvbGxlY3Rpb24gPSB0aGlzLm1hdFRhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3c6IEhUTUxFbGVtZW50ID0gKHJvd3NbaV0gYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgaWYgKHBhZ2VZIC0gb2Zmc2V0VG9wID4gcm93Lm9mZnNldFRvcCAtIHRoaXMuY29udGFpbmVyVGFibGUubmF0aXZlRWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgcm93SW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocm93SW5kZXggPCAwKSB7IHJvd0luZGV4ID0gMDsgfVxuICAgIHJldHVybiByb3dJbmRleDtcbiAgfVxuXG4gIGdldCBjb2x1bW5UeXBlKCk6IHR5cGVvZiBDb2x1bW5UeXBlIHtcbiAgICByZXR1cm4gQ29sdW1uVHlwZTtcbiAgfVxuXG59XG4iXX0=