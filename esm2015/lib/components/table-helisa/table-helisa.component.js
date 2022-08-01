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
}
TableHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-table',
                template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\n<div [ngClass]=\"getClassToColumn()\" class=\"div-table-helisa\">\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\n\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\n          <ng-container *ngIf=\"column.title != undefined\">\n            <div *ngIf=\"!column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\n                {{column.title}} </th>\n            </div>\n            <div *ngIf=\"column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\n            </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton'\"> \n                  <th mat-header-cell *matHeaderCellDef ></th>\n                  <td mat-cell *matCellDef=\"let element;\" (click)=\"selectedCell(element, column)\">\n                    <button mat-icon-button *ngIf=\"element.data === selectedObject\">\n                      <i class=\"material-icons-outlined\">description</i>\n                    </button>\n                  </td>\n          </ng-container>\n\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{ getValue(element.data, column) }}</a>\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\n        </ng-container>\n\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\n            {{column.subtitle}}</th>\n        </ng-container>\n      </ng-container>\n \n      <ng-container matColumnDef=\"groupHeader\">\n        <td mat-cell *matCellDef=\"let group\">\n          <strong>{{ getGroupDescription(group.data) }}</strong>\n        </td>\n      </ng-container>\n\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\n      </ng-container>\n\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\n          [ngClass]=\"getClassToRow(row.data)\" [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"!isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\n        </tr>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\n    </table>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlLWhlbGlzYS90YWJsZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFDLE9BQU8sRUFBTyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RSxPQUFPLEVBR0wsNkJBQTZCLEVBRTdCLGdCQUFnQixFQUtoQixVQUFVLEVBSVYsZUFBZSxFQUVmLFNBQVMsRUFDVCxVQUFVLEVBRVgsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBT3pELElBQUssT0FFSjtBQUZELFdBQUssT0FBTztJQUNWLG1EQUFXLENBQUE7SUFBRSxxREFBWSxDQUFBO0lBQUUsbUNBQUcsQ0FBQTtBQUNoQyxDQUFDLEVBRkksT0FBTyxLQUFQLE9BQU8sUUFFWDtBQVNELE1BQU0sT0FBTyxvQkFBb0I7SUFzRS9CLFlBQW9CLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQWpFdkQsU0FBSSxHQUFtQyxJQUFJLGtCQUFrQixDQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyw4QkFBeUIsR0FBYSxFQUFFLENBQUM7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S0wsS0FBSzt1QkErQ0wsS0FBSztrQ0FXTCxLQUFLO3lCQU9MLEtBQUs7K0JBV0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBEb0NoZWNrfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U29ydCwgU29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQgeyBNYXRUYWJsZSwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5pbXBvcnQge1xuICBBZGRSb3dCdXR0b24sXG4gIENlbGwsXG4gIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLFxuICBDb2x1bW5Db25maWcsXG4gIENvbHVtbkNvbmZpZ1V0aWwsXG4gIENvbmZpZ0NlbGxTdHlsZXMsXG4gIENvbmZpZ1Jvd1N0eWxlcyxcbiAgRHJvcEVsZW1lbnQsXG4gIEV2ZW50Q29sdW1uLFxuICBFdmVudFNjb3BlLFxuICBFdmVudFNlYXJjaCxcbiAgUmVxdWVzdFRhYmxlSGVsaXNhLFxuICBTZWxlY3RPYmplY3QsXG4gIFRhYmxlSGVsaXNhVHlwZSxcbiAgVG90YWxHcm91cCxcbiAgVG90YWxUeXBlLFxuICBDb2x1bW5UeXBlLFxuICBUb3RhbFRhYmxlSGVsaXNhXG59IGZyb20gJy4vdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUYWJsZUhlbGlzYVNlcnZpY2UsIFRhYmxlSGVsaXNhU2VydmljZUluZm8gfSBmcm9tICcuL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtaGVsaXNhLWNvbm5lY3QuY29tcG9uZW50JztcbmltcG9ydCB7IG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvd0RhdGE8VD4ge1xuICBkYXRhOiB7fSB8IFQ7XG4gIHJvd1R5cGU6IFJvd1R5cGU7XG59XG5cbmVudW0gUm93VHlwZSB7XG4gIEdST1VQX1RJVExFLCBHUk9VUF9GT09URVIsIFJPV1xufVxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIHRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDogVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+O1xuICB0b3RhbERhdGE6IEFycmF5PG51bWJlcj47XG4gIHJhd0RhdGE6IEFycmF5PFQ+O1xuICBkYXRhOiBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YTxUPj4gPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE8VD4+KFtdKTtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZTogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZTogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXI6IHN0cmluZ1tdID0gW107XG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcbiAgc2VsZWN0ZWRPYmplY3Q6IFQ7XG4gIGxhc3RTZWFyY2g6IHN0cmluZztcbiAgdHlwZTogVGFibGVIZWxpc2FUeXBlID0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xuICBpbmRleFJvd1NlbGVjdDogbnVtYmVyO1xuICBwcml2YXRlIHNjcm9sbENvdW50OiBudW1iZXIgPSAwO1xuICBoYXNTdWJ0aXRsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGluZGV4Um93U3RhcnREcmFnOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBsYXN0SW5kZXhSb3dEcmFnOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBkYXRhQmVmb3JlRHJhZzogeyBkYXRhOiBSb3dEYXRhPFQ+W10gfSA9IG51bGw7XG4gIHByaXZhdGUgZGF0YVNvdXJjZSQ6IEFycmF5PFQ+ID0gW107XG4gIHByaXZhdGUgc2Nyb2xsWDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBzY3JvbGxZOiBudW1iZXIgPSAwO1xuXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCwge3N0YXRpYzogdHJ1ZX0pIG1hdFNvcnQ6IE1hdFNvcnQ7XG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUsIHtzdGF0aWM6IHRydWV9KSBtYXRUYWJsZTogTWF0VGFibGU8VD47XG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIG1hdFRhYmxlRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyVGFibGUnLCB7c3RhdGljOiB0cnVlfSkgY29udGFpbmVyVGFibGU6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudFNlYXJjaD4oKTtcblxuICAvKipcbiAgICogRGVwcmVjYWRvLCBjYW1iaWFyIHBvciBlbGVjdE9iamVjdFxuICAgKi9cbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAT3V0cHV0KCkgc2VsZWN0Q2VsbDogRXZlbnRFbWl0dGVyPENlbGw8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsPFQ+PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PigpO1xuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E8VD4+KCk7XG4gIEBJbnB1dCgpIHNob3dUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzQ2VsbFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBjb25maWdDZWxsU3R5bGVzOiBBcnJheTxDb25maWdDZWxsU3R5bGVzPFQ+PjtcbiAgQElucHV0KCkgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbjogQXJyYXk8Q29uZmlnUm93U3R5bGVzPFQ+PjtcbiAgQElucHV0KCkgY29uZmlnQ29sdW1uQ2xhc3M6IEFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgpIHNlbGVjdGVkQ2VsbHM6IENlbGw8VD47XG4gIEBPdXRwdXQoKSBkcm9wOiBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRWxlbWVudDxUPj4oKTtcbiAgQElucHV0KCkgaXNEcmFnZ2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFkZFJvd0J1dHRvbjogQWRkUm93QnV0dG9uID0geyBzaG93QnV0dG9uOiBmYWxzZSwgdGV4dDogJycgfTtcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgYm9va0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQElucHV0KCkgYWRkQm9va0J1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XG4gIHNob3dGb290ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG9jdWx0YXJsYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBzaG93RGVsYXk6IG51bWJlciA9IDUwMDtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8VD4pIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVsb2FkQ29sdW1uQ29uZmlnKCk7XG4gICAgdGhpcy50YWJsZVNlcnZpY2UubmV4dFBhZ2VSZXR1cm4uc3Vic2NyaWJlKFxuICAgICAgKGRhdGE6IFRhYmxlSGVsaXNhU2VydmljZUluZm88VFtdPik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoIWRhdGEudGFibGUgfHwgZGF0YS50YWJsZSA9PT0gdGhpcykge1xuICAgICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5vYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnRhYmxlU2VydmljZS50b3RhbFJldHVybi5zdWJzY3JpYmUoKGluZm86IFRhYmxlSGVsaXNhU2VydmljZUluZm88VG90YWxUYWJsZUhlbGlzYT4pOiB2b2lkID0+IHtcbiAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpZHg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgIGlmIChjb2x1bW4gPT09IGluZm8ub2JqLmNvbHVtbikge1xuICAgICAgICAgICAgdGhpcy50b3RhbERhdGFbaWR4XSA9IHRoaXMuZ2V0R3JvdXBWYWx1ZShjb2x1bW4sIHsgc3VtOiBpbmZvLm9iai52YWx1ZSwgY291bnQ6IHRoaXMuY291bnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm1hdFNvcnQuc29ydENoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAoZXZlbnQ6IFNvcnQpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgY29sdW1uOiBDb2x1bW5Db25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZy5maW5kKChjOiBDb2x1bW5Db25maWcpOiBib29sZWFuID0+IGMubmFtZSA9PT0gZXZlbnQuYWN0aXZlKTtcbiAgICAgICAgY29sdW1uLnNvcnREaXJlY3Rpb24gPSBldmVudC5kaXJlY3Rpb247XG4gICAgICAgIHRoaXMuc29ydC5lbWl0KHsgY29sdW1uLCBjb2x1bW5Db25maWd1cmF0aW9uczogdGhpcy5jb2x1bW5Db25maWcsIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLlNPUlQgfSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMudGFibGVTZXJ2aWNlLmVtaXRWaXNpYmxlQnV0dG9uLnN1YnNjcmliZShcbiAgICAgIChkYXRhOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMucmVsb2FkKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLm1hdFRhYmxlLnJlbmRlclJvd3MoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaXNSZW1vdGUodzogYm9vbGVhbikge1xuICAgIHRoaXMudHlwZSA9IHcgPyBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFIDogVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xuICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50ID0gbmV3IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDxUPigpO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUpIHtcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5wYWdlKys7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbHVtbkNvbmZpZ3VyYXRpb24oY29sdW1uQ29uZmlndXJhdGlvbjogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xuICAgIHRoaXMuY29sdW1uQ29uZmlnID0gY29sdW1uQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLnJlbG9hZCgpO1xuICAgIHRoaXMucmVsb2FkQ29sdW1uQ29uZmlnKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBBcnJheTxUPikge1xuICAgIHRoaXMuZGF0YVNvdXJjZSQgPSBkYXRhU291cmNlO1xuICAgIHRoaXMucmF3RGF0YSA9IGRhdGFTb3VyY2U7XG4gICAgdGhpcy5yZWxvYWQoKTtcbiAgfVxuXG4gIGdldCBkYXRhU291cmNlKCk6IEFycmF5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlJDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4Um93KGlkUm93U2VsZWN0ZWQ6IG51bWJlcikge1xuICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSBpZFJvd1NlbGVjdGVkO1xuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCkge1xuICAgICAgaWYgKChpZFJvd1NlbGVjdGVkID49IHRoaXMucmF3RGF0YS5sZW5ndGggfHwgaWRSb3dTZWxlY3RlZCA8IDApKSB7XG4gICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbG9hZENvbHVtbkNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmhhc1N1YnRpdGxlID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKTtcblxuICAgIGlmICh0aGlzLmNvbHVtbkNvbmZpZykge1xuICAgICAgaWYgKHRoaXMuYWRkQm9va0J1dHRvbikge1xuICAgICAgICBjb25zdCBjb2x1bW5Db3VudDogbnVtYmVyID0gdGhpcy5jb2x1bW5Db25maWcubGVuZ3RoO1xuICAgICAgICBsZXQgY291bnRTdWJ0aXRsZTogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHNob3dCb29rQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCA9PiB7XG4gICAgICAgICAgaWYgKCEhY29sdW1uLnN1YnRpdGxlKSB7XG4gICAgICAgICAgICBjb3VudFN1YnRpdGxlID0gY291bnRTdWJ0aXRsZSArIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoIXNob3dCb29rQnV0dG9uKSAmJiAoY29sdW1uLm5hbWUgPT09ICdib29rQnV0dG9uJykpIHtcbiAgICAgICAgICAgIHNob3dCb29rQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdWJ0aXRsZVRlbXA6IGJvb2xlYW4gPSBjb2x1bW5Db3VudCA9PT0gY291bnRTdWJ0aXRsZTtcbiAgICAgICAgaWYgKCFzaG93Qm9va0J1dHRvbikge1xuICAgICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJ2Jvb2tCdXR0b24nLFxuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgc3VidGl0bGU6IHN1YnRpdGxlVGVtcCA/ICcnIDogdW5kZWZpbmVkICxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi52aXNpYmxlKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnB1c2goY29sdW1uLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5oYXNTdWJ0aXRsZSkge1xuICAgICAgICAgIHRoaXMuaGFzU3VidGl0bGUgPSBjb2x1bW4uc3VidGl0bGUgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5yYXdEYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUubGVuZ3RoKTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGUuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZS5sZW5ndGgpO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIubGVuZ3RoKTtcbiAgICB0aGlzLmdldENvbHVtbnNXaXRoVGl0bGUoKS5mb3JFYWNoKChjb2w6IHN0cmluZyk6IG51bWJlciA9PiB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUucHVzaChjb2wpKTtcbiAgICB0aGlzLmdldEhlYWRlclN1YnRpdGxlKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpOiBudW1iZXIgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLnB1c2goY29sKSk7XG4gICAgdGhpcy5mb290ZXJEaXNwbGF5ZWRDb2x1bW5zKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpOiBudW1iZXIgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aEZvb3Rlci5wdXNoKGNvbCkpO1xuICB9XG5cbiAgcHVibGljIHJlbG9hZCgpOiB2b2lkIHtcbiAgICBpZih0aGlzLmNvbHVtbkNvbmZpZykge1xuICAgICAgY29uc3QgY2hhbmdlRGF0YTogQXJyYXk8Um93RGF0YTxUPj4gPSBBcnJheTxSb3dEYXRhPFQ+PigpO1xuICAgICAgbGV0IGhhdmVHcm91cDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgbGV0IGdyb3VwRm9vdGVyOiBBcnJheTxUb3RhbEdyb3VwPjtcbiAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQgJiYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMIHx8IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LnBhZ2UgPD0gMSkpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsRGF0YSA9IG5ldyBBcnJheTxudW1iZXI+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XG4gICAgICAgICAgdGhpcy5zaG93Rm9vdGVyID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRvdGFsLmVtaXQoe2NvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5UT1RBTH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1NlYXJjaCA9IHRoaXMuc2hvd1NlYXJjaCB8fCBjb2x1bW4uc2VhcmNoYWJsZTtcbiAgICAgICAgaGF2ZUdyb3VwID0gaGF2ZUdyb3VwIHx8IGNvbHVtbi5ncm91cGFibGU7XG4gICAgICB9KTtcbiAgICAgIGlmIChoYXZlR3JvdXApIHtcbiAgICAgICAgdGhpcy5yYXdEYXRhID0gdGhpcy5yYXdEYXRhLnNvcnQoKGE6IFQsIGI6IFQpOiBudW1iZXIgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IDA7XG4gICAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jb21wYXJlKGEsIGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5yYXdEYXRhKSB7XG4gICAgICAgIHRoaXMucmF3RGF0YS5mb3JFYWNoKChyb3c6IFQpOiB2b2lkID0+IHtcbiAgICAgICAgICBpZiAoaGF2ZUdyb3VwICYmIChjaGFuZ2VEYXRhLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNvbXBhcmUoY2hhbmdlRGF0YVtjaGFuZ2VEYXRhLmxlbmd0aCAtIDFdLmRhdGEgYXMgVCwgcm93KSAhPT0gMCkpIHtcbiAgICAgICAgICAgIGlmIChncm91cEZvb3Rlcikge1xuICAgICAgICAgICAgICBjaGFuZ2VEYXRhLnB1c2goe2RhdGE6IGdyb3VwRm9vdGVyLCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX0ZPT1RFUn0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHtkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuR1JPVVBfVElUTEV9KTtcbiAgICAgICAgICAgIGdyb3VwRm9vdGVyID0gbmV3IEFycmF5PFRvdGFsR3JvdXA+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXZlR3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG90YWxHcm91cChncm91cEZvb3Rlciwgcm93KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHtkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuUk9XfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE8VD4+KGNoYW5nZURhdGEpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoICYmIHRoaXMuaW5kZXhSb3dTZWxlY3QgJiYgIXRoaXMuc2VsZWN0ZWRPYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXhSb3dTZWxlY3QgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCB0aGlzLmluZGV4Um93U2VsZWN0IDwgMCkge1xuICAgICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0Um93KHtkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XfSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkVG90YWxHcm91cChyb3dUb3RhbDogQXJyYXk8VG90YWxHcm91cD4sIHJvdzogVCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChyb3dUb3RhbFtpbmRleF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XSA9IHsgc3VtOiAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShyb3csIGNvbHVtbikgYXMgbnVtYmVyKSwgY291bnQ6IDEgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0uc3VtICs9IChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKHJvdywgY29sdW1uKSBhcyBudW1iZXIpO1xuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5jb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbXBhcmUoYTogVCwgYjogVCk6IG51bWJlciB7XG4gICAgbGV0IHdzOiBudW1iZXIgPSAwO1xuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCA9PiB7XG4gICAgICBpZiAod3MgPT09IDAgJiYgY29sdW1uLmdyb3VwYWJsZSkge1xuICAgICAgICBpZiAoKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYSwgY29sdW1uKSBhcyBudW1iZXIpIDwgKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYiwgY29sdW1uKSBhcyBudW1iZXIpKSB7XG4gICAgICAgICAgd3MgPSAtMTtcbiAgICAgICAgfSBlbHNlIGlmICgobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShhLCBjb2x1bW4pIGFzIG51bWJlcikgPiAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShiLCBjb2x1bW4pIGFzIG51bWJlcikpIHtcbiAgICAgICAgICB3cyA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gd3M7XG4gIH1cblxuICBnZXRHcm91cERlc2NyaXB0aW9uKG9iajogVCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdDogc3RyaW5nID0gJyc7XG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkID0+IHtcbiAgICAgIGlmIChjb2x1bW4uZ3JvdXBhYmxlKSB7XG4gICAgICAgIHJlc3VsdCArPSAocmVzdWx0Lmxlbmd0aCA/ICcgLSAnIDogJycpICsgKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUob2JqLCBjb2x1bW4pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaXNHcm91cFRpdGxlKGluZGV4OiBudW1iZXIsIGl0ZW06IFJvd0RhdGE8VD4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLkdST1VQX1RJVExFO1xuICB9XG5cbiAgaXNSb3coaW5kZXg6IG51bWJlciwgaXRlbTogUm93RGF0YTxUPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuUk9XO1xuICB9XG5cbiAgaXNHcm91cEZvb3RlcihpbmRleDogbnVtYmVyLCBpdGVtOiBSb3dEYXRhPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9GT09URVI7XG4gIH1cblxuICBmb290ZXJEaXNwbGF5ZWRDb2x1bW5zKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZENvbHVtbnMubWFwKChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4gJ2Zvb3Rlci0nICsgbmFtZSk7XG4gIH1cblxuICBnZXRHcm91cFZhbHVlKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBkYXRhOiBUb3RhbEdyb3VwKTogbnVtYmVyIHtcbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLlNVTSkgeyByZXR1cm4gZGF0YS5zdW07IH1cbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLkNPVU5UKSB7IHJldHVybiBkYXRhLmNvdW50OyB9XG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5BVkVSQUdFKSB7IHJldHVybiAxLiAqIGRhdGEuc3VtIC8gZGF0YS5jb3VudDsgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRWYWx1ZShvYmo6IFQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogVCB7XG4gICAgcmV0dXJuIG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUob2JqLCBjb2x1bW4pIGFzIFQ7XG4gIH1cblxuICBnZXRWYWx1ZVRvb2x0aXAob2JqOiBULCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2hvd1Rvb2xUaXApIHtcbiAgICAgIHJldHVybiBuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaFRleHQodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sYXN0U2VhcmNoID0gdGV4dDtcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHsgdGV4dCwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnIH0pO1xuICB9XG5cbiAgc2VsZWN0Um93KHJvdzogUm93RGF0YTxUPiwgaXNVc2VyOiBib29sZWFuLCBjb2x1bW4/OiBDb2x1bW5Db25maWcpOiB2b2lkIHtcbiAgICBpZiAocm93ID09PSB1bmRlZmluZWQgfHwgcm93ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgoY29sdW1uID09PSB1bmRlZmluZWQgfHwgY29sdW1uID09PSBudWxsKSB8fCAoISFjb2x1bW4gJiYgY29sdW1uLm5hbWUgIT09ICdib29rQnV0dG9uJykpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSByb3cuZGF0YSBhcyBUO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcbiAgICAgIHRoaXMuc2VsZWN0T2JqZWN0LmVtaXQoeyB2YWx1ZTogdGhpcy5zZWxlY3RlZE9iamVjdCwgc2NvcGU6IGlzVXNlciA/IEV2ZW50U2NvcGUuVVNFUiA6IEV2ZW50U2NvcGUuQ09ERV9DQUxMIH0pO1xuICAgIH0gZWxzZSBpZiAoISFjb2x1bW4gJiYgY29sdW1uLm5hbWUgPT09ICdib29rQnV0dG9uJykge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmplY3QgIT09IHJvdy5kYXRhKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSByb3cuZGF0YSBhcyBUO1xuICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xuICAgICAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRPYmplY3QsIHNjb3BlOiBpc1VzZXIgPyBFdmVudFNjb3BlLlVTRVIgOiBFdmVudFNjb3BlLkNPREVfQ0FMTCB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYm9va0NsaWNrZWQuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBsZXQgaXNTY3JvbGxZOiBib29sZWFuO1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsWSAhPT0gZWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgIGlzU2Nyb2xsWSA9IHRydWU7XG4gICAgICB0aGlzLnNjcm9sbFkgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHRoaXMuc2Nyb2xsWCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxYICE9PSBlbGVtZW50LnNjcm9sbExlZnQpIHtcbiAgICAgIGlzU2Nyb2xsWSA9IGZhbHNlO1xuICAgICAgdGhpcy5zY3JvbGxZID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB0aGlzLnNjcm9sbFggPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgaWYgKChlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wIDwgMTAwMCkgJiYgaXNTY3JvbGxZKSB7XG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgJiYgIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCkge1xuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7XG4gICAgICAgIHBhZ2U6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50Lm5leHRQYWdlKCksXG4gICAgICAgIGJvZHk6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmdldEJvZHkodGhpcy5jb2x1bW5Db25maWcsIHRoaXMubGFzdFNlYXJjaClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogVFtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJhd0RhdGEpIHtcbiAgICAgIHRoaXMucmF3RGF0YSA9IG5ldyBBcnJheTxUPigpO1xuICAgIH1cbiAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuY29uY2F0KGRhdGEpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XG4gIH1cblxuICBkYmxDbGlja0NlbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzIGFzIENlbGw8VD4pO1xuICB9XG5cbiAgc2VsZWN0ZWRDZWxsKGVsZW1lbnQ6IFJvd0RhdGE8VD4sIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCB7XG4gICAgaWYgKGNvbHVtbi5pc1NlbGVjdGFibGUgPT09IHVuZGVmaW5lZCB8fCBjb2x1bW4uaXNTZWxlY3RhYmxlID09PSBudWxsIHx8IGNvbHVtbi5pc1NlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0Um93KGVsZW1lbnQsIHRydWUsIGNvbHVtbik7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2VsbHMgPSB7IGNvbHVtbiwgcm93OiBlbGVtZW50IH07XG4gICAgICB0aGlzLnNlbGVjdENlbGwuZW1pdCh0aGlzLnNlbGVjdGVkQ2VsbHMpO1xuICAgIH1cbiAgfVxuXG4gIGlzU2VsZWN0ZWRDZWxsKHJvdzogUm93RGF0YTxUPiwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2VsbHMgIT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENlbGxzLmNvbHVtbi5uYW1lID09PSBjb2x1bW4ubmFtZSAmJlxuICAgICAgICAgICh0aGlzLnNlbGVjdGVkQ2VsbHMucm93IGFzIFJvd0RhdGE8VD4pLmRhdGEgPT09IHJvdy5kYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0Q2xhc3NUb0NlbGwocm93OiBULCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjbGFzc1RvQ2VsbDogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgaWYgKHRoaXMuY29uZmlnQ2VsbFN0eWxlcykge1xuICAgICAgY29uc3QgZm91bmQ6IENvbmZpZ0NlbGxTdHlsZXM8VD4gPSB0aGlzLmNvbmZpZ0NlbGxTdHlsZXMuZmluZCgoYzogQ29uZmlnQ2VsbFN0eWxlczxUPik6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gYy5jZWxsRGF0YSA9PT0gdGhpcy5nZXRWYWx1ZShyb3csIGNvbHVtbik7XG4gICAgICB9KTtcbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBjbGFzc1RvQ2VsbC5wdXNoKGZvdW5kLmNsYXNzQ2VsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb2x1bW4uY29sdW1uU3R5bGUpIHtcbiAgICAgIGNsYXNzVG9DZWxsLnB1c2goY29sdW1uLmNvbHVtblN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzVG9DZWxsO1xuICB9XG5cbiAgZ2V0Q2xhc3NUb0NvbHVtbigpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnQ29sdW1uQ2xhc3M7XG4gIH1cblxuICBnZXRDbGFzc1RvUm93KHJvdzogVCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjbGFzc1RvUm93OiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBpZiAocm93ID09PSB0aGlzLnNlbGVjdGVkT2JqZWN0ICYmICF0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgY2xhc3NUb1Jvdy5wdXNoKCcnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbikge1xuICAgICAgY29uc3QgZm91bmRzOiBDb25maWdSb3dTdHlsZXM8VD5bXSA9IHRoaXMuY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbi5maWx0ZXIoKGM6IENvbmZpZ1Jvd1N0eWxlczxUPik6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gYy5kYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgYy5jb2x1bW4pO1xuICAgICAgfSk7XG4gICAgICBpZiAoZm91bmRzKSB7XG4gICAgICAgIGZvdW5kcy5mb3JFYWNoKChjOiBDb25maWdSb3dTdHlsZXM8VD4pOiB2b2lkID0+IHtcbiAgICAgICAgICBjbGFzc1RvUm93LnB1c2goYy5jbGFzc1Jvdyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xhc3NUb1JvdztcbiAgfVxuXG4gIG9uRHJvcChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRHJhZ2dlZCAmJiB0aGlzLmluZGV4Um93U3RhcnREcmFnID49IDApIHtcbiAgICAgIGNvbnN0IHJvd0luZGV4OiBudW1iZXIgPSB0aGlzLmdldFJvd0luZGV4KGV2ZW50LnBhZ2VZKTtcbiAgICAgIGNvbnN0IGFycmF5OiBSb3dEYXRhPFQ+W10gPSB0aGlzLmRhdGFCZWZvcmVEcmFnLmRhdGE7XG4gICAgICBjb25zdCByYXdEYXRhOiBUW10gPSB0aGlzLnJhd0RhdGE7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoYXJyYXksIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShyYXdEYXRhLCB0aGlzLmluZGV4Um93U3RhcnREcmFnLCByb3dJbmRleCk7XG4gICAgICB0aGlzLmRyb3AuZW1pdCh7IHZhbHVlOiBhcnJheVtyb3dJbmRleF0uZGF0YSBhcyBULCBvcmRlcjogcm93SW5kZXggfSk7XG4gICAgICB0aGlzLnJhd0RhdGEgPSByYXdEYXRhO1xuICAgICAgdGhpcy5kYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShhcnJheSk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICB0YWJsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICBsZXQgY3VycmVudEluZGV4OiBudW1iZXIgPSB0aGlzLmRhdGEuZGF0YS5maW5kSW5kZXgoKHJvdzogUm93RGF0YTxUPik6IGJvb2xlYW4gPT4gcm93LmRhdGEgPT09IHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xuICAgICAgbGV0IG5ld1NlbGVjdGlvbjogbnVtYmVyID0gLTEwO1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCsrO1xuICAgICAgICB0aGlzLmRhdGEuZGF0YS5mb3JFYWNoKChyb3c6IFJvd0RhdGE8VD4sIGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMTAgJiYgaW5kZXggPiBjdXJyZW50SW5kZXggJiYgcm93LnJvd1R5cGUgPT09IFJvd1R5cGUuUk9XKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQtLTtcbiAgICAgICAgY3VycmVudEluZGV4ID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoIC0gY3VycmVudEluZGV4IC0gMTtcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEucmV2ZXJzZSgpLmZvckVhY2goKHJvdzogUm93RGF0YTxUPiwgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IC0xMCAmJiBpbmRleCA+IGN1cnJlbnRJbmRleCAmJiByb3cucm93VHlwZSA9PT0gUm93VHlwZS5ST1cpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IGluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLnJldmVyc2UoKTtcbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiAhPT0gLTEwKSB7XG4gICAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoIC0gbmV3U2VsZWN0aW9uIC0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5ld1NlbGVjdGlvbiAhPT0gLTEwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMuZGF0YS5kYXRhW25ld1NlbGVjdGlvbl0sIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc2Nyb2xsQ291bnQpID49IDIpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxDb3VudCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0ZSBlbCBldmVudG8gY3VhbmRvIHNlIGRhIGNsaWNrIGFsIGJvdG9uIEFkZFJvd1xuICAgKi9cbiAgb25BZGRSb3coKTogdm9pZCB7XG4gICAgdGhpcy5hZGRSb3cuZW1pdCgpO1xuICB9XG5cblxuICBnZXRIZWFkZXJTdWJ0aXRsZSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeDogc3RyaW5nW10gPSB0aGlzLmNvbHVtbkNvbmZpZy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgIGlmIChjb2x1bW4udmlzaWJsZSAmJiBjb2x1bW4uc3VidGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gJ3N1YnRpdGxlJyArIGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSkuZmlsdGVyKChkYXRhOiBzdHJpbmcpOiBib29sZWFuID0+IGRhdGEgIT0gbnVsbCk7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICBnZXRDb2x1bW5zV2l0aFRpdGxlKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5Db25maWcuZmlsdGVyKChjb2x1bW46IENvbHVtbkNvbmZpZyk6IGJvb2xlYW4gPT5cbiAgICAgIGNvbHVtbi52aXNpYmxlICYmIGNvbHVtbi50aXRsZSAhPT0gdW5kZWZpbmVkXG4gICAgKS5tYXAoKGNvbDogQ29sdW1uQ29uZmlnKTogc3RyaW5nID0+IGNvbC5uYW1lKTtcbiAgfVxuXG4gIGRyYWdnZXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0RyYWdnZWQgJiYgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA+PSAwKSB7XG4gICAgICBjb25zdCByb3dJbmRleDogbnVtYmVyID0gdGhpcy5nZXRSb3dJbmRleChldmVudC5wYWdlWSk7XG4gICAgICBpZiAocm93SW5kZXggIT09IHRoaXMubGFzdEluZGV4Um93RHJhZykge1xuICAgICAgICB0aGlzLmxhc3RJbmRleFJvd0RyYWcgPSByb3dJbmRleDtcbiAgICAgICAgLy8gVGhpcyBjYW4gaGF2ZSBhIG1lbW9yeSBwcm9ibGVtIHdpdGggYmlnIGRhdGFcbiAgICAgICAgY29uc3QgYXJyYXk6IFJvd0RhdGE8VD5bXSA9IFsuLi50aGlzLmRhdGFCZWZvcmVEcmFnLmRhdGFdO1xuICAgICAgICBtb3ZlSXRlbUluQXJyYXkoYXJyYXksIHRoaXMuaW5kZXhSb3dTdGFydERyYWcsIHJvd0luZGV4KTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShhcnJheSk7XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgc3RhcnREcmFnKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xuICAgIHRoaXMubGFzdEluZGV4Um93RHJhZyA9IHRoaXMuaW5kZXhSb3dTdGFydERyYWc7XG4gICAgdGhpcy5kYXRhQmVmb3JlRHJhZyA9IHRoaXMuZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um93SW5kZXgocGFnZVk6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IG9mZnNldFRvcDogbnVtYmVyID0gMDtcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHRoaXMuY29udGFpbmVyVGFibGUubmF0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAoKGNvbnRhaW5lciAhPT0gbnVsbCkgJiYgKG9mZnNldFRvcCA9PT0gMCkpIHtcbiAgICAgIG9mZnNldFRvcCA9IGNvbnRhaW5lci5vZmZzZXRUb3A7XG4gICAgICBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgbGV0IHJvd0luZGV4OiBudW1iZXIgPSAtMTtcbiAgICBjb25zdCByb3dzOiBIVE1MQ29sbGVjdGlvbiA9IHRoaXMubWF0VGFibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdzogSFRNTEVsZW1lbnQgPSAocm93c1tpXSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICBpZiAocGFnZVkgLSBvZmZzZXRUb3AgPiByb3cub2Zmc2V0VG9wIC0gdGhpcy5jb250YWluZXJUYWJsZS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICByb3dJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyb3dJbmRleCA8IDApIHsgcm93SW5kZXggPSAwOyB9XG4gICAgcmV0dXJuIHJvd0luZGV4O1xuICB9XG5cbiAgZ2V0IGNvbHVtblR5cGUoKTogdHlwZW9mIENvbHVtblR5cGUge1xuICAgIHJldHVybiBDb2x1bW5UeXBlO1xuICB9XG5cbn1cblxuIl19