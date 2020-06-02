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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBS3BELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFNaEMsWUFBeUMsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUxsQyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDMUIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQUdjLENBQUM7Ozs7SUFFL0QsV0FBVztRQUVULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2FBQ3BCOzs7O3lDQU9jLE1BQU0sU0FBQyxXQUFXOzs7c0JBTDlCLFdBQVcsU0FBQyxVQUFVO3lCQUN0QixXQUFXLFNBQUMsYUFBYTt1QkFDekIsV0FBVyxTQUFDLFdBQVc7bUJBQ3ZCLEtBQUs7Ozs7SUFITix3Q0FBOEM7O0lBQzlDLDJDQUFvRDs7SUFDcEQseUNBQWdEOztJQUNoRCxxQ0FBc0I7Ozs7O0lBRVYsMkNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgUExBVEZPUk1fSUQsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2FbaHJlZl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxMaW5rRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucmVsJykgcmVsQXR0cjogc3RyaW5nID0gJyc7XHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhcmdldCcpIHRhcmdldEF0dHI6IHN0cmluZyA9ICcnO1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5ocmVmJykgaHJlZkF0dHI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuaHJlZkF0dHIgPSB0aGlzLmhyZWY7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMaW5rRXh0ZXJuYWwoKSkge1xyXG4gICAgICB0aGlzLnJlbEF0dHIgPSAnbm9vcGVuZXInO1xyXG4gICAgICB0aGlzLnRhcmdldEF0dHIgPSAnX2JsYW5rJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNMaW5rRXh0ZXJuYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiAhdGhpcy5ocmVmLmluY2x1ZGVzKGxvY2F0aW9uLmhvc3RuYW1lKTtcclxuICB9XHJcbn1cclxuIl19