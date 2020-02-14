/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
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
                if (_this.getMaskedValue(data) !== _this.formControlMask.value) {
                    _this.change(data);
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
        if (data === 'INVALID') {
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
        if (event != null) {
            event = event + '';
        }
        /** @type {?} */
        var position = this.nameInput.nativeElement.selectionStart;
        /** @type {?} */
        var length = event ? event.length : 0;
        this.realValue = this.getRealValue(event);
        if (this.getMaskedValue(this.realValue) !== this.formControlMask.value) {
            this.formControlMask.setValue(this.getMaskedValue(this.realValue));
            position += this.nameInput.nativeElement.value.length - length;
            this.nameInput.nativeElement.selectionStart = position;
            this.nameInput.nativeElement.selectionEnd = position;
        }
        this.inputFormReal.setValue(this.realValue);
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
        if (str == null) {
            return str;
        }
        str = str + '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        /** @type {?} */
        var maskedStr = '';
        if (this.type === InputHelisaType.IDENTITY) {
            for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.DECIMAL_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type === InputHelisaType.NUMERIC) {
            for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type === InputHelisaType.DOUBLE) {
            if (str.indexOf(this.DECIMAL_SEPARATOR) >= 0) {
                for (var i = str.indexOf(this.DECIMAL_SEPARATOR); i < str.length; i++) {
                    maskedStr += str[i];
                }
            }
            for (var i = (str.indexOf(this.DECIMAL_SEPARATOR) >= 0 ? str.indexOf(this.DECIMAL_SEPARATOR) : str.length) - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                }
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
        var e_1, _a, e_2, _b, e_3, _c;
        if (str == null) {
            return str;
        }
        str = str + '';
        /** @type {?} */
        var realStr = '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        if (this.type === InputHelisaType.IDENTITY) {
            try {
                for (var str_1 = tslib_1.__values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
                    var strItem = str_1_1.value;
                    if (strItem.match('[a-zA-Z0-9]')) {
                        realStr += strItem;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (str_1_1 && !str_1_1.done && (_a = str_1.return)) _a.call(str_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (this.type === InputHelisaType.NUMERIC) {
            try {
                for (var str_2 = tslib_1.__values(str), str_2_1 = str_2.next(); !str_2_1.done; str_2_1 = str_2.next()) {
                    var strItem = str_2_1.value;
                    if (strItem.match('[0-9]')) {
                        realStr += strItem;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (str_2_1 && !str_2_1.done && (_b = str_2.return)) _b.call(str_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (this.type === InputHelisaType.DOUBLE) {
            /** @type {?} */
            var haveDot = false;
            try {
                for (var str_3 = tslib_1.__values(str), str_3_1 = str_3.next(); !str_3_1.done; str_3_1 = str_3.next()) {
                    var strItem = str_3_1.value;
                    if (strItem.match('[0-9]') || ((strItem === this.DECIMAL_SEPARATOR) && !haveDot)) {
                        realStr += strItem;
                    }
                    haveDot = haveDot || (strItem === this.DECIMAL_SEPARATOR);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (str_3_1 && !str_3_1.done && (_c = str_3.return)) _c.call(str_3);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return realStr;
    };
    InputHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-input',
                    template: "<mat-form-field>\n  <input #inputText matInput placeholder=\"{{placeholder}}\" \n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\n  >\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\n</mat-form-field>\n",
                    styles: ["/deep/ hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
                }] }
    ];
    /** @nocollapse */
    InputHelisaComponent.ctorParameters = function () { return []; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1oZWxpc2EvaW5wdXQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQUczQyxVQUFPLEVBQUUsV0FBUSxFQUFFLFVBQU8sRUFBRSxTQUFNOzs7Ozs7O0FBR3BDO0lBbUNFO1FBNUJpQixzQkFBaUIsR0FBVyxHQUFHLENBQUM7UUFDaEMsdUJBQWtCLEdBQVcsR0FBRyxDQUFDO1FBRXpDLGdCQUFXLEdBQVcsRUFBRSxDQUFDOztRQUd6QixhQUFRLEdBQVksS0FBSyxDQUFDOztRQUUxQixjQUFTLEdBQVksS0FBSyxDQUFDOzs7O1FBSzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFvQixlQUFlLENBQUMsT0FBTyxDQUFDOzs7O1FBSy9DLGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUd0RSxvQkFBZSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBS3pELENBQUM7SUFFRCxzQkFDSSxrREFBZ0I7Ozs7O1FBRHBCLFVBQ3FCLFdBQXdCO1lBRDdDLGlCQXVCQztZQXJCQyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxJQUFZO2dCQUNy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Q1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDhWQUE0Qzs7aUJBRTdDOzs7Ozs4QkFNRSxLQUFLOzJCQUdMLEtBQUs7NEJBRUwsS0FBSzsyQkFLTCxLQUFLO3VCQUNMLEtBQUs7MkJBS0wsTUFBTTs0QkFPTixTQUFTLFNBQUMsV0FBVzttQ0FLckIsS0FBSzs7SUFxSVIsMkJBQUM7Q0FBQSxBQTNLRCxJQTJLQztTQXRLWSxvQkFBb0I7Ozs7OztJQUUvQixpREFBaUQ7Ozs7O0lBQ2pELGtEQUFrRDs7SUFFbEQsMkNBQWtDOztJQUdsQyx3Q0FBbUM7O0lBRW5DLHlDQUFvQzs7Ozs7SUFLcEMsd0NBQW1DOztJQUNuQyxvQ0FBeUQ7Ozs7O0lBS3pELHdDQUFzRTs7SUFHdEUsK0NBQW1EOzs7OztJQUNuRCx5Q0FBK0I7Ozs7O0lBQy9CLDZDQUF5RDs7SUFFekQseUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGVudW0gSW5wdXRIZWxpc2FUeXBlIHtcbiAgREVGQVVMVCwgSURFTlRJVFksIE5VTUVSSUMsIERPVUJMRVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgREVDSU1BTF9TRVBBUkFUT1I6IHN0cmluZyA9ICcuJztcbiAgcHJpdmF0ZSByZWFkb25seSBUSE9VU0FORF9TRVBBUkFUT1I6IHN0cmluZyA9ICcsJztcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG5cbiAgLy8gTW9zdHJhciBvIG5vIGVsIGljb25vIGRlIGJ1c2NhclxuICBASW5wdXQoKSBpc1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBASW5wdXQoKSBpbnB1dEZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgpIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXByZWNhdGVkXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0eXBlOiBJbnB1dEhlbGlzYVR5cGUgPSBJbnB1dEhlbGlzYVR5cGUuREVGQVVMVDtcblxuICAvKipcbiAgICogRGVwcmVjYXRlZFxuICAgKi9cbiAgQE91dHB1dCgpIHNldFZhbHVlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cbiAgZm9ybUNvbnRyb2xNYXNrOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIHByaXZhdGUgcmVhbFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBpbnB1dEZvcm1SZWFsOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRUZXh0JykgbmFtZUlucHV0OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGlucHV0Rm9ybUNvbnRyb2woZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sKSB7XG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsID0gZm9ybUNvbnRyb2w7XG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGRhdGE6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zdGF0dXNDaGFuZ2UodGhpcy5pbnB1dEZvcm1SZWFsLnN0YXR1cyk7XG4gICAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZShkYXRhKSAhPT0gdGhpcy5mb3JtQ29udHJvbE1hc2sudmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2UoZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0VmFsaWRhdG9ycyh0aGlzLmlucHV0Rm9ybVJlYWwudmFsaWRhdG9yKTtcbiAgICB0aGlzLmNoYW5nZSh0aGlzLmlucHV0Rm9ybVJlYWwudmFsdWUpO1xuXG4gICAgLy8gZGlzYWJsZSBjb250cm9sXG4gICAgaWYgKGZvcm1Db250cm9sLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUgfSk7XG4gICAgfVxuXG5cbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICAoZGF0YTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlKGRhdGEpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN0YXR1c0NoYW5nZShkYXRhOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoZGF0YSA9PT0gJ0lOVkFMSUQnKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRFcnJvcnMoeyBrZXk6ICdFcnJvciBkZSB2YWxpZGFjacOzbi4nIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlLmVtaXQodGhpcy5yZWFsVmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlKGV2ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQgIT0gbnVsbCkgeyBldmVudCA9IGV2ZW50ICsgJyc7IH1cbiAgICBsZXQgcG9zaXRpb246IG51bWJlciA9IHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSBldmVudCA/IGV2ZW50Lmxlbmd0aCA6IDA7XG4gICAgdGhpcy5yZWFsVmFsdWUgPSB0aGlzLmdldFJlYWxWYWx1ZShldmVudCk7XG4gICAgaWYgKHRoaXMuZ2V0TWFza2VkVmFsdWUodGhpcy5yZWFsVmFsdWUpICE9PSB0aGlzLmZvcm1Db250cm9sTWFzay52YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0VmFsdWUodGhpcy5nZXRNYXNrZWRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSkpO1xuICAgICAgcG9zaXRpb24gKz0gdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggLSBsZW5ndGg7XG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHBvc2l0aW9uO1xuICAgIH1cbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwuc2V0VmFsdWUodGhpcy5yZWFsVmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXNrZWRWYWx1ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHN0ciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyAnJztcbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuREVGQVVMVCkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbGV0IG1hc2tlZFN0cjogc3RyaW5nID0gJyc7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLklERU5USVRZKSB7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBzdHIubGVuZ3RoIC0gMSwgajogbnVtYmVyID0gMDsgaSA+PSAwOyBpLS0gLCBqKyspIHtcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XG4gICAgICAgICAgbWFza2VkU3RyID0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUiArIG1hc2tlZFN0cjtcbiAgICAgICAgfVxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBzdHIubGVuZ3RoIC0gMSwgajogbnVtYmVyID0gMDsgaSA+PSAwOyBpLS0gLCBqKyspIHtcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XG4gICAgICAgICAgbWFza2VkU3RyID0gdGhpcy5USE9VU0FORF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XG4gICAgICAgIH1cbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuRE9VQkxFKSB7XG4gICAgICBpZiAoc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgPj0gMCkge1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG1hc2tlZFN0ciArPSBzdHJbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IChzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA+PSAwID8gc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgOiBzdHIubGVuZ3RoKSAtIDEsXG4gICAgICAgICAgIGo6IG51bWJlciA9IDA7IGkgPj0gMDsgaS0tICwgaisrKSB7XG5cbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XG4gICAgICAgICAgbWFza2VkU3RyID0gdGhpcy5USE9VU0FORF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XG4gICAgICAgIH1cbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFza2VkU3RyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZWFsVmFsdWUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChzdHIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgJyc7XG4gICAgbGV0IHJlYWxTdHI6IHN0cmluZyA9ICcnO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5ERUZBVUxUKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSAgSW5wdXRIZWxpc2FUeXBlLklERU5USVRZKSB7XG4gICAgICBmb3IgKGNvbnN0IHN0ckl0ZW0gb2Ygc3RyKSB7XG4gICAgICAgIGlmIChzdHJJdGVtLm1hdGNoKCdbYS16QS1aMC05XScpKSB7XG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJJdGVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XG4gICAgICBmb3IgKGNvbnN0IHN0ckl0ZW0gb2Ygc3RyKSB7XG4gICAgICAgIGlmIChzdHJJdGVtLm1hdGNoKCdbMC05XScpKSB7XG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJJdGVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5ET1VCTEUpIHtcbiAgICAgIGxldCBoYXZlRG90OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgIGZvciAoY29uc3Qgc3RySXRlbSBvZiBzdHIpIHtcbiAgICAgICAgaWYgKHN0ckl0ZW0ubWF0Y2goJ1swLTldJykgfHwgKChzdHJJdGVtID09PSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSAmJiAhaGF2ZURvdCkpIHtcbiAgICAgICAgICByZWFsU3RyICs9IHN0ckl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaGF2ZURvdCA9IGhhdmVEb3QgfHwgKHN0ckl0ZW0gPT09IHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVhbFN0cjtcbiAgfVxufVxuIl19