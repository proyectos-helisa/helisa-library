import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertInformationType } from './alert-information-helisa-type.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/dialog';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@angular/material/button';

function AlertInformationDataHelisaComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h1", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.title);
} }
function AlertInformationDataHelisaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.content);
} }
function AlertInformationDataHelisaComponent_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("mat-dialog-close", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.cancelLabel);
} }
function AlertInformationDataHelisaComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, AlertInformationDataHelisaComponent_div_2_button_1_Template, 2, 2, "button", 6);
    ɵngcc0.ɵɵelementStart(2, "button", 7);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.hasCancelButton());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("mat-dialog-close", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.okLabel);
} }
const TITLE_BY_ALERT_TYPE = ['!Esta transacción requiere autorización!',
    '',
    '¿Está seguro que debe anular esta información?',
    '',
    '¿Está seguro de querer perder lo ya hecho?',
    'No ha suministrado la información necesaria.',
    '',
    '',
    '',
    ''
];
const CONTENT_BY_ALERT_TYPE = ['',
    '¿Esta seguro que desea eliminar esta información?',
    'Al anular este concepto, quedará la huella de todo lo que se hizo apoyados en su información. No es una eliminación tácita, es suprimir su uso en adelante.',
    'Rectifique. Hay información no válida',
    'Si no está seguro, puede continuar o "aplicar" y posteriormente cuando tenga clara las respuestas, usando la opción de modificar podrá completar el concepto.',
    'Si insite en grabar así, este concepto no será utilizable hasta su conclusión satisfactoria, que deberá completar posteriormente modificando el concepto.',
    'Elemento sin información requerida. Modifíquelo para completarlo.',
    'Primero defina la estructura comercial en configuración.',
    'Primero defina la estructura zona de parqueaderos en configuración.',
    'Primero defina la estructura física residencial en configuración.',
    'No fueron encontradas coincidencias con el criterio de búsqueda.',
];
const OK_LABEL_BY_ALERT_TYPE = ['Solicitarla',
    'Lo asumo',
    'Lo asumo',
    '',
    'Lo asumo',
    'Lo asumo',
    'Aceptar',
    '',
    '',
    ''
];
const CANCEL_LABEL_BY_ALERT_TYPE = ['Negarla',
    'Me retracto',
    'Me retracto',
    '',
    'Me retracto',
    'Me retracto',
    '',
    '',
    '',
    ''
];
export class AlertInformationDataHelisaComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.alertType = data.alertType;
        this.title = data.title;
        if (this.title === undefined) {
            this.title = TITLE_BY_ALERT_TYPE[this.alertType];
        }
        this.content = data.content;
        if (this.content === undefined) {
            this.content = CONTENT_BY_ALERT_TYPE[this.alertType];
        }
        this.okLabel = data.okLabel;
        if (this.okLabel === undefined) {
            this.okLabel = OK_LABEL_BY_ALERT_TYPE[this.alertType];
        }
        this.cancelLabel = data.cancelLabel;
        if (this.cancelLabel === undefined) {
            this.cancelLabel = CANCEL_LABEL_BY_ALERT_TYPE[this.alertType];
        }
        dialogRef.disableClose = true;
        dialogRef.keydownEvents().subscribe((event) => {
            if (event.code === 'Escape') {
                this.dialogRef.close(this.onCancel());
            }
        });
    }
    ngOnInit() {
        if (this.alertType === AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === AlertInformationType.DEFINE_PARKING_STRUCTURE ||
            this.alertType === AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE) {
            setTimeout(() => {
                this.dialogRef.close();
            }, 3000);
        }
    }
    onCancel() {
        this.dialogRef.close();
    }
    hasTitle() {
        return this.alertType === AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === AlertInformationType.DELETE_DATA ||
            this.alertType === AlertInformationType.LOST_DATA || this.alertType === AlertInformationType.UNCOMPLETED_DATA;
    }
    hasContent() {
        return this.alertType === AlertInformationType.CONFIRM_DELETE_DATA || this.alertType === AlertInformationType.DELETE_DATA ||
            this.alertType === AlertInformationType.INFORMATION_NOT_VALID || this.alertType === AlertInformationType.LOST_DATA ||
            this.alertType === AlertInformationType.UNCOMPLETED_DATA || this.alertType === AlertInformationType.UNCOMPLETED_SELECTED_DATA ||
            this.alertType === AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === AlertInformationType.DEFINE_PARKING_STRUCTURE ||
            this.alertType === AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE || this.alertType === AlertInformationType.NO_SEARCH_RESULTS;
    }
    hasButtons() {
        return this.alertType === AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === AlertInformationType.CONFIRM_DELETE_DATA ||
            this.alertType === AlertInformationType.DELETE_DATA || this.alertType === AlertInformationType.LOST_DATA ||
            this.alertType === AlertInformationType.UNCOMPLETED_DATA || this.alertType === AlertInformationType.UNCOMPLETED_SELECTED_DATA;
    }
    hasCancelButton() {
        return this.alertType !== AlertInformationType.UNCOMPLETED_SELECTED_DATA;
    }
}
AlertInformationDataHelisaComponent.ɵfac = function AlertInformationDataHelisaComponent_Factory(t) { return new (t || AlertInformationDataHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MatDialogRef), ɵngcc0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
AlertInformationDataHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AlertInformationDataHelisaComponent, selectors: [["hel-alert-information-data-helisa"]], decls: 3, vars: 3, consts: [["mat-dialog-title", "", 4, "ngIf"], ["mat-dialog-content", "", 4, "ngIf"], ["mat-dialog-action", "", 4, "ngIf"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-action", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", 4, "ngIf"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function AlertInformationDataHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, AlertInformationDataHelisaComponent_h1_0_Template, 2, 1, "h1", 0);
        ɵngcc0.ɵɵtemplate(1, AlertInformationDataHelisaComponent_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, AlertInformationDataHelisaComponent_div_2_Template, 4, 3, "div", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasTitle());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasContent());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasButtons());
    } }, directives: [ɵngcc2.NgIf, ɵngcc1.MatDialogTitle, ɵngcc1.MatDialogContent, ɵngcc3.MatButton, ɵngcc1.MatDialogClose], styles: [""] });
AlertInformationDataHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertInformationDataHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-alert-information-data-helisa',
                template: "<h1 mat-dialog-title *ngIf=\"hasTitle()\">{{ title }}</h1>\n<div mat-dialog-content *ngIf=\"hasContent()\">{{ content }}</div>\n<div mat-dialog-action *ngIf=\"hasButtons()\">\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial *ngIf=\"hasCancelButton()\">{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\n</div>\n",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy9saWIvY29tcG9uZW50cy9hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYS9hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVNUUsTUFBTSxtQkFBbUIsR0FBYSxDQUFDLDBDQUEwQztBQUNqRixJQUF1QyxFQUFFO0FBQ3pDLElBQXVDLGdEQUFnRDtBQUN2RixJQUF1QyxFQUFFO0FBQ3pDLElBQXVDLDRDQUE0QztBQUNuRixJQUF1Qyw4Q0FBOEM7QUFDckYsSUFBdUMsRUFBRTtBQUN6QyxJQUF1QyxFQUFFO0FBQ3pDLElBQXVDLEVBQUU7QUFDekMsSUFBdUMsRUFBRTtBQUN6QyxDQUF1QyxDQUFDO0FBQ3hDLE1BQU0scUJBQXFCLEdBQWEsQ0FBQyxFQUFFO0FBQzNDLElBQXlDLG1EQUFtRDtBQUM1RixJQUF5Qyw2SkFBNko7QUFDdE0sSUFBeUMsdUNBQXVDO0FBQ2hGLElBQXlDLCtKQUErSjtBQUN4TSxJQUF5QywySkFBMko7QUFDcE0sSUFBeUMsbUVBQW1FO0FBQzVHLElBQXlDLDBEQUEwRDtBQUNuRyxJQUF5QyxxRUFBcUU7QUFDOUcsSUFBeUMsbUVBQW1FO0FBQzVHLElBQXlDLGtFQUFrRTtBQUMzRyxDQUF5QyxDQUFDO0FBQzFDLE1BQU0sc0JBQXNCLEdBQWEsQ0FBQyxhQUFhO0FBQ3ZELElBQTBDLFVBQVU7QUFDcEQsSUFBMEMsVUFBVTtBQUNwRCxJQUEwQyxFQUFFO0FBQzVDLElBQTBDLFVBQVU7QUFDcEQsSUFBMEMsVUFBVTtBQUNwRCxJQUEwQyxTQUFTO0FBQ25ELElBQTBDLEVBQUU7QUFDNUMsSUFBMEMsRUFBRTtBQUM1QyxJQUEwQyxFQUFFO0FBQzVDLENBQTBDLENBQUM7QUFDM0MsTUFBTSwwQkFBMEIsR0FBYSxDQUFDLFNBQVM7QUFDdkQsSUFBOEMsYUFBYTtBQUMzRCxJQUE4QyxhQUFhO0FBQzNELElBQThDLEVBQUU7QUFDaEQsSUFBOEMsYUFBYTtBQUMzRCxJQUE4QyxhQUFhO0FBQzNELElBQThDLEVBQUU7QUFDaEQsSUFBOEMsRUFBRTtBQUNoRCxJQUE4QyxFQUFFO0FBQ2hELElBQThDLEVBQUU7QUFDaEQsQ0FBOEMsQ0FBQztBQU8vQyxNQUFNLE9BQU8sbUNBQW1DO0FBQUcsSUFRakQsWUFDUyxTQUE0RCxFQUNuQyxJQUEwQztBQUMzRSxRQUZRLGNBQVMsR0FBVCxTQUFTLENBQW1EO0FBQUMsUUFDcEMsU0FBSSxHQUFKLElBQUksQ0FBc0M7QUFDOUUsUUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDcEMsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDNUIsUUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQ2xDLFlBQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkQsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ2hDLFFBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtBQUNwQyxZQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNELFNBQUs7QUFDTCxRQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNoQyxRQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7QUFDcEMsWUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1RCxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDeEMsUUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO0FBQ3hDLFlBQU0sSUFBSSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEUsU0FBSztBQUNMLFFBQUksU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDbEMsUUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBb0IsRUFBUSxFQUFFO0FBQ3ZFLFlBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUNuQyxnQkFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM5QyxhQUFPO0FBQ1AsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUFLLFFBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLG9CQUFvQixDQUFDLDJCQUEyQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssb0JBQW9CLENBQUMsd0JBQXdCO0FBQy9JLFlBQVEsSUFBSSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyw0QkFBNEIsRUFBRTtBQUM5RSxZQUFNLFVBQVUsQ0FBQyxHQUFTLEVBQUU7QUFDNUIsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQixZQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNmLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFBSyxRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQUssUUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssb0JBQW9CLENBQUMseUJBQXlCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyxXQUFXO0FBQ25JLFlBQVcsSUFBSSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN6SCxJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVU7QUFBSyxRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLG9CQUFvQixDQUFDLFdBQVc7QUFDN0gsWUFBVyxJQUFJLENBQUMsU0FBUyxLQUFLLG9CQUFvQixDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssb0JBQW9CLENBQUMsU0FBUztBQUM3SCxZQUFXLElBQUksQ0FBQyxTQUFTLEtBQUssb0JBQW9CLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyx5QkFBeUI7QUFDeEksWUFBVyxJQUFJLENBQUMsU0FBUyxLQUFLLG9CQUFvQixDQUFDLDJCQUEyQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssb0JBQW9CLENBQUMsd0JBQXdCO0FBQ2xKLFlBQVcsSUFBSSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyw0QkFBNEIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO0FBQzdJLElBQUUsQ0FBQztBQUNILElBQ0UsVUFBVTtBQUFLLFFBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLG9CQUFvQixDQUFDLHlCQUF5QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssb0JBQW9CLENBQUMsbUJBQW1CO0FBQzNJLFlBQVcsSUFBSSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyxTQUFTO0FBQ25ILFlBQVcsSUFBSSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLG9CQUFvQixDQUFDLHlCQUF5QixDQUFDO0FBQ3pJLElBQUUsQ0FBQztBQUNILElBQ0UsZUFBZTtBQUFLLFFBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyx5QkFBeUIsQ0FBQztBQUM3RSxJQUFFLENBQUM7QUFDSDsrREE3RUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxtQ0FBbUMsa0JBQzdDO2lUQUE2RCw0Q0FFOUQ7Ozs7Ozs7Ozs7NklBQ0k7QUFBQztBQUE2RCxZQTlEMUQsWUFBWTtBQUFJLDRDQXdFcEIsTUFBTSxTQUFDLGVBQWU7QUFBUTs7Ozs7Ozs7Ozs7a0NBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IEFsZXJ0SW5mb3JtYXRpb25UeXBlIH0gZnJvbSAnLi9hbGVydC1pbmZvcm1hdGlvbi1oZWxpc2EtdHlwZS5lbnVtJztcblxuaW50ZXJmYWNlIEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhUHJvcGVydGllcyB7XG4gIGFsZXJ0VHlwZTogQWxlcnRJbmZvcm1hdGlvblR5cGU7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgb2tMYWJlbDogc3RyaW5nO1xuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xufVxuXG5jb25zdCBUSVRMRV9CWV9BTEVSVF9UWVBFOiBzdHJpbmdbXSA9IFsnIUVzdGEgdHJhbnNhY2Npw7NuIHJlcXVpZXJlIGF1dG9yaXphY2nDs24hJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ8K/RXN0w6Egc2VndXJvIHF1ZSBkZWJlIGFudWxhciBlc3RhIGluZm9ybWFjacOzbj8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnwr9Fc3TDoSBzZWd1cm8gZGUgcXVlcmVyIHBlcmRlciBsbyB5YSBoZWNobz8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vIGhhIHN1bWluaXN0cmFkbyBsYSBpbmZvcm1hY2nDs24gbmVjZXNhcmlhLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuY29uc3QgQ09OVEVOVF9CWV9BTEVSVF9UWVBFOiBzdHJpbmdbXSA9IFsnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ8K/RXN0YSBzZWd1cm8gcXVlIGRlc2VhIGVsaW1pbmFyIGVzdGEgaW5mb3JtYWNpw7NuPycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBbCBhbnVsYXIgZXN0ZSBjb25jZXB0bywgcXVlZGFyw6EgbGEgaHVlbGxhIGRlIHRvZG8gbG8gcXVlIHNlIGhpem8gYXBveWFkb3MgZW4gc3UgaW5mb3JtYWNpw7NuLiBObyBlcyB1bmEgZWxpbWluYWNpw7NuIHTDoWNpdGEsIGVzIHN1cHJpbWlyIHN1IHVzbyBlbiBhZGVsYW50ZS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUmVjdGlmaXF1ZS4gSGF5IGluZm9ybWFjacOzbiBubyB2w6FsaWRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NpIG5vIGVzdMOhIHNlZ3VybywgcHVlZGUgY29udGludWFyIG8gXCJhcGxpY2FyXCIgeSBwb3N0ZXJpb3JtZW50ZSBjdWFuZG8gdGVuZ2EgY2xhcmEgbGFzIHJlc3B1ZXN0YXMsIHVzYW5kbyBsYSBvcGNpw7NuIGRlIG1vZGlmaWNhciBwb2Ryw6EgY29tcGxldGFyIGVsIGNvbmNlcHRvLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTaSBpbnNpdGUgZW4gZ3JhYmFyIGFzw60sIGVzdGUgY29uY2VwdG8gbm8gc2Vyw6EgdXRpbGl6YWJsZSBoYXN0YSBzdSBjb25jbHVzacOzbiBzYXRpc2ZhY3RvcmlhLCBxdWUgZGViZXLDoSBjb21wbGV0YXIgcG9zdGVyaW9ybWVudGUgbW9kaWZpY2FuZG8gZWwgY29uY2VwdG8uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0VsZW1lbnRvIHNpbiBpbmZvcm1hY2nDs24gcmVxdWVyaWRhLiBNb2RpZsOtcXVlbG8gcGFyYSBjb21wbGV0YXJsby4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUHJpbWVybyBkZWZpbmEgbGEgZXN0cnVjdHVyYSBjb21lcmNpYWwgZW4gY29uZmlndXJhY2nDs24uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1ByaW1lcm8gZGVmaW5hIGxhIGVzdHJ1Y3R1cmEgem9uYSBkZSBwYXJxdWVhZGVyb3MgZW4gY29uZmlndXJhY2nDs24uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1ByaW1lcm8gZGVmaW5hIGxhIGVzdHJ1Y3R1cmEgZsOtc2ljYSByZXNpZGVuY2lhbCBlbiBjb25maWd1cmFjacOzbi4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTm8gZnVlcm9uIGVuY29udHJhZGFzIGNvaW5jaWRlbmNpYXMgY29uIGVsIGNyaXRlcmlvIGRlIGLDunNxdWVkYS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5jb25zdCBPS19MQUJFTF9CWV9BTEVSVF9UWVBFOiBzdHJpbmdbXSA9IFsnU29saWNpdGFybGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xvIGFzdW1vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMbyBhc3VtbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMbyBhc3VtbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTG8gYXN1bW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjZXB0YXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5jb25zdCBDQU5DRUxfTEFCRUxfQllfQUxFUlRfVFlQRTogc3RyaW5nW10gPSBbJ05lZ2FybGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNZSByZXRyYWN0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01lIHJldHJhY3RvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTWUgcmV0cmFjdG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNZSByZXRyYWN0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC1hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRJbmZvcm1hdGlvbkRhdGFIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFsZXJ0VHlwZTogQWxlcnRJbmZvcm1hdGlvblR5cGU7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgb2tMYWJlbDogc3RyaW5nO1xuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydEluZm9ybWF0aW9uRGF0YUhlbGlzYUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBBbGVydEluZm9ybWF0aW9uRGF0YUhlbGlzYVByb3BlcnRpZXNcbiAgKSB7XG4gICAgdGhpcy5hbGVydFR5cGUgPSBkYXRhLmFsZXJ0VHlwZTtcbiAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICBpZiAodGhpcy50aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRpdGxlID0gVElUTEVfQllfQUxFUlRfVFlQRVt0aGlzLmFsZXJ0VHlwZV07XG4gICAgfVxuICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudDtcbiAgICBpZiAodGhpcy5jb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IENPTlRFTlRfQllfQUxFUlRfVFlQRVt0aGlzLmFsZXJ0VHlwZV07XG4gICAgfVxuICAgIHRoaXMub2tMYWJlbCA9IGRhdGEub2tMYWJlbDtcbiAgICBpZiAodGhpcy5va0xhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2tMYWJlbCA9IE9LX0xBQkVMX0JZX0FMRVJUX1RZUEVbdGhpcy5hbGVydFR5cGVdO1xuICAgIH1cbiAgICB0aGlzLmNhbmNlbExhYmVsID0gZGF0YS5jYW5jZWxMYWJlbDtcbiAgICBpZiAodGhpcy5jYW5jZWxMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNhbmNlbExhYmVsID0gQ0FOQ0VMX0xBQkVMX0JZX0FMRVJUX1RZUEVbdGhpcy5hbGVydFR5cGVdO1xuICAgIH1cbiAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5ERUZJTkVfQ09NTUVSQ0lBTF9TVFJVQ1RVUkUgfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkRFRklORV9QQVJLSU5HX1NUUlVDVFVSRSB8fFxuICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuREVGSU5FX1JFU0lERU5DSUFMX1NUUlVDVFVSRSkge1xuICAgICAgc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbiAgaGFzVGl0bGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5BVVRIT1JJWkFUSU9OX1RSQU5TQUNUSU9OIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5ERUxFVEVfREFUQSB8fFxuICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuTE9TVF9EQVRBIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5VTkNPTVBMRVRFRF9EQVRBO1xuICB9XG5cbiAgaGFzQ29udGVudCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkNPTkZJUk1fREVMRVRFX0RBVEEgfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkRFTEVURV9EQVRBIHx8XG4gICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5JTkZPUk1BVElPTl9OT1RfVkFMSUQgfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkxPU1RfREFUQSB8fFxuICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuVU5DT01QTEVURURfREFUQSB8fCB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuVU5DT01QTEVURURfU0VMRUNURURfREFUQSB8fFxuICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuREVGSU5FX0NPTU1FUkNJQUxfU1RSVUNUVVJFIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5ERUZJTkVfUEFSS0lOR19TVFJVQ1RVUkUgfHxcbiAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkRFRklORV9SRVNJREVOQ0lBTF9TVFJVQ1RVUkUgfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLk5PX1NFQVJDSF9SRVNVTFRTO1xuICB9XG5cbiAgaGFzQnV0dG9ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkFVVEhPUklaQVRJT05fVFJBTlNBQ1RJT04gfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkNPTkZJUk1fREVMRVRFX0RBVEEgfHxcbiAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkRFTEVURV9EQVRBIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5MT1NUX0RBVEEgfHxcbiAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLlVOQ09NUExFVEVEX0RBVEEgfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLlVOQ09NUExFVEVEX1NFTEVDVEVEX0RBVEE7XG4gIH1cblxuICBoYXNDYW5jZWxCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWxlcnRUeXBlICE9PSBBbGVydEluZm9ybWF0aW9uVHlwZS5VTkNPTVBMRVRFRF9TRUxFQ1RFRF9EQVRBO1xuICB9XG59XG4iXX0=