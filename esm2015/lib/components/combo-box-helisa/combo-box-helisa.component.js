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
                template: "<div class=\"combo-box-general-container\">\r\n  <div class=\"combo-box-input-container\">\r\n    <input class=\"combo-box-input\" readonly [value]=\"selectedItem?listable.getDisplayText(selectedItem):placeholder\"\r\n           *ngIf=\"state==comboBoxHelisaState.CLOSED\" (focus)=\"onFocus()\"/>\r\n  </div>\r\n  <div class=\"combo-box-list-container combo-box-general-container\" *ngIf=\"state==comboBoxHelisaState.SELECT || state == comboBoxHelisaState.INSERT\">\r\n    <div class=\"combo-box-line\"></div>\r\n    <div class=\"combo-box-list\" (scroll)=\"onScroll($event)\">\r\n      <div *ngFor=\"let row of rows\" class=\"combo-box-row\" [ngClass]=\"{'combo-box-selected-item': selectedItem && listable.compare(selectedItem, row)}\" (dblclick)=\"selectItem(row)\">\r\n        {{ listable.getDisplayText(row) }}\r\n      </div>\r\n      <hel-input *ngIf=\"state==comboBoxHelisaState.INSERT\" [isFocused]=\"true\" (setValue)=\"insert($event)\"></hel-input>\r\n      <div *ngIf=\"editable && state==comboBoxHelisaState.SELECT\" class=\"combo-box-insert-button\" (click)=\"changeToInsert()\">{{ editable.getButtonInsertText() }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxpc2EtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tYm8tYm94LWhlbGlzYS9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7OztJQUtyRyxTQUFNO0lBQ04sU0FBTTtJQUNOLFNBQU07Ozs7Ozs7OztBQVFSLE1BQU0sT0FBTyx1QkFBdUI7SUFnQmxDO1FBWlMsZ0JBQVcsR0FBVyxpQkFBaUIsQ0FBQztRQUV2QyxrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzlELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQ3JDLFVBQUssR0FBd0IsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBRXhELFNBQUksR0FBVyxFQUFFLENBQUM7SUFHbEIsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsSUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVM7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFhO1FBQ2xCLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztZQUNuQyxDQUFDLElBQVUsRUFBRSxFQUFFO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztZQUMxQyxDQUFDLEVBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQVk7O2NBQ2IsT0FBTyxHQUFtQixtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFrQjtRQUM5RCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7O1lBOUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxtcUNBQWdEOzthQUVqRDs7Ozs7dUJBR0UsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxNQUFNO3NCQUNOLEtBQUs7Ozs7SUFMTiwyQ0FBMEM7O0lBQzFDLDJDQUEwQzs7SUFDMUMsOENBQWlEOztJQUNqRCwrQ0FBNEI7O0lBQzVCLGdEQUF1RTs7SUFDdkUsMENBQWlDOzs7OztJQUVqQyx1Q0FBeUI7Ozs7O0lBQ3pCLDJDQUE4Qjs7Ozs7SUFDOUIsK0NBQXFDOztJQUNyQyx3Q0FBd0Q7O0lBRXhELHVDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21ib0JveExpc3RhYmxlfSBmcm9tICcuL2ludGVyZmFjZS9jb21iby1ib3gtbGlzdGFibGUnO1xyXG5pbXBvcnQge0NvbWJvQm94RWRpdGFibGV9IGZyb20gJy4vaW50ZXJmYWNlL2NvbWJvLWJveC1lZGl0YWJsZSc7XHJcblxyXG5leHBvcnQgZW51bSBDb21ib0JveEhlbGlzYVN0YXRlIHtcclxuICBDTE9TRUQsXHJcbiAgU0VMRUNULFxyXG4gIElOU0VSVFxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1jb21iby1ib3gtaGVsaXNhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbWJvQm94SGVsaXNhQ29tcG9uZW50PFRZUEU+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgZWRpdGFibGU6IENvbWJvQm94RWRpdGFibGU8VFlQRT47XHJcbiAgQElucHV0KCkgbGlzdGFibGU6IENvbWJvQm94TGlzdGFibGU8VFlQRT47XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTaW4gc2VsZWNjaW9uYXInO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkSXRlbTogVFlQRTtcclxuICBAT3V0cHV0KCkgc2VsZWN0RW1pdHRlcjogRXZlbnRFbWl0dGVyPFRZUEU+ID0gbmV3IEV2ZW50RW1pdHRlcjxUWVBFPigpO1xyXG4gIEBJbnB1dCgpIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIHBhZ2U6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyID0gNTA7XHJcbiAgcHJpdmF0ZSBoYXZlTmV4dFBhZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHN0YXRlOiBDb21ib0JveEhlbGlzYVN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5DTE9TRUQ7XHJcblxyXG4gIHJvd3M6IFRZUEVbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXROZXh0UGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZXh0UGFnZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhhdmVOZXh0UGFnZSkge1xyXG4gICAgICB0aGlzLmxpc3RhYmxlLmdldERhdGEodGhpcy5wYWdlKyssIHRoaXMucGFnZVNpemUpLnN1YnNjcmliZSgocm93czogVFlQRVtdKSA9PiB7XHJcbiAgICAgICAgcm93cy5mb3JFYWNoKChpdGVtOiBUWVBFKSA9PiB0aGlzLnJvd3MucHVzaChpdGVtKSk7XHJcbiAgICAgICAgdGhpcy5oYXZlTmV4dFBhZ2UgPSByb3dzLmxlbmd0aCA+IDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbWJvQm94SGVsaXNhU3RhdGUoKTogdHlwZW9mIENvbWJvQm94SGVsaXNhU3RhdGUge1xyXG4gICAgcmV0dXJuIENvbWJvQm94SGVsaXNhU3RhdGU7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5TRUxFQ1Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJdGVtKHJvdzogVFlQRSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSByb3c7XHJcbiAgICB0aGlzLnNlbGVjdEVtaXR0ZXIuZW1pdChyb3cpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuQ0xPU0VEO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVG9JbnNlcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5JTlNFUlQ7XHJcbiAgfVxyXG5cclxuICBpbnNlcnQoZXZlbnQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuZWRpdGFibGUuaW5zZXJ0KGV2ZW50KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgKGRhdGE6IFRZUEUpID0+IHtcclxuICAgICAgICAgIHRoaXMucm93cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuU0VMRUNUO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLlNFTEVDVDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBpZiAoZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LnNjcm9sbFRvcCA8IDEwMDApIHtcclxuICAgICAgdGhpcy5nZXROZXh0UGFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=