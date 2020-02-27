import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class InputWithButtonComponent implements OnInit {
    placeholder: string;
    inputFormControl: FormControl;
    requiredMessage: string;
    value: string;
    isFocused: boolean;
    nameField: ElementRef;
    done: EventEmitter<string>;
    cancel: EventEmitter<void>;
    constructor();
    ngOnInit(): void;
    onDone(): void;
    onCancel(): void;
}
