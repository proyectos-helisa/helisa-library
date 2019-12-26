export declare class ExternalLinkDirective {
    private platformId;
    relAttr: string;
    targetAttr: string;
    hrefAttr: string;
    href: string;
    constructor(platformId: string);
    ngOnChanges(): void;
    private isLinkExternal;
}
