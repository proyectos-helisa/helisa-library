/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertAuthorizationTransactionHelisaComponent } from './alert-authorization-transaction-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AlertAuthorizationTransactionHelisaService = /** @class */ (function () {
    function AlertAuthorizationTransactionHelisaService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    AlertAuthorizationTransactionHelisaService.prototype.openDialog = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    function (title, content, okLabel, cancelLabel) {
        /** @type {?} */
        var dialogRef = this.dialog.open(AlertAuthorizationTransactionHelisaComponent, {
            width: '250px',
            data: { title: title, content: content, okLabel: okLabel, cancelLabel: cancelLabel }
        });
        return dialogRef.afterClosed();
    };
    AlertAuthorizationTransactionHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertAuthorizationTransactionHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertAuthorizationTransactionHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertAuthorizationTransactionHelisaService_Factory() { return new AlertAuthorizationTransactionHelisaService(i0.inject(i1.MatDialog)); }, token: AlertAuthorizationTransactionHelisaService, providedIn: "root" });
    return AlertAuthorizationTransactionHelisaService;
}());
export { AlertAuthorizationTransactionHelisaService };
if (false) {
    /** @type {?} */
    AlertAuthorizationTransactionHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYXV0aG9yaXphdGlvbi10cmFuc2FjdGlvbi1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1hdXRob3JpemF0aW9uLXRyYW5zYWN0aW9uLWhlbGlzYS9hbGVydC1hdXRob3JpemF0aW9uLXRyYW5zYWN0aW9uLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFDLDRDQUE0QyxFQUFDLE1BQU0sb0RBQW9ELENBQUM7OztBQUVoSDtJQUtFLG9EQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7Ozs7Ozs7SUFFekMsK0RBQVU7Ozs7Ozs7SUFBVixVQUFXLEtBQWMsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsV0FBb0I7O1lBQzNFLFNBQVMsR0FBK0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQUU7WUFDM0ksS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRTtTQUMvQyxDQUFDO1FBRUYsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxTQUFTOzs7cURBRGxCO0NBb0JDLEFBZkQsSUFlQztTQVpZLDBDQUEwQzs7O0lBRXpDLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtBbGVydEF1dGhvcml6YXRpb25UcmFuc2FjdGlvbkhlbGlzYUNvbXBvbmVudH0gZnJvbSAnLi9hbGVydC1hdXRob3JpemF0aW9uLXRyYW5zYWN0aW9uLWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcbiAgb3BlbkRpYWxvZyh0aXRsZT86IHN0cmluZywgY29udGVudD86IHN0cmluZywgb2tMYWJlbD86IHN0cmluZywgY2FuY2VsTGFiZWw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0QXV0aG9yaXphdGlvblRyYW5zYWN0aW9uSGVsaXNhQ29tcG9uZW50PiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRBdXRob3JpemF0aW9uVHJhbnNhY3Rpb25IZWxpc2FDb21wb25lbnQsIHtcclxuICAgICAgd2lkdGg6ICcyNTBweCcsXHJcbiAgICAgIGRhdGE6IHsgdGl0bGUsIGNvbnRlbnQsIG9rTGFiZWwsIGNhbmNlbExhYmVsIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKTtcclxuICB9XHJcbn1cclxuIl19