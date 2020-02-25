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
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button *ngIf=\"hasCancel\" [mat-dialog-close]=\"false\" >cancelar</button>\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>aceptar</button>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1oZWxpc2EvYWxlcnQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFM0Qsb0NBSUM7OztJQUhDLHNDQUFjOztJQUNkLHdDQUFnQjs7SUFDaEIscUNBQXNCOztBQUd4QjtJQVdFLDhCQUNTLFNBQTZDLEVBQ3BCLElBQTJCO1FBRjdELGlCQWFDO1FBWlEsY0FBUyxHQUFULFNBQVMsQ0FBb0M7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBdUI7UUFFM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLFlBQVksQ0FBQztRQUM1RCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBb0I7WUFDdkQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQix1VEFBNEM7O2lCQUU3Qzs7OztnQkFiUSxZQUFZO2dEQXNCaEIsTUFBTSxTQUFDLGVBQWU7O0lBbUIzQiwyQkFBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLG9CQUFvQjs7O0lBRS9CLHVDQUFnQjs7SUFDaEIscUNBQWM7O0lBQ2QseUNBQW1COztJQUdqQix5Q0FBb0Q7O0lBQ3BELG9DQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQWxlcnRIZWxpc2FUeXBlIH0gZnJvbSAnLi9hbGVydC1oZWxpc2EtdHlwZS5lbnVtJztcblxuaW50ZXJmYWNlIEFsZXJ0SGVsaXNhUHJvcGVydGllcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdHlwZTogQWxlcnRIZWxpc2FUeXBlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaGFzQ2FuY2VsOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydEhlbGlzYUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydEhlbGlzYVByb3BlcnRpZXNcbiAgKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIHRoaXMuaGFzQ2FuY2VsID0gZGF0YS50eXBlID09PSBBbGVydEhlbGlzYVR5cGUuQ09ORklSTUFUSU9OO1xuICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIGRpYWxvZ1JlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMub25DYW5jZWwoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==