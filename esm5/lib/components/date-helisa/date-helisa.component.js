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
        if (this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
            this.dateFormat = 'MM/YYYY';
            this.placeholder = this.dateFormat;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUM1QixNQUFNLEdBQW1CLE9BQU87QUFHdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBSTNDLFFBQVMsT0FBTztJQUNoQixZQUFhLGFBQWE7OztBQUk1QjtJQXdDRTtRQWhDUyxlQUFVLEdBQWdDLE9BQU8sQ0FBQztRQUNsRCxvQkFBZSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxTQUFJLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Ozs7O1FBT3ZCLGVBQVUsR0FBVyxZQUFZLENBQUM7UUFDbEMsaUJBQVksR0FBVyx1Q0FBdUMsQ0FBQztRQUMvRCxnQkFBVyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7O1FBTXRDLGlCQUFZLEdBQXFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzs7OztRQVExRCxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7Ozs7UUFLMUMsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFFZixDQUFDOzs7O0lBRWpCLHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksSUFB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QkFBbUI7OztJQUc5Qix5Q0FBMkQ7O0lBQzNELDhDQUE0RDs7Ozs7SUFDNUQsbUNBQWdDOzs7Ozs7O0lBT2hDLHlDQUEyQzs7SUFDM0MsMkNBQXdFOztJQUN4RSwwQ0FBK0M7Ozs7OztJQU0vQywyQ0FBa0U7O0lBR2xFLDhDQUE2Qjs7Ozs7O0lBSzdCLCtDQUEwQzs7Ozs7SUFLMUMsNENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBtb21lbnQ6IHR5cGVvZiBtb21lbnRfID0gbW9tZW50XztcclxuXHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50LCBNYXREYXRlcGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5leHBvcnQgZW51bSBUeXBlQ2FsZW5kYXJFbnVtIHtcclxuICBOT1JNQUwgPSAnbm9ybWEnLFxyXG4gIE1PTlRIX1lFQVIgPSAnbW91bnRoLXllYXInXHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1kYXRlLWhlbGlzYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXRlLWhlbGlzYS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIEBJbnB1dCgpIGZsb2F0TGFiZWw6ICduZXZlcicgfCAnYWx3YXlzJyB8ICdhdXRvJyA9ICduZXZlcic7XHJcbiAgQElucHV0KCkgZGF0ZUZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgcHJpdmF0ZSBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9ybWF0byBkZSBmZWNoYS5cclxuICAgKiBMb3MgZm9ybWF0b3MgdmFsaWRvcyBzb24gYXF1ZWxsb3MgcXVlIG1hbmVqYSBsYSBsaWJyZXJpYSBtb21lbnRqc1xyXG4gICAqIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9wYXJzaW5nL3N0cmluZy1mb3JtYXQvXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0ZUZvcm1hdDogc3RyaW5nID0gJ0REL01NL1lZWVknO1xyXG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJ0xhIGZlY2hhIG5vIGNvbmN1ZXJkYSBjb24gZWwgZm9ybWF0byAnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSB0aGlzLmRhdGVGb3JtYXQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpIGVzdGUgdmFsb3IgZXMgZGlmZXJlbnRlIGEgVHlwZUNhbGVuZGFyRW51bS5OT1JNQUwgbm9cclxuICAgKiBzZXLDoSB0b21hZG8gZW4gY3VlbnRhXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZUNhbGVuZGFyOiBUeXBlQ2FsZW5kYXJFbnVtID0gVHlwZUNhbGVuZGFyRW51bS5OT1JNQUw7XHJcblxyXG5cclxuICBkYXRlVG9WaXN1YWxpemU6IEZvcm1Db250cm9sO1xyXG5cclxuICAvKipcclxuICAgKiBQYXJhIGV2aXRhciBudWV2b3MgZXZlbnRvcyBtaWVzdHJhcyBzZSByZWFsaXphIGVsIHBhcnNlb1xyXG4gICAqL1xyXG4gIHByaXZhdGUgaXNGcm9tSW5wdXRFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBWZXJpZmljYXIgc2kgZWwgZm9ybWF0byBlcyB2YWxpZG9cclxuICAgKi9cclxuICBpbnZhbGlkRm9ybWF0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUgPSBuZXcgRm9ybUNvbnRyb2woJycsIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbGlkYXRvcik7XHJcbiAgICB0aGlzLmZvcm1IYW5kbGVyKCk7XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcclxuICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gJ01NL1lZWVknO1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5kYXRlRm9ybWF0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZXN0YWJsZWNlciB2YWxvciBwb3IgZGVmZWN0byBkZSBsYSBmZWNoYVxyXG4gICAgICovXHJcbiAgICBjb25zdCBpbmNvbW1pbmdEYXRlOiBzdHJpbmcgPSBtb21lbnQodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XHJcbiAgICBpZiAodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT09ICcnICYmIGluY29tbWluZ0RhdGUgIT09ICdJbnZhbGlkIGRhdGUnKSB7XHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKGluY29tbWluZ0RhdGUpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldCB0eXBlQ2FsZW5kYXJFbnVtKCk6IHR5cGVvZiBUeXBlQ2FsZW5kYXJFbnVtIHtcclxuICAgIHJldHVybiBUeXBlQ2FsZW5kYXJFbnVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5hIGNvbW8gc2UgZGViZSBpbmljaWFsaXphciBsYSB2aXN1YWxpemFjaW9uIGRlbCBjYWxlbmRhclxyXG4gICAqL1xyXG4gIGdldFN0YXJ0VmlldygpOiBzdHJpbmcge1xyXG4gICAgLy8gbXVsdGkteWVhclxyXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xyXG4gICAgICByZXR1cm4gJ211bHRpLXllYXInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdtb250aCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcCgoZGF0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0ZS5sZW5ndGggPiB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBmaWx0ZXIoKGRhdGU6IHN0cmluZykgPT4gZGF0ZS5sZW5ndGggPT09IHRoaXMuZGF0ZUZvcm1hdC5sZW5ndGgpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQsIHRydWUpLmlzVmFsaWQoKTtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG5cclxuICAgICAgICBpZiAoISFyZXN1bHQgJiYgKHJlc3VsdCA9PT0gJ0ludmFsaWQgZGF0ZScgfHwgIWlzVmFsaWQpKSB7XHJcbiAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEhcmVzdWx0KSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuaXNGcm9tSW5wdXRFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJTdHJpbmc6IHN0cmluZ1tdID0gcmVzdWx0LnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1swXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheTogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMl0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGUuc2V0RGF0ZShkYXkpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGUuc2V0TW9udGgobW9udGggLSAxKTsgLy8gLTEgcG9yIHF1ZSBsb3MgbWVzZXMgc2UgdG9tYW4gY29tbyBsb3MgaW5kaWNlcyBlbiB1biBhcnJheVxyXG5cclxuICAgICAgICAgICAgLyoqIGN1YW5kbyBlcyBkZSB0aXBvIE1PVU5USF9ZRUFSIHJldG9ybmEgZWwgdWx0aW1vIGRpYSBkZWwgbWVzIHNlbGVjY2lvbmFkbyAqL1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG1vbWVudCh0aGlzLmRhdGUpLmVuZE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZUNoYW5nZXNcclxuICAgICAgLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5jb21taW5nRGF0ZTogc3RyaW5nID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9PSAnJyAmJiBpbmNvbW1pbmdEYXRlICE9PSAnSW52YWxpZCBkYXRlJykge1xyXG4gICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUoaW5jb21taW5nRGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgbHVlZ28gc2VsZWNjaW9uYXIgdW4gbWVzXHJcbiAgICovXHJcbiAgbW9udGhTZWxlY3RlZEhhbmRsZXIoY2hvc2VuTW9udGhEYXRlOiBtb21lbnRfLk1vbWVudCwgZGF0ZXBpY2tlcjogTWF0RGF0ZXBpY2tlcjxtb21lbnRfLk1vbWVudD4pOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xyXG4gICAgICBkYXRlcGlja2VyLmNsb3NlKCk7XHJcbiAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSBtb21lbnQoY2hvc2VuTW9udGhEYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcclxuXHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChkYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcclxuICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gZGVzZGUgZWwgY29udHJvbCB0b3VjaCBkZWwgY2FsZW5kYXJcclxuICAgKi9cclxuICBkYXRlQ2hhbmdlKHR5cGU6IHN0cmluZywgZXZlbnQ6IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50PERhdGU+KTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KGV2ZW50LnZhbHVlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcclxuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKGV2ZW50LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlICsgdGhpcy5kYXRlRm9ybWF0O1xyXG4gIH1cclxuXHJcbn1cclxuIl19