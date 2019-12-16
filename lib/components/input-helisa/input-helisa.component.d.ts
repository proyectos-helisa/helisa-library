import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
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
    setValue: EventEmitter<string>;
    isSearch: boolean;
    isFocused: boolean;
    disabled: boolean;
    type: InputHelisaType;
    formControlMask: FormControl;
    private realValue;
    private inputFormReal;
    nameInput: ElementRef;
    constructor();
    inputFormControl: FormControl;
    private statusChange;
    ngOnInit(): void;
    search(): void;
    change(event: any): void;
    private getMaskedValue;
    private getRealValue;
}
