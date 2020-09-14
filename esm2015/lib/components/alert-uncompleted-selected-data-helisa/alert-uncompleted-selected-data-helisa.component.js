/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * @record
 */
function AlertUncompletedSelectedDataHelisaProperties() { }
if (false) {
    /** @type {?} */
    AlertUncompletedSelectedDataHelisaProperties.prototype.title;
    /** @type {?} */
    AlertUncompletedSelectedDataHelisaProperties.prototype.content;
    /** @type {?} */
    AlertUncompletedSelectedDataHelisaProperties.prototype.okLabel;
    /** @type {?} */
    AlertUncompletedSelectedDataHelisaProperties.prototype.cancelLabel;
}
/** @type {?} */
const DEFAULT_CONTENT = 'Elemento sin información requerida. Modifíquelo para completarlo.';
export class AlertUncompletedSelectedDataHelisaComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.content = data.content;
        if (this.content === undefined) {
            this.content = DEFAULT_CONTENT;
        }
        this.okLabel = data.okLabel;
        if (this.okLabel === undefined) {
            this.okLabel = 'Aceptar';
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
AlertUncompletedSelectedDataHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-alert-uncompleted-selected-data-helisa',
                template: "<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertUncompletedSelectedDataHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    AlertUncompletedSelectedDataHelisaComponent.prototype.content;
    /** @type {?} */
    AlertUncompletedSelectedDataHelisaComponent.prototype.okLabel;
    /** @type {?} */
    AlertUncompletedSelectedDataHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertUncompletedSelectedDataHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtdW5jb21wbGV0ZWQtc2VsZWN0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LXVuY29tcGxldGVkLXNlbGVjdGVkLWRhdGEtaGVsaXNhL2FsZXJ0LXVuY29tcGxldGVkLXNlbGVjdGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxNQUFNLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRSwyREFLQzs7O0lBSkMsNkRBQWM7O0lBQ2QsK0RBQWdCOztJQUNoQiwrREFBZ0I7O0lBQ2hCLG1FQUFvQjs7O01BR2hCLGVBQWUsR0FBVyxtRUFBbUU7QUFPbkcsTUFBTSxPQUFPLDJDQUEyQzs7Ozs7SUFLdEQsWUFDUyxTQUFvRSxFQUMzQyxJQUFrRDtRQUQzRSxjQUFTLEdBQVQsU0FBUyxDQUEyRDtRQUMzQyxTQUFJLEdBQUosSUFBSSxDQUE4QztRQUVsRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzFCO1FBQ0QsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDOUIsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUMzRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCwwTEFBc0U7O2FBRXZFOzs7O1lBZlEsWUFBWTs0Q0F1QmhCLE1BQU0sU0FBQyxlQUFlOzs7O0lBTHpCLDhEQUFnQjs7SUFDaEIsOERBQWdCOztJQUdkLGdFQUEyRTs7SUFDM0UsMkRBQWtGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW50ZXJmYWNlIEFsZXJ0VW5jb21wbGV0ZWRTZWxlY3RlZERhdGFIZWxpc2FQcm9wZXJ0aWVzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBva0xhYmVsOiBzdHJpbmc7XG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XG59XG5cbmNvbnN0IERFRkFVTFRfQ09OVEVOVDogc3RyaW5nID0gJ0VsZW1lbnRvIHNpbiBpbmZvcm1hY2nDs24gcmVxdWVyaWRhLiBNb2RpZsOtcXVlbG8gcGFyYSBjb21wbGV0YXJsby4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtYWxlcnQtdW5jb21wbGV0ZWQtc2VsZWN0ZWQtZGF0YS1oZWxpc2EnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtdW5jb21wbGV0ZWQtc2VsZWN0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC11bmNvbXBsZXRlZC1zZWxlY3RlZC1kYXRhLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0VW5jb21wbGV0ZWRTZWxlY3RlZERhdGFIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgb2tMYWJlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydFVuY29tcGxldGVkU2VsZWN0ZWREYXRhSGVsaXNhQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IEFsZXJ0VW5jb21wbGV0ZWRTZWxlY3RlZERhdGFIZWxpc2FQcm9wZXJ0aWVzXG4gICkge1xuICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudDtcbiAgICBpZiAodGhpcy5jb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IERFRkFVTFRfQ09OVEVOVDtcbiAgICB9XG4gICAgdGhpcy5va0xhYmVsID0gZGF0YS5va0xhYmVsO1xuICAgIGlmICh0aGlzLm9rTGFiZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5va0xhYmVsID0gJ0FjZXB0YXInO1xuICAgIH1cbiAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iXX0=