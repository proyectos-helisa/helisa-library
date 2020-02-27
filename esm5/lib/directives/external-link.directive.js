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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZXh0ZXJuYWwtbGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBEO0lBU0UsK0JBQXlDLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFMbEMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFHYyxDQUFDOzs7O0lBRS9ELDJDQUFXOzs7SUFBWDtRQUVFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7O0lBRU8sOENBQWM7Ozs7SUFBdEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO2lCQUNwQjs7Ozs2Q0FPYyxNQUFNLFNBQUMsV0FBVzs7OzBCQUw5QixXQUFXLFNBQUMsVUFBVTs2QkFDdEIsV0FBVyxTQUFDLGFBQWE7MkJBQ3pCLFdBQVcsU0FBQyxXQUFXO3VCQUN2QixLQUFLOztJQWlCUiw0QkFBQztDQUFBLEFBeEJELElBd0JDO1NBckJZLHFCQUFxQjs7O0lBQ2hDLHdDQUE4Qzs7SUFDOUMsMkNBQW9EOztJQUNwRCx5Q0FBZ0Q7O0lBQ2hELHFDQUFzQjs7Ozs7SUFFViwyQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBQTEFURk9STV9JRCwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FbaHJlZl0nLFxufSlcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbExpbmtEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucmVsJykgcmVsQXR0cjogc3RyaW5nID0gJyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci50YXJnZXQnKSB0YXJnZXRBdHRyOiBzdHJpbmcgPSAnJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmhyZWYnKSBocmVmQXR0cjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZykge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcblxuICAgIHRoaXMuaHJlZkF0dHIgPSB0aGlzLmhyZWY7XG5cbiAgICBpZiAodGhpcy5pc0xpbmtFeHRlcm5hbCgpKSB7XG4gICAgICB0aGlzLnJlbEF0dHIgPSAnbm9vcGVuZXInO1xuICAgICAgdGhpcy50YXJnZXRBdHRyID0gJ19ibGFuayc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0xpbmtFeHRlcm5hbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiAhdGhpcy5ocmVmLmluY2x1ZGVzKGxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgfVxufVxuIl19