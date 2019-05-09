/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function ColumnConfig() { }
if (false) {
    /** @type {?} */
    ColumnConfig.prototype.name;
    /** @type {?} */
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
}
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
 */
export function RequestTableHelisa() { }
if (false) {
    /** @type {?} */
    RequestTableHelisa.prototype.page;
    /** @type {?} */
    RequestTableHelisa.prototype.body;
}
/** @enum {number} */
var TableHelisaType = {
    REMOTE: 0, LOCAL: 1,
};
export { TableHelisaType };
TableHelisaType[TableHelisaType.REMOTE] = 'REMOTE';
TableHelisaType[TableHelisaType.LOCAL] = 'LOCAL';
//@dynamic
/**
 * @abstract
 */
var 
//@dynamic
/**
 * @abstract
 */
ColumnConfigUtil = /** @class */ (function () {
    function ColumnConfigUtil() {
    }
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    ColumnConfigUtil.getValue = /**
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
//@dynamic
/**
 * @abstract
 */
export { ColumnConfigUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0Esa0NBU0M7OztJQVJDLDRCQUFhOztJQUNiLDZCQUFjOztJQUNkLCtCQUFrQjs7SUFDbEIsZ0NBQW1COztJQUNuQixpQ0FBb0I7O0lBQ3BCLGlDQUFzQjs7SUFDdEIsa0NBQXFCOztJQUNyQixxQ0FBOEI7Ozs7SUFJOUIsTUFBRyxFQUFFLFVBQU8sRUFBRSxRQUFLOzs7Ozs7OztJQUluQixPQUFJLEVBQUUsVUFBTyxFQUFFLFFBQUs7Ozs7Ozs7OztBQUd0QixpQ0FJQzs7O0lBSEMsNkJBQXFCOztJQUNyQiwyQ0FBMEM7O0lBQzFDLDJCQUFvQzs7Ozs7QUFHdEMsc0NBR0M7OztJQUZDLGtDQUFxQjs7SUFDckIsaUNBQWM7Ozs7O0FBR2hCLGdDQUdDOzs7SUFGQyx5QkFBWTs7SUFDWiwyQkFBYzs7Ozs7QUFHaEIsaUNBR0M7OztJQUZDLDJCQUFhOztJQUNiLDJDQUEwQzs7Ozs7QUFHNUMsd0NBR0M7OztJQUZDLGtDQUFhOztJQUNiLGtDQUFVOzs7O0lBSVYsU0FBTSxFQUFFLFFBQUs7Ozs7Ozs7OztBQUlmOzs7Ozs7SUFBQTtJQUlBLENBQUM7Ozs7OztJQUhRLHlCQUFROzs7OztJQUFmLFVBQWdCLEdBQVEsRUFBRSxNQUFvQjtRQUM1QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSyxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBYixDQUFhLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NvcnREaXJlY3Rpb259IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbHVtbkNvbmZpZyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgc29ydGFibGU/OiBib29sZWFuO1xyXG4gIGdyb3VwYWJsZT86IGJvb2xlYW47XHJcbiAgdG90YWxUeXBlPzogVG90YWxUeXBlO1xyXG4gIHNlYXJjaGFibGU/OiBib29sZWFuO1xyXG4gIHNvcnREaXJlY3Rpb24/OiBTb3J0RGlyZWN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUb3RhbFR5cGUge1xyXG4gIFNVTSwgQVZFUkFHRSwgQ09VTlRcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGUge1xyXG4gIFNPUlQsIFVOS05PV04sIFRPVEFMXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRDb2x1bW4ge1xyXG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xyXG4gIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiBBcnJheTxDb2x1bW5Db25maWc+O1xyXG4gIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvdGFsVGFibGVIZWxpc2Ege1xyXG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG90YWxHcm91cCB7XHJcbiAgc3VtOiBudW1iZXI7XHJcbiAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFNlYXJjaCB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiBBcnJheTxDb2x1bW5Db25maWc+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RUYWJsZUhlbGlzYSB7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIGJvZHk6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGFibGVIZWxpc2FUeXBlIHtcclxuICBSRU1PVEUsIExPQ0FMXHJcbn1cclxuXHJcbi8vQGR5bmFtaWNcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbHVtbkNvbmZpZ1V0aWwge1xyXG4gIHN0YXRpYyBnZXRWYWx1ZShvYmo6IGFueSwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBhbnkge1xyXG4gICAgcmV0dXJuIGNvbHVtbi5uYW1lLnNwbGl0KCcuJykucmVkdWNlKChvLCBmaWVsZCkgPT4gbyAmJiBvW2ZpZWxkXSwgb2JqKTtcclxuICB9XHJcbn1cclxuIl19