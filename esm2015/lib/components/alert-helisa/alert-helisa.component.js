/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertHelisaType } from './alert-helisa-type.enum';
export class AlertHelisaComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.content = data.content;
        this.title = data.title;
        this.hasCancel = data.type == AlertHelisaType.CONFIRMATION;
        dialogRef.disableClose = true;
        dialogRef.keydownEvents().subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event.code == 'Escape')
                this.dialogRef.close(this.onCancel());
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
AlertHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-alert',
                template: "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  {{ content }}\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button *ngIf=\"hasCancel\" [mat-dialog-close]=\"false\" >cancelar</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>aceptar</button>\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    AlertHelisaComponent.prototype.content;
    /** @type {?} */
    AlertHelisaComponent.prototype.title;
    /** @type {?} */
    AlertHelisaComponent.prototype.hasCancel;
    /** @type {?} */
    AlertHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1oZWxpc2EvYWxlcnQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPM0QsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFNL0IsWUFBbUIsU0FBNkMsRUFDOUIsSUFBSTtRQURuQixjQUFTLEdBQVQsU0FBUyxDQUFvQztRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQyxZQUFZLENBQUM7UUFDM0QsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDOUIsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUMxQyxJQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksUUFBUTtnQkFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUgsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixxVUFBNEM7O2FBRTdDOzs7O1lBUFEsWUFBWTs0Q0FlaEIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFMekIsdUNBQWdCOztJQUNoQixxQ0FBYzs7SUFDZCx5Q0FBbUI7O0lBRVAseUNBQW9EOztJQUM5RCxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBBbGVydEhlbGlzYVR5cGUgfSBmcm9tICcuL2FsZXJ0LWhlbGlzYS10eXBlLmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtYWxlcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydEhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICB0aXRsZTogU3RyaW5nO1xyXG4gIGhhc0NhbmNlbDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0SGVsaXNhQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YSkge1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcbiAgICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgICB0aGlzLmhhc0NhbmNlbCA9IGRhdGEudHlwZSA9PSBBbGVydEhlbGlzYVR5cGUuQ09ORklSTUFUSU9OO1xyXG4gICAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcclxuICAgICAgZGlhbG9nUmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmKGV2ZW50LmNvZGUgPT0gJ0VzY2FwZScpXHJcbiAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpe1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19