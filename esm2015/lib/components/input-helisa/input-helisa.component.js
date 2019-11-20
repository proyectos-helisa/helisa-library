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
                    maskedStr = '.' + maskedStr;
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type == InputHelisaType.NUMERIC) {
            for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 == 0)
                    maskedStr = ',' + maskedStr;
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type == InputHelisaType.DOUBLE) {
            if (str.indexOf('.') >= 0)
                for (let i = str.indexOf('.'); i < str.length; i++)
                    maskedStr += str[i];
            for (let i = (str.indexOf('.') >= 0 ? str.indexOf('.') : str.length) - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 == 0)
                    maskedStr = ',' + maskedStr;
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
                if (str[i].match('[0-9]') || ((str[i] == '.') && !haveDot))
                    realStr += str[i];
                haveDot = haveDot || (str[i] == '.');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1oZWxpc2EvaW5wdXQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBR3pDLFVBQU8sRUFBRSxXQUFRLEVBQUUsVUFBTyxFQUFFLFNBQU07Ozs7Ozs7QUFRcEMsTUFBTSxPQUFPLG9CQUFvQjtJQWlCL0I7UUFmUyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsYUFBUSxHQUFHLEtBQUssQ0FBQzs7UUFFakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBb0IsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUd6RCxvQkFBZSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysa0JBQWEsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFJekMsQ0FBQzs7Ozs7SUFFakIsSUFDSSxnQkFBZ0IsQ0FBQyxXQUF3QjtRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0MsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FB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LEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7WUF0SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw0V0FBNEM7O2FBRTdDOzs7OzswQkFHRSxLQUFLO3VCQUNMLE1BQU07dUJBQ04sS0FBSzt3QkFFTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFPTCxTQUFTLFNBQUMsV0FBVzsrQkFJckIsS0FBSzs7OztJQWpCTiwyQ0FBMEI7O0lBQzFCLHdDQUFzRTs7SUFDdEUsd0NBQTBCOztJQUUxQix5Q0FBMkI7O0lBQzNCLHdDQUEwQjs7SUFDMUIsb0NBQXlEOztJQUd6RCwrQ0FBbUQ7Ozs7O0lBQ25ELHlDQUF1Qjs7Ozs7SUFDdkIsNkNBQXlEOztJQUV6RCx5Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gSW5wdXRIZWxpc2FUeXBlIHtcclxuICBERUZBVUxULCBJREVOVElUWSwgTlVNRVJJQywgRE9VQkxFXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xyXG4gIEBPdXRwdXQoKSBzZXRWYWx1ZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSBpc1NlYXJjaCA9IGZhbHNlO1xyXG4gIC8vQElucHV0KCkgaW5wdXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIEBJbnB1dCgpIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogSW5wdXRIZWxpc2FUeXBlID0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQ7XHJcblxyXG5cclxuICBmb3JtQ29udHJvbE1hc2s6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBwcml2YXRlIHJlYWxWYWx1ZSA9ICcnO1xyXG4gIHByaXZhdGUgaW5wdXRGb3JtUmVhbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnB1dFRleHQnKSBuYW1lSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlucHV0Rm9ybUNvbnRyb2woZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sKSB7XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwgPSBmb3JtQ29udHJvbDtcclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZShkYXRhKSAhPSB0aGlzLmZvcm1Db250cm9sTWFzay52YWx1ZSlcclxuICAgICAgICB0aGlzLmNoYW5nZShkYXRhKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGFuZ2UodGhpcy5pbnB1dEZvcm1SZWFsLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaCgpIHtcclxuICAgIHRoaXMuc2V0VmFsdWUuZW1pdCh0aGlzLnJlYWxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2UoZXZlbnQpIHtcclxuICAgIGlmIChldmVudCAhPSBudWxsKSBldmVudCA9IGV2ZW50ICsgJyc7XHJcbiAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgY29uc3QgbGVuZ3RoID0gZXZlbnQgPyBldmVudC5sZW5ndGggOiAwO1xyXG4gICAgdGhpcy5yZWFsVmFsdWUgPSB0aGlzLmdldFJlYWxWYWx1ZShldmVudCk7XHJcbiAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSkgIT0gdGhpcy5mb3JtQ29udHJvbE1hc2sudmFsdWUpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0VmFsdWUodGhpcy5nZXRNYXNrZWRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSkpO1xyXG4gICAgICBwb3NpdGlvbiArPSB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCAtIGxlbmd0aDtcclxuICAgICAgdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHBvc2l0aW9uO1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsLnNldFZhbHVlKHRoaXMucmVhbFZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWFza2VkVmFsdWUoc3RyKSB7XHJcbiAgICBpZihzdHIgPT0gbnVsbClcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PSBJbnB1dEhlbGlzYVR5cGUuREVGQVVMVClcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIGxldCBtYXNrZWRTdHIgPSAnJztcclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLklERU5USVRZKSB7XHJcbiAgICAgIGZvcihsZXQgaSA9IHN0ci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICAgIGlmKGogPiAwICYmIGogJSAzID09IDApXHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSAnLicgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvcihsZXQgaSA9IHN0ci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICAgIGlmKGogPiAwICYmIGogJSAzID09IDApXHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSAnLCcgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5ET1VCTEUpIHtcclxuICAgICAgaWYoc3RyLmluZGV4T2YoJy4nKSA+PSAwKVxyXG4gICAgICAgIGZvcihsZXQgaSA9IHN0ci5pbmRleE9mKCcuJyk7IGkgPCBzdHIubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICBtYXNrZWRTdHIgKz0gc3RyW2ldO1xyXG4gICAgICBmb3IobGV0IGkgPSAoc3RyLmluZGV4T2YoJy4nKSA+PSAwP3N0ci5pbmRleE9mKCcuJyk6c3RyLmxlbmd0aCkgLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICAgIGlmKGogPiAwICYmIGogJSAzID09IDApXHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSAnLCcgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFza2VkU3RyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSZWFsVmFsdWUoc3RyKSB7XHJcbiAgICBpZihzdHIgPT0gbnVsbClcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgbGV0IHJlYWxTdHIgPSAnJztcclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpXHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5JREVOVElUWSkge1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGlmIChzdHJbaV0ubWF0Y2goJ1thLXpBLVowLTldJykpXHJcbiAgICAgICAgICByZWFsU3RyICs9IHN0cltpXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLk5VTUVSSUMpIHtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKylcclxuICAgICAgICBpZiAoc3RyW2ldLm1hdGNoKCdbMC05XScpKVxyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJbaV07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5ET1VCTEUpIHtcclxuICAgICAgbGV0IGhhdmVEb3QgPSBmYWxzZTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdHJbaV0ubWF0Y2goJ1swLTldJykgfHwgKChzdHJbaV0gPT0gJy4nKSAmJiAhaGF2ZURvdCkpXHJcbiAgICAgICAgICByZWFsU3RyICs9IHN0cltpXTtcclxuICAgICAgICBoYXZlRG90ID0gaGF2ZURvdCB8fCAoc3RyW2ldID09ICcuJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZWFsU3RyO1xyXG4gIH1cclxufVxyXG4iXX0=