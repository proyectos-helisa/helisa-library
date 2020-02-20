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
        /**
         * This value would different depends of styles
         */
        this.thresholdPercent = .9;
        this.optionsScroll = new EventEmitter();
        this.destroy = new Subject();
        this.lastScrollTop = 0;
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
                        .addEventListener('scroll', _this.onScroll.bind(_this), false);
                }
            }));
        })), takeUntil(this.destroy)).subscribe();
        this.autoComplete.closed.pipe(tap((/**
         * @return {?}
         */
        function () { return _this.removeScrollEventListener(); })), takeUntil(this.destroy)).subscribe();
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
        this.destroy.next();
        this.destroy.complete();
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
        // Credits: how to know if it's down or up scroll "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        /** @type {?} */
        var st = ((/** @type {?} */ (event.target))).pageYOffset || ((/** @type {?} */ (event.target))).scrollTop;
        if (st > this.lastScrollTop) {
            // downscroll code
            if (this.thresholdPercent === undefined) {
                this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
            }
            else {
                /** @type {?} */
                var threshold = this.thresholdPercent * 100 * ((/** @type {?} */ (event.target))).scrollHeight / 100;
                /** @type {?} */
                var current = ((/** @type {?} */ (event.target))).scrollTop + ((/** @type {?} */ (event.target))).clientHeight;
                // console.log(`scroll ${current}, threshold: ${threshold}`)
                if (current > threshold) {
                    // console.log('load next page');
                    this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
                }
            }
        }
        else {
            // upscroll code
        }
        this.lastScrollTop = st <= 0 ? 0 : st;
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
        optionsScroll: [{ type: Output }]
    };
    return OptionsScrollDirective;
}());
export { OptionsScrollDirective };
if (false) {
    /**
     * This value would different depends of styles
     * @type {?}
     */
    OptionsScrollDirective.prototype.thresholdPercent;
    /** @type {?} */
    OptionsScrollDirective.prototype.optionsScroll;
    /** @type {?} */
    OptionsScrollDirective.prototype.destroy;
    /** @type {?} */
    OptionsScrollDirective.prototype.lastScrollTop;
    /** @type {?} */
    OptionsScrollDirective.prototype.autoComplete;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL29wdGlvbnMtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRy9CLDhDQUdDOzs7SUFGQyxnREFBOEI7O0lBQzlCLCtDQUFtQjs7QUFJckI7SUFhRSxnQ0FBbUIsWUFBNkI7UUFBaEQsaUJBc0JDO1FBdEJrQixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7Ozs7UUFMdkMscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBQzdCLGtCQUFhLEdBQTJDLElBQUksWUFBWSxFQUE0QixDQUFDO1FBQy9HLFlBQU8sR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM3QyxrQkFBYSxHQUFZLENBQUMsQ0FBQztRQUd6QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzNCLEdBQUc7OztRQUFDO1lBQ0YsK0VBQStFO1lBQy9FLGlEQUFpRDtZQUNqRCxrRUFBa0U7WUFDbEUsVUFBVTs7O1lBQUM7Z0JBQ1QsNEVBQTRFO2dCQUM1RSxLQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVk7b0JBQ3JCLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7b0JBQ3pCLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUss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LE1BQU07O0lBbUVULDZCQUFDO0NBQUEsQUE1RUQsSUE0RUM7U0F6RVksc0JBQXNCOzs7Ozs7SUFLakMsa0RBQXVDOztJQUN2QywrQ0FBK0c7O0lBQy9HLHlDQUE2Qzs7SUFDN0MsK0NBQTJCOztJQUVmLDhDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF1dG9Db21wbGV0ZVNjcm9sbEV2ZW50IHtcbiAgYXV0b0NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGU7XG4gIHNjcm9sbEV2ZW50OiBFdmVudDtcbn1cblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtYXV0b2NvbXBsZXRlW29wdGlvbnNTY3JvbGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBPcHRpb25zU2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95ICB7XG5cbiAgLyoqXG4gICAqIFRoaXMgdmFsdWUgd291bGQgZGlmZmVyZW50IGRlcGVuZHMgb2Ygc3R5bGVzXG4gICAqL1xuICBASW5wdXQoKSB0aHJlc2hvbGRQZXJjZW50OiBudW1iZXIgPSAuOTtcbiAgQE91dHB1dCgpIG9wdGlvbnNTY3JvbGw6IEV2ZW50RW1pdHRlcjxJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQ+KCk7XG4gIGRlc3Ryb3k6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBsYXN0U2Nyb2xsVG9wOiBudW1iZXIgID0gMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0b0NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGUpIHtcbiAgICB0aGlzLmF1dG9Db21wbGV0ZS5vcGVuZWQucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIC8vIE5vdGU6IFdoZW4gYXV0b2NvbXBsZXRlIHJhaXNlcyBvcGVuZWQsIHBhbmVsIGlzIG5vdCB5ZXQgY3JlYXRlZCAoYnkgT3ZlcmxheSlcbiAgICAgICAgLy8gTm90ZTogVGhlIHBhbmVsIHdpbGwgYmUgYXZhaWxhYmxlIG9uIG5leHQgdGlja1xuICAgICAgICAvLyBOb3RlOiBUaGUgcGFuZWwgd2lsIE5PVCBvcGVuIGlmIHRoZXJlIGFyZSBubyBvcHRpb25zIHRvIGRpc3BsYXlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gTm90ZTogcmVtb3ZlIGxpc3RuZXIganVzdCBmb3Igc2FmZXR5LCBpbiBjYXNlIHRoZSBjbG9zZSBldmVudCBpcyBza2lwcGVkLlxuICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICAgIGlmICghIXRoaXMuYXV0b0NvbXBsZXRlICYmXG4gICAgICAgICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsICYmXG4gICAgICAgICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudFxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kpKS5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuYXV0b0NvbXBsZXRlLmNsb3NlZC5waXBlKFxuICAgICAgdGFwKCgpID0+IHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kpKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBpZiAoISF0aGlzLmF1dG9Db21wbGV0ZSAmJlxuICAgICAgISF0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbCAmJlxuICAgICAgISF0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudFxuICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95LmNvbXBsZXRlKCk7XG5cbiAgICB0aGlzLnJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXIoKTtcbiAgfVxuXG5cbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgLy8gQ3JlZGl0czogaG93IHRvIGtub3cgaWYgaXQncyBkb3duIG9yIHVwIHNjcm9sbCBcImh0dHBzOi8vZ2l0aHViLmNvbS9xZXJlbXkvc28vYmxvYi9tYXN0ZXIvc28uZG9tLmpzI0w0MjZcIlxuICAgIGNvbnN0IHN0OiBudW1iZXIgPSAoZXZlbnQudGFyZ2V0IGFzIFdpbmRvdykucGFnZVlPZmZzZXQgfHwgKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5zY3JvbGxUb3A7XG4gICAgaWYgKHN0ID4gdGhpcy5sYXN0U2Nyb2xsVG9wKSB7XG4gICAgICAgLy8gZG93bnNjcm9sbCBjb2RlXG4gICAgICAgaWYgKHRoaXMudGhyZXNob2xkUGVyY2VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1Njcm9sbC5uZXh0KHsgYXV0b0NvbXBsZXRlOiB0aGlzLmF1dG9Db21wbGV0ZSwgc2Nyb2xsRXZlbnQ6IGV2ZW50IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkOiBudW1iZXIgPSB0aGlzLnRocmVzaG9sZFBlcmNlbnQgKiAxMDAgKiAoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLnNjcm9sbEhlaWdodCAvIDEwMDtcbiAgICAgICAgY29uc3QgY3VycmVudDogbnVtYmVyID0gKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5zY3JvbGxUb3AgKyAoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLmNsaWVudEhlaWdodDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHNjcm9sbCAke2N1cnJlbnR9LCB0aHJlc2hvbGQ6ICR7dGhyZXNob2xkfWApXG4gICAgICAgIGlmIChjdXJyZW50ID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xvYWQgbmV4dCBwYWdlJyk7XG4gICAgICAgICAgdGhpcy5vcHRpb25zU2Nyb2xsLm5leHQoeyBhdXRvQ29tcGxldGU6IHRoaXMuYXV0b0NvbXBsZXRlLCBzY3JvbGxFdmVudDogZXZlbnQgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgIC8vIHVwc2Nyb2xsIGNvZGVcbiAgICB9XG4gICAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gc3QgPD0gMCA/IDAgOiBzdDtcbiAgfVxuXG59XG4iXX0=