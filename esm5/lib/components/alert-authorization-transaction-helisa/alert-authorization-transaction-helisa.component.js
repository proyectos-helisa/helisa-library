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
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYXV0aG9yaXphdGlvbi10cmFuc2FjdGlvbi1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVoRSw0REFJQzs7O0lBSEMsOERBQWM7O0lBQ2QsZ0VBQWdCOztJQUNoQixvRUFBb0I7OztJQUdoQixhQUFhLEdBQVcsMENBQTBDO0FBRXhFO0lBV0Usc0RBQ1MsU0FBcUUsRUFDNUMsSUFBbUQ7UUFGckYsaUJBc0JDO1FBckJRLGNBQVMsR0FBVCxTQUFTLENBQTREO1FBQzVDLFNBQUksR0FBSixJQUFJLENBQStDO1FBRW5GLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztTQUM5QjtRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUN2RCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELCtEQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCwrREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRDQUE0QztvQkFDdEQsK1JBQXNFOztpQkFFdkU7Ozs7Z0JBZHdCLFlBQVk7Z0RBdUJoQyxNQUFNLFNBQUMsZUFBZTs7SUE0QjNCLG1EQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FwQ1ksNENBQTRDOzs7SUFFdkQsNkRBQWM7O0lBQ2QsK0RBQWdCOztJQUNoQixtRUFBb0I7O0lBR2xCLGlFQUE0RTs7SUFDNUUsNERBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW50ZXJmYWNlIEFsZXJ0QXV0aG9yaXphdGlvblRyYW5zYWN0aW9uSGVsaXNhUHJvcGVydGllcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG9rTGFiZWw6IHN0cmluZztcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcbn1cblxuY29uc3QgREVGQVVMVF9USVRMRTogc3RyaW5nID0gJyFFc3RhIHRyYW5zYWNjacOzbiByZXF1aWVyZSBhdXRvcml6YWNpw7NuISc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1hbGVydC1hdXRob3JpemF0aW9uLXRyYW5zYWN0aW9uLWhlbGlzYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1hdXRob3JpemF0aW9uLXRyYW5zYWN0aW9uLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRpdGxlOiBzdHJpbmc7XG4gIG9rTGFiZWw6IHN0cmluZztcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogQWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FQcm9wZXJ0aWVzXG4gICkge1xuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIGlmICh0aGlzLnRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBERUZBVUxUX1RJVExFO1xuICAgIH1cbiAgICB0aGlzLm9rTGFiZWwgPSBkYXRhLm9rTGFiZWw7XG4gICAgaWYgKHRoaXMub2tMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9rTGFiZWwgPSAnU29saWNpdGFybGEnO1xuICAgIH1cbiAgICB0aGlzLmNhbmNlbExhYmVsID0gZGF0YS5jYW5jZWxMYWJlbDtcbiAgICBpZiAodGhpcy5jYW5jZWxMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNhbmNlbExhYmVsID0gJ05lZ2FybGEnO1xuICAgIH1cbiAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCAge1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuIl19