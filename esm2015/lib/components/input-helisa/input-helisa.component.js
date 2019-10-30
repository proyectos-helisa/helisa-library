/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
export class InputHelisaComponent {
    constructor() {
        this.placeholder = '';
        this.setValue = new EventEmitter();
        this.isSearch = false;
        this.inputFormControl = new FormControl('');
        this.isFocused = false;
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isFocused) {
            this.nameInput.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    search() {
        this.setValue.emit(this.inputFormControl.value);
    }
}
InputHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-input',
                template: "<mat-form-field>\r\n  <input #inputText matInput placeholder=\"{{placeholder}}\" \r\n  (keyup.enter)=\"search()\" [formControl]= \"inputFormControl\"\r\n  [attr.disabled]=\"disabled ? 'disabled' : null\"\r\n  >\r\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\r\n</mat-form-field>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
InputHelisaComponent.ctorParameters = () => [];
InputHelisaComponent.propDecorators = {
    placeholder: [{ type: Input }],
    setValue: [{ type: Output }],
    isSearch: [{ type: Input }],
    inputFormControl: [{ type: Input }],
    isFocused: [{ type: Input }],
    disabled: [{ type: Input }],
    nameInput: [{ type: ViewChild, args: ['inputText',] }]
};
if (false) {
    /** @type {?} */
    InputHelisaComponent.prototype.placeholder;
    /** @type {?} */
    InputHelisaComponent.prototype.setValue;
    /** @type {?} */
    InputHelisaComponent.prototype.isSearch;
    /** @type {?} */
    InputHelisaComponent.prototype.inputFormControl;
    /** @type {?} */
    InputHelisaComponent.prototype.isFocused;
    /** @type {?} */
    InputHelisaComponent.prototype.disabled;
    /** @type {?} */
    InputHelisaComponent.prototype.nameInput;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1oZWxpc2EvaW5wdXQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8sb0JBQW9CO0lBVy9CO1FBVFMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIscUJBQWdCLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUlWLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDBVQUE0Qzs7YUFFN0M7Ozs7OzBCQUdFLEtBQUs7dUJBQ0wsTUFBTTt1QkFDTixLQUFLOytCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUVMLFNBQVMsU0FBQyxXQUFXOzs7O0lBUHRCLDJDQUEwQjs7SUFDMUIsd0NBQXNFOztJQUN0RSx3Q0FBMEI7O0lBQzFCLGdEQUE2RDs7SUFDN0QseUNBQTJCOztJQUMzQix3Q0FBMEI7O0lBRTFCLHlDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0SGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBAT3V0cHV0KCkgc2V0VmFsdWU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQElucHV0KCkgaXNTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbnB1dEZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgQElucHV0KCkgaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRUZXh0JykgbmFtZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLm5hbWVJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWFyY2goKSB7XHJcbiAgICB0aGlzLnNldFZhbHVlLmVtaXQodGhpcy5pbnB1dEZvcm1Db250cm9sLnZhbHVlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==