/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertUncompletedSelectedDataHelisaComponent } from './alert-uncompleted-selected-data-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class AlertUncompletedSelectedDataHelisaService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    openDialog(title, content, okLabel, cancelLabel) {
        /** @type {?} */
        const dialogRef = this.dialog.open(AlertUncompletedSelectedDataHelisaComponent, {
            width: '250px',
            data: { title, content, okLabel, cancelLabel }
        });
        return dialogRef.afterClosed();
    }
}
AlertUncompletedSelectedDataHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlertUncompletedSelectedDataHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ AlertUncompletedSelectedDataHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertUncompletedSelectedDataHelisaService_Factory() { return new AlertUncompletedSelectedDataHelisaService(i0.inject(i1.MatDialog)); }, token: AlertUncompletedSelectedDataHelisaService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AlertUncompletedSelectedDataHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtdW5jb21wbGV0ZWQtc2VsZWN0ZWQtZGF0YS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC11bmNvbXBsZXRlZC1zZWxlY3RlZC1kYXRhLWhlbGlzYS9hbGVydC11bmNvbXBsZXRlZC1zZWxlY3RlZC1kYXRhLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFDLDJDQUEyQyxFQUFDLE1BQU0sb0RBQW9ELENBQUM7OztBQU8vRyxNQUFNLE9BQU8seUNBQXlDOzs7O0lBRXBELFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBSSxDQUFDOzs7Ozs7OztJQUV6QyxVQUFVLENBQUMsS0FBYyxFQUFFLE9BQWdCLEVBQUUsT0FBZ0IsRUFBRSxXQUFvQjs7Y0FDM0UsU0FBUyxHQUE4RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQ0FBMkMsRUFBRTtZQUN6SSxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtTQUMvQyxDQUFDO1FBRUYsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEsU0FBUzs7Ozs7SUFXSiwyREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7QWxlcnRVbmNvbXBsZXRlZFNlbGVjdGVkRGF0YUhlbGlzYUNvbXBvbmVudH0gZnJvbSAnLi9hbGVydC11bmNvbXBsZXRlZC1zZWxlY3RlZC1kYXRhLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydFVuY29tcGxldGVkU2VsZWN0ZWREYXRhSGVsaXNhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG9wZW5EaWFsb2codGl0bGU/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG9rTGFiZWw/OiBzdHJpbmcsIGNhbmNlbExhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydFVuY29tcGxldGVkU2VsZWN0ZWREYXRhSGVsaXNhQ29tcG9uZW50PiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRVbmNvbXBsZXRlZFNlbGVjdGVkRGF0YUhlbGlzYUNvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YTogeyB0aXRsZSwgY29udGVudCwgb2tMYWJlbCwgY2FuY2VsTGFiZWwgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xyXG4gIH1cclxufVxyXG4iXX0=