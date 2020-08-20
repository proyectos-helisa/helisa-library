import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
interface AlertAuthorizationTransactionHelisaProperties {
    title: string;
    okLabel: string;
    cancelLabel: string;
}
export declare class AlertAuthorizationTransactionHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertAuthorizationTransactionHelisaComponent>;
    data: AlertAuthorizationTransactionHelisaProperties;
    title: string;
    okLabel: string;
    cancelLabel: string;
    constructor(dialogRef: MatDialogRef<AlertAuthorizationTransactionHelisaComponent>, data: AlertAuthorizationTransactionHelisaProperties);
    ngOnInit(): void;
    onCancel(): void;
}
export {};
