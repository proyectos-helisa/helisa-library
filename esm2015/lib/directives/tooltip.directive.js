import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
export class HelTooltipDirective {
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
    mouseover() {
        const currentContent = this.elemRef.nativeElement.innerText;
        if (!!currentContent && !!this.message) {
            if ((currentContent.toUpperCase() !== this.message.toString().toUpperCase()) || this.isEllipsisActive(this.elemRef.nativeElement)) {
                this.tooltip.message = this.message;
            }
        }
        this.tooltip.showDelay = this.showDelay;
        this.tooltip.hideDelay = this.hideDelay;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU12RCxNQUFNLE9BQU8sbUJBQW1CO0lBb0I1QixZQUFZLE9BQW1CLEVBQVUsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVg1RDs7V0FFRztRQUNNLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFFakM7O1dBRUc7UUFDTSxjQUFTLEdBQVcsR0FBRyxDQUFDO1FBSS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFMEIsU0FBUztRQUNsQyxNQUFNLGNBQWMsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFFcEUsSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUNqSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUdPLGdCQUFnQixDQUFDLENBQThDO1FBQ3JFLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUE1Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7YUFDMUI7OztZQUxRLFVBQVU7WUFEc0IsVUFBVTs7O3NCQWM5QyxLQUFLLFNBQUMsWUFBWTt3QkFLbEIsS0FBSzt3QkFLTCxLQUFLO3dCQU9MLFlBQVksU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXAgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaGVsVG9vbHRpcF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbTWF0VG9vbHRpcF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlbFRvb2x0aXBEaXJlY3RpdmUge1xyXG5cclxuICAgIHRvb2x0aXA6IE1hdFRvb2x0aXA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZW5zYWplIGEgbW9zdHJhclxyXG4gICAgICovXHJcbiAgICBASW5wdXQoJ2hlbFRvb2x0aXAnKSBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWVtcG8gYW50ZXMgZGUgb2N1bHRhcmxhIGVsIG1lbnNhamVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaGlkZURlbGF5OiBudW1iZXIgPSA2MDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWVtcG8gYW50ZXMgZGUgbW9zdHJhIGVsIG1lbnNhamVcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRvb2x0aXA6IE1hdFRvb2x0aXAsIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZikge1xyXG4gICAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3ZlcicpIG1vdXNlb3ZlcigpOiB2b2lkIHtcclxuICAgICAgY29uc3QgY3VycmVudENvbnRlbnQ6IHN0cmluZyA9IHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcclxuXHJcbiAgICAgIGlmICghIWN1cnJlbnRDb250ZW50ICYmICEhdGhpcy5tZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKChjdXJyZW50Q29udGVudC50b1VwcGVyQ2FzZSgpICE9PSB0aGlzLm1lc3NhZ2UudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpKSB8fCB0aGlzLmlzRWxsaXBzaXNBY3RpdmUodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICB0aGlzLnRvb2x0aXAubWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudG9vbHRpcC5zaG93RGVsYXkgPSAgdGhpcy5zaG93RGVsYXk7XHJcbiAgICAgIHRoaXMudG9vbHRpcC5oaWRlRGVsYXkgPSB0aGlzLmhpZGVEZWxheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpc0VsbGlwc2lzQWN0aXZlKGU6IHtvZmZzZXRXaWR0aDogbnVtYmVyICwgc2Nyb2xsV2lkdGg6IG51bWJlcn0pOiBib29sZWFuIHtcclxuICAgICAgcmV0dXJuIChlLm9mZnNldFdpZHRoIDwgZS5zY3JvbGxXaWR0aCk7XHJcbiAgICB9XHJcbn1cclxuIl19