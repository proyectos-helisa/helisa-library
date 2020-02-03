/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export class InputWithButtonComponent {
    constructor() {
        this.placeholder = '';
        this.inputFormControl = new FormControl('', Validators.required);
        this.requiredMessage = 'El campo es requerido';
        this.value = '';
        this.done = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.value !== '') {
            this.inputFormControl.setValue(this.value);
        }
    }
    /**
     * @return {?}
     */
    onDone() {
        if (this.inputFormControl.valid) {
            this.done.emit(this.inputFormControl.value);
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancel.emit();
    }
}
InputWithButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-input-with-button',
                template: "<div>\r\n  <mat-form-field>\r\n    <input matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \r\n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\r\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\r\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\r\n      {{ requiredMessage }}\r\n    </mat-error>\r\n  </mat-form-field>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
InputWithButtonComponent.ctorParameters = () => [];
InputWithButtonComponent.propDecorators = {
    placeholder: [{ type: Input }],
    inputFormControl: [{ type: Input }],
    requiredMessage: [{ type: Input }],
    value: [{ type: Input }],
    done: [{ type: Output }],
    cancel: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtd2l0aC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LXdpdGgtYnV0dG9uL2lucHV0LXdpdGgtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3pELE1BQU0sT0FBTyx3QkFBd0I7SUFXbkM7UUFUUyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxvQkFBZSxHQUFXLHVCQUF1QixDQUFDO1FBQ2xELFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbEIsU0FBSSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3hELFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUdoRCxDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7OztJQUdELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsbWFBQWlEOzthQUVsRDs7Ozs7MEJBR0UsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFFTCxNQUFNO3FCQUNOLE1BQU07Ozs7SUFOUCwrQ0FBa0M7O0lBQ2xDLG9EQUFrRjs7SUFDbEYsbURBQTJEOztJQUMzRCx5Q0FBNEI7O0lBRTVCLHdDQUFrRTs7SUFDbEUsMENBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWlucHV0LXdpdGgtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtd2l0aC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXdpdGgtYnV0dG9uLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0V2l0aEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpbnB1dEZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgQElucHV0KCkgcmVxdWlyZWRNZXNzYWdlOiBzdHJpbmcgPSAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJztcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBPdXRwdXQoKSBkb25lOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBvbkRvbmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEZvcm1Db250cm9sLnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuZG9uZS5lbWl0KHRoaXMuaW5wdXRGb3JtQ29udHJvbC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FuY2VsLmVtaXQoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==