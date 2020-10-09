/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
/** @type {?} */
const moment = moment_;
import { MatDatepicker } from '@angular/material';
import { filter, tap } from 'rxjs/operators';
/** @enum {string} */
const TypeCalendarEnum = {
    NORMAL: 'norma',
    MONTH_YEAR: 'mounth-year',
    STRICT: 'strict',
};
export { TypeCalendarEnum };
export class DateHelisaComponent {
    constructor() {
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
        this.showDatePicker = false;
        this.change = new EventEmitter();
        this.isClosed = false;
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
    /**
     * @return {?}
     */
    ngOnInit() {
        moment.locale(this.locale);
        this.dateToVisualize = new FormControl('', this.dateFormControl.validator);
        this.formHandler();
        /**
         * establecer valor por defecto de la fecha
         */
        if (this.dateFormControl.value !== '' && this.dateFormControl.value !== null) {
            /** @type {?} */
            const incomingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
            if (incomingDate !== 'Invalid date') {
                this.dateToVisualize.setValue(incomingDate);
                this.dateFormControl.setValue(this.dateFormControl.value);
            }
        }
    }
    /**
     * @return {?}
     */
    get typeCalendarEnum() {
        return TypeCalendarEnum;
    }
    /**
     * @return {?}
     */
    openDatePicker() {
        if (this.showDatePicker && !this.isClosed) {
            this.isClosed = true;
            this.timeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.datePickerShow.open();
            }), 2000);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKey(event) {
        if (event.key === ' ' && this.showDatePicker) {
            this.onBlur();
            this.isClosed = true;
            this.datePickerShow.open();
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        clearTimeout(this.timeout);
        this.isClosed = false;
    }
    /**
     * Determina como se debe inicializar la visualizacion del calendar
     * @return {?}
     */
    getStartView() {
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
    }
    /**
     * @private
     * @return {?}
     */
    formHandler() {
        if (this.typeCalendar === this.typeCalendarEnum.STRICT) {
            this.dateToVisualize.valueChanges.subscribe((/**
             * @param {?} date
             * @return {?}
             */
            (date) => {
                this.invalidFormat = false;
                /** @type {?} */
                const isValid = moment(date, this.dateFormat, true).isValid();
                /** @type {?} */
                const result = moment(date, this.dateFormat).format(this.dateFormat);
                if (!!result && (result === 'Invalid date' || !isValid)) {
                    this.invalidFormat = true;
                    return;
                }
                if (!!result) {
                    if (!this.isFromInputEvent) {
                        this.isFromInputEvent = true;
                        this.dateToVisualize.setValue(moment(result, this.dateFormat).format(this.dateFormat));
                        this.dateFormControl.setValue(moment(result, this.dateFormat).toDate());
                        this.isFromInputEvent = false;
                    }
                    else {
                        setTimeout((/**
                         * @return {?}
                         */
                        () => {
                            this.isFromInputEvent = false;
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
            (date) => {
                if (date.length > this.dateFormat.length) {
                    this.invalidFormat = true;
                }
                else {
                    this.invalidFormat = false;
                }
            })), filter((/**
             * @param {?} date
             * @return {?}
             */
            (date) => date.length === this.dateFormat.length)))
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            (date) => {
                this.invalidFormat = false;
                /** @type {?} */
                const isValid = moment(date, this.dateFormat, true).isValid();
                /** @type {?} */
                const result = moment(date, this.dateFormat).format('YYYY-MM-DD');
                if (!!result && (result === 'Invalid date' || !isValid)) {
                    this.invalidFormat = true;
                    return;
                }
                if (!!result) {
                    if (!this.isFromInputEvent) {
                        this.isFromInputEvent = true;
                        /** @type {?} */
                        const subString = result.split('-');
                        /** @type {?} */
                        const year = parseFloat(subString[0]);
                        /** @type {?} */
                        const month = parseFloat(subString[1]);
                        /** @type {?} */
                        const day = parseFloat(subString[2]);
                        this.date.setFullYear(year);
                        this.date.setDate(day);
                        this.date.setMonth(month - 1); // -1 por que los meses se toman como los indices en un array
                        /** cuando es de tipo MOUNTH_YEAR retorna el ultimo dia del mes seleccionado */
                        if (this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
                            this.date = moment(this.date).endOf('month').toDate();
                        }
                        this.dateToVisualize.setValue(moment(this.date, 'YYYY-MM-DD').format(this.dateFormat));
                        this.dateFormControl.setValue(this.date);
                        this.isFromInputEvent = false;
                    }
                    else {
                        setTimeout((/**
                         * @return {?}
                         */
                        () => {
                            this.isFromInputEvent = false;
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
        (date) => {
            /** @type {?} */
            const incommingDate = moment(date, this.dateFormat).format(this.dateFormat);
            if (this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
                this.dateToVisualize.setValue(incommingDate);
            }
        }));
    }
    /**
     * Evento que se dispara luego seleccionar un mes
     * @param {?} chosenMonthDate
     * @param {?} datepicker
     * @return {?}
     */
    monthSelectedHandler(chosenMonthDate, datepicker) {
        if (this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
            datepicker.close();
            /** @type {?} */
            const date = moment(chosenMonthDate).endOf('month').toDate();
            this.dateToVisualize.setValue(moment(date, 'YYYY-MM-DD').format(this.dateFormat));
            this.dateFormControl.setValue(date);
        }
    }
    /**
     * Evento desde el control touch del calendar
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    dateChange(type, event) {
        this.dateToVisualize.setValue(moment(event.value, 'YYYY-MM-DD').format(this.dateFormat));
        this.dateFormControl.setValue(event.value);
        this.change.emit(event.value);
        this.isClosed = true;
    }
    /**
     * @return {?}
     */
    getErrorMessage() {
        return this.errorMessage + this.dateFormat;
    }
}
DateHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-date-helisa',
                template: "<div>\r\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\r\n    <input matInput\r\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\" (keydown)=\"onKey($event)\" (focus)=\"openDatePicker()\" (blur)=\"onBlur()\">\r\n\r\n\r\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\r\n      ya que el valor es diferente cuando se escribe directamente en este\r\n    -->\r\n    <input matInput\r\n    [matDatepicker]=\"picker\"\r\n    hidden=\"hide\"\r\n    [value]=\"dateToVisualize.value\"\r\n    (dateChange)=\"dateChange('change', $event)\">\r\n    <!--  -->\r\n\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\r\n\r\n  </mat-form-field>\r\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\r\n  </div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DateHelisaComponent.ctorParameters = () => [];
DateHelisaComponent.propDecorators = {
    datePickerShow: [{ type: ViewChild, args: ['picker',] }],
    floatLabel: [{ type: Input }],
    dateFormControl: [{ type: Input }],
    dateFormat: [{ type: Input }],
    locale: [{ type: Input }],
    errorMessage: [{ type: Input }],
    placeholder: [{ type: Input }],
    showDatePicker: [{ type: Input }],
    change: [{ type: Output }],
    typeCalendar: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DateHelisaComponent.prototype.datePickerShow;
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
    DateHelisaComponent.prototype.showDatePicker;
    /** @type {?} */
    DateHelisaComponent.prototype.change;
    /** @type {?} */
    DateHelisaComponent.prototype.isClosed;
    /** @type {?} */
    DateHelisaComponent.prototype.timeout;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUM1QixNQUFNLEdBQW1CLE9BQU87QUFFdEMsT0FBTyxFQUEyQixhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFJM0MsUUFBUyxPQUFPO0lBQ2hCLFlBQWEsYUFBYTtJQUMxQixRQUFTLFFBQVE7OztBQVNuQixNQUFNLE9BQU8sbUJBQW1CO0lBdUM5QjtRQXBDUyxlQUFVLEdBQWdDLE9BQU8sQ0FBQztRQUNsRCxvQkFBZSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxTQUFJLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Ozs7O1FBT3ZCLGVBQVUsR0FBVyxZQUFZLENBQUM7UUFDbEMsV0FBTSxHQUFXLElBQUksQ0FBQztRQUN0QixpQkFBWSxHQUFXLHVDQUF1QyxDQUFDO1FBQy9ELGdCQUFXLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUMvQixXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDaEUsYUFBUSxHQUFZLEtBQUssQ0FBQzs7Ozs7UUFNakIsaUJBQVksR0FBcUIsZ0JBQWdCLENBQUMsTUFBTSxDQUFD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QUFRLEVBQUUsaUJBQWlCO2dCQUMzQixxaENBQTJDOzthQUU1Qzs7Ozs7NkJBR0UsU0FBUyxTQUFDLFFBQVE7eUJBQ2xCLEtBQUs7OEJBQ0wsS0FBSzt5QkFRTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7cUJBQ0wsTUFBTTsyQkFPTixLQUFLOzs7O0lBdEJOLDZDQUF5RDs7SUFDekQseUNBQTJEOztJQUMzRCw4Q0FBNEQ7Ozs7O0lBQzVELG1DQUFnQzs7Ozs7OztJQU9oQyx5Q0FBMkM7O0lBQzNDLHFDQUErQjs7SUFDL0IsMkNBQXdFOztJQUN4RSwwQ0FBK0M7O0lBQy9DLDZDQUF5Qzs7SUFDekMscUNBQWdFOztJQUNoRSx1Q0FBMEI7O0lBQzFCLHNDQUFlOzs7Ozs7SUFLZiwyQ0FBa0U7O0lBR2xFLDhDQUE2Qjs7Ozs7O0lBSzdCLCtDQUEwQzs7Ozs7SUFLMUMsNENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50OiB0eXBlb2YgbW9tZW50XyA9IG1vbWVudF87XHJcblxyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VySW5wdXRFdmVudCwgTWF0RGF0ZXBpY2tlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBUaW1lciA9IE5vZGVKUy5UaW1lcjtcclxuXHJcbmV4cG9ydCBlbnVtIFR5cGVDYWxlbmRhckVudW0ge1xyXG4gIE5PUk1BTCA9ICdub3JtYScsXHJcbiAgTU9OVEhfWUVBUiA9ICdtb3VudGgteWVhcicsXHJcbiAgU1RSSUNUID0gJ3N0cmljdCdcclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWRhdGUtaGVsaXNhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdwaWNrZXInKSBkYXRlUGlja2VyU2hvdzogTWF0RGF0ZXBpY2tlcjxEYXRlPjtcclxuICBASW5wdXQoKSBmbG9hdExhYmVsOiAnbmV2ZXInIHwgJ2Fsd2F5cycgfCAnYXV0bycgPSAnbmV2ZXInO1xyXG4gIEBJbnB1dCgpIGRhdGVGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIHByaXZhdGUgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdG8gZGUgZmVjaGEuXHJcbiAgICogTG9zIGZvcm1hdG9zIHZhbGlkb3Mgc29uIGFxdWVsbG9zIHF1ZSBtYW5lamEgbGEgbGlicmVyaWEgbW9tZW50anMgeSBlc3RlOiAnREQgW2RlXSBNTU1NIFtkZV0gWVlZWSdcclxuICAgKiBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvcGFyc2luZy9zdHJpbmctZm9ybWF0L1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdERC9NTS9ZWVlZJztcclxuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZyA9ICdlcyc7XHJcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnTGEgZmVjaGEgbm8gY29uY3VlcmRhIGNvbiBlbCBmb3JtYXRvICc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9IHRoaXMuZGF0ZUZvcm1hdDtcclxuICBASW5wdXQoKSBzaG93RGF0ZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICBpc0Nsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRpbWVvdXQ6IFRpbWVyO1xyXG4gIC8qKlxyXG4gICAqIFNpIGVzdGUgdmFsb3IgZXMgZGlmZXJlbnRlIGEgVHlwZUNhbGVuZGFyRW51bS5OT1JNQUwgbm9cclxuICAgKiBzZXLDoSB0b21hZG8gZW4gY3VlbnRhXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZUNhbGVuZGFyOiBUeXBlQ2FsZW5kYXJFbnVtID0gVHlwZUNhbGVuZGFyRW51bS5OT1JNQUw7XHJcblxyXG5cclxuICBkYXRlVG9WaXN1YWxpemU6IEZvcm1Db250cm9sO1xyXG5cclxuICAvKipcclxuICAgKiBQYXJhIGV2aXRhciBudWV2b3MgZXZlbnRvcyBtaWVzdHJhcyBzZSByZWFsaXphIGVsIHBhcnNlb1xyXG4gICAqL1xyXG4gIHByaXZhdGUgaXNGcm9tSW5wdXRFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBWZXJpZmljYXIgc2kgZWwgZm9ybWF0byBlcyB2YWxpZG9cclxuICAgKi9cclxuICBpbnZhbGlkRm9ybWF0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qXHJcbiAgKiBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIgPSAnTU0vWVlZWSdcclxuICAqIFR5cGVDYWxlbmRhckVudW0uU1RSSUNUID0gJ0REIFtkZV0gTU1NTSBbZGVdIFlZWVknXHJcbiAgKiAqL1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgbW9tZW50LmxvY2FsZSh0aGlzLmxvY2FsZSk7XHJcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZSA9IG5ldyBGb3JtQ29udHJvbCgnJywgdGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsaWRhdG9yKTtcclxuICAgIHRoaXMuZm9ybUhhbmRsZXIoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGVzdGFibGVjZXIgdmFsb3IgcG9yIGRlZmVjdG8gZGUgbGEgZmVjaGFcclxuICAgICAqL1xyXG4gICAgaWYgKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9PSAnJyAmJiB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBpbmNvbWluZ0RhdGU6IHN0cmluZyA9IG1vbWVudCh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcclxuICAgICAgaWYgKGluY29taW5nRGF0ZSAhPT0gJ0ludmFsaWQgZGF0ZScpIHtcclxuICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShpbmNvbWluZ0RhdGUpO1xyXG4gICAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldCB0eXBlQ2FsZW5kYXJFbnVtKCk6IHR5cGVvZiBUeXBlQ2FsZW5kYXJFbnVtIHtcclxuICAgIHJldHVybiBUeXBlQ2FsZW5kYXJFbnVtO1xyXG4gIH1cclxuXHJcbiAgb3BlbkRhdGVQaWNrZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaG93RGF0ZVBpY2tlciAmJiAhdGhpcy5pc0Nsb3NlZCkge1xyXG4gICAgICB0aGlzLmlzQ2xvc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyU2hvdy5vcGVuKCk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICcgJyAmJiB0aGlzLnNob3dEYXRlUGlja2VyKSB7XHJcbiAgICAgIHRoaXMub25CbHVyKCk7XHJcbiAgICAgIHRoaXMuaXNDbG9zZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTaG93Lm9wZW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cigpOiB2b2lkIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgdGhpcy5pc0Nsb3NlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5hIGNvbW8gc2UgZGViZSBpbmljaWFsaXphciBsYSB2aXN1YWxpemFjaW9uIGRlbCBjYWxlbmRhclxyXG4gICAqL1xyXG4gIGdldFN0YXJ0VmlldygpOiBzdHJpbmcge1xyXG4gICAgLy8gbXVsdGkteWVhclxyXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xyXG4gICAgICByZXR1cm4gJ211bHRpLXllYXInO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLlNUUklDVCkge1xyXG4gICAgICByZXR1cm4gJ21vbnRoJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnbW9udGgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtSGFuZGxlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLlNUUklDVCkge1xyXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQsIHRydWUpLmlzVmFsaWQoKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICBpZiAoISFyZXN1bHQgJiYgKHJlc3VsdCA9PT0gJ0ludmFsaWQgZGF0ZScgfHwgIWlzVmFsaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghIXJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGcm9tSW5wdXRFdmVudCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KHJlc3VsdCwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUobW9tZW50KHJlc3VsdCwgdGhpcy5kYXRlRm9ybWF0KS50b0RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFwKChkYXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGUubGVuZ3RoID4gdGhpcy5kYXRlRm9ybWF0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgZmlsdGVyKChkYXRlOiBzdHJpbmcpID0+IGRhdGUubGVuZ3RoID09PSB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQsIHRydWUpLmlzVmFsaWQoKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcblxyXG4gICAgICAgICAgaWYgKCEhcmVzdWx0ICYmIChyZXN1bHQgPT09ICdJbnZhbGlkIGRhdGUnIHx8ICFpc1ZhbGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCEhcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Zyb21JbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBjb25zdCBzdWJTdHJpbmc6IHN0cmluZ1tdID0gcmVzdWx0LnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHllYXI6IG51bWJlciA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzBdKTtcclxuICAgICAgICAgICAgICBjb25zdCBtb250aDogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMV0pO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRheTogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMl0pO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0RnVsbFllYXIoeWVhcik7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldERhdGUoZGF5KTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0TW9udGgobW9udGggLSAxKTsgLy8gLTEgcG9yIHF1ZSBsb3MgbWVzZXMgc2UgdG9tYW4gY29tbyBsb3MgaW5kaWNlcyBlbiB1biBhcnJheVxyXG5cclxuICAgICAgICAgICAgICAvKiogY3VhbmRvIGVzIGRlIHRpcG8gTU9VTlRIX1lFQVIgcmV0b3JuYSBlbCB1bHRpbW8gZGlhIGRlbCBtZXMgc2VsZWNjaW9uYWRvICovXHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG1vbWVudCh0aGlzLmRhdGUpLmVuZE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KHRoaXMuZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlKTtcclxuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZUNoYW5nZXNcclxuICAgICAgLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5jb21taW5nRGF0ZTogc3RyaW5nID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9PSAnJyAmJiBpbmNvbW1pbmdEYXRlICE9PSAnSW52YWxpZCBkYXRlJykge1xyXG4gICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUoaW5jb21taW5nRGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgbHVlZ28gc2VsZWNjaW9uYXIgdW4gbWVzXHJcbiAgICovXHJcbiAgbW9udGhTZWxlY3RlZEhhbmRsZXIoY2hvc2VuTW9udGhEYXRlOiBtb21lbnRfLk1vbWVudCwgZGF0ZXBpY2tlcjogTWF0RGF0ZXBpY2tlcjxtb21lbnRfLk1vbWVudD4pOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xyXG4gICAgICBkYXRlcGlja2VyLmNsb3NlKCk7XHJcbiAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSBtb21lbnQoY2hvc2VuTW9udGhEYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcclxuXHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChkYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcclxuICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gZGVzZGUgZWwgY29udHJvbCB0b3VjaCBkZWwgY2FsZW5kYXJcclxuICAgKi9cclxuICBkYXRlQ2hhbmdlKHR5cGU6IHN0cmluZywgZXZlbnQ6IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50PERhdGU+KTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZXZlbnQudmFsdWUsICdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xyXG4gICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZXZlbnQudmFsdWUpO1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudC52YWx1ZSk7XHJcbiAgICB0aGlzLmlzQ2xvc2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlICsgdGhpcy5kYXRlRm9ybWF0O1xyXG4gIH1cclxuXHJcbn1cclxuIl19