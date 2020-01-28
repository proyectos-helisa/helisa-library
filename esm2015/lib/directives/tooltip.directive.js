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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTS9DLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBcUI1QixZQUFZLE9BQW1CLEVBQVMsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7OztRQVR4QyxjQUFTLEdBQVcsR0FBRyxDQUFDOzs7O1FBS3hCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFLMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7OztJQUUwQixTQUFTOztZQUM5QixjQUFjLEdBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUztRQUVqRSxJQUFHLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDcEMsSUFBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUM7Z0JBQy9ILElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckM7U0FDRjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFHTyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUE3Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7YUFDMUI7Ozs7WUFMUSxVQUFVO1lBRHNCLFVBQVU7OztzQkFjOUMsS0FBSyxTQUFDLFlBQVk7d0JBS2xCLEtBQUssU0FBQyxXQUFXO3dCQUtqQixLQUFLLFNBQUMsV0FBVzt3QkFRakIsWUFBWSxTQUFDLFdBQVc7Ozs7SUF2QnpCLHNDQUFvQjs7Ozs7O0lBS3BCLHNDQUFxQzs7Ozs7SUFLckMsd0NBQTRDOzs7OztJQUs1Qyx3Q0FBNEM7Ozs7O0lBSVosdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRUb29sdGlwIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1toZWxUb29sdGlwXScsXG4gICAgcHJvdmlkZXJzOiBbTWF0VG9vbHRpcF1cbn0pXG5leHBvcnQgY2xhc3MgSGVsVG9vbHRpcERpcmVjdGl2ZSB7IFxuXG4gICAgdG9vbHRpcDogTWF0VG9vbHRpcDtcblxuICAgIC8qKlxuICAgICAqIE1lbnNhamUgYSBtb3N0cmFyXG4gICAgICogICovICAgIFxuICAgIEBJbnB1dCgnaGVsVG9vbHRpcCcpIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRpZW1wbyBhbnRlcyBkZSBvY3VsdGFybGEgZWwgbWVuc2FqZVxuICAgICAqL1xuICAgIEBJbnB1dCgnaGlkZURlbGF5JykgaGlkZURlbGF5OiBudW1iZXIgPSA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaWVtcG8gYW50ZXMgZGUgbW9zdHJhIGVsIG1lbnNhamVcbiAgICAgKi9cbiAgICBASW5wdXQoJ3Nob3dEZWxheScpIHNob3dEZWxheTogbnVtYmVyID0gNTAwO1xuICAgIFxuXG4gIFxuICAgIGNvbnN0cnVjdG9yKHRvb2x0aXA6IE1hdFRvb2x0aXAscHJpdmF0ZSBfZWxlbVJlZjogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy50b29sdGlwID0gdG9vbHRpcDtcbiAgICB9XG4gIFxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3ZlcicpIG1vdXNlb3ZlcigpIHsgICAgICAgICAgIFxuICAgICAgbGV0IGN1cnJlbnRDb250ZW50OnN0cmluZyA9IHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7ICAgICAgXG4gICAgXG4gICAgICBpZighIWN1cnJlbnRDb250ZW50ICYmICEhdGhpcy5tZXNzYWdlKXtcbiAgICAgICAgaWYoKGN1cnJlbnRDb250ZW50LnRvVXBwZXJDYXNlKCkgIT0gdGhpcy5tZXNzYWdlLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSkgfHwgdGhpcy5pc0VsbGlwc2lzQWN0aXZlKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCkpe1xuICAgICAgICAgIHRoaXMudG9vbHRpcC5tZXNzYWdlID0gdGhpcy5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHRoaXMudG9vbHRpcC5zaG93RGVsYXkgPSAgdGhpcy5zaG93RGVsYXk7XG4gICAgICB0aGlzLnRvb2x0aXAuaGlkZURlbGF5ID0gdGhpcy5oaWRlRGVsYXk7ICAgXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGlzRWxsaXBzaXNBY3RpdmUoZSkge1xuICAgICAgcmV0dXJuIChlLm9mZnNldFdpZHRoIDwgZS5zY3JvbGxXaWR0aCk7XG4gICAgfVxufSJdfQ==