import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
export declare enum InputHelisaType {
    DEFAULT = 0,
    IDENTITY = 1,
    NUMERIC = 2,
    DOUBLE = 3
}
export declare class InputHelisaComponent implements OnInit {
    placeholder: string;
    setValue: EventEmitter<string>;
    isSearch: boolean;
    inputFormControl: FormControl;
    isFocused: boolean;
    disabled: boolean;
    type: InputHelisaType;
    formControlMask: FormControl;
    private realValue;
    nameInput: ElementRef;
    constructor();
    ngOnInit(): void;
    search(): void;
    change(event: any): void;
    private getMaskedValue;
    private getRealValue;
}
