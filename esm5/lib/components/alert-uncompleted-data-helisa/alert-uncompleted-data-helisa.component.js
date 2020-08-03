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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtdW5jb21wbGV0ZWQtZGF0YS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRSxtREFLQzs7O0lBSkMscURBQWM7O0lBQ2QsdURBQWdCOztJQUNoQix1REFBZ0I7O0lBQ2hCLDJEQUFvQjs7O0lBR2hCLGFBQWEsR0FBVyw4Q0FBOEM7O0lBQ3RFLGVBQWUsR0FBVywySkFBMko7QUFFM0w7SUFhRSw2Q0FDUyxTQUE0RCxFQUNuQyxJQUEwQztRQUY1RSxpQkEwQkM7UUF6QlEsY0FBUyxHQUFULFNBQVMsQ0FBbUQ7UUFDbkMsU0FBSSxHQUFKLElBQUksQ0FBc0M7UUFFMUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7U0FDbEM7UUFDRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBb0I7WUFDdkQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxzREFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsc0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLDRUQUE2RDs7aUJBRTlEOzs7O2dCQWhCUSxZQUFZO2dEQTJCaEIsTUFBTSxTQUFDLGVBQWU7O0lBZ0MzQiwwQ0FBQztDQUFBLEFBL0NELElBK0NDO1NBMUNZLG1DQUFtQzs7O0lBRTlDLG9EQUFjOztJQUNkLHNEQUFnQjs7SUFDaEIsc0RBQWdCOztJQUNoQiwwREFBb0I7O0lBSWxCLHdEQUFtRTs7SUFDbkUsbURBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmludGVyZmFjZSBBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYVByb3BlcnRpZXMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIG9rTGFiZWw6IHN0cmluZztcclxuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1RJVExFOiBzdHJpbmcgPSAnTm8gaGEgc3VtaW5pc3RyYWRvIGxhIGluZm9ybWFjacOzbiBuZWNlc2FyaWEuJztcclxuY29uc3QgREVGQVVMVF9DT05URU5UOiBzdHJpbmcgPSAnU2kgaW5zaXRlIGVuIGdyYWJhciBhc8OtLCBlc3RlIGNvbmNlcHRvIG5vIHNlcsOhIHV0aWxpemFibGUgaGFzdGEgc3UgY29uY2x1c2nDs24gc2F0aXNmYWN0b3JpYSwgcXVlIGRlYmVyw6EgY29tcGxldGFyIHBvc3Rlcmlvcm1lbnRlIG1vZGlmaWNhbmRvIGVuIGNvbmNlcHRvLic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1hbGVydC11bmNvbXBsZXRlZC1kYXRhLWhlbGlzYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC11bmNvbXBsZXRlZC1kYXRhLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIG9rTGFiZWw6IHN0cmluZztcclxuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRVbmNvbXBsZXRlZERhdGFIZWxpc2FDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYVByb3BlcnRpZXNcclxuICApIHsgXHJcbiAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcclxuICAgIGlmICh0aGlzLnRpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IERFRkFVTFRfVElUTEU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcbiAgICBpZiAodGhpcy5jb250ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5jb250ZW50ID0gREVGQVVMVF9DT05URU5UO1xyXG4gICAgfVxyXG4gICAgdGhpcy5va0xhYmVsID0gZGF0YS5va0xhYmVsO1xyXG4gICAgaWYgKHRoaXMub2tMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub2tMYWJlbCA9ICdMbyBhc3Vtbyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhbmNlbExhYmVsID0gZGF0YS5jYW5jZWxMYWJlbDtcclxuICAgIGlmICh0aGlzLmNhbmNlbExhYmVsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5jYW5jZWxMYWJlbCA9ICdNZSByZXRyYWN0byc7XHJcbiAgICB9XHJcbiAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcclxuICAgIGRpYWxvZ1JlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTsgICAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19