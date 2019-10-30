/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
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
        this.nextPage = new EventEmitter();
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
     * @return {?}
     */
    AutocompleteHelisaComponent.prototype.getNextPage = /**
     * @return {?}
     */
    function () {
        this.nextPage.emit();
    };
    AutocompleteHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-autocomplete',
                    template: "<mat-form-field>\r\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \r\n  <mat-autocomplete [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\r\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\" [value]=\"option\">\r\n      {{option.displayText}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>",
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
    /**
     * @type {?}
     * @private
     */
    AutocompleteHelisaComponent.prototype.autocompleteHelisaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUVwRiw4Q0FHQzs7O0lBRkMseUNBQVM7O0lBQ1QsK0NBQW9COzs7OztBQUd0QjtJQWlCRSxxQ0FBb0IseUJBQXVEO1FBQXZELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBOEI7UUFUbEUsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksS0FBSyxFQUErQixDQUFDO1FBR2xELG9CQUFlLEdBQW9CLElBQUksWUFBWSxFQUFLLENBQUM7UUFDekQsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3pELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUdsQixDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBZ0JDO1FBZEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDdkQsVUFBVTs7O2dCQUFDO29CQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixLQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBZ0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6RSxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDckQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQW5CLENBQW1CLEVBQUMsQ0FDbEMsQ0FBQztJQUVKLENBQUM7Ozs7O0lBRUQsK0NBQVM7Ozs7SUFBVCxVQUFVLE1BQW9DO1FBQzVDLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGdEQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVPLDZDQUFPOzs7OztJQUFmLFVBQWdCLEtBQUs7UUFDbkIsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLE1BQU0sQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFOztvQkFDWixhQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2xELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O2dCQUFDLFVBQUEsTUFBTTs7d0JBQzNCLEVBQUUsR0FBRyxJQUFJO29CQUNiLGFBQVcsQ0FBQyxPQUFPOzs7O29CQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsRUFBRSxHQUFHLEVBQUUsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQTlELENBQThELEVBQUMsQ0FBQztvQkFDNUYsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU0sZ0RBQVU7Ozs7SUFBakIsVUFBa0IsS0FBSztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiw0ZEFBbUQ7b0JBRW5ELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDOztpQkFDdkM7Ozs7Z0JBWlEseUJBQXlCOzs7NEJBZS9CLEtBQUs7MEJBQ0wsS0FBSztrQ0FHTCxNQUFNOzJCQUNOLE1BQU07MkJBQ04sS0FBSzs7SUF1RFIsa0NBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQS9EWSwyQkFBMkI7OztJQUV0QyxnREFBdUM7O0lBQ3ZDLDhDQUE0RDs7SUFDNUQsc0RBQTJEOztJQUMzRCxvREFBMkM7O0lBQzNDLHNEQUFtRTs7SUFDbkUsK0NBQWtFOztJQUNsRSwrQ0FBMEI7O0lBQzFCLGdEQUFrQjs7Ozs7SUFFTixnRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZSB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPiB7XHJcbiAgdmFsdWU6IFQ7XHJcbiAgZGlzcGxheVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtYXV0b2NvbXBsZXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnMgPSBuZXcgQXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+PigpO1xyXG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXT47XHJcbiAgc2VsZWN0ZWRWYWx1ZTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+O1xyXG4gIEBPdXRwdXQoKSBvblNlbGVjdGVkVmFsdWU6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBASW5wdXQoKSBpc1JlbW90ZSA9IGZhbHNlO1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U6IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U8VD4pIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLmlzUmVtb3RlKSB7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZS5kYXRhU291cmNlJC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBkYXRhO1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSBvZjxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXT4odGhpcy5vcHRpb25zKTsgIFxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aCgnJyksXHJcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxyXG4gICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5Rm4ob3B0aW9uPzogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+KTogc3RyaW5nIHwgdW5kZWZpbmVkIHsgICAgXHJcbiAgICByZXR1cm4gb3B0aW9uID8gb3B0aW9uLmRpc3BsYXlUZXh0IDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VydmljZSgpOiBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXIodmFsdWUpOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXSB7ICAgIFxyXG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpKSB7ICAgICAgXHJcbiAgICAgIGlmICghdGhpcy5pc1JlbW90ZSkge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICBsZXQgd3MgPSB0cnVlO1xyXG4gICAgICAgICAgZmlsdGVyVmFsdWUuZm9yRWFjaCh0ZXh0ID0+IHdzID0gd3MgJiYgb3B0aW9uLmRpc3BsYXlUZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSA+PSAwKTtcclxuICAgICAgICAgIHJldHVybiB3cztcclxuICAgICAgICB9KS5zcGxpY2UoMCwgNSk7XHJcbiAgICAgIH0gZWxzZSB7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TZWxlY3RlZChldmVudCkgeyAgICBcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50Lm9wdGlvbi52YWx1ZTtcclxuICAgIHRoaXMub25TZWxlY3RlZFZhbHVlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldE5leHRQYWdlKCl7ICAgIFxyXG4gICAgdGhpcy5uZXh0UGFnZS5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==