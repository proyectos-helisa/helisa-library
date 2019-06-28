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
export class AutocompleteHelisaComponent {
    /**
     * @param {?} autocompleteHelisaService
     */
    constructor(autocompleteHelisaService) {
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
    ngOnInit() {
        if (this.isRemote) {
            this.autocompleteHelisaService.dataSource$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => this.options = data));
        }
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
    }
    /**
     * @return {?}
     */
    getService() {
        return this.autocompleteHelisaService;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        if (value instanceof Object) {
            this.myControl.setValue(value.displayText);
        }
        else {
            if (!this.isRemote) {
                /** @type {?} */
                const filterValue = value.toLowerCase().split(' ');
                return this.options.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => {
                    /** @type {?} */
                    let ws = true;
                    filterValue.forEach((/**
                     * @param {?} text
                     * @return {?}
                     */
                    text => ws = ws && option.displayText.toLowerCase().indexOf(text) >= 0));
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
        this.onSelectedValue.emit(this.selectedValue.value);
    }
}
AutocompleteHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-autocomplete',
                template: "<mat-form-field>\r\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \r\n  <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\">\r\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\" [value]=\"option\">\r\n      {{option.displayText}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>",
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
    onSelectedValue: [{ type: Output }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7QUFFcEYsOENBR0M7OztJQUZDLHlDQUFTOztJQUNULCtDQUFvQjs7Ozs7QUFTdEIsTUFBTSxPQUFPLDJCQUEyQjs7OztJQVV0QyxZQUFvQix5QkFBdUQ7UUFBdkQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUE4QjtRQVJsRSxjQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM5QixZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQStCLENBQUM7UUFHbEQsb0JBQWUsR0FBb0IsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUMxRCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELFFBQVE7UUFFTixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBQyxDQUFDO1NBQ25GO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3JELFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQ2xDLENBQUM7SUFFSixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxLQUFLO1FBQ25CLElBQUksS0FBSyxZQUFZLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFOztzQkFDWixXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2xELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O2dCQUFDLE1BQU0sQ0FBQyxFQUFFOzt3QkFDOUIsRUFBRSxHQUFHLElBQUk7b0JBQ2IsV0FBVyxDQUFDLE9BQU87Ozs7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO29CQUM1RixPQUFPLEVBQUUsQ0FBQztnQkFDWixDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNyQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsS0FBSztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixvYkFBbUQ7Z0JBRW5ELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDOzthQUN2Qzs7OztZQVpRLHlCQUF5Qjs7O3dCQWUvQixLQUFLO3NCQUNMLEtBQUs7OEJBR0wsTUFBTTt1QkFDTixLQUFLOzs7O0lBTE4sZ0RBQXVDOztJQUN2Qyw4Q0FBNEQ7O0lBQzVELHNEQUEyRDs7SUFDM0Qsb0RBQTJDOztJQUMzQyxzREFBbUU7O0lBQ25FLCtDQUEwQjs7SUFDMUIsZ0RBQWtCOzs7OztJQUVOLGdFQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4ge1xyXG4gIHZhbHVlOiBUO1xyXG4gIGRpc3BsYXlUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW0F1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICBASW5wdXQoKSBvcHRpb25zID0gbmV3IEFycmF5PE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPj4oKTtcclxuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10+O1xyXG4gIHNlbGVjdGVkVmFsdWU6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPjtcclxuICBAT3V0cHV0KCkgb25TZWxlY3RlZFZhbHVlOiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQElucHV0KCkgaXNSZW1vdGUgPSBmYWxzZTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlOiBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlPFQ+KSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy5pc1JlbW90ZSkge1xyXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2UuZGF0YVNvdXJjZSQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5vcHRpb25zID0gZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgc3RhcnRXaXRoKCcnKSxcclxuICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGdldFNlcnZpY2UoKTogQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlKTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10ge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgIHRoaXMubXlDb250cm9sLnNldFZhbHVlKHZhbHVlLmRpc3BsYXlUZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1JlbW90ZSkge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICBsZXQgd3MgPSB0cnVlO1xyXG4gICAgICAgICAgZmlsdGVyVmFsdWUuZm9yRWFjaCh0ZXh0ID0+IHdzID0gd3MgJiYgb3B0aW9uLmRpc3BsYXlUZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSA+PSAwKTtcclxuICAgICAgICAgIHJldHVybiB3cztcclxuICAgICAgICB9KS5zcGxpY2UoMCwgNSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uU2VsZWN0ZWQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50Lm9wdGlvbi52YWx1ZTtcclxuICAgIHRoaXMub25TZWxlY3RlZFZhbHVlLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlLnZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19