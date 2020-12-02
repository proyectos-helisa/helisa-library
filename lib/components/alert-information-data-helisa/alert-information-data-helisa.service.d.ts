import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { AlertInformationType } from './alert-information-helisa-type.enum';
export declare class AlertInformationDataHelisaService {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(alertType: AlertInformationType, title?: string, content?: string, okLabel?: string, cancelLabel?: string): Observable<boolean>;
}
