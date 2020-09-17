/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertUncompletedDataHelisaComponent } from './alert-uncompleted-data-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class AlertUncompletedDataHelisaService {
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
        const dialogRef = this.dialog.open(AlertUncompletedDataHelisaComponent, {
            width: '250px',
            data: { title, content, okLabel, cancelLabel }
        });
        return dialogRef.afterClosed();
    }
}
AlertUncompletedDataHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlertUncompletedDataHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ AlertUncompletedDataHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertUncompletedDataHelisaService_Factory() { return new AlertUncompletedDataHelisaService(i0.inject(i1.MatDialog)); }, token: AlertUncompletedDataHelisaService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AlertUncompletedDataHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtdW5jb21wbGV0ZWQtZGF0YS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC11bmNvbXBsZXRlZC1kYXRhLWhlbGlzYS9hbGVydC11bmNvbXBsZXRlZC1kYXRhLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQU9oRyxNQUFNLE9BQU8saUNBQWlDOzs7O0lBRTVDLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBSSxDQUFDOzs7Ozs7OztJQUV6QyxVQUFVLENBQUMsS0FBYyxFQUFFLE9BQWdCLEVBQUUsT0FBZ0IsRUFBRSxXQUFvQjs7Y0FDM0UsU0FBUyxHQUFzRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRTtZQUN6SCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtTQUMvQyxDQUFDO1FBRUYsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEsU0FBUzs7Ozs7SUFXSixtREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFsZXJ0VW5jb21wbGV0ZWREYXRhSGVsaXNhQ29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC11bmNvbXBsZXRlZC1kYXRhLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxyXG5cclxuICBvcGVuRGlhbG9nKHRpdGxlPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nLCBva0xhYmVsPzogc3RyaW5nLCBjYW5jZWxMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRVbmNvbXBsZXRlZERhdGFIZWxpc2FDb21wb25lbnQ+ID0gdGhpcy5kaWFsb2cub3BlbihBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYUNvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YTogeyB0aXRsZSwgY29udGVudCwgb2tMYWJlbCwgY2FuY2VsTGFiZWwgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xyXG4gIH1cclxufVxyXG4iXX0=