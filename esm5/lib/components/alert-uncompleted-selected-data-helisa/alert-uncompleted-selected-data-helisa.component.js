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
var DEFAULT_CONTENT = 'Este registro no esta completo. Modifíquelo para poderlo utilizar.';
var AlertUncompletedSelectedDataHelisaComponent = /** @class */ (function () {
    function AlertUncompletedSelectedDataHelisaComponent(dialogRef, data) {
        var _this = this;
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
        function (event) {
            if (event.code === 'Escape') {
                _this.dialogRef.close(_this.onCancel());
            }
        }));
    }
    /**
     * @return {?}
     */
    AlertUncompletedSelectedDataHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AlertUncompletedSelectedDataHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    AlertUncompletedSelectedDataHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert-uncompleted-selected-data-helisa',
                    template: "<div mat-dialog-content>\r\n  {{ content }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertUncompletedSelectedDataHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertUncompletedSelectedDataHelisaComponent;
}());
export { AlertUncompletedSelectedDataHelisaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtdW5jb21wbGV0ZWQtc2VsZWN0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LXVuY29tcGxldGVkLXNlbGVjdGVkLWRhdGEtaGVsaXNhL2FsZXJ0LXVuY29tcGxldGVkLXNlbGVjdGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRSwyREFLQzs7O0lBSkMsNkRBQWM7O0lBQ2QsK0RBQWdCOztJQUNoQiwrREFBZ0I7O0lBQ2hCLG1FQUFvQjs7O0lBR2hCLGVBQWUsR0FBVyxvRUFBb0U7QUFFcEc7SUFVRSxxREFDUyxTQUFvRSxFQUMzQyxJQUFrRDtRQUZwRixpQkFrQkM7UUFqQlEsY0FBUyxHQUFULFNBQVMsQ0FBMkQ7UUFDM0MsU0FBSSxHQUFKLElBQUksQ0FBOEM7UUFFbEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztTQUMxQjtRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUN2RCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDhEQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCw4REFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRDQUE0QztvQkFDdEQsc01BQXNFOztpQkFFdkU7Ozs7Z0JBZlEsWUFBWTtnREF1QmhCLE1BQU0sU0FBQyxlQUFlOztJQXdCM0Isa0RBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQS9CWSwyQ0FBMkM7OztJQUV0RCw4REFBZ0I7O0lBQ2hCLDhEQUFnQjs7SUFHZCxnRUFBMkU7O0lBQzNFLDJEQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbnRlcmZhY2UgQWxlcnRVbmNvbXBsZXRlZFNlbGVjdGVkRGF0YUhlbGlzYVByb3BlcnRpZXMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIG9rTGFiZWw6IHN0cmluZztcclxuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX0NPTlRFTlQ6IHN0cmluZyA9ICdFc3RlIHJlZ2lzdHJvIG5vIGVzdGEgY29tcGxldG8uIE1vZGlmw61xdWVsbyBwYXJhIHBvZGVybG8gdXRpbGl6YXIuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWFsZXJ0LXVuY29tcGxldGVkLXNlbGVjdGVkLWRhdGEtaGVsaXNhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtdW5jb21wbGV0ZWQtc2VsZWN0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LXVuY29tcGxldGVkLXNlbGVjdGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0VW5jb21wbGV0ZWRTZWxlY3RlZERhdGFIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgb2tMYWJlbDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydFVuY29tcGxldGVkU2VsZWN0ZWREYXRhSGVsaXNhQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogQWxlcnRVbmNvbXBsZXRlZFNlbGVjdGVkRGF0YUhlbGlzYVByb3BlcnRpZXNcclxuICApIHsgXHJcbiAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcbiAgICBpZiAodGhpcy5jb250ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5jb250ZW50ID0gREVGQVVMVF9DT05URU5UO1xyXG4gICAgfVxyXG4gICAgdGhpcy5va0xhYmVsID0gZGF0YS5va0xhYmVsO1xyXG4gICAgaWYgKHRoaXMub2tMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub2tMYWJlbCA9ICdBY2VwdGFyJztcclxuICAgIH1cclxuICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xyXG4gICAgZGlhbG9nUmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMub25DYW5jZWwoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=