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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvbGliL2RpcmVjdGl2ZXMvb3B0aW9ucy1zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVkvQixNQUFNLE9BQU8sc0JBQXNCO0lBVWpDLFlBQW1CLFlBQTZCO1FBQTdCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQVJoRDs7V0FFRztRQUNNLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM3QixrQkFBYSxHQUEyQyxJQUFJLFlBQVksRUFBNEIsQ0FBQztRQUMvRyxZQUFPLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFDN0Msa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFHeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMzQixHQUFHLENBQUMsR0FBUyxFQUFFO1lBQ2IsK0VBQStFO1lBQy9FLGlEQUFpRDtZQUNqRCxrRUFBa0U7WUFDbEUsVUFBVSxDQUFDLEdBQVMsRUFBRTtnQkFDcEIsNEVBQTRFO2dCQUM1RSxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7b0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWE7eUJBQ2xDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDaEU7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzNCLEdBQUcsQ0FBQyxHQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxFQUNqRCxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVPLHlCQUF5QjtRQUMvQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYTtpQkFDbEMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFHRCxRQUFRLENBQUMsS0FBWTtRQUNuQiwyR0FBMkc7UUFDM0csTUFBTSxFQUFFLEdBQVksS0FBSyxDQUFDLE1BQWlCLENBQUMsV0FBVyxJQUFLLEtBQUssQ0FBQyxNQUFrQixDQUFDLFNBQVMsQ0FBQztRQUMvRixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzNCLGtCQUFrQjtZQUNsQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDbEY7aUJBQU07Z0JBQ0wsTUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsR0FBSSxLQUFLLENBQUMsTUFBa0IsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUNyRyxNQUFNLE9BQU8sR0FBWSxLQUFLLENBQUMsTUFBa0IsQ0FBQyxTQUFTLEdBQUksS0FBSyxDQUFDLE1BQWtCLENBQUMsWUFBWSxDQUFDO2dCQUNyRyxJQUFJLE9BQU8sR0FBRyxTQUFTLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ2xGO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsZ0JBQWdCO1NBQ2pCO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7WUF4RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7YUFDNUM7OztZQWJRLGVBQWU7OzsrQkFtQnJCLEtBQUs7NEJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBdXRvQ29tcGxldGVTY3JvbGxFdmVudCB7XHJcbiAgYXV0b0NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGU7XHJcbiAgc2Nyb2xsRXZlbnQ6IEV2ZW50O1xyXG59XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtYXV0b2NvbXBsZXRlW29wdGlvbnNTY3JvbGxdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3B0aW9uc1Njcm9sbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgdmFsdWUgd291bGQgZGlmZmVyZW50IGRlcGVuZHMgb2Ygc3R5bGVzXHJcbiAgICovXHJcbiAgQElucHV0KCkgdGhyZXNob2xkUGVyY2VudDogbnVtYmVyID0gLjk7XHJcbiAgQE91dHB1dCgpIG9wdGlvbnNTY3JvbGw6IEV2ZW50RW1pdHRlcjxJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJQXV0b0NvbXBsZXRlU2Nyb2xsRXZlbnQ+KCk7XHJcbiAgZGVzdHJveTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgbGFzdFNjcm9sbFRvcDogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGF1dG9Db21wbGV0ZTogTWF0QXV0b2NvbXBsZXRlKSB7XHJcbiAgICB0aGlzLmF1dG9Db21wbGV0ZS5vcGVuZWQucGlwZShcclxuICAgICAgdGFwKCgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBOb3RlOiBXaGVuIGF1dG9jb21wbGV0ZSByYWlzZXMgb3BlbmVkLCBwYW5lbCBpcyBub3QgeWV0IGNyZWF0ZWQgKGJ5IE92ZXJsYXkpXHJcbiAgICAgICAgLy8gTm90ZTogVGhlIHBhbmVsIHdpbGwgYmUgYXZhaWxhYmxlIG9uIG5leHQgdGlja1xyXG4gICAgICAgIC8vIE5vdGU6IFRoZSBwYW5lbCB3aWwgTk9UIG9wZW4gaWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgdG8gZGlzcGxheVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgLy8gTm90ZTogcmVtb3ZlIGxpc3RuZXIganVzdCBmb3Igc2FmZXR5LCBpbiBjYXNlIHRoZSBjbG9zZSBldmVudCBpcyBza2lwcGVkLlxyXG4gICAgICAgICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgICBpZiAoISF0aGlzLmF1dG9Db21wbGV0ZSAmJlxyXG4gICAgICAgICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsICYmXHJcbiAgICAgICAgICAgICEhdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KSxcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSkpLnN1YnNjcmliZSgpO1xyXG5cclxuICAgIHRoaXMuYXV0b0NvbXBsZXRlLmNsb3NlZC5waXBlKFxyXG4gICAgICB0YXAoKCk6IHZvaWQgPT4gdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCkpLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95KSkuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoISF0aGlzLmF1dG9Db21wbGV0ZSAmJlxyXG4gICAgICAhIXRoaXMuYXV0b0NvbXBsZXRlLnBhbmVsICYmXHJcbiAgICAgICEhdGhpcy5hdXRvQ29tcGxldGUucGFuZWwubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95LmNvbXBsZXRlKCk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBDcmVkaXRzOiBob3cgdG8ga25vdyBpZiBpdCdzIGRvd24gb3IgdXAgc2Nyb2xsIFwiaHR0cHM6Ly9naXRodWIuY29tL3FlcmVteS9zby9ibG9iL21hc3Rlci9zby5kb20uanMjTDQyNlwiXHJcbiAgICBjb25zdCBzdDogbnVtYmVyID0gKGV2ZW50LnRhcmdldCBhcyBXaW5kb3cpLnBhZ2VZT2Zmc2V0IHx8IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuc2Nyb2xsVG9wO1xyXG4gICAgaWYgKHN0ID4gdGhpcy5sYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgIC8vIGRvd25zY3JvbGwgY29kZVxyXG4gICAgICBpZiAodGhpcy50aHJlc2hvbGRQZXJjZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnNTY3JvbGwubmV4dCh7IGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvQ29tcGxldGUsIHNjcm9sbEV2ZW50OiBldmVudCB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGQ6IG51bWJlciA9IHRoaXMudGhyZXNob2xkUGVyY2VudCAqIDEwMCAqIChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuc2Nyb2xsSGVpZ2h0IC8gMTAwO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQ6IG51bWJlciA9IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuc2Nyb2xsVG9wICsgKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPiB0aHJlc2hvbGQpIHtcclxuICAgICAgICAgIHRoaXMub3B0aW9uc1Njcm9sbC5uZXh0KHsgYXV0b0NvbXBsZXRlOiB0aGlzLmF1dG9Db21wbGV0ZSwgc2Nyb2xsRXZlbnQ6IGV2ZW50IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdXBzY3JvbGwgY29kZVxyXG4gICAgfVxyXG4gICAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gc3QgPD0gMCA/IDAgOiBzdDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==