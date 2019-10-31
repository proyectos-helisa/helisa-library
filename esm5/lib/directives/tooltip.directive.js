/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { MatTooltip } from '@angular/material';
var HelTooltipDirective = /** @class */ (function () {
    function HelTooltipDirective(tooltip, _elemRef) {
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
    HelTooltipDirective.prototype.mouseover = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentContent = this._elemRef.nativeElement.innerText;
        if (!!currentContent && !!this.message) {
            if (currentContent.toUpperCase() != this.message.toUpperCase()) {
                this.tooltip.message = this.message;
            }
        }
        this.tooltip.showDelay = this.showDelay;
        this.tooltip.hideDelay = this.hideDelay;
    };
    HelTooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[helTooltip]',
                    providers: [MatTooltip]
                },] }
    ];
    /** @nocollapse */
    HelTooltipDirective.ctorParameters = function () { return [
        { type: MatTooltip },
        { type: ElementRef }
    ]; };
    HelTooltipDirective.propDecorators = {
        message: [{ type: Input, args: ['helTooltip',] }],
        hideDelay: [{ type: Input, args: ['hideDelay',] }],
        showDelay: [{ type: Input, args: ['showDelay',] }],
        mouseover: [{ type: HostListener, args: ['mouseover',] }]
    };
    return HelTooltipDirective;
}());
export { HelTooltipDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBeUJJLDZCQUFZLE9BQW1CLEVBQVMsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7OztRQVR4QyxjQUFTLEdBQVcsR0FBRyxDQUFDOzs7O1FBS3hCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFLMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7OztJQUUwQix1Q0FBUzs7O0lBQXBDOztZQUNNLGNBQWMsR0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTO1FBRWpFLElBQUcsQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNwQyxJQUFHLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFDO2dCQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUMsQ0FBQzs7Z0JBeENKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUMxQjs7OztnQkFMUSxVQUFVO2dCQURzQixVQUFVOzs7MEJBYzlDLEtBQUssU0FBQyxZQUFZOzRCQUtsQixLQUFLLFNBQUMsV0FBVzs0QkFLakIsS0FBSyxTQUFDLFdBQVc7NEJBUWpCLFlBQVksU0FBQyxXQUFXOztJQWE3QiwwQkFBQztDQUFBLEFBMUNELElBMENDO1NBdENZLG1CQUFtQjs7O0lBRTVCLHNDQUFvQjs7Ozs7O0lBS3BCLHNDQUFxQzs7Ozs7SUFLckMsd0NBQTRDOzs7OztJQUs1Qyx3Q0FBNEM7Ozs7O0lBSVosdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXAgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2hlbFRvb2x0aXBdJyxcclxuICAgIHByb3ZpZGVyczogW01hdFRvb2x0aXBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWxUb29sdGlwRGlyZWN0aXZlIHsgXHJcblxyXG4gICAgdG9vbHRpcDogTWF0VG9vbHRpcDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1lbnNhamUgYSBtb3N0cmFyXHJcbiAgICAgKiAgKi8gICAgXHJcbiAgICBASW5wdXQoJ2hlbFRvb2x0aXAnKSBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCdoaWRlRGVsYXknKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRpZW1wbyBhbnRlcyBkZSBtb3N0cmEgZWwgbWVuc2FqZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoJ3Nob3dEZWxheScpIHNob3dEZWxheTogbnVtYmVyID0gNTAwO1xyXG4gICAgXHJcblxyXG4gIFxyXG4gICAgY29uc3RydWN0b3IodG9vbHRpcDogTWF0VG9vbHRpcCxwcml2YXRlIF9lbGVtUmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKSBtb3VzZW92ZXIoKSB7ICAgICAgXHJcbiAgICAgIGxldCBjdXJyZW50Q29udGVudDpzdHJpbmcgPSB0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgICBcclxuICAgICAgaWYoISFjdXJyZW50Q29udGVudCAmJiAhIXRoaXMubWVzc2FnZSl7XHJcbiAgICAgICAgaWYoY3VycmVudENvbnRlbnQudG9VcHBlckNhc2UoKSAhPSB0aGlzLm1lc3NhZ2UudG9VcHBlckNhc2UoKSl7XHJcbiAgICAgICAgICB0aGlzLnRvb2x0aXAubWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMudG9vbHRpcC5zaG93RGVsYXkgPSAgdGhpcy5zaG93RGVsYXk7XHJcbiAgICAgIHRoaXMudG9vbHRpcC5oaWRlRGVsYXkgPSB0aGlzLmhpZGVEZWxheTsgICBcclxuICAgIH1cclxuXHJcbn0iXX0=