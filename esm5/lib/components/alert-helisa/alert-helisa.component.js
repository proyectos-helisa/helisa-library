/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertHelisaType } from './alert-helisa-type.enum';
var AlertHelisaComponent = /** @class */ (function () {
    function AlertHelisaComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.content = data.content;
        this.title = data.title;
        this.hasCancel = data.type == AlertHelisaType.CONFIRMATION;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1oZWxpc2EvYWxlcnQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0Q7SUFXRSw4QkFBbUIsU0FBNkMsRUFDOUIsSUFBSTtRQURuQixjQUFTLEdBQVQsU0FBUyxDQUFvQztRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQyxZQUFZLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVILHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHFVQUE0Qzs7aUJBRTdDOzs7O2dCQVBRLFlBQVk7Z0RBZWhCLE1BQU0sU0FBQyxlQUFlOztJQVkzQiwyQkFBQztDQUFBLEFBeEJELElBd0JDO1NBbkJZLG9CQUFvQjs7O0lBRS9CLHVDQUFnQjs7SUFDaEIscUNBQWM7O0lBQ2QseUNBQW1COztJQUVQLHlDQUFvRDs7SUFDOUQsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQWxlcnRIZWxpc2FUeXBlIH0gZnJvbSAnLi9hbGVydC1oZWxpc2EtdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWFsZXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgdGl0bGU6IFN0cmluZztcclxuICBoYXNDYW5jZWw6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydEhlbGlzYUNvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGEpIHtcclxuICAgICAgdGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xyXG4gICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcclxuICAgICAgdGhpcy5oYXNDYW5jZWwgPSBkYXRhLnR5cGUgPT0gQWxlcnRIZWxpc2FUeXBlLkNPTkZJUk1BVElPTjtcclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpe1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19