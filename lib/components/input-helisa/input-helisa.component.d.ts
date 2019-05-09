import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
export declare class InputHelisaComponent implements OnInit {
    placeholder: string;
    setValue: EventEmitter<string>;
    isSearch: boolean;
    inputFormControl: FormControl;
    constructor();
    ngOnInit(): void;
    search(): void;
}
