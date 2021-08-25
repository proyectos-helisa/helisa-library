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
                template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button *ngIf=\"hasCancel\" [mat-dialog-close]=\"false\" >{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\n</div>",
                styles: [""]
            },] }
];
AlertHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWhlbGlzYS9hbGVydC1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBZTNELE1BQU0sT0FBTyxvQkFBb0I7SUFRL0IsWUFDUyxTQUE2QyxFQUNwQixJQUEyQjtRQURwRCxjQUFTLEdBQVQsU0FBUyxDQUFvQztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUF1QjtRQUUzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLFlBQVksQ0FBQztRQUM1RCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBb0IsRUFBUSxFQUFFO1lBQ2pFLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixrVUFBNEM7O2FBRTdDOzs7WUFmUSxZQUFZOzRDQTBCaEIsTUFBTSxTQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBBbGVydEhlbGlzYVR5cGUgfSBmcm9tICcuL2FsZXJ0LWhlbGlzYS10eXBlLmVudW0nO1xuXG5pbnRlcmZhY2UgQWxlcnRIZWxpc2FQcm9wZXJ0aWVzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICB0eXBlOiBBbGVydEhlbGlzYVR5cGU7XG4gIG9rTGFiZWw6IHN0cmluZztcbiAgY2FuY2VsTGFiZWw6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWhlbGlzYS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0SGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb250ZW50OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGhhc0NhbmNlbDogYm9vbGVhbjtcbiAgb2tMYWJlbDogc3RyaW5nO1xuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydEhlbGlzYUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydEhlbGlzYVByb3BlcnRpZXNcbiAgKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIHRoaXMub2tMYWJlbCA9IGRhdGEub2tMYWJlbDtcbiAgICBpZiAodGhpcy5va0xhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2tMYWJlbCA9ICdhY2VwdGFyJztcbiAgICB9XG4gICAgdGhpcy5jYW5jZWxMYWJlbCA9IGRhdGEuY2FuY2VsTGFiZWw7XG4gICAgaWYgKHRoaXMuY2FuY2VsTGFiZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jYW5jZWxMYWJlbCA9ICdjYW5jZWxhcic7XG4gICAgfVxuICAgIHRoaXMuaGFzQ2FuY2VsID0gZGF0YS50eXBlID09PSBBbGVydEhlbGlzYVR5cGUuQ09ORklSTUFUSU9OO1xuICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIGRpYWxvZ1JlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMub25DYW5jZWwoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==