import { EventEmitter } from '@angular/core';
import { MatAutocomplete } from '@angular/material';
import { Subject } from 'rxjs';
export interface IAutoCompleteScrollEvent {
    autoComplete: MatAutocomplete;
    scrollEvent: Event;
}
export declare class OptionsScrollDirective {
    autoComplete: MatAutocomplete;
    thresholdPercent: number;
    scroll: EventEmitter<IAutoCompleteScrollEvent>;
    _onDestroy: Subject<{}>;
    constructor(autoComplete: MatAutocomplete);
    private removeScrollEventListener;
    ngOnDestroy(): void;
    onScroll(event: any): void;
}
