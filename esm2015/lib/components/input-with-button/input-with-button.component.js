import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/form-field';
import * as ɵngcc2 from '@angular/material/input';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from '@angular/material/icon';
import * as ɵngcc5 from '@angular/common';

const _c0 = ["inputText"];
function InputWithButtonComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.requiredMessage, " ");
} }
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
InputWithButtonComponent.ɵfac = function InputWithButtonComponent_Factory(t) { return new (t || InputWithButtonComponent)(); };
InputWithButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputWithButtonComponent, selectors: [["hel-input-with-button"]], viewQuery: function InputWithButtonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nameField = _t.first);
    } }, inputs: { placeholder: "placeholder", inputFormControl: "inputFormControl", requiredMessage: "requiredMessage", value: "value", isFocused: "isFocused" }, outputs: { done: "done", cancel: "cancel" }, decls: 9, vars: 3, consts: [["matInput", "", 3, "placeholder", "formControl"], ["inputText", ""], ["matSuffix", "", 3, "click"], [4, "ngIf"]], template: function InputWithButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "mat-form-field");
        ɵngcc0.ɵɵelement(2, "input", 0, 1);
        ɵngcc0.ɵɵelementStart(4, "mat-icon", 2);
        ɵngcc0.ɵɵlistener("click", function InputWithButtonComponent_Template_mat_icon_click_4_listener() { return ctx.onDone(); });
        ɵngcc0.ɵɵtext(5, "done");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "mat-icon", 2);
        ɵngcc0.ɵɵlistener("click", function InputWithButtonComponent_Template_mat_icon_click_6_listener() { return ctx.onCancel(); });
        ɵngcc0.ɵɵtext(7, "close");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, InputWithButtonComponent_mat_error_8_Template, 2, 1, "mat-error", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("placeholder", ctx.placeholder)("formControl", ctx.inputFormControl);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngIf", ctx.inputFormControl.hasError("required"));
    } }, directives: [ɵngcc1.MatFormField, ɵngcc2.MatInput, ɵngcc3.DefaultValueAccessor, ɵngcc3.NgControlStatus, ɵngcc3.FormControlDirective, ɵngcc4.MatIcon, ɵngcc1.MatSuffix, ɵngcc5.NgIf, ɵngcc1.MatError], styles: [""] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputWithButtonComponent, [{
        type: Component,
        args: [{
                selector: 'hel-input-with-button',
                template: "<div>\n  <mat-form-field>\n    <input #inputText  matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\n      {{ requiredMessage }}\n    </mat-error>\n  </mat-form-field>\n</div>\n",
                styles: [""]
            }]
    }], function () { return []; }, { placeholder: [{
            type: Input
        }], inputFormControl: [{
            type: Input
        }], requiredMessage: [{
            type: Input
        }], value: [{
            type: Input
        }], isFocused: [{
            type: Input
        }], done: [{
            type: Output
        }], cancel: [{
            type: Output
        }], nameField: [{
            type: ViewChild,
            args: ['inputText', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtd2l0aC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC13aXRoLWJ1dHRvbi9pbnB1dC13aXRoLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pELE1BQU0sT0FBTyx3QkFBd0I7QUFBRyxJQWF0QztBQUFnQixRQVhQLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0FBQ3BDLFFBQVcscUJBQWdCLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEYsUUFBVyxvQkFBZSxHQUFXLHVCQUF1QixDQUFDO0FBQzdELFFBQVcsVUFBSyxHQUFXLEVBQUUsQ0FBQztBQUM5QixRQUFXLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDdEMsUUFFWSxTQUFJLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7QUFDcEUsUUFBWSxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7QUFDbEUsSUFFa0IsQ0FBQztBQUNuQixJQUNFLFFBQVE7QUFBSyxRQUNYLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7QUFDM0IsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRCxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6QyxJQUFFLENBQUM7QUFDSCxJQUVFLE1BQU07QUFBSyxRQUNULElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtBQUNyQyxZQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQUssUUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNIO29EQXJDQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtXQUNqQzs7Ozs7OENBQWlELDRDQUVsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K05BQ0k7QUFBQztBQUNOO0FBRU0sMEJBREgsS0FBSztBQUFLLCtCQUNWLEtBQUs7QUFBSyw4QkFDVixLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLHdCQUNWLEtBQUs7QUFBSyx3QkFDVixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztBQUFPLG1CQUU1QyxNQUFNO0FBQUsscUJBQ1gsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtaW5wdXQtd2l0aC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtd2l0aC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC13aXRoLWJ1dHRvbi5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0V2l0aEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpbnB1dEZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIEBJbnB1dCgpIHJlcXVpcmVkTWVzc2FnZTogc3RyaW5nID0gJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbyc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0VGV4dCcsIHtzdGF0aWM6IHRydWV9KSBuYW1lRmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIGRvbmU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUgIT09ICcnKSB7XG4gICAgICB0aGlzLmlucHV0Rm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMubmFtZUZpZWxkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG5cbiAgb25Eb25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0Rm9ybUNvbnRyb2wudmFsaWQpIHtcbiAgICAgIHRoaXMuZG9uZS5lbWl0KHRoaXMuaW5wdXRGb3JtQ29udHJvbC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWwuZW1pdCgpO1xuICB9XG5cbn1cbiJdfQ==