import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastType } from './toast-type.enum';
export declare class ToastHelisaService {
    private snackBar;
    durationInSeconds: number;
    constructor(snackBar: MatSnackBar);
    showToast(type: ToastType, message: string, subMessages?: string[]): void;
}
