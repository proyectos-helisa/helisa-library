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
    /** @type {?|undefined} */
    ColumnConfig.prototype.columnStyle;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS1oZWxpc2EvdGFibGUtaGVsaXNhLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsa0NBYUM7OztJQVpDLDRCQUFhOztJQUNiLDZCQUFlOztJQUNmLCtCQUFrQjs7SUFDbEIsZ0NBQW1COztJQUNuQixpQ0FBb0I7O0lBQ3BCLGlDQUFzQjs7SUFDdEIsa0NBQXFCOztJQUNyQixxQ0FBOEI7O0lBQzlCLGdDQUFrQjs7SUFDbEIsb0NBQXNCOztJQUN0Qix1Q0FBeUI7O0lBQ3pCLG1DQUFxQjs7Ozs7QUFHdkIsa0NBR0M7OztJQUZDLDRCQUFhOztJQUNiLGtDQUFtQjs7OztJQUluQixPQUFJLEVBQUUsWUFBUzs7Ozs7OztJQUlmLE1BQUcsRUFBRSxVQUFPLEVBQUUsUUFBSzs7Ozs7Ozs7SUFJbkIsT0FBSSxFQUFFLFVBQU8sRUFBRSxRQUFLOzs7Ozs7Ozs7QUFHdEIsaUNBSUM7OztJQUhDLDZCQUFxQjs7SUFDckIsMkNBQTBDOztJQUMxQywyQkFBb0M7Ozs7O0FBR3RDLHNDQUdDOzs7SUFGQyxrQ0FBcUI7O0lBQ3JCLGlDQUFjOzs7OztBQUdoQixnQ0FHQzs7O0lBRkMseUJBQVk7O0lBQ1osMkJBQWM7Ozs7O0FBR2hCLGlDQUdDOzs7SUFGQywyQkFBYTs7SUFDYiwyQ0FBMEM7Ozs7O0FBRzVDLHdDQUdDOzs7SUFGQyxrQ0FBYTs7SUFDYixrQ0FBVTs7Ozs7O0FBR1osaUNBR0M7OztJQUZBLDRCQUFTOztJQUNULDRCQUFjOzs7Ozs7QUFHZixrQ0FHQzs7O0lBRkMsNkJBQVM7O0lBQ1QsNkJBQWtCOzs7O0lBSWxCLFNBQU0sRUFBRSxRQUFLOzs7Ozs7OztBQUlmLDBCQUdFOzs7SUFGQSxzQkFBcUI7O0lBQ3JCLG1CQUFTOzs7OztBQUdWLHNDQUdDOzs7SUFGQyxvQ0FBYzs7SUFDZCxxQ0FBaUI7Ozs7O0FBR25CLHFDQUlBOzs7SUFIQyxpQ0FBcUI7O0lBQ3JCLCtCQUFVOztJQUNWLG1DQUFnQjs7Ozs7O0FBSWxCOzs7Ozs7SUFBQTtJQUlBLENBQUM7Ozs7OztJQUhRLHlCQUFROzs7OztJQUFmLFVBQWdCLEdBQVEsRUFBRSxNQUFvQjtRQUM1QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSyxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBYixDQUFhLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NvcnREaXJlY3Rpb259IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2x1bW5Db25maWcge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICB2aXNpYmxlPzogYm9vbGVhbjtcclxuICBzb3J0YWJsZT86IGJvb2xlYW47XHJcbiAgZ3JvdXBhYmxlPzogYm9vbGVhbjtcclxuICB0b3RhbFR5cGU/OiBUb3RhbFR5cGU7XHJcbiAgc2VhcmNoYWJsZT86IGJvb2xlYW47XHJcbiAgc29ydERpcmVjdGlvbj86IFNvcnREaXJlY3Rpb247XHJcbiAgc3VidGl0bGU/OiBzdHJpbmc7XHJcbiAgY29sc3BhblRpdGxlPzogbnVtYmVyO1xyXG4gIGNvbHNwYW5TdWJ0aXRsZT86IG51bWJlcjtcclxuICBjb2x1bW5TdHlsZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRSb3dCdXR0b257ICBcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgc2hvd0J1dHRvbjpib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFdmVudFNjb3BlIHtcclxuICBVU0VSLCBDT0RFX0NBTExcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVG90YWxUeXBlIHtcclxuICBTVU0sIEFWRVJBR0UsIENPVU5UXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlIHtcclxuICBTT1JULCBVTktOT1dOLCBUT1RBTFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50Q29sdW1uIHtcclxuICBjb2x1bW46IENvbHVtbkNvbmZpZztcclxuICBjb2x1bW5Db25maWd1cmF0aW9uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxuICB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb3RhbFRhYmxlSGVsaXNhIHtcclxuICBjb2x1bW46IENvbHVtbkNvbmZpZztcclxuICB2YWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvdGFsR3JvdXAge1xyXG4gIHN1bTogbnVtYmVyO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTZWFyY2gge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBjb2x1bW5Db25maWd1cmF0aW9uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VGFibGVIZWxpc2Ege1xyXG4gIHBhZ2U6IG51bWJlcjtcclxuICBib2R5OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcEVsZW1lbnQ8VD57XHJcbiB2YWx1ZTogVDtcclxuIG9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0T2JqZWN0PFQ+IHtcclxuICB2YWx1ZTogVDtcclxuICBzY29wZTogRXZlbnRTY29wZTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGFibGVIZWxpc2FUeXBlIHtcclxuICBSRU1PVEUsIExPQ0FMXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENlbGwge1xyXG4gIGNvbHVtbjogQ29sdW1uQ29uZmlnO1xyXG4gIHJvdzogYW55O1xyXG4gfVxyXG5cclxuIGV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnQ2VsbFN0eWxlc3tcclxuICAgY2VsbERhdGE6IGFueTtcclxuICAgY2xhc3NDZWxsOiBzdHJpbmcgXHJcbiB9XHJcblxyXG4gZXhwb3J0IGludGVyZmFjZSBDb25maWdSb3dTdHlsZXN7XHJcbiAgY29sdW1uOiBDb2x1bW5Db25maWc7XHJcbiAgZGF0YTogYW55LFxyXG4gIGNsYXNzUm93OiBzdHJpbmcgXHJcbn1cclxuXHJcbi8vQGR5bmFtaWNcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbHVtbkNvbmZpZ1V0aWwge1xyXG4gIHN0YXRpYyBnZXRWYWx1ZShvYmo6IGFueSwgY29sdW1uOiBDb2x1bW5Db25maWcpOiBhbnkge1xyXG4gICAgcmV0dXJuIGNvbHVtbi5uYW1lLnNwbGl0KCcuJykucmVkdWNlKChvLCBmaWVsZCkgPT4gbyAmJiBvW2ZpZWxkXSwgb2JqKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==