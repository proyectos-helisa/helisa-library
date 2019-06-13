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
export function SelectedCell() { }
if (false) {
    /** @type {?} */
    SelectedCell.prototype.columnObj;
    /** @type {?} */
    SelectedCell.prototype.row;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0Esa0NBU0M7OztJQVJDLDRCQUFhOztJQUNiLDZCQUFjOztJQUNkLCtCQUFrQjs7SUFDbEIsZ0NBQW1COztJQUNuQixpQ0FBb0I7O0lBQ3BCLGlDQUFzQjs7SUFDdEIsa0NBQXFCOztJQUNyQixxQ0FBOEI7Ozs7SUFJOUIsTUFBRyxFQUFFLFVBQU8sRUFBRSxRQUFLOzs7Ozs7OztJQUluQixPQUFJLEVBQUUsVUFBTyxFQUFFLFFBQUs7Ozs7Ozs7OztBQUd0QixpQ0FJQzs7O0lBSEMsNkJBQXFCOztJQUNyQiwyQ0FBMEM7O0lBQzFDLDJCQUFvQzs7Ozs7QUFHdEMsc0NBR0M7OztJQUZDLGtDQUFxQjs7SUFDckIsaUNBQWM7Ozs7O0FBR2hCLGdDQUdDOzs7SUFGQyx5QkFBWTs7SUFDWiwyQkFBYzs7Ozs7QUFHaEIsaUNBR0M7OztJQUZDLDJCQUFhOztJQUNiLDJDQUEwQzs7Ozs7QUFHNUMsd0NBR0M7OztJQUZDLGtDQUFhOztJQUNiLGtDQUFVOzs7O0lBSVYsU0FBTSxFQUFFLFFBQUs7Ozs7Ozs7O0FBSWYsa0NBR0U7OztJQUZBLGlDQUFlOztJQUNmLDJCQUFTOzs7Ozs7QUFJWCxNQUFNLE9BQWdCLGdCQUFnQjs7Ozs7O0lBQ3BDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBUSxFQUFFLE1BQW9CO1FBQzVDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTb3J0RGlyZWN0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2x1bW5Db25maWcge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHZpc2libGU/OiBib29sZWFuO1xyXG4gIHNvcnRhYmxlPzogYm9vbGVhbjtcclxuICBncm91cGFibGU/OiBib29sZWFuO1xyXG4gIHRvdGFsVHlwZT86IFRvdGFsVHlwZTtcclxuICBzZWFyY2hhYmxlPzogYm9vbGVhbjtcclxuICBzb3J0RGlyZWN0aW9uPzogU29ydERpcmVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVG90YWxUeXBlIHtcclxuICBTVU0sIEFWRVJBR0UsIENPVU5UXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlIHtcclxuICBTT1JULCBVTktOT1dOLCBUT1RBTFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50Q29sdW1uIHtcclxuICBjb2x1bW46IENvbHVtbkNvbmZpZztcclxuICBjb2x1bW5Db25maWd1cmF0aW9uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxuICB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb3RhbFRhYmxlSGVsaXNhIHtcclxuICBjb2x1bW46IENvbHVtbkNvbmZpZztcclxuICB2YWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvdGFsR3JvdXAge1xyXG4gIHN1bTogbnVtYmVyO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTZWFyY2gge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBjb2x1bW5Db25maWd1cmF0aW9uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VGFibGVIZWxpc2Ege1xyXG4gIHBhZ2U6IG51bWJlcjtcclxuICBib2R5OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRhYmxlSGVsaXNhVHlwZSB7XHJcbiAgUkVNT1RFLCBMT0NBTFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RlZENlbGwge1xyXG4gIGNvbHVtbk9iajogYW55O1xyXG4gIHJvdzogYW55O1xyXG4gfVxyXG5cclxuLy9AZHluYW1pY1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29sdW1uQ29uZmlnVXRpbCB7XHJcbiAgc3RhdGljIGdldFZhbHVlKG9iajogYW55LCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IGFueSB7XHJcbiAgICByZXR1cm4gY29sdW1uLm5hbWUuc3BsaXQoJy4nKS5yZWR1Y2UoKG8sIGZpZWxkKSA9PiBvICYmIG9bZmllbGRdLCBvYmopO1xyXG4gIH1cclxufVxyXG4iXX0=