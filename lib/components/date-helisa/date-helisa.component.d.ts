import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
import { MatDatepickerInputEvent, MatDatepicker } from '@angular/material/datepicker';
export declare enum TypeCalendarEnum {
    NORMAL = "norma",
    MONTH_YEAR = "mounth-year",
    STRICT = "strict"
}
export declare class DateHelisaComponent implements OnInit {
    datePickerShow: MatDatepicker<Date>;
    floatLabel: 'never' | 'always' | 'auto';
    dateFormControl: FormControl;
    private date;
    /**
     * Formato de fecha.
     * Los formatos validos son aquellos que maneja la libreria momentjs y este: 'DD [de] MMMM [de] YYYY'
     * https://momentjs.com/docs/#/parsing/string-format/
     */
    dateFormat: string;
    locale: string;
    errorMessage: string;
    placeholder: string;
    showDatePicker: boolean;
    change: EventEmitter<Date>;
    isClosed: boolean;
    timeout: any;
    isDisabled: boolean;
    /**
     * Si este valor es diferente a TypeCalendarEnum.NORMAL no
     * será tomado en cuenta
     */
    typeCalendar: TypeCalendarEnum;
    dateToVisualize: FormControl;
    /**
     * Para evitar nuevos eventos miestras se realiza el parseo
     */
    private isFromInputEvent;
    /**
     * Verificar si el formato es valido
     */
    invalidFormat: boolean;
    private inputFormReal;
    constructor();
    ngOnInit(): void;
    get typeCalendarEnum(): typeof TypeCalendarEnum;
    openDatePicker(): void;
    onKey(event: KeyboardEvent): void;
    onBlur(): void;
    /**
     * Determina como se debe inicializar la visualizacion del calendar
     */
    getStartView(): string;
    private formHandler;
    /**
     * Evento que se dispara luego seleccionar un mes
     */
    monthSelectedHandler(chosenMonthDate: moment_.Moment, datepicker: MatDatepicker<moment_.Moment>): void;
    /**
     * Evento desde el control touch del calendar
     */
    dateChange(type: string, event: MatDatepickerInputEvent<Date>): void;
    getErrorMessage(): string;
}
