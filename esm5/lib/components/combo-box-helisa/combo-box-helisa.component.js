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
                    template: "<div class=\"combo-box-general-container\">\n  <div class=\"combo-box-input-container\">\n    <input class=\"combo-box-input\" readonly [value]=\"selectedItem?listable.getDisplayText(selectedItem):placeholder\"\n           *ngIf=\"state==comboBoxHelisaState.CLOSED\" (focus)=\"onFocus()\"/>\n  </div>\n  <div class=\"combo-box-list-container combo-box-general-container\" *ngIf=\"state==comboBoxHelisaState.SELECT || state == comboBoxHelisaState.INSERT\">\n    <div class=\"combo-box-line\"></div>\n    <div class=\"combo-box-list\" (scroll)=\"onScroll($event)\">\n      <div *ngFor=\"let row of rows\" class=\"combo-box-row\" [ngClass]=\"{'combo-box-selected-item': selectedItem && listable.compare(selectedItem, row)}\" (dblclick)=\"selectItem(row)\">\n        {{ listable.getDisplayText(row) }}\n      </div>\n      <hel-input *ngIf=\"state==comboBoxHelisaState.INSERT\" [isFocused]=\"true\" (setValue)=\"insert($event)\"></hel-input>\n      <div *ngIf=\"editable && state==comboBoxHelisaState.SELECT\" class=\"combo-box-insert-button\" (click)=\"changeToInsert()\">{{ editable.getButtonInsertText() }}</div>\n    </div>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tYm8tYm94LWhlbGlzYS9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7OztJQUtyRyxTQUFNO0lBQ04sU0FBTTtJQUNOLFNBQU07Ozs7Ozs7OztBQUdSO0lBcUJFO1FBWlMsZ0JBQVcsR0FBVyxpQkFBaUIsQ0FBQztRQUV2QyxrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzlELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQ3JDLFVBQUssR0FBd0IsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBRXhELFNBQUksR0FBVyxFQUFFLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxpREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTyw2Q0FBVzs7OztJQUFuQjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBWTtnQkFDdkUsSUFBSSxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxJQUFVLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsc0JBQUksd0RBQW1COzs7O1FBQXZCO1lBQ0UsT0FBTyxtQkFBbUIsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7OztJQUVELHlDQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsNENBQVU7Ozs7SUFBVixVQUFXLEdBQVM7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGdEQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsd0NBQU07Ozs7SUFBTixVQUFPLEtBQWE7UUFBcEIsaUJBV0M7UUFWQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVM7Ozs7WUFDbkMsVUFBQyxJQUFVO2dCQUNULEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQixLQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztZQUMxQyxDQUFDLEVBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsMENBQVE7Ozs7SUFBUixVQUFTLEtBQVk7O1lBQ2IsT0FBTyxHQUFtQixtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFrQjtRQUM5RCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Z0JBOUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxtb0NBQWdEOztpQkFFakQ7Ozs7OzJCQUdFLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsTUFBTTswQkFDTixLQUFLOztJQW1FUiw4QkFBQztDQUFBLEFBL0VELElBK0VDO1NBMUVZLHVCQUF1Qjs7O0lBRWxDLDJDQUEwQzs7SUFDMUMsMkNBQTBDOztJQUMxQyw4Q0FBaUQ7O0lBQ2pELCtDQUE0Qjs7SUFDNUIsZ0RBQXVFOztJQUN2RSwwQ0FBaUM7Ozs7O0lBRWpDLHVDQUF5Qjs7Ozs7SUFDekIsMkNBQThCOzs7OztJQUM5QiwrQ0FBcUM7O0lBQ3JDLHdDQUF3RDs7SUFFeEQsdUNBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21ib0JveExpc3RhYmxlfSBmcm9tICcuL2ludGVyZmFjZS9jb21iby1ib3gtbGlzdGFibGUnO1xuaW1wb3J0IHtDb21ib0JveEVkaXRhYmxlfSBmcm9tICcuL2ludGVyZmFjZS9jb21iby1ib3gtZWRpdGFibGUnO1xuXG5leHBvcnQgZW51bSBDb21ib0JveEhlbGlzYVN0YXRlIHtcbiAgQ0xPU0VELFxuICBTRUxFQ1QsXG4gIElOU0VSVFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tYm8tYm94LWhlbGlzYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tYm9Cb3hIZWxpc2FDb21wb25lbnQ8VFlQRT4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIGVkaXRhYmxlOiBDb21ib0JveEVkaXRhYmxlPFRZUEU+O1xuICBASW5wdXQoKSBsaXN0YWJsZTogQ29tYm9Cb3hMaXN0YWJsZTxUWVBFPjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTaW4gc2VsZWNjaW9uYXInO1xuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW06IFRZUEU7XG4gIEBPdXRwdXQoKSBzZWxlY3RFbWl0dGVyOiBFdmVudEVtaXR0ZXI8VFlQRT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRZUEU+KCk7XG4gIEBJbnB1dCgpIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgcGFnZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyID0gNTA7XG4gIHByaXZhdGUgaGF2ZU5leHRQYWdlOiBib29sZWFuID0gdHJ1ZTtcbiAgc3RhdGU6IENvbWJvQm94SGVsaXNhU3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLkNMT1NFRDtcblxuICByb3dzOiBUWVBFW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0TmV4dFBhZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGF2ZU5leHRQYWdlKSB7XG4gICAgICB0aGlzLmxpc3RhYmxlLmdldERhdGEodGhpcy5wYWdlKyssIHRoaXMucGFnZVNpemUpLnN1YnNjcmliZSgocm93czogVFlQRVtdKSA9PiB7XG4gICAgICAgIHJvd3MuZm9yRWFjaCgoaXRlbTogVFlQRSkgPT4gdGhpcy5yb3dzLnB1c2goaXRlbSkpO1xuICAgICAgICB0aGlzLmhhdmVOZXh0UGFnZSA9IHJvd3MubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjb21ib0JveEhlbGlzYVN0YXRlKCk6IHR5cGVvZiBDb21ib0JveEhlbGlzYVN0YXRlIHtcbiAgICByZXR1cm4gQ29tYm9Cb3hIZWxpc2FTdGF0ZTtcbiAgfVxuXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuU0VMRUNUO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEl0ZW0ocm93OiBUWVBFKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSByb3c7XG4gICAgdGhpcy5zZWxlY3RFbWl0dGVyLmVtaXQocm93KTtcbiAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5DTE9TRUQ7XG4gIH1cblxuICBjaGFuZ2VUb0luc2VydCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5JTlNFUlQ7XG4gIH1cblxuICBpbnNlcnQoZXZlbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChldmVudC50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5lZGl0YWJsZS5pbnNlcnQoZXZlbnQpLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IFRZUEUpID0+IHtcbiAgICAgICAgICB0aGlzLnJvd3MucHVzaChkYXRhKTtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5TRUxFQ1Q7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLlNFTEVDVDtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAoZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LnNjcm9sbFRvcCA8IDEwMDApIHtcbiAgICAgIHRoaXMuZ2V0TmV4dFBhZ2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==