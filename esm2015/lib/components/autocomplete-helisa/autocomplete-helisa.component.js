/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
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
    constructor() {
        this.myControl = new FormControl();
        this.options = new Array();
        this.onSelectedValue = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
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
            }));
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
                styles: [""]
            }] }
];
AutocompleteHelisaComponent.propDecorators = {
    options: [{ type: Input }],
    onSelectedValue: [{ type: Output }]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFOUMsOENBR0M7OztJQUZDLHlDQUFTOztJQUNULCtDQUFvQjs7Ozs7QUFRdEIsTUFBTSxPQUFPLDJCQUEyQjtJQUx4QztRQU9FLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBK0IsQ0FBQztRQUdsRCxvQkFBZSxHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDO0lBMkJyRSxDQUFDOzs7O0lBekJDLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDckQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FDbEMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxLQUFLO1FBQ25CLElBQUksS0FBSyxZQUFZLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7YUFDSTs7a0JBQ0csV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2xELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUU7O29CQUM5QixFQUFFLEdBQUcsSUFBSTtnQkFDYixXQUFXLENBQUMsT0FBTzs7OztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7Z0JBQzVGLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLEtBQUs7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsb2JBQW1EOzthQUVwRDs7O3NCQUlFLEtBQUs7OEJBR0wsTUFBTTs7OztJQUpQLGdEQUE4Qjs7SUFDOUIsOENBQTREOztJQUM1RCxzREFBMkQ7O0lBQzNELG9EQUEyQzs7SUFDM0Msc0RBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPiB7XHJcbiAgdmFsdWU6IFQ7XHJcbiAgZGlzcGxheVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtYXV0b2NvbXBsZXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnMgPSBuZXcgQXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+PigpO1xyXG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXT47XHJcbiAgc2VsZWN0ZWRWYWx1ZTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+O1xyXG4gIEBPdXRwdXQoKSBvblNlbGVjdGVkVmFsdWU6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBzdGFydFdpdGgoJycpLFxyXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSkgXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlKTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10ge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgIHRoaXMubXlDb250cm9sLnNldFZhbHVlKHZhbHVlLmRpc3BsYXlUZXh0KTsgXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgbGV0IHdzID0gdHJ1ZTtcclxuICAgICAgICBmaWx0ZXJWYWx1ZS5mb3JFYWNoKHRleHQgPT4gd3MgPSB3cyAmJiBvcHRpb24uZGlzcGxheVRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpID49IDApO1xyXG4gICAgICAgIHJldHVybiB3cztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TZWxlY3RlZChldmVudCkgeyBcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50Lm9wdGlvbi52YWx1ZTsgXHJcbiAgICB0aGlzLm9uU2VsZWN0ZWRWYWx1ZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZS52YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==