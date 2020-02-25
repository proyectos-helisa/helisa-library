/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, Injector, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplateComponent } from '../components/tree-helisa/template.component';
var TemplateDirective = /** @class */ (function () {
    function TemplateDirective(renderer, injector, resolver, vcr, templateRef) {
        this.renderer = renderer;
        this.injector = injector;
        this.resolver = resolver;
        this.vcr = vcr;
        this.templateRef = templateRef;
    }
    Object.defineProperty(TemplateDirective.prototype, "appTemplateNode", {
        set: /**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            if (content == null) {
                this.vcr.createEmbeddedView(this.templateRef);
            }
            else {
                this.content = content;
                if (this.componentRef) {
                    return;
                }
                /** @type {?} */
                var factory = this.resolver.resolveComponentFactory(TemplateComponent);
                /** @type {?} */
                var injector = Injector.create({ providers: [] });
                this.componentRef = this.vcr.createComponent(factory, 0, injector, this.generateNgContent());
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    TemplateDirective.prototype.generateNgContent = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.content === 'string') {
            /** @type {?} */
            var element = this.renderer.createText(this.content);
            return [[element]];
        }
        else if (this.content instanceof TemplateRef) {
            /** @type {?} */
            var context = {};
            /** @type {?} */
            var viewRef = this.content.createEmbeddedView(context);
            return [viewRef.rootNodes];
        }
        else {
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(this.content);
            /** @type {?} */
            var componentRef = factory.create(this.injector);
            return [[componentRef.location.nativeElement]];
        }
    };
    TemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appTemplateNode]'
                },] }
    ];
    /** @nocollapse */
    TemplateDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    TemplateDirective.propDecorators = {
        appTemplateNode: [{ type: Input }]
    };
    return TemplateDirective;
}());
export { TemplateDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TemplateDirective.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    TemplateDirective.prototype.content;
    /**
     * @type {?}
     * @private
     */
    TemplateDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    TemplateDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    TemplateDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    TemplateDirective.prototype.vcr;
    /**
     * @type {?}
     * @private
     */
    TemplateDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHdCQUF3QixFQUV4QixTQUFTLEVBRVQsUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVYLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVqRjtJQXFCRSwyQkFDVSxRQUFtQixFQUNuQixRQUFrQixFQUNsQixRQUFrQyxFQUNsQyxHQUFxQixFQUNyQixXQUFnQztRQUpoQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO0lBQ3ZDLENBQUM7SUFwQkosc0JBQWEsOENBQWU7Ozs7O1FBQTVCLFVBQTZCLE9BQW9EO1lBQy9FLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDckIsT0FBTztpQkFDUjs7b0JBQ0ssT0FBTyxHQUF3QyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDOztvQkFDdkcsUUFBUSxHQUFhLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQzthQUM5RjtRQUNILENBQUM7OztPQUFBOzs7OztJQVVPLDZDQUFpQjs7OztJQUF6QjtRQUNFLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTs7Z0JBQzlCLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNuRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBRTs7Z0JBQ3hDLE9BQU8sR0FBTyxFQUFFOztnQkFDaEIsT0FBTyxHQUF3QixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUM3RSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO2FBQU07O2dCQUNDLE9BQU8sR0FBNkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOztnQkFDdkYsWUFBWSxHQUF5QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEUsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7OztnQkFUQyxTQUFTO2dCQUZULFFBQVE7Z0JBSlIsd0JBQXdCO2dCQVN4QixnQkFBZ0I7Z0JBRmhCLFdBQVc7OztrQ0FhVixLQUFLOztJQW9DUix3QkFBQztDQUFBLEFBM0NELElBMkNDO1NBeENZLGlCQUFpQjs7Ozs7O0lBQzVCLHlDQUFzRDs7Ozs7SUFDdEQsb0NBQTZEOzs7OztJQWlCM0QscUNBQTJCOzs7OztJQUMzQixxQ0FBMEI7Ozs7O0lBQzFCLHFDQUEwQzs7Ozs7SUFDMUMsZ0NBQTZCOzs7OztJQUM3Qix3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBUeXBlLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RlbXBsYXRlLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBUZW1wbGF0ZU5vZGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VGVtcGxhdGVDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8b2JqZWN0PiB8IFR5cGU8b2JqZWN0PjtcclxuXHJcbiAgQElucHV0KCkgc2V0IGFwcFRlbXBsYXRlTm9kZShjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxvYmplY3Q+IHwgVHlwZTxvYmplY3Q+KSB7XHJcbiAgICBpZiAoY29udGVudCA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFRlbXBsYXRlQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoVGVtcGxhdGVDb21wb25lbnQpO1xyXG4gICAgICBjb25zdCBpbmplY3RvcjogSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoeyBwcm92aWRlcnM6IFtdIH0pO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMudmNyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5LCAwLCBpbmplY3RvciwgdGhpcy5nZW5lcmF0ZU5nQ29udGVudCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPG9iamVjdD5cclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVOZ0NvbnRlbnQoKTogSFRNTEVsZW1lbnRbXVtdIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5jb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICByZXR1cm4gW1tlbGVtZW50XV07XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQ6IHt9ID0ge307XHJcbiAgICAgIGNvbnN0IHZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx7fT4gPSB0aGlzLmNvbnRlbnQuY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRleHQpO1xyXG4gICAgICByZXR1cm4gW3ZpZXdSZWYucm9vdE5vZGVzXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8b2JqZWN0PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb250ZW50KTtcclxuICAgICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8b2JqZWN0PiA9IGZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgICByZXR1cm4gW1tjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudF1dO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=