/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subject } from 'rxjs';
import { map, startWith, throttleTime, debounceTime } from 'rxjs/operators';
import { AutocompleteHelisaService } from './autocomplete-helisa.component.service';
/**
 * @record
 * @template T
 */
export function OptionAutocompleteHelisa() { }
if (false) {
    /** @type {?} */
    OptionAutocompleteHelisa.prototype.value;
    /** @type {?} */
    OptionAutocompleteHelisa.prototype.displayText;
}
/**
 * @template T
 */
export class AutocompleteHelisaComponent {
    /**
     * @param {?} autocompleteHelisaService
     */
    constructor(autocompleteHelisaService) {
        this.autocompleteHelisaService = autocompleteHelisaService;
        this.myControl = new FormControl();
        this.options = new Array();
        this.selectedValueEmmiter = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.isRemote = false;
        this.isLoading = false;
        this.onScrollObservable = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onScrollObservable.asObservable()
            .pipe(debounceTime(500), throttleTime(500))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.nextPage.emit();
        }));
        if (this.isRemote) {
            this.autocompleteHelisaService.dataSource$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.options = data;
                    this.filteredOptions = of(this.options);
                }));
            }));
        }
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} x
         * @return {?}
         */
        (x) => this._checkRegex(x))), map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => this._filter(value))));
    }
    /**
     * @param {?=} option
     * @return {?}
     */
    displayFn(option) {
        return option ? option.displayText : undefined;
    }
    /**
     * @return {?}
     */
    getService() {
        return this.autocompleteHelisaService;
    }
    /**
     * Elimina caracteres extraños
     * @private
     * @param {?} value
     * @return {?}
     */
    _checkRegex(value) {
        value = value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '');
        return value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        if (!(value)) {
            if (!this.isRemote) {
                /** @type {?} */
                const filterValue = value.toLowerCase().split(' ');
                return this.options.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                (option) => {
                    /** @type {?} */
                    let ws = true;
                    filterValue.forEach((/**
                     * @param {?} text
                     * @return {?}
                     */
                    (text) => ws = ws && option.displayText.toLowerCase().indexOf(text) >= 0));
                    return ws;
                })).splice(0, 5);
            }
            else {
                return this.options;
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelected(event) {
        this.selectedValue = event.option.value;
        this.selectedValueEmmiter.emit(this.selectedValue.value);
    }
    /**
     * @return {?}
     */
    getNextPage() {
        this.onScrollObservable.next();
    }
}
AutocompleteHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-autocomplete',
                template: "<mat-form-field>\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\n      {{option.displayText}}\n    </mat-option>    \n  </mat-autocomplete>\n</mat-form-field>",
                providers: [AutocompleteHelisaService],
                styles: [""]
            }] }
];
/** @nocollapse */
AutocompleteHelisaComponent.ctorParameters = () => [
    { type: AutocompleteHelisaService }
];
AutocompleteHelisaComponent.propDecorators = {
    myControl: [{ type: Input }],
    options: [{ type: Input }],
    selectedValueEmmiter: [{ type: Output }],
    nextPage: [{ type: Output }],
    isRemote: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AutocompleteHelisaComponent.prototype.myControl;
    /** @type {?} */
    AutocompleteHelisaComponent.prototype.options;
    /** @type {?} */
    AutocompleteHelisaComponent.prototype.filteredOptions;
    /** @type {?} */
    AutocompleteHelisaComponent.prototype.selectedValue;
    /** @type {?} */
    AutocompleteHelisaComponent.prototype.selectedValueEmmiter;
    /** @type {?} */
    AutocompleteHelisaComponent.prototype.nextPage;
    /** @type {?} */
    AutocompleteHelisaComponent.prototype.isRemote;
    /** @type {?} */
    AutocompleteHelisaComponent.prototype.isLoading;
    /** @type {?} */
    AutocompleteHelisaComponent.prototype.onScrollObservable;
    /**
     * @type {?}
     * @private
     */
    AutocompleteHelisaComponent.prototype.autocompleteHelisaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUVwRiw4Q0FHQzs7O0lBRkMseUNBQVM7O0lBQ1QsK0NBQW9COzs7OztBQVN0QixNQUFNLE9BQU8sMkJBQTJCOzs7O0lBY3RDLFlBQW9CLHlCQUF1RDtRQUF2RCw4QkFBeUIsR0FBekIseUJBQXlCLENBQThCO1FBWmxFLGNBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQXVDLElBQUksS0FBSyxFQUErQixDQUFDO1FBR3RGLHlCQUFvQixHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDO1FBQzlELGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN6RCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ25DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0IsdUJBQWtCLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFHeEQsQ0FBQzs7OztJQUVELFFBQVE7UUFFTixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxF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QUM1Qix3ZkFBbUQ7Z0JBRW5ELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDOzthQUN2Qzs7OztZQVpRLHlCQUF5Qjs7O3dCQWUvQixLQUFLO3NCQUNMLEtBQUs7bUNBR0wsTUFBTTt1QkFDTixNQUFNO3VCQUNOLEtBQUs7Ozs7SUFOTixnREFBb0Q7O0lBQ3BELDhDQUFnRzs7SUFDaEcsc0RBQTJEOztJQUMzRCxvREFBMkM7O0lBQzNDLDJEQUF3RTs7SUFDeEUsK0NBQWtFOztJQUNsRSwrQ0FBbUM7O0lBQ25DLGdEQUEyQjs7SUFHM0IseURBQXdEOzs7OztJQUU1QyxnRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCwgdGhyb3R0bGVUaW1lLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4ge1xuICB2YWx1ZTogVDtcbiAgZGlzcGxheVRleHQ6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0F1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbXlDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBASW5wdXQoKSBvcHRpb25zOiBBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+ID0gbmV3IEFycmF5PE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPj4oKTtcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdPjtcbiAgc2VsZWN0ZWRWYWx1ZTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+O1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRWYWx1ZUVtbWl0ZXI6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBJbnB1dCgpIGlzUmVtb3RlOiBib29sZWFuID0gZmFsc2U7XG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgb25TY3JvbGxPYnNlcnZhYmxlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U6IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U8VD4pIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5vblNjcm9sbE9ic2VydmFibGUuYXNPYnNlcnZhYmxlKClcbiAgICAucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICAgdGhyb3R0bGVUaW1lKDUwMClcbiAgICApXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm5leHRQYWdlLmVtaXQoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmlzUmVtb3RlKSB7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2UuZGF0YVNvdXJjZSQuc3Vic2NyaWJlKChkYXRhOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBkYXRhO1xuICAgICAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gb2Y8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10+KHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAoKHg6IHN0cmluZykgPT4gdGhpcy5fY2hlY2tSZWdleCh4KSksXG4gICAgICBtYXAoKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgKTtcblxuICB9XG5cbiAgZGlzcGxheUZuKG9wdGlvbj86IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIG9wdGlvbiA/IG9wdGlvbi5kaXNwbGF5VGV4dCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFNlcnZpY2UoKTogQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTtcbiAgfVxuXG5cbiAgLyoqIEVsaW1pbmEgY2FyYWN0ZXJlcyBleHRyYcOxb3MgKi9cbiAgcHJpdmF0ZSBfY2hlY2tSZWdleCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJycpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10ge1xuICAgIGlmICghKHZhbHVlKSkge1xuICAgICAgaWYgKCF0aGlzLmlzUmVtb3RlKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclZhbHVlOiBzdHJpbmdbXSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdGlvbjogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+KSA9PiB7XG4gICAgICAgICAgbGV0IHdzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgICBmaWx0ZXJWYWx1ZS5mb3JFYWNoKCh0ZXh0OiBzdHJpbmcpID0+IHdzID0gd3MgJiYgb3B0aW9uLmRpc3BsYXlUZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSA+PSAwKTtcbiAgICAgICAgICByZXR1cm4gd3M7XG4gICAgICAgIH0pLnNwbGljZSgwLCA1KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0ZWQoZXZlbnQ6IHtvcHRpb246IHt2YWx1ZTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+fX0pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSBldmVudC5vcHRpb24udmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlRW1taXRlci5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZS52YWx1ZSk7XG4gIH1cblxuICBnZXROZXh0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2Nyb2xsT2JzZXJ2YWJsZS5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==