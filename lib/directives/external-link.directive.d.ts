import { OnChanges } from '@angular/core';
export declare class ExternalLinkDirective implements OnChanges {
    private platformId;
    relAttr: string;
    targetAttr: string;
    hrefAttr: string;
    href: string;
    constructor(platformId: string);
    ngOnChanges(): void;
    private isLinkExternal;
}
