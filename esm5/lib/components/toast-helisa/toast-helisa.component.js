/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
// @dynamic
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2FzdC1oZWxpc2EvdG9hc3QtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBSXZEO0lBT0UsOEJBQStDLElBQWdFO1FBQWhFLFNBQUksR0FBSixJQUFJLENBQTREO0lBQUksQ0FBQzs7OztJQUVwSCx1Q0FBUTs7O0lBQVIsY0FBa0IsQ0FBQzs7Z0JBVHBCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsb1RBQTRDOztpQkFFN0M7Ozs7Z0RBR2MsTUFBTSxTQUFDLGtCQUFrQjs7SUFJeEMsMkJBQUM7Q0FBQSxBQVhELElBV0M7U0FOWSxvQkFBb0I7OztJQUVuQixvQ0FBbUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICcuL3RvYXN0LXR5cGUuZW51bSc7XG5cbi8vIEBkeW5hbWljXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtdG9hc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX1NOQUNLX0JBUl9EQVRBKSBwdWJsaWMgZGF0YToge3R5cGU6IFRvYXN0VHlwZSwgbWVzc2FnZTogc3RyaW5nLCBzdWJNZXNzYWdlcz86IHN0cmluZ1tdfSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG59XG4iXX0=