import { ElementRef } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import * as ɵngcc0 from '@angular/core';
export declare class HelTooltipDirective {
    private elemRef;
    tooltip: MatTooltip;
    /**
     * Mensaje a mostrar
     */
    message: string;
    /**
     * Tiempo antes de ocultarla el mensaje
     */
    hideDelay: number;
    /**
     * Tiempo antes de mostra el mensaje
     */
    showDelay: number;
    constructor(tooltip: MatTooltip, elemRef: ElementRef);
    mouseover(): void;
    private isEllipsisActive;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HelTooltipDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<HelTooltipDirective, "[helTooltip]", never, { "hideDelay": "hideDelay"; "showDelay": "showDelay"; "message": "helTooltip"; }, {}, never>;
}

//# sourceMappingURL=tooltip.directive.d.ts.map