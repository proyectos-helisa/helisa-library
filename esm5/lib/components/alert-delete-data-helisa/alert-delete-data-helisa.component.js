/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/** @type {?} */
var DEFAULT_TITLE = '¿Está seguro que debe anular esta información?';
/** @type {?} */
var DEFAULT_CONTENT = 'Al anular este concepto, quedará la huella de todo lo que se hizo apoyados en su información. No es una eliminación tácita, es suprimir su uso en adelante.';
var AlertDeleteDataHelisaComponent = /** @class */ (function () {
    function AlertDeleteDataHelisaComponent(dialogRef, data) {
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
    AlertDeleteDataHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AlertDeleteDataHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    AlertDeleteDataHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert-delete-data-helisa',
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertDeleteDataHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: AlertDeleteDataHelisaComponent, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertDeleteDataHelisaComponent;
}());
export { AlertDeleteDataHelisaComponent };
if (false) {
    /** @type {?} */
    AlertDeleteDataHelisaComponent.prototype.title;
    /** @type {?} */
    AlertDeleteDataHelisaComponent.prototype.content;
    /** @type {?} */
    AlertDeleteDataHelisaComponent.prototype.okLabel;
    /** @type {?} */
    AlertDeleteDataHelisaComponent.prototype.cancelLabel;
    /** @type {?} */
    AlertDeleteDataHelisaComponent.prototype.z;
    /** @type {?} */
    AlertDeleteDataHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertDeleteDataHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1kZWxldGUtZGF0YS1oZWxpc2EvYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFFNUQsYUFBYSxHQUFXLGdEQUFnRDs7SUFDeEUsZUFBZSxHQUFXLDZKQUE2SjtBQUU3TDtJQVlFLHdDQUNTLFNBQXVELEVBQzlCLElBQW9DO1FBRnRFLGlCQTBCQztRQXpCUSxjQUFTLEdBQVQsU0FBUyxDQUE4QztRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFnQztRQUVwRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztTQUNsQztRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUN2RCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxpREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsOFNBQXdEOztpQkFFekQ7Ozs7Z0JBVFEsWUFBWTtnQkFtQnFCLDhCQUE4Qix1QkFBbkUsTUFBTSxTQUFDLGVBQWU7O0lBZ0MzQixxQ0FBQztDQUFBLEFBOUNELElBOENDO1NBekNZLDhCQUE4Qjs7O0lBRXpDLCtDQUFjOztJQUNkLGlEQUFnQjs7SUFDaEIsaURBQWdCOztJQUNoQixxREFBb0I7O0lBQ3RCLDJDQUFDOztJQUVHLG1EQUE4RDs7SUFDOUQsOENBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmNvbnN0IERFRkFVTFRfVElUTEU6IHN0cmluZyA9ICfCv0VzdMOhIHNlZ3VybyBxdWUgZGViZSBhbnVsYXIgZXN0YSBpbmZvcm1hY2nDs24/JztcbmNvbnN0IERFRkFVTFRfQ09OVEVOVDogc3RyaW5nID0gJ0FsIGFudWxhciBlc3RlIGNvbmNlcHRvLCBxdWVkYXLDoSBsYSBodWVsbGEgZGUgdG9kbyBsbyBxdWUgc2UgaGl6byBhcG95YWRvcyBlbiBzdSBpbmZvcm1hY2nDs24uIE5vIGVzIHVuYSBlbGltaW5hY2nDs24gdMOhY2l0YSwgZXMgc3VwcmltaXIgc3UgdXNvIGVuIGFkZWxhbnRlLic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1hbGVydC1kZWxldGUtZGF0YS1oZWxpc2EnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnREZWxldGVEYXRhSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIG9rTGFiZWw6IHN0cmluZztcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcbnpcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0RGVsZXRlRGF0YUhlbGlzYUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydERlbGV0ZURhdGFIZWxpc2FDb21wb25lbnRcbiAgKSB7IFxuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIGlmICh0aGlzLnRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBERUZBVUxUX1RJVExFO1xuICAgIH1cbiAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XG4gICAgaWYgKHRoaXMuY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBERUZBVUxUX0NPTlRFTlQ7XG4gICAgfVxuICAgIHRoaXMub2tMYWJlbCA9IGRhdGEub2tMYWJlbDtcbiAgICBpZiAodGhpcy5va0xhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2tMYWJlbCA9ICdMbyBhc3Vtbyc7XG4gICAgfVxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSBkYXRhLmNhbmNlbExhYmVsO1xuICAgIGlmICh0aGlzLmNhbmNlbExhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsTGFiZWwgPSAnTWUgcmV0cmFjdG8nO1xuICAgIH1cbiAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xuICAgICAgfVxuICAgIH0pOyAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuIl19