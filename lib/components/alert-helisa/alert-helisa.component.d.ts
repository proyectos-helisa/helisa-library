import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class AlertHelisaComponent implements OnInit {
    dialogRef: MatDialogRef<AlertHelisaComponent>;
    data: any;
    content: string;
    title: String;
    hasCancel: boolean;
    constructor(dialogRef: MatDialogRef<AlertHelisaComponent>, data: any);
    ngOnInit(): void;
    onCancel(): void;
}
