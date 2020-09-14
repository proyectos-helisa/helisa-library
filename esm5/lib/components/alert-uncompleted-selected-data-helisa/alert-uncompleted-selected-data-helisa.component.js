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
var DEFAULT_CONTENT = 'Elemento sin información requerida. Modifíquelo para completarlo.';
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
                    template: "<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtdW5jb21wbGV0ZWQtc2VsZWN0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LXVuY29tcGxldGVkLXNlbGVjdGVkLWRhdGEtaGVsaXNhL2FsZXJ0LXVuY29tcGxldGVkLXNlbGVjdGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxNQUFNLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRSwyREFLQzs7O0lBSkMsNkRBQWM7O0lBQ2QsK0RBQWdCOztJQUNoQiwrREFBZ0I7O0lBQ2hCLG1FQUFvQjs7O0lBR2hCLGVBQWUsR0FBVyxtRUFBbUU7QUFFbkc7SUFVRSxxREFDUyxTQUFvRSxFQUMzQyxJQUFrRDtRQUZwRixpQkFrQkM7UUFqQlEsY0FBUyxHQUFULFNBQVMsQ0FBMkQ7UUFDM0MsU0FBSSxHQUFKLElBQUksQ0FBOEM7UUFFbEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztTQUMxQjtRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUN2RCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDhEQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCw4REFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRDQUE0QztvQkFDdEQsMExBQXNFOztpQkFFdkU7Ozs7Z0JBZlEsWUFBWTtnREF1QmhCLE1BQU0sU0FBQyxlQUFlOztJQXdCM0Isa0RBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQS9CWSwyQ0FBMkM7OztJQUV0RCw4REFBZ0I7O0lBQ2hCLDhEQUFnQjs7SUFHZCxnRUFBMkU7O0lBQzNFLDJEQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmludGVyZmFjZSBBbGVydFVuY29tcGxldGVkU2VsZWN0ZWREYXRhSGVsaXNhUHJvcGVydGllcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgb2tMYWJlbDogc3RyaW5nO1xuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX0NPTlRFTlQ6IHN0cmluZyA9ICdFbGVtZW50byBzaW4gaW5mb3JtYWNpw7NuIHJlcXVlcmlkYS4gTW9kaWbDrXF1ZWxvIHBhcmEgY29tcGxldGFybG8uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLWFsZXJ0LXVuY29tcGxldGVkLXNlbGVjdGVkLWRhdGEtaGVsaXNhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LXVuY29tcGxldGVkLXNlbGVjdGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtdW5jb21wbGV0ZWQtc2VsZWN0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydFVuY29tcGxldGVkU2VsZWN0ZWREYXRhSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb250ZW50OiBzdHJpbmc7XG4gIG9rTGFiZWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRVbmNvbXBsZXRlZFNlbGVjdGVkRGF0YUhlbGlzYUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydFVuY29tcGxldGVkU2VsZWN0ZWREYXRhSGVsaXNhUHJvcGVydGllc1xuICApIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XG4gICAgaWYgKHRoaXMuY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBERUZBVUxUX0NPTlRFTlQ7XG4gICAgfVxuICAgIHRoaXMub2tMYWJlbCA9IGRhdGEub2tMYWJlbDtcbiAgICBpZiAodGhpcy5va0xhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2tMYWJlbCA9ICdBY2VwdGFyJztcbiAgICB9XG4gICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgZGlhbG9nUmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5vbkNhbmNlbCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuIl19