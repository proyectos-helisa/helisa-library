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
        this.selectedValueEmmiter = new EventEmitter();
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
         * @return {?}
         */
        function () {
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
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this._checkRegex(x); })), map((/**
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
    /** Elimina caracteres extraños */
    /**
     * Elimina caracteres extraños
     * @private
     * @param {?} value
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype._checkRegex = /**
     * Elimina caracteres extraños
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '');
        return value;
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
        if (!(value)) {
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
        this.selectedValueEmmiter.emit(this.selectedValue.value);
    };
    /**
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype.getNextPage = /**
     * @return {?}
     */
    function () {
        this.onScrollObservable.next();
    };
    AutocompleteHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-autocomplete',
                    template: "<mat-form-field>\r\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \r\n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\r\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\r\n      {{option.displayText}}\r\n    </mat-option>    \r\n  </mat-autocomplete>\r\n</mat-form-field>",
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
        selectedValueEmmiter: [{ type: Output }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUVwRiw4Q0FHQzs7O0lBRkMseUNBQVM7O0lBQ1QsK0NBQW9COzs7OztBQUd0QjtJQW9CRSxxQ0FBb0IseUJBQXVEO1FBQXZELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBOEI7UUFabEUsY0FBUyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzNDLFlBQU8sR0FBdUMsSUFBSSxLQUFLLEVBQStCLENBQUM7UUFHdEYseUJBQW9CLEdBQW9CLElBQUksWUFBWSxFQUFLLENBQUM7UUFDOUQsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3pELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDbkMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUczQix1QkFBa0IsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUd4RCxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBMEJDO1FBeEJDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZ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QztJQUNqQyxDQUFDOztnQkF4RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHNnQkFBbUQ7b0JBRW5ELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDOztpQkFDdkM7Ozs7Z0JBWlEseUJBQXlCOzs7NEJBZS9CLEtBQUs7MEJBQ0wsS0FBSzt1Q0FHTCxNQUFNOzJCQUNOLE1BQU07MkJBQ04sS0FBSzs7SUEyRVIsa0NBQUM7Q0FBQSxBQXpGRCxJQXlGQztTQW5GWSwyQkFBMkI7OztJQUV0QyxnREFBb0Q7O0lBQ3BELDhDQUFnRzs7SUFDaEcsc0RBQTJEOztJQUMzRCxvREFBMkM7O0lBQzNDLDJEQUF3RTs7SUFDeEUsK0NBQWtFOztJQUNsRSwrQ0FBbUM7O0lBQ25DLGdEQUEyQjs7SUFHM0IseURBQXdEOzs7OztJQUU1QyxnRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCwgdGhyb3R0bGVUaW1lLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4ge1xyXG4gIHZhbHVlOiBUO1xyXG4gIGRpc3BsYXlUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW0F1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBteUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgQElucHV0KCkgb3B0aW9uczogQXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+PiA9IG5ldyBBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+KCk7XHJcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdPjtcclxuICBzZWxlY3RlZFZhbHVlOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD47XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkVmFsdWVFbW1pdGVyOiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQElucHV0KCkgaXNSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIG9uU2Nyb2xsT2JzZXJ2YWJsZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTogQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTxUPikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5vblNjcm9sbE9ic2VydmFibGUuYXNPYnNlcnZhYmxlKClcclxuICAgIC5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcclxuICAgICAgdGhyb3R0bGVUaW1lKDUwMClcclxuICAgIClcclxuICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5leHRQYWdlLmVtaXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmlzUmVtb3RlKSB7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZS5kYXRhU291cmNlJC5zdWJzY3JpYmUoKGRhdGE6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBkYXRhO1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSBvZjxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXT4odGhpcy5vcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgc3RhcnRXaXRoKCcnKSxcclxuICAgICAgbWFwKCh4OiBzdHJpbmcpID0+IHRoaXMuX2NoZWNrUmVnZXgoeCkpLFxyXG4gICAgICBtYXAoKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGRpc3BsYXlGbihvcHRpb24/OiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIG9wdGlvbiA/IG9wdGlvbi5kaXNwbGF5VGV4dCA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldFNlcnZpY2UoKTogQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBFbGltaW5hIGNhcmFjdGVyZXMgZXh0cmHDsW9zICovXHJcbiAgcHJpdmF0ZSBfY2hlY2tSZWdleCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnJyk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdIHtcclxuICAgIGlmICghKHZhbHVlKSkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNSZW1vdGUpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZTogc3RyaW5nW10gPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdGlvbjogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+KSA9PiB7XHJcbiAgICAgICAgICBsZXQgd3M6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgICAgZmlsdGVyVmFsdWUuZm9yRWFjaCgodGV4dDogc3RyaW5nKSA9PiB3cyA9IHdzICYmIG9wdGlvbi5kaXNwbGF5VGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgPj0gMCk7XHJcbiAgICAgICAgICByZXR1cm4gd3M7XHJcbiAgICAgICAgfSkuc3BsaWNlKDAsIDUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlbGVjdGVkKGV2ZW50OiB7b3B0aW9uOiB7dmFsdWU6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPn19KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSBldmVudC5vcHRpb24udmFsdWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWVFbW1pdGVyLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldE5leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblNjcm9sbE9ic2VydmFibGUubmV4dCgpO1xyXG4gIH1cclxufVxyXG4iXX0=