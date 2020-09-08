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
            this.dateToVisualize.setValue(moment(this.date, this.dateFormat).format(this.dateFormat));
            this.dateFormControl.setValue(this.date);
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
                        this.dateToVisualize.setValue(moment(this.date, this.dateFormat).format(this.dateFormat));
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
                template: "<div>\r\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\r\n    <input matInput\r\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\">\r\n\r\n\r\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\r\n      ya que el valor es diferente cuando se escribe directamente en este\r\n    -->\r\n    <input matInput\r\n    [matDatepicker]=\"picker\"\r\n    hidden=\"hide\"\r\n    [value]=\"dateToVisualize.value\"\r\n    (dateChange)=\"dateChange('change', $event)\">\r\n    <!--  -->\r\n\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\r\n\r\n  </mat-form-field>\r\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\r\n  </div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUM1QixNQUFNLEdBQW1CLE9BQU87QUFHdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBSTNDLFFBQVMsT0FBTztJQUNoQixZQUFhLGFBQWE7SUFDMUIsUUFBUyxRQUFROzs7QUFTbkIsTUFBTSxPQUFPLG1CQUFtQjtJQW9DOUI7UUFqQ1MsZUFBVSxHQUFnQyxPQUFPLENBQUM7UUFDbEQsb0JBQWUsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsU0FBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7Ozs7OztRQU92QixlQUFVLEdBQVcsWUFBWSxDQUFDO1FBQ2xDLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsaUJBQVksR0FBVyx1Q0FBdUMsQ0FBQztRQUMvRCxnQkFBVyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7O1FBTXRDLGlCQUFZLEdBQXFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzs7OztRQVExRCxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7Ozs7UUFLMUMsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFFZixDQUFDOzs7Ozs7OztJQU1qQixRQUFRO1FBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FB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QWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQzs7O1lBck1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix3OEJBQTJDOzthQUU1Qzs7Ozs7eUJBSUUsS0FBSzs4QkFDTCxLQUFLO3lCQVFMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBTUwsS0FBSzs7OztJQWxCTix5Q0FBMkQ7O0lBQzNELDhDQUE0RDs7Ozs7SUFDNUQsbUNBQWdDOzs7Ozs7O0lBT2hDLHlDQUEyQzs7SUFDM0MscUNBQStCOztJQUMvQiwyQ0FBd0U7O0lBQ3hFLDBDQUErQzs7Ozs7O0lBTS9DLDJDQUFrRTs7SUFHbEUsOENBQTZCOzs7Ozs7SUFLN0IsK0NBQTBDOzs7OztJQUsxQyw0Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IG1vbWVudDogdHlwZW9mIG1vbWVudF8gPSBtb21lbnRfO1xyXG5cclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQsIE1hdERhdGVwaWNrZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFR5cGVDYWxlbmRhckVudW0ge1xyXG4gIE5PUk1BTCA9ICdub3JtYScsXHJcbiAgTU9OVEhfWUVBUiA9ICdtb3VudGgteWVhcicsXHJcbiAgU1RSSUNUID0gJ3N0cmljdCdcclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWRhdGUtaGVsaXNhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgQElucHV0KCkgZmxvYXRMYWJlbDogJ25ldmVyJyB8ICdhbHdheXMnIHwgJ2F1dG8nID0gJ25ldmVyJztcclxuICBASW5wdXQoKSBkYXRlRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBwcml2YXRlIGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAvKipcclxuICAgKiBGb3JtYXRvIGRlIGZlY2hhLlxyXG4gICAqIExvcyBmb3JtYXRvcyB2YWxpZG9zIHNvbiBhcXVlbGxvcyBxdWUgbWFuZWphIGxhIGxpYnJlcmlhIG1vbWVudGpzIHkgZXN0ZTogJ0REIFtkZV0gTU1NTSBbZGVdIFlZWVknXHJcbiAgICogaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL3BhcnNpbmcvc3RyaW5nLWZvcm1hdC9cclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRlRm9ybWF0OiBzdHJpbmcgPSAnREQvTU0vWVlZWSc7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmcgPSAnZXMnO1xyXG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJ0xhIGZlY2hhIG5vIGNvbmN1ZXJkYSBjb24gZWwgZm9ybWF0byAnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSB0aGlzLmRhdGVGb3JtYXQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpIGVzdGUgdmFsb3IgZXMgZGlmZXJlbnRlIGEgVHlwZUNhbGVuZGFyRW51bS5OT1JNQUwgbm9cclxuICAgKiBzZXLDoSB0b21hZG8gZW4gY3VlbnRhXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZUNhbGVuZGFyOiBUeXBlQ2FsZW5kYXJFbnVtID0gVHlwZUNhbGVuZGFyRW51bS5OT1JNQUw7XHJcblxyXG5cclxuICBkYXRlVG9WaXN1YWxpemU6IEZvcm1Db250cm9sO1xyXG5cclxuICAvKipcclxuICAgKiBQYXJhIGV2aXRhciBudWV2b3MgZXZlbnRvcyBtaWVzdHJhcyBzZSByZWFsaXphIGVsIHBhcnNlb1xyXG4gICAqL1xyXG4gIHByaXZhdGUgaXNGcm9tSW5wdXRFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBWZXJpZmljYXIgc2kgZWwgZm9ybWF0byBlcyB2YWxpZG9cclxuICAgKi9cclxuICBpbnZhbGlkRm9ybWF0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qXHJcbiAgKiBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIgPSAnTU0vWVlZWSdcclxuICAqIFR5cGVDYWxlbmRhckVudW0uU1RSSUNUID0gJ0REIFtkZV0gTU1NTSBbZGVdIFlZWVknXHJcbiAgKiAqL1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgbW9tZW50LmxvY2FsZSh0aGlzLmxvY2FsZSk7XHJcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZSA9IG5ldyBGb3JtQ29udHJvbCgnJywgdGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsaWRhdG9yKTtcclxuICAgIHRoaXMuZm9ybUhhbmRsZXIoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGVzdGFibGVjZXIgdmFsb3IgcG9yIGRlZmVjdG8gZGUgbGEgZmVjaGFcclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IGluY29tbWluZ0RhdGU6IHN0cmluZyA9IG1vbWVudCh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcclxuICAgIGlmICh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPT0gJycgJiYgaW5jb21taW5nRGF0ZSAhPT0gJ0ludmFsaWQgZGF0ZScpIHtcclxuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUoaW5jb21taW5nRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGVDYWxlbmRhckVudW0oKTogdHlwZW9mIFR5cGVDYWxlbmRhckVudW0ge1xyXG4gICAgcmV0dXJuIFR5cGVDYWxlbmRhckVudW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmEgY29tbyBzZSBkZWJlIGluaWNpYWxpemFyIGxhIHZpc3VhbGl6YWNpb24gZGVsIGNhbGVuZGFyXHJcbiAgICovXHJcbiAgZ2V0U3RhcnRWaWV3KCk6IHN0cmluZyB7XHJcbiAgICAvLyBtdWx0aS15ZWFyXHJcbiAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XHJcbiAgICAgIHJldHVybiAnbXVsdGkteWVhcic7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uU1RSSUNUKSB7XHJcbiAgICAgIHJldHVybiAnbW9udGgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdtb250aCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uU1RSSUNUKSB7XHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudCh0aGlzLmRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xyXG4gICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmRhdGUpO1xyXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQsIHRydWUpLmlzVmFsaWQoKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XHJcblxyXG4gICAgICAgICAgaWYgKCEhcmVzdWx0ICYmIChyZXN1bHQgPT09ICdJbnZhbGlkIGRhdGUnIHx8ICFpc1ZhbGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoISFyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRnJvbUlucHV0RXZlbnQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudCh0aGlzLmRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudChyZXN1bHQsIHRoaXMuZGF0ZUZvcm1hdCkudG9EYXRlKCkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS52YWx1ZUNoYW5nZXNcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRhcCgoZGF0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRlLmxlbmd0aCA+IHRoaXMuZGF0ZUZvcm1hdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGZpbHRlcigoZGF0ZTogc3RyaW5nKSA9PiBkYXRlLmxlbmd0aCA9PT0gdGhpcy5kYXRlRm9ybWF0Lmxlbmd0aClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcclxuICAgICAgICAgIGNvbnN0IGlzVmFsaWQ6IGJvb2xlYW4gPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCk7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG5cclxuICAgICAgICAgIGlmICghIXJlc3VsdCAmJiAocmVzdWx0ID09PSAnSW52YWxpZCBkYXRlJyB8fCAhaXNWYWxpZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghIXJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGcm9tSW5wdXRFdmVudCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3ViU3RyaW5nOiBzdHJpbmdbXSA9IHJlc3VsdC5zcGxpdCgnLScpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1swXSk7XHJcbiAgICAgICAgICAgICAgY29uc3QgbW9udGg6IG51bWJlciA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzFdKTtcclxuICAgICAgICAgICAgICBjb25zdCBkYXk6IG51bWJlciA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzJdKTtcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXREYXRlKGRheSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7IC8vIC0xIHBvciBxdWUgbG9zIG1lc2VzIHNlIHRvbWFuIGNvbW8gbG9zIGluZGljZXMgZW4gdW4gYXJyYXlcclxuXHJcbiAgICAgICAgICAgICAgLyoqIGN1YW5kbyBlcyBkZSB0aXBvIE1PVU5USF9ZRUFSIHJldG9ybmEgZWwgdWx0aW1vIGRpYSBkZWwgbWVzIHNlbGVjY2lvbmFkbyAqL1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGUgPSBtb21lbnQodGhpcy5kYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudCh0aGlzLmRhdGUsICdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuZGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAuc3Vic2NyaWJlKChkYXRlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBpbmNvbW1pbmdEYXRlOiBzdHJpbmcgPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcclxuICAgICAgICBpZiAodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT09ICcnICYmIGluY29tbWluZ0RhdGUgIT09ICdJbnZhbGlkIGRhdGUnKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShpbmNvbW1pbmdEYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBsdWVnbyBzZWxlY2Npb25hciB1biBtZXNcclxuICAgKi9cclxuICBtb250aFNlbGVjdGVkSGFuZGxlcihjaG9zZW5Nb250aERhdGU6IG1vbWVudF8uTW9tZW50LCBkYXRlcGlja2VyOiBNYXREYXRlcGlja2VyPG1vbWVudF8uTW9tZW50Pik6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XHJcbiAgICAgIGRhdGVwaWNrZXIuY2xvc2UoKTtcclxuICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IG1vbWVudChjaG9zZW5Nb250aERhdGUpLmVuZE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG5cclxuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KGRhdGUsICdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xyXG4gICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShkYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBkZXNkZSBlbCBjb250cm9sIHRvdWNoIGRlbCBjYWxlbmRhclxyXG4gICAqL1xyXG4gIGRhdGVDaGFuZ2UodHlwZTogc3RyaW5nLCBldmVudDogTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQ8RGF0ZT4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChldmVudC52YWx1ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XHJcbiAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRFcnJvck1lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZSArIHRoaXMuZGF0ZUZvcm1hdDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==