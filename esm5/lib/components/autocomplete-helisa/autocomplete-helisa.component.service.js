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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRvY29tcGxldGUtaGVsaXNhL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUd2QztJQU1FO1FBSFEscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQXFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLGdCQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTFDLENBQUM7Ozs7O0lBRWpCLGlEQUFhOzs7O0lBQWIsVUFBYyxPQUEyQztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQVZGLFVBQVU7Ozs7SUFZWCxnQ0FBQztDQUFBLEFBWkQsSUFZQztTQVhZLHlCQUF5Qjs7Ozs7O0lBRXBDLHFEQUF1Rjs7SUFDdkYsZ0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBPcHRpb25BdXRvY29tcGxldGVIZWxpc2EgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U8VD4ge1xyXG5cclxuICBwcml2YXRlIGVtaXRDaGFuZ2VTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPj4+KFtdKTtcclxuICBwdWJsaWMgZGF0YVNvdXJjZSQgPSB0aGlzLmVtaXRDaGFuZ2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHNldERhdGFTb3VyY2Uob3B0aW9uczogQXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+Pikge1xyXG4gICAgdGhpcy5lbWl0Q2hhbmdlU291cmNlLm5leHQob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=