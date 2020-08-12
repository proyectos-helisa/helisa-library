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
        this.state = ComboBoxHelisaState.SELECT;
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
        selectEmitter: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tYm8tYm94LWhlbGlzYS9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7OztJQUtyRyxTQUFNO0lBQ04sU0FBTTtJQUNOLFNBQU07Ozs7Ozs7OztBQUdSO0lBb0JFO1FBWFMsZ0JBQVcsR0FBVyxpQkFBaUIsQ0FBQztRQUV2QyxrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRS9ELFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUNyQyxVQUFLLEdBQXdCLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUV4RCxTQUFJLEdBQVcsRUFBRSxDQUFDO0lBR2xCLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsaURBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sNkNBQVc7Ozs7SUFBbkI7UUFBQSxpQkFPQztRQU5DLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLElBQVk7Z0JBQ3ZFLElBQUksQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsSUFBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztnQkFDbkQsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHNCQUFJLHdEQUFtQjs7OztRQUF2QjtZQUNFLE9BQU8sbUJBQW1CLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7SUFFRCx5Q0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELDRDQUFVOzs7O0lBQVYsVUFBVyxHQUFTO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxnREFBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELHdDQUFNOzs7O0lBQU4sVUFBTyxLQUFhO1FBQXBCLGlCQVdDO1FBVkMsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTOzs7O1lBQ25DLFVBQUMsSUFBVTtnQkFDVCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7WUFDMUMsQ0FBQyxFQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7OztJQUVELDBDQUFROzs7O0lBQVIsVUFBUyxLQUFZOztZQUNiLE9BQU8sR0FBbUIsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBa0I7UUFDOUQsSUFBSSxPQUFPLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFO1lBQ25ELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7O2dCQTNFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsbW9DQUFnRDs7aUJBRWpEOzs7OzsyQkFHRSxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLE1BQU07O0lBaUVULDhCQUFDO0NBQUEsQUE1RUQsSUE0RUM7U0F2RVksdUJBQXVCOzs7SUFFbEMsMkNBQTBDOztJQUMxQywyQ0FBMEM7O0lBQzFDLDhDQUFpRDs7SUFDakQsK0NBQTRCOztJQUM1QixnREFBdUU7Ozs7O0lBRXZFLHVDQUF5Qjs7Ozs7SUFDekIsMkNBQThCOzs7OztJQUM5QiwrQ0FBcUM7O0lBQ3JDLHdDQUF3RDs7SUFFeEQsdUNBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21ib0JveExpc3RhYmxlfSBmcm9tICcuL2ludGVyZmFjZS9jb21iby1ib3gtbGlzdGFibGUnO1xuaW1wb3J0IHtDb21ib0JveEVkaXRhYmxlfSBmcm9tICcuL2ludGVyZmFjZS9jb21iby1ib3gtZWRpdGFibGUnO1xuXG5leHBvcnQgZW51bSBDb21ib0JveEhlbGlzYVN0YXRlIHtcbiAgQ0xPU0VELFxuICBTRUxFQ1QsXG4gIElOU0VSVFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tYm8tYm94LWhlbGlzYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tYm9Cb3hIZWxpc2FDb21wb25lbnQ8VFlQRT4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIGVkaXRhYmxlOiBDb21ib0JveEVkaXRhYmxlPFRZUEU+O1xuICBASW5wdXQoKSBsaXN0YWJsZTogQ29tYm9Cb3hMaXN0YWJsZTxUWVBFPjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTaW4gc2VsZWNjaW9uYXInO1xuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW06IFRZUEU7XG4gIEBPdXRwdXQoKSBzZWxlY3RFbWl0dGVyOiBFdmVudEVtaXR0ZXI8VFlQRT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRZUEU+KCk7XG5cbiAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIgPSA1MDtcbiAgcHJpdmF0ZSBoYXZlTmV4dFBhZ2U6IGJvb2xlYW4gPSB0cnVlO1xuICBzdGF0ZTogQ29tYm9Cb3hIZWxpc2FTdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuQ0xPU0VEO1xuXG4gIHJvd3M6IFRZUEVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5nZXROZXh0UGFnZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXZlTmV4dFBhZ2UpIHtcbiAgICAgIHRoaXMubGlzdGFibGUuZ2V0RGF0YSh0aGlzLnBhZ2UrKywgdGhpcy5wYWdlU2l6ZSkuc3Vic2NyaWJlKChyb3dzOiBUWVBFW10pID0+IHtcbiAgICAgICAgcm93cy5mb3JFYWNoKChpdGVtOiBUWVBFKSA9PiB0aGlzLnJvd3MucHVzaChpdGVtKSk7XG4gICAgICAgIHRoaXMuaGF2ZU5leHRQYWdlID0gcm93cy5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbWJvQm94SGVsaXNhU3RhdGUoKTogdHlwZW9mIENvbWJvQm94SGVsaXNhU3RhdGUge1xuICAgIHJldHVybiBDb21ib0JveEhlbGlzYVN0YXRlO1xuICB9XG5cbiAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5TRUxFQ1Q7XG4gIH1cblxuICBzZWxlY3RJdGVtKHJvdzogVFlQRSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gcm93O1xuICAgIHRoaXMuc2VsZWN0RW1pdHRlci5lbWl0KHJvdyk7XG4gICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuQ0xPU0VEO1xuICB9XG5cbiAgY2hhbmdlVG9JbnNlcnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuSU5TRVJUO1xuICB9XG5cbiAgaW5zZXJ0KGV2ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZWRpdGFibGUuaW5zZXJ0KGV2ZW50KS5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBUWVBFKSA9PiB7XG4gICAgICAgICAgdGhpcy5yb3dzLnB1c2goZGF0YSk7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuU0VMRUNUO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5TRUxFQ1Q7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxUb3AgPCAxMDAwKSB7XG4gICAgICB0aGlzLmdldE5leHRQYWdlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=