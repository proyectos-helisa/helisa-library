import { ElementRef } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
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
}
