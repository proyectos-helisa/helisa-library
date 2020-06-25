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
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" >{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\n</div>",
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
    AlertDeleteDataHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertDeleteDataHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1kZWxldGUtZGF0YS1oZWxpc2EvYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFFNUQsYUFBYSxHQUFXLGdEQUFnRDs7SUFDeEUsZUFBZSxHQUFXLDZKQUE2SjtBQUU3TDtJQVlFLHdDQUNTLFNBQXVELEVBQzlCLElBQW9DO1FBRnRFLGlCQTBCQztRQXpCUSxjQUFTLEdBQVQsU0FBUyxDQUE4QztRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFnQztRQUVwRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztTQUNsQztRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUN2RCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxpREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsOFNBQXdEOztpQkFFekQ7Ozs7Z0JBVFEsWUFBWTtnQkFtQnFCLDhCQUE4Qix1QkFBbkUsTUFBTSxTQUFDLGVBQWU7O0lBZ0MzQixxQ0FBQztDQUFBLEFBOUNELElBOENDO1NBekNZLDhCQUE4Qjs7O0lBRXpDLCtDQUFjOztJQUNkLGlEQUFnQjs7SUFDaEIsaURBQWdCOztJQUNoQixxREFBb0I7O0lBR2xCLG1EQUE4RDs7SUFDOUQsOENBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmNvbnN0IERFRkFVTFRfVElUTEU6IHN0cmluZyA9ICfCv0VzdMOhIHNlZ3VybyBxdWUgZGViZSBhbnVsYXIgZXN0YSBpbmZvcm1hY2nDs24/JztcbmNvbnN0IERFRkFVTFRfQ09OVEVOVDogc3RyaW5nID0gJ0FsIGFudWxhciBlc3RlIGNvbmNlcHRvLCBxdWVkYXLDoSBsYSBodWVsbGEgZGUgdG9kbyBsbyBxdWUgc2UgaGl6byBhcG95YWRvcyBlbiBzdSBpbmZvcm1hY2nDs24uIE5vIGVzIHVuYSBlbGltaW5hY2nDs24gdMOhY2l0YSwgZXMgc3VwcmltaXIgc3UgdXNvIGVuIGFkZWxhbnRlLic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1hbGVydC1kZWxldGUtZGF0YS1oZWxpc2EnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnREZWxldGVEYXRhSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIG9rTGFiZWw6IHN0cmluZztcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnREZWxldGVEYXRhSGVsaXNhQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IEFsZXJ0RGVsZXRlRGF0YUhlbGlzYUNvbXBvbmVudFxuICApIHsgXG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgaWYgKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50aXRsZSA9IERFRkFVTFRfVElUTEU7XG4gICAgfVxuICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudDtcbiAgICBpZiAodGhpcy5jb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IERFRkFVTFRfQ09OVEVOVDtcbiAgICB9XG4gICAgdGhpcy5va0xhYmVsID0gZGF0YS5va0xhYmVsO1xuICAgIGlmICh0aGlzLm9rTGFiZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5va0xhYmVsID0gJ0xvIGFzdW1vJztcbiAgICB9XG4gICAgdGhpcy5jYW5jZWxMYWJlbCA9IGRhdGEuY2FuY2VsTGFiZWw7XG4gICAgaWYgKHRoaXMuY2FuY2VsTGFiZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jYW5jZWxMYWJlbCA9ICdNZSByZXRyYWN0byc7XG4gICAgfVxuICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIGRpYWxvZ1JlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMub25DYW5jZWwoKSk7XG4gICAgICB9XG4gICAgfSk7ICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iXX0=