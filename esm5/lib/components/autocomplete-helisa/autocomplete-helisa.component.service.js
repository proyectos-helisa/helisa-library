/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRvY29tcGxldGUtaGVsaXNhL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQUduRDtJQVFFO1FBTFEscUJBQWdCLEdBQ3hCLElBQUksZUFBZSxDQUFxQyxFQUFFLENBQUMsQ0FBQztRQUVyRCxnQkFBVyxHQUFtRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFMUYsQ0FBQzs7Ozs7SUFFakIsaURBQWE7Ozs7SUFBYixVQUFjLE9BQTJDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBWkYsVUFBVTs7OztJQWNYLGdDQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlkseUJBQXlCOzs7Ozs7SUFFcEMscURBQzREOztJQUU1RCxnREFBMEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYSB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTxUPiB7XG5cbiAgcHJpdmF0ZSBlbWl0Q2hhbmdlU291cmNlOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+Pj4gPVxuICBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPj4+KFtdKTtcblxuICBwdWJsaWMgZGF0YVNvdXJjZSQ6IE9ic2VydmFibGU8QXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+Pj4gPSB0aGlzLmVtaXRDaGFuZ2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBzZXREYXRhU291cmNlKG9wdGlvbnM6IEFycmF5PE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPj4pOiB2b2lkIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2VTb3VyY2UubmV4dChvcHRpb25zKTtcbiAgfVxuXG59XG4iXX0=