/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
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
        this.isRemote = false;
        this.isLoading = false;
    }
    /**
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isRemote) {
            this.autocompleteHelisaService.dataSource$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.options = data; }));
        }
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._filter(value); })));
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
        if (value instanceof Object) {
            this.myControl.setValue(value.displayText);
        }
        else {
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
    AutocompleteHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-autocomplete',
                    template: "<mat-form-field>\r\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \r\n  <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\">\r\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\" [value]=\"option\">\r\n      {{option.displayText}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>",
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
    AutocompleteHelisaComponent.prototype.isRemote;
    /** @type {?} */
    AutocompleteHelisaComponent.prototype.isLoading;
    /**
     * @type {?}
     * @private
     */
    AutocompleteHelisaComponent.prototype.autocompleteHelisaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7QUFFcEYsOENBR0M7OztJQUZDLHlDQUFTOztJQUNULCtDQUFvQjs7Ozs7QUFHdEI7SUFnQkUscUNBQW9CLHlCQUF1RDtRQUF2RCw4QkFBeUIsR0FBekIseUJBQXlCLENBQThCO1FBUmxFLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzlCLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBK0IsQ0FBQztRQUdsRCxvQkFBZSxHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDO1FBQzFELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUdsQixDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFUQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBbkIsQ0FBbUIsRUFBQyxDQUFDO1NBQ25GO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3JELFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQ2xDLENBQUM7SUFFSixDQUFDOzs7O0lBRUQsZ0RBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRU8sNkNBQU87Ozs7O0lBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTs7b0JBQ1osYUFBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztnQkFBQyxVQUFBLE1BQU07O3dCQUMzQixFQUFFLEdBQUcsSUFBSTtvQkFDYixhQUFXLENBQUMsT0FBTzs7OztvQkFBQyxVQUFBLElBQUksSUFBSSxPQUFBLEVBQUUsR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUE5RCxDQUE4RCxFQUFDLENBQUM7b0JBQzVGLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVNLGdEQUFVOzs7O0lBQWpCLFVBQWtCLEtBQUs7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsb2JBQW1EO29CQUVuRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs7aUJBQ3ZDOzs7O2dCQVpRLHlCQUF5Qjs7OzRCQWUvQixLQUFLOzBCQUNMLEtBQUs7a0NBR0wsTUFBTTsyQkFDTixLQUFLOztJQTRDUixrQ0FBQztDQUFBLEFBekRELElBeURDO1NBbkRZLDJCQUEyQjs7O0lBRXRDLGdEQUF1Qzs7SUFDdkMsOENBQTREOztJQUM1RCxzREFBMkQ7O0lBQzNELG9EQUEyQzs7SUFDM0Msc0RBQW1FOztJQUNuRSwrQ0FBMEI7O0lBQzFCLGdEQUFrQjs7Ozs7SUFFTixnRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+IHtcclxuICB2YWx1ZTogVDtcclxuICBkaXNwbGF5VGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgQElucHV0KCkgb3B0aW9ucyA9IG5ldyBBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+KCk7XHJcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdPjtcclxuICBzZWxlY3RlZFZhbHVlOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD47XHJcbiAgQE91dHB1dCgpIG9uU2VsZWN0ZWRWYWx1ZTogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG4gIEBJbnB1dCgpIGlzUmVtb3RlID0gZmFsc2U7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTogQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTxUPikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNSZW1vdGUpIHtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlLmRhdGFTb3VyY2UkLnN1YnNjcmliZShkYXRhID0+IHRoaXMub3B0aW9ucyA9IGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aCgnJyksXHJcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICBnZXRTZXJ2aWNlKCk6IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZSk6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICB0aGlzLm15Q29udHJvbC5zZXRWYWx1ZSh2YWx1ZS5kaXNwbGF5VGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuaXNSZW1vdGUpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4ge1xyXG4gICAgICAgICAgbGV0IHdzID0gdHJ1ZTtcclxuICAgICAgICAgIGZpbHRlclZhbHVlLmZvckVhY2godGV4dCA9PiB3cyA9IHdzICYmIG9wdGlvbi5kaXNwbGF5VGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgPj0gMCk7XHJcbiAgICAgICAgICByZXR1cm4gd3M7XHJcbiAgICAgICAgfSkuc3BsaWNlKDAsIDUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlbGVjdGVkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSBldmVudC5vcHRpb24udmFsdWU7XHJcbiAgICB0aGlzLm9uU2VsZWN0ZWRWYWx1ZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZS52YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==