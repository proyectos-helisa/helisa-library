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
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS9hbGVydC1sb3N0LWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRSw0Q0FLQzs7O0lBSkMsOENBQWM7O0lBQ2QsZ0RBQWdCOztJQUNoQixnREFBZ0I7O0lBQ2hCLG9EQUFvQjs7O0lBR2hCLGFBQWEsR0FBVyw0Q0FBNEM7O0lBQ3BFLGVBQWUsR0FBVywrSkFBK0o7QUFFL0w7SUFZRSxzQ0FDUyxTQUFxRCxFQUM1QixJQUFtQztRQUZyRSxpQkEwQkM7UUF6QlEsY0FBUyxHQUFULFNBQVMsQ0FBNEM7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBK0I7UUFFbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7U0FDbEM7UUFDRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBb0I7WUFDdkQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLGdUQUFzRDs7aUJBRXZEOzs7O2dCQWhCUSxZQUFZO2dEQTBCaEIsTUFBTSxTQUFDLGVBQWU7O0lBZ0MzQixtQ0FBQztDQUFBLEFBOUNELElBOENDO1NBekNZLDRCQUE0Qjs7O0lBRXZDLDZDQUFjOztJQUNkLCtDQUFnQjs7SUFDaEIsK0NBQWdCOztJQUNoQixtREFBb0I7O0lBR2xCLGlEQUE0RDs7SUFDNUQsNENBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmludGVyZmFjZSBBbGVydExvc3REYXRhSGVsaXNhUHJvcGVydGllcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgb2tMYWJlbDogc3RyaW5nO1xuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX1RJVExFOiBzdHJpbmcgPSAnwr9Fc3TDoSBzZWd1cm8gZGUgcXVlcmVyIHBlcmRlciBsbyB5YSBoZWNobz8nO1xuY29uc3QgREVGQVVMVF9DT05URU5UOiBzdHJpbmcgPSAnU2kgbm8gZXN0w6Egc2VndXJvLCBwdWVkZSBjb250aW51YXIgbyBcImFwbGljYXJcIiB5IHBvc3Rlcmlvcm1lbnRlIGN1YW5kbyB0ZW5nYSBjbGFyYSBsYXMgcmVzcHVlc3RhcywgdXNhbmRvIGxhIG9wY2nDs24gZGUgbW9kaWZpY2FyIHBvZHLDoSBjb21wbGV0YXIgZWwgY29uY2VwdG8uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLWFsZXJ0LWxvc3QtZGF0YS1oZWxpc2EnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWxvc3QtZGF0YS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydExvc3REYXRhSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIG9rTGFiZWw6IHN0cmluZztcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRMb3N0RGF0YUhlbGlzYUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydExvc3REYXRhSGVsaXNhUHJvcGVydGllc1xuICApIHsgXG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgaWYgKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50aXRsZSA9IERFRkFVTFRfVElUTEU7XG4gICAgfVxuICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudDtcbiAgICBpZiAodGhpcy5jb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IERFRkFVTFRfQ09OVEVOVDtcbiAgICB9XG4gICAgdGhpcy5va0xhYmVsID0gZGF0YS5va0xhYmVsO1xuICAgIGlmICh0aGlzLm9rTGFiZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5va0xhYmVsID0gJ0xvIGFzdW1vJztcbiAgICB9XG4gICAgdGhpcy5jYW5jZWxMYWJlbCA9IGRhdGEuY2FuY2VsTGFiZWw7XG4gICAgaWYgKHRoaXMuY2FuY2VsTGFiZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jYW5jZWxMYWJlbCA9ICdNZSByZXRyYWN0byc7XG4gICAgfVxuICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIGRpYWxvZ1JlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMub25DYW5jZWwoKSk7XG4gICAgICB9XG4gICAgfSk7ICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iXX0=