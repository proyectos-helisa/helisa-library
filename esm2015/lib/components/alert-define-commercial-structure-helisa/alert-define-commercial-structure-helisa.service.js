/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDefineCommercialStructureHelisaComponent } from './alert-define-commercial-structure-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class AlertDefineCommercialStructureHelisaService {
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
        const dialogRef = this.dialog.open(AlertDefineCommercialStructureHelisaComponent, {
            width: '250px',
            data: { title, content }
        });
        return dialogRef.afterClosed();
    }
}
AlertDefineCommercialStructureHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlertDefineCommercialStructureHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ AlertDefineCommercialStructureHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertDefineCommercialStructureHelisaService_Factory() { return new AlertDefineCommercialStructureHelisaService(i0.inject(i1.MatDialog)); }, token: AlertDefineCommercialStructureHelisaService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AlertDefineCommercialStructureHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVmaW5lLWNvbW1lcmNpYWwtc3RydWN0dXJlLWhlbGlzYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWRlZmluZS1jb21tZXJjaWFsLXN0cnVjdHVyZS1oZWxpc2EvYWxlcnQtZGVmaW5lLWNvbW1lcmNpYWwtc3RydWN0dXJlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLDZDQUE2QyxFQUFFLE1BQU0sc0RBQXNELENBQUM7OztBQU9ySCxNQUFNLE9BQU8sMkNBQTJDOzs7O0lBRXRELFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBSSxDQUFDOzs7Ozs7SUFFekMsVUFBVSxDQUFDLEtBQWMsRUFBRSxPQUFnQjs7Y0FDbkMsU0FBUyxHQUFnRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsRUFBRTtZQUM3SSxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7U0FDeEIsQ0FBQztRQUVGLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7OztZQWRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLFNBQVM7Ozs7O0lBV0osNkRBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBbGVydERlZmluZUNvbW1lcmNpYWxTdHJ1Y3R1cmVIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LWRlZmluZS1jb21tZXJjaWFsLXN0cnVjdHVyZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnREZWZpbmVDb21tZXJjaWFsU3RydWN0dXJlSGVsaXNhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG9wZW5EaWFsb2codGl0bGU/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0RGVmaW5lQ29tbWVyY2lhbFN0cnVjdHVyZUhlbGlzYUNvbXBvbmVudD4gPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0RGVmaW5lQ29tbWVyY2lhbFN0cnVjdHVyZUhlbGlzYUNvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YTogeyB0aXRsZSwgY29udGVudH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKTtcclxuICB9XHJcbn1cclxuIl19