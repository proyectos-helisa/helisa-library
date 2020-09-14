/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
/** @type {?} */
const moment = moment_;
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
                template: "<div>\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\n    <input matInput\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\">\n\n\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\n      ya que el valor es diferente cuando se escribe directamente en este\n    -->\n    <input matInput\n    [matDatepicker]=\"picker\"\n    hidden=\"hide\"\n    [value]=\"dateToVisualize.value\"\n    (dateChange)=\"dateChange('change', $event)\">\n    <!--  -->\n\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\n\n  </mat-form-field>\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\n  </div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DateHelisaComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O01BQzVCLE1BQU0sR0FBbUIsT0FBTztBQUd0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFJM0MsUUFBUyxPQUFPO0lBQ2hCLFlBQWEsYUFBYTtJQUMxQixRQUFTLFFBQVE7OztBQVNuQixNQUFNLE9BQU8sbUJBQW1CO0lBcUM5QjtRQWxDUyxlQUFVLEdBQWdDLE9BQU8sQ0FBQztRQUNsRCxvQkFBZSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxTQUFJLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Ozs7O1FBT3ZCLGVBQVUsR0FBVyxZQUFZLENBQUM7UUFDbEMsV0FBTSxHQUFXLElBQUksQ0FBQztRQUN0QixpQkFBWSxHQUFXLHVDQUF1QyxDQUFDO1FBQy9ELGdCQUFXLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7O1FBTXZELGlCQUFZLEdBQXFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzs7OztRQVExRCxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7Ozs7UUFLMUMsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFFZixDQUFDOzs7Ozs7OztJQU1qQixRQUFRO1FBQ04sTUFBTSxDQUFDLE1B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QyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzdDLENBQUM7OztZQXJNRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsNDVCQUEyQzs7YUFFNUM7Ozs7O3lCQUlFLEtBQUs7OEJBQ0wsS0FBSzt5QkFRTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLE1BQU07MkJBTU4sS0FBSzs7OztJQW5CTix5Q0FBMkQ7O0lBQzNELDhDQUE0RDs7Ozs7SUFDNUQsbUNBQWdDOzs7Ozs7O0lBT2hDLHlDQUEyQzs7SUFDM0MscUNBQStCOztJQUMvQiwyQ0FBd0U7O0lBQ3hFLDBDQUErQzs7SUFDL0MscUNBQWdFOzs7Ozs7SUFNaEUsMkNBQWtFOztJQUdsRSw4Q0FBNkI7Ozs7OztJQUs3QiwrQ0FBMEM7Ozs7O0lBSzFDLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50OiB0eXBlb2YgbW9tZW50XyA9IG1vbWVudF87XG5cbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50LCBNYXREYXRlcGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuZXhwb3J0IGVudW0gVHlwZUNhbGVuZGFyRW51bSB7XG4gIE5PUk1BTCA9ICdub3JtYScsXG4gIE1PTlRIX1lFQVIgPSAnbW91bnRoLXllYXInLFxuICBTVFJJQ1QgPSAnc3RyaWN0J1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1kYXRlLWhlbGlzYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBASW5wdXQoKSBmbG9hdExhYmVsOiAnbmV2ZXInIHwgJ2Fsd2F5cycgfCAnYXV0bycgPSAnbmV2ZXInO1xuICBASW5wdXQoKSBkYXRlRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgcHJpdmF0ZSBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICAvKipcbiAgICogRm9ybWF0byBkZSBmZWNoYS5cbiAgICogTG9zIGZvcm1hdG9zIHZhbGlkb3Mgc29uIGFxdWVsbG9zIHF1ZSBtYW5lamEgbGEgbGlicmVyaWEgbW9tZW50anMgeSBlc3RlOiAnREQgW2RlXSBNTU1NIFtkZV0gWVlZWSdcbiAgICogaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL3BhcnNpbmcvc3RyaW5nLWZvcm1hdC9cbiAgICovXG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdERC9NTS9ZWVlZJztcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmcgPSAnZXMnO1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICdMYSBmZWNoYSBubyBjb25jdWVyZGEgY29uIGVsIGZvcm1hdG8gJztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9IHRoaXMuZGF0ZUZvcm1hdDtcbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gIC8qKlxuICAgKiBTaSBlc3RlIHZhbG9yIGVzIGRpZmVyZW50ZSBhIFR5cGVDYWxlbmRhckVudW0uTk9STUFMIG5vXG4gICAqIHNlcsOhIHRvbWFkbyBlbiBjdWVudGFcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVDYWxlbmRhcjogVHlwZUNhbGVuZGFyRW51bSA9IFR5cGVDYWxlbmRhckVudW0uTk9STUFMO1xuXG5cbiAgZGF0ZVRvVmlzdWFsaXplOiBGb3JtQ29udHJvbDtcblxuICAvKipcbiAgICogUGFyYSBldml0YXIgbnVldm9zIGV2ZW50b3MgbWllc3RyYXMgc2UgcmVhbGl6YSBlbCBwYXJzZW9cbiAgICovXG4gIHByaXZhdGUgaXNGcm9tSW5wdXRFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBWZXJpZmljYXIgc2kgZWwgZm9ybWF0byBlcyB2YWxpZG9cbiAgICovXG4gIGludmFsaWRGb3JtYXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qXG4gICogVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSID0gJ01NL1lZWVknXG4gICogVHlwZUNhbGVuZGFyRW51bS5TVFJJQ1QgPSAnREQgW2RlXSBNTU1NIFtkZV0gWVlZWSdcbiAgKiAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBtb21lbnQubG9jYWxlKHRoaXMubG9jYWxlKTtcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZSA9IG5ldyBGb3JtQ29udHJvbCgnJywgdGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsaWRhdG9yKTtcbiAgICB0aGlzLmZvcm1IYW5kbGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBlc3RhYmxlY2VyIHZhbG9yIHBvciBkZWZlY3RvIGRlIGxhIGZlY2hhXG4gICAgICovXG4gICAgaWYgKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9PSAnJyAmJiB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5jb21pbmdEYXRlOiBzdHJpbmcgPSBtb21lbnQodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XG4gICAgICBpZiAoaW5jb21pbmdEYXRlICE9PSAnSW52YWxpZCBkYXRlJykge1xuICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShpbmNvbWluZ0RhdGUpO1xuICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBnZXQgdHlwZUNhbGVuZGFyRW51bSgpOiB0eXBlb2YgVHlwZUNhbGVuZGFyRW51bSB7XG4gICAgcmV0dXJuIFR5cGVDYWxlbmRhckVudW07XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5hIGNvbW8gc2UgZGViZSBpbmljaWFsaXphciBsYSB2aXN1YWxpemFjaW9uIGRlbCBjYWxlbmRhclxuICAgKi9cbiAgZ2V0U3RhcnRWaWV3KCk6IHN0cmluZyB7XG4gICAgLy8gbXVsdGkteWVhclxuICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcbiAgICAgIHJldHVybiAnbXVsdGkteWVhcic7XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLlNUUklDVCkge1xuICAgICAgcmV0dXJuICdtb250aCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbW9udGgnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZm9ybUhhbmRsZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uU1RSSUNUKSB7XG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcbiAgICAgICAgICBjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgaWYgKCEhcmVzdWx0ICYmIChyZXN1bHQgPT09ICdJbnZhbGlkIGRhdGUnIHx8ICFpc1ZhbGlkKSkge1xuICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEhcmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGcm9tSW5wdXRFdmVudCkge1xuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQocmVzdWx0LCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUobW9tZW50KHJlc3VsdCwgdGhpcy5kYXRlRm9ybWF0KS50b0RhdGUoKSk7XG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRhcCgoZGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0ZS5sZW5ndGggPiB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaWx0ZXIoKGRhdGU6IHN0cmluZykgPT4gZGF0ZS5sZW5ndGggPT09IHRoaXMuZGF0ZUZvcm1hdC5sZW5ndGgpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XG4gICAgICAgICAgY29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQsIHRydWUpLmlzVmFsaWQoKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuXG4gICAgICAgICAgaWYgKCEhcmVzdWx0ICYmIChyZXN1bHQgPT09ICdJbnZhbGlkIGRhdGUnIHx8ICFpc1ZhbGlkKSkge1xuICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoISFyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Zyb21JbnB1dEV2ZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YlN0cmluZzogc3RyaW5nW10gPSByZXN1bHQuc3BsaXQoJy0nKTtcblxuICAgICAgICAgICAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1swXSk7XG4gICAgICAgICAgICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1sxXSk7XG4gICAgICAgICAgICAgIGNvbnN0IGRheTogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMl0pO1xuXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldERhdGUoZGF5KTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7IC8vIC0xIHBvciBxdWUgbG9zIG1lc2VzIHNlIHRvbWFuIGNvbW8gbG9zIGluZGljZXMgZW4gdW4gYXJyYXlcblxuICAgICAgICAgICAgICAvKiogY3VhbmRvIGVzIGRlIHRpcG8gTU9VTlRIX1lFQVIgcmV0b3JuYSBlbCB1bHRpbW8gZGlhIGRlbCBtZXMgc2VsZWNjaW9uYWRvICovXG4gICAgICAgICAgICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gbW9tZW50KHRoaXMuZGF0ZSkuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlKTtcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAuc3Vic2NyaWJlKChkYXRlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgaW5jb21taW5nRGF0ZTogc3RyaW5nID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XG4gICAgICAgIGlmICh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPT0gJycgJiYgaW5jb21taW5nRGF0ZSAhPT0gJ0ludmFsaWQgZGF0ZScpIHtcbiAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShpbmNvbW1pbmdEYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgbHVlZ28gc2VsZWNjaW9uYXIgdW4gbWVzXG4gICAqL1xuICBtb250aFNlbGVjdGVkSGFuZGxlcihjaG9zZW5Nb250aERhdGU6IG1vbWVudF8uTW9tZW50LCBkYXRlcGlja2VyOiBNYXREYXRlcGlja2VyPG1vbWVudF8uTW9tZW50Pik6IHZvaWQge1xuXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcbiAgICAgIGRhdGVwaWNrZXIuY2xvc2UoKTtcbiAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSBtb21lbnQoY2hvc2VuTW9udGhEYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcblxuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KGRhdGUsICdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xuICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBkZXNkZSBlbCBjb250cm9sIHRvdWNoIGRlbCBjYWxlbmRhclxuICAgKi9cbiAgZGF0ZUNoYW5nZSh0eXBlOiBzdHJpbmcsIGV2ZW50OiBNYXREYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPik6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChldmVudC52YWx1ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XG4gICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZXZlbnQudmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQudmFsdWUpO1xuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlICsgdGhpcy5kYXRlRm9ybWF0O1xuICB9XG5cbn1cbiJdfQ==