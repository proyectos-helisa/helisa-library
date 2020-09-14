/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertInformationNotValidHelisaComponent } from './alert-information-not-valid-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AlertInformationNotValidHelisaService = /** @class */ (function () {
    function AlertInformationNotValidHelisaService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} title
     * @param {?=} content
     * @return {?}
     */
    AlertInformationNotValidHelisaService.prototype.openDialog = /**
     * @param {?=} title
     * @param {?=} content
     * @return {?}
     */
    function (title, content) {
        /** @type {?} */
        var dialogRef = this.dialog.open(AlertInformationNotValidHelisaComponent, {
            width: '250px',
            data: { title: title, content: content }
        });
        return dialogRef.afterClosed();
    };
    AlertInformationNotValidHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertInformationNotValidHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertInformationNotValidHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertInformationNotValidHelisaService_Factory() { return new AlertInformationNotValidHelisaService(i0.inject(i1.MatDialog)); }, token: AlertInformationNotValidHelisaService, providedIn: "root" });
    return AlertInformationNotValidHelisaService;
}());
export { AlertInformationNotValidHelisaService };
if (false) {
    /** @type {?} */
    AlertInformationNotValidHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWluZm9ybWF0aW9uLW5vdC12YWxpZC1oZWxpc2EvYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7OztBQUl6RztJQUtFLCtDQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7Ozs7O0lBRXpDLDBEQUFVOzs7OztJQUFWLFVBQVcsS0FBYyxFQUFFLE9BQWdCOztZQUNuQyxTQUFTLEdBQTBELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxFQUFFO1lBQ2pJLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUM7U0FDeEIsQ0FBQztRQUVGLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7O2dCQWRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsU0FBUzs7O2dEQURsQjtDQXNCQyxBQWZELElBZUM7U0FaWSxxQ0FBcUM7OztJQUVwQyx1REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFsZXJ0SW5mb3JtYXRpb25Ob3RWYWxpZEhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS5jb21wb25lbnQnO1xuXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRJbmZvcm1hdGlvbk5vdFZhbGlkSGVsaXNhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICBvcGVuRGlhbG9nKHRpdGxlPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRJbmZvcm1hdGlvbk5vdFZhbGlkSGVsaXNhQ29tcG9uZW50PiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRJbmZvcm1hdGlvbk5vdFZhbGlkSGVsaXNhQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHsgdGl0bGUsIGNvbnRlbnR9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCk7XG4gIH1cbn1cbiJdfQ==