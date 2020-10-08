/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * @record
 */
function AlertDefineCommercialStructureProperties() { }
if (false) {
    /** @type {?} */
    AlertDefineCommercialStructureProperties.prototype.title;
    /** @type {?} */
    AlertDefineCommercialStructureProperties.prototype.content;
}
/** @type {?} */
var DEFAULT_CONTENT = 'Primero defina la estructura comercial en configuración.';
var AlertDefineCommercialStructureHelisaComponent = /** @class */ (function () {
    function AlertDefineCommercialStructureHelisaComponent(dialogRef, data) {
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
    AlertDefineCommercialStructureHelisaComponent.prototype.ngOnInit = /**
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
    AlertDefineCommercialStructureHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    AlertDefineCommercialStructureHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert-define-commercial-structure-helisa',
                    template: "<div mat-dialog-content>\r\n    {{ content }}\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertDefineCommercialStructureHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertDefineCommercialStructureHelisaComponent;
}());
export { AlertDefineCommercialStructureHelisaComponent };
if (false) {
    /** @type {?} */
    AlertDefineCommercialStructureHelisaComponent.prototype.content;
    /** @type {?} */
    AlertDefineCommercialStructureHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertDefineCommercialStructureHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVmaW5lLWNvbW1lcmNpYWwtc3RydWN0dXJlLWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtZGVmaW5lLWNvbW1lcmNpYWwtc3RydWN0dXJlLWhlbGlzYS9hbGVydC1kZWZpbmUtY29tbWVyY2lhbC1zdHJ1Y3R1cmUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUdsRSx1REFHQzs7O0lBRkcseURBQWM7O0lBQ2QsMkRBQWdCOzs7SUFHZCxlQUFlLEdBQVcsMERBQTBEO0FBRTFGO0lBU0ksdURBQ1csU0FBc0UsRUFDN0MsSUFBOEM7UUFGbEYsaUJBY0M7UUFiVSxjQUFTLEdBQVQsU0FBUyxDQUE2RDtRQUM3QyxTQUFJLEdBQUosSUFBSSxDQUEwQztRQUU5RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztTQUNsQztRQUNELFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFvQjtZQUNyRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN6QztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELGdFQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEcsVUFBVTs7O1FBQUM7WUFDUCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxnRUFBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQWpDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDhDQUE4QztvQkFDeEQsbUVBQXdFOztpQkFFM0U7Ozs7Z0JBZFEsWUFBWTtnREFxQlosTUFBTSxTQUFDLGVBQWU7O0lBdUIvQixvREFBQztDQUFBLEFBbENELElBa0NDO1NBN0JZLDZDQUE2Qzs7O0lBRXRELGdFQUFnQjs7SUFHWixrRUFBNkU7O0lBQzdFLDZEQUE4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIEFsZXJ0RGVmaW5lQ29tbWVyY2lhbFN0cnVjdHVyZVByb3BlcnRpZXMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9DT05URU5UOiBzdHJpbmcgPSAnUHJpbWVybyBkZWZpbmEgbGEgZXN0cnVjdHVyYSBjb21lcmNpYWwgZW4gY29uZmlndXJhY2nDs24uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoZWwtYWxlcnQtZGVmaW5lLWNvbW1lcmNpYWwtc3RydWN0dXJlLWhlbGlzYScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtZGVmaW5lLWNvbW1lcmNpYWwtc3RydWN0dXJlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hbGVydC1kZWZpbmUtY29tbWVyY2lhbC1zdHJ1Y3R1cmUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0RGVmaW5lQ29tbWVyY2lhbFN0cnVjdHVyZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydERlZmluZUNvbW1lcmNpYWxTdHJ1Y3R1cmVIZWxpc2FDb21wb25lbnQ+LFxyXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogQWxlcnREZWZpbmVDb21tZXJjaWFsU3RydWN0dXJlUHJvcGVydGllc1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBERUZBVUxUX0NPTlRFTlQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xyXG4gICAgICAgIGRpYWxvZ1JlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMub25DYW5jZWwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbmNlbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==