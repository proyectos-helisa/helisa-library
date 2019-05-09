import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { AlertHelisaType } from './alert-helisa-type.enum';
export declare class AlertHelisaService {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(type: AlertHelisaType, title: String, content: String): Observable<any>;
}
