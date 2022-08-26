import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
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
                if (current > threshold) {
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
OptionsScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: 'mat-autocomplete[optionsScroll]'
            },] }
];
OptionsScrollDirective.ctorParameters = () => [
    { type: MatAutocomplete }
];
OptionsScrollDirective.propDecorators = {
    thresholdPercent: [{ type: Input }],
    optionsScroll: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVkvQixNQUFNLE9BQU8sc0JBQXNCO0lBVWpDLFlBQW1CLFlBQTZCO1FBQTdCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQVJoRDs7V0FFRztRQUNNLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM3QixrQkFBYSxHQUEyQyxJQUFJLFlBQVksRUFBNEIsQ0FBQztRQUMvRyxZQUFPLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFDN0Msa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFHeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMzQixHQUFHLENBQUMsR0FBUyxFQUFFO1lBQ2IsK0VBQStFO1lBQy9FLGlEQUFpRDtZQUNqRCxrRUFBa0U7WUFDbEUsVUFBVSxDQUFDLEdBQVMsRUFBRTtnQkFDcEIsNEVBQTRFO2dCQUM1RSxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7b0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWE7eUJBQ2xDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDaEU7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzNCLEdBQUcsQ0FBQyxHQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxFQUNqRCxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVPLHlCQUF5QjtRQUMvQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYTtpQkFDbEMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFHRCxRQUFRLENBQUMsS0FBWTtRQUNuQiwyR0FBMkc7UUFDM0csTUFBTSxFQUFFLEdBQVksS0FBSyxDQUFDLE1BQWlCLENBQUMsV0FBVyxJQUFLLEtBQUssQ0FBQyxNQUFrQixDQUFDLFNBQVMsQ0FBQztRQUMvRixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzNCLGtCQUFrQjtZQUNsQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDbEY7aUJBQU07Z0JBQ0wsTUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsR0FBSSxLQUFLLENBQUMsTUFBa0IsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUNyRyxNQUFNLE9BQU8sR0FBWSxLQUFLLENBQUMsTUFBa0IsQ0FBQyxTQUFTLEdBQUksS0FBSyxDQUFDLE1BQWtCLENBQUMsWUFBWSxDQUFDO2dCQUNyRyxJQUFJLE9BQU8sR0FBRyxTQUFTLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ2xGO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsZ0JBQWdCO1NBQ2pCO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7WUF4RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7YUFDNUM7OztZQWJRLGVBQWU7OzsrQkFtQnJCLEtBQUs7NEJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIElBdXRvQ29tcGxldGVTY3JvbGxFdmVudCB7XG4gIGF1dG9Db21wbGV0ZTogTWF0QXV0b2NvbXBsZXRlO1xuICBzY3JvbGxFdmVudDogRXZlbnQ7XG59XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LWF1dG9jb21wbGV0ZVtvcHRpb25zU2Nyb2xsXSdcbn0pXG5leHBvcnQgY2xhc3MgT3B0aW9uc1Njcm9sbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIFRoaXMgdmFsdWUgd291bGQgZGlmZmVyZW50IGRlcGVuZHMgb2Ygc3R5bGVzXG4gICAqL1xuICBASW5wdXQoKSB0aHJlc2hvbGRQZXJjZW50OiBudW1iZXIgPSAuOTtcbiAgQE91dHB1dCgpIG9wdGlvbnNTY3JvbGw6IEV2ZW50RW1pdHRlcjxJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQ+KCk7XG4gIGRlc3Ryb3k6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBsYXN0U2Nyb2xsVG9wOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRvQ29tcGxldGU6IE1hdEF1dG9jb21wbGV0ZSkge1xuICAgIHRoaXMuYXV0b0NvbXBsZXRlLm9wZW5lZC5waXBlKFxuICAgICAgdGFwKCgpOiB2b2lkID0+IHtcbiAgICAgICAgLy8gTm90ZTogV2hlbiBhdXRvY29tcGxldGUgcmFpc2VzIG9wZW5lZCwgcGFuZWwgaXMgbm90IHlldCBjcmVhdGVkIChieSBPdmVybGF5KVxuICAgICAgICAvLyBOb3RlOiBUaGUgcGFuZWwgd2lsbCBiZSBhdmFpbGFibGUgb24gbmV4dCB0aWNrXG4gICAgICAgIC8vIE5vdGU6IFRoZSBwYW5lbCB3aWwgTk9UIG9wZW4gaWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgdG8gZGlzcGxheVxuICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAvLyBOb3RlOiByZW1vdmUgbGlzdG5lciBqdXN0IGZvciBzYWZldHksIGluIGNhc2UgdGhlIGNsb3NlIGV2ZW50IGlzIHNraXBwZWQuXG4gICAgICAgICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCk7XG4gICAgICAgICAgaWYgKCEhdGhpcy5hdXRvQ29tcGxldGUgJiZcbiAgICAgICAgICAgICEhdGhpcy5hdXRvQ29tcGxldGUucGFuZWwgJiZcbiAgICAgICAgICAgICEhdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudFxuICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSkpLnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5hdXRvQ29tcGxldGUuY2xvc2VkLnBpcGUoXG4gICAgICB0YXAoKCk6IHZvaWQgPT4gdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCkpLFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSkpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCk6IHZvaWQge1xuICAgIGlmICghIXRoaXMuYXV0b0NvbXBsZXRlICYmXG4gICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsICYmXG4gICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95LmNvbXBsZXRlKCk7XG5cbiAgICB0aGlzLnJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXIoKTtcbiAgfVxuXG5cbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgLy8gQ3JlZGl0czogaG93IHRvIGtub3cgaWYgaXQncyBkb3duIG9yIHVwIHNjcm9sbCBcImh0dHBzOi8vZ2l0aHViLmNvbS9xZXJlbXkvc28vYmxvYi9tYXN0ZXIvc28uZG9tLmpzI0w0MjZcIlxuICAgIGNvbnN0IHN0OiBudW1iZXIgPSAoZXZlbnQudGFyZ2V0IGFzIFdpbmRvdykucGFnZVlPZmZzZXQgfHwgKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5zY3JvbGxUb3A7XG4gICAgaWYgKHN0ID4gdGhpcy5sYXN0U2Nyb2xsVG9wKSB7XG4gICAgICAvLyBkb3duc2Nyb2xsIGNvZGVcbiAgICAgIGlmICh0aGlzLnRocmVzaG9sZFBlcmNlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm9wdGlvbnNTY3JvbGwubmV4dCh7IGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvQ29tcGxldGUsIHNjcm9sbEV2ZW50OiBldmVudCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZDogbnVtYmVyID0gdGhpcy50aHJlc2hvbGRQZXJjZW50ICogMTAwICogKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5zY3JvbGxIZWlnaHQgLyAxMDA7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQ6IG51bWJlciA9IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuc2Nyb2xsVG9wICsgKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGlmIChjdXJyZW50ID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zU2Nyb2xsLm5leHQoeyBhdXRvQ29tcGxldGU6IHRoaXMuYXV0b0NvbXBsZXRlLCBzY3JvbGxFdmVudDogZXZlbnQgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdXBzY3JvbGwgY29kZVxuICAgIH1cbiAgICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBzdCA8PSAwID8gMCA6IHN0O1xuICB9XG5cbn1cbiJdfQ==