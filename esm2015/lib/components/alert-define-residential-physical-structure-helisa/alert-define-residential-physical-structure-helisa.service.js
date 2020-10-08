/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDefineResidentialPhysicalStructureHelisaComponent } from './alert-define-residential-physical-structure-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class AlertDefineResidentialPhysicalStructureHelisaService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} title
     * @param {?=} content
     * @return {?}
     */
    openDialog(title, content) {
        /** @type {?} */
        const dialogRef = this.dialog.open(AlertDefineResidentialPhysicalStructureHelisaComponent, {
            width: '250px',
            data: { title, content }
        });
        return dialogRef.afterClosed();
    }
}
AlertDefineResidentialPhysicalStructureHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlertDefineResidentialPhysicalStructureHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ AlertDefineResidentialPhysicalStructureHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertDefineResidentialPhysicalStructureHelisaService_Factory() { return new AlertDefineResidentialPhysicalStructureHelisaService(i0.inject(i1.MatDialog)); }, token: AlertDefineResidentialPhysicalStructureHelisaService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AlertDefineResidentialPhysicalStructureHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVmaW5lLXJlc2lkZW50aWFsLXBoeXNpY2FsLXN0cnVjdHVyZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1kZWZpbmUtcmVzaWRlbnRpYWwtcGh5c2ljYWwtc3RydWN0dXJlLWhlbGlzYS9hbGVydC1kZWZpbmUtcmVzaWRlbnRpYWwtcGh5c2ljYWwtc3RydWN0dXJlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLHNEQUFzRCxFQUFFLE1BQU0sZ0VBQWdFLENBQUM7OztBQU94SSxNQUFNLE9BQU8sb0RBQW9EOzs7O0lBRS9ELFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBSSxDQUFDOzs7Ozs7SUFFekMsVUFBVSxDQUFDLEtBQWMsRUFBRSxPQUFnQjs7Y0FDbkMsU0FBUyxHQUF5RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzREFBc0QsRUFBRTtZQUMvSixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7U0FDeEIsQ0FBQztRQUVGLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7OztZQWRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLFNBQVM7Ozs7O0lBV0osc0VBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBbGVydERlZmluZVJlc2lkZW50aWFsUGh5c2ljYWxTdHJ1Y3R1cmVIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LWRlZmluZS1yZXNpZGVudGlhbC1waHlzaWNhbC1zdHJ1Y3R1cmUtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0RGVmaW5lUmVzaWRlbnRpYWxQaHlzaWNhbFN0cnVjdHVyZUhlbGlzYVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxyXG5cclxuICBvcGVuRGlhbG9nKHRpdGxlPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydERlZmluZVJlc2lkZW50aWFsUGh5c2ljYWxTdHJ1Y3R1cmVIZWxpc2FDb21wb25lbnQ+ID0gdGhpcy5kaWFsb2cub3BlbihBbGVydERlZmluZVJlc2lkZW50aWFsUGh5c2ljYWxTdHJ1Y3R1cmVIZWxpc2FDb21wb25lbnQsIHtcclxuICAgICAgd2lkdGg6ICcyNTBweCcsXHJcbiAgICAgIGRhdGE6IHsgdGl0bGUsIGNvbnRlbnR9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==