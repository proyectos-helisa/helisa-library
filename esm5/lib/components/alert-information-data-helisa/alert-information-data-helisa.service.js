/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertInformationDataHelisaComponent } from './alert-information-data-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AlertInformationDataHelisaService = /** @class */ (function () {
    function AlertInformationDataHelisaService(dialog) {
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
    AlertInformationDataHelisaService.prototype.openDialog = /**
     * @param {?} alertType
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    function (alertType, title, content, okLabel, cancelLabel) {
        /** @type {?} */
        var dialogRef = this.dialog.open(AlertInformationDataHelisaComponent, {
            width: '250px',
            data: { alertType: alertType, title: title, content: content, okLabel: okLabel, cancelLabel: cancelLabel }
        });
        return dialogRef.afterClosed();
    };
    AlertInformationDataHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertInformationDataHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertInformationDataHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertInformationDataHelisaService_Factory() { return new AlertInformationDataHelisaService(i0.inject(i1.MatDialog)); }, token: AlertInformationDataHelisaService, providedIn: "root" });
    return AlertInformationDataHelisaService;
}());
export { AlertInformationDataHelisaService };
if (false) {
    /** @type {?} */
    AlertInformationDataHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYS9hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLG1DQUFtQyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7OztBQUcvRjtJQUtFLDJDQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7Ozs7Ozs7O0lBRXpDLHNEQUFVOzs7Ozs7OztJQUFWLFVBQVcsU0FBK0IsRUFBRSxLQUFjLEVBQUUsT0FBZ0IsRUFBRSxPQUFnQixFQUFFLFdBQW9COztZQUM1RyxTQUFTLEdBQXNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFO1lBQ3pILEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUUsU0FBUyxXQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUU7U0FDMUQsQ0FBQztRQUVGLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7O2dCQWRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsU0FBUzs7OzRDQURsQjtDQXFCQyxBQWZELElBZUM7U0FaWSxpQ0FBaUM7OztJQUVoQyxtREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhQ29tcG9uZW50fSBmcm9tICcuL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0SW5mb3JtYXRpb25UeXBlIH0gZnJvbSAnLi9hbGVydC1pbmZvcm1hdGlvbi1oZWxpc2EtdHlwZS5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG9wZW5EaWFsb2coYWxlcnRUeXBlOiBBbGVydEluZm9ybWF0aW9uVHlwZSwgdGl0bGU/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG9rTGFiZWw/OiBzdHJpbmcsIGNhbmNlbExhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydEluZm9ybWF0aW9uRGF0YUhlbGlzYUNvbXBvbmVudD4gPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhQ29tcG9uZW50LCB7XHJcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICBkYXRhOiB7IGFsZXJ0VHlwZSwgdGl0bGUsIGNvbnRlbnQsIG9rTGFiZWwsIGNhbmNlbExhYmVsIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKTtcclxuICB9XHJcbn1cclxuIl19