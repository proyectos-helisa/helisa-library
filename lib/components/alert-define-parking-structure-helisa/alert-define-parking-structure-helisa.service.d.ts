import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
export declare class AlertDefineParkingStructureHelisaService {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(title?: string, content?: string): Observable<boolean>;
}