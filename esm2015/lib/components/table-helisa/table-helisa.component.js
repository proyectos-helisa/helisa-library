import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ChangeColumnConfigurationType, ColumnConfigUtil, EventScope, TableHelisaType, TotalType, ColumnType } from './table-helisa.interface';
import { TableHelisaService } from './table-helisa.service';
import { TableHelisaConnectComponent } from './table-helisa-connect.component';
import { moveItemInArray } from '@angular/cdk/drag-drop';
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
        if (this.isCellSelection) {
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
        if (!this.isCellSelection) {
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
}
TableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-table',
                template: "<button title=\"{{getToolTipButtonMessage()}}\" [disabled]=\"getIfButtonDisabled()\"  *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\r\n<div [ngClass]=\"getClassToColumn()\" class=\"div-table-helisa\">\r\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\r\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort matTable\r\n      (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\r\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\r\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\r\n          <ng-container *ngIf=\"column.title != undefined\">\r\n            <div *ngIf=\"!column.sortable\">\r\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\"\r\n                *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\r\n                {{column.title}} </th>\r\n            </div>\r\n            <div *ngIf=\"column.sortable\">\r\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\"\r\n                *matHeaderCellDef mat-sort-header [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton'\">\r\n            <th mat-header-cell *matHeaderCellDef></th>\r\n            <td mat-cell *matCellDef=\"let element;\" (click)=\"selectedCell(element, column)\">\r\n              <button mat-icon-button *ngIf=\"element.data === selectedObject\">\r\n                <i class=\"material-icons-outlined\">description</i>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\" [hideDelay]=\"hideDelay\"\r\n            [showDelay]=\"showDelay\" *matCellDef=\"let element\" (dblclick)=\"dblClickCell()\"\r\n            (click)=\"selectedCell(element, column)\" [class.selected-row]=\"isSelectedCell(element, column)\"\r\n            [ngClass]=\"getClassToCell(element.data, column)\">\r\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{\r\n              getValue(element.data, column) }}</a>\r\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\r\n          </td>\r\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\r\n        </ng-container>\r\n\r\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\r\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\r\n            {{column.subtitle}}</th>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"groupHeader\">\r\n        <td mat-cell *matCellDef=\"let group\">\r\n          <strong>{{ getGroupDescription(group.data) }}</strong>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\r\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row, true)\"\r\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\"\r\n          [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!isDragged\">\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\r\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\r\n        </tr>\r\n      </ng-container>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\r\n    </table>\r\n  </div>\r\n  <div *ngIf=\"showMessageEmpty(data)\">\r\n    <p>\r\n      {{getMessageEmtpy()}}\r\n    </p>\r\n  </div>\r\n</div>\r\n",
                styles: ["table{table-layout:fixed}tbody tr,tfoot tr,thead tr{height:26px}tbody tr td,tbody tr th,tfoot tr td,tfoot tr th,thead tr td,thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}tbody tr td button{line-height:inherit;height:auto}tfoot{display:none}tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}::ng-deep hel-table{position:relative}::ng-deep hel-table>button{justify-content:center;align-items:flex-start;background:transparent;position:absolute;color:transparent;overflow:hidden;cursor:pointer;display:flex;border:none;height:26px;z-index:101;width:20px;opacity:.5;right:0;top:0}::ng-deep hel-table>button:focus{outline:none}::ng-deep hel-table>button:hover{opacity:1}::ng-deep hel-table>button:before{justify-content:center;align-items:center;position:absolute;font-size:20px;display:flex;content:\"+\";color:#fff;height:26px;width:20px}::ng-deep hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}::ng-deep hel-table .buttons-container{order:2}::ng-deep hel-table .buttons-container.hasSubtitle,::ng-deep hel-table .buttons-container.hasTitle{padding-top:26px}::ng-deep hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}::ng-deep hel-table .buttons-container>div{height:26px}::ng-deep hel-table .buttons-container>div button{justify-content:center;align-items:center;display:flex;height:26px}::ng-deep hel-table .buttons-container>div button>*{display:flex;height:100%}::ng-deep hel-table .div-table-helisa{height:100%}::ng-deep hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}::ng-deep hel-table .div-table-helisa .container-table .table-helisa{width:100%}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep table{table-layout:fixed}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr{height:26px}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr th,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr th,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr th{text-overflow:ellipsis;padding:2px 10px 0;overflow:hidden}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr th{text-transform:uppercase;background:#579380;font-size:18px;color:#fff}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td button{line-height:inherit;height:auto}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot{display:none}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}::ng-deep hel-table .div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
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
    hideDelay: [{ type: Input }],
    showDelay: [{ type: Input }],
    isRemote: [{ type: Input }],
    columnConfiguration: [{ type: Input }],
    dataSource: [{ type: Input }],
    selectedIndexRow: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLE9BQU8sRUFBUSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RSxPQUFPLEVBR0wsNkJBQTZCLEVBRTdCLGdCQUFnQixFQUtoQixVQUFVLEVBSVYsZUFBZSxFQUVmLFNBQVMsRUFDVCxVQUFVLEVBR1gsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBT3pELElBQUssT0FFSjtBQUZELFdBQUssT0FBTztJQUNWLG1EQUFXLENBQUE7SUFBRSxxREFBWSxDQUFBO0lBQUUsbUNBQUcsQ0FBQTtBQUNoQyxDQUFDLEVBRkksT0FBTyxLQUFQLE9BQU8sUUFFWDtBQVNELE1BQU0sT0FBTyxvQkFBb0I7SUF1RS9CLFlBQW9CLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQWxFdkQsU0FBSSxHQUFtQyxJQUFJLGtCQUFrQixDQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyw4QkFBeUIsR0FBYSxFQUFFLENBQUM7UUFDekMsaUNBQTRCLEdBQWEsRUFBRSxDQUFDO1FBQzVDLCtCQUEwQixHQUFhLEVBQUUsQ0FBQztRQUkxQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFFdEMsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDaEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDckIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDL0IscUJBQWdCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsbUJBQWMsR0FBMkIsSUFBSSxDQUFDO1FBQzlDLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQU9sQixTQUFJLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFDbEUsVUFBSyxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ25FLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUU5RTs7V0FFRztRQUNPLFdBQU0sR0FBb0IsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUNoRCxlQUFVLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDaEUsaUJBQVksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbEYsYUFBUSxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUMzRixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBTWhDLFNBQUksR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDekUsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixpQkFBWSxHQUFpQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNqRywwQkFBcUIsR0FBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUMxRSxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdEQsZ0JBQVcsR0FBb0IsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUN0RCxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNyQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFJNUI7O1dBRUc7UUFDTSxjQUFTLEdBQVcsR0FBRyxDQUFDO1FBRWpDOztXQUVHO1FBQ00sY0FBUyxHQUFXLEdBQUcsQ0FBQztJQUcwQixDQUFDO0lBRTVELFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQ3hDLENBQUMsSUFBaUMsRUFBUSxFQUFFO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBOEMsRUFBUSxFQUFFO1lBQy9GLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBb0IsRUFBRSxHQUFXLEVBQVEsRUFBRTtvQkFDcEUsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7d0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3FCQUM5RjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQy9CLENBQUMsS0FBVyxFQUFRLEVBQUU7WUFDcEIsTUFBTSxNQUFNLEdBQWlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBZSxFQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzRyxNQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsNkJBQTZCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoSCxDQUFDLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUMzQyxDQUFDLElBQWEsRUFBUSxFQUFFO1lBQ3RCLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDckM7UUFDSCxDQUFDLENBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELElBQ0ksUUFBUSxDQUFDLENBQVU7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksMkJBQTJCLEVBQUssQ0FBQztRQUN4RSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUN4QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7YUFBTTtZQUNMLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRCxJQUNJLG1CQUFtQixDQUFDLG1CQUF3QztRQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLG1CQUFtQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUNJLFVBQVUsQ0FBQyxVQUFvQjtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFDSSxnQkFBZ0IsQ0FBQyxhQUFxQjtRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFGO0lBQ0gsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsTUFBTSxXQUFXLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7Z0JBQ3JELElBQUksYUFBYSxHQUFXLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxjQUFjLEdBQVksS0FBSyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQW9CLEVBQVEsRUFBRTtvQkFDdkQsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTt3QkFDckIsYUFBYSxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUM7cUJBQ25DO29CQUNELElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsRUFBRTt3QkFDdkQsY0FBYyxHQUFHLElBQUksQ0FBQztxQkFDdkI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxZQUFZLEdBQVksV0FBVyxLQUFLLGFBQWEsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBQ3JCLElBQUksRUFBRSxZQUFZO3dCQUNsQixLQUFLLEVBQUUsRUFBRTt3QkFDVCxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7d0JBQ3ZDLE9BQU8sRUFBRSxJQUFJO3FCQUNkLENBQUMsQ0FBQztpQkFDSjthQUNGO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFvQixFQUFRLEVBQUU7Z0JBQ3ZELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3pDO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDO2lCQUNsRDtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDaEM7U0FDRjtRQUNELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVcsRUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVcsRUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVcsRUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLE1BQU0sVUFBVSxHQUFzQixLQUFLLEVBQWMsQ0FBQztZQUMxRCxJQUFJLFNBQVMsR0FBWSxLQUFLLENBQUM7WUFDL0IsSUFBSSxXQUE4QixDQUFDO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBb0IsRUFBUSxFQUFFO2dCQUN2RCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQ3pILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLDZCQUE2QixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ2pIO2dCQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUN2RCxTQUFTLEdBQUcsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLFNBQVMsRUFBRTtnQkFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBSSxFQUFFLENBQUksRUFBVSxFQUFFO29CQUN0RCxJQUFJLE1BQU0sR0FBVyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBb0IsRUFBUSxFQUFFO3dCQUN2RCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7NEJBQ2hCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDN0I7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsT0FBTyxNQUFNLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBTSxFQUFRLEVBQUU7b0JBQ3BDLElBQUksU0FBUyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQ2xILElBQUksV0FBVyxFQUFFOzRCQUNmLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzt5QkFDdkU7d0JBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUM3RCxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQWEsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDL0Q7b0JBQ0QsSUFBSSxTQUFTLEVBQUU7d0JBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ3RDO29CQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDdkQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtCQUFrQixDQUFhLFVBQVUsQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN0RixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUU7b0JBQ3pFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QjtnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDMUY7U0FDRjtJQUNILENBQUM7SUFFTyxhQUFhLENBQUMsUUFBMkIsRUFBRSxHQUFNO1FBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBb0IsRUFBRSxLQUFhLEVBQVEsRUFBRTtZQUN0RSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUNsQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRyxJQUFJLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQy9GO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUssSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFZLENBQUM7b0JBQ2hGLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDekI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLE9BQU8sQ0FBQyxDQUFJLEVBQUUsQ0FBSTtRQUN4QixJQUFJLEVBQUUsR0FBVyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFvQixFQUFRLEVBQUU7WUFDdkQsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hDLElBQUssSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFZLEdBQUksSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFZLEVBQUU7b0JBQ25ILEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDVDtxQkFBTSxJQUFLLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBWSxHQUFJLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBWSxFQUFFO29CQUMxSCxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNSO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELG1CQUFtQixDQUFDLEdBQU07UUFDeEIsSUFBSSxNQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBb0IsRUFBUSxFQUFFO1lBQ3ZELElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDcEIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDekY7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYSxFQUFFLElBQWdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQzlDLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYSxFQUFFLElBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYSxFQUFFLElBQWdCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQy9DLENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBWSxFQUFVLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUFvQixFQUFFLElBQWdCO1FBQ2xELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQUU7UUFDNUQsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FBRTtRQUNoRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUFFO1FBQ2xGLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBTSxFQUFFLE1BQW9CO1FBQ25DLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFNLENBQUM7SUFDM0QsQ0FBQztJQUVELGVBQWUsQ0FBQyxHQUFNLEVBQUUsTUFBb0I7UUFDMUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFXLENBQUM7U0FDL0Q7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFlLEVBQUUsTUFBZSxFQUFFLE1BQXFCO1FBQy9ELElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ3JDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsRUFBRTtZQUMzRixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxJQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDaEg7YUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDbkQsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLElBQVMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQ2hIO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFZO1FBQ25CLE1BQU0sT0FBTyxHQUFtQixLQUFLLENBQUMsTUFBd0IsQ0FBQztRQUMvRCxJQUFJLFNBQWtCLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdkMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUU7WUFDbEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBRUgsQ0FBQztJQUVPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxFQUFFO1lBQzVGLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRTtnQkFDakQsSUFBSSxFQUFFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ25GLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVPLFdBQVcsQ0FBQyxJQUFTO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUssQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbEQsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBd0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxZQUFZLENBQUMsT0FBbUIsRUFBRSxNQUFvQjtRQUNwRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFFRCxjQUFjLENBQUMsR0FBZSxFQUFFLE1BQW9CO1FBQ2xELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO2dCQUM5QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSTtvQkFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFrQixDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUMxRCxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxjQUFjLENBQUMsR0FBTSxFQUFFLE1BQW9CO1FBQ3pDLE1BQU0sV0FBVyxHQUFrQixJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLE1BQU0sS0FBSyxHQUF3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBc0IsRUFBVyxFQUFFO2dCQUNoRyxPQUFPLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLEtBQUssRUFBRTtnQkFDVCxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNuQztTQUNGO1FBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQ3RCLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFRCxhQUFhLENBQUMsR0FBTTtRQUNsQixNQUFNLFVBQVUsR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUN0RCxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4RCxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsTUFBTSxNQUFNLEdBQXlCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFxQixFQUFXLEVBQUU7Z0JBQzVHLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBcUIsRUFBUSxFQUFFO29CQUM3QyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFpQjtRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsRUFBRTtZQUNqRCxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2RCxNQUFNLEtBQUssR0FBaUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckQsTUFBTSxPQUFPLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6RCxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQW9CO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksWUFBWSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQWUsRUFBVyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEgsSUFBSSxZQUFZLEdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDL0IsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFdBQVcsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFlLEVBQUUsS0FBYSxFQUFRLEVBQUU7b0JBQzlELElBQUksWUFBWSxLQUFLLENBQUMsRUFBRSxJQUFJLEtBQUssR0FBRyxZQUFZLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFFO3dCQUMvRSxZQUFZLEdBQUcsS0FBSyxDQUFDO3FCQUN0QjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQWUsRUFBRSxLQUFhLEVBQVEsRUFBRTtvQkFDeEUsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFLElBQUksS0FBSyxHQUFHLFlBQVksSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxHQUFHLEVBQUU7d0JBQy9FLFlBQVksR0FBRyxLQUFLLENBQUM7cUJBQ3RCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QixJQUFJLFlBQVksS0FBSyxDQUFDLEVBQUUsRUFBRTtvQkFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2lCQUN6RDthQUNGO1lBQ0QsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDcEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR0QsaUJBQWlCO1FBQ2YsTUFBTSxDQUFDLEdBQWEsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFvQixFQUFFLEtBQWEsRUFBVSxFQUFFO1lBQ3hGLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDbkQsT0FBTyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFZLEVBQVcsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQW9CLEVBQVcsRUFBRSxDQUNoRSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWlCLEVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxFQUFFO1lBQ2pELE1BQU0sUUFBUSxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztnQkFDakMsK0NBQStDO2dCQUMvQyxNQUFNLEtBQUssR0FBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFELGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7WUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxTQUFTLENBQUMsS0FBaUI7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFTyxXQUFXLENBQUMsS0FBYTtRQUMvQixJQUFJLFNBQVMsR0FBVyxDQUFDLENBQUM7UUFDMUIsSUFBSSxTQUFTLEdBQWdCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFDaEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDckM7UUFDRCxJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLElBQUksR0FBbUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNyRixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxNQUFNLEdBQUcsR0FBaUIsSUFBSSxDQUFDLENBQUMsQ0FBaUIsQ0FBQztZQUNsRCxJQUFJLEtBQUssR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7Z0JBQ25GLFFBQVEsR0FBRyxDQUFDLENBQUM7YUFDZDtTQUNGO1FBQ0QsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUFFO1FBQ25DLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBb0M7UUFDbkQsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFRLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDOUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTtnQkFDaEMsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsdUJBQXVCO1FBQ3JCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztTQUN0QztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7O1lBMWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGd0S0FBNEM7O2FBRTdDOzs7WUFuQlEsa0JBQWtCOzs7c0JBNEN4QixTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1QkFDbkMsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7OEJBQ3BDLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBQ3RELFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7bUJBRTVDLE1BQU07b0JBQ04sTUFBTTtxQkFDTixNQUFNO3FCQUtOLE1BQU07eUJBQ04sTUFBTTsyQkFDTixNQUFNO3VCQUNOLE1BQU07d0JBQ04sS0FBSzs4QkFDTCxLQUFLO29CQUNMLEtBQUs7K0JBQ0wsS0FBSzt3Q0FDTCxLQUFLO2dDQUNMLEtBQUs7NEJBQ0wsS0FBSzttQkFDTCxNQUFNO3dCQUNOLEtBQUs7MkJBQ0wsS0FBSztvQ0FDTCxLQUFLO3FCQUNMLE1BQU07MEJBQ04sTUFBTTs0QkFDTixLQUFLOzBCQUNMLEtBQUs7d0JBU0wsS0FBSzt3QkFLTCxLQUFLO3VCQStDTCxLQUFLO2tDQVdMLEtBQUs7eUJBT0wsS0FBSzsrQkFXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNvcnQsIFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcclxuaW1wb3J0IHsgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQWRkUm93QnV0dG9uLFxyXG4gIENlbGwsXHJcbiAgQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUsXHJcbiAgQ29sdW1uQ29uZmlnLFxyXG4gIENvbHVtbkNvbmZpZ1V0aWwsXHJcbiAgQ29uZmlnQ2VsbFN0eWxlcyxcclxuICBDb25maWdSb3dTdHlsZXMsXHJcbiAgRHJvcEVsZW1lbnQsXHJcbiAgRXZlbnRDb2x1bW4sXHJcbiAgRXZlbnRTY29wZSxcclxuICBFdmVudFNlYXJjaCxcclxuICBSZXF1ZXN0VGFibGVIZWxpc2EsXHJcbiAgU2VsZWN0T2JqZWN0LFxyXG4gIFRhYmxlSGVsaXNhVHlwZSxcclxuICBUb3RhbEdyb3VwLFxyXG4gIFRvdGFsVHlwZSxcclxuICBDb2x1bW5UeXBlLFxyXG4gIFRvdGFsVGFibGVIZWxpc2EsXHJcbiAgRW1wdHlNZXNzYWdlQ29sdW1uXHJcbn0gZnJvbSAnLi90YWJsZS1oZWxpc2EuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVGFibGVIZWxpc2FTZXJ2aWNlLCBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvIH0gZnJvbSAnLi90YWJsZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtaGVsaXNhLWNvbm5lY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvd0RhdGE8VD4ge1xyXG4gIGRhdGE6IHt9IHwgVDtcclxuICByb3dUeXBlOiBSb3dUeXBlO1xyXG59XHJcblxyXG5lbnVtIFJvd1R5cGUge1xyXG4gIEdST1VQX1RJVExFLCBHUk9VUF9GT09URVIsIFJPV1xyXG59XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIHRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDogVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+O1xyXG4gIHRvdGFsRGF0YTogQXJyYXk8bnVtYmVyPjtcclxuICByYXdEYXRhOiBBcnJheTxUPjtcclxuICBkYXRhOiBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YTxUPj4gPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE8VD4+KFtdKTtcclxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGU6IHN0cmluZ1tdID0gW107XHJcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZTogc3RyaW5nW10gPSBbXTtcclxuICBkaXNwbGF5ZWRDb2x1bW5zV2l0aEZvb3Rlcjogc3RyaW5nW10gPSBbXTtcclxuICBjb2x1bW5Db25maWc6IEFycmF5PENvbHVtbkNvbmZpZz47XHJcbiAgc2VsZWN0ZWRPYmplY3Q6IFQ7XHJcbiAgbGFzdFNlYXJjaDogc3RyaW5nO1xyXG4gIHR5cGU6IFRhYmxlSGVsaXNhVHlwZSA9IFRhYmxlSGVsaXNhVHlwZS5MT0NBTDtcclxuICBpbmRleFJvd1NlbGVjdDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc2Nyb2xsQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgaGFzU3VidGl0bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGluZGV4Um93U3RhcnREcmFnOiBudW1iZXIgPSAtMTtcclxuICBwcml2YXRlIGxhc3RJbmRleFJvd0RyYWc6IG51bWJlciA9IC0xO1xyXG4gIHByaXZhdGUgZGF0YUJlZm9yZURyYWc6IHsgZGF0YTogUm93RGF0YTxUPltdIH0gPSBudWxsO1xyXG4gIHByaXZhdGUgZGF0YVNvdXJjZSQ6IEFycmF5PFQ+ID0gW107XHJcbiAgcHJpdmF0ZSBzY3JvbGxYOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgc2Nyb2xsWTogbnVtYmVyID0gMDtcclxuXHJcbiAgQFZpZXdDaGlsZChNYXRTb3J0LCB7IHN0YXRpYzogdHJ1ZSB9KSBtYXRTb3J0OiBNYXRTb3J0O1xyXG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUsIHsgc3RhdGljOiB0cnVlIH0pIG1hdFRhYmxlOiBNYXRUYWJsZTxUPjtcclxuICBAVmlld0NoaWxkKE1hdFRhYmxlLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBtYXRUYWJsZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyVGFibGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250YWluZXJUYWJsZTogRWxlbWVudFJlZjtcclxuXHJcbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xyXG4gIEBPdXRwdXQoKSB0b3RhbDogRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+KCk7XHJcbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2FkbywgY2FtYmlhciBwb3IgZWxlY3RPYmplY3RcclxuICAgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdENlbGw6IEV2ZW50RW1pdHRlcjxDZWxsPFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbDxUPj4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PigpO1xyXG4gIEBPdXRwdXQoKSBuZXh0UGFnZTogRXZlbnRFbWl0dGVyPFJlcXVlc3RUYWJsZUhlbGlzYTxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPFJlcXVlc3RUYWJsZUhlbGlzYTxUPj4oKTtcclxuICBASW5wdXQoKSBzaG93VGl0bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGlzQ2VsbFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY29uZmlnQ2VsbFN0eWxlczogQXJyYXk8Q29uZmlnQ2VsbFN0eWxlczxUPj47XHJcbiAgQElucHV0KCkgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbjogQXJyYXk8Q29uZmlnUm93U3R5bGVzPFQ+PjtcclxuICBASW5wdXQoKSBjb25maWdDb2x1bW5DbGFzczogQXJyYXk8c3RyaW5nPjtcclxuICBASW5wdXQoKSBzZWxlY3RlZENlbGxzOiBDZWxsPFQ+O1xyXG4gIEBPdXRwdXQoKSBkcm9wOiBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRWxlbWVudDxUPj4oKTtcclxuICBASW5wdXQoKSBpc0RyYWdnZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBhZGRSb3dCdXR0b246IEFkZFJvd0J1dHRvbiA9IHsgc2hvd0J1dHRvbjogZmFsc2UsIHRleHQ6ICcnLCBpc0Rpc2FibGVkOiBmYWxzZSwgdG9vbFRpcFRleHQ6ICcnIH07XHJcbiAgQElucHV0KCkgZW1wdHlNZXNzYWdlRm9yQ29sdW1uOiBFbXB0eU1lc3NhZ2VDb2x1bW4gPSB7IGlzRW5hYmxlZDogZmFsc2UsIHRleHQ6ICcnIH07XHJcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBib29rQ2xpY2tlZDogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG4gIEBJbnB1dCgpIGFkZEJvb2tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XHJcbiAgc2hvd0Zvb3RlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNob3dTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamUgZGVsIHRvb2x0aXBcclxuICAgKi9cclxuICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlU2VydmljZTogVGFibGVIZWxpc2FTZXJ2aWNlPFQ+KSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbG9hZENvbHVtbkNvbmZpZygpO1xyXG4gICAgdGhpcy50YWJsZVNlcnZpY2UubmV4dFBhZ2VSZXR1cm4uc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YTogVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKCFkYXRhLnRhYmxlIHx8IGRhdGEudGFibGUgPT09IHRoaXMpIHtcclxuICAgICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5vYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMudGFibGVTZXJ2aWNlLnRvdGFsUmV0dXJuLnN1YnNjcmliZSgoaW5mbzogVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUb3RhbFRhYmxlSGVsaXNhPik6IHZvaWQgPT4ge1xyXG4gICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpZHg6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgaWYgKGNvbHVtbiA9PT0gaW5mby5vYmouY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxEYXRhW2lkeF0gPSB0aGlzLmdldEdyb3VwVmFsdWUoY29sdW1uLCB7IHN1bTogaW5mby5vYmoudmFsdWUsIGNvdW50OiB0aGlzLmNvdW50IH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWF0U29ydC5zb3J0Q2hhbmdlLnN1YnNjcmliZShcclxuICAgICAgKGV2ZW50OiBTb3J0KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uOiBDb2x1bW5Db25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZy5maW5kKChjOiBDb2x1bW5Db25maWcpOiBib29sZWFuID0+IGMubmFtZSA9PT0gZXZlbnQuYWN0aXZlKTtcclxuICAgICAgICBjb2x1bW4uc29ydERpcmVjdGlvbiA9IGV2ZW50LmRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLnNvcnQuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5TT1JUIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMudGFibGVTZXJ2aWNlLmVtaXRWaXNpYmxlQnV0dG9uLnN1YnNjcmliZShcclxuICAgICAgKGRhdGE6IGJvb2xlYW4pOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLm1hdFRhYmxlLnJlbmRlclJvd3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlzUmVtb3RlKHc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHlwZSA9IHcgPyBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFIDogVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xyXG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgPSBuZXcgVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+KCk7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFKSB7XHJcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY29sdW1uQ29uZmlndXJhdGlvbihjb2x1bW5Db25maWd1cmF0aW9uOiBBcnJheTxDb2x1bW5Db25maWc+KSB7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZyA9IGNvbHVtbkNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLnJlbG9hZCgpO1xyXG4gICAgdGhpcy5yZWxvYWRDb2x1bW5Db25maWcoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGFTb3VyY2UoZGF0YVNvdXJjZTogQXJyYXk8VD4pIHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZSQgPSBkYXRhU291cmNlO1xyXG4gICAgdGhpcy5yYXdEYXRhID0gZGF0YVNvdXJjZTtcclxuICAgIHRoaXMucmVsb2FkKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YVNvdXJjZSgpOiBBcnJheTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlJDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkSW5kZXhSb3coaWRSb3dTZWxlY3RlZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gaWRSb3dTZWxlY3RlZDtcclxuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCkge1xyXG4gICAgICBpZiAoKGlkUm93U2VsZWN0ZWQgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCBpZFJvd1NlbGVjdGVkIDwgMCkpIHtcclxuICAgICAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdFJvdyh7IGRhdGE6IHRoaXMucmF3RGF0YVt0aGlzLmluZGV4Um93U2VsZWN0XSwgcm93VHlwZTogUm93VHlwZS5ST1cgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWxvYWRDb2x1bW5Db25maWcoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhc1N1YnRpdGxlID0gZmFsc2U7XHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbHVtbkNvbmZpZykge1xyXG4gICAgICBpZiAodGhpcy5hZGRCb29rQnV0dG9uKSB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uQ291bnQ6IG51bWJlciA9IHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aDtcclxuICAgICAgICBsZXQgY291bnRTdWJ0aXRsZTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgc2hvd0Jvb2tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgaWYgKCEhY29sdW1uLnN1YnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGNvdW50U3VidGl0bGUgPSBjb3VudFN1YnRpdGxlICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICgoIXNob3dCb29rQnV0dG9uKSAmJiAoY29sdW1uLm5hbWUgPT09ICdib29rQnV0dG9uJykpIHtcclxuICAgICAgICAgICAgc2hvd0Jvb2tCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHN1YnRpdGxlVGVtcDogYm9vbGVhbiA9IGNvbHVtbkNvdW50ID09PSBjb3VudFN1YnRpdGxlO1xyXG4gICAgICAgIGlmICghc2hvd0Jvb2tCdXR0b24pIHtcclxuICAgICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiAnYm9va0J1dHRvbicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgc3VidGl0bGU6IHN1YnRpdGxlVGVtcCA/ICcnIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAoY29sdW1uLnZpc2libGUpIHtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5wdXNoKGNvbHVtbi5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc1N1YnRpdGxlKSB7XHJcbiAgICAgICAgICB0aGlzLmhhc1N1YnRpdGxlID0gY29sdW1uLnN1YnRpdGxlICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMucmF3RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUubGVuZ3RoKTtcclxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZS5zcGxpY2UoMCwgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLmxlbmd0aCk7XHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoRm9vdGVyLmxlbmd0aCk7XHJcbiAgICB0aGlzLmdldENvbHVtbnNXaXRoVGl0bGUoKS5mb3JFYWNoKChjb2w6IHN0cmluZyk6IG51bWJlciA9PiB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUucHVzaChjb2wpKTtcclxuICAgIHRoaXMuZ2V0SGVhZGVyU3VidGl0bGUoKS5mb3JFYWNoKChjb2w6IHN0cmluZyk6IG51bWJlciA9PiB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGUucHVzaChjb2wpKTtcclxuICAgIHRoaXMuZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpLmZvckVhY2goKGNvbDogc3RyaW5nKTogbnVtYmVyID0+IHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIucHVzaChjb2wpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWxvYWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb2x1bW5Db25maWcpIHtcclxuICAgICAgY29uc3QgY2hhbmdlRGF0YTogQXJyYXk8Um93RGF0YTxUPj4gPSBBcnJheTxSb3dEYXRhPFQ+PigpO1xyXG4gICAgICBsZXQgaGF2ZUdyb3VwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgIGxldCBncm91cEZvb3RlcjogQXJyYXk8VG90YWxHcm91cD47XHJcbiAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCAmJiAodGhpcy50eXBlID09PSBUYWJsZUhlbGlzYVR5cGUuTE9DQUwgfHwgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQucGFnZSA8PSAxKSkge1xyXG4gICAgICAgICAgdGhpcy50b3RhbERhdGEgPSBuZXcgQXJyYXk8bnVtYmVyPih0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGgpO1xyXG4gICAgICAgICAgdGhpcy5zaG93Rm9vdGVyID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMudG90YWwuZW1pdCh7IGNvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5UT1RBTCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93U2VhcmNoID0gdGhpcy5zaG93U2VhcmNoIHx8IGNvbHVtbi5zZWFyY2hhYmxlO1xyXG4gICAgICAgIGhhdmVHcm91cCA9IGhhdmVHcm91cCB8fCBjb2x1bW4uZ3JvdXBhYmxlO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGhhdmVHcm91cCkge1xyXG4gICAgICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5zb3J0KChhOiBULCBiOiBUKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jb21wYXJlKGEsIGIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucmF3RGF0YSkge1xyXG4gICAgICAgIHRoaXMucmF3RGF0YS5mb3JFYWNoKChyb3c6IFQpOiB2b2lkID0+IHtcclxuICAgICAgICAgIGlmIChoYXZlR3JvdXAgJiYgKGNoYW5nZURhdGEubGVuZ3RoID09PSAwIHx8IHRoaXMuY29tcGFyZShjaGFuZ2VEYXRhW2NoYW5nZURhdGEubGVuZ3RoIC0gMV0uZGF0YSBhcyBULCByb3cpICE9PSAwKSkge1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXBGb290ZXIpIHtcclxuICAgICAgICAgICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiBncm91cEZvb3Rlciwgcm93VHlwZTogUm93VHlwZS5HUk9VUF9GT09URVIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHsgZGF0YTogcm93LCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX1RJVExFIH0pO1xyXG4gICAgICAgICAgICBncm91cEZvb3RlciA9IG5ldyBBcnJheTxUb3RhbEdyb3VwPih0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGhhdmVHcm91cCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRvdGFsR3JvdXAoZ3JvdXBGb290ZXIsIHJvdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGFuZ2VEYXRhLnB1c2goeyBkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YTxUPj4oY2hhbmdlRGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoICYmIHRoaXMuaW5kZXhSb3dTZWxlY3QgJiYgIXRoaXMuc2VsZWN0ZWRPYmplY3QpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmRleFJvd1NlbGVjdCA+PSB0aGlzLnJhd0RhdGEubGVuZ3RoIHx8IHRoaXMuaW5kZXhSb3dTZWxlY3QgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLmluZGV4Um93U2VsZWN0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUb3RhbEdyb3VwKHJvd1RvdGFsOiBBcnJheTxUb3RhbEdyb3VwPiwgcm93OiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbHVtbkNvbmZpZy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHJvd1RvdGFsW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0gPSB7IHN1bTogKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUocm93LCBjb2x1bW4pIGFzIG51bWJlciksIGNvdW50OiAxIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5zdW0gKz0gKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUocm93LCBjb2x1bW4pIGFzIG51bWJlcik7XHJcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0uY291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXIge1xyXG4gICAgbGV0IHdzOiBudW1iZXIgPSAwO1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkID0+IHtcclxuICAgICAgaWYgKHdzID09PSAwICYmIGNvbHVtbi5ncm91cGFibGUpIHtcclxuICAgICAgICBpZiAoKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYSwgY29sdW1uKSBhcyBudW1iZXIpIDwgKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYiwgY29sdW1uKSBhcyBudW1iZXIpKSB7XHJcbiAgICAgICAgICB3cyA9IC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYSwgY29sdW1uKSBhcyBudW1iZXIpID4gKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYiwgY29sdW1uKSBhcyBudW1iZXIpKSB7XHJcbiAgICAgICAgICB3cyA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB3cztcclxuICB9XHJcblxyXG4gIGdldEdyb3VwRGVzY3JpcHRpb24ob2JqOiBUKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi5ncm91cGFibGUpIHtcclxuICAgICAgICByZXN1bHQgKz0gKHJlc3VsdC5sZW5ndGggPyAnIC0gJyA6ICcnKSArIChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzR3JvdXBUaXRsZShpbmRleDogbnVtYmVyLCBpdGVtOiBSb3dEYXRhPFQ+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLkdST1VQX1RJVExFO1xyXG4gIH1cclxuXHJcbiAgaXNSb3coaW5kZXg6IG51bWJlciwgaXRlbTogUm93RGF0YTxUPik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5ST1c7XHJcbiAgfVxyXG5cclxuICBpc0dyb3VwRm9vdGVyKGluZGV4OiBudW1iZXIsIGl0ZW06IFJvd0RhdGE8VD4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfRk9PVEVSO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyRGlzcGxheWVkQ29sdW1ucygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZENvbHVtbnMubWFwKChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4gJ2Zvb3Rlci0nICsgbmFtZSk7XHJcbiAgfVxyXG5cclxuICBnZXRHcm91cFZhbHVlKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBkYXRhOiBUb3RhbEdyb3VwKTogbnVtYmVyIHtcclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuU1VNKSB7IHJldHVybiBkYXRhLnN1bTsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5DT1VOVCkgeyByZXR1cm4gZGF0YS5jb3VudDsgfVxyXG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5BVkVSQUdFKSB7IHJldHVybiAxLiAqIGRhdGEuc3VtIC8gZGF0YS5jb3VudDsgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKG9iajogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBUIHtcclxuICAgIHJldHVybiBuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSBhcyBUO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWVUb29sdGlwKG9iajogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuc2hvd1Rvb2xUaXApIHtcclxuICAgICAgcmV0dXJuIG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUob2JqLCBjb2x1bW4pIGFzIHN0cmluZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoVGV4dCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubGFzdFNlYXJjaCA9IHRleHQ7XHJcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHsgdGV4dCwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KHJvdzogUm93RGF0YTxUPiwgaXNVc2VyOiBib29sZWFuLCBjb2x1bW4/OiBDb2x1bW5Db25maWcpOiB2b2lkIHtcclxuICAgIGlmIChyb3cgPT09IHVuZGVmaW5lZCB8fCByb3cgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKChjb2x1bW4gPT09IHVuZGVmaW5lZCB8fCBjb2x1bW4gPT09IG51bGwpIHx8ICghIWNvbHVtbiAmJiBjb2x1bW4ubmFtZSAhPT0gJ2Jvb2tCdXR0b24nKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0ID0gcm93LmRhdGEgYXMgVDtcclxuICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgdGhpcy5zZWxlY3RPYmplY3QuZW1pdCh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkT2JqZWN0LCBzY29wZTogaXNVc2VyID8gRXZlbnRTY29wZS5VU0VSIDogRXZlbnRTY29wZS5DT0RFX0NBTEwgfSk7XHJcbiAgICB9IGVsc2UgaWYgKCEhY29sdW1uICYmIGNvbHVtbi5uYW1lID09PSAnYm9va0J1dHRvbicpIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmplY3QgIT09IHJvdy5kYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHJvdy5kYXRhIGFzIFQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRPYmplY3QsIHNjb3BlOiBpc1VzZXIgPyBFdmVudFNjb3BlLlVTRVIgOiBFdmVudFNjb3BlLkNPREVfQ0FMTCB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJvb2tDbGlja2VkLmVtaXQodGhpcy5zZWxlY3RlZE9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbGV0IGlzU2Nyb2xsWTogYm9vbGVhbjtcclxuXHJcbiAgICBpZiAodGhpcy5zY3JvbGxZICE9PSBlbGVtZW50LnNjcm9sbFRvcCkge1xyXG4gICAgICBpc1Njcm9sbFkgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNjcm9sbFkgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgdGhpcy5zY3JvbGxYID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNjcm9sbFggIT09IGVsZW1lbnQuc2Nyb2xsTGVmdCkge1xyXG4gICAgICBpc1Njcm9sbFkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zY3JvbGxZID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgIHRoaXMuc2Nyb2xsWCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxUb3AgPCAxMDAwKSAmJiBpc1Njcm9sbFkpIHtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb05leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlICYmICF0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQpIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5uZXh0UGFnZS5lbWl0KHtcclxuICAgICAgICBwYWdlOiB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5uZXh0UGFnZSgpLFxyXG4gICAgICAgIGJvZHk6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmdldEJvZHkodGhpcy5jb2x1bW5Db25maWcsIHRoaXMubGFzdFNlYXJjaClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlY2VpdmVQYWdlKGRhdGE6IFRbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnJhd0RhdGEpIHtcclxuICAgICAgdGhpcy5yYXdEYXRhID0gbmV3IEFycmF5PFQ+KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuY29uY2F0KGRhdGEpO1xyXG4gICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5yYXdEYXRhO1xyXG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNMYXN0UGFnZSA9IGRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkYmxDbGlja0NlbGwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdENlbGwuZW1pdCh0aGlzLnNlbGVjdGVkQ2VsbHMgYXMgQ2VsbDxUPik7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZENlbGwoZWxlbWVudDogUm93RGF0YTxUPiwgY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkIHtcclxuICAgIGlmIChjb2x1bW4uaXNTZWxlY3RhYmxlID09PSB1bmRlZmluZWQgfHwgY29sdW1uLmlzU2VsZWN0YWJsZSA9PT0gbnVsbCB8fCBjb2x1bW4uaXNTZWxlY3RhYmxlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Um93KGVsZW1lbnQsIHRydWUsIGNvbHVtbik7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDZWxscyA9IHsgY29sdW1uLCByb3c6IGVsZW1lbnQgfTtcclxuICAgICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRDZWxsKHJvdzogUm93RGF0YTxUPiwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZENlbGxzICE9IG51bGwpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENlbGxzLmNvbHVtbi5uYW1lID09PSBjb2x1bW4ubmFtZSAmJlxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0ZWRDZWxscy5yb3cgYXMgUm93RGF0YTxUPikuZGF0YSA9PT0gcm93LmRhdGEpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NUb0NlbGwocm93OiBULCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGNsYXNzVG9DZWxsOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIGlmICh0aGlzLmNvbmZpZ0NlbGxTdHlsZXMpIHtcclxuICAgICAgY29uc3QgZm91bmQ6IENvbmZpZ0NlbGxTdHlsZXM8VD4gPSB0aGlzLmNvbmZpZ0NlbGxTdHlsZXMuZmluZCgoYzogQ29uZmlnQ2VsbFN0eWxlczxUPik6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiBjLmNlbGxEYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgY29sdW1uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgIGNsYXNzVG9DZWxsLnB1c2goZm91bmQuY2xhc3NDZWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNvbHVtbi5jb2x1bW5TdHlsZSkge1xyXG4gICAgICBjbGFzc1RvQ2VsbC5wdXNoKGNvbHVtbi5jb2x1bW5TdHlsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NUb0NlbGw7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc1RvQ29sdW1uKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZ0NvbHVtbkNsYXNzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NUb1Jvdyhyb3c6IFQpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBjbGFzc1RvUm93OiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIGlmIChyb3cgPT09IHRoaXMuc2VsZWN0ZWRPYmplY3QgJiYgIXRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XHJcbiAgICAgIGNsYXNzVG9Sb3cucHVzaCgnJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kczogQ29uZmlnUm93U3R5bGVzPFQ+W10gPSB0aGlzLmNvbmZpZ1Jvd1N0eWxlc0Zyb21Db2x1bW4uZmlsdGVyKChjOiBDb25maWdSb3dTdHlsZXM8VD4pOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gYy5kYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgYy5jb2x1bW4pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZvdW5kcykge1xyXG4gICAgICAgIGZvdW5kcy5mb3JFYWNoKChjOiBDb25maWdSb3dTdHlsZXM8VD4pOiB2b2lkID0+IHtcclxuICAgICAgICAgIGNsYXNzVG9Sb3cucHVzaChjLmNsYXNzUm93KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzVG9Sb3c7XHJcbiAgfVxyXG5cclxuICBvbkRyb3AoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJhZ2dlZCAmJiB0aGlzLmluZGV4Um93U3RhcnREcmFnID49IDApIHtcclxuICAgICAgY29uc3Qgcm93SW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xyXG4gICAgICBjb25zdCBhcnJheTogUm93RGF0YTxUPltdID0gdGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhO1xyXG4gICAgICBjb25zdCByYXdEYXRhOiBUW10gPSB0aGlzLnJhd0RhdGE7XHJcbiAgICAgIG1vdmVJdGVtSW5BcnJheShhcnJheSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xyXG4gICAgICBtb3ZlSXRlbUluQXJyYXkocmF3RGF0YSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xyXG4gICAgICB0aGlzLmRyb3AuZW1pdCh7IHZhbHVlOiBhcnJheVtyb3dJbmRleF0uZGF0YSBhcyBULCBvcmRlcjogcm93SW5kZXggfSk7XHJcbiAgICAgIHRoaXMucmF3RGF0YSA9IHJhd0RhdGE7XHJcbiAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoYXJyYXkpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRhYmxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICBsZXQgY3VycmVudEluZGV4OiBudW1iZXIgPSB0aGlzLmRhdGEuZGF0YS5maW5kSW5kZXgoKHJvdzogUm93RGF0YTxUPik6IGJvb2xlYW4gPT4gcm93LmRhdGEgPT09IHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xyXG4gICAgICBsZXQgbmV3U2VsZWN0aW9uOiBudW1iZXIgPSAtMTA7XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCsrO1xyXG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLmZvckVhY2goKHJvdzogUm93RGF0YTxUPiwgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEwICYmIGluZGV4ID4gY3VycmVudEluZGV4ICYmIHJvdy5yb3dUeXBlID09PSBSb3dUeXBlLlJPVykge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBpbmRleDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbENvdW50LS07XHJcbiAgICAgICAgY3VycmVudEluZGV4ID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoIC0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCkuZm9yRWFjaCgocm93OiBSb3dEYXRhPFQ+LCBpbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMTAgJiYgaW5kZXggPiBjdXJyZW50SW5kZXggJiYgcm93LnJvd1R5cGUgPT09IFJvd1R5cGUuUk9XKSB7XHJcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IGluZGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLnJldmVyc2UoKTtcclxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uICE9PSAtMTApIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IHRoaXMuZGF0YS5kYXRhLmxlbmd0aCAtIG5ld1NlbGVjdGlvbiAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gIT09IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMuZGF0YS5kYXRhW25ld1NlbGVjdGlvbl0sIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNjcm9sbENvdW50KSA+PSAyKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCA9IDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdGUgZWwgZXZlbnRvIGN1YW5kbyBzZSBkYSBjbGljayBhbCBib3RvbiBBZGRSb3dcclxuICAgKi9cclxuICBvbkFkZFJvdygpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkUm93LmVtaXQoKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRIZWFkZXJTdWJ0aXRsZSgpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCB4OiBzdHJpbmdbXSA9IHRoaXMuY29sdW1uQ29uZmlnLm1hcCgoY29sdW1uOiBDb2x1bW5Db25maWcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLnZpc2libGUgJiYgY29sdW1uLnN1YnRpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gJ3N1YnRpdGxlJyArIGluZGV4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KS5maWx0ZXIoKGRhdGE6IHN0cmluZyk6IGJvb2xlYW4gPT4gZGF0YSAhPSBudWxsKTtcclxuICAgIHJldHVybiB4O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sdW1uc1dpdGhUaXRsZSgpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5Db25maWcuZmlsdGVyKChjb2x1bW46IENvbHVtbkNvbmZpZyk6IGJvb2xlYW4gPT5cclxuICAgICAgY29sdW1uLnZpc2libGUgJiYgY29sdW1uLnRpdGxlICE9PSB1bmRlZmluZWRcclxuICAgICkubWFwKChjb2w6IENvbHVtbkNvbmZpZyk6IHN0cmluZyA9PiBjb2wubmFtZSk7XHJcbiAgfVxyXG5cclxuICBkcmFnZ2VyKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5pc0RyYWdnZWQgJiYgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA+PSAwKSB7XHJcbiAgICAgIGNvbnN0IHJvd0luZGV4OiBudW1iZXIgPSB0aGlzLmdldFJvd0luZGV4KGV2ZW50LnBhZ2VZKTtcclxuICAgICAgaWYgKHJvd0luZGV4ICE9PSB0aGlzLmxhc3RJbmRleFJvd0RyYWcpIHtcclxuICAgICAgICB0aGlzLmxhc3RJbmRleFJvd0RyYWcgPSByb3dJbmRleDtcclxuICAgICAgICAvLyBUaGlzIGNhbiBoYXZlIGEgbWVtb3J5IHByb2JsZW0gd2l0aCBiaWcgZGF0YVxyXG4gICAgICAgIGNvbnN0IGFycmF5OiBSb3dEYXRhPFQ+W10gPSBbLi4udGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhXTtcclxuICAgICAgICBtb3ZlSXRlbUluQXJyYXkoYXJyYXksIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGFycmF5KTtcclxuICAgICAgfVxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0RHJhZyhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xyXG4gICAgdGhpcy5sYXN0SW5kZXhSb3dEcmFnID0gdGhpcy5pbmRleFJvd1N0YXJ0RHJhZztcclxuICAgIHRoaXMuZGF0YUJlZm9yZURyYWcgPSB0aGlzLmRhdGE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJvd0luZGV4KHBhZ2VZOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IG9mZnNldFRvcDogbnVtYmVyID0gMDtcclxuICAgIGxldCBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy5jb250YWluZXJUYWJsZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgd2hpbGUgKChjb250YWluZXIgIT09IG51bGwpICYmIChvZmZzZXRUb3AgPT09IDApKSB7XHJcbiAgICAgIG9mZnNldFRvcCA9IGNvbnRhaW5lci5vZmZzZXRUb3A7XHJcbiAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgbGV0IHJvd0luZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIGNvbnN0IHJvd3M6IEhUTUxDb2xsZWN0aW9uID0gdGhpcy5tYXRUYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlbjtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdzogSFRNTEVsZW1lbnQgPSAocm93c1tpXSBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgIGlmIChwYWdlWSAtIG9mZnNldFRvcCA+IHJvdy5vZmZzZXRUb3AgLSB0aGlzLmNvbnRhaW5lclRhYmxlLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgcm93SW5kZXggPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocm93SW5kZXggPCAwKSB7IHJvd0luZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHJvd0luZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbHVtblR5cGUoKTogdHlwZW9mIENvbHVtblR5cGUge1xyXG4gICAgcmV0dXJuIENvbHVtblR5cGU7XHJcbiAgfVxyXG5cclxuICBzaG93TWVzc2FnZUVtcHR5KGRhdGE6IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPFQ+Pik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZW1wdHlNZXNzYWdlRm9yQ29sdW1uLmlzRW5hYmxlZCkge1xyXG4gICAgICBpZiAoKCFkYXRhLmZpbHRlcmVkRGF0YSkgfHwgKGRhdGEuZmlsdGVyZWREYXRhICYmIGRhdGEuZmlsdGVyZWREYXRhLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVzc2FnZUVtdHB5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gIHRoaXMuZW1wdHlNZXNzYWdlRm9yQ29sdW1uLnRleHQ7XHJcbiAgfVxyXG5cclxuICBnZXRJZkJ1dHRvbkRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuYWRkUm93QnV0dG9uICYmICh0aGlzLmFkZFJvd0J1dHRvbi5pc0Rpc2FibGVkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5hZGRSb3dCdXR0b24uaXNEaXNhYmxlZCAhPT0gbnVsbCkpIHtcclxuICAgICAgaWYgKHRoaXMuYWRkUm93QnV0dG9uLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9vbFRpcEJ1dHRvbk1lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmdldElmQnV0dG9uRGlzYWJsZWQoKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hZGRSb3dCdXR0b24udG9vbFRpcFRleHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19