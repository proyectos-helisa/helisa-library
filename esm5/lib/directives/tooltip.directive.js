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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBd0JJLDZCQUFZLE9BQW1CLEVBQVUsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTs7OztRQVJuRCxjQUFTLEdBQVcsR0FBRyxDQUFDOzs7O1FBS3hCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFJL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7OztJQUUwQix1Q0FBUzs7O0lBQXBDOztZQUNRLGNBQWMsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTO1FBRW5FLElBQUksQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDakksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNyQztTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUdPLDhDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsQ0FBOEM7UUFDckUsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQTVDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztpQkFDMUI7Ozs7Z0JBTFEsVUFBVTtnQkFEc0IsVUFBVTs7OzBCQWM5QyxLQUFLLFNBQUMsWUFBWTs0QkFLbEIsS0FBSzs0QkFLTCxLQUFLOzRCQU9MLFlBQVksU0FBQyxXQUFXOztJQWlCN0IsMEJBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQXpDWSxtQkFBbUI7OztJQUU1QixzQ0FBb0I7Ozs7O0lBS3BCLHNDQUFxQzs7Ozs7SUFLckMsd0NBQWlDOzs7OztJQUtqQyx3Q0FBaUM7Ozs7O0lBR0Esc0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRUb29sdGlwIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1toZWxUb29sdGlwXScsXG4gICAgcHJvdmlkZXJzOiBbTWF0VG9vbHRpcF1cbn0pXG5leHBvcnQgY2xhc3MgSGVsVG9vbHRpcERpcmVjdGl2ZSB7XG5cbiAgICB0b29sdGlwOiBNYXRUb29sdGlwO1xuXG4gICAgLyoqXG4gICAgICogTWVuc2FqZSBhIG1vc3RyYXJcbiAgICAgKi9cbiAgICBASW5wdXQoJ2hlbFRvb2x0aXAnKSBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcblxuICAgIC8qKlxuICAgICAqIFRpZW1wbyBhbnRlcyBkZSBtb3N0cmEgZWwgbWVuc2FqZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHNob3dEZWxheTogbnVtYmVyID0gNTAwO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcih0b29sdGlwOiBNYXRUb29sdGlwLCBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXA7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VvdmVyJykgbW91c2VvdmVyKCk6IHZvaWQge1xuICAgICAgY29uc3QgY3VycmVudENvbnRlbnQ6IHN0cmluZyA9IHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcblxuICAgICAgaWYgKCEhY3VycmVudENvbnRlbnQgJiYgISF0aGlzLm1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKChjdXJyZW50Q29udGVudC50b1VwcGVyQ2FzZSgpICE9PSB0aGlzLm1lc3NhZ2UudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpKSB8fCB0aGlzLmlzRWxsaXBzaXNBY3RpdmUodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy50b29sdGlwLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy50b29sdGlwLnNob3dEZWxheSA9ICB0aGlzLnNob3dEZWxheTtcbiAgICAgIHRoaXMudG9vbHRpcC5oaWRlRGVsYXkgPSB0aGlzLmhpZGVEZWxheTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgaXNFbGxpcHNpc0FjdGl2ZShlOiB7b2Zmc2V0V2lkdGg6IG51bWJlciAsIHNjcm9sbFdpZHRoOiBudW1iZXJ9KTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKGUub2Zmc2V0V2lkdGggPCBlLnNjcm9sbFdpZHRoKTtcbiAgICB9XG59XG4iXX0=