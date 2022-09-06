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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjL2xpYi9jb21wb25lbnRzL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLDBCQUEwQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQ0FBbUMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOzs7QUFNL0YsTUFBTSxPQUFPLGlDQUFpQztJQUU1QyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQztJQUV6QyxVQUFVLENBQUMsU0FBK0IsRUFBRSxLQUFjLEVBQUUsT0FBZ0IsRUFBRSxPQUFnQixFQUFFLFdBQW9CO1FBQ2xILE1BQU0sU0FBUyxHQUFzRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRTtZQUN6SCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7U0FDMUQsQ0FBQyxDQUFDO1FBRUgsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztZQWRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhQ29tcG9uZW50fSBmcm9tICcuL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0SW5mb3JtYXRpb25UeXBlIH0gZnJvbSAnLi9hbGVydC1pbmZvcm1hdGlvbi1oZWxpc2EtdHlwZS5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XHJcblxyXG4gIG9wZW5EaWFsb2coYWxlcnRUeXBlOiBBbGVydEluZm9ybWF0aW9uVHlwZSwgdGl0bGU/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG9rTGFiZWw/OiBzdHJpbmcsIGNhbmNlbExhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydEluZm9ybWF0aW9uRGF0YUhlbGlzYUNvbXBvbmVudD4gPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhQ29tcG9uZW50LCB7XHJcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICBkYXRhOiB7IGFsZXJ0VHlwZSwgdGl0bGUsIGNvbnRlbnQsIG9rTGFiZWwsIGNhbmNlbExhYmVsIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKTtcclxuICB9XHJcbn1cclxuIl19