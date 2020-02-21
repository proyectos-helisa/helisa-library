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
                template: "<mat-form-field>\r\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \r\n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\r\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\r\n      {{option.displayText}}\r\n    </mat-option>    \r\n  </mat-autocomplete>\r\n</mat-form-field>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUVwRiw4Q0FHQzs7O0lBRkMseUNBQVM7O0lBQ1QsK0NBQW9COzs7OztBQVN0QixNQUFNLE9BQU8sMkJBQTJCOzs7O0lBY3RDLFlBQW9CLHlCQUF1RDtRQUF2RCw4QkFBeUIsR0FBekIseUJBQXlCLENBQThCO1FBWmxFLGNBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQXVDLElBQUksS0FBSyxFQUErQixDQUFDO1FBR3RGLHlCQUFvQixHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDO1FBQzlELGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN6RCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ25DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0IsdUJBQWtCLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFHeEQsQ0FBQzs7OztJQUVELFFBQVE7UUFFTixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxF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QUM1QixzZ0JBQW1EO2dCQUVuRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs7YUFDdkM7Ozs7WUFaUSx5QkFBeUI7Ozt3QkFlL0IsS0FBSztzQkFDTCxLQUFLO21DQUdMLE1BQU07dUJBQ04sTUFBTTt1QkFDTixLQUFLOzs7O0lBTk4sZ0RBQW9EOztJQUNwRCw4Q0FBZ0c7O0lBQ2hHLHNEQUEyRDs7SUFDM0Qsb0RBQTJDOztJQUMzQywyREFBd0U7O0lBQ3hFLCtDQUFrRTs7SUFDbEUsK0NBQW1DOztJQUNuQyxnREFBMkI7O0lBRzNCLHlEQUF3RDs7Ozs7SUFFNUMsZ0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHRocm90dGxlVGltZSwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+IHtcclxuICB2YWx1ZTogVDtcclxuICBkaXNwbGF5VGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgbXlDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IEFycmF5PE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPj4gPSBuZXcgQXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+PigpO1xyXG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXT47XHJcbiAgc2VsZWN0ZWRWYWx1ZTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+O1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZFZhbHVlRW1taXRlcjogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG4gIEBPdXRwdXQoKSBuZXh0UGFnZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBJbnB1dCgpIGlzUmVtb3RlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBvblNjcm9sbE9ic2VydmFibGU6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U6IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U8VD4pIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMub25TY3JvbGxPYnNlcnZhYmxlLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICAgIHRocm90dGxlVGltZSg1MDApXHJcbiAgICApXHJcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5uZXh0UGFnZS5lbWl0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1JlbW90ZSkge1xyXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2UuZGF0YVNvdXJjZSQuc3Vic2NyaWJlKChkYXRhOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gZGF0YTtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gb2Y8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10+KHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aCgnJyksXHJcbiAgICAgIG1hcCgoeDogc3RyaW5nKSA9PiB0aGlzLl9jaGVja1JlZ2V4KHgpKSxcclxuICAgICAgbWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5Rm4ob3B0aW9uPzogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiBvcHRpb24gPyBvcHRpb24uZGlzcGxheVRleHQgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRTZXJ2aWNlKCk6IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTtcclxuICB9XHJcblxyXG5cclxuICAvKiogRWxpbWluYSBjYXJhY3RlcmVzIGV4dHJhw7FvcyAqL1xyXG4gIHByaXZhdGUgX2NoZWNrUmVnZXgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJycpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXSB7XHJcbiAgICBpZiAoISh2YWx1ZSkpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzUmVtb3RlKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyVmFsdWU6IHN0cmluZ1tdID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHRpb246IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPikgPT4ge1xyXG4gICAgICAgICAgbGV0IHdzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgIGZpbHRlclZhbHVlLmZvckVhY2goKHRleHQ6IHN0cmluZykgPT4gd3MgPSB3cyAmJiBvcHRpb24uZGlzcGxheVRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpID49IDApO1xyXG4gICAgICAgICAgcmV0dXJuIHdzO1xyXG4gICAgICAgIH0pLnNwbGljZSgwLCA1KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TZWxlY3RlZChldmVudDoge29wdGlvbjoge3ZhbHVlOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD59fSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gZXZlbnQub3B0aW9uLnZhbHVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlRW1taXRlci5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZS52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXROZXh0UGFnZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub25TY3JvbGxPYnNlcnZhYmxlLm5leHQoKTtcclxuICB9XHJcbn1cclxuIl19