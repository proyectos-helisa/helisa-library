/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDeleteDataHelisaComponent } from './alert-delete-data-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AlertDeleteDataHelisaService = /** @class */ (function () {
    function AlertDeleteDataHelisaService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    AlertDeleteDataHelisaService.prototype.openDialog = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    function (title, content, okLabel, cancelLabel) {
        /** @type {?} */
        var dialogRef = this.dialog.open(AlertDeleteDataHelisaComponent, {
            width: '250px',
            data: { title: title, content: content, okLabel: okLabel, cancelLabel: cancelLabel }
        });
        return dialogRef.afterClosed();
    };
    AlertDeleteDataHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertDeleteDataHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertDeleteDataHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertDeleteDataHelisaService_Factory() { return new AlertDeleteDataHelisaService(i0.inject(i1.MatDialog)); }, token: AlertDeleteDataHelisaService, providedIn: "root" });
    return AlertDeleteDataHelisaService;
}());
export { AlertDeleteDataHelisaService };
if (false) {
    /** @type {?} */
    AlertDeleteDataHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtZGVsZXRlLWRhdGEtaGVsaXNhL2FsZXJ0LWRlbGV0ZS1kYXRhLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQUl0RjtJQUtFLHNDQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7Ozs7Ozs7SUFFekMsaURBQVU7Ozs7Ozs7SUFBVixVQUFXLEtBQWMsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsV0FBb0I7O1lBQzNFLFNBQVMsR0FBaUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUU7WUFDL0csS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRTtTQUMvQyxDQUFDO1FBRUYsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSxTQUFTOzs7dUNBRGxCO0NBc0JDLEFBZkQsSUFlQztTQVpZLDRCQUE0Qjs7O0lBRTNCLDhDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQWxlcnREZWxldGVEYXRhSGVsaXNhQ29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC1kZWxldGUtZGF0YS1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnREZWxldGVEYXRhSGVsaXNhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG9wZW5EaWFsb2codGl0bGU/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG9rTGFiZWw/OiBzdHJpbmcsIGNhbmNlbExhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydERlbGV0ZURhdGFIZWxpc2FDb21wb25lbnQ+ID0gdGhpcy5kaWFsb2cub3BlbihBbGVydERlbGV0ZURhdGFIZWxpc2FDb21wb25lbnQsIHtcclxuICAgICAgd2lkdGg6ICcyNTBweCcsXHJcbiAgICAgIGRhdGE6IHsgdGl0bGUsIGNvbnRlbnQsIG9rTGFiZWwsIGNhbmNlbExhYmVsIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKTtcclxuICB9XHJcbn1cclxuIl19