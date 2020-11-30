import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class AlertConfirmDeleteDataHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertConfirmDeleteDataHelisaComponent>;
    data: AlertConfirmDeleteDataHelisaComponent;
    title: string;
    content: string;
    okLabel: string;
    cancelLabel: string;
    constructor(dialogRef: MatDialogRef<AlertConfirmDeleteDataHelisaComponent>, data: AlertConfirmDeleteDataHelisaComponent);
    ngOnInit(): void;
    onCancel(): void;
}
