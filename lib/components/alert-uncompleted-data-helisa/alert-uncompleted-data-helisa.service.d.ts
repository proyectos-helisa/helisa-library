import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
export declare class AlertUncompletedDataHelisaService {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(title?: string, content?: string, okLabel?: string, cancelLabel?: string): Observable<boolean>;
}
