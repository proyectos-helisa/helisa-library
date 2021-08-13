import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../input-helisa/input-helisa.component';

function ComboBoxHelisaComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 4);
    ɵngcc0.ɵɵlistener("focus", function ComboBoxHelisaComponent_input_2_Template_input_focus_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onFocus(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", ctx_r0.selectedItem ? ctx_r0.listable.getDisplayText(ctx_r0.selectedItem) : ctx_r0.placeholder);
} }
const _c0 = function (a0) { return { "combo-box-selected-item": a0 }; };
function ComboBoxHelisaComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵlistener("dblclick", function ComboBoxHelisaComponent_div_3_div_3_Template_div_dblclick_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const row_r7 = ctx.$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.selectItem(row_r7); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r4.selectedItem && ctx_r4.listable.compare(ctx_r4.selectedItem, row_r7)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.listable.getDisplayText(row_r7), " ");
} }
function ComboBoxHelisaComponent_div_3_hel_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "hel-input", 12);
    ɵngcc0.ɵɵlistener("setValue", function ComboBoxHelisaComponent_div_3_hel_input_4_Template_hel_input_setValue_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.insert($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("isFocused", true);
} }
function ComboBoxHelisaComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("click", function ComboBoxHelisaComponent_div_3_div_5_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.changeToInsert(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.editable.getButtonInsertText());
} }
function ComboBoxHelisaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelement(1, "div", 6);
    ɵngcc0.ɵɵelementStart(2, "div", 7);
    ɵngcc0.ɵɵlistener("scroll", function ComboBoxHelisaComponent_div_3_Template_div_scroll_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onScroll($event); });
    ɵngcc0.ɵɵtemplate(3, ComboBoxHelisaComponent_div_3_div_3_Template, 2, 4, "div", 8);
    ɵngcc0.ɵɵtemplate(4, ComboBoxHelisaComponent_div_3_hel_input_4_Template, 1, 1, "hel-input", 9);
    ɵngcc0.ɵɵtemplate(5, ComboBoxHelisaComponent_div_3_div_5_Template, 2, 1, "div", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.rows);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.state == ctx_r1.comboBoxHelisaState.INSERT);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.editable && ctx_r1.state == ctx_r1.comboBoxHelisaState.SELECT);
} }
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
ComboBoxHelisaComponent.ɵfac = function ComboBoxHelisaComponent_Factory(t) { return new (t || ComboBoxHelisaComponent)(); };
ComboBoxHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ComboBoxHelisaComponent, selectors: [["lib-combo-box-helisa"]], inputs: { placeholder: "placeholder", enabled: "enabled", selectedItem: "selectedItem", editable: "editable", listable: "listable" }, outputs: { selectEmitter: "selectEmitter" }, decls: 4, vars: 2, consts: [[1, "combo-box-general-container"], [1, "combo-box-input-container"], ["class", "combo-box-input", "readonly", "", 3, "value", "focus", 4, "ngIf"], ["class", "combo-box-list-container combo-box-general-container", 4, "ngIf"], ["readonly", "", 1, "combo-box-input", 3, "value", "focus"], [1, "combo-box-list-container", "combo-box-general-container"], [1, "combo-box-line"], [1, "combo-box-list", 3, "scroll"], ["class", "combo-box-row", 3, "ngClass", "dblclick", 4, "ngFor", "ngForOf"], [3, "isFocused", "setValue", 4, "ngIf"], ["class", "combo-box-insert-button", 3, "click", 4, "ngIf"], [1, "combo-box-row", 3, "ngClass", "dblclick"], [3, "isFocused", "setValue"], [1, "combo-box-insert-button", 3, "click"]], template: function ComboBoxHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ComboBoxHelisaComponent_input_2_Template, 1, 1, "input", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, ComboBoxHelisaComponent_div_3_Template, 6, 3, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.state == ctx.comboBoxHelisaState.CLOSED);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.state == ctx.comboBoxHelisaState.SELECT || ctx.state == ctx.comboBoxHelisaState.INSERT);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc2.InputHelisaComponent], styles: [".combo-box-general-container[_ngcontent-%COMP%]{width:300px}.combo-box-list-container[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:row;height:100px;position:absolute}.combo-box-row[_ngcontent-%COMP%]{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.combo-box-line[_ngcontent-%COMP%]{background-color:#da0080;width:3px}.combo-box-list[_ngcontent-%COMP%]{flex:1;overflow-y:auto}.combo-box-input[_ngcontent-%COMP%]{width:100%}.combo-box-input-container[_ngcontent-%COMP%]{height:25px}.combo-box-selected-item[_ngcontent-%COMP%]{color:#7030a0}.combo-box-insert-button[_ngcontent-%COMP%]{color:#807f7f;cursor:pointer}"] });
ComboBoxHelisaComponent.ctorParameters = () => [];
ComboBoxHelisaComponent.propDecorators = {
    editable: [{ type: Input }],
    listable: [{ type: Input }],
    placeholder: [{ type: Input }],
    selectedItem: [{ type: Input }],
    selectEmitter: [{ type: Output }],
    enabled: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ComboBoxHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'lib-combo-box-helisa',
                template: "<div class=\"combo-box-general-container\">\n  <div class=\"combo-box-input-container\">\n    <input class=\"combo-box-input\" readonly [value]=\"selectedItem?listable.getDisplayText(selectedItem):placeholder\"\n           *ngIf=\"state==comboBoxHelisaState.CLOSED\" (focus)=\"onFocus()\"/>\n  </div>\n  <div class=\"combo-box-list-container combo-box-general-container\" *ngIf=\"state==comboBoxHelisaState.SELECT || state == comboBoxHelisaState.INSERT\">\n    <div class=\"combo-box-line\"></div>\n    <div class=\"combo-box-list\" (scroll)=\"onScroll($event)\">\n      <div *ngFor=\"let row of rows\" class=\"combo-box-row\" [ngClass]=\"{'combo-box-selected-item': selectedItem && listable.compare(selectedItem, row)}\" (dblclick)=\"selectItem(row)\">\n        {{ listable.getDisplayText(row) }}\n      </div>\n      <hel-input *ngIf=\"state==comboBoxHelisaState.INSERT\" [isFocused]=\"true\" (setValue)=\"insert($event)\"></hel-input>\n      <div *ngIf=\"editable && state==comboBoxHelisaState.SELECT\" class=\"combo-box-insert-button\" (click)=\"changeToInsert()\">{{ editable.getButtonInsertText() }}</div>\n    </div>\n  </div>\n</div>\n",
                styles: [".combo-box-general-container{width:300px}.combo-box-list-container{background-color:#fff;display:flex;flex-direction:row;height:100px;position:absolute}.combo-box-row{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.combo-box-line{background-color:#da0080;width:3px}.combo-box-list{flex:1;overflow-y:auto}.combo-box-input{width:100%}.combo-box-input-container{height:25px}.combo-box-selected-item{color:#7030a0}.combo-box-insert-button{color:#807f7f;cursor:pointer}"]
            }]
    }], function () { return []; }, { placeholder: [{
            type: Input
        }], selectEmitter: [{
            type: Output
        }], enabled: [{
            type: Input
        }], selectedItem: [{
            type: Input
        }], editable: [{
            type: Input
        }], listable: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NvbWJvLWJveC1oZWxpc2EvY29tYm8tYm94LWhlbGlzYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkcsTUFBTSxDQUFOLElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtBQUM5QixJQUFDLGlFQUFNLENBQUE7QUFBQyxJQUNQLGlFQUFNLENBQUE7QUFBQyxJQUNQLGlFQUFNLENBQUE7QUFDUixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5QjtBQU9ELE1BQU0sT0FBTyx1QkFBdUI7QUFBRyxJQWdCckM7QUFDRixRQWJXLGdCQUFXLEdBQVcsaUJBQWlCLENBQUM7QUFDbkQsUUFDWSxrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0FBQ3pFLFFBQVcsWUFBTyxHQUFZLElBQUksQ0FBQztBQUNuQyxRQUNVLFNBQUksR0FBVyxDQUFDLENBQUM7QUFDM0IsUUFBVSxhQUFRLEdBQVcsRUFBRSxDQUFDO0FBQ2hDLFFBQVUsaUJBQVksR0FBWSxJQUFJLENBQUM7QUFDdkMsUUFBRSxVQUFLLEdBQXdCLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztBQUMxRCxRQUNFLFNBQUksR0FBVyxFQUFFLENBQUM7QUFDcEIsSUFFRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQUssSUFDYixDQUFDO0FBQ0gsSUFDRSxlQUFlO0FBQUssUUFDbEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILElBQ1UsV0FBVztBQUFLLFFBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUMzQixZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBWSxFQUFRLEVBQUU7QUFDekYsZ0JBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVUsRUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuRSxnQkFBUSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLFlBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLG1CQUFtQjtBQUFLLFFBQzFCLE9BQU8sbUJBQW1CLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxPQUFPO0FBQUssUUFDVixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDdEIsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztBQUM5QyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxVQUFVLENBQUMsR0FBUztBQUFJLFFBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO0FBQzVCLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztBQUM1QyxJQUFFLENBQUM7QUFDSCxJQUNFLGNBQWM7QUFBSyxRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztBQUM1QyxJQUFFLENBQUM7QUFDSCxJQUNFLE1BQU0sQ0FBQyxLQUFhO0FBQUksUUFDdEIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNqQyxZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FDbkMsQ0FBQyxJQUFVLEVBQVEsRUFBRTtBQUM3QixnQkFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixnQkFBVSxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztBQUNsRCxZQUFRLENBQUMsQ0FDRixDQUFDO0FBQ1IsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO0FBQzlDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVEsQ0FBQyxLQUFZO0FBQUksUUFDdkIsTUFBTSxPQUFPLEdBQW1CLEtBQUssQ0FBQyxNQUF3QixDQUFDO0FBQ25FLFFBQUksSUFBSSxPQUFPLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFO0FBQ3pELFlBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3pCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDttREEvRUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEM7MkNBQWdEOzs7Ozs7Ozs7OzZGQUVqRDtzd0JBQ0k7QUFBQztBQUFtRDtBQUVwQyx1QkFBbEIsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLDRCQUNWLE1BQU07QUFBSyxzQkFDWCxLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbWJvQm94TGlzdGFibGV9IGZyb20gJy4vaW50ZXJmYWNlL2NvbWJvLWJveC1saXN0YWJsZSc7XG5pbXBvcnQge0NvbWJvQm94RWRpdGFibGV9IGZyb20gJy4vaW50ZXJmYWNlL2NvbWJvLWJveC1lZGl0YWJsZSc7XG5cbmV4cG9ydCBlbnVtIENvbWJvQm94SGVsaXNhU3RhdGUge1xuICBDTE9TRUQsXG4gIFNFTEVDVCxcbiAgSU5TRVJUXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb21iby1ib3gtaGVsaXNhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbWJvLWJveC1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21iby1ib3gtaGVsaXNhLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21ib0JveEhlbGlzYUNvbXBvbmVudDxUWVBFPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQElucHV0KCkgZWRpdGFibGU6IENvbWJvQm94RWRpdGFibGU8VFlQRT47XG4gIEBJbnB1dCgpIGxpc3RhYmxlOiBDb21ib0JveExpc3RhYmxlPFRZUEU+O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NpbiBzZWxlY2Npb25hcic7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSXRlbTogVFlQRTtcbiAgQE91dHB1dCgpIHNlbGVjdEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxUWVBFPiA9IG5ldyBFdmVudEVtaXR0ZXI8VFlQRT4oKTtcbiAgQElucHV0KCkgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIgPSA1MDtcbiAgcHJpdmF0ZSBoYXZlTmV4dFBhZ2U6IGJvb2xlYW4gPSB0cnVlO1xuICBzdGF0ZTogQ29tYm9Cb3hIZWxpc2FTdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuQ0xPU0VEO1xuXG4gIHJvd3M6IFRZUEVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5nZXROZXh0UGFnZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXZlTmV4dFBhZ2UpIHtcbiAgICAgIHRoaXMubGlzdGFibGUuZ2V0RGF0YSh0aGlzLnBhZ2UrKywgdGhpcy5wYWdlU2l6ZSkuc3Vic2NyaWJlKChyb3dzOiBUWVBFW10pOiB2b2lkID0+IHtcbiAgICAgICAgcm93cy5mb3JFYWNoKChpdGVtOiBUWVBFKTogbnVtYmVyID0+IHRoaXMucm93cy5wdXNoKGl0ZW0pKTtcbiAgICAgICAgdGhpcy5oYXZlTmV4dFBhZ2UgPSByb3dzLmxlbmd0aCA+IDA7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgY29tYm9Cb3hIZWxpc2FTdGF0ZSgpOiB0eXBlb2YgQ29tYm9Cb3hIZWxpc2FTdGF0ZSB7XG4gICAgcmV0dXJuIENvbWJvQm94SGVsaXNhU3RhdGU7XG4gIH1cblxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBDb21ib0JveEhlbGlzYVN0YXRlLlNFTEVDVDtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RJdGVtKHJvdzogVFlQRSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gcm93O1xuICAgIHRoaXMuc2VsZWN0RW1pdHRlci5lbWl0KHJvdyk7XG4gICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuQ0xPU0VEO1xuICB9XG5cbiAgY2hhbmdlVG9JbnNlcnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuSU5TRVJUO1xuICB9XG5cbiAgaW5zZXJ0KGV2ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZWRpdGFibGUuaW5zZXJ0KGV2ZW50KS5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBUWVBFKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5yb3dzLnB1c2goZGF0YSk7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbWJvQm94SGVsaXNhU3RhdGUuU0VMRUNUO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0gQ29tYm9Cb3hIZWxpc2FTdGF0ZS5TRUxFQ1Q7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxUb3AgPCAxMDAwKSB7XG4gICAgICB0aGlzLmdldE5leHRQYWdlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=