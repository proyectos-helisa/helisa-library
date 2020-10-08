/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDefineParkingStructureHelisaComponent } from './alert-define-parking-structure-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AlertDefineParkingStructureHelisaService = /** @class */ (function () {
    function AlertDefineParkingStructureHelisaService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} title
     * @param {?=} content
     * @return {?}
     */
    AlertDefineParkingStructureHelisaService.prototype.openDialog = /**
     * @param {?=} title
     * @param {?=} content
     * @return {?}
     */
    function (title, content) {
        /** @type {?} */
        var dialogRef = this.dialog.open(AlertDefineParkingStructureHelisaComponent, {
            width: '250px',
            data: { title: title, content: content }
        });
        return dialogRef.afterClosed();
    };
    AlertDefineParkingStructureHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertDefineParkingStructureHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertDefineParkingStructureHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertDefineParkingStructureHelisaService_Factory() { return new AlertDefineParkingStructureHelisaService(i0.inject(i1.MatDialog)); }, token: AlertDefineParkingStructureHelisaService, providedIn: "root" });
    return AlertDefineParkingStructureHelisaService;
}());
export { AlertDefineParkingStructureHelisaService };
if (false) {
    /** @type {?} */
    AlertDefineParkingStructureHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVmaW5lLXBhcmtpbmctc3RydWN0dXJlLWhlbGlzYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWRlZmluZS1wYXJraW5nLXN0cnVjdHVyZS1oZWxpc2EvYWxlcnQtZGVmaW5lLXBhcmtpbmctc3RydWN0dXJlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7OztBQUkvRztJQUtFLGtEQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7Ozs7O0lBRXpDLDZEQUFVOzs7OztJQUFWLFVBQVcsS0FBYyxFQUFFLE9BQWdCOztZQUNuQyxTQUFTLEdBQTZELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxFQUFFO1lBQ3ZJLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUM7U0FDeEIsQ0FBQztRQUVGLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7O2dCQWRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsU0FBUzs7O21EQURsQjtDQXNCQyxBQWZELElBZUM7U0FaWSx3Q0FBd0M7OztJQUV2QywwREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFsZXJ0RGVmaW5lUGFya2luZ1N0cnVjdHVyZUhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtZGVmaW5lLXBhcmtpbmctc3RydWN0dXJlLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydERlZmluZVBhcmtpbmdTdHJ1Y3R1cmVIZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcbiAgb3BlbkRpYWxvZyh0aXRsZT86IHN0cmluZywgY29udGVudD86IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnREZWZpbmVQYXJraW5nU3RydWN0dXJlSGVsaXNhQ29tcG9uZW50PiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnREZWZpbmVQYXJraW5nU3RydWN0dXJlSGVsaXNhQ29tcG9uZW50LCB7XHJcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICBkYXRhOiB7IHRpdGxlLCBjb250ZW50fVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xyXG4gIH1cclxufVxyXG4iXX0=