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
                template: "<div class=\"combo-box-general-container\">\n  <div class=\"combo-box-input-container\">\n    <input class=\"combo-box-input\" readonly [value]=\"selectedItem?listable.getDisplayText(selectedItem):placeholder\"\n           *ngIf=\"state==comboBoxHelisaState.CLOSED\" (focus)=\"onFocus()\"/>\n  </div>\n  <div class=\"combo-box-list-container combo-box-general-container\" *ngIf=\"state==comboBoxHelisaState.SELECT || state == comboBoxHelisaState.INSERT\">\n    <div class=\"combo-box-line\"></div>\n    <div class=\"combo-box-list\" (scroll)=\"onScroll($event)\">\n      <div *ngFor=\"let row of rows\" class=\"combo-box-row\" [ngClass]=\"{'combo-box-selected-item': selectedItem && listable.compare(selectedItem, row)}\" (dblclick)=\"selectItem(row)\">\n        {{ listable.getDisplayText(row) }}\n      </div>\n      <hel-input *ngIf=\"state==comboBoxHelisaState.INSERT\" [isFocused]=\"true\" (setValue)=\"insert($event)\"></hel-input>\n      <div *ngIf=\"editable && state==comboBoxHelisaState.SELECT\" class=\"combo-box-insert-button\" (click)=\"changeToInsert()\">{{ editable.getButtonInsertText() }}</div>\n    </div>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb21iby1ib3gtaGVsaXNhL2NvbWJvLWJveC1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBSXZHLE1BQU0sQ0FBTixJQUFZLG1CQUlYO0FBSkQsV0FBWSxtQkFBbUI7SUFDN0IsaUVBQU0sQ0FBQTtJQUNOLGlFQUFNLENBQUE7SUFDTixpRUFBTSxDQUFBO0FBQ1IsQ0FBQyxFQUpXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFJOUI7QUFPRCxNQUFNLE9BQU8sdUJBQXVCO0lBZ0JsQztRQVpTLGdCQUFXLEdBQVcsaUJBQWlCLENBQUM7UUFFdkMsa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM5RCxZQUFPLEdBQVksSUFBSSxDQUFDO1FBRXpCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUNyQyxVQUFLLEdBQXdCLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUV4RCxTQUFJLEdBQVcsRUFBRSxDQUFDO0lBR2xCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBWSxFQUFRLEVBQUU7Z0JBQ2pGLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFVLEVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFTO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFhO1FBQ2xCLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUNuQyxDQUFDLElBQVUsRUFBUSxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7WUFDMUMsQ0FBQyxDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVk7UUFDbkIsTUFBTSxPQUFPLEdBQW1CLEtBQUssQ0FBQyxNQUF3QixDQUFDO1FBQy9ELElBQUksT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRTtZQUNuRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLG1vQ0FBZ0Q7O2FBRWpEOzs7O3VCQUdFLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsTUFBTTtzQkFDTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21ib0JveExpc3RhYmxlfSBmcm9tICcuL2ludGVyZmFjZS9jb21iby1ib3gtbGlzdGFibGUnO1xuaW1wb3J0IHtDb21ib0JveEVkaXRhYmxlfSBmcm9tICcuL2ludGVyZmFjZS9jb21iby1ib3gtZWRpdGFibGUnO1xuXG5leHBvcnQgZW51bSBDb21ib0JveEhlbGlzYVN0YXRlIHtcbiAgQ0xPU0VELFxuICBTRUxFQ1QsXG4gIElOU0VSVFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tYm8tYm94LWhlbGlzYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tYm9Cb3hIZWxpc2FDb21wb25lbnQ8VFlQRT4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIGVkaXRhYmxlOiBDb21ib0JveEVkaXRhYmxlPFRZUEU+O1xuICBASW5wdXQoKSBsaXN0YWJsZTogQ29tYm9Cb3hMaXN0YWJsZTxUWVBFPjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTaW4gc2VsZWNjaW9uYXInO1xuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW06IFRZUEU7XG4gIEBPdXRwdXQoKSBzZWxlY3RFbWl0dGVyOiBFdmVudEVtaXR0ZXI8VFlQRT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRZUEU+KCk7XG4gIEBJbnB1dCgpIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgcGFnZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyID0gNTA7XG4gIHByaXZhdGUgaGF2ZU5leHRQYWdlOiBib29sZWFuID0gdHJ1ZTtcbiAgc3RhdGU6IENvbWJvQm94SGVsaXNhU3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLkNMT1NFRDtcblxuICByb3dzOiBUWVBFW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0TmV4dFBhZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGF2ZU5leHRQYWdlKSB7XG4gICAgICB0aGlzLmxpc3RhYmxlLmdldERhdGEodGhpcy5wYWdlKyssIHRoaXMucGFnZVNpemUpLnN1YnNjcmliZSgocm93czogVFlQRVtdKTogdm9pZCA9PiB7XG4gICAgICAgIHJvd3MuZm9yRWFjaCgoaXRlbTogVFlQRSk6IG51bWJlciA9PiB0aGlzLnJvd3MucHVzaChpdGVtKSk7XG4gICAgICAgIHRoaXMuaGF2ZU5leHRQYWdlID0gcm93cy5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbWJvQm94SGVsaXNhU3RhdGUoKTogdHlwZW9mIENvbWJvQm94SGVsaXNhU3RhdGUge1xuICAgIHJldHVybiBDb21ib0JveEhlbGlzYVN0YXRlO1xuICB9XG5cbiAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5TRUxFQ1Q7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0SXRlbShyb3c6IFRZUEUpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHJvdztcbiAgICB0aGlzLnNlbGVjdEVtaXR0ZXIuZW1pdChyb3cpO1xuICAgIHRoaXMuc3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLkNMT1NFRDtcbiAgfVxuXG4gIGNoYW5nZVRvSW5zZXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLklOU0VSVDtcbiAgfVxuXG4gIGluc2VydChldmVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmVkaXRhYmxlLmluc2VydChldmVudCkuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogVFlQRSk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMucm93cy5wdXNoKGRhdGEpO1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLlNFTEVDVDtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuU0VMRUNUO1xuICAgIH1cbiAgfVxuXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGlmIChlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wIDwgMTAwMCkge1xuICAgICAgdGhpcy5nZXROZXh0UGFnZSgpO1xuICAgIH1cbiAgfVxufVxuIl19