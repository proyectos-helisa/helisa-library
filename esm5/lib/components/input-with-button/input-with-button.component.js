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
                    template: "<div>\n  <mat-form-field>\n    <input #inputText  matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\n      {{ requiredMessage }}\n    </mat-error>\n  </mat-form-field>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtd2l0aC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LXdpdGgtYnV0dG9uL2lucHV0LXdpdGgtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQ7SUFrQkU7UUFYUyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxvQkFBZSxHQUFXLHVCQUF1QixDQUFDO1FBQ2xELFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUcxQixTQUFJLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDeEQsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBR2hELENBQUM7Ozs7SUFFakIsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFHRCx5Q0FBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQywyWkFBaUQ7O2lCQUVsRDs7Ozs7OEJBR0UsS0FBSzttQ0FDTCxLQUFLO2tDQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLFNBQVMsU0FBQyxXQUFXO3VCQUVyQixNQUFNO3lCQUNOLE1BQU07O0lBdUJULCtCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FqQ1ksd0JBQXdCOzs7SUFFbkMsK0NBQWtDOztJQUNsQyxvREFBa0Y7O0lBQ2xGLG1EQUEyRDs7SUFDM0QseUNBQTRCOztJQUM1Qiw2Q0FBb0M7O0lBQ3BDLDZDQUE4Qzs7SUFFOUMsd0NBQWtFOztJQUNsRSwwQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtaW5wdXQtd2l0aC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtd2l0aC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC13aXRoLWJ1dHRvbi5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0V2l0aEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpbnB1dEZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIEBJbnB1dCgpIHJlcXVpcmVkTWVzc2FnZTogc3RyaW5nID0gJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbyc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0VGV4dCcpIG5hbWVGaWVsZDogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCkgZG9uZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuaW5wdXRGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5uYW1lRmllbGQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cblxuICBvbkRvbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRGb3JtQ29udHJvbC52YWxpZCkge1xuICAgICAgdGhpcy5kb25lLmVtaXQodGhpcy5pbnB1dEZvcm1Db250cm9sLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbC5lbWl0KCk7XG4gIH1cblxufVxuIl19