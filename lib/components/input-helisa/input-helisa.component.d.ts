import { EventEmitter, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare enum InputHelisaType {
    DEFAULT = 0,
    IDENTITY = 1,
    NUMERIC = 2,
    DOUBLE = 3
}
export declare class InputHelisaComponent implements OnInit, AfterViewInit {
    private readonly DECIMAL_SEPARATOR;
    private readonly THOUSAND_SEPARATOR;
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
    inputText: ElementRef;
    constructor();
    set inputFormControl(formControl: FormControl);
    private statusChange;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    search(): void;
    change(event: string): void;
    private getMaskedValue;
    private getRealValue;
    onFocus($event: FocusEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputHelisaComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputHelisaComponent, "hel-input", never, { "placeholder": "placeholder"; "floatLabel": "floatLabel"; "autocompleteMode": "autocompleteMode"; "isSearch": "isSearch"; "isFocused": "isFocused"; "disabled": "disabled"; "type": "type"; "inputFormControl": "inputFormControl"; "minlength": "minlength"; "maxlength": "maxlength"; }, { "setValue": "setValue"; "blur": "blur"; }, never, never>;
}

//# sourceMappingURL=input-helisa.component.d.ts.map