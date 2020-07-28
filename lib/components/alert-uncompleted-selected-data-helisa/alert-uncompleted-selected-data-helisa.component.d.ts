import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
interface AlertUncompletedSelectedDataHelisaProperties {
    title: string;
    content: string;
    okLabel: string;
    cancelLabel: string;
}
export declare class AlertUncompletedSelectedDataHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertUncompletedSelectedDataHelisaComponent>;
    data: AlertUncompletedSelectedDataHelisaProperties;
    content: string;
    okLabel: string;
    constructor(dialogRef: MatDialogRef<AlertUncompletedSelectedDataHelisaComponent>, data: AlertUncompletedSelectedDataHelisaProperties);
    ngOnInit(): void;
    onCancel(): void;
}
export {};
