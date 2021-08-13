import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/form-field';
import * as ɵngcc2 from '@angular/material/input';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from '@angular/material/icon';

const _c0 = ["inputText"];
function InputHelisaComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 4);
    ɵngcc0.ɵɵlistener("click", function InputHelisaComponent_mat_icon_3_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.search(); });
    ɵngcc0.ɵɵtext(1, "search");
    ɵngcc0.ɵɵelementEnd();
} }
export var InputHelisaType;
(function (InputHelisaType) {
    InputHelisaType[InputHelisaType["DEFAULT"] = 0] = "DEFAULT";
    InputHelisaType[InputHelisaType["IDENTITY"] = 1] = "IDENTITY";
    InputHelisaType[InputHelisaType["NUMERIC"] = 2] = "NUMERIC";
    InputHelisaType[InputHelisaType["DOUBLE"] = 3] = "DOUBLE";
})(InputHelisaType || (InputHelisaType = {}));
export class InputHelisaComponent {
    constructor() {
        this.DECIMAL_SEPARATOR = '.';
        this.THOUSAND_SEPARATOR = ',';
        this.placeholder = '';
        this.floatLabel = 'never';
        /** Activar o desactivar el autocompletado
         * (Caracteristica de los navegadores para campos comunes como
         * Direccion , Usuario, Password ... etc)
         */
        this.autocompleteMode = false;
        // Mostrar o no el icono de buscar
        this.isSearch = false;
        // @Input() inputFormControl: FormControl = new FormControl('');
        this.isFocused = false;
        /**
         * Deprecated
         */
        this.disabled = false;
        this.type = InputHelisaType.DEFAULT;
        /**
         * Deprecated
         */
        this.setValue = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.blur = new EventEmitter();
        this.formControlMask = new FormControl('');
        this.realValue = '';
        this.inputFormReal = new FormControl('');
    }
    set inputFormControl(formControl) {
        this.inputFormReal = formControl;
        this.inputFormReal.registerOnDisabledChange(((isDisabled) => {
            if (isDisabled) {
                this.formControlMask.disable();
            }
            else {
                this.formControlMask.enable();
            }
        }));
        this.inputFormReal.valueChanges.subscribe((data) => {
            this.statusChange(this.inputFormReal.status);
            if (this.getMaskedValue(data) !== this.formControlMask.value) {
                this.change(data);
                if (this.isFocused) {
                    this.onFocus(null);
                }
            }
        });
        this.formControlMask.setValidators(this.inputFormReal.validator);
        this.change(this.inputFormReal.value);
        // disable control
        if (formControl.disabled) {
            this.formControlMask.disable({ onlySelf: true });
        }
        this.inputFormReal.statusChanges.subscribe((data) => {
            this.statusChange(data);
            if (this.isFocused) {
                this.onFocus(null);
            }
        });
    }
    statusChange(data) {
        if (data === 'INVALID') {
            this.formControlMask.setErrors({ key: 'Error de validación.' });
            this.formControlMask.markAsTouched();
        }
        else {
            this.formControlMask.setErrors(null);
        }
    }
    ngOnInit() {
        if (this.isFocused) {
            this.inputText.nativeElement.focus();
        }
    }
    ngAfterViewInit() {
        // this.isParentDisabled();
    }
    /*isParentDisabled(): void {
      setTimeout(() => {
        if (this.nameInput.nativeElement.closest('.hw-disabled-mode')) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      });
    }*/
    search() {
        this.setValue.emit(this.realValue);
    }
    change(event) {
        if (event != null) {
            event = event + '';
        }
        let position = this.inputText.nativeElement.selectionStart;
        const length = event ? event.length : 0;
        this.realValue = this.getRealValue(event);
        if (this.getMaskedValue(this.realValue) !== this.formControlMask.value) {
            this.formControlMask.setValue(this.getMaskedValue(this.realValue));
            position += this.inputText.nativeElement.value.length - length;
            this.inputText.nativeElement.selectionStart = position;
            this.inputText.nativeElement.selectionEnd = position;
        }
        this.inputFormReal.setValue(this.realValue);
    }
    getMaskedValue(str) {
        if (str == null) {
            return str;
        }
        str = str + '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        let maskedStr = '';
        if (this.type === InputHelisaType.IDENTITY) {
            for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.DECIMAL_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type === InputHelisaType.NUMERIC) {
            for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type === InputHelisaType.DOUBLE) {
            if (str.indexOf(this.DECIMAL_SEPARATOR) >= 0) {
                for (let i = str.indexOf(this.DECIMAL_SEPARATOR); i < str.length; i++) {
                    maskedStr += str[i];
                }
            }
            for (let i = (str.indexOf(this.DECIMAL_SEPARATOR) >= 0 ? str.indexOf(this.DECIMAL_SEPARATOR) : str.length) - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        return maskedStr;
    }
    getRealValue(str) {
        if (str == null) {
            return str;
        }
        str = str + '';
        let realStr = '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        if (this.type === InputHelisaType.IDENTITY) {
            for (const strItem of str) {
                if (strItem.match('[0-9]')) {
                    realStr += strItem;
                }
            }
        }
        if (this.type === InputHelisaType.NUMERIC) {
            for (const strItem of str) {
                if (strItem.match('[0-9]')) {
                    realStr += strItem;
                }
            }
        }
        if (this.type === InputHelisaType.DOUBLE) {
            let haveDot = false;
            for (const strItem of str) {
                if (strItem.match('[0-9]') || ((strItem === this.DECIMAL_SEPARATOR) && !haveDot)) {
                    realStr += strItem;
                }
                haveDot = haveDot || (strItem === this.DECIMAL_SEPARATOR);
            }
        }
        return realStr;
    }
    onFocus($event) {
        if ((this.type === InputHelisaType.NUMERIC || this.type === InputHelisaType.DOUBLE) &&
            Number(this.getRealValue(this.inputText.nativeElement.value)) === 0) {
            this.inputText.nativeElement.select();
        }
    }
}
InputHelisaComponent.ɵfac = function InputHelisaComponent_Factory(t) { return new (t || InputHelisaComponent)(); };
InputHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputHelisaComponent, selectors: [["hel-input"]], viewQuery: function InputHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputText = _t.first);
    } }, inputs: { placeholder: "placeholder", floatLabel: "floatLabel", autocompleteMode: "autocompleteMode", isSearch: "isSearch", isFocused: "isFocused", disabled: "disabled", type: "type", inputFormControl: "inputFormControl", minlength: "minlength", maxlength: "maxlength" }, outputs: { setValue: "setValue", blur: "blur" }, decls: 4, vars: 8, consts: [[3, "floatLabel"], ["matInput", "", 3, "placeholder", "formControl", "autocomplete", "minlength", "maxlength", "keyup.enter", "ngModelChange", "blur", "focus"], ["inputText", ""], ["matSuffix", "", 3, "click", 4, "ngIf"], ["matSuffix", "", 3, "click"]], template: function InputHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-form-field", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("keyup.enter", function InputHelisaComponent_Template_input_keyup_enter_1_listener() { return ctx.search(); })("ngModelChange", function InputHelisaComponent_Template_input_ngModelChange_1_listener($event) { return ctx.change($event); })("blur", function InputHelisaComponent_Template_input_blur_1_listener($event) { return ctx.blur.emit($event); })("focus", function InputHelisaComponent_Template_input_focus_1_listener($event) { return ctx.onFocus($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, InputHelisaComponent_mat_icon_3_Template, 2, 0, "mat-icon", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("floatLabel", ctx.floatLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("placeholder", ctx.placeholder);
        ɵngcc0.ɵɵproperty("formControl", ctx.formControlMask)("autocomplete", ctx.autocompleteMode ? "on" : "off")("minlength", ctx.minlength)("maxlength", ctx.maxlength);
        ɵngcc0.ɵɵattribute("disabled", ctx.disabled ? "disabled" : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isSearch);
    } }, directives: [ɵngcc1.MatFormField, ɵngcc2.MatInput, ɵngcc3.DefaultValueAccessor, ɵngcc3.NgControlStatus, ɵngcc3.FormControlDirective, ɵngcc3.MinLengthValidator, ɵngcc3.MaxLengthValidator, ɵngcc4.NgIf, ɵngcc5.MatIcon, ɵngcc1.MatSuffix], styles: ["hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"] });
InputHelisaComponent.ctorParameters = () => [];
InputHelisaComponent.propDecorators = {
    placeholder: [{ type: Input }],
    floatLabel: [{ type: Input }],
    minlength: [{ type: Input }],
    maxlength: [{ type: Input }],
    autocompleteMode: [{ type: Input }],
    isSearch: [{ type: Input }],
    isFocused: [{ type: Input }],
    disabled: [{ type: Input }],
    type: [{ type: Input }],
    setValue: [{ type: Output }],
    blur: [{ type: Output }],
    inputText: [{ type: ViewChild, args: ['inputText', { static: true },] }],
    inputFormControl: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-input',
                template: "<mat-form-field [floatLabel]=\"floatLabel\">\n  <input #inputText matInput placeholder=\"{{placeholder}}\"\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\n  [autocomplete]=\"(autocompleteMode) ? 'on' : 'off'\" (blur)=\"blur.emit($event)\" [minlength]=\"minlength\" [maxlength]=\"maxlength\" (focus)=\"onFocus($event)\">\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\n</mat-form-field>\n",
                styles: ["::ng-deep hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
            }]
    }], function () { return []; }, { placeholder: [{
            type: Input
        }], floatLabel: [{
            type: Input
        }], autocompleteMode: [{
            type: Input
        }], isSearch: [{
            type: Input
        }], isFocused: [{
            type: Input
        }], disabled: [{
            type: Input
        }], type: [{
            type: Input
        }], setValue: [{
            type: Output
        }], blur: [{
            type: Output
        }], inputFormControl: [{
            type: Input
        }], minlength: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], inputText: [{
            type: ViewChild,
            args: ['inputText', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQtaGVsaXNhL2lucHV0LWhlbGlzYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQTZCLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxNQUFNLENBQU4sSUFBWSxlQUVYO0FBRkQsV0FBWSxlQUFlO0FBQzFCLElBQUMsMkRBQU8sQ0FBQTtBQUFDLElBQUMsNkRBQVEsQ0FBQTtBQUFDLElBQUMsMkRBQU8sQ0FBQTtBQUFDLElBQUMseURBQU0sQ0FBQTtBQUNwQyxDQUFDLEVBRlcsZUFBZSxLQUFmLGVBQWUsUUFFMUI7QUFPRCxNQUFNLE9BQU8sb0JBQW9CO0FBQUcsSUF5Q2xDO0FBQ0YsUUF4Q21CLHNCQUFpQixHQUFXLEdBQUcsQ0FBQztBQUNuRCxRQUFtQix1QkFBa0IsR0FBVyxHQUFHLENBQUM7QUFDcEQsUUFDVyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztBQUNwQyxRQUFXLGVBQVUsR0FBZ0MsT0FBTyxDQUFDO0FBQzdELFFBR0U7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQVcscUJBQWdCLEdBQVksS0FBSyxDQUFDO0FBQzdDLFFBQ0Usa0NBQWtDO0FBQ3BDLFFBQVcsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUFFLGdFQUFnRTtBQUNsRSxRQUFXLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDdEMsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUFXLFNBQUksR0FBb0IsZUFBZSxDQUFDLE9BQU8sQ0FBQztB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UyxTQUFDLGtCQUNULFFBQVEsRUFBRSxXQUFXO09BQ3JCOzs7OztpTUFBNEMsdUxBRTdDOzs7Ozs7Ozs7Ozs7Ozs7cVlBQ0k7QUFBQztBQUFnRDtBQUU5QiwwQkFHckIsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLCtCQU1WLEtBQUs7QUFBSyx1QkFHVixLQUFLO0FBQUssd0JBRVYsS0FBSztBQUFLLHVCQUtWLEtBQUs7QUFBSyxtQkFDVixLQUFLO0FBQUssdUJBS1YsTUFBTTtBQUFLLG1CQUdYLE1BQU07QUFBSyx3QkFNWCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztBQUFPLCtCQUs1QyxLQUFLO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgZW51bSBJbnB1dEhlbGlzYVR5cGUge1xuICBERUZBVUxULCBJREVOVElUWSwgTlVNRVJJQywgRE9VQkxFXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBERUNJTUFMX1NFUEFSQVRPUjogc3RyaW5nID0gJy4nO1xuICBwcml2YXRlIHJlYWRvbmx5IFRIT1VTQU5EX1NFUEFSQVRPUjogc3RyaW5nID0gJywnO1xuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZmxvYXRMYWJlbDogJ25ldmVyJyB8ICdhbHdheXMnIHwgJ2F1dG8nID0gJ25ldmVyJztcbiAgQElucHV0KCkgbWlubGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heGxlbmd0aDogbnVtYmVyO1xuXG4gIC8qKiBBY3RpdmFyIG8gZGVzYWN0aXZhciBlbCBhdXRvY29tcGxldGFkb1xuICAgKiAoQ2FyYWN0ZXJpc3RpY2EgZGUgbG9zIG5hdmVnYWRvcmVzIHBhcmEgY2FtcG9zIGNvbXVuZXMgY29tb1xuICAgKiBEaXJlY2Npb24gLCBVc3VhcmlvLCBQYXNzd29yZCAuLi4gZXRjKVxuICAgKi9cbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIE1vc3RyYXIgbyBubyBlbCBpY29ubyBkZSBidXNjYXJcbiAgQElucHV0KCkgaXNTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gQElucHV0KCkgaW5wdXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBASW5wdXQoKSBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRGVwcmVjYXRlZFxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZTogSW5wdXRIZWxpc2FUeXBlID0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQ7XG5cbiAgLyoqXG4gICAqIERlcHJlY2F0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBzZXRWYWx1ZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBmb3JtQ29udHJvbE1hc2s6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgcHJpdmF0ZSByZWFsVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGlucHV0Rm9ybVJlYWw6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dFRleHQnLCB7c3RhdGljOiB0cnVlfSkgaW5wdXRUZXh0OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGlucHV0Rm9ybUNvbnRyb2woZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sKSB7XG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsID0gZm9ybUNvbnRyb2w7XG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsLnJlZ2lzdGVyT25EaXNhYmxlZENoYW5nZSgoKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZSh0aGlzLmlucHV0Rm9ybVJlYWwuc3RhdHVzKTtcbiAgICAgIGlmICh0aGlzLmdldE1hc2tlZFZhbHVlKGRhdGEpICE9PSB0aGlzLmZvcm1Db250cm9sTWFzay52YWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZShkYXRhKTtcbiAgICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAgICAgdGhpcy5vbkZvY3VzKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0VmFsaWRhdG9ycyh0aGlzLmlucHV0Rm9ybVJlYWwudmFsaWRhdG9yKTtcbiAgICB0aGlzLmNoYW5nZSh0aGlzLmlucHV0Rm9ybVJlYWwudmFsdWUpO1xuICAgIC8vIGRpc2FibGUgY29udHJvbFxuICAgIGlmIChmb3JtQ29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2suZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICAgIH1cbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlKGRhdGEpO1xuICAgICAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICAgICB0aGlzLm9uRm9jdXMobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cblxuICBwcml2YXRlIHN0YXR1c0NoYW5nZShkYXRhOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoZGF0YSA9PT0gJ0lOVkFMSUQnKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRFcnJvcnMoeyBrZXk6ICdFcnJvciBkZSB2YWxpZGFjacOzbi4nIH0pO1xuICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2subWFya0FzVG91Y2hlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRFcnJvcnMobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmlucHV0VGV4dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIHRoaXMuaXNQYXJlbnREaXNhYmxlZCgpO1xuICB9XG5cbiAgLyppc1BhcmVudERpc2FibGVkKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnLmh3LWRpc2FibGVkLW1vZGUnKSkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSovXG5cbiAgc2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUuZW1pdCh0aGlzLnJlYWxWYWx1ZSk7XG4gIH1cblxuICBjaGFuZ2UoZXZlbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChldmVudCAhPSBudWxsKSB7XG4gICAgICBldmVudCA9IGV2ZW50ICsgJyc7XG4gICAgfVxuICAgIGxldCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy5pbnB1dFRleHQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IGV2ZW50ID8gZXZlbnQubGVuZ3RoIDogMDtcbiAgICB0aGlzLnJlYWxWYWx1ZSA9IHRoaXMuZ2V0UmVhbFZhbHVlKGV2ZW50KTtcbiAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSkgIT09IHRoaXMuZm9ybUNvbnRyb2xNYXNrLnZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRWYWx1ZSh0aGlzLmdldE1hc2tlZFZhbHVlKHRoaXMucmVhbFZhbHVlKSk7XG4gICAgICBwb3NpdGlvbiArPSB0aGlzLmlucHV0VGV4dC5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCAtIGxlbmd0aDtcbiAgICAgIHRoaXMuaW5wdXRUZXh0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMuaW5wdXRUZXh0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XG4gICAgfVxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC5zZXRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1hc2tlZFZhbHVlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoc3RyID09IG51bGwpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArICcnO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5ERUZBVUxUKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBsZXQgbWFza2VkU3RyOiBzdHJpbmcgPSAnJztcbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuSURFTlRJVFkpIHtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0ci5sZW5ndGggLSAxLCBqOiBudW1iZXIgPSAwOyBpID49IDA7IGktLSwgaisrKSB7XG4gICAgICAgIGlmIChqID4gMCAmJiBqICUgMyA9PT0gMCkge1xuICAgICAgICAgIG1hc2tlZFN0ciA9IHRoaXMuREVDSU1BTF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XG4gICAgICAgIH1cbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuTlVNRVJJQykge1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gc3RyLmxlbmd0aCAtIDEsIGo6IG51bWJlciA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XG4gICAgICAgICAgbWFza2VkU3RyID0gdGhpcy5USE9VU0FORF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XG4gICAgICAgIH1cbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuRE9VQkxFKSB7XG4gICAgICBpZiAoc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgPj0gMCkge1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG1hc2tlZFN0ciArPSBzdHJbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IChzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA+PSAwID8gc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgOiBzdHIubGVuZ3RoKSAtIDEsXG4gICAgICAgIGo6IG51bWJlciA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcblxuICAgICAgICBpZiAoaiA+IDAgJiYgaiAlIDMgPT09IDApIHtcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLlRIT1VTQU5EX1NFUEFSQVRPUiArIG1hc2tlZFN0cjtcbiAgICAgICAgfVxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXNrZWRTdHI7XG4gIH1cblxuICBwcml2YXRlIGdldFJlYWxWYWx1ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHN0ciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyAnJztcbiAgICBsZXQgcmVhbFN0cjogc3RyaW5nID0gJyc7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5JREVOVElUWSkge1xuICAgICAgZm9yIChjb25zdCBzdHJJdGVtIG9mIHN0cikge1xuICAgICAgICBpZiAoc3RySXRlbS5tYXRjaCgnWzAtOV0nKSkge1xuICAgICAgICAgIHJlYWxTdHIgKz0gc3RySXRlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuTlVNRVJJQykge1xuICAgICAgZm9yIChjb25zdCBzdHJJdGVtIG9mIHN0cikge1xuICAgICAgICBpZiAoc3RySXRlbS5tYXRjaCgnWzAtOV0nKSkge1xuICAgICAgICAgIHJlYWxTdHIgKz0gc3RySXRlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuRE9VQkxFKSB7XG4gICAgICBsZXQgaGF2ZURvdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICBmb3IgKGNvbnN0IHN0ckl0ZW0gb2Ygc3RyKSB7XG4gICAgICAgIGlmIChzdHJJdGVtLm1hdGNoKCdbMC05XScpIHx8ICgoc3RySXRlbSA9PT0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgJiYgIWhhdmVEb3QpKSB7XG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJJdGVtO1xuICAgICAgICB9XG4gICAgICAgIGhhdmVEb3QgPSBoYXZlRG90IHx8IChzdHJJdGVtID09PSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlYWxTdHI7XG4gIH1cblxuICBvbkZvY3VzKCRldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmICgodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuTlVNRVJJQyB8fCB0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5ET1VCTEUpICYmXG4gICAgICBOdW1iZXIodGhpcy5nZXRSZWFsVmFsdWUodGhpcy5pbnB1dFRleHQubmF0aXZlRWxlbWVudC52YWx1ZSkpID09PSAwKSB7XG4gICAgICB0aGlzLmlucHV0VGV4dC5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xuICAgIH1cbiAgfVxufVxuIl19