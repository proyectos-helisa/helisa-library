import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlertInformationType } from './alert-information-helisa-type.enum';
import * as ɵngcc0 from '@angular/core';
export declare class AlertInformationDataHelisaService {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(alertType: AlertInformationType, title?: string, content?: string, okLabel?: string, cancelLabel?: string): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AlertInformationDataHelisaService, never>;
}

//# sourceMappingURL=alert-information-data-helisa.service.d.ts.map