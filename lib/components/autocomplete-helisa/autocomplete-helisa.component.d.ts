import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { AutocompleteHelisaService } from './autocomplete-helisa.component.service';
import * as ɵngcc0 from '@angular/core';
export interface OptionAutocompleteHelisa<T> {
    value: T;
    displayText: string;
}
export declare class AutocompleteHelisaComponent<T> implements OnInit {
    private autocompleteHelisaService;
    myControl: FormControl;
    options: Array<OptionAutocompleteHelisa<T>>;
    filteredOptions: Observable<OptionAutocompleteHelisa<T>[]>;
    selectedValue: OptionAutocompleteHelisa<T>;
    selectedValueEmmiter: EventEmitter<T>;
    nextPage: EventEmitter<void>;
    isRemote: boolean;
    isLoading: boolean;
    onScrollObservable: Subject<void>;
    constructor(autocompleteHelisaService: AutocompleteHelisaService<T>);
    ngOnInit(): void;
    displayFn(option?: OptionAutocompleteHelisa<T>): string | undefined;
    getService(): AutocompleteHelisaService<T>;
    /** Elimina caracteres extraños */
    private _checkRegex;
    private _filter;
    onSelected(event: {
        option: {
            value: OptionAutocompleteHelisa<T>;
        };
    }): void;
    getNextPage(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AutocompleteHelisaComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AutocompleteHelisaComponent<any>, "hel-autocomplete", never, { "myControl": "myControl"; "options": "options"; "isRemote": "isRemote"; }, { "selectedValueEmmiter": "selectedValueEmmiter"; "nextPage": "nextPage"; }, never, never>;
}

//# sourceMappingURL=autocomplete-helisa.component.d.ts.map