import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlertHelisaType } from './alert-helisa-type.enum';
import * as ɵngcc0 from '@angular/core';
export declare class AlertHelisaService {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(type: AlertHelisaType, title: string, content: string, okLabel?: string, cancelLabel?: string): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AlertHelisaService, never>;
}

//# sourceMappingURL=alert-helisa.service.d.ts.map