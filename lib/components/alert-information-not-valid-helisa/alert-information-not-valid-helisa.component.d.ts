import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
interface AlertInformationNotValidProperties {
    title: string;
    content: string;
}
export declare class AlertInformationNotValidHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertInformationNotValidHelisaComponent>;
    data: AlertInformationNotValidProperties;
    content: string;
    constructor(dialogRef: MatDialogRef<AlertInformationNotValidHelisaComponent>, data: AlertInformationNotValidProperties);
    ngOnInit(): void;
    onCancel(): void;
}
export {};
