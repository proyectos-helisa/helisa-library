import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertHelisaComponent } from './alert-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/dialog';
export class AlertHelisaService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(type, title, content, okLabel, cancelLabel) {
        const dialogRef = this.dialog.open(AlertHelisaComponent, {
            width: '250px',
            data: { title, content, type, okLabel, cancelLabel }
        });
        return dialogRef.afterClosed();
    }
}
AlertHelisaService.ɵfac = function AlertHelisaService_Factory(t) { return new (t || AlertHelisaService)(ɵngcc0.ɵɵinject(ɵngcc1.MatDialog)); };
AlertHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlertHelisaService_Factory() { return new AlertHelisaService(i0.ɵɵinject(i1.MatDialog)); }, token: AlertHelisaService, providedIn: "root" });
AlertHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertHelisaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.MatDialog }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjL2xpYi9jb21wb25lbnRzL2FsZXJ0LWhlbGlzYS9hbGVydC1oZWxpc2Euc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFHbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEU7QUFJb0I7OztBQUVwQixNQUFNLE9BQU8sa0JBQWtCO0FBQy9CLElBQ0UsWUFBbUIsTUFBaUI7QUFBSSxRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFXO0FBQUMsSUFBRyxDQUFDO0FBQzNDLElBQ0UsVUFBVSxDQUFDLElBQXFCLEVBQUUsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFnQixFQUFFLFdBQW9CO0FBQUksUUFDMUcsTUFBTSxTQUFTLEdBQXVDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO0FBQ2pHLFlBQU0sS0FBSyxFQUFFLE9BQU87QUFDcEIsWUFBTSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQzFELFNBQUssQ0FBQyxDQUFDO0FBQ1AsUUFDSSxPQUFPLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuQyxJQUFFLENBQUM7QUFDSDs4SUFBQztBQUNELGtOQWJLO0FBQUM7RUFITCxVQUFVLFNBQUMsckJBS0csWUFaTixTQUFTO0FBQUc7WUFRbkIsVUFBVSxFQUFFLE1BQU0sY0FDbkI7Ozs7OzBFQVRzQjtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWxlcnRIZWxpc2FUeXBlIH0gZnJvbSAnLi9hbGVydC1oZWxpc2EtdHlwZS5lbnVtJztcbmltcG9ydCB7IEFsZXJ0SGVsaXNhQ29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC1oZWxpc2EuY29tcG9uZW50JztcblxuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0SGVsaXNhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICBvcGVuRGlhbG9nKHR5cGU6IEFsZXJ0SGVsaXNhVHlwZSwgdGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBva0xhYmVsPzogc3RyaW5nLCBjYW5jZWxMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0SGVsaXNhQ29tcG9uZW50PiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRIZWxpc2FDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogeyB0aXRsZSwgY29udGVudCwgdHlwZSwgb2tMYWJlbCwgY2FuY2VsTGFiZWwgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xuICB9XG59XG4iXX0=