import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ChangeColumnConfigurationType, ColumnConfigUtil, EventScope, TableHelisaType, TotalType, ColumnType } from './table-helisa.interface';
import { TableHelisaService } from './table-helisa.service';
import { TableHelisaConnectComponent } from './table-helisa-connect.component';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { ResizeConfig, TypeResizeEnum } from '../dependency-table-helisa/dependency-table-helisa.component';
var RowType;
(function (RowType) {
    RowType[RowType["GROUP_TITLE"] = 0] = "GROUP_TITLE";
    RowType[RowType["GROUP_FOOTER"] = 1] = "GROUP_FOOTER";
    RowType[RowType["ROW"] = 2] = "ROW";
})(RowType || (RowType = {}));
export class TableHelisaComponent {
    constructor(tableService) {
        this.tableService = tableService;
        this.data = new MatTableDataSource([]);
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
        this.selectToImport = new EventEmitter();
        this.selectObject = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.showTitle = true;
        this.isCellSelection = false;
        this.drop = new EventEmitter();
        this.isDragged = false;
        this.addRowButton = { showButton: false, text: '', isDisabled: false, toolTipText: '' };
        this.emptyMessageForColumn = { isEnabled: false, text: '' };
        this.addRow = new EventEmitter();
        this.bookClicked = new EventEmitter();
        this.addBookButton = false;
        this.showToolTip = true;
        this.tableIndex = 0;
        this.resizeConfig = new ResizeConfig();
        this.afterViewInit = new EventEmitter();
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
        this.modeImportEnabled = false;
    }
    ngOnInit() {
        this.reloadColumnConfig();
        this.tableService.nextPageReturn.subscribe((data) => {
            if (!data.table || data.table === this) {
                this.receivePage(data.obj);
            }
        });
        this.tableService.totalReturn.subscribe((info) => {
            if (info) {
                this.columnConfig.forEach((column, idx) => {
                    if (column === info.obj.column) {
                        this.totalData[idx] = this.getGroupValue(column, { sum: info.obj.value, count: this.count });
                    }
                });
            }
        });
        this.matSort.sortChange.subscribe((event) => {
            const column = this.columnConfig.find((c) => c.name === event.active);
            column.sortDirection = event.direction;
            this.sort.emit({ column, columnConfigurations: this.columnConfig, type: ChangeColumnConfigurationType.SORT });
        });
        this.tableService.emitVisibleButton.subscribe((data) => {
            if (data !== undefined && data != null) {
                this.addRowButton.showButton = data;
            }
        });
        this.reload();
    }
    ngAfterViewInit() {
        if (this.isCellSelection) {
            this.matTable.renderRows();
        }
        if (this.resizeConfig.enableResize) {
            this.afterViewInit.emit({
                uuid: this.resizeConfig.uuid
            });
        }
    }
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
    set columnConfiguration(columnConfiguration) {
        this.columnConfig = columnConfiguration;
        this.reload();
        this.reloadColumnConfig();
    }
    set dataSource(dataSource) {
        this.dataSource$ = dataSource;
        this.rawData = dataSource;
        this.reload();
    }
    get dataSource() {
        return this.dataSource$;
    }
    set selectedIndexRow(idRowSelected) {
        this.indexRowSelect = idRowSelected;
        if (this.rawData && this.rawData.length) {
            if ((idRowSelected >= this.rawData.length || idRowSelected < 0)) {
                this.indexRowSelect = 0;
            }
            this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
        }
    }
    reloadColumnConfig() {
        this.hasSubtitle = false;
        this.displayedColumns.splice(0, this.displayedColumns.length);
        if (this.columnConfig) {
            if (this.addBookButton) {
                const columnCount = this.columnConfig.length;
                let countSubtitle = 0;
                let showBookButton = false;
                this.columnConfig.forEach((column) => {
                    if (!!column.subtitle) {
                        countSubtitle = countSubtitle + 1;
                    }
                    if ((!showBookButton) && (column.name === 'bookButton')) {
                        showBookButton = true;
                    }
                });
                const subtitleTemp = columnCount === countSubtitle;
                if (!showBookButton) {
                    this.columnConfig.push({
                        name: 'bookButton',
                        title: '',
                        subtitle: subtitleTemp ? '' : undefined,
                        visible: true
                    });
                }
            }
            this.columnConfig.forEach((column) => {
                if (column.visible) {
                    this.displayedColumns.push(column.name);
                }
                if (!this.hasSubtitle) {
                    this.hasSubtitle = column.subtitle !== undefined;
                }
            });
            if (this.rawData) {
                this.dataSource = this.rawData;
            }
        }
        this.displayedColumnsWithTitle.splice(0, this.displayedColumnsWithTitle.length);
        this.displayedColumnsWithSubtitle.splice(0, this.displayedColumnsWithSubtitle.length);
        this.displayedColumnsWithFooter.splice(0, this.displayedColumnsWithFooter.length);
        this.getColumnsWithTitle().forEach((col) => this.displayedColumnsWithTitle.push(col));
        this.getHeaderSubtitle().forEach((col) => this.displayedColumnsWithSubtitle.push(col));
        this.footerDisplayedColumns().forEach((col) => this.displayedColumnsWithFooter.push(col));
    }
    reload() {
        if (this.columnConfig) {
            const changeData = Array();
            let haveGroup = false;
            let groupFooter;
            this.columnConfig.forEach((column) => {
                if (column.totalType !== undefined && (this.type === TableHelisaType.LOCAL || this.tableHelisaConnectComponent.page <= 1)) {
                    this.totalData = new Array(this.columnConfig.length);
                    this.showFooter = true;
                    this.total.emit({ column, columnConfigurations: this.columnConfig, type: ChangeColumnConfigurationType.TOTAL });
                }
                this.showSearch = this.showSearch || column.searchable;
                haveGroup = haveGroup || column.groupable;
            });
            if (haveGroup) {
                this.rawData = this.rawData.sort((a, b) => {
                    let result = 0;
                    this.columnConfig.forEach((column) => {
                        if (result === 0) {
                            result = this.compare(a, b);
                        }
                    });
                    return result;
                });
            }
            if (this.rawData) {
                this.rawData.forEach((row) => {
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
                });
                this.data = new MatTableDataSource(changeData);
            }
            if (this.rawData && this.rawData.length && this.indexRowSelect && !this.selectedObject) {
                if (this.indexRowSelect >= this.rawData.length || this.indexRowSelect < 0) {
                    this.indexRowSelect = 0;
                }
                this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
            }
        }
    }
    addTotalGroup(rowTotal, row) {
        this.columnConfig.forEach((column, index) => {
            if (column.totalType !== undefined) {
                if (rowTotal[index] === undefined) {
                    rowTotal[index] = { sum: new ColumnConfigUtil().getValue(row, column), count: 1 };
                }
                else {
                    rowTotal[index].sum += new ColumnConfigUtil().getValue(row, column);
                    rowTotal[index].count++;
                }
            }
        });
    }
    compare(a, b) {
        let ws = 0;
        this.columnConfig.forEach((column) => {
            if (ws === 0 && column.groupable) {
                if (new ColumnConfigUtil().getValue(a, column) < new ColumnConfigUtil().getValue(b, column)) {
                    ws = -1;
                }
                else if (new ColumnConfigUtil().getValue(a, column) > new ColumnConfigUtil().getValue(b, column)) {
                    ws = 1;
                }
            }
        });
        return ws;
    }
    getGroupDescription(obj) {
        let result = '';
        this.columnConfig.forEach((column) => {
            if (column.groupable) {
                result += (result.length ? ' - ' : '') + (new ColumnConfigUtil().getValue(obj, column));
            }
        });
        return result;
    }
    isGroupTitle(index, item) {
        return item.rowType === RowType.GROUP_TITLE;
    }
    isRow(index, item) {
        return item.rowType === RowType.ROW;
    }
    isGroupFooter(index, item) {
        return item.rowType === RowType.GROUP_FOOTER;
    }
    footerDisplayedColumns() {
        return this.displayedColumns.map((name) => 'footer-' + name);
    }
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
    getValue(obj, column) {
        return new ColumnConfigUtil().getValue(obj, column);
    }
    getValueTooltip(obj, column) {
        if (this.showToolTip) {
            return new ColumnConfigUtil().getValue(obj, column);
        }
        else {
            return null;
        }
    }
    searchText(text) {
        this.lastSearch = text;
        this.search.emit({ text, columnConfigurations: this.columnConfig });
    }
    selectRow(row, isUser, column) {
        if (row === undefined || row === null) {
            return;
        }
        if ((column === undefined || column === null) || (!!column && column.name !== 'bookButton')) {
            this.selectedObject = row.data;
            this.select.emit(this.selectedObject);
            this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
        }
        else if (!!column && column.name === 'bookButton') {
            if (this.selectedObject !== row.data) {
                this.selectedObject = row.data;
                this.select.emit(this.selectedObject);
                this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
            }
            this.bookClicked.emit(this.selectedObject);
        }
    }
    onScroll(event) {
        const element = event.target;
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
    goNextPage() {
        if (!this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
            this.tableHelisaConnectComponent.isUsed = true;
            this.nextPage.emit({
                page: this.tableHelisaConnectComponent.nextPage(),
                body: this.tableHelisaConnectComponent.getBody(this.columnConfig, this.lastSearch)
            });
        }
    }
    receivePage(data) {
        if (!this.rawData) {
            this.rawData = new Array();
        }
        this.rawData = this.rawData.concat(data);
        this.dataSource = this.rawData;
        this.tableHelisaConnectComponent.isLastPage = data.length === 0;
        this.tableHelisaConnectComponent.isUsed = false;
    }
    dblClickCell() {
        this.selectCell.emit(this.selectedCells);
    }
    selectedCell(element, column) {
        if (column.isSelectable === undefined || column.isSelectable === null || column.isSelectable) {
            this.selectRow(element, true, column);
            this.selectedCells = { column, row: element };
            this.selectCell.emit(this.selectedCells);
        }
    }
    isSelectedCell(row, column) {
        if (this.isCellSelection && !this.modeImportEnabled) {
            if (this.selectedCells != null) {
                if (this.selectedCells.column.name === column.name &&
                    this.selectedCells.row.data === row.data) {
                    return true;
                }
            }
        }
        return false;
    }
    getClassToCell(row, column) {
        const classToCell = new Array();
        if (this.modeImportEnabled) {
            classToCell.push('hw-color-gray');
        }
        if (this.configCellStyles) {
            const found = this.configCellStyles.find((c) => {
                return c.cellData === this.getValue(row, column);
            });
            if (found) {
                classToCell.push(found.classCell);
            }
        }
        if (column.columnStyle) {
            classToCell.push(column.columnStyle);
        }
        return classToCell;
    }
    getClassToColumn() {
        return this.configColumnClass;
    }
    getClassToRow(row) {
        const classToRow = new Array();
        if (row === this.selectedObject && !this.isCellSelection) {
            classToRow.push('');
        }
        if (this.configRowStylesFromColumn) {
            const founds = this.configRowStylesFromColumn.filter((c) => {
                return c.data === this.getValue(row, c.column);
            });
            if (founds) {
                founds.forEach((c) => {
                    classToRow.push(c.classRow);
                });
            }
        }
        return classToRow;
    }
    onDrop(event) {
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            const rowIndex = this.getRowIndex(event.pageY);
            const array = this.dataBeforeDrag.data;
            const rawData = this.rawData;
            moveItemInArray(array, this.indexRowStartDrag, rowIndex);
            moveItemInArray(rawData, this.indexRowStartDrag, rowIndex);
            this.drop.emit({ value: array[rowIndex].data, order: rowIndex });
            this.rawData = rawData;
            this.data = new MatTableDataSource(array);
            event.stopPropagation();
        }
    }
    tableKeydown(event) {
        if (this.modeImportEnabled) {
            if (event.code === 'Space' || event.key === 'Insert' || event.key === 'Delete') {
                event.preventDefault();
                event.stopPropagation();
                this.selectToImport.emit({ value: this.selectedObject, scope: EventScope.USER, keyActionImport: event.key });
            }
        }
        if (!this.isCellSelection) {
            this.arrowsEvents(event);
        }
    }
    arrowsEvents(event) {
        let currentIndex = this.data.data.findIndex((row) => row.data === this.selectedObject);
        let newSelection = -10;
        if (event.key === 'ArrowDown') {
            this.scrollCount++;
            this.data.data.forEach((row, index) => {
                if (newSelection === -10 && index > currentIndex && row.rowType === RowType.ROW) {
                    newSelection = index;
                }
            });
        }
        if (event.key === 'ArrowUp') {
            this.scrollCount--;
            currentIndex = this.data.data.length - currentIndex - 1;
            this.data.data.reverse().forEach((row, index) => {
                if (newSelection === -10 && index > currentIndex && row.rowType === RowType.ROW) {
                    newSelection = index;
                }
            });
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
    /**
     * Emite el evento cuando se da click al boton AddRow
     */
    onAddRow() {
        this.addRow.emit();
    }
    getHeaderSubtitle() {
        const x = this.columnConfig.map((column, index) => {
            if (column.visible && column.subtitle !== undefined) {
                return 'subtitle' + index;
            }
            else {
                return null;
            }
        }).filter((data) => data != null);
        return x;
    }
    getColumnsWithTitle() {
        return this.columnConfig.filter((column) => column.visible && column.title !== undefined).map((col) => col.name);
    }
    dragger(event) {
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            const rowIndex = this.getRowIndex(event.pageY);
            if (rowIndex !== this.lastIndexRowDrag) {
                this.lastIndexRowDrag = rowIndex;
                // This can have a memory problem with big data
                const array = [...this.dataBeforeDrag.data];
                moveItemInArray(array, this.indexRowStartDrag, rowIndex);
                this.data = new MatTableDataSource(array);
            }
            event.preventDefault();
            return true;
        }
    }
    startDrag(event) {
        this.indexRowStartDrag = this.getRowIndex(event.pageY);
        this.lastIndexRowDrag = this.indexRowStartDrag;
        this.dataBeforeDrag = this.data;
    }
    getRowIndex(pageY) {
        let offsetTop = 0;
        let container = this.containerTable.nativeElement;
        while ((container !== null) && (offsetTop === 0)) {
            offsetTop = container.offsetTop;
            container = container.parentElement;
        }
        let rowIndex = -1;
        const rows = this.matTableElement.nativeElement.children[1].children;
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (pageY - offsetTop > row.offsetTop - this.containerTable.nativeElement.scrollTop) {
                rowIndex = i;
            }
        }
        if (rowIndex < 0) {
            rowIndex = 0;
        }
        return rowIndex;
    }
    get columnType() {
        return ColumnType;
    }
    showMessageEmpty(data) {
        if (this.emptyMessageForColumn.isEnabled) {
            if ((!data.filteredData) || (data.filteredData && data.filteredData.length === 0)) {
                return true;
            }
        }
        return false;
    }
    getMessageEmtpy() {
        return this.emptyMessageForColumn.text;
    }
    getIfButtonDisabled() {
        if (this.addRowButton && (this.addRowButton.isDisabled !== undefined && this.addRowButton.isDisabled !== null)) {
            if (this.addRowButton.isDisabled) {
                return true;
            }
        }
        return false;
    }
    getToolTipButtonMessage() {
        if (this.getIfButtonDisabled()) {
            return this.addRowButton.toolTipText;
        }
        return '';
    }
    isResizingTable() {
        return this.resizeConfig.enableResize && (this.resizeConfig.typeResize === TypeResizeEnum.BOTH || this.resizeConfig.typeResize === TypeResizeEnum.ONLY_TABLES);
    }
    isResizingCell() {
        return this.resizeConfig.enableResize && (this.resizeConfig.typeResize === TypeResizeEnum.BOTH || this.resizeConfig.typeResize === TypeResizeEnum.ONLY_CELLS);
    }
    getIdForHelTable() {
        return `${this.resizeConfig.uuid}-${this.tableIndex}`;
    }
    getIdForCellTable(idx) {
        return `${this.resizeConfig.uuid}-${this.tableIndex}-child-${idx}`;
    }
}
TableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-table',
                template: "<button title=\"{{getToolTipButtonMessage()}}\" [disabled]=\"getIfButtonDisabled()\"  *ngIf=\"!!addRowButton && addRowButton.showButton && !modeImportEnabled\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\n<div [ngClass]=\"getClassToColumn()\" class=\"div-table-helisa\">\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\n\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort matTable\n      (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\n          <ng-container *ngIf=\"column.title != undefined\">\n            <div *ngIf=\"!column.sortable\">\n              <th [title]=\"column.title\" mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\"\n                *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\" class=\"hw-min-width-100 hw-weight-bold\">\n                {{column.title}}\n                <div id=\"{{getIdForCellTable(idx)}}\" *ngIf=\"isResizingCell()\" class=\"resize-handle-right resize-handle-table\"></div>\n              </th>\n            </div>\n            <div *ngIf=\"column.sortable\">\n              <th [title]=\"column.title\" mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\"\n                *matHeaderCellDef mat-sort-header [attr.colspan]=\"column.colspanTitle\" class=\"hw-min-width-100 hw-weight-bold\"> {{column.title}}\n                <div id=\"{{getIdForCellTable(idx)}}\" *ngIf=\"isResizingCell()\" class=\"resize-handle-right resize-handle-table\"></div>\n              </th>\n            </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton' && !modeImportEnabled\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element;\" (click)=\"selectedCell(element, column)\">\n              <button mat-icon-button *ngIf=\"element.data === selectedObject\">\n                <i class=\"material-icons-outlined\">description</i>\n              </button>\n            </td>\n          </ng-container>\n\n          <td [title]=\"getValue(element.data, column)\" mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\" [hideDelay]=\"hideDelay\"\n            [showDelay]=\"showDelay\" *matCellDef=\"let element\" (dblclick)=\"dblClickCell()\"\n            (click)=\"selectedCell(element, column)\" [class.selected-row]=\"isSelectedCell(element, column)\"\n            [ngClass]=\"getClassToCell(element.data, column)\">\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{\n              getValue(element.data, column) }}</a>\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\n        </ng-container>\n\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\n            {{column.subtitle}}</th>\n        </ng-container>\n      </ng-container>\n\n      <ng-container matColumnDef=\"groupHeader\">\n        <td mat-cell *matCellDef=\"let group\">\n          <strong>{{ getGroupDescription(group.data) }}</strong>\n        </td>\n      </ng-container>\n\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\n      </ng-container>\n\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row, true)\"\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\"\n          [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"!isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\n        </tr>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\n    </table>\n  </div>\n  <div *ngIf=\"showMessageEmpty(data)\">\n    <p>\n      {{getMessageEmtpy()}}\n    </p>\n  </div>\n</div>\n<div *ngIf=\"isResizingTable()\" class=\"resize-handle-right resize-handle-table\" id=\"{{getIdForHelTable()}}\"></div>\n",
                styles: ["table{table-layout:fixed}tbody tr,tfoot tr,thead tr{height:26px}tbody tr td,tbody tr th,tfoot tr td,tfoot tr th,thead tr td,thead tr th{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}thead tr th{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody tr td{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}tbody tr td button{height:auto;line-height:inherit}tfoot{display:none}tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}::ng-deep hel-table{position:relative}::ng-deep hel-table>button{align-items:flex-start;background:transparent;border:none;color:transparent;cursor:pointer;display:flex;height:26px;justify-content:center;opacity:.5;overflow:hidden;position:absolute;right:0;top:0;width:20px;z-index:101}::ng-deep hel-table>button:focus{outline:none}::ng-deep hel-table>button:hover{opacity:1}::ng-deep hel-table>button:before{align-items:center;color:#fff;content:\"+\";display:flex;font-size:20px;height:26px;justify-content:center;position:absolute;width:20px}::ng-deep hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}::ng-deep hel-table .buttons-container{order:2}::ng-deep hel-table .buttons-container.hasSubtitle,::ng-deep hel-table .buttons-container.hasTitle{padding-top:26px}::ng-deep hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}::ng-deep hel-table .buttons-container>div{height:26px}::ng-deep hel-table .buttons-container>div button{align-items:center;display:flex;height:26px;justify-content:center}::ng-deep hel-table .buttons-container>div button>*{display:flex;height:100%}::ng-deep hel-table .div-table-helisa{height:100%}::ng-deep hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}::ng-deep hel-table .div-table-helisa .container-table .table-helisa{width:100%}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep table{table-layout:fixed}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr{height:26px}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr th,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr th,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr th{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr th{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td button{height:auto;line-height:inherit}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot{display:none}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}::ng-deep hel-table .div-table-helisa .container-table .table-helisa .selected-row{background:silver;font-weight:700}"]
            },] }
];
TableHelisaComponent.ctorParameters = () => [
    { type: TableHelisaService }
];
TableHelisaComponent.propDecorators = {
    matSort: [{ type: ViewChild, args: [MatSort, { static: true },] }],
    matTable: [{ type: ViewChild, args: [MatTable, { static: true },] }],
    matTableElement: [{ type: ViewChild, args: [MatTable, { read: ElementRef, static: true },] }],
    containerTable: [{ type: ViewChild, args: ['containerTable', { static: true },] }],
    sort: [{ type: Output }],
    total: [{ type: Output }],
    search: [{ type: Output }],
    select: [{ type: Output }],
    selectCell: [{ type: Output }],
    selectToImport: [{ type: Output }],
    selectObject: [{ type: Output }],
    nextPage: [{ type: Output }],
    showTitle: [{ type: Input }],
    isCellSelection: [{ type: Input }],
    count: [{ type: Input }],
    configCellStyles: [{ type: Input }],
    configRowStylesFromColumn: [{ type: Input }],
    configColumnClass: [{ type: Input }],
    selectedCells: [{ type: Input }],
    drop: [{ type: Output }],
    isDragged: [{ type: Input }],
    addRowButton: [{ type: Input }],
    emptyMessageForColumn: [{ type: Input }],
    addRow: [{ type: Output }],
    bookClicked: [{ type: Output }],
    addBookButton: [{ type: Input }],
    showToolTip: [{ type: Input }],
    tableIndex: [{ type: Input }],
    resizeConfig: [{ type: Input }],
    afterViewInit: [{ type: Output }],
    hideDelay: [{ type: Input }],
    showDelay: [{ type: Input }],
    modeImportEnabled: [{ type: Input }],
    isRemote: [{ type: Input }],
    columnConfiguration: [{ type: Input }],
    dataSource: [{ type: Input }],
    selectedIndexRow: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLE9BQU8sRUFBUSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RSxPQUFPLEVBR0wsNkJBQTZCLEVBRTdCLGdCQUFnQixFQUtoQixVQUFVLEVBSVYsZUFBZSxFQUVmLFNBQVMsRUFDVCxVQUFVLEVBR1gsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQWtCLGNBQWMsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBTzVILElBQUssT0FFSjtBQUZELFdBQUssT0FBTztJQUNWLG1EQUFXLENBQUE7SUFBRSxxREFBWSxDQUFBO0lBQUUsbUNBQUcsQ0FBQTtBQUNoQyxDQUFDLEVBRkksT0FBTyxLQUFQLE9BQU8sUUFFWDtBQVNELE1BQU0sT0FBTyxvQkFBb0I7SUEyRS9CLFlBQW9CLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQXRFdkQsU0FBSSxHQUFtQyxJQUFJLGtCQUFrQixDQUFhLEVBQUUsQ0FBQyxDQUFDO1FB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QUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzhCQUNwQyxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzZCQUN0RCxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21CQUU1QyxNQUFNO29CQUNOLE1BQU07cUJBQ04sTUFBTTtxQkFLTixNQUFNO3lCQUNOLE1BQU07NkJBQ04sTUFBTTsyQkFDTixNQUFNO3VCQUNOLE1BQU07d0JBQ04sS0FBSzs4QkFDTCxLQUFLO29CQUNMLEtBQUs7K0JBQ0wsS0FBSzt3Q0FDTCxLQUFLO2dDQUNMLEtBQUs7NEJBQ0wsS0FBSzttQkFDTCxNQUFNO3dCQUNOLEtBQUs7MkJBQ0wsS0FBSztvQ0FDTCxLQUFLO3FCQUNMLE1BQU07MEJBQ04sTUFBTTs0QkFDTixLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLE1BQU07d0JBU04sS0FBSzt3QkFLTCxLQUFLO2dDQUNMLEtBQUs7dUJBbURMLEtBQUs7a0NBV0wsS0FBSzt5QkFPTCxLQUFLOytCQVdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNvcnQsIFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmltcG9ydCB7XG4gIEFkZFJvd0J1dHRvbixcbiAgQ2VsbCxcbiAgQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUsXG4gIENvbHVtbkNvbmZpZyxcbiAgQ29sdW1uQ29uZmlnVXRpbCxcbiAgQ29uZmlnQ2VsbFN0eWxlcyxcbiAgQ29uZmlnUm93U3R5bGVzLFxuICBEcm9wRWxlbWVudCxcbiAgRXZlbnRDb2x1bW4sXG4gIEV2ZW50U2NvcGUsXG4gIEV2ZW50U2VhcmNoLFxuICBSZXF1ZXN0VGFibGVIZWxpc2EsXG4gIFNlbGVjdE9iamVjdCxcbiAgVGFibGVIZWxpc2FUeXBlLFxuICBUb3RhbEdyb3VwLFxuICBUb3RhbFR5cGUsXG4gIENvbHVtblR5cGUsXG4gIFRvdGFsVGFibGVIZWxpc2EsXG4gIEVtcHR5TWVzc2FnZUNvbHVtblxufSBmcm9tICcuL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGFibGVIZWxpc2FTZXJ2aWNlLCBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvIH0gZnJvbSAnLi90YWJsZS1oZWxpc2Euc2VydmljZSc7XG5pbXBvcnQgeyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWhlbGlzYS1jb25uZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IFJlc2l6ZUNvbmZpZywgUmVzaXplUmVzcG9uc2UsIFR5cGVSZXNpemVFbnVtIH0gZnJvbSAnLi4vZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EvZGVwZW5kZW5jeS10YWJsZS1oZWxpc2EuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBSb3dEYXRhPFQ+IHtcbiAgZGF0YToge30gfCBUO1xuICByb3dUeXBlOiBSb3dUeXBlO1xufVxuXG5lbnVtIFJvd1R5cGUge1xuICBHUk9VUF9USVRMRSwgR1JPVVBfRk9PVEVSLCBST1dcbn1cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSB0YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ6IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDxUPjtcbiAgdG90YWxEYXRhOiBBcnJheTxudW1iZXI+O1xuICByYXdEYXRhOiBBcnJheTxUPjtcbiAgZGF0YTogTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE8VD4+ID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPFQ+PihbXSk7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGU6IHN0cmluZ1tdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGU6IHN0cmluZ1tdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyOiBzdHJpbmdbXSA9IFtdO1xuICBjb2x1bW5Db25maWc6IEFycmF5PENvbHVtbkNvbmZpZz47XG4gIHNlbGVjdGVkT2JqZWN0OiBUO1xuICBsYXN0U2VhcmNoOiBzdHJpbmc7XG4gIHR5cGU6IFRhYmxlSGVsaXNhVHlwZSA9IFRhYmxlSGVsaXNhVHlwZS5MT0NBTDtcbiAgaW5kZXhSb3dTZWxlY3Q6IG51bWJlcjtcbiAgcHJpdmF0ZSBzY3JvbGxDb3VudDogbnVtYmVyID0gMDtcbiAgaGFzU3VidGl0bGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBpbmRleFJvd1N0YXJ0RHJhZzogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgbGFzdEluZGV4Um93RHJhZzogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgZGF0YUJlZm9yZURyYWc6IHsgZGF0YTogUm93RGF0YTxUPltdIH0gPSBudWxsO1xuICBwcml2YXRlIGRhdGFTb3VyY2UkOiBBcnJheTxUPiA9IFtdO1xuICBwcml2YXRlIHNjcm9sbFg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgc2Nyb2xsWTogbnVtYmVyID0gMDtcblxuICBAVmlld0NoaWxkKE1hdFNvcnQsIHsgc3RhdGljOiB0cnVlIH0pIG1hdFNvcnQ6IE1hdFNvcnQ7XG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUsIHsgc3RhdGljOiB0cnVlIH0pIG1hdFRhYmxlOiBNYXRUYWJsZTxUPjtcbiAgQFZpZXdDaGlsZChNYXRUYWJsZSwgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgbWF0VGFibGVFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjb250YWluZXJUYWJsZScsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRhaW5lclRhYmxlOiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcbiAgQE91dHB1dCgpIHRvdGFsOiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+KCk7XG5cbiAgLyoqXG4gICAqIERlcHJlY2FkbywgY2FtYmlhciBwb3IgZWxlY3RPYmplY3RcbiAgICovXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdENlbGw6IEV2ZW50RW1pdHRlcjxDZWxsPFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbDxUPj4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdFRvSW1wb3J0OiBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PigpO1xuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E8VD4+KCk7XG4gIEBJbnB1dCgpIHNob3dUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzQ2VsbFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBjb25maWdDZWxsU3R5bGVzOiBBcnJheTxDb25maWdDZWxsU3R5bGVzPFQ+PjtcbiAgQElucHV0KCkgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbjogQXJyYXk8Q29uZmlnUm93U3R5bGVzPFQ+PjtcbiAgQElucHV0KCkgY29uZmlnQ29sdW1uQ2xhc3M6IEFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgpIHNlbGVjdGVkQ2VsbHM6IENlbGw8VD47XG4gIEBPdXRwdXQoKSBkcm9wOiBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRWxlbWVudDxUPj4oKTtcbiAgQElucHV0KCkgaXNEcmFnZ2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFkZFJvd0J1dHRvbjogQWRkUm93QnV0dG9uID0geyBzaG93QnV0dG9uOiBmYWxzZSwgdGV4dDogJycsIGlzRGlzYWJsZWQ6IGZhbHNlLCB0b29sVGlwVGV4dDogJycgfTtcbiAgQElucHV0KCkgZW1wdHlNZXNzYWdlRm9yQ29sdW1uOiBFbXB0eU1lc3NhZ2VDb2x1bW4gPSB7IGlzRW5hYmxlZDogZmFsc2UsIHRleHQ6ICcnIH07XG4gIEBPdXRwdXQoKSBhZGRSb3c6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGJvb2tDbGlja2VkOiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gIEBJbnB1dCgpIGFkZEJvb2tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1Rvb2xUaXA6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB0YWJsZUluZGV4OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSByZXNpemVDb25maWc6IFJlc2l6ZUNvbmZpZyA9IG5ldyBSZXNpemVDb25maWcoKTtcbiAgQE91dHB1dCgpIGFmdGVyVmlld0luaXQ6IEV2ZW50RW1pdHRlcjxSZXNpemVSZXNwb25zZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2l6ZVJlc3BvbnNlPigpO1xuICBzaG93Rm9vdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHNob3dTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG5cbiAgLyoqXG4gICAqIFRpZW1wbyBhbnRlcyBkZSBvY3VsdGFybGEgZWwgbWVuc2FqZSBkZWwgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgaGlkZURlbGF5OiBudW1iZXIgPSA2MDA7XG5cbiAgLyoqXG4gICAqIFRpZW1wbyBhbnRlcyBkZSBtb3N0cmEgZWwgbWVuc2FqZSBkZWwgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XG4gIEBJbnB1dCgpIG1vZGVJbXBvcnRFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZVNlcnZpY2U6IFRhYmxlSGVsaXNhU2VydmljZTxUPikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWxvYWRDb2x1bW5Db25maWcoKTtcbiAgICB0aGlzLnRhYmxlU2VydmljZS5uZXh0UGFnZVJldHVybi5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+KTogdm9pZCA9PiB7XG4gICAgICAgIGlmICghZGF0YS50YWJsZSB8fCBkYXRhLnRhYmxlID09PSB0aGlzKSB7XG4gICAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLm9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMudGFibGVTZXJ2aWNlLnRvdGFsUmV0dXJuLnN1YnNjcmliZSgoaW5mbzogVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUb3RhbFRhYmxlSGVsaXNhPik6IHZvaWQgPT4ge1xuICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGlkeDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgaWYgKGNvbHVtbiA9PT0gaW5mby5vYmouY29sdW1uKSB7XG4gICAgICAgICAgICB0aGlzLnRvdGFsRGF0YVtpZHhdID0gdGhpcy5nZXRHcm91cFZhbHVlKGNvbHVtbiwgeyBzdW06IGluZm8ub2JqLnZhbHVlLCBjb3VudDogdGhpcy5jb3VudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubWF0U29ydC5zb3J0Q2hhbmdlLnN1YnNjcmliZShcbiAgICAgIChldmVudDogU29ydCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW46IENvbHVtbkNvbmZpZyA9IHRoaXMuY29sdW1uQ29uZmlnLmZpbmQoKGM6IENvbHVtbkNvbmZpZyk6IGJvb2xlYW4gPT4gYy5uYW1lID09PSBldmVudC5hY3RpdmUpO1xuICAgICAgICBjb2x1bW4uc29ydERpcmVjdGlvbiA9IGV2ZW50LmRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5zb3J0LmVtaXQoeyBjb2x1bW4sIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZywgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUuU09SVCB9KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy50YWJsZVNlcnZpY2UuZW1pdFZpc2libGVCdXR0b24uc3Vic2NyaWJlKFxuICAgICAgKGRhdGE6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmFkZFJvd0J1dHRvbi5zaG93QnV0dG9uID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5yZWxvYWQoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMubWF0VGFibGUucmVuZGVyUm93cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNpemVDb25maWcuZW5hYmxlUmVzaXplKSB7XG4gICAgICB0aGlzLmFmdGVyVmlld0luaXQuZW1pdCh7XG4gICAgICAgIHV1aWQ6IHRoaXMucmVzaXplQ29uZmlnLnV1aWRcbiAgICAgIH0gYXMgUmVzaXplUmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpc1JlbW90ZSh3OiBib29sZWFuKSB7XG4gICAgdGhpcy50eXBlID0gdyA/IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUgOiBUYWJsZUhlbGlzYVR5cGUuTE9DQUw7XG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgPSBuZXcgVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+KCk7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLlJFTU9URSkge1xuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LnBhZ2UrKztcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY29sdW1uQ29uZmlndXJhdGlvbihjb2x1bW5Db25maWd1cmF0aW9uOiBBcnJheTxDb2x1bW5Db25maWc+KSB7XG4gICAgdGhpcy5jb2x1bW5Db25maWcgPSBjb2x1bW5Db25maWd1cmF0aW9uO1xuICAgIHRoaXMucmVsb2FkKCk7XG4gICAgdGhpcy5yZWxvYWRDb2x1bW5Db25maWcoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhU291cmNlKGRhdGFTb3VyY2U6IEFycmF5PFQ+KSB7XG4gICAgdGhpcy5kYXRhU291cmNlJCA9IGRhdGFTb3VyY2U7XG4gICAgdGhpcy5yYXdEYXRhID0gZGF0YVNvdXJjZTtcbiAgICB0aGlzLnJlbG9hZCgpO1xuICB9XG5cbiAgZ2V0IGRhdGFTb3VyY2UoKTogQXJyYXk8VD4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXhSb3coaWRSb3dTZWxlY3RlZDogbnVtYmVyKSB7XG4gICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IGlkUm93U2VsZWN0ZWQ7XG4gICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoKSB7XG4gICAgICBpZiAoKGlkUm93U2VsZWN0ZWQgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCBpZFJvd1NlbGVjdGVkIDwgMCkpIHtcbiAgICAgICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdFJvdyh7IGRhdGE6IHRoaXMucmF3RGF0YVt0aGlzLmluZGV4Um93U2VsZWN0XSwgcm93VHlwZTogUm93VHlwZS5ST1cgfSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsb2FkQ29sdW1uQ29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuaGFzU3VidGl0bGUgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpO1xuXG4gICAgaWYgKHRoaXMuY29sdW1uQ29uZmlnKSB7XG4gICAgICBpZiAodGhpcy5hZGRCb29rQnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbkNvdW50OiBudW1iZXIgPSB0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGg7XG4gICAgICAgIGxldCBjb3VudFN1YnRpdGxlOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgc2hvd0Jvb2tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkID0+IHtcbiAgICAgICAgICBpZiAoISFjb2x1bW4uc3VidGl0bGUpIHtcbiAgICAgICAgICAgIGNvdW50U3VidGl0bGUgPSBjb3VudFN1YnRpdGxlICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCghc2hvd0Jvb2tCdXR0b24pICYmIChjb2x1bW4ubmFtZSA9PT0gJ2Jvb2tCdXR0b24nKSkge1xuICAgICAgICAgICAgc2hvd0Jvb2tCdXR0b24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHN1YnRpdGxlVGVtcDogYm9vbGVhbiA9IGNvbHVtbkNvdW50ID09PSBjb3VudFN1YnRpdGxlO1xuICAgICAgICBpZiAoIXNob3dCb29rQnV0dG9uKSB7XG4gICAgICAgICAgdGhpcy5jb2x1bW5Db25maWcucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiAnYm9va0J1dHRvbicsXG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBzdWJ0aXRsZTogc3VidGl0bGVUZW1wID8gJycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4udmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5wdXNoKGNvbHVtbi5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaGFzU3VidGl0bGUpIHtcbiAgICAgICAgICB0aGlzLmhhc1N1YnRpdGxlID0gY29sdW1uLnN1YnRpdGxlICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMucmF3RGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZS5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLmxlbmd0aCk7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGUubGVuZ3RoKTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLmxlbmd0aCk7XG4gICAgdGhpcy5nZXRDb2x1bW5zV2l0aFRpdGxlKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpOiBudW1iZXIgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLnB1c2goY29sKSk7XG4gICAgdGhpcy5nZXRIZWFkZXJTdWJ0aXRsZSgpLmZvckVhY2goKGNvbDogc3RyaW5nKTogbnVtYmVyID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZS5wdXNoKGNvbCkpO1xuICAgIHRoaXMuZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpLmZvckVhY2goKGNvbDogc3RyaW5nKTogbnVtYmVyID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIucHVzaChjb2wpKTtcbiAgfVxuXG4gIHB1YmxpYyByZWxvYWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uQ29uZmlnKSB7XG4gICAgICBjb25zdCBjaGFuZ2VEYXRhOiBBcnJheTxSb3dEYXRhPFQ+PiA9IEFycmF5PFJvd0RhdGE8VD4+KCk7XG4gICAgICBsZXQgaGF2ZUdyb3VwOiBib29sZWFuID0gZmFsc2U7XG4gICAgICBsZXQgZ3JvdXBGb290ZXI6IEFycmF5PFRvdGFsR3JvdXA+O1xuICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCAmJiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuTE9DQUwgfHwgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSA8PSAxKSkge1xuICAgICAgICAgIHRoaXMudG90YWxEYXRhID0gbmV3IEFycmF5PG51bWJlcj4odGhpcy5jb2x1bW5Db25maWcubGVuZ3RoKTtcbiAgICAgICAgICB0aGlzLnNob3dGb290ZXIgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudG90YWwuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5UT1RBTCB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dTZWFyY2ggPSB0aGlzLnNob3dTZWFyY2ggfHwgY29sdW1uLnNlYXJjaGFibGU7XG4gICAgICAgIGhhdmVHcm91cCA9IGhhdmVHcm91cCB8fCBjb2x1bW4uZ3JvdXBhYmxlO1xuICAgICAgfSk7XG4gICAgICBpZiAoaGF2ZUdyb3VwKSB7XG4gICAgICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5zb3J0KChhOiBULCBiOiBUKTogbnVtYmVyID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBudW1iZXIgPSAwO1xuICAgICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuY29tcGFyZShhLCBiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJhd0RhdGEpIHtcbiAgICAgICAgdGhpcy5yYXdEYXRhLmZvckVhY2goKHJvdzogVCk6IHZvaWQgPT4ge1xuICAgICAgICAgIGlmIChoYXZlR3JvdXAgJiYgKGNoYW5nZURhdGEubGVuZ3RoID09PSAwIHx8IHRoaXMuY29tcGFyZShjaGFuZ2VEYXRhW2NoYW5nZURhdGEubGVuZ3RoIC0gMV0uZGF0YSBhcyBULCByb3cpICE9PSAwKSkge1xuICAgICAgICAgICAgaWYgKGdyb3VwRm9vdGVyKSB7XG4gICAgICAgICAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IGdyb3VwRm9vdGVyLCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX0ZPT1RFUiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYW5nZURhdGEucHVzaCh7IGRhdGE6IHJvdywgcm93VHlwZTogUm93VHlwZS5HUk9VUF9USVRMRSB9KTtcbiAgICAgICAgICAgIGdyb3VwRm9vdGVyID0gbmV3IEFycmF5PFRvdGFsR3JvdXA+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXZlR3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG90YWxHcm91cChncm91cEZvb3Rlciwgcm93KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLlJPVyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YTxUPj4oY2hhbmdlRGF0YSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yYXdEYXRhICYmIHRoaXMucmF3RGF0YS5sZW5ndGggJiYgdGhpcy5pbmRleFJvd1NlbGVjdCAmJiAhdGhpcy5zZWxlY3RlZE9iamVjdCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleFJvd1NlbGVjdCA+PSB0aGlzLnJhd0RhdGEubGVuZ3RoIHx8IHRoaXMuaW5kZXhSb3dTZWxlY3QgPCAwKSB7XG4gICAgICAgICAgdGhpcy5pbmRleFJvd1NlbGVjdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFRvdGFsR3JvdXAocm93VG90YWw6IEFycmF5PFRvdGFsR3JvdXA+LCByb3c6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocm93VG90YWxbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0gPSB7IHN1bTogKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUocm93LCBjb2x1bW4pIGFzIG51bWJlciksIGNvdW50OiAxIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLnN1bSArPSAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShyb3csIGNvbHVtbikgYXMgbnVtYmVyKTtcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0uY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXIge1xuICAgIGxldCB3czogbnVtYmVyID0gMDtcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZyk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHdzID09PSAwICYmIGNvbHVtbi5ncm91cGFibGUpIHtcbiAgICAgICAgaWYgKChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKGEsIGNvbHVtbikgYXMgbnVtYmVyKSA8IChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKGIsIGNvbHVtbikgYXMgbnVtYmVyKSkge1xuICAgICAgICAgIHdzID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYSwgY29sdW1uKSBhcyBudW1iZXIpID4gKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYiwgY29sdW1uKSBhcyBudW1iZXIpKSB7XG4gICAgICAgICAgd3MgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHdzO1xuICB9XG5cbiAgZ2V0R3JvdXBEZXNjcmlwdGlvbihvYmo6IFQpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9ICcnO1xuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCA9PiB7XG4gICAgICBpZiAoY29sdW1uLmdyb3VwYWJsZSkge1xuICAgICAgICByZXN1bHQgKz0gKHJlc3VsdC5sZW5ndGggPyAnIC0gJyA6ICcnKSArIChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlzR3JvdXBUaXRsZShpbmRleDogbnVtYmVyLCBpdGVtOiBSb3dEYXRhPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9USVRMRTtcbiAgfVxuXG4gIGlzUm93KGluZGV4OiBudW1iZXIsIGl0ZW06IFJvd0RhdGE8VD4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLlJPVztcbiAgfVxuXG4gIGlzR3JvdXBGb290ZXIoaW5kZXg6IG51bWJlciwgaXRlbTogUm93RGF0YTxUPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfRk9PVEVSO1xuICB9XG5cbiAgZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLm1hcCgobmFtZTogc3RyaW5nKTogc3RyaW5nID0+ICdmb290ZXItJyArIG5hbWUpO1xuICB9XG5cbiAgZ2V0R3JvdXBWYWx1ZShjb2x1bW46IENvbHVtbkNvbmZpZywgZGF0YTogVG90YWxHcm91cCk6IG51bWJlciB7XG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5TVU0pIHsgcmV0dXJuIGRhdGEuc3VtOyB9XG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5DT1VOVCkgeyByZXR1cm4gZGF0YS5jb3VudDsgfVxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuQVZFUkFHRSkgeyByZXR1cm4gMS4gKiBkYXRhLnN1bSAvIGRhdGEuY291bnQ7IH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0VmFsdWUob2JqOiBULCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IFQge1xuICAgIHJldHVybiBuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSBhcyBUO1xuICB9XG5cbiAgZ2V0VmFsdWVUb29sdGlwKG9iajogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNob3dUb29sVGlwKSB7XG4gICAgICByZXR1cm4gbmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShvYmosIGNvbHVtbikgYXMgc3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hUZXh0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubGFzdFNlYXJjaCA9IHRleHQ7XG4gICAgdGhpcy5zZWFyY2guZW1pdCh7IHRleHQsIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZyB9KTtcbiAgfVxuXG4gIHNlbGVjdFJvdyhyb3c6IFJvd0RhdGE8VD4sIGlzVXNlcjogYm9vbGVhbiwgY29sdW1uPzogQ29sdW1uQ29uZmlnKTogdm9pZCB7XG4gICAgaWYgKHJvdyA9PT0gdW5kZWZpbmVkIHx8IHJvdyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKGNvbHVtbiA9PT0gdW5kZWZpbmVkIHx8IGNvbHVtbiA9PT0gbnVsbCkgfHwgKCEhY29sdW1uICYmIGNvbHVtbi5uYW1lICE9PSAnYm9va0J1dHRvbicpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0gcm93LmRhdGEgYXMgVDtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5zZWxlY3RlZE9iamVjdCk7XG4gICAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRPYmplY3QsIHNjb3BlOiBpc1VzZXIgPyBFdmVudFNjb3BlLlVTRVIgOiBFdmVudFNjb3BlLkNPREVfQ0FMTCB9KTtcbiAgICB9IGVsc2UgaWYgKCEhY29sdW1uICYmIGNvbHVtbi5uYW1lID09PSAnYm9va0J1dHRvbicpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkT2JqZWN0ICE9PSByb3cuZGF0YSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0gcm93LmRhdGEgYXMgVDtcbiAgICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcbiAgICAgICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkT2JqZWN0LCBzY29wZTogaXNVc2VyID8gRXZlbnRTY29wZS5VU0VSIDogRXZlbnRTY29wZS5DT0RFX0NBTEwgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmJvb2tDbGlja2VkLmVtaXQodGhpcy5zZWxlY3RlZE9iamVjdCk7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgbGV0IGlzU2Nyb2xsWTogYm9vbGVhbjtcblxuICAgIGlmICh0aGlzLnNjcm9sbFkgIT09IGVsZW1lbnQuc2Nyb2xsVG9wKSB7XG4gICAgICBpc1Njcm9sbFkgPSB0cnVlO1xuICAgICAgdGhpcy5zY3JvbGxZID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB0aGlzLnNjcm9sbFggPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsWCAhPT0gZWxlbWVudC5zY3JvbGxMZWZ0KSB7XG4gICAgICBpc1Njcm9sbFkgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2Nyb2xsWSA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgdGhpcy5zY3JvbGxYID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cblxuICAgIGlmICgoZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LnNjcm9sbFRvcCA8IDEwMDApICYmIGlzU2Nyb2xsWSkge1xuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIGdvTmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlICYmICF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQpIHtcbiAgICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCA9IHRydWU7XG4gICAgICB0aGlzLm5leHRQYWdlLmVtaXQoe1xuICAgICAgICBwYWdlOiB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5uZXh0UGFnZSgpLFxuICAgICAgICBib2R5OiB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5nZXRCb2R5KHRoaXMuY29sdW1uQ29uZmlnLCB0aGlzLmxhc3RTZWFyY2gpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlY2VpdmVQYWdlKGRhdGE6IFRbXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yYXdEYXRhKSB7XG4gICAgICB0aGlzLnJhd0RhdGEgPSBuZXcgQXJyYXk8VD4oKTtcbiAgICB9XG4gICAgdGhpcy5yYXdEYXRhID0gdGhpcy5yYXdEYXRhLmNvbmNhdChkYXRhKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNMYXN0UGFnZSA9IGRhdGEubGVuZ3RoID09PSAwO1xuICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgZGJsQ2xpY2tDZWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0Q2VsbC5lbWl0KHRoaXMuc2VsZWN0ZWRDZWxscyBhcyBDZWxsPFQ+KTtcbiAgfVxuXG4gIHNlbGVjdGVkQ2VsbChlbGVtZW50OiBSb3dEYXRhPFQ+LCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IHZvaWQge1xuICAgIGlmIChjb2x1bW4uaXNTZWxlY3RhYmxlID09PSB1bmRlZmluZWQgfHwgY29sdW1uLmlzU2VsZWN0YWJsZSA9PT0gbnVsbCB8fCBjb2x1bW4uaXNTZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLnNlbGVjdFJvdyhlbGVtZW50LCB0cnVlLCBjb2x1bW4pO1xuICAgICAgdGhpcy5zZWxlY3RlZENlbGxzID0geyBjb2x1bW4sIHJvdzogZWxlbWVudCB9O1xuICAgICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzKTtcbiAgICB9XG4gIH1cblxuICBpc1NlbGVjdGVkQ2VsbChyb3c6IFJvd0RhdGE8VD4sIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNDZWxsU2VsZWN0aW9uICYmICF0aGlzLm1vZGVJbXBvcnRFbmFibGVkKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZENlbGxzICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDZWxscy5jb2x1bW4ubmFtZSA9PT0gY29sdW1uLm5hbWUgJiZcbiAgICAgICAgICAodGhpcy5zZWxlY3RlZENlbGxzLnJvdyBhcyBSb3dEYXRhPFQ+KS5kYXRhID09PSByb3cuZGF0YSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldENsYXNzVG9DZWxsKHJvdzogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2xhc3NUb0NlbGw6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgIGlmICh0aGlzLm1vZGVJbXBvcnRFbmFibGVkKSB7XG4gICAgICBjbGFzc1RvQ2VsbC5wdXNoKCdody1jb2xvci1ncmF5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpZ0NlbGxTdHlsZXMpIHtcbiAgICAgIGNvbnN0IGZvdW5kOiBDb25maWdDZWxsU3R5bGVzPFQ+ID0gdGhpcy5jb25maWdDZWxsU3R5bGVzLmZpbmQoKGM6IENvbmZpZ0NlbGxTdHlsZXM8VD4pOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuIGMuY2VsbERhdGEgPT09IHRoaXMuZ2V0VmFsdWUocm93LCBjb2x1bW4pO1xuICAgICAgfSk7XG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgY2xhc3NUb0NlbGwucHVzaChmb3VuZC5jbGFzc0NlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29sdW1uLmNvbHVtblN0eWxlKSB7XG4gICAgICBjbGFzc1RvQ2VsbC5wdXNoKGNvbHVtbi5jb2x1bW5TdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc1RvQ2VsbDtcbiAgfVxuXG4gIGdldENsYXNzVG9Db2x1bW4oKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ0NvbHVtbkNsYXNzO1xuICB9XG5cbiAgZ2V0Q2xhc3NUb1Jvdyhyb3c6IFQpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2xhc3NUb1JvdzogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgaWYgKHJvdyA9PT0gdGhpcy5zZWxlY3RlZE9iamVjdCAmJiAhdGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgIGNsYXNzVG9Sb3cucHVzaCgnJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4pIHtcbiAgICAgIGNvbnN0IGZvdW5kczogQ29uZmlnUm93U3R5bGVzPFQ+W10gPSB0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4uZmlsdGVyKChjOiBDb25maWdSb3dTdHlsZXM8VD4pOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuIGMuZGF0YSA9PT0gdGhpcy5nZXRWYWx1ZShyb3csIGMuY29sdW1uKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGZvdW5kcykge1xuICAgICAgICBmb3VuZHMuZm9yRWFjaCgoYzogQ29uZmlnUm93U3R5bGVzPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgY2xhc3NUb1Jvdy5wdXNoKGMuY2xhc3NSb3cpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzVG9Sb3c7XG4gIH1cblxuICBvbkRyb3AoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0RyYWdnZWQgJiYgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA+PSAwKSB7XG4gICAgICBjb25zdCByb3dJbmRleDogbnVtYmVyID0gdGhpcy5nZXRSb3dJbmRleChldmVudC5wYWdlWSk7XG4gICAgICBjb25zdCBhcnJheTogUm93RGF0YTxUPltdID0gdGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhO1xuICAgICAgY29uc3QgcmF3RGF0YTogVFtdID0gdGhpcy5yYXdEYXRhO1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGFycmF5LCB0aGlzLmluZGV4Um93U3RhcnREcmFnLCByb3dJbmRleCk7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkocmF3RGF0YSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xuICAgICAgdGhpcy5kcm9wLmVtaXQoeyB2YWx1ZTogYXJyYXlbcm93SW5kZXhdLmRhdGEgYXMgVCwgb3JkZXI6IHJvd0luZGV4IH0pO1xuICAgICAgdGhpcy5yYXdEYXRhID0gcmF3RGF0YTtcbiAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoYXJyYXkpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgdGFibGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9kZUltcG9ydEVuYWJsZWQpIHtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnU3BhY2UnIHx8IGV2ZW50LmtleSA9PT0gJ0luc2VydCcgfHwgZXZlbnQua2V5ID09PSAnRGVsZXRlJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RUb0ltcG9ydC5lbWl0KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRPYmplY3QsIHNjb3BlOiBFdmVudFNjb3BlLlVTRVIsIGtleUFjdGlvbkltcG9ydDogZXZlbnQua2V5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLmFycm93c0V2ZW50cyhldmVudCk7XG4gICAgfVxuICB9XG5cbiAgYXJyb3dzRXZlbnRzKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGN1cnJlbnRJbmRleDogbnVtYmVyID0gdGhpcy5kYXRhLmRhdGEuZmluZEluZGV4KChyb3c6IFJvd0RhdGE8VD4pOiBib29sZWFuID0+IHJvdy5kYXRhID09PSB0aGlzLnNlbGVjdGVkT2JqZWN0KTtcbiAgICBsZXQgbmV3U2VsZWN0aW9uOiBudW1iZXIgPSAtMTA7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuc2Nyb2xsQ291bnQrKztcbiAgICAgIHRoaXMuZGF0YS5kYXRhLmZvckVhY2goKHJvdzogUm93RGF0YTxUPiwgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMTAgJiYgaW5kZXggPiBjdXJyZW50SW5kZXggJiYgcm93LnJvd1R5cGUgPT09IFJvd1R5cGUuUk9XKSB7XG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIHRoaXMuc2Nyb2xsQ291bnQtLTtcbiAgICAgIGN1cnJlbnRJbmRleCA9IHRoaXMuZGF0YS5kYXRhLmxlbmd0aCAtIGN1cnJlbnRJbmRleCAtIDE7XG4gICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCkuZm9yRWFjaCgocm93OiBSb3dEYXRhPFQ+LCBpbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xMCAmJiBpbmRleCA+IGN1cnJlbnRJbmRleCAmJiByb3cucm93VHlwZSA9PT0gUm93VHlwZS5ST1cpIHtcbiAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCk7XG4gICAgICBpZiAobmV3U2VsZWN0aW9uICE9PSAtMTApIHtcbiAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoIC0gbmV3U2VsZWN0aW9uIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5ld1NlbGVjdGlvbiAhPT0gLTEwKSB7XG4gICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLmRhdGEuZGF0YVtuZXdTZWxlY3Rpb25dLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKE1hdGguYWJzKHRoaXMuc2Nyb2xsQ291bnQpID49IDIpIHtcbiAgICAgIHRoaXMuc2Nyb2xsQ291bnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0ZSBlbCBldmVudG8gY3VhbmRvIHNlIGRhIGNsaWNrIGFsIGJvdG9uIEFkZFJvd1xuICAgKi9cbiAgb25BZGRSb3coKTogdm9pZCB7XG4gICAgdGhpcy5hZGRSb3cuZW1pdCgpO1xuICB9XG5cblxuICBnZXRIZWFkZXJTdWJ0aXRsZSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeDogc3RyaW5nW10gPSB0aGlzLmNvbHVtbkNvbmZpZy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgIGlmIChjb2x1bW4udmlzaWJsZSAmJiBjb2x1bW4uc3VidGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gJ3N1YnRpdGxlJyArIGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSkuZmlsdGVyKChkYXRhOiBzdHJpbmcpOiBib29sZWFuID0+IGRhdGEgIT0gbnVsbCk7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICBnZXRDb2x1bW5zV2l0aFRpdGxlKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5Db25maWcuZmlsdGVyKChjb2x1bW46IENvbHVtbkNvbmZpZyk6IGJvb2xlYW4gPT5cbiAgICAgIGNvbHVtbi52aXNpYmxlICYmIGNvbHVtbi50aXRsZSAhPT0gdW5kZWZpbmVkXG4gICAgKS5tYXAoKGNvbDogQ29sdW1uQ29uZmlnKTogc3RyaW5nID0+IGNvbC5uYW1lKTtcbiAgfVxuXG4gIGRyYWdnZXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0RyYWdnZWQgJiYgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA+PSAwKSB7XG4gICAgICBjb25zdCByb3dJbmRleDogbnVtYmVyID0gdGhpcy5nZXRSb3dJbmRleChldmVudC5wYWdlWSk7XG4gICAgICBpZiAocm93SW5kZXggIT09IHRoaXMubGFzdEluZGV4Um93RHJhZykge1xuICAgICAgICB0aGlzLmxhc3RJbmRleFJvd0RyYWcgPSByb3dJbmRleDtcbiAgICAgICAgLy8gVGhpcyBjYW4gaGF2ZSBhIG1lbW9yeSBwcm9ibGVtIHdpdGggYmlnIGRhdGFcbiAgICAgICAgY29uc3QgYXJyYXk6IFJvd0RhdGE8VD5bXSA9IFsuLi50aGlzLmRhdGFCZWZvcmVEcmFnLmRhdGFdO1xuICAgICAgICBtb3ZlSXRlbUluQXJyYXkoYXJyYXksIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShhcnJheSk7XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgc3RhcnREcmFnKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xuICAgIHRoaXMubGFzdEluZGV4Um93RHJhZyA9IHRoaXMuaW5kZXhSb3dTdGFydERyYWc7XG4gICAgdGhpcy5kYXRhQmVmb3JlRHJhZyA9IHRoaXMuZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um93SW5kZXgocGFnZVk6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IG9mZnNldFRvcDogbnVtYmVyID0gMDtcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHRoaXMuY29udGFpbmVyVGFibGUubmF0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAoKGNvbnRhaW5lciAhPT0gbnVsbCkgJiYgKG9mZnNldFRvcCA9PT0gMCkpIHtcbiAgICAgIG9mZnNldFRvcCA9IGNvbnRhaW5lci5vZmZzZXRUb3A7XG4gICAgICBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgbGV0IHJvd0luZGV4OiBudW1iZXIgPSAtMTtcbiAgICBjb25zdCByb3dzOiBIVE1MQ29sbGVjdGlvbiA9IHRoaXMubWF0VGFibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdzogSFRNTEVsZW1lbnQgPSAocm93c1tpXSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICBpZiAocGFnZVkgLSBvZmZzZXRUb3AgPiByb3cub2Zmc2V0VG9wIC0gdGhpcy5jb250YWluZXJUYWJsZS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICByb3dJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyb3dJbmRleCA8IDApIHsgcm93SW5kZXggPSAwOyB9XG4gICAgcmV0dXJuIHJvd0luZGV4O1xuICB9XG5cbiAgZ2V0IGNvbHVtblR5cGUoKTogdHlwZW9mIENvbHVtblR5cGUge1xuICAgIHJldHVybiBDb2x1bW5UeXBlO1xuICB9XG5cbiAgc2hvd01lc3NhZ2VFbXB0eShkYXRhOiBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YTxUPj4pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5lbXB0eU1lc3NhZ2VGb3JDb2x1bW4uaXNFbmFibGVkKSB7XG4gICAgICBpZiAoKCFkYXRhLmZpbHRlcmVkRGF0YSkgfHwgKGRhdGEuZmlsdGVyZWREYXRhICYmIGRhdGEuZmlsdGVyZWREYXRhLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldE1lc3NhZ2VFbXRweSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmVtcHR5TWVzc2FnZUZvckNvbHVtbi50ZXh0O1xuICB9XG5cbiAgZ2V0SWZCdXR0b25EaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5hZGRSb3dCdXR0b24gJiYgKHRoaXMuYWRkUm93QnV0dG9uLmlzRGlzYWJsZWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmFkZFJvd0J1dHRvbi5pc0Rpc2FibGVkICE9PSBudWxsKSkge1xuICAgICAgaWYgKHRoaXMuYWRkUm93QnV0dG9uLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldFRvb2xUaXBCdXR0b25NZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZ2V0SWZCdXR0b25EaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRSb3dCdXR0b24udG9vbFRpcFRleHQ7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlzUmVzaXppbmdUYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZXNpemVDb25maWcuZW5hYmxlUmVzaXplICYmICh0aGlzLnJlc2l6ZUNvbmZpZy50eXBlUmVzaXplID09PSBUeXBlUmVzaXplRW51bS5CT1RIIHx8IHRoaXMucmVzaXplQ29uZmlnLnR5cGVSZXNpemUgPT09IFR5cGVSZXNpemVFbnVtLk9OTFlfVEFCTEVTKTtcbiAgfVxuXG4gIGlzUmVzaXppbmdDZWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlc2l6ZUNvbmZpZy5lbmFibGVSZXNpemUgJiYgKHRoaXMucmVzaXplQ29uZmlnLnR5cGVSZXNpemUgPT09IFR5cGVSZXNpemVFbnVtLkJPVEggfHwgdGhpcy5yZXNpemVDb25maWcudHlwZVJlc2l6ZSA9PT0gVHlwZVJlc2l6ZUVudW0uT05MWV9DRUxMUyk7XG4gIH1cblxuICBnZXRJZEZvckhlbFRhYmxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMucmVzaXplQ29uZmlnLnV1aWR9LSR7dGhpcy50YWJsZUluZGV4fWA7XG4gIH1cblxuICBnZXRJZEZvckNlbGxUYWJsZShpZHg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMucmVzaXplQ29uZmlnLnV1aWR9LSR7dGhpcy50YWJsZUluZGV4fS1jaGlsZC0ke2lkeH1gO1xuICB9XG5cbn1cbiJdfQ==