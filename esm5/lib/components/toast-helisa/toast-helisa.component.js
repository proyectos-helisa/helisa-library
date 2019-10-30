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
                    template: "<div [ngClass]=\"'toast-'+data.type\">\r\n  <span class=\"toast-message\">{{ data.message }}</span>\r\n  <ng-container *ngIf=\"!!data && !!data.subMessages\">\r\n    <span class=\"toast-sub-message\" *ngFor=\"let submessage of data.subMessages\">{{ submessage }}</span>\r\n  </ng-container>    \r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2FzdC1oZWxpc2EvdG9hc3QtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdkQ7SUFPRSw4QkFBK0MsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBSSxDQUFDOzs7O0lBRTdELHVDQUFROzs7SUFBUixjQUFZLENBQUM7O2dCQVRkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsZ1VBQTRDOztpQkFFN0M7Ozs7Z0RBR2MsTUFBTSxTQUFDLGtCQUFrQjs7SUFJeEMsMkJBQUM7Q0FBQSxBQVhELElBV0M7U0FOWSxvQkFBb0I7OztJQUVuQixvQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1BVF9TTkFDS19CQVJfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLXRvYXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b2FzdC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IGFueSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbn1cclxuIl19