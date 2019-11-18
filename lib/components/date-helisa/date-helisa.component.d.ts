import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
import { MatDatepickerInputEvent, MatDatepicker } from '@angular/material';
export declare enum TypeCalendarEnum {
    NORMAL = "norma",
    MONTH_YEAR = "mounth-year"
}
export declare class DateHelisaComponent implements OnInit {
    floatLabel: 'never' | 'always' | 'auto';
    dateFormControl: FormControl;
    private date;
    /**
     * Formato de fecha.
     * Los formatos validos son aquellos que maneja la libreria momentjs
     * https://momentjs.com/docs/#/parsing/string-format/
     */
    dateFormat: string;
    errorMessage: string;
    placeholder: string;
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
    constructor();
    ngOnInit(): void;
    readonly typeCalendarEnum: typeof TypeCalendarEnum;
    /**
     * Determina como se debe inicializar la visualizacion del calendar
     */
    getStartView(): string;
    private formHandler;
    /**
     * Evento que se dispara luego seleccionar un mes
     * @param chosenMonthDate
     * @param datepicker
     */
    monthSelectedHandler(chosenMonthDate: moment_.Moment, datepicker: MatDatepicker<moment_.Moment>): void;
    /**
     * Evento desde el control touch del calendar
     * @param type
     * @param event
     */
    dateChange(type: string, event: MatDatepickerInputEvent<Date>): void;
    getErrorMessage(): string;
}
