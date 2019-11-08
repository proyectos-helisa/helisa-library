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
};
export { TypeCalendarEnum };
var DateHelisaComponent = /** @class */ (function () {
    function DateHelisaComponent() {
        this.floatLabel = 'never';
        this.dateFormControl = new FormControl('');
        this.date = new Date();
        /**
         * Formato de fecha.
         * Los formatos validos son aquellos que maneja la libreria momentjs
         * https://momentjs.com/docs/#/parsing/string-format/
         */
        this.dateFormat = 'DD/MM/YYYY';
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
    /**
     * @return {?}
     */
    DateHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dateToVisualize = new FormControl('', this.dateFormControl.validator);
        this.formHandler();
        if (this.typeCalendar == TypeCalendarEnum.MONTH_YEAR) {
            this.dateFormat = 'MM/YYYY';
            this.placeholder = this.dateFormat;
        }
        /**
         * establecer valor por defecto de la fecha
         * @type {?}
         */
        var incommingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
        if (this.dateFormControl.value != '' && incommingDate != 'Invalid date') {
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
        //multi-year
        if (this.typeCalendar == this.typeCalendarEnum.MONTH_YEAR) {
            return 'multi-year';
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
        function (date) { return date.length == _this.dateFormat.length; })))
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
            if (!!result && (result == 'Invalid date' || !isValid)) {
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
                    if (_this.typeCalendar == TypeCalendarEnum.MONTH_YEAR) {
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
        this.dateFormControl.valueChanges
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var incommingDate = moment(date, _this.dateFormat).format(_this.dateFormat);
            if (_this.dateFormControl.value != '' && incommingDate != 'Invalid date') {
                _this.dateToVisualize.setValue(incommingDate);
            }
        }));
    };
    /**
     * Evento que se dispara luego seleccionar un mes
     * @param chosenMonthDate
     * @param datepicker
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
        if (this.typeCalendar == TypeCalendarEnum.MONTH_YEAR) {
            datepicker.close();
            /** @type {?} */
            var date = moment(chosenMonthDate).endOf('month').toDate();
            this.dateToVisualize.setValue(moment(date, 'YYYY-MM-DD').format(this.dateFormat));
            this.dateFormControl.setValue(date);
        }
    };
    /**
     * Evento desde el control touch del calendar
     * @param type
     * @param event
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
                    template: "<div>\r\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\r\n    <input matInput \r\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\">\r\n    \r\n    \r\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar \r\n      ya que el valor es diferente cuando se escribe directamente en este\r\n    -->\r\n    <input matInput \r\n    [matDatepicker]=\"picker\" \r\n    hidden=\"hide\" \r\n    [value]=\"dateToVisualize.value\" \r\n    (dateChange)=\"dateChange('change', $event)\">\r\n    <!--  -->\r\n  \r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\r\n    \r\n  </mat-form-field>\r\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\r\n  </div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DateHelisaComponent.ctorParameters = function () { return []; };
    DateHelisaComponent.propDecorators = {
        floatLabel: [{ type: Input }],
        dateFormControl: [{ type: Input }],
        dateFormat: [{ type: Input }],
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
     * Los formatos validos son aquellos que maneja la libreria momentjs
     * https://momentjs.com/docs/#/parsing/string-format/
     * @type {?}
     */
    DateHelisaComponent.prototype.dateFormat;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUM1QixNQUFNLEdBQUcsT0FBTztBQUd0QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFJM0MsUUFBUyxPQUFPO0lBQ2hCLFlBQWEsYUFBYTs7O0FBSTVCO0lBd0NFO1FBaENTLGVBQVUsR0FBZ0MsT0FBTyxDQUFDO1FBQ2xELG9CQUFlLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELFNBQUksR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDOzs7Ozs7UUFPdEIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixpQkFBWSxHQUFHLHVDQUF1QyxDQUFDO1FBQ3ZELGdCQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7UUFNOUIsaUJBQVksR0FBb0IsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOzs7O1FBUXpELHFCQUFnQixHQUFVLEtBQUssQ0FBQzs7OztRQUt4QyxrQkFBYSxHQUFXLEtBQUssQ0FBQztJQUVkLENBQUM7Ozs7SUFFakIsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN4RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBRyxJQUFJ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bUJBQW1COzs7SUFHOUIseUNBQTJEOztJQUMzRCw4Q0FBNEQ7Ozs7O0lBQzVELG1DQUErQjs7Ozs7OztJQU8vQix5Q0FBbUM7O0lBQ25DLDJDQUFnRTs7SUFDaEUsMENBQXVDOzs7Ozs7SUFNdkMsMkNBQWlFOztJQUdqRSw4Q0FBNEI7Ozs7OztJQUs1QiwrQ0FBd0M7Ozs7O0lBS3hDLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50LCBNYXREYXRlcGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5leHBvcnQgZW51bSBUeXBlQ2FsZW5kYXJFbnVte1xyXG4gIE5PUk1BTCA9ICdub3JtYScsXHJcbiAgTU9OVEhfWUVBUiA9ICdtb3VudGgteWVhcidcclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWRhdGUtaGVsaXNhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG5cclxuICBASW5wdXQoKSBmbG9hdExhYmVsOiAnbmV2ZXInIHwgJ2Fsd2F5cycgfCAnYXV0bycgPSAnbmV2ZXInO1xyXG4gIEBJbnB1dCgpIGRhdGVGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIHByaXZhdGUgZGF0ZTpEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9ybWF0byBkZSBmZWNoYS5cclxuICAgKiBMb3MgZm9ybWF0b3MgdmFsaWRvcyBzb24gYXF1ZWxsb3MgcXVlIG1hbmVqYSBsYSBsaWJyZXJpYSBtb21lbnRqcyAgXHJcbiAgICogaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL3BhcnNpbmcvc3RyaW5nLWZvcm1hdC9cclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRlRm9ybWF0ID0gJ0REL01NL1lZWVknO1xyXG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZSA9ICdMYSBmZWNoYSBubyBjb25jdWVyZGEgY29uIGVsIGZvcm1hdG8gJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9IHRoaXMuZGF0ZUZvcm1hdDtcclxuXHJcbiAgLyoqXHJcbiAgICogU2kgZXN0ZSB2YWxvciBlcyBkaWZlcmVudGUgYSBUeXBlQ2FsZW5kYXJFbnVtLk5PUk1BTCBub1xyXG4gICAqIHNlcsOhIHRvbWFkbyBlbiBjdWVudGFcclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlQ2FsZW5kYXI6VHlwZUNhbGVuZGFyRW51bSA9IFR5cGVDYWxlbmRhckVudW0uTk9STUFMO1xyXG4gIFxyXG5cclxuICBkYXRlVG9WaXN1YWxpemU6Rm9ybUNvbnRyb2w7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcmEgZXZpdGFyIG51ZXZvcyBldmVudG9zIG1pZXN0cmFzIHNlIHJlYWxpemEgZWwgcGFyc2VvXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpc0Zyb21JbnB1dEV2ZW50OmJvb2xlYW49IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBWZXJpZmljYXIgc2kgZWwgZm9ybWF0byBlcyB2YWxpZG9cclxuICAgKi9cclxuICBpbnZhbGlkRm9ybWF0OmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7ICAgICAgICAgICAgXHJcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZT0gbmV3IEZvcm1Db250cm9sKCcnLHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbGlkYXRvcilcclxuICAgIHRoaXMuZm9ybUhhbmRsZXIoKTtcclxuICAgIFxyXG4gICAgaWYodGhpcy50eXBlQ2FsZW5kYXIgPT0gVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKXtcclxuICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gJ01NL1lZWVknXHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLmRhdGVGb3JtYXQ7XHJcbiAgICB9ICAgICAgICBcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBlc3RhYmxlY2VyIHZhbG9yIHBvciBkZWZlY3RvIGRlIGxhIGZlY2hhXHJcbiAgICAgKi9cclxuICAgIGxldCBpbmNvbW1pbmdEYXRlID0gbW9tZW50KHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlLHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XHJcbiAgICBpZih0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPSAnJyAmJiBpbmNvbW1pbmdEYXRlICE9ICdJbnZhbGlkIGRhdGUnKXtcclxuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUoaW5jb21taW5nRGF0ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGdldCB0eXBlQ2FsZW5kYXJFbnVtKCl7XHJcbiAgICByZXR1cm4gVHlwZUNhbGVuZGFyRW51bTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluYSBjb21vIHNlIGRlYmUgaW5pY2lhbGl6YXIgbGEgdmlzdWFsaXphY2lvbiBkZWwgY2FsZW5kYXJcclxuICAgKi9cclxuICBnZXRTdGFydFZpZXcoKTpzdHJpbmd7XHJcbiAgICAvL211bHRpLXllYXJcclxuICAgIGlmKHRoaXMudHlwZUNhbGVuZGFyID09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKXtcclxuICAgICAgcmV0dXJuICdtdWx0aS15ZWFyJztcclxuICAgIH1lbHNle1xyXG4gICAgICByZXR1cm4gJ21vbnRoJztcclxuICAgIH0gICAgXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1IYW5kbGVyKCl7ICAgXHJcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS52YWx1ZUNoYW5nZXNcclxuICAgIC5waXBlKFxyXG4gICAgICB0YXAoZGF0ZSA9PiB7ICAgICAgICBcclxuICAgICAgICBpZihkYXRlLmxlbmd0aCA+IHRoaXMuZGF0ZUZvcm1hdC5sZW5ndGgpe1xyXG4gICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZVxyXG4gICAgICAgIH1lbHNle3RoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlfVxyXG4gICAgICB9KSxcclxuICAgICAgZmlsdGVyKGRhdGUgPT4gZGF0ZS5sZW5ndGggPT0gdGhpcy5kYXRlRm9ybWF0Lmxlbmd0aClcclxuICAgICkgICAgXHJcbiAgICAuc3Vic2NyaWJlKGRhdGU9PnsgICAgICAgICBcclxuICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XHJcbiAgICAgIGxldCBpc1ZhbGlkID0gbW9tZW50KGRhdGUsdGhpcy5kYXRlRm9ybWF0LHRydWUpLmlzVmFsaWQoKVxyXG4gICAgICBsZXQgcmVzdWx0ID0gbW9tZW50KGRhdGUsdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBpZighIXJlc3VsdCAmJiAocmVzdWx0ID09ICdJbnZhbGlkIGRhdGUnIHx8ICFpc1ZhbGlkKSl7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoISFyZXN1bHQgKXsgICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLmlzRnJvbUlucHV0RXZlbnQpeyAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICBsZXQgc3ViU3RyaW5nOnN0cmluZ1tdID0gcmVzdWx0LnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgbGV0IHllYXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1swXSlcclxuICAgICAgICAgIGxldCBtb250aCA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzFdKVxyXG4gICAgICAgICAgbGV0IGRheSA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzJdKVxyXG5cclxuICAgICAgICAgIHRoaXMuZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKVxyXG4gICAgICAgICAgdGhpcy5kYXRlLnNldERhdGUoZGF5KVxyXG4gICAgICAgICAgdGhpcy5kYXRlLnNldE1vbnRoKG1vbnRoIC0gMSkgLy8gLTEgcG9yIHF1ZSBsb3MgbWVzZXMgc2UgdG9tYW4gY29tbyBsb3MgaW5kaWNlcyBlbiB1biBhcnJheVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvKiogY3VhbmRvIGVzIGRlIHRpcG8gTU9VTlRIX1lFQVIgcmV0b3JuYSBlbCB1bHRpbW8gZGlhIGRlbCBtZXMgc2VsZWNjaW9uYWRvICovXHJcbiAgICAgICAgICBpZih0aGlzLnR5cGVDYWxlbmRhciA9PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpe1xyXG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBtb21lbnQodGhpcy5kYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlLCdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpXHJcbiAgICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmRhdGUpICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZVxyXG4gICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZUNoYW5nZXNcclxuICAgIC5zdWJzY3JpYmUoZGF0ZT0+e1xyXG4gICAgICBsZXQgaW5jb21taW5nRGF0ZSA9IG1vbWVudChkYXRlLHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XHJcbiAgICAgIGlmKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9ICcnICYmIGluY29tbWluZ0RhdGUgIT0gJ0ludmFsaWQgZGF0ZScpe1xyXG4gICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKGluY29tbWluZ0RhdGUpO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBsdWVnbyBzZWxlY2Npb25hciB1biBtZXNcclxuICAgKiBAcGFyYW0gY2hvc2VuTW9udGhEYXRlIFxyXG4gICAqIEBwYXJhbSBkYXRlcGlja2VyIFxyXG4gICAqL1xyXG4gIG1vbnRoU2VsZWN0ZWRIYW5kbGVyKGNob3Nlbk1vbnRoRGF0ZTogbW9tZW50Xy5Nb21lbnQsIGRhdGVwaWNrZXI6IE1hdERhdGVwaWNrZXI8bW9tZW50Xy5Nb21lbnQ+KXsgICAgXHJcbiAgICBcclxuICAgIGlmKHRoaXMudHlwZUNhbGVuZGFyID09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUil7XHJcbiAgICAgIGRhdGVwaWNrZXIuY2xvc2UoKTtcclxuICAgICAgbGV0IGRhdGUgPSBtb21lbnQoY2hvc2VuTW9udGhEYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICBcclxuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KGRhdGUsJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSlcclxuICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZSk7XHJcbiAgICB9ICAgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gZGVzZGUgZWwgY29udHJvbCB0b3VjaCBkZWwgY2FsZW5kYXJcclxuICAgKiBAcGFyYW0gdHlwZSBcclxuICAgKiBAcGFyYW0gZXZlbnQgXHJcbiAgICovXHJcbiAgZGF0ZUNoYW5nZSh0eXBlOiBzdHJpbmcsIGV2ZW50OiBNYXREYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPikge1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KGV2ZW50LnZhbHVlLCdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpXHJcbiAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRFcnJvck1lc3NhZ2UoKTpzdHJpbmd7XHJcbiAgICByZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2UrIHRoaXMuZGF0ZUZvcm1hdFxyXG4gIH1cclxuXHJcbn0iXX0=