import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
export declare class InputHelisaComponent implements OnInit {
    placeholder: string;
    setValue: EventEmitter<string>;
    isSearch: boolean;
    inputFormControl: FormControl;
    isFocused: boolean;
    disabled: boolean;
    nameInput: ElementRef;
    constructor();
    ngOnInit(): void;
    search(): void;
}
