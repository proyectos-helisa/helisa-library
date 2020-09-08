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
         */
        if (this.dateFormControl.value !== '' && this.dateFormControl.value !== null) {
            /** @type {?} */
            var incomingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
            if (incomingDate !== 'Invalid date') {
                this.dateToVisualize.setValue(incomingDate);
                this.dateFormControl.setValue(this.dateFormControl.value);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUM1QixNQUFNLEdBQW1CLE9BQU87QUFHdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBSTNDLFFBQVMsT0FBTztJQUNoQixZQUFhLGFBQWE7SUFDMUIsUUFBUyxRQUFROzs7QUFJbkI7SUF5Q0U7UUFqQ1MsZUFBVSxHQUFnQyxPQUFPLENBQUM7UUFDbEQsb0JBQWUsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsU0FBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7Ozs7OztRQU92QixlQUFVLEdBQVcsWUFBWSxDQUFDO1FBQ2xDLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsaUJBQVksR0FBVyx1Q0FBdUMsQ0FBQztRQUMvRCxnQkFBVyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7O1FBTXRDLGlCQUFZLEdBQXFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzs7OztRQVExRCxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7Ozs7UUFLMUMsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFFZixDQUFDO0lBRWpCOzs7UUFHSTs7Ozs7Ozs7SUFDSixzQ0FBUTs7Ozs7OztJQUFSO1FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVB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ZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzdDLENBQUM7O2dCQXJNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsdzhCQUEyQzs7aUJBRTVDOzs7Ozs2QkFJRSxLQUFLO2tDQUNMLEtBQUs7NkJBUUwsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFNTCxLQUFLOztJQTZLUiwwQkFBQztDQUFBLEFBdk1ELElBdU1DO1NBbE1ZLG1CQUFtQjs7O0lBRzlCLHlDQUEyRDs7SUFDM0QsOENBQTREOzs7OztJQUM1RCxtQ0FBZ0M7Ozs7Ozs7SUFPaEMseUNBQTJDOztJQUMzQyxxQ0FBK0I7O0lBQy9CLDJDQUF3RTs7SUFDeEUsMENBQStDOzs7Ozs7SUFNL0MsMkNBQWtFOztJQUdsRSw4Q0FBNkI7Ozs7OztJQUs3QiwrQ0FBMEM7Ozs7O0lBSzFDLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50OiB0eXBlb2YgbW9tZW50XyA9IG1vbWVudF87XHJcblxyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VySW5wdXRFdmVudCwgTWF0RGF0ZXBpY2tlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gVHlwZUNhbGVuZGFyRW51bSB7XHJcbiAgTk9STUFMID0gJ25vcm1hJyxcclxuICBNT05USF9ZRUFSID0gJ21vdW50aC15ZWFyJyxcclxuICBTVFJJQ1QgPSAnc3RyaWN0J1xyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtZGF0ZS1oZWxpc2EnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1oZWxpc2EuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBASW5wdXQoKSBmbG9hdExhYmVsOiAnbmV2ZXInIHwgJ2Fsd2F5cycgfCAnYXV0bycgPSAnbmV2ZXInO1xyXG4gIEBJbnB1dCgpIGRhdGVGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIHByaXZhdGUgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdG8gZGUgZmVjaGEuXHJcbiAgICogTG9zIGZvcm1hdG9zIHZhbGlkb3Mgc29uIGFxdWVsbG9zIHF1ZSBtYW5lamEgbGEgbGlicmVyaWEgbW9tZW50anMgeSBlc3RlOiAnREQgW2RlXSBNTU1NIFtkZV0gWVlZWSdcclxuICAgKiBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvcGFyc2luZy9zdHJpbmctZm9ybWF0L1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdERC9NTS9ZWVlZJztcclxuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZyA9ICdlcyc7XHJcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnTGEgZmVjaGEgbm8gY29uY3VlcmRhIGNvbiBlbCBmb3JtYXRvICc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9IHRoaXMuZGF0ZUZvcm1hdDtcclxuXHJcbiAgLyoqXHJcbiAgICogU2kgZXN0ZSB2YWxvciBlcyBkaWZlcmVudGUgYSBUeXBlQ2FsZW5kYXJFbnVtLk5PUk1BTCBub1xyXG4gICAqIHNlcsOhIHRvbWFkbyBlbiBjdWVudGFcclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlQ2FsZW5kYXI6IFR5cGVDYWxlbmRhckVudW0gPSBUeXBlQ2FsZW5kYXJFbnVtLk5PUk1BTDtcclxuXHJcblxyXG4gIGRhdGVUb1Zpc3VhbGl6ZTogRm9ybUNvbnRyb2w7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcmEgZXZpdGFyIG51ZXZvcyBldmVudG9zIG1pZXN0cmFzIHNlIHJlYWxpemEgZWwgcGFyc2VvXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpc0Zyb21JbnB1dEV2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWNhciBzaSBlbCBmb3JtYXRvIGVzIHZhbGlkb1xyXG4gICAqL1xyXG4gIGludmFsaWRGb3JtYXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLypcclxuICAqIFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUiA9ICdNTS9ZWVlZJ1xyXG4gICogVHlwZUNhbGVuZGFyRW51bS5TVFJJQ1QgPSAnREQgW2RlXSBNTU1NIFtkZV0gWVlZWSdcclxuICAqICovXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBtb21lbnQubG9jYWxlKHRoaXMubG9jYWxlKTtcclxuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplID0gbmV3IEZvcm1Db250cm9sKCcnLCB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWxpZGF0b3IpO1xyXG4gICAgdGhpcy5mb3JtSGFuZGxlcigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZXN0YWJsZWNlciB2YWxvciBwb3IgZGVmZWN0byBkZSBsYSBmZWNoYVxyXG4gICAgICovXHJcbiAgICBpZiAodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT09ICcnICYmIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGluY29taW5nRGF0ZTogc3RyaW5nID0gbW9tZW50KHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xyXG4gICAgICBpZiAoaW5jb21pbmdEYXRlICE9PSAnSW52YWxpZCBkYXRlJykge1xyXG4gICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKGluY29taW5nRGF0ZSk7XHJcbiAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGVDYWxlbmRhckVudW0oKTogdHlwZW9mIFR5cGVDYWxlbmRhckVudW0ge1xyXG4gICAgcmV0dXJuIFR5cGVDYWxlbmRhckVudW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmEgY29tbyBzZSBkZWJlIGluaWNpYWxpemFyIGxhIHZpc3VhbGl6YWNpb24gZGVsIGNhbGVuZGFyXHJcbiAgICovXHJcbiAgZ2V0U3RhcnRWaWV3KCk6IHN0cmluZyB7XHJcbiAgICAvLyBtdWx0aS15ZWFyXHJcbiAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XHJcbiAgICAgIHJldHVybiAnbXVsdGkteWVhcic7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uU1RSSUNUKSB7XHJcbiAgICAgIHJldHVybiAnbW9udGgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdtb250aCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uU1RSSUNUKSB7XHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGRhdGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcclxuXHJcbiAgICAgICAgICBpZiAoISFyZXN1bHQgJiYgKHJlc3VsdCA9PT0gJ0ludmFsaWQgZGF0ZScgfHwgIWlzVmFsaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghIXJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGcm9tSW5wdXRFdmVudCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KHRoaXMuZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUobW9tZW50KHJlc3VsdCwgdGhpcy5kYXRlRm9ybWF0KS50b0RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFwKChkYXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGUubGVuZ3RoID4gdGhpcy5kYXRlRm9ybWF0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgZmlsdGVyKChkYXRlOiBzdHJpbmcpID0+IGRhdGUubGVuZ3RoID09PSB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQsIHRydWUpLmlzVmFsaWQoKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcblxyXG4gICAgICAgICAgaWYgKCEhcmVzdWx0ICYmIChyZXN1bHQgPT09ICdJbnZhbGlkIGRhdGUnIHx8ICFpc1ZhbGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCEhcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Zyb21JbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBjb25zdCBzdWJTdHJpbmc6IHN0cmluZ1tdID0gcmVzdWx0LnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHllYXI6IG51bWJlciA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzBdKTtcclxuICAgICAgICAgICAgICBjb25zdCBtb250aDogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMV0pO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRheTogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMl0pO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0RnVsbFllYXIoeWVhcik7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldERhdGUoZGF5KTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0TW9udGgobW9udGggLSAxKTsgLy8gLTEgcG9yIHF1ZSBsb3MgbWVzZXMgc2UgdG9tYW4gY29tbyBsb3MgaW5kaWNlcyBlbiB1biBhcnJheVxyXG5cclxuICAgICAgICAgICAgICAvKiogY3VhbmRvIGVzIGRlIHRpcG8gTU9VTlRIX1lFQVIgcmV0b3JuYSBlbCB1bHRpbW8gZGlhIGRlbCBtZXMgc2VsZWNjaW9uYWRvICovXHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG1vbWVudCh0aGlzLmRhdGUpLmVuZE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KHRoaXMuZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluY29tbWluZ0RhdGU6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPT0gJycgJiYgaW5jb21taW5nRGF0ZSAhPT0gJ0ludmFsaWQgZGF0ZScpIHtcclxuICAgICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKGluY29tbWluZ0RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGx1ZWdvIHNlbGVjY2lvbmFyIHVuIG1lc1xyXG4gICAqL1xyXG4gIG1vbnRoU2VsZWN0ZWRIYW5kbGVyKGNob3Nlbk1vbnRoRGF0ZTogbW9tZW50Xy5Nb21lbnQsIGRhdGVwaWNrZXI6IE1hdERhdGVwaWNrZXI8bW9tZW50Xy5Nb21lbnQ+KTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcclxuICAgICAgZGF0ZXBpY2tlci5jbG9zZSgpO1xyXG4gICAgICBjb25zdCBkYXRlOiBEYXRlID0gbW9tZW50KGNob3Nlbk1vbnRoRGF0ZSkuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcblxyXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XHJcbiAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKGRhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIGRlc2RlIGVsIGNvbnRyb2wgdG91Y2ggZGVsIGNhbGVuZGFyXHJcbiAgICovXHJcbiAgZGF0ZUNoYW5nZSh0eXBlOiBzdHJpbmcsIGV2ZW50OiBNYXREYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPik6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KGV2ZW50LnZhbHVlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcclxuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKGV2ZW50LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlICsgdGhpcy5kYXRlRm9ybWF0O1xyXG4gIH1cclxuXHJcbn1cclxuIl19