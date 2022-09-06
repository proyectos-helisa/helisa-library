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
                template: "<div>\r\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\r\n    <input matInput\r\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\" (keydown)=\"onKey($event)\" (focus)=\"openDatePicker()\" (blur)=\"onBlur()\">\r\n\r\n\r\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\r\n      ya que el valor es diferente cuando se escribe directamente en este\r\n    -->\r\n    <input matInput\r\n    [matDatepicker]=\"picker\"\r\n    hidden=\"hide\"\r\n    [value]=\"getDateToControl()\"\r\n    (dateChange)=\"dateChange('change', $event)\" [min]=\"minDate\" [max]=\"maxDate\">\r\n    <!--  -->\r\n\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"isDisabled\"></mat-datepicker-toggle>\r\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\r\n\r\n  </mat-form-field>\r\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\r\n  </div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGF0ZS1oZWxpc2EvZGF0ZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsTUFBTSxDQUFOLElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMxQixvQ0FBZ0IsQ0FBQTtJQUNoQiw4Q0FBMEIsQ0FBQTtJQUMxQixxQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUkzQjtBQVFELE1BQU0sT0FBTyxtQkFBbUI7SUEyQzlCO1FBeENTLGVBQVUsR0FBZ0MsT0FBTyxDQUFDO1FBQ2xELG9CQUFlLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRWhDOzs7O1dBSUc7UUFDTSxlQUFVLEdBQVcsWUFBWSxDQUFDO1FBQ2xDLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsaUJBQVksR0FBVyx1Q0FBdUMsQ0FBQztRQUMvRCxnQkFBVyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFHL0IsV0FBTSxHQUF1QixJQUFJLFlB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QUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzs7WUEzUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGdsQ0FBMkM7O2FBRTVDOzs7OzZCQUdFLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQUNwQyxLQUFLOzhCQUNMLEtBQUs7eUJBUUwsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxNQUFNOzJCQVNOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IG1vbWVudDogdHlwZW9mIG1vbWVudF8gPSBtb21lbnRfO1xyXG5cclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQsIE1hdERhdGVwaWNrZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgZW51bSBUeXBlQ2FsZW5kYXJFbnVtIHtcclxuICBOT1JNQUwgPSAnbm9ybWEnLFxyXG4gIE1PTlRIX1lFQVIgPSAnbW91bnRoLXllYXInLFxyXG4gIFNUUklDVCA9ICdzdHJpY3QnXHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1kYXRlLWhlbGlzYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXRlLWhlbGlzYS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGlja2VyJywgeyBzdGF0aWM6IHRydWUgfSkgZGF0ZVBpY2tlclNob3c6IE1hdERhdGVwaWNrZXI8RGF0ZT47XHJcbiAgQElucHV0KCkgZmxvYXRMYWJlbDogJ25ldmVyJyB8ICdhbHdheXMnIHwgJ2F1dG8nID0gJ25ldmVyJztcclxuICBASW5wdXQoKSBkYXRlRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBwcml2YXRlIGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAvKipcclxuICAgKiBGb3JtYXRvIGRlIGZlY2hhLlxyXG4gICAqIExvcyBmb3JtYXRvcyB2YWxpZG9zIHNvbiBhcXVlbGxvcyBxdWUgbWFuZWphIGxhIGxpYnJlcmlhIG1vbWVudGpzIHkgZXN0ZTogJ0REIFtkZV0gTU1NTSBbZGVdIFlZWVknXHJcbiAgICogaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL3BhcnNpbmcvc3RyaW5nLWZvcm1hdC9cclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRlRm9ybWF0OiBzdHJpbmcgPSAnREQvTU0vWVlZWSc7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmcgPSAnZXMnO1xyXG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJ0xhIGZlY2hhIG5vIGNvbmN1ZXJkYSBjb24gZWwgZm9ybWF0byAnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSB0aGlzLmRhdGVGb3JtYXQ7XHJcbiAgQElucHV0KCkgc2hvd0RhdGVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xyXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XHJcbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xyXG4gIGlzQ2xvc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHRpbWVvdXQ6IGFueTtcclxuICBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogU2kgZXN0ZSB2YWxvciBlcyBkaWZlcmVudGUgYSBUeXBlQ2FsZW5kYXJFbnVtLk5PUk1BTCBub1xyXG4gICAqIHNlcsOhIHRvbWFkbyBlbiBjdWVudGFcclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlQ2FsZW5kYXI6IFR5cGVDYWxlbmRhckVudW0gPSBUeXBlQ2FsZW5kYXJFbnVtLk5PUk1BTDtcclxuXHJcbiAgZGF0ZVRvVmlzdWFsaXplOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgLyoqXHJcbiAgICogUGFyYSBldml0YXIgbnVldm9zIGV2ZW50b3MgbWllc3RyYXMgc2UgcmVhbGl6YSBlbCBwYXJzZW9cclxuICAgKi9cclxuICBwcml2YXRlIGlzRnJvbUlucHV0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpY2FyIHNpIGVsIGZvcm1hdG8gZXMgdmFsaWRvXHJcbiAgICovXHJcbiAgaW52YWxpZEZvcm1hdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaW5wdXRGb3JtUmVhbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKlxyXG4gICogVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSID0gJ01NL1lZWVknXHJcbiAgKiBUeXBlQ2FsZW5kYXJFbnVtLlNUUklDVCA9ICdERCBbZGVdIE1NTU0gW2RlXSBZWVlZJ1xyXG4gICogKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIG1vbWVudC5sb2NhbGUodGhpcy5sb2NhbGUpO1xyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUgPSBuZXcgRm9ybUNvbnRyb2woJycsIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbGlkYXRvcik7XHJcbiAgICB0aGlzLmZvcm1IYW5kbGVyKCk7XHJcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwgPSB0aGlzLmRhdGVGb3JtQ29udHJvbDtcclxuICAgIHRoaXMuaW5wdXRGb3JtUmVhbC5yZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UoKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcclxuICAgICAgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLmRpc2FibGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5lbmFibGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBlc3RhYmxlY2VyIHZhbG9yIHBvciBkZWZlY3RvIGRlIGxhIGZlY2hhXHJcbiAgICAgKi9cclxuICAgIGlmICh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPT0gJycgJiYgdGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgaW5jb21pbmdEYXRlOiBzdHJpbmcgPSBtb21lbnQodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XHJcbiAgICAgIGlmIChpbmNvbWluZ0RhdGUgIT09ICdJbnZhbGlkIGRhdGUnKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUoaW5jb21pbmdEYXRlKTtcclxuICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZUNhbGVuZGFyRW51bSgpOiB0eXBlb2YgVHlwZUNhbGVuZGFyRW51bSB7XHJcbiAgICByZXR1cm4gVHlwZUNhbGVuZGFyRW51bTtcclxuICB9XHJcblxyXG4gIG9wZW5EYXRlUGlja2VyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2hvd0RhdGVQaWNrZXIgJiYgIXRoaXMuaXNDbG9zZWQpIHtcclxuICAgICAgdGhpcy5pc0Nsb3NlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlclNob3cub3BlbigpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIHRoaXMub25CbHVyKCk7XHJcbiAgICAgIHRoaXMuaXNDbG9zZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmRhdGVQaWNrZXJTaG93Lm9wZW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cigpOiB2b2lkIHtcclxuICAgIGlmIChtb21lbnQodGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpKSB7XHJcbiAgICAgIGNvbnN0IGluY29taW5nRGF0ZTogc3RyaW5nID0gbW9tZW50KHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xyXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShpbmNvbWluZ0RhdGUpO1xyXG4gICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkudG9EYXRlKCkpO1xyXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KG1vbWVudCh0aGlzLmRhdGVUb1Zpc3VhbGl6ZS52YWx1ZSwgdGhpcy5kYXRlRm9ybWF0KS50b0RhdGUoKSk7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICB0aGlzLmlzQ2xvc2VkID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLnNob3dEYXRlUGlja2VyKSB7XHJcbiAgICAgICAgdGhpcy5pc0Nsb3NlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyU2hvdy5vcGVuKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmEgY29tbyBzZSBkZWJlIGluaWNpYWxpemFyIGxhIHZpc3VhbGl6YWNpb24gZGVsIGNhbGVuZGFyXHJcbiAgICovXHJcbiAgZ2V0U3RhcnRWaWV3KCk6IHN0cmluZyB7XHJcbiAgICAvLyBtdWx0aS15ZWFyXHJcbiAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XHJcbiAgICAgIHJldHVybiAnbXVsdGkteWVhcic7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uU1RSSUNUKSB7XHJcbiAgICAgIHJldHVybiAnbW9udGgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdtb250aCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSB0aGlzLnR5cGVDYWxlbmRhckVudW0uU1RSSUNUKSB7XHJcbiAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGRhdGU6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQ6IGJvb2xlYW4gPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcclxuICAgICAgICBpZiAoISFyZXN1bHQgJiYgKHJlc3VsdCA9PT0gJ0ludmFsaWQgZGF0ZScgfHwgIWlzVmFsaWQpKSB7XHJcbiAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISFyZXN1bHQpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5pc0Zyb21JbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChyZXN1bHQsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShtb21lbnQocmVzdWx0LCB0aGlzLmRhdGVGb3JtYXQpLnRvRGF0ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS52YWx1ZUNoYW5nZXNcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRhcCgoZGF0ZTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRlLnRyaW0oKS5sZW5ndGggPiB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBmaWx0ZXIoKGRhdGU6IHN0cmluZyk6IGJvb2xlYW4gPT4gZGF0ZS5sZW5ndGggPT09IHRoaXMuZGF0ZUZvcm1hdC5sZW5ndGgpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGU6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuXHJcbiAgICAgICAgICBpZiAoISFyZXN1bHQgJiYgKHJlc3VsdCA9PT0gJ0ludmFsaWQgZGF0ZScgfHwgIWlzVmFsaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoISFyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRnJvbUlucHV0RXZlbnQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1YlN0cmluZzogc3RyaW5nW10gPSByZXN1bHQuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgeWVhcjogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMF0pO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1sxXSk7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF5OiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1syXSk7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0RGF0ZShkYXkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXRNb250aChtb250aCAtIDEpOyAvLyAtMSBwb3IgcXVlIGxvcyBtZXNlcyBzZSB0b21hbiBjb21vIGxvcyBpbmRpY2VzIGVuIHVuIGFycmF5XHJcblxyXG4gICAgICAgICAgICAgIC8qKiBjdWFuZG8gZXMgZGUgdGlwbyBNT1VOVEhfWUVBUiByZXRvcm5hIGVsIHVsdGltbyBkaWEgZGVsIG1lcyBzZWxlY2Npb25hZG8gKi9cclxuICAgICAgICAgICAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gbW9tZW50KHRoaXMuZGF0ZSkuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmRhdGUpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAuc3Vic2NyaWJlKChkYXRlOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBpbmNvbW1pbmdEYXRlOiBzdHJpbmcgPSBtb21lbnQoZGF0ZSwgdGhpcy5kYXRlRm9ybWF0KS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcclxuICAgICAgICBpZiAodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUgIT09ICcnICYmIGluY29tbWluZ0RhdGUgIT09ICdJbnZhbGlkIGRhdGUnKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShpbmNvbW1pbmdEYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBxdWUgc2UgZGlzcGFyYSBsdWVnbyBzZWxlY2Npb25hciB1biBtZXNcclxuICAgKi9cclxuICBtb250aFNlbGVjdGVkSGFuZGxlcihjaG9zZW5Nb250aERhdGU6IG1vbWVudF8uTW9tZW50LCBkYXRlcGlja2VyOiBNYXREYXRlcGlja2VyPG1vbWVudF8uTW9tZW50Pik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcclxuICAgICAgZGF0ZXBpY2tlci5jbG9zZSgpO1xyXG4gICAgICBjb25zdCBkYXRlOiBEYXRlID0gbW9tZW50KGNob3Nlbk1vbnRoRGF0ZSkuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcblxyXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XHJcbiAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKGRhdGUpO1xyXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGRhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIGRlc2RlIGVsIGNvbnRyb2wgdG91Y2ggZGVsIGNhbGVuZGFyXHJcbiAgICovXHJcbiAgZGF0ZUNoYW5nZSh0eXBlOiBzdHJpbmcsIGV2ZW50OiBNYXREYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPik6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KGV2ZW50LnZhbHVlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcclxuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKG5ldyBEYXRlKGV2ZW50LnZhbHVlKSk7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KG5ldyBEYXRlKGV2ZW50LnZhbHVlKSk7XHJcbiAgICB0aGlzLmlzQ2xvc2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlICsgdGhpcy5kYXRlRm9ybWF0O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZVRvQ29udHJvbCgpOiBEYXRlIHtcclxuICAgIHJldHVybiBtb21lbnQodGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkudG9EYXRlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=