/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertUncompletedDataHelisaComponent } from './alert-uncompleted-data-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AlertUncompletedDataHelisaService = /** @class */ (function () {
    function AlertUncompletedDataHelisaService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    AlertUncompletedDataHelisaService.prototype.openDialog = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} okLabel
     * @param {?=} cancelLabel
     * @return {?}
     */
    function (title, content, okLabel, cancelLabel) {
        /** @type {?} */
        var dialogRef = this.dialog.open(AlertUncompletedDataHelisaComponent, {
            width: '250px',
            data: { title: title, content: content, okLabel: okLabel, cancelLabel: cancelLabel }
        });
        return dialogRef.afterClosed();
    };
    AlertUncompletedDataHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertUncompletedDataHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertUncompletedDataHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertUncompletedDataHelisaService_Factory() { return new AlertUncompletedDataHelisaService(i0.inject(i1.MatDialog)); }, token: AlertUncompletedDataHelisaService, providedIn: "root" });
    return AlertUncompletedDataHelisaService;
}());
export { AlertUncompletedDataHelisaService };
if (false) {
    /** @type {?} */
    AlertUncompletedDataHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtdW5jb21wbGV0ZWQtZGF0YS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC11bmNvbXBsZXRlZC1kYXRhLWhlbGlzYS9hbGVydC11bmNvbXBsZXRlZC1kYXRhLWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQUloRztJQUtFLDJDQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQzs7Ozs7Ozs7SUFFekMsc0RBQVU7Ozs7Ozs7SUFBVixVQUFXLEtBQWMsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsV0FBb0I7O1lBQzNFLFNBQVMsR0FBc0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEVBQUU7WUFDekgsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRTtTQUMvQyxDQUFDO1FBRUYsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSxTQUFTOzs7NENBRGxCO0NBc0JDLEFBZkQsSUFlQztTQVpZLGlDQUFpQzs7O0lBRWhDLG1EQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWxlcnRVbmNvbXBsZXRlZERhdGFIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LXVuY29tcGxldGVkLWRhdGEtaGVsaXNhLmNvbXBvbmVudCc7XG5cblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgb3BlbkRpYWxvZyh0aXRsZT86IHN0cmluZywgY29udGVudD86IHN0cmluZywgb2tMYWJlbD86IHN0cmluZywgY2FuY2VsTGFiZWw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydFVuY29tcGxldGVkRGF0YUhlbGlzYUNvbXBvbmVudD4gPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0VW5jb21wbGV0ZWREYXRhSGVsaXNhQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHsgdGl0bGUsIGNvbnRlbnQsIG9rTGFiZWwsIGNhbmNlbExhYmVsIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKTtcbiAgfVxufVxuIl19