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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QtaGVsaXNhL3RvYXN0LWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRWhFO0lBT0UsNEJBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFGekMsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO0lBRWUsQ0FBQzs7Ozs7OztJQUU5QyxzQ0FBUzs7Ozs7O0lBQVQsVUFBVSxJQUFlLEVBQUUsT0FBZSxFQUFFLFdBQXNCO1FBQ2hFLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUU7WUFDcEQsSUFBSSxFQUFFLEVBQUMsT0FBTyxTQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUM7WUFDbEMsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsV0FBVzs7OzZCQURwQjtDQXFCQyxBQWhCRCxJQWdCQztTQWJZLGtCQUFrQjs7O0lBRTdCLCtDQUE4Qjs7Ozs7SUFFbEIsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICcuL3RvYXN0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBUb2FzdEhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QtaGVsaXNhLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0SGVsaXNhU2VydmljZSB7XG5cbiAgZHVyYXRpb25JblNlY29uZHM6IG51bWJlciA9IDU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG4gIHNob3dUb2FzdCh0eXBlOiBUb2FzdFR5cGUsIG1lc3NhZ2U6IHN0cmluZywgc3ViTWVzc2FnZXM/OiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHN1Yk1lc3NhZ2VzID0gc3ViTWVzc2FnZXMgPyBzdWJNZXNzYWdlcyA6IFtdO1xuICAgIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoVG9hc3RIZWxpc2FDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHttZXNzYWdlLCB0eXBlLCBzdWJNZXNzYWdlc30sXG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDBcbiAgICB9KTtcbiAgfVxufVxuIl19