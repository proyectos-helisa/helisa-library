import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertHelisaType } from './alert-helisa-type.enum';
interface AlertHelisaProperties {
    title: string;
    content: string;
    type: AlertHelisaType;
    okLabel: string;
    cancelLabel: string;
}
export declare class AlertHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertHelisaComponent>;
    data: AlertHelisaProperties;
    content: string;
    title: string;
    hasCancel: boolean;
    okLabel: string;
    cancelLabel: string;
    constructor(dialogRef: MatDialogRef<AlertHelisaComponent>, data: AlertHelisaProperties);
    ngOnInit(): void;
    onCancel(): void;
}
export {};
