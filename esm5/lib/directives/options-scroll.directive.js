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
        this.scroll = new EventEmitter();
        this._onDestroy = new Subject();
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
        /** @type {?} */
        var st = event.target.pageYOffset || event.target.scrollTop;
        if (st > this.lastScrollTop) {
            // downscroll code       
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
        scroll: [{ type: Output, args: ['optionsScroll',] }]
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
    OptionsScrollDirective.prototype.scroll;
    /** @type {?} */
    OptionsScrollDirective.prototype._onDestroy;
    /** @type {?} */
    OptionsScrollDirective.prototype.lastScrollTop;
    /** @type {?} */
    OptionsScrollDirective.prototype.autoComplete;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL29wdGlvbnMtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRy9CLDhDQUdDOzs7SUFGQyxnREFBOEI7O0lBQzlCLCtDQUFtQjs7QUFJckI7SUFhRSxnQ0FBbUIsWUFBNkI7UUFBaEQsaUJBc0JDO1FBdEJrQixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7Ozs7UUFMdkMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ04sV0FBTSxHQUFHLElBQUksWUFBWSxFQUE0QixDQUFDO1FBQy9FLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBMkMzQixrQkFBYSxHQUFJLENBQUMsQ0FBQztRQXZDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMzQixHQUFHOzs7UUFBQztZQUNGLCtFQUErRTtZQUMvRSxpREFBaUQ7WUFDakQsa0VBQWtFO1lBQ2xFLFVBQVU7OztZQUFDO2dCQUNULDRFQUE0RTtnQkFDNUUsS0FBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7Z0JBQ2pDLElBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZO29CQUNwQixDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO29CQUN6QixDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENB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QTJDM0IsK0NBQW1COztJQXhDUCw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQge1xuICBhdXRvQ29tcGxldGU6IE1hdEF1dG9jb21wbGV0ZTtcbiAgc2Nyb2xsRXZlbnQ6IEV2ZW50O1xufVxuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1hdXRvY29tcGxldGVbb3B0aW9uc1Njcm9sbF0nXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNTY3JvbGxEaXJlY3RpdmUgIHtcblxuICAvKipcbiAgICogVGhpcyB2YWx1ZSB3b3VsZCBkaWZmZXJlbnQgZGVwZW5kcyBvZiBzdHlsZXNcbiAgICovXG4gIEBJbnB1dCgpIHRocmVzaG9sZFBlcmNlbnQgPSAuOTtcbiAgQE91dHB1dCgnb3B0aW9uc1Njcm9sbCcpIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8SUF1dG9Db21wbGV0ZVNjcm9sbEV2ZW50PigpO1xuICBfb25EZXN0cm95ID0gbmV3IFN1YmplY3QoKTtcbiAgICBcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0b0NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGUpIHtcbiAgICB0aGlzLmF1dG9Db21wbGV0ZS5vcGVuZWQucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIC8vIE5vdGU6IFdoZW4gYXV0b2NvbXBsZXRlIHJhaXNlcyBvcGVuZWQsIHBhbmVsIGlzIG5vdCB5ZXQgY3JlYXRlZCAoYnkgT3ZlcmxheSlcbiAgICAgICAgLy8gTm90ZTogVGhlIHBhbmVsIHdpbGwgYmUgYXZhaWxhYmxlIG9uIG5leHQgdGlja1xuICAgICAgICAvLyBOb3RlOiBUaGUgcGFuZWwgd2lsIE5PVCBvcGVuIGlmIHRoZXJlIGFyZSBubyBvcHRpb25zIHRvIGRpc3BsYXlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gTm90ZTogcmVtb3ZlIGxpc3RuZXIganVzdCBmb3Igc2FmZXR5LCBpbiBjYXNlIHRoZSBjbG9zZSBldmVudCBpcyBza2lwcGVkLlxuICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICAgIGlmKCEhdGhpcy5hdXRvQ29tcGxldGUgJiZcbiAgICAgICAgICAgICEhdGhpcy5hdXRvQ29tcGxldGUucGFuZWwgJiZcbiAgICAgICAgICAgICEhdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudCl7XG4gICAgICAgICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpLGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5hdXRvQ29tcGxldGUuY2xvc2VkLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCkpLFxuICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCkge1xuICAgIGlmKCEhdGhpcy5hdXRvQ29tcGxldGUgJiZcbiAgICAgICEhdGhpcy5hdXRvQ29tcGxldGUucGFuZWwgJiZcbiAgICAgICEhdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudCl7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudFxuICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XG5cbiAgICB0aGlzLnJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXIoKTtcbiAgfVxuXG4gIGxhc3RTY3JvbGxUb3AgID0gMDtcbiAgb25TY3JvbGwoZXZlbnQ6IGFueSkge1xuXG4gICAgdmFyIHN0ID0gZXZlbnQudGFyZ2V0LnBhZ2VZT2Zmc2V0IHx8IGV2ZW50LnRhcmdldC5zY3JvbGxUb3A7IC8vIENyZWRpdHM6IGhvdyB0byBrbm93IGlmIGl0J3MgZG93biBvciB1cCBzY3JvbGwgXCJodHRwczovL2dpdGh1Yi5jb20vcWVyZW15L3NvL2Jsb2IvbWFzdGVyL3NvLmRvbS5qcyNMNDI2XCJcbiAgICBpZiAoc3QgPiB0aGlzLmxhc3RTY3JvbGxUb3Ape1xuICAgICAgIC8vIGRvd25zY3JvbGwgY29kZSAgICAgICBcbiAgICAgICBpZiAodGhpcy50aHJlc2hvbGRQZXJjZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGwubmV4dCh7IGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvQ29tcGxldGUsIHNjcm9sbEV2ZW50OiBldmVudCB9KTtcbiAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkUGVyY2VudCAqIDEwMCAqIGV2ZW50LnRhcmdldC5zY3JvbGxIZWlnaHQgLyAxMDA7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wICsgZXZlbnQudGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgc2Nyb2xsICR7Y3VycmVudH0sIHRocmVzaG9sZDogJHt0aHJlc2hvbGR9YCkgICAgIFxuICAgICAgICBpZiAoY3VycmVudCA+IHRocmVzaG9sZCkgeyBcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdsb2FkIG5leHQgcGFnZScpOyAgICAgICAgXG4gICAgICAgICAgdGhpcy5zY3JvbGwubmV4dCh7IGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvQ29tcGxldGUsIHNjcm9sbEV2ZW50OiBldmVudCB9KTtcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgLy8gdXBzY3JvbGwgY29kZSAgICAgICBcbiAgICB9XG4gICAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gc3QgPD0gMCA/IDAgOiBzdDsgIFxuICB9XG4gIFxufSJdfQ==