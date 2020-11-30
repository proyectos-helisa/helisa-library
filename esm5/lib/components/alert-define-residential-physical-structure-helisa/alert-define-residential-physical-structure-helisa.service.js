/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDefineResidentialPhysicalStructureHelisaComponent } from './alert-define-residential-physical-structure-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AlertDefineResidentialPhysicalStructureHelisaService = /** @class */ (function () {
    function AlertDefineResidentialPhysicalStructureHelisaService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} title
     * @param {?=} content
     * @return {?}
     */
    AlertDefineResidentialPhysicalStructureHelisaService.prototype.openDialog = /**
     * @param {?=} title
     * @param {?=} content
     * @return {?}
     */
    function (title, content) {
        /** @type {?} */
        var dialogRef = this.dialog.open(AlertDefineResidentialPhysicalStructureHelisaComponent, {
            width: '250px',
            data: { title: title, content: content }
        });
        return dialogRef.afterClosed();
    };
    AlertDefineResidentialPhysicalStructureHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertDefineResidentialPhysicalStructureHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertDefineResidentialPhysicalStructureHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertDefineResidentialPhysicalStructureHelisaService_Factory() { return new AlertDefineResidentialPhysicalStructureHelisaService(i0.inject(i1.MatDialog)); }, token: AlertDefineResidentialPhysicalStructureHelisaService, providedIn: "root" });
    return AlertDefineResidentialPhysicalStructureHelisaService;
}());
export { AlertDefineResidentialPhysicalStructureHelisaService };
if (false) {
    /** @type {?} */
    AlertDefineResidentialPhysicalStructureHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVmaW5lLXJlc2lkZW50aWFsLXBoeXNpY2FsLXN0cnVjdHVyZS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1kZWZpbmUtcmVzaWRlbnRpYWwtcGh5c2ljYWwtc3RydWN0dXJlLWhlbGlzYS9hbGVydC1kZWZpbmUtcmVzaWRlbnRpYWwtcGh5c2ljYWwtc3RydWN0dXJlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLHNEQUFzRCxFQUFFLE1BQU0sZ0VBQWdFLENBQUM7OztBQUl4STtJQUtFLDhEQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7Ozs7O0lBRXpDLHlFQUFVOzs7OztJQUFWLFVBQVcsS0FBYyxFQUFFLE9BQWdCOztZQUNuQyxTQUFTLEdBQXlFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNEQUFzRCxFQUFFO1lBQy9KLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUM7U0FDeEIsQ0FBQztRQUVGLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7O2dCQWRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsU0FBUzs7OytEQURsQjtDQXNCQyxBQWZELElBZUM7U0FaWSxvREFBb0Q7OztJQUVuRCxzRUFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFsZXJ0RGVmaW5lUmVzaWRlbnRpYWxQaHlzaWNhbFN0cnVjdHVyZUhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtZGVmaW5lLXJlc2lkZW50aWFsLXBoeXNpY2FsLXN0cnVjdHVyZS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnREZWZpbmVSZXNpZGVudGlhbFBoeXNpY2FsU3RydWN0dXJlSGVsaXNhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG9wZW5EaWFsb2codGl0bGU/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0RGVmaW5lUmVzaWRlbnRpYWxQaHlzaWNhbFN0cnVjdHVyZUhlbGlzYUNvbXBvbmVudD4gPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0RGVmaW5lUmVzaWRlbnRpYWxQaHlzaWNhbFN0cnVjdHVyZUhlbGlzYUNvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YTogeyB0aXRsZSwgY29udGVudH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKTtcclxuICB9XHJcbn1cclxuIl19