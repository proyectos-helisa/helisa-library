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
                template: "<div>\n  <mat-form-field>\n    <input matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\n      {{ requiredMessage }}\n    </mat-error>\n  </mat-form-field>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtd2l0aC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LXdpdGgtYnV0dG9uL2lucHV0LXdpdGgtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3pELE1BQU0sT0FBTyx3QkFBd0I7SUFXbkM7UUFUUyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxvQkFBZSxHQUFXLHVCQUF1QixDQUFDO1FBQ2xELFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbEIsU0FBSSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3hELFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUdoRCxDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7OztJQUdELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsK1lBQWlEOzthQUVsRDs7Ozs7MEJBR0UsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFFTCxNQUFNO3FCQUNOLE1BQU07Ozs7SUFOUCwrQ0FBa0M7O0lBQ2xDLG9EQUFrRjs7SUFDbEYsbURBQTJEOztJQUMzRCx5Q0FBNEI7O0lBRTVCLHdDQUFrRTs7SUFDbEUsMENBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1pbnB1dC13aXRoLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC13aXRoLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXdpdGgtYnV0dG9uLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRXaXRoQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGlucHV0Rm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgQElucHV0KCkgcmVxdWlyZWRNZXNzYWdlOiBzdHJpbmcgPSAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIEBPdXRwdXQoKSBkb25lOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgY2FuY2VsOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSAnJykge1xuICAgICAgdGhpcy5pbnB1dEZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25Eb25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0Rm9ybUNvbnRyb2wudmFsaWQpIHtcbiAgICAgIHRoaXMuZG9uZS5lbWl0KHRoaXMuaW5wdXRGb3JtQ29udHJvbC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWwuZW1pdCgpO1xuICB9XG5cbn1cbiJdfQ==