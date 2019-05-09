/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertHelisaComponent } from './alert-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class AlertHelisaService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @return {?}
     */
    openDialog(type, title, content) {
        /** @type {?} */
        const dialogRef = this.dialog.open(AlertHelisaComponent, {
            width: '250px',
            data: { title: title, content: content, type: type }
        });
        return dialogRef.afterClosed();
    }
}
AlertHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlertHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ AlertHelisaService.ngInjectableDef = i0.defineInjectable({ factory: function AlertHelisaService_Factory() { return new AlertHelisaService(i0.inject(i1.MatDialog)); }, token: AlertHelisaService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AlertHelisaService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtaGVsaXNhL2FsZXJ0LWhlbGlzYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBTWhFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFFN0IsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFJLENBQUM7Ozs7Ozs7SUFFekMsVUFBVSxDQUFDLElBQW9CLEVBQUUsS0FBWSxFQUFFLE9BQWM7O2NBQ3JELFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUN2RCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUFDO1NBQ2xELENBQUM7UUFFRixPQUFPLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7WUFkRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxTQUFTOzs7OztJQVVKLG9DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFsZXJ0SGVsaXNhQ29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC1oZWxpc2EuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnRIZWxpc2FUeXBlIH0gZnJvbSAnLi9hbGVydC1oZWxpc2EtdHlwZS5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0SGVsaXNhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG9wZW5EaWFsb2codHlwZTpBbGVydEhlbGlzYVR5cGUsIHRpdGxlOlN0cmluZywgY29udGVudDpTdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBbGVydEhlbGlzYUNvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzI1MHB4JyxcclxuICAgICAgZGF0YToge3RpdGxlOiB0aXRsZSwgY29udGVudDogY29udGVudCwgdHlwZTp0eXBlfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xyXG4gIH1cclxufVxyXG4iXX0=