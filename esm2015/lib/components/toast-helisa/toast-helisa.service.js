/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ToastHelisaComponent } from './toast-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
export class ToastHelisaService {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.durationInSeconds = 5;
    }
    /**
     * @param {?} type
     * @param {?} message
     * @param {?=} subMessages
     * @return {?}
     */
    showToast(type, message, subMessages) {
        subMessages = subMessages ? subMessages : [];
        this.snackBar.openFromComponent(ToastHelisaComponent, {
            data: { message: message, type: type, subMessages: subMessages },
            duration: this.durationInSeconds * 1000
        });
    }
}
ToastHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ToastHelisaService.ctorParameters = () => [
    { type: MatSnackBar }
];
/** @nocollapse */ ToastHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function ToastHelisaService_Factory() { return new ToastHelisaService(i0.inject(i1.MatSnackBar)); }, token: ToastHelisaService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ToastHelisaService.prototype.durationInSeconds;
    /**
     * @type {?}
     * @private
     */
    ToastHelisaService.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QtaGVsaXNhL3RvYXN0LWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBS2hFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFJN0IsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUZ6QyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFFdUIsQ0FBQzs7Ozs7OztJQUU5QyxTQUFTLENBQUMsSUFBYyxFQUFFLE9BQWMsRUFBRSxXQUFxQjtRQUM3RCxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFO1lBQ3BELElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUMsV0FBVyxFQUFDO1lBQzdELFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSTtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFmRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxXQUFXOzs7OztJQVNsQiwrQ0FBc0I7Ozs7O0lBRVYsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICcuL3RvYXN0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBUb2FzdEhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QtaGVsaXNhLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0SGVsaXNhU2VydmljZSB7XG5cbiAgZHVyYXRpb25JblNlY29uZHMgPSA1O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuICBzaG93VG9hc3QodHlwZTpUb2FzdFR5cGUsIG1lc3NhZ2U6U3RyaW5nLCBzdWJNZXNzYWdlcz86U3RyaW5nW10pe1xuICAgIHN1Yk1lc3NhZ2VzID0gc3ViTWVzc2FnZXMgPyBzdWJNZXNzYWdlcyA6IFtdO1xuICAgIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoVG9hc3RIZWxpc2FDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHttZXNzYWdlOiBtZXNzYWdlLCB0eXBlOiB0eXBlLCBzdWJNZXNzYWdlczpzdWJNZXNzYWdlc30sXG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDBcbiAgICB9KTtcbiAgfVxufVxuIl19