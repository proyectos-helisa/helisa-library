import { EventEmitter, OnDestroy } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export interface IAutoCompleteScrollEvent {
    autoComplete: MatAutocomplete;
    scrollEvent: Event;
}
export declare class OptionsScrollDirective implements OnDestroy {
    autoComplete: MatAutocomplete;
    /**
     * This value would different depends of styles
     */
    thresholdPercent: number;
    optionsScroll: EventEmitter<IAutoCompleteScrollEvent>;
    destroy: Subject<void>;
    lastScrollTop: number;
    constructor(autoComplete: MatAutocomplete);
    private removeScrollEventListener;
    ngOnDestroy(): void;
    onScroll(event: Event): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OptionsScrollDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<OptionsScrollDirective, "mat-autocomplete[optionsScroll]", never, { "thresholdPercent": "thresholdPercent"; }, { "optionsScroll": "optionsScroll"; }, never>;
}

//# sourceMappingURL=options-scroll.directive.d.ts.map