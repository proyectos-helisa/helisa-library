import { Observable } from 'rxjs';
import { OptionAutocompleteHelisa } from './autocomplete-helisa.component';
import * as ɵngcc0 from '@angular/core';
export declare class AutocompleteHelisaService<T> {
    private emitChangeSource;
    dataSource$: Observable<Array<OptionAutocompleteHelisa<T>>>;
    constructor();
    setDataSource(options: Array<OptionAutocompleteHelisa<T>>): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AutocompleteHelisaService<any>, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AutocompleteHelisaService<any>>;
}

//# sourceMappingURL=autocomplete-helisa.component.service.d.ts.map