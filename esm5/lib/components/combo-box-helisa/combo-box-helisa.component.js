/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
/** @enum {number} */
var ComboBoxHelisaState = {
    CLOSED: 0,
    SELECT: 1,
    INSERT: 2,
};
export { ComboBoxHelisaState };
ComboBoxHelisaState[ComboBoxHelisaState.CLOSED] = 'CLOSED';
ComboBoxHelisaState[ComboBoxHelisaState.SELECT] = 'SELECT';
ComboBoxHelisaState[ComboBoxHelisaState.INSERT] = 'INSERT';
/**
 * @template TYPE
 */
var ComboBoxHelisaComponent = /** @class */ (function () {
    function ComboBoxHelisaComponent() {
        this.placeholder = 'Sin seleccionar';
        this.selectEmitter = new EventEmitter();
        this.enabled = true;
        this.page = 0;
        this.pageSize = 50;
        this.haveNextPage = true;
        this.state = ComboBoxHelisaState.CLOSED;
        this.rows = [];
    }
    /**
     * @return {?}
     */
    ComboBoxHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ComboBoxHelisaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.getNextPage();
    };
    /**
     * @private
     * @return {?}
     */
    ComboBoxHelisaComponent.prototype.getNextPage = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.haveNextPage) {
            this.listable.getData(this.page++, this.pageSize).subscribe((/**
             * @param {?} rows
             * @return {?}
             */
            function (rows) {
                rows.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.rows.push(item); }));
                _this.haveNextPage = rows.length > 0;
            }));
        }
    };
    Object.defineProperty(ComboBoxHelisaComponent.prototype, "comboBoxHelisaState", {
        get: /**
         * @return {?}
         */
        function () {
            return ComboBoxHelisaState;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ComboBoxHelisaComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        if (this.enabled) {
            this.state = ComboBoxHelisaState.SELECT;
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    ComboBoxHelisaComponent.prototype.selectItem = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.selectedItem = row;
        this.selectEmitter.emit(row);
        this.state = ComboBoxHelisaState.CLOSED;
    };
    /**
     * @return {?}
     */
    ComboBoxHelisaComponent.prototype.changeToInsert = /**
     * @return {?}
     */
    function () {
        this.state = ComboBoxHelisaState.INSERT;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ComboBoxHelisaComponent.prototype.insert = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event.trim().length > 0) {
            this.editable.insert(event).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.rows.push(data);
                _this.state = ComboBoxHelisaState.SELECT;
            }));
        }
        else {
            this.state = ComboBoxHelisaState.SELECT;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ComboBoxHelisaComponent.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var element = (/** @type {?} */ (event.target));
        if (element.scrollHeight - element.scrollTop < 1000) {
            this.getNextPage();
        }
    };
    ComboBoxHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-combo-box-helisa',
                    template: "<div class=\"combo-box-general-container\">\r\n  <div class=\"combo-box-input-container\">\r\n    <input class=\"combo-box-input\" readonly [value]=\"selectedItem?listable.getDisplayText(selectedItem):placeholder\"\r\n           *ngIf=\"state==comboBoxHelisaState.CLOSED\" (focus)=\"onFocus()\"/>\r\n  </div>\r\n  <div class=\"combo-box-list-container combo-box-general-container\" *ngIf=\"state==comboBoxHelisaState.SELECT || state == comboBoxHelisaState.INSERT\">\r\n    <div class=\"combo-box-line\"></div>\r\n    <div class=\"combo-box-list\" (scroll)=\"onScroll($event)\">\r\n      <div *ngFor=\"let row of rows\" class=\"combo-box-row\" [ngClass]=\"{'combo-box-selected-item': selectedItem && listable.compare(selectedItem, row)}\" (dblclick)=\"selectItem(row)\">\r\n        {{ listable.getDisplayText(row) }}\r\n      </div>\r\n      <hel-input *ngIf=\"state==comboBoxHelisaState.INSERT\" [isFocused]=\"true\" (setValue)=\"insert($event)\"></hel-input>\r\n      <div *ngIf=\"editable && state==comboBoxHelisaState.SELECT\" class=\"combo-box-insert-button\" (click)=\"changeToInsert()\">{{ editable.getButtonInsertText() }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".combo-box-general-container{width:300px}.combo-box-list-container{display:flex;flex-direction:row;height:100px;position:absolute;background-color:#fff}.combo-box-row{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.combo-box-line{width:3px;background-color:#da0080}.combo-box-list{flex:1;overflow-y:auto}.combo-box-input{width:100%}.combo-box-input-container{height:25px}.combo-box-selected-item{color:#7030a0}.combo-box-insert-button{color:#807f7f;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    ComboBoxHelisaComponent.ctorParameters = function () { return []; };
    ComboBoxHelisaComponent.propDecorators = {
        editable: [{ type: Input }],
        listable: [{ type: Input }],
        placeholder: [{ type: Input }],
        selectedItem: [{ type: Input }],
        selectEmitter: [{ type: Output }],
        enabled: [{ type: Input }]
    };
    return ComboBoxHelisaComponent;
}());
export { ComboBoxHelisaComponent };
if (false) {
    /** @type {?} */
    ComboBoxHelisaComponent.prototype.editable;
    /** @type {?} */
    ComboBoxHelisaComponent.prototype.listable;
    /** @type {?} */
    ComboBoxHelisaComponent.prototype.placeholder;
    /** @type {?} */
    ComboBoxHelisaComponent.prototype.selectedItem;
    /** @type {?} */
    ComboBoxHelisaComponent.prototype.selectEmitter;
    /** @type {?} */
    ComboBoxHelisaComponent.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    ComboBoxHelisaComponent.prototype.page;
    /**
     * @type {?}
     * @private
     */
    ComboBoxHelisaComponent.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    ComboBoxHelisaComponent.prototype.haveNextPage;
    /** @type {?} */
    ComboBoxHelisaComponent.prototype.state;
    /** @type {?} */
    ComboBoxHelisaComponent.prototype.rows;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tYm8tYm94LWhlbGlzYS9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7OztJQUtyRyxTQUFNO0lBQ04sU0FBTTtJQUNOLFNBQU07Ozs7Ozs7OztBQUdSO0lBcUJFO1FBWlMsZ0JBQVcsR0FBVyxpQkFBaUIsQ0FBQztRQUV2QyxrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzlELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQ3JDLFVBQUssR0FBd0IsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBRXhELFNBQUksR0FBVyxFQUFFLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxpREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTyw2Q0FBVzs7OztJQUFuQjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBWTtnQkFDdkUsSUFBSSxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxJQUFVLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsc0JBQUksd0RBQW1COzs7O1FBQXZCO1lBQ0UsT0FBTyxtQkFBbUIsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7OztJQUVELHlDQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsNENBQVU7Ozs7SUFBVixVQUFXLEdBQVM7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGdEQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsd0NBQU07Ozs7SUFBTixVQUFPLEtBQWE7UUFBcEIsaUJBV0M7UUFWQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVM7Ozs7WUFDbkMsVUFBQyxJQUFVO2dCQUNULEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQixLQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztZQUMxQyxDQUFDLEVBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsMENBQVE7Ozs7SUFBUixVQUFTLEtBQVk7O1lBQ2IsT0FBTyxHQUFtQixtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFrQjtRQUM5RCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Z0JBOUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxtcUNBQWdEOztpQkFFakQ7Ozs7OzJCQUdFLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsTUFBTTswQkFDTixLQUFLOztJQW1FUiw4QkFBQztDQUFBLEFBL0VELElBK0VDO1NBMUVZLHVCQUF1Qjs7O0lBRWxDLDJDQUEwQzs7SUFDMUMsMkNBQTBDOztJQUMxQyw4Q0FBaUQ7O0lBQ2pELCtDQUE0Qjs7SUFDNUIsZ0RBQXVFOztJQUN2RSwwQ0FBaUM7Ozs7O0lBRWpDLHVDQUF5Qjs7Ozs7SUFDekIsMkNBQThCOzs7OztJQUM5QiwrQ0FBcUM7O0lBQ3JDLHdDQUF3RDs7SUFFeEQsdUNBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbWJvQm94TGlzdGFibGV9IGZyb20gJy4vaW50ZXJmYWNlL2NvbWJvLWJveC1saXN0YWJsZSc7XHJcbmltcG9ydCB7Q29tYm9Cb3hFZGl0YWJsZX0gZnJvbSAnLi9pbnRlcmZhY2UvY29tYm8tYm94LWVkaXRhYmxlJztcclxuXHJcbmV4cG9ydCBlbnVtIENvbWJvQm94SGVsaXNhU3RhdGUge1xyXG4gIENMT1NFRCxcclxuICBTRUxFQ1QsXHJcbiAgSU5TRVJUXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWNvbWJvLWJveC1oZWxpc2EnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tYm9Cb3hIZWxpc2FDb21wb25lbnQ8VFlQRT4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSBlZGl0YWJsZTogQ29tYm9Cb3hFZGl0YWJsZTxUWVBFPjtcclxuICBASW5wdXQoKSBsaXN0YWJsZTogQ29tYm9Cb3hMaXN0YWJsZTxUWVBFPjtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NpbiBzZWxlY2Npb25hcic7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRJdGVtOiBUWVBFO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RFbWl0dGVyOiBFdmVudEVtaXR0ZXI8VFlQRT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRZUEU+KCk7XHJcbiAgQElucHV0KCkgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgcGFnZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIgPSA1MDtcclxuICBwcml2YXRlIGhhdmVOZXh0UGFnZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgc3RhdGU6IENvbWJvQm94SGVsaXNhU3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLkNMT1NFRDtcclxuXHJcbiAgcm93czogVFlQRVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldE5leHRQYWdlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGF2ZU5leHRQYWdlKSB7XHJcbiAgICAgIHRoaXMubGlzdGFibGUuZ2V0RGF0YSh0aGlzLnBhZ2UrKywgdGhpcy5wYWdlU2l6ZSkuc3Vic2NyaWJlKChyb3dzOiBUWVBFW10pID0+IHtcclxuICAgICAgICByb3dzLmZvckVhY2goKGl0ZW06IFRZUEUpID0+IHRoaXMucm93cy5wdXNoKGl0ZW0pKTtcclxuICAgICAgICB0aGlzLmhhdmVOZXh0UGFnZSA9IHJvd3MubGVuZ3RoID4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29tYm9Cb3hIZWxpc2FTdGF0ZSgpOiB0eXBlb2YgQ29tYm9Cb3hIZWxpc2FTdGF0ZSB7XHJcbiAgICByZXR1cm4gQ29tYm9Cb3hIZWxpc2FTdGF0ZTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLlNFTEVDVDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdEl0ZW0ocm93OiBUWVBFKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHJvdztcclxuICAgIHRoaXMuc2VsZWN0RW1pdHRlci5lbWl0KHJvdyk7XHJcbiAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5DTE9TRUQ7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUb0luc2VydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLklOU0VSVDtcclxuICB9XHJcblxyXG4gIGluc2VydChldmVudDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5lZGl0YWJsZS5pbnNlcnQoZXZlbnQpLnN1YnNjcmliZShcclxuICAgICAgICAoZGF0YTogVFlQRSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yb3dzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5TRUxFQ1Q7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuU0VMRUNUO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGlmIChlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wIDwgMTAwMCkge1xyXG4gICAgICB0aGlzLmdldE5leHRQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==