import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
// @dynamic
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function ToastHelisaComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const submessage_r2 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(submessage_r2);
} }
function ToastHelisaComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ToastHelisaComponent_ng_container_3_span_1_Template, 2, 1, "span", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.data.subMessages);
} }
export class ToastHelisaComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() { }
}
ToastHelisaComponent.ɵfac = function ToastHelisaComponent_Factory(t) { return new (t || ToastHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(MAT_SNACK_BAR_DATA)); };
ToastHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastHelisaComponent, selectors: [["hel-toast"]], decls: 4, vars: 3, consts: [[3, "ngClass"], [1, "toast-message"], [4, "ngIf"], ["class", "toast-sub-message", 4, "ngFor", "ngForOf"], [1, "toast-sub-message"]], template: function ToastHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, ToastHelisaComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", "toast-" + ctx.data.type);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.data.message);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !!ctx.data && !!ctx.data.subMessages);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgForOf], styles: [""] });
ToastHelisaComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-toast',
                template: "<div [ngClass]=\"'toast-'+data.type\">\n  <span class=\"toast-message\">{{ data.message }}</span>\n  <ng-container *ngIf=\"!!data && !!data.subMessages\">\n    <span class=\"toast-sub-message\" *ngFor=\"let submessage of data.subMessages\">{{ submessage }}</span>\n  </ng-container>    \n</div>\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_SNACK_BAR_DATA]
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QtaGVsaXNhL3RvYXN0LWhlbGlzYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHakUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1YLE1BQU0sT0FBTyxvQkFBb0I7QUFBRyxJQUVsQyxZQUErQyxJQUFnRTtBQUFJLFFBQXBFLFNBQUksR0FBSixJQUFJLENBQTREO0FBQUMsSUFBRyxDQUFDO0FBQ3RILElBQ0UsUUFBUSxLQUFVLENBQUM7QUFDckI7Z0RBVkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxXQUFXLGtCQUNyQjsrUUFBNEMsNENBRTdDOzs7Ozs7Ozs7Ozs7O29GQUNJO0FBQUM7QUFBOEMsNENBRXJDLE1BQU0sU0FBQyxrQkFBa0I7QUFBUTs7Ozs7Ozs7Ozs7a0NBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1BVF9TTkFDS19CQVJfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICcuL3RvYXN0LXR5cGUuZW51bSc7XG5cbi8vIEBkeW5hbWljXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtdG9hc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX1NOQUNLX0JBUl9EQVRBKSBwdWJsaWMgZGF0YToge3R5cGU6IFRvYXN0VHlwZSwgbWVzc2FnZTogc3RyaW5nLCBzdWJNZXNzYWdlcz86IHN0cmluZ1tdfSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG59XG4iXX0=