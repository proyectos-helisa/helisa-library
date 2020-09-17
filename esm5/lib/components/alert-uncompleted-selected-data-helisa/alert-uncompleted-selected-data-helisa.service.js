/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertUncompletedSelectedDataHelisaComponent } from './alert-uncompleted-selected-data-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AlertUncompletedSelectedDataHelisaService = /** @class */ (function () {
    function AlertUncompletedSelectedDataHelisaService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    AlertUncompletedSelectedDataHelisaService.prototype.openDialog = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    function (title, content, okLabel, cancelLabel) {
        /** @type {?} */
        var dialogRef = this.dialog.open(AlertUncompletedSelectedDataHelisaComponent, {
            width: '250px',
            data: { title: title, content: content, okLabel: okLabel, cancelLabel: cancelLabel }
        });
        return dialogRef.afterClosed();
    };
    AlertUncompletedSelectedDataHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertUncompletedSelectedDataHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertUncompletedSelectedDataHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertUncompletedSelectedDataHelisaService_Factory() { return new AlertUncompletedSelectedDataHelisaService(i0.inject(i1.MatDialog)); }, token: AlertUncompletedSelectedDataHelisaService, providedIn: "root" });
    return AlertUncompletedSelectedDataHelisaService;
}());
export { AlertUncompletedSelectedDataHelisaService };
if (false) {
    /** @type {?} */
    AlertUncompletedSelectedDataHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtdW5jb21wbGV0ZWQtc2VsZWN0ZWQtZGF0YS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC11bmNvbXBsZXRlZC1zZWxlY3RlZC1kYXRhLWhlbGlzYS9hbGVydC11bmNvbXBsZXRlZC1zZWxlY3RlZC1kYXRhLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFDLDJDQUEyQyxFQUFDLE1BQU0sb0RBQW9ELENBQUM7OztBQUkvRztJQUtFLG1EQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7Ozs7Ozs7SUFFekMsOERBQVU7Ozs7Ozs7SUFBVixVQUFXLEtBQWMsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsV0FBb0I7O1lBQzNFLFNBQVMsR0FBOEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLEVBQUU7WUFDekksS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRTtTQUMvQyxDQUFDO1FBRUYsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSxTQUFTOzs7b0RBRGxCO0NBc0JDLEFBZkQsSUFlQztTQVpZLHlDQUF5Qzs7O0lBRXhDLDJEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtBbGVydFVuY29tcGxldGVkU2VsZWN0ZWREYXRhSGVsaXNhQ29tcG9uZW50fSBmcm9tICcuL2FsZXJ0LXVuY29tcGxldGVkLXNlbGVjdGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0VW5jb21wbGV0ZWRTZWxlY3RlZERhdGFIZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcbiAgb3BlbkRpYWxvZyh0aXRsZT86IHN0cmluZywgY29udGVudD86IHN0cmluZywgb2tMYWJlbD86IHN0cmluZywgY2FuY2VsTGFiZWw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0VW5jb21wbGV0ZWRTZWxlY3RlZERhdGFIZWxpc2FDb21wb25lbnQ+ID0gdGhpcy5kaWFsb2cub3BlbihBbGVydFVuY29tcGxldGVkU2VsZWN0ZWREYXRhSGVsaXNhQ29tcG9uZW50LCB7XHJcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICBkYXRhOiB7IHRpdGxlLCBjb250ZW50LCBva0xhYmVsLCBjYW5jZWxMYWJlbCB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==