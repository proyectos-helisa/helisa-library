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
            if ((currentContent.toUpperCase() != this.message.toString().toUpperCase()) || this.isEllipsisActive(this._elemRef.nativeElement)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBeUJJLDZCQUFZLE9BQW1CLEVBQVMsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7OztRQVR4QyxjQUFTLEdBQVcsR0FBRyxDQUFDOzs7O1FBS3hCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFLMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7OztJQUUwQix1Q0FBUzs7O0lBQXBDOztZQUNNLGNBQWMsR0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTO1FBRWpFLElBQUcsQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNwQyxJQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBQztnQkFDL0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNyQztTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUdPLDhDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsQ0FBQztRQUN4QixPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBN0NKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUMxQjs7OztnQkFMUSxVQUFVO2dCQURzQixVQUFVOzs7MEJBYzlDLEtBQUssU0FBQyxZQUFZOzRCQUtsQixLQUFLLFNBQUMsV0FBVzs0QkFLakIsS0FBSyxTQUFDLFdBQVc7NEJBUWpCLFlBQVksU0FBQyxXQUFXOztJQWlCN0IsMEJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTFDWSxtQkFBbUI7OztJQUU1QixzQ0FBb0I7Ozs7OztJQUtwQixzQ0FBcUM7Ozs7O0lBS3JDLHdDQUE0Qzs7Ozs7SUFLNUMsd0NBQTRDOzs7OztJQUlaLHVDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaGVsVG9vbHRpcF0nLFxuICAgIHByb3ZpZGVyczogW01hdFRvb2x0aXBdXG59KVxuZXhwb3J0IGNsYXNzIEhlbFRvb2x0aXBEaXJlY3RpdmUgeyBcblxuICAgIHRvb2x0aXA6IE1hdFRvb2x0aXA7XG5cbiAgICAvKipcbiAgICAgKiBNZW5zYWplIGEgbW9zdHJhclxuICAgICAqICAqLyAgICBcbiAgICBASW5wdXQoJ2hlbFRvb2x0aXAnKSBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamVcbiAgICAgKi9cbiAgICBASW5wdXQoJ2hpZGVEZWxheScpIGhpZGVEZWxheTogbnVtYmVyID0gNjAwO1xuXG4gICAgLyoqXG4gICAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplXG4gICAgICovXG4gICAgQElucHV0KCdzaG93RGVsYXknKSBzaG93RGVsYXk6IG51bWJlciA9IDUwMDtcbiAgICBcblxuICBcbiAgICBjb25zdHJ1Y3Rvcih0b29sdGlwOiBNYXRUb29sdGlwLHByaXZhdGUgX2VsZW1SZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXA7XG4gICAgfVxuICBcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKSBtb3VzZW92ZXIoKSB7ICAgICAgICAgICBcbiAgICAgIGxldCBjdXJyZW50Q29udGVudDpzdHJpbmcgPSB0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0OyAgICAgIFxuICAgIFxuICAgICAgaWYoISFjdXJyZW50Q29udGVudCAmJiAhIXRoaXMubWVzc2FnZSl7XG4gICAgICAgIGlmKChjdXJyZW50Q29udGVudC50b1VwcGVyQ2FzZSgpICE9IHRoaXMubWVzc2FnZS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkpIHx8IHRoaXMuaXNFbGxpcHNpc0FjdGl2ZSh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQpKXtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAubWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICB0aGlzLnRvb2x0aXAuc2hvd0RlbGF5ID0gIHRoaXMuc2hvd0RlbGF5O1xuICAgICAgdGhpcy50b29sdGlwLmhpZGVEZWxheSA9IHRoaXMuaGlkZURlbGF5OyAgIFxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBpc0VsbGlwc2lzQWN0aXZlKGUpIHtcbiAgICAgIHJldHVybiAoZS5vZmZzZXRXaWR0aCA8IGUuc2Nyb2xsV2lkdGgpO1xuICAgIH1cbn0iXX0=