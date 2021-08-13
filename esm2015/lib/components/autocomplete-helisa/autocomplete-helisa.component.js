import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subject } from 'rxjs';
import { map, startWith, throttleTime, debounceTime } from 'rxjs/operators';
import { AutocompleteHelisaService } from './autocomplete-helisa.component.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './autocomplete-helisa.component.service';
import * as ɵngcc2 from '@angular/material/form-field';
import * as ɵngcc3 from '@angular/material/input';
import * as ɵngcc4 from '@angular/forms';
import * as ɵngcc5 from '@angular/material/autocomplete';
import * as ɵngcc6 from '../../directives/options-scroll.directive';
import * as ɵngcc7 from '@angular/common';
import * as ɵngcc8 from '@angular/material/core';
import * as ɵngcc9 from '../../directives/tooltip.directive';

function AutocompleteHelisaComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-option", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", option_r2)("helTooltip", option_r2.displayText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", option_r2.displayText, " ");
} }
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
AutocompleteHelisaComponent.ɵfac = function AutocompleteHelisaComponent_Factory(t) { return new (t || AutocompleteHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.AutocompleteHelisaService)); };
AutocompleteHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AutocompleteHelisaComponent, selectors: [["hel-autocomplete"]], inputs: { myControl: "myControl", options: "options", isRemote: "isRemote" }, outputs: { selectedValueEmmiter: "selectedValueEmmiter", nextPage: "nextPage" }, features: [ɵngcc0.ɵɵProvidersFeature([AutocompleteHelisaService])], decls: 6, vars: 6, consts: [["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith", "optionSelected", "optionsScroll"], ["auto", "matAutocomplete"], [3, "value", "helTooltip", 4, "ngFor", "ngForOf"], [3, "value", "helTooltip"]], template: function AutocompleteHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-form-field");
        ɵngcc0.ɵɵelement(1, "input", 0);
        ɵngcc0.ɵɵelementStart(2, "mat-autocomplete", 1, 2);
        ɵngcc0.ɵɵlistener("optionSelected", function AutocompleteHelisaComponent_Template_mat_autocomplete_optionSelected_2_listener($event) { return ctx.onSelected($event); })("optionsScroll", function AutocompleteHelisaComponent_Template_mat_autocomplete_optionsScroll_2_listener() { return ctx.getNextPage(); });
        ɵngcc0.ɵɵtemplate(4, AutocompleteHelisaComponent_mat_option_4_Template, 2, 3, "mat-option", 3);
        ɵngcc0.ɵɵpipe(5, "async");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("displayWith", ctx.displayFn);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(5, 4, ctx.filteredOptions));
    } }, directives: [ɵngcc2.MatFormField, ɵngcc3.MatInput, ɵngcc4.DefaultValueAccessor, ɵngcc5.MatAutocompleteTrigger, ɵngcc4.NgControlStatus, ɵngcc4.FormControlDirective, ɵngcc5.MatAutocomplete, ɵngcc6.OptionsScrollDirective, ɵngcc7.NgForOf, ɵngcc8.MatOption, ɵngcc9.HelTooltipDirective], pipes: [ɵngcc7.AsyncPipe], styles: [""] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutocompleteHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-autocomplete',
                template: "<mat-form-field>\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\n      {{option.displayText}}\n    </mat-option>    \n  </mat-autocomplete>\n</mat-form-field>",
                providers: [AutocompleteHelisaService],
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc1.AutocompleteHelisaService }]; }, { myControl: [{
            type: Input
        }], options: [{
            type: Input
        }], selectedValueEmmiter: [{
            type: Output
        }], nextPage: [{
            type: Output
        }], isRemote: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjL2xpYi9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS1oZWxpc2EvYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXBGLE1BQU0sT0FBTywyQkFBMkI7QUFBRyxJQWN6QyxZQUFvQix5QkFBdUQ7QUFDN0UsUUFEc0IsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUE4QjtBQUFDLFFBWm5FLGNBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUN0RCxRQUFXLFlBQU8sR0FBdUMsSUFBSSxLQUFLLEVBQStCLENBQUM7QUFDbEcsUUFFWSx5QkFBb0IsR0FBb0IsSUFBSSxZQUFZLEVBQUssQ0FBQztBQUMxRSxRQUFZLGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztBQUNwRSxRQUFXLGFBQVEsR0FBWSxLQUFLLENBQUM7QUFDckMsUUFBRSxjQUFTLEdBQVksS0FBSyxDQUFDO0FBQzdCLFFBRUUsdUJBQWtCLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7QUFDMUQsSUFFRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQUssUUFFWCxJ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QWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUM1QyxRQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3RCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuQyxJQUFFLENBQUM7QUFDSDt1REF6RkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxrQkFBa0Isa0JBQzVCOzhiQUFtRCxrQkFFbkQsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUMsNENBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs4VUFDSTtBQUFDO0FBQXFELFlBYmxELHlCQUF5QjtBQUFHO0FBQUc7QUFFdkMsd0JBYUUsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyxtQ0FHVixNQUFNO0FBQUssdUJBQ1gsTUFBTTtBQUFLLHVCQUNYLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHRocm90dGxlVGltZSwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlSGVsaXNhU2VydmljZSB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+IHtcbiAgdmFsdWU6IFQ7XG4gIGRpc3BsYXlUZXh0OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS1oZWxpc2EuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG15Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgQElucHV0KCkgb3B0aW9uczogQXJyYXk8T3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+PiA9IG5ldyBBcnJheTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4+KCk7XG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXT47XG4gIHNlbGVjdGVkVmFsdWU6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPjtcbiAgQE91dHB1dCgpIHNlbGVjdGVkVmFsdWVFbW1pdGVyOiBFdmVudEVtaXR0ZXI8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gIEBPdXRwdXQoKSBuZXh0UGFnZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBASW5wdXQoKSBpc1JlbW90ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIG9uU2Nyb2xsT2JzZXJ2YWJsZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlOiBBdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlPFQ+KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMub25TY3JvbGxPYnNlcnZhYmxlLmFzT2JzZXJ2YWJsZSgpXG4gICAgLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICAgIHRocm90dGxlVGltZSg1MDApXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoKCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5uZXh0UGFnZS5lbWl0KCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5pc1JlbW90ZSkge1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVIZWxpc2FTZXJ2aWNlLmRhdGFTb3VyY2UkLnN1YnNjcmliZSgoZGF0YTogT3B0aW9uQXV0b2NvbXBsZXRlSGVsaXNhPFQ+W10pOiB2b2lkID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gZGF0YTtcbiAgICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IG9mPE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdPih0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgbWFwKCh4OiBzdHJpbmcpOiBzdHJpbmcgPT4gdGhpcy5fY2hlY2tSZWdleCh4KSksXG4gICAgICBtYXAoKHZhbHVlOiBzdHJpbmcpOiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD5bXSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxuICAgICk7XG5cbiAgfVxuXG4gIGRpc3BsYXlGbihvcHRpb24/OiBPcHRpb25BdXRvY29tcGxldGVIZWxpc2E8VD4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBvcHRpb24gPyBvcHRpb24uZGlzcGxheVRleHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRTZXJ2aWNlKCk6IEF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U8VD4ge1xuICAgIHJldHVybiB0aGlzLmF1dG9jb21wbGV0ZUhlbGlzYVNlcnZpY2U7XG4gIH1cblxuXG4gIC8qKiBFbGltaW5hIGNhcmFjdGVyZXMgZXh0cmHDsW9zICovXG4gIHByaXZhdGUgX2NoZWNrUmVnZXgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICcnKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPltdIHtcbiAgICBpZiAoISh2YWx1ZSkpIHtcbiAgICAgIGlmICghdGhpcy5pc1JlbW90ZSkge1xuICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZTogc3RyaW5nW10gPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHRpb246IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPik6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgIGxldCB3czogYm9vbGVhbiA9IHRydWU7XG4gICAgICAgICAgZmlsdGVyVmFsdWUuZm9yRWFjaCgodGV4dDogc3RyaW5nKTogYm9vbGVhbiA9PiB3cyA9IHdzICYmIG9wdGlvbi5kaXNwbGF5VGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgPj0gMCk7XG4gICAgICAgICAgcmV0dXJuIHdzO1xuICAgICAgICB9KS5zcGxpY2UoMCwgNSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdGVkKGV2ZW50OiB7b3B0aW9uOiB7dmFsdWU6IE9wdGlvbkF1dG9jb21wbGV0ZUhlbGlzYTxUPn19KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gZXZlbnQub3B0aW9uLnZhbHVlO1xuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUVtbWl0ZXIuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWUudmFsdWUpO1xuICB9XG5cbiAgZ2V0TmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5vblNjcm9sbE9ic2VydmFibGUubmV4dCgpO1xuICB9XG59XG4iXX0=