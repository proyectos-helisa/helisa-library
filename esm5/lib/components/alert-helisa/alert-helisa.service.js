/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertHelisaComponent } from './alert-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
var AlertHelisaService = /** @class */ (function () {
    function AlertHelisaService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @return {?}
     */
    AlertHelisaService.prototype.openDialog = /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @return {?}
     */
    function (type, title, content) {
        /** @type {?} */
        var dialogRef = this.dialog.open(AlertHelisaComponent, {
            width: '250px',
            data: { title: title, content: content, type: type }
        });
        return dialogRef.afterClosed();
    };
    AlertHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AlertHelisaService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ AlertHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertHelisaService_Factory() { return new AlertHelisaService(i0.inject(i1.MatDialog)); }, token: AlertHelisaService, providedIn: "root" });
    return AlertHelisaService;
}());
export { AlertHelisaService };
if (false) {
    /** @type {?} */
    AlertHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtaGVsaXNhL2FsZXJ0LWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBR2hFO0lBS0UsNEJBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBSSxDQUFDOzs7Ozs7O0lBRXpDLHVDQUFVOzs7Ozs7SUFBVixVQUFXLElBQW9CLEVBQUUsS0FBWSxFQUFFLE9BQWM7O1lBQ3JELFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUN2RCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUFDO1NBQ2xELENBQUM7UUFFRixPQUFPLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOztnQkFkRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFNBQVM7Ozs2QkFEbEI7Q0FxQkMsQUFmRCxJQWVDO1NBWlksa0JBQWtCOzs7SUFFakIsb0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQWxlcnRIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LWhlbGlzYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGVydEhlbGlzYVR5cGUgfSBmcm9tICcuL2FsZXJ0LWhlbGlzYS10eXBlLmVudW0nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRIZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cclxuXHJcbiAgb3BlbkRpYWxvZyh0eXBlOkFsZXJ0SGVsaXNhVHlwZSwgdGl0bGU6U3RyaW5nLCBjb250ZW50OlN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0SGVsaXNhQ29tcG9uZW50LCB7XHJcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICBkYXRhOiB7dGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50LCB0eXBlOnR5cGV9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==