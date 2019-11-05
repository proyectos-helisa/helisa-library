/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
import { filter, tap } from 'rxjs/operators';
/** @enum {string} */
var TypeCalendarEnum = {
    NORMAL: 'norma',
    MONTH_YEAR: 'mounth-year',
};
export { TypeCalendarEnum };
var DateHelisaComponent = /** @class */ (function () {
    function DateHelisaComponent() {
        this.dateFormControl = new FormControl('');
        this.date = new Date();
        /**
         * Formato de fecha.
         * Los formatos validos son aquellos que maneja la libreria momentjs
         * https://momentjs.com/docs/#/parsing/string-format/
         */
        this.dateFormat = 'DD/MM/YYYY';
        this.errorMessage = 'La fecha no concuerda con el formato ';
        this.placeholder = this.dateFormat;
        /**
         * Si este valor es diferente a TypeCalendarEnum.NORMAL no
         * será tomado en cuenta
         */
        this.typeCalendar = TypeCalendarEnum.NORMAL;
        /**
         * Para evitar nuevos eventos miestras se realiza el parseo
         */
        this.isFromInputEvent = false;
        /**
         * Verificar si el formato es valido
         */
        this.invalidFormat = false;
    }
    /**
     * @return {?}
     */
    DateHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dateToVisualize = new FormControl('', this.dateFormControl.validator);
        if (this.typeCalendar == TypeCalendarEnum.MONTH_YEAR) {
            this.dateFormat = 'MM/YYYY';
            this.placeholder = this.dateFormat;
        }
        this.formHandler();
    };
    Object.defineProperty(DateHelisaComponent.prototype, "typeCalendarEnum", {
        get: /**
         * @return {?}
         */
        function () {
            return TypeCalendarEnum;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determina como se debe inicializar la visualizacion del calendar
     */
    /**
     * Determina como se debe inicializar la visualizacion del calendar
     * @return {?}
     */
    DateHelisaComponent.prototype.getStartView = /**
     * Determina como se debe inicializar la visualizacion del calendar
     * @return {?}
     */
    function () {
        //multi-year
        if (this.typeCalendar == this.typeCalendarEnum.MONTH_YEAR) {
            return 'multi-year';
        }
        else {
            return 'month';
        }
    };
    /**
     * @private
     * @return {?}
     */
    DateHelisaComponent.prototype.formHandler = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.dateToVisualize.valueChanges
            .pipe(tap((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            if (date.length > _this.dateFormat.length) {
                _this.invalidFormat = true;
            }
            else {
                _this.invalidFormat = false;
            }
        })), filter((/**
         * @param {?} date
         * @return {?}
         */
        function (date) { return date.length == _this.dateFormat.length; })))
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            _this.invalidFormat = false;
            /** @type {?} */
            var isValid = moment(date, _this.dateFormat, true).isValid();
            /** @type {?} */
            var result = moment(date, _this.dateFormat).format('YYYY-MM-DD');
            if (!!result && (result == 'Invalid date' || !isValid)) {
                _this.invalidFormat = true;
                return;
            }
            if (!!result) {
                if (!_this.isFromInputEvent) {
                    _this.isFromInputEvent = true;
                    /** @type {?} */
                    var subString = result.split('-');
                    /** @type {?} */
                    var year = parseFloat(subString[0]);
                    /** @type {?} */
                    var month = parseFloat(subString[1]);
                    /** @type {?} */
                    var day = parseFloat(subString[2]);
                    _this.date.setFullYear(year);
                    _this.date.setDate(day);
                    _this.date.setMonth(month - 1); // -1 por que los meses se toman como los indices en un array
                    /** cuando es de tipo MOUNTH_YEAR retorna el ultimo dia del mes seleccionado */
                    if (_this.typeCalendar == TypeCalendarEnum.MONTH_YEAR) {
                        _this.date = moment(_this.date).endOf('month').toDate();
                    }
                    _this.dateToVisualize.setValue(moment(_this.date, 'YYYY-MM-DD').format(_this.dateFormat));
                    _this.dateFormControl.setValue(_this.date);
                    _this.isFromInputEvent = false;
                }
                else {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.isFromInputEvent = false;
                    }), 1500);
                }
            }
        }));
    };
    /**
     * Evento que se dispara luego seleccionar un mes
     * @param chosenMonthDate
     * @param datepicker
     */
    /**
     * Evento que se dispara luego seleccionar un mes
     * @param {?} chosenMonthDate
     * @param {?} datepicker
     * @return {?}
     */
    DateHelisaComponent.prototype.monthSelectedHandler = /**
     * Evento que se dispara luego seleccionar un mes
     * @param {?} chosenMonthDate
     * @param {?} datepicker
     * @return {?}
     */
    function (chosenMonthDate, datepicker) {
        if (this.typeCalendar == TypeCalendarEnum.MONTH_YEAR) {
            datepicker.close();
            /** @type {?} */
            var date = moment(chosenMonthDate).endOf('month').toDate();
            this.dateToVisualize.setValue(moment(date, 'YYYY-MM-DD').format(this.dateFormat));
            this.dateFormControl.setValue(date);
        }
    };
    /**
     * Evento desde el control touch del calendar
     * @param type
     * @param event
     */
    /**
     * Evento desde el control touch del calendar
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    DateHelisaComponent.prototype.dateChange = /**
     * Evento desde el control touch del calendar
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    function (type, event) {
        this.dateToVisualize.setValue(moment(event.value, 'YYYY-MM-DD').format(this.dateFormat));
        this.dateFormControl.setValue(event.value);
    };
    /**
     * @return {?}
     */
    DateHelisaComponent.prototype.getErrorMessage = /**
     * @return {?}
     */
    function () {
        return this.errorMessage + this.dateFormat;
    };
    DateHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-date-helisa',
                    template: "<div>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput \r\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\">\r\n    \r\n    \r\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar \r\n      ya que el valor es diferente cuando se escribe directamente en este\r\n    -->\r\n    <input matInput \r\n    [matDatepicker]=\"picker\" \r\n    hidden=\"hide\" \r\n    [value]=\"dateToVisualize.value\" \r\n    (dateChange)=\"dateChange('change', $event)\">\r\n    <!--  -->\r\n  \r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\r\n    \r\n  </mat-form-field>\r\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\r\n  </div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DateHelisaComponent.ctorParameters = function () { return []; };
    DateHelisaComponent.propDecorators = {
        dateFormControl: [{ type: Input }],
        dateFormat: [{ type: Input }],
        errorMessage: [{ type: Input }],
        placeholder: [{ type: Input }],
        typeCalendar: [{ type: Input }]
    };
    return DateHelisaComponent;
}());
export { DateHelisaComponent };
if (false) {
    /** @type {?} */
    DateHelisaComponent.prototype.dateFormControl;
    /**
     * @type {?}
     * @private
     */
    DateHelisaComponent.prototype.date;
    /**
     * Formato de fecha.
     * Los formatos validos son aquellos que maneja la libreria momentjs
     * https://momentjs.com/docs/#/parsing/string-format/
     * @type {?}
     */
    DateHelisaComponent.prototype.dateFormat;
    /** @type {?} */
    DateHelisaComponent.prototype.errorMessage;
    /** @type {?} */
    DateHelisaComponent.prototype.placeholder;
    /**
     * Si este valor es diferente a TypeCalendarEnum.NORMAL no
     * será tomado en cuenta
     * @type {?}
     */
    DateHelisaComponent.prototype.typeCalendar;
    /** @type {?} */
    DateHelisaComponent.prototype.dateToVisualize;
    /**
     * Para evitar nuevos eventos miestras se realiza el parseo
     * @type {?}
     * @private
     */
    DateHelisaComponent.prototype.isFromInputEvent;
    /**
     * Verificar si el formato es valido
     * @type {?}
     */
    DateHelisaComponent.prototype.invalidFormat;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGUtaGVsaXNhL2RhdGUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUM1QixNQUFNLEdBQUcsT0FBTztBQUd0QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFJM0MsUUFBUyxPQUFPO0lBQ2hCLFlBQWEsYUFBYTs7O0FBSTVCO0lBd0NFO1FBL0JTLG9CQUFlLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELFNBQUksR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDOzs7Ozs7UUFPdEIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixpQkFBWSxHQUFHLHVDQUF1QyxDQUFDO1FBQ3ZELGdCQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7UUFNOUIsaUJBQVksR0FBb0IsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOzs7O1FBUXpELHFCQUFnQixHQUFVLEtBQUssQ0FBQzs7OztRQUt4QyxrQkFBYSxHQUFXLEtBQUssQ0FBQztJQUVkLENBQUM7Ozs7SUFFakIsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUV4RSxJQUFHLElBQUksQ0FBQyxZQUFZLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFDO1lBQ2xELElBQUksQ0FBQyxVQUFV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QyxDQUFBO1FBQ3ZGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFFLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDM0MsQ0FBQzs7Z0JBeEpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw0N0JBQTJDOztpQkFFNUM7Ozs7O2tDQUtFLEtBQUs7NkJBUUwsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBTUwsS0FBSzs7SUFpSVIsMEJBQUM7Q0FBQSxBQTFKRCxJQTBKQztTQXJKWSxtQkFBbUI7OztJQUk5Qiw4Q0FBNEQ7Ozs7O0lBQzVELG1DQUErQjs7Ozs7OztJQU8vQix5Q0FBbUM7O0lBQ25DLDJDQUFnRTs7SUFDaEUsMENBQXVDOzs7Ozs7SUFNdkMsMkNBQWlFOztJQUdqRSw4Q0FBNEI7Ozs7OztJQUs1QiwrQ0FBd0M7Ozs7O0lBS3hDLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50LCBNYXREYXRlcGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5leHBvcnQgZW51bSBUeXBlQ2FsZW5kYXJFbnVte1xyXG4gIE5PUk1BTCA9ICdub3JtYScsXHJcbiAgTU9OVEhfWUVBUiA9ICdtb3VudGgteWVhcidcclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLWRhdGUtaGVsaXNhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG5cclxuICBcclxuICBASW5wdXQoKSBkYXRlRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBwcml2YXRlIGRhdGU6RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdG8gZGUgZmVjaGEuXHJcbiAgICogTG9zIGZvcm1hdG9zIHZhbGlkb3Mgc29uIGFxdWVsbG9zIHF1ZSBtYW5lamEgbGEgbGlicmVyaWEgbW9tZW50anMgIFxyXG4gICAqIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9wYXJzaW5nL3N0cmluZy1mb3JtYXQvXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0ZUZvcm1hdCA9ICdERC9NTS9ZWVlZJztcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2UgPSAnTGEgZmVjaGEgbm8gY29uY3VlcmRhIGNvbiBlbCBmb3JtYXRvICc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSB0aGlzLmRhdGVGb3JtYXQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpIGVzdGUgdmFsb3IgZXMgZGlmZXJlbnRlIGEgVHlwZUNhbGVuZGFyRW51bS5OT1JNQUwgbm9cclxuICAgKiBzZXLDoSB0b21hZG8gZW4gY3VlbnRhXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZUNhbGVuZGFyOlR5cGVDYWxlbmRhckVudW0gPSBUeXBlQ2FsZW5kYXJFbnVtLk5PUk1BTDtcclxuICBcclxuXHJcbiAgZGF0ZVRvVmlzdWFsaXplOkZvcm1Db250cm9sO1xyXG5cclxuICAvKipcclxuICAgKiBQYXJhIGV2aXRhciBudWV2b3MgZXZlbnRvcyBtaWVzdHJhcyBzZSByZWFsaXphIGVsIHBhcnNlb1xyXG4gICAqL1xyXG4gIHByaXZhdGUgaXNGcm9tSW5wdXRFdmVudDpib29sZWFuPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpY2FyIHNpIGVsIGZvcm1hdG8gZXMgdmFsaWRvXHJcbiAgICovXHJcbiAgaW52YWxpZEZvcm1hdDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyAgICAgICAgXHJcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZT0gbmV3IEZvcm1Db250cm9sKCcnLHRoaXMuZGF0ZUZvcm1Db250cm9sLnZhbGlkYXRvcilcclxuXHJcbiAgICBpZih0aGlzLnR5cGVDYWxlbmRhciA9PSBUeXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpe1xyXG4gICAgICB0aGlzLmRhdGVGb3JtYXQgPSAnTU0vWVlZWSdcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMuZGF0ZUZvcm1hdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5mb3JtSGFuZGxlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGVDYWxlbmRhckVudW0oKXtcclxuICAgIHJldHVybiBUeXBlQ2FsZW5kYXJFbnVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5hIGNvbW8gc2UgZGViZSBpbmljaWFsaXphciBsYSB2aXN1YWxpemFjaW9uIGRlbCBjYWxlbmRhclxyXG4gICAqL1xyXG4gIGdldFN0YXJ0VmlldygpOnN0cmluZ3tcclxuICAgIC8vbXVsdGkteWVhclxyXG4gICAgaWYodGhpcy50eXBlQ2FsZW5kYXIgPT0gdGhpcy50eXBlQ2FsZW5kYXJFbnVtLk1PTlRIX1lFQVIpe1xyXG4gICAgICByZXR1cm4gJ211bHRpLXllYXInO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiAnbW9udGgnO1xyXG4gICAgfSAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybUhhbmRsZXIoKXtcclxuICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnZhbHVlQ2hhbmdlc1xyXG4gICAgLnBpcGUoXHJcbiAgICAgIHRhcChkYXRlID0+IHsgICAgICAgIFxyXG4gICAgICAgIGlmKGRhdGUubGVuZ3RoID4gdGhpcy5kYXRlRm9ybWF0Lmxlbmd0aCl7XHJcbiAgICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlXHJcbiAgICAgICAgfWVsc2V7dGhpcy5pbnZhbGlkRm9ybWF0ID0gZmFsc2V9XHJcbiAgICAgIH0pLFxyXG4gICAgICBmaWx0ZXIoZGF0ZSA9PiBkYXRlLmxlbmd0aCA9PSB0aGlzLmRhdGVGb3JtYXQubGVuZ3RoKVxyXG4gICAgKSAgICBcclxuICAgIC5zdWJzY3JpYmUoZGF0ZT0+eyAgICAgICAgIFxyXG4gICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSBmYWxzZTtcclxuICAgICAgbGV0IGlzVmFsaWQgPSBtb21lbnQoZGF0ZSx0aGlzLmRhdGVGb3JtYXQsdHJ1ZSkuaXNWYWxpZCgpXHJcbiAgICAgIGxldCByZXN1bHQgPSBtb21lbnQoZGF0ZSx0aGlzLmRhdGVGb3JtYXQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIGlmKCEhcmVzdWx0ICYmIChyZXN1bHQgPT0gJ0ludmFsaWQgZGF0ZScgfHwgIWlzVmFsaWQpKXtcclxuICAgICAgICB0aGlzLmludmFsaWRGb3JtYXQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighIXJlc3VsdCApeyAgICAgICAgXHJcbiAgICAgICAgaWYoIXRoaXMuaXNGcm9tSW5wdXRFdmVudCl7ICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5pc0Zyb21JbnB1dEV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgIGxldCBzdWJTdHJpbmc6c3RyaW5nW10gPSByZXN1bHQuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgICAgICBsZXQgeWVhciA9IHBhcnNlRmxvYXQoc3ViU3RyaW5nWzBdKVxyXG4gICAgICAgICAgbGV0IG1vbnRoID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMV0pXHJcbiAgICAgICAgICBsZXQgZGF5ID0gcGFyc2VGbG9hdChzdWJTdHJpbmdbMl0pXHJcblxyXG4gICAgICAgICAgdGhpcy5kYXRlLnNldEZ1bGxZZWFyKHllYXIpXHJcbiAgICAgICAgICB0aGlzLmRhdGUuc2V0RGF0ZShkYXkpXHJcbiAgICAgICAgICB0aGlzLmRhdGUuc2V0TW9udGgobW9udGggLSAxKSAvLyAtMSBwb3IgcXVlIGxvcyBtZXNlcyBzZSB0b21hbiBjb21vIGxvcyBpbmRpY2VzIGVuIHVuIGFycmF5XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8qKiBjdWFuZG8gZXMgZGUgdGlwbyBNT1VOVEhfWUVBUiByZXRvcm5hIGVsIHVsdGltbyBkaWEgZGVsIG1lcyBzZWxlY2Npb25hZG8gKi9cclxuICAgICAgICAgIGlmKHRoaXMudHlwZUNhbGVuZGFyID09IFR5cGVDYWxlbmRhckVudW0uTU9OVEhfWUVBUil7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG1vbWVudCh0aGlzLmRhdGUpLmVuZE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuZGF0ZVRvVmlzdWFsaXplLnNldFZhbHVlKG1vbWVudCh0aGlzLmRhdGUsJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSlcclxuICAgICAgICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuZGF0ZSkgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGcm9tSW5wdXRFdmVudCA9IGZhbHNlXHJcbiAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGx1ZWdvIHNlbGVjY2lvbmFyIHVuIG1lc1xyXG4gICAqIEBwYXJhbSBjaG9zZW5Nb250aERhdGUgXHJcbiAgICogQHBhcmFtIGRhdGVwaWNrZXIgXHJcbiAgICovXHJcbiAgbW9udGhTZWxlY3RlZEhhbmRsZXIoY2hvc2VuTW9udGhEYXRlOiBtb21lbnRfLk1vbWVudCwgZGF0ZXBpY2tlcjogTWF0RGF0ZXBpY2tlcjxtb21lbnRfLk1vbWVudD4peyAgICBcclxuICAgIFxyXG4gICAgaWYodGhpcy50eXBlQ2FsZW5kYXIgPT0gVHlwZUNhbGVuZGFyRW51bS5NT05USF9ZRUFSKXtcclxuICAgICAgZGF0ZXBpY2tlci5jbG9zZSgpO1xyXG4gICAgICBsZXQgZGF0ZSA9IG1vbWVudChjaG9zZW5Nb250aERhdGUpLmVuZE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG4gIFxyXG4gICAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZGF0ZSwnWVlZWS1NTS1ERCcpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpKVxyXG4gICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbC5zZXRWYWx1ZShkYXRlKTtcclxuICAgIH0gICBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50byBkZXNkZSBlbCBjb250cm9sIHRvdWNoIGRlbCBjYWxlbmRhclxyXG4gICAqIEBwYXJhbSB0eXBlIFxyXG4gICAqIEBwYXJhbSBldmVudCBcclxuICAgKi9cclxuICBkYXRlQ2hhbmdlKHR5cGU6IHN0cmluZywgZXZlbnQ6IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50PERhdGU+KSB7XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLmRhdGVUb1Zpc3VhbGl6ZS5zZXRWYWx1ZShtb21lbnQoZXZlbnQudmFsdWUsJ1lZWVktTU0tREQnKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSlcclxuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sLnNldFZhbHVlKGV2ZW50LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZSgpOnN0cmluZ3tcclxuICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZSsgdGhpcy5kYXRlRm9ybWF0XHJcbiAgfVxyXG5cclxufSJdfQ==