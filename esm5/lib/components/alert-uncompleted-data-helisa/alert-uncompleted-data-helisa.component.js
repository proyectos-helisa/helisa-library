/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * @record
 */
function AlertUncompletedDataHelisaProperties() { }
if (false) {
    /** @type {?} */
    AlertUncompletedDataHelisaProperties.prototype.title;
    /** @type {?} */
    AlertUncompletedDataHelisaProperties.prototype.content;
    /** @type {?} */
    AlertUncompletedDataHelisaProperties.prototype.okLabel;
    /** @type {?} */
    AlertUncompletedDataHelisaProperties.prototype.cancelLabel;
}
/** @type {?} */
var DEFAULT_TITLE = 'No ha suministrado la información necesaria.';
/** @type {?} */
var DEFAULT_CONTENT = 'Si insite en grabar así, este concepto no será utilizable hasta su conclusión satisfactoria, que deberá completar posteriormente modificando en concepto.';
var AlertUncompletedDataHelisaComponent = /** @class */ (function () {
    function AlertUncompletedDataHelisaComponent(dialogRef, data) {
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
    AlertUncompletedDataHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AlertUncompletedDataHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    AlertUncompletedDataHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert-uncompleted-data-helisa',
                    template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  {{ content }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>{{cancelLabel}}</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertUncompletedDataHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertUncompletedDataHelisaComponent;
}());
export { AlertUncompletedDataHelisaComponent };
if (false) {
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.title;
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.content;
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.okLabel;
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.cancelLabel;
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertUncompletedDataHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtdW5jb21wbGV0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRSxtREFLQzs7O0lBSkMscURBQWM7O0lBQ2QsdURBQWdCOztJQUNoQix1REFBZ0I7O0lBQ2hCLDJEQUFvQjs7O0lBR2hCLGFBQWEsR0FBVyw4Q0FBOEM7O0lBQ3RFLGVBQWUsR0FBVywySkFBMko7QUFFM0w7SUFhRSw2Q0FDUyxTQUE0RCxFQUNuQyxJQUEwQztRQUY1RSxpQkEwQkM7UUF6QlEsY0FBUyxHQUFULFNBQVMsQ0FBbUQ7UUFDbkMsU0FBSSxHQUFKLElBQUksQ0FBc0M7UUFFMUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7U0FDbEM7UUFDRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBb0I7WUFDdkQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxzREFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsc0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLDRUQUE2RDs7aUJBRTlEOzs7O2dCQWhCUSxZQUFZO2dEQTJCaEIsTUFBTSxTQUFDLGVBQWU7O0lBZ0MzQiwwQ0FBQztDQUFBLEFBL0NELElBK0NDO1NBMUNZLG1DQUFtQzs7O0lBRTlDLG9EQUFjOztJQUNkLHNEQUFnQjs7SUFDaEIsc0RBQWdCOztJQUNoQiwwREFBb0I7O0lBSWxCLHdEQUFtRTs7SUFDbkUsbURBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmludGVyZmFjZSBBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYVByb3BlcnRpZXMge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIG9rTGFiZWw6IHN0cmluZztcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcbn1cblxuY29uc3QgREVGQVVMVF9USVRMRTogc3RyaW5nID0gJ05vIGhhIHN1bWluaXN0cmFkbyBsYSBpbmZvcm1hY2nDs24gbmVjZXNhcmlhLic7XG5jb25zdCBERUZBVUxUX0NPTlRFTlQ6IHN0cmluZyA9ICdTaSBpbnNpdGUgZW4gZ3JhYmFyIGFzw60sIGVzdGUgY29uY2VwdG8gbm8gc2Vyw6EgdXRpbGl6YWJsZSBoYXN0YSBzdSBjb25jbHVzacOzbiBzYXRpc2ZhY3RvcmlhLCBxdWUgZGViZXLDoSBjb21wbGV0YXIgcG9zdGVyaW9ybWVudGUgbW9kaWZpY2FuZG8gZW4gY29uY2VwdG8uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLWFsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtdW5jb21wbGV0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBva0xhYmVsOiBzdHJpbmc7XG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRVbmNvbXBsZXRlZERhdGFIZWxpc2FDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogQWxlcnRVbmNvbXBsZXRlZERhdGFIZWxpc2FQcm9wZXJ0aWVzXG4gICkgeyBcbiAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICBpZiAodGhpcy50aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRpdGxlID0gREVGQVVMVF9USVRMRTtcbiAgICB9XG4gICAgdGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xuICAgIGlmICh0aGlzLmNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jb250ZW50ID0gREVGQVVMVF9DT05URU5UO1xuICAgIH1cbiAgICB0aGlzLm9rTGFiZWwgPSBkYXRhLm9rTGFiZWw7XG4gICAgaWYgKHRoaXMub2tMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9rTGFiZWwgPSAnTG8gYXN1bW8nO1xuICAgIH1cbiAgICB0aGlzLmNhbmNlbExhYmVsID0gZGF0YS5jYW5jZWxMYWJlbDtcbiAgICBpZiAodGhpcy5jYW5jZWxMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNhbmNlbExhYmVsID0gJ01lIHJldHJhY3RvJztcbiAgICB9XG4gICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgZGlhbG9nUmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5vbkNhbmNlbCgpKTtcbiAgICAgIH1cbiAgICB9KTsgICAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==