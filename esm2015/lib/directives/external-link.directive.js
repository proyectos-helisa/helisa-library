import { Directive, HostBinding, PLATFORM_ID, Inject, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
export class ExternalLinkDirective {
    constructor(platformId) {
        this.platformId = platformId;
        this.relAttr = '';
        this.targetAttr = '';
        this.hrefAttr = '';
    }
    ngOnChanges() {
        this.hrefAttr = this.href;
        if (this.isLinkExternal()) {
            this.relAttr = 'noopener';
            this.targetAttr = '_blank';
        }
    }
    isLinkExternal() {
        return isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname);
    }
}
ExternalLinkDirective.ɵfac = function ExternalLinkDirective_Factory(t) { return new (t || ExternalLinkDirective)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
ExternalLinkDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ExternalLinkDirective, selectors: [["a", "href", ""]], hostVars: 3, hostBindings: function ExternalLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("rel", ctx.relAttr)("target", ctx.targetAttr)("href", ctx.hrefAttr, ɵngcc0.ɵɵsanitizeUrl);
    } }, inputs: { href: "href" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
ExternalLinkDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ExternalLinkDirective.propDecorators = {
    relAttr: [{ type: HostBinding, args: ['attr.rel',] }],
    targetAttr: [{ type: HostBinding, args: ['attr.target',] }],
    hrefAttr: [{ type: HostBinding, args: ['attr.href',] }],
    href: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ExternalLinkDirective, [{
        type: Directive,
        args: [{
                selector: 'a[href]'
            }]
    }], function () { return [{ type: String, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { relAttr: [{
            type: HostBinding,
            args: ['attr.rel']
        }], targetAttr: [{
            type: HostBinding,
            args: ['attr.target']
        }], hrefAttr: [{
            type: HostBinding,
            args: ['attr.href']
        }], href: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjL2xpYi9kaXJlY3RpdmVzL2V4dGVybmFsLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUtwRCxNQUFNLE9BQU8scUJBQXFCO0FBQUcsSUFNbkMsWUFBeUMsVUFBa0I7QUFBSSxRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFRO0FBQUMsUUFMbkMsWUFBTyxHQUFXLEVBQUUsQ0FBQztBQUNoRCxRQUE4QixlQUFVLEdBQVcsRUFBRSxDQUFDO0FBQ3RELFFBQTRCLGFBQVEsR0FBVyxFQUFFLENBQUM7QUFDbEQsSUFFZ0UsQ0FBQztBQUNqRSxJQUNFLFdBQVc7QUFBSyxRQUVkLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUM5QixRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFO0FBQy9CLFlBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7QUFDaEMsWUFBTSxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUNqQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDVSxjQUFjO0FBQUssUUFDekIsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEYsSUFBRSxDQUFDO0FBQ0g7aURBeEJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsU0FBUyxlQUNwQjs7OzhFQUNJO0FBQUM7QUFBK0MseUNBTXRDLE1BQU0sU0FBQyxXQUFXO0FBQVE7QUFBRztBQUUxQixzQkFQZixXQUFXLFNBQUMsVUFBVTtBQUFPLHlCQUM3QixXQUFXLFNBQUMsYUFBYTtBQUFPLHVCQUNoQyxXQUFXLFNBQUMsV0FBVztBQUFPLG1CQUM5QixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBQTEFURk9STV9JRCwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FbaHJlZl0nLFxufSlcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbExpbmtEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucmVsJykgcmVsQXR0cjogc3RyaW5nID0gJyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci50YXJnZXQnKSB0YXJnZXRBdHRyOiBzdHJpbmcgPSAnJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmhyZWYnKSBocmVmQXR0cjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZykge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcblxuICAgIHRoaXMuaHJlZkF0dHIgPSB0aGlzLmhyZWY7XG5cbiAgICBpZiAodGhpcy5pc0xpbmtFeHRlcm5hbCgpKSB7XG4gICAgICB0aGlzLnJlbEF0dHIgPSAnbm9vcGVuZXInO1xuICAgICAgdGhpcy50YXJnZXRBdHRyID0gJ19ibGFuayc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0xpbmtFeHRlcm5hbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiAhdGhpcy5ocmVmLmluY2x1ZGVzKGxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgfVxufVxuIl19