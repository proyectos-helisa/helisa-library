import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertHelisaComponent } from './alert-helisa.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
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
AlertHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlertHelisaService_Factory() { return new AlertHelisaService(i0.ɵɵinject(i1.MatDialog)); }, token: AlertHelisaService, providedIn: "root" });
AlertHelisaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AlertHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGVsaXNhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1oZWxpc2EvYWxlcnQtaGVsaXNhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLDBCQUEwQixDQUFDO0FBR25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFPaEUsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQztJQUV6QyxVQUFVLENBQUMsSUFBcUIsRUFBRSxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQWdCLEVBQUUsV0FBb0I7UUFDdEcsTUFBTSxTQUFTLEdBQXVDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzNGLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtTQUNyRCxDQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFUUSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWxlcnRIZWxpc2FUeXBlIH0gZnJvbSAnLi9hbGVydC1oZWxpc2EtdHlwZS5lbnVtJztcbmltcG9ydCB7IEFsZXJ0SGVsaXNhQ29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC1oZWxpc2EuY29tcG9uZW50JztcblxuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0SGVsaXNhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICBvcGVuRGlhbG9nKHR5cGU6IEFsZXJ0SGVsaXNhVHlwZSwgdGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBva0xhYmVsPzogc3RyaW5nLCBjYW5jZWxMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0SGVsaXNhQ29tcG9uZW50PiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRIZWxpc2FDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogeyB0aXRsZSwgY29udGVudCwgdHlwZSwgb2tMYWJlbCwgY2FuY2VsTGFiZWwgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xuICB9XG59XG4iXX0=