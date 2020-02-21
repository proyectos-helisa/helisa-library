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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRvY29tcGxldGUtaGVsaXNhL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQUduRDtJQVFFO1FBTFEscUJBQWdCLEdBQ3hCLElBQUksZUFBZSxDQUFxQyxFQUFFLENBQUMsQ0FBQztRQUVyRCxnQkFBVyxHQUFtRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFMUYsQ0FBQzs7Ozs7SUFFakIsaURBQWE7Ozs7SUFBYixVQUFjLE9BQTJDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBWkYsVUFBVTs7OztJQWNYLGdDQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlkseUJBQXlCOzs7Ozs7SUFFcEMscURBQzREOztJQUU1RCxnREFBMEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPcHRpb25BdXRvY29tcGxldGVIZWxpc2EgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U8VD4ge1xyXG5cclxuICBwcml2YXRlIGVtaXRDaGFuZ2VTb3VyY2U6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+PiA9XHJcbiAgbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+PihbXSk7XHJcblxyXG4gIHB1YmxpYyBkYXRhU291cmNlJDogT2JzZXJ2YWJsZTxBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+PiA9IHRoaXMuZW1pdENoYW5nZVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgc2V0RGF0YVNvdXJjZShvcHRpb25zOiBBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+KTogdm9pZCB7XHJcbiAgICB0aGlzLmVtaXRDaGFuZ2VTb3VyY2UubmV4dChvcHRpb25zKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==