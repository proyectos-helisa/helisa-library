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
        this.inputFormControl = new FormControl('');
        this.isFocused = false;
        this.disabled = false;
        this.type = InputHelisaType.DEFAULT;
        this.formControlMask = new FormControl('');
        this.realValue = '';
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
        this.setValue.emit(this.inputFormControl.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        /** @type {?} */
        let position = this.nameInput.nativeElement.selectionStart;
        /** @type {?} */
        const length = event.length;
        this.realValue = this.getRealValue(event);
        this.nameInput.nativeElement.value = this.getMaskedValue(this.realValue);
        this.inputFormControl.setValue(this.realValue);
        position += this.nameInput.nativeElement.value.length - length;
        this.nameInput.nativeElement.selectionStart = position;
        this.nameInput.nativeElement.selectionEnd = position;
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    getMaskedValue(str) {
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
    inputFormControl: [{ type: Input }],
    isFocused: [{ type: Input }],
    disabled: [{ type: Input }],
    type: [{ type: Input }],
    nameInput: [{ type: ViewChild, args: ['inputText',] }]
};
if (false) {
    /** @type {?} */
    InputHelisaComponent.prototype.placeholder;
    /** @type {?} */
    InputHelisaComponent.prototype.setValue;
    /** @type {?} */
    InputHelisaComponent.prototype.isSearch;
    /** @type {?} */
    InputHelisaComponent.prototype.inputFormControl;
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
    /** @type {?} */
    InputHelisaComponent.prototype.nameInput;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1oZWxpc2EvaW5wdXQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBR3pDLFVBQU8sRUFBRSxXQUFRLEVBQUUsVUFBTyxFQUFFLFNBQU07Ozs7Ozs7QUFRcEMsTUFBTSxPQUFPLG9CQUFvQjtJQWdCL0I7UUFkUyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixxQkFBZ0IsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBb0IsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUd6RCxvQkFBZSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxjQUFTLEdBQUcsRUFBRSxDQUFDO0lBSVAsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQs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RUFBRTtnQkFDbEMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3hELE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sR0FBRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7YUFDdEM7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQWxHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDRXQUE0Qzs7YUFFN0M7Ozs7OzBCQUdFLEtBQUs7dUJBQ0wsTUFBTTt1QkFDTixLQUFLOytCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBTUwsU0FBUyxTQUFDLFdBQVc7Ozs7SUFadEIsMkNBQTBCOztJQUMxQix3Q0FBc0U7O0lBQ3RFLHdDQUEwQjs7SUFDMUIsZ0RBQTZEOztJQUM3RCx5Q0FBMkI7O0lBQzNCLHdDQUEwQjs7SUFDMUIsb0NBQXlEOztJQUd6RCwrQ0FBbUQ7Ozs7O0lBQ25ELHlDQUF1Qjs7SUFFdkIseUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIElucHV0SGVsaXNhVHlwZSB7XHJcbiAgREVGQVVMVCwgSURFTlRJVFksIE5VTUVSSUMsIERPVUJMRVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0SGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBAT3V0cHV0KCkgc2V0VmFsdWU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQElucHV0KCkgaXNTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbnB1dEZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgQElucHV0KCkgaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB0eXBlOiBJbnB1dEhlbGlzYVR5cGUgPSBJbnB1dEhlbGlzYVR5cGUuREVGQVVMVDtcclxuXHJcblxyXG4gIGZvcm1Db250cm9sTWFzazogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIHByaXZhdGUgcmVhbFZhbHVlID0gJyc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0VGV4dCcpIG5hbWVJbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoKCkge1xyXG4gICAgdGhpcy5zZXRWYWx1ZS5lbWl0KHRoaXMuaW5wdXRGb3JtQ29udHJvbC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2UoZXZlbnQpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICBjb25zdCBsZW5ndGggPSBldmVudC5sZW5ndGg7XHJcbiAgICB0aGlzLnJlYWxWYWx1ZSA9IHRoaXMuZ2V0UmVhbFZhbHVlKGV2ZW50KTtcclxuICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmdldE1hc2tlZFZhbHVlKHRoaXMucmVhbFZhbHVlKTtcclxuICAgIHRoaXMuaW5wdXRGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSk7XHJcbiAgICBwb3NpdGlvbiArPSB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCAtIGxlbmd0aDtcclxuICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcclxuICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1hc2tlZFZhbHVlKHN0cikge1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PSBJbnB1dEhlbGlzYVR5cGUuREVGQVVMVClcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIGxldCBtYXNrZWRTdHIgPSAnJztcclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLklERU5USVRZKSB7XHJcbiAgICAgIGZvcihsZXQgaSA9IHN0ci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICAgIGlmKGogPiAwICYmIGogJSAzID09IDApXHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSAnLicgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvcihsZXQgaSA9IHN0ci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICAgIGlmKGogPiAwICYmIGogJSAzID09IDApXHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSAnLCcgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5ET1VCTEUpIHtcclxuICAgICAgaWYoc3RyLmluZGV4T2YoJy4nKSA+PSAwKVxyXG4gICAgICAgIGZvcihsZXQgaSA9IHN0ci5pbmRleE9mKCcuJyk7IGkgPCBzdHIubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICBtYXNrZWRTdHIgKz0gc3RyW2ldO1xyXG4gICAgICBmb3IobGV0IGkgPSAoc3RyLmluZGV4T2YoJy4nKSA+PSAwP3N0ci5pbmRleE9mKCcuJyk6c3RyLmxlbmd0aCkgLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG4gICAgICAgIGlmKGogPiAwICYmIGogJSAzID09IDApXHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSAnLCcgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFza2VkU3RyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSZWFsVmFsdWUoc3RyKSB7XHJcbiAgICBsZXQgcmVhbFN0ciA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PSBJbnB1dEhlbGlzYVR5cGUuREVGQVVMVClcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLklERU5USVRZKSB7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgaWYgKHN0cltpXS5tYXRjaCgnW2EtekEtWjAtOV0nKSlcclxuICAgICAgICAgIHJlYWxTdHIgKz0gc3RyW2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PSBJbnB1dEhlbGlzYVR5cGUuTlVNRVJJQykge1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGlmIChzdHJbaV0ubWF0Y2goJ1swLTldJykpXHJcbiAgICAgICAgICByZWFsU3RyICs9IHN0cltpXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkge1xyXG4gICAgICBsZXQgaGF2ZURvdCA9IGZhbHNlO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN0cltpXS5tYXRjaCgnWzAtOV0nKSB8fCAoKHN0cltpXSA9PSAnLicpICYmICFoYXZlRG90KSlcclxuICAgICAgICAgIHJlYWxTdHIgKz0gc3RyW2ldO1xyXG4gICAgICAgIGhhdmVEb3QgPSBoYXZlRG90IHx8IChzdHJbaV0gPT0gJy4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlYWxTdHI7XHJcbiAgfVxyXG59XHJcbiJdfQ==