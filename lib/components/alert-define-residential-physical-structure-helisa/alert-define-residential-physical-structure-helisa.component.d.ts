import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
interface AlertDefineResidentialPhysicalStructureProperties {
    title: string;
    content: string;
}
export declare class AlertDefineResidentialPhysicalStructureHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertDefineResidentialPhysicalStructureHelisaComponent>;
    data: AlertDefineResidentialPhysicalStructureProperties;
    content: string;
    constructor(dialogRef: MatDialogRef<AlertDefineResidentialPhysicalStructureHelisaComponent>, data: AlertDefineResidentialPhysicalStructureProperties);
    ngOnInit(): void;
    onCancel(): void;
}
export {};
