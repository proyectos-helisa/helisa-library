/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertHelisaType } from './alert-helisa-type.enum';
/**
 * @record
 */
function AlertHelisaProperties() { }
if (false) {
    /** @type {?} */
    AlertHelisaProperties.prototype.title;
    /** @type {?} */
    AlertHelisaProperties.prototype.content;
    /** @type {?} */
    AlertHelisaProperties.prototype.type;
}
var AlertHelisaComponent = /** @class */ (function () {
    function AlertHelisaComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.content = data.content;
        this.title = data.title;
        this.hasCancel = data.type === AlertHelisaType.CONFIRMATION;
        dialogRef.disableClose = true;
        dialogRef.keydownEvents().subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.code === 'Escape') {
                _this.dialogRef.close(_this.onCancel());
            }
        }));
    }
    /**
     * @return {?}
     */
    AlertHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AlertHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    AlertHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert',
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  {{ content }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button *ngIf=\"hasCancel\" [mat-dialog-close]=\"false\" >cancelar</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>aceptar</button>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertHelisaComponent;
}());
export { AlertHelisaComponent };
if (false) {
    /** @type {?} */
    AlertHelisaComponent.prototype.content;
    /** @type {?} */
    AlertHelisaComponent.prototype.title;
    /** @type {?} */
    AlertHelisaComponent.prototype.hasCancel;
    /** @type {?} */
    AlertHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1oZWxpc2EvYWxlcnQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFM0Qsb0NBSUM7OztJQUhDLHNDQUFjOztJQUNkLHdDQUFnQjs7SUFDaEIscUNBQXNCOztBQUd4QjtJQVdFLDhCQUNTLFNBQTZDLEVBQ3BCLElBQTJCO1FBRjdELGlCQWFDO1FBWlEsY0FBUyxHQUFULFNBQVMsQ0FBb0M7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBdUI7UUFFM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLFlBQVksQ0FBQztRQUM1RCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBb0I7WUFDdkQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixxVUFBNEM7O2lCQUU3Qzs7OztnQkFiUSxZQUFZO2dEQXNCaEIsTUFBTSxTQUFDLGVBQWU7O0lBbUIzQiwyQkFBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLG9CQUFvQjs7O0lBRS9CLHVDQUFnQjs7SUFDaEIscUNBQWM7O0lBQ2QseUNBQW1COztJQUdqQix5Q0FBb0Q7O0lBQ3BELG9DQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFsZXJ0SGVsaXNhVHlwZSB9IGZyb20gJy4vYWxlcnQtaGVsaXNhLXR5cGUuZW51bSc7XHJcblxyXG5pbnRlcmZhY2UgQWxlcnRIZWxpc2FQcm9wZXJ0aWVzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICB0eXBlOiBBbGVydEhlbGlzYVR5cGU7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWFsZXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBoYXNDYW5jZWw6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0SGVsaXNhQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogQWxlcnRIZWxpc2FQcm9wZXJ0aWVzXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcclxuICAgIHRoaXMuaGFzQ2FuY2VsID0gZGF0YS50eXBlID09PSBBbGVydEhlbGlzYVR5cGUuQ09ORklSTUFUSU9OO1xyXG4gICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XHJcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5vbkNhbmNlbCgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19