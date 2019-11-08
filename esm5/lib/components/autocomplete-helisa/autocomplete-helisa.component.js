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
var AutocompleteHelisaComponent = /** @class */ (function () {
    function AutocompleteHelisaComponent(autocompleteHelisaService) {
        this.autocompleteHelisaService = autocompleteHelisaService;
        this.myControl = new FormControl();
        this.options = new Array();
        this.onSelectedValue = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.isRemote = false;
        this.isLoading = false;
        this.onScrollObservable = new Subject();
    }
    /**
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.onScrollObservable.asObservable()
            .pipe(debounceTime(500), throttleTime(500))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.nextPage.emit();
        }));
        if (this.isRemote) {
            this.autocompleteHelisaService.dataSource$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.options = data;
                    _this.filteredOptions = of(_this.options);
                }));
            }));
        }
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._filter(value); })));
    };
    /**
     * @param {?=} option
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype.displayFn = /**
     * @param {?=} option
     * @return {?}
     */
    function (option) {
        return option ? option.displayText : undefined;
    };
    /**
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype.getService = /**
     * @return {?}
     */
    function () {
        return this.autocompleteHelisaService;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype._filter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!(value instanceof Object)) {
            if (!this.isRemote) {
                /** @type {?} */
                var filterValue_1 = value.toLowerCase().split(' ');
                return this.options.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    /** @type {?} */
                    var ws = true;
                    filterValue_1.forEach((/**
                     * @param {?} text
                     * @return {?}
                     */
                    function (text) { return ws = ws && option.displayText.toLowerCase().indexOf(text) >= 0; }));
                    return ws;
                })).splice(0, 5);
            }
            else {
                return this.options;
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype.onSelected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectedValue = event.option.value;
        this.onSelectedValue.emit(this.selectedValue.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype.getNextPage = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onScrollObservable.next(event);
    };
    AutocompleteHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-autocomplete',
                    template: "<mat-form-field>\r\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \r\n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage($event)\">\r\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\r\n      {{option.displayText}}\r\n    </mat-option>    \r\n  </mat-autocomplete>\r\n</mat-form-field>",
                    providers: [AutocompleteHelisaService],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AutocompleteHelisaComponent.ctorParameters = function () { return [
        { type: AutocompleteHelisaService }
    ]; };
    AutocompleteHelisaComponent.propDecorators = {
        myControl: [{ type: Input }],
        options: [{ type: Input }],
        onSelectedValue: [{ type: Output }],
        nextPage: [{ type: Output }],
        isRemote: [{ type: Input }]
    };
    return AutocompleteHelisaComponent;
}());
export { AutocompleteHelisaComponent };
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
    AutocompleteHelisaComponent.prototype.onSelectedValue;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUVwRiw4Q0FHQzs7O0lBRkMseUNBQVM7O0lBQ1QsK0NBQW9COzs7OztBQUd0QjtJQW9CRSxxQ0FBb0IseUJBQXVEO1FBQXZELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBOEI7UUFabEUsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksS0FBSyxFQUErQixDQUFDO1FBR2xELG9CQUFlLEdBQW9CLElBQUksWUFBWSxFQUFLLENBQUM7UUFDekQsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3pELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUdsQix1QkFBa0IsR0FBZ0IsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUdyRCxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBeUJDO1FBdkJDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVB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O0NBQUEsQUFqRkQsSUFpRkM7U0EzRVksMkJBQTJCOzs7SUFFdEMsZ0RBQXVDOztJQUN2Qyw4Q0FBNEQ7O0lBQzVELHNEQUEyRDs7SUFDM0Qsb0RBQTJDOztJQUMzQyxzREFBbUU7O0lBQ25FLCtDQUFrRTs7SUFDbEUsK0NBQTBCOztJQUMxQixnREFBa0I7O0lBR2xCLHlEQUFxRDs7Ozs7SUFFekMsZ0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHRocm90dGxlVGltZSxkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4ge1xyXG4gIHZhbHVlOiBUO1xyXG4gIGRpc3BsYXlUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW0F1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICBASW5wdXQoKSBvcHRpb25zID0gbmV3IEFycmF5PE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPj4oKTtcclxuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10+O1xyXG4gIHNlbGVjdGVkVmFsdWU6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPjtcclxuICBAT3V0cHV0KCkgb25TZWxlY3RlZFZhbHVlOiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQElucHV0KCkgaXNSZW1vdGUgPSBmYWxzZTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBcclxuICBvblNjcm9sbE9ic2VydmFibGU6U3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U6IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U8VD4pIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyAgXHJcblxyXG4gICAgdGhpcy5vblNjcm9sbE9ic2VydmFibGUuYXNPYnNlcnZhYmxlKClcclxuICAgIC5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcclxuICAgICAgdGhyb3R0bGVUaW1lKDUwMCkgICAgICAgICAgXHJcbiAgICApXHJcbiAgICAuc3Vic2NyaWJlKChkYXRhKT0+e1xyXG4gICAgICB0aGlzLm5leHRQYWdlLmVtaXQoKVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAodGhpcy5pc1JlbW90ZSkge1xyXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2UuZGF0YVNvdXJjZSQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gZGF0YTtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gb2Y8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10+KHRoaXMub3B0aW9ucyk7ICBcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBzdGFydFdpdGgoJycpLFxyXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgZGlzcGxheUZuKG9wdGlvbj86IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPik6IHN0cmluZyB8IHVuZGVmaW5lZCB7ICAgIFxyXG4gICAgcmV0dXJuIG9wdGlvbiA/IG9wdGlvbi5kaXNwbGF5VGV4dCA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldFNlcnZpY2UoKTogQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlKTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10geyAgICBcclxuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSkgeyAgICAgIFxyXG4gICAgICBpZiAoIXRoaXMuaXNSZW1vdGUpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4ge1xyXG4gICAgICAgICAgbGV0IHdzID0gdHJ1ZTtcclxuICAgICAgICAgIGZpbHRlclZhbHVlLmZvckVhY2godGV4dCA9PiB3cyA9IHdzICYmIG9wdGlvbi5kaXNwbGF5VGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgPj0gMCk7XHJcbiAgICAgICAgICByZXR1cm4gd3M7XHJcbiAgICAgICAgfSkuc3BsaWNlKDAsIDUpO1xyXG4gICAgICB9IGVsc2UgeyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uU2VsZWN0ZWQoZXZlbnQpIHsgICAgXHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSBldmVudC5vcHRpb24udmFsdWU7XHJcbiAgICB0aGlzLm9uU2VsZWN0ZWRWYWx1ZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZS52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXROZXh0UGFnZShldmVudCl7XHJcbiAgICB0aGlzLm9uU2Nyb2xsT2JzZXJ2YWJsZS5uZXh0KGV2ZW50KSAgICAgICAgXHJcbiAgfSAgXHJcbn1cclxuIl19