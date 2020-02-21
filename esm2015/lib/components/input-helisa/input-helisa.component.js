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
    isSearch: [{ type: Input }],
    isFocused: [{ type: Input }],
    disabled: [{ type: Input }],
    type: [{ type: Input }],
    setValue: [{ type: Output }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1oZWxpc2EvaW5wdXQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBRzNDLFVBQU8sRUFBRSxXQUFRLEVBQUUsVUFBTyxFQUFFLFNBQU07Ozs7Ozs7QUFRcEMsTUFBTSxPQUFPLG9CQUFvQjtJQThCL0I7UUE1QmlCLHNCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUNoQyx1QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFFekMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7O1FBR3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7O1FBRTFCLGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7UUFLM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixTQUFJLEdBQW9CLGVBQWUsQ0FBQyxPQUFPLENBQUM7Ozs7UUFLL0MsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3RFLG9CQUFlLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsa0JBQWEsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFLekQsQ0FBQzs7Ozs7SUFFRCxJQUNJLGdCQUFnQixDQUFDLFdBQXdCO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFF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Ozs7Ozs7O0lBL0JOLGlEQUFpRDs7Ozs7SUFDakQsa0RBQWtEOztJQUVsRCwyQ0FBa0M7O0lBR2xDLHdDQUFtQzs7SUFFbkMseUNBQW9DOzs7OztJQUtwQyx3Q0FBbUM7O0lBQ25DLG9DQUF5RDs7Ozs7SUFLekQsd0NBQXNFOztJQUd0RSwrQ0FBbUQ7Ozs7O0lBQ25ELHlDQUErQjs7Ozs7SUFDL0IsNkNBQXlEOztJQUV6RCx5Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgZW51bSBJbnB1dEhlbGlzYVR5cGUge1xyXG4gIERFRkFVTFQsIElERU5USVRZLCBOVU1FUklDLCBET1VCTEVcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgREVDSU1BTF9TRVBBUkFUT1I6IHN0cmluZyA9ICcuJztcclxuICBwcml2YXRlIHJlYWRvbmx5IFRIT1VTQU5EX1NFUEFSQVRPUjogc3RyaW5nID0gJywnO1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8vIE1vc3RyYXIgbyBubyBlbCBpY29ubyBkZSBidXNjYXJcclxuICBASW5wdXQoKSBpc1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBJbnB1dCgpIGlucHV0Rm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBASW5wdXQoKSBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVwcmVjYXRlZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogSW5wdXRIZWxpc2FUeXBlID0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2F0ZWRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgc2V0VmFsdWU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG5cclxuICBmb3JtQ29udHJvbE1hc2s6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBwcml2YXRlIHJlYWxWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBpbnB1dEZvcm1SZWFsOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0VGV4dCcpIG5hbWVJbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpbnB1dEZvcm1Db250cm9sKGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsID0gZm9ybUNvbnRyb2w7XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlKHRoaXMuaW5wdXRGb3JtUmVhbC5zdGF0dXMpO1xyXG4gICAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZShkYXRhKSAhPT0gdGhpcy5mb3JtQ29udHJvbE1hc2sudmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZShkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRWYWxpZGF0b3JzKHRoaXMuaW5wdXRGb3JtUmVhbC52YWxpZGF0b3IpO1xyXG4gICAgdGhpcy5jaGFuZ2UodGhpcy5pbnB1dEZvcm1SZWFsLnZhbHVlKTtcclxuXHJcbiAgICAvLyBkaXNhYmxlIGNvbnRyb2xcclxuICAgIGlmIChmb3JtQ29udHJvbC5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShcclxuICAgICAgKGRhdGE6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHN0YXR1c0NoYW5nZShkYXRhOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChkYXRhID09PSAnSU5WQUxJRCcpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0RXJyb3JzKHsga2V5OiAnRXJyb3IgZGUgdmFsaWRhY2nDs24uJyB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLnNldEVycm9ycyhudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsdWUuZW1pdCh0aGlzLnJlYWxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2UoZXZlbnQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50ICE9IG51bGwpIHsgZXZlbnQgPSBldmVudCArICcnOyB9XHJcbiAgICBsZXQgcG9zaXRpb246IG51bWJlciA9IHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IGV2ZW50ID8gZXZlbnQubGVuZ3RoIDogMDtcclxuICAgIHRoaXMucmVhbFZhbHVlID0gdGhpcy5nZXRSZWFsVmFsdWUoZXZlbnQpO1xyXG4gICAgaWYgKHRoaXMuZ2V0TWFza2VkVmFsdWUodGhpcy5yZWFsVmFsdWUpICE9PSB0aGlzLmZvcm1Db250cm9sTWFzay52YWx1ZSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRWYWx1ZSh0aGlzLmdldE1hc2tlZFZhbHVlKHRoaXMucmVhbFZhbHVlKSk7XHJcbiAgICAgIHBvc2l0aW9uICs9IHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoIC0gbGVuZ3RoO1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XHJcbiAgICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwuc2V0VmFsdWUodGhpcy5yZWFsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRNYXNrZWRWYWx1ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RyID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIGxldCBtYXNrZWRTdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLklERU5USVRZKSB7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0ci5sZW5ndGggLSAxLCBqOiBudW1iZXIgPSAwOyBpID49IDA7IGktLSAsIGorKykge1xyXG4gICAgICAgIGlmIChqID4gMCAmJiBqICUgMyA9PT0gMCkge1xyXG4gICAgICAgICAgbWFza2VkU3RyID0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUiArIG1hc2tlZFN0cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuTlVNRVJJQykge1xyXG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBzdHIubGVuZ3RoIC0gMSwgajogbnVtYmVyID0gMDsgaSA+PSAwOyBpLS0gLCBqKyspIHtcclxuICAgICAgICBpZiAoaiA+IDAgJiYgaiAlIDMgPT09IDApIHtcclxuICAgICAgICAgIG1hc2tlZFN0ciA9IHRoaXMuVEhPVVNBTkRfU0VQQVJBVE9SICsgbWFza2VkU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5ET1VCTEUpIHtcclxuICAgICAgaWYgKHN0ci5pbmRleE9mKHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpID49IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbWFza2VkU3RyICs9IHN0cltpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gKHN0ci5pbmRleE9mKHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpID49IDAgPyBzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA6IHN0ci5sZW5ndGgpIC0gMSxcclxuICAgICAgICAgICBqOiBudW1iZXIgPSAwOyBpID49IDA7IGktLSAsIGorKykge1xyXG5cclxuICAgICAgICBpZiAoaiA+IDAgJiYgaiAlIDMgPT09IDApIHtcclxuICAgICAgICAgIG1hc2tlZFN0ciA9IHRoaXMuVEhPVVNBTkRfU0VQQVJBVE9SICsgbWFza2VkU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXNrZWRTdHI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlYWxWYWx1ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RyID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgbGV0IHJlYWxTdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICBJbnB1dEhlbGlzYVR5cGUuSURFTlRJVFkpIHtcclxuICAgICAgZm9yIChjb25zdCBzdHJJdGVtIG9mIHN0cikge1xyXG4gICAgICAgIGlmIChzdHJJdGVtLm1hdGNoKCdbYS16QS1aMC05XScpKSB7XHJcbiAgICAgICAgICByZWFsU3RyICs9IHN0ckl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuTlVNRVJJQykge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0ckl0ZW0gb2Ygc3RyKSB7XHJcbiAgICAgICAgaWYgKHN0ckl0ZW0ubWF0Y2goJ1swLTldJykpIHtcclxuICAgICAgICAgIHJlYWxTdHIgKz0gc3RySXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5ET1VCTEUpIHtcclxuICAgICAgbGV0IGhhdmVEb3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgIGZvciAoY29uc3Qgc3RySXRlbSBvZiBzdHIpIHtcclxuICAgICAgICBpZiAoc3RySXRlbS5tYXRjaCgnWzAtOV0nKSB8fCAoKHN0ckl0ZW0gPT09IHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpICYmICFoYXZlRG90KSkge1xyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJJdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYXZlRG90ID0gaGF2ZURvdCB8fCAoc3RySXRlbSA9PT0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZWFsU3RyO1xyXG4gIH1cclxufVxyXG4iXX0=