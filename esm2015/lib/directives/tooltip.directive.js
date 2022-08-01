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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU12RCxNQUFNLE9BQU8sbUJBQW1CO0lBb0I1QixZQUFZLE9BQW1CLEVBQVUsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVg1RDs7V0FFRztRQUNNLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFFakM7O1dBRUc7UUFDTSxjQUFTLEdBQVcsR0FBRyxDQUFDO1FBSS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFMEIsU0FBUztRQUNsQyxNQUFNLGNBQWMsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFFcEUsSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUNqSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUdPLGdCQUFnQixDQUFDLENBQThDO1FBQ3JFLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUE1Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7YUFDMUI7OztZQUxRLFVBQVU7WUFEc0IsVUFBVTs7O3NCQWM5QyxLQUFLLFNBQUMsWUFBWTt3QkFLbEIsS0FBSzt3QkFLTCxLQUFLO3dCQU9MLFlBQVksU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRUb29sdGlwIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2hlbFRvb2x0aXBdJyxcbiAgICBwcm92aWRlcnM6IFtNYXRUb29sdGlwXVxufSlcbmV4cG9ydCBjbGFzcyBIZWxUb29sdGlwRGlyZWN0aXZlIHtcblxuICAgIHRvb2x0aXA6IE1hdFRvb2x0aXA7XG5cbiAgICAvKipcbiAgICAgKiBNZW5zYWplIGEgbW9zdHJhclxuICAgICAqL1xuICAgIEBJbnB1dCgnaGVsVG9vbHRpcCcpIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRpZW1wbyBhbnRlcyBkZSBvY3VsdGFybGEgZWwgbWVuc2FqZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIGhpZGVEZWxheTogbnVtYmVyID0gNjAwO1xuXG4gICAgLyoqXG4gICAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplXG4gICAgICovXG4gICAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XG5cblxuICAgIGNvbnN0cnVjdG9yKHRvb2x0aXA6IE1hdFRvb2x0aXAsIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy50b29sdGlwID0gdG9vbHRpcDtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKSBtb3VzZW92ZXIoKTogdm9pZCB7XG4gICAgICBjb25zdCBjdXJyZW50Q29udGVudDogc3RyaW5nID0gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xuXG4gICAgICBpZiAoISFjdXJyZW50Q29udGVudCAmJiAhIXRoaXMubWVzc2FnZSkge1xuICAgICAgICBpZiAoKGN1cnJlbnRDb250ZW50LnRvVXBwZXJDYXNlKCkgIT09IHRoaXMubWVzc2FnZS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkpIHx8IHRoaXMuaXNFbGxpcHNpc0FjdGl2ZSh0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAubWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRvb2x0aXAuc2hvd0RlbGF5ID0gIHRoaXMuc2hvd0RlbGF5O1xuICAgICAgdGhpcy50b29sdGlwLmhpZGVEZWxheSA9IHRoaXMuaGlkZURlbGF5O1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBpc0VsbGlwc2lzQWN0aXZlKGU6IHtvZmZzZXRXaWR0aDogbnVtYmVyICwgc2Nyb2xsV2lkdGg6IG51bWJlcn0pOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoZS5vZmZzZXRXaWR0aCA8IGUuc2Nyb2xsV2lkdGgpO1xuICAgIH1cbn1cbiJdfQ==