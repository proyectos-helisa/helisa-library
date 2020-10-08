/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * @record
 */
function AlertDefineParkingStructureProperties() { }
if (false) {
    /** @type {?} */
    AlertDefineParkingStructureProperties.prototype.title;
    /** @type {?} */
    AlertDefineParkingStructureProperties.prototype.content;
}
/** @type {?} */
const DEFAULT_CONTENT = 'Primero defina la estructura zona de parqueaderos en configuración.';
export class AlertDefineParkingStructureHelisaComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.content = data.content;
        if (this.content === undefined) {
            this.content = DEFAULT_CONTENT;
        }
        dialogRef.disableClose = true;
        dialogRef.keydownEvents().subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event.code === 'Escape') {
                this.dialogRef.close(this.onCancel());
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.dialogRef.close();
        }), 3000);
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
AlertDefineParkingStructureHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-alert-define-parking-structure-helisa',
                template: "<div mat-dialog-content>\r\n    {{ content }}\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertDefineParkingStructureHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    AlertDefineParkingStructureHelisaComponent.prototype.content;
    /** @type {?} */
    AlertDefineParkingStructureHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertDefineParkingStructureHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVmaW5lLXBhcmtpbmctc3RydWN0dXJlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtZGVmaW5lLXBhcmtpbmctc3RydWN0dXJlLWhlbGlzYS9hbGVydC1kZWZpbmUtcGFya2luZy1zdHJ1Y3R1cmUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUdsRSxvREFHQzs7O0lBRkcsc0RBQWM7O0lBQ2Qsd0RBQWdCOzs7TUFHZCxlQUFlLEdBQVcscUVBQXFFO0FBT3JHLE1BQU0sT0FBTywwQ0FBMEM7Ozs7O0lBSW5ELFlBQ1csU0FBbUUsRUFDMUMsSUFBMkM7UUFEcEUsY0FBUyxHQUFULFNBQVMsQ0FBMEQ7UUFDMUMsU0FBSSxHQUFKLElBQUksQ0FBdUM7UUFFM0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7U0FDbEM7UUFDRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFO1lBQ3pELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3pDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNKLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQWpDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDJDQUEyQztnQkFDckQsbUVBQXFFOzthQUV4RTs7OztZQWRRLFlBQVk7NENBcUJaLE1BQU0sU0FBQyxlQUFlOzs7O0lBSjNCLDZEQUFnQjs7SUFHWiwrREFBMEU7O0lBQzFFLDBEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIEFsZXJ0RGVmaW5lUGFya2luZ1N0cnVjdHVyZVByb3BlcnRpZXMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9DT05URU5UOiBzdHJpbmcgPSAnUHJpbWVybyBkZWZpbmEgbGEgZXN0cnVjdHVyYSB6b25hIGRlIHBhcnF1ZWFkZXJvcyBlbiBjb25maWd1cmFjacOzbi4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlbC1hbGVydC1kZWZpbmUtcGFya2luZy1zdHJ1Y3R1cmUtaGVsaXNhJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1kZWZpbmUtcGFya2luZy1zdHJ1Y3R1cmUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2FsZXJ0LWRlZmluZS1wYXJraW5nLXN0cnVjdHVyZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnREZWZpbmVQYXJraW5nU3RydWN0dXJlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0RGVmaW5lUGFya2luZ1N0cnVjdHVyZUhlbGlzYUNvbXBvbmVudD4sXHJcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydERlZmluZVBhcmtpbmdTdHJ1Y3R1cmVQcm9wZXJ0aWVzXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IERFRkFVTFRfQ09OVEVOVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XHJcbiAgICAgICAgZGlhbG9nUmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5vbkNhbmNlbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19