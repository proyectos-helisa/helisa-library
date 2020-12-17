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
                template: "<mat-form-field [floatLabel]=\"floatLabel\">\r\n  <input #inputText matInput placeholder=\"{{placeholder}}\"\r\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\r\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\r\n  [autocomplete]=\"(autocompleteMode) ? 'on' : 'off'\" (blur)=\"blur.emit($event)\" (focus)=\"onFocus($event)\">\r\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\r\n</mat-form-field>\r\n",
                styles: ["::ng-deep hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
            },] }
];
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
    inputText: [{ type: ViewChild, args: ['inputText', { static: true },] }],
    inputFormControl: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LWhlbGlzYS9pbnB1dC1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUE2QixNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsTUFBTSxDQUFOLElBQVksZUFFWDtBQUZELFdBQVksZUFBZTtJQUN6QiwyREFBTyxDQUFBO0lBQUUsNkRBQVEsQ0FBQTtJQUFFLDJEQUFPLENBQUE7SUFBRSx5REFBTSxDQUFBO0FBQ3BDLENBQUMsRUFGVyxlQUFlLEtBQWYsZUFBZSxRQUUxQjtBQU9ELE1BQU0sT0FBTyxvQkFBb0I7SUF1Qy9CO1FBckNpQixzQkFBaUIsR0FBVyxHQUFHLENBQUM7UUFDaEMsdUJBQWtCLEdBQVcsR0FBRyxDQUFDO1FBRXpDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBZ0MsT0FBTyxDQUFDO1FBRTNEOzs7V0FHRztRQUNNLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUUzQyxrQ0FBa0M7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUNuQyxnRUFBZ0U7UUFDdkQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUVwQzs7V0FFRztRQUNNLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFvQixlQUFlLENBQUMsT0FBTyxDQUFDO1FBRXpEOztXQUVHO1FBQ08sYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXRFLGtDQUFrQztRQUN4QixTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkQsb0JBQWUsR0FB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Ozs7OzBCQU1FLEtBQUs7eUJBQ0wsS0FBSzsrQkFNTCxLQUFLO3VCQUdMLEtBQUs7d0JBRUwsS0FBSzt1QkFLTCxLQUFLO21CQUNMLEtBQUs7dUJBS0wsTUFBTTttQkFHTixNQUFNO3dCQU1OLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOytCQUtyQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGVudW0gSW5wdXRIZWxpc2FUeXBlIHtcclxuICBERUZBVUxULCBJREVOVElUWSwgTlVNRVJJQywgRE9VQkxFXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IERFQ0lNQUxfU0VQQVJBVE9SOiBzdHJpbmcgPSAnLic7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBUSE9VU0FORF9TRVBBUkFUT1I6IHN0cmluZyA9ICcsJztcclxuXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGZsb2F0TGFiZWw6ICduZXZlcicgfCAnYWx3YXlzJyB8ICdhdXRvJyA9ICduZXZlcic7XHJcblxyXG4gIC8qKiBBY3RpdmFyIG8gZGVzYWN0aXZhciBlbCBhdXRvY29tcGxldGFkb1xyXG4gICAqIChDYXJhY3RlcmlzdGljYSBkZSBsb3MgbmF2ZWdhZG9yZXMgcGFyYSBjYW1wb3MgY29tdW5lcyBjb21vXHJcbiAgICogRGlyZWNjaW9uICwgVXN1YXJpbywgUGFzc3dvcmQgLi4uIGV0YylcclxuICAgKi9cclxuICBASW5wdXQoKSBhdXRvY29tcGxldGVNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIE1vc3RyYXIgbyBubyBlbCBpY29ubyBkZSBidXNjYXJcclxuICBASW5wdXQoKSBpc1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBJbnB1dCgpIGlucHV0Rm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBASW5wdXQoKSBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVwcmVjYXRlZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogSW5wdXRIZWxpc2FUeXBlID0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2F0ZWRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgc2V0VmFsdWU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGZvcm1Db250cm9sTWFzazogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIHByaXZhdGUgcmVhbFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIGlucHV0Rm9ybVJlYWw6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRUZXh0Jywge3N0YXRpYzogdHJ1ZX0pIGlucHV0VGV4dDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpbnB1dEZvcm1Db250cm9sKGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsID0gZm9ybUNvbnRyb2w7XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKCgoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQgPT4ge1xyXG4gICAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLmRpc2FibGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5lbmFibGUoKTtcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGRhdGE6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZSh0aGlzLmlucHV0Rm9ybVJlYWwuc3RhdHVzKTtcclxuICAgICAgaWYgKHRoaXMuZ2V0TWFza2VkVmFsdWUoZGF0YSkgIT09IHRoaXMuZm9ybUNvbnRyb2xNYXNrLnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoZGF0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgICAgICB0aGlzLm9uRm9jdXMobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLnNldFZhbGlkYXRvcnModGhpcy5pbnB1dEZvcm1SZWFsLnZhbGlkYXRvcik7XHJcbiAgICB0aGlzLmNoYW5nZSh0aGlzLmlucHV0Rm9ybVJlYWwudmFsdWUpO1xyXG4gICAgLy8gZGlzYWJsZSBjb250cm9sXHJcbiAgICBpZiAoZm9ybUNvbnRyb2wuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2suZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDaGFuZ2UoZGF0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgICAgICB0aGlzLm9uRm9jdXMobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc3RhdHVzQ2hhbmdlKGRhdGE6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKGRhdGEgPT09ICdJTlZBTElEJykge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRFcnJvcnMoeyBrZXk6ICdFcnJvciBkZSB2YWxpZGFjacOzbi4nIH0pO1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRFcnJvcnMobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLmlucHV0VGV4dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLmlzUGFyZW50RGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gIC8qaXNQYXJlbnREaXNhYmxlZCgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5jbG9zZXN0KCcuaHctZGlzYWJsZWQtbW9kZScpKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9Ki9cclxuXHJcbiAgc2VhcmNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZS5lbWl0KHRoaXMucmVhbFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZShldmVudDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQgIT0gbnVsbCkge1xyXG4gICAgICBldmVudCA9IGV2ZW50ICsgJyc7XHJcbiAgICB9XHJcbiAgICBsZXQgcG9zaXRpb246IG51bWJlciA9IHRoaXMuaW5wdXRUZXh0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IGV2ZW50ID8gZXZlbnQubGVuZ3RoIDogMDtcclxuICAgIHRoaXMucmVhbFZhbHVlID0gdGhpcy5nZXRSZWFsVmFsdWUoZXZlbnQpO1xyXG4gICAgaWYgKHRoaXMuZ2V0TWFza2VkVmFsdWUodGhpcy5yZWFsVmFsdWUpICE9PSB0aGlzLmZvcm1Db250cm9sTWFzay52YWx1ZSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRWYWx1ZSh0aGlzLmdldE1hc2tlZFZhbHVlKHRoaXMucmVhbFZhbHVlKSk7XHJcbiAgICAgIHBvc2l0aW9uICs9IHRoaXMuaW5wdXRUZXh0Lm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoIC0gbGVuZ3RoO1xyXG4gICAgICB0aGlzLmlucHV0VGV4dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XHJcbiAgICAgIHRoaXMuaW5wdXRUZXh0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwuc2V0VmFsdWUodGhpcy5yZWFsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRNYXNrZWRWYWx1ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RyID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIGxldCBtYXNrZWRTdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLklERU5USVRZKSB7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0ci5sZW5ndGggLSAxLCBqOiBudW1iZXIgPSAwOyBpID49IDA7IGktLSwgaisrKSB7XHJcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SICsgbWFza2VkU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0ci5sZW5ndGggLSAxLCBqOiBudW1iZXIgPSAwOyBpID49IDA7IGktLSwgaisrKSB7XHJcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLlRIT1VTQU5EX1NFUEFSQVRPUiArIG1hc2tlZFN0cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuRE9VQkxFKSB7XHJcbiAgICAgIGlmIChzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA+PSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUik7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIG1hc2tlZFN0ciArPSBzdHJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IChzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA+PSAwID8gc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgOiBzdHIubGVuZ3RoKSAtIDEsXHJcbiAgICAgICAgajogbnVtYmVyID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG5cclxuICAgICAgICBpZiAoaiA+IDAgJiYgaiAlIDMgPT09IDApIHtcclxuICAgICAgICAgIG1hc2tlZFN0ciA9IHRoaXMuVEhPVVNBTkRfU0VQQVJBVE9SICsgbWFza2VkU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXNrZWRTdHI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlYWxWYWx1ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RyID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgbGV0IHJlYWxTdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5JREVOVElUWSkge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0ckl0ZW0gb2Ygc3RyKSB7XHJcbiAgICAgICAgaWYgKHN0ckl0ZW0ubWF0Y2goJ1swLTldJykpIHtcclxuICAgICAgICAgIHJlYWxTdHIgKz0gc3RySXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RySXRlbSBvZiBzdHIpIHtcclxuICAgICAgICBpZiAoc3RySXRlbS5tYXRjaCgnWzAtOV0nKSkge1xyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJJdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkge1xyXG4gICAgICBsZXQgaGF2ZURvdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBzdHJJdGVtIG9mIHN0cikge1xyXG4gICAgICAgIGlmIChzdHJJdGVtLm1hdGNoKCdbMC05XScpIHx8ICgoc3RySXRlbSA9PT0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgJiYgIWhhdmVEb3QpKSB7XHJcbiAgICAgICAgICByZWFsU3RyICs9IHN0ckl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhdmVEb3QgPSBoYXZlRG90IHx8IChzdHJJdGVtID09PSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlYWxTdHI7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKCRldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDIHx8IHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkgJiZcclxuICAgICAgTnVtYmVyKHRoaXMuZ2V0UmVhbFZhbHVlKHRoaXMuaW5wdXRUZXh0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpKSA9PT0gMCkge1xyXG4gICAgICB0aGlzLmlucHV0VGV4dC5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=