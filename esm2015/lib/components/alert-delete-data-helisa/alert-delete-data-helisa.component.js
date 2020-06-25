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
                template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"false\" >{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1kZWxldGUtZGF0YS1oZWxpc2EvYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7TUFFNUQsYUFBYSxHQUFXLGdEQUFnRDs7TUFDeEUsZUFBZSxHQUFXLDZKQUE2SjtBQU83TCxNQUFNLE9BQU8sOEJBQThCOzs7OztJQU96QyxZQUNTLFNBQXVELEVBQzlCLElBQW9DO1FBRDdELGNBQVMsR0FBVCxTQUFTLENBQThDO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQWdDO1FBRXBFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1NBQ2xDO1FBQ0QsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDOUIsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUMzRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyw4U0FBd0Q7O2FBRXpEOzs7O1lBVFEsWUFBWTtZQW1CcUIsOEJBQThCLHVCQUFuRSxNQUFNLFNBQUMsZUFBZTs7OztJQVB6QiwrQ0FBYzs7SUFDZCxpREFBZ0I7O0lBQ2hCLGlEQUFnQjs7SUFDaEIscURBQW9COztJQUdsQixtREFBOEQ7O0lBQzlELDhDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5jb25zdCBERUZBVUxUX1RJVExFOiBzdHJpbmcgPSAnwr9Fc3TDoSBzZWd1cm8gcXVlIGRlYmUgYW51bGFyIGVzdGEgaW5mb3JtYWNpw7NuPyc7XG5jb25zdCBERUZBVUxUX0NPTlRFTlQ6IHN0cmluZyA9ICdBbCBhbnVsYXIgZXN0ZSBjb25jZXB0bywgcXVlZGFyw6EgbGEgaHVlbGxhIGRlIHRvZG8gbG8gcXVlIHNlIGhpem8gYXBveWFkb3MgZW4gc3UgaW5mb3JtYWNpw7NuLiBObyBlcyB1bmEgZWxpbWluYWNpw7NuIHTDoWNpdGEsIGVzIHN1cHJpbWlyIHN1IHVzbyBlbiBhZGVsYW50ZS4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWRlbGV0ZS1kYXRhLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWRlbGV0ZS1kYXRhLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0RGVsZXRlRGF0YUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBva0xhYmVsOiBzdHJpbmc7XG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0RGVsZXRlRGF0YUhlbGlzYUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydERlbGV0ZURhdGFIZWxpc2FDb21wb25lbnRcbiAgKSB7IFxuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIGlmICh0aGlzLnRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudGl0bGUgPSBERUZBVUxUX1RJVExFO1xuICAgIH1cbiAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XG4gICAgaWYgKHRoaXMuY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBERUZBVUxUX0NPTlRFTlQ7XG4gICAgfVxuICAgIHRoaXMub2tMYWJlbCA9IGRhdGEub2tMYWJlbDtcbiAgICBpZiAodGhpcy5va0xhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2tMYWJlbCA9ICdMbyBhc3Vtbyc7XG4gICAgfVxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSBkYXRhLmNhbmNlbExhYmVsO1xuICAgIGlmICh0aGlzLmNhbmNlbExhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsTGFiZWwgPSAnTWUgcmV0cmFjdG8nO1xuICAgIH1cbiAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xuICAgICAgfVxuICAgIH0pOyAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuIl19