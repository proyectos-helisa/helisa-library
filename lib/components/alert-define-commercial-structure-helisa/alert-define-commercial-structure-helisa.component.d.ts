import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
interface AlertDefineCommercialStructureProperties {
    title: string;
    content: string;
}
export declare class AlertDefineCommercialStructureHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertDefineCommercialStructureHelisaComponent>;
    data: AlertDefineCommercialStructureProperties;
    content: string;
    constructor(dialogRef: MatDialogRef<AlertDefineCommercialStructureHelisaComponent>, data: AlertDefineCommercialStructureProperties);
    ngOnInit(): void;
    onCancel(): void;
}
export {};
