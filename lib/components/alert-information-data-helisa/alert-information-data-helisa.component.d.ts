import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertInformationType } from './alert-information-helisa-type.enum';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AlertInformationDataHelisaComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AlertInformationDataHelisaComponent, "hel-alert-information-data-helisa", never, {}, {}, never, never>;
}
export {};

//# sourceMappingURL=alert-information-data-helisa.component.d.ts.map