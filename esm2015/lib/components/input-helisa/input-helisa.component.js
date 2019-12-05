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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1oZWxpc2EvaW5wdXQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBRzNDLFVBQU8sRUFBRSxXQUFRLEVBQUUsVUFBTyxFQUFFLFNBQU07Ozs7Ozs7QUFRcEMsTUFBTSxPQUFPLG9CQUFvQjtJQW9CL0I7UUFsQmlCLHNCQUFpQixHQUFHLEdBQUcsQ0FBQztRQUN4Qix1QkFBa0IsR0FBRyxHQUFHLENBQUM7UUFFakMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdELGFBQVEsR0FBRyxLQUFLLENBQUM7O1FBRWpCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixTQUFJLEdBQW9CLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFHekQsb0JBQWUsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGtCQUFhLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBSXpDLENBQUM7Ozs7O0lBRWpCLElBQ0ksZ0JBQWdCLENBQUMsV0FBd0I7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLElBQUks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QUNuQyxPQUFPLEdBQUcsS0FBSztZQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQzNFLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sR0FBRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDekQ7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQS9IRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDRXQUE0Qzs7YUFFN0M7Ozs7OzBCQU1FLEtBQUs7dUJBQ0wsTUFBTTt1QkFDTixLQUFLO3dCQUVMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQU9MLFNBQVMsU0FBQyxXQUFXOytCQUlyQixLQUFLOzs7Ozs7O0lBcEJOLGlEQUF5Qzs7Ozs7SUFDekMsa0RBQTBDOztJQUUxQywyQ0FBMEI7O0lBQzFCLHdDQUFzRTs7SUFDdEUsd0NBQTBCOztJQUUxQix5Q0FBMkI7O0lBQzNCLHdDQUEwQjs7SUFDMUIsb0NBQXlEOztJQUd6RCwrQ0FBbUQ7Ozs7O0lBQ25ELHlDQUF1Qjs7Ozs7SUFDdkIsNkNBQXlEOztJQUV6RCx5Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIElucHV0SGVsaXNhVHlwZSB7XHJcbiAgREVGQVVMVCwgSURFTlRJVFksIE5VTUVSSUMsIERPVUJMRVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0SGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBERUNJTUFMX1NFUEFSQVRPUiA9ICcuJztcclxuICBwcml2YXRlIHJlYWRvbmx5IFRIT1VTQU5EX1NFUEFSQVRPUiA9ICcsJztcclxuXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBAT3V0cHV0KCkgc2V0VmFsdWU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQElucHV0KCkgaXNTZWFyY2ggPSBmYWxzZTtcclxuICAvL0BJbnB1dCgpIGlucHV0Rm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBASW5wdXQoKSBpc0ZvY3VzZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHR5cGU6IElucHV0SGVsaXNhVHlwZSA9IElucHV0SGVsaXNhVHlwZS5ERUZBVUxUO1xyXG5cclxuXHJcbiAgZm9ybUNvbnRyb2xNYXNrOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgcHJpdmF0ZSByZWFsVmFsdWUgPSAnJztcclxuICBwcml2YXRlIGlucHV0Rm9ybVJlYWw6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRUZXh0JykgbmFtZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpbnB1dEZvcm1Db250cm9sKGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsID0gZm9ybUNvbnRyb2w7XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgaWYgKHRoaXMuZ2V0TWFza2VkVmFsdWUoZGF0YSkgIT0gdGhpcy5mb3JtQ29udHJvbE1hc2sudmFsdWUpXHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hhbmdlKHRoaXMuaW5wdXRGb3JtUmVhbC52YWx1ZSk7XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhID09ICdJTlZBTElEJylcclxuICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLnNldEVycm9ycyh7IGtleTogJ0Vycm9yIGRlIHZhbGlkYWNpw7NuLicgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWFyY2goKSB7XHJcbiAgICB0aGlzLnNldFZhbHVlLmVtaXQodGhpcy5yZWFsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQgIT0gbnVsbCkgZXZlbnQgPSBldmVudCArICcnO1xyXG4gICAgbGV0IHBvc2l0aW9uID0gdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGV2ZW50ID8gZXZlbnQubGVuZ3RoIDogMDtcclxuICAgIHRoaXMucmVhbFZhbHVlID0gdGhpcy5nZXRSZWFsVmFsdWUoZXZlbnQpO1xyXG4gICAgaWYgKHRoaXMuZ2V0TWFza2VkVmFsdWUodGhpcy5yZWFsVmFsdWUpICE9IHRoaXMuZm9ybUNvbnRyb2xNYXNrLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLnNldFZhbHVlKHRoaXMuZ2V0TWFza2VkVmFsdWUodGhpcy5yZWFsVmFsdWUpKTtcclxuICAgICAgcG9zaXRpb24gKz0gdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggLSBsZW5ndGg7XHJcbiAgICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcclxuICAgICAgdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBwb3NpdGlvbjtcclxuICAgIH1cclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC5zZXRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1hc2tlZFZhbHVlKHN0cikge1xyXG4gICAgaWYgKHN0ciA9PSBudWxsKVxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgc3RyID0gc3RyICsgJyc7XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5ERUZBVUxUKVxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgbGV0IG1hc2tlZFN0ciA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PSBJbnB1dEhlbGlzYVR5cGUuSURFTlRJVFkpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHN0ci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0gLCBqKyspIHtcclxuICAgICAgICBpZiAoaiA+IDAgJiYgaiAlIDMgPT0gMClcclxuICAgICAgICAgIG1hc2tlZFN0ciA9IHRoaXMuREVDSU1BTF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBzdHIubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tICwgaisrKSB7XHJcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09IDApXHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLlRIT1VTQU5EX1NFUEFSQVRPUiArIG1hc2tlZFN0cjtcclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkge1xyXG4gICAgICBpZiAoc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgPj0gMClcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUik7IGkgPCBzdHIubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICBtYXNrZWRTdHIgKz0gc3RyW2ldO1xyXG4gICAgICBmb3IgKGxldCBpID0gKHN0ci5pbmRleE9mKHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpID49IDAgPyBzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA6IHN0ci5sZW5ndGgpIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tICwgaisrKSB7XHJcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09IDApXHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLlRIT1VTQU5EX1NFUEFSQVRPUiArIG1hc2tlZFN0cjtcclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXNrZWRTdHI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlYWxWYWx1ZShzdHIpIHtcclxuICAgIGlmIChzdHIgPT0gbnVsbClcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgbGV0IHJlYWxTdHIgPSAnJztcclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpXHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5JREVOVElUWSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKylcclxuICAgICAgICBpZiAoc3RyW2ldLm1hdGNoKCdbYS16QS1aMC05XScpKVxyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJbaV07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGlmIChzdHJbaV0ubWF0Y2goJ1swLTldJykpXHJcbiAgICAgICAgICByZWFsU3RyICs9IHN0cltpXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkge1xyXG4gICAgICBsZXQgaGF2ZURvdCA9IGZhbHNlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdHJbaV0ubWF0Y2goJ1swLTldJykgfHwgKChzdHJbaV0gPT0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgJiYgIWhhdmVEb3QpKVxyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJbaV07XHJcbiAgICAgICAgaGF2ZURvdCA9IGhhdmVEb3QgfHwgKHN0cltpXSA9PSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlYWxTdHI7XHJcbiAgfVxyXG59XHJcbiJdfQ==