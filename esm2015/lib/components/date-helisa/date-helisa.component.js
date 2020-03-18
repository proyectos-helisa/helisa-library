/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
/** @type {?} */
const moment = moment_;
import { filter, tap } from 'rxjs/operators';
/** @enum {string} */
const TypeCalendarEnum = {
    NORMAL: 'norma',
    MONTH_YEAR: 'mounth-year',
};
export { TypeCalendarEnum };
export class DateHelisaComponent {
    constructor() {
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
    ngOnInit() {
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
        const incommingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
        if (this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
            this.dateToVisualize.setValue(incommingDate);
        }
    }
    /**
     * @return {?}
     */
    get typeCalendarEnum() {
        return TypeCalendarEnum;
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
        else {
            return 'month';
        }
    }
    /**
     * @private
     * @return {?}
     */
    formHandler() {
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
                template: "<div>\r\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\r\n    <input matInput \r\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\" readonly>\r\n    \r\n    \r\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar \r\n      ya que el valor es diferente cuando se escribe directamente en este\r\n    -->\r\n    <input matInput \r\n    [matDatepicker]=\"picker\" \r\n    hidden=\"hide\" \r\n    [value]=\"dateToVisualize.value\" \r\n    (dateChange)=\"dateChange('change', $event)\">\r\n    <!--  -->\r\n  \r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\r\n    \r\n  </mat-form-field>\r\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\r\n  </div>",
                styles: [""]
            }] }
];
/** @nocollapse */
DateHelisaComponent.ctorParameters = () => [];
DateHelisaComponent.propDecorators = {
    floatLabel: [{ type: Input }],
    dateFormControl: [{ type: Input }],
    dateFormat: [{ type: Input }],
    errorMessage: [{ type: Input }],
    placeholder: [{ type: Input }],
    typeCalendar: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUM1QixNQUFNLEdBQW1CLE9BQU87QUFHdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBSTNDLFFBQVMsT0FBTztJQUNoQixZQUFhLGFBQWE7OztBQVM1QixNQUFNLE9BQU8sbUJBQW1CO0lBbUM5QjtRQWhDUyxlQUFVLEdBQWdDLE9BQU8sQ0FBQztRQUNsRCxvQkFBZSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxTQUFJLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Ozs7O1FBT3ZCLGVBQVUsR0FBVyxZQUFZLENBQUM7UUFDbEMsaUJBQVksR0FBVyx1Q0FBdUMsQ0FBQztRQUMvRCxnQkFBVyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7O1FBTXRDLGlCQUFZLEdBQXFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzs7OztRQVExRCxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7Ozs7UUFLMUMsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFFZixDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVu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L0MsMkNBQWtFOztJQUdsRSw4Q0FBNkI7Ozs7OztJQUs3QiwrQ0FBMEM7Ozs7O0lBSzFDLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50OiB0eXBlb2YgbW9tZW50XyA9IG1vbWVudF87XHJcblxyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VySW5wdXRFdmVudCwgTWF0RGF0ZXBpY2tlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gVHlwZUNhbGVuZGFyRW51bSB7XHJcbiAgTk9STUFMID0gJ25vcm1hJyxcclxuICBNT05USF9ZRUFSID0gJ21vdW50aC15ZWFyJ1xyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtZGF0ZS1oZWxpc2EnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1oZWxpc2EuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBASW5wdXQoKSBmbG9hdExhYmVsOiAnbmV2ZXInIHwgJ2Fsd2F5cycgfCAnYXV0bycgPSAnbmV2ZXInO1xyXG4gIEBJbnB1dCgpIGRhdGVGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIHByaXZhdGUgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdG8gZGUgZmVjaGEuXHJcbiAgICogTG9zIGZvcm1hdG9zIHZhbGlkb3Mgc29uIGFxdWVsbG9zIHF1ZSBtYW5lamEgbGEgbGlicmVyaWEgbW9tZW50anNcclxuICAgKiBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvcGFyc2luZy9zdHJpbmctZm9ybWF0L1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdERC9NTS9ZWVlZJztcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICdMYSBmZWNoYSBubyBjb25jdWVyZGEgY29uIGVsIGZvcm1hdG8gJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gdGhpcy5kYXRlRm9ybWF0O1xyXG5cclxuICAvKipcclxuICAgKiBTaSBlc3RlIHZhbG9yIGVzIGRpZmVyZW50ZSBhIFR5cGVDYWxlbmRhckVudW0uTk9STUFMIG5vXHJcbiAgICogc2Vyw6EgdG9tYWRvIGVuIGN1ZW50YVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVDYWxlbmRhcjogVHlwZUNhbGVuZGFyRW51bSA9IFR5cGVDYWxlbmRhckVudW0uTk9STUFMO1xyXG5cclxuXHJcbiAgZGF0ZVRvVmlzdWFsaXplOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgLyoqXHJcbiAgICogUGFyYSBldml0YXIgbnVldm9zIGV2ZW50b3MgbWllc3RyYXMgc2UgcmVhbGl6YSBlbCBwYXJzZW9cclxuICAgKi9cclxuICBwcml2YXRlIGlzRnJvbUlucHV0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpY2FyIHNpIGVsIGZvcm1hdG8gZXMgdmFsaWRvXHJcbiAgICovXHJcbiAgaW52YWxpZEZvcm1hdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplID0gbmV3IEZvcm1Db250cm9sKCcnLCB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWxpZGF0b3IpO1xyXG4gICAgdGhpcy5mb3JtSGFuZGxlcigpO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XHJcbiAgICAgIHRoaXMuZGF0ZUZvcm1hdCA9ICdNTS9ZWVlZJztcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMuZGF0ZUZvcm1hdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGVzdGFibGVjZXIgdmFsb3IgcG9yIGRlZmVjdG8gZGUgbGEgZmVjaGFcclxuICAgICAqL1xyXG4gICAgY29uc3QgaW5jb21taW5nRGF0ZTogc3RyaW5nID0gbW9tZW50KHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xyXG4gICAgaWYgKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9PSAnJyAmJiBpbmNvbW1pbmdEYXRlICE9PSAnSW52YWxpZCBkYXRlJykge1xyXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShpbmNvbW1pbmdEYXRlKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZUNhbGVuZGFyRW51bSgpOiB0eXBlb2YgVHlwZUNhbGVuZGFyRW51bSB7XHJcbiAgICByZXR1cm4gVHlwZUNhbGVuZGFyRW51bTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluYSBjb21vIHNlIGRlYmUgaW5pY2lhbGl6YXIgbGEgdmlzdWFsaXphY2lvbiBkZWwgY2FsZW5kYXJcclxuICAgKi9cclxuICBnZXRTdGFydFZpZXcoKTogc3RyaW5nIHtcclxuICAgIC8vIG11bHRpLXllYXJcclxuICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcclxuICAgICAgcmV0dXJuICdtdWx0aS15ZWFyJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnbW9udGgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtSGFuZGxlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoKGRhdGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGUubGVuZ3RoID4gdGhpcy5kYXRlRm9ybWF0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmlsdGVyKChkYXRlOiBzdHJpbmcpID0+IGRhdGUubGVuZ3RoID09PSB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQ6IGJvb2xlYW4gPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuXHJcbiAgICAgICAgaWYgKCEhcmVzdWx0ICYmIChyZXN1bHQgPT09ICdJbnZhbGlkIGRhdGUnIHx8ICFpc1ZhbGlkKSkge1xyXG4gICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIXJlc3VsdCkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmlzRnJvbUlucHV0RXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc3ViU3RyaW5nOiBzdHJpbmdbXSA9IHJlc3VsdC5zcGxpdCgnLScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeWVhcjogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCBtb250aDogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXk6IG51bWJlciA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzJdKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRlLnNldERhdGUoZGF5KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7IC8vIC0xIHBvciBxdWUgbG9zIG1lc2VzIHNlIHRvbWFuIGNvbW8gbG9zIGluZGljZXMgZW4gdW4gYXJyYXlcclxuXHJcbiAgICAgICAgICAgIC8qKiBjdWFuZG8gZXMgZGUgdGlwbyBNT1VOVEhfWUVBUiByZXRvcm5hIGVsIHVsdGltbyBkaWEgZGVsIG1lcyBzZWxlY2Npb25hZG8gKi9cclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGUgPSBtb21lbnQodGhpcy5kYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KHRoaXMuZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuZGF0ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluY29tbWluZ0RhdGU6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPT0gJycgJiYgaW5jb21taW5nRGF0ZSAhPT0gJ0ludmFsaWQgZGF0ZScpIHtcclxuICAgICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKGluY29tbWluZ0RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGx1ZWdvIHNlbGVjY2lvbmFyIHVuIG1lc1xyXG4gICAqL1xyXG4gIG1vbnRoU2VsZWN0ZWRIYW5kbGVyKGNob3Nlbk1vbnRoRGF0ZTogbW9tZW50Xy5Nb21lbnQsIGRhdGVwaWNrZXI6IE1hdERhdGVwaWNrZXI8bW9tZW50Xy5Nb21lbnQ+KTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcclxuICAgICAgZGF0ZXBpY2tlci5jbG9zZSgpO1xyXG4gICAgICBjb25zdCBkYXRlOiBEYXRlID0gbW9tZW50KGNob3Nlbk1vbnRoRGF0ZSkuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcblxyXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XHJcbiAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKGRhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIGRlc2RlIGVsIGNvbnRyb2wgdG91Y2ggZGVsIGNhbGVuZGFyXHJcbiAgICovXHJcbiAgZGF0ZUNoYW5nZSh0eXBlOiBzdHJpbmcsIGV2ZW50OiBNYXREYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPik6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChldmVudC52YWx1ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XHJcbiAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRFcnJvck1lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZSArIHRoaXMuZGF0ZUZvcm1hdDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==