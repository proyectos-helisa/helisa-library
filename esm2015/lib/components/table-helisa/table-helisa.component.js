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
                template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\n<div class=\"div-table-helisa\">\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\n\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\n          <ng-container *ngIf=\"column.title != undefined\">\n            <div *ngIf=\"!column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\n                {{column.title}} </th>\n            </div>\n            <div *ngIf=\"column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\n            </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton'\"> \n                  <th mat-header-cell *matHeaderCellDef ></th>\n                  <td mat-cell *matCellDef=\"let element;\">\n                    <button mat-icon-button *ngIf=\"element.data === selectedObject\" (click)=\"onBookClicked(selectedObject)\">\n                      <i class=\"material-icons-outlined\">description</i>\n                    </button>\n                  </td>\n          </ng-container>\n\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{ getValue(element.data, column) }}</a>\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\n        </ng-container>\n\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\n            {{column.subtitle}}</th>\n        </ng-container>\n      </ng-container>\n \n      <ng-container matColumnDef=\"groupHeader\">\n        <td mat-cell *matCellDef=\"let group\">\n          <strong>{{ getGroupDescription(group.data) }}</strong>\n        </td>\n      </ng-container>\n\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\n      </ng-container>\n\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\n          [ngClass]=\"getClassToRow(row.data)\" [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"!isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row, true)\"\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\n        </tr>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\n    </table>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRzFFLE9BQU8sRUFHTCw2QkFBNkIsRUFFN0IsZ0JBQWdCLEVBS2hCLFVBQVUsRUFJVixlQUFlLEVBRWYsU0FBUyxFQUNULFVBQVUsRUFFWCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBR3RFLDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYiwwQkFBaUI7Ozs7SUFJakIsY0FBVyxFQUFFLGVBQVksRUFBRSxNQUFHOzs7Ozs7OztBQVVoQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBcUUvQixZQUFvQixZQUFtQztRQUFuQyxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUEvRHZELHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyw4QkFBeUIsR0FBYSxFQUFFLENBQUM7UUFDekMsaUNBQTRCLEdBQWEsRUFBRSxDQUFDO1FBQzVDLCtCQUEwQixHQUFhLEVBQUUsQ0FBQztRQUkxQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFFdEMsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFD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QUNoQywyQ0FBNkI7Ozs7O0lBQzdCLGlEQUF1Qzs7Ozs7SUFDdkMsZ0RBQXNDOzs7OztJQUN0Qyw4Q0FBc0Q7Ozs7O0lBQ3RELDJDQUFtQzs7Ozs7SUFDbkMsdUNBQTRCOzs7OztJQUM1Qix1Q0FBNEI7O0lBRTVCLHVDQUFxQzs7SUFDckMsd0NBQTJDOztJQUMzQywrQ0FBdUU7O0lBQ3ZFLDhDQUF3RDs7SUFFeEQsb0NBQTRFOztJQUM1RSxxQ0FBNkU7O0lBQzdFLHNDQUE4RTs7Ozs7SUFLOUUsc0NBQTBEOztJQUMxRCwwQ0FBMEU7O0lBQzFFLDRDQUE0Rjs7SUFDNUYsd0NBQW9HOztJQUNwRyx5Q0FBbUM7O0lBQ25DLCtDQUEwQzs7SUFDMUMscUNBQXVCOztJQUN2QixnREFBc0Q7O0lBQ3RELHlEQUE4RDs7SUFDOUQsNkNBQWdDOztJQUNoQyxvQ0FBa0Y7O0lBQ2xGLHlDQUFvQzs7SUFDcEMsNENBQXNFOztJQUN0RSxzQ0FBZ0U7O0lBQ2hFLDJDQUErRDs7SUFDL0QsNkNBQXdDOztJQUN4QywyQ0FBcUM7O0lBQ3JDLDBDQUE0Qjs7SUFDNUIsMENBQTRCOzs7OztJQU81Qix5Q0FBaUM7Ozs7O0lBS2pDLHlDQUFpQzs7Ozs7SUFHckIsNENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTb3J0LCBNYXRUYWJsZSwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU29ydCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3R5cGluZ3Mvc29ydCc7XG5cbmltcG9ydCB7XG4gIEFkZFJvd0J1dHRvbixcbiAgQ2VsbCxcbiAgQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUsXG4gIENvbHVtbkNvbmZpZyxcbiAgQ29sdW1uQ29uZmlnVXRpbCxcbiAgQ29uZmlnQ2VsbFN0eWxlcyxcbiAgQ29uZmlnUm93U3R5bGVzLFxuICBEcm9wRWxlbWVudCxcbiAgRXZlbnRDb2x1bW4sXG4gIEV2ZW50U2NvcGUsXG4gIEV2ZW50U2VhcmNoLFxuICBSZXF1ZXN0VGFibGVIZWxpc2EsXG4gIFNlbGVjdE9iamVjdCxcbiAgVGFibGVIZWxpc2FUeXBlLFxuICBUb3RhbEdyb3VwLFxuICBUb3RhbFR5cGUsXG4gIENvbHVtblR5cGUsXG4gIFRvdGFsVGFibGVIZWxpc2Fcbn0gZnJvbSAnLi90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRhYmxlSGVsaXNhU2VydmljZSwgVGFibGVIZWxpc2FTZXJ2aWNlSW5mbyB9IGZyb20gJy4vdGFibGUtaGVsaXNhLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1oZWxpc2EtY29ubmVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBSb3dEYXRhPFQ+IHtcbiAgZGF0YToge30gfCBUO1xuICByb3dUeXBlOiBSb3dUeXBlO1xufVxuXG5lbnVtIFJvd1R5cGUge1xuICBHUk9VUF9USVRMRSwgR1JPVVBfRk9PVEVSLCBST1dcbn1cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSB0YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ6IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDxUPjtcbiAgdG90YWxEYXRhOiBBcnJheTxudW1iZXI+O1xuICByYXdEYXRhOiBBcnJheTxUPjtcbiAgZGF0YTogTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE8VD4+O1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlOiBzdHJpbmdbXSA9IFtdO1xuICBkaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlOiBzdHJpbmdbXSA9IFtdO1xuICBkaXNwbGF5ZWRDb2x1bW5zV2l0aEZvb3Rlcjogc3RyaW5nW10gPSBbXTtcbiAgY29sdW1uQ29uZmlnOiBBcnJheTxDb2x1bW5Db25maWc+O1xuICBzZWxlY3RlZE9iamVjdDogVDtcbiAgbGFzdFNlYXJjaDogc3RyaW5nO1xuICB0eXBlOiBUYWJsZUhlbGlzYVR5cGUgPSBUYWJsZUhlbGlzYVR5cGUuTE9DQUw7XG4gIGluZGV4Um93U2VsZWN0OiBudW1iZXI7XG4gIHByaXZhdGUgc2Nyb2xsQ291bnQ6IG51bWJlciA9IDA7XG4gIGhhc1N1YnRpdGxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgaW5kZXhSb3dTdGFydERyYWc6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIGxhc3RJbmRleFJvd0RyYWc6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIGRhdGFCZWZvcmVEcmFnOiB7IGRhdGE6IFJvd0RhdGE8VD5bXSB9ID0gbnVsbDtcbiAgcHJpdmF0ZSBkYXRhU291cmNlJDogQXJyYXk8VD4gPSBbXTtcbiAgcHJpdmF0ZSBzY3JvbGxYOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHNjcm9sbFk6IG51bWJlciA9IDA7XG5cbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBtYXRTb3J0OiBNYXRTb3J0O1xuICBAVmlld0NoaWxkKE1hdFRhYmxlKSBtYXRUYWJsZTogTWF0VGFibGU8VD47XG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBtYXRUYWJsZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lclRhYmxlJykgY29udGFpbmVyVGFibGU6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudFNlYXJjaD4oKTtcblxuICAvKipcbiAgICogRGVwcmVjYWRvLCBjYW1iaWFyIHBvciBlbGVjdE9iamVjdFxuICAgKi9cbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAT3V0cHV0KCkgc2VsZWN0Q2VsbDogRXZlbnRFbWl0dGVyPENlbGw8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsPFQ+PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PigpO1xuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E8VD4+KCk7XG4gIEBJbnB1dCgpIHNob3dUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzQ2VsbFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBjb25maWdDZWxsU3R5bGVzOiBBcnJheTxDb25maWdDZWxsU3R5bGVzPFQ+PjtcbiAgQElucHV0KCkgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbjogQXJyYXk8Q29uZmlnUm93U3R5bGVzPFQ+PjtcbiAgQElucHV0KCkgc2VsZWN0ZWRDZWxsczogQ2VsbDxUPjtcbiAgQE91dHB1dCgpIGRyb3A6IEV2ZW50RW1pdHRlcjxEcm9wRWxlbWVudDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BFbGVtZW50PFQ+PigpO1xuICBASW5wdXQoKSBpc0RyYWdnZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYWRkUm93QnV0dG9uOiBBZGRSb3dCdXR0b24gPSB7IHNob3dCdXR0b246IGZhbHNlLCB0ZXh0OiAnJyB9O1xuICBAT3V0cHV0KCkgYWRkUm93OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBib29rQ2xpY2tlZDogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBASW5wdXQoKSBhZGRCb29rQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dUb29sVGlwOiBib29sZWFuID0gdHJ1ZTtcbiAgc2hvd0Zvb3RlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBzaG93U2VhcmNoOiBib29sZWFuID0gZmFsc2U7XG5cblxuXG4gIC8qKlxuICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamUgZGVsIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIGhpZGVEZWxheTogbnVtYmVyID0gNjAwO1xuXG4gIC8qKlxuICAgKiBUaWVtcG8gYW50ZXMgZGUgbW9zdHJhIGVsIG1lbnNhamUgZGVsIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIHNob3dEZWxheTogbnVtYmVyID0gNTAwO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlSGVsaXNhU2VydmljZTxUPikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZVNlcnZpY2UubmV4dFBhZ2VSZXR1cm4uc3Vic2NyaWJlKFxuICAgICAgKGRhdGE6IFRhYmxlSGVsaXNhU2VydmljZUluZm88VFtdPikgPT4ge1xuICAgICAgICBpZiAoIWRhdGEudGFibGUgfHwgZGF0YS50YWJsZSkge1xuICAgICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5vYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnRhYmxlU2VydmljZS50b3RhbFJldHVybi5zdWJzY3JpYmUoKGluZm86IFRhYmxlSGVsaXNhU2VydmljZUluZm88VG90YWxUYWJsZUhlbGlzYT4pID0+IHtcbiAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChjb2x1bW4gPT09IGluZm8ub2JqLmNvbHVtbikge1xuICAgICAgICAgICAgdGhpcy50b3RhbERhdGFbaWR4XSA9IHRoaXMuZ2V0R3JvdXBWYWx1ZShjb2x1bW4sIHsgc3VtOiBpbmZvLm9iai52YWx1ZSwgY291bnQ6IHRoaXMuY291bnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm1hdFNvcnQuc29ydENoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAoZXZlbnQ6IFNvcnQpID0+IHtcbiAgICAgICAgY29uc3QgY29sdW1uOiBDb2x1bW5Db25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZy5maW5kKChjOiBDb2x1bW5Db25maWcpID0+IGMubmFtZSA9PT0gZXZlbnQuYWN0aXZlKTtcbiAgICAgICAgY29sdW1uLnNvcnREaXJlY3Rpb24gPSBldmVudC5kaXJlY3Rpb247XG4gICAgICAgIHRoaXMuc29ydC5lbWl0KHsgY29sdW1uLCBjb2x1bW5Db25maWd1cmF0aW9uczogdGhpcy5jb2x1bW5Db25maWcsIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLlNPUlQgfSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMudGFibGVTZXJ2aWNlLmVtaXRWaXNpYmxlQnV0dG9uLnN1YnNjcmliZShcbiAgICAgIChkYXRhOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLm1hdFRhYmxlLnJlbmRlclJvd3MoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaXNSZW1vdGUodzogYm9vbGVhbikge1xuICAgIHRoaXMudHlwZSA9IHcgPyBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFIDogVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xuICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50ID0gbmV3IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDxUPigpO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUpIHtcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5wYWdlKys7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbHVtbkNvbmZpZ3VyYXRpb24oY29sdW1uQ29uZmlndXJhdGlvbjogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xuICAgIHRoaXMuaGFzU3VidGl0bGUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbHVtbkNvbmZpZyA9IGNvbHVtbkNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKTtcblxuICAgIGlmIChjb2x1bW5Db25maWd1cmF0aW9uKSB7XG4gICAgICBpZiAodGhpcy5hZGRCb29rQnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbkNvdW50OiBudW1iZXIgPSBjb2x1bW5Db25maWd1cmF0aW9uLmxlbmd0aDtcbiAgICAgICAgbGV0IGNvdW50U3VidGl0bGU6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBzaG93Qm9va0J1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBjb2x1bW5Db25maWd1cmF0aW9uLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICAgICAgaWYgKCEhY29sdW1uLnN1YnRpdGxlKSB7XG4gICAgICAgICAgICBjb3VudFN1YnRpdGxlID0gY291bnRTdWJ0aXRsZSArIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoIXNob3dCb29rQnV0dG9uKSAmJiAoY29sdW1uLm5hbWUgPT09ICdib29rQnV0dG9uJykpIHtcbiAgICAgICAgICAgIHNob3dCb29rQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdWJ0aXRsZVRlbXA6IGJvb2xlYW4gPSBjb2x1bW5Db3VudCA9PT0gY291bnRTdWJ0aXRsZTtcbiAgICAgICAgaWYgKCFzaG93Qm9va0J1dHRvbikge1xuICAgICAgICAgIGNvbHVtbkNvbmZpZ3VyYXRpb24ucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiAnYm9va0J1dHRvbicsXG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBzdWJ0aXRsZTogc3VidGl0bGVUZW1wID8gJycgOiB1bmRlZmluZWQgLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbHVtbkNvbmZpZ3VyYXRpb24uZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi52aXNpYmxlKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnB1c2goY29sdW1uLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5oYXNTdWJ0aXRsZSkge1xuICAgICAgICAgIHRoaXMuaGFzU3VidGl0bGUgPSBjb2x1bW4uc3VidGl0bGUgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5yYXdEYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUubGVuZ3RoKTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGUuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZS5sZW5ndGgpO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIubGVuZ3RoKTtcbiAgICB0aGlzLmdldENvbHVtbnNXaXRoVGl0bGUoKS5mb3JFYWNoKChjb2w6IHN0cmluZykgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLnB1c2goY29sKSk7XG4gICAgdGhpcy5nZXRIZWFkZXJTdWJ0aXRsZSgpLmZvckVhY2goKGNvbDogc3RyaW5nKSA9PiB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGUucHVzaChjb2wpKTtcbiAgICB0aGlzLmZvb3RlckRpc3BsYXllZENvbHVtbnMoKS5mb3JFYWNoKChjb2w6IHN0cmluZykgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aEZvb3Rlci5wdXNoKGNvbCkpO1xuICB9XG5cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhU291cmNlKGRhdGFTb3VyY2U6IEFycmF5PFQ+KSB7XG4gICAgdGhpcy5kYXRhU291cmNlJCA9IGRhdGFTb3VyY2U7XG4gICAgdGhpcy5yYXdEYXRhID0gZGF0YVNvdXJjZTtcbiAgICBpZiAodGhpcy5yYXdEYXRhKSB7IHRoaXMucHJlcGFyZURhdGFTb3VyY2UoKTsgfVxuICB9XG5cbiAgZ2V0IGRhdGFTb3VyY2UoKTogQXJyYXk8VD4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXhSb3coaWRSb3dTZWxlY3RlZDogbnVtYmVyKSB7XG4gICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IGlkUm93U2VsZWN0ZWQ7XG4gICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoKSB7XG4gICAgICBpZiAoKGlkUm93U2VsZWN0ZWQgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCBpZFJvd1NlbGVjdGVkIDwgMCkpIHtcbiAgICAgICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdFJvdyh7IGRhdGE6IHRoaXMucmF3RGF0YVt0aGlzLmluZGV4Um93U2VsZWN0XSwgcm93VHlwZTogUm93VHlwZS5ST1cgfSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZURhdGFTb3VyY2UoKTogdm9pZCB7XG4gICAgY29uc3QgY2hhbmdlRGF0YTogQXJyYXk8Um93RGF0YTxUPj4gPSBBcnJheTxSb3dEYXRhPFQ+PigpO1xuICAgIGxldCBoYXZlR3JvdXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgZ3JvdXBGb290ZXI6IEFycmF5PFRvdGFsR3JvdXA+O1xuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSAhPT0gdW5kZWZpbmVkICYmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5MT0NBTCB8fCB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5wYWdlIDw9IDEpKSB7XG4gICAgICAgIHRoaXMudG90YWxEYXRhID0gbmV3IEFycmF5PG51bWJlcj4odGhpcy5jb2x1bW5Db25maWcubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5zaG93Rm9vdGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b3RhbC5lbWl0KHsgY29sdW1uLCBjb2x1bW5Db25maWd1cmF0aW9uczogdGhpcy5jb2x1bW5Db25maWcsIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLlRPVEFMIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zaG93U2VhcmNoID0gdGhpcy5zaG93U2VhcmNoIHx8IGNvbHVtbi5zZWFyY2hhYmxlO1xuICAgICAgaGF2ZUdyb3VwID0gaGF2ZUdyb3VwIHx8IGNvbHVtbi5ncm91cGFibGU7XG4gICAgfSk7XG4gICAgaWYgKGhhdmVHcm91cCkge1xuICAgICAgdGhpcy5yYXdEYXRhID0gdGhpcy5yYXdEYXRhLnNvcnQoKGE6IFQsIGI6IFQpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogbnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmNvbXBhcmUoYSwgYik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnJhd0RhdGEuZm9yRWFjaCgocm93OiBUKSA9PiB7XG4gICAgICBpZiAoaGF2ZUdyb3VwICYmIChjaGFuZ2VEYXRhLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNvbXBhcmUoY2hhbmdlRGF0YVtjaGFuZ2VEYXRhLmxlbmd0aCAtIDFdLmRhdGEgYXMgVCwgcm93KSAhPT0gMCkpIHtcbiAgICAgICAgaWYgKGdyb3VwRm9vdGVyKSB7XG4gICAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogZ3JvdXBGb290ZXIsIHJvd1R5cGU6IFJvd1R5cGUuR1JPVVBfRk9PVEVSIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IHJvdywgcm93VHlwZTogUm93VHlwZS5HUk9VUF9USVRMRSB9KTtcbiAgICAgICAgZ3JvdXBGb290ZXIgPSBuZXcgQXJyYXk8VG90YWxHcm91cD4odGhpcy5jb2x1bW5Db25maWcubGVuZ3RoKTtcbiAgICAgIH1cbiAgICAgIGlmIChoYXZlR3JvdXApIHsgdGhpcy5hZGRUb3RhbEdyb3VwKGdyb3VwRm9vdGVyLCByb3cpOyB9XG4gICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YTxUPj4oY2hhbmdlRGF0YSk7XG4gICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoICYmIHRoaXMuaW5kZXhSb3dTZWxlY3QgJiYgIXRoaXMuc2VsZWN0ZWRPYmplY3QpIHtcbiAgICAgIGlmICh0aGlzLmluZGV4Um93U2VsZWN0ID49IHRoaXMucmF3RGF0YS5sZW5ndGggfHwgdGhpcy5pbmRleFJvd1NlbGVjdCA8IDApIHtcbiAgICAgICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdFJvdyh7IGRhdGE6IHRoaXMucmF3RGF0YVt0aGlzLmluZGV4Um93U2VsZWN0XSwgcm93VHlwZTogUm93VHlwZS5ST1cgfSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkVG90YWxHcm91cChyb3dUb3RhbDogQXJyYXk8VG90YWxHcm91cD4sIHJvdzogVCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChyb3dUb3RhbFtpbmRleF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XSA9IHsgc3VtOiAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShyb3csIGNvbHVtbikgYXMgbnVtYmVyKSwgY291bnQ6IDEgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0uc3VtICs9IChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKHJvdywgY29sdW1uKSBhcyBudW1iZXIpO1xuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5jb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbXBhcmUoYTogVCwgYjogVCk6IG51bWJlciB7XG4gICAgbGV0IHdzOiBudW1iZXIgPSAwO1xuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICBpZiAod3MgPT09IDAgJiYgY29sdW1uLmdyb3VwYWJsZSkge1xuICAgICAgICBpZiAoKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYSwgY29sdW1uKSBhcyBudW1iZXIpIDwgKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYiwgY29sdW1uKSBhcyBudW1iZXIpKSB7XG4gICAgICAgICAgd3MgPSAtMTtcbiAgICAgICAgfSBlbHNlIGlmICgobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShhLCBjb2x1bW4pIGFzIG51bWJlcikgPiAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShiLCBjb2x1bW4pIGFzIG51bWJlcikpIHtcbiAgICAgICAgICB3cyA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gd3M7XG4gIH1cblxuICBnZXRHcm91cERlc2NyaXB0aW9uKG9iajogVCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdDogc3RyaW5nID0gJyc7XG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcbiAgICAgIGlmIChjb2x1bW4uZ3JvdXBhYmxlKSB7XG4gICAgICAgIHJlc3VsdCArPSAocmVzdWx0Lmxlbmd0aCA/ICcgLSAnIDogJycpICsgKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUob2JqLCBjb2x1bW4pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaXNHcm91cFRpdGxlKGluZGV4OiBudW1iZXIsIGl0ZW06IFJvd0RhdGE8VD4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLkdST1VQX1RJVExFO1xuICB9XG5cbiAgaXNSb3coaW5kZXg6IG51bWJlciwgaXRlbTogUm93RGF0YTxUPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuUk9XO1xuICB9XG5cbiAgaXNHcm91cEZvb3RlcihpbmRleDogbnVtYmVyLCBpdGVtOiBSb3dEYXRhPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9GT09URVI7XG4gIH1cblxuICBmb290ZXJEaXNwbGF5ZWRDb2x1bW5zKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZENvbHVtbnMubWFwKChuYW1lOiBzdHJpbmcpID0+ICdmb290ZXItJyArIG5hbWUpO1xuICB9XG5cbiAgZ2V0R3JvdXBWYWx1ZShjb2x1bW46IENvbHVtbkNvbmZpZywgZGF0YTogVG90YWxHcm91cCk6IG51bWJlciB7XG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5TVU0pIHsgcmV0dXJuIGRhdGEuc3VtOyB9XG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5DT1VOVCkgeyByZXR1cm4gZGF0YS5jb3VudDsgfVxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuQVZFUkFHRSkgeyByZXR1cm4gMS4gKiBkYXRhLnN1bSAvIGRhdGEuY291bnQ7IH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0VmFsdWUob2JqOiBULCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IFQge1xuICAgIHJldHVybiBuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSBhcyBUO1xuICB9XG5cbiAgZ2V0VmFsdWVUb29sdGlwKG9iajogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNob3dUb29sVGlwKSB7XG4gICAgICByZXR1cm4gbmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShvYmosIGNvbHVtbikgYXMgc3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hUZXh0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubGFzdFNlYXJjaCA9IHRleHQ7XG4gICAgdGhpcy5zZWFyY2guZW1pdCh7IHRleHQsIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZyB9KTtcbiAgfVxuXG4gIHNlbGVjdFJvdyhyb3c6IFJvd0RhdGE8VD4sIGlzVXNlcjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSByb3cuZGF0YSBhcyBUO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5zZWxlY3RlZE9iamVjdCk7XG4gICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkT2JqZWN0LCBzY29wZTogaXNVc2VyID8gRXZlbnRTY29wZS5VU0VSIDogRXZlbnRTY29wZS5DT0RFX0NBTEwgfSk7XG4gIH1cblxuICBvblNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBsZXQgaXNTY3JvbGxZOiBib29sZWFuO1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsWSAhPT0gZWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgIGlzU2Nyb2xsWSA9IHRydWU7XG4gICAgICB0aGlzLnNjcm9sbFkgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHRoaXMuc2Nyb2xsWCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxYICE9PSBlbGVtZW50LnNjcm9sbExlZnQpIHtcbiAgICAgIGlzU2Nyb2xsWSA9IGZhbHNlO1xuICAgICAgdGhpcy5zY3JvbGxZID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB0aGlzLnNjcm9sbFggPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgaWYgKChlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wIDwgMTAwMCkgJiYgaXNTY3JvbGxZKSB7XG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgJiYgIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCkge1xuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7XG4gICAgICAgIHBhZ2U6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50Lm5leHRQYWdlKCksXG4gICAgICAgIGJvZHk6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmdldEJvZHkodGhpcy5jb2x1bW5Db25maWcsIHRoaXMubGFzdFNlYXJjaClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogVFtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJhd0RhdGEpIHtcbiAgICAgIHRoaXMucmF3RGF0YSA9IG5ldyBBcnJheTxUPigpO1xuICAgIH1cbiAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuY29uY2F0KGRhdGEpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XG4gIH1cblxuICBkYmxDbGlja0NlbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzIGFzIENlbGw8VD4pO1xuICB9XG5cbiAgc2VsZWN0ZWRDZWxsKGVsZW1lbnQ6IFJvd0RhdGE8VD4sIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZENlbGxzID0geyBjb2x1bW4sIHJvdzogZWxlbWVudCB9O1xuICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHRoaXMuc2VsZWN0ZWRDZWxscyk7XG4gIH1cblxuICBpc1NlbGVjdGVkQ2VsbChyb3c6IFJvd0RhdGE8VD4sIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZENlbGxzICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDZWxscy5jb2x1bW4ubmFtZSA9PT0gY29sdW1uLm5hbWUgJiZcbiAgICAgICAgICAodGhpcy5zZWxlY3RlZENlbGxzLnJvdyBhcyBSb3dEYXRhPFQ+KS5kYXRhID09PSByb3cuZGF0YSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldENsYXNzVG9DZWxsKHJvdzogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2xhc3NUb0NlbGw6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgIGlmICh0aGlzLmNvbmZpZ0NlbGxTdHlsZXMpIHtcbiAgICAgIGNvbnN0IGZvdW5kOiBDb25maWdDZWxsU3R5bGVzPFQ+ID0gdGhpcy5jb25maWdDZWxsU3R5bGVzLmZpbmQoKGM6IENvbmZpZ0NlbGxTdHlsZXM8VD4pID0+IHtcbiAgICAgICAgcmV0dXJuIGMuY2VsbERhdGEgPT09IHRoaXMuZ2V0VmFsdWUocm93LCBjb2x1bW4pO1xuICAgICAgfSk7XG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgY2xhc3NUb0NlbGwucHVzaChmb3VuZC5jbGFzc0NlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29sdW1uLmNvbHVtblN0eWxlKSB7XG4gICAgICBjbGFzc1RvQ2VsbC5wdXNoKGNvbHVtbi5jb2x1bW5TdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc1RvQ2VsbDtcbiAgfVxuXG4gIGdldENsYXNzVG9Sb3cocm93OiBUKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNsYXNzVG9Sb3c6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgIGlmIChyb3cgPT09IHRoaXMuc2VsZWN0ZWRPYmplY3QgJiYgIXRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICBjbGFzc1RvUm93LnB1c2goJycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uKSB7XG4gICAgICBjb25zdCBmb3VuZDogQ29uZmlnUm93U3R5bGVzPFQ+ID0gdGhpcy5jb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uLmZpbmQoKGM6IENvbmZpZ1Jvd1N0eWxlczxUPikgPT4ge1xuICAgICAgICByZXR1cm4gYy5kYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgYy5jb2x1bW4pO1xuICAgICAgfSk7XG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgY2xhc3NUb1Jvdy5wdXNoKGZvdW5kLmNsYXNzUm93KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzVG9Sb3c7XG4gIH1cblxuICBvbkRyb3AoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0RyYWdnZWQgJiYgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA+PSAwKSB7XG4gICAgICBjb25zdCByb3dJbmRleDogbnVtYmVyID0gdGhpcy5nZXRSb3dJbmRleChldmVudC5wYWdlWSk7XG4gICAgICBjb25zdCBhcnJheTogUm93RGF0YTxUPltdID0gdGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhO1xuICAgICAgY29uc3QgcmF3RGF0YTogVFtdID0gdGhpcy5yYXdEYXRhO1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGFycmF5LCB0aGlzLmluZGV4Um93U3RhcnREcmFnLCByb3dJbmRleCk7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkocmF3RGF0YSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xuICAgICAgdGhpcy5kcm9wLmVtaXQoeyB2YWx1ZTogYXJyYXlbcm93SW5kZXhdLmRhdGEgYXMgVCwgb3JkZXI6IHJvd0luZGV4IH0pO1xuICAgICAgdGhpcy5yYXdEYXRhID0gcmF3RGF0YTtcbiAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoYXJyYXkpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgdGFibGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgbGV0IGN1cnJlbnRJbmRleDogbnVtYmVyID0gdGhpcy5kYXRhLmRhdGEuZmluZEluZGV4KChyb3c6IFJvd0RhdGE8VD4pID0+IHJvdy5kYXRhID09PSB0aGlzLnNlbGVjdGVkT2JqZWN0KTtcbiAgICAgIGxldCBuZXdTZWxlY3Rpb246IG51bWJlciA9IC0xMDtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQrKztcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEuZm9yRWFjaCgocm93OiBSb3dEYXRhPFQ+LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEwICYmIGluZGV4ID4gY3VycmVudEluZGV4ICYmIHJvdy5yb3dUeXBlID09PSBSb3dUeXBlLlJPVykge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gaW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICB0aGlzLnNjcm9sbENvdW50LS07XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IHRoaXMuZGF0YS5kYXRhLmxlbmd0aCAtIGN1cnJlbnRJbmRleCAtIDE7XG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLnJldmVyc2UoKS5mb3JFYWNoKChyb3c6IFJvd0RhdGE8VD4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMTAgJiYgaW5kZXggPiBjdXJyZW50SW5kZXggJiYgcm93LnJvd1R5cGUgPT09IFJvd1R5cGUuUk9XKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCk7XG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gIT09IC0xMCkge1xuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IHRoaXMuZGF0YS5kYXRhLmxlbmd0aCAtIG5ld1NlbGVjdGlvbiAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gIT09IC0xMCkge1xuICAgICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLmRhdGEuZGF0YVtuZXdTZWxlY3Rpb25dLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNjcm9sbENvdW50KSA+PSAyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdGUgZWwgZXZlbnRvIGN1YW5kbyBzZSBkYSBjbGljayBhbCBib3RvbiBBZGRSb3dcbiAgICovXG4gIG9uQWRkUm93KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkUm93LmVtaXQoKTtcbiAgfVxuXG4gIG9uQm9va0NsaWNrZWQoc2VsZWN0ZWRPYmplY3Q6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmJvb2tDbGlja2VkLmVtaXQoc2VsZWN0ZWRPYmplY3QpO1xuICB9XG5cbiAgZ2V0SGVhZGVyU3VidGl0bGUoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHg6IHN0cmluZ1tdID0gdGhpcy5jb2x1bW5Db25maWcubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGNvbHVtbi52aXNpYmxlICYmIGNvbHVtbi5zdWJ0aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAnc3VidGl0bGUnICsgaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KS5maWx0ZXIoKGRhdGE6IHN0cmluZykgPT4gZGF0YSAhPSBudWxsKTtcbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIGdldENvbHVtbnNXaXRoVGl0bGUoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbkNvbmZpZy5maWx0ZXIoKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PlxuICAgICAgY29sdW1uLnZpc2libGUgJiYgY29sdW1uLnRpdGxlICE9PSB1bmRlZmluZWRcbiAgICApLm1hcCgoY29sOiBDb2x1bW5Db25maWcpID0+IGNvbC5uYW1lKTtcbiAgfVxuXG4gIGRyYWdnZXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0RyYWdnZWQgJiYgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA+PSAwKSB7XG4gICAgICBjb25zdCByb3dJbmRleDogbnVtYmVyID0gdGhpcy5nZXRSb3dJbmRleChldmVudC5wYWdlWSk7XG4gICAgICBpZiAocm93SW5kZXggIT09IHRoaXMubGFzdEluZGV4Um93RHJhZykge1xuICAgICAgICB0aGlzLmxhc3RJbmRleFJvd0RyYWcgPSByb3dJbmRleDtcbiAgICAgICAgLy8gVGhpcyBjYW4gaGF2ZSBhIG1lbW9yeSBwcm9ibGVtIHdpdGggYmlnIGRhdGFcbiAgICAgICAgY29uc3QgYXJyYXk6IFJvd0RhdGE8VD5bXSA9IFsuLi50aGlzLmRhdGFCZWZvcmVEcmFnLmRhdGFdO1xuICAgICAgICBtb3ZlSXRlbUluQXJyYXkoYXJyYXksIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShhcnJheSk7XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgc3RhcnREcmFnKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xuICAgIHRoaXMubGFzdEluZGV4Um93RHJhZyA9IHRoaXMuaW5kZXhSb3dTdGFydERyYWc7XG4gICAgdGhpcy5kYXRhQmVmb3JlRHJhZyA9IHRoaXMuZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um93SW5kZXgocGFnZVk6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IG9mZnNldFRvcDogbnVtYmVyID0gMDtcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHRoaXMuY29udGFpbmVyVGFibGUubmF0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAoKGNvbnRhaW5lciAhPT0gbnVsbCkgJiYgKG9mZnNldFRvcCA9PT0gMCkpIHtcbiAgICAgIG9mZnNldFRvcCA9IGNvbnRhaW5lci5vZmZzZXRUb3A7XG4gICAgICBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgbGV0IHJvd0luZGV4OiBudW1iZXIgPSAtMTtcbiAgICBjb25zdCByb3dzOiBIVE1MQ29sbGVjdGlvbiA9IHRoaXMubWF0VGFibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdzogSFRNTEVsZW1lbnQgPSAocm93c1tpXSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICBpZiAocGFnZVkgLSBvZmZzZXRUb3AgPiByb3cub2Zmc2V0VG9wIC0gdGhpcy5jb250YWluZXJUYWJsZS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICByb3dJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyb3dJbmRleCA8IDApIHsgcm93SW5kZXggPSAwOyB9XG4gICAgcmV0dXJuIHJvd0luZGV4O1xuICB9XG5cbiAgZ2V0IGNvbHVtblR5cGUoKTogdHlwZW9mIENvbHVtblR5cGUge1xuICAgIHJldHVybiBDb2x1bW5UeXBlO1xuICB9XG5cbn1cbiJdfQ==