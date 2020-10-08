/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/** @type {?} */
var DEFAULT_CONTENT = '¿Esta seguro que desea eliminar esta información?';
var AlertConfirmDeleteDataHelisaComponent = /** @class */ (function () {
    function AlertConfirmDeleteDataHelisaComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.content = data.content;
        if (this.content === undefined) {
            this.content = DEFAULT_CONTENT;
        }
        this.okLabel = data.okLabel;
        if (this.okLabel === undefined) {
            this.okLabel = 'Lo asumo';
        }
        this.cancelLabel = data.cancelLabel;
        if (this.cancelLabel === undefined) {
            this.cancelLabel = 'Me retracto';
        }
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
    AlertConfirmDeleteDataHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AlertConfirmDeleteDataHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    AlertConfirmDeleteDataHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert-confirm-delete-data-helisa',
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  {{ content }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>{{cancelLabel}}</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertConfirmDeleteDataHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: AlertConfirmDeleteDataHelisaComponent, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertConfirmDeleteDataHelisaComponent;
}());
export { AlertConfirmDeleteDataHelisaComponent };
if (false) {
    /** @type {?} */
    AlertConfirmDeleteDataHelisaComponent.prototype.title;
    /** @type {?} */
    AlertConfirmDeleteDataHelisaComponent.prototype.content;
    /** @type {?} */
    AlertConfirmDeleteDataHelisaComponent.prototype.okLabel;
    /** @type {?} */
    AlertConfirmDeleteDataHelisaComponent.prototype.cancelLabel;
    /** @type {?} */
    AlertConfirmDeleteDataHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertConfirmDeleteDataHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtY29uZmlybS1kZWxldGUtZGF0YS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWNvbmZpcm0tZGVsZXRlLWRhdGEtaGVsaXNhL2FsZXJ0LWNvbmZpcm0tZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFFNUQsZUFBZSxHQUFXLG1EQUFtRDtBQUVuRjtJQVlFLCtDQUNTLFNBQThELEVBQ3JDLElBQTJDO1FBRjdFLGlCQXNCQztRQXJCUSxjQUFTLEdBQVQsU0FBUyxDQUFxRDtRQUNyQyxTQUFJLEdBQUosSUFBSSxDQUF1QztRQUUzRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7U0FDbEM7UUFDRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBb0I7WUFDdkQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx3REFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsd0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQ0FBc0M7b0JBQ2hELDRUQUFnRTs7aUJBRWpFOzs7O2dCQVJRLFlBQVk7Z0JBa0JxQixxQ0FBcUMsdUJBQTFFLE1BQU0sU0FBQyxlQUFlOztJQTRCM0IsNENBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXJDWSxxQ0FBcUM7OztJQUVoRCxzREFBYzs7SUFDZCx3REFBZ0I7O0lBQ2hCLHdEQUFnQjs7SUFDaEIsNERBQW9COztJQUdsQiwwREFBcUU7O0lBQ3JFLHFEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5jb25zdCBERUZBVUxUX0NPTlRFTlQ6IHN0cmluZyA9ICfCv0VzdGEgc2VndXJvIHF1ZSBkZXNlYSBlbGltaW5hciBlc3RhIGluZm9ybWFjacOzbj8nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtYWxlcnQtY29uZmlybS1kZWxldGUtZGF0YS1oZWxpc2EnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1jb25maXJtLWRlbGV0ZS1kYXRhLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtY29uZmlybS1kZWxldGUtZGF0YS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb25maXJtRGVsZXRlRGF0YUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIG9rTGFiZWw6IHN0cmluZztcclxuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydENvbmZpcm1EZWxldGVEYXRhSGVsaXNhQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogQWxlcnRDb25maXJtRGVsZXRlRGF0YUhlbGlzYUNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xyXG4gICAgaWYgKHRoaXMuY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY29udGVudCA9IERFRkFVTFRfQ09OVEVOVDtcclxuICAgIH1cclxuICAgIHRoaXMub2tMYWJlbCA9IGRhdGEub2tMYWJlbDtcclxuICAgIGlmICh0aGlzLm9rTGFiZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm9rTGFiZWwgPSAnTG8gYXN1bW8nO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYW5jZWxMYWJlbCA9IGRhdGEuY2FuY2VsTGFiZWw7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY2FuY2VsTGFiZWwgPSAnTWUgcmV0cmFjdG8nO1xyXG4gICAgfVxyXG4gICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XHJcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5vbkNhbmNlbCgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19