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
var DEFAULT_TITLE = '¿Está seguro de querer perder lo ya hecho?';
/** @type {?} */
var DEFAULT_CONTENT = 'Si no está seguro, puede continuar o "aplicar" y posteriormente cuando tenga clara las respuestas, usando la opción de modificar podrá completar el concepto.';
var AlertLostDataHelisaComponent = /** @class */ (function () {
    function AlertLostDataHelisaComponent(dialogRef, data) {
        var _this = this;
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
        function (event) {
            if (event.code === 'Escape') {
                _this.dialogRef.close(_this.onCancel());
            }
        }));
    }
    /**
     * @return {?}
     */
    AlertLostDataHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AlertLostDataHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    AlertLostDataHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert-lost-data-helisa',
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  {{ content }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>{{cancelLabel}}</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertLostDataHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertLostDataHelisaComponent;
}());
export { AlertLostDataHelisaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS9hbGVydC1sb3N0LWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRSw0Q0FLQzs7O0lBSkMsOENBQWM7O0lBQ2QsZ0RBQWdCOztJQUNoQixnREFBZ0I7O0lBQ2hCLG9EQUFvQjs7O0lBR2hCLGFBQWEsR0FBVyw0Q0FBNEM7O0lBQ3BFLGVBQWUsR0FBVywrSkFBK0o7QUFFL0w7SUFZRSxzQ0FDUyxTQUFxRCxFQUM1QixJQUFtQztRQUZyRSxpQkEwQkM7UUF6QlEsY0FBUyxHQUFULFNBQVMsQ0FBNEM7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBK0I7UUFFbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7U0FDbEM7UUFDRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBb0I7WUFDdkQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLGdVQUFzRDs7aUJBRXZEOzs7O2dCQWhCUSxZQUFZO2dEQTBCaEIsTUFBTSxTQUFDLGVBQWU7O0lBZ0MzQixtQ0FBQztDQUFBLEFBOUNELElBOENDO1NBekNZLDRCQUE0Qjs7O0lBRXZDLDZDQUFjOztJQUNkLCtDQUFnQjs7SUFDaEIsK0NBQWdCOztJQUNoQixtREFBb0I7O0lBR2xCLGlEQUE0RDs7SUFDNUQsNENBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmludGVyZmFjZSBBbGVydExvc3REYXRhSGVsaXNhUHJvcGVydGllcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgb2tMYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfVElUTEU6IHN0cmluZyA9ICfCv0VzdMOhIHNlZ3VybyBkZSBxdWVyZXIgcGVyZGVyIGxvIHlhIGhlY2hvPyc7XHJcbmNvbnN0IERFRkFVTFRfQ09OVEVOVDogc3RyaW5nID0gJ1NpIG5vIGVzdMOhIHNlZ3VybywgcHVlZGUgY29udGludWFyIG8gXCJhcGxpY2FyXCIgeSBwb3N0ZXJpb3JtZW50ZSBjdWFuZG8gdGVuZ2EgY2xhcmEgbGFzIHJlc3B1ZXN0YXMsIHVzYW5kbyBsYSBvcGNpw7NuIGRlIG1vZGlmaWNhciBwb2Ryw6EgY29tcGxldGFyIGVsIGNvbmNlcHRvLic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1hbGVydC1sb3N0LWRhdGEtaGVsaXNhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydExvc3REYXRhSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgb2tMYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0TG9zdERhdGFIZWxpc2FDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydExvc3REYXRhSGVsaXNhUHJvcGVydGllc1xyXG4gICkgeyBcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgaWYgKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gREVGQVVMVF9USVRMRTtcclxuICAgIH1cclxuICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudDtcclxuICAgIGlmICh0aGlzLmNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSBERUZBVUxUX0NPTlRFTlQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9rTGFiZWwgPSBkYXRhLm9rTGFiZWw7XHJcbiAgICBpZiAodGhpcy5va0xhYmVsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5va0xhYmVsID0gJ0xvIGFzdW1vJztcclxuICAgIH1cclxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSBkYXRhLmNhbmNlbExhYmVsO1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsTGFiZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmNhbmNlbExhYmVsID0gJ01lIHJldHJhY3RvJztcclxuICAgIH1cclxuICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xyXG4gICAgZGlhbG9nUmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMub25DYW5jZWwoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=