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
            })).splice(0, 5);
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
    myControl: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLWhlbGlzYS9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFOUMsOENBR0M7OztJQUZDLHlDQUFTOztJQUNULCtDQUFvQjs7Ozs7QUFRdEIsTUFBTSxPQUFPLDJCQUEyQjtJQUx4QztRQU9XLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzlCLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBK0IsQ0FBQztRQUdsRCxvQkFBZSxHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDO0lBMkJyRSxDQUFDOzs7O0lBekJDLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDckQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FDbEMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxLQUFLO1FBQ25CLElBQUksS0FBSyxZQUFZLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7YUFDSTs7a0JBQ0csV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2xELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUU7O29CQUM5QixFQUFFLEdBQUcsSUFBSTtnQkFDYixXQUFXLENBQUMsT0FBTzs7OztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7Z0JBQzVGLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLEtBQUs7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsb2JBQW1EOzthQUVwRDs7O3dCQUdFLEtBQUs7c0JBQ0wsS0FBSzs4QkFHTCxNQUFNOzs7O0lBSlAsZ0RBQXVDOztJQUN2Qyw4Q0FBNEQ7O0lBQzVELHNEQUEyRDs7SUFDM0Qsb0RBQTJDOztJQUMzQyxzREFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7bWFwLCBzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+IHtcclxuICB2YWx1ZTogVDtcclxuICBkaXNwbGF5VGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgQElucHV0KCkgb3B0aW9ucyA9IG5ldyBBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+KCk7XHJcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdPjtcclxuICBzZWxlY3RlZFZhbHVlOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD47XHJcbiAgQE91dHB1dCgpIG9uU2VsZWN0ZWRWYWx1ZTogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aCgnJyksXHJcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZSk6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICB0aGlzLm15Q29udHJvbC5zZXRWYWx1ZSh2YWx1ZS5kaXNwbGF5VGV4dCk7IFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpO1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4ge1xyXG4gICAgICAgIGxldCB3cyA9IHRydWU7XHJcbiAgICAgICAgZmlsdGVyVmFsdWUuZm9yRWFjaCh0ZXh0ID0+IHdzID0gd3MgJiYgb3B0aW9uLmRpc3BsYXlUZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSA+PSAwKTtcclxuICAgICAgICByZXR1cm4gd3M7XHJcbiAgICAgIH0pLnNwbGljZSgwLCA1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlbGVjdGVkKGV2ZW50KSB7IFxyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gZXZlbnQub3B0aW9uLnZhbHVlO1xyXG4gICAgdGhpcy5vblNlbGVjdGVkVmFsdWUuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUudmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=