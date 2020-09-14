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
                template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYXV0aG9yaXphdGlvbi10cmFuc2FjdGlvbi1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVoRSw0REFJQzs7O0lBSEMsOERBQWM7O0lBQ2QsZ0VBQWdCOztJQUNoQixvRUFBb0I7OztNQUdoQixhQUFhLEdBQVcsMENBQTBDO0FBT3hFLE1BQU0sT0FBTyw0Q0FBNEM7Ozs7O0lBTXZELFlBQ1MsU0FBcUUsRUFDNUMsSUFBbUQ7UUFENUUsY0FBUyxHQUFULFNBQVMsQ0FBNEQ7UUFDNUMsU0FBSSxHQUFKLElBQUksQ0FBK0M7UUFFbkYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzlCO1FBQ0QsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDOUIsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUMzRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCwrUkFBc0U7O2FBRXZFOzs7O1lBZHdCLFlBQVk7NENBdUJoQyxNQUFNLFNBQUMsZUFBZTs7OztJQU56Qiw2REFBYzs7SUFDZCwrREFBZ0I7O0lBQ2hCLG1FQUFvQjs7SUFHbEIsaUVBQTRFOztJQUM1RSw0REFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbnRlcmZhY2UgQWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FQcm9wZXJ0aWVzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgb2tMYWJlbDogc3RyaW5nO1xuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX1RJVExFOiBzdHJpbmcgPSAnIUVzdGEgdHJhbnNhY2Npw7NuIHJlcXVpZXJlIGF1dG9yaXphY2nDs24hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLWFsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWF1dGhvcml6YXRpb24tdHJhbnNhY3Rpb24taGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtYXV0aG9yaXphdGlvbi10cmFuc2FjdGlvbi1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydEF1dGhvcml6YXRpb25UcmFuc2FjdGlvbkhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGU6IHN0cmluZztcbiAgb2tMYWJlbDogc3RyaW5nO1xuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydEF1dGhvcml6YXRpb25UcmFuc2FjdGlvbkhlbGlzYUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydEF1dGhvcml6YXRpb25UcmFuc2FjdGlvbkhlbGlzYVByb3BlcnRpZXNcbiAgKSB7XG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgaWYgKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50aXRsZSA9IERFRkFVTFRfVElUTEU7XG4gICAgfVxuICAgIHRoaXMub2tMYWJlbCA9IGRhdGEub2tMYWJlbDtcbiAgICBpZiAodGhpcy5va0xhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2tMYWJlbCA9ICdTb2xpY2l0YXJsYSc7XG4gICAgfVxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSBkYXRhLmNhbmNlbExhYmVsO1xuICAgIGlmICh0aGlzLmNhbmNlbExhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsTGFiZWwgPSAnTmVnYXJsYSc7XG4gICAgfVxuICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIGRpYWxvZ1JlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMub25DYW5jZWwoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkICB7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iXX0=