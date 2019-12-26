/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, PLATFORM_ID, Inject, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var ExternalLinkDirective = /** @class */ (function () {
    function ExternalLinkDirective(platformId) {
        this.platformId = platformId;
        this.relAttr = '';
        this.targetAttr = '';
        this.hrefAttr = '';
    }
    /**
     * @return {?}
     */
    ExternalLinkDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.hrefAttr = this.href;
        if (this.isLinkExternal()) {
            this.relAttr = 'noopener';
            this.targetAttr = '_blank';
        }
    };
    /**
     * @private
     * @return {?}
     */
    ExternalLinkDirective.prototype.isLinkExternal = /**
     * @private
     * @return {?}
     */
    function () {
        return isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname);
    };
    ExternalLinkDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'a[href]',
                },] }
    ];
    /** @nocollapse */
    ExternalLinkDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ExternalLinkDirective.propDecorators = {
        relAttr: [{ type: HostBinding, args: ['attr.rel',] }],
        targetAttr: [{ type: HostBinding, args: ['attr.target',] }],
        hrefAttr: [{ type: HostBinding, args: ['attr.href',] }],
        href: [{ type: Input }]
    };
    return ExternalLinkDirective;
}());
export { ExternalLinkDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBEO0lBU0UsK0JBQXlDLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFMbEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNWLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUdzQixDQUFDOzs7O0lBRS9ELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7O0lBRU8sOENBQWM7Ozs7SUFBdEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO2lCQUNwQjs7Ozs2Q0FPYyxNQUFNLFNBQUMsV0FBVzs7OzBCQUw5QixXQUFXLFNBQUMsVUFBVTs2QkFDdEIsV0FBVyxTQUFDLGFBQWE7MkJBQ3pCLFdBQVcsU0FBQyxXQUFXO3VCQUN2QixLQUFLOztJQWdCUiw0QkFBQztDQUFBLEFBdkJELElBdUJDO1NBcEJZLHFCQUFxQjs7O0lBQ2hDLHdDQUFzQzs7SUFDdEMsMkNBQTRDOztJQUM1Qyx5Q0FBd0M7O0lBQ3hDLHFDQUFzQjs7Ozs7SUFFViwyQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBQTEFURk9STV9JRCwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhW2hyZWZdJyxcbn0pXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxMaW5rRGlyZWN0aXZlIHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJlbCcpIHJlbEF0dHIgPSAnJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhcmdldCcpIHRhcmdldEF0dHIgPSAnJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmhyZWYnKSBocmVmQXR0ciA9ICcnO1xuICBASW5wdXQoKSBocmVmOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5ocmVmQXR0ciA9IHRoaXMuaHJlZjtcbiAgXG4gICAgaWYgKHRoaXMuaXNMaW5rRXh0ZXJuYWwoKSkgeyAgICAgICAgICAgICAgXG4gICAgICB0aGlzLnJlbEF0dHIgPSAnbm9vcGVuZXInO1xuICAgICAgdGhpcy50YXJnZXRBdHRyID0gJ19ibGFuayc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0xpbmtFeHRlcm5hbCgpIHsgICAgXG4gICAgcmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgIXRoaXMuaHJlZi5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSk7XG4gIH1cbn0iXX0=