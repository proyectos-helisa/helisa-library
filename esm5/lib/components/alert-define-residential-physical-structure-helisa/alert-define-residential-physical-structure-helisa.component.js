/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * @record
 */
function AlertDefineResidentialPhysicalStructureProperties() { }
if (false) {
    /** @type {?} */
    AlertDefineResidentialPhysicalStructureProperties.prototype.title;
    /** @type {?} */
    AlertDefineResidentialPhysicalStructureProperties.prototype.content;
}
/** @type {?} */
var DEFAULT_CONTENT = 'Primero defina la estructura física residencial en configuración.';
var AlertDefineResidentialPhysicalStructureHelisaComponent = /** @class */ (function () {
    function AlertDefineResidentialPhysicalStructureHelisaComponent(dialogRef, data) {
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
    AlertDefineResidentialPhysicalStructureHelisaComponent.prototype.ngOnInit = /**
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
    AlertDefineResidentialPhysicalStructureHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    AlertDefineResidentialPhysicalStructureHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert-define-residential-physical-structure-helisa',
                    template: "<div mat-dialog-content>\r\n    {{ content }}\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertDefineResidentialPhysicalStructureHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertDefineResidentialPhysicalStructureHelisaComponent;
}());
export { AlertDefineResidentialPhysicalStructureHelisaComponent };
if (false) {
    /** @type {?} */
    AlertDefineResidentialPhysicalStructureHelisaComponent.prototype.content;
    /** @type {?} */
    AlertDefineResidentialPhysicalStructureHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertDefineResidentialPhysicalStructureHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVmaW5lLXJlc2lkZW50aWFsLXBoeXNpY2FsLXN0cnVjdHVyZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWRlZmluZS1yZXNpZGVudGlhbC1waHlzaWNhbC1zdHJ1Y3R1cmUtaGVsaXNhL2FsZXJ0LWRlZmluZS1yZXNpZGVudGlhbC1waHlzaWNhbC1zdHJ1Y3R1cmUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUdsRSxnRUFHQzs7O0lBRkcsa0VBQWM7O0lBQ2Qsb0VBQWdCOzs7SUFHZCxlQUFlLEdBQVcsbUVBQW1FO0FBRW5HO0lBU0ksZ0VBQ1csU0FBK0UsRUFDdEQsSUFBdUQ7UUFGM0YsaUJBY0M7UUFiVSxjQUFTLEdBQVQsU0FBUyxDQUFzRTtRQUN0RCxTQUFJLEdBQUosSUFBSSxDQUFtRDtRQUV2RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUNsQztRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUNyRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN6QztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHlFQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEcsVUFBVTs7O1FBQUM7WUFDUCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCx5RUFBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQWpDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdEQUF3RDtvQkFDbEUsbUVBQWtGOztpQkFFckY7Ozs7Z0JBZFEsWUFBWTtnREFxQlosTUFBTSxTQUFDLGVBQWU7O0lBdUIvQiw2REFBQztDQUFBLEFBbENELElBa0NDO1NBN0JZLHNEQUFzRDs7O0lBRS9ELHlFQUFnQjs7SUFHWiwyRUFBc0Y7O0lBQ3RGLHNFQUF1RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIEFsZXJ0RGVmaW5lUmVzaWRlbnRpYWxQaHlzaWNhbFN0cnVjdHVyZVByb3BlcnRpZXMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9DT05URU5UOiBzdHJpbmcgPSAnUHJpbWVybyBkZWZpbmEgbGEgZXN0cnVjdHVyYSBmw61zaWNhIHJlc2lkZW5jaWFsIGVuIGNvbmZpZ3VyYWNpw7NuLic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGVsLWFsZXJ0LWRlZmluZS1yZXNpZGVudGlhbC1waHlzaWNhbC1zdHJ1Y3R1cmUtaGVsaXNhJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1kZWZpbmUtcmVzaWRlbnRpYWwtcGh5c2ljYWwtc3RydWN0dXJlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hbGVydC1kZWZpbmUtcmVzaWRlbnRpYWwtcGh5c2ljYWwtc3RydWN0dXJlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydERlZmluZVJlc2lkZW50aWFsUGh5c2ljYWxTdHJ1Y3R1cmVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWxlcnREZWZpbmVSZXNpZGVudGlhbFBoeXNpY2FsU3RydWN0dXJlSGVsaXNhQ29tcG9uZW50PixcclxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IEFsZXJ0RGVmaW5lUmVzaWRlbnRpYWxQaHlzaWNhbFN0cnVjdHVyZVByb3BlcnRpZXNcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudDtcclxuICAgICAgICBpZiAodGhpcy5jb250ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gREVGQVVMVF9DT05URU5UO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcclxuICAgICAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=