import { EventEmitter, OnDestroy } from '@angular/core';
import { MatAutocomplete } from '@angular/material';
import { Subject } from 'rxjs';
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
}
