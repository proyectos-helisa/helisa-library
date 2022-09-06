import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertHelisaType } from './alert-helisa-type.enum';
export class AlertHelisaComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.content = data.content;
        this.title = data.title;
        this.okLabel = data.okLabel;
        if (this.okLabel === undefined) {
            this.okLabel = 'aceptar';
        }
        this.cancelLabel = data.cancelLabel;
        if (this.cancelLabel === undefined) {
            this.cancelLabel = 'cancelar';
        }
        this.hasCancel = data.type === AlertHelisaType.CONFIRMATION;
        dialogRef.disableClose = true;
        dialogRef.keydownEvents().subscribe((event) => {
            if (event.code === 'Escape') {
                this.dialogRef.close(this.onCancel());
            }
        });
    }
    ngOnInit() {
    }
    onCancel() {
        this.dialogRef.close();
    }
}
AlertHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-alert',
                template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  {{ content }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button *ngIf=\"hasCancel\" [mat-dialog-close]=\"false\" >{{cancelLabel}}</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\r\n</div>",
                styles: [""]
            },] }
];
AlertHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjL2xpYi9jb21wb25lbnRzL2FsZXJ0LWhlbGlzYS9hbGVydC1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBZTNELE1BQU0sT0FBTyxvQkFBb0I7SUFRL0IsWUFDUyxTQUE2QyxFQUNwQixJQUEyQjtRQURwRCxjQUFTLEdBQVQsU0FBUyxDQUFvQztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUF1QjtRQUUzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLFlBQVksQ0FBQztRQUM1RCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBb0IsRUFBUSxFQUFFO1lBQ2pFLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixnVkFBNEM7O2FBRTdDOzs7WUFmUSxZQUFZOzRDQTBCaEIsTUFBTSxTQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgQWxlcnRIZWxpc2FUeXBlIH0gZnJvbSAnLi9hbGVydC1oZWxpc2EtdHlwZS5lbnVtJztcclxuXHJcbmludGVyZmFjZSBBbGVydEhlbGlzYVByb3BlcnRpZXMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIHR5cGU6IEFsZXJ0SGVsaXNhVHlwZTtcclxuICBva0xhYmVsOiBzdHJpbmc7XHJcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtYWxlcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydEhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGhhc0NhbmNlbDogYm9vbGVhbjtcclxuICBva0xhYmVsOiBzdHJpbmc7XHJcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnRIZWxpc2FDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydEhlbGlzYVByb3BlcnRpZXNcclxuICApIHtcclxuICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudDtcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgdGhpcy5va0xhYmVsID0gZGF0YS5va0xhYmVsO1xyXG4gICAgaWYgKHRoaXMub2tMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub2tMYWJlbCA9ICdhY2VwdGFyJztcclxuICAgIH1cclxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSBkYXRhLmNhbmNlbExhYmVsO1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsTGFiZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmNhbmNlbExhYmVsID0gJ2NhbmNlbGFyJztcclxuICAgIH1cclxuICAgIHRoaXMuaGFzQ2FuY2VsID0gZGF0YS50eXBlID09PSBBbGVydEhlbGlzYVR5cGUuQ09ORklSTUFUSU9OO1xyXG4gICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XHJcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5vbkNhbmNlbCgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19