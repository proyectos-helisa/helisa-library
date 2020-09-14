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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBS3BELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFNaEMsWUFBeUMsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUxsQyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDMUIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQUdjLENBQUM7Ozs7SUFFL0QsV0FBVztRQUVULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2FBQ3BCOzs7O3lDQU9jLE1BQU0sU0FBQyxXQUFXOzs7c0JBTDlCLFdBQVcsU0FBQyxVQUFVO3lCQUN0QixXQUFXLFNBQUMsYUFBYTt1QkFDekIsV0FBVyxTQUFDLFdBQVc7bUJBQ3ZCLEtBQUs7Ozs7SUFITix3Q0FBOEM7O0lBQzlDLDJDQUFvRDs7SUFDcEQseUNBQWdEOztJQUNoRCxxQ0FBc0I7Ozs7O0lBRVYsMkNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgUExBVEZPUk1fSUQsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhW2hyZWZdJyxcbn0pXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxMaW5rRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJlbCcpIHJlbEF0dHI6IHN0cmluZyA9ICcnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFyZ2V0JykgdGFyZ2V0QXR0cjogc3RyaW5nID0gJyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5ocmVmJykgaHJlZkF0dHI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBocmVmOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG5cbiAgICB0aGlzLmhyZWZBdHRyID0gdGhpcy5ocmVmO1xuXG4gICAgaWYgKHRoaXMuaXNMaW5rRXh0ZXJuYWwoKSkge1xuICAgICAgdGhpcy5yZWxBdHRyID0gJ25vb3BlbmVyJztcbiAgICAgIHRoaXMudGFyZ2V0QXR0ciA9ICdfYmxhbmsnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNMaW5rRXh0ZXJuYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgIXRoaXMuaHJlZi5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSk7XG4gIH1cbn1cbiJdfQ==