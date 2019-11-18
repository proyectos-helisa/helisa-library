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
export class OptionsScrollDirective {
    /**
     * @param {?} autoComplete
     */
    constructor(autoComplete) {
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
        () => {
            // Note: When autocomplete raises opened, panel is not yet created (by Overlay)
            // Note: The panel will be available on next tick
            // Note: The panel wil NOT open if there are no options to display
            setTimeout((/**
             * @return {?}
             */
            () => {
                // Note: remove listner just for safety, in case the close event is skipped.
                this.removeScrollEventListener();
                if (!!this.autoComplete &&
                    !!this.autoComplete.panel &&
                    !!this.autoComplete.panel.nativeElement) {
                    this.autoComplete.panel.nativeElement
                        .addEventListener('scroll', this.onScroll.bind(this), false);
                }
            }));
        })), takeUntil(this._onDestroy)).subscribe();
        this.autoComplete.closed.pipe(tap((/**
         * @return {?}
         */
        () => this.removeScrollEventListener())), takeUntil(this._onDestroy)).subscribe();
    }
    /**
     * @private
     * @return {?}
     */
    removeScrollEventListener() {
        if (!!this.autoComplete &&
            !!this.autoComplete.panel &&
            !!this.autoComplete.panel.nativeElement) {
            this.autoComplete.panel.nativeElement
                .removeEventListener('scroll', this.onScroll);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
        this.removeScrollEventListener();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        /** @type {?} */
        var st = event.target.pageYOffset || event.target.scrollTop;
        if (st > this.lastScrollTop) {
            // downscroll code       
            if (this.thresholdPercent === undefined) {
                this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
            }
            else {
                /** @type {?} */
                const threshold = this.thresholdPercent * 100 * event.target.scrollHeight / 100;
                /** @type {?} */
                const current = event.target.scrollTop + event.target.clientHeight;
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
    }
}
OptionsScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: 'mat-autocomplete[optionsScroll]'
            },] }
];
/** @nocollapse */
OptionsScrollDirective.ctorParameters = () => [
    { type: MatAutocomplete }
];
OptionsScrollDirective.propDecorators = {
    thresholdPercent: [{ type: Input }],
    scroll: [{ type: Output, args: ['optionsScroll',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL29wdGlvbnMtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRy9CLDhDQUdDOzs7SUFGQyxnREFBOEI7O0lBQzlCLCtDQUFtQjs7QUFPckIsTUFBTSxPQUFPLHNCQUFzQjs7OztJQVVqQyxZQUFtQixZQUE2QjtRQUE3QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7Ozs7UUFMdkMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ04sV0FBTSxHQUFHLElBQUksWUFBWSxFQUE0QixDQUFDO1FBQy9FLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBMkMzQixrQkFBYSxHQUFJLENBQUMsQ0FBQztRQXZDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMzQixHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDUCwrRUFBK0U7WUFDL0UsaURBQWlEO1lBQ2pELGtFQUFrRTtZQUNsRSxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsNEVBQTRFO2dCQUM1RSxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztnQkFDakMsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7b0JBQ3pCLENBQUMsQ0FBQyxJ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cnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQge1xyXG4gIGF1dG9Db21wbGV0ZTogTWF0QXV0b2NvbXBsZXRlO1xyXG4gIHNjcm9sbEV2ZW50OiBFdmVudDtcclxufVxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWF1dG9jb21wbGV0ZVtvcHRpb25zU2Nyb2xsXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9wdGlvbnNTY3JvbGxEaXJlY3RpdmUgIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyB2YWx1ZSB3b3VsZCBkaWZmZXJlbnQgZGVwZW5kcyBvZiBzdHlsZXNcclxuICAgKi9cclxuICBASW5wdXQoKSB0aHJlc2hvbGRQZXJjZW50ID0gLjk7XHJcbiAgQE91dHB1dCgnb3B0aW9uc1Njcm9sbCcpIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8SUF1dG9Db21wbGV0ZVNjcm9sbEV2ZW50PigpO1xyXG4gIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRvQ29tcGxldGU6IE1hdEF1dG9jb21wbGV0ZSkge1xyXG4gICAgdGhpcy5hdXRvQ29tcGxldGUub3BlbmVkLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB7XHJcbiAgICAgICAgLy8gTm90ZTogV2hlbiBhdXRvY29tcGxldGUgcmFpc2VzIG9wZW5lZCwgcGFuZWwgaXMgbm90IHlldCBjcmVhdGVkIChieSBPdmVybGF5KVxyXG4gICAgICAgIC8vIE5vdGU6IFRoZSBwYW5lbCB3aWxsIGJlIGF2YWlsYWJsZSBvbiBuZXh0IHRpY2tcclxuICAgICAgICAvLyBOb3RlOiBUaGUgcGFuZWwgd2lsIE5PVCBvcGVuIGlmIHRoZXJlIGFyZSBubyBvcHRpb25zIHRvIGRpc3BsYXlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIC8vIE5vdGU6IHJlbW92ZSBsaXN0bmVyIGp1c3QgZm9yIHNhZmV0eSwgaW4gY2FzZSB0aGUgY2xvc2UgZXZlbnQgaXMgc2tpcHBlZC5cclxuICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgaWYoISF0aGlzLmF1dG9Db21wbGV0ZSAmJlxyXG4gICAgICAgICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsICYmXHJcbiAgICAgICAgICAgICEhdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSxmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KSxcclxuICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSgpO1xyXG5cclxuICAgIHRoaXMuYXV0b0NvbXBsZXRlLmNsb3NlZC5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4gdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCkpLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICBpZighIXRoaXMuYXV0b0NvbXBsZXRlICYmXHJcbiAgICAgICEhdGhpcy5hdXRvQ29tcGxldGUucGFuZWwgJiZcclxuICAgICAgISF0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50KXtcclxuICAgIHRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xyXG4gICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICBsYXN0U2Nyb2xsVG9wICA9IDA7XHJcbiAgb25TY3JvbGwoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIHZhciBzdCA9IGV2ZW50LnRhcmdldC5wYWdlWU9mZnNldCB8fCBldmVudC50YXJnZXQuc2Nyb2xsVG9wOyAvLyBDcmVkaXRzOiBob3cgdG8ga25vdyBpZiBpdCdzIGRvd24gb3IgdXAgc2Nyb2xsIFwiaHR0cHM6Ly9naXRodWIuY29tL3FlcmVteS9zby9ibG9iL21hc3Rlci9zby5kb20uanMjTDQyNlwiXHJcbiAgICBpZiAoc3QgPiB0aGlzLmxhc3RTY3JvbGxUb3Ape1xyXG4gICAgICAgLy8gZG93bnNjcm9sbCBjb2RlICAgICAgIFxyXG4gICAgICAgaWYgKHRoaXMudGhyZXNob2xkUGVyY2VudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwubmV4dCh7IGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvQ29tcGxldGUsIHNjcm9sbEV2ZW50OiBldmVudCB9KTtcclxuICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkUGVyY2VudCAqIDEwMCAqIGV2ZW50LnRhcmdldC5zY3JvbGxIZWlnaHQgLyAxMDA7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgKyBldmVudC50YXJnZXQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHNjcm9sbCAke2N1cnJlbnR9LCB0aHJlc2hvbGQ6ICR7dGhyZXNob2xkfWApICAgICBcclxuICAgICAgICBpZiAoY3VycmVudCA+IHRocmVzaG9sZCkgeyBcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2xvYWQgbmV4dCBwYWdlJyk7ICAgICAgICBcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsLm5leHQoeyBhdXRvQ29tcGxldGU6IHRoaXMuYXV0b0NvbXBsZXRlLCBzY3JvbGxFdmVudDogZXZlbnQgfSk7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgLy8gdXBzY3JvbGwgY29kZSAgICAgICBcclxuICAgIH1cclxuICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IHN0IDw9IDAgPyAwIDogc3Q7ICBcclxuICB9XHJcbiAgXHJcbn0iXX0=