/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDefineCommercialStructureHelisaComponent } from './alert-define-commercial-structure-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AlertDefineCommercialStructureHelisaService = /** @class */ (function () {
    function AlertDefineCommercialStructureHelisaService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} title
     * @param {?=} content
     * @return {?}
     */
    AlertDefineCommercialStructureHelisaService.prototype.openDialog = /**
     * @param {?=} title
     * @param {?=} content
     * @return {?}
     */
    function (title, content) {
        /** @type {?} */
        var dialogRef = this.dialog.open(AlertDefineCommercialStructureHelisaComponent, {
            width: '250px',
            data: { title: title, content: content }
        });
        return dialogRef.afterClosed();
    };
    AlertDefineCommercialStructureHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertDefineCommercialStructureHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertDefineCommercialStructureHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertDefineCommercialStructureHelisaService_Factory() { return new AlertDefineCommercialStructureHelisaService(i0.inject(i1.MatDialog)); }, token: AlertDefineCommercialStructureHelisaService, providedIn: "root" });
    return AlertDefineCommercialStructureHelisaService;
}());
export { AlertDefineCommercialStructureHelisaService };
if (false) {
    /** @type {?} */
    AlertDefineCommercialStructureHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVmaW5lLWNvbW1lcmNpYWwtc3RydWN0dXJlLWhlbGlzYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWRlZmluZS1jb21tZXJjaWFsLXN0cnVjdHVyZS1oZWxpc2EvYWxlcnQtZGVmaW5lLWNvbW1lcmNpYWwtc3RydWN0dXJlLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLDZDQUE2QyxFQUFFLE1BQU0sc0RBQXNELENBQUM7OztBQUlySDtJQUtFLHFEQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7Ozs7O0lBRXpDLGdFQUFVOzs7OztJQUFWLFVBQVcsS0FBYyxFQUFFLE9BQWdCOztZQUNuQyxTQUFTLEdBQWdFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxFQUFFO1lBQzdJLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUM7U0FDeEIsQ0FBQztRQUVGLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7O2dCQWRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsU0FBUzs7O3NEQURsQjtDQXNCQyxBQWZELElBZUM7U0FaWSwyQ0FBMkM7OztJQUUxQyw2REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFsZXJ0RGVmaW5lQ29tbWVyY2lhbFN0cnVjdHVyZUhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtZGVmaW5lLWNvbW1lcmNpYWwtc3RydWN0dXJlLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydERlZmluZUNvbW1lcmNpYWxTdHJ1Y3R1cmVIZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcbiAgb3BlbkRpYWxvZyh0aXRsZT86IHN0cmluZywgY29udGVudD86IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnREZWZpbmVDb21tZXJjaWFsU3RydWN0dXJlSGVsaXNhQ29tcG9uZW50PiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnREZWZpbmVDb21tZXJjaWFsU3RydWN0dXJlSGVsaXNhQ29tcG9uZW50LCB7XHJcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICBkYXRhOiB7IHRpdGxlLCBjb250ZW50fVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xyXG4gIH1cclxufVxyXG4iXX0=