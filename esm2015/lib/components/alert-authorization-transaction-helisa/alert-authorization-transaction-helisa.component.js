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
const DEFAULT_TITLE = '!Esta transacción requiere autorización!';
export class AlertAuthorizationTransactionHelisaComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
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
        (event) => {
            if (event.code === 'Escape') {
                this.dialogRef.close(this.onCancel());
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
AlertAuthorizationTransactionHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-alert-authorization-transaction-helisa',
                template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>{{cancelLabel}}</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertAuthorizationTransactionHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYXV0aG9yaXphdGlvbi10cmFuc2FjdGlvbi1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVoRSw0REFJQzs7O0lBSEMsOERBQWM7O0lBQ2QsZ0VBQWdCOztJQUNoQixvRUFBb0I7OztNQUdoQixhQUFhLEdBQVcsMENBQTBDO0FBT3hFLE1BQU0sT0FBTyw0Q0FBNEM7Ozs7O0lBTXZELFlBQ1MsU0FBcUUsRUFDNUMsSUFBbUQ7UUFENUUsY0FBUyxHQUFULFNBQVMsQ0FBNEQ7UUFDNUMsU0FBSSxHQUFKLElBQUksQ0FBK0M7UUFFbkYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzlCO1FBQ0QsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDOUIsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUMzRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCx1UUFBc0U7O2FBRXZFOzs7O1lBZHdCLFlBQVk7NENBdUJoQyxNQUFNLFNBQUMsZUFBZTs7OztJQU56Qiw2REFBYzs7SUFDZCwrREFBZ0I7O0lBQ2hCLG1FQUFvQjs7SUFHbEIsaUVBQTRFOztJQUM1RSw0REFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbnRlcmZhY2UgQWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FQcm9wZXJ0aWVzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIG9rTGFiZWw6IHN0cmluZztcclxuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1RJVExFOiBzdHJpbmcgPSAnIUVzdGEgdHJhbnNhY2Npw7NuIHJlcXVpZXJlIGF1dG9yaXphY2nDs24hJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWFsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtYXV0aG9yaXphdGlvbi10cmFuc2FjdGlvbi1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0QXV0aG9yaXphdGlvblRyYW5zYWN0aW9uSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBva0xhYmVsOiBzdHJpbmc7XHJcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydEF1dGhvcml6YXRpb25UcmFuc2FjdGlvbkhlbGlzYVByb3BlcnRpZXNcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgaWYgKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gREVGQVVMVF9USVRMRTtcclxuICAgIH1cclxuICAgIHRoaXMub2tMYWJlbCA9IGRhdGEub2tMYWJlbDtcclxuICAgIGlmICh0aGlzLm9rTGFiZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm9rTGFiZWwgPSAnU29saWNpdGFybGEnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYW5jZWxMYWJlbCA9IGRhdGEuY2FuY2VsTGFiZWw7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY2FuY2VsTGFiZWwgPSAnTmVnYXJsYSc7XHJcbiAgICB9XHJcbiAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcclxuICAgIGRpYWxvZ1JlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQgIHtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19