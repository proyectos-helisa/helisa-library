import { Directive, HostBinding, PLATFORM_ID, Inject, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
ExternalLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[href]',
            },] }
];
ExternalLinkDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ExternalLinkDirective.propDecorators = {
    relAttr: [{ type: HostBinding, args: ['attr.rel',] }],
    targetAttr: [{ type: HostBinding, args: ['attr.target',] }],
    hrefAttr: [{ type: HostBinding, args: ['attr.href',] }],
    href: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leHRlcm5hbC1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUtwRCxNQUFNLE9BQU8scUJBQXFCO0lBTWhDLFlBQXlDLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFMbEMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFHYyxDQUFDO0lBRS9ELFdBQVc7UUFFVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRU8sY0FBYztRQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2FBQ3BCOzs7eUNBT2MsTUFBTSxTQUFDLFdBQVc7OztzQkFMOUIsV0FBVyxTQUFDLFVBQVU7eUJBQ3RCLFdBQVcsU0FBQyxhQUFhO3VCQUN6QixXQUFXLFNBQUMsV0FBVzttQkFDdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIFBMQVRGT1JNX0lELCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhW2hyZWZdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4dGVybmFsTGlua0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJlbCcpIHJlbEF0dHI6IHN0cmluZyA9ICcnO1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci50YXJnZXQnKSB0YXJnZXRBdHRyOiBzdHJpbmcgPSAnJztcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuaHJlZicpIGhyZWZBdHRyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBocmVmOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmhyZWZBdHRyID0gdGhpcy5ocmVmO1xyXG5cclxuICAgIGlmICh0aGlzLmlzTGlua0V4dGVybmFsKCkpIHtcclxuICAgICAgdGhpcy5yZWxBdHRyID0gJ25vb3BlbmVyJztcclxuICAgICAgdGhpcy50YXJnZXRBdHRyID0gJ19ibGFuayc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTGlua0V4dGVybmFsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgIXRoaXMuaHJlZi5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==