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
                    template: "<div mat-dialog-content>\n    {{ content }}\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYS9hbGVydC1pbmZvcm1hdGlvbi1ub3QtdmFsaWQtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUdsRSxpREFHQzs7O0lBRkcsbURBQWM7O0lBQ2QscURBQWdCOzs7SUFHZCxlQUFlLEdBQVcsdUNBQXVDO0FBRXZFO0lBU0ksaURBQ1csU0FBZ0UsRUFDdkMsSUFBd0M7UUFGNUUsaUJBY0M7UUFiVSxjQUFTLEdBQVQsU0FBUyxDQUF1RDtRQUN2QyxTQUFJLEdBQUosSUFBSSxDQUFvQztRQUV4RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUNsQztRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUNyRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN6QztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELDBEQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEcsVUFBVTs7O1FBQUM7WUFDUCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCwwREFBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQWpDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsK0RBQWtFOztpQkFFckU7Ozs7Z0JBZFEsWUFBWTtnREFxQlosTUFBTSxTQUFDLGVBQWU7O0lBdUIvQiw4Q0FBQztDQUFBLEFBbENELElBa0NDO1NBN0JZLHVDQUF1Qzs7O0lBRWhELDBEQUFnQjs7SUFHWiw0REFBdUU7O0lBQ3ZFLHVEQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5cbmludGVyZmFjZSBBbGVydEluZm9ybWF0aW9uTm90VmFsaWRQcm9wZXJ0aWVzIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuY29uc3QgREVGQVVMVF9DT05URU5UOiBzdHJpbmcgPSAnUmVjdGlmaXF1ZS4gSGF5IGluZm9ybWFjacOzbiBubyB2w6FsaWRhJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoZWwtYWxlcnQtaW5mb3JtYXRpb24tbm90LXZhbGlkLWhlbGlzYScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWluZm9ybWF0aW9uLW5vdC12YWxpZC1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FsZXJ0LWluZm9ybWF0aW9uLW5vdC12YWxpZC1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydEluZm9ybWF0aW9uTm90VmFsaWRIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29udGVudDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydEluZm9ybWF0aW9uTm90VmFsaWRIZWxpc2FDb21wb25lbnQ+LFxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IEFsZXJ0SW5mb3JtYXRpb25Ob3RWYWxpZFByb3BlcnRpZXNcbiAgICApIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xuICAgICAgICBpZiAodGhpcy5jb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IERFRkFVTFRfQ09OVEVOVDtcbiAgICAgICAgfVxuICAgICAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICAgICAgZGlhbG9nUmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG59XG4iXX0=