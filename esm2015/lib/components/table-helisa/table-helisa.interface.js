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
const EventScope = {
    USER: 0, CODE_CALL: 1,
};
export { EventScope };
EventScope[EventScope.USER] = 'USER';
EventScope[EventScope.CODE_CALL] = 'CODE_CALL';
/** @enum {number} */
const TotalType = {
    SUM: 0, AVERAGE: 1, COUNT: 2,
};
export { TotalType };
TotalType[TotalType.SUM] = 'SUM';
TotalType[TotalType.AVERAGE] = 'AVERAGE';
TotalType[TotalType.COUNT] = 'COUNT';
/** @enum {number} */
const ChangeColumnConfigurationType = {
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
const TableHelisaType = {
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
export class ColumnConfigUtil {
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    static getValue(obj, column) {
        return column.name.split('.').reduce((/**
         * @param {?} o
         * @param {?} field
         * @return {?}
         */
        (o, field) => o && o[field]), obj);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsa0NBWUM7OztJQVhDLDRCQUFhOztJQUNiLDZCQUFlOztJQUNmLCtCQUFrQjs7SUFDbEIsZ0NBQW1COztJQUNuQixpQ0FBb0I7O0lBQ3BCLGlDQUFzQjs7SUFDdEIsa0NBQXFCOztJQUNyQixxQ0FBOEI7O0lBQzlCLGdDQUFrQjs7SUFDbEIsb0NBQXNCOztJQUN0Qix1Q0FBeUI7Ozs7O0FBRzNCLGtDQUdDOzs7SUFGQyw0QkFBYTs7SUFDYixrQ0FBbUI7Ozs7SUFJbkIsT0FBSSxFQUFFLFlBQVM7Ozs7Ozs7SUFJZixNQUFHLEVBQUUsVUFBTyxFQUFFLFFBQUs7Ozs7Ozs7O0lBSW5CLE9BQUksRUFBRSxVQUFPLEVBQUUsUUFBSzs7Ozs7Ozs7O0FBR3RCLGlDQUlDOzs7SUFIQyw2QkFBcUI7O0lBQ3JCLDJDQUEwQzs7SUFDMUMsMkJBQW9DOzs7OztBQUd0QyxzQ0FHQzs7O0lBRkMsa0NBQXFCOztJQUNyQixpQ0FBYzs7Ozs7QUFHaEIsZ0NBR0M7OztJQUZDLHlCQUFZOztJQUNaLDJCQUFjOzs7OztBQUdoQixpQ0FHQzs7O0lBRkMsMkJBQWE7O0lBQ2IsMkNBQTBDOzs7OztBQUc1Qyx3Q0FHQzs7O0lBRkMsa0NBQWE7O0lBQ2Isa0NBQVU7Ozs7OztBQUdaLGlDQUdDOzs7SUFGQSw0QkFBUzs7SUFDVCw0QkFBYzs7Ozs7O0FBR2Ysa0NBR0M7OztJQUZDLDZCQUFTOztJQUNULDZCQUFrQjs7OztJQUlsQixTQUFNLEVBQUUsUUFBSzs7Ozs7Ozs7QUFJZiwwQkFHRTs7O0lBRkEsc0JBQXFCOztJQUNyQixtQkFBUzs7Ozs7QUFHVixzQ0FHQzs7O0lBRkMsb0NBQWM7O0lBQ2QscUNBQWlCOzs7OztBQUduQixxQ0FJQTs7O0lBSEMsaUNBQXFCOztJQUNyQiwrQkFBVTs7SUFDVixtQ0FBZ0I7Ozs7OztBQUlsQixNQUFNLE9BQWdCLGdCQUFnQjs7Ozs7O0lBQ3BDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBUSxFQUFFLE1BQW9CO1FBQzVDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTb3J0RGlyZWN0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sdW1uQ29uZmlnIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgc29ydGFibGU/OiBib29sZWFuO1xyXG4gIGdyb3VwYWJsZT86IGJvb2xlYW47XHJcbiAgdG90YWxUeXBlPzogVG90YWxUeXBlO1xyXG4gIHNlYXJjaGFibGU/OiBib29sZWFuO1xyXG4gIHNvcnREaXJlY3Rpb24/OiBTb3J0RGlyZWN0aW9uO1xyXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xyXG4gIGNvbHNwYW5UaXRsZT86IG51bWJlcjtcclxuICBjb2xzcGFuU3VidGl0bGU/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkUm93QnV0dG9ueyAgXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHNob3dCdXR0b246Ym9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXZlbnRTY29wZSB7XHJcbiAgVVNFUiwgQ09ERV9DQUxMXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRvdGFsVHlwZSB7XHJcbiAgU1VNLCBBVkVSQUdFLCBDT1VOVFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZSB7XHJcbiAgU09SVCwgVU5LTk9XTiwgVE9UQUxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudENvbHVtbiB7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgY29sdW1uQ29uZmlndXJhdGlvbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XHJcbiAgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG90YWxUYWJsZUhlbGlzYSB7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb3RhbEdyb3VwIHtcclxuICBzdW06IG51bWJlcjtcclxuICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U2VhcmNoIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY29sdW1uQ29uZmlndXJhdGlvbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRhYmxlSGVsaXNhIHtcclxuICBwYWdlOiBudW1iZXI7XHJcbiAgYm9keTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyb3BFbGVtZW50PFQ+e1xyXG4gdmFsdWU6IFQ7XHJcbiBvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdE9iamVjdDxUPiB7XHJcbiAgdmFsdWU6IFQ7XHJcbiAgc2NvcGU6IEV2ZW50U2NvcGU7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlSGVsaXNhVHlwZSB7XHJcbiAgUkVNT1RFLCBMT0NBTFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDZWxsIHtcclxuICBjb2x1bW46IENvbHVtbkNvbmZpZztcclxuICByb3c6IGFueTtcclxuIH1cclxuXHJcbiBleHBvcnQgaW50ZXJmYWNlIENvbmZpZ0NlbGxTdHlsZXN7XHJcbiAgIGNlbGxEYXRhOiBhbnk7XHJcbiAgIGNsYXNzQ2VsbDogc3RyaW5nIFxyXG4gfVxyXG5cclxuIGV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnUm93U3R5bGVze1xyXG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xyXG4gIGRhdGE6IGFueSxcclxuICBjbGFzc1Jvdzogc3RyaW5nIFxyXG59XHJcblxyXG4vL0BkeW5hbWljXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb2x1bW5Db25maWdVdGlsIHtcclxuICBzdGF0aWMgZ2V0VmFsdWUob2JqOiBhbnksIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogYW55IHtcclxuICAgIHJldHVybiBjb2x1bW4ubmFtZS5zcGxpdCgnLicpLnJlZHVjZSgobywgZmllbGQpID0+IG8gJiYgb1tmaWVsZF0sIG9iaik7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=