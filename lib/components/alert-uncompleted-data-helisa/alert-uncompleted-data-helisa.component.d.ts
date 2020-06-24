import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
interface AlertUncompletedDataHelisaProperties {
    title: string;
    content: string;
    okLabel: string;
    cancelLabel: string;
}
export declare class AlertUncompletedDataHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertUncompletedDataHelisaComponent>;
    data: AlertUncompletedDataHelisaProperties;
    title: string;
    content: string;
    okLabel: string;
    cancelLabel: string;
    constructor(dialogRef: MatDialogRef<AlertUncompletedDataHelisaComponent>, data: AlertUncompletedDataHelisaProperties);
    ngOnInit(): void;
    onCancel(): void;
}
export {};
