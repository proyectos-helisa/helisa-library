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
            data: { message, type, subMessages },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QtaGVsaXNhL3RvYXN0LWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBS2hFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFJN0IsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUZ6QyxzQkFBaUIsR0FBVyxDQUFDLENBQUM7SUFFZSxDQUFDOzs7Ozs7O0lBRTlDLFNBQVMsQ0FBQyxJQUFlLEVBQUUsT0FBZSxFQUFFLFdBQXNCO1FBQ2hFLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUU7WUFDcEQsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDbEMsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLFdBQVc7Ozs7O0lBU2xCLCtDQUE4Qjs7Ozs7SUFFbEIsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgVG9hc3RUeXBlIH0gZnJvbSAnLi90b2FzdC10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBUb2FzdEhlbGlzYUNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QtaGVsaXNhLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdEhlbGlzYVNlcnZpY2Uge1xyXG5cclxuICBkdXJhdGlvbkluU2Vjb25kczogbnVtYmVyID0gNTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxyXG5cclxuICBzaG93VG9hc3QodHlwZTogVG9hc3RUeXBlLCBtZXNzYWdlOiBzdHJpbmcsIHN1Yk1lc3NhZ2VzPzogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgIHN1Yk1lc3NhZ2VzID0gc3ViTWVzc2FnZXMgPyBzdWJNZXNzYWdlcyA6IFtdO1xyXG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChUb2FzdEhlbGlzYUNvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7bWVzc2FnZSwgdHlwZSwgc3ViTWVzc2FnZXN9LFxyXG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDBcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=