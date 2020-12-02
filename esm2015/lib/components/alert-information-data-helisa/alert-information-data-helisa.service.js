/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertInformationDataHelisaComponent } from './alert-information-data-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class AlertInformationDataHelisaService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} alertType
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    openDialog(alertType, title, content, okLabel, cancelLabel) {
        /** @type {?} */
        const dialogRef = this.dialog.open(AlertInformationDataHelisaComponent, {
            width: '250px',
            data: { alertType, title, content, okLabel, cancelLabel }
        });
        return dialogRef.afterClosed();
    }
}
AlertInformationDataHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlertInformationDataHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ AlertInformationDataHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertInformationDataHelisaService_Factory() { return new AlertInformationDataHelisaService(i0.inject(i1.MatDialog)); }, token: AlertInformationDataHelisaService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AlertInformationDataHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYS9hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLG1DQUFtQyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7OztBQU0vRixNQUFNLE9BQU8saUNBQWlDOzs7O0lBRTVDLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBSSxDQUFDOzs7Ozs7Ozs7SUFFekMsVUFBVSxDQUFDLFNBQStCLEVBQUUsS0FBYyxFQUFFLE9BQWdCLEVBQUUsT0FBZ0IsRUFBRSxXQUFvQjs7Y0FDNUcsU0FBUyxHQUFzRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRTtZQUN6SCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7U0FDMUQsQ0FBQztRQUVGLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7OztZQWRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLFNBQVM7Ozs7O0lBVUosbURBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBbGVydEluZm9ybWF0aW9uRGF0YUhlbGlzYUNvbXBvbmVudH0gZnJvbSAnLi9hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGVydEluZm9ybWF0aW9uVHlwZSB9IGZyb20gJy4vYWxlcnQtaW5mb3JtYXRpb24taGVsaXNhLXR5cGUuZW51bSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydEluZm9ybWF0aW9uRGF0YUhlbGlzYVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxyXG5cclxuICBvcGVuRGlhbG9nKGFsZXJ0VHlwZTogQWxlcnRJbmZvcm1hdGlvblR5cGUsIHRpdGxlPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nLCBva0xhYmVsPzogc3RyaW5nLCBjYW5jZWxMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRJbmZvcm1hdGlvbkRhdGFIZWxpc2FDb21wb25lbnQ+ID0gdGhpcy5kaWFsb2cub3BlbihBbGVydEluZm9ybWF0aW9uRGF0YUhlbGlzYUNvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YTogeyBhbGVydFR5cGUsIHRpdGxlLCBjb250ZW50LCBva0xhYmVsLCBjYW5jZWxMYWJlbCB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==