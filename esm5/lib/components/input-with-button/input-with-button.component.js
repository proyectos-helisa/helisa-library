/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
var InputWithButtonComponent = /** @class */ (function () {
    function InputWithButtonComponent() {
        this.placeholder = '';
        this.inputFormControl = new FormControl('', Validators.required);
        this.requiredMessage = 'El campo es requerido';
        this.value = '';
        this.isFocused = false;
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
        if (this.value !== '') {
            this.inputFormControl.setValue(this.value);
        }
        this.nameField.nativeElement.focus();
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
                    template: "<div>\r\n  <mat-form-field>\r\n    <input #inputText  matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \r\n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\r\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\r\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\r\n      {{ requiredMessage }}\r\n    </mat-error>\r\n  </mat-form-field>\r\n</div>\r\n",
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
        isFocused: [{ type: Input }],
        nameField: [{ type: ViewChild, args: ['inputText',] }],
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
    InputWithButtonComponent.prototype.isFocused;
    /** @type {?} */
    InputWithButtonComponent.prototype.nameField;
    /** @type {?} */
    InputWithButtonComponent.prototype.done;
    /** @type {?} */
    InputWithButtonComponent.prototype.cancel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtd2l0aC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LXdpdGgtYnV0dG9uL2lucHV0LXdpdGgtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQ7SUFrQkU7UUFYUyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxvQkFBZSxHQUFXLHVCQUF1QixDQUFDO1FBQ2xELFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUcxQixTQUFJLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDeEQsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBR2hELENBQUM7Ozs7SUFFakIsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFHRCx5Q0FBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQywrYUFBaUQ7O2lCQUVsRDs7Ozs7OEJBR0UsS0FBSzttQ0FDTCxLQUFLO2tDQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLFNBQVMsU0FBQyxXQUFXO3VCQUVyQixNQUFNO3lCQUNOLE1BQU07O0lBdUJULCtCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FqQ1ksd0JBQXdCOzs7SUFFbkMsK0NBQWtDOztJQUNsQyxvREFBa0Y7O0lBQ2xGLG1EQUEyRDs7SUFDM0QseUNBQTRCOztJQUM1Qiw2Q0FBb0M7O0lBQ3BDLDZDQUE4Qzs7SUFFOUMsd0NBQWtFOztJQUNsRSwwQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1pbnB1dC13aXRoLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXdpdGgtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC13aXRoLWJ1dHRvbi5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFdpdGhCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaW5wdXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkTWVzc2FnZTogc3RyaW5nID0gJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbyc7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0VGV4dCcpIG5hbWVGaWVsZDogRWxlbWVudFJlZjtcclxuXHJcbiAgQE91dHB1dCgpIGRvbmU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5pbnB1dEZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5uYW1lRmllbGQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcblxyXG4gIG9uRG9uZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0Rm9ybUNvbnRyb2wudmFsaWQpIHtcclxuICAgICAgdGhpcy5kb25lLmVtaXQodGhpcy5pbnB1dEZvcm1Db250cm9sLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYW5jZWwuZW1pdCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19