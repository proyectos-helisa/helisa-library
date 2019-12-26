/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var ExternalLinkPipe = /** @class */ (function () {
    function ExternalLinkPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    ExternalLinkPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return '//' + value;
    };
    ExternalLinkPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'externalLink'
                },] }
    ];
    return ExternalLinkPipe;
}());
export { ExternalLinkPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9leHRlcm5hbC1saW5rLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFPQSxDQUFDOzs7Ozs7SUFIRyxvQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVU7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUNoQyxPQUFPLElBQUksR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7Z0JBTkosSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSxjQUFjO2lCQUN2Qjs7SUFLRCx1QkFBQztDQUFBLEFBUEQsSUFPQztTQUpZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdleHRlcm5hbExpbmsnXG59KVxuZXhwb3J0IGNsYXNzIEV4dGVybmFsTGlua1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgICAgICBcbiAgICAgICAgcmV0dXJuICcvLycgKyB2YWx1ZTtcbiAgICB9XG59Il19