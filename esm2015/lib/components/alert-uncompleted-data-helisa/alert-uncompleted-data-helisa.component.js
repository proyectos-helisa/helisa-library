/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * @record
 */
function AlertUncompletedDataHelisaProperties() { }
if (false) {
    /** @type {?} */
    AlertUncompletedDataHelisaProperties.prototype.title;
    /** @type {?} */
    AlertUncompletedDataHelisaProperties.prototype.content;
    /** @type {?} */
    AlertUncompletedDataHelisaProperties.prototype.okLabel;
    /** @type {?} */
    AlertUncompletedDataHelisaProperties.prototype.cancelLabel;
}
/** @type {?} */
const DEFAULT_TITLE = 'No ha suministrado la información necesaria.';
/** @type {?} */
const DEFAULT_CONTENT = 'Si insite en grabar así, este concepto no será utilizable hasta su conclusión satisfactoria, que deberá completar posteriormente modificando en concepto.';
export class AlertUncompletedDataHelisaComponent {
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
AlertUncompletedDataHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-alert-uncompleted-data-helisa',
                template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertUncompletedDataHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.title;
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.content;
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.okLabel;
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.cancelLabel;
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtdW5jb21wbGV0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRSxtREFLQzs7O0lBSkMscURBQWM7O0lBQ2QsdURBQWdCOztJQUNoQix1REFBZ0I7O0lBQ2hCLDJEQUFvQjs7O01BR2hCLGFBQWEsR0FBVyw4Q0FBOEM7O01BQ3RFLGVBQWUsR0FBVywySkFBMko7QUFPM0wsTUFBTSxPQUFPLG1DQUFtQzs7Ozs7SUFROUMsWUFDUyxTQUE0RCxFQUNuQyxJQUEwQztRQURuRSxjQUFTLEdBQVQsU0FBUyxDQUFtRDtRQUNuQyxTQUFJLEdBQUosSUFBSSxDQUFzQztRQUUxRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztTQUNsQztRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFDM0QsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsOFNBQTZEOzthQUU5RDs7OztZQWhCUSxZQUFZOzRDQTJCaEIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFSekIsb0RBQWM7O0lBQ2Qsc0RBQWdCOztJQUNoQixzREFBZ0I7O0lBQ2hCLDBEQUFvQjs7SUFJbEIsd0RBQW1FOztJQUNuRSxtREFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW50ZXJmYWNlIEFsZXJ0VW5jb21wbGV0ZWREYXRhSGVsaXNhUHJvcGVydGllcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgb2tMYWJlbDogc3RyaW5nO1xuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX1RJVExFOiBzdHJpbmcgPSAnTm8gaGEgc3VtaW5pc3RyYWRvIGxhIGluZm9ybWFjacOzbiBuZWNlc2FyaWEuJztcbmNvbnN0IERFRkFVTFRfQ09OVEVOVDogc3RyaW5nID0gJ1NpIGluc2l0ZSBlbiBncmFiYXIgYXPDrSwgZXN0ZSBjb25jZXB0byBubyBzZXLDoSB1dGlsaXphYmxlIGhhc3RhIHN1IGNvbmNsdXNpw7NuIHNhdGlzZmFjdG9yaWEsIHF1ZSBkZWJlcsOhIGNvbXBsZXRhciBwb3N0ZXJpb3JtZW50ZSBtb2RpZmljYW5kbyBlbiBjb25jZXB0by4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtYWxlcnQtdW5jb21wbGV0ZWQtZGF0YS1oZWxpc2EnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtdW5jb21wbGV0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC11bmNvbXBsZXRlZC1kYXRhLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0VW5jb21wbGV0ZWREYXRhSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIG9rTGFiZWw6IHN0cmluZztcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYVByb3BlcnRpZXNcbiAgKSB7IFxuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIGlmICh0aGlzLnRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBERUZBVUxUX1RJVExFO1xuICAgIH1cbiAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XG4gICAgaWYgKHRoaXMuY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBERUZBVUxUX0NPTlRFTlQ7XG4gICAgfVxuICAgIHRoaXMub2tMYWJlbCA9IGRhdGEub2tMYWJlbDtcbiAgICBpZiAodGhpcy5va0xhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2tMYWJlbCA9ICdMbyBhc3Vtbyc7XG4gICAgfVxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSBkYXRhLmNhbmNlbExhYmVsO1xuICAgIGlmICh0aGlzLmNhbmNlbExhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsTGFiZWwgPSAnTWUgcmV0cmFjdG8nO1xuICAgIH1cbiAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xuICAgICAgfVxuICAgIH0pOyAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuIl19