/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/** @type {?} */
const DEFAULT_TITLE = '¿Está seguro que debe anular esta información?';
/** @type {?} */
const DEFAULT_CONTENT = 'Al anular este concepto, quedará la huella de todo lo que se hizo apoyados en su información. No es una eliminación tácita, es suprimir su uso en adelante.';
export class AlertDeleteDataHelisaComponent {
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
AlertDeleteDataHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-alert-delete-data-helisa',
                template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  {{ content }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"false\" >{{cancelLabel}}</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertDeleteDataHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: AlertDeleteDataHelisaComponent, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1kZWxldGUtZGF0YS1oZWxpc2EvYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7TUFFNUQsYUFBYSxHQUFXLGdEQUFnRDs7TUFDeEUsZUFBZSxHQUFXLDZKQUE2SjtBQU83TCxNQUFNLE9BQU8sOEJBQThCOzs7OztJQU96QyxZQUNTLFNBQXVELEVBQzlCLElBQW9DO1FBRDdELGNBQVMsR0FBVCxTQUFTLENBQThDO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQWdDO1FBRXBFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1NBQ2xDO1FBQ0QsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDOUIsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUMzRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyw0VEFBd0Q7O2FBRXpEOzs7O1lBVFEsWUFBWTtZQW1CcUIsOEJBQThCLHVCQUFuRSxNQUFNLFNBQUMsZUFBZTs7OztJQVB6QiwrQ0FBYzs7SUFDZCxpREFBZ0I7O0lBQ2hCLGlEQUFnQjs7SUFDaEIscURBQW9COztJQUdsQixtREFBOEQ7O0lBQzlELDhDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5jb25zdCBERUZBVUxUX1RJVExFOiBzdHJpbmcgPSAnwr9Fc3TDoSBzZWd1cm8gcXVlIGRlYmUgYW51bGFyIGVzdGEgaW5mb3JtYWNpw7NuPyc7XHJcbmNvbnN0IERFRkFVTFRfQ09OVEVOVDogc3RyaW5nID0gJ0FsIGFudWxhciBlc3RlIGNvbmNlcHRvLCBxdWVkYXLDoSBsYSBodWVsbGEgZGUgdG9kbyBsbyBxdWUgc2UgaGl6byBhcG95YWRvcyBlbiBzdSBpbmZvcm1hY2nDs24uIE5vIGVzIHVuYSBlbGltaW5hY2nDs24gdMOhY2l0YSwgZXMgc3VwcmltaXIgc3UgdXNvIGVuIGFkZWxhbnRlLic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1hbGVydC1kZWxldGUtZGF0YS1oZWxpc2EnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1kZWxldGUtZGF0YS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWRlbGV0ZS1kYXRhLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydERlbGV0ZURhdGFIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBva0xhYmVsOiBzdHJpbmc7XHJcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnREZWxldGVEYXRhSGVsaXNhQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogQWxlcnREZWxldGVEYXRhSGVsaXNhQ29tcG9uZW50XHJcbiAgKSB7IFxyXG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XHJcbiAgICBpZiAodGhpcy50aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSBERUZBVUxUX1RJVExFO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xyXG4gICAgaWYgKHRoaXMuY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY29udGVudCA9IERFRkFVTFRfQ09OVEVOVDtcclxuICAgIH1cclxuICAgIHRoaXMub2tMYWJlbCA9IGRhdGEub2tMYWJlbDtcclxuICAgIGlmICh0aGlzLm9rTGFiZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm9rTGFiZWwgPSAnTG8gYXN1bW8nO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYW5jZWxMYWJlbCA9IGRhdGEuY2FuY2VsTGFiZWw7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY2FuY2VsTGFiZWwgPSAnTWUgcmV0cmFjdG8nO1xyXG4gICAgfVxyXG4gICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XHJcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5vbkNhbmNlbCgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7ICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==