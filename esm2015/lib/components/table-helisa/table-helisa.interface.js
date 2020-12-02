/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ColumnType = {
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
const TableHelisaType = {
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
export class ColumnConfigUtil {
    /**
     * @param {?} obj
     * @param {?} column
     * @return {?}
     */
    getValue(obj, column) {
        return column.name.split('.').reduce((/**
         * @param {?} o
         * @param {?} field
         * @return {?}
         */
        (o, field) => o && o[field]), obj);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFJRSxTQUFNLEVBQUUsTUFBRzs7Ozs7Ozs7QUFHYixrQ0FjQzs7O0lBYkMsNEJBQWE7O0lBQ2IsNkJBQWU7O0lBQ2YsK0JBQWtCOztJQUNsQixnQ0FBbUI7O0lBQ25CLGlDQUFvQjs7SUFDcEIsaUNBQXNCOztJQUN0QixrQ0FBcUI7O0lBQ3JCLHFDQUE4Qjs7SUFDOUIsZ0NBQWtCOztJQUNsQixvQ0FBc0I7O0lBQ3RCLHVDQUF5Qjs7SUFDekIsbUNBQXFCOztJQUNyQixrQ0FBd0I7Ozs7O0FBRzFCLGtDQUdDOzs7SUFGQyw0QkFBYTs7SUFDYixrQ0FBb0I7Ozs7SUFJcEIsT0FBSSxFQUFFLFlBQVM7Ozs7Ozs7SUFJZixNQUFHLEVBQUUsVUFBTyxFQUFFLFFBQUs7Ozs7Ozs7O0lBSW5CLE9BQUksRUFBRSxVQUFPLEVBQUUsUUFBSzs7Ozs7Ozs7O0FBR3RCLGlDQUlDOzs7SUFIQyw2QkFBcUI7O0lBQ3JCLDJDQUEwQzs7SUFDMUMsMkJBQW9DOzs7OztBQUd0QyxzQ0FHQzs7O0lBRkMsa0NBQXFCOztJQUNyQixpQ0FBYzs7Ozs7QUFHaEIsZ0NBR0M7OztJQUZDLHlCQUFZOztJQUNaLDJCQUFjOzs7OztBQUdoQixpQ0FHQzs7O0lBRkMsMkJBQWE7O0lBQ2IsMkNBQTBDOzs7Ozs7QUFHNUMsd0NBR0M7OztJQUZDLGtDQUFhOztJQUNiLGtDQUFhOzs7Ozs7QUFHZixpQ0FHQzs7O0lBRkEsNEJBQVM7O0lBQ1QsNEJBQWM7Ozs7OztBQUdmLGtDQUdDOzs7SUFGQyw2QkFBUzs7SUFDVCw2QkFBa0I7Ozs7SUFJbEIsU0FBTSxFQUFFLFFBQUs7Ozs7Ozs7OztBQUlmLDBCQUdFOzs7SUFGQSxzQkFBcUI7O0lBQ3JCLG1CQUFvQjs7Ozs7O0FBR3RCLHNDQUdFOzs7SUFGQyxvQ0FBWTs7SUFDWixxQ0FBa0I7Ozs7OztBQUdyQixxQ0FJQzs7O0lBSEMsaUNBQXFCOztJQUNyQiwrQkFBYTs7SUFDYixtQ0FBaUI7Ozs7OztBQUluQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFFM0IsUUFBUSxDQUFDLEdBQU0sRUFBRSxNQUFvQjtRQUNuQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFJLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U29ydERpcmVjdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBSb3dEYXRhIH0gZnJvbSAnLi90YWJsZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xyXG4gIE5PUk1BTCwgVVJMXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sdW1uQ29uZmlnIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgc29ydGFibGU/OiBib29sZWFuO1xyXG4gIGdyb3VwYWJsZT86IGJvb2xlYW47XHJcbiAgdG90YWxUeXBlPzogVG90YWxUeXBlO1xyXG4gIHNlYXJjaGFibGU/OiBib29sZWFuO1xyXG4gIHNvcnREaXJlY3Rpb24/OiBTb3J0RGlyZWN0aW9uO1xyXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xyXG4gIGNvbHNwYW5UaXRsZT86IG51bWJlcjtcclxuICBjb2xzcGFuU3VidGl0bGU/OiBudW1iZXI7XHJcbiAgY29sdW1uU3R5bGU/OiBzdHJpbmc7XHJcbiAgY29sdW1uVHlwZT86IENvbHVtblR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkUm93QnV0dG9uIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgc2hvd0J1dHRvbjogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXZlbnRTY29wZSB7XHJcbiAgVVNFUiwgQ09ERV9DQUxMXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRvdGFsVHlwZSB7XHJcbiAgU1VNLCBBVkVSQUdFLCBDT1VOVFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZSB7XHJcbiAgU09SVCwgVU5LTk9XTiwgVE9UQUxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudENvbHVtbiB7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgY29sdW1uQ29uZmlndXJhdGlvbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XHJcbiAgdHlwZTogQ2hhbmdlQ29sdW1uQ29uZmlndXJhdGlvblR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG90YWxUYWJsZUhlbGlzYSB7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb3RhbEdyb3VwIHtcclxuICBzdW06IG51bWJlcjtcclxuICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U2VhcmNoIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY29sdW1uQ29uZmlndXJhdGlvbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRhYmxlSGVsaXNhPFQ+IHtcclxuICBwYWdlOiBudW1iZXI7XHJcbiAgYm9keToge30gfCBUO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyb3BFbGVtZW50PFQ+IHtcclxuIHZhbHVlOiBUO1xyXG4gb3JkZXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RPYmplY3Q8VD4ge1xyXG4gIHZhbHVlOiBUO1xyXG4gIHNjb3BlOiBFdmVudFNjb3BlO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUYWJsZUhlbGlzYVR5cGUge1xyXG4gIFJFTU9URSwgTE9DQUxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbDxUPiB7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgcm93OiBSb3dEYXRhPFQ+IHwgVDtcclxuIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnQ2VsbFN0eWxlczxUPiB7XHJcbiAgIGNlbGxEYXRhOiBUO1xyXG4gICBjbGFzc0NlbGw6IHN0cmluZztcclxuIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnUm93U3R5bGVzPFQ+IHtcclxuICBjb2x1bW46IENvbHVtbkNvbmZpZztcclxuICBkYXRhOiB7fSB8IFQ7XHJcbiAgY2xhc3NSb3c6IHN0cmluZztcclxufVxyXG5cclxuLy8gQGR5bmFtaWNcclxuZXhwb3J0IGNsYXNzIENvbHVtbkNvbmZpZ1V0aWw8VD4ge1xyXG5cclxuICBnZXRWYWx1ZShvYmo6IFQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogVCB8IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICByZXR1cm4gY29sdW1uLm5hbWUuc3BsaXQoJy4nKS5yZWR1Y2UoKG86IFQsIGZpZWxkOiBzdHJpbmcpID0+IG8gJiYgb1tmaWVsZF0sIG9iaik7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=