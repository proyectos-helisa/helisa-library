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
        this.showErrorMessage = true;
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
        if (event.key === 'Enter') {
            this.onBlur();
            this.isClosed = true;
            this.datePickerShow.open();
        }
    }
    onBlur() {
        if (moment(this.dateToVisualize.value, this.dateFormat, true).isValid()) {
            const incomingDate = moment(this.dateToVisualize.value, this.dateFormat).format(this.dateFormat);
            this.dateToVisualize.setValue(incomingDate);
            this.dateFormControl.setValue(moment(this.dateToVisualize.value, this.dateFormat).toDate());
            this.change.emit(moment(this.dateToVisualize.value, this.dateFormat).toDate());
            clearTimeout(this.timeout);
            this.isClosed = false;
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
                template: "<div>\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\n    <input matInput\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\" (keydown)=\"onKey($event)\" (focus)=\"openDatePicker()\" (blur)=\"onBlur()\">\n\n\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\n      ya que el valor es diferente cuando se escribe directamente en este\n    -->\n    <input matInput\n    [matDatepicker]=\"picker\"\n    hidden=\"hide\"\n    [value]=\"getDateToControl()\"\n    (dateChange)=\"dateChange('change', $event)\" [min]=\"minDate\" [max]=\"maxDate\">\n    <!--  -->\n\n    <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"isDisabled\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\n\n  </mat-form-field>\n  <mat-error *ngIf=\"showErrorMessage && invalidFormat\">{{getErrorMessage()}}</mat-error>\n  </div>\n",
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
    showErrorMessage: [{ type: Input }],
    placeholder: [{ type: Input }],
    showDatePicker: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    change: [{ type: Output }],
    typeCalendar: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZS1oZWxpc2EvZGF0ZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsTUFBTSxDQUFOLElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMxQixvQ0FBZ0IsQ0FBQTtJQUNoQiw4Q0FBMEIsQ0FBQTtJQUMxQixxQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUkzQjtBQVFELE1BQU0sT0FBTyxtQkFBbUI7SUE0QzlCO1FBekNTLGVBQVUsR0FBZ0MsT0FBTyxDQUFDO1FBQ2xELG9CQUFlLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRWhDOzs7O1dBSUc7UUFDTSxlQUFVLEdBQVcsWUFBWSxDQUFDO1FBQ2xDLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsaUJBQVksR0FBVyx1Q0FBdUMsQ0FBQztRQUMvRCxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsZ0JBQVcsR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRy9C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QUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEUsQ0FBQzs7O1lBNVBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix3akNBQTJDOzthQUU1Qzs7Ozs2QkFHRSxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFDcEMsS0FBSzs4QkFDTCxLQUFLO3lCQVFMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxNQUFNOzJCQVNOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQ6IHR5cGVvZiBtb21lbnRfID0gbW9tZW50XztcblxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQsIE1hdERhdGVwaWNrZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZW51bSBUeXBlQ2FsZW5kYXJFbnVtIHtcbiAgTk9STUFMID0gJ25vcm1hJyxcbiAgTU9OVEhfWUVBUiA9ICdtb3VudGgteWVhcicsXG4gIFNUUklDVCA9ICdzdHJpY3QnXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLWRhdGUtaGVsaXNhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1oZWxpc2EuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdwaWNrZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBkYXRlUGlja2VyU2hvdzogTWF0RGF0ZXBpY2tlcjxEYXRlPjtcbiAgQElucHV0KCkgZmxvYXRMYWJlbDogJ25ldmVyJyB8ICdhbHdheXMnIHwgJ2F1dG8nID0gJ25ldmVyJztcbiAgQElucHV0KCkgZGF0ZUZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIHByaXZhdGUgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgLyoqXG4gICAqIEZvcm1hdG8gZGUgZmVjaGEuXG4gICAqIExvcyBmb3JtYXRvcyB2YWxpZG9zIHNvbiBhcXVlbGxvcyBxdWUgbWFuZWphIGxhIGxpYnJlcmlhIG1vbWVudGpzIHkgZXN0ZTogJ0REIFtkZV0gTU1NTSBbZGVdIFlZWVknXG4gICAqIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9wYXJzaW5nL3N0cmluZy1mb3JtYXQvXG4gICAqL1xuICBASW5wdXQoKSBkYXRlRm9ybWF0OiBzdHJpbmcgPSAnREQvTU0vWVlZWSc7XG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nID0gJ2VzJztcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnTGEgZmVjaGEgbm8gY29uY3VlcmRhIGNvbiBlbCBmb3JtYXRvICc7XG4gIEBJbnB1dCgpIHNob3dFcnJvck1lc3NhZ2U6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gdGhpcy5kYXRlRm9ybWF0O1xuICBASW5wdXQoKSBzaG93RGF0ZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG4gIGlzQ2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdGltZW91dDogYW55O1xuICBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBTaSBlc3RlIHZhbG9yIGVzIGRpZmVyZW50ZSBhIFR5cGVDYWxlbmRhckVudW0uTk9STUFMIG5vXG4gICAqIHNlcsOhIHRvbWFkbyBlbiBjdWVudGFcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVDYWxlbmRhcjogVHlwZUNhbGVuZGFyRW51bSA9IFR5cGVDYWxlbmRhckVudW0uTk9STUFMO1xuXG4gIGRhdGVUb1Zpc3VhbGl6ZTogRm9ybUNvbnRyb2w7XG5cbiAgLyoqXG4gICAqIFBhcmEgZXZpdGFyIG51ZXZvcyBldmVudG9zIG1pZXN0cmFzIHNlIHJlYWxpemEgZWwgcGFyc2VvXG4gICAqL1xuICBwcml2YXRlIGlzRnJvbUlucHV0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVmVyaWZpY2FyIHNpIGVsIGZvcm1hdG8gZXMgdmFsaWRvXG4gICAqL1xuICBpbnZhbGlkRm9ybWF0OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgaW5wdXRGb3JtUmVhbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLypcbiAgKiBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIgPSAnTU0vWVlZWSdcbiAgKiBUeXBlQ2FsZW5kYXJFbnVtLlNUUklDVCA9ICdERCBbZGVdIE1NTU0gW2RlXSBZWVlZJ1xuICAqICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIG1vbWVudC5sb2NhbGUodGhpcy5sb2NhbGUpO1xuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplID0gbmV3IEZvcm1Db250cm9sKCcnLCB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWxpZGF0b3IpO1xuICAgIHRoaXMuZm9ybUhhbmRsZXIoKTtcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwgPSB0aGlzLmRhdGVGb3JtQ29udHJvbDtcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKChpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5kaXNhYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBlc3RhYmxlY2VyIHZhbG9yIHBvciBkZWZlY3RvIGRlIGxhIGZlY2hhXG4gICAgICovXG4gICAgaWYgKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9PSAnJyAmJiB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5jb21pbmdEYXRlOiBzdHJpbmcgPSBtb21lbnQodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XG4gICAgICBpZiAoaW5jb21pbmdEYXRlICE9PSAnSW52YWxpZCBkYXRlJykge1xuICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShpbmNvbWluZ0RhdGUpO1xuICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBnZXQgdHlwZUNhbGVuZGFyRW51bSgpOiB0eXBlb2YgVHlwZUNhbGVuZGFyRW51bSB7XG4gICAgcmV0dXJuIFR5cGVDYWxlbmRhckVudW07XG4gIH1cblxuICBvcGVuRGF0ZVBpY2tlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93RGF0ZVBpY2tlciAmJiAhdGhpcy5pc0Nsb3NlZCkge1xuICAgICAgdGhpcy5pc0Nsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyU2hvdy5vcGVuKCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG4gIH1cblxuICBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMub25CbHVyKCk7XG4gICAgICB0aGlzLmlzQ2xvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNob3cub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICBpZiAobW9tZW50KHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlLCB0aGlzLmRhdGVGb3JtYXQsIHRydWUpLmlzVmFsaWQoKSkge1xuICAgICAgY29uc3QgaW5jb21pbmdEYXRlOiBzdHJpbmcgPSBtb21lbnQodGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShpbmNvbWluZ0RhdGUpO1xuICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUobW9tZW50KHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpLnRvRGF0ZSgpKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQobW9tZW50KHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpLnRvRGF0ZSgpKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgdGhpcy5pc0Nsb3NlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuc2hvd0RhdGVQaWNrZXIpIHtcbiAgICAgICAgdGhpcy5pc0Nsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlclNob3cub3BlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIERldGVybWluYSBjb21vIHNlIGRlYmUgaW5pY2lhbGl6YXIgbGEgdmlzdWFsaXphY2lvbiBkZWwgY2FsZW5kYXJcbiAgICovXG4gIGdldFN0YXJ0VmlldygpOiBzdHJpbmcge1xuICAgIC8vIG11bHRpLXllYXJcbiAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XG4gICAgICByZXR1cm4gJ211bHRpLXllYXInO1xuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5TVFJJQ1QpIHtcbiAgICAgIHJldHVybiAnbW9udGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ21vbnRoJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvcm1IYW5kbGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLlNUUklDVCkge1xuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xuICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xuICAgICAgICBpZiAoISFyZXN1bHQgJiYgKHJlc3VsdCA9PT0gJ0ludmFsaWQgZGF0ZScgfHwgIWlzVmFsaWQpKSB7XG4gICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEhcmVzdWx0KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzRnJvbUlucHV0RXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQocmVzdWx0LCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcbiAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudChyZXN1bHQsIHRoaXMuZGF0ZUZvcm1hdCkudG9EYXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRhcCgoZGF0ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0ZS50cmltKCkubGVuZ3RoID4gdGhpcy5kYXRlRm9ybWF0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKChkYXRlOiBzdHJpbmcpOiBib29sZWFuID0+IGRhdGUubGVuZ3RoID09PSB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGlzVmFsaWQ6IGJvb2xlYW4gPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCk7XG4gICAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcblxuICAgICAgICAgIGlmICghIXJlc3VsdCAmJiAocmVzdWx0ID09PSAnSW52YWxpZCBkYXRlJyB8fCAhaXNWYWxpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEhcmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGcm9tSW5wdXRFdmVudCkge1xuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICBjb25zdCBzdWJTdHJpbmc6IHN0cmluZ1tdID0gcmVzdWx0LnNwbGl0KCctJyk7XG5cbiAgICAgICAgICAgICAgY29uc3QgeWVhcjogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMF0pO1xuICAgICAgICAgICAgICBjb25zdCBtb250aDogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMV0pO1xuICAgICAgICAgICAgICBjb25zdCBkYXk6IG51bWJlciA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzJdKTtcblxuICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXREYXRlKGRheSk7XG4gICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXRNb250aChtb250aCAtIDEpOyAvLyAtMSBwb3IgcXVlIGxvcyBtZXNlcyBzZSB0b21hbiBjb21vIGxvcyBpbmRpY2VzIGVuIHVuIGFycmF5XG5cbiAgICAgICAgICAgICAgLyoqIGN1YW5kbyBlcyBkZSB0aXBvIE1PVU5USF9ZRUFSIHJldG9ybmEgZWwgdWx0aW1vIGRpYSBkZWwgbWVzIHNlbGVjY2lvbmFkbyAqL1xuICAgICAgICAgICAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG1vbWVudCh0aGlzLmRhdGUpLmVuZE9mKCdtb250aCcpLnRvRGF0ZSgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KHRoaXMuZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XG4gICAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuZGF0ZSk7XG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IGluY29tbWluZ0RhdGU6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xuICAgICAgICBpZiAodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT09ICcnICYmIGluY29tbWluZ0RhdGUgIT09ICdJbnZhbGlkIGRhdGUnKSB7XG4gICAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUoaW5jb21taW5nRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGx1ZWdvIHNlbGVjY2lvbmFyIHVuIG1lc1xuICAgKi9cbiAgbW9udGhTZWxlY3RlZEhhbmRsZXIoY2hvc2VuTW9udGhEYXRlOiBtb21lbnRfLk1vbWVudCwgZGF0ZXBpY2tlcjogTWF0RGF0ZXBpY2tlcjxtb21lbnRfLk1vbWVudD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xuICAgICAgZGF0ZXBpY2tlci5jbG9zZSgpO1xuICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IG1vbWVudChjaG9zZW5Nb250aERhdGUpLmVuZE9mKCdtb250aCcpLnRvRGF0ZSgpO1xuXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XG4gICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShkYXRlKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBkZXNkZSBlbCBjb250cm9sIHRvdWNoIGRlbCBjYWxlbmRhclxuICAgKi9cbiAgZGF0ZUNoYW5nZSh0eXBlOiBzdHJpbmcsIGV2ZW50OiBNYXREYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPik6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChldmVudC52YWx1ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XG4gICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUobmV3IERhdGUoZXZlbnQudmFsdWUpKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KG5ldyBEYXRlKGV2ZW50LnZhbHVlKSk7XG4gICAgdGhpcy5pc0Nsb3NlZCA9IHRydWU7XG4gIH1cblxuICBnZXRFcnJvck1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2UgKyB0aGlzLmRhdGVGb3JtYXQ7XG4gIH1cblxuICBnZXREYXRlVG9Db250cm9sKCk6IERhdGUge1xuICAgIHJldHVybiBtb21lbnQodGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkudG9EYXRlKCk7XG4gIH1cblxufVxuIl19