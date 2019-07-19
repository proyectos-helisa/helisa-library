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
        this.thresholdPercent = .8;
        this.scroll = new EventEmitter();
        this._onDestroy = new Subject();
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
                this.autoComplete.panel.nativeElement
                    .addEventListener('scroll', this.onScroll.bind(this));
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
        this.autoComplete.panel.nativeElement
            .removeEventListener('scroll', this.onScroll);
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
    /** @type {?} */
    OptionsScrollDirective.prototype.thresholdPercent;
    /** @type {?} */
    OptionsScrollDirective.prototype.scroll;
    /** @type {?} */
    OptionsScrollDirective.prototype._onDestroy;
    /** @type {?} */
    OptionsScrollDirective.prototype.autoComplete;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL29wdGlvbnMtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBbUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDcEYsT0FBTyxFQUFZLFNBQVMsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQVksT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDOzs7O0FBR3RELDhDQUdDOzs7SUFGQyxnREFBOEI7O0lBQzlCLCtDQUFtQjs7QUFPckIsTUFBTSxPQUFPLHNCQUFzQjs7OztJQU1qQyxZQUFtQixZQUE2QjtRQUE3QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFKdkMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ04sV0FBTSxHQUFHLElBQUksWUFBWSxFQUE0QixDQUFDO1FBQy9FLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR3pCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDM0IsR0FBRzs7O1FBQUMsR0FBRyxFQUFFO1lBQ1AsK0VBQStFO1lBQy9FLGlEQUFpRDtZQUNqRCxrRUFBa0U7WUFDbEUsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLDRFQUE0RTtnQkFDNUUsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWE7cUJBQ2xDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1lBQ3pELENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLEVBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRTFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDM0IsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEVBQUMsRUFDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRU8seUJBQXlCO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWE7YUFDbEMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBRWpCLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzNFO2FBQU07O2tCQUNDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEdBQUc7O2tCQUN6RSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBRWxFLDJEQUEyRDtZQUMzRCxJQUFJLE9BQU8sR0FBRyxTQUFTLEVBQUU7Z0JBQ3ZCLGdDQUFnQztnQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUMzRTtTQUNGO0lBQ0gsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2FBQzVDOzs7O1lBYnlDLGVBQWU7OzsrQkFnQnRELEtBQUs7cUJBQ0wsTUFBTSxTQUFDLGVBQWU7Ozs7SUFEdkIsa0RBQStCOztJQUMvQix3Q0FBK0U7O0lBQy9FLDRDQUEyQjs7SUFFZiw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0U2VsZWN0LCBTRUxFQ1RfSVRFTV9IRUlHSFRfRU0sIE1hdEF1dG9jb21wbGV0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge2F1ZGl0VGltZSwgdGFrZVVudGlsLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtmcm9tRXZlbnQsIFN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQge1xyXG4gIGF1dG9Db21wbGV0ZTogTWF0QXV0b2NvbXBsZXRlO1xyXG4gIHNjcm9sbEV2ZW50OiBFdmVudDtcclxufVxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWF1dG9jb21wbGV0ZVtvcHRpb25zU2Nyb2xsXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9wdGlvbnNTY3JvbGxEaXJlY3RpdmUgIHtcclxuXHJcbiAgQElucHV0KCkgdGhyZXNob2xkUGVyY2VudCA9IC44O1xyXG4gIEBPdXRwdXQoJ29wdGlvbnNTY3JvbGwnKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPElBdXRvQ29tcGxldGVTY3JvbGxFdmVudD4oKTtcclxuICBfb25EZXN0cm95ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGF1dG9Db21wbGV0ZTogTWF0QXV0b2NvbXBsZXRlKSB7XHJcbiAgICB0aGlzLmF1dG9Db21wbGV0ZS5vcGVuZWQucGlwZShcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICAvLyBOb3RlOiBXaGVuIGF1dG9jb21wbGV0ZSByYWlzZXMgb3BlbmVkLCBwYW5lbCBpcyBub3QgeWV0IGNyZWF0ZWQgKGJ5IE92ZXJsYXkpXHJcbiAgICAgICAgLy8gTm90ZTogVGhlIHBhbmVsIHdpbGwgYmUgYXZhaWxhYmxlIG9uIG5leHQgdGlja1xyXG4gICAgICAgIC8vIE5vdGU6IFRoZSBwYW5lbCB3aWwgTk9UIG9wZW4gaWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgdG8gZGlzcGxheVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgLy8gTm90ZTogcmVtb3ZlIGxpc3RuZXIganVzdCBmb3Igc2FmZXR5LCBpbiBjYXNlIHRoZSBjbG9zZSBldmVudCBpcyBza2lwcGVkLlxyXG4gICAgICAgICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcykpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgdGhpcy5hdXRvQ29tcGxldGUuY2xvc2VkLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLnJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXIoKSksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xyXG4gICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChldmVudDogYW55KSB7XHJcblxyXG4gICAgaWYgKHRoaXMudGhyZXNob2xkUGVyY2VudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLm5leHQoeyBhdXRvQ29tcGxldGU6IHRoaXMuYXV0b0NvbXBsZXRlLCBzY3JvbGxFdmVudDogZXZlbnQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB0aHJlc2hvbGQgPSB0aGlzLnRocmVzaG9sZFBlcmNlbnQgKiAxMDAgKiBldmVudC50YXJnZXQuc2Nyb2xsSGVpZ2h0IC8gMTAwO1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCArIGV2ZW50LnRhcmdldC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAvL2NvbnNvbGUubG9nKGBzY3JvbGwgJHtjdXJyZW50fSwgdGhyZXNob2xkOiAke3RocmVzaG9sZH1gKVxyXG4gICAgICBpZiAoY3VycmVudCA+IHRocmVzaG9sZCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2xvYWQgbmV4dCBwYWdlJyk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwubmV4dCh7IGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvQ29tcGxldGUsIHNjcm9sbEV2ZW50OiBldmVudCB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxufSJdfQ==