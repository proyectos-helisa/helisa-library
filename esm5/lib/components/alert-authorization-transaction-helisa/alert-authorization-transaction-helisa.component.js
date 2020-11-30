/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
/**
 * @record
 */
function AlertAuthorizationTransactionHelisaProperties() { }
if (false) {
    /** @type {?} */
    AlertAuthorizationTransactionHelisaProperties.prototype.title;
    /** @type {?} */
    AlertAuthorizationTransactionHelisaProperties.prototype.okLabel;
    /** @type {?} */
    AlertAuthorizationTransactionHelisaProperties.prototype.cancelLabel;
}
/** @type {?} */
var DEFAULT_TITLE = '!Esta transacción requiere autorización!';
var AlertAuthorizationTransactionHelisaComponent = /** @class */ (function () {
    function AlertAuthorizationTransactionHelisaComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title;
        if (this.title === undefined) {
            this.title = DEFAULT_TITLE;
        }
        this.okLabel = data.okLabel;
        if (this.okLabel === undefined) {
            this.okLabel = 'Solicitarla';
        }
        this.cancelLabel = data.cancelLabel;
        if (this.cancelLabel === undefined) {
            this.cancelLabel = 'Negarla';
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
    AlertAuthorizationTransactionHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AlertAuthorizationTransactionHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    AlertAuthorizationTransactionHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert-authorization-transaction-helisa',
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>{{cancelLabel}}</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertAuthorizationTransactionHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertAuthorizationTransactionHelisaComponent;
}());
export { AlertAuthorizationTransactionHelisaComponent };
if (false) {
    /** @type {?} */
    AlertAuthorizationTransactionHelisaComponent.prototype.title;
    /** @type {?} */
    AlertAuthorizationTransactionHelisaComponent.prototype.okLabel;
    /** @type {?} */
    AlertAuthorizationTransactionHelisaComponent.prototype.cancelLabel;
    /** @type {?} */
    AlertAuthorizationTransactionHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertAuthorizationTransactionHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYXV0aG9yaXphdGlvbi10cmFuc2FjdGlvbi1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVoRSw0REFJQzs7O0lBSEMsOERBQWM7O0lBQ2QsZ0VBQWdCOztJQUNoQixvRUFBb0I7OztJQUdoQixhQUFhLEdBQVcsMENBQTBDO0FBRXhFO0lBV0Usc0RBQ1MsU0FBcUUsRUFDNUMsSUFBbUQ7UUFGckYsaUJBc0JDO1FBckJRLGNBQVMsR0FBVCxTQUFTLENBQTREO1FBQzVDLFNBQUksR0FBSixJQUFJLENBQStDO1FBRW5GLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztTQUM5QjtRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUN2RCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELCtEQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCwrREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRDQUE0QztvQkFDdEQsNlNBQXNFOztpQkFFdkU7Ozs7Z0JBZHdCLFlBQVk7Z0RBdUJoQyxNQUFNLFNBQUMsZUFBZTs7SUE0QjNCLG1EQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FwQ1ksNENBQTRDOzs7SUFFdkQsNkRBQWM7O0lBQ2QsK0RBQWdCOztJQUNoQixtRUFBb0I7O0lBR2xCLGlFQUE0RTs7SUFDNUUsNERBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW50ZXJmYWNlIEFsZXJ0QXV0aG9yaXphdGlvblRyYW5zYWN0aW9uSGVsaXNhUHJvcGVydGllcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBva0xhYmVsOiBzdHJpbmc7XHJcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9USVRMRTogc3RyaW5nID0gJyFFc3RhIHRyYW5zYWNjacOzbiByZXF1aWVyZSBhdXRvcml6YWNpw7NuISc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1hbGVydC1hdXRob3JpemF0aW9uLXRyYW5zYWN0aW9uLWhlbGlzYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC1hdXRob3JpemF0aW9uLXRyYW5zYWN0aW9uLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydEF1dGhvcml6YXRpb25UcmFuc2FjdGlvbkhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgb2tMYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0QXV0aG9yaXphdGlvblRyYW5zYWN0aW9uSGVsaXNhQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogQWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FQcm9wZXJ0aWVzXHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcclxuICAgIGlmICh0aGlzLnRpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IERFRkFVTFRfVElUTEU7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9rTGFiZWwgPSBkYXRhLm9rTGFiZWw7XHJcbiAgICBpZiAodGhpcy5va0xhYmVsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5va0xhYmVsID0gJ1NvbGljaXRhcmxhJztcclxuICAgIH1cclxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSBkYXRhLmNhbmNlbExhYmVsO1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsTGFiZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmNhbmNlbExhYmVsID0gJ05lZ2FybGEnO1xyXG4gICAgfVxyXG4gICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XHJcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5vbkNhbmNlbCgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkICB7XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==