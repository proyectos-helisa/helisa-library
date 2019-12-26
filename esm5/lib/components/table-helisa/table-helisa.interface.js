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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHRSxTQUFNLEVBQUUsTUFBRzs7Ozs7Ozs7QUFHYixrQ0FjQzs7O0lBYkMsNEJBQWE7O0lBQ2IsNkJBQWU7O0lBQ2YsK0JBQWtCOztJQUNsQixnQ0FBbUI7O0lBQ25CLGlDQUFvQjs7SUFDcEIsaUNBQXNCOztJQUN0QixrQ0FBcUI7O0lBQ3JCLHFDQUE4Qjs7SUFDOUIsZ0NBQWtCOztJQUNsQixvQ0FBc0I7O0lBQ3RCLHVDQUF5Qjs7SUFDekIsbUNBQXFCOztJQUNyQixrQ0FBd0I7Ozs7O0FBRzFCLGtDQUdDOzs7SUFGQyw0QkFBYTs7SUFDYixrQ0FBbUI7Ozs7SUFJbkIsT0FBSSxFQUFFLFlBQVM7Ozs7Ozs7SUFJZixNQUFHLEVBQUUsVUFBTyxFQUFFLFFBQUs7Ozs7Ozs7O0lBSW5CLE9BQUksRUFBRSxVQUFPLEVBQUUsUUFBSzs7Ozs7Ozs7O0FBR3RCLGlDQUlDOzs7SUFIQyw2QkFBcUI7O0lBQ3JCLDJDQUEwQzs7SUFDMUMsMkJBQW9DOzs7OztBQUd0QyxzQ0FHQzs7O0lBRkMsa0NBQXFCOztJQUNyQixpQ0FBYzs7Ozs7QUFHaEIsZ0NBR0M7OztJQUZDLHlCQUFZOztJQUNaLDJCQUFjOzs7OztBQUdoQixpQ0FHQzs7O0lBRkMsMkJBQWE7O0lBQ2IsMkNBQTBDOzs7OztBQUc1Qyx3Q0FHQzs7O0lBRkMsa0NBQWE7O0lBQ2Isa0NBQVU7Ozs7OztBQUdaLGlDQUdDOzs7SUFGQSw0QkFBUzs7SUFDVCw0QkFBYzs7Ozs7O0FBR2Ysa0NBR0M7OztJQUZDLDZCQUFTOztJQUNULDZCQUFrQjs7OztJQUlsQixTQUFNLEVBQUUsUUFBSzs7Ozs7Ozs7QUFJZiwwQkFHRTs7O0lBRkEsc0JBQXFCOztJQUNyQixtQkFBUzs7Ozs7QUFHVixzQ0FHQzs7O0lBRkMsb0NBQWM7O0lBQ2QscUNBQWlCOzs7OztBQUduQixxQ0FJQTs7O0lBSEMsaUNBQXFCOztJQUNyQiwrQkFBVTs7SUFDVixtQ0FBZ0I7Ozs7OztBQUlsQjs7Ozs7O0lBQUE7SUFJQSxDQUFDOzs7Ozs7SUFIUSx5QkFBUTs7Ozs7SUFBZixVQUFnQixHQUFRLEVBQUUsTUFBb0I7UUFDNUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFKRCxJQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTb3J0RGlyZWN0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xyXG4gIE5PUk1BTCwgVVJMXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sdW1uQ29uZmlnIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgc29ydGFibGU/OiBib29sZWFuO1xyXG4gIGdyb3VwYWJsZT86IGJvb2xlYW47XHJcbiAgdG90YWxUeXBlPzogVG90YWxUeXBlO1xyXG4gIHNlYXJjaGFibGU/OiBib29sZWFuO1xyXG4gIHNvcnREaXJlY3Rpb24/OiBTb3J0RGlyZWN0aW9uO1xyXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xyXG4gIGNvbHNwYW5UaXRsZT86IG51bWJlcjtcclxuICBjb2xzcGFuU3VidGl0bGU/OiBudW1iZXI7XHJcbiAgY29sdW1uU3R5bGU/OiBzdHJpbmc7XHJcbiAgY29sdW1uVHlwZT86IENvbHVtblR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkUm93QnV0dG9ueyAgXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHNob3dCdXR0b246Ym9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXZlbnRTY29wZSB7XHJcbiAgVVNFUiwgQ09ERV9DQUxMXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRvdGFsVHlwZSB7XHJcbiAgU1VNLCBBVkVSQUdFLCBDT1VOVFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZSB7XHJcbiAgU09SVCwgVU5LTk9XTiwgVE9UQUxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudENvbHVtbiB7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgY29sdW1uQ29uZmlndXJhdGlvbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XHJcbiAgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG90YWxUYWJsZUhlbGlzYSB7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb3RhbEdyb3VwIHtcclxuICBzdW06IG51bWJlcjtcclxuICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U2VhcmNoIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY29sdW1uQ29uZmlndXJhdGlvbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRhYmxlSGVsaXNhIHtcclxuICBwYWdlOiBudW1iZXI7XHJcbiAgYm9keTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyb3BFbGVtZW50PFQ+e1xyXG4gdmFsdWU6IFQ7XHJcbiBvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdE9iamVjdDxUPiB7XHJcbiAgdmFsdWU6IFQ7XHJcbiAgc2NvcGU6IEV2ZW50U2NvcGU7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlSGVsaXNhVHlwZSB7XHJcbiAgUkVNT1RFLCBMT0NBTFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDZWxsIHtcclxuICBjb2x1bW46IENvbHVtbkNvbmZpZztcclxuICByb3c6IGFueTtcclxuIH1cclxuXHJcbiBleHBvcnQgaW50ZXJmYWNlIENvbmZpZ0NlbGxTdHlsZXN7XHJcbiAgIGNlbGxEYXRhOiBhbnk7XHJcbiAgIGNsYXNzQ2VsbDogc3RyaW5nIFxyXG4gfVxyXG5cclxuIGV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnUm93U3R5bGVze1xyXG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xyXG4gIGRhdGE6IGFueSxcclxuICBjbGFzc1Jvdzogc3RyaW5nIFxyXG59XHJcblxyXG4vL0BkeW5hbWljXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb2x1bW5Db25maWdVdGlsIHtcclxuICBzdGF0aWMgZ2V0VmFsdWUob2JqOiBhbnksIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogYW55IHtcclxuICAgIHJldHVybiBjb2x1bW4ubmFtZS5zcGxpdCgnLicpLnJlZHVjZSgobywgZmllbGQpID0+IG8gJiYgb1tmaWVsZF0sIG9iaik7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=