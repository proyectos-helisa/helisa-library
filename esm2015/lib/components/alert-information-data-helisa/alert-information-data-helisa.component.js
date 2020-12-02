/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertInformationType } from './alert-information-helisa-type.enum';
/**
 * @record
 */
function AlertInformationDataHelisaProperties() { }
if (false) {
    /** @type {?} */
    AlertInformationDataHelisaProperties.prototype.alertType;
    /** @type {?} */
    AlertInformationDataHelisaProperties.prototype.title;
    /** @type {?} */
    AlertInformationDataHelisaProperties.prototype.content;
    /** @type {?} */
    AlertInformationDataHelisaProperties.prototype.okLabel;
    /** @type {?} */
    AlertInformationDataHelisaProperties.prototype.cancelLabel;
}
/** @type {?} */
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
/** @type {?} */
const CONTENT_BY_ALERT_TYPE = ['',
    '¿Esta seguro que desea eliminar esta información?',
    'Al anular este concepto, quedará la huella de todo lo que se hizo apoyados en su información. No es una eliminación tácita, es suprimir su uso en adelante.',
    'Rectifique. Hay información no válida',
    'Si no está seguro, puede continuar o "aplicar" y posteriormente cuando tenga clara las respuestas, usando la opción de modificar podrá completar el concepto.',
    'Si insite en grabar así, este concepto no será utilizable hasta su conclusión satisfactoria, que deberá completar posteriormente modificando el concepto.',
    'Elemento sin información requerida. Modifíquelo para completarlo.',
    'Primero defina la estructura comercial en configuración.',
    'Primero defina la estructura zona de parqueaderos en configuración.',
    'Primero defina la estructura física residencial en configuración.'
];
/** @type {?} */
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
/** @type {?} */
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
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
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
        dialogRef.keydownEvents().subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event.code === 'Escape') {
                this.dialogRef.close(this.onCancel());
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.alertType === AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === AlertInformationType.DEFINE_PARKING_STRUCTURE ||
            this.alertType === AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.dialogRef.close();
            }), 3000);
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
    /**
     * @return {?}
     */
    hasTitle() {
        return this.alertType === AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === AlertInformationType.DELETE_DATA ||
            this.alertType === AlertInformationType.LOST_DATA || this.alertType === AlertInformationType.UNCOMPLETED_DATA;
    }
    /**
     * @return {?}
     */
    hasContent() {
        return this.alertType === AlertInformationType.CONFIRM_DELETE_DATA || this.alertType === AlertInformationType.DELETE_DATA ||
            this.alertType === AlertInformationType.INFORMATION_NOT_VALID || this.alertType === AlertInformationType.LOST_DATA ||
            this.alertType === AlertInformationType.UNCOMPLETED_DATA || this.alertType === AlertInformationType.UNCOMPLETED_SELECTED_DATA ||
            this.alertType === AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === AlertInformationType.DEFINE_PARKING_STRUCTURE ||
            this.alertType === AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE;
    }
    /**
     * @return {?}
     */
    hasButtons() {
        return this.alertType === AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === AlertInformationType.CONFIRM_DELETE_DATA ||
            this.alertType === AlertInformationType.DELETE_DATA || this.alertType === AlertInformationType.LOST_DATA ||
            this.alertType === AlertInformationType.UNCOMPLETED_DATA || this.alertType === AlertInformationType.UNCOMPLETED_SELECTED_DATA;
    }
    /**
     * @return {?}
     */
    hasCancelButton() {
        return this.alertType !== AlertInformationType.UNCOMPLETED_SELECTED_DATA;
    }
}
AlertInformationDataHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-alert-information-data-helisa',
                template: "<h1 mat-dialog-title *ngIf=\"hasTitle()\">{{ title }}</h1>\r\n<div mat-dialog-content *ngIf=\"hasContent()\">{{ content }}</div>\r\n<div mat-dialog-action *ngIf=\"hasButtons()\">\r\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial *ngIf=\"hasCancelButton()\">{{cancelLabel}}</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertInformationDataHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    AlertInformationDataHelisaComponent.prototype.alertType;
    /** @type {?} */
    AlertInformationDataHelisaComponent.prototype.title;
    /** @type {?} */
    AlertInformationDataHelisaComponent.prototype.content;
    /** @type {?} */
    AlertInformationDataHelisaComponent.prototype.okLabel;
    /** @type {?} */
    AlertInformationDataHelisaComponent.prototype.cancelLabel;
    /** @type {?} */
    AlertInformationDataHelisaComponent.prototype.dialogRef;
    /** @type {?} */
    AlertInformationDataHelisaComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUU1RSxtREFNQzs7O0lBTEMseURBQWdDOztJQUNoQyxxREFBYzs7SUFDZCx1REFBZ0I7O0lBQ2hCLHVEQUFnQjs7SUFDaEIsMkRBQW9COzs7TUFHaEIsbUJBQW1CLEdBQWEsQ0FBQywwQ0FBMEM7SUFDMUMsRUFBRTtJQUNGLGdEQUFnRDtJQUNoRCxFQUFFO0lBQ0YsNENBQTRDO0lBQzVDLDhDQUE4QztJQUM5QyxFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0NBQ0Y7O01BQ2pDLHFCQUFxQixHQUFhLENBQUMsRUFBRTtJQUNGLG1EQUFtRDtJQUNuRCw2SkFBNko7SUFDN0osdUNBQXVDO0lBQ3ZDLCtKQUErSjtJQUMvSiwySkFBMko7SUFDM0osbUVBQW1FO0lBQ25FLDBEQUEwRDtJQUMxRCxxRUFBcUU7SUFDckUsbUVBQW1FO0NBQ25FOztNQUNuQyxzQkFBc0IsR0FBYSxDQUFDLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtJQUNWLEVBQUU7SUFDRixVQUFVO0lBQ1YsVUFBVTtJQUNWLFNBQVM7SUFDVCxFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7Q0FDRjs7TUFDcEMsMEJBQTBCLEdBQWEsQ0FBQyxTQUFTO0lB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bml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFsZXJ0SW5mb3JtYXRpb25UeXBlIH0gZnJvbSAnLi9hbGVydC1pbmZvcm1hdGlvbi1oZWxpc2EtdHlwZS5lbnVtJztcclxuXHJcbmludGVyZmFjZSBBbGVydEluZm9ybWF0aW9uRGF0YUhlbGlzYVByb3BlcnRpZXMge1xyXG4gIGFsZXJ0VHlwZTogQWxlcnRJbmZvcm1hdGlvblR5cGU7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgb2tMYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRJVExFX0JZX0FMRVJUX1RZUEU6IHN0cmluZ1tdID0gWychRXN0YSB0cmFuc2FjY2nDs24gcmVxdWllcmUgYXV0b3JpemFjacOzbiEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ8K/RXN0w6Egc2VndXJvIHF1ZSBkZWJlIGFudWxhciBlc3RhIGluZm9ybWFjacOzbj8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ8K/RXN0w6Egc2VndXJvIGRlIHF1ZXJlciBwZXJkZXIgbG8geWEgaGVjaG8/JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vIGhhIHN1bWluaXN0cmFkbyBsYSBpbmZvcm1hY2nDs24gbmVjZXNhcmlhLicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuY29uc3QgQ09OVEVOVF9CWV9BTEVSVF9UWVBFOiBzdHJpbmdbXSA9IFsnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnwr9Fc3RhIHNlZ3VybyBxdWUgZGVzZWEgZWxpbWluYXIgZXN0YSBpbmZvcm1hY2nDs24/JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWwgYW51bGFyIGVzdGUgY29uY2VwdG8sIHF1ZWRhcsOhIGxhIGh1ZWxsYSBkZSB0b2RvIGxvIHF1ZSBzZSBoaXpvIGFwb3lhZG9zIGVuIHN1IGluZm9ybWFjacOzbi4gTm8gZXMgdW5hIGVsaW1pbmFjacOzbiB0w6FjaXRhLCBlcyBzdXByaW1pciBzdSB1c28gZW4gYWRlbGFudGUuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUmVjdGlmaXF1ZS4gSGF5IGluZm9ybWFjacOzbiBubyB2w6FsaWRhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2kgbm8gZXN0w6Egc2VndXJvLCBwdWVkZSBjb250aW51YXIgbyBcImFwbGljYXJcIiB5IHBvc3Rlcmlvcm1lbnRlIGN1YW5kbyB0ZW5nYSBjbGFyYSBsYXMgcmVzcHVlc3RhcywgdXNhbmRvIGxhIG9wY2nDs24gZGUgbW9kaWZpY2FyIHBvZHLDoSBjb21wbGV0YXIgZWwgY29uY2VwdG8uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2kgaW5zaXRlIGVuIGdyYWJhciBhc8OtLCBlc3RlIGNvbmNlcHRvIG5vIHNlcsOhIHV0aWxpemFibGUgaGFzdGEgc3UgY29uY2x1c2nDs24gc2F0aXNmYWN0b3JpYSwgcXVlIGRlYmVyw6EgY29tcGxldGFyIHBvc3Rlcmlvcm1lbnRlIG1vZGlmaWNhbmRvIGVsIGNvbmNlcHRvLicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0VsZW1lbnRvIHNpbiBpbmZvcm1hY2nDs24gcmVxdWVyaWRhLiBNb2RpZsOtcXVlbG8gcGFyYSBjb21wbGV0YXJsby4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQcmltZXJvIGRlZmluYSBsYSBlc3RydWN0dXJhIGNvbWVyY2lhbCBlbiBjb25maWd1cmFjacOzbi4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQcmltZXJvIGRlZmluYSBsYSBlc3RydWN0dXJhIHpvbmEgZGUgcGFycXVlYWRlcm9zIGVuIGNvbmZpZ3VyYWNpw7NuLicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1ByaW1lcm8gZGVmaW5hIGxhIGVzdHJ1Y3R1cmEgZsOtc2ljYSByZXNpZGVuY2lhbCBlbiBjb25maWd1cmFjacOzbi4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG5jb25zdCBPS19MQUJFTF9CWV9BTEVSVF9UWVBFOiBzdHJpbmdbXSA9IFsnU29saWNpdGFybGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTG8gYXN1bW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTG8gYXN1bW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xvIGFzdW1vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xvIGFzdW1vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjZXB0YXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuY29uc3QgQ0FOQ0VMX0xBQkVMX0JZX0FMRVJUX1RZUEU6IHN0cmluZ1tdID0gWydOZWdhcmxhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNZSByZXRyYWN0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTWUgcmV0cmFjdG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTWUgcmV0cmFjdG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01lIHJldHJhY3RvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydEluZm9ybWF0aW9uRGF0YUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGFsZXJ0VHlwZTogQWxlcnRJbmZvcm1hdGlvblR5cGU7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgb2tMYWJlbDogc3RyaW5nO1xyXG4gIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogQWxlcnRJbmZvcm1hdGlvbkRhdGFIZWxpc2FQcm9wZXJ0aWVzXHJcbiAgKSB7XHJcbiAgICB0aGlzLmFsZXJ0VHlwZSA9IGRhdGEuYWxlcnRUeXBlO1xyXG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XHJcbiAgICBpZiAodGhpcy50aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSBUSVRMRV9CWV9BTEVSVF9UWVBFW3RoaXMuYWxlcnRUeXBlXTtcclxuICAgIH1cclxuICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudDtcclxuICAgIGlmICh0aGlzLmNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSBDT05URU5UX0JZX0FMRVJUX1RZUEVbdGhpcy5hbGVydFR5cGVdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5va0xhYmVsID0gZGF0YS5va0xhYmVsO1xyXG4gICAgaWYgKHRoaXMub2tMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub2tMYWJlbCA9IE9LX0xBQkVMX0JZX0FMRVJUX1RZUEVbdGhpcy5hbGVydFR5cGVdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYW5jZWxMYWJlbCA9IGRhdGEuY2FuY2VsTGFiZWw7XHJcbiAgICBpZiAodGhpcy5jYW5jZWxMYWJlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuY2FuY2VsTGFiZWwgPSBDQU5DRUxfTEFCRUxfQllfQUxFUlRfVFlQRVt0aGlzLmFsZXJ0VHlwZV07XHJcbiAgICB9XHJcbiAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcclxuICAgIGRpYWxvZ1JlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLm9uQ2FuY2VsKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5ERUZJTkVfQ09NTUVSQ0lBTF9TVFJVQ1RVUkUgfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkRFRklORV9QQVJLSU5HX1NUUlVDVFVSRSB8fFxyXG4gICAgICAgIHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5ERUZJTkVfUkVTSURFTkNJQUxfU1RSVUNUVVJFKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgaGFzVGl0bGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkFVVEhPUklaQVRJT05fVFJBTlNBQ1RJT04gfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkRFTEVURV9EQVRBIHx8XHJcbiAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkxPU1RfREFUQSB8fCB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuVU5DT01QTEVURURfREFUQTtcclxuICB9XHJcblxyXG4gIGhhc0NvbnRlbnQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkNPTkZJUk1fREVMRVRFX0RBVEEgfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkRFTEVURV9EQVRBIHx8XHJcbiAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLklORk9STUFUSU9OX05PVF9WQUxJRCB8fCB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuTE9TVF9EQVRBIHx8XHJcbiAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLlVOQ09NUExFVEVEX0RBVEEgfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLlVOQ09NUExFVEVEX1NFTEVDVEVEX0RBVEEgfHxcclxuICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuREVGSU5FX0NPTU1FUkNJQUxfU1RSVUNUVVJFIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5ERUZJTkVfUEFSS0lOR19TVFJVQ1RVUkUgfHxcclxuICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuREVGSU5FX1JFU0lERU5DSUFMX1NUUlVDVFVSRTtcclxuICB9XHJcblxyXG4gIGhhc0J1dHRvbnMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkFVVEhPUklaQVRJT05fVFJBTlNBQ1RJT04gfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkNPTkZJUk1fREVMRVRFX0RBVEEgfHxcclxuICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuREVMRVRFX0RBVEEgfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkxPU1RfREFUQSB8fFxyXG4gICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5VTkNPTVBMRVRFRF9EQVRBIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5VTkNPTVBMRVRFRF9TRUxFQ1RFRF9EQVRBO1xyXG4gIH1cclxuXHJcbiAgaGFzQ2FuY2VsQnV0dG9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWxlcnRUeXBlICE9PSBBbGVydEluZm9ybWF0aW9uVHlwZS5VTkNPTVBMRVRFRF9TRUxFQ1RFRF9EQVRBO1xyXG4gIH1cclxufVxyXG4iXX0=