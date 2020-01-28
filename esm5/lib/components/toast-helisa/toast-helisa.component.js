/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
var ToastHelisaComponent = /** @class */ (function () {
    function ToastHelisaComponent(data) {
        this.data = data;
    }
    /**
     * @return {?}
     */
    ToastHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ToastHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-toast',
                    template: "<div [ngClass]=\"'toast-'+data.type\">\n  <span class=\"toast-message\">{{ data.message }}</span>\n  <ng-container *ngIf=\"!!data && !!data.subMessages\">\n    <span class=\"toast-sub-message\" *ngFor=\"let submessage of data.subMessages\">{{ submessage }}</span>\n  </ng-container>    \n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ToastHelisaComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
    ]; };
    return ToastHelisaComponent;
}());
export { ToastHelisaComponent };
if (false) {
    /** @type {?} */
    ToastHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2FzdC1oZWxpc2EvdG9hc3QtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdkQ7SUFPRSw4QkFBK0MsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBSSxDQUFDOzs7O0lBRTdELHVDQUFROzs7SUFBUixjQUFZLENBQUM7O2dCQVRkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsb1RBQTRDOztpQkFFN0M7Ozs7Z0RBR2MsTUFBTSxTQUFDLGtCQUFrQjs7SUFJeEMsMkJBQUM7Q0FBQSxBQVhELElBV0M7U0FOWSxvQkFBb0I7OztJQUVuQixvQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC10b2FzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdEhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfU05BQ0tfQkFSX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHsgfVxuXG4gIG5nT25Jbml0KCkge31cblxufVxuIl19