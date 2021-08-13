import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/autocomplete';
export class OptionsScrollDirective {
    constructor(autoComplete) {
        this.autoComplete = autoComplete;
        /**
         * This value would different depends of styles
         */
        this.thresholdPercent = .9;
        this.optionsScroll = new EventEmitter();
        this.destroy = new Subject();
        this.lastScrollTop = 0;
        this.autoComplete.opened.pipe(tap(() => {
            // Note: When autocomplete raises opened, panel is not yet created (by Overlay)
            // Note: The panel will be available on next tick
            // Note: The panel wil NOT open if there are no options to display
            setTimeout(() => {
                // Note: remove listner just for safety, in case the close event is skipped.
                this.removeScrollEventListener();
                if (!!this.autoComplete &&
                    !!this.autoComplete.panel &&
                    !!this.autoComplete.panel.nativeElement) {
                    this.autoComplete.panel.nativeElement
                        .addEventListener('scroll', this.onScroll.bind(this), false);
                }
            });
        }), takeUntil(this.destroy)).subscribe();
        this.autoComplete.closed.pipe(tap(() => this.removeScrollEventListener()), takeUntil(this.destroy)).subscribe();
    }
    removeScrollEventListener() {
        if (!!this.autoComplete &&
            !!this.autoComplete.panel &&
            !!this.autoComplete.panel.nativeElement) {
            this.autoComplete.panel.nativeElement
                .removeEventListener('scroll', this.onScroll);
        }
    }
    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
        this.removeScrollEventListener();
    }
    onScroll(event) {
        // Credits: how to know if it's down or up scroll "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        const st = event.target.pageYOffset || event.target.scrollTop;
        if (st > this.lastScrollTop) {
            // downscroll code
            if (this.thresholdPercent === undefined) {
                this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
            }
            else {
                const threshold = this.thresholdPercent * 100 * event.target.scrollHeight / 100;
                const current = event.target.scrollTop + event.target.clientHeight;
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
    }
}
OptionsScrollDirective.ɵfac = function OptionsScrollDirective_Factory(t) { return new (t || OptionsScrollDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MatAutocomplete)); };
OptionsScrollDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: OptionsScrollDirective, selectors: [["mat-autocomplete", "optionsScroll", ""]], inputs: { thresholdPercent: "thresholdPercent" }, outputs: { optionsScroll: "optionsScroll" } });
OptionsScrollDirective.ctorParameters = () => [
    { type: MatAutocomplete }
];
OptionsScrollDirective.propDecorators = {
    thresholdPercent: [{ type: Input }],
    optionsScroll: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OptionsScrollDirective, [{
        type: Directive,
        args: [{
                selector: 'mat-autocomplete[optionsScroll]'
            }]
    }], function () { return [{ type: ɵngcc1.MatAutocomplete }]; }, { thresholdPercent: [{
            type: Input
        }], optionsScroll: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy9saWIvZGlyZWN0aXZlcy9vcHRpb25zLXNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFZL0IsTUFBTSxPQUFPLHNCQUFzQjtBQUFHLElBVXBDLFlBQW1CLFlBQTZCO0FBQ2xELFFBRHFCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtBQUFDLFFBUmpEO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxxQkFBZ0IsR0FBVyxFQUFFLENBQUM7QUFDekMsUUFBWSxrQkFBYSxHQUEyQyxJQUFJLFlBQVksRUFBNEIsQ0FBQztBQUNqSCxRQUFFLFlBQU8sR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUMvQyxRQUFFLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0FBQzVCLFFBRUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMzQixHQUFHLENBQUMsR0FBUyxFQUFFO0FBQ3JCLFlBQVEsK0VBQStFO0FBQ3ZGLFlBQVEsaURBQWlEO0FBQ3pELFlBQVEsa0VBQWtFO0FBQzFFLFlBQVEsVUFBVSxDQUFDLEdBQVMsRUFBRTtBQUM5QixnQkFBVSw0RUFBNEU7QUFDdEYsZ0JBQVUsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7QUFDM0MsZ0JBQVUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVk7QUFDakMsb0JBQVksQ0FB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O0FBQ0wsUUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFDLElBQUUsQ0FBQztBQUNIO2tEQTNFQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGlDQUFpQyxjQUM1QztnUEFDSTtBQUFDO0FBQWdELFlBZDdDLGVBQWU7QUFBRztBQUFHO0FBQ3hCLCtCQWtCSCxLQUFLO0FBQUssNEJBQ1YsTUFBTTtBQUFJOzs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQge1xuICBhdXRvQ29tcGxldGU6IE1hdEF1dG9jb21wbGV0ZTtcbiAgc2Nyb2xsRXZlbnQ6IEV2ZW50O1xufVxuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1hdXRvY29tcGxldGVbb3B0aW9uc1Njcm9sbF0nXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNTY3JvbGxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBUaGlzIHZhbHVlIHdvdWxkIGRpZmZlcmVudCBkZXBlbmRzIG9mIHN0eWxlc1xuICAgKi9cbiAgQElucHV0KCkgdGhyZXNob2xkUGVyY2VudDogbnVtYmVyID0gLjk7XG4gIEBPdXRwdXQoKSBvcHRpb25zU2Nyb2xsOiBFdmVudEVtaXR0ZXI8SUF1dG9Db21wbGV0ZVNjcm9sbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SUF1dG9Db21wbGV0ZVNjcm9sbEV2ZW50PigpO1xuICBkZXN0cm95OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgbGFzdFNjcm9sbFRvcDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0b0NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGUpIHtcbiAgICB0aGlzLmF1dG9Db21wbGV0ZS5vcGVuZWQucGlwZShcbiAgICAgIHRhcCgoKTogdm9pZCA9PiB7XG4gICAgICAgIC8vIE5vdGU6IFdoZW4gYXV0b2NvbXBsZXRlIHJhaXNlcyBvcGVuZWQsIHBhbmVsIGlzIG5vdCB5ZXQgY3JlYXRlZCAoYnkgT3ZlcmxheSlcbiAgICAgICAgLy8gTm90ZTogVGhlIHBhbmVsIHdpbGwgYmUgYXZhaWxhYmxlIG9uIG5leHQgdGlja1xuICAgICAgICAvLyBOb3RlOiBUaGUgcGFuZWwgd2lsIE5PVCBvcGVuIGlmIHRoZXJlIGFyZSBubyBvcHRpb25zIHRvIGRpc3BsYXlcbiAgICAgICAgc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG4gICAgICAgICAgLy8gTm90ZTogcmVtb3ZlIGxpc3RuZXIganVzdCBmb3Igc2FmZXR5LCBpbiBjYXNlIHRoZSBjbG9zZSBldmVudCBpcyBza2lwcGVkLlxuICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICAgIGlmICghIXRoaXMuYXV0b0NvbXBsZXRlICYmXG4gICAgICAgICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsICYmXG4gICAgICAgICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kpKS5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuYXV0b0NvbXBsZXRlLmNsb3NlZC5waXBlKFxuICAgICAgdGFwKCgpOiB2b2lkID0+IHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kpKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBpZiAoISF0aGlzLmF1dG9Db21wbGV0ZSAmJlxuICAgICAgISF0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbCAmJlxuICAgICAgISF0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50XG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveS5jb21wbGV0ZSgpO1xuXG4gICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCk7XG4gIH1cblxuXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIC8vIENyZWRpdHM6IGhvdyB0byBrbm93IGlmIGl0J3MgZG93biBvciB1cCBzY3JvbGwgXCJodHRwczovL2dpdGh1Yi5jb20vcWVyZW15L3NvL2Jsb2IvbWFzdGVyL3NvLmRvbS5qcyNMNDI2XCJcbiAgICBjb25zdCBzdDogbnVtYmVyID0gKGV2ZW50LnRhcmdldCBhcyBXaW5kb3cpLnBhZ2VZT2Zmc2V0IHx8IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuc2Nyb2xsVG9wO1xuICAgIGlmIChzdCA+IHRoaXMubGFzdFNjcm9sbFRvcCkge1xuICAgICAgLy8gZG93bnNjcm9sbCBjb2RlXG4gICAgICBpZiAodGhpcy50aHJlc2hvbGRQZXJjZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zU2Nyb2xsLm5leHQoeyBhdXRvQ29tcGxldGU6IHRoaXMuYXV0b0NvbXBsZXRlLCBzY3JvbGxFdmVudDogZXZlbnQgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQ6IG51bWJlciA9IHRoaXMudGhyZXNob2xkUGVyY2VudCAqIDEwMCAqIChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuc2Nyb2xsSGVpZ2h0IC8gMTAwO1xuICAgICAgICBjb25zdCBjdXJyZW50OiBudW1iZXIgPSAoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLnNjcm9sbFRvcCArIChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuY2xpZW50SGVpZ2h0O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2Nyb2xsICR7Y3VycmVudH0sIHRocmVzaG9sZDogJHt0aHJlc2hvbGR9YClcbiAgICAgICAgaWYgKGN1cnJlbnQgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbG9hZCBuZXh0IHBhZ2UnKTtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNTY3JvbGwubmV4dCh7IGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvQ29tcGxldGUsIHNjcm9sbEV2ZW50OiBldmVudCB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1cHNjcm9sbCBjb2RlXG4gICAgfVxuICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IHN0IDw9IDAgPyAwIDogc3Q7XG4gIH1cblxufVxuIl19