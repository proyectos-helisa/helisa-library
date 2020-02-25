import { ComponentFactoryResolver, Injector, Renderer2, TemplateRef, Type, ViewContainerRef } from '@angular/core';
export declare class TemplateDirective {
    private renderer;
    private injector;
    private resolver;
    private vcr;
    private templateRef;
    private componentRef;
    private content;
    appTemplateNode: string | TemplateRef<object> | Type<object>;
    constructor(renderer: Renderer2, injector: Injector, resolver: ComponentFactoryResolver, vcr: ViewContainerRef, templateRef: TemplateRef<object>);
    private generateNgContent;
}
