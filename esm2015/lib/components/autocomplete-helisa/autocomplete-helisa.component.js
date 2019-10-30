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
            data => {
                this.options = data;
                this.filteredOptions = of(this.options);
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUVwRiw4Q0FHQzs7O0lBRkMseUNBQVM7O0lBQ1QsK0NBQW9COzs7OztBQVN0QixNQUFNLE9BQU8sMkJBQTJCOzs7O0lBVXRDLFlBQW9CLHlCQUF1RDtRQUF2RCw4QkFBeUIsR0FBekIseUJBQXlCLENBQThCO1FBUmxFLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzlCLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBK0IsQ0FBQztRQUdsRCxvQkFBZSxHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDO1FBQzFELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUdsQixDQUFDOzs7O0lBRUQsUUFBUTtRQUVOLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFnQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekUsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNyRCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUNsQyxDQUFDO0lBRUosQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsS0FBSztRQUNuQixJQUFJLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTs7c0JBQ1osV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztnQkFBQyxNQUFNLENBQUMsRUFBRTs7d0JBQzlCLEVBQUUsR0FBRyxJQUFJO29CQUNiLFdBQVcsQ0FBQyxPQUFPOzs7O29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztvQkFDNUYsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLEtBQUs7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsb2JBQW1EO2dCQUVuRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs7YUFDdkM7Ozs7WUFaUSx5QkFBeUI7Ozt3QkFlL0IsS0FBSztzQkFDTCxLQUFLOzhCQUdMLE1BQU07dUJBQ04sS0FBSzs7OztJQUxOLGdEQUF1Qzs7SUFDdkMsOENBQTREOztJQUM1RCxzREFBMkQ7O0lBQzNELG9EQUEyQzs7SUFDM0Msc0RBQW1FOztJQUNuRSwrQ0FBMEI7O0lBQzFCLGdEQUFrQjs7Ozs7SUFFTixnRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZSB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPiB7XHJcbiAgdmFsdWU6IFQ7XHJcbiAgZGlzcGxheVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtYXV0b2NvbXBsZXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnMgPSBuZXcgQXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+PigpO1xyXG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXT47XHJcbiAgc2VsZWN0ZWRWYWx1ZTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+O1xyXG4gIEBPdXRwdXQoKSBvblNlbGVjdGVkVmFsdWU6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBASW5wdXQoKSBpc1JlbW90ZSA9IGZhbHNlO1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U6IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U8VD4pIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLmlzUmVtb3RlKSB7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZS5kYXRhU291cmNlJC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gZGF0YTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IG9mPE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdPih0aGlzLm9wdGlvbnMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBzdGFydFdpdGgoJycpLFxyXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0U2VydmljZSgpOiBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXIodmFsdWUpOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgdGhpcy5teUNvbnRyb2wuc2V0VmFsdWUodmFsdWUuZGlzcGxheVRleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLmlzUmVtb3RlKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IHtcclxuICAgICAgICAgIGxldCB3cyA9IHRydWU7XHJcbiAgICAgICAgICBmaWx0ZXJWYWx1ZS5mb3JFYWNoKHRleHQgPT4gd3MgPSB3cyAmJiBvcHRpb24uZGlzcGxheVRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpID49IDApO1xyXG4gICAgICAgICAgcmV0dXJuIHdzO1xyXG4gICAgICAgIH0pLnNwbGljZSgwLCA1KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TZWxlY3RlZChldmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gZXZlbnQub3B0aW9uLnZhbHVlO1xyXG4gICAgdGhpcy5vblNlbGVjdGVkVmFsdWUuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUudmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=