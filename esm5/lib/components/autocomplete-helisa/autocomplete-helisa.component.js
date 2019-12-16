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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUVwRiw4Q0FHQzs7O0lBRkMseUNBQVM7O0lBQ1QsK0NBQW9COzs7OztBQUd0QjtJQW9CRSxxQ0FBb0IseUJBQXVEO1FBQXZELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBOEI7UUFabEUsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksS0FBSyxFQUErQixDQUFDO1FBR2xELG9CQUFlLEdBQW9CLElBQUksWUFBWSxFQUFLLENBQUM7UUFDekQsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3pELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUdsQix1QkFBa0IsR0FBZ0IsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUdyRCxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBMEJDO1FBeEJDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUU7YUFDckMsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUNsQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLElBQUk7WUFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3RCLENBQUMsRUFBQyxDQUFBO1FBRUYsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDdkQsVUFBVTs7O2dCQUFDO29CQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixLQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBZ0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6RSxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDckQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLEVBQUMsRUFDN0IsR0FBRzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBbkIsQ0FBbUIsRUFBQyxDQUNsQyxDQUFDO0lBRUosQ0FBQzs7Ozs7SUFFRCwrQ0FBUzs7OztJQUFULFVBQVUsTUFBb0M7UUFDNUMsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsZ0RBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQztJQUdELGtDQUFrQzs7Ozs7OztJQUMxQixpREFBVzs7Ozs7O0lBQW5CLFVBQW9CLEtBQVk7UUFDOUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFDbEQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTyw2Q0FBTzs7Ozs7SUFBZixVQUFnQixLQUFLO1FBQ25CLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxNQUFNLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTs7b0JBQ1osYUFBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztnQkFBQyxVQUFBLE1BQU07O3dCQUMzQixFQUFFLEdBQUcsSUFBSTtvQkFDYixhQUFXLENBQUMsT0FBTzs7OztvQkFBQyxVQUFBLElBQUksSUFBSSxPQUFBLEVBQUUsR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUE5RCxDQUE4RCxFQUFDLENBQUM7b0JBQzVGLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVNLGdEQUFVOzs7O0lBQWpCLFVBQWtCLEtBQUs7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsaURBQVc7Ozs7SUFBWCxVQUFZLEtBQUs7UUFDZixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JDLENBQUM7O2dCQXhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsNGdCQUFtRDtvQkFFbkQsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7O2lCQUN2Qzs7OztnQkFaUSx5QkFBeUI7Ozs0QkFlL0IsS0FBSzswQkFDTCxLQUFLO2tDQUdMLE1BQU07MkJBQ04sTUFBTTsyQkFDTixLQUFLOztJQTJFUixrQ0FBQztDQUFBLEFBekZELElBeUZDO1NBbkZZLDJCQUEyQjs7O0lBRXRDLGdEQUF1Qzs7SUFDdkMsOENBQTREOztJQUM1RCxzREFBMkQ7O0lBQzNELG9EQUEyQzs7SUFDM0Msc0RBQW1FOztJQUNuRSwrQ0FBa0U7O0lBQ2xFLCtDQUEwQjs7SUFDMUIsZ0RBQWtCOztJQUdsQix5REFBcUQ7Ozs7O0lBRXpDLGdFQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCB0aHJvdHRsZVRpbWUsZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+IHtcclxuICB2YWx1ZTogVDtcclxuICBkaXNwbGF5VGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgQElucHV0KCkgb3B0aW9ucyA9IG5ldyBBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+KCk7XHJcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdPjtcclxuICBzZWxlY3RlZFZhbHVlOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD47XHJcbiAgQE91dHB1dCgpIG9uU2VsZWN0ZWRWYWx1ZTogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG4gIEBPdXRwdXQoKSBuZXh0UGFnZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBJbnB1dCgpIGlzUmVtb3RlID0gZmFsc2U7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgXHJcbiAgb25TY3JvbGxPYnNlcnZhYmxlOlN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlOiBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlPFQ+KSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgIFxyXG5cclxuICAgIHRoaXMub25TY3JvbGxPYnNlcnZhYmxlLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICAgIHRocm90dGxlVGltZSg1MDApICAgICAgICAgIFxyXG4gICAgKVxyXG4gICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgdGhpcy5uZXh0UGFnZS5lbWl0KClcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKHRoaXMuaXNSZW1vdGUpIHtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlLmRhdGFTb3VyY2UkLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGRhdGE7XHJcbiAgICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IG9mPE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdPih0aGlzLm9wdGlvbnMpOyAgXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgc3RhcnRXaXRoKCcnKSxcclxuICAgICAgbWFwKHggPT4gdGhpcy5fY2hlY2tSZWdleCh4KSksXHJcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5Rm4ob3B0aW9uPzogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+KTogc3RyaW5nIHwgdW5kZWZpbmVkIHsgICAgXHJcbiAgICByZXR1cm4gb3B0aW9uID8gb3B0aW9uLmRpc3BsYXlUZXh0IDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VydmljZSgpOiBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIEVsaW1pbmEgY2FyYWN0ZXJlcyBleHRyYcOxb3MgKi9cclxuICBwcml2YXRlIF9jaGVja1JlZ2V4KHZhbHVlOnN0cmluZyk6IHN0cmluZ3sgICAgXHJcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywnJylcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZSk6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdIHsgICAgXHJcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkpIHsgICAgICBcclxuICAgICAgaWYgKCF0aGlzLmlzUmVtb3RlKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IHtcclxuICAgICAgICAgIGxldCB3cyA9IHRydWU7XHJcbiAgICAgICAgICBmaWx0ZXJWYWx1ZS5mb3JFYWNoKHRleHQgPT4gd3MgPSB3cyAmJiBvcHRpb24uZGlzcGxheVRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpID49IDApO1xyXG4gICAgICAgICAgcmV0dXJuIHdzO1xyXG4gICAgICAgIH0pLnNwbGljZSgwLCA1KTtcclxuICAgICAgfSBlbHNlIHsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlbGVjdGVkKGV2ZW50KSB7ICAgIFxyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gZXZlbnQub3B0aW9uLnZhbHVlO1xyXG4gICAgdGhpcy5vblNlbGVjdGVkVmFsdWUuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV4dFBhZ2UoZXZlbnQpe1xyXG4gICAgdGhpcy5vblNjcm9sbE9ic2VydmFibGUubmV4dChldmVudCkgICAgICAgIFxyXG4gIH0gIFxyXG59XHJcbiJdfQ==