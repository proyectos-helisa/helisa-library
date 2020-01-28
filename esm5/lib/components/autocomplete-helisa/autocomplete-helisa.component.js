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
                    template: "<mat-form-field>\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage($event)\">\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\n      {{option.displayText}}\n    </mat-option>    \n  </mat-autocomplete>\n</mat-form-field>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUVwRiw4Q0FHQzs7O0lBRkMseUNBQVM7O0lBQ1QsK0NBQW9COzs7OztBQUd0QjtJQW9CRSxxQ0FBb0IseUJBQXVEO1FBQXZELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBOEI7UUFabEUsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksS0FBSyxFQUErQixDQUFDO1FBR2xELG9CQUFlLEdBQW9CLElBQUksWUFBWSxFQUFLLENBQUM7UUFDekQsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3pELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUdsQix1QkFBa0IsR0FBZ0IsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUdyRCxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBMEJDO1FBeEJDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVB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a0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JDLENBQUM7O2dCQXhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsOGZBQW1EO29CQUVuRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs7aUJBQ3ZDOzs7O2dCQVpRLHlCQUF5Qjs7OzRCQWUvQixLQUFLOzBCQUNMLEtBQUs7a0NBR0wsTUFBTTsyQkFDTixNQUFNOzJCQUNOLEtBQUs7O0lBMkVSLGtDQUFDO0NBQUEsQUF6RkQsSUF5RkM7U0FuRlksMkJBQTJCOzs7SUFFdEMsZ0RBQXVDOztJQUN2Qyw4Q0FBNEQ7O0lBQzVELHNEQUEyRDs7SUFDM0Qsb0RBQTJDOztJQUMzQyxzREFBbUU7O0lBQ25FLCtDQUFrRTs7SUFDbEUsK0NBQTBCOztJQUMxQixnREFBa0I7O0lBR2xCLHlEQUFxRDs7Ozs7SUFFekMsZ0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHRocm90dGxlVGltZSxkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4ge1xuICB2YWx1ZTogVDtcbiAgZGlzcGxheVRleHQ6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0F1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIEBJbnB1dCgpIG9wdGlvbnMgPSBuZXcgQXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+PigpO1xuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10+O1xuICBzZWxlY3RlZFZhbHVlOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD47XG4gIEBPdXRwdXQoKSBvblNlbGVjdGVkVmFsdWU6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBJbnB1dCgpIGlzUmVtb3RlID0gZmFsc2U7XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgXG4gIG9uU2Nyb2xsT2JzZXJ2YWJsZTpTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlOiBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlPFQ+KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgIFxuXG4gICAgdGhpcy5vblNjcm9sbE9ic2VydmFibGUuYXNPYnNlcnZhYmxlKClcbiAgICAucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICAgdGhyb3R0bGVUaW1lKDUwMCkgICAgICAgICAgXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoKGRhdGEpPT57XG4gICAgICB0aGlzLm5leHRQYWdlLmVtaXQoKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc1JlbW90ZSkge1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlLmRhdGFTb3VyY2UkLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gZGF0YTtcbiAgICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IG9mPE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdPih0aGlzLm9wdGlvbnMpOyAgXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIG1hcCh4ID0+IHRoaXMuX2NoZWNrUmVnZXgoeCkpLFxuICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgKTtcblxuICB9XG5cbiAgZGlzcGxheUZuKG9wdGlvbj86IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPik6IHN0cmluZyB8IHVuZGVmaW5lZCB7ICAgIFxuICAgIHJldHVybiBvcHRpb24gPyBvcHRpb24uZGlzcGxheVRleHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRTZXJ2aWNlKCk6IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U8VD4ge1xuICAgIHJldHVybiB0aGlzLmF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U7XG4gIH1cblxuXG4gIC8qKiBFbGltaW5hIGNhcmFjdGVyZXMgZXh0cmHDsW9zICovXG4gIHByaXZhdGUgX2NoZWNrUmVnZXgodmFsdWU6c3RyaW5nKTogc3RyaW5neyAgICBcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywnJylcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXIodmFsdWUpOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXSB7ICAgIFxuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSkgeyAgICAgIFxuICAgICAgaWYgKCF0aGlzLmlzUmVtb3RlKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4ge1xuICAgICAgICAgIGxldCB3cyA9IHRydWU7XG4gICAgICAgICAgZmlsdGVyVmFsdWUuZm9yRWFjaCh0ZXh0ID0+IHdzID0gd3MgJiYgb3B0aW9uLmRpc3BsYXlUZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSA+PSAwKTtcbiAgICAgICAgICByZXR1cm4gd3M7XG4gICAgICAgIH0pLnNwbGljZSgwLCA1KTtcbiAgICAgIH0gZWxzZSB7ICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3RlZChldmVudCkgeyAgICBcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSBldmVudC5vcHRpb24udmFsdWU7XG4gICAgdGhpcy5vblNlbGVjdGVkVmFsdWUuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUudmFsdWUpO1xuICB9XG5cbiAgZ2V0TmV4dFBhZ2UoZXZlbnQpe1xuICAgIHRoaXMub25TY3JvbGxPYnNlcnZhYmxlLm5leHQoZXZlbnQpICAgICAgICBcbiAgfSAgXG59XG4iXX0=