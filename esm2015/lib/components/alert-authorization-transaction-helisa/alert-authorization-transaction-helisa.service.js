/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertAuthorizationTransactionHelisaComponent } from './alert-authorization-transaction-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class AlertAuthorizationTransactionHelisaService {
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
        const dialogRef = this.dialog.open(AlertAuthorizationTransactionHelisaComponent, {
            width: '250px',
            data: { title, content, okLabel, cancelLabel }
        });
        return dialogRef.afterClosed();
    }
}
AlertAuthorizationTransactionHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlertAuthorizationTransactionHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ AlertAuthorizationTransactionHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertAuthorizationTransactionHelisaService_Factory() { return new AlertAuthorizationTransactionHelisaService(i0.inject(i1.MatDialog)); }, token: AlertAuthorizationTransactionHelisaService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AlertAuthorizationTransactionHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYXV0aG9yaXphdGlvbi10cmFuc2FjdGlvbi1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1hdXRob3JpemF0aW9uLXRyYW5zYWN0aW9uLWhlbGlzYS9hbGVydC1hdXRob3JpemF0aW9uLXRyYW5zYWN0aW9uLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFDLDRDQUE0QyxFQUFDLE1BQU0sb0RBQW9ELENBQUM7OztBQUtoSCxNQUFNLE9BQU8sMENBQTBDOzs7O0lBRXJELFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBSSxDQUFDOzs7Ozs7OztJQUV6QyxVQUFVLENBQUMsS0FBYyxFQUFFLE9BQWdCLEVBQUUsT0FBZ0IsRUFBRSxXQUFvQjs7Y0FDM0UsU0FBUyxHQUErRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsRUFBRTtZQUMzSSxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtTQUMvQyxDQUFDO1FBRUYsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsU0FBUzs7Ozs7SUFTSiw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7QWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FDb21wb25lbnR9IGZyb20gJy4vYWxlcnQtYXV0aG9yaXphdGlvbi10cmFuc2FjdGlvbi1oZWxpc2EuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxuXG4gIG9wZW5EaWFsb2codGl0bGU/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG9rTGFiZWw/OiBzdHJpbmcsIGNhbmNlbExhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FDb21wb25lbnQ+ID0gdGhpcy5kaWFsb2cub3BlbihBbGVydEF1dGhvcml6YXRpb25UcmFuc2FjdGlvbkhlbGlzYUNvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7IHRpdGxlLCBjb250ZW50LCBva0xhYmVsLCBjYW5jZWxMYWJlbCB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCk7XG4gIH1cbn1cbiJdfQ==