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
        // tslint:disable-next-line:no-any
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
            this.inputFormReal.registerOnDisabledChange(((/**
             * @param {?} isDisabled
             * @return {?}
             */
            function (isDisabled) {
                if (isDisabled) {
                    _this.formControlMask.disable();
                }
                else {
                    _this.formControlMask.enable();
                }
            })));
            this.inputFormReal.valueChanges.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.statusChange(_this.inputFormReal.status);
                if (_this.getMaskedValue(data) !== _this.formControlMask.value) {
                    _this.change(data);
                    if (_this.isFocused) {
                        _this.onFocus(null);
                    }
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
                if (_this.isFocused) {
                    _this.onFocus(null);
                }
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
    InputHelisaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // this.isParentDisabled();
    };
    /*isParentDisabled(): void {
      setTimeout(() => {
        if (this.nameInput.nativeElement.closest('.hw-disabled-mode')) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      });
    }*/
    /*isParentDisabled(): void {
        setTimeout(() => {
          if (this.nameInput.nativeElement.closest('.hw-disabled-mode')) {
            this.disabled = true;
          } else {
            this.disabled = false;
          }
        });
      }*/
    /**
     * @return {?}
     */
    InputHelisaComponent.prototype.search = /*isParentDisabled(): void {
        setTimeout(() => {
          if (this.nameInput.nativeElement.closest('.hw-disabled-mode')) {
            this.disabled = true;
          } else {
            this.disabled = false;
          }
        });
      }*/
    /**
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
                    if (strItem.match('[0-9]')) {
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
    /**
     * @param {?} $event
     * @return {?}
     */
    InputHelisaComponent.prototype.onFocus = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ((this.type === InputHelisaType.NUMERIC || this.type === InputHelisaType.DOUBLE) &&
            Number(this.getRealValue(this.nameInput.nativeElement.value)) === 0) {
            this.nameInput.nativeElement.select();
        }
    };
    InputHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-input',
                    template: "<mat-form-field [floatLabel]=\"floatLabel\">\r\n  <input #inputText matInput placeholder=\"{{placeholder}}\"\r\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\r\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\r\n  [autocomplete]=\"(autocompleteMode) ? 'on' : 'off'\" (blur)=\"blur.emit($event)\" (focus)=\"onFocus($event)\">\r\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\r\n</mat-form-field>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1oZWxpc2EvaW5wdXQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFHM0MsVUFBTyxFQUFFLFdBQVEsRUFBRSxVQUFPLEVBQUUsU0FBTTs7Ozs7OztBQUdwQztJQTRDRTtRQXJDaUIsc0JBQWlCLEdBQVcsR0FBRyxDQUFDO1FBQ2hDLHVCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUV6QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQWdDLE9BQU8sQ0FBQzs7Ozs7O1FBTWxELHFCQUFnQixHQUFZLEtBQUssQ0FBQzs7UUFHbEMsYUFBUSxHQUFZLEtBQUssQ0FBQzs7UUFFMUIsY0FBUyxHQUFZLEtBQUssQ0FBQzs7OztRQUszQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFNBQUksR0FBb0IsZUFBZSxDQUFDLE9BQU8sQ0FBQzs7OztRQUsvQyxhQUFRLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7O1FBRzVELFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RCxvQkFBZSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBS3pELENBQUM7SUFFRCxzQkFDSSxrREFBZ0I7Ozs7O1FBRHBCLFVBQ3FCLFdBQXdCO1lBRDdDLGlCQWlDQztZ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LFFBQVEsRUFBRSxXQUFXO29CQUNyQixvZkFBNEM7O2lCQUU3Qzs7Ozs7OEJBTUUsS0FBSzs2QkFDTCxLQUFLO21DQU1MLEtBQUs7MkJBR0wsS0FBSzs0QkFFTCxLQUFLOzJCQUtMLEtBQUs7dUJBQ0wsS0FBSzsyQkFLTCxNQUFNO3VCQUdOLE1BQU07NEJBTU4sU0FBUyxTQUFDLFdBQVc7bUNBS3JCLEtBQUs7O0lBeUtSLDJCQUFDO0NBQUEsQUF4TkQsSUF3TkM7U0FuTlksb0JBQW9COzs7Ozs7SUFFL0IsaURBQWlEOzs7OztJQUNqRCxrREFBa0Q7O0lBRWxELDJDQUFrQzs7SUFDbEMsMENBQTJEOzs7Ozs7O0lBTTNELGdEQUEyQzs7SUFHM0Msd0NBQW1DOztJQUVuQyx5Q0FBb0M7Ozs7O0lBS3BDLHdDQUFtQzs7SUFDbkMsb0NBQXlEOzs7OztJQUt6RCx3Q0FBc0U7O0lBR3RFLG9DQUF1RDs7SUFFdkQsK0NBQW1EOzs7OztJQUNuRCx5Q0FBK0I7Ozs7O0lBQy9CLDZDQUF5RDs7SUFFekQseUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGVudW0gSW5wdXRIZWxpc2FUeXBlIHtcclxuICBERUZBVUxULCBJREVOVElUWSwgTlVNRVJJQywgRE9VQkxFXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IERFQ0lNQUxfU0VQQVJBVE9SOiBzdHJpbmcgPSAnLic7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBUSE9VU0FORF9TRVBBUkFUT1I6IHN0cmluZyA9ICcsJztcclxuXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGZsb2F0TGFiZWw6ICduZXZlcicgfCAnYWx3YXlzJyB8ICdhdXRvJyA9ICduZXZlcic7XHJcblxyXG4gIC8qKiBBY3RpdmFyIG8gZGVzYWN0aXZhciBlbCBhdXRvY29tcGxldGFkb1xyXG4gICAqIChDYXJhY3RlcmlzdGljYSBkZSBsb3MgbmF2ZWdhZG9yZXMgcGFyYSBjYW1wb3MgY29tdW5lcyBjb21vXHJcbiAgICogRGlyZWNjaW9uICwgVXN1YXJpbywgUGFzc3dvcmQgLi4uIGV0YylcclxuICAgKi9cclxuICBASW5wdXQoKSBhdXRvY29tcGxldGVNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIE1vc3RyYXIgbyBubyBlbCBpY29ubyBkZSBidXNjYXJcclxuICBASW5wdXQoKSBpc1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBJbnB1dCgpIGlucHV0Rm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBASW5wdXQoKSBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVwcmVjYXRlZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogSW5wdXRIZWxpc2FUeXBlID0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2F0ZWRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgc2V0VmFsdWU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGZvcm1Db250cm9sTWFzazogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIHByaXZhdGUgcmVhbFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIGlucHV0Rm9ybVJlYWw6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRUZXh0JykgbmFtZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlucHV0Rm9ybUNvbnRyb2woZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sKSB7XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwgPSBmb3JtQ29udHJvbDtcclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC5yZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UoKChpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCA9PiB7XHJcbiAgICAgIGlmIChpc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbE1hc2suZGlzYWJsZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLmVuYWJsZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlKHRoaXMuaW5wdXRGb3JtUmVhbC5zdGF0dXMpO1xyXG4gICAgICBpZiAodGhpcy5nZXRNYXNrZWRWYWx1ZShkYXRhKSAhPT0gdGhpcy5mb3JtQ29udHJvbE1hc2sudmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZShkYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgICAgIHRoaXMub25Gb2N1cyhudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbE1hc2suc2V0VmFsaWRhdG9ycyh0aGlzLmlucHV0Rm9ybVJlYWwudmFsaWRhdG9yKTtcclxuICAgIHRoaXMuY2hhbmdlKHRoaXMuaW5wdXRGb3JtUmVhbC52YWx1ZSk7XHJcbiAgICAvLyBkaXNhYmxlIGNvbnRyb2xcclxuICAgIGlmIChmb3JtQ29udHJvbC5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXR1c0NoYW5nZShkYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgICAgIHRoaXMub25Gb2N1cyhudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzdGF0dXNDaGFuZ2UoZGF0YTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoZGF0YSA9PT0gJ0lOVkFMSUQnKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xNYXNrLnNldEVycm9ycyh7IGtleTogJ0Vycm9yIGRlIHZhbGlkYWNpw7NuLicgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRFcnJvcnMobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLmlzUGFyZW50RGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gIC8qaXNQYXJlbnREaXNhYmxlZCgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5uYW1lSW5wdXQubmF0aXZlRWxlbWVudC5jbG9zZXN0KCcuaHctZGlzYWJsZWQtbW9kZScpKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9Ki9cclxuXHJcbiAgc2VhcmNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZS5lbWl0KHRoaXMucmVhbFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZShldmVudDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQgIT0gbnVsbCkge1xyXG4gICAgICBldmVudCA9IGV2ZW50ICsgJyc7XHJcbiAgICB9XHJcbiAgICBsZXQgcG9zaXRpb246IG51bWJlciA9IHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IGV2ZW50ID8gZXZlbnQubGVuZ3RoIDogMDtcclxuICAgIHRoaXMucmVhbFZhbHVlID0gdGhpcy5nZXRSZWFsVmFsdWUoZXZlbnQpO1xyXG4gICAgaWYgKHRoaXMuZ2V0TWFza2VkVmFsdWUodGhpcy5yZWFsVmFsdWUpICE9PSB0aGlzLmZvcm1Db250cm9sTWFzay52YWx1ZSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sTWFzay5zZXRWYWx1ZSh0aGlzLmdldE1hc2tlZFZhbHVlKHRoaXMucmVhbFZhbHVlKSk7XHJcbiAgICAgIHBvc2l0aW9uICs9IHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoIC0gbGVuZ3RoO1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XHJcbiAgICAgIHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XHJcbiAgICB9XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwuc2V0VmFsdWUodGhpcy5yZWFsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRNYXNrZWRWYWx1ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RyID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIGxldCBtYXNrZWRTdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLklERU5USVRZKSB7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0ci5sZW5ndGggLSAxLCBqOiBudW1iZXIgPSAwOyBpID49IDA7IGktLSwgaisrKSB7XHJcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SICsgbWFza2VkU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0ci5sZW5ndGggLSAxLCBqOiBudW1iZXIgPSAwOyBpID49IDA7IGktLSwgaisrKSB7XHJcbiAgICAgICAgaWYgKGogPiAwICYmIGogJSAzID09PSAwKSB7XHJcbiAgICAgICAgICBtYXNrZWRTdHIgPSB0aGlzLlRIT1VTQU5EX1NFUEFSQVRPUiArIG1hc2tlZFN0cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFza2VkU3RyID0gc3RyW2ldICsgbWFza2VkU3RyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBJbnB1dEhlbGlzYVR5cGUuRE9VQkxFKSB7XHJcbiAgICAgIGlmIChzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA+PSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUik7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIG1hc2tlZFN0ciArPSBzdHJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IChzdHIuaW5kZXhPZih0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKSA+PSAwID8gc3RyLmluZGV4T2YodGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgOiBzdHIubGVuZ3RoKSAtIDEsXHJcbiAgICAgICAgajogbnVtYmVyID0gMDsgaSA+PSAwOyBpLS0sIGorKykge1xyXG5cclxuICAgICAgICBpZiAoaiA+IDAgJiYgaiAlIDMgPT09IDApIHtcclxuICAgICAgICAgIG1hc2tlZFN0ciA9IHRoaXMuVEhPVVNBTkRfU0VQQVJBVE9SICsgbWFza2VkU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXNrZWRTdHIgPSBzdHJbaV0gKyBtYXNrZWRTdHI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXNrZWRTdHI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlYWxWYWx1ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RyID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHN0ciA9IHN0ciArICcnO1xyXG4gICAgbGV0IHJlYWxTdHI6IHN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRFRkFVTFQpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5JREVOVElUWSkge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0ckl0ZW0gb2Ygc3RyKSB7XHJcbiAgICAgICAgaWYgKHN0ckl0ZW0ubWF0Y2goJ1swLTldJykpIHtcclxuICAgICAgICAgIHJlYWxTdHIgKz0gc3RySXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RySXRlbSBvZiBzdHIpIHtcclxuICAgICAgICBpZiAoc3RySXRlbS5tYXRjaCgnWzAtOV0nKSkge1xyXG4gICAgICAgICAgcmVhbFN0ciArPSBzdHJJdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkge1xyXG4gICAgICBsZXQgaGF2ZURvdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBzdHJJdGVtIG9mIHN0cikge1xyXG4gICAgICAgIGlmIChzdHJJdGVtLm1hdGNoKCdbMC05XScpIHx8ICgoc3RySXRlbSA9PT0gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUikgJiYgIWhhdmVEb3QpKSB7XHJcbiAgICAgICAgICByZWFsU3RyICs9IHN0ckl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhdmVEb3QgPSBoYXZlRG90IHx8IChzdHJJdGVtID09PSB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlYWxTdHI7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKCRldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCh0aGlzLnR5cGUgPT09IElucHV0SGVsaXNhVHlwZS5OVU1FUklDIHx8IHRoaXMudHlwZSA9PT0gSW5wdXRIZWxpc2FUeXBlLkRPVUJMRSkgJiZcclxuICAgICAgTnVtYmVyKHRoaXMuZ2V0UmVhbFZhbHVlKHRoaXMubmFtZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpKSA9PT0gMCkge1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=