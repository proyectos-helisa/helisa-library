import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
const moment = moment_;
import { filter, tap } from 'rxjs/operators';
export var TypeCalendarEnum;
(function (TypeCalendarEnum) {
    TypeCalendarEnum["NORMAL"] = "norma";
    TypeCalendarEnum["MONTH_YEAR"] = "mounth-year";
    TypeCalendarEnum["STRICT"] = "strict";
})(TypeCalendarEnum || (TypeCalendarEnum = {}));
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
        this.isDisabled = false;
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
        this.inputFormReal = new FormControl('');
    }
    /*
    * TypeCalendarEnum.MONTH_YEAR = 'MM/YYYY'
    * TypeCalendarEnum.STRICT = 'DD [de] MMMM [de] YYYY'
    * */
    ngOnInit() {
        moment.locale(this.locale);
        this.dateToVisualize = new FormControl('', this.dateFormControl.validator);
        this.formHandler();
        this.inputFormReal = this.dateFormControl;
        this.inputFormReal.registerOnDisabledChange((isDisabled) => {
            if (isDisabled) {
                this.isDisabled = true;
                this.dateToVisualize.disable();
            }
            else {
                this.isDisabled = false;
                this.dateToVisualize.enable();
            }
        });
        /**
         * establecer valor por defecto de la fecha
         */
        if (this.dateFormControl.value !== '' && this.dateFormControl.value !== null) {
            const incomingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
            if (incomingDate !== 'Invalid date') {
                this.dateToVisualize.setValue(incomingDate);
                this.dateFormControl.setValue(this.dateFormControl.value);
            }
        }
    }
    get typeCalendarEnum() {
        return TypeCalendarEnum;
    }
    openDatePicker() {
        if (this.showDatePicker && !this.isClosed) {
            this.isClosed = true;
            this.timeout = setTimeout(() => {
                this.datePickerShow.open();
            }, 2000);
        }
    }
    onKey(event) {
        if (event.key === 'Enter' || (event.key === ' ' || event.code === "Space")) {
            this.onBlur();
        }
    }
    onBlur() {
        if (moment(this.dateToVisualize.value, this.dateFormat, true).isValid()) {
            const incomingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
            this.dateToVisualize.setValue(incomingDate);
            this.dateFormControl.setValue(moment(this.dateFormControl.value, this.dateFormat).toDate());
            this.change.emit(moment(this.dateFormControl.value, this.dateFormat).toDate());
            if (this.showDatePicker) {
                this.isClosed = true;
                this.datePickerShow.open();
            }
        }
    }
    /**
     * Determina como se debe inicializar la visualizacion del calendar
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
    formHandler() {
        if (this.typeCalendar === this.typeCalendarEnum.STRICT) {
            this.dateToVisualize.valueChanges.subscribe((date) => {
                this.invalidFormat = false;
                const isValid = moment(date, this.dateFormat, true).isValid();
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
                        setTimeout(() => {
                            this.isFromInputEvent = false;
                        }, 1500);
                    }
                }
            });
        }
        else {
            this.dateToVisualize.valueChanges
                .pipe(tap((date) => {
                if (date.trim().length > this.dateFormat.length) {
                    this.invalidFormat = true;
                }
                else {
                    this.invalidFormat = false;
                }
            }), filter((date) => date.length === this.dateFormat.length))
                .subscribe((date) => {
                this.invalidFormat = false;
                const isValid = moment(date, this.dateFormat, true).isValid();
                const result = moment(date, this.dateFormat).format('YYYY-MM-DD');
                if (!!result && (result === 'Invalid date' || !isValid)) {
                    this.invalidFormat = true;
                    return;
                }
                if (!!result) {
                    if (!this.isFromInputEvent) {
                        this.isFromInputEvent = true;
                        const subString = result.split('-');
                        const year = parseFloat(subString[0]);
                        const month = parseFloat(subString[1]);
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
                        setTimeout(() => {
                            this.isFromInputEvent = false;
                        }, 1500);
                    }
                }
            });
        }
        this.dateFormControl.valueChanges
            .subscribe((date) => {
            const incommingDate = moment(date, this.dateFormat).format(this.dateFormat);
            if (this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
                this.dateToVisualize.setValue(incommingDate);
            }
        });
    }
    /**
     * Evento que se dispara luego seleccionar un mes
     */
    monthSelectedHandler(chosenMonthDate, datepicker) {
        if (this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
            datepicker.close();
            const date = moment(chosenMonthDate).endOf('month').toDate();
            this.dateToVisualize.setValue(moment(date, 'YYYY-MM-DD').format(this.dateFormat));
            this.dateFormControl.setValue(date);
            this.change.emit(date);
        }
    }
    /**
     * Evento desde el control touch del calendar
     */
    dateChange(type, event) {
        this.dateToVisualize.setValue(moment(event.value, 'YYYY-MM-DD').format(this.dateFormat));
        this.dateFormControl.setValue(new Date(event.value));
        this.change.emit(new Date(event.value));
        this.isClosed = true;
    }
    getErrorMessage() {
        return this.errorMessage + this.dateFormat;
    }
    getDateToControl() {
        return moment(this.dateToVisualize.value, this.dateFormat).toDate();
    }
}
DateHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-date-helisa',
                template: "<div>\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\n    <input matInput\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\" (keydown)=\"onKey($event)\" (focus)=\"openDatePicker()\" (blur)=\"onBlur()\">\n\n\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\n      ya que el valor es diferente cuando se escribe directamente en este\n    -->\n    <input matInput\n    [matDatepicker]=\"picker\"\n    hidden=\"hide\"\n    [value]=\"getDateToControl()\"\n    (dateChange)=\"dateChange('change', $event)\" [min]=\"minDate\" [max]=\"maxDate\">\n    <!--  -->\n\n    <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"isDisabled\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\n\n  </mat-form-field>\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\n  </div>\n",
                styles: [""]
            },] }
];
DateHelisaComponent.ctorParameters = () => [];
DateHelisaComponent.propDecorators = {
    datePickerShow: [{ type: ViewChild, args: ['picker', { static: true },] }],
    floatLabel: [{ type: Input }],
    dateFormControl: [{ type: Input }],
    dateFormat: [{ type: Input }],
    locale: [{ type: Input }],
    errorMessage: [{ type: Input }],
    placeholder: [{ type: Input }],
    showDatePicker: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    change: [{ type: Output }],
    typeCalendar: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZS1oZWxpc2EvZGF0ZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsTUFBTSxDQUFOLElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMxQixvQ0FBZ0IsQ0FBQTtJQUNoQiw4Q0FBMEIsQ0FBQTtJQUMxQixxQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUkzQjtBQVFELE1BQU0sT0FBTyxtQkFBbUI7SUEyQzlCO1FBeENTLGVBQVUsR0FBZ0MsT0FBTyxDQUFDO1FBQ2xELG9CQUFlLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRWhDOzs7O1dBSUc7UUFDTSxlQUFVLEdBQVcsWUFBWSxDQUFDO1FBQ2xDLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsaUJBQVksR0FBVyx1Q0FBdUMsQ0FBQztRQUMvRCxnQkFBVyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFHL0IsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBUSxD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O1FBQ3pGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzs7WUF0UEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG9pQ0FBMkM7O2FBRTVDOzs7OzZCQUdFLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQUNwQyxLQUFLOzhCQUNMLEtBQUs7eUJBUUwsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxNQUFNOzJCQVNOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQ6IHR5cGVvZiBtb21lbnRfID0gbW9tZW50XztcblxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQsIE1hdERhdGVwaWNrZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZW51bSBUeXBlQ2FsZW5kYXJFbnVtIHtcbiAgTk9STUFMID0gJ25vcm1hJyxcbiAgTU9OVEhfWUVBUiA9ICdtb3VudGgteWVhcicsXG4gIFNUUklDVCA9ICdzdHJpY3QnXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLWRhdGUtaGVsaXNhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1oZWxpc2EuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdwaWNrZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBkYXRlUGlja2VyU2hvdzogTWF0RGF0ZXBpY2tlcjxEYXRlPjtcbiAgQElucHV0KCkgZmxvYXRMYWJlbDogJ25ldmVyJyB8ICdhbHdheXMnIHwgJ2F1dG8nID0gJ25ldmVyJztcbiAgQElucHV0KCkgZGF0ZUZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIHByaXZhdGUgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgLyoqXG4gICAqIEZvcm1hdG8gZGUgZmVjaGEuXG4gICAqIExvcyBmb3JtYXRvcyB2YWxpZG9zIHNvbiBhcXVlbGxvcyBxdWUgbWFuZWphIGxhIGxpYnJlcmlhIG1vbWVudGpzIHkgZXN0ZTogJ0REIFtkZV0gTU1NTSBbZGVdIFlZWVknXG4gICAqIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9wYXJzaW5nL3N0cmluZy1mb3JtYXQvXG4gICAqL1xuICBASW5wdXQoKSBkYXRlRm9ybWF0OiBzdHJpbmcgPSAnREQvTU0vWVlZWSc7XG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nID0gJ2VzJztcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnTGEgZmVjaGEgbm8gY29uY3VlcmRhIGNvbiBlbCBmb3JtYXRvICc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSB0aGlzLmRhdGVGb3JtYXQ7XG4gIEBJbnB1dCgpIHNob3dEYXRlUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcbiAgaXNDbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB0aW1lb3V0OiBhbnk7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIFNpIGVzdGUgdmFsb3IgZXMgZGlmZXJlbnRlIGEgVHlwZUNhbGVuZGFyRW51bS5OT1JNQUwgbm9cbiAgICogc2Vyw6EgdG9tYWRvIGVuIGN1ZW50YVxuICAgKi9cbiAgQElucHV0KCkgdHlwZUNhbGVuZGFyOiBUeXBlQ2FsZW5kYXJFbnVtID0gVHlwZUNhbGVuZGFyRW51bS5OT1JNQUw7XG5cbiAgZGF0ZVRvVmlzdWFsaXplOiBGb3JtQ29udHJvbDtcblxuICAvKipcbiAgICogUGFyYSBldml0YXIgbnVldm9zIGV2ZW50b3MgbWllc3RyYXMgc2UgcmVhbGl6YSBlbCBwYXJzZW9cbiAgICovXG4gIHByaXZhdGUgaXNGcm9tSW5wdXRFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBWZXJpZmljYXIgc2kgZWwgZm9ybWF0byBlcyB2YWxpZG9cbiAgICovXG4gIGludmFsaWRGb3JtYXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBpbnB1dEZvcm1SZWFsOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKlxuICAqIFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUiA9ICdNTS9ZWVlZJ1xuICAqIFR5cGVDYWxlbmRhckVudW0uU1RSSUNUID0gJ0REIFtkZV0gTU1NTSBbZGVdIFlZWVknXG4gICogKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgbW9tZW50LmxvY2FsZSh0aGlzLmxvY2FsZSk7XG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUgPSBuZXcgRm9ybUNvbnRyb2woJycsIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbGlkYXRvcik7XG4gICAgdGhpcy5mb3JtSGFuZGxlcigpO1xuICAgIHRoaXMuaW5wdXRGb3JtUmVhbCA9IHRoaXMuZGF0ZUZvcm1Db250cm9sO1xuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC5yZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UoKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIGVzdGFibGVjZXIgdmFsb3IgcG9yIGRlZmVjdG8gZGUgbGEgZmVjaGFcbiAgICAgKi9cbiAgICBpZiAodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT09ICcnICYmIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbmNvbWluZ0RhdGU6IHN0cmluZyA9IG1vbWVudCh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcbiAgICAgIGlmIChpbmNvbWluZ0RhdGUgIT09ICdJbnZhbGlkIGRhdGUnKSB7XG4gICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKGluY29taW5nRGF0ZSk7XG4gICAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGdldCB0eXBlQ2FsZW5kYXJFbnVtKCk6IHR5cGVvZiBUeXBlQ2FsZW5kYXJFbnVtIHtcbiAgICByZXR1cm4gVHlwZUNhbGVuZGFyRW51bTtcbiAgfVxuXG4gIG9wZW5EYXRlUGlja2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dEYXRlUGlja2VyICYmICF0aGlzLmlzQ2xvc2VkKSB7XG4gICAgICB0aGlzLmlzQ2xvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTaG93Lm9wZW4oKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyB8fCAoZXZlbnQua2V5ID09PSAnICcgfHwgZXZlbnQuY29kZSA9PT0gXCJTcGFjZVwiKSkge1xuICAgICAgdGhpcy5vbkJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgaWYgKG1vbWVudCh0aGlzLmRhdGVUb1Zpc3VhbGl6ZS52YWx1ZSwgdGhpcy5kYXRlRm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCkpIHtcbiAgICBjb25zdCBpbmNvbWluZ0RhdGU6IHN0cmluZyA9IG1vbWVudCh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKGluY29taW5nRGF0ZSk7XG4gICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkudG9EYXRlKCkpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChtb21lbnQodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkudG9EYXRlKCkpO1xuICAgICAgaWYgKHRoaXMuc2hvd0RhdGVQaWNrZXIpIHtcbiAgICAgICAgdGhpcy5pc0Nsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlclNob3cub3BlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmEgY29tbyBzZSBkZWJlIGluaWNpYWxpemFyIGxhIHZpc3VhbGl6YWNpb24gZGVsIGNhbGVuZGFyXG4gICAqL1xuICBnZXRTdGFydFZpZXcoKTogc3RyaW5nIHtcbiAgICAvLyBtdWx0aS15ZWFyXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xuICAgICAgcmV0dXJuICdtdWx0aS15ZWFyJztcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uU1RSSUNUKSB7XG4gICAgICByZXR1cm4gJ21vbnRoJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdtb250aCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtSGFuZGxlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5TVFJJQ1QpIHtcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGRhdGU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQsIHRydWUpLmlzVmFsaWQoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcbiAgICAgICAgaWYgKCEhcmVzdWx0ICYmIChyZXN1bHQgPT09ICdJbnZhbGlkIGRhdGUnIHx8ICFpc1ZhbGlkKSkge1xuICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIXJlc3VsdCkge1xuICAgICAgICAgIGlmICghdGhpcy5pc0Zyb21JbnB1dEV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KHJlc3VsdCwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XG4gICAgICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShtb21lbnQocmVzdWx0LCB0aGlzLmRhdGVGb3JtYXQpLnRvRGF0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlQ2hhbmdlc1xuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YXAoKGRhdGU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGUudHJpbSgpLmxlbmd0aCA+IHRoaXMuZGF0ZUZvcm1hdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcigoZGF0ZTogc3RyaW5nKTogYm9vbGVhbiA9PiBkYXRlLmxlbmd0aCA9PT0gdGhpcy5kYXRlRm9ybWF0Lmxlbmd0aClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcbiAgICAgICAgICBjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG5cbiAgICAgICAgICBpZiAoISFyZXN1bHQgJiYgKHJlc3VsdCA9PT0gJ0ludmFsaWQgZGF0ZScgfHwgIWlzVmFsaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghIXJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRnJvbUlucHV0RXZlbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY29uc3Qgc3ViU3RyaW5nOiBzdHJpbmdbXSA9IHJlc3VsdC5zcGxpdCgnLScpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHllYXI6IG51bWJlciA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzBdKTtcbiAgICAgICAgICAgICAgY29uc3QgbW9udGg6IG51bWJlciA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzFdKTtcbiAgICAgICAgICAgICAgY29uc3QgZGF5OiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1syXSk7XG5cbiAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0RGF0ZShkYXkpO1xuICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0TW9udGgobW9udGggLSAxKTsgLy8gLTEgcG9yIHF1ZSBsb3MgbWVzZXMgc2UgdG9tYW4gY29tbyBsb3MgaW5kaWNlcyBlbiB1biBhcnJheVxuXG4gICAgICAgICAgICAgIC8qKiBjdWFuZG8gZXMgZGUgdGlwbyBNT1VOVEhfWUVBUiByZXRvcm5hIGVsIHVsdGltbyBkaWEgZGVsIG1lcyBzZWxlY2Npb25hZG8gKi9cbiAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGUgPSBtb21lbnQodGhpcy5kYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudCh0aGlzLmRhdGUsICdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xuICAgICAgICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmRhdGUpO1xuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBpbmNvbW1pbmdEYXRlOiBzdHJpbmcgPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcbiAgICAgICAgaWYgKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9PSAnJyAmJiBpbmNvbW1pbmdEYXRlICE9PSAnSW52YWxpZCBkYXRlJykge1xuICAgICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKGluY29tbWluZ0RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBsdWVnbyBzZWxlY2Npb25hciB1biBtZXNcbiAgICovXG4gIG1vbnRoU2VsZWN0ZWRIYW5kbGVyKGNob3Nlbk1vbnRoRGF0ZTogbW9tZW50Xy5Nb21lbnQsIGRhdGVwaWNrZXI6IE1hdERhdGVwaWNrZXI8bW9tZW50Xy5Nb21lbnQ+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcbiAgICAgIGRhdGVwaWNrZXIuY2xvc2UoKTtcbiAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSBtb21lbnQoY2hvc2VuTW9udGhEYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcblxuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KGRhdGUsICdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xuICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZSk7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudG8gZGVzZGUgZWwgY29udHJvbCB0b3VjaCBkZWwgY2FsZW5kYXJcbiAgICovXG4gIGRhdGVDaGFuZ2UodHlwZTogc3RyaW5nLCBldmVudDogTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQ8RGF0ZT4pOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZXZlbnQudmFsdWUsICdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKG5ldyBEYXRlKGV2ZW50LnZhbHVlKSk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChuZXcgRGF0ZShldmVudC52YWx1ZSkpO1xuICAgIHRoaXMuaXNDbG9zZWQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlICsgdGhpcy5kYXRlRm9ybWF0O1xuICB9XG5cbiAgZ2V0RGF0ZVRvQ29udHJvbCgpOiBEYXRlIHtcbiAgICByZXR1cm4gbW9tZW50KHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpLnRvRGF0ZSgpO1xuICB9XG5cbn1cbiJdfQ==