/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { MatTooltip } from '@angular/material';
var HelTooltipDirective = /** @class */ (function () {
    function HelTooltipDirective(tooltip, elemRef) {
        this.elemRef = elemRef;
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
        var currentContent = this.elemRef.nativeElement.innerText;
        if (!!currentContent && !!this.message) {
            if ((currentContent.toUpperCase() !== this.message.toString().toUpperCase()) || this.isEllipsisActive(this.elemRef.nativeElement)) {
                this.tooltip.message = this.message;
            }
        }
        this.tooltip.showDelay = this.showDelay;
        this.tooltip.hideDelay = this.hideDelay;
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    HelTooltipDirective.prototype.isEllipsisActive = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return (e.offsetWidth < e.scrollWidth);
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
        hideDelay: [{ type: Input }],
        showDelay: [{ type: Input }],
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
    HelTooltipDirective.prototype.elemRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBd0JJLDZCQUFZLE9BQW1CLEVBQVUsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTs7OztRQVJuRCxjQUFTLEdBQVcsR0FBRyxDQUFDOzs7O1FBS3hCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFJL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7OztJQUUwQix1Q0FBUzs7O0lBQXBDOztZQUNRLGNBQWMsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTO1FBRW5FLElBQUksQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDakksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNyQztTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUdPLDhDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsQ0FBOEM7UUFDckUsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQTVDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztpQkFDMUI7Ozs7Z0JBTFEsVUFBVTtnQkFEc0IsVUFBVTs7OzBCQWM5QyxLQUFLLFNBQUMsWUFBWTs0QkFLbEIsS0FBSzs0QkFLTCxLQUFLOzRCQU9MLFlBQVksU0FBQyxXQUFXOztJQWlCN0IsMEJBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQXpDWSxtQkFBbUI7OztJQUU1QixzQ0FBb0I7Ozs7O0lBS3BCLHNDQUFxQzs7Ozs7SUFLckMsd0NBQWlDOzs7OztJQUtqQyx3Q0FBaUM7Ozs7O0lBR0Esc0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXAgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2hlbFRvb2x0aXBdJyxcclxuICAgIHByb3ZpZGVyczogW01hdFRvb2x0aXBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWxUb29sdGlwRGlyZWN0aXZlIHtcclxuXHJcbiAgICB0b29sdGlwOiBNYXRUb29sdGlwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWVuc2FqZSBhIG1vc3RyYXJcclxuICAgICAqL1xyXG4gICAgQElucHV0KCdoZWxUb29sdGlwJykgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGllbXBvIGFudGVzIGRlIG9jdWx0YXJsYSBlbCBtZW5zYWplXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGhpZGVEZWxheTogbnVtYmVyID0gNjAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHNob3dEZWxheTogbnVtYmVyID0gNTAwO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0b29sdGlwOiBNYXRUb29sdGlwLCBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgdGhpcy50b29sdGlwID0gdG9vbHRpcDtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKSBtb3VzZW92ZXIoKTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRDb250ZW50OiBzdHJpbmcgPSB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcblxyXG4gICAgICBpZiAoISFjdXJyZW50Q29udGVudCAmJiAhIXRoaXMubWVzc2FnZSkge1xyXG4gICAgICAgIGlmICgoY3VycmVudENvbnRlbnQudG9VcHBlckNhc2UoKSAhPT0gdGhpcy5tZXNzYWdlLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSkgfHwgdGhpcy5pc0VsbGlwc2lzQWN0aXZlKHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50KSkge1xyXG4gICAgICAgICAgdGhpcy50b29sdGlwLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRvb2x0aXAuc2hvd0RlbGF5ID0gIHRoaXMuc2hvd0RlbGF5O1xyXG4gICAgICB0aGlzLnRvb2x0aXAuaGlkZURlbGF5ID0gdGhpcy5oaWRlRGVsYXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaXNFbGxpcHNpc0FjdGl2ZShlOiB7b2Zmc2V0V2lkdGg6IG51bWJlciAsIHNjcm9sbFdpZHRoOiBudW1iZXJ9KTogYm9vbGVhbiB7XHJcbiAgICAgIHJldHVybiAoZS5vZmZzZXRXaWR0aCA8IGUuc2Nyb2xsV2lkdGgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==