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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFJRSxTQUFNLEVBQUUsTUFBRzs7Ozs7Ozs7QUFHYixrQ0FjQzs7O0lBYkMsNEJBQWE7O0lBQ2IsNkJBQWU7O0lBQ2YsK0JBQWtCOztJQUNsQixnQ0FBbUI7O0lBQ25CLGlDQUFvQjs7SUFDcEIsaUNBQXNCOztJQUN0QixrQ0FBcUI7O0lBQ3JCLHFDQUE4Qjs7SUFDOUIsZ0NBQWtCOztJQUNsQixvQ0FBc0I7O0lBQ3RCLHVDQUF5Qjs7SUFDekIsbUNBQXFCOztJQUNyQixrQ0FBd0I7Ozs7O0FBRzFCLGtDQUdDOzs7SUFGQyw0QkFBYTs7SUFDYixrQ0FBb0I7Ozs7SUFJcEIsT0FBSSxFQUFFLFlBQVM7Ozs7Ozs7SUFJZixNQUFHLEVBQUUsVUFBTyxFQUFFLFFBQUs7Ozs7Ozs7O0lBSW5CLE9BQUksRUFBRSxVQUFPLEVBQUUsUUFBSzs7Ozs7Ozs7O0FBR3RCLGlDQUlDOzs7SUFIQyw2QkFBcUI7O0lBQ3JCLDJDQUEwQzs7SUFDMUMsMkJBQW9DOzs7OztBQUd0QyxzQ0FHQzs7O0lBRkMsa0NBQXFCOztJQUNyQixpQ0FBYzs7Ozs7QUFHaEIsZ0NBR0M7OztJQUZDLHlCQUFZOztJQUNaLDJCQUFjOzs7OztBQUdoQixpQ0FHQzs7O0lBRkMsMkJBQWE7O0lBQ2IsMkNBQTBDOzs7Ozs7QUFHNUMsd0NBR0M7OztJQUZDLGtDQUFhOztJQUNiLGtDQUFhOzs7Ozs7QUFHZixpQ0FHQzs7O0lBRkEsNEJBQVM7O0lBQ1QsNEJBQWM7Ozs7OztBQUdmLGtDQUdDOzs7SUFGQyw2QkFBUzs7SUFDVCw2QkFBa0I7Ozs7SUFJbEIsU0FBTSxFQUFFLFFBQUs7Ozs7Ozs7OztBQUlmLDBCQUdFOzs7SUFGQSxzQkFBcUI7O0lBQ3JCLG1CQUFvQjs7Ozs7O0FBR3RCLHNDQUdFOzs7SUFGQyxvQ0FBWTs7SUFDWixxQ0FBa0I7Ozs7OztBQUdyQixxQ0FJQzs7O0lBSEMsaUNBQXFCOztJQUNyQiwrQkFBYTs7SUFDYixtQ0FBaUI7Ozs7OztBQUluQjs7Ozs7O0lBQUE7SUFLQSxDQUFDOzs7Ozs7SUFIQyxtQ0FBUTs7Ozs7SUFBUixVQUFTLEdBQU0sRUFBRSxNQUFvQjtRQUNuQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxDQUFJLEVBQUUsS0FBYSxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBYixDQUFhLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NvcnREaXJlY3Rpb259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgUm93RGF0YSB9IGZyb20gJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZW51bSBDb2x1bW5UeXBlIHtcclxuICBOT1JNQUwsIFVSTFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbHVtbkNvbmZpZyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIHZpc2libGU/OiBib29sZWFuO1xyXG4gIHNvcnRhYmxlPzogYm9vbGVhbjtcclxuICBncm91cGFibGU/OiBib29sZWFuO1xyXG4gIHRvdGFsVHlwZT86IFRvdGFsVHlwZTtcclxuICBzZWFyY2hhYmxlPzogYm9vbGVhbjtcclxuICBzb3J0RGlyZWN0aW9uPzogU29ydERpcmVjdGlvbjtcclxuICBzdWJ0aXRsZT86IHN0cmluZztcclxuICBjb2xzcGFuVGl0bGU/OiBudW1iZXI7XHJcbiAgY29sc3BhblN1YnRpdGxlPzogbnVtYmVyO1xyXG4gIGNvbHVtblN0eWxlPzogc3RyaW5nO1xyXG4gIGNvbHVtblR5cGU/OiBDb2x1bW5UeXBlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZFJvd0J1dHRvbiB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHNob3dCdXR0b246IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEV2ZW50U2NvcGUge1xyXG4gIFVTRVIsIENPREVfQ0FMTFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUb3RhbFR5cGUge1xyXG4gIFNVTSwgQVZFUkFHRSwgQ09VTlRcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUge1xyXG4gIFNPUlQsIFVOS05PV04sIFRPVEFMXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRDb2x1bW4ge1xyXG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xyXG4gIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiBBcnJheTxDb2x1bW5Db25maWc+O1xyXG4gIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvdGFsVGFibGVIZWxpc2Ege1xyXG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG90YWxHcm91cCB7XHJcbiAgc3VtOiBudW1iZXI7XHJcbiAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFNlYXJjaCB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiBBcnJheTxDb2x1bW5Db25maWc+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RUYWJsZUhlbGlzYTxUPiB7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIGJvZHk6IHt9IHwgVDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcm9wRWxlbWVudDxUPiB7XHJcbiB2YWx1ZTogVDtcclxuIG9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0T2JqZWN0PFQ+IHtcclxuICB2YWx1ZTogVDtcclxuICBzY29wZTogRXZlbnRTY29wZTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGFibGVIZWxpc2FUeXBlIHtcclxuICBSRU1PVEUsIExPQ0FMXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENlbGw8VD4ge1xyXG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xyXG4gIHJvdzogUm93RGF0YTxUPiB8IFQ7XHJcbiB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0NlbGxTdHlsZXM8VD4ge1xyXG4gICBjZWxsRGF0YTogVDtcclxuICAgY2xhc3NDZWxsOiBzdHJpbmc7XHJcbiB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1Jvd1N0eWxlczxUPiB7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgZGF0YToge30gfCBUO1xyXG4gIGNsYXNzUm93OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEBkeW5hbWljXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5Db25maWdVdGlsPFQ+IHtcclxuXHJcbiAgZ2V0VmFsdWUob2JqOiBULCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IFQgfCBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbHVtbi5uYW1lLnNwbGl0KCcuJykucmVkdWNlKChvOiBULCBmaWVsZDogc3RyaW5nKSA9PiBvICYmIG9bZmllbGRdLCBvYmopO1xyXG4gIH1cclxufVxyXG5cclxuIl19