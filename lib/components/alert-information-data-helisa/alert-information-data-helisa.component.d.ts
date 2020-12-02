import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AlertInformationType } from './alert-information-helisa-type.enum';
interface AlertInformationDataHelisaProperties {
    alertType: AlertInformationType;
    title: string;
    content: string;
    okLabel: string;
    cancelLabel: string;
}
export declare class AlertInformationDataHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertInformationDataHelisaComponent>;
    data: AlertInformationDataHelisaProperties;
    alertType: AlertInformationType;
    title: string;
    content: string;
    okLabel: string;
    cancelLabel: string;
    constructor(dialogRef: MatDialogRef<AlertInformationDataHelisaComponent>, data: AlertInformationDataHelisaProperties);
    ngOnInit(): void;
    onCancel(): void;
    hasTitle(): boolean;
    hasContent(): boolean;
    hasButtons(): boolean;
    hasCancelButton(): boolean;
}
export {};
