import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
interface AlertLostDataHelisaProperties {
    title: string;
    content: string;
    okLabel: string;
    cancelLabel: string;
}
export declare class AlertLostDataHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertLostDataHelisaComponent>;
    data: AlertLostDataHelisaProperties;
    title: string;
    content: string;
    okLabel: string;
    cancelLabel: string;
    constructor(dialogRef: MatDialogRef<AlertLostDataHelisaComponent>, data: AlertLostDataHelisaProperties);
    ngOnInit(): void;
    onCancel(): void;
}
export {};
