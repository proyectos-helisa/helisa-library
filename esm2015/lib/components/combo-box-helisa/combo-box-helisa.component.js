import { Component, EventEmitter, Input, Output } from '@angular/core';
export var ComboBoxHelisaState;
(function (ComboBoxHelisaState) {
    ComboBoxHelisaState[ComboBoxHelisaState["CLOSED"] = 0] = "CLOSED";
    ComboBoxHelisaState[ComboBoxHelisaState["SELECT"] = 1] = "SELECT";
    ComboBoxHelisaState[ComboBoxHelisaState["INSERT"] = 2] = "INSERT";
})(ComboBoxHelisaState || (ComboBoxHelisaState = {}));
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
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getNextPage();
    }
    getNextPage() {
        if (this.haveNextPage) {
            this.listable.getData(this.page++, this.pageSize).subscribe((rows) => {
                rows.forEach((item) => this.rows.push(item));
                this.haveNextPage = rows.length > 0;
            });
        }
    }
    get comboBoxHelisaState() {
        return ComboBoxHelisaState;
    }
    onFocus() {
        if (this.enabled) {
            this.state = ComboBoxHelisaState.SELECT;
        }
    }
    selectItem(row) {
        this.selectedItem = row;
        this.selectEmitter.emit(row);
        this.state = ComboBoxHelisaState.CLOSED;
    }
    changeToInsert() {
        this.state = ComboBoxHelisaState.INSERT;
    }
    insert(event) {
        if (event.trim().length > 0) {
            this.editable.insert(event).subscribe((data) => {
                this.rows.push(data);
                this.state = ComboBoxHelisaState.SELECT;
            });
        }
        else {
            this.state = ComboBoxHelisaState.SELECT;
        }
    }
    onScroll(event) {
        const element = event.target;
        if (element.scrollHeight - element.scrollTop < 1000) {
            this.getNextPage();
        }
    }
}
ComboBoxHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-combo-box-helisa',
                template: "<div class=\"combo-box-general-container\">\r\n  <div class=\"combo-box-input-container\">\r\n    <input class=\"combo-box-input\" readonly [value]=\"selectedItem?listable.getDisplayText(selectedItem):placeholder\"\r\n           *ngIf=\"state==comboBoxHelisaState.CLOSED\" (focus)=\"onFocus()\"/>\r\n  </div>\r\n  <div class=\"combo-box-list-container combo-box-general-container\" *ngIf=\"state==comboBoxHelisaState.SELECT || state == comboBoxHelisaState.INSERT\">\r\n    <div class=\"combo-box-line\"></div>\r\n    <div class=\"combo-box-list\" (scroll)=\"onScroll($event)\">\r\n      <div *ngFor=\"let row of rows\" class=\"combo-box-row\" [ngClass]=\"{'combo-box-selected-item': selectedItem && listable.compare(selectedItem, row)}\" (dblclick)=\"selectItem(row)\">\r\n        {{ listable.getDisplayText(row) }}\r\n      </div>\r\n      <hel-input *ngIf=\"state==comboBoxHelisaState.INSERT\" [isFocused]=\"true\" (setValue)=\"insert($event)\"></hel-input>\r\n      <div *ngIf=\"editable && state==comboBoxHelisaState.SELECT\" class=\"combo-box-insert-button\" (click)=\"changeToInsert()\">{{ editable.getButtonInsertText() }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".combo-box-general-container{width:300px}.combo-box-list-container{background-color:#fff;display:flex;flex-direction:row;height:100px;position:absolute}.combo-box-row{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.combo-box-line{background-color:#da0080;width:3px}.combo-box-list{flex:1;overflow-y:auto}.combo-box-input{width:100%}.combo-box-input-container{height:25px}.combo-box-selected-item{color:#7030a0}.combo-box-insert-button{color:#807f7f;cursor:pointer}"]
            },] }
];
ComboBoxHelisaComponent.ctorParameters = () => [];
ComboBoxHelisaComponent.propDecorators = {
    editable: [{ type: Input }],
    listable: [{ type: Input }],
    placeholder: [{ type: Input }],
    selectedItem: [{ type: Input }],
    selectEmitter: [{ type: Output }],
    enabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb21iby1ib3gtaGVsaXNhL2NvbWJvLWJveC1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBSXZHLE1BQU0sQ0FBTixJQUFZLG1CQUlYO0FBSkQsV0FBWSxtQkFBbUI7SUFDN0IsaUVBQU0sQ0FBQTtJQUNOLGlFQUFNLENBQUE7SUFDTixpRUFBTSxDQUFBO0FBQ1IsQ0FBQyxFQUpXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFJOUI7QUFPRCxNQUFNLE9BQU8sdUJBQXVCO0lBZ0JsQztRQVpTLGdCQUFXLEdBQVcsaUJBQWlCLENBQUM7UUFFdkMsa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM5RCxZQUFPLEdBQVksSUFBSSxDQUFDO1FBRXpCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUNyQyxVQUFLLEdBQXdCLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUV4RCxTQUFJLEdBQVcsRUFBRSxDQUFDO0lBR2xCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBWSxFQUFRLEVBQUU7Z0JBQ2pGLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFVLEVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFTO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFhO1FBQ2xCLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUNuQyxDQUFDLElBQVUsRUFBUSxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7WUFDMUMsQ0FBQyxDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVk7UUFDbkIsTUFBTSxPQUFPLEdBQW1CLEtBQUssQ0FBQyxNQUF3QixDQUFDO1FBQy9ELElBQUksT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRTtZQUNuRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLG1xQ0FBZ0Q7O2FBRWpEOzs7O3VCQUdFLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsTUFBTTtzQkFDTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbWJvQm94TGlzdGFibGV9IGZyb20gJy4vaW50ZXJmYWNlL2NvbWJvLWJveC1saXN0YWJsZSc7XHJcbmltcG9ydCB7Q29tYm9Cb3hFZGl0YWJsZX0gZnJvbSAnLi9pbnRlcmZhY2UvY29tYm8tYm94LWVkaXRhYmxlJztcclxuXHJcbmV4cG9ydCBlbnVtIENvbWJvQm94SGVsaXNhU3RhdGUge1xyXG4gIENMT1NFRCxcclxuICBTRUxFQ1QsXHJcbiAgSU5TRVJUXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWNvbWJvLWJveC1oZWxpc2EnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tYm9Cb3hIZWxpc2FDb21wb25lbnQ8VFlQRT4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSBlZGl0YWJsZTogQ29tYm9Cb3hFZGl0YWJsZTxUWVBFPjtcclxuICBASW5wdXQoKSBsaXN0YWJsZTogQ29tYm9Cb3hMaXN0YWJsZTxUWVBFPjtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NpbiBzZWxlY2Npb25hcic7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRJdGVtOiBUWVBFO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RFbWl0dGVyOiBFdmVudEVtaXR0ZXI8VFlQRT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRZUEU+KCk7XHJcbiAgQElucHV0KCkgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgcGFnZTogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIgPSA1MDtcclxuICBwcml2YXRlIGhhdmVOZXh0UGFnZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgc3RhdGU6IENvbWJvQm94SGVsaXNhU3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLkNMT1NFRDtcclxuXHJcbiAgcm93czogVFlQRVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldE5leHRQYWdlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGF2ZU5leHRQYWdlKSB7XHJcbiAgICAgIHRoaXMubGlzdGFibGUuZ2V0RGF0YSh0aGlzLnBhZ2UrKywgdGhpcy5wYWdlU2l6ZSkuc3Vic2NyaWJlKChyb3dzOiBUWVBFW10pOiB2b2lkID0+IHtcclxuICAgICAgICByb3dzLmZvckVhY2goKGl0ZW06IFRZUEUpOiBudW1iZXIgPT4gdGhpcy5yb3dzLnB1c2goaXRlbSkpO1xyXG4gICAgICAgIHRoaXMuaGF2ZU5leHRQYWdlID0gcm93cy5sZW5ndGggPiAwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb21ib0JveEhlbGlzYVN0YXRlKCk6IHR5cGVvZiBDb21ib0JveEhlbGlzYVN0YXRlIHtcclxuICAgIHJldHVybiBDb21ib0JveEhlbGlzYVN0YXRlO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuU0VMRUNUO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0SXRlbShyb3c6IFRZUEUpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gcm93O1xyXG4gICAgdGhpcy5zZWxlY3RFbWl0dGVyLmVtaXQocm93KTtcclxuICAgIHRoaXMuc3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLkNMT1NFRDtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRvSW5zZXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuSU5TRVJUO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0KGV2ZW50OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmVkaXRhYmxlLmluc2VydChldmVudCkuc3Vic2NyaWJlKFxyXG4gICAgICAgIChkYXRhOiBUWVBFKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJvd3MucHVzaChkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLlNFTEVDVDtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5TRUxFQ1Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgaWYgKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxUb3AgPCAxMDAwKSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV4dFBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19