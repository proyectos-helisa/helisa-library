/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ToastHelisaComponent } from './toast-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
var ToastHelisaService = /** @class */ (function () {
    function ToastHelisaService(snackBar) {
        this.snackBar = snackBar;
        this.durationInSeconds = 5;
    }
    /**
     * @param {?} type
     * @param {?} message
     * @param {?=} subMessages
     * @return {?}
     */
    ToastHelisaService.prototype.showToast = /**
     * @param {?} type
     * @param {?} message
     * @param {?=} subMessages
     * @return {?}
     */
    function (type, message, subMessages) {
        subMessages = subMessages ? subMessages : [];
        this.snackBar.openFromComponent(ToastHelisaComponent, {
            data: { message: message, type: type, subMessages: subMessages },
            duration: this.durationInSeconds * 1000
        });
    };
    ToastHelisaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ToastHelisaService.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    /** @nocollapse */ ToastHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function ToastHelisaService_Factory() { return new ToastHelisaService(i0.inject(i1.MatSnackBar)); }, token: ToastHelisaService, providedIn: "root" });
    return ToastHelisaService;
}());
export { ToastHelisaService };
if (false) {
    /** @type {?} */
    ToastHelisaService.prototype.durationInSeconds;
    /**
     * @type {?}
     * @private
     */
    ToastHelisaService.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QtaGVsaXNhL3RvYXN0LWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRWhFO0lBT0UsNEJBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFGekMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBRXVCLENBQUM7Ozs7Ozs7SUFFOUMsc0NBQVM7Ozs7OztJQUFULFVBQVUsSUFBYyxFQUFFLE9BQWMsRUFBRSxXQUFxQjtRQUM3RCxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFO1lBQ3BELElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLGFBQUEsRUFBQztZQUNqRCxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUk7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBZkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxXQUFXOzs7NkJBRHBCO0NBcUJDLEFBaEJELElBZ0JDO1NBYlksa0JBQWtCOzs7SUFFN0IsK0NBQXNCOzs7OztJQUVWLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFRvYXN0VHlwZSB9IGZyb20gJy4vdG9hc3QtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgVG9hc3RIZWxpc2FDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0LWhlbGlzYS5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RIZWxpc2FTZXJ2aWNlIHtcclxuXHJcbiAgZHVyYXRpb25JblNlY29uZHMgPSA1O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyB9XHJcblxyXG4gIHNob3dUb2FzdCh0eXBlOlRvYXN0VHlwZSwgbWVzc2FnZTpTdHJpbmcsIHN1Yk1lc3NhZ2VzPzpTdHJpbmdbXSl7XHJcbiAgICBzdWJNZXNzYWdlcyA9IHN1Yk1lc3NhZ2VzID8gc3ViTWVzc2FnZXMgOiBbXTtcclxuICAgIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoVG9hc3RIZWxpc2FDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge21lc3NhZ2U6IG1lc3NhZ2UsIHR5cGU6IHR5cGUsIHN1Yk1lc3NhZ2VzfSxcclxuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb25JblNlY29uZHMgKiAxMDAwXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19