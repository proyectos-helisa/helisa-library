/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * @record
 */
function AlertLostDataHelisaProperties() { }
if (false) {
    /** @type {?} */
    AlertLostDataHelisaProperties.prototype.title;
    /** @type {?} */
    AlertLostDataHelisaProperties.prototype.content;
    /** @type {?} */
    AlertLostDataHelisaProperties.prototype.okLabel;
    /** @type {?} */
    AlertLostDataHelisaProperties.prototype.cancelLabel;
}
/** @type {?} */
const DEFAULT_TITLE = '¿Está seguro de querer perder lo ya hecho?';
/** @type {?} */
const DEFAULT_CONTENT = 'Si no está seguro, puede continuar o "aplicar" y posteriormente cuando tenga clara las respuestas, usando la opción de modificar podrá completar el concepto.';
export class AlertLostDataHelisaComponent {
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
AlertLostDataHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-alert-lost-data-helisa',
                template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" >{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertLostDataHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    AlertLostDataHelisaComponent.prototype.title;
    /** @type {?} */
    AlertLostDataHelisaComponent.prototype.content;
    /** @type {?} */
    AlertLostDataHelisaComponent.prototype.okLabel;
    /** @type {?} */
    AlertLostDataHelisaComponent.prototype.cancelLabel;
    /** @type {?} */
    AlertLostDataHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertLostDataHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS9hbGVydC1sb3N0LWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRSw0Q0FLQzs7O0lBSkMsOENBQWM7O0lBQ2QsZ0RBQWdCOztJQUNoQixnREFBZ0I7O0lBQ2hCLG9EQUFvQjs7O01BR2hCLGFBQWEsR0FBVyw0Q0FBNEM7O01BQ3BFLGVBQWUsR0FBVywrSkFBK0o7QUFPL0wsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7SUFPdkMsWUFDUyxTQUFxRCxFQUM1QixJQUFtQztRQUQ1RCxjQUFTLEdBQVQsU0FBUyxDQUE0QztRQUM1QixTQUFJLEdBQUosSUFBSSxDQUErQjtRQUVuRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztTQUNsQztRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFDM0QsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsZ1RBQXNEOzthQUV2RDs7OztZQWhCUSxZQUFZOzRDQTBCaEIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFQekIsNkNBQWM7O0lBQ2QsK0NBQWdCOztJQUNoQiwrQ0FBZ0I7O0lBQ2hCLG1EQUFvQjs7SUFHbEIsaURBQTREOztJQUM1RCw0Q0FBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW50ZXJmYWNlIEFsZXJ0TG9zdERhdGFIZWxpc2FQcm9wZXJ0aWVzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBva0xhYmVsOiBzdHJpbmc7XG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XG59XG5cbmNvbnN0IERFRkFVTFRfVElUTEU6IHN0cmluZyA9ICfCv0VzdMOhIHNlZ3VybyBkZSBxdWVyZXIgcGVyZGVyIGxvIHlhIGhlY2hvPyc7XG5jb25zdCBERUZBVUxUX0NPTlRFTlQ6IHN0cmluZyA9ICdTaSBubyBlc3TDoSBzZWd1cm8sIHB1ZWRlIGNvbnRpbnVhciBvIFwiYXBsaWNhclwiIHkgcG9zdGVyaW9ybWVudGUgY3VhbmRvIHRlbmdhIGNsYXJhIGxhcyByZXNwdWVzdGFzLCB1c2FuZG8gbGEgb3BjacOzbiBkZSBtb2RpZmljYXIgcG9kcsOhIGNvbXBsZXRhciBlbCBjb25jZXB0by4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtYWxlcnQtbG9zdC1kYXRhLWhlbGlzYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1sb3N0LWRhdGEtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0TG9zdERhdGFIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgb2tMYWJlbDogc3RyaW5nO1xuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydExvc3REYXRhSGVsaXNhQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IEFsZXJ0TG9zdERhdGFIZWxpc2FQcm9wZXJ0aWVzXG4gICkgeyBcbiAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICBpZiAodGhpcy50aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRpdGxlID0gREVGQVVMVF9USVRMRTtcbiAgICB9XG4gICAgdGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xuICAgIGlmICh0aGlzLmNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jb250ZW50ID0gREVGQVVMVF9DT05URU5UO1xuICAgIH1cbiAgICB0aGlzLm9rTGFiZWwgPSBkYXRhLm9rTGFiZWw7XG4gICAgaWYgKHRoaXMub2tMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9rTGFiZWwgPSAnTG8gYXN1bW8nO1xuICAgIH1cbiAgICB0aGlzLmNhbmNlbExhYmVsID0gZGF0YS5jYW5jZWxMYWJlbDtcbiAgICBpZiAodGhpcy5jYW5jZWxMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNhbmNlbExhYmVsID0gJ01lIHJldHJhY3RvJztcbiAgICB9XG4gICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgZGlhbG9nUmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5vbkNhbmNlbCgpKTtcbiAgICAgIH1cbiAgICB9KTsgICAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==