import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AlertHelisaType } from './alert-helisa-type.enum';
interface AlertHelisaProperties {
    title: string;
    content: string;
    type: AlertHelisaType;
}
export declare class AlertHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertHelisaComponent>;
    data: AlertHelisaProperties;
    content: string;
    title: string;
    hasCancel: boolean;
    constructor(dialogRef: MatDialogRef<AlertHelisaComponent>, data: AlertHelisaProperties);
    ngOnInit(): void;
    onCancel(): void;
}
export {};
