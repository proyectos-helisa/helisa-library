/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertLostDataHelisaComponent } from './alert-lost-data-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AlertLostDataHelisaService = /** @class */ (function () {
    function AlertLostDataHelisaService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    AlertLostDataHelisaService.prototype.openDialog = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    function (title, content, okLabel, cancelLabel) {
        /** @type {?} */
        var dialogRef = this.dialog.open(AlertLostDataHelisaComponent, {
            width: '250px',
            data: { title: title, content: content, okLabel: okLabel, cancelLabel: cancelLabel }
        });
        return dialogRef.afterClosed();
    };
    AlertLostDataHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertLostDataHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertLostDataHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertLostDataHelisaService_Factory() { return new AlertLostDataHelisaService(i0.inject(i1.MatDialog)); }, token: AlertLostDataHelisaService, providedIn: "root" });
    return AlertLostDataHelisaService;
}());
export { AlertLostDataHelisaService };
if (false) {
    /** @type {?} */
    AlertLostDataHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWxvc3QtZGF0YS1oZWxpc2EvYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7OztBQUlsRjtJQUtFLG9DQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7Ozs7Ozs7SUFFekMsK0NBQVU7Ozs7Ozs7SUFBVixVQUFXLEtBQWMsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsV0FBb0I7O1lBQzNFLFNBQVMsR0FBK0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUU7WUFDM0csS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRTtTQUMvQyxDQUFDO1FBRUYsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSxTQUFTOzs7cUNBRGxCO0NBc0JDLEFBZkQsSUFlQztTQVpZLDBCQUEwQjs7O0lBRXpCLDRDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQWxlcnRMb3N0RGF0YUhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtbG9zdC1kYXRhLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydExvc3REYXRhSGVsaXNhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG9wZW5EaWFsb2codGl0bGU/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG9rTGFiZWw/OiBzdHJpbmcsIGNhbmNlbExhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydExvc3REYXRhSGVsaXNhQ29tcG9uZW50PiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRMb3N0RGF0YUhlbGlzYUNvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YTogeyB0aXRsZSwgY29udGVudCwgb2tMYWJlbCwgY2FuY2VsTGFiZWwgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xyXG4gIH1cclxufVxyXG4iXX0=