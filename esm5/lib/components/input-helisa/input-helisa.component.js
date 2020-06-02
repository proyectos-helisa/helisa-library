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
        else {
            this.formControlMask.setErrors(null);
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
                    template: "<mat-form-field [floatLabel]=\"floatLabel\">\r\n  <input #inputText matInput placeholder=\"{{placeholder}}\" \r\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\r\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\r\n  [autocomplete]=\"(autocompleteMode) ? 'on' : 'off'\" (blur)=\"blur.emit($event)\">\r\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\r\n</mat-form-field>\r\n",
                    styles: ["/deep/ hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
                }] }
    ];
    /** @nocollapse */
    InputHelisaComponent.ctorParameters = function () { return []; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1oZWxpc2EvaW5wdXQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQUczQyxVQUFPLEVBQUUsV0FBUSxFQUFFLFVBQU8sRUFBRSxTQUFNOzs7Ozs7O0FBR3BDO0lBMkNFO1FBcENpQixzQkFBaUIsR0FBVyxHQUFHLENBQUM7UUFDaEMsdUJBQWtCLEdBQVcsR0FBRyxDQUFDO1FBRXpDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBZ0MsT0FBTyxDQUFDOzs7Ozs7UUFNbEQscUJBQWdCLEdBQVksS0FBSyxDQUFDOztRQUdsQyxhQUFRLEdBQVksS0FBSyxDQUFDOztRQUUxQixjQUFTLEdBQVksS0FBSyxDQUFDOzs7O1FBSzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFvQixlQUFlLENBQUMsT0FBTyxDQUFDOzs7O1FBSy9DLGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU1RCxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkQsb0JBQWUsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUt6RCxDQUFDO0lBRUQsc0JBQ0ksa0RBQWdCOzs7OztRQURwQixVQUNxQixXQUF3QjtZQUQ3QyxpQkF3QkM7WUF0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LE9BQU8sQ0FBQztxQkFDcEI7b0JBQ0QsT0FBTyxHQUFHLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztpQkFDM0Q7Ozs7Ozs7OztTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Z0JBdExGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIseWRBQTRDOztpQkFFN0M7Ozs7OzhCQU1FLEtBQUs7NkJBQ0wsS0FBSzttQ0FNTCxLQUFLOzJCQUdMLEtBQUs7NEJBRUwsS0FBSzsyQkFLTCxLQUFLO3VCQUNMLEtBQUs7MkJBS0wsTUFBTTt1QkFFTixNQUFNOzRCQU1OLFNBQVMsU0FBQyxXQUFXO21DQUtyQixLQUFLOztJQXlJUiwyQkFBQztDQUFBLEFBdkxELElBdUxDO1NBbExZLG9CQUFvQjs7Ozs7O0lBRS9CLGlEQUFpRDs7Ozs7SUFDakQsa0RBQWtEOztJQUVsRCwyQ0FBa0M7O0lBQ2xDLDBDQUEyRDs7Ozs7OztJQU0zRCxnREFBMkM7O0lBRzNDLHdDQUFtQzs7SUFFbkMseUNBQW9DOzs7OztJQUtwQyx3Q0FBbUM7O0lBQ25DLG9DQUF5RDs7Ozs7SUFLekQsd0NBQXNFOztJQUV0RSxvQ0FBdUQ7O0lBRXZELCtDQUFtRDs7Ozs7SUFDbkQseUNBQStCOzs7OztJQUMvQiw2Q0FBeUQ7O0lBRXpELHlDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBlbnVtIElucHV0SGVsaXNhVHlwZSB7XHJcbiAgREVGQVVMVCwgSURFTlRJVFksIE5VTUVSSUMsIERPVUJMRVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0SGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBERUNJTUFMX1NFUEFSQVRPUjogc3RyaW5nID0gJy4nO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgVEhPVVNBTkRfU0VQQVJBVE9SOiBzdHJpbmcgPSAnLCc7XHJcblxyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmbG9hdExhYmVsOiAnbmV2ZXInIHwgJ2Fsd2F5cycgfCAnYXV0bycgPSAnbmV2ZXInO1xyXG5cclxuICAvKiogQWN0aXZhciBvIGRlc2FjdGl2YXIgZWwgYXV0b2NvbXBsZXRhZG9cclxuICAgKiAoQ2FyYWN0ZXJpc3RpY2EgZGUgbG9zIG5hdmVnYWRvcmVzIHBhcmEgY2FtcG9zIGNvbXVuZXMgY29tb1xyXG4gICAqIERpcmVjY2lvbiAsIFVzdWFyaW8sIFBhc3N3b3JkIC4uLiBldGMpXHJcbiAgICovXHJcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvLyBNb3N0cmFyIG8gbm8gZWwgaWNvbm8gZGUgYnVzY2FyXHJcbiAgQElucHV0KCkgaXNTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBASW5wdXQoKSBpbnB1dEZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgQElucHV0KCkgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2F0ZWRcclxuICAgKi9cclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHR5cGU6IElucHV0SGVsaXNhVHlwZSA9IElucHV0SGVsaXNhVHlwZS5ERUZBVUxUO1xyXG5cclxuICAvKipcclxuICAgKiBEZXByZWNhdGVkXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHNldFZhbHVlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGZvcm1Db250cm9sTWFzazogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIHByaXZhdGUgcmVhbFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIGlucHV0Rm9ybVJlYWw6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRUZXh0JykgbmFtZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlucHV0Rm9ybUNvbnRyb2woZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sKSB7XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwgPSBmb3JtQ29udHJvbDtcclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRhOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5zdGF0dXNDaGFuZ2UodGhpcy5pbnB1dEZvcm1SZWFsLnN0YXR1cyk7XHJcbiAgICAgIGlmICh0aGlzLmdldE1hc2tlZFZhbHVlKGRhdGEpICE9PSB0aGlzLmZvcm1Db250cm9sTWFzay52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLnNldFZhbGlkYXRvcnModGhpcy5pbnB1dEZvcm1SZWFsLnZhbGlkYXRvcik7XHJcbiAgICB0aGlzLmNoYW5nZSh0aGlzLmlucHV0Rm9ybVJlYWwudmFsdWUpO1xyXG5cclxuICAgIC8vIGRpc2FibGUgY29udHJvbFxyXG4gICAgaWYgKGZvcm1Db250cm9sLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLmRpc2FibGUoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5pbnB1dEZvcm1SZWFsLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDaGFuZ2UoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc3RhdHVzQ2hhbmdlKGRhdGE6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKGRhdGEgPT09ICdJTlZBTElEJykge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRFcnJvcnMoeyBrZXk6ICdFcnJvciBkZSB2YWxpZGFjacOzbi4nIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZS5lbWl0KHRoaXMucmVhbFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZShldmVudDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQgIT0gbnVsbCkgeyBldmVudCA9IGV2ZW50ICsgJyc7IH1cclxuICAgIGxldCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgIGNvbnN0IGxlbmd0aDogbnVtYmVyID0gZXZlbnQgPyBldmVudC5sZW5ndGggOiAwO1xyXG4gICAgdGhpcy5yZWFsVmFsdWUgPSB0aGlzLmdldFJlYWxWYWx1ZShldmVudCk7XHJcbiAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSkgIT09IHRoaXMuZm9ybUNvbnRyb2xNYXNrLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLnNldFZhbHVlKHRoaXMuZ2V0TWFza2VkVmFsdWUodGhpcy5yZWFsVmFsdWUpKTtcclxuICAgICAgcG9zaXRpb24gKz0gdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggLSBsZW5ndGg7XHJcbiAgICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcclxuICAgICAgdGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBwb3NpdGlvbjtcclxuICAgIH1cclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC5zZXRWYWx1ZSh0aGlzLnJlYWxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1hc2tlZFZhbHVlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChzdHIgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgc3RyID0gc3RyICsgJyc7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuREVGQVVMVCkge1xyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgbGV0IG1hc2tlZFN0cjogc3RyaW5nID0gJyc7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuSURFTlRJVFkpIHtcclxuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gc3RyLmxlbmd0aCAtIDEsIGo6IG51bWJlciA9IDA7IGkgPj0gMDsgaS0tICwgaisrKSB7XHJcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SICsgbWFza2VkU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0ci5sZW5ndGggLSAxLCBqOiBudW1iZXIgPSAwOyBpID49IDA7IGktLSAsIGorKykge1xyXG4gICAgICAgIGlmIChqID4gMCAmJiBqICUgMyA9PT0gMCkge1xyXG4gICAgICAgICAgbWFza2VkU3RyID0gdGhpcy5USE9VU0FORF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hc2tlZFN0ciA9IHN0cltpXSArIG1hc2tlZFN0cjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkge1xyXG4gICAgICBpZiAoc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgPj0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0ci5pbmRleE9mKHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBtYXNrZWRTdHIgKz0gc3RyW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAoc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgPj0gMCA/IHN0ci5pbmRleE9mKHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpIDogc3RyLmxlbmd0aCkgLSAxLFxyXG4gICAgICAgICAgIGo6IG51bWJlciA9IDA7IGkgPj0gMDsgaS0tICwgaisrKSB7XHJcblxyXG4gICAgICAgIGlmIChqID4gMCAmJiBqICUgMyA9PT0gMCkge1xyXG4gICAgICAgICAgbWFza2VkU3RyID0gdGhpcy5USE9VU0FORF9TRVBBUkFUT1IgKyBtYXNrZWRTdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hc2tlZFN0ciA9IHN0cltpXSArIG1hc2tlZFN0cjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hc2tlZFN0cjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmVhbFZhbHVlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChzdHIgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgc3RyID0gc3RyICsgJyc7XHJcbiAgICBsZXQgcmVhbFN0cjogc3RyaW5nID0gJyc7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuREVGQVVMVCkge1xyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gIElucHV0SGVsaXNhVHlwZS5JREVOVElUWSkge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0ckl0ZW0gb2Ygc3RyKSB7XHJcbiAgICAgICAgaWYgKHN0ckl0ZW0ubWF0Y2goJ1thLXpBLVowLTldJykpIHtcclxuICAgICAgICAgIHJlYWxTdHIgKz0gc3RySXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RySXRlbSBvZiBzdHIpIHtcclxuICAgICAgICBpZiAoc3RySXRlbS5tYXRjaCgnWzAtOV0nKSkge1xyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJJdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkge1xyXG4gICAgICBsZXQgaGF2ZURvdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBzdHJJdGVtIG9mIHN0cikge1xyXG4gICAgICAgIGlmIChzdHJJdGVtLm1hdGNoKCdbMC05XScpIHx8ICgoc3RySXRlbSA9PT0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgJiYgIWhhdmVEb3QpKSB7XHJcbiAgICAgICAgICByZWFsU3RyICs9IHN0ckl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhdmVEb3QgPSBoYXZlRG90IHx8IChzdHJJdGVtID09PSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlYWxTdHI7XHJcbiAgfVxyXG59XHJcbiJdfQ==