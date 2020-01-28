/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
/**
 * @template T
 */
var AutocompleteHelisaService = /** @class */ (function () {
    function AutocompleteHelisaService() {
        this.emitChangeSource = new BehaviorSubject([]);
        this.dataSource$ = this.emitChangeSource.asObservable();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    AutocompleteHelisaService.prototype.setDataSource = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.emitChangeSource.next(options);
    };
    AutocompleteHelisaService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AutocompleteHelisaService.ctorParameters = function () { return []; };
    return AutocompleteHelisaService;
}());
export { AutocompleteHelisaService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AutocompleteHelisaService.prototype.emitChangeSource;
    /** @type {?} */
    AutocompleteHelisaService.prototype.dataSource$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRvY29tcGxldGUtaGVsaXNhL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUd2QztJQU1FO1FBSFEscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQXFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLGdCQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTFDLENBQUM7Ozs7O0lBRWpCLGlEQUFhOzs7O0lBQWIsVUFBYyxPQUEyQztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQVZGLFVBQVU7Ozs7SUFZWCxnQ0FBQztDQUFBLEFBWkQsSUFZQztTQVhZLHlCQUF5Qjs7Ozs7O0lBRXBDLHFEQUF1Rjs7SUFDdkYsZ0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYSB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTxUPiB7XG5cbiAgcHJpdmF0ZSBlbWl0Q2hhbmdlU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+PihbXSk7XG4gIHB1YmxpYyBkYXRhU291cmNlJCA9IHRoaXMuZW1pdENoYW5nZVNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNldERhdGFTb3VyY2Uob3B0aW9uczogQXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+Pikge1xuICAgIHRoaXMuZW1pdENoYW5nZVNvdXJjZS5uZXh0KG9wdGlvbnMpO1xuICB9XG5cbn1cbiJdfQ==