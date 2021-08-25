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
                template: "<mat-form-field>\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\n      {{option.displayText}}\n    </mat-option>    \n  </mat-autocomplete>\n</mat-form-field>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hdXRvY29tcGxldGUtaGVsaXNhL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQWFwRixNQUFNLE9BQU8sMkJBQTJCO0lBY3RDLFlBQW9CLHlCQUF1RDtRQUF2RCw4QkFBeUIsR0FBekIseUJBQXlCLENBQThCO1FBWmxFLGNBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQXVDLElBQUksS0FBSyxFQUErQixDQUFDO1FBR3RGLHlCQUFvQixHQUFvQixJQUFJLFlBQVksRUFBSyxDQUFDO1FBQzlELGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN6RCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ25DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0IsdUJBQWtCLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFHeEQsQ0FBQztJQUVELFFBQVE7UUFFTixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFO2FBQ3JDLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEI7YUFDQSxTQUFTLENBQUMsR0FBUyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFtQyxFQUFRLEVBQUU7Z0JBQ2pHLFVBQVUsQ0FBQyxHQUFTLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBZ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6RSxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDckQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUcsQ0FBQyxDQUFDLENBQVMsRUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxHQUFHLENBQUMsQ0FBQyxLQUFhLEVBQWlDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzNFLENBQUM7SUFFSixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQW9DO1FBQzVDLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDakQsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDO0lBR0Qsa0NBQWtDO0lBQzFCLFdBQVcsQ0FBQyxLQUFhO1FBQy9CLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLE9BQU8sQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLE1BQU0sV0FBVyxHQUFhLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFtQyxFQUFXLEVBQUU7b0JBQzFFLElBQUksRUFBRSxHQUFZLElBQUksQ0FBQztvQkFDdkIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVksRUFBVyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDL0csT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7SUFFTSxVQUFVLENBQUMsS0FBcUQ7UUFDckUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7O1lBeEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix3ZkFBbUQ7Z0JBRW5ELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDOzthQUN2Qzs7O1lBWlEseUJBQXlCOzs7d0JBZS9CLEtBQUs7c0JBQ0wsS0FBSzttQ0FHTCxNQUFNO3VCQUNOLE1BQU07dUJBQ04sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCB0aHJvdHRsZVRpbWUsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPiB7XG4gIHZhbHVlOiBUO1xuICBkaXNwbGF5VGV4dDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRvY29tcGxldGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBteUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IEFycmF5PE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPj4gPSBuZXcgQXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+PigpO1xuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10+O1xuICBzZWxlY3RlZFZhbHVlOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD47XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFZhbHVlRW1taXRlcjogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQElucHV0KCkgaXNSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblxuICBvblNjcm9sbE9ic2VydmFibGU6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTogQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZTxUPikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLm9uU2Nyb2xsT2JzZXJ2YWJsZS5hc09ic2VydmFibGUoKVxuICAgIC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICB0aHJvdHRsZVRpbWUoNTAwKVxuICAgIClcbiAgICAuc3Vic2NyaWJlKCgpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMubmV4dFBhZ2UuZW1pdCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuaXNSZW1vdGUpIHtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZS5kYXRhU291cmNlJC5zdWJzY3JpYmUoKGRhdGE6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdKTogdm9pZCA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSBvZjxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXT4odGhpcy5vcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIG1hcCgoeDogc3RyaW5nKTogc3RyaW5nID0+IHRoaXMuX2NoZWNrUmVnZXgoeCkpLFxuICAgICAgbWFwKCh2YWx1ZTogc3RyaW5nKTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10gPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICApO1xuXG4gIH1cblxuICBkaXNwbGF5Rm4ob3B0aW9uPzogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gb3B0aW9uID8gb3B0aW9uLmRpc3BsYXlUZXh0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0U2VydmljZSgpOiBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlO1xuICB9XG5cblxuICAvKiogRWxpbWluYSBjYXJhY3RlcmVzIGV4dHJhw7FvcyAqL1xuICBwcml2YXRlIF9jaGVja1JlZ2V4KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnJyk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXSB7XG4gICAgaWYgKCEodmFsdWUpKSB7XG4gICAgICBpZiAoIXRoaXMuaXNSZW1vdGUpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyVmFsdWU6IHN0cmluZ1tdID0gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcigob3B0aW9uOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4pOiBib29sZWFuID0+IHtcbiAgICAgICAgICBsZXQgd3M6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICAgIGZpbHRlclZhbHVlLmZvckVhY2goKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4gPT4gd3MgPSB3cyAmJiBvcHRpb24uZGlzcGxheVRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpID49IDApO1xuICAgICAgICAgIHJldHVybiB3cztcbiAgICAgICAgfSkuc3BsaWNlKDAsIDUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3RlZChldmVudDoge29wdGlvbjoge3ZhbHVlOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD59fSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50Lm9wdGlvbi52YWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWVFbW1pdGVyLmVtaXQodGhpcy5zZWxlY3RlZFZhbHVlLnZhbHVlKTtcbiAgfVxuXG4gIGdldE5leHRQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMub25TY3JvbGxPYnNlcnZhYmxlLm5leHQoKTtcbiAgfVxufVxuIl19