import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastType } from './toast-type.enum';
import * as ɵngcc0 from '@angular/core';
export declare class ToastHelisaService {
    private snackBar;
    durationInSeconds: number;
    constructor(snackBar: MatSnackBar);
    showToast(type: ToastType, message: string, subMessages?: string[]): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToastHelisaService, never>;
}

//# sourceMappingURL=toast-helisa.service.d.ts.map