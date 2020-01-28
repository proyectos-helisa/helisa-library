/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
/**
 * @record
 * @template T
 */
export function TableHelisaServiceInfo() { }
if (false) {
    /** @type {?} */
    TableHelisaServiceInfo.prototype.obj;
    /** @type {?|undefined} */
    TableHelisaServiceInfo.prototype.table;
}
/**
 * @template T
 */
export class TableHelisaService {
    constructor() {
        this.emitChangeSource = new Subject();
        this.emitNextPage = new Subject();
        this.totalReturn = this.emitChangeSource.asObservable();
        this.nextPageReturn = this.emitNextPage.asObservable();
        this.emitVisibleButton$ = new Subject();
        /**
         * Observable para saber si se debe mostrar o esconder el boton de add row
         */
        this.emitVisibleButton = this.emitVisibleButton$.asObservable();
    }
    /**
     * @param {?} total
     * @param {?=} table
     * @return {?}
     */
    setTotal(total, table) {
        this.emitChangeSource.next({ obj: total, table: table });
    }
    /**
     * @param {?} page
     * @param {?=} table
     * @return {?}
     */
    addPage(page, table) {
        this.emitNextPage.next({ obj: page, table: table });
    }
    /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param {?} change indicar si se muestra o no el boton de add row de la tabla
     * @return {?}
     */
    changeVisibilityButton(change) {
        this.emitVisibleButton$.next(change);
    }
}
TableHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ TableHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function TableHelisaService_Factory() { return new TableHelisaService(); }, token: TableHelisaService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TableHelisaService.prototype.emitChangeSource;
    /**
     * @type {?}
     * @private
     */
    TableHelisaService.prototype.emitNextPage;
    /** @type {?} */
    TableHelisaService.prototype.totalReturn;
    /** @type {?} */
    TableHelisaService.prototype.nextPageReturn;
    /**
     * @type {?}
     * @private
     */
    TableHelisaService.prototype.emitVisibleButton$;
    /**
     * Observable para saber si se debe mostrar o esconder el boton de add row
     * @type {?}
     */
    TableHelisaService.prototype.emitVisibleButton;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBOEIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFJMUQsNENBR0M7OztJQUZDLHFDQUFPOztJQUNQLHVDQUFrQzs7Ozs7QUFNcEMsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUtVLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUE0QyxDQUFDO1FBQzNFLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQStCLENBQUM7UUFFbEUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsbUJBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBVzFDLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7Ozs7UUFJcEQsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBVTVEOzs7Ozs7SUF2QkMsUUFBUSxDQUFDLEtBQXVCLEVBQUUsS0FBK0I7UUFDL0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVMsRUFBRSxLQUErQjtRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBYUQsc0JBQXNCLENBQUMsTUFBYztRQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQWhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7O0lBR0MsOENBQW1GOzs7OztJQUNuRiwwQ0FBa0U7O0lBRWxFLHlDQUFtRDs7SUFDbkQsNENBQWtEOzs7OztJQVdsRCxnREFBb0Q7Ozs7O0lBSXBELCtDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtUb3RhbFRhYmxlSGVsaXNhfSBmcm9tIFwiLi90YWJsZS1oZWxpc2EuaW50ZXJmYWNlXCI7XG5pbXBvcnQge1RhYmxlSGVsaXNhQ29tcG9uZW50fSBmcm9tIFwiLi90YWJsZS1oZWxpc2EuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUPiB7XG4gIG9iajogVDtcbiAgdGFibGU/OiBUYWJsZUhlbGlzYUNvbXBvbmVudDxhbnk+O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbGlzYVNlcnZpY2U8VD4ge1xuXG4gIHByaXZhdGUgZW1pdENoYW5nZVNvdXJjZSA9IG5ldyBTdWJqZWN0PFRhYmxlSGVsaXNhU2VydmljZUluZm88VG90YWxUYWJsZUhlbGlzYT4+KCk7XG4gIHByaXZhdGUgZW1pdE5leHRQYWdlID0gbmV3IFN1YmplY3Q8VGFibGVIZWxpc2FTZXJ2aWNlSW5mbzxUW10+PigpO1xuXG4gIHRvdGFsUmV0dXJuID0gdGhpcy5lbWl0Q2hhbmdlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICBuZXh0UGFnZVJldHVybiA9IHRoaXMuZW1pdE5leHRQYWdlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHNldFRvdGFsKHRvdGFsOiBUb3RhbFRhYmxlSGVsaXNhLCB0YWJsZT86IFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+KSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlU291cmNlLm5leHQoe29iajogdG90YWwsIHRhYmxlOiB0YWJsZX0pO1xuICB9XG5cbiAgYWRkUGFnZShwYWdlOiBUW10sIHRhYmxlPzogVGFibGVIZWxpc2FDb21wb25lbnQ8VD4pIHtcbiAgICB0aGlzLmVtaXROZXh0UGFnZS5uZXh0KHtvYmo6IHBhZ2UsIHRhYmxlOiB0YWJsZX0pO1xuICB9XG5cblxuICBwcml2YXRlIGVtaXRWaXNpYmxlQnV0dG9uJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIHBhcmEgc2FiZXIgc2kgc2UgZGViZSBtb3N0cmFyIG8gZXNjb25kZXIgZWwgYm90b24gZGUgYWRkIHJvd1xuICAgKi9cbiAgZW1pdFZpc2libGVCdXR0b24gPSB0aGlzLmVtaXRWaXNpYmxlQnV0dG9uJC5hc09ic2VydmFibGUoKTtcblxuICAvKipcbiAgICogcGFyYSBtb2RpZmljYXIgZWwgdmFsb3IgZGUgc2kgc2UgbXVlc3RyYSBvIG5vIGVsIGJvdG9uIGRlIGFkZCByb3cgZGUgbGEgdGFibGFcbiAgICogQHBhcmFtIGNoYW5nZSBpbmRpY2FyIHNpIHNlIG11ZXN0cmEgbyBubyBlbCBib3RvbiBkZSBhZGQgcm93IGRlIGxhIHRhYmxhXG4gICAqL1xuICBjaGFuZ2VWaXNpYmlsaXR5QnV0dG9uKGNoYW5nZTpib29sZWFuKXtcbiAgICB0aGlzLmVtaXRWaXNpYmxlQnV0dG9uJC5uZXh0KGNoYW5nZSk7XG4gIH1cblxufVxuIl19