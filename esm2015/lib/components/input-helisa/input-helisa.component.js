import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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
InputHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-input',
                template: "<mat-form-field [floatLabel]=\"floatLabel\">\n  <input #inputText matInput placeholder=\"{{placeholder}}\"\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\n  [autocomplete]=\"(autocompleteMode) ? 'on' : 'off'\" (blur)=\"blur.emit($event)\" [minlength]=\"minlength\" [maxlength]=\"maxlength\" (focus)=\"onFocus($event)\">\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\n</mat-form-field>\n",
                styles: ["::ng-deep hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LWhlbGlzYS9pbnB1dC1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUE2QixNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsTUFBTSxDQUFOLElBQVksZUFFWDtBQUZELFdBQVksZUFBZTtJQUN6QiwyREFBTyxDQUFBO0lBQUUsNkRBQVEsQ0FBQTtJQUFFLDJEQUFPLENBQUE7SUFBRSx5REFBTSxDQUFBO0FBQ3BDLENBQUMsRUFGVyxlQUFlLEtBQWYsZUFBZSxRQUUxQjtBQU9ELE1BQU0sT0FBTyxvQkFBb0I7SUF5Qy9CO1FBdkNpQixzQkFBaUIsR0FBVyxHQUFHLENBQUM7UUFDaEMsdUJBQWtCLEdBQVcsR0FBRyxDQUFDO1FBRXpDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBZ0MsT0FBTyxDQUFDO1FBSTNEOzs7V0FHRztRQUNNLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUUzQyxrQ0FBa0M7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUNuQyxnRUFBZ0U7UUFDdkQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUVwQzs7V0FFRztRQUNNLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFvQixlQUFlLENBQUMsT0FBTyxDQUFDO1FBRXpEOztXQUVHO1FBQ08sYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXRFLGtDQUFrQztRQUN4QixTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkQsb0JBQWUsR0FB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Qzs7OzswQkFNRSxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOytCQU1MLEtBQUs7dUJBR0wsS0FBSzt3QkFFTCxLQUFLO3VCQUtMLEtBQUs7bUJBQ0wsS0FBSzt1QkFLTCxNQUFNO21CQUdOLE1BQU07d0JBTU4sU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7K0JBS3JDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgZW51bSBJbnB1dEhlbGlzYVR5cGUge1xuICBERUZBVUxULCBJREVOVElUWSwgTlVNRVJJQywgRE9VQkxFXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBERUNJTUFMX1NFUEFSQVRPUjogc3RyaW5nID0gJy4nO1xuICBwcml2YXRlIHJlYWRvbmx5IFRIT1VTQU5EX1NFUEFSQVRPUjogc3RyaW5nID0gJywnO1xuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZmxvYXRMYWJlbDogJ25ldmVyJyB8ICdhbHdheXMnIHwgJ2F1dG8nID0gJ25ldmVyJztcbiAgQElucHV0KCkgbWlubGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heGxlbmd0aDogbnVtYmVyO1xuXG4gIC8qKiBBY3RpdmFyIG8gZGVzYWN0aXZhciBlbCBhdXRvY29tcGxldGFkb1xuICAgKiAoQ2FyYWN0ZXJpc3RpY2EgZGUgbG9zIG5hdmVnYWRvcmVzIHBhcmEgY2FtcG9zIGNvbXVuZXMgY29tb1xuICAgKiBEaXJlY2Npb24gLCBVc3VhcmlvLCBQYXNzd29yZCAuLi4gZXRjKVxuICAgKi9cbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIE1vc3RyYXIgbyBubyBlbCBpY29ubyBkZSBidXNjYXJcbiAgQElucHV0KCkgaXNTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gQElucHV0KCkgaW5wdXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBASW5wdXQoKSBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRGVwcmVjYXRlZFxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZTogSW5wdXRIZWxpc2FUeXBlID0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQ7XG5cbiAgLyoqXG4gICAqIERlcHJlY2F0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBzZXRWYWx1ZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBmb3JtQ29udHJvbE1hc2s6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgcHJpdmF0ZSByZWFsVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGlucHV0Rm9ybVJlYWw6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dFRleHQnLCB7c3RhdGljOiB0cnVlfSkgaW5wdXRUZXh0OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGlucHV0Rm9ybUNvbnRyb2woZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sKSB7XG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsID0gZm9ybUNvbnRyb2w7XG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsLnJlZ2lzdGVyT25EaXNhYmxlZENoYW5nZSgoKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZSh0aGlzLmlucHV0Rm9ybVJlYWwuc3RhdHVzKTtcbiAgICAgIGlmICh0aGlzLmdldE1hc2tlZFZhbHVlKGRhdGEpICE9PSB0aGlzLmZvcm1Db250cm9sTWFzay52YWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZShkYXRhKTtcbiAgICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAgICAgdGhpcy5vbkZvY3VzKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0VmFsaWRhdG9ycyh0aGlzLmlucHV0Rm9ybVJlYWwudmFsaWRhdG9yKTtcbiAgICB0aGlzLmNoYW5nZSh0aGlzLmlucHV0Rm9ybVJlYWwudmFsdWUpO1xuICAgIC8vIGRpc2FibGUgY29udHJvbFxuICAgIGlmIChmb3JtQ29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2suZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICAgIH1cbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlKGRhdGEpO1xuICAgICAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICAgICB0aGlzLm9uRm9jdXMobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cblxuICBwcml2YXRlIHN0YXR1c0NoYW5nZShkYXRhOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoZGF0YSA9PT0gJ0lOVkFMSUQnKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRFcnJvcnMoeyBrZXk6ICdFcnJvciBkZSB2YWxpZGFjacOzbi4nIH0pO1xuICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2subWFya0FzVG91Y2hlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRFcnJvcnMobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmlucHV0VGV4dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIHRoaXMuaXNQYXJlbnREaXNhYmxlZCgpO1xuICB9XG5cbiAgLyppc1BhcmVudERpc2FibGVkKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnLmh3LWRpc2FibGVkLW1vZGUnKSkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSovXG5cbiAgc2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUuZW1pdCh0aGlzLnJlYWxWYWx1ZSk7XG4gIH1cblxuICBjaGFuZ2UoZXZlbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChldmVudCAhPSBudWxsKSB7XG4gICAgICBldmVudCA9IGV2ZW50ICsgJyc7XG4gICAgfVxuICAgIGxldCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy5pbnB1dFRleHQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IGV2ZW50ID8gZXZlbnQubGVuZ3RoIDogMDtcbiAgICB0aGlzLnJlYWxWYWx1ZSA9IHRoaXMuZ2V0UmVhbFZhbHVlKGV2ZW50KTtcbiAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSkgIT09IHRoaXMuZm9ybUNvbnRyb2xNYXNrLnZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRWYWx1ZSh0aGlzLmdldE1hc2tlZFZhbHVlKHRoaXMucmVhbFZhbHVlKSk7XG4gICAgICBwb3NpdGlvbiArPSB0aGlzLmlucHV0VGV4dC5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCAtIGxlbmd0aDtcbiAgICAgIHRoaXMuaW5wdXRUZXh0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMuaW5wdXRUZXh0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XG4gICAgfVxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC5zZXRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1hc2tlZFZhbHVlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoc3RyID09IG51bGwpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArICcnO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5ERUZBVUxUKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBsZXQgbWFza2VkU3RyOiBzdHJpbmcgPSAnJztcbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuSURFTlRJVFkpIHtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0ci5sZW5ndGggLSAxLCBqOiBudW1iZXIgPSAwOyBpID49IDA7IGktLSwgaisrKSB7XG4gICAgICAgIGlmIChqID4gMCAmJiBqICUgMyA9PT0gMCkge1xuICAgICAgICAgIG1hc2tlZFN0ciA9IHRoaXMuREVDSU1BTF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XG4gICAgICAgIH1cbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuTlVNRVJJQykge1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gc3RyLmxlbmd0aCAtIDEsIGo6IG51bWJlciA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XG4gICAgICAgICAgbWFza2VkU3RyID0gdGhpcy5USE9VU0FORF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XG4gICAgICAgIH1cbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuRE9VQkxFKSB7XG4gICAgICBpZiAoc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgPj0gMCkge1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG1hc2tlZFN0ciArPSBzdHJbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IChzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA+PSAwID8gc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgOiBzdHIubGVuZ3RoKSAtIDEsXG4gICAgICAgIGo6IG51bWJlciA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcblxuICAgICAgICBpZiAoaiA+IDAgJiYgaiAlIDMgPT09IDApIHtcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLlRIT1VTQU5EX1NFUEFSQVRPUiArIG1hc2tlZFN0cjtcbiAgICAgICAgfVxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXNrZWRTdHI7XG4gIH1cblxuICBwcml2YXRlIGdldFJlYWxWYWx1ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHN0ciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyAnJztcbiAgICBsZXQgcmVhbFN0cjogc3RyaW5nID0gJyc7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5JREVOVElUWSkge1xuICAgICAgZm9yIChjb25zdCBzdHJJdGVtIG9mIHN0cikge1xuICAgICAgICBpZiAoc3RySXRlbS5tYXRjaCgnWzAtOV0nKSkge1xuICAgICAgICAgIHJlYWxTdHIgKz0gc3RySXRlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuTlVNRVJJQykge1xuICAgICAgZm9yIChjb25zdCBzdHJJdGVtIG9mIHN0cikge1xuICAgICAgICBpZiAoc3RySXRlbS5tYXRjaCgnWzAtOV0nKSkge1xuICAgICAgICAgIHJlYWxTdHIgKz0gc3RySXRlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuRE9VQkxFKSB7XG4gICAgICBsZXQgaGF2ZURvdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICBmb3IgKGNvbnN0IHN0ckl0ZW0gb2Ygc3RyKSB7XG4gICAgICAgIGlmIChzdHJJdGVtLm1hdGNoKCdbMC05XScpIHx8ICgoc3RySXRlbSA9PT0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgJiYgIWhhdmVEb3QpKSB7XG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJJdGVtO1xuICAgICAgICB9XG4gICAgICAgIGhhdmVEb3QgPSBoYXZlRG90IHx8IChzdHJJdGVtID09PSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlYWxTdHI7XG4gIH1cblxuICBvbkZvY3VzKCRldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmICgodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuTlVNRVJJQyB8fCB0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5ET1VCTEUpICYmXG4gICAgICBOdW1iZXIodGhpcy5nZXRSZWFsVmFsdWUodGhpcy5pbnB1dFRleHQubmF0aXZlRWxlbWVudC52YWx1ZSkpID09PSAwKSB7XG4gICAgICB0aGlzLmlucHV0VGV4dC5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xuICAgIH1cbiAgfVxufVxuIl19