/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
/** @enum {number} */
var InputHelisaType = {
    DEFAULT: 0, IDENTITY: 1, NUMERIC: 2, DOUBLE: 3,
};
export { InputHelisaType };
InputHelisaType[InputHelisaType.DEFAULT] = 'DEFAULT';
InputHelisaType[InputHelisaType.IDENTITY] = 'IDENTITY';
InputHelisaType[InputHelisaType.NUMERIC] = 'NUMERIC';
InputHelisaType[InputHelisaType.DOUBLE] = 'DOUBLE';
var InputHelisaComponent = /** @class */ (function () {
    function InputHelisaComponent() {
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
    Object.defineProperty(InputHelisaComponent.prototype, "inputFormControl", {
        set: /**
         * @param {?} formControl
         * @return {?}
         */
        function (formControl) {
            var _this = this;
            this.inputFormReal = formControl;
            this.inputFormReal.valueChanges.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.statusChange(_this.inputFormReal.status);
                if (_this.getMaskedValue(data) != _this.formControlMask.value)
                    _this.change(data);
            }));
            this.formControlMask.setValidators(this.inputFormReal.validator);
            this.change(this.inputFormReal.value);
            this.inputFormReal.statusChanges.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.statusChange(data);
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    InputHelisaComponent.prototype.statusChange = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data == 'INVALID') {
            this.formControlMask.setErrors({ key: 'Error de validación.' });
        }
    };
    /**
     * @return {?}
     */
    InputHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isFocused) {
            this.nameInput.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    InputHelisaComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.setValue.emit(this.realValue);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InputHelisaComponent.prototype.change = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event != null)
            event = event + '';
        /** @type {?} */
        var position = this.nameInput.nativeElement.selectionStart;
        /** @type {?} */
        var length = event ? event.length : 0;
        this.realValue = this.getRealValue(event);
        if (this.getMaskedValue(this.realValue) != this.formControlMask.value) {
            this.formControlMask.setValue(this.getMaskedValue(this.realValue));
            position += this.nameInput.nativeElement.value.length - length;
            this.nameInput.nativeElement.selectionStart = position;
            this.nameInput.nativeElement.selectionEnd = position;
        }
        this.inputFormReal.setValue(this.realValue);
        //this.formControlMask.updateValueAndValidity();
        //this.formControlMask.markAsTouched();
        //    this.inputFormReal.updateValueAndValidity();
        //this.formControlMask.updateValueAndValidity();
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    InputHelisaComponent.prototype.getMaskedValue = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (str == null)
            return str;
        str = str + '';
        if (this.type == InputHelisaType.DEFAULT)
            return str;
        /** @type {?} */
        var maskedStr = '';
        if (this.type == InputHelisaType.IDENTITY) {
            for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 == 0)
                    maskedStr = this.DECIMAL_SEPARATOR + maskedStr;
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type == InputHelisaType.NUMERIC) {
            for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 == 0)
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type == InputHelisaType.DOUBLE) {
            if (str.indexOf(this.DECIMAL_SEPARATOR) >= 0)
                for (var i = str.indexOf(this.DECIMAL_SEPARATOR); i < str.length; i++)
                    maskedStr += str[i];
            for (var i = (str.indexOf(this.DECIMAL_SEPARATOR) >= 0 ? str.indexOf(this.DECIMAL_SEPARATOR) : str.length) - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 == 0)
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                maskedStr = str[i] + maskedStr;
            }
        }
        return maskedStr;
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    InputHelisaComponent.prototype.getRealValue = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (str == null)
            return str;
        str = str + '';
        /** @type {?} */
        var realStr = '';
        if (this.type == InputHelisaType.DEFAULT)
            return str;
        if (this.type == InputHelisaType.IDENTITY) {
            for (var i = 0; i < str.length; i++)
                if (str[i].match('[a-zA-Z0-9]'))
                    realStr += str[i];
        }
        if (this.type == InputHelisaType.NUMERIC) {
            for (var i = 0; i < str.length; i++)
                if (str[i].match('[0-9]'))
                    realStr += str[i];
        }
        if (this.type == InputHelisaType.DOUBLE) {
            /** @type {?} */
            var haveDot = false;
            for (var i = 0; i < str.length; i++) {
                if (str[i].match('[0-9]') || ((str[i] == this.DECIMAL_SEPARATOR) && !haveDot))
                    realStr += str[i];
                haveDot = haveDot || (str[i] == this.DECIMAL_SEPARATOR);
            }
        }
        return realStr;
    };
    InputHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-input',
                    template: "<mat-form-field>\r\n  <input #inputText matInput placeholder=\"{{placeholder}}\" \r\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\r\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\r\n  >\r\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\r\n</mat-form-field>\r\n",
                    styles: ["/deep/ hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
                }] }
    ];
    /** @nocollapse */
    InputHelisaComponent.ctorParameters = function () { return []; };
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
    return InputHelisaComponent;
}());
export { InputHelisaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1oZWxpc2EvaW5wdXQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBRzNDLFVBQU8sRUFBRSxXQUFRLEVBQUUsVUFBTyxFQUFFLFNBQU07Ozs7Ozs7QUFHcEM7SUF5QkU7UUFsQmlCLHNCQUFpQixHQUFHLEdBQUcsQ0FBQztRQUN4Qix1QkFBa0IsR0FBRyxHQUFHLENBQUM7UUFFakMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdELGFBQVEsR0FBRyxLQUFLLENBQUM7O1FBRWpCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixTQUFJLEdBQW9CLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFHekQsb0JBQWUsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGtCQUFhLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBS3pELENBQUM7SUFFRCxzQkFDSSxrREFBZ0I7Ozs7O1FBRHBCLFVBQ3FCLFdBQXdCO1lBRDdDLGlCQWVDO1lBYkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDNUMsS0FBSSxDQUFD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QUs7O0lBZ0hSLDJCQUFDO0NBQUEsQUE1SUQsSUE0SUM7U0F2SVksb0JBQW9COzs7Ozs7SUFFL0IsaURBQXlDOzs7OztJQUN6QyxrREFBMEM7O0lBRTFDLDJDQUEwQjs7SUFDMUIsd0NBQXNFOztJQUN0RSx3Q0FBMEI7O0lBRTFCLHlDQUEyQjs7SUFDM0Isd0NBQTBCOztJQUMxQixvQ0FBeUQ7O0lBR3pELCtDQUFtRDs7Ozs7SUFDbkQseUNBQXVCOzs7OztJQUN2Qiw2Q0FBeUQ7O0lBRXpELHlDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gSW5wdXRIZWxpc2FUeXBlIHtcclxuICBERUZBVUxULCBJREVOVElUWSwgTlVNRVJJQywgRE9VQkxFXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IERFQ0lNQUxfU0VQQVJBVE9SID0gJy4nO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgVEhPVVNBTkRfU0VQQVJBVE9SID0gJywnO1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xyXG4gIEBPdXRwdXQoKSBzZXRWYWx1ZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSBpc1NlYXJjaCA9IGZhbHNlO1xyXG4gIC8vQElucHV0KCkgaW5wdXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIEBJbnB1dCgpIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogSW5wdXRIZWxpc2FUeXBlID0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQ7XHJcblxyXG5cclxuICBmb3JtQ29udHJvbE1hc2s6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBwcml2YXRlIHJlYWxWYWx1ZSA9ICcnO1xyXG4gIHByaXZhdGUgaW5wdXRGb3JtUmVhbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnB1dFRleHQnKSBuYW1lSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaW5wdXRGb3JtQ29udHJvbChmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wpIHtcclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbCA9IGZvcm1Db250cm9sO1xyXG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlKHRoaXMuaW5wdXRGb3JtUmVhbC5zdGF0dXMpO1xyXG4gICAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZShkYXRhKSAhPSB0aGlzLmZvcm1Db250cm9sTWFzay52YWx1ZSlcclxuICAgICAgICB0aGlzLmNoYW5nZShkYXRhKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0VmFsaWRhdG9ycyh0aGlzLmlucHV0Rm9ybVJlYWwudmFsaWRhdG9yKVxyXG4gICAgdGhpcy5jaGFuZ2UodGhpcy5pbnB1dEZvcm1SZWFsLnZhbHVlKTtcclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDaGFuZ2UoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXR1c0NoYW5nZShkYXRhKSB7XHJcbiAgICBpZiAoZGF0YSA9PSAnSU5WQUxJRCcpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0RXJyb3JzKHtrZXk6ICdFcnJvciBkZSB2YWxpZGFjacOzbi4nfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWFyY2goKSB7XHJcbiAgICB0aGlzLnNldFZhbHVlLmVtaXQodGhpcy5yZWFsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQgIT0gbnVsbCkgZXZlbnQgPSBldmVudCArICcnO1xyXG4gICAgbGV0IHBvc2l0aW9uID0gdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGV2ZW50ID8gZXZlbnQubGVuZ3RoIDogMDtcclxuICAgIHRoaXMucmVhbFZhbHVlID0gdGhpcy5nZXRSZWFsVmFsdWUoZXZlbnQpO1xyXG4gICAgaWYgKHRoaXMuZ2V0TWFza2VkVmFsdWUodGhpcy5yZWFsVmFsdWUpICE9IHRoaXMuZm9ybUNvbnRyb2xNYXNrLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLnNldFZhbHVlKHRoaXMuZ2V0TWFza2VkVmFsdWUodGhpcy5yZWFsVmFsdWUpKTtcclxuICAgICAgcG9zaXRpb24gKz0gdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggLSBsZW5ndGg7XHJcbiAgICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcclxuICAgICAgdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBwb3NpdGlvbjtcclxuICAgIH1cclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC5zZXRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSk7XHJcbiAgICAvL3RoaXMuZm9ybUNvbnRyb2xNYXNrLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIC8vdGhpcy5mb3JtQ29udHJvbE1hc2subWFya0FzVG91Y2hlZCgpO1xyXG4vLyAgICB0aGlzLmlucHV0Rm9ybVJlYWwudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgLy90aGlzLmZvcm1Db250cm9sTWFzay51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1hc2tlZFZhbHVlKHN0cikge1xyXG4gICAgaWYgKHN0ciA9PSBudWxsKVxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgc3RyID0gc3RyICsgJyc7XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5ERUZBVUxUKVxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgbGV0IG1hc2tlZFN0ciA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PSBJbnB1dEhlbGlzYVR5cGUuSURFTlRJVFkpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHN0ci5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0gLCBqKyspIHtcclxuICAgICAgICBpZiAoaiA+IDAgJiYgaiAlIDMgPT0gMClcclxuICAgICAgICAgIG1hc2tlZFN0ciA9IHRoaXMuREVDSU1BTF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBzdHIubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tICwgaisrKSB7XHJcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09IDApXHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLlRIT1VTQU5EX1NFUEFSQVRPUiArIG1hc2tlZFN0cjtcclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkge1xyXG4gICAgICBpZiAoc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgPj0gMClcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUik7IGkgPCBzdHIubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICBtYXNrZWRTdHIgKz0gc3RyW2ldO1xyXG4gICAgICBmb3IgKGxldCBpID0gKHN0ci5pbmRleE9mKHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpID49IDAgPyBzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA6IHN0ci5sZW5ndGgpIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tICwgaisrKSB7XHJcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09IDApXHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLlRIT1VTQU5EX1NFUEFSQVRPUiArIG1hc2tlZFN0cjtcclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXNrZWRTdHI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlYWxWYWx1ZShzdHIpIHtcclxuICAgIGlmIChzdHIgPT0gbnVsbClcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgbGV0IHJlYWxTdHIgPSAnJztcclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpXHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5JREVOVElUWSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKylcclxuICAgICAgICBpZiAoc3RyW2ldLm1hdGNoKCdbYS16QS1aMC05XScpKVxyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJbaV07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGlmIChzdHJbaV0ubWF0Y2goJ1swLTldJykpXHJcbiAgICAgICAgICByZWFsU3RyICs9IHN0cltpXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkge1xyXG4gICAgICBsZXQgaGF2ZURvdCA9IGZhbHNlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdHJbaV0ubWF0Y2goJ1swLTldJykgfHwgKChzdHJbaV0gPT0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgJiYgIWhhdmVEb3QpKVxyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJbaV07XHJcbiAgICAgICAgaGF2ZURvdCA9IGhhdmVEb3QgfHwgKHN0cltpXSA9PSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlYWxTdHI7XHJcbiAgfVxyXG59XHJcbiJdfQ==