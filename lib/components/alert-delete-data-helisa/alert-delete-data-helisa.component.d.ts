import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class AlertDeleteDataHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertDeleteDataHelisaComponent>;
    data: AlertDeleteDataHelisaComponent;
    title: string;
    content: string;
    okLabel: string;
    cancelLabel: string;
    z: any;
    constructor(dialogRef: MatDialogRef<AlertDeleteDataHelisaComponent>, data: AlertDeleteDataHelisaComponent);
    ngOnInit(): void;
    onCancel(): void;
}
