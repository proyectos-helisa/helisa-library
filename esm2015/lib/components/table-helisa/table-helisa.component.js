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
            if (this.addBookButton &&
                columnConfiguration.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => x.name === 'bookButton')) === -1) {
                columnConfiguration.push({
                    name: 'bookButton',
                    title: '',
                    visible: true
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRzFFLE9BQU8sRUFHTCw2QkFBNkIsRUFFN0IsZ0JBQWdCLEVBS2hCLFVBQVUsRUFJVixlQUFlLEVBRWYsU0FBUyxFQUNULFVBQVUsRUFFWCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBR3RFLDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYiwwQkFBaUI7Ozs7SUFJakIsY0FBVyxFQUFFLGVBQVksRUFBRSxNQUFHOzs7Ozs7OztBQVVoQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBcUUvQixZQUFvQixZQUFtQztRQUFuQyxpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUEvRHZELHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyw4QkFBeUIsR0FBYSxFQUFFLENBQUM7UUFDekMsaUNBQTRCLEdBQWEsRUFBRSxDQUFDO1FBQzVDLCtCQUEwQixHQUFhLEVBQUUsQ0FBQztRQUkxQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFFdEMsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFD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eUNBQW9DOztJQUNwQyw0Q0FBc0U7O0lBQ3RFLHNDQUFnRTs7SUFDaEUsMkNBQStEOztJQUMvRCw2Q0FBd0M7O0lBQ3hDLDJDQUFxQzs7SUFDckMsMENBQTRCOztJQUM1QiwwQ0FBNEI7Ozs7O0lBTzVCLHlDQUFpQzs7Ozs7SUFLakMseUNBQWlDOzs7OztJQUdyQiw0Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNvcnQsIE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHlwaW5ncy9zb3J0JztcblxuaW1wb3J0IHtcbiAgQWRkUm93QnV0dG9uLFxuICBDZWxsLFxuICBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZSxcbiAgQ29sdW1uQ29uZmlnLFxuICBDb2x1bW5Db25maWdVdGlsLFxuICBDb25maWdDZWxsU3R5bGVzLFxuICBDb25maWdSb3dTdHlsZXMsXG4gIERyb3BFbGVtZW50LFxuICBFdmVudENvbHVtbixcbiAgRXZlbnRTY29wZSxcbiAgRXZlbnRTZWFyY2gsXG4gIFJlcXVlc3RUYWJsZUhlbGlzYSxcbiAgU2VsZWN0T2JqZWN0LFxuICBUYWJsZUhlbGlzYVR5cGUsXG4gIFRvdGFsR3JvdXAsXG4gIFRvdGFsVHlwZSxcbiAgQ29sdW1uVHlwZSxcbiAgVG90YWxUYWJsZUhlbGlzYVxufSBmcm9tICcuL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGFibGVIZWxpc2FTZXJ2aWNlLCBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvIH0gZnJvbSAnLi90YWJsZS1oZWxpc2Euc2VydmljZSc7XG5pbXBvcnQgeyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWhlbGlzYS1jb25uZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvd0RhdGE8VD4ge1xuICBkYXRhOiB7fSB8IFQ7XG4gIHJvd1R5cGU6IFJvd1R5cGU7XG59XG5cbmVudW0gUm93VHlwZSB7XG4gIEdST1VQX1RJVExFLCBHUk9VUF9GT09URVIsIFJPV1xufVxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIHRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDogVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+O1xuICB0b3RhbERhdGE6IEFycmF5PG51bWJlcj47XG4gIHJhd0RhdGE6IEFycmF5PFQ+O1xuICBkYXRhOiBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YTxUPj47XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGU6IHN0cmluZ1tdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGU6IHN0cmluZ1tdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyOiBzdHJpbmdbXSA9IFtdO1xuICBjb2x1bW5Db25maWc6IEFycmF5PENvbHVtbkNvbmZpZz47XG4gIHNlbGVjdGVkT2JqZWN0OiBUO1xuICBsYXN0U2VhcmNoOiBzdHJpbmc7XG4gIHR5cGU6IFRhYmxlSGVsaXNhVHlwZSA9IFRhYmxlSGVsaXNhVHlwZS5MT0NBTDtcbiAgaW5kZXhSb3dTZWxlY3Q6IG51bWJlcjtcbiAgcHJpdmF0ZSBzY3JvbGxDb3VudDogbnVtYmVyID0gMDtcbiAgaGFzU3VidGl0bGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBpbmRleFJvd1N0YXJ0RHJhZzogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgbGFzdEluZGV4Um93RHJhZzogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgZGF0YUJlZm9yZURyYWc6IHsgZGF0YTogUm93RGF0YTxUPltdIH0gPSBudWxsO1xuICBwcml2YXRlIGRhdGFTb3VyY2UkOiBBcnJheTxUPiA9IFtdO1xuICBwcml2YXRlIHNjcm9sbFg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgc2Nyb2xsWTogbnVtYmVyID0gMDtcblxuICBAVmlld0NoaWxkKE1hdFNvcnQpIG1hdFNvcnQ6IE1hdFNvcnQ7XG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUpIG1hdFRhYmxlOiBNYXRUYWJsZTxUPjtcbiAgQFZpZXdDaGlsZChNYXRUYWJsZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pIG1hdFRhYmxlRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyVGFibGUnKSBjb250YWluZXJUYWJsZTogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+KCk7XG4gIEBPdXRwdXQoKSB0b3RhbDogRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+KCk7XG4gIEBPdXRwdXQoKSBzZWFyY2g6IEV2ZW50RW1pdHRlcjxFdmVudFNlYXJjaD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPigpO1xuXG4gIC8qKlxuICAgKiBEZXByZWNhZG8sIGNhbWJpYXIgcG9yIGVsZWN0T2JqZWN0XG4gICAqL1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RDZWxsOiBFdmVudEVtaXR0ZXI8Q2VsbDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENlbGw8VD4+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RPYmplY3Q6IEV2ZW50RW1pdHRlcjxTZWxlY3RPYmplY3Q8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RPYmplY3Q8VD4+KCk7XG4gIEBPdXRwdXQoKSBuZXh0UGFnZTogRXZlbnRFbWl0dGVyPFJlcXVlc3RUYWJsZUhlbGlzYTxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFJlcXVlc3RUYWJsZUhlbGlzYTxUPj4oKTtcbiAgQElucHV0KCkgc2hvd1RpdGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNDZWxsU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGNvbmZpZ0NlbGxTdHlsZXM6IEFycmF5PENvbmZpZ0NlbGxTdHlsZXM8VD4+O1xuICBASW5wdXQoKSBjb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uOiBBcnJheTxDb25maWdSb3dTdHlsZXM8VD4+O1xuICBASW5wdXQoKSBzZWxlY3RlZENlbGxzOiBDZWxsPFQ+O1xuICBAT3V0cHV0KCkgZHJvcDogRXZlbnRFbWl0dGVyPERyb3BFbGVtZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+KCk7XG4gIEBJbnB1dCgpIGlzRHJhZ2dlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhZGRSb3dCdXR0b246IEFkZFJvd0J1dHRvbiA9IHsgc2hvd0J1dHRvbjogZmFsc2UsIHRleHQ6ICcnIH07XG4gIEBPdXRwdXQoKSBhZGRSb3c6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGJvb2tDbGlja2VkOiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gIEBJbnB1dCgpIGFkZEJvb2tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1Rvb2xUaXA6IGJvb2xlYW4gPSB0cnVlO1xuICBzaG93Rm9vdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHNob3dTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG5cbiAgLyoqXG4gICAqIFRpZW1wbyBhbnRlcyBkZSBvY3VsdGFybGEgZWwgbWVuc2FqZSBkZWwgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgaGlkZURlbGF5OiBudW1iZXIgPSA2MDA7XG5cbiAgLyoqXG4gICAqIFRpZW1wbyBhbnRlcyBkZSBtb3N0cmEgZWwgbWVuc2FqZSBkZWwgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlU2VydmljZTogVGFibGVIZWxpc2FTZXJ2aWNlPFQ+KSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlU2VydmljZS5uZXh0UGFnZVJldHVybi5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+KSA9PiB7XG4gICAgICAgIGlmICghZGF0YS50YWJsZSB8fCBkYXRhLnRhYmxlKSB7XG4gICAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLm9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMudGFibGVTZXJ2aWNlLnRvdGFsUmV0dXJuLnN1YnNjcmliZSgoaW5mbzogVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUb3RhbFRhYmxlSGVsaXNhPikgPT4ge1xuICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGNvbHVtbiA9PT0gaW5mby5vYmouY29sdW1uKSB7XG4gICAgICAgICAgICB0aGlzLnRvdGFsRGF0YVtpZHhdID0gdGhpcy5nZXRHcm91cFZhbHVlKGNvbHVtbiwgeyBzdW06IGluZm8ub2JqLnZhbHVlLCBjb3VudDogdGhpcy5jb3VudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubWF0U29ydC5zb3J0Q2hhbmdlLnN1YnNjcmliZShcbiAgICAgIChldmVudDogU29ydCkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW46IENvbHVtbkNvbmZpZyA9IHRoaXMuY29sdW1uQ29uZmlnLmZpbmQoKGM6IENvbHVtbkNvbmZpZykgPT4gYy5uYW1lID09PSBldmVudC5hY3RpdmUpO1xuICAgICAgICBjb2x1bW4uc29ydERpcmVjdGlvbiA9IGV2ZW50LmRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5zb3J0LmVtaXQoeyBjb2x1bW4sIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZywgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUuU09SVCB9KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy50YWJsZVNlcnZpY2UuZW1pdFZpc2libGVCdXR0b24uc3Vic2NyaWJlKFxuICAgICAgKGRhdGE6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMubWF0VGFibGUucmVuZGVyUm93cygpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpc1JlbW90ZSh3OiBib29sZWFuKSB7XG4gICAgdGhpcy50eXBlID0gdyA/IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUgOiBUYWJsZUhlbGlzYVR5cGUuTE9DQUw7XG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgPSBuZXcgVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+KCk7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLlJFTU9URSkge1xuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LnBhZ2UrKztcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY29sdW1uQ29uZmlndXJhdGlvbihjb2x1bW5Db25maWd1cmF0aW9uOiBBcnJheTxDb2x1bW5Db25maWc+KSB7XG4gICAgdGhpcy5oYXNTdWJ0aXRsZSA9IGZhbHNlO1xuICAgIHRoaXMuY29sdW1uQ29uZmlnID0gY29sdW1uQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpO1xuXG4gICAgaWYgKGNvbHVtbkNvbmZpZ3VyYXRpb24pIHtcbiAgICAgIGlmICh0aGlzLmFkZEJvb2tCdXR0b24gJiZcbiAgICAgICAgY29sdW1uQ29uZmlndXJhdGlvbi5maW5kSW5kZXgoKHg6IENvbHVtbkNvbmZpZykgPT4geC5uYW1lID09PSAnYm9va0J1dHRvbicpID09PSAtMSkge1xuICAgICAgICBjb2x1bW5Db25maWd1cmF0aW9uLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdib29rQnV0dG9uJyxcbiAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29sdW1uQ29uZmlndXJhdGlvbi5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaChjb2x1bW4ubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmhhc1N1YnRpdGxlKSB7XG4gICAgICAgICAgdGhpcy5oYXNTdWJ0aXRsZSA9IGNvbHVtbi5zdWJ0aXRsZSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnJhd0RhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5yYXdEYXRhO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZS5sZW5ndGgpO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZS5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLmxlbmd0aCk7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aEZvb3Rlci5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aEZvb3Rlci5sZW5ndGgpO1xuICAgIHRoaXMuZ2V0Q29sdW1uc1dpdGhUaXRsZSgpLmZvckVhY2goKGNvbDogc3RyaW5nKSA9PiB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUucHVzaChjb2wpKTtcbiAgICB0aGlzLmdldEhlYWRlclN1YnRpdGxlKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZS5wdXNoKGNvbCkpO1xuICAgIHRoaXMuZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpLmZvckVhY2goKGNvbDogc3RyaW5nKSA9PiB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLnB1c2goY29sKSk7XG4gIH1cblxuXG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGFTb3VyY2UoZGF0YVNvdXJjZTogQXJyYXk8VD4pIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UkID0gZGF0YVNvdXJjZTtcbiAgICB0aGlzLnJhd0RhdGEgPSBkYXRhU291cmNlO1xuICAgIGlmICh0aGlzLnJhd0RhdGEpIHsgdGhpcy5wcmVwYXJlRGF0YVNvdXJjZSgpOyB9XG4gIH1cblxuICBnZXQgZGF0YVNvdXJjZSgpOiBBcnJheTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZSQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2VsZWN0ZWRJbmRleFJvdyhpZFJvd1NlbGVjdGVkOiBudW1iZXIpIHtcbiAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gaWRSb3dTZWxlY3RlZDtcbiAgICBpZiAodGhpcy5yYXdEYXRhICYmIHRoaXMucmF3RGF0YS5sZW5ndGgpIHtcbiAgICAgIGlmICgoaWRSb3dTZWxlY3RlZCA+PSB0aGlzLnJhd0RhdGEubGVuZ3RoIHx8IGlkUm93U2VsZWN0ZWQgPCAwKSkge1xuICAgICAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0Um93KHsgZGF0YTogdGhpcy5yYXdEYXRhW3RoaXMuaW5kZXhSb3dTZWxlY3RdLCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9LCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlRGF0YVNvdXJjZSgpOiB2b2lkIHtcbiAgICBjb25zdCBjaGFuZ2VEYXRhOiBBcnJheTxSb3dEYXRhPFQ+PiA9IEFycmF5PFJvd0RhdGE8VD4+KCk7XG4gICAgbGV0IGhhdmVHcm91cDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBncm91cEZvb3RlcjogQXJyYXk8VG90YWxHcm91cD47XG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcbiAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQgJiYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMIHx8IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LnBhZ2UgPD0gMSkpIHtcbiAgICAgICAgdGhpcy50b3RhbERhdGEgPSBuZXcgQXJyYXk8bnVtYmVyPih0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGgpO1xuICAgICAgICB0aGlzLnNob3dGb290ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvdGFsLmVtaXQoeyBjb2x1bW4sIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZywgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUuVE9UQUwgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNob3dTZWFyY2ggPSB0aGlzLnNob3dTZWFyY2ggfHwgY29sdW1uLnNlYXJjaGFibGU7XG4gICAgICBoYXZlR3JvdXAgPSBoYXZlR3JvdXAgfHwgY29sdW1uLmdyb3VwYWJsZTtcbiAgICB9KTtcbiAgICBpZiAoaGF2ZUdyb3VwKSB7XG4gICAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuc29ydCgoYTogVCwgYjogVCkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBudW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuY29tcGFyZShhLCBiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucmF3RGF0YS5mb3JFYWNoKChyb3c6IFQpID0+IHtcbiAgICAgIGlmIChoYXZlR3JvdXAgJiYgKGNoYW5nZURhdGEubGVuZ3RoID09PSAwIHx8IHRoaXMuY29tcGFyZShjaGFuZ2VEYXRhW2NoYW5nZURhdGEubGVuZ3RoIC0gMV0uZGF0YSBhcyBULCByb3cpICE9PSAwKSkge1xuICAgICAgICBpZiAoZ3JvdXBGb290ZXIpIHtcbiAgICAgICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiBncm91cEZvb3Rlciwgcm93VHlwZTogUm93VHlwZS5HUk9VUF9GT09URVIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX1RJVExFIH0pO1xuICAgICAgICBncm91cEZvb3RlciA9IG5ldyBBcnJheTxUb3RhbEdyb3VwPih0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgaWYgKGhhdmVHcm91cCkgeyB0aGlzLmFkZFRvdGFsR3JvdXAoZ3JvdXBGb290ZXIsIHJvdyk7IH1cbiAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IHJvdywgcm93VHlwZTogUm93VHlwZS5ST1cgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPFQ+PihjaGFuZ2VEYXRhKTtcbiAgICBpZiAodGhpcy5yYXdEYXRhICYmIHRoaXMucmF3RGF0YS5sZW5ndGggJiYgdGhpcy5pbmRleFJvd1NlbGVjdCAmJiAhdGhpcy5zZWxlY3RlZE9iamVjdCkge1xuICAgICAgaWYgKHRoaXMuaW5kZXhSb3dTZWxlY3QgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCB0aGlzLmluZGV4Um93U2VsZWN0IDwgMCkge1xuICAgICAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0Um93KHsgZGF0YTogdGhpcy5yYXdEYXRhW3RoaXMuaW5kZXhSb3dTZWxlY3RdLCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9LCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRUb3RhbEdyb3VwKHJvd1RvdGFsOiBBcnJheTxUb3RhbEdyb3VwPiwgcm93OiBUKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHJvd1RvdGFsW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdID0geyBzdW06IChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKHJvdywgY29sdW1uKSBhcyBudW1iZXIpLCBjb3VudDogMSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5zdW0gKz0gKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUocm93LCBjb2x1bW4pIGFzIG51bWJlcik7XG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcGFyZShhOiBULCBiOiBUKTogbnVtYmVyIHtcbiAgICBsZXQgd3M6IG51bWJlciA9IDA7XG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcbiAgICAgIGlmICh3cyA9PT0gMCAmJiBjb2x1bW4uZ3JvdXBhYmxlKSB7XG4gICAgICAgIGlmICgobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShhLCBjb2x1bW4pIGFzIG51bWJlcikgPCAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShiLCBjb2x1bW4pIGFzIG51bWJlcikpIHtcbiAgICAgICAgICB3cyA9IC0xO1xuICAgICAgICB9IGVsc2UgaWYgKChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKGEsIGNvbHVtbikgYXMgbnVtYmVyKSA+IChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKGIsIGNvbHVtbikgYXMgbnVtYmVyKSkge1xuICAgICAgICAgIHdzID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB3cztcbiAgfVxuXG4gIGdldEdyb3VwRGVzY3JpcHRpb24ob2JqOiBUKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSAnJztcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuICAgICAgaWYgKGNvbHVtbi5ncm91cGFibGUpIHtcbiAgICAgICAgcmVzdWx0ICs9IChyZXN1bHQubGVuZ3RoID8gJyAtICcgOiAnJykgKyAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShvYmosIGNvbHVtbikpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpc0dyb3VwVGl0bGUoaW5kZXg6IG51bWJlciwgaXRlbTogUm93RGF0YTxUPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfVElUTEU7XG4gIH1cblxuICBpc1JvdyhpbmRleDogbnVtYmVyLCBpdGVtOiBSb3dEYXRhPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5ST1c7XG4gIH1cblxuICBpc0dyb3VwRm9vdGVyKGluZGV4OiBudW1iZXIsIGl0ZW06IFJvd0RhdGE8VD4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLkdST1VQX0ZPT1RFUjtcbiAgfVxuXG4gIGZvb3RlckRpc3BsYXllZENvbHVtbnMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5tYXAoKG5hbWU6IHN0cmluZykgPT4gJ2Zvb3Rlci0nICsgbmFtZSk7XG4gIH1cblxuICBnZXRHcm91cFZhbHVlKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBkYXRhOiBUb3RhbEdyb3VwKTogbnVtYmVyIHtcbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLlNVTSkgeyByZXR1cm4gZGF0YS5zdW07IH1cbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLkNPVU5UKSB7IHJldHVybiBkYXRhLmNvdW50OyB9XG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5BVkVSQUdFKSB7IHJldHVybiAxLiAqIGRhdGEuc3VtIC8gZGF0YS5jb3VudDsgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRWYWx1ZShvYmo6IFQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogVCB7XG4gICAgcmV0dXJuIG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUob2JqLCBjb2x1bW4pIGFzIFQ7XG4gIH1cblxuICBnZXRWYWx1ZVRvb2x0aXAob2JqOiBULCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2hvd1Rvb2xUaXApIHtcbiAgICAgIHJldHVybiBuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaFRleHQodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sYXN0U2VhcmNoID0gdGV4dDtcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHsgdGV4dCwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnIH0pO1xuICB9XG5cbiAgc2VsZWN0Um93KHJvdzogUm93RGF0YTxUPiwgaXNVc2VyOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHJvdy5kYXRhIGFzIFQ7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcbiAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRPYmplY3QsIHNjb3BlOiBpc1VzZXIgPyBFdmVudFNjb3BlLlVTRVIgOiBFdmVudFNjb3BlLkNPREVfQ0FMTCB9KTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGxldCBpc1Njcm9sbFk6IGJvb2xlYW47XG5cbiAgICBpZiAodGhpcy5zY3JvbGxZICE9PSBlbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgaXNTY3JvbGxZID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2Nyb2xsWSA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgdGhpcy5zY3JvbGxYID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjcm9sbFggIT09IGVsZW1lbnQuc2Nyb2xsTGVmdCkge1xuICAgICAgaXNTY3JvbGxZID0gZmFsc2U7XG4gICAgICB0aGlzLnNjcm9sbFkgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHRoaXMuc2Nyb2xsWCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBpZiAoKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxUb3AgPCAxMDAwKSAmJiBpc1Njcm9sbFkpIHtcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBnb05leHRQYWdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNMYXN0UGFnZSAmJiAhdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkKSB7XG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5uZXh0UGFnZS5lbWl0KHtcbiAgICAgICAgcGFnZTogdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQubmV4dFBhZ2UoKSxcbiAgICAgICAgYm9keTogdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuZ2V0Qm9keSh0aGlzLmNvbHVtbkNvbmZpZywgdGhpcy5sYXN0U2VhcmNoKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWNlaXZlUGFnZShkYXRhOiBUW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmF3RGF0YSkge1xuICAgICAgdGhpcy5yYXdEYXRhID0gbmV3IEFycmF5PFQ+KCk7XG4gICAgfVxuICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5jb25jYXQoZGF0YSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5yYXdEYXRhO1xuICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgPSBkYXRhLmxlbmd0aCA9PT0gMDtcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGRibENsaWNrQ2VsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdENlbGwuZW1pdCh0aGlzLnNlbGVjdGVkQ2VsbHMgYXMgQ2VsbDxUPik7XG4gIH1cblxuICBzZWxlY3RlZENlbGwoZWxlbWVudDogUm93RGF0YTxUPiwgY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkQ2VsbHMgPSB7IGNvbHVtbiwgcm93OiBlbGVtZW50IH07XG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWRDZWxsKHJvdzogUm93RGF0YTxUPiwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2VsbHMgIT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENlbGxzLmNvbHVtbi5uYW1lID09PSBjb2x1bW4ubmFtZSAmJlxuICAgICAgICAgICh0aGlzLnNlbGVjdGVkQ2VsbHMucm93IGFzIFJvd0RhdGE8VD4pLmRhdGEgPT09IHJvdy5kYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0Q2xhc3NUb0NlbGwocm93OiBULCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjbGFzc1RvQ2VsbDogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgaWYgKHRoaXMuY29uZmlnQ2VsbFN0eWxlcykge1xuICAgICAgY29uc3QgZm91bmQ6IENvbmZpZ0NlbGxTdHlsZXM8VD4gPSB0aGlzLmNvbmZpZ0NlbGxTdHlsZXMuZmluZCgoYzogQ29uZmlnQ2VsbFN0eWxlczxUPikgPT4ge1xuICAgICAgICByZXR1cm4gYy5jZWxsRGF0YSA9PT0gdGhpcy5nZXRWYWx1ZShyb3csIGNvbHVtbik7XG4gICAgICB9KTtcbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBjbGFzc1RvQ2VsbC5wdXNoKGZvdW5kLmNsYXNzQ2VsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb2x1bW4uY29sdW1uU3R5bGUpIHtcbiAgICAgIGNsYXNzVG9DZWxsLnB1c2goY29sdW1uLmNvbHVtblN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzVG9DZWxsO1xuICB9XG5cbiAgZ2V0Q2xhc3NUb1Jvdyhyb3c6IFQpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2xhc3NUb1JvdzogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgaWYgKHJvdyA9PT0gdGhpcy5zZWxlY3RlZE9iamVjdCAmJiAhdGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgIGNsYXNzVG9Sb3cucHVzaCgnJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4pIHtcbiAgICAgIGNvbnN0IGZvdW5kOiBDb25maWdSb3dTdHlsZXM8VD4gPSB0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4uZmluZCgoYzogQ29uZmlnUm93U3R5bGVzPFQ+KSA9PiB7XG4gICAgICAgIHJldHVybiBjLmRhdGEgPT09IHRoaXMuZ2V0VmFsdWUocm93LCBjLmNvbHVtbik7XG4gICAgICB9KTtcbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBjbGFzc1RvUm93LnB1c2goZm91bmQuY2xhc3NSb3cpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xhc3NUb1JvdztcbiAgfVxuXG4gIG9uRHJvcChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRHJhZ2dlZCAmJiB0aGlzLmluZGV4Um93U3RhcnREcmFnID49IDApIHtcbiAgICAgIGNvbnN0IHJvd0luZGV4OiBudW1iZXIgPSB0aGlzLmdldFJvd0luZGV4KGV2ZW50LnBhZ2VZKTtcbiAgICAgIGNvbnN0IGFycmF5OiBSb3dEYXRhPFQ+W10gPSB0aGlzLmRhdGFCZWZvcmVEcmFnLmRhdGE7XG4gICAgICBjb25zdCByYXdEYXRhOiBUW10gPSB0aGlzLnJhd0RhdGE7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoYXJyYXksIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShyYXdEYXRhLCB0aGlzLmluZGV4Um93U3RhcnREcmFnLCByb3dJbmRleCk7XG4gICAgICB0aGlzLmRyb3AuZW1pdCh7IHZhbHVlOiBhcnJheVtyb3dJbmRleF0uZGF0YSBhcyBULCBvcmRlcjogcm93SW5kZXggfSk7XG4gICAgICB0aGlzLnJhd0RhdGEgPSByYXdEYXRhO1xuICAgICAgdGhpcy5kYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShhcnJheSk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICB0YWJsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICBsZXQgY3VycmVudEluZGV4OiBudW1iZXIgPSB0aGlzLmRhdGEuZGF0YS5maW5kSW5kZXgoKHJvdzogUm93RGF0YTxUPikgPT4gcm93LmRhdGEgPT09IHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xuICAgICAgbGV0IG5ld1NlbGVjdGlvbjogbnVtYmVyID0gLTEwO1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCsrO1xuICAgICAgICB0aGlzLmRhdGEuZGF0YS5mb3JFYWNoKChyb3c6IFJvd0RhdGE8VD4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMTAgJiYgaW5kZXggPiBjdXJyZW50SW5kZXggJiYgcm93LnJvd1R5cGUgPT09IFJvd1R5cGUuUk9XKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQtLTtcbiAgICAgICAgY3VycmVudEluZGV4ID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoIC0gY3VycmVudEluZGV4IC0gMTtcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEucmV2ZXJzZSgpLmZvckVhY2goKHJvdzogUm93RGF0YTxUPiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xMCAmJiBpbmRleCA+IGN1cnJlbnRJbmRleCAmJiByb3cucm93VHlwZSA9PT0gUm93VHlwZS5ST1cpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IGluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLnJldmVyc2UoKTtcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiAhPT0gLTEwKSB7XG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoIC0gbmV3U2VsZWN0aW9uIC0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiAhPT0gLTEwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMuZGF0YS5kYXRhW25ld1NlbGVjdGlvbl0sIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc2Nyb2xsQ291bnQpID49IDIpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0ZSBlbCBldmVudG8gY3VhbmRvIHNlIGRhIGNsaWNrIGFsIGJvdG9uIEFkZFJvd1xuICAgKi9cbiAgb25BZGRSb3coKTogdm9pZCB7XG4gICAgdGhpcy5hZGRSb3cuZW1pdCgpO1xuICB9XG5cbiAgb25Cb29rQ2xpY2tlZChzZWxlY3RlZE9iamVjdDogVCk6IHZvaWQge1xuICAgIHRoaXMuYm9va0NsaWNrZWQuZW1pdChzZWxlY3RlZE9iamVjdCk7XG4gIH1cblxuICBnZXRIZWFkZXJTdWJ0aXRsZSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeDogc3RyaW5nW10gPSB0aGlzLmNvbHVtbkNvbmZpZy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoY29sdW1uLnZpc2libGUgJiYgY29sdW1uLnN1YnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuICdzdWJ0aXRsZScgKyBpbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pLmZpbHRlcigoZGF0YTogc3RyaW5nKSA9PiBkYXRhICE9IG51bGwpO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgZ2V0Q29sdW1uc1dpdGhUaXRsZSgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uQ29uZmlnLmZpbHRlcigoY29sdW1uOiBDb2x1bW5Db25maWcpID0+XG4gICAgICBjb2x1bW4udmlzaWJsZSAmJiBjb2x1bW4udGl0bGUgIT09IHVuZGVmaW5lZFxuICAgICkubWFwKChjb2w6IENvbHVtbkNvbmZpZykgPT4gY29sLm5hbWUpO1xuICB9XG5cbiAgZHJhZ2dlcihldmVudDogTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzRHJhZ2dlZCAmJiB0aGlzLmluZGV4Um93U3RhcnREcmFnID49IDApIHtcbiAgICAgIGNvbnN0IHJvd0luZGV4OiBudW1iZXIgPSB0aGlzLmdldFJvd0luZGV4KGV2ZW50LnBhZ2VZKTtcbiAgICAgIGlmIChyb3dJbmRleCAhPT0gdGhpcy5sYXN0SW5kZXhSb3dEcmFnKSB7XG4gICAgICAgIHRoaXMubGFzdEluZGV4Um93RHJhZyA9IHJvd0luZGV4O1xuICAgICAgICAvLyBUaGlzIGNhbiBoYXZlIGEgbWVtb3J5IHByb2JsZW0gd2l0aCBiaWcgZGF0YVxuICAgICAgICBjb25zdCBhcnJheTogUm93RGF0YTxUPltdID0gWy4uLnRoaXMuZGF0YUJlZm9yZURyYWcuZGF0YV07XG4gICAgICAgIG1vdmVJdGVtSW5BcnJheShhcnJheSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGFycmF5KTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzdGFydERyYWcoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmluZGV4Um93U3RhcnREcmFnID0gdGhpcy5nZXRSb3dJbmRleChldmVudC5wYWdlWSk7XG4gICAgdGhpcy5sYXN0SW5kZXhSb3dEcmFnID0gdGhpcy5pbmRleFJvd1N0YXJ0RHJhZztcbiAgICB0aGlzLmRhdGFCZWZvcmVEcmFnID0gdGhpcy5kYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3dJbmRleChwYWdlWTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgb2Zmc2V0VG9wOiBudW1iZXIgPSAwO1xuICAgIGxldCBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy5jb250YWluZXJUYWJsZS5uYXRpdmVFbGVtZW50O1xuICAgIHdoaWxlICgoY29udGFpbmVyICE9PSBudWxsKSAmJiAob2Zmc2V0VG9wID09PSAwKSkge1xuICAgICAgb2Zmc2V0VG9wID0gY29udGFpbmVyLm9mZnNldFRvcDtcbiAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICBsZXQgcm93SW5kZXg6IG51bWJlciA9IC0xO1xuICAgIGNvbnN0IHJvd3M6IEhUTUxDb2xsZWN0aW9uID0gdGhpcy5tYXRUYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93OiBIVE1MRWxlbWVudCA9IChyb3dzW2ldIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgIGlmIChwYWdlWSAtIG9mZnNldFRvcCA+IHJvdy5vZmZzZXRUb3AgLSB0aGlzLmNvbnRhaW5lclRhYmxlLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wKSB7XG4gICAgICAgIHJvd0luZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJvd0luZGV4IDwgMCkgeyByb3dJbmRleCA9IDA7IH1cbiAgICByZXR1cm4gcm93SW5kZXg7XG4gIH1cblxuICBnZXQgY29sdW1uVHlwZSgpOiB0eXBlb2YgQ29sdW1uVHlwZSB7XG4gICAgcmV0dXJuIENvbHVtblR5cGU7XG4gIH1cblxufVxuIl19