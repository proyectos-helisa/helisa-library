/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
import { filter, tap } from 'rxjs/operators';
/** @enum {string} */
var TypeCalendarEnum = {
    NORMAL: 'norma',
    MONTH_YEAR: 'mounth-year',
    STRICT: 'strict',
};
export { TypeCalendarEnum };
var DateHelisaComponent = /** @class */ (function () {
    function DateHelisaComponent() {
        this.floatLabel = 'never';
        this.dateFormControl = new FormControl('');
        this.date = new Date();
        /**
         * Formato de fecha.
         * Los formatos validos son aquellos que maneja la libreria momentjs y este: 'DD [de] MMMM [de] YYYY'
         * https://momentjs.com/docs/#/parsing/string-format/
         */
        this.dateFormat = 'DD/MM/YYYY';
        this.locale = 'es';
        this.errorMessage = 'La fecha no concuerda con el formato ';
        this.placeholder = this.dateFormat;
        /**
         * Si este valor es diferente a TypeCalendarEnum.NORMAL no
         * será tomado en cuenta
         */
        this.typeCalendar = TypeCalendarEnum.NORMAL;
        /**
         * Para evitar nuevos eventos miestras se realiza el parseo
         */
        this.isFromInputEvent = false;
        /**
         * Verificar si el formato es valido
         */
        this.invalidFormat = false;
    }
    /*
    * TypeCalendarEnum.MONTH_YEAR = 'MM/YYYY'
    * TypeCalendarEnum.STRICT = 'DD [de] MMMM [de] YYYY'
    * */
    /*
      * TypeCalendarEnum.MONTH_YEAR = 'MM/YYYY'
      * TypeCalendarEnum.STRICT = 'DD [de] MMMM [de] YYYY'
      * */
    /**
     * @return {?}
     */
    DateHelisaComponent.prototype.ngOnInit = /*
      * TypeCalendarEnum.MONTH_YEAR = 'MM/YYYY'
      * TypeCalendarEnum.STRICT = 'DD [de] MMMM [de] YYYY'
      * */
    /**
     * @return {?}
     */
    function () {
        moment.locale(this.locale);
        this.dateToVisualize = new FormControl('', this.dateFormControl.validator);
        this.formHandler();
        /**
         * establecer valor por defecto de la fecha
         * @type {?}
         */
        var incommingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
        if (this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
            this.dateToVisualize.setValue(incommingDate);
        }
    };
    Object.defineProperty(DateHelisaComponent.prototype, "typeCalendarEnum", {
        get: /**
         * @return {?}
         */
        function () {
            return TypeCalendarEnum;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determina como se debe inicializar la visualizacion del calendar
     */
    /**
     * Determina como se debe inicializar la visualizacion del calendar
     * @return {?}
     */
    DateHelisaComponent.prototype.getStartView = /**
     * Determina como se debe inicializar la visualizacion del calendar
     * @return {?}
     */
    function () {
        // multi-year
        if (this.typeCalendar === this.typeCalendarEnum.MONTH_YEAR) {
            return 'multi-year';
        }
        else if (this.typeCalendar === this.typeCalendarEnum.STRICT) {
            return 'month';
        }
        else {
            return 'month';
        }
    };
    /**
     * @private
     * @return {?}
     */
    DateHelisaComponent.prototype.formHandler = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.typeCalendar === this.typeCalendarEnum.STRICT) {
            this.dateToVisualize.setValue(moment(this.date, this.dateFormat).format(this.dateFormat));
            this.dateFormControl.setValue(this.date);
            this.dateToVisualize.valueChanges.subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.invalidFormat = false;
                /** @type {?} */
                var isValid = moment(date, _this.dateFormat, true).isValid();
                /** @type {?} */
                var result = moment(date, _this.dateFormat).format(_this.dateFormat);
                if (!!result && (result === 'Invalid date' || !isValid)) {
                    _this.invalidFormat = true;
                    return;
                }
                if (!!result) {
                    if (!_this.isFromInputEvent) {
                        _this.isFromInputEvent = true;
                        _this.dateToVisualize.setValue(moment(_this.date, _this.dateFormat).format(_this.dateFormat));
                        _this.dateFormControl.setValue(moment(result, _this.dateFormat).toDate());
                        _this.isFromInputEvent = false;
                    }
                    else {
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.isFromInputEvent = false;
                        }), 1500);
                    }
                }
            }));
        }
        else {
            this.dateToVisualize.valueChanges
                .pipe(tap((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                if (date.length > _this.dateFormat.length) {
                    _this.invalidFormat = true;
                }
                else {
                    _this.invalidFormat = false;
                }
            })), filter((/**
             * @param {?} date
             * @return {?}
             */
            function (date) { return date.length === _this.dateFormat.length; })))
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.invalidFormat = false;
                /** @type {?} */
                var isValid = moment(date, _this.dateFormat, true).isValid();
                /** @type {?} */
                var result = moment(date, _this.dateFormat).format('YYYY-MM-DD');
                if (!!result && (result === 'Invalid date' || !isValid)) {
                    _this.invalidFormat = true;
                    return;
                }
                if (!!result) {
                    if (!_this.isFromInputEvent) {
                        _this.isFromInputEvent = true;
                        /** @type {?} */
                        var subString = result.split('-');
                        /** @type {?} */
                        var year = parseFloat(subString[0]);
                        /** @type {?} */
                        var month = parseFloat(subString[1]);
                        /** @type {?} */
                        var day = parseFloat(subString[2]);
                        _this.date.setFullYear(year);
                        _this.date.setDate(day);
                        _this.date.setMonth(month - 1); // -1 por que los meses se toman como los indices en un array
                        /** cuando es de tipo MOUNTH_YEAR retorna el ultimo dia del mes seleccionado */
                        if (_this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
                            _this.date = moment(_this.date).endOf('month').toDate();
                        }
                        _this.dateToVisualize.setValue(moment(_this.date, 'YYYY-MM-DD').format(_this.dateFormat));
                        _this.dateFormControl.setValue(_this.date);
                        _this.isFromInputEvent = false;
                    }
                    else {
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.isFromInputEvent = false;
                        }), 1500);
                    }
                }
            }));
        }
        this.dateFormControl.valueChanges
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var incommingDate = moment(date, _this.dateFormat).format(_this.dateFormat);
            if (_this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
                _this.dateToVisualize.setValue(incommingDate);
            }
        }));
    };
    /**
     * Evento que se dispara luego seleccionar un mes
     */
    /**
     * Evento que se dispara luego seleccionar un mes
     * @param {?} chosenMonthDate
     * @param {?} datepicker
     * @return {?}
     */
    DateHelisaComponent.prototype.monthSelectedHandler = /**
     * Evento que se dispara luego seleccionar un mes
     * @param {?} chosenMonthDate
     * @param {?} datepicker
     * @return {?}
     */
    function (chosenMonthDate, datepicker) {
        if (this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
            datepicker.close();
            /** @type {?} */
            var date = moment(chosenMonthDate).endOf('month').toDate();
            this.dateToVisualize.setValue(moment(date, 'YYYY-MM-DD').format(this.dateFormat));
            this.dateFormControl.setValue(date);
        }
    };
    /**
     * Evento desde el control touch del calendar
     */
    /**
     * Evento desde el control touch del calendar
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    DateHelisaComponent.prototype.dateChange = /**
     * Evento desde el control touch del calendar
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    function (type, event) {
        this.dateToVisualize.setValue(moment(event.value, 'YYYY-MM-DD').format(this.dateFormat));
        this.dateFormControl.setValue(event.value);
    };
    /**
     * @return {?}
     */
    DateHelisaComponent.prototype.getErrorMessage = /**
     * @return {?}
     */
    function () {
        return this.errorMessage + this.dateFormat;
    };
    DateHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-date-helisa',
                    template: "<div>\r\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\r\n    <input matInput\r\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\">\r\n\r\n\r\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\r\n      ya que el valor es diferente cuando se escribe directamente en este\r\n    -->\r\n    <input matInput\r\n    [matDatepicker]=\"picker\"\r\n    hidden=\"hide\"\r\n    [value]=\"dateToVisualize.value\"\r\n    (dateChange)=\"dateChange('change', $event)\">\r\n    <!--  -->\r\n\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\r\n\r\n  </mat-form-field>\r\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\r\n  </div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DateHelisaComponent.ctorParameters = function () { return []; };
    DateHelisaComponent.propDecorators = {
        floatLabel: [{ type: Input }],
        dateFormControl: [{ type: Input }],
        dateFormat: [{ type: Input }],
        locale: [{ type: Input }],
        errorMessage: [{ type: Input }],
        placeholder: [{ type: Input }],
        typeCalendar: [{ type: Input }]
    };
    return DateHelisaComponent;
}());
export { DateHelisaComponent };
if (false) {
    /** @type {?} */
    DateHelisaComponent.prototype.floatLabel;
    /** @type {?} */
    DateHelisaComponent.prototype.dateFormControl;
    /**
     * @type {?}
     * @private
     */
    DateHelisaComponent.prototype.date;
    /**
     * Formato de fecha.
     * Los formatos validos son aquellos que maneja la libreria momentjs y este: 'DD [de] MMMM [de] YYYY'
     * https://momentjs.com/docs/#/parsing/string-format/
     * @type {?}
     */
    DateHelisaComponent.prototype.dateFormat;
    /** @type {?} */
    DateHelisaComponent.prototype.locale;
    /** @type {?} */
    DateHelisaComponent.prototype.errorMessage;
    /** @type {?} */
    DateHelisaComponent.prototype.placeholder;
    /**
     * Si este valor es diferente a TypeCalendarEnum.NORMAL no
     * será tomado en cuenta
     * @type {?}
     */
    DateHelisaComponent.prototype.typeCalendar;
    /** @type {?} */
    DateHelisaComponent.prototype.dateToVisualize;
    /**
     * Para evitar nuevos eventos miestras se realiza el parseo
     * @type {?}
     * @private
     */
    DateHelisaComponent.prototype.isFromInputEvent;
    /**
     * Verificar si el formato es valido
     * @type {?}
     */
    DateHelisaComponent.prototype.invalidFormat;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUM1QixNQUFNLEdBQW1CLE9BQU87QUFHdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBSTNDLFFBQVMsT0FBTztJQUNoQixZQUFhLGFBQWE7SUFDMUIsUUFBUyxRQUFROzs7QUFJbkI7SUF5Q0U7UUFqQ1MsZUFBVSxHQUFnQyxPQUFPLENBQUM7UUFDbEQsb0JBQWUsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsU0FBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7Ozs7OztRQU92QixlQUFVLEdBQVcsWUFBWSxDQUFDO1FBQ2xDLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsaUJBQVksR0FBVyx1Q0FBdUMsQ0FBQztRQUMvRCxnQkFBVyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7O1FBTXRDLGlCQUFZLEdBQXFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzs7OztRQVExRCxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7Ozs7UUFLMUMsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFFZixDQUFDO0lBRWpCOzs7UUFHSTs7Ozs7Ozs7SUFDSixzQ0FBUTs7Ozs7OztJQUFSO1FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVB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QUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQzs7Z0JBck1GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix3OEJBQTJDOztpQkFFNUM7Ozs7OzZCQUlFLEtBQUs7a0NBQ0wsS0FBSzs2QkFRTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQU1MLEtBQUs7O0lBNktSLDBCQUFDO0NBQUEsQUF2TUQsSUF1TUM7U0FsTVksbUJBQW1COzs7SUFHOUIseUNBQTJEOztJQUMzRCw4Q0FBNEQ7Ozs7O0lBQzVELG1DQUFnQzs7Ozs7OztJQU9oQyx5Q0FBMkM7O0lBQzNDLHFDQUErQjs7SUFDL0IsMkNBQXdFOztJQUN4RSwwQ0FBK0M7Ozs7OztJQU0vQywyQ0FBa0U7O0lBR2xFLDhDQUE2Qjs7Ozs7O0lBSzdCLCtDQUEwQzs7Ozs7SUFLMUMsNENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBtb21lbnQ6IHR5cGVvZiBtb21lbnRfID0gbW9tZW50XztcclxuXHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50LCBNYXREYXRlcGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5leHBvcnQgZW51bSBUeXBlQ2FsZW5kYXJFbnVtIHtcclxuICBOT1JNQUwgPSAnbm9ybWEnLFxyXG4gIE1PTlRIX1lFQVIgPSAnbW91bnRoLXllYXInLFxyXG4gIFNUUklDVCA9ICdzdHJpY3QnXHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1kYXRlLWhlbGlzYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXRlLWhlbGlzYS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIEBJbnB1dCgpIGZsb2F0TGFiZWw6ICduZXZlcicgfCAnYWx3YXlzJyB8ICdhdXRvJyA9ICduZXZlcic7XHJcbiAgQElucHV0KCkgZGF0ZUZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgcHJpdmF0ZSBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9ybWF0byBkZSBmZWNoYS5cclxuICAgKiBMb3MgZm9ybWF0b3MgdmFsaWRvcyBzb24gYXF1ZWxsb3MgcXVlIG1hbmVqYSBsYSBsaWJyZXJpYSBtb21lbnRqcyB5IGVzdGU6ICdERCBbZGVdIE1NTU0gW2RlXSBZWVlZJ1xyXG4gICAqIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9wYXJzaW5nL3N0cmluZy1mb3JtYXQvXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0ZUZvcm1hdDogc3RyaW5nID0gJ0REL01NL1lZWVknO1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nID0gJ2VzJztcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICdMYSBmZWNoYSBubyBjb25jdWVyZGEgY29uIGVsIGZvcm1hdG8gJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gdGhpcy5kYXRlRm9ybWF0O1xyXG5cclxuICAvKipcclxuICAgKiBTaSBlc3RlIHZhbG9yIGVzIGRpZmVyZW50ZSBhIFR5cGVDYWxlbmRhckVudW0uTk9STUFMIG5vXHJcbiAgICogc2Vyw6EgdG9tYWRvIGVuIGN1ZW50YVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVDYWxlbmRhcjogVHlwZUNhbGVuZGFyRW51bSA9IFR5cGVDYWxlbmRhckVudW0uTk9STUFMO1xyXG5cclxuXHJcbiAgZGF0ZVRvVmlzdWFsaXplOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgLyoqXHJcbiAgICogUGFyYSBldml0YXIgbnVldm9zIGV2ZW50b3MgbWllc3RyYXMgc2UgcmVhbGl6YSBlbCBwYXJzZW9cclxuICAgKi9cclxuICBwcml2YXRlIGlzRnJvbUlucHV0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpY2FyIHNpIGVsIGZvcm1hdG8gZXMgdmFsaWRvXHJcbiAgICovXHJcbiAgaW52YWxpZEZvcm1hdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKlxyXG4gICogVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSID0gJ01NL1lZWVknXHJcbiAgKiBUeXBlQ2FsZW5kYXJFbnVtLlNUUklDVCA9ICdERCBbZGVdIE1NTU0gW2RlXSBZWVlZJ1xyXG4gICogKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIG1vbWVudC5sb2NhbGUodGhpcy5sb2NhbGUpO1xyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUgPSBuZXcgRm9ybUNvbnRyb2woJycsIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbGlkYXRvcik7XHJcbiAgICB0aGlzLmZvcm1IYW5kbGVyKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBlc3RhYmxlY2VyIHZhbG9yIHBvciBkZWZlY3RvIGRlIGxhIGZlY2hhXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCBpbmNvbW1pbmdEYXRlOiBzdHJpbmcgPSBtb21lbnQodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XHJcbiAgICBpZiAodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT09ICcnICYmIGluY29tbWluZ0RhdGUgIT09ICdJbnZhbGlkIGRhdGUnKSB7XHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKGluY29tbWluZ0RhdGUpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldCB0eXBlQ2FsZW5kYXJFbnVtKCk6IHR5cGVvZiBUeXBlQ2FsZW5kYXJFbnVtIHtcclxuICAgIHJldHVybiBUeXBlQ2FsZW5kYXJFbnVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5hIGNvbW8gc2UgZGViZSBpbmljaWFsaXphciBsYSB2aXN1YWxpemFjaW9uIGRlbCBjYWxlbmRhclxyXG4gICAqL1xyXG4gIGdldFN0YXJ0VmlldygpOiBzdHJpbmcge1xyXG4gICAgLy8gbXVsdGkteWVhclxyXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xyXG4gICAgICByZXR1cm4gJ211bHRpLXllYXInO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLlNUUklDVCkge1xyXG4gICAgICByZXR1cm4gJ21vbnRoJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnbW9udGgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtSGFuZGxlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLlNUUklDVCkge1xyXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcclxuICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlKTtcclxuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcclxuICAgICAgICAgIGNvbnN0IGlzVmFsaWQ6IGJvb2xlYW4gPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCk7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xyXG5cclxuICAgICAgICAgIGlmICghIXJlc3VsdCAmJiAocmVzdWx0ID09PSAnSW52YWxpZCBkYXRlJyB8fCAhaXNWYWxpZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCEhcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Zyb21JbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShtb21lbnQocmVzdWx0LCB0aGlzLmRhdGVGb3JtYXQpLnRvRGF0ZSgpKTtcclxuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWVDaGFuZ2VzXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YXAoKGRhdGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0ZS5sZW5ndGggPiB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBmaWx0ZXIoKGRhdGU6IHN0cmluZykgPT4gZGF0ZS5sZW5ndGggPT09IHRoaXMuZGF0ZUZvcm1hdC5sZW5ndGgpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuXHJcbiAgICAgICAgICBpZiAoISFyZXN1bHQgJiYgKHJlc3VsdCA9PT0gJ0ludmFsaWQgZGF0ZScgfHwgIWlzVmFsaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoISFyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRnJvbUlucHV0RXZlbnQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1YlN0cmluZzogc3RyaW5nW10gPSByZXN1bHQuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgeWVhcjogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMF0pO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1sxXSk7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF5OiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1syXSk7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0RGF0ZShkYXkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXRNb250aChtb250aCAtIDEpOyAvLyAtMSBwb3IgcXVlIGxvcyBtZXNlcyBzZSB0b21hbiBjb21vIGxvcyBpbmRpY2VzIGVuIHVuIGFycmF5XHJcblxyXG4gICAgICAgICAgICAgIC8qKiBjdWFuZG8gZXMgZGUgdGlwbyBNT1VOVEhfWUVBUiByZXRvcm5hIGVsIHVsdGltbyBkaWEgZGVsIG1lcyBzZWxlY2Npb25hZG8gKi9cclxuICAgICAgICAgICAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gbW9tZW50KHRoaXMuZGF0ZSkuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmRhdGUpO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZUNoYW5nZXNcclxuICAgICAgLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5jb21taW5nRGF0ZTogc3RyaW5nID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9PSAnJyAmJiBpbmNvbW1pbmdEYXRlICE9PSAnSW52YWxpZCBkYXRlJykge1xyXG4gICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUoaW5jb21taW5nRGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgbHVlZ28gc2VsZWNjaW9uYXIgdW4gbWVzXHJcbiAgICovXHJcbiAgbW9udGhTZWxlY3RlZEhhbmRsZXIoY2hvc2VuTW9udGhEYXRlOiBtb21lbnRfLk1vbWVudCwgZGF0ZXBpY2tlcjogTWF0RGF0ZXBpY2tlcjxtb21lbnRfLk1vbWVudD4pOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xyXG4gICAgICBkYXRlcGlja2VyLmNsb3NlKCk7XHJcbiAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSBtb21lbnQoY2hvc2VuTW9udGhEYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcclxuXHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChkYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcclxuICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gZGVzZGUgZWwgY29udHJvbCB0b3VjaCBkZWwgY2FsZW5kYXJcclxuICAgKi9cclxuICBkYXRlQ2hhbmdlKHR5cGU6IHN0cmluZywgZXZlbnQ6IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50PERhdGU+KTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZXZlbnQudmFsdWUsICdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xyXG4gICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZXZlbnQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXJyb3JNZXNzYWdlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2UgKyB0aGlzLmRhdGVGb3JtYXQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=