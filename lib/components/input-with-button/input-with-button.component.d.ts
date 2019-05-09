import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class InputWithButtonComponent implements OnInit {
    placeholder: string;
    inputFormControl: FormControl;
    requiredMessage: string;
    value: string;
    done: EventEmitter<string>;
    cancel: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onDone(): void;
    onCancel(): void;
}
