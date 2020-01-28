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
        if (this.typeCalendar == TypeCalendarEnum.MONTH_YEAR) {
            this.dateFormat = 'MM/YYYY';
            this.placeholder = this.dateFormat;
        }
        /**
         * establecer valor por defecto de la fecha
         * @type {?}
         */
        let incommingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
        if (this.dateFormControl.value != '' && incommingDate != 'Invalid date') {
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
        this.dateFormControl.valueChanges
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        date => {
            /** @type {?} */
            let incommingDate = moment(date, this.dateFormat).format(this.dateFormat);
            if (this.dateFormControl.value != '' && incommingDate != 'Invalid date') {
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
                template: "<div>\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\n    <input matInput \n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\">\n    \n    \n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar \n      ya que el valor es diferente cuando se escribe directamente en este\n    -->\n    <input matInput \n    [matDatepicker]=\"picker\" \n    hidden=\"hide\" \n    [value]=\"dateToVisualize.value\" \n    (dateChange)=\"dateChange('change', $event)\">\n    <!--  -->\n  \n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\n    \n  </mat-form-field>\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\n  </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUM1QixNQUFNLEdBQUcsT0FBTztBQUd0QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFJM0MsUUFBUyxPQUFPO0lBQ2hCLFlBQWEsYUFBYTs7O0FBUzVCLE1BQU0sT0FBTyxtQkFBbUI7SUFtQzlCO1FBaENTLGVBQVUsR0FBZ0MsT0FBTyxDQUFDO1FBQ2xELG9CQUFlLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELFNBQUksR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDOzs7Ozs7UUFPdEIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixpQkFBWSxHQUFHLHVDQUF1QyxDQUFDO1FBQ3ZELGdCQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7UUFNOUIsaUJBQVksR0FBb0IsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOzs7O1FBUXpELHFCQUFnQixHQUFVLEtBQUssQ0FBQzs7OztRQUt4QyxrQkFBYSxHQUFXLEtBQUssQ0FBQztJQUVkLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5C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Ozs7OztJQUs1QiwrQ0FBd0M7Ozs7O0lBS3hDLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50LCBNYXREYXRlcGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuZXhwb3J0IGVudW0gVHlwZUNhbGVuZGFyRW51bXtcbiAgTk9STUFMID0gJ25vcm1hJyxcbiAgTU9OVEhfWUVBUiA9ICdtb3VudGgteWVhcidcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtZGF0ZS1oZWxpc2EnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlLWhlbGlzYS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcblxuICBASW5wdXQoKSBmbG9hdExhYmVsOiAnbmV2ZXInIHwgJ2Fsd2F5cycgfCAnYXV0bycgPSAnbmV2ZXInO1xuICBASW5wdXQoKSBkYXRlRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgcHJpdmF0ZSBkYXRlOkRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIC8qKlxuICAgKiBGb3JtYXRvIGRlIGZlY2hhLlxuICAgKiBMb3MgZm9ybWF0b3MgdmFsaWRvcyBzb24gYXF1ZWxsb3MgcXVlIG1hbmVqYSBsYSBsaWJyZXJpYSBtb21lbnRqcyAgXG4gICAqIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9wYXJzaW5nL3N0cmluZy1mb3JtYXQvXG4gICAqL1xuICBASW5wdXQoKSBkYXRlRm9ybWF0ID0gJ0REL01NL1lZWVknO1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2UgPSAnTGEgZmVjaGEgbm8gY29uY3VlcmRhIGNvbiBlbCBmb3JtYXRvICc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gdGhpcy5kYXRlRm9ybWF0O1xuXG4gIC8qKlxuICAgKiBTaSBlc3RlIHZhbG9yIGVzIGRpZmVyZW50ZSBhIFR5cGVDYWxlbmRhckVudW0uTk9STUFMIG5vXG4gICAqIHNlcsOhIHRvbWFkbyBlbiBjdWVudGFcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVDYWxlbmRhcjpUeXBlQ2FsZW5kYXJFbnVtID0gVHlwZUNhbGVuZGFyRW51bS5OT1JNQUw7XG4gIFxuXG4gIGRhdGVUb1Zpc3VhbGl6ZTpGb3JtQ29udHJvbDtcblxuICAvKipcbiAgICogUGFyYSBldml0YXIgbnVldm9zIGV2ZW50b3MgbWllc3RyYXMgc2UgcmVhbGl6YSBlbCBwYXJzZW9cbiAgICovXG4gIHByaXZhdGUgaXNGcm9tSW5wdXRFdmVudDpib29sZWFuPSBmYWxzZTtcblxuICAvKipcbiAgICogVmVyaWZpY2FyIHNpIGVsIGZvcm1hdG8gZXMgdmFsaWRvXG4gICAqL1xuICBpbnZhbGlkRm9ybWF0OmJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyAgICAgICAgICAgIFxuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplPSBuZXcgRm9ybUNvbnRyb2woJycsdGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsaWRhdG9yKVxuICAgIHRoaXMuZm9ybUhhbmRsZXIoKTtcbiAgICBcbiAgICBpZih0aGlzLnR5cGVDYWxlbmRhciA9PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpe1xuICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gJ01NL1lZWVknXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5kYXRlRm9ybWF0O1xuICAgIH0gICAgICAgIFxuICAgIFxuICAgIC8qKlxuICAgICAqIGVzdGFibGVjZXIgdmFsb3IgcG9yIGRlZmVjdG8gZGUgbGEgZmVjaGFcbiAgICAgKi9cbiAgICBsZXQgaW5jb21taW5nRGF0ZSA9IG1vbWVudCh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSx0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xuICAgIGlmKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9ICcnICYmIGluY29tbWluZ0RhdGUgIT0gJ0ludmFsaWQgZGF0ZScpe1xuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUoaW5jb21taW5nRGF0ZSk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZ2V0IHR5cGVDYWxlbmRhckVudW0oKXtcbiAgICByZXR1cm4gVHlwZUNhbGVuZGFyRW51bTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmEgY29tbyBzZSBkZWJlIGluaWNpYWxpemFyIGxhIHZpc3VhbGl6YWNpb24gZGVsIGNhbGVuZGFyXG4gICAqL1xuICBnZXRTdGFydFZpZXcoKTpzdHJpbmd7XG4gICAgLy9tdWx0aS15ZWFyXG4gICAgaWYodGhpcy50eXBlQ2FsZW5kYXIgPT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpe1xuICAgICAgcmV0dXJuICdtdWx0aS15ZWFyJztcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiAnbW9udGgnO1xuICAgIH0gICAgXG4gIH1cblxuICBwcml2YXRlIGZvcm1IYW5kbGVyKCl7ICAgXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWVDaGFuZ2VzXG4gICAgLnBpcGUoXG4gICAgICB0YXAoZGF0ZSA9PiB7ICAgICAgICBcbiAgICAgICAgaWYoZGF0ZS5sZW5ndGggPiB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKXtcbiAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlXG4gICAgICAgIH1lbHNle3RoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoZGF0ZSA9PiBkYXRlLmxlbmd0aCA9PSB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKVxuICAgICkgICAgXG4gICAgLnN1YnNjcmliZShkYXRlPT57ICAgICAgICAgXG4gICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcbiAgICAgIGxldCBpc1ZhbGlkID0gbW9tZW50KGRhdGUsdGhpcy5kYXRlRm9ybWF0LHRydWUpLmlzVmFsaWQoKVxuICAgICAgbGV0IHJlc3VsdCA9IG1vbWVudChkYXRlLHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICBcbiAgICAgIFxuICAgICAgaWYoISFyZXN1bHQgJiYgKHJlc3VsdCA9PSAnSW52YWxpZCBkYXRlJyB8fCAhaXNWYWxpZCkpe1xuICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYoISFyZXN1bHQgKXsgICAgICAgIFxuICAgICAgICBpZighdGhpcy5pc0Zyb21JbnB1dEV2ZW50KXsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICBsZXQgc3ViU3RyaW5nOnN0cmluZ1tdID0gcmVzdWx0LnNwbGl0KCctJyk7XG5cbiAgICAgICAgICBsZXQgeWVhciA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzBdKVxuICAgICAgICAgIGxldCBtb250aCA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzFdKVxuICAgICAgICAgIGxldCBkYXkgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1syXSlcblxuICAgICAgICAgIHRoaXMuZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKVxuICAgICAgICAgIHRoaXMuZGF0ZS5zZXREYXRlKGRheSlcbiAgICAgICAgICB0aGlzLmRhdGUuc2V0TW9udGgobW9udGggLSAxKSAvLyAtMSBwb3IgcXVlIGxvcyBtZXNlcyBzZSB0b21hbiBjb21vIGxvcyBpbmRpY2VzIGVuIHVuIGFycmF5XG4gICAgICAgICAgXG4gICAgICAgICAgLyoqIGN1YW5kbyBlcyBkZSB0aXBvIE1PVU5USF9ZRUFSIHJldG9ybmEgZWwgdWx0aW1vIGRpYSBkZWwgbWVzIHNlbGVjY2lvbmFkbyAqL1xuICAgICAgICAgIGlmKHRoaXMudHlwZUNhbGVuZGFyID09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUil7XG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBtb21lbnQodGhpcy5kYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlLCdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpXG4gICAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlKSAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZVxuICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgIH0pXG5cblxuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlQ2hhbmdlc1xuICAgIC5zdWJzY3JpYmUoZGF0ZT0+e1xuICAgICAgbGV0IGluY29tbWluZ0RhdGUgPSBtb21lbnQoZGF0ZSx0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xuICAgICAgaWYodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT0gJycgJiYgaW5jb21taW5nRGF0ZSAhPSAnSW52YWxpZCBkYXRlJyl7XG4gICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKGluY29tbWluZ0RhdGUpO1xuICAgICAgfSAgICAgIFxuICAgIH0pXG4gIH1cblxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgbHVlZ28gc2VsZWNjaW9uYXIgdW4gbWVzXG4gICAqIEBwYXJhbSBjaG9zZW5Nb250aERhdGUgXG4gICAqIEBwYXJhbSBkYXRlcGlja2VyIFxuICAgKi9cbiAgbW9udGhTZWxlY3RlZEhhbmRsZXIoY2hvc2VuTW9udGhEYXRlOiBtb21lbnRfLk1vbWVudCwgZGF0ZXBpY2tlcjogTWF0RGF0ZXBpY2tlcjxtb21lbnRfLk1vbWVudD4peyAgICBcbiAgICBcbiAgICBpZih0aGlzLnR5cGVDYWxlbmRhciA9PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpe1xuICAgICAgZGF0ZXBpY2tlci5jbG9zZSgpO1xuICAgICAgbGV0IGRhdGUgPSBtb21lbnQoY2hvc2VuTW9udGhEYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcbiAgXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZGF0ZSwnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKVxuICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZSk7XG4gICAgfSAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBkZXNkZSBlbCBjb250cm9sIHRvdWNoIGRlbCBjYWxlbmRhclxuICAgKiBAcGFyYW0gdHlwZSBcbiAgICogQHBhcmFtIGV2ZW50IFxuICAgKi9cbiAgZGF0ZUNoYW5nZSh0eXBlOiBzdHJpbmcsIGV2ZW50OiBNYXREYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPikge1xuICAgICAgICBcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZXZlbnQudmFsdWUsJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSlcbiAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudC52YWx1ZSk7XG4gIH1cblxuICBnZXRFcnJvck1lc3NhZ2UoKTpzdHJpbmd7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlKyB0aGlzLmRhdGVGb3JtYXRcbiAgfVxuXG59Il19