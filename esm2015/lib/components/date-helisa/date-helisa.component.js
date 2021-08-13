import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/form-field';
import * as ɵngcc2 from '@angular/material/input';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from '@angular/material/datepicker';
import * as ɵngcc5 from '@angular/common';

const _c0 = ["picker"];
function DateHelisaComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.getErrorMessage());
} }
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
        if (event.key === ' ' && this.showDatePicker) {
            this.onBlur();
            this.isClosed = true;
            this.datePickerShow.open();
        }
    }
    onBlur() {
        clearTimeout(this.timeout);
        this.isClosed = false;
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
                if (date.length > this.dateFormat.length) {
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
        }
    }
    /**
     * Evento desde el control touch del calendar
     */
    dateChange(type, event) {
        this.dateToVisualize.setValue(moment(event.value, 'YYYY-MM-DD').format(this.dateFormat));
        this.dateFormControl.setValue(event.value);
        this.change.emit(event.value);
        this.isClosed = true;
    }
    getErrorMessage() {
        return this.errorMessage + this.dateFormat;
    }
}
DateHelisaComponent.ɵfac = function DateHelisaComponent_Factory(t) { return new (t || DateHelisaComponent)(); };
DateHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DateHelisaComponent, selectors: [["hel-date-helisa"]], viewQuery: function DateHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.datePickerShow = _t.first);
    } }, inputs: { floatLabel: "floatLabel", dateFormControl: "dateFormControl", dateFormat: "dateFormat", locale: "locale", errorMessage: "errorMessage", placeholder: "placeholder", showDatePicker: "showDatePicker", typeCalendar: "typeCalendar", minDate: "minDate", maxDate: "maxDate" }, outputs: { change: "change" }, decls: 8, vars: 11, consts: [[1, "example-full-width", 3, "floatLabel"], ["matInput", "", 3, "formControl", "placeholder", "keydown", "focus", "blur"], ["matInput", "", "hidden", "hide", 3, "matDatepicker", "value", "min", "max", "dateChange"], ["matSuffix", "", 3, "for", "disabled"], ["touchUi", "", 3, "startView", "monthSelected"], ["picker", ""], [4, "ngIf"]], template: function DateHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "mat-form-field", 0);
        ɵngcc0.ɵɵelementStart(2, "input", 1);
        ɵngcc0.ɵɵlistener("keydown", function DateHelisaComponent_Template_input_keydown_2_listener($event) { return ctx.onKey($event); })("focus", function DateHelisaComponent_Template_input_focus_2_listener() { return ctx.openDatePicker(); })("blur", function DateHelisaComponent_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "input", 2);
        ɵngcc0.ɵɵlistener("dateChange", function DateHelisaComponent_Template_input_dateChange_3_listener($event) { return ctx.dateChange("change", $event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "mat-datepicker-toggle", 3);
        ɵngcc0.ɵɵelementStart(5, "mat-datepicker", 4, 5);
        ɵngcc0.ɵɵlistener("monthSelected", function DateHelisaComponent_Template_mat_datepicker_monthSelected_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const _r0 = ɵngcc0.ɵɵreference(6); return ctx.monthSelectedHandler($event, _r0); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, DateHelisaComponent_mat_error_7_Template, 2, 1, "mat-error", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(6);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("floatLabel", ctx.floatLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("formControl", ctx.dateToVisualize)("placeholder", ctx.placeholder);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("matDatepicker", _r0)("value", ctx.dateToVisualize.value)("min", ctx.minDate)("max", ctx.maxDate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("for", _r0)("disabled", ctx.isDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("startView", ctx.getStartView());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.invalidFormat);
    } }, directives: [ɵngcc1.MatFormField, ɵngcc2.MatInput, ɵngcc3.DefaultValueAccessor, ɵngcc3.NgControlStatus, ɵngcc3.FormControlDirective, ɵngcc4.MatDatepickerInput, ɵngcc4.MatDatepickerToggle, ɵngcc1.MatSuffix, ɵngcc4.MatDatepicker, ɵngcc5.NgIf, ɵngcc1.MatError], styles: [""] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-date-helisa',
                template: "<div>\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\n    <input matInput\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\" (keydown)=\"onKey($event)\" (focus)=\"openDatePicker()\" (blur)=\"onBlur()\">\n\n\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\n      ya que el valor es diferente cuando se escribe directamente en este\n    -->\n    <input matInput\n    [matDatepicker]=\"picker\"\n    hidden=\"hide\"\n    [value]=\"dateToVisualize.value\"\n    (dateChange)=\"dateChange('change', $event)\" [min]=\"minDate\" [max]=\"maxDate\">\n    <!--  -->\n\n    <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"isDisabled\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\n\n  </mat-form-field>\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\n  </div>\n",
                styles: [""]
            }]
    }], function () { return []; }, { floatLabel: [{
            type: Input
        }], dateFormControl: [{
            type: Input
        }], dateFormat: [{
            type: Input
        }], locale: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], showDatePicker: [{
            type: Input
        }], change: [{
            type: Output
        }], typeCalendar: [{
            type: Input
        }], datePickerShow: [{
            type: ViewChild,
            args: ['picker', { static: true }]
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy9saWIvY29tcG9uZW50cy9kYXRlLWhlbGlzYS9kYXRlLWhlbGlzYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbEMsTUFBTSxNQUFNLEdBQW1CLE9BQU8sQ0FBQztBQUd2QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE1BQU0sQ0FBTixJQUFZLGdCQUlYO0FBSkQsV0FBWSxnQkFBZ0I7QUFDM0IsSUFBQyxvQ0FBZ0IsQ0FBQTtBQUFDLElBQ2pCLDhDQUEwQixDQUFBO0FBQUMsSUFDM0IscUNBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJM0I7QUFRRCxNQUFNLE9BQU8sbUJBQW1CO0FBQUcsSUEyQ2pDO0FBQWdCLFFBeENQLGVBQVUsR0FBZ0MsT0FBTyxDQUFDO0FBQzdELFFBQVcsb0JBQWUsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDOUQsUUFBVSxTQUFJLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNsQyxRQUNFO0FBQ0Y7QUFDTTtBQUNNO0FBRUEsV0FEUDtBQUNMLFFBQVcsZUFBVSxHQUFXLFlBQVksQ0FBQztBQUM3QyxRQUFXLFdBQU0sR0FBVyxJQUFJLENBQUM7QUFDakMsUUFBVyxpQkFBWSxHQUFXLHVDQUF1QyxDQUFDO0FBQzFFLFFBQVcsZ0JBQVcsR0FBVyxJ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SywyQkFDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHFCQUNWLE1BQU07QUFBSywyQkFTWCxLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50OiB0eXBlb2YgbW9tZW50XyA9IG1vbWVudF87XG5cbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50LCBNYXREYXRlcGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGVudW0gVHlwZUNhbGVuZGFyRW51bSB7XG4gIE5PUk1BTCA9ICdub3JtYScsXG4gIE1PTlRIX1lFQVIgPSAnbW91bnRoLXllYXInLFxuICBTVFJJQ1QgPSAnc3RyaWN0J1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1kYXRlLWhlbGlzYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgncGlja2VyJywgeyBzdGF0aWM6IHRydWUgfSkgZGF0ZVBpY2tlclNob3c6IE1hdERhdGVwaWNrZXI8RGF0ZT47XG4gIEBJbnB1dCgpIGZsb2F0TGFiZWw6ICduZXZlcicgfCAnYWx3YXlzJyB8ICdhdXRvJyA9ICduZXZlcic7XG4gIEBJbnB1dCgpIGRhdGVGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBwcml2YXRlIGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIC8qKlxuICAgKiBGb3JtYXRvIGRlIGZlY2hhLlxuICAgKiBMb3MgZm9ybWF0b3MgdmFsaWRvcyBzb24gYXF1ZWxsb3MgcXVlIG1hbmVqYSBsYSBsaWJyZXJpYSBtb21lbnRqcyB5IGVzdGU6ICdERCBbZGVdIE1NTU0gW2RlXSBZWVlZJ1xuICAgKiBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvcGFyc2luZy9zdHJpbmctZm9ybWF0L1xuICAgKi9cbiAgQElucHV0KCkgZGF0ZUZvcm1hdDogc3RyaW5nID0gJ0REL01NL1lZWVknO1xuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZyA9ICdlcyc7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJ0xhIGZlY2hhIG5vIGNvbmN1ZXJkYSBjb24gZWwgZm9ybWF0byAnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gdGhpcy5kYXRlRm9ybWF0O1xuICBASW5wdXQoKSBzaG93RGF0ZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG4gIGlzQ2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdGltZW91dDogYW55O1xuICBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBTaSBlc3RlIHZhbG9yIGVzIGRpZmVyZW50ZSBhIFR5cGVDYWxlbmRhckVudW0uTk9STUFMIG5vXG4gICAqIHNlcsOhIHRvbWFkbyBlbiBjdWVudGFcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVDYWxlbmRhcjogVHlwZUNhbGVuZGFyRW51bSA9IFR5cGVDYWxlbmRhckVudW0uTk9STUFMO1xuXG4gIGRhdGVUb1Zpc3VhbGl6ZTogRm9ybUNvbnRyb2w7XG5cbiAgLyoqXG4gICAqIFBhcmEgZXZpdGFyIG51ZXZvcyBldmVudG9zIG1pZXN0cmFzIHNlIHJlYWxpemEgZWwgcGFyc2VvXG4gICAqL1xuICBwcml2YXRlIGlzRnJvbUlucHV0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVmVyaWZpY2FyIHNpIGVsIGZvcm1hdG8gZXMgdmFsaWRvXG4gICAqL1xuICBpbnZhbGlkRm9ybWF0OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgaW5wdXRGb3JtUmVhbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLypcbiAgKiBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIgPSAnTU0vWVlZWSdcbiAgKiBUeXBlQ2FsZW5kYXJFbnVtLlNUUklDVCA9ICdERCBbZGVdIE1NTU0gW2RlXSBZWVlZJ1xuICAqICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIG1vbWVudC5sb2NhbGUodGhpcy5sb2NhbGUpO1xuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplID0gbmV3IEZvcm1Db250cm9sKCcnLCB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWxpZGF0b3IpO1xuICAgIHRoaXMuZm9ybUhhbmRsZXIoKTtcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwgPSB0aGlzLmRhdGVGb3JtQ29udHJvbDtcbiAgICB0aGlzLmlucHV0Rm9ybVJlYWwucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKChpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5kaXNhYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBlc3RhYmxlY2VyIHZhbG9yIHBvciBkZWZlY3RvIGRlIGxhIGZlY2hhXG4gICAgICovXG4gICAgaWYgKHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbHVlICE9PSAnJyAmJiB0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5jb21pbmdEYXRlOiBzdHJpbmcgPSBtb21lbnQodGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XG4gICAgICBpZiAoaW5jb21pbmdEYXRlICE9PSAnSW52YWxpZCBkYXRlJykge1xuICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShpbmNvbWluZ0RhdGUpO1xuICAgICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBnZXQgdHlwZUNhbGVuZGFyRW51bSgpOiB0eXBlb2YgVHlwZUNhbGVuZGFyRW51bSB7XG4gICAgcmV0dXJuIFR5cGVDYWxlbmRhckVudW07XG4gIH1cblxuICBvcGVuRGF0ZVBpY2tlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93RGF0ZVBpY2tlciAmJiAhdGhpcy5pc0Nsb3NlZCkge1xuICAgICAgdGhpcy5pc0Nsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyU2hvdy5vcGVuKCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG4gIH1cblxuICBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICcgJyAmJiB0aGlzLnNob3dEYXRlUGlja2VyKSB7XG4gICAgICB0aGlzLm9uQmx1cigpO1xuICAgICAgdGhpcy5pc0Nsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTaG93Lm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy5pc0Nsb3NlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluYSBjb21vIHNlIGRlYmUgaW5pY2lhbGl6YXIgbGEgdmlzdWFsaXphY2lvbiBkZWwgY2FsZW5kYXJcbiAgICovXG4gIGdldFN0YXJ0VmlldygpOiBzdHJpbmcge1xuICAgIC8vIG11bHRpLXllYXJcbiAgICBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XG4gICAgICByZXR1cm4gJ211bHRpLXllYXInO1xuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlQ2FsZW5kYXIgPT09IHRoaXMudHlwZUNhbGVuZGFyRW51bS5TVFJJQ1QpIHtcbiAgICAgIHJldHVybiAnbW9udGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ21vbnRoJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvcm1IYW5kbGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLlNUUklDVCkge1xuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xuICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xuICAgICAgICBpZiAoISFyZXN1bHQgJiYgKHJlc3VsdCA9PT0gJ0ludmFsaWQgZGF0ZScgfHwgIWlzVmFsaWQpKSB7XG4gICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEhcmVzdWx0KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzRnJvbUlucHV0RXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQocmVzdWx0LCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcbiAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudChyZXN1bHQsIHRoaXMuZGF0ZUZvcm1hdCkudG9EYXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUudmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRhcCgoZGF0ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0ZS5sZW5ndGggPiB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1hdCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaWx0ZXIoKGRhdGU6IHN0cmluZyk6IGJvb2xlYW4gPT4gZGF0ZS5sZW5ndGggPT09IHRoaXMuZGF0ZUZvcm1hdC5sZW5ndGgpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2U7XG4gICAgICAgICAgY29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQsIHRydWUpLmlzVmFsaWQoKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IG1vbWVudChkYXRlLCB0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuXG4gICAgICAgICAgaWYgKCEhcmVzdWx0ICYmIChyZXN1bHQgPT09ICdJbnZhbGlkIGRhdGUnIHx8ICFpc1ZhbGlkKSkge1xuICAgICAgICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoISFyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Zyb21JbnB1dEV2ZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YlN0cmluZzogc3RyaW5nW10gPSByZXN1bHQuc3BsaXQoJy0nKTtcblxuICAgICAgICAgICAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1swXSk7XG4gICAgICAgICAgICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSBwYXJzZUZsb2F0KHN1YlN0cmluZ1sxXSk7XG4gICAgICAgICAgICAgIGNvbnN0IGRheTogbnVtYmVyID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMl0pO1xuXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldERhdGUoZGF5KTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7IC8vIC0xIHBvciBxdWUgbG9zIG1lc2VzIHNlIHRvbWFuIGNvbW8gbG9zIGluZGljZXMgZW4gdW4gYXJyYXlcblxuICAgICAgICAgICAgICAvKiogY3VhbmRvIGVzIGRlIHRpcG8gTU9VTlRIX1lFQVIgcmV0b3JuYSBlbCB1bHRpbW8gZGlhIGRlbCBtZXMgc2VsZWNjaW9uYWRvICovXG4gICAgICAgICAgICAgIGlmICh0aGlzLnR5cGVDYWxlbmRhciA9PT0gVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gbW9tZW50KHRoaXMuZGF0ZSkuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQodGhpcy5kYXRlLCAnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlKTtcbiAgICAgICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRnJvbUlucHV0RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAuc3Vic2NyaWJlKChkYXRlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgaW5jb21taW5nRGF0ZTogc3RyaW5nID0gbW9tZW50KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XG4gICAgICAgIGlmICh0aGlzLmRhdGVGb3JtQ29udHJvbC52YWx1ZSAhPT0gJycgJiYgaW5jb21taW5nRGF0ZSAhPT0gJ0ludmFsaWQgZGF0ZScpIHtcbiAgICAgICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShpbmNvbW1pbmdEYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGRpc3BhcmEgbHVlZ28gc2VsZWNjaW9uYXIgdW4gbWVzXG4gICAqL1xuICBtb250aFNlbGVjdGVkSGFuZGxlcihjaG9zZW5Nb250aERhdGU6IG1vbWVudF8uTW9tZW50LCBkYXRlcGlja2VyOiBNYXREYXRlcGlja2VyPG1vbWVudF8uTW9tZW50Pik6IHZvaWQge1xuXG4gICAgaWYgKHRoaXMudHlwZUNhbGVuZGFyID09PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpIHtcbiAgICAgIGRhdGVwaWNrZXIuY2xvc2UoKTtcbiAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSBtb21lbnQoY2hvc2VuTW9udGhEYXRlKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcblxuICAgICAgdGhpcy5kYXRlVG9WaXN1YWxpemUuc2V0VmFsdWUobW9tZW50KGRhdGUsICdZWVlZLU1NLUREJykuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkpO1xuICAgICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50byBkZXNkZSBlbCBjb250cm9sIHRvdWNoIGRlbCBjYWxlbmRhclxuICAgKi9cbiAgZGF0ZUNoYW5nZSh0eXBlOiBzdHJpbmcsIGV2ZW50OiBNYXREYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPik6IHZvaWQge1xuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudChldmVudC52YWx1ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSk7XG4gICAgdGhpcy5kYXRlRm9ybUNvbnRyb2wuc2V0VmFsdWUoZXZlbnQudmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQudmFsdWUpO1xuICAgIHRoaXMuaXNDbG9zZWQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlICsgdGhpcy5kYXRlRm9ybWF0O1xuICB9XG5cbn1cbiJdfQ==