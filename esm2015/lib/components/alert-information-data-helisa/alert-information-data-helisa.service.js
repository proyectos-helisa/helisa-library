import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertInformationDataHelisaComponent } from './alert-information-data-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/dialog';
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
AlertInformationDataHelisaService.ɵfac = function AlertInformationDataHelisaService_Factory(t) { return new (t || AlertInformationDataHelisaService)(ɵngcc0.ɵɵinject(ɵngcc1.MatDialog)); };
AlertInformationDataHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlertInformationDataHelisaService_Factory() { return new AlertInformationDataHelisaService(i0.ɵɵinject(i1.MatDialog)); }, token: AlertInformationDataHelisaService, providedIn: "root" });
AlertInformationDataHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertInformationDataHelisaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.MatDialog }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2Euc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2EvYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2Euc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1DQUFtQyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0Y7QUFBcUM7OztBQUtyQyxNQUFNLE9BQU8saUNBQWlDO0FBQzlDLElBQ0UsWUFBbUIsTUFBaUI7QUFBSSxRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFXO0FBQUMsSUFBRyxDQUFDO0FBQzNDLElBQ0UsVUFBVSxDQUFDLFNBQStCLEVBQUUsS0FBYyxFQUFFLE9BQWdCLEVBQUUsT0FBZ0IsRUFBRSxXQUFvQjtBQUFJLFFBQ3RILE1BQU0sU0FBUyxHQUFzRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRTtBQUMvSCxZQUFNLEtBQUssRUFBRSxPQUFPO0FBQ3BCLFlBQU0sSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUMvRCxTQUFLLENBQUMsQ0FBQztBQUNQLFFBQ0ksT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbkMsSUFBRSxDQUFDO0FBQ0g7MkxBQUM7QUFDRCw4UUFiSztBQUFDO0VBSEwsVUFBVSxTQUFDLHJCQUtHLFlBVk4sU0FBUztBQUFHO1lBTW5CLFVBQVUsRUFBRSxNQUFNLGNBQ25COzs7OzswRUFQc0I7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhQ29tcG9uZW50fSBmcm9tICcuL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGVydEluZm9ybWF0aW9uVHlwZSB9IGZyb20gJy4vYWxlcnQtaW5mb3JtYXRpb24taGVsaXNhLXR5cGUuZW51bSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICBvcGVuRGlhbG9nKGFsZXJ0VHlwZTogQWxlcnRJbmZvcm1hdGlvblR5cGUsIHRpdGxlPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nLCBva0xhYmVsPzogc3RyaW5nLCBjYW5jZWxMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhQ29tcG9uZW50PiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRJbmZvcm1hdGlvbkRhdGFIZWxpc2FDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogeyBhbGVydFR5cGUsIHRpdGxlLCBjb250ZW50LCBva0xhYmVsLCBjYW5jZWxMYWJlbCB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCk7XG4gIH1cbn1cbiJdfQ==