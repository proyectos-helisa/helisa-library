/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
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
        this.setValue = new EventEmitter();
        this.isSearch = false;
        //@Input() inputFormControl: FormControl = new FormControl('');
        this.isFocused = false;
        this.disabled = false;
        this.type = InputHelisaType.DEFAULT;
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
        data => {
            if (this.getMaskedValue(data) != this.formControlMask.value)
                this.change(data);
        }));
        this.change(this.inputFormReal.value);
        this.inputFormReal.statusChanges.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data == 'INVALID')
                this.formControlMask.setErrors({ key: 'Error de validación.' });
        }));
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
    search() {
        this.setValue.emit(this.realValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        if (event != null)
            event = event + '';
        /** @type {?} */
        let position = this.nameInput.nativeElement.selectionStart;
        /** @type {?} */
        const length = event ? event.length : 0;
        this.realValue = this.getRealValue(event);
        if (this.getMaskedValue(this.realValue) != this.formControlMask.value) {
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
        if (str == null)
            return str;
        str = str + '';
        if (this.type == InputHelisaType.DEFAULT)
            return str;
        /** @type {?} */
        let maskedStr = '';
        if (this.type == InputHelisaType.IDENTITY) {
            for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 == 0)
                    maskedStr = this.DECIMAL_SEPARATOR + maskedStr;
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type == InputHelisaType.NUMERIC) {
            for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 == 0)
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type == InputHelisaType.DOUBLE) {
            if (str.indexOf(this.DECIMAL_SEPARATOR) >= 0)
                for (let i = str.indexOf(this.DECIMAL_SEPARATOR); i < str.length; i++)
                    maskedStr += str[i];
            for (let i = (str.indexOf(this.DECIMAL_SEPARATOR) >= 0 ? str.indexOf(this.DECIMAL_SEPARATOR) : str.length) - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 == 0)
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
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
        if (str == null)
            return str;
        str = str + '';
        /** @type {?} */
        let realStr = '';
        if (this.type == InputHelisaType.DEFAULT)
            return str;
        if (this.type == InputHelisaType.IDENTITY) {
            for (let i = 0; i < str.length; i++)
                if (str[i].match('[a-zA-Z0-9]'))
                    realStr += str[i];
        }
        if (this.type == InputHelisaType.NUMERIC) {
            for (let i = 0; i < str.length; i++)
                if (str[i].match('[0-9]'))
                    realStr += str[i];
        }
        if (this.type == InputHelisaType.DOUBLE) {
            /** @type {?} */
            let haveDot = false;
            for (let i = 0; i < str.length; i++) {
                if (str[i].match('[0-9]') || ((str[i] == this.DECIMAL_SEPARATOR) && !haveDot))
                    realStr += str[i];
                haveDot = haveDot || (str[i] == this.DECIMAL_SEPARATOR);
            }
        }
        return realStr;
    }
}
InputHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-input',
                template: "<mat-form-field>\r\n  <input #inputText matInput placeholder=\"{{placeholder}}\" \r\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\r\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\r\n  >\r\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\r\n</mat-form-field>\r\n",
                styles: ["/deep/ hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
            }] }
];
/** @nocollapse */
InputHelisaComponent.ctorParameters = () => [];
InputHelisaComponent.propDecorators = {
    placeholder: [{ type: Input }],
    setValue: [{ type: Output }],
    isSearch: [{ type: Input }],
    isFocused: [{ type: Input }],
    disabled: [{ type: Input }],
    type: [{ type: Input }],
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
    InputHelisaComponent.prototype.setValue;
    /** @type {?} */
    InputHelisaComponent.prototype.isSearch;
    /** @type {?} */
    InputHelisaComponent.prototype.isFocused;
    /** @type {?} */
    InputHelisaComponent.prototype.disabled;
    /** @type {?} */
    InputHelisaComponent.prototype.type;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1oZWxpc2EvaW5wdXQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBR3pDLFVBQU8sRUFBRSxXQUFRLEVBQUUsVUFBTyxFQUFFLFNBQU07Ozs7Ozs7QUFRcEMsTUFBTSxPQUFPLG9CQUFvQjtJQW9CL0I7UUFsQmlCLHNCQUFpQixHQUFHLEdBQUcsQ0FBQztRQUN4Qix1QkFBa0IsR0FBRyxHQUFHLENBQUM7UUFFakMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdELGFBQVEsR0FBRyxLQUFLLENBQUM7O1FBRWpCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixTQUFJLEdBQW9CLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFHekQsb0JBQWUsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGtCQUFhLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBSXpDLENBQUM7Ozs7O0lBRWpCLElBQ0ksZ0JBQWdCLENBQUMsV0FBd0I7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLElBQUks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QUNuQyxPQUFPLEdBQUcsS0FBSztZQUNuQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQzNFLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sR0FBRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDekQ7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQS9IRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDRXQUE0Qzs7YUFFN0M7Ozs7OzBCQU1FLEtBQUs7dUJBQ0wsTUFBTTt1QkFDTixLQUFLO3dCQUVMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQU9MLFNBQVMsU0FBQyxXQUFXOytCQUlyQixLQUFLOzs7Ozs7O0lBcEJOLGlEQUF5Qzs7Ozs7SUFDekMsa0RBQTBDOztJQUUxQywyQ0FBMEI7O0lBQzFCLHdDQUFzRTs7SUFDdEUsd0NBQTBCOztJQUUxQix5Q0FBMkI7O0lBQzNCLHdDQUEwQjs7SUFDMUIsb0NBQXlEOztJQUd6RCwrQ0FBbUQ7Ozs7O0lBQ25ELHlDQUF1Qjs7Ozs7SUFDdkIsNkNBQXlEOztJQUV6RCx5Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gSW5wdXRIZWxpc2FUeXBlIHtcclxuICBERUZBVUxULCBJREVOVElUWSwgTlVNRVJJQywgRE9VQkxFXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IERFQ0lNQUxfU0VQQVJBVE9SID0gJy4nO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgVEhPVVNBTkRfU0VQQVJBVE9SID0gJywnO1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xyXG4gIEBPdXRwdXQoKSBzZXRWYWx1ZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSBpc1NlYXJjaCA9IGZhbHNlO1xyXG4gIC8vQElucHV0KCkgaW5wdXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIEBJbnB1dCgpIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogSW5wdXRIZWxpc2FUeXBlID0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQ7XHJcblxyXG5cclxuICBmb3JtQ29udHJvbE1hc2s6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBwcml2YXRlIHJlYWxWYWx1ZSA9ICcnO1xyXG4gIHByaXZhdGUgaW5wdXRGb3JtUmVhbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnB1dFRleHQnKSBuYW1lSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlucHV0Rm9ybUNvbnRyb2woZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sKSB7XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwgPSBmb3JtQ29udHJvbDtcclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZShkYXRhKSAhPSB0aGlzLmZvcm1Db250cm9sTWFzay52YWx1ZSlcclxuICAgICAgICB0aGlzLmNoYW5nZShkYXRhKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGFuZ2UodGhpcy5pbnB1dEZvcm1SZWFsLnZhbHVlKTtcclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEgPT0gJ0lOVkFMSUQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0RXJyb3JzKHtrZXk6ICdFcnJvciBkZSB2YWxpZGFjacOzbi4nfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaCgpIHtcclxuICAgIHRoaXMuc2V0VmFsdWUuZW1pdCh0aGlzLnJlYWxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2UoZXZlbnQpIHtcclxuICAgIGlmIChldmVudCAhPSBudWxsKSBldmVudCA9IGV2ZW50ICsgJyc7XHJcbiAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgY29uc3QgbGVuZ3RoID0gZXZlbnQgPyBldmVudC5sZW5ndGggOiAwO1xyXG4gICAgdGhpcy5yZWFsVmFsdWUgPSB0aGlzLmdldFJlYWxWYWx1ZShldmVudCk7XHJcbiAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSkgIT0gdGhpcy5mb3JtQ29udHJvbE1hc2sudmFsdWUpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0VmFsdWUodGhpcy5nZXRNYXNrZWRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSkpO1xyXG4gICAgICBwb3NpdGlvbiArPSB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCAtIGxlbmd0aDtcclxuICAgICAgdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHBvc2l0aW9uO1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsLnNldFZhbHVlKHRoaXMucmVhbFZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWFza2VkVmFsdWUoc3RyKSB7XHJcbiAgICBpZihzdHIgPT0gbnVsbClcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PSBJbnB1dEhlbGlzYVR5cGUuREVGQVVMVClcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIGxldCBtYXNrZWRTdHIgPSAnJztcclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLklERU5USVRZKSB7XHJcbiAgICAgIGZvcihsZXQgaSA9IHN0ci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICAgIGlmKGogPiAwICYmIGogJSAzID09IDApXHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SICsgbWFza2VkU3RyO1xyXG4gICAgICAgIG1hc2tlZFN0ciA9IHN0cltpXSArIG1hc2tlZFN0cjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PSBJbnB1dEhlbGlzYVR5cGUuTlVNRVJJQykge1xyXG4gICAgICBmb3IobGV0IGkgPSBzdHIubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcclxuICAgICAgICBpZihqID4gMCAmJiBqICUgMyA9PSAwKVxyXG4gICAgICAgICAgbWFza2VkU3RyID0gdGhpcy5USE9VU0FORF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5ET1VCTEUpIHtcclxuICAgICAgaWYoc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgPj0gMClcclxuICAgICAgICBmb3IobGV0IGkgPSBzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTsgaSA8IHN0ci5sZW5ndGg7IGkrKylcclxuICAgICAgICAgIG1hc2tlZFN0ciArPSBzdHJbaV07XHJcbiAgICAgIGZvcihsZXQgaSA9IChzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA+PSAwP3N0ci5pbmRleE9mKHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpOnN0ci5sZW5ndGgpIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcclxuICAgICAgICBpZihqID4gMCAmJiBqICUgMyA9PSAwKVxyXG4gICAgICAgICAgbWFza2VkU3RyID0gdGhpcy5USE9VU0FORF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFza2VkU3RyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSZWFsVmFsdWUoc3RyKSB7XHJcbiAgICBpZihzdHIgPT0gbnVsbClcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgbGV0IHJlYWxTdHIgPSAnJztcclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpXHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5JREVOVElUWSkge1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGlmIChzdHJbaV0ubWF0Y2goJ1thLXpBLVowLTldJykpXHJcbiAgICAgICAgICByZWFsU3RyICs9IHN0cltpXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLk5VTUVSSUMpIHtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKylcclxuICAgICAgICBpZiAoc3RyW2ldLm1hdGNoKCdbMC05XScpKVxyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJbaV07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5ET1VCTEUpIHtcclxuICAgICAgbGV0IGhhdmVEb3QgPSBmYWxzZTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdHJbaV0ubWF0Y2goJ1swLTldJykgfHwgKChzdHJbaV0gPT0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgJiYgIWhhdmVEb3QpKVxyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJbaV07XHJcbiAgICAgICAgaGF2ZURvdCA9IGhhdmVEb3QgfHwgKHN0cltpXSA9PSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlYWxTdHI7XHJcbiAgfVxyXG59XHJcbiJdfQ==