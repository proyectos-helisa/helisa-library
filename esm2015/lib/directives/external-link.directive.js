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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leHRlcm5hbC1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUtwRCxNQUFNLE9BQU8scUJBQXFCO0lBTWhDLFlBQXlDLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFMbEMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFHYyxDQUFDO0lBRS9ELFdBQVc7UUFFVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRU8sY0FBYztRQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2FBQ3BCOzs7eUNBT2MsTUFBTSxTQUFDLFdBQVc7OztzQkFMOUIsV0FBVyxTQUFDLFVBQVU7eUJBQ3RCLFdBQVcsU0FBQyxhQUFhO3VCQUN6QixXQUFXLFNBQUMsV0FBVzttQkFDdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIFBMQVRGT1JNX0lELCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYVtocmVmXScsXG59KVxuZXhwb3J0IGNsYXNzIEV4dGVybmFsTGlua0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yZWwnKSByZWxBdHRyOiBzdHJpbmcgPSAnJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhcmdldCcpIHRhcmdldEF0dHI6IHN0cmluZyA9ICcnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuaHJlZicpIGhyZWZBdHRyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuXG4gICAgdGhpcy5ocmVmQXR0ciA9IHRoaXMuaHJlZjtcblxuICAgIGlmICh0aGlzLmlzTGlua0V4dGVybmFsKCkpIHtcbiAgICAgIHRoaXMucmVsQXR0ciA9ICdub29wZW5lcic7XG4gICAgICB0aGlzLnRhcmdldEF0dHIgPSAnX2JsYW5rJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzTGlua0V4dGVybmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmICF0aGlzLmhyZWYuaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpO1xuICB9XG59XG4iXX0=