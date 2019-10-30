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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBOEIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFJMUQsNENBR0M7OztJQUZDLHFDQUFPOztJQUNQLHVDQUFrQzs7Ozs7QUFNcEMsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUtVLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUE0QyxDQUFDO1FBQzNFLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQStCLENBQUM7UUFFbEUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsbUJBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBVzFDLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7Ozs7UUFJcEQsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBVTVEOzs7Ozs7SUF2QkMsUUFBUSxDQUFDLEtBQXVCLEVBQUUsS0FBK0I7UUFDL0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVMsRUFBRSxLQUErQjtRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBYUQsc0JBQXNCLENBQUMsTUFBYztRQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQWhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7O0lBR0MsOENBQW1GOzs7OztJQUNuRiwwQ0FBa0U7O0lBRWxFLHlDQUFtRDs7SUFDbkQsNENBQWtEOzs7OztJQVdsRCxnREFBb0Q7Ozs7O0lBSXBELCtDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7VG90YWxUYWJsZUhlbGlzYX0gZnJvbSBcIi4vdGFibGUtaGVsaXNhLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1RhYmxlSGVsaXNhQ29tcG9uZW50fSBmcm9tIFwiLi90YWJsZS1oZWxpc2EuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlSGVsaXNhU2VydmljZUluZm88VD4ge1xyXG4gIG9iajogVDtcclxuICB0YWJsZT86IFRhYmxlSGVsaXNhQ29tcG9uZW50PGFueT47XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlSGVsaXNhU2VydmljZTxUPiB7XHJcblxyXG4gIHByaXZhdGUgZW1pdENoYW5nZVNvdXJjZSA9IG5ldyBTdWJqZWN0PFRhYmxlSGVsaXNhU2VydmljZUluZm88VG90YWxUYWJsZUhlbGlzYT4+KCk7XHJcbiAgcHJpdmF0ZSBlbWl0TmV4dFBhZ2UgPSBuZXcgU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4+KCk7XHJcblxyXG4gIHRvdGFsUmV0dXJuID0gdGhpcy5lbWl0Q2hhbmdlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIG5leHRQYWdlUmV0dXJuID0gdGhpcy5lbWl0TmV4dFBhZ2UuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHNldFRvdGFsKHRvdGFsOiBUb3RhbFRhYmxlSGVsaXNhLCB0YWJsZT86IFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+KSB7XHJcbiAgICB0aGlzLmVtaXRDaGFuZ2VTb3VyY2UubmV4dCh7b2JqOiB0b3RhbCwgdGFibGU6IHRhYmxlfSk7XHJcbiAgfVxyXG5cclxuICBhZGRQYWdlKHBhZ2U6IFRbXSwgdGFibGU/OiBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPikge1xyXG4gICAgdGhpcy5lbWl0TmV4dFBhZ2UubmV4dCh7b2JqOiBwYWdlLCB0YWJsZTogdGFibGV9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGVtaXRWaXNpYmxlQnV0dG9uJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgLyoqXHJcbiAgICogT2JzZXJ2YWJsZSBwYXJhIHNhYmVyIHNpIHNlIGRlYmUgbW9zdHJhciBvIGVzY29uZGVyIGVsIGJvdG9uIGRlIGFkZCByb3dcclxuICAgKi9cclxuICBlbWl0VmlzaWJsZUJ1dHRvbiA9IHRoaXMuZW1pdFZpc2libGVCdXR0b24kLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAvKipcclxuICAgKiBwYXJhIG1vZGlmaWNhciBlbCB2YWxvciBkZSBzaSBzZSBtdWVzdHJhIG8gbm8gZWwgYm90b24gZGUgYWRkIHJvdyBkZSBsYSB0YWJsYVxyXG4gICAqIEBwYXJhbSBjaGFuZ2UgaW5kaWNhciBzaSBzZSBtdWVzdHJhIG8gbm8gZWwgYm90b24gZGUgYWRkIHJvdyBkZSBsYSB0YWJsYVxyXG4gICAqL1xyXG4gIGNoYW5nZVZpc2liaWxpdHlCdXR0b24oY2hhbmdlOmJvb2xlYW4pe1xyXG4gICAgdGhpcy5lbWl0VmlzaWJsZUJ1dHRvbiQubmV4dChjaGFuZ2UpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19