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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFJRSxTQUFNLEVBQUUsTUFBRzs7Ozs7Ozs7QUFHYixrQ0FjQzs7O0lBYkMsNEJBQWE7O0lBQ2IsNkJBQWU7O0lBQ2YsK0JBQWtCOztJQUNsQixnQ0FBbUI7O0lBQ25CLGlDQUFvQjs7SUFDcEIsaUNBQXNCOztJQUN0QixrQ0FBcUI7O0lBQ3JCLHFDQUE4Qjs7SUFDOUIsZ0NBQWtCOztJQUNsQixvQ0FBc0I7O0lBQ3RCLHVDQUF5Qjs7SUFDekIsbUNBQXFCOztJQUNyQixrQ0FBd0I7Ozs7O0FBRzFCLGtDQUdDOzs7SUFGQyw0QkFBYTs7SUFDYixrQ0FBb0I7Ozs7SUFJcEIsT0FBSSxFQUFFLFlBQVM7Ozs7Ozs7SUFJZixNQUFHLEVBQUUsVUFBTyxFQUFFLFFBQUs7Ozs7Ozs7O0lBSW5CLE9BQUksRUFBRSxVQUFPLEVBQUUsUUFBSzs7Ozs7Ozs7O0FBR3RCLGlDQUlDOzs7SUFIQyw2QkFBcUI7O0lBQ3JCLDJDQUEwQzs7SUFDMUMsMkJBQW9DOzs7OztBQUd0QyxzQ0FHQzs7O0lBRkMsa0NBQXFCOztJQUNyQixpQ0FBYzs7Ozs7QUFHaEIsZ0NBR0M7OztJQUZDLHlCQUFZOztJQUNaLDJCQUFjOzs7OztBQUdoQixpQ0FHQzs7O0lBRkMsMkJBQWE7O0lBQ2IsMkNBQTBDOzs7Ozs7QUFHNUMsd0NBR0M7OztJQUZDLGtDQUFhOztJQUNiLGtDQUFhOzs7Ozs7QUFHZixpQ0FHQzs7O0lBRkEsNEJBQVM7O0lBQ1QsNEJBQWM7Ozs7OztBQUdmLGtDQUdDOzs7SUFGQyw2QkFBUzs7SUFDVCw2QkFBa0I7Ozs7SUFJbEIsU0FBTSxFQUFFLFFBQUs7Ozs7Ozs7OztBQUlmLDBCQUdFOzs7SUFGQSxzQkFBcUI7O0lBQ3JCLG1CQUFvQjs7Ozs7O0FBR3RCLHNDQUdFOzs7SUFGQyxvQ0FBWTs7SUFDWixxQ0FBa0I7Ozs7OztBQUdyQixxQ0FJQzs7O0lBSEMsaUNBQXFCOztJQUNyQiwrQkFBYTs7SUFDYixtQ0FBaUI7Ozs7OztBQUluQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFFM0IsUUFBUSxDQUFDLEdBQU0sRUFBRSxNQUFvQjtRQUNuQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFJLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U29ydERpcmVjdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgUm93RGF0YSB9IGZyb20gJy4vdGFibGUtaGVsaXNhLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xuICBOT1JNQUwsIFVSTFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbHVtbkNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHZpc2libGU/OiBib29sZWFuO1xuICBzb3J0YWJsZT86IGJvb2xlYW47XG4gIGdyb3VwYWJsZT86IGJvb2xlYW47XG4gIHRvdGFsVHlwZT86IFRvdGFsVHlwZTtcbiAgc2VhcmNoYWJsZT86IGJvb2xlYW47XG4gIHNvcnREaXJlY3Rpb24/OiBTb3J0RGlyZWN0aW9uO1xuICBzdWJ0aXRsZT86IHN0cmluZztcbiAgY29sc3BhblRpdGxlPzogbnVtYmVyO1xuICBjb2xzcGFuU3VidGl0bGU/OiBudW1iZXI7XG4gIGNvbHVtblN0eWxlPzogc3RyaW5nO1xuICBjb2x1bW5UeXBlPzogQ29sdW1uVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRSb3dCdXR0b24ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHNob3dCdXR0b246IGJvb2xlYW47XG59XG5cbmV4cG9ydCBlbnVtIEV2ZW50U2NvcGUge1xuICBVU0VSLCBDT0RFX0NBTExcbn1cblxuZXhwb3J0IGVudW0gVG90YWxUeXBlIHtcbiAgU1VNLCBBVkVSQUdFLCBDT1VOVFxufVxuXG5leHBvcnQgZW51bSBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZSB7XG4gIFNPUlQsIFVOS05PV04sIFRPVEFMXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRDb2x1bW4ge1xuICBjb2x1bW46IENvbHVtbkNvbmZpZztcbiAgY29sdW1uQ29uZmlndXJhdGlvbnM6IEFycmF5PENvbHVtbkNvbmZpZz47XG4gIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvdGFsVGFibGVIZWxpc2Ege1xuICBjb2x1bW46IENvbHVtbkNvbmZpZztcbiAgdmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb3RhbEdyb3VwIHtcbiAgc3VtOiBudW1iZXI7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTZWFyY2gge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNvbHVtbkNvbmZpZ3VyYXRpb25zOiBBcnJheTxDb2x1bW5Db25maWc+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RUYWJsZUhlbGlzYTxUPiB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgYm9keToge30gfCBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3BFbGVtZW50PFQ+IHtcbiB2YWx1ZTogVDtcbiBvcmRlcjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdE9iamVjdDxUPiB7XG4gIHZhbHVlOiBUO1xuICBzY29wZTogRXZlbnRTY29wZTtcbn1cblxuZXhwb3J0IGVudW0gVGFibGVIZWxpc2FUeXBlIHtcbiAgUkVNT1RFLCBMT0NBTFxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbDxUPiB7XG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xuICByb3c6IFJvd0RhdGE8VD4gfCBUO1xuIH1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdDZWxsU3R5bGVzPFQ+IHtcbiAgIGNlbGxEYXRhOiBUO1xuICAgY2xhc3NDZWxsOiBzdHJpbmc7XG4gfVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1Jvd1N0eWxlczxUPiB7XG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xuICBkYXRhOiB7fSB8IFQ7XG4gIGNsYXNzUm93OiBzdHJpbmc7XG59XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgQ29sdW1uQ29uZmlnVXRpbDxUPiB7XG5cbiAgZ2V0VmFsdWUob2JqOiBULCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IFQgfCBudW1iZXIgfCBzdHJpbmcge1xuICAgIHJldHVybiBjb2x1bW4ubmFtZS5zcGxpdCgnLicpLnJlZHVjZSgobzogVCwgZmllbGQ6IHN0cmluZykgPT4gbyAmJiBvW2ZpZWxkXSwgb2JqKTtcbiAgfVxufVxuXG4iXX0=