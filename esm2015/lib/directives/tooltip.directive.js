import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/tooltip';
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
HelTooltipDirective.ɵfac = function HelTooltipDirective_Factory(t) { return new (t || HelTooltipDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MatTooltip), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
HelTooltipDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: HelTooltipDirective, selectors: [["", "helTooltip", ""]], hostBindings: function HelTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseover", function HelTooltipDirective_mouseover_HostBindingHandler() { return ctx.mouseover(); });
    } }, inputs: { hideDelay: "hideDelay", showDelay: "showDelay", message: ["helTooltip", "message"] }, features: [ɵngcc0.ɵɵProvidersFeature([MatTooltip])] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HelTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[helTooltip]',
                providers: [MatTooltip]
            }]
    }], function () { return [{ type: ɵngcc1.MatTooltip }, { type: ɵngcc0.ElementRef }]; }, { hideDelay: [{
            type: Input
        }], showDelay: [{
            type: Input
        }], mouseover: [{
            type: HostListener,
            args: ['mouseover']
        }], message: [{
            type: Input,
            args: ['helTooltip']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjL2xpYi9kaXJlY3RpdmVzL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFNdkQsTUFBTSxPQUFPLG1CQUFtQjtBQUNoQyxJQW1CSSxZQUFZLE9BQW1CLEVBQVUsT0FBbUI7QUFDaEUsUUFENkMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtBQUFDLFFBWDdEO0FBQ0o7QUFDSSxXQUFHO0FBQ1AsUUFBYSxjQUFTLEdBQVcsR0FBRyxDQUFDO0FBQ3JDLFFBQ0k7QUFDSjtBQUNJLFdBQUc7QUFDUCxRQUFhLGNBQVMsR0FBVyxHQUFHLENBQUM7QUFDckMsUUFHTSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUM3QixJQUFJLENBQUM7QUFDTCxJQUMrQixTQUFTO0FBQUssUUFDdkMsTUFBTSxjQUFjLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0FBQzFFLFFBQ00sSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQzlDLFlBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDM0ksZ0JBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUM5QyxhQUFTO0FBQ1QsU0FBTztBQUNQLFFBQ00sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMvQyxRQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDOUMsSUFBSSxDQUFDO0FBQ0wsSUFFWSxnQkFBZ0IsQ0FBQyxDQUE4QztBQUFJLFFBQ3pFLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM3QyxJQUFJLENBQUM7QUFDTDsrQ0E3Q0MsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRSxjQUFjLGtCQUN4QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsY0FDMUI7OztnS0FDSTtBQUFDO0FBRVMsWUFSTixVQUFVO0FBQUksWUFEa0IsVUFBVTtBQUFHO0FBQUc7QUFDckMsc0JBYWYsS0FBSyxTQUFDLFlBQVk7QUFBTyx3QkFLekIsS0FBSztBQUFLLHdCQUtWLEtBQUs7QUFBSyx3QkFPVixZQUFZLFNBQUMsV0FBVztBQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRUb29sdGlwIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2hlbFRvb2x0aXBdJyxcbiAgICBwcm92aWRlcnM6IFtNYXRUb29sdGlwXVxufSlcbmV4cG9ydCBjbGFzcyBIZWxUb29sdGlwRGlyZWN0aXZlIHtcblxuICAgIHRvb2x0aXA6IE1hdFRvb2x0aXA7XG5cbiAgICAvKipcbiAgICAgKiBNZW5zYWplIGEgbW9zdHJhclxuICAgICAqL1xuICAgIEBJbnB1dCgnaGVsVG9vbHRpcCcpIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRpZW1wbyBhbnRlcyBkZSBvY3VsdGFybGEgZWwgbWVuc2FqZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIGhpZGVEZWxheTogbnVtYmVyID0gNjAwO1xuXG4gICAgLyoqXG4gICAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplXG4gICAgICovXG4gICAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSA1MDA7XG5cblxuICAgIGNvbnN0cnVjdG9yKHRvb2x0aXA6IE1hdFRvb2x0aXAsIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy50b29sdGlwID0gdG9vbHRpcDtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKSBtb3VzZW92ZXIoKTogdm9pZCB7XG4gICAgICBjb25zdCBjdXJyZW50Q29udGVudDogc3RyaW5nID0gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xuXG4gICAgICBpZiAoISFjdXJyZW50Q29udGVudCAmJiAhIXRoaXMubWVzc2FnZSkge1xuICAgICAgICBpZiAoKGN1cnJlbnRDb250ZW50LnRvVXBwZXJDYXNlKCkgIT09IHRoaXMubWVzc2FnZS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkpIHx8IHRoaXMuaXNFbGxpcHNpc0FjdGl2ZSh0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAubWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRvb2x0aXAuc2hvd0RlbGF5ID0gIHRoaXMuc2hvd0RlbGF5O1xuICAgICAgdGhpcy50b29sdGlwLmhpZGVEZWxheSA9IHRoaXMuaGlkZURlbGF5O1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBpc0VsbGlwc2lzQWN0aXZlKGU6IHtvZmZzZXRXaWR0aDogbnVtYmVyICwgc2Nyb2xsV2lkdGg6IG51bWJlcn0pOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoZS5vZmZzZXRXaWR0aCA8IGUuc2Nyb2xsV2lkdGgpO1xuICAgIH1cbn1cbiJdfQ==