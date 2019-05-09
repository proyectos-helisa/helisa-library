/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ChangeColumnConfigurationType, ColumnConfigUtil, TableHelisaType, TotalType } from './table-helisa.interface';
import { TableHelisaService } from './table-helisa.service';
import { TableHelisaConnectComponent } from './table-helisa-connect.component';
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
        this.type = TableHelisaType.LOCAL;
        this.sort = new EventEmitter();
        this.total = new EventEmitter();
        this.search = new EventEmitter();
        this.select = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.showTitle = true;
        this.showFooter = false;
        this.showSearch = false;
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
    };
    Object.defineProperty(TableHelisaComponent.prototype, "isRemote", {
        set: /**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            this.type = w ? TableHelisaType.REMOTE : TableHelisaType.LOCAL;
            if (this.type === TableHelisaType.REMOTE) {
                this.tableHelisaConnectComponent = new TableHelisaConnectComponent();
                this.goNextPage();
            }
            else {
                this.tableHelisaConnectComponent = undefined;
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
                }));
                if (this.rawData) {
                    this.dataSource = this.rawData;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHelisaComponent.prototype, "dataSource", {
        set: /**
         * @param {?} dataSource
         * @return {?}
         */
        function (dataSource) {
            this.rawData = dataSource;
            if (this.rawData) {
                this.prepareDataSource();
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
        if (this.rawData && this.rawData.length) {
            this.selectRow({ data: this.rawData[0], rowType: RowType.ROW });
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
     * @return {?}
     */
    TableHelisaComponent.prototype.selectRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.selectedObject = row.data;
        this.select.emit(this.selectedObject);
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
        if (this.type === TableHelisaType.REMOTE && !this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
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
        if (this.type === TableHelisaType.REMOTE) {
            this.tableHelisaConnectComponent.isLastPage = data.length === 0;
            this.tableHelisaConnectComponent.isUsed = false;
        }
    };
    TableHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-table',
                    template: "<div class=\"div-table-helisa\">\r\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\r\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\">\r\n    <table mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort>\r\n      <ng-container [matColumnDef]=\"column.name\" *ngFor=\"let column of columnConfig; let idx = index\">\r\n        <div *ngIf=\"!column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef > {{column.title}} </th>\r\n        </div>\r\n        <div *ngIf=\"column.sortable\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{column.title}} </th>\r\n        </div>\r\n        <td mat-cell *matCellDef=\"let element\"> {{ getValue(element.data, column) }} </td>\r\n        <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"groupHeader\">\r\n        <td mat-cell *matCellDef=\"let group\">\r\n          <strong>{{ getGroupDescription(group.data) }}</strong>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\r\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\r\n      </ng-container>\r\n\r\n      <div *ngIf=\"showFooter\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\r\n      </div>\r\n      <div *ngIf=\"showTitle\">\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></tr>\r\n      </div>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\" (click)=\"selectRow(row)\" [class.selected-row]=\"row.data === selectedObject\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: footerDisplayedColumns(); when: isGroupFooter\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n",
                    styles: [".div-table-helisa{height:500px;width:800px}.div-table-helisa .container-table{overflow:scroll;width:100%;height:100%}.div-table-helisa .container-table .table-helisa{width:100%;height:100%}.div-table-helisa .container-table .table-helisa /deep/ tbody tr,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr,.div-table-helisa .container-table .table-helisa /deep/ thead tr{height:30px}.div-table-helisa .container-table .table-helisa /deep/ tbody tr td,.div-table-helisa .container-table .table-helisa /deep/ tbody tr th,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr td,.div-table-helisa .container-table .table-helisa /deep/ tfoot tr th,.div-table-helisa .container-table .table-helisa /deep/ thead tr td,.div-table-helisa .container-table .table-helisa /deep/ thead tr th{padding:0 10px}.div-table-helisa .container-table .table-helisa /deep/ thead tr th{text-transform:uppercase;background:#578032;font-size:18px;color:#fff}.div-table-helisa .container-table .table-helisa /deep/ tbody tr{box-shadow:inset 0 1px 0 0 #b7b7b7}.div-table-helisa .container-table .table-helisa /deep/ tbody tr td{box-shadow:inset 1px 0 0 0 #b7b7b7;border:none}.div-table-helisa .container-table .table-helisa /deep/ tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}.div-table-helisa .container-table .table-helisa .selected-row{font-weight:700;background:silver}"]
                }] }
    ];
    /** @nocollapse */
    TableHelisaComponent.ctorParameters = function () { return [
        { type: TableHelisaService }
    ]; };
    TableHelisaComponent.propDecorators = {
        matSort: [{ type: ViewChild, args: [MatSort,] }],
        sort: [{ type: Output }],
        total: [{ type: Output }],
        search: [{ type: Output }],
        select: [{ type: Output }],
        nextPage: [{ type: Output }],
        showTitle: [{ type: Input }],
        count: [{ type: Input }],
        isRemote: [{ type: Input }],
        columnConfiguration: [{ type: Input }],
        dataSource: [{ type: Input }]
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
    TableHelisaComponent.prototype.columnConfig;
    /** @type {?} */
    TableHelisaComponent.prototype.selectedObject;
    /** @type {?} */
    TableHelisaComponent.prototype.lastSearch;
    /** @type {?} */
    TableHelisaComponent.prototype.type;
    /** @type {?} */
    TableHelisaComponent.prototype.matSort;
    /** @type {?} */
    TableHelisaComponent.prototype.sort;
    /** @type {?} */
    TableHelisaComponent.prototype.total;
    /** @type {?} */
    TableHelisaComponent.prototype.search;
    /** @type {?} */
    TableHelisaComponent.prototype.select;
    /** @type {?} */
    TableHelisaComponent.prototype.nextPage;
    /** @type {?} */
    TableHelisaComponent.prototype.showTitle;
    /** @type {?} */
    TableHelisaComponent.prototype.count;
    /** @type {?} */
    TableHelisaComponent.prototype.showFooter;
    /** @type {?} */
    TableHelisaComponent.prototype.showSearch;
    /**
     * @type {?}
     * @private
     */
    TableHelisaComponent.prototype.tableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTlELE9BQU8sRUFDTCw2QkFBNkIsRUFFN0IsZ0JBQWdCLEVBSWhCLGVBQWUsRUFFZixTQUFTLEVBQ1YsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQzs7OztBQUU3RSxzQkFHQzs7O0lBRkMsdUJBQVU7O0lBQ1YsMEJBQWlCOzs7O0lBSWpCLGNBQVcsRUFBRSxlQUFZLEVBQUUsTUFBRzs7Ozs7Ozs7QUFHaEM7SUE4QkUsOEJBQW9CLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQW5CdkQscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBSWhDLFNBQUksR0FBb0IsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUlwQyxTQUFJLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFDbEUsVUFBSyxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ25FLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNwRSxXQUFNLEdBQW9CLElBQUksWUFBWSxFQUFLLENBQUM7UUFDaEQsYUFBUSxHQUFxQyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUNyRixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRzFCLGVB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SUFFdkIsMENBQW1COztJQUNuQiwwQ0FBbUI7Ozs7O0lBRVAsNENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge1NvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3R5cGluZ3Mvc29ydCc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUsXHJcbiAgQ29sdW1uQ29uZmlnLFxyXG4gIENvbHVtbkNvbmZpZ1V0aWwsXHJcbiAgRXZlbnRDb2x1bW4sXHJcbiAgRXZlbnRTZWFyY2gsXHJcbiAgUmVxdWVzdFRhYmxlSGVsaXNhLFxyXG4gIFRhYmxlSGVsaXNhVHlwZSxcclxuICBUb3RhbEdyb3VwLFxyXG4gIFRvdGFsVHlwZVxyXG59IGZyb20gJy4vdGFibGUtaGVsaXNhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7VGFibGVIZWxpc2FTZXJ2aWNlfSBmcm9tICcuL3RhYmxlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHtUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnR9IGZyb20gJy4vdGFibGUtaGVsaXNhLWNvbm5lY3QuY29tcG9uZW50JztcclxuXHJcbmludGVyZmFjZSBSb3dEYXRhIHtcclxuICBkYXRhOiBhbnk7XHJcbiAgcm93VHlwZTogUm93VHlwZTtcclxufVxyXG5cclxuZW51bSBSb3dUeXBlIHtcclxuICBHUk9VUF9USVRMRSwgR1JPVVBfRk9PVEVSLCBST1dcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgdGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50OiBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQ8VD47XHJcbiAgdG90YWxEYXRhOiBBcnJheTxudW1iZXI+O1xyXG4gIHJhd0RhdGE6IEFycmF5PFQ+O1xyXG4gIGRhdGE6IE1hdFRhYmxlRGF0YVNvdXJjZTxSb3dEYXRhPjtcclxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxuICBzZWxlY3RlZE9iamVjdDogVDtcclxuICBsYXN0U2VhcmNoOiBzdHJpbmc7XHJcbiAgdHlwZTogVGFibGVIZWxpc2FUeXBlID0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xyXG5cclxuICBAVmlld0NoaWxkKE1hdFNvcnQpIG1hdFNvcnQ6IE1hdFNvcnQ7XHJcblxyXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8RXZlbnRDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4oKTtcclxuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xyXG4gIEBPdXRwdXQoKSBzZWFyY2g6IEV2ZW50RW1pdHRlcjxFdmVudFNlYXJjaD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50U2VhcmNoPigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E+KCk7XHJcbiAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xyXG5cclxuICBzaG93Rm9vdGVyID0gZmFsc2U7XHJcbiAgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlU2VydmljZTogVGFibGVIZWxpc2FTZXJ2aWNlPFQ+KSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRhYmxlU2VydmljZS5uZXh0UGFnZVJldHVybi5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgIGlmICghZGF0YS50YWJsZSB8fCBkYXRhLnRhYmxlID09PSB0aGlzKSB7XHJcbiAgICAgICAgICB0aGlzLnJlY2VpdmVQYWdlKGRhdGEub2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnRhYmxlU2VydmljZS50b3RhbFJldHVybi5zdWJzY3JpYmUoaW5mbyA9PiB7XHJcbiAgICAgIGlmIChpbmZvKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uLCBpZHgpID0+IHtcclxuICAgICAgICAgIGlmIChjb2x1bW4gPT09IGluZm8ub2JqLmNvbHVtbikge1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsRGF0YVtpZHhdID0gdGhpcy5nZXRHcm91cFZhbHVlKGNvbHVtbiwge3N1bTogaW5mby5vYmoudmFsdWUsIGNvdW50OiB0aGlzLmNvdW50fSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYXRTb3J0LnNvcnRDaGFuZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAoZXZlbnQ6IFNvcnQpID0+IHtcclxuICAgICAgICBjb25zdCBjb2x1bW46IENvbHVtbkNvbmZpZyA9IHRoaXMuY29sdW1uQ29uZmlnLmZpbmQoYyA9PiBjLm5hbWUgPT09IGV2ZW50LmFjdGl2ZSk7XHJcbiAgICAgICAgY29sdW1uLnNvcnREaXJlY3Rpb24gPSBldmVudC5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5zb3J0LmVtaXQoe2NvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5TT1JUfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpc1JlbW90ZSh3OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB3ID8gVGFibGVIZWxpc2FUeXBlLlJFTU9URSA6IFRhYmxlSGVsaXNhVHlwZS5MT0NBTDtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUpIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgPSBuZXcgVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+KCk7XHJcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xyXG4gICAgfSBlbHNlIHsgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgPSB1bmRlZmluZWQ7IH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbHVtbkNvbmZpZ3VyYXRpb24oY29sdW1uQ29uZmlndXJhdGlvbjogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcgPSBjb2x1bW5Db25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKTtcclxuICAgIGlmIChjb2x1bW5Db25maWd1cmF0aW9uKSB7XHJcbiAgICAgIGNvbHVtbkNvbmZpZ3VyYXRpb24uZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICAgIGlmIChjb2x1bW4udmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnB1c2goY29sdW1uLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnJhd0RhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnJhd0RhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGFTb3VyY2UoZGF0YVNvdXJjZTogQXJyYXk8YW55Pikge1xyXG4gICAgdGhpcy5yYXdEYXRhID0gZGF0YVNvdXJjZTtcclxuICAgIGlmICh0aGlzLnJhd0RhdGEpIHsgdGhpcy5wcmVwYXJlRGF0YVNvdXJjZSgpOyB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVEYXRhU291cmNlKCkge1xyXG4gICAgY29uc3QgY2hhbmdlRGF0YSA9IEFycmF5PFJvd0RhdGE+KCk7XHJcbiAgICBsZXQgaGF2ZUdyb3VwID0gZmFsc2U7XHJcbiAgICBsZXQgZ3JvdXBGb290ZXI6IEFycmF5PFRvdGFsR3JvdXA+O1xyXG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSAhPT0gdW5kZWZpbmVkICYmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5MT0NBTCB8fCB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5wYWdlIDw9IDEpKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbERhdGEgPSBuZXcgQXJyYXk8bnVtYmVyPih0aGlzLmNvbHVtbkNvbmZpZy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0Zvb3RlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b3RhbC5lbWl0KHtjb2x1bW4sIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZywgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUuVE9UQUx9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dTZWFyY2ggPSB0aGlzLnNob3dTZWFyY2ggfHwgY29sdW1uLnNlYXJjaGFibGU7XHJcbiAgICAgIGhhdmVHcm91cCA9IGhhdmVHcm91cCB8fCBjb2x1bW4uZ3JvdXBhYmxlO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoaGF2ZUdyb3VwKSB7XHJcbiAgICAgIHRoaXMucmF3RGF0YSA9IHRoaXMucmF3RGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmNvbXBhcmUoYSwgYik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhd0RhdGEuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBpZiAoaGF2ZUdyb3VwICYmIChjaGFuZ2VEYXRhLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNvbXBhcmUoY2hhbmdlRGF0YVtjaGFuZ2VEYXRhLmxlbmd0aCAtIDFdLmRhdGEsIHJvdykgIT09IDApKSB7XHJcbiAgICAgICAgaWYgKGdyb3VwRm9vdGVyKSB7XHJcbiAgICAgICAgICBjaGFuZ2VEYXRhLnB1c2goe2RhdGE6IGdyb3VwRm9vdGVyLCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX0ZPT1RFUn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFuZ2VEYXRhLnB1c2goe2RhdGE6IHJvdywgcm93VHlwZTogUm93VHlwZS5HUk9VUF9USVRMRX0pO1xyXG4gICAgICAgIGdyb3VwRm9vdGVyID0gbmV3IEFycmF5PFRvdGFsR3JvdXA+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhhdmVHcm91cCkgeyB0aGlzLmFkZFRvdGFsR3JvdXAoZ3JvdXBGb290ZXIsIHJvdyk7IH1cclxuICAgICAgY2hhbmdlRGF0YS5wdXNoKHtkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuUk9XfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YT4oY2hhbmdlRGF0YSk7XHJcbiAgICBpZiAodGhpcy5yYXdEYXRhICYmIHRoaXMucmF3RGF0YS5sZW5ndGgpIHsgdGhpcy5zZWxlY3RSb3coe2RhdGE6IHRoaXMucmF3RGF0YVswXSwgcm93VHlwZTogUm93VHlwZS5ST1d9KTsgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUb3RhbEdyb3VwKHJvd1RvdGFsOiBBcnJheTxUb3RhbEdyb3VwPiwgcm93OiBhbnkpIHtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChyb3dUb3RhbFtpbmRleF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdID0ge3N1bTogQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShyb3csIGNvbHVtbiksIGNvdW50OiAxfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcm93VG90YWxbaW5kZXhdLnN1bSArPSBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKHJvdywgY29sdW1uKTtcclxuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5jb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXBhcmUoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xyXG4gICAgbGV0IHdzID0gMDtcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgaWYgKHdzID09PSAwICYmIGNvbHVtbi5ncm91cGFibGUpIHtcclxuICAgICAgICBpZiAoQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShhLCBjb2x1bW4pIDwgQ29sdW1uQ29uZmlnVXRpbC5nZXRWYWx1ZShiLCBjb2x1bW4pKSB7IHdzID0gLTE7IH1cclxuICAgICAgICBlbHNlIGlmKENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUoYSwgY29sdW1uKSA+IENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUoYiwgY29sdW1uKSkgeyB3cyA9IDE7IH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gd3M7XHJcbiAgfVxyXG5cclxuICBnZXRHcm91cERlc2NyaXB0aW9uKG9iajogYW55KTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi5ncm91cGFibGUpIHtcclxuICAgICAgICByZXN1bHQgKz0gKHJlc3VsdC5sZW5ndGggPyAnIC0gJyA6ICcnKSArIENvbHVtbkNvbmZpZ1V0aWwuZ2V0VmFsdWUob2JqLCBjb2x1bW4pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBpc0dyb3VwVGl0bGUoaW5kZXgsIGl0ZW0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuR1JPVVBfVElUTEU7XHJcbiAgfVxyXG5cclxuICBpc1JvdyhpbmRleCwgaXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5ST1c7XHJcbiAgfVxyXG5cclxuICBpc0dyb3VwRm9vdGVyKGluZGV4LCBpdGVtKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLkdST1VQX0ZPT1RFUjtcclxuICB9XHJcblxyXG4gIGZvb3RlckRpc3BsYXllZENvbHVtbnMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLm1hcChuYW1lID0+ICdmb290ZXItJyArIG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0R3JvdXBWYWx1ZShjb2x1bW46IENvbHVtbkNvbmZpZywgZGF0YTogVG90YWxHcm91cCk6IG51bWJlciB7XHJcbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLlNVTSkgeyByZXR1cm4gZGF0YS5zdW07IH1cclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuQ09VTlQpIHsgcmV0dXJuIGRhdGEuY291bnQ7IH1cclxuICAgIGlmIChjb2x1bW4udG90YWxUeXBlID09PSBUb3RhbFR5cGUuQVZFUkFHRSkgeyByZXR1cm4gMS4gKiBkYXRhLnN1bSAvIGRhdGEuY291bnQ7IH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZShvYmo6IGFueSwgY29sdW1uOiBDb2x1bW5Db25maWcpIHtcclxuICAgIHJldHVybiBDb2x1bW5Db25maWdVdGlsLmdldFZhbHVlKG9iaiwgY29sdW1uKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaFRleHQodGV4dCkge1xyXG4gICAgdGhpcy5sYXN0U2VhcmNoID0gdGV4dDtcclxuICAgIHRoaXMuc2VhcmNoLmVtaXQoe3RleHQ6IHRleHQsIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiB0aGlzLmNvbHVtbkNvbmZpZ30pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KHJvdykge1xyXG4gICAgdGhpcy5zZWxlY3RlZE9iamVjdCA9IHJvdy5kYXRhO1xyXG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmIChlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wIDwgMTAwMCkge1xyXG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpIHtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUgJiYgIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgJiYgIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCkge1xyXG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLm5leHRQYWdlLmVtaXQoe1xyXG4gICAgICAgIHBhZ2U6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50Lm5leHRQYWdlKCksXHJcbiAgICAgICAgYm9keTogdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuZ2V0Qm9keSh0aGlzLmNvbHVtbkNvbmZpZywgdGhpcy5sYXN0U2VhcmNoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogVFtdKSB7XHJcbiAgICBpZiAoIXRoaXMucmF3RGF0YSkgeyB0aGlzLnJhd0RhdGEgPSBuZXcgQXJyYXk8VD4oKTsgfVxyXG4gICAgdGhpcy5yYXdEYXRhID0gdGhpcy5yYXdEYXRhLmNvbmNhdChkYXRhKTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUpIHtcclxuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNMYXN0UGFnZSA9IGRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc1VzZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19