import { EventEmitter, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare enum InputHelisaType {
    DEFAULT = 0,
    IDENTITY = 1,
    NUMERIC = 2,
    DOUBLE = 3,
    POSITIVEORNEGATIVEDOUBLE = 4,
    PHONE = 5
}
export declare class InputHelisaComponent implements OnInit, AfterViewInit {
    private readonly DECIMAL_SEPARATOR;
    private readonly THOUSAND_SEPARATOR;
    private readonly NEGATIVE_SIGN;
    placeholder: string;
    floatLabel: 'never' | 'always' | 'auto';
    minlength: number;
    maxlength: number;
    /** Activar o desactivar el autocompletado
     * (Caracteristica de los navegadores para campos comunes como
     * Direccion , Usuario, Password ... etc)
     */
    autocompleteMode: boolean;
    isSearch: boolean;
    isFocused: boolean;
    _showCurrencyZerosDecimal: boolean;
    /**
     * Deprecated
     */
    disabled: boolean;
    _type: InputHelisaType;
    /**
     * Deprecated
     */
    setValue: EventEmitter<string>;
    blur: EventEmitter<any>;
    formControlMask: FormControl;
    private realValue;
    private inputFormReal;
    private isUserChange;
    inputText: ElementRef;
    constructor();
    set showCurrencyZerosDecimal(newShowCurrencyZerosDecimal: boolean);
    set type(newType: InputHelisaType);
    set inputFormControl(formControl: FormControl);
    private statusChange;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    search(): void;
    ngModelChange(event: string): void;
    private changeValue;
    private getMaskedValue;
    private addZeroDecimals;
    private getMaskedValueDouble;
    private getRealValue;
    getRealValueDouble(str: string): string;
    onFocus($event: FocusEvent): void;
    change(event: Event): void;
}
