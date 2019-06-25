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
        this.snackBar.openFromComponent(ToastHelisaComponent, {
            data: { message: message, type: type, subMessages },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QtaGVsaXNhL3RvYXN0LWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBS2hFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFJN0IsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUZ6QyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFFdUIsQ0FBQzs7Ozs7OztJQUU5QyxTQUFTLENBQUMsSUFBYyxFQUFFLE9BQWMsRUFBRSxXQUFxQjtRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFO1lBQ3BELElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDakQsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLFdBQVc7Ozs7O0lBU2xCLCtDQUFzQjs7Ozs7SUFFVixzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICcuL3RvYXN0LXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFRvYXN0SGVsaXNhQ29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC1oZWxpc2EuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0SGVsaXNhU2VydmljZSB7XHJcblxyXG4gIGR1cmF0aW9uSW5TZWNvbmRzID0gNTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxyXG5cclxuICBzaG93VG9hc3QodHlwZTpUb2FzdFR5cGUsIG1lc3NhZ2U6U3RyaW5nLCBzdWJNZXNzYWdlcz86U3RyaW5nW10pe1xyXG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChUb2FzdEhlbGlzYUNvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7bWVzc2FnZTogbWVzc2FnZSwgdHlwZTogdHlwZSwgc3ViTWVzc2FnZXN9LFxyXG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDBcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=