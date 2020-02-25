/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ColumnType = {
    NORMAL: 0, URL: 1,
};
export { ColumnType };
ColumnType[ColumnType.NORMAL] = 'NORMAL';
ColumnType[ColumnType.URL] = 'URL';
/**
 * @record
 */
export function ColumnConfig() { }
if (false) {
    /** @type {?} */
    ColumnConfig.prototype.name;
    /** @type {?|undefined} */
    ColumnConfig.prototype.title;
    /** @type {?|undefined} */
    ColumnConfig.prototype.visible;
    /** @type {?|undefined} */
    ColumnConfig.prototype.sortable;
    /** @type {?|undefined} */
    ColumnConfig.prototype.groupable;
    /** @type {?|undefined} */
    ColumnConfig.prototype.totalType;
    /** @type {?|undefined} */
    ColumnConfig.prototype.searchable;
    /** @type {?|undefined} */
    ColumnConfig.prototype.sortDirection;
    /** @type {?|undefined} */
    ColumnConfig.prototype.subtitle;
    /** @type {?|undefined} */
    ColumnConfig.prototype.colspanTitle;
    /** @type {?|undefined} */
    ColumnConfig.prototype.colspanSubtitle;
    /** @type {?|undefined} */
    ColumnConfig.prototype.columnStyle;
    /** @type {?|undefined} */
    ColumnConfig.prototype.columnType;
}
/**
 * @record
 */
export function AddRowButton() { }
if (false) {
    /** @type {?} */
    AddRowButton.prototype.text;
    /** @type {?} */
    AddRowButton.prototype.showButton;
}
/** @enum {number} */
var EventScope = {
    USER: 0, CODE_CALL: 1,
};
export { EventScope };
EventScope[EventScope.USER] = 'USER';
EventScope[EventScope.CODE_CALL] = 'CODE_CALL';
/** @enum {number} */
var TotalType = {
    SUM: 0, AVERAGE: 1, COUNT: 2,
};
export { TotalType };
TotalType[TotalType.SUM] = 'SUM';
TotalType[TotalType.AVERAGE] = 'AVERAGE';
TotalType[TotalType.COUNT] = 'COUNT';
/** @enum {number} */
var ChangeColumnConfigurationType = {
    SORT: 0, UNKNOWN: 1, TOTAL: 2,
};
export { ChangeColumnConfigurationType };
ChangeColumnConfigurationType[ChangeColumnConfigurationType.SORT] = 'SORT';
ChangeColumnConfigurationType[ChangeColumnConfigurationType.UNKNOWN] = 'UNKNOWN';
ChangeColumnConfigurationType[ChangeColumnConfigurationType.TOTAL] = 'TOTAL';
/**
 * @record
 */
export function EventColumn() { }
if (false) {
    /** @type {?} */
    EventColumn.prototype.column;
    /** @type {?} */
    EventColumn.prototype.columnConfigurations;
    /** @type {?} */
    EventColumn.prototype.type;
}
/**
 * @record
 */
export function TotalTableHelisa() { }
if (false) {
    /** @type {?} */
    TotalTableHelisa.prototype.column;
    /** @type {?} */
    TotalTableHelisa.prototype.value;
}
/**
 * @record
 */
export function TotalGroup() { }
if (false) {
    /** @type {?} */
    TotalGroup.prototype.sum;
    /** @type {?} */
    TotalGroup.prototype.count;
}
/**
 * @record
 */
export function EventSearch() { }
if (false) {
    /** @type {?} */
    EventSearch.prototype.text;
    /** @type {?} */
    EventSearch.prototype.columnConfigurations;
}
/**
 * @record
 * @template T
 */
export function RequestTableHelisa() { }
if (false) {
    /** @type {?} */
    RequestTableHelisa.prototype.page;
    /** @type {?} */
    RequestTableHelisa.prototype.body;
}
/**
 * @record
 * @template T
 */
export function DropElement() { }
if (false) {
    /** @type {?} */
    DropElement.prototype.value;
    /** @type {?} */
    DropElement.prototype.order;
}
/**
 * @record
 * @template T
 */
export function SelectObject() { }
if (false) {
    /** @type {?} */
    SelectObject.prototype.value;
    /** @type {?} */
    SelectObject.prototype.scope;
}
/** @enum {number} */
var TableHelisaType = {
    REMOTE: 0, LOCAL: 1,
};
export { TableHelisaType };
TableHelisaType[TableHelisaType.REMOTE] = 'REMOTE';
TableHelisaType[TableHelisaType.LOCAL] = 'LOCAL';
/**
 * @record
 * @template T
 */
export function Cell() { }
if (false) {
    /** @type {?} */
    Cell.prototype.column;
    /** @type {?} */
    Cell.prototype.row;
}
/**
 * @record
 * @template T
 */
export function ConfigCellStyles() { }
if (false) {
    /** @type {?} */
    ConfigCellStyles.prototype.cellData;
    /** @type {?} */
    ConfigCellStyles.prototype.classCell;
}
/**
 * @record
 * @template T
 */
export function ConfigRowStyles() { }
if (false) {
    /** @type {?} */
    ConfigRowStyles.prototype.column;
    /** @type {?} */
    ConfigRowStyles.prototype.data;
    /** @type {?} */
    ConfigRowStyles.prototype.classRow;
}
// @dynamic
/**
 * @template T
 */
var 
// @dynamic
/**
 * @template T
 */
ColumnConfigUtil = /** @class */ (function () {
    function ColumnConfigUtil() {
    }
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    ColumnConfigUtil.prototype.getValue = /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    function (obj, column) {
        return column.name.split('.').reduce((/**
         * @param {?} o
         * @param {?} field
         * @return {?}
         */
        function (o, field) { return o && o[field]; }), obj);
    };
    return ColumnConfigUtil;
}());
// @dynamic
/**
 * @template T
 */
export { ColumnConfigUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFJRSxTQUFNLEVBQUUsTUFBRzs7Ozs7Ozs7QUFHYixrQ0FjQzs7O0lBYkMsNEJBQWE7O0lBQ2IsNkJBQWU7O0lBQ2YsK0JBQWtCOztJQUNsQixnQ0FBbUI7O0lBQ25CLGlDQUFvQjs7SUFDcEIsaUNBQXNCOztJQUN0QixrQ0FBcUI7O0lBQ3JCLHFDQUE4Qjs7SUFDOUIsZ0NBQWtCOztJQUNsQixvQ0FBc0I7O0lBQ3RCLHVDQUF5Qjs7SUFDekIsbUNBQXFCOztJQUNyQixrQ0FBd0I7Ozs7O0FBRzFCLGtDQUdDOzs7SUFGQyw0QkFBYTs7SUFDYixrQ0FBb0I7Ozs7SUFJcEIsT0FBSSxFQUFFLFlBQVM7Ozs7Ozs7SUFJZixNQUFHLEVBQUUsVUFBTyxFQUFFLFFBQUs7Ozs7Ozs7O0lBSW5CLE9BQUksRUFBRSxVQUFPLEVBQUUsUUFBSzs7Ozs7Ozs7O0FBR3RCLGlDQUlDOzs7SUFIQyw2QkFBcUI7O0lBQ3JCLDJDQUEwQzs7SUFDMUMsMkJBQW9DOzs7OztBQUd0QyxzQ0FHQzs7O0lBRkMsa0NBQXFCOztJQUNyQixpQ0FBYzs7Ozs7QUFHaEIsZ0NBR0M7OztJQUZDLHlCQUFZOztJQUNaLDJCQUFjOzs7OztBQUdoQixpQ0FHQzs7O0lBRkMsMkJBQWE7O0lBQ2IsMkNBQTBDOzs7Ozs7QUFHNUMsd0NBR0M7OztJQUZDLGtDQUFhOztJQUNiLGtDQUFhOzs7Ozs7QUFHZixpQ0FHQzs7O0lBRkEsNEJBQVM7O0lBQ1QsNEJBQWM7Ozs7OztBQUdmLGtDQUdDOzs7SUFGQyw2QkFBUzs7SUFDVCw2QkFBa0I7Ozs7SUFJbEIsU0FBTSxFQUFFLFFBQUs7Ozs7Ozs7OztBQUlmLDBCQUdFOzs7SUFGQSxzQkFBcUI7O0lBQ3JCLG1CQUFvQjs7Ozs7O0FBR3RCLHNDQUdFOzs7SUFGQyxvQ0FBWTs7SUFDWixxQ0FBa0I7Ozs7OztBQUdyQixxQ0FJQzs7O0lBSEMsaUNBQXFCOztJQUNyQiwrQkFBYTs7SUFDYixtQ0FBaUI7Ozs7OztBQUluQjs7Ozs7O0lBQUE7SUFLQSxDQUFDOzs7Ozs7SUFIQyxtQ0FBUTs7Ozs7SUFBUixVQUFTLEdBQU0sRUFBRSxNQUFvQjtRQUNuQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxDQUFJLEVBQUUsS0FBYSxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBYixDQUFhLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NvcnREaXJlY3Rpb259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFJvd0RhdGEgfSBmcm9tICcuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQnO1xuXG5leHBvcnQgZW51bSBDb2x1bW5UeXBlIHtcbiAgTk9STUFMLCBVUkxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2x1bW5Db25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgc29ydGFibGU/OiBib29sZWFuO1xuICBncm91cGFibGU/OiBib29sZWFuO1xuICB0b3RhbFR5cGU/OiBUb3RhbFR5cGU7XG4gIHNlYXJjaGFibGU/OiBib29sZWFuO1xuICBzb3J0RGlyZWN0aW9uPzogU29ydERpcmVjdGlvbjtcbiAgc3VidGl0bGU/OiBzdHJpbmc7XG4gIGNvbHNwYW5UaXRsZT86IG51bWJlcjtcbiAgY29sc3BhblN1YnRpdGxlPzogbnVtYmVyO1xuICBjb2x1bW5TdHlsZT86IHN0cmluZztcbiAgY29sdW1uVHlwZT86IENvbHVtblR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkUm93QnV0dG9uIHtcbiAgdGV4dDogc3RyaW5nO1xuICBzaG93QnV0dG9uOiBib29sZWFuO1xufVxuXG5leHBvcnQgZW51bSBFdmVudFNjb3BlIHtcbiAgVVNFUiwgQ09ERV9DQUxMXG59XG5cbmV4cG9ydCBlbnVtIFRvdGFsVHlwZSB7XG4gIFNVTSwgQVZFUkFHRSwgQ09VTlRcbn1cblxuZXhwb3J0IGVudW0gQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUge1xuICBTT1JULCBVTktOT1dOLCBUT1RBTFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50Q29sdW1uIHtcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XG4gIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiBBcnJheTxDb2x1bW5Db25maWc+O1xuICB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb3RhbFRhYmxlSGVsaXNhIHtcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XG4gIHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG90YWxHcm91cCB7XG4gIHN1bTogbnVtYmVyO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U2VhcmNoIHtcbiAgdGV4dDogc3RyaW5nO1xuICBjb2x1bW5Db25maWd1cmF0aW9uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VGFibGVIZWxpc2E8VD4ge1xuICBwYWdlOiBudW1iZXI7XG4gIGJvZHk6IHt9IHwgVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcm9wRWxlbWVudDxUPiB7XG4gdmFsdWU6IFQ7XG4gb3JkZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RPYmplY3Q8VD4ge1xuICB2YWx1ZTogVDtcbiAgc2NvcGU6IEV2ZW50U2NvcGU7XG59XG5cbmV4cG9ydCBlbnVtIFRhYmxlSGVsaXNhVHlwZSB7XG4gIFJFTU9URSwgTE9DQUxcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIENlbGw8VD4ge1xuICBjb2x1bW46IENvbHVtbkNvbmZpZztcbiAgcm93OiBSb3dEYXRhPFQ+IHwgVDtcbiB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnQ2VsbFN0eWxlczxUPiB7XG4gICBjZWxsRGF0YTogVDtcbiAgIGNsYXNzQ2VsbDogc3RyaW5nO1xuIH1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdSb3dTdHlsZXM8VD4ge1xuICBjb2x1bW46IENvbHVtbkNvbmZpZztcbiAgZGF0YToge30gfCBUO1xuICBjbGFzc1Jvdzogc3RyaW5nO1xufVxuXG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIENvbHVtbkNvbmZpZ1V0aWw8VD4ge1xuXG4gIGdldFZhbHVlKG9iajogVCwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBUIHwgbnVtYmVyIHwgc3RyaW5nIHtcbiAgICByZXR1cm4gY29sdW1uLm5hbWUuc3BsaXQoJy4nKS5yZWR1Y2UoKG86IFQsIGZpZWxkOiBzdHJpbmcpID0+IG8gJiYgb1tmaWVsZF0sIG9iaik7XG4gIH1cbn1cblxuIl19