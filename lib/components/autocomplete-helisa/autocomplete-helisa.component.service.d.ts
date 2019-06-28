import { OptionAutocompleteHelisa } from './autocomplete-helisa.component';
export declare class AutocompleteHelisaService<T> {
    private emitChangeSource;
    dataSource$: import("rxjs").Observable<OptionAutocompleteHelisa<T>[]>;
    constructor();
    setDataSource(options: Array<OptionAutocompleteHelisa<T>>): void;
}
