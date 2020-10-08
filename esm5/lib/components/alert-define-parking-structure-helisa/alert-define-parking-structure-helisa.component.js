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
var DEFAULT_CONTENT = 'Primero defina la estructura zona de parqueaderos en configuración.';
var AlertDefineParkingStructureHelisaComponent = /** @class */ (function () {
    function AlertDefineParkingStructureHelisaComponent(dialogRef, data) {
        var _this = this;
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
        function (event) {
            if (event.code === 'Escape') {
                _this.dialogRef.close(_this.onCancel());
            }
        }));
    }
    /**
     * @return {?}
     */
    AlertDefineParkingStructureHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.dialogRef.close();
        }), 3000);
    };
    /**
     * @return {?}
     */
    AlertDefineParkingStructureHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    AlertDefineParkingStructureHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert-define-parking-structure-helisa',
                    template: "<div mat-dialog-content>\r\n    {{ content }}\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertDefineParkingStructureHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertDefineParkingStructureHelisaComponent;
}());
export { AlertDefineParkingStructureHelisaComponent };
if (false) {
    /** @type {?} */
    AlertDefineParkingStructureHelisaComponent.prototype.content;
    /** @type {?} */
    AlertDefineParkingStructureHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertDefineParkingStructureHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVmaW5lLXBhcmtpbmctc3RydWN0dXJlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtZGVmaW5lLXBhcmtpbmctc3RydWN0dXJlLWhlbGlzYS9hbGVydC1kZWZpbmUtcGFya2luZy1zdHJ1Y3R1cmUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUdsRSxvREFHQzs7O0lBRkcsc0RBQWM7O0lBQ2Qsd0RBQWdCOzs7SUFHZCxlQUFlLEdBQVcscUVBQXFFO0FBRXJHO0lBU0ksb0RBQ1csU0FBbUUsRUFDMUMsSUFBMkM7UUFGL0UsaUJBY0M7UUFiVSxjQUFTLEdBQVQsU0FBUyxDQUEwRDtRQUMxQyxTQUFJLEdBQUosSUFBSSxDQUF1QztRQUUzRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUNsQztRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUNyRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN6QztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELDZEQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEcsVUFBVTs7O1FBQUM7WUFDUCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCw2REFBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQWpDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDJDQUEyQztvQkFDckQsbUVBQXFFOztpQkFFeEU7Ozs7Z0JBZFEsWUFBWTtnREFxQlosTUFBTSxTQUFDLGVBQWU7O0lBdUIvQixpREFBQztDQUFBLEFBbENELElBa0NDO1NBN0JZLDBDQUEwQzs7O0lBRW5ELDZEQUFnQjs7SUFHWiwrREFBMEU7O0lBQzFFLDBEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIEFsZXJ0RGVmaW5lUGFya2luZ1N0cnVjdHVyZVByb3BlcnRpZXMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9DT05URU5UOiBzdHJpbmcgPSAnUHJpbWVybyBkZWZpbmEgbGEgZXN0cnVjdHVyYSB6b25hIGRlIHBhcnF1ZWFkZXJvcyBlbiBjb25maWd1cmFjacOzbi4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlbC1hbGVydC1kZWZpbmUtcGFya2luZy1zdHJ1Y3R1cmUtaGVsaXNhJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1kZWZpbmUtcGFya2luZy1zdHJ1Y3R1cmUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2FsZXJ0LWRlZmluZS1wYXJraW5nLXN0cnVjdHVyZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnREZWZpbmVQYXJraW5nU3RydWN0dXJlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0RGVmaW5lUGFya2luZ1N0cnVjdHVyZUhlbGlzYUNvbXBvbmVudD4sXHJcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydERlZmluZVBhcmtpbmdTdHJ1Y3R1cmVQcm9wZXJ0aWVzXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IERFRkFVTFRfQ09OVEVOVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XHJcbiAgICAgICAgZGlhbG9nUmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5vbkNhbmNlbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19