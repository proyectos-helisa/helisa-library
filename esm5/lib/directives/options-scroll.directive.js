/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { MatAutocomplete } from '@angular/material';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
/**
 * @record
 */
export function IAutoCompleteScrollEvent() { }
if (false) {
    /** @type {?} */
    IAutoCompleteScrollEvent.prototype.autoComplete;
    /** @type {?} */
    IAutoCompleteScrollEvent.prototype.scrollEvent;
}
var OptionsScrollDirective = /** @class */ (function () {
    function OptionsScrollDirective(autoComplete) {
        var _this = this;
        this.autoComplete = autoComplete;
        this.thresholdPercent = .8;
        this.scroll = new EventEmitter();
        this._onDestroy = new Subject();
        this.autoComplete.opened.pipe(tap((/**
         * @return {?}
         */
        function () {
            // Note: When autocomplete raises opened, panel is not yet created (by Overlay)
            // Note: The panel will be available on next tick
            // Note: The panel wil NOT open if there are no options to display
            setTimeout((/**
             * @return {?}
             */
            function () {
                // Note: remove listner just for safety, in case the close event is skipped.
                _this.removeScrollEventListener();
                if (!!_this.autoComplete &&
                    !!_this.autoComplete.panel &&
                    !!_this.autoComplete.panel.nativeElement) {
                    _this.autoComplete.panel.nativeElement
                        .addEventListener('scroll', _this.onScroll.bind(_this));
                }
            }));
        })), takeUntil(this._onDestroy)).subscribe();
        this.autoComplete.closed.pipe(tap((/**
         * @return {?}
         */
        function () { return _this.removeScrollEventListener(); })), takeUntil(this._onDestroy)).subscribe();
    }
    /**
     * @private
     * @return {?}
     */
    OptionsScrollDirective.prototype.removeScrollEventListener = /**
     * @private
     * @return {?}
     */
    function () {
        if (!!this.autoComplete &&
            !!this.autoComplete.panel &&
            !!this.autoComplete.panel.nativeElement) {
            this.autoComplete.panel.nativeElement
                .removeEventListener('scroll', this.onScroll);
        }
    };
    /**
     * @return {?}
     */
    OptionsScrollDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._onDestroy.next();
        this._onDestroy.complete();
        this.removeScrollEventListener();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    OptionsScrollDirective.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.thresholdPercent === undefined) {
            this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
        }
        else {
            /** @type {?} */
            var threshold = this.thresholdPercent * 100 * event.target.scrollHeight / 100;
            /** @type {?} */
            var current = event.target.scrollTop + event.target.clientHeight;
            //console.log(`scroll ${current}, threshold: ${threshold}`)
            if (current > threshold) {
                //console.log('load next page');
                this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
            }
        }
    };
    OptionsScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mat-autocomplete[optionsScroll]'
                },] }
    ];
    /** @nocollapse */
    OptionsScrollDirective.ctorParameters = function () { return [
        { type: MatAutocomplete }
    ]; };
    OptionsScrollDirective.propDecorators = {
        thresholdPercent: [{ type: Input }],
        scroll: [{ type: Output, args: ['optionsScroll',] }]
    };
    return OptionsScrollDirective;
}());
export { OptionsScrollDirective };
if (false) {
    /** @type {?} */
    OptionsScrollDirective.prototype.thresholdPercent;
    /** @type {?} */
    OptionsScrollDirective.prototype.scroll;
    /** @type {?} */
    OptionsScrollDirective.prototype._onDestroy;
    /** @type {?} */
    OptionsScrollDirective.prototype.autoComplete;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL29wdGlvbnMtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBbUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDcEYsT0FBTyxFQUFZLFNBQVMsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQVksT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDOzs7O0FBR3RELDhDQUdDOzs7SUFGQyxnREFBOEI7O0lBQzlCLCtDQUFtQjs7QUFJckI7SUFTRSxnQ0FBbUIsWUFBNkI7UUFBaEQsaUJBc0JDO1FBdEJrQixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFKdkMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ04sV0FBTSxHQUFHLElBQUksWUFBWSxFQUE0QixDQUFDO1FBQy9FLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR3pCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDM0IsR0FBRzs7O1FBQUM7WUFDRiwrRUFBK0U7WUFDL0UsaURBQWlEO1lBQ2pELGtFQUFrRTtZQUNsRSxVQUFVOzs7WUFBQztnQkFDVCw0RUFBNEU7Z0JBQzVFLEtBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dCQUNqQyxJQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWTtvQkFDcEIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSztvQkFDekIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBQztvQkFDdEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYTt5QkFDbEMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUE7aUJBQ3hEO1lBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsRUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMzQixHQUFHOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLHlCQUF5QixFQUFFLEVBQWhDLENBQWdDLEVBQUMsRUFDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRU8sMERBQXlCOzs7O0lBQWpDO1FBQ0UsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSztZQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWE7aUJBQ2xDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQseUNBQVE7Ozs7SUFBUixVQUFTLEtBQVU7UUFFakIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDM0U7YUFBTTs7Z0JBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRzs7Z0JBQ3pFLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVk7WUFFbEUsMkRBQTJEO1lBQzNELElBQUksT0FBTyxHQUFHLFNBQVMsRUFBRTtnQkFDdkIsZ0NBQWdDO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQzNFO1NBQ0Y7SUFDSCxDQUFDOztnQkEvREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7aUJBQzVDOzs7O2dCQWJ5QyxlQUFlOzs7bUNBZ0J0RCxLQUFLO3lCQUNMLE1BQU0sU0FBQyxlQUFlOztJQTJEekIsNkJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQTlEWSxzQkFBc0I7OztJQUVqQyxrREFBK0I7O0lBQy9CLHdDQUErRTs7SUFDL0UsNENBQTJCOztJQUVmLDhDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRTZWxlY3QsIFNFTEVDVF9JVEVNX0hFSUdIVF9FTSwgTWF0QXV0b2NvbXBsZXRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7YXVkaXRUaW1lLCB0YWtlVW50aWwsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge2Zyb21FdmVudCwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBdXRvQ29tcGxldGVTY3JvbGxFdmVudCB7XHJcbiAgYXV0b0NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGU7XHJcbiAgc2Nyb2xsRXZlbnQ6IEV2ZW50O1xyXG59XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtYXV0b2NvbXBsZXRlW29wdGlvbnNTY3JvbGxdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3B0aW9uc1Njcm9sbERpcmVjdGl2ZSAge1xyXG5cclxuICBASW5wdXQoKSB0aHJlc2hvbGRQZXJjZW50ID0gLjg7XHJcbiAgQE91dHB1dCgnb3B0aW9uc1Njcm9sbCcpIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8SUF1dG9Db21wbGV0ZVNjcm9sbEV2ZW50PigpO1xyXG4gIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0b0NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGUpIHtcclxuICAgIHRoaXMuYXV0b0NvbXBsZXRlLm9wZW5lZC5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIC8vIE5vdGU6IFdoZW4gYXV0b2NvbXBsZXRlIHJhaXNlcyBvcGVuZWQsIHBhbmVsIGlzIG5vdCB5ZXQgY3JlYXRlZCAoYnkgT3ZlcmxheSlcclxuICAgICAgICAvLyBOb3RlOiBUaGUgcGFuZWwgd2lsbCBiZSBhdmFpbGFibGUgb24gbmV4dCB0aWNrXHJcbiAgICAgICAgLy8gTm90ZTogVGhlIHBhbmVsIHdpbCBOT1Qgb3BlbiBpZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyB0byBkaXNwbGF5XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAvLyBOb3RlOiByZW1vdmUgbGlzdG5lciBqdXN0IGZvciBzYWZldHksIGluIGNhc2UgdGhlIGNsb3NlIGV2ZW50IGlzIHNraXBwZWQuXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICAgIGlmKCEhdGhpcy5hdXRvQ29tcGxldGUgJiZcclxuICAgICAgICAgICAgISF0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbCAmJlxyXG4gICAgICAgICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICB0aGlzLmF1dG9Db21wbGV0ZS5jbG9zZWQucGlwZShcclxuICAgICAgdGFwKCgpID0+IHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpKSxcclxuICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCkge1xyXG4gICAgaWYoISF0aGlzLmF1dG9Db21wbGV0ZSAmJlxyXG4gICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsICYmXHJcbiAgICAgICEhdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudCl7XHJcbiAgICB0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50XHJcbiAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fb25EZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuX29uRGVzdHJveS5jb21wbGV0ZSgpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIGlmICh0aGlzLnRocmVzaG9sZFBlcmNlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnNjcm9sbC5uZXh0KHsgYXV0b0NvbXBsZXRlOiB0aGlzLmF1dG9Db21wbGV0ZSwgc2Nyb2xsRXZlbnQ6IGV2ZW50IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy50aHJlc2hvbGRQZXJjZW50ICogMTAwICogZXZlbnQudGFyZ2V0LnNjcm9sbEhlaWdodCAvIDEwMDtcclxuICAgICAgY29uc3QgY3VycmVudCA9IGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgKyBldmVudC50YXJnZXQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgLy9jb25zb2xlLmxvZyhgc2Nyb2xsICR7Y3VycmVudH0sIHRocmVzaG9sZDogJHt0aHJlc2hvbGR9YClcclxuICAgICAgaWYgKGN1cnJlbnQgPiB0aHJlc2hvbGQpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdsb2FkIG5leHQgcGFnZScpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLm5leHQoeyBhdXRvQ29tcGxldGU6IHRoaXMuYXV0b0NvbXBsZXRlLCBzY3JvbGxFdmVudDogZXZlbnQgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbn0iXX0=