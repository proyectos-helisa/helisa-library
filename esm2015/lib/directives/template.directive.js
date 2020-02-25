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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHdCQUF3QixFQUV4QixTQUFTLEVBRVQsUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVYLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUtqRixNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQWtCNUIsWUFDVSxRQUFtQixFQUNuQixRQUFrQixFQUNsQixRQUFrQyxFQUNsQyxHQUFxQixFQUNyQixXQUFnQztRQUpoQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO0lBQ3ZDLENBQUM7Ozs7O0lBcEJKLElBQWEsZUFBZSxDQUFDLE9BQW9EO1FBQy9FLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixPQUFPO2FBQ1I7O2tCQUNLLE9BQU8sR0FBd0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQzs7a0JBQ3ZHLFFBQVEsR0FBYSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUM5RjtJQUNILENBQUM7Ozs7O0lBVU8saUJBQWlCO1FBQ3ZCLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTs7a0JBQzlCLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNuRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBRTs7a0JBQ3hDLE9BQU8sR0FBTyxFQUFFOztrQkFDaEIsT0FBTyxHQUF3QixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUM3RSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO2FBQU07O2tCQUNDLE9BQU8sR0FBNkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOztrQkFDdkYsWUFBWSxHQUF5QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEUsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCOzs7O1lBVEMsU0FBUztZQUZULFFBQVE7WUFKUix3QkFBd0I7WUFTeEIsZ0JBQWdCO1lBRmhCLFdBQVc7Ozs4QkFhVixLQUFLOzs7Ozs7O0lBSE4seUNBQXNEOzs7OztJQUN0RCxvQ0FBNkQ7Ozs7O0lBaUIzRCxxQ0FBMkI7Ozs7O0lBQzNCLHFDQUEwQjs7Ozs7SUFDMUIscUNBQTBDOzs7OztJQUMxQyxnQ0FBNkI7Ozs7O0lBQzdCLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdHJlZS1oZWxpc2EvdGVtcGxhdGUuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcFRlbXBsYXRlTm9kZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgcHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUZW1wbGF0ZUNvbXBvbmVudD47XHJcbiAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxvYmplY3Q+IHwgVHlwZTxvYmplY3Q+O1xyXG5cclxuICBASW5wdXQoKSBzZXQgYXBwVGVtcGxhdGVOb2RlKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPG9iamVjdD4gfCBUeXBlPG9iamVjdD4pIHtcclxuICAgIGlmIChjb250ZW50ID09IG51bGwpIHtcclxuICAgICAgdGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgaWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8VGVtcGxhdGVDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUZW1wbGF0ZUNvbXBvbmVudCk7XHJcbiAgICAgIGNvbnN0IGluamVjdG9yOiBJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7IHByb3ZpZGVyczogW10gfSk7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnksIDAsIGluamVjdG9yLCB0aGlzLmdlbmVyYXRlTmdDb250ZW50KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8b2JqZWN0PlxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZU5nQ29udGVudCgpOiBIVE1MRWxlbWVudFtdW10ge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMuY29udGVudCk7XHJcbiAgICAgIHJldHVybiBbW2VsZW1lbnRdXTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgY29uc3QgY29udGV4dDoge30gPSB7fTtcclxuICAgICAgY29uc3Qgdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHt9PiA9IHRoaXMuY29udGVudC5jcmVhdGVFbWJlZGRlZFZpZXcoY29udGV4dCk7XHJcbiAgICAgIHJldHVybiBbdmlld1JlZi5yb290Tm9kZXNdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxvYmplY3Q+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICBjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxvYmplY3Q+ID0gZmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICAgIHJldHVybiBbW2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XV07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==