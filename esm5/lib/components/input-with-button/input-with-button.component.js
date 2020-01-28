/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
var InputWithButtonComponent = /** @class */ (function () {
    function InputWithButtonComponent() {
        this.placeholder = "";
        this.inputFormControl = new FormControl('', Validators.required);
        this.requiredMessage = "El campo es requerido";
        this.value = "";
        this.done = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InputWithButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.value != "") {
            this.inputFormControl.setValue(this.value);
        }
    };
    /**
     * @return {?}
     */
    InputWithButtonComponent.prototype.onDone = /**
     * @return {?}
     */
    function () {
        if (this.inputFormControl.valid) {
            this.done.emit(this.inputFormControl.value);
        }
    };
    /**
     * @return {?}
     */
    InputWithButtonComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.cancel.emit();
    };
    InputWithButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-input-with-button',
                    template: "<div>\n  <mat-form-field>\n    <input matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\n      {{ requiredMessage }}\n    </mat-error>\n  </mat-form-field>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    InputWithButtonComponent.ctorParameters = function () { return []; };
    InputWithButtonComponent.propDecorators = {
        placeholder: [{ type: Input }],
        inputFormControl: [{ type: Input }],
        requiredMessage: [{ type: Input }],
        value: [{ type: Input }],
        done: [{ type: Output }],
        cancel: [{ type: Output }]
    };
    return InputWithButtonComponent;
}());
export { InputWithButtonComponent };
if (false) {
    /** @type {?} */
    InputWithButtonComponent.prototype.placeholder;
    /** @type {?} */
    InputWithButtonComponent.prototype.inputFormControl;
    /** @type {?} */
    InputWithButtonComponent.prototype.requiredMessage;
    /** @type {?} */
    InputWithButtonComponent.prototype.value;
    /** @type {?} */
    InputWithButtonComponent.prototype.done;
    /** @type {?} */
    InputWithButtonComponent.prototype.cancel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtd2l0aC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LXdpdGgtYnV0dG9uL2lucHV0LXdpdGgtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpEO0lBZ0JFO1FBVFMsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQWUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RSxvQkFBZSxHQUFVLHVCQUF1QixDQUFDO1FBQ2pELFVBQUssR0FBVSxFQUFFLENBQUM7UUFFakIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFHM0IsQ0FBQzs7OztJQUVqQiwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7OztJQUdELHlDQUFNOzs7SUFBTjtRQUNFLElBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFDOUI7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLCtZQUFpRDs7aUJBRWxEOzs7Ozs4QkFHRSxLQUFLO21DQUNMLEtBQUs7a0NBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUVMLE1BQU07eUJBQ04sTUFBTTs7SUF1QlQsK0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQS9CWSx3QkFBd0I7OztJQUVuQywrQ0FBaUM7O0lBQ2pDLG9EQUFnRjs7SUFDaEYsbURBQTBEOztJQUMxRCx5Q0FBMkI7O0lBRTNCLHdDQUE0Qzs7SUFDNUMsMENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1pbnB1dC13aXRoLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC13aXRoLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXdpdGgtYnV0dG9uLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRXaXRoQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID1cIlwiOyAgXG4gIEBJbnB1dCgpIGlucHV0Rm9ybUNvbnRyb2w6Rm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIEBJbnB1dCgpIHJlcXVpcmVkTWVzc2FnZTpzdHJpbmcgPSBcIkVsIGNhbXBvIGVzIHJlcXVlcmlkb1wiO1xuICBASW5wdXQoKSB2YWx1ZTpzdHJpbmcgPSBcIlwiO1xuXG4gIEBPdXRwdXQoKSBkb25lID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYodGhpcy52YWx1ZSAhPSBcIlwiKXtcbiAgICAgIHRoaXMuaW5wdXRGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uRG9uZSgpe1xuICAgIGlmKHRoaXMuaW5wdXRGb3JtQ29udHJvbC52YWxpZClcbiAgICB7XG4gICAgICB0aGlzLmRvbmUuZW1pdCh0aGlzLmlucHV0Rm9ybUNvbnRyb2wudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsKCl7XG4gICAgdGhpcy5jYW5jZWwuZW1pdCgpO1xuICB9XG5cbn1cbiJdfQ==