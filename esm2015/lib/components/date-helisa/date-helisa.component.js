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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUM1QixNQUFNLEdBQUcsT0FBTztBQUd0QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFJM0MsUUFBUyxPQUFPO0lBQ2hCLFlBQWEsYUFBYTs7O0FBUzVCLE1BQU0sT0FBTyxtQkFBbUI7SUFtQzlCO1FBL0JTLG9CQUFlLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELFNBQUksR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDOzs7Ozs7UUFPdEIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixpQkFBWSxHQUFHLHVDQUF1QyxDQUFDO1FBQ3ZELGdCQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7UUFNOUIsaUJBQVksR0FBb0IsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOzs7O1FBUXpELHFCQUFnQixHQUFVLEtBQUssQ0FBQzs7OztRQUt4QyxrQkFBYSxHQUFXLEtBQUssQ0FBQztJQUVkLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxn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Q0FBQzs7Ozs7OztJQU9ELFVBQVUsQ0FBQyxJQUFZLEVBQUUsS0FBb0M7UUFFM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3ZGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRSxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQzNDLENBQUM7OztZQWhLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsNDdCQUEyQzs7YUFFNUM7Ozs7OzhCQUtFLEtBQUs7eUJBUUwsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBTUwsS0FBSzs7OztJQWhCTiw4Q0FBNEQ7Ozs7O0lBQzVELG1DQUErQjs7Ozs7OztJQU8vQix5Q0FBbUM7O0lBQ25DLDJDQUFnRTs7SUFDaEUsMENBQXVDOzs7Ozs7SUFNdkMsMkNBQWlFOztJQUdqRSw4Q0FBNEI7Ozs7OztJQUs1QiwrQ0FBd0M7Ozs7O0lBS3hDLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50LCBNYXREYXRlcGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5leHBvcnQgZW51bSBUeXBlQ2FsZW5kYXJFbnVte1xyXG4gIE5PUk1BTCA9ICdub3JtYScsXHJcbiAgTU9OVEhfWUVBUiA9ICdtb3VudGgteWVhcidcclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWRhdGUtaGVsaXNhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG5cclxuICBcclxuICBASW5wdXQoKSBkYXRlRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBwcml2YXRlIGRhdGU6RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdG8gZGUgZmVjaGEuXHJcbiAgICogTG9zIGZvcm1hdG9zIHZhbGlkb3Mgc29uIGFxdWVsbG9zIHF1ZSBtYW5lamEgbGEgbGlicmVyaWEgbW9tZW50anMgIFxyXG4gICAqIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9wYXJzaW5nL3N0cmluZy1mb3JtYXQvXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0ZUZvcm1hdCA9ICdERC9NTS9ZWVlZJztcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2UgPSAnTGEgZmVjaGEgbm8gY29uY3VlcmRhIGNvbiBlbCBmb3JtYXRvICc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSB0aGlzLmRhdGVGb3JtYXQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpIGVzdGUgdmFsb3IgZXMgZGlmZXJlbnRlIGEgVHlwZUNhbGVuZGFyRW51bS5OT1JNQUwgbm9cclxuICAgKiBzZXLDoSB0b21hZG8gZW4gY3VlbnRhXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZUNhbGVuZGFyOlR5cGVDYWxlbmRhckVudW0gPSBUeXBlQ2FsZW5kYXJFbnVtLk5PUk1BTDtcclxuICBcclxuXHJcbiAgZGF0ZVRvVmlzdWFsaXplOkZvcm1Db250cm9sO1xyXG5cclxuICAvKipcclxuICAgKiBQYXJhIGV2aXRhciBudWV2b3MgZXZlbnRvcyBtaWVzdHJhcyBzZSByZWFsaXphIGVsIHBhcnNlb1xyXG4gICAqL1xyXG4gIHByaXZhdGUgaXNGcm9tSW5wdXRFdmVudDpib29sZWFuPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpY2FyIHNpIGVsIGZvcm1hdG8gZXMgdmFsaWRvXHJcbiAgICovXHJcbiAgaW52YWxpZEZvcm1hdDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyAgICAgICAgICAgIFxyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemU9IG5ldyBGb3JtQ29udHJvbCgnJyx0aGlzLmRhdGVGb3JtQ29udHJvbC52YWxpZGF0b3IpXHJcbiAgICB0aGlzLmZvcm1IYW5kbGVyKCk7XHJcbiAgICBcclxuICAgIGlmKHRoaXMudHlwZUNhbGVuZGFyID09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUil7XHJcbiAgICAgIHRoaXMuZGF0ZUZvcm1hdCA9ICdNTS9ZWVlZJ1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5kYXRlRm9ybWF0O1xyXG4gICAgfSAgICAgICAgXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogZXN0YWJsZWNlciB2YWxvciBwb3IgZGVmZWN0byBkZSBsYSBmZWNoYVxyXG4gICAgICovXHJcbiAgICBsZXQgaW5jb21taW5nRGF0ZSA9IG1vbWVudCh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSx0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xyXG4gICAgaWYodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT0gJycgJiYgaW5jb21taW5nRGF0ZSAhPSAnSW52YWxpZCBkYXRlJyl7XHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKGluY29tbWluZ0RhdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZUNhbGVuZGFyRW51bSgpe1xyXG4gICAgcmV0dXJuIFR5cGVDYWxlbmRhckVudW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmEgY29tbyBzZSBkZWJlIGluaWNpYWxpemFyIGxhIHZpc3VhbGl6YWNpb24gZGVsIGNhbGVuZGFyXHJcbiAgICovXHJcbiAgZ2V0U3RhcnRWaWV3KCk6c3RyaW5ne1xyXG4gICAgLy9tdWx0aS15ZWFyXHJcbiAgICBpZih0aGlzLnR5cGVDYWxlbmRhciA9PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUil7XHJcbiAgICAgIHJldHVybiAnbXVsdGkteWVhcic7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgcmV0dXJuICdtb250aCc7XHJcbiAgICB9ICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtSGFuZGxlcigpe1xyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWVDaGFuZ2VzXHJcbiAgICAucGlwZShcclxuICAgICAgdGFwKGRhdGUgPT4geyAgICAgICAgXHJcbiAgICAgICAgaWYoZGF0ZS5sZW5ndGggPiB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKXtcclxuICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWVcclxuICAgICAgICB9ZWxzZXt0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZX1cclxuICAgICAgfSksXHJcbiAgICAgIGZpbHRlcihkYXRlID0+IGRhdGUubGVuZ3RoID09IHRoaXMuZGF0ZUZvcm1hdC5sZW5ndGgpXHJcbiAgICApICAgIFxyXG4gICAgLnN1YnNjcmliZShkYXRlPT57ICAgICAgICAgXHJcbiAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xyXG4gICAgICBsZXQgaXNWYWxpZCA9IG1vbWVudChkYXRlLHRoaXMuZGF0ZUZvcm1hdCx0cnVlKS5pc1ZhbGlkKClcclxuICAgICAgbGV0IHJlc3VsdCA9IG1vbWVudChkYXRlLHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgaWYoISFyZXN1bHQgJiYgKHJlc3VsdCA9PSAnSW52YWxpZCBkYXRlJyB8fCAhaXNWYWxpZCkpe1xyXG4gICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCEhcmVzdWx0ICl7ICAgICAgICBcclxuICAgICAgICBpZighdGhpcy5pc0Zyb21JbnB1dEV2ZW50KXsgICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgbGV0IHN1YlN0cmluZzpzdHJpbmdbXSA9IHJlc3VsdC5zcGxpdCgnLScpO1xyXG5cclxuICAgICAgICAgIGxldCB5ZWFyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMF0pXHJcbiAgICAgICAgICBsZXQgbW9udGggPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1sxXSlcclxuICAgICAgICAgIGxldCBkYXkgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1syXSlcclxuXHJcbiAgICAgICAgICB0aGlzLmRhdGUuc2V0RnVsbFllYXIoeWVhcilcclxuICAgICAgICAgIHRoaXMuZGF0ZS5zZXREYXRlKGRheSlcclxuICAgICAgICAgIHRoaXMuZGF0ZS5zZXRNb250aChtb250aCAtIDEpIC8vIC0xIHBvciBxdWUgbG9zIG1lc2VzIHNlIHRvbWFuIGNvbW8gbG9zIGluZGljZXMgZW4gdW4gYXJyYXlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLyoqIGN1YW5kbyBlcyBkZSB0aXBvIE1PVU5USF9ZRUFSIHJldG9ybmEgZWwgdWx0aW1vIGRpYSBkZWwgbWVzIHNlbGVjY2lvbmFkbyAqL1xyXG4gICAgICAgICAgaWYodGhpcy50eXBlQ2FsZW5kYXIgPT0gVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKXtcclxuICAgICAgICAgICAgdGhpcy5kYXRlID0gbW9tZW50KHRoaXMuZGF0ZSkuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KHRoaXMuZGF0ZSwnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKVxyXG4gICAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlKSAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2VcclxuICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgbHVlZ28gc2VsZWNjaW9uYXIgdW4gbWVzXHJcbiAgICogQHBhcmFtIGNob3Nlbk1vbnRoRGF0ZSBcclxuICAgKiBAcGFyYW0gZGF0ZXBpY2tlciBcclxuICAgKi9cclxuICBtb250aFNlbGVjdGVkSGFuZGxlcihjaG9zZW5Nb250aERhdGU6IG1vbWVudF8uTW9tZW50LCBkYXRlcGlja2VyOiBNYXREYXRlcGlja2VyPG1vbWVudF8uTW9tZW50Pil7ICAgIFxyXG4gICAgXHJcbiAgICBpZih0aGlzLnR5cGVDYWxlbmRhciA9PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpe1xyXG4gICAgICBkYXRlcGlja2VyLmNsb3NlKCk7XHJcbiAgICAgIGxldCBkYXRlID0gbW9tZW50KGNob3Nlbk1vbnRoRGF0ZSkuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcbiAgXHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChkYXRlLCdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpXHJcbiAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKGRhdGUpO1xyXG4gICAgfSAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIGRlc2RlIGVsIGNvbnRyb2wgdG91Y2ggZGVsIGNhbGVuZGFyXHJcbiAgICogQHBhcmFtIHR5cGUgXHJcbiAgICogQHBhcmFtIGV2ZW50IFxyXG4gICAqL1xyXG4gIGRhdGVDaGFuZ2UodHlwZTogc3RyaW5nLCBldmVudDogTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQ8RGF0ZT4pIHtcclxuICAgICAgICBcclxuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChldmVudC52YWx1ZSwnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKVxyXG4gICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZXZlbnQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXJyb3JNZXNzYWdlKCk6c3RyaW5ne1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlKyB0aGlzLmRhdGVGb3JtYXRcclxuICB9XHJcblxyXG59Il19