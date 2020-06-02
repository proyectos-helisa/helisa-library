import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare enum InputHelisaType {
    DEFAULT = 0,
    IDENTITY = 1,
    NUMERIC = 2,
    DOUBLE = 3
}
export declare class InputHelisaComponent implements OnInit {
    private readonly DECIMAL_SEPARATOR;
    private readonly THOUSAND_SEPARATOR;
    placeholder: string;
    floatLabel: 'never' | 'always' | 'auto';
    /** Activar o desactivar el autocompletado
     * (Caracteristica de los navegadores para campos comunes como
     * Direccion , Usuario, Password ... etc)
     */
    autocompleteMode: boolean;
    isSearch: boolean;
    isFocused: boolean;
    /**
     * Deprecated
     */
    disabled: boolean;
    type: InputHelisaType;
    /**
     * Deprecated
     */
    setValue: EventEmitter<string>;
    blur: EventEmitter<any>;
    formControlMask: FormControl;
    private realValue;
    private inputFormReal;
    nameInput: ElementRef;
    constructor();
    inputFormControl: FormControl;
    private statusChange;
    ngOnInit(): void;
    search(): void;
    change(event: string): void;
    private getMaskedValue;
    private getRealValue;
}
