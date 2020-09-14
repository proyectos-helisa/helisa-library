/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
        this.change = new EventEmitter();
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
                        _this.dateToVisualize.setValue(moment(result, _this.dateFormat).format(_this.dateFormat));
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
        this.change.emit(event.value);
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
                    template: "<div>\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\n    <input matInput\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\">\n\n\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\n      ya que el valor es diferente cuando se escribe directamente en este\n    -->\n    <input matInput\n    [matDatepicker]=\"picker\"\n    hidden=\"hide\"\n    [value]=\"dateToVisualize.value\"\n    (dateChange)=\"dateChange('change', $event)\">\n    <!--  -->\n\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\n\n  </mat-form-field>\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\n  </div>\n",
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
        change: [{ type: Output }],
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
    /** @type {?} */
    DateHelisaComponent.prototype.change;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O0lBQzVCLE1BQU0sR0FBbUIsT0FBTztBQUd0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFJM0MsUUFBUyxPQUFPO0lBQ2hCLFlBQWEsYUFBYTtJQUMxQixRQUFTLFFBQVE7OztBQUluQjtJQTBDRTtRQWxDUyxlQUFVLEdBQWdDLE9BQU8sQ0FBQztRQUNsRCxvQkFBZSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxTQUFJLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Ozs7O1FBT3ZCLGVBQVUsR0FBVyxZQUFZLENBQUM7UUFDbEMsV0FBTSxHQUFXLElBQUksQ0FBQztRQUN0QixpQkFBWSxHQUFXLHVDQUF1QyxDQUFDO1FBQy9ELGdCQUFXLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7O1FBTXZELGlCQUFZLEdBQXFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzs7OztRQVExRCxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7Ozs7UUFLMUMsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFFZixDQUFDO0lBRWpCOzs7UUFHSTs7Ozs7Ozs7SUFDSixzQ0FBUTs7Ozs7OztJQUFSO1FBQ0UsTUFBTSxD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QUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzdDLENBQUM7O2dCQXJNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsNDVCQUEyQzs7aUJBRTVDOzs7Ozs2QkFJRSxLQUFLO2tDQUNMLEtBQUs7NkJBUUwsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxNQUFNOytCQU1OLEtBQUs7O0lBNEtSLDBCQUFDO0NBQUEsQUF2TUQsSUF1TUM7U0FsTVksbUJBQW1COzs7SUFHOUIseUNBQTJEOztJQUMzRCw4Q0FBNEQ7Ozs7O0lBQzVELG1DQUFnQzs7Ozs7OztJQU9oQyx5Q0FBMkM7O0lBQzNDLHFDQUErQjs7SUFDL0IsMkNBQXdFOztJQUN4RSwwQ0FBK0M7O0lBQy9DLHFDQUFnRTs7Ozs7O0lBTWhFLDJDQUFrRTs7SUFHbEUsOENBQTZCOzs7Ozs7SUFLN0IsK0NBQTBDOzs7OztJQUsxQyw0Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudDogdHlwZW9mIG1vbWVudF8gPSBtb21lbnRfO1xuXG5pbXBvcnQgeyBNYXREYXRlcGlja2VySW5wdXRFdmVudCwgTWF0RGF0ZXBpY2tlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbmV4cG9ydCBlbnVtIFR5cGVDYWxlbmRhckVudW0ge1xuICBOT1JNQUwgPSAnbm9ybWEnLFxuICBNT05USF9ZRUFSID0gJ21vdW50aC15ZWFyJyxcbiAgU1RSSUNUID0gJ3N0cmljdCdcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtZGF0ZS1oZWxpc2EnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlLWhlbGlzYS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgQElucHV0KCkgZmxvYXRMYWJlbDogJ25ldmVyJyB8ICdhbHdheXMnIHwgJ2F1dG8nID0gJ25ldmVyJztcbiAgQElucHV0KCkgZGF0ZUZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIHByaXZhdGUgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgLyoqXG4gICAqIEZvcm1hdG8gZGUgZmVjaGEuXG4gICAqIExvcyBmb3JtYXRvcyB2YWxpZG9zIHNvbiBhcXVlbGxvcyBxdWUgbWFuZWphIGxhIGxpYnJlcmlhIG1vbWVudGpzIHkgZXN0ZTogJ0REIFtkZV0gTU1NTSBbZGVdIFlZWVknXG4gICAqIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9wYXJzaW5nL3N0cmluZy1mb3JtYXQvXG4gICAqL1xuICBASW5wdXQoKSBkYXRlRm9ybWF0OiBzdHJpbmcgPSAnREQvTU0vWVlZWSc7XG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nID0gJ2VzJztcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnTGEgZmVjaGEgbm8gY29uY3VlcmRhIGNvbiBlbCBmb3JtYXRvICc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSB0aGlzLmRhdGVGb3JtYXQ7XG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICAvKipcbiAgICogU2kgZXN0ZSB2YWxvciBlcyBkaWZlcmVudGUgYSBUeXBlQ2FsZW5kYXJFbnVtLk5PUk1BTCBub1xuICAgKiBzZXLDoSB0b21hZG8gZW4gY3VlbnRhXG4gICAqL1xuICBASW5wdXQoKSB0eXBlQ2FsZW5kYXI6IFR5cGVDYWxlbmRhckVudW0gPSBUeXBlQ2FsZW5kYXJFbnVtLk5PUk1BTDtcblxuXG4gIGRhdGVUb1Zpc3VhbGl6ZTogRm9ybUNvbnRyb2w7XG5cbiAgLyoqXG4gICAqIFBhcmEgZXZpdGFyIG51ZXZvcyBldmVudG9zIG1pZXN0cmFzIHNlIHJlYWxpemEgZWwgcGFyc2VvXG4gICAqL1xuICBwcml2YXRlIGlzRnJvbUlucHV0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVmVyaWZpY2FyIHNpIGVsIGZvcm1hdG8gZXMgdmFsaWRvXG4gICAqL1xuICBpbnZhbGlkRm9ybWF0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKlxuICAqIFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUiA9ICdNTS9ZWVlZJ1xuICAqIFR5cGVDYWxlbmRhckVudW0uU1RSSUNUID0gJ0REIFtkZV0gTU1NTSBbZGVdIFlZWVknXG4gICogKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgbW9tZW50LmxvY2FsZSh0aGlzLmxvY2FsZSk7XG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUgPSBuZXcgRm9ybUNvbnRyb2woJycsIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbGlkYXRvcik7XG4gICAgdGhpcy5mb3JtSGFuZGxlcigpO1xuXG4gICAgLyoqXG4gICAgICogZXN0YWJsZWNlciB2YWxvciBwb3IgZGVmZWN0byBkZSBsYSBmZWNoYVxuICAgICAqL1xuICAgIGlmICh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPT0gJycgJiYgdGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGluY29taW5nRGF0ZTogc3RyaW5nID0gbW9tZW50KHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xuICAgICAgaWYgKGluY29taW5nRGF0ZSAhPT0gJ0ludmFsaWQgZGF0ZScpIHtcbiAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUoaW5jb21pbmdEYXRlKTtcbiAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgZ2V0IHR5cGVDYWxlbmRhckVudW0oKTogdHlwZW9mIFR5cGVDYWxlbmRhckVudW0ge1xuICAgIHJldHVybiBUeXBlQ2FsZW5kYXJFbnVtO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluYSBjb21vIHNlIGRlYmUgaW5pY2lhbGl6YXIgbGEgdmlzdWFsaXphY2lvbiBkZWwgY2FsZW5kYXJcbiAgICovXG4gIGdldFN0YXJ0VmlldygpOiBzdHJpbmcge1xuICAgIC8vIG11bHRpLXllYXJcbiAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XG4gICAgICByZXR1cm4gJ211bHRpLXllYXInO1xuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5TVFJJQ1QpIHtcbiAgICAgIHJldHVybiAnbW9udGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ21vbnRoJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvcm1IYW5kbGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLlNUUklDVCkge1xuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XG4gICAgICAgICAgY29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQsIHRydWUpLmlzVmFsaWQoKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xuICAgICAgICAgIGlmICghIXJlc3VsdCAmJiAocmVzdWx0ID09PSAnSW52YWxpZCBkYXRlJyB8fCAhaXNWYWxpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghIXJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRnJvbUlucHV0RXZlbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KHJlc3VsdCwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XG4gICAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudChyZXN1bHQsIHRoaXMuZGF0ZUZvcm1hdCkudG9EYXRlKCkpO1xuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlQ2hhbmdlc1xuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YXAoKGRhdGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGUubGVuZ3RoID4gdGhpcy5kYXRlRm9ybWF0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKChkYXRlOiBzdHJpbmcpID0+IGRhdGUubGVuZ3RoID09PSB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGlzVmFsaWQ6IGJvb2xlYW4gPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCk7XG4gICAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcblxuICAgICAgICAgIGlmICghIXJlc3VsdCAmJiAocmVzdWx0ID09PSAnSW52YWxpZCBkYXRlJyB8fCAhaXNWYWxpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEhcmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGcm9tSW5wdXRFdmVudCkge1xuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICBjb25zdCBzdWJTdHJpbmc6IHN0cmluZ1tdID0gcmVzdWx0LnNwbGl0KCctJyk7XG5cbiAgICAgICAgICAgICAgY29uc3QgeWVhcjogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMF0pO1xuICAgICAgICAgICAgICBjb25zdCBtb250aDogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMV0pO1xuICAgICAgICAgICAgICBjb25zdCBkYXk6IG51bWJlciA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzJdKTtcblxuICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXREYXRlKGRheSk7XG4gICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXRNb250aChtb250aCAtIDEpOyAvLyAtMSBwb3IgcXVlIGxvcyBtZXNlcyBzZSB0b21hbiBjb21vIGxvcyBpbmRpY2VzIGVuIHVuIGFycmF5XG5cbiAgICAgICAgICAgICAgLyoqIGN1YW5kbyBlcyBkZSB0aXBvIE1PVU5USF9ZRUFSIHJldG9ybmEgZWwgdWx0aW1vIGRpYSBkZWwgbWVzIHNlbGVjY2lvbmFkbyAqL1xuICAgICAgICAgICAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG1vbWVudCh0aGlzLmRhdGUpLmVuZE9mKCdtb250aCcpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KHRoaXMuZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XG4gICAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuZGF0ZSk7XG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGluY29tbWluZ0RhdGU6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xuICAgICAgICBpZiAodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT09ICcnICYmIGluY29tbWluZ0RhdGUgIT09ICdJbnZhbGlkIGRhdGUnKSB7XG4gICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUoaW5jb21taW5nRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGx1ZWdvIHNlbGVjY2lvbmFyIHVuIG1lc1xuICAgKi9cbiAgbW9udGhTZWxlY3RlZEhhbmRsZXIoY2hvc2VuTW9udGhEYXRlOiBtb21lbnRfLk1vbWVudCwgZGF0ZXBpY2tlcjogTWF0RGF0ZXBpY2tlcjxtb21lbnRfLk1vbWVudD4pOiB2b2lkIHtcblxuICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XG4gICAgICBkYXRlcGlja2VyLmNsb3NlKCk7XG4gICAgICBjb25zdCBkYXRlOiBEYXRlID0gbW9tZW50KGNob3Nlbk1vbnRoRGF0ZSkuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XG5cbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChkYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcbiAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudG8gZGVzZGUgZWwgY29udHJvbCB0b3VjaCBkZWwgY2FsZW5kYXJcbiAgICovXG4gIGRhdGVDaGFuZ2UodHlwZTogc3RyaW5nLCBldmVudDogTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQ8RGF0ZT4pOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZXZlbnQudmFsdWUsICdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50LnZhbHVlKTtcbiAgfVxuXG4gIGdldEVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZSArIHRoaXMuZGF0ZUZvcm1hdDtcbiAgfVxuXG59XG4iXX0=