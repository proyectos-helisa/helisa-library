/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, Injector, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplateComponent } from '../components/tree-helisa/template.component';
export class TemplateDirective {
    /**
     * @param {?} renderer
     * @param {?} injector
     * @param {?} resolver
     * @param {?} vcr
     * @param {?} templateRef
     */
    constructor(renderer, injector, resolver, vcr, templateRef) {
        this.renderer = renderer;
        this.injector = injector;
        this.resolver = resolver;
        this.vcr = vcr;
        this.templateRef = templateRef;
    }
    /**
     * @param {?} content
     * @return {?}
     */
    set appTemplateNode(content) {
        if (content == null) {
            this.vcr.createEmbeddedView(this.templateRef);
        }
        else {
            this.content = content;
            if (this.componentRef) {
                return;
            }
            /** @type {?} */
            const factory = this.resolver.resolveComponentFactory(TemplateComponent);
            /** @type {?} */
            const injector = Injector.create({ providers: [] });
            this.componentRef = this.vcr.createComponent(factory, 0, injector, this.generateNgContent());
        }
    }
    /**
     * @private
     * @return {?}
     */
    generateNgContent() {
        if (typeof this.content === 'string') {
            /** @type {?} */
            const element = this.renderer.createText(this.content);
            return [[element]];
        }
        else if (this.content instanceof TemplateRef) {
            /** @type {?} */
            const context = {};
            /** @type {?} */
            const viewRef = this.content.createEmbeddedView(context);
            return [viewRef.rootNodes];
        }
        else {
            /** @type {?} */
            const factory = this.resolver.resolveComponentFactory(this.content);
            /** @type {?} */
            const componentRef = factory.create(this.injector);
            return [[componentRef.location.nativeElement]];
        }
    }
}
TemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appTemplateNode]'
            },] }
];
/** @nocollapse */
TemplateDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: TemplateRef }
];
TemplateDirective.propDecorators = {
    appTemplateNode: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHdCQUF3QixFQUV4QixTQUFTLEVBRVQsUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVYLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUtqRixNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQWtCNUIsWUFDVSxRQUFtQixFQUNuQixRQUFrQixFQUNsQixRQUFrQyxFQUNsQyxHQUFxQixFQUNyQixXQUFnQztRQUpoQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO0lBQ3ZDLENBQUM7Ozs7O0lBcEJKLElBQWEsZUFBZSxDQUFDLE9BQW9EO1FBQy9FLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixPQUFPO2FBQ1I7O2tCQUNLLE9BQU8sR0FBd0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQzs7a0JBQ3ZHLFFBQVEsR0FBYSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUM5RjtJQUNILENBQUM7Ozs7O0lBVU8saUJBQWlCO1FBQ3ZCLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTs7a0JBQzlCLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNuRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBRTs7a0JBQ3hDLE9BQU8sR0FBTyxFQUFFOztrQkFDaEIsT0FBTyxHQUF3QixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUM3RSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO2FBQU07O2tCQUNDLE9BQU8sR0FBNkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOztrQkFDdkYsWUFBWSxHQUF5QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEUsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCOzs7O1lBVEMsU0FBUztZQUZULFFBQVE7WUFKUix3QkFBd0I7WUFTeEIsZ0JBQWdCO1lBRmhCLFdBQVc7Ozs4QkFhVixLQUFLOzs7Ozs7O0lBSE4seUNBQXNEOzs7OztJQUN0RCxvQ0FBNkQ7Ozs7O0lBaUIzRCxxQ0FBMkI7Ozs7O0lBQzNCLHFDQUEwQjs7Ozs7SUFDMUIscUNBQTBDOzs7OztJQUMxQyxnQ0FBNkI7Ozs7O0lBQzdCLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBUeXBlLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RlbXBsYXRlLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBUZW1wbGF0ZU5vZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VGVtcGxhdGVDb21wb25lbnQ+O1xuICBwcml2YXRlIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPG9iamVjdD4gfCBUeXBlPG9iamVjdD47XG5cbiAgQElucHV0KCkgc2V0IGFwcFRlbXBsYXRlTm9kZShjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxvYmplY3Q+IHwgVHlwZTxvYmplY3Q+KSB7XG4gICAgaWYgKGNvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgdGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgaWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8VGVtcGxhdGVDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUZW1wbGF0ZUNvbXBvbmVudCk7XG4gICAgICBjb25zdCBpbmplY3RvcjogSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoeyBwcm92aWRlcnM6IFtdIH0pO1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSwgMCwgaW5qZWN0b3IsIHRoaXMuZ2VuZXJhdGVOZ0NvbnRlbnQoKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxvYmplY3Q+XG4gICkge31cblxuICBwcml2YXRlIGdlbmVyYXRlTmdDb250ZW50KCk6IEhUTUxFbGVtZW50W11bXSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLmNvbnRlbnQpO1xuICAgICAgcmV0dXJuIFtbZWxlbWVudF1dO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQ6IHt9ID0ge307XG4gICAgICBjb25zdCB2aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8e30+ID0gdGhpcy5jb250ZW50LmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZXh0KTtcbiAgICAgIHJldHVybiBbdmlld1JlZi5yb290Tm9kZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PG9iamVjdD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29udGVudCk7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxvYmplY3Q+ID0gZmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gICAgICByZXR1cm4gW1tjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudF1dO1xuICAgIH1cbiAgfVxufVxuIl19