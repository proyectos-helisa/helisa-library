/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
/** @enum {number} */
const ComboBoxHelisaState = {
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
export class ComboBoxHelisaComponent {
    constructor() {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.getNextPage();
    }
    /**
     * @private
     * @return {?}
     */
    getNextPage() {
        if (this.haveNextPage) {
            this.listable.getData(this.page++, this.pageSize).subscribe((/**
             * @param {?} rows
             * @return {?}
             */
            (rows) => {
                rows.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => this.rows.push(item)));
                this.haveNextPage = rows.length > 0;
            }));
        }
    }
    /**
     * @return {?}
     */
    get comboBoxHelisaState() {
        return ComboBoxHelisaState;
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (this.enabled) {
            this.state = ComboBoxHelisaState.SELECT;
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    selectItem(row) {
        this.selectedItem = row;
        this.selectEmitter.emit(row);
        this.state = ComboBoxHelisaState.CLOSED;
    }
    /**
     * @return {?}
     */
    changeToInsert() {
        this.state = ComboBoxHelisaState.INSERT;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    insert(event) {
        if (event.trim().length > 0) {
            this.editable.insert(event).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.rows.push(data);
                this.state = ComboBoxHelisaState.SELECT;
            }));
        }
        else {
            this.state = ComboBoxHelisaState.SELECT;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        /** @type {?} */
        const element = (/** @type {?} */ (event.target));
        if (element.scrollHeight - element.scrollTop < 1000) {
            this.getNextPage();
        }
    }
}
ComboBoxHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-combo-box-helisa',
                template: "<div class=\"combo-box-general-container\">\n  <div class=\"combo-box-input-container\">\n    <input class=\"combo-box-input\" readonly [value]=\"selectedItem?listable.getDisplayText(selectedItem):placeholder\"\n           *ngIf=\"state==comboBoxHelisaState.CLOSED\" (focus)=\"onFocus()\"/>\n  </div>\n  <div class=\"combo-box-list-container combo-box-general-container\" *ngIf=\"state==comboBoxHelisaState.SELECT || state == comboBoxHelisaState.INSERT\">\n    <div class=\"combo-box-line\"></div>\n    <div class=\"combo-box-list\" (scroll)=\"onScroll($event)\">\n      <div *ngFor=\"let row of rows\" class=\"combo-box-row\" [ngClass]=\"{'combo-box-selected-item': selectedItem && listable.compare(selectedItem, row)}\" (dblclick)=\"selectItem(row)\">\n        {{ listable.getDisplayText(row) }}\n      </div>\n      <hel-input *ngIf=\"state==comboBoxHelisaState.INSERT\" [isFocused]=\"true\" (setValue)=\"insert($event)\"></hel-input>\n      <div *ngIf=\"editable && state==comboBoxHelisaState.SELECT\" class=\"combo-box-insert-button\" (click)=\"changeToInsert()\">{{ editable.getButtonInsertText() }}</div>\n    </div>\n  </div>\n</div>\n",
                styles: [".combo-box-general-container{width:300px}.combo-box-list-container{display:flex;flex-direction:row;height:100px;position:absolute;background-color:#fff}.combo-box-row{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.combo-box-line{width:3px;background-color:#da0080}.combo-box-list{flex:1;overflow-y:auto}.combo-box-input{width:100%}.combo-box-input-container{height:25px}.combo-box-selected-item{color:#7030a0}.combo-box-insert-button{color:#807f7f;cursor:pointer}"]
            }] }
];
/** @nocollapse */
ComboBoxHelisaComponent.ctorParameters = () => [];
ComboBoxHelisaComponent.propDecorators = {
    editable: [{ type: Input }],
    listable: [{ type: Input }],
    placeholder: [{ type: Input }],
    selectedItem: [{ type: Input }],
    selectEmitter: [{ type: Output }],
    enabled: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tYm8tYm94LWhlbGlzYS9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7OztJQUtyRyxTQUFNO0lBQ04sU0FBTTtJQUNOLFNBQU07Ozs7Ozs7OztBQVFSLE1BQU0sT0FBTyx1QkFBdUI7SUFnQmxDO1FBWlMsZ0JBQVcsR0FBVyxpQkFBaUIsQ0FBQztRQUV2QyxrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzlELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQ3JDLFVBQUssR0FBd0IsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBRXhELFNBQUksR0FBVyxFQUFFLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsSUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVM7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFhO1FBQ2xCLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztZQUNuQyxDQUFDLElBQVUsRUFBRSxFQUFFO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztZQUMxQyxDQUFDLEVBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQVk7O2NBQ2IsT0FBTyxHQUFtQixtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFrQjtRQUM5RCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7O1lBOUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxtb0NBQWdEOzthQUVqRDs7Ozs7dUJBR0UsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxNQUFNO3NCQUNOLEtBQUs7Ozs7SUFMTiwyQ0FBMEM7O0lBQzFDLDJDQUEwQzs7SUFDMUMsOENBQWlEOztJQUNqRCwrQ0FBNEI7O0lBQzVCLGdEQUF1RTs7SUFDdkUsMENBQWlDOzs7OztJQUVqQyx1Q0FBeUI7Ozs7O0lBQ3pCLDJDQUE4Qjs7Ozs7SUFDOUIsK0NBQXFDOztJQUNyQyx3Q0FBd0Q7O0lBRXhELHVDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tYm9Cb3hMaXN0YWJsZX0gZnJvbSAnLi9pbnRlcmZhY2UvY29tYm8tYm94LWxpc3RhYmxlJztcbmltcG9ydCB7Q29tYm9Cb3hFZGl0YWJsZX0gZnJvbSAnLi9pbnRlcmZhY2UvY29tYm8tYm94LWVkaXRhYmxlJztcblxuZXhwb3J0IGVudW0gQ29tYm9Cb3hIZWxpc2FTdGF0ZSB7XG4gIENMT1NFRCxcbiAgU0VMRUNULFxuICBJTlNFUlRcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbWJvLWJveC1oZWxpc2EnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbWJvLWJveC1oZWxpc2EuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbWJvQm94SGVsaXNhQ29tcG9uZW50PFRZUEU+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoKSBlZGl0YWJsZTogQ29tYm9Cb3hFZGl0YWJsZTxUWVBFPjtcbiAgQElucHV0KCkgbGlzdGFibGU6IENvbWJvQm94TGlzdGFibGU8VFlQRT47XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnU2luIHNlbGVjY2lvbmFyJztcbiAgQElucHV0KCkgc2VsZWN0ZWRJdGVtOiBUWVBFO1xuICBAT3V0cHV0KCkgc2VsZWN0RW1pdHRlcjogRXZlbnRFbWl0dGVyPFRZUEU+ID0gbmV3IEV2ZW50RW1pdHRlcjxUWVBFPigpO1xuICBASW5wdXQoKSBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcml2YXRlIHBhZ2U6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgcGFnZVNpemU6IG51bWJlciA9IDUwO1xuICBwcml2YXRlIGhhdmVOZXh0UGFnZTogYm9vbGVhbiA9IHRydWU7XG4gIHN0YXRlOiBDb21ib0JveEhlbGlzYVN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5DTE9TRUQ7XG5cbiAgcm93czogVFlQRVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldE5leHRQYWdlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRQYWdlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhhdmVOZXh0UGFnZSkge1xuICAgICAgdGhpcy5saXN0YWJsZS5nZXREYXRhKHRoaXMucGFnZSsrLCB0aGlzLnBhZ2VTaXplKS5zdWJzY3JpYmUoKHJvd3M6IFRZUEVbXSkgPT4ge1xuICAgICAgICByb3dzLmZvckVhY2goKGl0ZW06IFRZUEUpID0+IHRoaXMucm93cy5wdXNoKGl0ZW0pKTtcbiAgICAgICAgdGhpcy5oYXZlTmV4dFBhZ2UgPSByb3dzLmxlbmd0aCA+IDA7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29tYm9Cb3hIZWxpc2FTdGF0ZSgpOiB0eXBlb2YgQ29tYm9Cb3hIZWxpc2FTdGF0ZSB7XG4gICAgcmV0dXJuIENvbWJvQm94SGVsaXNhU3RhdGU7XG4gIH1cblxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLlNFTEVDVDtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RJdGVtKHJvdzogVFlQRSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gcm93O1xuICAgIHRoaXMuc2VsZWN0RW1pdHRlci5lbWl0KHJvdyk7XG4gICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuQ0xPU0VEO1xuICB9XG5cbiAgY2hhbmdlVG9JbnNlcnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuSU5TRVJUO1xuICB9XG5cbiAgaW5zZXJ0KGV2ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZWRpdGFibGUuaW5zZXJ0KGV2ZW50KS5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBUWVBFKSA9PiB7XG4gICAgICAgICAgdGhpcy5yb3dzLnB1c2goZGF0YSk7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuU0VMRUNUO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5TRUxFQ1Q7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxUb3AgPCAxMDAwKSB7XG4gICAgICB0aGlzLmdldE5leHRQYWdlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=