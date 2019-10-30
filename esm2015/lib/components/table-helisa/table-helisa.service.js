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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBOEIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFJMUQsNENBR0M7OztJQUZDLHFDQUFPOztJQUNQLHVDQUFrQzs7Ozs7QUFNcEMsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUtVLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUE0QyxDQUFDO1FBQzNFLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQStCLENBQUM7UUFFbEUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsbUJBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBU25EOzs7Ozs7SUFQQyxRQUFRLENBQUMsS0FBdUIsRUFBRSxLQUErQjtRQUMvRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBUyxFQUFFLEtBQStCO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7WUFqQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7OztJQUdDLDhDQUFtRjs7Ozs7SUFDbkYsMENBQWtFOztJQUVsRSx5Q0FBbUQ7O0lBQ25ELDRDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7VG90YWxUYWJsZUhlbGlzYX0gZnJvbSBcIi4vdGFibGUtaGVsaXNhLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1RhYmxlSGVsaXNhQ29tcG9uZW50fSBmcm9tIFwiLi90YWJsZS1oZWxpc2EuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlSGVsaXNhU2VydmljZUluZm88VD4ge1xyXG4gIG9iajogVDtcclxuICB0YWJsZT86IFRhYmxlSGVsaXNhQ29tcG9uZW50PGFueT47XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlSGVsaXNhU2VydmljZTxUPiB7XHJcblxyXG4gIHByaXZhdGUgZW1pdENoYW5nZVNvdXJjZSA9IG5ldyBTdWJqZWN0PFRhYmxlSGVsaXNhU2VydmljZUluZm88VG90YWxUYWJsZUhlbGlzYT4+KCk7XHJcbiAgcHJpdmF0ZSBlbWl0TmV4dFBhZ2UgPSBuZXcgU3ViamVjdDxUYWJsZUhlbGlzYVNlcnZpY2VJbmZvPFRbXT4+KCk7XHJcblxyXG4gIHRvdGFsUmV0dXJuID0gdGhpcy5lbWl0Q2hhbmdlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIG5leHRQYWdlUmV0dXJuID0gdGhpcy5lbWl0TmV4dFBhZ2UuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHNldFRvdGFsKHRvdGFsOiBUb3RhbFRhYmxlSGVsaXNhLCB0YWJsZT86IFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+KSB7XHJcbiAgICB0aGlzLmVtaXRDaGFuZ2VTb3VyY2UubmV4dCh7b2JqOiB0b3RhbCwgdGFibGU6IHRhYmxlfSk7XHJcbiAgfVxyXG5cclxuICBhZGRQYWdlKHBhZ2U6IFRbXSwgdGFibGU/OiBUYWJsZUhlbGlzYUNvbXBvbmVudDxUPikge1xyXG4gICAgdGhpcy5lbWl0TmV4dFBhZ2UubmV4dCh7b2JqOiBwYWdlLCB0YWJsZTogdGFibGV9KTtcclxuICB9XHJcbn1cclxuIl19