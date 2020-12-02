import { Observable } from 'rxjs';
import { OptionAutocompleteHelisa } from './autocomplete-helisa.component';
export declare class AutocompleteHelisaService<T> {
    private emitChangeSource;
    dataSource$: Observable<Array<OptionAutocompleteHelisa<T>>>;
    constructor();
    setDataSource(options: Array<OptionAutocompleteHelisa<T>>): void;
}
