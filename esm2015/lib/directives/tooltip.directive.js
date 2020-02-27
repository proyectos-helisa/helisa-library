/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { MatTooltip } from '@angular/material';
export class HelTooltipDirective {
    /**
     * @param {?} tooltip
     * @param {?} elemRef
     */
    constructor(tooltip, elemRef) {
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
    mouseover() {
        /** @type {?} */
        const currentContent = this.elemRef.nativeElement.innerText;
        if (!!currentContent && !!this.message) {
            if ((currentContent.toUpperCase() !== this.message.toString().toUpperCase()) || this.isEllipsisActive(this.elemRef.nativeElement)) {
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
    hideDelay: [{ type: Input }],
    showDelay: [{ type: Input }],
    mouseover: [{ type: HostListener, args: ['mouseover',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTS9DLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBb0I1QixZQUFZLE9BQW1CLEVBQVUsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTs7OztRQVJuRCxjQUFTLEdBQVcsR0FBRyxDQUFDOzs7O1FBS3hCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFJL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7OztJQUUwQixTQUFTOztjQUM1QixjQUFjLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUztRQUVuRSxJQUFJLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ2pJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckM7U0FDRjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFHTyxnQkFBZ0IsQ0FBQyxDQUE4QztRQUNyRSxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBNUNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2FBQzFCOzs7O1lBTFEsVUFBVTtZQURzQixVQUFVOzs7c0JBYzlDLEtBQUssU0FBQyxZQUFZO3dCQUtsQixLQUFLO3dCQUtMLEtBQUs7d0JBT0wsWUFBWSxTQUFDLFdBQVc7Ozs7SUF0QnpCLHNDQUFvQjs7Ozs7SUFLcEIsc0NBQXFDOzs7OztJQUtyQyx3Q0FBaUM7Ozs7O0lBS2pDLHdDQUFpQzs7Ozs7SUFHQSxzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRvb2x0aXAgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2hlbFRvb2x0aXBdJyxcbiAgICBwcm92aWRlcnM6IFtNYXRUb29sdGlwXVxufSlcbmV4cG9ydCBjbGFzcyBIZWxUb29sdGlwRGlyZWN0aXZlIHtcblxuICAgIHRvb2x0aXA6IE1hdFRvb2x0aXA7XG5cbiAgICAvKipcbiAgICAgKiBNZW5zYWplIGEgbW9zdHJhclxuICAgICAqL1xuICAgIEBJbnB1dCgnaGVsVG9vbHRpcCcpIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRpZW1wbyBhbnRlcyBkZSBvY3VsdGFybGEgZWwgbWVuc2FqZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIGhpZGVEZWxheTogbnVtYmVyID0gNjAwO1xuXG4gICAgLyoqXG4gICAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplXG4gICAgICovXG4gICAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XG5cblxuICAgIGNvbnN0cnVjdG9yKHRvb2x0aXA6IE1hdFRvb2x0aXAsIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy50b29sdGlwID0gdG9vbHRpcDtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKSBtb3VzZW92ZXIoKTogdm9pZCB7XG4gICAgICBjb25zdCBjdXJyZW50Q29udGVudDogc3RyaW5nID0gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xuXG4gICAgICBpZiAoISFjdXJyZW50Q29udGVudCAmJiAhIXRoaXMubWVzc2FnZSkge1xuICAgICAgICBpZiAoKGN1cnJlbnRDb250ZW50LnRvVXBwZXJDYXNlKCkgIT09IHRoaXMubWVzc2FnZS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkpIHx8IHRoaXMuaXNFbGxpcHNpc0FjdGl2ZSh0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAubWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRvb2x0aXAuc2hvd0RlbGF5ID0gIHRoaXMuc2hvd0RlbGF5O1xuICAgICAgdGhpcy50b29sdGlwLmhpZGVEZWxheSA9IHRoaXMuaGlkZURlbGF5O1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBpc0VsbGlwc2lzQWN0aXZlKGU6IHtvZmZzZXRXaWR0aDogbnVtYmVyICwgc2Nyb2xsV2lkdGg6IG51bWJlcn0pOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoZS5vZmZzZXRXaWR0aCA8IGUuc2Nyb2xsV2lkdGgpO1xuICAgIH1cbn1cbiJdfQ==