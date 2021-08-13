import { OnChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ExternalLinkDirective implements OnChanges {
    private platformId;
    relAttr: string;
    targetAttr: string;
    hrefAttr: string;
    href: string;
    constructor(platformId: string);
    ngOnChanges(): void;
    private isLinkExternal;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExternalLinkDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ExternalLinkDirective, "a[href]", never, { "href": "href"; }, {}, never>;
}

//# sourceMappingURL=external-link.directive.d.ts.map