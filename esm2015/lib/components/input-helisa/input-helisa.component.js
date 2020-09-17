/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
/** @enum {number} */
const InputHelisaType = {
    DEFAULT: 0, IDENTITY: 1, NUMERIC: 2, DOUBLE: 3,
};
export { InputHelisaType };
InputHelisaType[InputHelisaType.DEFAULT] = 'DEFAULT';
InputHelisaType[InputHelisaType.IDENTITY] = 'IDENTITY';
InputHelisaType[InputHelisaType.NUMERIC] = 'NUMERIC';
InputHelisaType[InputHelisaType.DOUBLE] = 'DOUBLE';
export class InputHelisaComponent {
    constructor() {
        this.DECIMAL_SEPARATOR = '.';
        this.THOUSAND_SEPARATOR = ',';
        this.placeholder = '';
        this.floatLabel = 'never';
        /**
         * Activar o desactivar el autocompletado
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
        this.blur = new EventEmitter();
        this.formControlMask = new FormControl('');
        this.realValue = '';
        this.inputFormReal = new FormControl('');
    }
    /**
     * @param {?} formControl
     * @return {?}
     */
    set inputFormControl(formControl) {
        this.inputFormReal = formControl;
        this.inputFormReal.valueChanges.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.statusChange(this.inputFormReal.status);
            if (this.getMaskedValue(data) !== this.formControlMask.value) {
                this.change(data);
                if (this.isFocused) {
                    this.onFocus(null);
                }
            }
        }));
        this.formControlMask.setValidators(this.inputFormReal.validator);
        this.change(this.inputFormReal.value);
        // disable control
        if (formControl.disabled) {
            this.formControlMask.disable({ onlySelf: true });
        }
        this.inputFormReal.statusChanges.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.statusChange(data);
            if (this.isFocused) {
                this.onFocus(null);
            }
        }));
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    statusChange(data) {
        if (data === 'INVALID') {
            this.formControlMask.setErrors({ key: 'Error de validación.' });
        }
        else {
            this.formControlMask.setErrors(null);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isFocused) {
            this.nameInput.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    search() {
        this.setValue.emit(this.realValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        if (event != null) {
            event = event + '';
        }
        /** @type {?} */
        let position = this.nameInput.nativeElement.selectionStart;
        /** @type {?} */
        const length = event ? event.length : 0;
        this.realValue = this.getRealValue(event);
        if (this.getMaskedValue(this.realValue) !== this.formControlMask.value) {
            this.formControlMask.setValue(this.getMaskedValue(this.realValue));
            position += this.nameInput.nativeElement.value.length - length;
            this.nameInput.nativeElement.selectionStart = position;
            this.nameInput.nativeElement.selectionEnd = position;
        }
        this.inputFormReal.setValue(this.realValue);
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    getMaskedValue(str) {
        if (str == null) {
            return str;
        }
        str = str + '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        /** @type {?} */
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
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    getRealValue(str) {
        if (str == null) {
            return str;
        }
        str = str + '';
        /** @type {?} */
        let realStr = '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        if (this.type === InputHelisaType.IDENTITY) {
            for (const strItem of str) {
                if (strItem.match('[a-zA-Z0-9]')) {
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
            /** @type {?} */
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
    /**
     * @param {?} $event
     * @return {?}
     */
    onFocus($event) {
        if ((this.type === InputHelisaType.NUMERIC || this.type === InputHelisaType.DOUBLE) &&
            Number(this.getRealValue(this.nameInput.nativeElement.value)) === 0) {
            this.nameInput.nativeElement.select();
        }
    }
}
InputHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-input',
                template: "<mat-form-field [floatLabel]=\"floatLabel\">\r\n  <input #inputText matInput placeholder=\"{{placeholder}}\"\r\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\r\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\r\n  [autocomplete]=\"(autocompleteMode) ? 'on' : 'off'\" (blur)=\"blur.emit($event)\" (focus)=\"onFocus($event)\">\r\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\r\n</mat-form-field>\r\n",
                styles: ["/deep/ hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
            }] }
];
/** @nocollapse */
InputHelisaComponent.ctorParameters = () => [];
InputHelisaComponent.propDecorators = {
    placeholder: [{ type: Input }],
    floatLabel: [{ type: Input }],
    autocompleteMode: [{ type: Input }],
    isSearch: [{ type: Input }],
    isFocused: [{ type: Input }],
    disabled: [{ type: Input }],
    type: [{ type: Input }],
    setValue: [{ type: Output }],
    blur: [{ type: Output }],
    nameInput: [{ type: ViewChild, args: ['inputText',] }],
    inputFormControl: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    InputHelisaComponent.prototype.DECIMAL_SEPARATOR;
    /**
     * @type {?}
     * @private
     */
    InputHelisaComponent.prototype.THOUSAND_SEPARATOR;
    /** @type {?} */
    InputHelisaComponent.prototype.placeholder;
    /** @type {?} */
    InputHelisaComponent.prototype.floatLabel;
    /**
     * Activar o desactivar el autocompletado
     * (Caracteristica de los navegadores para campos comunes como
     * Direccion , Usuario, Password ... etc)
     * @type {?}
     */
    InputHelisaComponent.prototype.autocompleteMode;
    /** @type {?} */
    InputHelisaComponent.prototype.isSearch;
    /** @type {?} */
    InputHelisaComponent.prototype.isFocused;
    /**
     * Deprecated
     * @type {?}
     */
    InputHelisaComponent.prototype.disabled;
    /** @type {?} */
    InputHelisaComponent.prototype.type;
    /**
     * Deprecated
     * @type {?}
     */
    InputHelisaComponent.prototype.setValue;
    /** @type {?} */
    InputHelisaComponent.prototype.blur;
    /** @type {?} */
    InputHelisaComponent.prototype.formControlMask;
    /**
     * @type {?}
     * @private
     */
    InputHelisaComponent.prototype.realValue;
    /**
     * @type {?}
     * @private
     */
    InputHelisaComponent.prototype.inputFormReal;
    /** @type {?} */
    InputHelisaComponent.prototype.nameInput;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1oZWxpc2EvaW5wdXQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQUczQyxVQUFPLEVBQUUsV0FBUSxFQUFFLFVBQU8sRUFBRSxTQUFNOzs7Ozs7O0FBUXBDLE1BQU0sT0FBTyxvQkFBb0I7SUFzQy9CO1FBcENpQixzQkFBaUIsR0FBVyxHQUFHLENBQUM7UUFDaEMsdUJBQWtCLEdBQVcsR0FBRyxDQUFDO1FBRXpDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBZ0MsT0FBTyxDQUFDOzs7Ozs7UUFNbEQscUJBQWdCLEdBQVksS0FBSyxDQUFDOztRQUdsQyxhQUFRLEdBQVksS0FBSyxDQUFDOztRQUUxQixjQUFTLEdBQVksS0FBSyxDQUFDOzs7O1FBSzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFvQixlQUFlLENBQUMsT0FBTyxDQUFDOzs7O1FBSy9DLGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU1RCxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkQsb0JBQWUsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUt6RCxDQUFDOzs7OztJQUVELElBQ0ksZ0JBQWdCLENBQUMsV0FBd0I7UUFDM0Ms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RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgZW51bSBJbnB1dEhlbGlzYVR5cGUge1xyXG4gIERFRkFVTFQsIElERU5USVRZLCBOVU1FUklDLCBET1VCTEVcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgREVDSU1BTF9TRVBBUkFUT1I6IHN0cmluZyA9ICcuJztcclxuICBwcml2YXRlIHJlYWRvbmx5IFRIT1VTQU5EX1NFUEFSQVRPUjogc3RyaW5nID0gJywnO1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZmxvYXRMYWJlbDogJ25ldmVyJyB8ICdhbHdheXMnIHwgJ2F1dG8nID0gJ25ldmVyJztcclxuXHJcbiAgLyoqIEFjdGl2YXIgbyBkZXNhY3RpdmFyIGVsIGF1dG9jb21wbGV0YWRvXHJcbiAgICogKENhcmFjdGVyaXN0aWNhIGRlIGxvcyBuYXZlZ2Fkb3JlcyBwYXJhIGNhbXBvcyBjb211bmVzIGNvbW9cclxuICAgKiBEaXJlY2Npb24gLCBVc3VhcmlvLCBQYXNzd29yZCAuLi4gZXRjKVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZU1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gTW9zdHJhciBvIG5vIGVsIGljb25vIGRlIGJ1c2NhclxyXG4gIEBJbnB1dCgpIGlzU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gQElucHV0KCkgaW5wdXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIEBJbnB1dCgpIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBEZXByZWNhdGVkXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0eXBlOiBJbnB1dEhlbGlzYVR5cGUgPSBJbnB1dEhlbGlzYVR5cGUuREVGQVVMVDtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVwcmVjYXRlZFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBzZXRWYWx1ZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBmb3JtQ29udHJvbE1hc2s6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBwcml2YXRlIHJlYWxWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBpbnB1dEZvcm1SZWFsOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0VGV4dCcpIG5hbWVJbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpbnB1dEZvcm1Db250cm9sKGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsID0gZm9ybUNvbnRyb2w7XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlKHRoaXMuaW5wdXRGb3JtUmVhbC5zdGF0dXMpO1xyXG4gICAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZShkYXRhKSAhPT0gdGhpcy5mb3JtQ29udHJvbE1hc2sudmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZShkYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgICAgIHRoaXMub25Gb2N1cyhudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0VmFsaWRhdG9ycyh0aGlzLmlucHV0Rm9ybVJlYWwudmFsaWRhdG9yKTtcclxuICAgIHRoaXMuY2hhbmdlKHRoaXMuaW5wdXRGb3JtUmVhbC52YWx1ZSk7XHJcbiAgICAvLyBkaXNhYmxlIGNvbnRyb2xcclxuICAgIGlmIChmb3JtQ29udHJvbC5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXR1c0NoYW5nZShkYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgICAgIHRoaXMub25Gb2N1cyhudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzdGF0dXNDaGFuZ2UoZGF0YTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoZGF0YSA9PT0gJ0lOVkFMSUQnKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLnNldEVycm9ycyh7IGtleTogJ0Vycm9yIGRlIHZhbGlkYWNpw7NuLicgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRFcnJvcnMobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLmlzUGFyZW50RGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gIC8qaXNQYXJlbnREaXNhYmxlZCgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5jbG9zZXN0KCcuaHctZGlzYWJsZWQtbW9kZScpKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9Ki9cclxuXHJcbiAgc2VhcmNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZS5lbWl0KHRoaXMucmVhbFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZShldmVudDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQgIT0gbnVsbCkge1xyXG4gICAgICBldmVudCA9IGV2ZW50ICsgJyc7XHJcbiAgICB9XHJcbiAgICBsZXQgcG9zaXRpb246IG51bWJlciA9IHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IGV2ZW50ID8gZXZlbnQubGVuZ3RoIDogMDtcclxuICAgIHRoaXMucmVhbFZhbHVlID0gdGhpcy5nZXRSZWFsVmFsdWUoZXZlbnQpO1xyXG4gICAgaWYgKHRoaXMuZ2V0TWFza2VkVmFsdWUodGhpcy5yZWFsVmFsdWUpICE9PSB0aGlzLmZvcm1Db250cm9sTWFzay52YWx1ZSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRWYWx1ZSh0aGlzLmdldE1hc2tlZFZhbHVlKHRoaXMucmVhbFZhbHVlKSk7XHJcbiAgICAgIHBvc2l0aW9uICs9IHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoIC0gbGVuZ3RoO1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XHJcbiAgICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwuc2V0VmFsdWUodGhpcy5yZWFsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRNYXNrZWRWYWx1ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RyID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIGxldCBtYXNrZWRTdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLklERU5USVRZKSB7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0ci5sZW5ndGggLSAxLCBqOiBudW1iZXIgPSAwOyBpID49IDA7IGktLSwgaisrKSB7XHJcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SICsgbWFza2VkU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0ci5sZW5ndGggLSAxLCBqOiBudW1iZXIgPSAwOyBpID49IDA7IGktLSwgaisrKSB7XHJcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLlRIT1VTQU5EX1NFUEFSQVRPUiArIG1hc2tlZFN0cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuRE9VQkxFKSB7XHJcbiAgICAgIGlmIChzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA+PSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUik7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIG1hc2tlZFN0ciArPSBzdHJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IChzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA+PSAwID8gc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgOiBzdHIubGVuZ3RoKSAtIDEsXHJcbiAgICAgICAgajogbnVtYmVyID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG5cclxuICAgICAgICBpZiAoaiA+IDAgJiYgaiAlIDMgPT09IDApIHtcclxuICAgICAgICAgIG1hc2tlZFN0ciA9IHRoaXMuVEhPVVNBTkRfU0VQQVJBVE9SICsgbWFza2VkU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXNrZWRTdHI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlYWxWYWx1ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RyID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgbGV0IHJlYWxTdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5JREVOVElUWSkge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0ckl0ZW0gb2Ygc3RyKSB7XHJcbiAgICAgICAgaWYgKHN0ckl0ZW0ubWF0Y2goJ1thLXpBLVowLTldJykpIHtcclxuICAgICAgICAgIHJlYWxTdHIgKz0gc3RySXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RySXRlbSBvZiBzdHIpIHtcclxuICAgICAgICBpZiAoc3RySXRlbS5tYXRjaCgnWzAtOV0nKSkge1xyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJJdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkge1xyXG4gICAgICBsZXQgaGF2ZURvdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBzdHJJdGVtIG9mIHN0cikge1xyXG4gICAgICAgIGlmIChzdHJJdGVtLm1hdGNoKCdbMC05XScpIHx8ICgoc3RySXRlbSA9PT0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgJiYgIWhhdmVEb3QpKSB7XHJcbiAgICAgICAgICByZWFsU3RyICs9IHN0ckl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhdmVEb3QgPSBoYXZlRG90IHx8IChzdHJJdGVtID09PSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlYWxTdHI7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKCRldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDIHx8IHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkgJiZcclxuICAgICAgTnVtYmVyKHRoaXMuZ2V0UmVhbFZhbHVlKHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpKSA9PT0gMCkge1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=