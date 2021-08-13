import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputWithButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputWithButtonComponent, "hel-input-with-button", never, { "placeholder": "placeholder"; "inputFormControl": "inputFormControl"; "requiredMessage": "requiredMessage"; "value": "value"; "isFocused": "isFocused"; }, { "done": "done"; "cancel": "cancel"; }, never, never>;
}

//# sourceMappingURL=input-with-button.component.d.ts.map