/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * @record
 */
function AlertInformationNotValidProperties() { }
if (false) {
    /** @type {?} */
    AlertInformationNotValidProperties.prototype.title;
    /** @type {?} */
    AlertInformationNotValidProperties.prototype.content;
}
/** @type {?} */
const DEFAULT_CONTENT = 'Rectifique. Hay información no válida';
export class AlertInformationNotValidHelisaComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.content = data.content;
        if (this.content === undefined) {
            this.content = DEFAULT_CONTENT;
        }
        dialogRef.disableClose = true;
        dialogRef.keydownEvents().subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event.code === 'Escape') {
                this.dialogRef.close(this.onCancel());
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.dialogRef.close(this.onCancel());
        }), 3000);
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
AlertInformationNotValidHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-alert-information-not-valid-helisa',
                template: "<div mat-dialog-content>\r\n    {{ content }}\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertInformationNotValidHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    AlertInformationNotValidHelisaComponent.prototype.content;
    /** @type {?} */
    AlertInformationNotValidHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertInformationNotValidHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS9hbGVydC1pbmZvcm1hdGlvbi1ub3QtdmFsaWQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUdsRSxpREFHQzs7O0lBRkcsbURBQWM7O0lBQ2QscURBQWdCOzs7TUFHZCxlQUFlLEdBQVcsdUNBQXVDO0FBT3ZFLE1BQU0sT0FBTyx1Q0FBdUM7Ozs7O0lBSWhELFlBQ1csU0FBZ0UsRUFDdkMsSUFBd0M7UUFEakUsY0FBUyxHQUFULFNBQVMsQ0FBdUQ7UUFDdkMsU0FBSSxHQUFKLElBQUksQ0FBb0M7UUFFeEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7U0FDbEM7UUFDRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFO1lBQ3pELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3pDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNKLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFqQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELG1FQUFrRTs7YUFFckU7Ozs7WUFkUSxZQUFZOzRDQXFCWixNQUFNLFNBQUMsZUFBZTs7OztJQUozQiwwREFBZ0I7O0lBR1osNERBQXVFOztJQUN2RSx1REFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuXHJcbmludGVyZmFjZSBBbGVydEluZm9ybWF0aW9uTm90VmFsaWRQcm9wZXJ0aWVzIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfQ09OVEVOVDogc3RyaW5nID0gJ1JlY3RpZmlxdWUuIEhheSBpbmZvcm1hY2nDs24gbm8gdsOhbGlkYSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGVsLWFsZXJ0LWluZm9ybWF0aW9uLW5vdC12YWxpZC1oZWxpc2EnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWluZm9ybWF0aW9uLW5vdC12YWxpZC1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydEluZm9ybWF0aW9uTm90VmFsaWRIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRJbmZvcm1hdGlvbk5vdFZhbGlkSGVsaXNhQ29tcG9uZW50PixcclxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IEFsZXJ0SW5mb3JtYXRpb25Ob3RWYWxpZFByb3BlcnRpZXNcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudDtcclxuICAgICAgICBpZiAodGhpcy5jb250ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gREVGQVVMVF9DT05URU5UO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcclxuICAgICAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMub25DYW5jZWwoKSk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=