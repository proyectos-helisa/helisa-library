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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHdCQUF3QixFQUV4QixTQUFTLEVBRVQsUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVYLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVqRjtJQXFCRSwyQkFDVSxRQUFtQixFQUNuQixRQUFrQixFQUNsQixRQUFrQyxFQUNsQyxHQUFxQixFQUNyQixXQUFnQztRQUpoQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO0lBQ3ZDLENBQUM7SUFwQkosc0JBQWEsOENBQWU7Ozs7O1FBQTVCLFVBQTZCLE9BQW9EO1lBQy9FLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDckIsT0FBTztpQkFDUjs7b0JBQ0ssT0FBTyxHQUF3QyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDOztvQkFDdkcsUUFBUSxHQUFhLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQzthQUM5RjtRQUNILENBQUM7OztPQUFBOzs7OztJQVVPLDZDQUFpQjs7OztJQUF6QjtRQUNFLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTs7Z0JBQzlCLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNuRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBRTs7Z0JBQ3hDLE9BQU8sR0FBTyxFQUFFOztnQkFDaEIsT0FBTyxHQUF3QixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUM3RSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO2FBQU07O2dCQUNDLE9BQU8sR0FBNkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOztnQkFDdkYsWUFBWSxHQUF5QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEUsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7OztnQkFUQyxTQUFTO2dCQUZULFFBQVE7Z0JBSlIsd0JBQXdCO2dCQVN4QixnQkFBZ0I7Z0JBRmhCLFdBQVc7OztrQ0FhVixLQUFLOztJQW9DUix3QkFBQztDQUFBLEFBM0NELElBMkNDO1NBeENZLGlCQUFpQjs7Ozs7O0lBQzVCLHlDQUFzRDs7Ozs7SUFDdEQsb0NBQTZEOzs7OztJQWlCM0QscUNBQTJCOzs7OztJQUMzQixxQ0FBMEI7Ozs7O0lBQzFCLHFDQUEwQzs7Ozs7SUFDMUMsZ0NBQTZCOzs7OztJQUM3Qix3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90cmVlLWhlbGlzYS90ZW1wbGF0ZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwVGVtcGxhdGVOb2RlXSdcbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVEaXJlY3RpdmUge1xuICBwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFRlbXBsYXRlQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxvYmplY3Q+IHwgVHlwZTxvYmplY3Q+O1xuXG4gIEBJbnB1dCgpIHNldCBhcHBUZW1wbGF0ZU5vZGUoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8b2JqZWN0PiB8IFR5cGU8b2JqZWN0Pikge1xuICAgIGlmIChjb250ZW50ID09IG51bGwpIHtcbiAgICAgIHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFRlbXBsYXRlQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoVGVtcGxhdGVDb21wb25lbnQpO1xuICAgICAgY29uc3QgaW5qZWN0b3I6IEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzOiBbXSB9KTtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnksIDAsIGluamVjdG9yLCB0aGlzLmdlbmVyYXRlTmdDb250ZW50KCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8b2JqZWN0PlxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZU5nQ29udGVudCgpOiBIVE1MRWxlbWVudFtdW10ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5jb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5jb250ZW50KTtcbiAgICAgIHJldHVybiBbW2VsZW1lbnRdXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBjb25zdCBjb250ZXh0OiB7fSA9IHt9O1xuICAgICAgY29uc3Qgdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHt9PiA9IHRoaXMuY29udGVudC5jcmVhdGVFbWJlZGRlZFZpZXcoY29udGV4dCk7XG4gICAgICByZXR1cm4gW3ZpZXdSZWYucm9vdE5vZGVzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxvYmplY3Q+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbnRlbnQpO1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8b2JqZWN0PiA9IGZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICAgICAgcmV0dXJuIFtbY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRdXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==