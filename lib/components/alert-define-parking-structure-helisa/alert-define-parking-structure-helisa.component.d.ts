import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
interface AlertDefineParkingStructureProperties {
    title: string;
    content: string;
}
export declare class AlertDefineParkingStructureHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertDefineParkingStructureHelisaComponent>;
    data: AlertDefineParkingStructureProperties;
    content: string;
    constructor(dialogRef: MatDialogRef<AlertDefineParkingStructureHelisaComponent>, data: AlertDefineParkingStructureProperties);
    ngOnInit(): void;
    onCancel(): void;
}
export {};
