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
            if (currentContent.toUpperCase() != this.message.toUpperCase()) {
                this.tooltip.message = this.message;
            }
        }
        this.tooltip.showDelay = this.showDelay;
        this.tooltip.hideDelay = this.hideDelay;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTS9DLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBcUI1QixZQUFZLE9BQW1CLEVBQVMsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7OztRQVR4QyxjQUFTLEdBQVcsR0FBRyxDQUFDOzs7O1FBS3hCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFLMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7OztJQUUwQixTQUFTOztZQUM5QixjQUFjLEdBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUztRQUVqRSxJQUFHLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDcEMsSUFBRyxjQUFjLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBQztnQkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNyQztTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7OztZQXhDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQzthQUMxQjs7OztZQUxRLFVBQVU7WUFEc0IsVUFBVTs7O3NCQWM5QyxLQUFLLFNBQUMsWUFBWTt3QkFLbEIsS0FBSyxTQUFDLFdBQVc7d0JBS2pCLEtBQUssU0FBQyxXQUFXO3dCQVFqQixZQUFZLFNBQUMsV0FBVzs7OztJQXZCekIsc0NBQW9COzs7Ozs7SUFLcEIsc0NBQXFDOzs7OztJQUtyQyx3Q0FBNEM7Ozs7O0lBSzVDLHdDQUE0Qzs7Ozs7SUFJWix1Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaGVsVG9vbHRpcF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbTWF0VG9vbHRpcF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlbFRvb2x0aXBEaXJlY3RpdmUgeyBcclxuXHJcbiAgICB0b29sdGlwOiBNYXRUb29sdGlwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWVuc2FqZSBhIG1vc3RyYXJcclxuICAgICAqICAqLyAgICBcclxuICAgIEBJbnB1dCgnaGVsVG9vbHRpcCcpIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRpZW1wbyBhbnRlcyBkZSBvY3VsdGFybGEgZWwgbWVuc2FqZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoJ2hpZGVEZWxheScpIGhpZGVEZWxheTogbnVtYmVyID0gNjAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgnc2hvd0RlbGF5Jykgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XHJcbiAgICBcclxuXHJcbiAgXHJcbiAgICBjb25zdHJ1Y3Rvcih0b29sdGlwOiBNYXRUb29sdGlwLHByaXZhdGUgX2VsZW1SZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgdGhpcy50b29sdGlwID0gdG9vbHRpcDtcclxuICAgIH1cclxuICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3ZlcicpIG1vdXNlb3ZlcigpIHsgICAgICBcclxuICAgICAgbGV0IGN1cnJlbnRDb250ZW50OnN0cmluZyA9IHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICAgIFxyXG4gICAgICBpZighIWN1cnJlbnRDb250ZW50ICYmICEhdGhpcy5tZXNzYWdlKXtcclxuICAgICAgICBpZihjdXJyZW50Q29udGVudC50b1VwcGVyQ2FzZSgpICE9IHRoaXMubWVzc2FnZS50b1VwcGVyQ2FzZSgpKXtcclxuICAgICAgICAgIHRoaXMudG9vbHRpcC5tZXNzYWdlID0gdGhpcy5tZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdGhpcy50b29sdGlwLnNob3dEZWxheSA9ICB0aGlzLnNob3dEZWxheTtcclxuICAgICAgdGhpcy50b29sdGlwLmhpZGVEZWxheSA9IHRoaXMuaGlkZURlbGF5OyAgIFxyXG4gICAgfVxyXG5cclxufSJdfQ==