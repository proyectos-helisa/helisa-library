import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertInformationDataHelisaComponent } from './alert-information-data-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class AlertInformationDataHelisaService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(alertType, title, content, okLabel, cancelLabel) {
        const dialogRef = this.dialog.open(AlertInformationDataHelisaComponent, {
            width: '250px',
            data: { alertType, title, content, okLabel, cancelLabel }
        });
        return dialogRef.afterClosed();
    }
}
AlertInformationDataHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlertInformationDataHelisaService_Factory() { return new AlertInformationDataHelisaService(i0.ɵɵinject(i1.MatDialog)); }, token: AlertInformationDataHelisaService, providedIn: "root" });
AlertInformationDataHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AlertInformationDataHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLDBCQUEwQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQ0FBbUMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOzs7QUFNL0YsTUFBTSxPQUFPLGlDQUFpQztJQUU1QyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQztJQUV6QyxVQUFVLENBQUMsU0FBK0IsRUFBRSxLQUFjLEVBQUUsT0FBZ0IsRUFBRSxPQUFnQixFQUFFLFdBQW9CO1FBQ2xILE1BQU0sU0FBUyxHQUFzRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRTtZQUN6SCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7U0FDMUQsQ0FBQyxDQUFDO1FBRUgsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztZQWRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhQ29tcG9uZW50fSBmcm9tICcuL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGVydEluZm9ybWF0aW9uVHlwZSB9IGZyb20gJy4vYWxlcnQtaW5mb3JtYXRpb24taGVsaXNhLXR5cGUuZW51bSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICBvcGVuRGlhbG9nKGFsZXJ0VHlwZTogQWxlcnRJbmZvcm1hdGlvblR5cGUsIHRpdGxlPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nLCBva0xhYmVsPzogc3RyaW5nLCBjYW5jZWxMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhQ29tcG9uZW50PiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRJbmZvcm1hdGlvbkRhdGFIZWxpc2FDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogeyBhbGVydFR5cGUsIHRpdGxlLCBjb250ZW50LCBva0xhYmVsLCBjYW5jZWxMYWJlbCB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCk7XG4gIH1cbn1cbiJdfQ==