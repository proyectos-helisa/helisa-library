import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlertHelisaType } from './alert-helisa-type.enum';
export declare class AlertHelisaService {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(type: AlertHelisaType, title: string, content: string, okLabel?: string, cancelLabel?: string): Observable<boolean>;
}
