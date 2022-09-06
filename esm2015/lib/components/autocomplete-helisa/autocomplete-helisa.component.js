import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subject } from 'rxjs';
import { map, startWith, throttleTime, debounceTime } from 'rxjs/operators';
import { AutocompleteHelisaService } from './autocomplete-helisa.component.service';
export class AutocompleteHelisaComponent {
    constructor(autocompleteHelisaService) {
        this.autocompleteHelisaService = autocompleteHelisaService;
        this.myControl = new FormControl();
        this.options = new Array();
        this.selectedValueEmmiter = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.isRemote = false;
        this.isLoading = false;
        this.onScrollObservable = new Subject();
    }
    ngOnInit() {
        this.onScrollObservable.asObservable()
            .pipe(debounceTime(500), throttleTime(500))
            .subscribe(() => {
            this.nextPage.emit();
        });
        if (this.isRemote) {
            this.autocompleteHelisaService.dataSource$.subscribe((data) => {
                setTimeout(() => {
                    this.options = data;
                    this.filteredOptions = of(this.options);
                });
            });
        }
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((x) => this._checkRegex(x)), map((value) => this._filter(value)));
    }
    displayFn(option) {
        return option ? option.displayText : undefined;
    }
    getService() {
        return this.autocompleteHelisaService;
    }
    /** Elimina caracteres extraños */
    _checkRegex(value) {
        value = value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '');
        return value;
    }
    _filter(value) {
        if (!(value)) {
            if (!this.isRemote) {
                const filterValue = value.toLowerCase().split(' ');
                return this.options.filter((option) => {
                    let ws = true;
                    filterValue.forEach((text) => ws = ws && option.displayText.toLowerCase().indexOf(text) >= 0);
                    return ws;
                }).splice(0, 5);
            }
            else {
                return this.options;
            }
        }
    }
    onSelected(event) {
        this.selectedValue = event.option.value;
        this.selectedValueEmmiter.emit(this.selectedValue.value);
    }
    getNextPage() {
        this.onScrollObservable.next();
    }
}
AutocompleteHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-autocomplete',
                template: "<mat-form-field>\r\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \r\n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\r\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\r\n      {{option.displayText}}\r\n    </mat-option>    \r\n  </mat-autocomplete>\r\n</mat-form-field>",
                providers: [AutocompleteHelisaService],
                styles: [""]
            },] }
];
AutocompleteHelisaComponent.ctorParameters = () => [
    { type: AutocompleteHelisaService }
];
AutocompleteHelisaComponent.propDecorators = {
    myControl: [{ type: Input }],
    options: [{ type: Input }],
    selectedValueEmmiter: [{ type: Output }],
    nextPage: [{ type: Output }],
    isRemote: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy9saWIvY29tcG9uZW50cy9hdXRvY29tcGxldGUtaGVsaXNhL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQWFwRixNQUFNLE9BQU8sMkJBQTJCO0lBY3RDLFlBQW9CLHlCQUF1RDtRQUF2RCw4QkFBeUIsR0FBekIseUJBQXlCLENBQThCO1FBWmxFLGNBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQXVDLElBQUksS0FBSyxFQUErQixDQUFDO1FBR3RGLHlCQUFvQixHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDO1FBQzlELGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN6RCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ25DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0IsdUJBQWtCLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFHeEQsQ0FBQztJQUVELFFBQVE7UUFFTixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFO2FBQ3JDLElBQUksQ0FDSCxZQUFZLENBQUMs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Q0FBQzs7YUFDdkM7OztZQVpRLHlCQUF5Qjs7O3dCQWUvQixLQUFLO3NCQUNMLEtBQUs7bUNBR0wsTUFBTTt1QkFDTixNQUFNO3VCQUNOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCwgdGhyb3R0bGVUaW1lLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4ge1xyXG4gIHZhbHVlOiBUO1xyXG4gIGRpc3BsYXlUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW0F1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBteUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgQElucHV0KCkgb3B0aW9uczogQXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+PiA9IG5ldyBBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+KCk7XHJcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdPjtcclxuICBzZWxlY3RlZFZhbHVlOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD47XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkVmFsdWVFbW1pdGVyOiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQE91dHB1dCgpIG5leHRQYWdlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQElucHV0KCkgaXNSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIG9uU2Nyb2xsT2JzZXJ2YWJsZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTogQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTxUPikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5vblNjcm9sbE9ic2VydmFibGUuYXNPYnNlcnZhYmxlKClcclxuICAgIC5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcclxuICAgICAgdGhyb3R0bGVUaW1lKDUwMClcclxuICAgIClcclxuICAgIC5zdWJzY3JpYmUoKCk6IHZvaWQgPT4ge1xyXG4gICAgICB0aGlzLm5leHRQYWdlLmVtaXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmlzUmVtb3RlKSB7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZS5kYXRhU291cmNlJC5zdWJzY3JpYmUoKGRhdGE6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdKTogdm9pZCA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBkYXRhO1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSBvZjxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXT4odGhpcy5vcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgc3RhcnRXaXRoKCcnKSxcclxuICAgICAgbWFwKCh4OiBzdHJpbmcpOiBzdHJpbmcgPT4gdGhpcy5fY2hlY2tSZWdleCh4KSksXHJcbiAgICAgIG1hcCgodmFsdWU6IHN0cmluZyk6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGRpc3BsYXlGbihvcHRpb24/OiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIG9wdGlvbiA/IG9wdGlvbi5kaXNwbGF5VGV4dCA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldFNlcnZpY2UoKTogQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBFbGltaW5hIGNhcmFjdGVyZXMgZXh0cmHDsW9zICovXHJcbiAgcHJpdmF0ZSBfY2hlY2tSZWdleCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnJyk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdIHtcclxuICAgIGlmICghKHZhbHVlKSkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNSZW1vdGUpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZTogc3RyaW5nW10gPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdGlvbjogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgICBsZXQgd3M6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgICAgZmlsdGVyVmFsdWUuZm9yRWFjaCgodGV4dDogc3RyaW5nKTogYm9vbGVhbiA9PiB3cyA9IHdzICYmIG9wdGlvbi5kaXNwbGF5VGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgPj0gMCk7XHJcbiAgICAgICAgICByZXR1cm4gd3M7XHJcbiAgICAgICAgfSkuc3BsaWNlKDAsIDUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlbGVjdGVkKGV2ZW50OiB7b3B0aW9uOiB7dmFsdWU6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPn19KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSBldmVudC5vcHRpb24udmFsdWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWVFbW1pdGVyLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldE5leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblNjcm9sbE9ic2VydmFibGUubmV4dCgpO1xyXG4gIH1cclxufVxyXG4iXX0=