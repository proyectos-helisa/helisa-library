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
var TITLE_BY_ALERT_TYPE = ['!Esta transacción requiere autorización!',
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
var CONTENT_BY_ALERT_TYPE = ['',
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
var OK_LABEL_BY_ALERT_TYPE = ['Solicitarla',
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
var CANCEL_LABEL_BY_ALERT_TYPE = ['Negarla',
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
var AlertInformationDataHelisaComponent = /** @class */ (function () {
    function AlertInformationDataHelisaComponent(dialogRef, data) {
        var _this = this;
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
        function (event) {
            if (event.code === 'Escape') {
                _this.dialogRef.close(_this.onCancel());
            }
        }));
    }
    /**
     * @return {?}
     */
    AlertInformationDataHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.alertType === AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === AlertInformationType.DEFINE_PARKING_STRUCTURE ||
            this.alertType === AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.dialogRef.close();
            }), 3000);
        }
    };
    /**
     * @return {?}
     */
    AlertInformationDataHelisaComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @return {?}
     */
    AlertInformationDataHelisaComponent.prototype.hasTitle = /**
     * @return {?}
     */
    function () {
        return this.alertType === AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === AlertInformationType.DELETE_DATA ||
            this.alertType === AlertInformationType.LOST_DATA || this.alertType === AlertInformationType.UNCOMPLETED_DATA;
    };
    /**
     * @return {?}
     */
    AlertInformationDataHelisaComponent.prototype.hasContent = /**
     * @return {?}
     */
    function () {
        return this.alertType === AlertInformationType.CONFIRM_DELETE_DATA || this.alertType === AlertInformationType.DELETE_DATA ||
            this.alertType === AlertInformationType.INFORMATION_NOT_VALID || this.alertType === AlertInformationType.LOST_DATA ||
            this.alertType === AlertInformationType.UNCOMPLETED_DATA || this.alertType === AlertInformationType.UNCOMPLETED_SELECTED_DATA ||
            this.alertType === AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === AlertInformationType.DEFINE_PARKING_STRUCTURE ||
            this.alertType === AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE;
    };
    /**
     * @return {?}
     */
    AlertInformationDataHelisaComponent.prototype.hasButtons = /**
     * @return {?}
     */
    function () {
        return this.alertType === AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === AlertInformationType.CONFIRM_DELETE_DATA ||
            this.alertType === AlertInformationType.DELETE_DATA || this.alertType === AlertInformationType.LOST_DATA ||
            this.alertType === AlertInformationType.UNCOMPLETED_DATA || this.alertType === AlertInformationType.UNCOMPLETED_SELECTED_DATA;
    };
    /**
     * @return {?}
     */
    AlertInformationDataHelisaComponent.prototype.hasCancelButton = /**
     * @return {?}
     */
    function () {
        return this.alertType !== AlertInformationType.UNCOMPLETED_SELECTED_DATA;
    };
    AlertInformationDataHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-alert-information-data-helisa',
                    template: "<h1 mat-dialog-title *ngIf=\"hasTitle()\">{{ title }}</h1>\r\n<div mat-dialog-content *ngIf=\"hasContent()\">{{ content }}</div>\r\n<div mat-dialog-action *ngIf=\"hasButtons()\">\r\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial *ngIf=\"hasCancelButton()\">{{cancelLabel}}</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertInformationDataHelisaComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return AlertInformationDataHelisaComponent;
}());
export { AlertInformationDataHelisaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhL2FsZXJ0LWluZm9ybWF0aW9uLWRhdGEtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUU1RSxtREFNQzs7O0lBTEMseURBQWdDOztJQUNoQyxxREFBYzs7SUFDZCx1REFBZ0I7O0lBQ2hCLHVEQUFnQjs7SUFDaEIsMkRBQW9COzs7SUFHaEIsbUJBQW1CLEdBQWEsQ0FBQywwQ0FBMEM7SUFDMUMsRUFBRTtJQUNGLGdEQUFnRDtJQUNoRCxFQUFFO0lBQ0YsNENBQTRDO0lBQzVDLDhDQUE4QztJQUM5QyxFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixFQUFFO0NBQ0Y7O0lBQ2pDLHFCQUFxQixHQUFhLENBQUMsRUFBRTtJQUNGLG1EQUFtRDtJQUNuRCw2SkFBNko7SUFDN0osdUNBQXVDO0lBQ3ZDLCtKQUErSjtJQUMvSiwySkFBMko7SUFDM0osbUVBQW1FO0lBQ25FLDBEQUEwRDtJQUMxRCxxRUFBcUU7SUFDckUsbUVBQW1FO0NBQ25FOztJQUNuQyxzQkFBc0IsR0FBYSxDQUFDLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtJQUNWLEVBQUU7SUFDRixVQUFVO0lBQ1YsVUFBVTtJQUNWLFNBQVM7SUFDVCxFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7Q0FDRjs7SUFDcEMsMEJBQTBCLEdBQWEsQ0FBQyxTQUFTO0lB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QUFvQjs7SUFHbEIsd0RBQW1FOztJQUNuRSxtREFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBBbGVydEluZm9ybWF0aW9uVHlwZSB9IGZyb20gJy4vYWxlcnQtaW5mb3JtYXRpb24taGVsaXNhLXR5cGUuZW51bSc7XHJcblxyXG5pbnRlcmZhY2UgQWxlcnRJbmZvcm1hdGlvbkRhdGFIZWxpc2FQcm9wZXJ0aWVzIHtcclxuICBhbGVydFR5cGU6IEFsZXJ0SW5mb3JtYXRpb25UeXBlO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIG9rTGFiZWw6IHN0cmluZztcclxuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUSVRMRV9CWV9BTEVSVF9UWVBFOiBzdHJpbmdbXSA9IFsnIUVzdGEgdHJhbnNhY2Npw7NuIHJlcXVpZXJlIGF1dG9yaXphY2nDs24hJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfCv0VzdMOhIHNlZ3VybyBxdWUgZGViZSBhbnVsYXIgZXN0YSBpbmZvcm1hY2nDs24/JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfCv0VzdMOhIHNlZ3VybyBkZSBxdWVyZXIgcGVyZGVyIGxvIHlhIGhlY2hvPycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdObyBoYSBzdW1pbmlzdHJhZG8gbGEgaW5mb3JtYWNpw7NuIG5lY2VzYXJpYS4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbmNvbnN0IENPTlRFTlRfQllfQUxFUlRfVFlQRTogc3RyaW5nW10gPSBbJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ8K/RXN0YSBzZWd1cm8gcXVlIGRlc2VhIGVsaW1pbmFyIGVzdGEgaW5mb3JtYWNpw7NuPycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FsIGFudWxhciBlc3RlIGNvbmNlcHRvLCBxdWVkYXLDoSBsYSBodWVsbGEgZGUgdG9kbyBsbyBxdWUgc2UgaGl6byBhcG95YWRvcyBlbiBzdSBpbmZvcm1hY2nDs24uIE5vIGVzIHVuYSBlbGltaW5hY2nDs24gdMOhY2l0YSwgZXMgc3VwcmltaXIgc3UgdXNvIGVuIGFkZWxhbnRlLicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JlY3RpZmlxdWUuIEhheSBpbmZvcm1hY2nDs24gbm8gdsOhbGlkYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NpIG5vIGVzdMOhIHNlZ3VybywgcHVlZGUgY29udGludWFyIG8gXCJhcGxpY2FyXCIgeSBwb3N0ZXJpb3JtZW50ZSBjdWFuZG8gdGVuZ2EgY2xhcmEgbGFzIHJlc3B1ZXN0YXMsIHVzYW5kbyBsYSBvcGNpw7NuIGRlIG1vZGlmaWNhciBwb2Ryw6EgY29tcGxldGFyIGVsIGNvbmNlcHRvLicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NpIGluc2l0ZSBlbiBncmFiYXIgYXPDrSwgZXN0ZSBjb25jZXB0byBubyBzZXLDoSB1dGlsaXphYmxlIGhhc3RhIHN1IGNvbmNsdXNpw7NuIHNhdGlzZmFjdG9yaWEsIHF1ZSBkZWJlcsOhIGNvbXBsZXRhciBwb3N0ZXJpb3JtZW50ZSBtb2RpZmljYW5kbyBlbCBjb25jZXB0by4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFbGVtZW50byBzaW4gaW5mb3JtYWNpw7NuIHJlcXVlcmlkYS4gTW9kaWbDrXF1ZWxvIHBhcmEgY29tcGxldGFybG8uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUHJpbWVybyBkZWZpbmEgbGEgZXN0cnVjdHVyYSBjb21lcmNpYWwgZW4gY29uZmlndXJhY2nDs24uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUHJpbWVybyBkZWZpbmEgbGEgZXN0cnVjdHVyYSB6b25hIGRlIHBhcnF1ZWFkZXJvcyBlbiBjb25maWd1cmFjacOzbi4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQcmltZXJvIGRlZmluYSBsYSBlc3RydWN0dXJhIGbDrXNpY2EgcmVzaWRlbmNpYWwgZW4gY29uZmlndXJhY2nDs24uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuY29uc3QgT0tfTEFCRUxfQllfQUxFUlRfVFlQRTogc3RyaW5nW10gPSBbJ1NvbGljaXRhcmxhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xvIGFzdW1vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xvIGFzdW1vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMbyBhc3VtbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMbyBhc3VtbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2VwdGFyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbmNvbnN0IENBTkNFTF9MQUJFTF9CWV9BTEVSVF9UWVBFOiBzdHJpbmdbXSA9IFsnTmVnYXJsYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTWUgcmV0cmFjdG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01lIHJldHJhY3RvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01lIHJldHJhY3RvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNZSByZXRyYWN0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2EnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1pbmZvcm1hdGlvbi1kYXRhLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtaW5mb3JtYXRpb24tZGF0YS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRJbmZvcm1hdGlvbkRhdGFIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBhbGVydFR5cGU6IEFsZXJ0SW5mb3JtYXRpb25UeXBlO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIG9rTGFiZWw6IHN0cmluZztcclxuICBjYW5jZWxMYWJlbDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBbGVydEluZm9ybWF0aW9uRGF0YUhlbGlzYUNvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IEFsZXJ0SW5mb3JtYXRpb25EYXRhSGVsaXNhUHJvcGVydGllc1xyXG4gICkge1xyXG4gICAgdGhpcy5hbGVydFR5cGUgPSBkYXRhLmFsZXJ0VHlwZTtcclxuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgaWYgKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gVElUTEVfQllfQUxFUlRfVFlQRVt0aGlzLmFsZXJ0VHlwZV07XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcbiAgICBpZiAodGhpcy5jb250ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5jb250ZW50ID0gQ09OVEVOVF9CWV9BTEVSVF9UWVBFW3RoaXMuYWxlcnRUeXBlXTtcclxuICAgIH1cclxuICAgIHRoaXMub2tMYWJlbCA9IGRhdGEub2tMYWJlbDtcclxuICAgIGlmICh0aGlzLm9rTGFiZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm9rTGFiZWwgPSBPS19MQUJFTF9CWV9BTEVSVF9UWVBFW3RoaXMuYWxlcnRUeXBlXTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FuY2VsTGFiZWwgPSBkYXRhLmNhbmNlbExhYmVsO1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsTGFiZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmNhbmNlbExhYmVsID0gQ0FOQ0VMX0xBQkVMX0JZX0FMRVJUX1RZUEVbdGhpcy5hbGVydFR5cGVdO1xyXG4gICAgfVxyXG4gICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XHJcbiAgICBkaWFsb2dSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5vbkNhbmNlbCgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuREVGSU5FX0NPTU1FUkNJQUxfU1RSVUNUVVJFIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5ERUZJTkVfUEFSS0lOR19TVFJVQ1RVUkUgfHxcclxuICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuREVGSU5FX1JFU0lERU5DSUFMX1NUUlVDVFVSRSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIGhhc1RpdGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5BVVRIT1JJWkFUSU9OX1RSQU5TQUNUSU9OIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5ERUxFVEVfREFUQSB8fFxyXG4gICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5MT1NUX0RBVEEgfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLlVOQ09NUExFVEVEX0RBVEE7XHJcbiAgfVxyXG5cclxuICBoYXNDb250ZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5DT05GSVJNX0RFTEVURV9EQVRBIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5ERUxFVEVfREFUQSB8fFxyXG4gICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5JTkZPUk1BVElPTl9OT1RfVkFMSUQgfHwgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkxPU1RfREFUQSB8fFxyXG4gICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5VTkNPTVBMRVRFRF9EQVRBIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5VTkNPTVBMRVRFRF9TRUxFQ1RFRF9EQVRBIHx8XHJcbiAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkRFRklORV9DT01NRVJDSUFMX1NUUlVDVFVSRSB8fCB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuREVGSU5FX1BBUktJTkdfU1RSVUNUVVJFIHx8XHJcbiAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkRFRklORV9SRVNJREVOQ0lBTF9TVFJVQ1RVUkU7XHJcbiAgfVxyXG5cclxuICBoYXNCdXR0b25zKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5BVVRIT1JJWkFUSU9OX1RSQU5TQUNUSU9OIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5DT05GSVJNX0RFTEVURV9EQVRBIHx8XHJcbiAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPT09IEFsZXJ0SW5mb3JtYXRpb25UeXBlLkRFTEVURV9EQVRBIHx8IHRoaXMuYWxlcnRUeXBlID09PSBBbGVydEluZm9ybWF0aW9uVHlwZS5MT1NUX0RBVEEgfHxcclxuICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuVU5DT01QTEVURURfREFUQSB8fCB0aGlzLmFsZXJ0VHlwZSA9PT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuVU5DT01QTEVURURfU0VMRUNURURfREFUQTtcclxuICB9XHJcblxyXG4gIGhhc0NhbmNlbEJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmFsZXJ0VHlwZSAhPT0gQWxlcnRJbmZvcm1hdGlvblR5cGUuVU5DT01QTEVURURfU0VMRUNURURfREFUQTtcclxuICB9XHJcbn1cclxuIl19