import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AutocompleteHelisaService } from './autocomplete-helisa.component.service';
export interface OptionAutocompleteHelisa<T> {
    value: T;
    displayText: string;
}
export declare class AutocompleteHelisaComponent<T> implements OnInit {
    private autocompleteHelisaService;
    myControl: FormControl;
    options: OptionAutocompleteHelisa<T>[];
    filteredOptions: Observable<OptionAutocompleteHelisa<T>[]>;
    selectedValue: OptionAutocompleteHelisa<T>;
    onSelectedValue: EventEmitter<T>;
    nextPage: EventEmitter<void>;
    isRemote: boolean;
    isLoading: boolean;
    constructor(autocompleteHelisaService: AutocompleteHelisaService<T>);
    ngOnInit(): void;
    displayFn(option?: OptionAutocompleteHelisa<T>): string | undefined;
    getService(): AutocompleteHelisaService<T>;
    private _filter;
    onSelected(event: any): void;
    getNextPage(): void;
}
