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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsa0NBU0M7OztJQVJDLDRCQUFhOztJQUNiLDZCQUFjOztJQUNkLCtCQUFrQjs7SUFDbEIsZ0NBQW1COztJQUNuQixpQ0FBb0I7O0lBQ3BCLGlDQUFzQjs7SUFDdEIsa0NBQXFCOztJQUNyQixxQ0FBOEI7Ozs7O0FBR2hDLGtDQUdDOzs7SUFGQyw0QkFBYTs7SUFDYixrQ0FBbUI7Ozs7SUFJbkIsTUFBRyxFQUFFLFVBQU8sRUFBRSxRQUFLOzs7Ozs7OztJQUluQixPQUFJLEVBQUUsVUFBTyxFQUFFLFFBQUs7Ozs7Ozs7OztBQUd0QixpQ0FJQzs7O0lBSEMsNkJBQXFCOztJQUNyQiwyQ0FBMEM7O0lBQzFDLDJCQUFvQzs7Ozs7QUFHdEMsc0NBR0M7OztJQUZDLGtDQUFxQjs7SUFDckIsaUNBQWM7Ozs7O0FBR2hCLGdDQUdDOzs7SUFGQyx5QkFBWTs7SUFDWiwyQkFBYzs7Ozs7QUFHaEIsaUNBR0M7OztJQUZDLDJCQUFhOztJQUNiLDJDQUEwQzs7Ozs7QUFHNUMsd0NBR0M7OztJQUZDLGtDQUFhOztJQUNiLGtDQUFVOzs7Ozs7QUFHWixpQ0FHQzs7O0lBRkEsNEJBQVM7O0lBQ1QsNEJBQWM7Ozs7SUFJYixTQUFNLEVBQUUsUUFBSzs7Ozs7Ozs7QUFJZiwwQkFHRTs7O0lBRkEsc0JBQXFCOztJQUNyQixtQkFBUzs7Ozs7QUFHVixzQ0FHQzs7O0lBRkMsb0NBQWM7O0lBQ2QscUNBQWlCOzs7OztBQUduQixxQ0FJQTs7O0lBSEMsaUNBQXFCOztJQUNyQiwrQkFBVTs7SUFDVixtQ0FBZ0I7Ozs7OztBQUlsQixNQUFNLE9BQWdCLGdCQUFnQjs7Ozs7O0lBQ3BDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBUSxFQUFFLE1BQW9CO1FBQzVDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTb3J0RGlyZWN0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sdW1uQ29uZmlnIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB2aXNpYmxlPzogYm9vbGVhbjtcclxuICBzb3J0YWJsZT86IGJvb2xlYW47XHJcbiAgZ3JvdXBhYmxlPzogYm9vbGVhbjtcclxuICB0b3RhbFR5cGU/OiBUb3RhbFR5cGU7XHJcbiAgc2VhcmNoYWJsZT86IGJvb2xlYW47XHJcbiAgc29ydERpcmVjdGlvbj86IFNvcnREaXJlY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkUm93QnV0dG9ueyAgXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHNob3dCdXR0b246Ym9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVG90YWxUeXBlIHtcclxuICBTVU0sIEFWRVJBR0UsIENPVU5UXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlIHtcclxuICBTT1JULCBVTktOT1dOLCBUT1RBTFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50Q29sdW1uIHtcclxuICBjb2x1bW46IENvbHVtbkNvbmZpZztcclxuICBjb2x1bW5Db25maWd1cmF0aW9uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxuICB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb3RhbFRhYmxlSGVsaXNhIHtcclxuICBjb2x1bW46IENvbHVtbkNvbmZpZztcclxuICB2YWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvdGFsR3JvdXAge1xyXG4gIHN1bTogbnVtYmVyO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTZWFyY2gge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBjb2x1bW5Db25maWd1cmF0aW9uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VGFibGVIZWxpc2Ege1xyXG4gIHBhZ2U6IG51bWJlcjtcclxuICBib2R5OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcEVsZW1lbnQ8VD57XHJcbiB2YWx1ZTogVDtcclxuIG9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlSGVsaXNhVHlwZSB7XHJcbiAgUkVNT1RFLCBMT0NBTFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDZWxsIHtcclxuICBjb2x1bW46IENvbHVtbkNvbmZpZztcclxuICByb3c6IGFueTtcclxuIH1cclxuXHJcbiBleHBvcnQgaW50ZXJmYWNlIENvbmZpZ0NlbGxTdHlsZXN7XHJcbiAgIGNlbGxEYXRhOiBhbnk7XHJcbiAgIGNsYXNzQ2VsbDogc3RyaW5nIFxyXG4gfVxyXG5cclxuIGV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnUm93U3R5bGVze1xyXG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xyXG4gIGRhdGE6IGFueSxcclxuICBjbGFzc1Jvdzogc3RyaW5nIFxyXG59XHJcblxyXG4vL0BkeW5hbWljXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb2x1bW5Db25maWdVdGlsIHtcclxuICBzdGF0aWMgZ2V0VmFsdWUob2JqOiBhbnksIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogYW55IHtcclxuICAgIHJldHVybiBjb2x1bW4ubmFtZS5zcGxpdCgnLicpLnJlZHVjZSgobywgZmllbGQpID0+IG8gJiYgb1tmaWVsZF0sIG9iaik7XHJcbiAgfVxyXG59XHJcbiJdfQ==