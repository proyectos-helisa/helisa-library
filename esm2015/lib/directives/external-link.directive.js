/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, PLATFORM_ID, Inject, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export class ExternalLinkDirective {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.relAttr = '';
        this.targetAttr = '';
        this.hrefAttr = '';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.hrefAttr = this.href;
        if (this.isLinkExternal()) {
            this.relAttr = 'noopener';
            this.targetAttr = '_blank';
        }
    }
    /**
     * @private
     * @return {?}
     */
    isLinkExternal() {
        return isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname);
    }
}
ExternalLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[href]',
            },] }
];
/** @nocollapse */
ExternalLinkDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ExternalLinkDirective.propDecorators = {
    relAttr: [{ type: HostBinding, args: ['attr.rel',] }],
    targetAttr: [{ type: HostBinding, args: ['attr.target',] }],
    hrefAttr: [{ type: HostBinding, args: ['attr.href',] }],
    href: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ExternalLinkDirective.prototype.relAttr;
    /** @type {?} */
    ExternalLinkDirective.prototype.targetAttr;
    /** @type {?} */
    ExternalLinkDirective.prototype.hrefAttr;
    /** @type {?} */
    ExternalLinkDirective.prototype.href;
    /**
     * @type {?}
     * @private
     */
    ExternalLinkDirective.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBS3BELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFNaEMsWUFBeUMsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUxsQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBR3NCLENBQUM7Ozs7SUFFL0QsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2FBQ3BCOzs7O3lDQU9jLE1BQU0sU0FBQyxXQUFXOzs7c0JBTDlCLFdBQVcsU0FBQyxVQUFVO3lCQUN0QixXQUFXLFNBQUMsYUFBYTt1QkFDekIsV0FBVyxTQUFDLFdBQVc7bUJBQ3ZCLEtBQUs7Ozs7SUFITix3Q0FBc0M7O0lBQ3RDLDJDQUE0Qzs7SUFDNUMseUNBQXdDOztJQUN4QyxxQ0FBc0I7Ozs7O0lBRVYsMkNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgUExBVEZPUk1fSUQsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYVtocmVmXScsXG59KVxuZXhwb3J0IGNsYXNzIEV4dGVybmFsTGlua0RpcmVjdGl2ZSB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yZWwnKSByZWxBdHRyID0gJyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci50YXJnZXQnKSB0YXJnZXRBdHRyID0gJyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5ocmVmJykgaHJlZkF0dHIgPSAnJztcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaHJlZkF0dHIgPSB0aGlzLmhyZWY7XG4gIFxuICAgIGlmICh0aGlzLmlzTGlua0V4dGVybmFsKCkpIHsgICAgICAgICAgICAgIFxuICAgICAgdGhpcy5yZWxBdHRyID0gJ25vb3BlbmVyJztcbiAgICAgIHRoaXMudGFyZ2V0QXR0ciA9ICdfYmxhbmsnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNMaW5rRXh0ZXJuYWwoKSB7ICAgIFxuICAgIHJldHVybiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmICF0aGlzLmhyZWYuaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpO1xuICB9XG59Il19