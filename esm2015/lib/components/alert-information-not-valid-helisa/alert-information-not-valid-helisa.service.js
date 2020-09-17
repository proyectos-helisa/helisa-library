/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertInformationNotValidHelisaComponent } from './alert-information-not-valid-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class AlertInformationNotValidHelisaService {
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
        const dialogRef = this.dialog.open(AlertInformationNotValidHelisaComponent, {
            width: '250px',
            data: { title, content }
        });
        return dialogRef.afterClosed();
    }
}
AlertInformationNotValidHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlertInformationNotValidHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ AlertInformationNotValidHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertInformationNotValidHelisaService_Factory() { return new AlertInformationNotValidHelisaService(i0.inject(i1.MatDialog)); }, token: AlertInformationNotValidHelisaService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AlertInformationNotValidHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWluZm9ybWF0aW9uLW5vdC12YWxpZC1oZWxpc2EvYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7OztBQU96RyxNQUFNLE9BQU8scUNBQXFDOzs7O0lBRWhELFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBSSxDQUFDOzs7Ozs7SUFFekMsVUFBVSxDQUFDLEtBQWMsRUFBRSxPQUFnQjs7Y0FDbkMsU0FBUyxHQUEwRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsRUFBRTtZQUNqSSxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7U0FDeEIsQ0FBQztRQUVGLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7OztZQWRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLFNBQVM7Ozs7O0lBV0osdURBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBbGVydEluZm9ybWF0aW9uTm90VmFsaWRIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LWluZm9ybWF0aW9uLW5vdC12YWxpZC1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRJbmZvcm1hdGlvbk5vdFZhbGlkSGVsaXNhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG9wZW5EaWFsb2codGl0bGU/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0SW5mb3JtYXRpb25Ob3RWYWxpZEhlbGlzYUNvbXBvbmVudD4gPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0SW5mb3JtYXRpb25Ob3RWYWxpZEhlbGlzYUNvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YTogeyB0aXRsZSwgY29udGVudH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKTtcclxuICB9XHJcbn1cclxuIl19