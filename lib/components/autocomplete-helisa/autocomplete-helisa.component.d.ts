import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
export interface OptionAutocompleteHelisa<T> {
    value: T;
    displayText: string;
}
export declare class AutocompleteHelisaComponent<T> implements OnInit {
    myControl: FormControl;
    options: OptionAutocompleteHelisa<T>[];
    filteredOptions: Observable<OptionAutocompleteHelisa<T>[]>;
    selectedValue: OptionAutocompleteHelisa<T>;
    onSelectedValue: EventEmitter<T>;
    ngOnInit(): void;
    private _filter;
    onSelected(event: any): void;
}
