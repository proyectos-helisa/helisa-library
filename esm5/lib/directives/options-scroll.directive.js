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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL29wdGlvbnMtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRy9CLDhDQUdDOzs7SUFGQyxnREFBOEI7O0lBQzlCLCtDQUFtQjs7QUFJckI7SUFhRSxnQ0FBbUIsWUFBNkI7UUFBaEQsaUJBc0JDO1FBdEJrQixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7Ozs7UUFMdkMscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBQzdCLGtCQUFhLEdBQTJDLElBQUksWUFBWSxFQUE0QixDQUFDO1FBQy9HLFlBQU8sR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM3QyxrQkFBYSxHQUFZLENBQUMsQ0FBQztRQUd6QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzNCLEdBQUc7OztRQUFDO1lBQ0YsK0VBQStFO1lBQy9FLGlEQUFpRDtZQUNqRCxrRUFBa0U7WUFDbEUsVUFBVTs7O1lBQUM7Z0JBQ1QsNEVBQTRFO2dCQUM1RSxLQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVk7b0JBQ3JCLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7b0JBQ3pCLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUss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LE1BQU07O0lBbUVULDZCQUFDO0NBQUEsQUE1RUQsSUE0RUM7U0F6RVksc0JBQXNCOzs7Ozs7SUFLakMsa0RBQXVDOztJQUN2QywrQ0FBK0c7O0lBQy9HLHlDQUE2Qzs7SUFDN0MsK0NBQTJCOztJQUVmLDhDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUF1dG9Db21wbGV0ZVNjcm9sbEV2ZW50IHtcclxuICBhdXRvQ29tcGxldGU6IE1hdEF1dG9jb21wbGV0ZTtcclxuICBzY3JvbGxFdmVudDogRXZlbnQ7XHJcbn1cclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ21hdC1hdXRvY29tcGxldGVbb3B0aW9uc1Njcm9sbF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25zU2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95ICB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgdmFsdWUgd291bGQgZGlmZmVyZW50IGRlcGVuZHMgb2Ygc3R5bGVzXHJcbiAgICovXHJcbiAgQElucHV0KCkgdGhyZXNob2xkUGVyY2VudDogbnVtYmVyID0gLjk7XHJcbiAgQE91dHB1dCgpIG9wdGlvbnNTY3JvbGw6IEV2ZW50RW1pdHRlcjxJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQ+KCk7XHJcbiAgZGVzdHJveTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgbGFzdFNjcm9sbFRvcDogbnVtYmVyICA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRvQ29tcGxldGU6IE1hdEF1dG9jb21wbGV0ZSkge1xyXG4gICAgdGhpcy5hdXRvQ29tcGxldGUub3BlbmVkLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB7XHJcbiAgICAgICAgLy8gTm90ZTogV2hlbiBhdXRvY29tcGxldGUgcmFpc2VzIG9wZW5lZCwgcGFuZWwgaXMgbm90IHlldCBjcmVhdGVkIChieSBPdmVybGF5KVxyXG4gICAgICAgIC8vIE5vdGU6IFRoZSBwYW5lbCB3aWxsIGJlIGF2YWlsYWJsZSBvbiBuZXh0IHRpY2tcclxuICAgICAgICAvLyBOb3RlOiBUaGUgcGFuZWwgd2lsIE5PVCBvcGVuIGlmIHRoZXJlIGFyZSBubyBvcHRpb25zIHRvIGRpc3BsYXlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIC8vIE5vdGU6IHJlbW92ZSBsaXN0bmVyIGp1c3QgZm9yIHNhZmV0eSwgaW4gY2FzZSB0aGUgY2xvc2UgZXZlbnQgaXMgc2tpcHBlZC5cclxuICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgaWYgKCEhdGhpcy5hdXRvQ29tcGxldGUgJiZcclxuICAgICAgICAgICAgISF0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbCAmJlxyXG4gICAgICAgICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kpKS5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICB0aGlzLmF1dG9Db21wbGV0ZS5jbG9zZWQucGlwZShcclxuICAgICAgdGFwKCgpID0+IHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpKSxcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSkpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgaWYgKCEhdGhpcy5hdXRvQ29tcGxldGUgJiZcclxuICAgICAgISF0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbCAmJlxyXG4gICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgIHRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95LmNvbXBsZXRlKCk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBDcmVkaXRzOiBob3cgdG8ga25vdyBpZiBpdCdzIGRvd24gb3IgdXAgc2Nyb2xsIFwiaHR0cHM6Ly9naXRodWIuY29tL3FlcmVteS9zby9ibG9iL21hc3Rlci9zby5kb20uanMjTDQyNlwiXHJcbiAgICBjb25zdCBzdDogbnVtYmVyID0gKGV2ZW50LnRhcmdldCBhcyBXaW5kb3cpLnBhZ2VZT2Zmc2V0IHx8IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuc2Nyb2xsVG9wO1xyXG4gICAgaWYgKHN0ID4gdGhpcy5sYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgICAvLyBkb3duc2Nyb2xsIGNvZGVcclxuICAgICAgIGlmICh0aGlzLnRocmVzaG9sZFBlcmNlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9uc1Njcm9sbC5uZXh0KHsgYXV0b0NvbXBsZXRlOiB0aGlzLmF1dG9Db21wbGV0ZSwgc2Nyb2xsRXZlbnQ6IGV2ZW50IH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZDogbnVtYmVyID0gdGhpcy50aHJlc2hvbGRQZXJjZW50ICogMTAwICogKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5zY3JvbGxIZWlnaHQgLyAxMDA7XHJcbiAgICAgICAgY29uc3QgY3VycmVudDogbnVtYmVyID0gKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5zY3JvbGxUb3AgKyAoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLmNsaWVudEhlaWdodDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2Nyb2xsICR7Y3VycmVudH0sIHRocmVzaG9sZDogJHt0aHJlc2hvbGR9YClcclxuICAgICAgICBpZiAoY3VycmVudCA+IHRocmVzaG9sZCkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xvYWQgbmV4dCBwYWdlJyk7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnNTY3JvbGwubmV4dCh7IGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvQ29tcGxldGUsIHNjcm9sbEV2ZW50OiBldmVudCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAvLyB1cHNjcm9sbCBjb2RlXHJcbiAgICB9XHJcbiAgICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBzdCA8PSAwID8gMCA6IHN0O1xyXG4gIH1cclxuXHJcbn1cclxuIl19