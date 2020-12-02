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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBEO0lBU0UsK0JBQXlDLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFMbEMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFHYyxDQUFDOzs7O0lBRS9ELDJDQUFXOzs7SUFBWDtRQUVFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7O0lBRU8sOENBQWM7Ozs7SUFBdEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO2lCQUNwQjs7Ozs2Q0FPYyxNQUFNLFNBQUMsV0FBVzs7OzBCQUw5QixXQUFXLFNBQUMsVUFBVTs2QkFDdEIsV0FBVyxTQUFDLGFBQWE7MkJBQ3pCLFdBQVcsU0FBQyxXQUFXO3VCQUN2QixLQUFLOztJQWlCUiw0QkFBQztDQUFBLEFBeEJELElBd0JDO1NBckJZLHFCQUFxQjs7O0lBQ2hDLHdDQUE4Qzs7SUFDOUMsMkNBQW9EOztJQUNwRCx5Q0FBZ0Q7O0lBQ2hELHFDQUFzQjs7Ozs7SUFFViwyQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBQTEFURk9STV9JRCwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYVtocmVmXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbExpbmtEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5yZWwnKSByZWxBdHRyOiBzdHJpbmcgPSAnJztcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFyZ2V0JykgdGFyZ2V0QXR0cjogc3RyaW5nID0gJyc7XHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmhyZWYnKSBocmVmQXR0cjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZykge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5ocmVmQXR0ciA9IHRoaXMuaHJlZjtcclxuXHJcbiAgICBpZiAodGhpcy5pc0xpbmtFeHRlcm5hbCgpKSB7XHJcbiAgICAgIHRoaXMucmVsQXR0ciA9ICdub29wZW5lcic7XHJcbiAgICAgIHRoaXMudGFyZ2V0QXR0ciA9ICdfYmxhbmsnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0xpbmtFeHRlcm5hbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmICF0aGlzLmhyZWYuaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=