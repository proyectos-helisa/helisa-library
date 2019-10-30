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
/** @enum {number} */
var TableHelisaType = {
    REMOTE: 0, LOCAL: 1,
};
export { TableHelisaType };
TableHelisaType[TableHelisaType.REMOTE] = 'REMOTE';
TableHelisaType[TableHelisaType.LOCAL] = 'LOCAL';
/**
 * @record
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsa0NBU0M7OztJQVJDLDRCQUFhOztJQUNiLDZCQUFjOztJQUNkLCtCQUFrQjs7SUFDbEIsZ0NBQW1COztJQUNuQixpQ0FBb0I7O0lBQ3BCLGlDQUFzQjs7SUFDdEIsa0NBQXFCOztJQUNyQixxQ0FBOEI7Ozs7SUFJOUIsTUFBRyxFQUFFLFVBQU8sRUFBRSxRQUFLOzs7Ozs7OztJQUluQixPQUFJLEVBQUUsVUFBTyxFQUFFLFFBQUs7Ozs7Ozs7OztBQUd0QixpQ0FJQzs7O0lBSEMsNkJBQXFCOztJQUNyQiwyQ0FBMEM7O0lBQzFDLDJCQUFvQzs7Ozs7QUFHdEMsc0NBR0M7OztJQUZDLGtDQUFxQjs7SUFDckIsaUNBQWM7Ozs7O0FBR2hCLGdDQUdDOzs7SUFGQyx5QkFBWTs7SUFDWiwyQkFBYzs7Ozs7QUFHaEIsaUNBR0M7OztJQUZDLDJCQUFhOztJQUNiLDJDQUEwQzs7Ozs7QUFHNUMsd0NBR0M7OztJQUZDLGtDQUFhOztJQUNiLGtDQUFVOzs7Ozs7QUFHWixpQ0FHQzs7O0lBRkEsNEJBQVM7O0lBQ1QsNEJBQWM7Ozs7SUFJYixTQUFNLEVBQUUsUUFBSzs7Ozs7Ozs7QUFJZiwwQkFHRTs7O0lBRkEsc0JBQXFCOztJQUNyQixtQkFBUzs7Ozs7QUFHVixzQ0FHQzs7O0lBRkMsb0NBQWM7O0lBQ2QscUNBQWlCOzs7OztBQUduQixxQ0FJQTs7O0lBSEMsaUNBQXFCOztJQUNyQiwrQkFBVTs7SUFDVixtQ0FBZ0I7Ozs7OztBQUlsQjs7Ozs7O0lBQUE7SUFJQSxDQUFDOzs7Ozs7SUFIUSx5QkFBUTs7Ozs7SUFBZixVQUFnQixHQUFRLEVBQUUsTUFBb0I7UUFDNUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFKRCxJQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTb3J0RGlyZWN0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sdW1uQ29uZmlnIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB2aXNpYmxlPzogYm9vbGVhbjtcclxuICBzb3J0YWJsZT86IGJvb2xlYW47XHJcbiAgZ3JvdXBhYmxlPzogYm9vbGVhbjtcclxuICB0b3RhbFR5cGU/OiBUb3RhbFR5cGU7XHJcbiAgc2VhcmNoYWJsZT86IGJvb2xlYW47XHJcbiAgc29ydERpcmVjdGlvbj86IFNvcnREaXJlY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRvdGFsVHlwZSB7XHJcbiAgU1VNLCBBVkVSQUdFLCBDT1VOVFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZSB7XHJcbiAgU09SVCwgVU5LTk9XTiwgVE9UQUxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudENvbHVtbiB7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgY29sdW1uQ29uZmlndXJhdGlvbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XHJcbiAgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG90YWxUYWJsZUhlbGlzYSB7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb3RhbEdyb3VwIHtcclxuICBzdW06IG51bWJlcjtcclxuICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U2VhcmNoIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY29sdW1uQ29uZmlndXJhdGlvbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRhYmxlSGVsaXNhIHtcclxuICBwYWdlOiBudW1iZXI7XHJcbiAgYm9keTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyb3BFbGVtZW50PFQ+e1xyXG4gdmFsdWU6IFQ7XHJcbiBvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUYWJsZUhlbGlzYVR5cGUge1xyXG4gIFJFTU9URSwgTE9DQUxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbCB7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgcm93OiBhbnk7XHJcbiB9XHJcblxyXG4gZXhwb3J0IGludGVyZmFjZSBDb25maWdDZWxsU3R5bGVze1xyXG4gICBjZWxsRGF0YTogYW55O1xyXG4gICBjbGFzc0NlbGw6IHN0cmluZyBcclxuIH1cclxuXHJcbiBleHBvcnQgaW50ZXJmYWNlIENvbmZpZ1Jvd1N0eWxlc3tcclxuICBjb2x1bW46IENvbHVtbkNvbmZpZztcclxuICBkYXRhOiBhbnksXHJcbiAgY2xhc3NSb3c6IHN0cmluZyBcclxufVxyXG5cclxuLy9AZHluYW1pY1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29sdW1uQ29uZmlnVXRpbCB7XHJcbiAgc3RhdGljIGdldFZhbHVlKG9iajogYW55LCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IGFueSB7XHJcbiAgICByZXR1cm4gY29sdW1uLm5hbWUuc3BsaXQoJy4nKS5yZWR1Y2UoKG8sIGZpZWxkKSA9PiBvICYmIG9bZmllbGRdLCBvYmopO1xyXG4gIH1cclxufVxyXG4iXX0=