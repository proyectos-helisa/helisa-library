/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { MatTooltip } from '@angular/material';
export class HelTooltipDirective {
    /**
     * @param {?} tooltip
     * @param {?} _elemRef
     */
    constructor(tooltip, _elemRef) {
        this._elemRef = _elemRef;
        /**
         * Tiempo antes de ocultarla el mensaje
         */
        this.hideDelay = 600;
        /**
         * Tiempo antes de mostra el mensaje
         */
        this.showDelay = 500;
        this.tooltip = tooltip;
    }
    /**
     * @return {?}
     */
    mouseover() {
        /** @type {?} */
        let currentContent = this._elemRef.nativeElement.innerText;
        if (!!currentContent && !!this.message) {
            if ((currentContent.toUpperCase() != this.message.toString().toUpperCase()) || this.isEllipsisActive(this._elemRef.nativeElement)) {
                this.tooltip.message = this.message;
            }
        }
        this.tooltip.showDelay = this.showDelay;
        this.tooltip.hideDelay = this.hideDelay;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    isEllipsisActive(e) {
        return (e.offsetWidth < e.scrollWidth);
    }
}
HelTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[helTooltip]',
                providers: [MatTooltip]
            },] }
];
/** @nocollapse */
HelTooltipDirective.ctorParameters = () => [
    { type: MatTooltip },
    { type: ElementRef }
];
HelTooltipDirective.propDecorators = {
    message: [{ type: Input, args: ['helTooltip',] }],
    hideDelay: [{ type: Input, args: ['hideDelay',] }],
    showDelay: [{ type: Input, args: ['showDelay',] }],
    mouseover: [{ type: HostListener, args: ['mouseover',] }]
};
if (false) {
    /** @type {?} */
    HelTooltipDirective.prototype.tooltip;
    /**
     * Mensaje a mostrar
     *
     * @type {?}
     */
    HelTooltipDirective.prototype.message;
    /**
     * Tiempo antes de ocultarla el mensaje
     * @type {?}
     */
    HelTooltipDirective.prototype.hideDelay;
    /**
     * Tiempo antes de mostra el mensaje
     * @type {?}
     */
    HelTooltipDirective.prototype.showDelay;
    /**
     * @type {?}
     * @private
     */
    HelTooltipDirective.prototype._elemRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTS9DLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBcUI1QixZQUFZLE9BQW1CLEVBQVMsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7OztRQVR4QyxjQUFTLEdBQVcsR0FBRyxDQUFDOzs7O1FBS3hCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFLMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7OztJQUUwQixTQUFTOztZQUM5QixjQUFjLEdBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUztRQUVqRSxJQUFHLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDcEMsSUFBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUM7Z0JBQy9ILElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckM7U0FDRjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFHTyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUE3Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7YUFDMUI7Ozs7WUFMUSxVQUFVO1lBRHNCLFVBQVU7OztzQkFjOUMsS0FBSyxTQUFDLFlBQVk7d0JBS2xCLEtBQUssU0FBQyxXQUFXO3dCQUtqQixLQUFLLFNBQUMsV0FBVzt3QkFRakIsWUFBWSxTQUFDLFdBQVc7Ozs7SUF2QnpCLHNDQUFvQjs7Ozs7O0lBS3BCLHNDQUFxQzs7Ozs7SUFLckMsd0NBQTRDOzs7OztJQUs1Qyx3Q0FBNEM7Ozs7O0lBSVosdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXAgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2hlbFRvb2x0aXBdJyxcclxuICAgIHByb3ZpZGVyczogW01hdFRvb2x0aXBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWxUb29sdGlwRGlyZWN0aXZlIHsgXHJcblxyXG4gICAgdG9vbHRpcDogTWF0VG9vbHRpcDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1lbnNhamUgYSBtb3N0cmFyXHJcbiAgICAgKiAgKi8gICAgXHJcbiAgICBASW5wdXQoJ2hlbFRvb2x0aXAnKSBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCdoaWRlRGVsYXknKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRpZW1wbyBhbnRlcyBkZSBtb3N0cmEgZWwgbWVuc2FqZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoJ3Nob3dEZWxheScpIHNob3dEZWxheTogbnVtYmVyID0gNTAwO1xyXG4gICAgXHJcblxyXG4gIFxyXG4gICAgY29uc3RydWN0b3IodG9vbHRpcDogTWF0VG9vbHRpcCxwcml2YXRlIF9lbGVtUmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKSBtb3VzZW92ZXIoKSB7ICAgICAgICAgICBcclxuICAgICAgbGV0IGN1cnJlbnRDb250ZW50OnN0cmluZyA9IHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7ICAgICAgXHJcbiAgICBcclxuICAgICAgaWYoISFjdXJyZW50Q29udGVudCAmJiAhIXRoaXMubWVzc2FnZSl7XHJcbiAgICAgICAgaWYoKGN1cnJlbnRDb250ZW50LnRvVXBwZXJDYXNlKCkgIT0gdGhpcy5tZXNzYWdlLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSkgfHwgdGhpcy5pc0VsbGlwc2lzQWN0aXZlKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCkpe1xyXG4gICAgICAgICAgdGhpcy50b29sdGlwLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB0aGlzLnRvb2x0aXAuc2hvd0RlbGF5ID0gIHRoaXMuc2hvd0RlbGF5O1xyXG4gICAgICB0aGlzLnRvb2x0aXAuaGlkZURlbGF5ID0gdGhpcy5oaWRlRGVsYXk7ICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaXNFbGxpcHNpc0FjdGl2ZShlKSB7XHJcbiAgICAgIHJldHVybiAoZS5vZmZzZXRXaWR0aCA8IGUuc2Nyb2xsV2lkdGgpO1xyXG4gICAgfVxyXG59Il19