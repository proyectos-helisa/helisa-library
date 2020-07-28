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
                template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  {{ content }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"false\" >{{cancelLabel}}</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtdW5jb21wbGV0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRSxtREFLQzs7O0lBSkMscURBQWM7O0lBQ2QsdURBQWdCOztJQUNoQix1REFBZ0I7O0lBQ2hCLDJEQUFvQjs7O01BR2hCLGFBQWEsR0FBVyw4Q0FBOEM7O01BQ3RFLGVBQWUsR0FBVywySkFBMko7QUFPM0wsTUFBTSxPQUFPLG1DQUFtQzs7Ozs7SUFROUMsWUFDUyxTQUE0RCxFQUNuQyxJQUEwQztRQURuRSxjQUFTLEdBQVQsU0FBUyxDQUFtRDtRQUNuQyxTQUFJLEdBQUosSUFBSSxDQUFzQztRQUUxRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztTQUNsQztRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFDM0QsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsNFRBQTZEOzthQUU5RDs7OztZQWhCUSxZQUFZOzRDQTJCaEIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFSekIsb0RBQWM7O0lBQ2Qsc0RBQWdCOztJQUNoQixzREFBZ0I7O0lBQ2hCLDBEQUFvQjs7SUFJbEIsd0RBQW1FOztJQUNuRSxtREFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW50ZXJmYWNlIEFsZXJ0VW5jb21wbGV0ZWREYXRhSGVsaXNhUHJvcGVydGllcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgb2tMYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfVElUTEU6IHN0cmluZyA9ICdObyBoYSBzdW1pbmlzdHJhZG8gbGEgaW5mb3JtYWNpw7NuIG5lY2VzYXJpYS4nO1xyXG5jb25zdCBERUZBVUxUX0NPTlRFTlQ6IHN0cmluZyA9ICdTaSBpbnNpdGUgZW4gZ3JhYmFyIGFzw60sIGVzdGUgY29uY2VwdG8gbm8gc2Vyw6EgdXRpbGl6YWJsZSBoYXN0YSBzdSBjb25jbHVzacOzbiBzYXRpc2ZhY3RvcmlhLCBxdWUgZGViZXLDoSBjb21wbGV0YXIgcG9zdGVyaW9ybWVudGUgbW9kaWZpY2FuZG8gZW4gY29uY2VwdG8uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWFsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtdW5jb21wbGV0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0VW5jb21wbGV0ZWREYXRhSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgb2tMYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYUNvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IEFsZXJ0VW5jb21wbGV0ZWREYXRhSGVsaXNhUHJvcGVydGllc1xyXG4gICkgeyBcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgaWYgKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gREVGQVVMVF9USVRMRTtcclxuICAgIH1cclxuICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudDtcclxuICAgIGlmICh0aGlzLmNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSBERUZBVUxUX0NPTlRFTlQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9rTGFiZWwgPSBkYXRhLm9rTGFiZWw7XHJcbiAgICBpZiAodGhpcy5va0xhYmVsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5va0xhYmVsID0gJ0xvIGFzdW1vJztcclxuICAgIH1cclxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSBkYXRhLmNhbmNlbExhYmVsO1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsTGFiZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmNhbmNlbExhYmVsID0gJ01lIHJldHJhY3RvJztcclxuICAgIH1cclxuICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xyXG4gICAgZGlhbG9nUmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMub25DYW5jZWwoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=