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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHRSxTQUFNLEVBQUUsTUFBRzs7Ozs7Ozs7QUFHYixrQ0FjQzs7O0lBYkMsNEJBQWE7O0lBQ2IsNkJBQWU7O0lBQ2YsK0JBQWtCOztJQUNsQixnQ0FBbUI7O0lBQ25CLGlDQUFvQjs7SUFDcEIsaUNBQXNCOztJQUN0QixrQ0FBcUI7O0lBQ3JCLHFDQUE4Qjs7SUFDOUIsZ0NBQWtCOztJQUNsQixvQ0FBc0I7O0lBQ3RCLHVDQUF5Qjs7SUFDekIsbUNBQXFCOztJQUNyQixrQ0FBd0I7Ozs7O0FBRzFCLGtDQUdDOzs7SUFGQyw0QkFBYTs7SUFDYixrQ0FBbUI7Ozs7SUFJbkIsT0FBSSxFQUFFLFlBQVM7Ozs7Ozs7SUFJZixNQUFHLEVBQUUsVUFBTyxFQUFFLFFBQUs7Ozs7Ozs7O0lBSW5CLE9BQUksRUFBRSxVQUFPLEVBQUUsUUFBSzs7Ozs7Ozs7O0FBR3RCLGlDQUlDOzs7SUFIQyw2QkFBcUI7O0lBQ3JCLDJDQUEwQzs7SUFDMUMsMkJBQW9DOzs7OztBQUd0QyxzQ0FHQzs7O0lBRkMsa0NBQXFCOztJQUNyQixpQ0FBYzs7Ozs7QUFHaEIsZ0NBR0M7OztJQUZDLHlCQUFZOztJQUNaLDJCQUFjOzs7OztBQUdoQixpQ0FHQzs7O0lBRkMsMkJBQWE7O0lBQ2IsMkNBQTBDOzs7OztBQUc1Qyx3Q0FHQzs7O0lBRkMsa0NBQWE7O0lBQ2Isa0NBQVU7Ozs7OztBQUdaLGlDQUdDOzs7SUFGQSw0QkFBUzs7SUFDVCw0QkFBYzs7Ozs7O0FBR2Ysa0NBR0M7OztJQUZDLDZCQUFTOztJQUNULDZCQUFrQjs7OztJQUlsQixTQUFNLEVBQUUsUUFBSzs7Ozs7Ozs7QUFJZiwwQkFHRTs7O0lBRkEsc0JBQXFCOztJQUNyQixtQkFBUzs7Ozs7QUFHVixzQ0FHQzs7O0lBRkMsb0NBQWM7O0lBQ2QscUNBQWlCOzs7OztBQUduQixxQ0FJQTs7O0lBSEMsaUNBQXFCOztJQUNyQiwrQkFBVTs7SUFDVixtQ0FBZ0I7Ozs7OztBQUlsQjs7Ozs7O0lBQUE7SUFJQSxDQUFDOzs7Ozs7SUFIUSx5QkFBUTs7Ozs7SUFBZixVQUFnQixHQUFRLEVBQUUsTUFBb0I7UUFDNUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFKRCxJQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTb3J0RGlyZWN0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGVudW0gQ29sdW1uVHlwZSB7XG4gIE5PUk1BTCwgVVJMXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sdW1uQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgdmlzaWJsZT86IGJvb2xlYW47XG4gIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgZ3JvdXBhYmxlPzogYm9vbGVhbjtcbiAgdG90YWxUeXBlPzogVG90YWxUeXBlO1xuICBzZWFyY2hhYmxlPzogYm9vbGVhbjtcbiAgc29ydERpcmVjdGlvbj86IFNvcnREaXJlY3Rpb247XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuICBjb2xzcGFuVGl0bGU/OiBudW1iZXI7XG4gIGNvbHNwYW5TdWJ0aXRsZT86IG51bWJlcjtcbiAgY29sdW1uU3R5bGU/OiBzdHJpbmc7XG4gIGNvbHVtblR5cGU/OiBDb2x1bW5UeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZFJvd0J1dHRvbnsgIFxuICB0ZXh0OiBzdHJpbmc7XG4gIHNob3dCdXR0b246Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGVudW0gRXZlbnRTY29wZSB7XG4gIFVTRVIsIENPREVfQ0FMTFxufVxuXG5leHBvcnQgZW51bSBUb3RhbFR5cGUge1xuICBTVU0sIEFWRVJBR0UsIENPVU5UXG59XG5cbmV4cG9ydCBlbnVtIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlIHtcbiAgU09SVCwgVU5LTk9XTiwgVE9UQUxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudENvbHVtbiB7XG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xuICBjb2x1bW5Db25maWd1cmF0aW9uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcbiAgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG90YWxUYWJsZUhlbGlzYSB7XG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xuICB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvdGFsR3JvdXAge1xuICBzdW06IG51bWJlcjtcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudFNlYXJjaCB7XG4gIHRleHQ6IHN0cmluZztcbiAgY29sdW1uQ29uZmlndXJhdGlvbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRhYmxlSGVsaXNhIHtcbiAgcGFnZTogbnVtYmVyO1xuICBib2R5OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcEVsZW1lbnQ8VD57XG4gdmFsdWU6IFQ7XG4gb3JkZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RPYmplY3Q8VD4ge1xuICB2YWx1ZTogVDtcbiAgc2NvcGU6IEV2ZW50U2NvcGU7XG59XG5cbmV4cG9ydCBlbnVtIFRhYmxlSGVsaXNhVHlwZSB7XG4gIFJFTU9URSwgTE9DQUxcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIENlbGwge1xuICBjb2x1bW46IENvbHVtbkNvbmZpZztcbiAgcm93OiBhbnk7XG4gfVxuXG4gZXhwb3J0IGludGVyZmFjZSBDb25maWdDZWxsU3R5bGVze1xuICAgY2VsbERhdGE6IGFueTtcbiAgIGNsYXNzQ2VsbDogc3RyaW5nIFxuIH1cblxuIGV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnUm93U3R5bGVze1xuICBjb2x1bW46IENvbHVtbkNvbmZpZztcbiAgZGF0YTogYW55LFxuICBjbGFzc1Jvdzogc3RyaW5nIFxufVxuXG4vL0BkeW5hbWljXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29sdW1uQ29uZmlnVXRpbCB7XG4gIHN0YXRpYyBnZXRWYWx1ZShvYmo6IGFueSwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBhbnkge1xuICAgIHJldHVybiBjb2x1bW4ubmFtZS5zcGxpdCgnLicpLnJlZHVjZSgobywgZmllbGQpID0+IG8gJiYgb1tmaWVsZF0sIG9iaik7XG4gIH1cbn1cblxuIl19