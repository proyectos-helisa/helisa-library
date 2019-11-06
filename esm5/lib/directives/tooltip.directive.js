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
            if ((currentContent.toUpperCase() != this.message.toUpperCase()) || this.isEllipsisActive(this._elemRef.nativeElement)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBeUJJLDZCQUFZLE9BQW1CLEVBQVMsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7OztRQVR4QyxjQUFTLEdBQVcsR0FBRyxDQUFDOzs7O1FBS3hCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFLMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7OztJQUUwQix1Q0FBUzs7O0lBQXBDOztZQUNNLGNBQWMsR0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTO1FBRWpFLElBQUcsQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNwQyxJQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBQztnQkFDcEgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNyQztTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUdPLDhDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsQ0FBQztRQUN4QixPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBN0NKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUMxQjs7OztnQkFMUSxVQUFVO2dCQURzQixVQUFVOzs7MEJBYzlDLEtBQUssU0FBQyxZQUFZOzRCQUtsQixLQUFLLFNBQUMsV0FBVzs0QkFLakIsS0FBSyxTQUFDLFdBQVc7NEJBUWpCLFlBQVksU0FBQyxXQUFXOztJQWlCN0IsMEJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTFDWSxtQkFBbUI7OztJQUU1QixzQ0FBb0I7Ozs7OztJQUtwQixzQ0FBcUM7Ozs7O0lBS3JDLHdDQUE0Qzs7Ozs7SUFLNUMsd0NBQTRDOzs7OztJQUlaLHVDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1toZWxUb29sdGlwXScsXHJcbiAgICBwcm92aWRlcnM6IFtNYXRUb29sdGlwXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVsVG9vbHRpcERpcmVjdGl2ZSB7IFxyXG5cclxuICAgIHRvb2x0aXA6IE1hdFRvb2x0aXA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZW5zYWplIGEgbW9zdHJhclxyXG4gICAgICogICovICAgIFxyXG4gICAgQElucHV0KCdoZWxUb29sdGlwJykgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGllbXBvIGFudGVzIGRlIG9jdWx0YXJsYSBlbCBtZW5zYWplXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgnaGlkZURlbGF5JykgaGlkZURlbGF5OiBudW1iZXIgPSA2MDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWVtcG8gYW50ZXMgZGUgbW9zdHJhIGVsIG1lbnNhamVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCdzaG93RGVsYXknKSBzaG93RGVsYXk6IG51bWJlciA9IDUwMDtcclxuICAgIFxyXG5cclxuICBcclxuICAgIGNvbnN0cnVjdG9yKHRvb2x0aXA6IE1hdFRvb2x0aXAscHJpdmF0ZSBfZWxlbVJlZjogRWxlbWVudFJlZikge1xyXG4gICAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VvdmVyJykgbW91c2VvdmVyKCkgeyAgICAgICAgICAgXHJcbiAgICAgIGxldCBjdXJyZW50Q29udGVudDpzdHJpbmcgPSB0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0OyAgICAgIFxyXG4gICAgXHJcbiAgICAgIGlmKCEhY3VycmVudENvbnRlbnQgJiYgISF0aGlzLm1lc3NhZ2Upe1xyXG4gICAgICAgIGlmKChjdXJyZW50Q29udGVudC50b1VwcGVyQ2FzZSgpICE9IHRoaXMubWVzc2FnZS50b1VwcGVyQ2FzZSgpKSB8fCB0aGlzLmlzRWxsaXBzaXNBY3RpdmUodGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50KSl7XHJcbiAgICAgICAgICB0aGlzLnRvb2x0aXAubWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMudG9vbHRpcC5zaG93RGVsYXkgPSAgdGhpcy5zaG93RGVsYXk7XHJcbiAgICAgIHRoaXMudG9vbHRpcC5oaWRlRGVsYXkgPSB0aGlzLmhpZGVEZWxheTsgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpc0VsbGlwc2lzQWN0aXZlKGUpIHtcclxuICAgICAgcmV0dXJuIChlLm9mZnNldFdpZHRoIDwgZS5zY3JvbGxXaWR0aCk7XHJcbiAgICB9XHJcbn0iXX0=