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
        if (this.typeCalendar == TypeCalendarEnum.MONTH_YEAR) {
            this.dateFormat = 'MM/YYYY';
            this.placeholder = this.dateFormat;
        }
        this.formHandler();
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
        //multi-year
        if (this.typeCalendar == this.typeCalendarEnum.MONTH_YEAR) {
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
        date => {
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
        date => date.length == this.dateFormat.length)))
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        date => {
            this.invalidFormat = false;
            /** @type {?} */
            let isValid = moment(date, this.dateFormat, true).isValid();
            /** @type {?} */
            let result = moment(date, this.dateFormat).format('YYYY-MM-DD');
            if (!!result && (result == 'Invalid date' || !isValid)) {
                this.invalidFormat = true;
                return;
            }
            if (!!result) {
                if (!this.isFromInputEvent) {
                    this.isFromInputEvent = true;
                    /** @type {?} */
                    let subString = result.split('-');
                    /** @type {?} */
                    let year = parseFloat(subString[0]);
                    /** @type {?} */
                    let month = parseFloat(subString[1]);
                    /** @type {?} */
                    let day = parseFloat(subString[2]);
                    this.date.setFullYear(year);
                    this.date.setDate(day);
                    this.date.setMonth(month - 1); // -1 por que los meses se toman como los indices en un array
                    /** cuando es de tipo MOUNTH_YEAR retorna el ultimo dia del mes seleccionado */
                    if (this.typeCalendar == TypeCalendarEnum.MONTH_YEAR) {
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
    /**
     * Evento que se dispara luego seleccionar un mes
     * @param {?} chosenMonthDate
     * @param {?} datepicker
     * @return {?}
     */
    monthSelectedHandler(chosenMonthDate, datepicker) {
        if (this.typeCalendar == TypeCalendarEnum.MONTH_YEAR) {
            datepicker.close();
            /** @type {?} */
            let date = moment(chosenMonthDate).endOf('month').toDate();
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
                template: "<div>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput \r\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\">\r\n    \r\n    \r\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar \r\n      ya que el valor es diferente cuando se escribe directamente en este\r\n    -->\r\n    <input matInput \r\n    [matDatepicker]=\"picker\" \r\n    hidden=\"hide\" \r\n    [value]=\"dateToVisualize.value\" \r\n    (dateChange)=\"dateChange('change', $event)\">\r\n    <!--  -->\r\n  \r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\r\n    \r\n  </mat-form-field>\r\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\r\n  </div>",
                styles: [""]
            }] }
];
/** @nocollapse */
DateHelisaComponent.ctorParameters = () => [];
DateHelisaComponent.propDecorators = {
    dateFormControl: [{ type: Input }],
    dateFormat: [{ type: Input }],
    errorMessage: [{ type: Input }],
    placeholder: [{ type: Input }],
    typeCalendar: [{ type: Input }]
};
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUM1QixNQUFNLEdBQUcsT0FBTztBQUd0QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFJM0MsUUFBUyxPQUFPO0lBQ2hCLFlBQWEsYUFBYTs7O0FBUzVCLE1BQU0sT0FBTyxtQkFBbUI7SUFtQzlCO1FBL0JTLG9CQUFlLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELFNBQUksR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDOzs7Ozs7UUFPdEIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixpQkFBWSxHQUFHLHVDQUF1QyxDQUFDO1FBQ3ZELGdCQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7UUFNOUIsaUJBQVksR0FBb0IsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOzs7O1FBUXpELHFCQUFnQixHQUFVLEtBQUssQ0FBQzs7OztRQUt4QyxrQkFBYSxHQUFXLEtBQUssQ0FBQztJQUVkLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFeEUsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBQztZQUNsRCxJQUFJ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LGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLEdBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUMzQyxDQUFDOzs7WUF4SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDQ3QkFBMkM7O2FBRTVDOzs7Ozs4QkFLRSxLQUFLO3lCQVFMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQU1MLEtBQUs7Ozs7SUFoQk4sOENBQTREOzs7OztJQUM1RCxtQ0FBK0I7Ozs7Ozs7SUFPL0IseUNBQW1DOztJQUNuQywyQ0FBZ0U7O0lBQ2hFLDBDQUF1Qzs7Ozs7O0lBTXZDLDJDQUFpRTs7SUFHakUsOENBQTRCOzs7Ozs7SUFLNUIsK0NBQXdDOzs7OztJQUt4Qyw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VySW5wdXRFdmVudCwgTWF0RGF0ZXBpY2tlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gVHlwZUNhbGVuZGFyRW51bXtcclxuICBOT1JNQUwgPSAnbm9ybWEnLFxyXG4gIE1PTlRIX1lFQVIgPSAnbW91bnRoLXllYXInXHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1kYXRlLWhlbGlzYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXRlLWhlbGlzYS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuXHJcbiAgXHJcbiAgQElucHV0KCkgZGF0ZUZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgcHJpdmF0ZSBkYXRlOkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAvKipcclxuICAgKiBGb3JtYXRvIGRlIGZlY2hhLlxyXG4gICAqIExvcyBmb3JtYXRvcyB2YWxpZG9zIHNvbiBhcXVlbGxvcyBxdWUgbWFuZWphIGxhIGxpYnJlcmlhIG1vbWVudGpzICBcclxuICAgKiBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvcGFyc2luZy9zdHJpbmctZm9ybWF0L1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQgPSAnREQvTU0vWVlZWSc7XHJcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlID0gJ0xhIGZlY2hhIG5vIGNvbmN1ZXJkYSBjb24gZWwgZm9ybWF0byAnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gdGhpcy5kYXRlRm9ybWF0O1xyXG5cclxuICAvKipcclxuICAgKiBTaSBlc3RlIHZhbG9yIGVzIGRpZmVyZW50ZSBhIFR5cGVDYWxlbmRhckVudW0uTk9STUFMIG5vXHJcbiAgICogc2Vyw6EgdG9tYWRvIGVuIGN1ZW50YVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVDYWxlbmRhcjpUeXBlQ2FsZW5kYXJFbnVtID0gVHlwZUNhbGVuZGFyRW51bS5OT1JNQUw7XHJcbiAgXHJcblxyXG4gIGRhdGVUb1Zpc3VhbGl6ZTpGb3JtQ29udHJvbDtcclxuXHJcbiAgLyoqXHJcbiAgICogUGFyYSBldml0YXIgbnVldm9zIGV2ZW50b3MgbWllc3RyYXMgc2UgcmVhbGl6YSBlbCBwYXJzZW9cclxuICAgKi9cclxuICBwcml2YXRlIGlzRnJvbUlucHV0RXZlbnQ6Ym9vbGVhbj0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWNhciBzaSBlbCBmb3JtYXRvIGVzIHZhbGlkb1xyXG4gICAqL1xyXG4gIGludmFsaWRGb3JtYXQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgICAgICAgIFxyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemU9IG5ldyBGb3JtQ29udHJvbCgnJyx0aGlzLmRhdGVGb3JtQ29udHJvbC52YWxpZGF0b3IpXHJcblxyXG4gICAgaWYodGhpcy50eXBlQ2FsZW5kYXIgPT0gVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKXtcclxuICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gJ01NL1lZWVknXHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLmRhdGVGb3JtYXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuZm9ybUhhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCB0eXBlQ2FsZW5kYXJFbnVtKCl7XHJcbiAgICByZXR1cm4gVHlwZUNhbGVuZGFyRW51bTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluYSBjb21vIHNlIGRlYmUgaW5pY2lhbGl6YXIgbGEgdmlzdWFsaXphY2lvbiBkZWwgY2FsZW5kYXJcclxuICAgKi9cclxuICBnZXRTdGFydFZpZXcoKTpzdHJpbmd7XHJcbiAgICAvL211bHRpLXllYXJcclxuICAgIGlmKHRoaXMudHlwZUNhbGVuZGFyID09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKXtcclxuICAgICAgcmV0dXJuICdtdWx0aS15ZWFyJztcclxuICAgIH1lbHNle1xyXG4gICAgICByZXR1cm4gJ21vbnRoJztcclxuICAgIH0gICAgXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1IYW5kbGVyKCl7XHJcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS52YWx1ZUNoYW5nZXNcclxuICAgIC5waXBlKFxyXG4gICAgICB0YXAoZGF0ZSA9PiB7ICAgICAgICBcclxuICAgICAgICBpZihkYXRlLmxlbmd0aCA+IHRoaXMuZGF0ZUZvcm1hdC5sZW5ndGgpe1xyXG4gICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZVxyXG4gICAgICAgIH1lbHNle3RoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlfVxyXG4gICAgICB9KSxcclxuICAgICAgZmlsdGVyKGRhdGUgPT4gZGF0ZS5sZW5ndGggPT0gdGhpcy5kYXRlRm9ybWF0Lmxlbmd0aClcclxuICAgICkgICAgXHJcbiAgICAuc3Vic2NyaWJlKGRhdGU9PnsgICAgICAgICBcclxuICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XHJcbiAgICAgIGxldCBpc1ZhbGlkID0gbW9tZW50KGRhdGUsdGhpcy5kYXRlRm9ybWF0LHRydWUpLmlzVmFsaWQoKVxyXG4gICAgICBsZXQgcmVzdWx0ID0gbW9tZW50KGRhdGUsdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBpZighIXJlc3VsdCAmJiAocmVzdWx0ID09ICdJbnZhbGlkIGRhdGUnIHx8ICFpc1ZhbGlkKSl7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoISFyZXN1bHQgKXsgICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLmlzRnJvbUlucHV0RXZlbnQpeyAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICBsZXQgc3ViU3RyaW5nOnN0cmluZ1tdID0gcmVzdWx0LnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgbGV0IHllYXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1swXSlcclxuICAgICAgICAgIGxldCBtb250aCA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzFdKVxyXG4gICAgICAgICAgbGV0IGRheSA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzJdKVxyXG5cclxuICAgICAgICAgIHRoaXMuZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKVxyXG4gICAgICAgICAgdGhpcy5kYXRlLnNldERhdGUoZGF5KVxyXG4gICAgICAgICAgdGhpcy5kYXRlLnNldE1vbnRoKG1vbnRoIC0gMSkgLy8gLTEgcG9yIHF1ZSBsb3MgbWVzZXMgc2UgdG9tYW4gY29tbyBsb3MgaW5kaWNlcyBlbiB1biBhcnJheVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvKiogY3VhbmRvIGVzIGRlIHRpcG8gTU9VTlRIX1lFQVIgcmV0b3JuYSBlbCB1bHRpbW8gZGlhIGRlbCBtZXMgc2VsZWNjaW9uYWRvICovXHJcbiAgICAgICAgICBpZih0aGlzLnR5cGVDYWxlbmRhciA9PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpe1xyXG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBtb21lbnQodGhpcy5kYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlLCdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpXHJcbiAgICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmRhdGUpICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZVxyXG4gICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBsdWVnbyBzZWxlY2Npb25hciB1biBtZXNcclxuICAgKiBAcGFyYW0gY2hvc2VuTW9udGhEYXRlIFxyXG4gICAqIEBwYXJhbSBkYXRlcGlja2VyIFxyXG4gICAqL1xyXG4gIG1vbnRoU2VsZWN0ZWRIYW5kbGVyKGNob3Nlbk1vbnRoRGF0ZTogbW9tZW50Xy5Nb21lbnQsIGRhdGVwaWNrZXI6IE1hdERhdGVwaWNrZXI8bW9tZW50Xy5Nb21lbnQ+KXsgICAgXHJcbiAgICBcclxuICAgIGlmKHRoaXMudHlwZUNhbGVuZGFyID09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUil7XHJcbiAgICAgIGRhdGVwaWNrZXIuY2xvc2UoKTtcclxuICAgICAgbGV0IGRhdGUgPSBtb21lbnQoY2hvc2VuTW9udGhEYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICBcclxuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KGRhdGUsJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSlcclxuICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZSk7XHJcbiAgICB9ICAgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gZGVzZGUgZWwgY29udHJvbCB0b3VjaCBkZWwgY2FsZW5kYXJcclxuICAgKiBAcGFyYW0gdHlwZSBcclxuICAgKiBAcGFyYW0gZXZlbnQgXHJcbiAgICovXHJcbiAgZGF0ZUNoYW5nZSh0eXBlOiBzdHJpbmcsIGV2ZW50OiBNYXREYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPikge1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KGV2ZW50LnZhbHVlLCdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpXHJcbiAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRFcnJvck1lc3NhZ2UoKTpzdHJpbmd7XHJcbiAgICByZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2UrIHRoaXMuZGF0ZUZvcm1hdFxyXG4gIH1cclxuXHJcbn0iXX0=