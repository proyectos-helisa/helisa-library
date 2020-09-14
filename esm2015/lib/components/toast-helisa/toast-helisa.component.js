/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
// @dynamic
export class ToastHelisaComponent {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ToastHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-toast',
                template: "<div [ngClass]=\"'toast-'+data.type\">\n  <span class=\"toast-message\">{{ data.message }}</span>\n  <ng-container *ngIf=\"!!data && !!data.subMessages\">\n    <span class=\"toast-sub-message\" *ngFor=\"let submessage of data.subMessages\">{{ submessage }}</span>\n  </ng-container>    \n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ToastHelisaComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];
if (false) {
    /** @type {?} */
    ToastHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2FzdC1oZWxpc2EvdG9hc3QtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBU3ZELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFL0IsWUFBK0MsSUFBZ0U7UUFBaEUsU0FBSSxHQUFKLElBQUksQ0FBNEQ7SUFBSSxDQUFDOzs7O0lBRXBILFFBQVEsS0FBVSxDQUFDOzs7WUFUcEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixvVEFBNEM7O2FBRTdDOzs7OzRDQUdjLE1BQU0sU0FBQyxrQkFBa0I7Ozs7SUFBMUIsb0NBQW1HIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX1NOQUNLX0JBUl9EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgVG9hc3RUeXBlIH0gZnJvbSAnLi90b2FzdC10eXBlLmVudW0nO1xuXG4vLyBAZHluYW1pY1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLXRvYXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LWhlbGlzYS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0SGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IHt0eXBlOiBUb2FzdFR5cGUsIG1lc3NhZ2U6IHN0cmluZywgc3ViTWVzc2FnZXM/OiBzdHJpbmdbXX0pIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxufVxuIl19