import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export class InputWithButtonComponent {
    constructor() {
        this.placeholder = '';
        this.inputFormControl = new FormControl('', Validators.required);
        this.requiredMessage = 'El campo es requerido';
        this.value = '';
        this.isFocused = false;
        this.done = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    ngOnInit() {
        if (this.value !== '') {
            this.inputFormControl.setValue(this.value);
        }
        this.nameField.nativeElement.focus();
    }
    onDone() {
        if (this.inputFormControl.valid) {
            this.done.emit(this.inputFormControl.value);
        }
    }
    onCancel() {
        this.cancel.emit();
    }
}
InputWithButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-input-with-button',
                template: "<div>\r\n  <mat-form-field>\r\n    <input #inputText  matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \r\n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\r\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\r\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\r\n      {{ requiredMessage }}\r\n    </mat-error>\r\n  </mat-form-field>\r\n</div>\r\n",
                styles: [""]
            },] }
];
InputWithButtonComponent.ctorParameters = () => [];
InputWithButtonComponent.propDecorators = {
    placeholder: [{ type: Input }],
    inputFormControl: [{ type: Input }],
    requiredMessage: [{ type: Input }],
    value: [{ type: Input }],
    isFocused: [{ type: Input }],
    nameField: [{ type: ViewChild, args: ['inputText', { static: true },] }],
    done: [{ type: Output }],
    cancel: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtd2l0aC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQtd2l0aC1idXR0b24vaW5wdXQtd2l0aC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPekQsTUFBTSxPQUFPLHdCQUF3QjtJQWFuQztRQVhTLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLHFCQUFnQixHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pFLG9CQUFlLEdBQVcsdUJBQXVCLENBQUM7UUFDbEQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRzFCLFNBQUksR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4RCxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFHaEQsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFHRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLCthQUFpRDs7YUFFbEQ7Ozs7MEJBR0UsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO21CQUVyQyxNQUFNO3FCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1pbnB1dC13aXRoLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXdpdGgtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC13aXRoLWJ1dHRvbi5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFdpdGhCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaW5wdXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkTWVzc2FnZTogc3RyaW5nID0gJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbyc7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0VGV4dCcsIHtzdGF0aWM6IHRydWV9KSBuYW1lRmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBPdXRwdXQoKSBkb25lOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMubmFtZUZpZWxkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG5cclxuICBvbkRvbmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEZvcm1Db250cm9sLnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuZG9uZS5lbWl0KHRoaXMuaW5wdXRGb3JtQ29udHJvbC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FuY2VsLmVtaXQoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==