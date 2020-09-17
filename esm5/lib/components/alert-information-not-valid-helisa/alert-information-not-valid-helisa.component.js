/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * @record
 */
function AlertInformationNotValidProperties() { }
if (false) {
    /** @type {?} */
    AlertInformationNotValidProperties.prototype.title;
    /** @type {?} */
    AlertInformationNotValidProperties.prototype.content;
}
/** @type {?} */
var DEFAULT_CONTENT = 'Rectifique. Hay información no válida';
var AlertInformationNotValidHelisaComponent = /** @class */ (function () {
    function AlertInformationNotValidHelisaComponent(dialogRef, data) {
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
    AlertInformationNotValidHelisaComponent.prototype.ngOnInit = /**
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
    AlertInformationNotValidHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    AlertInformationNotValidHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert-information-not-valid-helisa',
                    template: "<div mat-dialog-content>\r\n    {{ content }}\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertInformationNotValidHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertInformationNotValidHelisaComponent;
}());
export { AlertInformationNotValidHelisaComponent };
if (false) {
    /** @type {?} */
    AlertInformationNotValidHelisaComponent.prototype.content;
    /** @type {?} */
    AlertInformationNotValidHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertInformationNotValidHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS9hbGVydC1pbmZvcm1hdGlvbi1ub3QtdmFsaWQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUdsRSxpREFHQzs7O0lBRkcsbURBQWM7O0lBQ2QscURBQWdCOzs7SUFHZCxlQUFlLEdBQVcsdUNBQXVDO0FBRXZFO0lBU0ksaURBQ1csU0FBZ0UsRUFDdkMsSUFBd0M7UUFGNUUsaUJBY0M7UUFiVSxjQUFTLEdBQVQsU0FBUyxDQUF1RDtRQUN2QyxTQUFJLEdBQUosSUFBSSxDQUFvQztRQUV4RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUNsQztRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUNyRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN6QztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELDBEQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEcsVUFBVTs7O1FBQUM7WUFDUCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCwwREFBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQWpDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsbUVBQWtFOztpQkFFckU7Ozs7Z0JBZFEsWUFBWTtnREFxQlosTUFBTSxTQUFDLGVBQWU7O0lBdUIvQiw4Q0FBQztDQUFBLEFBbENELElBa0NDO1NBN0JZLHVDQUF1Qzs7O0lBRWhELDBEQUFnQjs7SUFHWiw0REFBdUU7O0lBQ3ZFLHVEQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIEFsZXJ0SW5mb3JtYXRpb25Ob3RWYWxpZFByb3BlcnRpZXMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9DT05URU5UOiBzdHJpbmcgPSAnUmVjdGlmaXF1ZS4gSGF5IGluZm9ybWFjacOzbiBubyB2w6FsaWRhJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoZWwtYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hbGVydC1pbmZvcm1hdGlvbi1ub3QtdmFsaWQtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0SW5mb3JtYXRpb25Ob3RWYWxpZEhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydEluZm9ybWF0aW9uTm90VmFsaWRIZWxpc2FDb21wb25lbnQ+LFxyXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogQWxlcnRJbmZvcm1hdGlvbk5vdFZhbGlkUHJvcGVydGllc1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBERUZBVUxUX0NPTlRFTlQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xyXG4gICAgICAgIGRpYWxvZ1JlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMub25DYW5jZWwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbmNlbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==