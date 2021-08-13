(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/material/form-field'),require('@angular/material/input'),require('@angular/forms'),require('@angular/material/icon'),require('@angular/common'),require('@angular/material/snack-bar'),require('@angular/material/dialog'),require('@angular/material/button'),require('@angular/material/table'),require('@angular/material/sort'),require('@angular/material/tooltip'),require('@angular/material/datepicker'),require('@angular/router'),require('@angular/material/tree'),require('@angular/material/select'),require('@angular/material/core'),require('@angular/material/autocomplete'),require('@angular/material/checkbox'),require('@angular/material/toolbar'),require('@angular/material/expansion'),require('@angular/material/list'),require('@angular/material/card'),require('@angular/cdk/layout'),require('@angular/material/sidenav'),require('@angular/material/grid-list'),require('@angular/material/menu'),require('@angular/material/radio'),require('@angular/material/progress-spinner'),require('@angular/material/paginator'),require('@angular/material/tabs'),require('@angular/material/stepper'),require('@angular/material/chips'),require('@angular/cdk/drag-drop'),exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/snack-bar'), require('@angular/material/dialog'), require('rxjs'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/cdk/drag-drop'), require('moment'), require('rxjs/operators'), require('@angular/cdk/tree'), require('@angular/material/tree'), require('@angular/router'), require('lodash'), require('@angular/material/autocomplete'), require('@angular/material/tooltip'), require('@angular/cdk/layout'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/core'), require('@angular/material/grid-list'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/material/paginator'), require('@angular/material/radio'), require('@angular/material/sidenav'), require('@angular/material/card'), require('@angular/material/chips'), require('@angular/material/datepicker'), require('@angular/material/expansion'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/progress-spinner'), require('@angular/material/select'), require('@angular/material/stepper'), require('@angular/material/tabs'), require('@angular/material/toolbar')) :
    typeof define === 'function' && define.amd ? define('helisa-lib', ['@angular/core','@angular/material/form-field','@angular/material/input','@angular/forms','@angular/material/icon','@angular/common','@angular/material/snack-bar','@angular/material/dialog','@angular/material/button','@angular/material/table','@angular/material/sort','@angular/material/tooltip','@angular/material/datepicker','@angular/router','@angular/material/tree','@angular/material/select','@angular/material/core','@angular/material/autocomplete','@angular/material/checkbox','@angular/material/toolbar','@angular/material/expansion','@angular/material/list','@angular/material/card','@angular/cdk/layout','@angular/material/sidenav','@angular/material/grid-list','@angular/material/menu','@angular/material/radio','@angular/material/progress-spinner','@angular/material/paginator','@angular/material/tabs','@angular/material/stepper','@angular/material/chips','@angular/cdk/drag-drop','exports', '@angular/core', '@angular/forms', '@angular/material/snack-bar', '@angular/material/dialog', 'rxjs', '@angular/material/sort', '@angular/material/table', '@angular/cdk/drag-drop', 'moment', 'rxjs/operators', '@angular/cdk/tree', '@angular/material/tree', '@angular/router', 'lodash', '@angular/material/autocomplete', '@angular/material/tooltip', '@angular/cdk/layout', '@angular/common', '@angular/material/button', '@angular/material/checkbox', '@angular/material/core', '@angular/material/grid-list', '@angular/material/input', '@angular/material/menu', '@angular/material/paginator', '@angular/material/radio', '@angular/material/sidenav', '@angular/material/card', '@angular/material/chips', '@angular/material/datepicker', '@angular/material/expansion', '@angular/material/form-field', '@angular/material/icon', '@angular/material/list', '@angular/material/progress-spinner', '@angular/material/select', '@angular/material/stepper', '@angular/material/tabs', '@angular/material/toolbar'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.material.formField,global.ng.material.input,global.ng.forms,global.ng.material.icon,global.ng.common,global.ng.material.snackBar,global.ng.material.dialog,global.ng.material.button,global.ng.material.table,global.ng.material.sort,global.ng.material.tooltip,global.ng.material.datepicker,global.ng.router,global.ng.material.tree,global.ng.material.select,global.ng.material.core,global.ng.material.autocomplete,global.ng.material.checkbox,global.ng.material.toolbar,global.ng.material.expansion,global.ng.material.list,global.ng.material.card,global.ng.cdk.layout,global.ng.material.sidenav,global.ng.material.gridList,global.ng.material.menu,global.ng.material.radio,global.ng.material.progressSpinner,global.ng.material.paginator,global.ng.material.tabs,global.ng.material.stepper,global.ng.material.chips,global.ng.cdk.dragDrop,global['helisa-lib'] = {}, global.ng.core, global.ng.forms, global.ng.material.snackBar, global.ng.material.dialog, global.rxjs, global.ng.material.sort, global.ng.material.table, global.ng.cdk.dragDrop, global.moment_, global.rxjs.operators, global.ng.cdk.tree, global.ng.material.tree, global.ng.router, global._, global.ng.material.autocomplete, global.ng.material.tooltip, global.ng.cdk.layout, global.ng.common, global.ng.material.button, global.ng.material.checkbox, global.ng.material.core, global.ng.material.gridList, global.ng.material.input, global.ng.material.menu, global.ng.material.paginator, global.ng.material.radio, global.ng.material.sidenav, global.ng.material.card, global.ng.material.chips, global.ng.material.datepicker, global.ng.material.expansion, global.ng.material.formField, global.ng.material.icon, global.ng.material.list, global.ng.material.progressSpinner, global.ng.material.select, global.ng.material.stepper, global.ng.material.tabs, global.ng.material.toolbar));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,ɵngcc9,ɵngcc10,ɵngcc11,ɵngcc12,ɵngcc13,ɵngcc14,ɵngcc15,ɵngcc16,ɵngcc17,ɵngcc18,ɵngcc19,ɵngcc20,ɵngcc21,ɵngcc22,ɵngcc23,ɵngcc24,ɵngcc25,ɵngcc26,ɵngcc27,ɵngcc28,ɵngcc29,ɵngcc30,ɵngcc31,ɵngcc32,ɵngcc33,exports, i0, forms, i1, i1$1, rxjs, sort, table, dragDrop, moment_, operators, tree, tree$1, router, _, autocomplete, tooltip, layout, common, button, checkbox, core, gridList, input, menu, paginator, radio, sidenav, card, chips, datepicker, expansion, formField, icon, list, progressSpinner, select, stepper, tabs, toolbar) { 
var _c0 = ["inputText"];
function InputWithButtonComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.requiredMessage, " ");
} }
function ToastHelisaComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var submessage_r2 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(submessage_r2);
} }
function ToastHelisaComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ToastHelisaComponent_ng_container_3_span_1_Template, 2, 1, "span", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.data.subMessages);
} }
function AlertHelisaComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("mat-dialog-close", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.cancelLabel);
} }
var _c1 = ["viewTables"];
function DependencyTableHelisaComponent_hel_table_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "hel-table", 1, 2);
    ɵngcc0.ɵɵlistener("selectObject", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_selectObject_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var i_r2 = ctx.index; var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onSelectedDependency(i_r2, $event); })("nextPage", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_nextPage_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var i_r2 = ctx.index; var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onNextPage(i_r2, $event); })("total", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_total_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var i_r2 = ctx.index; var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onTotal(i_r2, $event); })("sort", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_sort_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var i_r2 = ctx.index; var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onSort(i_r2, $event); })("drop", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var i_r2 = ctx.index; var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onDrop(i_r2, $event); })("addRow", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_addRow_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); var i_r2 = ctx.index; var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onAddRow(i_r2); })("selectCell", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_selectCell_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var i_r2 = ctx.index; var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.selectedCell(i_r2, $event); })("bookClicked", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_bookClicked_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var i_r2 = ctx.index; var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onBookClicked(i_r2, $event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var table_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("dataSource", table_r1.dataSource)("columnConfiguration", table_r1.columns)("isRemote", table_r1.isRemote)("count", table_r1.count)("selectedIndexRow", table_r1.indexRowSelect)("isDragged", table_r1.isDragged)("addRowButton", table_r1.addRowButton)("configRowStylesFromColumn", table_r1.configRowStylesFromColumn)("configColumnClass", table_r1.configColumnClass)("isCellSelection", table_r1.isCellSelection)("addBookButton", table_r1.addBookButton != null ? table_r1.addBookButton : false)("showToolTip", ctx_r0.showToolTip)("hideDelay", ctx_r0.hideDelay)("showDelay", ctx_r0.showDelay);
} }
function InputHelisaComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 4);
    ɵngcc0.ɵɵlistener("click", function InputHelisaComponent_mat_icon_3_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.search(); });
    ɵngcc0.ɵɵtext(1, "search");
    ɵngcc0.ɵɵelementEnd();
} }
var _c2 = ["containerTable"];
function TableHelisaComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 12);
    ɵngcc0.ɵɵlistener("click", function TableHelisaComponent_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r14); var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onAddRow(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.addRowButton.text);
} }
function TableHelisaComponent_hel_input_2_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "hel-input", 13);
    ɵngcc0.ɵɵlistener("setValue", function TableHelisaComponent_hel_input_2_Template_hel_input_setValue_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.searchText($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("isSearch", true);
} }
function TableHelisaComponent_ng_container_6_ng_container_2_div_1_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r17 = ɵngcc0.ɵɵnextContext(3).$implicit;
    var ctx_r26 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("helTooltip", column_r17.title)("hideDelay", ctx_r26.hideDelay)("showDelay", ctx_r26.showDelay);
    ɵngcc0.ɵɵattribute("colspan", column_r17.colspanTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", column_r17.title, " ");
} }
function TableHelisaComponent_ng_container_6_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_6_ng_container_2_div_1_th_1_Template, 2, 5, "th", 18);
    ɵngcc0.ɵɵelementEnd();
} }
function TableHelisaComponent_ng_container_6_ng_container_2_div_2_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r17 = ɵngcc0.ɵɵnextContext(3).$implicit;
    var ctx_r28 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("helTooltip", column_r17.title)("hideDelay", ctx_r28.hideDelay)("showDelay", ctx_r28.showDelay);
    ɵngcc0.ɵɵattribute("colspan", column_r17.colspanTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", column_r17.title, " ");
} }
function TableHelisaComponent_ng_container_6_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_6_ng_container_2_div_2_th_1_Template, 2, 5, "th", 20);
    ɵngcc0.ɵɵelementEnd();
} }
function TableHelisaComponent_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_6_ng_container_2_div_1_Template, 2, 0, "div", 10);
    ɵngcc0.ɵɵtemplate(2, TableHelisaComponent_ng_container_6_ng_container_2_div_2_Template, 2, 0, "div", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r17 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !column_r17.sortable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", column_r17.sortable);
} }
function TableHelisaComponent_ng_container_6_ng_container_3_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "th", 24);
} }
function TableHelisaComponent_ng_container_6_ng_container_3_td_2_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 27);
    ɵngcc0.ɵɵelementStart(1, "i", 28);
    ɵngcc0.ɵɵtext(2, "description");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function TableHelisaComponent_ng_container_6_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    var _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 25);
    ɵngcc0.ɵɵlistener("click", function TableHelisaComponent_ng_container_6_ng_container_3_td_2_Template_td_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r37); var element_r33 = ctx.$implicit; var column_r17 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r35 = ɵngcc0.ɵɵnextContext(); return ctx_r35.selectedCell(element_r33, column_r17); });
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_6_ng_container_3_td_2_button_1_Template, 3, 0, "button", 26);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r33 = ctx.$implicit;
    var ctx_r32 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", element_r33.data === ctx_r32.selectedObject);
} }
function TableHelisaComponent_ng_container_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_6_ng_container_3_th_1_Template, 1, 0, "th", 22);
    ɵngcc0.ɵɵtemplate(2, TableHelisaComponent_ng_container_6_ng_container_3_td_2_Template, 2, 1, "td", 23);
    ɵngcc0.ɵɵelementContainerEnd();
} }
function TableHelisaComponent_ng_container_6_td_4_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 31);
    ɵngcc0.ɵɵpipe(1, "externalLink");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r38 = ɵngcc0.ɵɵnextContext().$implicit;
    var column_r17 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r39 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("href", ɵngcc0.ɵɵpipeBind1(1, 2, ctx_r39.getValue(element_r38.data, column_r17)), ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r39.getValue(element_r38.data, column_r17));
} }
function TableHelisaComponent_ng_container_6_td_4_Template(rf, ctx) { if (rf & 1) {
    var _r43 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 29);
    ɵngcc0.ɵɵlistener("dblclick", function TableHelisaComponent_ng_container_6_td_4_Template_td_dblclick_0_listener() { ɵngcc0.ɵɵrestoreView(_r43); var ctx_r42 = ɵngcc0.ɵɵnextContext(2); return ctx_r42.dblClickCell(); })("click", function TableHelisaComponent_ng_container_6_td_4_Template_td_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r43); var element_r38 = ctx.$implicit; var column_r17 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r44 = ɵngcc0.ɵɵnextContext(); return ctx_r44.selectedCell(element_r38, column_r17); });
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_6_td_4_a_1_Template, 3, 4, "a", 30);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r38 = ctx.$implicit;
    var column_r17 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r21 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("selected-row", ctx_r21.isSelectedCell(element_r38, column_r17));
    ɵngcc0.ɵɵproperty("helTooltip", ctx_r21.getValueTooltip(element_r38.data, column_r17))("hideDelay", ctx_r21.hideDelay)("showDelay", ctx_r21.showDelay)("ngClass", ctx_r21.getClassToCell(element_r38.data, column_r17));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", column_r17.columnType == ctx_r21.columnType.URL);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", column_r17.columnType != ctx_r21.columnType.URL ? ctx_r21.getValue(element_r38.data, column_r17) : "", " ");
} }
function TableHelisaComponent_ng_container_6_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 32);
    ɵngcc0.ɵɵelementStart(1, "strong");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var idx_r18 = ɵngcc0.ɵɵnextContext().index;
    var ctx_r22 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r22.totalData[idx_r18], " ");
} }
function TableHelisaComponent_ng_container_6_ng_container_6_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 35);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r17 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("matTooltip", column_r17.subtitle);
    ɵngcc0.ɵɵattribute("colspan", column_r17.colspanSubtitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", column_r17.subtitle, "");
} }
function TableHelisaComponent_ng_container_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 33);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_6_ng_container_6_th_1_Template, 2, 3, "th", 34);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var idx_r18 = ɵngcc0.ɵɵnextContext().index;
    ɵngcc0.ɵɵproperty("matColumnDef", "subtitle" + idx_r18);
} }
function TableHelisaComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementContainerStart(1, 14);
    ɵngcc0.ɵɵtemplate(2, TableHelisaComponent_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(3, TableHelisaComponent_ng_container_6_ng_container_3_Template, 3, 0, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(4, TableHelisaComponent_ng_container_6_td_4_Template, 3, 8, "td", 15);
    ɵngcc0.ɵɵtemplate(5, TableHelisaComponent_ng_container_6_td_5_Template, 3, 1, "td", 16);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵtemplate(6, TableHelisaComponent_ng_container_6_ng_container_6_Template, 2, 1, "ng-container", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r17 = ctx.$implicit;
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matColumnDef", column_r17.name)("stickyEnd", column_r17.name === "bookButton");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", column_r17.title != undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.addBookButton && column_r17.name === "bookButton");
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", column_r17.subtitle != undefined);
} }
function TableHelisaComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 36);
    ɵngcc0.ɵɵelementStart(1, "strong");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var group_r51 = ctx.$implicit;
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.getGroupDescription(group_r51.data));
} }
function TableHelisaComponent_ng_container_9_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 36);
    ɵngcc0.ɵɵelementStart(1, "strong");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r55 = ctx.$implicit;
    var ctx_r56 = ɵngcc0.ɵɵnextContext();
    var column_r52 = ctx_r56.$implicit;
    var i_r53 = ctx_r56.index;
    var ctx_r54 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r54.getGroupValue(column_r52, element_r55.data[i_r53]), " ");
} }
function TableHelisaComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 33);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_9_td_1_Template, 3, 1, "td", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r52 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("matColumnDef", "footer-" + column_r52.name);
} }
function TableHelisaComponent_ng_container_10_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 38);
} }
function TableHelisaComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_10_tr_1_Template, 1, 0, "tr", 37);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matFooterRowDef", ctx_r6.displayedColumns)("matFooterRowDefSticky", true);
} }
function TableHelisaComponent_ng_container_11_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 40);
} }
function TableHelisaComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_11_tr_1_Template, 1, 0, "tr", 39);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matHeaderRowDef", ctx_r7.displayedColumnsWithTitle)("matHeaderRowDefSticky", true);
} }
function TableHelisaComponent_ng_container_12_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 42);
} }
function TableHelisaComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_12_tr_1_Template, 1, 0, "tr", 41);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matHeaderRowDef", ctx_r8.displayedColumnsWithSubtitle);
} }
function TableHelisaComponent_ng_container_13_tr_1_Template(rf, ctx) { if (rf & 1) {
    var _r63 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "tr", 44);
    ɵngcc0.ɵɵlistener("click", function TableHelisaComponent_ng_container_13_tr_1_Template_tr_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r63); var row_r61 = ctx.$implicit; var ctx_r62 = ɵngcc0.ɵɵnextContext(2); return ctx_r62.selectRow(row_r61, true); })("dragstart", function TableHelisaComponent_ng_container_13_tr_1_Template_tr_dragstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r63); var ctx_r64 = ɵngcc0.ɵɵnextContext(2); return ctx_r64.startDrag($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r61 = ctx.$implicit;
    var ctx_r60 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("selected-row", row_r61.data === ctx_r60.selectedObject && !ctx_r60.isCellSelection);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r60.getClassToRow(row_r61.data))("draggable", true);
} }
function TableHelisaComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_13_tr_1_Template, 1, 4, "tr", 43);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matRowDefColumns", ctx_r9.displayedColumns)("matRowDefWhen", ctx_r9.isRow);
} }
function TableHelisaComponent_ng_container_14_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 46);
} if (rf & 2) {
    var row_r66 = ctx.$implicit;
    var ctx_r65 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("selected-row", row_r66.data === ctx_r65.selectedObject && !ctx_r65.isCellSelection);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r65.getClassToRow(row_r66.data));
} }
function TableHelisaComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_14_tr_1_Template, 1, 3, "tr", 45);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matRowDefColumns", ctx_r10.displayedColumns)("matRowDefWhen", ctx_r10.isRow);
} }
function TableHelisaComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 47);
} }
function TableHelisaComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 47);
} }
var _c3 = function () { return ["groupHeader"]; };
var _c4 = ["picker"];
function DateHelisaComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.getErrorMessage());
} }
var _c5 = ["tree"];
function TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_2_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var col_r13 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", col_r13.name, " ");
} }
function TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_2_ng_container_2_li_1_Template, 2, 1, "li", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var col_r13 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", col_r13.visible);
} }
function TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "ul");
    ɵngcc0.ɵɵtemplate(2, TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var node_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", node_r3.data);
} }
function TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var node_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", node_r3.name, "");
} }
function TreeHelisaComponent_mat_tree_node_3_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 10);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); var node_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onRedirect(node_r3); })("dblclick", function TreeHelisaComponent_mat_tree_node_3_li_1_Template_li_dblclick_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); var node_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onDblClick(node_r3); });
    ɵngcc0.ɵɵelement(1, "button", 11);
    ɵngcc0.ɵɵtemplate(2, TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_2_Template, 3, 1, "ng-container", 12);
    ɵngcc0.ɵɵtemplate(3, TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_3_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r4.getClassNode(node_r3));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", node_r3.data);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !node_r3.data);
} }
function TreeHelisaComponent_mat_tree_node_3_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); var node_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onEdit(node_r3); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "edit");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r5.isDisabled || node_r3.disabledEditButton);
} }
function TreeHelisaComponent_mat_tree_node_3_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r30); var node_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.onAdd(node_r3); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "add");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r6.isDisabled || node_r3.disabledAddButton);
} }
function TreeHelisaComponent_mat_tree_node_3_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); var node_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.onDelete(node_r3); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "delete");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r7.isDisabled || node_r3.disabledDeleteButton);
} }
function TreeHelisaComponent_mat_tree_node_3_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r41 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_div_6_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r41); var node_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r39 = ɵngcc0.ɵɵnextContext(); return ctx_r39.onEditMode(node_r3, true); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "more_vert");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function TreeHelisaComponent_mat_tree_node_3_div_6_mat_form_field_2_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    var _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-option", 19);
    ɵngcc0.ɵɵlistener("onSelectionChange", function TreeHelisaComponent_mat_tree_node_3_div_6_mat_form_field_2_mat_option_2_Template_mat_option_onSelectionChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); var option_r43 = ctx.$implicit; var ctx_r44 = ɵngcc0.ɵɵnextContext(4); return ctx_r44.onSelectOption($event, option_r43); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r43 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", option_r43.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(option_r43.name);
} }
function TreeHelisaComponent_mat_tree_node_3_div_6_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-form-field");
    ɵngcc0.ɵɵelementStart(1, "mat-select", 17);
    ɵngcc0.ɵɵtemplate(2, TreeHelisaComponent_mat_tree_node_3_div_6_mat_form_field_2_mat_option_2_Template, 2, 2, "mat-option", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r37 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("formControl", ctx_r37.getSelectedOptions(node_r3).formControl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", node_r3.options);
} }
function TreeHelisaComponent_mat_tree_node_3_div_6_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r49 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_div_6_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r49); var node_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r47 = ɵngcc0.ɵɵnextContext(); return ctx_r47.onEditMode(node_r3, false); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "done");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function TreeHelisaComponent_mat_tree_node_3_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtemplate(1, TreeHelisaComponent_mat_tree_node_3_div_6_button_1_Template, 3, 0, "button", 15);
    ɵngcc0.ɵɵtemplate(2, TreeHelisaComponent_mat_tree_node_3_div_6_mat_form_field_2_Template, 3, 2, "mat-form-field", 12);
    ɵngcc0.ɵɵtemplate(3, TreeHelisaComponent_mat_tree_node_3_div_6_button_3_Template, 3, 0, "button", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r8.getSelectedOptions(node_r3).editMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.getSelectedOptions(node_r3).editMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.getSelectedOptions(node_r3).editMode);
} }
function TreeHelisaComponent_mat_tree_node_3_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r53 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 7);
    ɵngcc0.ɵɵelementStart(1, "hel-input-with-button", 20);
    ɵngcc0.ɵɵlistener("cancel", function TreeHelisaComponent_mat_tree_node_3_li_7_Template_hel_input_with_button_cancel_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); var node_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r51 = ɵngcc0.ɵɵnextContext(); return ctx_r51.onCancel(node_r3, $event); })("done", function TreeHelisaComponent_mat_tree_node_3_li_7_Template_hel_input_with_button_done_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); var node_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r54 = ɵngcc0.ɵɵnextContext(); return ctx_r54.onEdited(node_r3, $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("isFocused", true)("value", node_r3.name);
} }
function TreeHelisaComponent_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-tree-node", 5);
    ɵngcc0.ɵɵtemplate(1, TreeHelisaComponent_mat_tree_node_3_li_1_Template, 4, 3, "li", 6);
    ɵngcc0.ɵɵelementStart(2, "li", 7);
    ɵngcc0.ɵɵtemplate(3, TreeHelisaComponent_mat_tree_node_3_button_3_Template, 3, 1, "button", 8);
    ɵngcc0.ɵɵtemplate(4, TreeHelisaComponent_mat_tree_node_3_button_4_Template, 3, 1, "button", 8);
    ɵngcc0.ɵɵtemplate(5, TreeHelisaComponent_mat_tree_node_3_button_5_Template, 3, 1, "button", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, TreeHelisaComponent_mat_tree_node_3_div_6_Template, 4, 3, "div", 9);
    ɵngcc0.ɵɵtemplate(7, TreeHelisaComponent_mat_tree_node_3_li_7_Template, 2, 2, "li", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !node_r3.isEditable);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", node_r3.showEditButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", node_r3.showAddButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", node_r3.showDeleteButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", node_r3.options && node_r3.options.length);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !!node_r3.isEditable && node_r3.isEditable);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_5_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var col_r66 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", col_r66.name, " ");
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_5_ng_container_2_li_1_Template, 2, 1, "li", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var col_r66 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", col_r66.visible);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "ul");
    ɵngcc0.ɵɵtemplate(2, TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var node_r57 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", node_r57.data);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var node_r57 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", node_r57.name, "");
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r73 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵelementStart(1, "button", 25);
    ɵngcc0.ɵɵelementStart(2, "mat-icon", 26);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "p", 27);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_div_2_Template_p_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r73); var node_r57 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r71 = ɵngcc0.ɵɵnextContext(); return ctx_r71.onRedirect(node_r57); })("dblclick", function TreeHelisaComponent_mat_nested_tree_node_4_div_2_Template_p_dblclick_4_listener() { ɵngcc0.ɵɵrestoreView(_r73); var node_r57 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r74 = ɵngcc0.ɵɵnextContext(); return ctx_r74.onDblClick(node_r57); });
    ɵngcc0.ɵɵtemplate(5, TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_5_Template, 3, 1, "ng-container", 12);
    ɵngcc0.ɵɵtemplate(6, TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_6_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r57 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r58 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("aria-label", "toggle " + node_r57.name);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r58.treeControl.isExpanded(node_r57) ? "remove" : "add", " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r58.getClassNode(node_r57));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", node_r57.data);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !node_r57.data);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r79 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r79); var node_r57 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r77 = ɵngcc0.ɵɵnextContext(); return ctx_r77.onEdit(node_r57); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "edit");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r57 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r59 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r59.isDisabled || node_r57.disabledEditButton);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r83 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r83); var node_r57 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r81 = ɵngcc0.ɵɵnextContext(); return ctx_r81.onAdd(node_r57); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "add");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r57 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r60 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r60.isDisabled || node_r57.disabledAddButton);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r87 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_button_7_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r87); var node_r57 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r85 = ɵngcc0.ɵɵnextContext(); return ctx_r85.onDelete(node_r57); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "delete");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r57 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r61 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r61.isDisabled || node_r57.disabledDeleteButton);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_8_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r94 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_div_8_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r94); var node_r57 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r92 = ɵngcc0.ɵɵnextContext(); return ctx_r92.onEditMode(node_r57, true); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "more_vert");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_8_mat_form_field_2_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    var _r98 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-option", 19);
    ɵngcc0.ɵɵlistener("onSelectionChange", function TreeHelisaComponent_mat_nested_tree_node_4_div_8_mat_form_field_2_mat_option_2_Template_mat_option_onSelectionChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r98); var option_r96 = ctx.$implicit; var ctx_r97 = ɵngcc0.ɵɵnextContext(4); return ctx_r97.onSelectOption($event, option_r96); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r96 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", option_r96.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(option_r96.name);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_8_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-form-field");
    ɵngcc0.ɵɵelementStart(1, "mat-select", 17);
    ɵngcc0.ɵɵtemplate(2, TreeHelisaComponent_mat_nested_tree_node_4_div_8_mat_form_field_2_mat_option_2_Template, 2, 2, "mat-option", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r57 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r90 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("formControl", ctx_r90.getSelectedOptions(node_r57).formControl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", node_r57.options);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_8_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r102 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_div_8_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r102); var node_r57 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r100 = ɵngcc0.ɵɵnextContext(); return ctx_r100.onEditMode(node_r57, false); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "done");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtemplate(1, TreeHelisaComponent_mat_nested_tree_node_4_div_8_button_1_Template, 3, 0, "button", 15);
    ɵngcc0.ɵɵtemplate(2, TreeHelisaComponent_mat_nested_tree_node_4_div_8_mat_form_field_2_Template, 3, 2, "mat-form-field", 12);
    ɵngcc0.ɵɵtemplate(3, TreeHelisaComponent_mat_nested_tree_node_4_div_8_button_3_Template, 3, 0, "button", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r57 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r62 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r62.getSelectedOptions(node_r57).editMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r62.getSelectedOptions(node_r57).editMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r62.getSelectedOptions(node_r57).editMode);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-nested-tree-node", 21);
    ɵngcc0.ɵɵelementStart(1, "li");
    ɵngcc0.ɵɵtemplate(2, TreeHelisaComponent_mat_nested_tree_node_4_div_2_Template, 7, 5, "div", 22);
    ɵngcc0.ɵɵelementStart(3, "div", 7);
    ɵngcc0.ɵɵelementStart(4, "li", 7);
    ɵngcc0.ɵɵtemplate(5, TreeHelisaComponent_mat_nested_tree_node_4_button_5_Template, 3, 1, "button", 8);
    ɵngcc0.ɵɵtemplate(6, TreeHelisaComponent_mat_nested_tree_node_4_button_6_Template, 3, 1, "button", 8);
    ɵngcc0.ɵɵtemplate(7, TreeHelisaComponent_mat_nested_tree_node_4_button_7_Template, 3, 1, "button", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(8, TreeHelisaComponent_mat_nested_tree_node_4_div_8_Template, 4, 3, "div", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "ul");
    ɵngcc0.ɵɵelementContainer(10, 23);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r57 = ctx.$implicit;
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !node_r57.isEditable);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", node_r57.showEditButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", node_r57.showAddButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", node_r57.showDeleteButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", node_r57.options && node_r57.options.length);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("example-tree-invisible", !ctx_r2.treeControl.isExpanded(node_r57));
} }
function AutocompleteHelisaComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-option", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r2 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", option_r2)("helTooltip", option_r2.displayText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", option_r2.displayText, " ");
} }
function ComboBoxHelisaComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 4);
    ɵngcc0.ɵɵlistener("focus", function ComboBoxHelisaComponent_input_2_Template_input_focus_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onFocus(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", ctx_r0.selectedItem ? ctx_r0.listable.getDisplayText(ctx_r0.selectedItem) : ctx_r0.placeholder);
} }
var _c6 = function (a0) { return { "combo-box-selected-item": a0 }; };
function ComboBoxHelisaComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵlistener("dblclick", function ComboBoxHelisaComponent_div_3_div_3_Template_div_dblclick_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var row_r7 = ctx.$implicit; var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.selectItem(row_r7); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r7 = ctx.$implicit;
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c6, ctx_r4.selectedItem && ctx_r4.listable.compare(ctx_r4.selectedItem, row_r7)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.listable.getDisplayText(row_r7), " ");
} }
function ComboBoxHelisaComponent_div_3_hel_input_4_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "hel-input", 12);
    ɵngcc0.ɵɵlistener("setValue", function ComboBoxHelisaComponent_div_3_hel_input_4_Template_hel_input_setValue_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.insert($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("isFocused", true);
} }
function ComboBoxHelisaComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("click", function ComboBoxHelisaComponent_div_3_div_5_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.changeToInsert(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.editable.getButtonInsertText());
} }
function ComboBoxHelisaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelement(1, "div", 6);
    ɵngcc0.ɵɵelementStart(2, "div", 7);
    ɵngcc0.ɵɵlistener("scroll", function ComboBoxHelisaComponent_div_3_Template_div_scroll_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onScroll($event); });
    ɵngcc0.ɵɵtemplate(3, ComboBoxHelisaComponent_div_3_div_3_Template, 2, 4, "div", 8);
    ɵngcc0.ɵɵtemplate(4, ComboBoxHelisaComponent_div_3_hel_input_4_Template, 1, 1, "hel-input", 9);
    ɵngcc0.ɵɵtemplate(5, ComboBoxHelisaComponent_div_3_div_5_Template, 2, 1, "div", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.rows);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.state == ctx_r1.comboBoxHelisaState.INSERT);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.editable && ctx_r1.state == ctx_r1.comboBoxHelisaState.SELECT);
} }
var _c7 = ["nodeComponent"];
var _c8 = ["nodeTitle"];
function PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 9);
    ɵngcc0.ɵɵlistener("click", function PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_2_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var item_r1 = ɵngcc0.ɵɵnextContext(3).$implicit; var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.expandNode(item_r1); });
    ɵngcc0.ɵɵtext(1, "add");
    ɵngcc0.ɵɵelementEnd();
} }
function PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 9);
    ɵngcc0.ɵɵlistener("click", function PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_3_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var item_r1 = ɵngcc0.ɵɵnextContext(3).$implicit; var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.collapseNode(item_r1); });
    ɵngcc0.ɵɵtext(1, "remove");
    ɵngcc0.ɵɵelementEnd();
} }
function PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-icon");
} }
var _c9 = function (a0, a1) { return { expandNode: a0, withoutNode: a1 }; };
var _c10 = function (a0, a1) { return { data: a0, node: a1 }; };
function PagingTreeHelisaComponent_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelementStart(1, "div", 6);
    ɵngcc0.ɵɵtemplate(2, PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_2_Template, 2, 0, "mat-icon", 7);
    ɵngcc0.ɵɵtemplate(3, PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_3_Template, 2, 0, "mat-icon", 7);
    ɵngcc0.ɵɵtemplate(4, PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_4_Template, 1, 0, "mat-icon", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainer(5, 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r4 = ctx.ngIf;
    var item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(6, _c9, !node_r4.expanded && node_r4.haveChildren, !node_r4.haveChildren));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !node_r4.expanded && node_r4.haveChildren);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", node_r4.expanded && node_r4.haveChildren);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !node_r4.haveChildren);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.nodeComponent)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(9, _c10, item_r1, node_r4));
} }
function PagingTreeHelisaComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, PagingTreeHelisaComponent_div_2_div_1_div_1_Template, 6, 12, "div", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.getNodeInformation(item_r1));
} }
function PagingTreeHelisaComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, PagingTreeHelisaComponent_div_2_div_1_Template, 2, 1, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.getLevelClass(item_r1));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.getNodeInformation(item_r1).visible);
} }
function AlertInformationDataHelisaComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h1", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.title);
} }
function AlertInformationDataHelisaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.content);
} }
function AlertInformationDataHelisaComponent_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("mat-dialog-close", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.cancelLabel);
} }
function AlertInformationDataHelisaComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, AlertInformationDataHelisaComponent_div_2_button_1_Template, 2, 2, "button", 6);
    ɵngcc0.ɵɵelementStart(2, "button", 7);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.hasCancelButton());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("mat-dialog-close", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.okLabel);
} }
'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var moment___namespace = /*#__PURE__*/_interopNamespace(moment_);

    var InputWithButtonComponent = /** @class */ (function () {
        function InputWithButtonComponent() {
            this.placeholder = '';
            this.inputFormControl = new forms.FormControl('', forms.Validators.required);
            this.requiredMessage = 'El campo es requerido';
            this.value = '';
            this.isFocused = false;
            this.done = new i0.EventEmitter();
            this.cancel = new i0.EventEmitter();
        }
        InputWithButtonComponent.prototype.ngOnInit = function () {
            if (this.value !== '') {
                this.inputFormControl.setValue(this.value);
            }
            this.nameField.nativeElement.focus();
        };
        InputWithButtonComponent.prototype.onDone = function () {
            if (this.inputFormControl.valid) {
                this.done.emit(this.inputFormControl.value);
            }
        };
        InputWithButtonComponent.prototype.onCancel = function () {
            this.cancel.emit();
        };
InputWithButtonComponent.ɵfac = function InputWithButtonComponent_Factory(t) { return new (t || InputWithButtonComponent)(); };
InputWithButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputWithButtonComponent, selectors: [["hel-input-with-button"]], viewQuery: function InputWithButtonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nameField = _t.first);
    } }, inputs: { placeholder: "placeholder", inputFormControl: "inputFormControl", requiredMessage: "requiredMessage", value: "value", isFocused: "isFocused" }, outputs: { done: "done", cancel: "cancel" }, decls: 9, vars: 3, consts: [["matInput", "", 3, "placeholder", "formControl"], ["inputText", ""], ["matSuffix", "", 3, "click"], [4, "ngIf"]], template: function InputWithButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "mat-form-field");
        ɵngcc0.ɵɵelement(2, "input", 0, 1);
        ɵngcc0.ɵɵelementStart(4, "mat-icon", 2);
        ɵngcc0.ɵɵlistener("click", function InputWithButtonComponent_Template_mat_icon_click_4_listener() { return ctx.onDone(); });
        ɵngcc0.ɵɵtext(5, "done");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "mat-icon", 2);
        ɵngcc0.ɵɵlistener("click", function InputWithButtonComponent_Template_mat_icon_click_6_listener() { return ctx.onCancel(); });
        ɵngcc0.ɵɵtext(7, "close");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, InputWithButtonComponent_mat_error_8_Template, 2, 1, "mat-error", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("placeholder", ctx.placeholder)("formControl", ctx.inputFormControl);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngIf", ctx.inputFormControl.hasError("required"));
    } }, directives: [ɵngcc1.MatFormField, ɵngcc2.MatInput, ɵngcc3.DefaultValueAccessor, ɵngcc3.NgControlStatus, ɵngcc3.FormControlDirective, ɵngcc4.MatIcon, ɵngcc1.MatSuffix, ɵngcc5.NgIf, ɵngcc1.MatError], styles: [""] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputWithButtonComponent, [{
        type: i0.Component,
        args: [{
                selector: 'hel-input-with-button',
                template: "<div>\n  <mat-form-field>\n    <input #inputText  matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\n      {{ requiredMessage }}\n    </mat-error>\n  </mat-form-field>\n</div>\n",
                styles: [""]
            }]
    }], function () { return []; }, { placeholder: [{
            type: i0.Input
        }], inputFormControl: [{
            type: i0.Input
        }], requiredMessage: [{
            type: i0.Input
        }], value: [{
            type: i0.Input
        }], isFocused: [{
            type: i0.Input
        }], done: [{
            type: i0.Output
        }], cancel: [{
            type: i0.Output
        }], nameField: [{
            type: i0.ViewChild,
            args: ['inputText', { static: true }]
        }] }); })();
        return InputWithButtonComponent;
    }());
    InputWithButtonComponent.ctorParameters = function () { return []; };
    InputWithButtonComponent.propDecorators = {
        placeholder: [{ type: i0.Input }],
        inputFormControl: [{ type: i0.Input }],
        requiredMessage: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        isFocused: [{ type: i0.Input }],
        nameField: [{ type: i0.ViewChild, args: ['inputText', { static: true },] }],
        done: [{ type: i0.Output }],
        cancel: [{ type: i0.Output }]
    };

    // @dynamic
    var ToastHelisaComponent = /** @class */ (function () {
        function ToastHelisaComponent(data) {
            this.data = data;
        }
        ToastHelisaComponent.prototype.ngOnInit = function () { };
ToastHelisaComponent.ɵfac = function ToastHelisaComponent_Factory(t) { return new (t || ToastHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(i1.MAT_SNACK_BAR_DATA)); };
ToastHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastHelisaComponent, selectors: [["hel-toast"]], decls: 4, vars: 3, consts: [[3, "ngClass"], [1, "toast-message"], [4, "ngIf"], ["class", "toast-sub-message", 4, "ngFor", "ngForOf"], [1, "toast-sub-message"]], template: function ToastHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, ToastHelisaComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", "toast-" + ctx.data.type);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.data.message);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !!ctx.data && !!ctx.data.subMessages);
    } }, directives: [ɵngcc5.NgClass, ɵngcc5.NgIf, ɵngcc5.NgForOf], styles: [""] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastHelisaComponent, [{
        type: i0.Component,
        args: [{
                selector: 'hel-toast',
                template: "<div [ngClass]=\"'toast-'+data.type\">\n  <span class=\"toast-message\">{{ data.message }}</span>\n  <ng-container *ngIf=\"!!data && !!data.subMessages\">\n    <span class=\"toast-sub-message\" *ngFor=\"let submessage of data.subMessages\">{{ submessage }}</span>\n  </ng-container>    \n</div>\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: i0.Inject,
                args: [i1.MAT_SNACK_BAR_DATA]
            }] }]; }, null); })();
        return ToastHelisaComponent;
    }());
    ToastHelisaComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.MAT_SNACK_BAR_DATA,] }] }
    ]; };

    var ToastHelisaService = /** @class */ (function () {
        function ToastHelisaService(snackBar) {
            this.snackBar = snackBar;
            this.durationInSeconds = 5;
        }
        ToastHelisaService.prototype.showToast = function (type, message, subMessages) {
            subMessages = subMessages ? subMessages : [];
            this.snackBar.openFromComponent(ToastHelisaComponent, {
                data: { message: message, type: type, subMessages: subMessages },
                duration: this.durationInSeconds * 1000
            });
        };
ToastHelisaService.ɵfac = function ToastHelisaService_Factory(t) { return new (t || ToastHelisaService)(ɵngcc0.ɵɵinject(ɵngcc6.MatSnackBar)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastHelisaService, [{
        type: i0.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc6.MatSnackBar }]; }, null); })();
        return ToastHelisaService;
    }());
    ToastHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ToastHelisaService_Factory() { return new ToastHelisaService(i0.ɵɵinject(i1.MatSnackBar)); }, token: ToastHelisaService, providedIn: "root" });
    ToastHelisaService.ctorParameters = function () { return [
        { type: i1.MatSnackBar }
    ]; };

    (function (ToastType) {
        ToastType["DONE"] = "done";
        ToastType["ERROR"] = "error";
        ToastType["INFO"] = "info";
    })(exports.ToastType || (exports.ToastType = {}));

    (function (AlertHelisaType) {
        AlertHelisaType["ERROR"] = "ERROR";
        AlertHelisaType["CONFIRMATION"] = "CONFIRMATION";
    })(exports.AlertHelisaType || (exports.AlertHelisaType = {}));

    var AlertHelisaComponent = /** @class */ (function () {
        function AlertHelisaComponent(dialogRef, data) {
            var _this = this;
            this.dialogRef = dialogRef;
            this.data = data;
            this.content = data.content;
            this.title = data.title;
            this.okLabel = data.okLabel;
            if (this.okLabel === undefined) {
                this.okLabel = 'aceptar';
            }
            this.cancelLabel = data.cancelLabel;
            if (this.cancelLabel === undefined) {
                this.cancelLabel = 'cancelar';
            }
            this.hasCancel = data.type === exports.AlertHelisaType.CONFIRMATION;
            dialogRef.disableClose = true;
            dialogRef.keydownEvents().subscribe(function (event) {
                if (event.code === 'Escape') {
                    _this.dialogRef.close(_this.onCancel());
                }
            });
        }
        AlertHelisaComponent.prototype.ngOnInit = function () {
        };
        AlertHelisaComponent.prototype.onCancel = function () {
            this.dialogRef.close();
        };
AlertHelisaComponent.ɵfac = function AlertHelisaComponent_Factory(t) { return new (t || AlertHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc7.MatDialogRef), ɵngcc0.ɵɵdirectiveInject(i1$1.MAT_DIALOG_DATA)); };
AlertHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AlertHelisaComponent, selectors: [["hel-alert"]], decls: 8, vars: 5, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "mat-dialog-close", 4, "ngIf"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", 3, "mat-dialog-close"]], template: function AlertHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h1", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 2);
        ɵngcc0.ɵɵtemplate(5, AlertHelisaComponent_button_5_Template, 2, 2, "button", 3);
        ɵngcc0.ɵɵelementStart(6, "button", 4);
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.content, "\n");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasCancel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("mat-dialog-close", true);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.okLabel);
    } }, directives: [ɵngcc7.MatDialogTitle, ɵngcc7.MatDialogContent, ɵngcc7.MatDialogActions, ɵngcc5.NgIf, ɵngcc8.MatButton, ɵngcc7.MatDialogClose], styles: [""] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertHelisaComponent, [{
        type: i0.Component,
        args: [{
                selector: 'hel-alert',
                template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button *ngIf=\"hasCancel\" [mat-dialog-close]=\"false\" >{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\n</div>",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc7.MatDialogRef }, { type: undefined, decorators: [{
                type: i0.Inject,
                args: [i1$1.MAT_DIALOG_DATA]
            }] }]; }, null); })();
        return AlertHelisaComponent;
    }());
    AlertHelisaComponent.ctorParameters = function () { return [
        { type: i1$1.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1$1.MAT_DIALOG_DATA,] }] }
    ]; };

    var AlertHelisaService = /** @class */ (function () {
        function AlertHelisaService(dialog) {
            this.dialog = dialog;
        }
        AlertHelisaService.prototype.openDialog = function (type, title, content, okLabel, cancelLabel) {
            var dialogRef = this.dialog.open(AlertHelisaComponent, {
                width: '250px',
                data: { title: title, content: content, type: type, okLabel: okLabel, cancelLabel: cancelLabel }
            });
            return dialogRef.afterClosed();
        };
AlertHelisaService.ɵfac = function AlertHelisaService_Factory(t) { return new (t || AlertHelisaService)(ɵngcc0.ɵɵinject(ɵngcc7.MatDialog)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertHelisaService, [{
        type: i0.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc7.MatDialog }]; }, null); })();
        return AlertHelisaService;
    }());
    AlertHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlertHelisaService_Factory() { return new AlertHelisaService(i0.ɵɵinject(i1$1.MatDialog)); }, token: AlertHelisaService, providedIn: "root" });
    AlertHelisaService.ctorParameters = function () { return [
        { type: i1$1.MatDialog }
    ]; };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var DependencyTableHelisaService = /** @class */ (function () {
        function DependencyTableHelisaService() {
            this.tables = new rxjs.Subject();
            this.infoTables = new Array();
            this.emitVisibilityButton$ = new rxjs.Subject();
            this.emitVisibilityButton = this.emitVisibilityButton$.asObservable();
            this.emitVisibilityAllButtons$ = new rxjs.Subject();
            this.emitVisibilityAllButtons = this.emitVisibilityAllButtons$.asObservable();
            this.emitIsCellSelection$ = new rxjs.Subject();
            this.emitIsCellSelection = this.emitIsCellSelection$.asObservable();
            this.emitChangeColumns$ = new rxjs.Subject();
            this.emitChangeColumns = this.emitChangeColumns$.asObservable();
            this.emitTotal = new rxjs.Subject();
            this.emitNextPage = new rxjs.Subject();
        }
        /**
         * retorna un Observable<ConfigTable[]>
         */
        DependencyTableHelisaService.prototype.getTables = function () {
            return this.tables;
        };
        /**
         * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
         * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
         * @param configTable Objeto que contiene la configuración para la tabla.
         * @param withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
         */
        DependencyTableHelisaService.prototype.updateDependency = function (configTable, withRemoveDependency) {
            if (withRemoveDependency === void 0) { withRemoveDependency = false; }
            if (withRemoveDependency) {
                this.infoTables = this.infoTables.slice(0, !configTable.order ? 0 : configTable.order);
            }
            if (!configTable.order || configTable.order >= this.infoTables.length) {
                configTable.order = this.infoTables.length;
            }
            this.infoTables[configTable.order] = configTable;
            if (configTable.isRemote) {
                configTable.dataSource = null;
                if (configTable.count === null) {
                    throw new Error('hace falta el count');
                }
            }
            else {
                if (configTable.dataSource === null) {
                    throw new Error('hace falta el dataSource');
                }
                configTable.count = configTable.dataSource.length;
            }
            this.tables.next(this.infoTables);
        };
        /**
         * Emite un evento de total con la información para la tabla correspondiente
         * @param event wrapper que contiene el indice de la tabla y la información de la pagina
         */
        DependencyTableHelisaService.prototype.setTotal = function (event) {
            this.emitTotal.next(event);
        };
        /**
         * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
         * @param event wrapper que contiene el indice de la tabla y la información de la pagina
         */
        DependencyTableHelisaService.prototype.addPage = function (event) {
            this.emitNextPage.next(event);
        };
        DependencyTableHelisaService.prototype.selectIndexRow = function (config) {
            if (this.infoTables[config.order]) {
                this.infoTables[config.order].indexRowSelect = config.indexRowSelect;
                this.tables.next(this.infoTables);
            }
        };
        /**
         * Muestra o esconde el boton una tabla en especifico
         * @param event para indicar el index de la tabla y en "data" true o false
         */
        DependencyTableHelisaService.prototype.changeVisibilityButton = function (event) {
            this.emitVisibilityButton$.next(event);
        };
        /**
         * Esconde los botones de todas las tablas
         * @param show indicar si se muestran o no todos los botones de las tablas
         */
        DependencyTableHelisaService.prototype.changeVisibilityAllButtons = function (show) {
            this.emitVisibilityAllButtons$.next(show);
        };
        /**
         * Para habilitar el manejo de selección de celda
         * @param event para indicar el index de la tabla y en "data" true o false
         */
        DependencyTableHelisaService.prototype.changeisCellSelection = function (event) {
            this.emitIsCellSelection$.next(event);
        };
        /**
         * Para habilitar el cambio de columnas
         * @param event para indicar el index de la tabla y en "data" columnas
         */
        DependencyTableHelisaService.prototype.changeColumnsByTable = function (event) {
            this.emitChangeColumns$.next(event);
        };
DependencyTableHelisaService.ɵfac = function DependencyTableHelisaService_Factory(t) { return new (t || DependencyTableHelisaService)(); };
DependencyTableHelisaService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DependencyTableHelisaService, factory: function (t) { return DependencyTableHelisaService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DependencyTableHelisaService, [{
        type: i0.Injectable
    }], function () { return []; }, null); })();
        return DependencyTableHelisaService;
    }());
    DependencyTableHelisaService.ctorParameters = function () { return []; };

    var TableHelisaService = /** @class */ (function () {
        function TableHelisaService() {
            this.emitChangeSource = new rxjs.Subject();
            this.emitNextPage = new rxjs.Subject();
            this.totalReturn = this.emitChangeSource.asObservable();
            this.nextPageReturn = this.emitNextPage.asObservable();
            this.emitVisibleButton$ = new rxjs.Subject();
            /**
             * Observable para saber si se debe mostrar o esconder el boton de add row
             */
            this.emitVisibleButton = this.emitVisibleButton$.asObservable();
        }
        TableHelisaService.prototype.setTotal = function (total, table) {
            this.emitChangeSource.next({ obj: total, table: table });
        };
        TableHelisaService.prototype.addPage = function (page, table) {
            this.emitNextPage.next({ obj: page, table: table });
        };
        /**
         * para modificar el valor de si se muestra o no el boton de add row de la tabla
         * @param change indicar si se muestra o no el boton de add row de la tabla
         */
        TableHelisaService.prototype.changeVisibilityButton = function (change) {
            this.emitVisibleButton$.next(change);
        };
TableHelisaService.ɵfac = function TableHelisaService_Factory(t) { return new (t || TableHelisaService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableHelisaService, [{
        type: i0.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
        return TableHelisaService;
    }());
    TableHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableHelisaService_Factory() { return new TableHelisaService(); }, token: TableHelisaService, providedIn: "root" });

    var DependencyTableHelisaComponent = /** @class */ (function () {
        function DependencyTableHelisaComponent(dependencyTableHelisaService, tableService) {
            this.dependencyTableHelisaService = dependencyTableHelisaService;
            this.tableService = tableService;
            this.tables = [];
            this.showToolTip = true;
            /**
             * deprecated, use selectObject
             */
            this.selected = new i0.EventEmitter();
            this.selectObject = new i0.EventEmitter();
            this.nextPage = new i0.EventEmitter();
            this.total = new i0.EventEmitter();
            this.sort = new i0.EventEmitter();
            this.drop = new i0.EventEmitter();
            this.addRow = new i0.EventEmitter();
            this.selectCell = new i0.EventEmitter();
            this.bookClicked = new i0.EventEmitter();
            this.selectedObject = null;
            /**
             * Tiempo antes de ocultarla el mensaje del tooltip
             */
            this.hideDelay = 600;
            /**
             * Tiempo antes de mostra el mensaje del tooltip
             */
            this.showDelay = 500;
        }
        DependencyTableHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.getTables();
            this.dependencyTableHelisaService.emitNextPage.subscribe(function (event) {
                _this.tableService.addPage(event.data, _this.viewTables.toArray()[event.index]);
            });
            this.dependencyTableHelisaService.emitTotal.subscribe(function (event) {
                _this.tableService.setTotal(event.data, _this.viewTables[event.index]);
            });
            // Observable para mostrar o esconder el boton de una tabla
            this.dependencyTableHelisaService.emitVisibilityButton.subscribe(function (data) {
                if (!!data && data.index !== undefined) {
                    var table = _this.tables[data.index];
                    if (!!table) {
                        table.addRowButton.showButton = data.data;
                    }
                }
            });
            // Observable para mostrar o esconder los botones de todas las tablas
            this.dependencyTableHelisaService.emitVisibilityAllButtons.subscribe(function (data) {
                if (data !== undefined && data != null) {
                    _this.tables.forEach(function (element) {
                        if (!!element.addRowButton) {
                            element.addRowButton.showButton = data;
                        }
                    });
                }
            });
            // Observable para manejo de selección de celdas
            this.dependencyTableHelisaService.emitIsCellSelection.subscribe(function (data) {
                if (!!data && data.index !== undefined) {
                    var table = _this.tables[data.index];
                    if (table) {
                        table.isCellSelection = data.data;
                    }
                }
            });
            // Observable para manejo de columnas
            this.dependencyTableHelisaService.emitChangeColumns.subscribe(function (data) {
                if (!!data && data.index !== undefined) {
                    var table = _this.tables[data.index];
                    if (table) {
                        table.columns = data.data;
                    }
                }
            });
        };
        /**
         * retorna el servicio que gestiona el componente.
         */
        DependencyTableHelisaComponent.prototype.getService = function () {
            return this.dependencyTableHelisaService;
        };
        /**
         * Obtiene un observable con las tablas dependientes desde el servicio.
         */
        DependencyTableHelisaComponent.prototype.getTables = function () {
            var _this = this;
            this.dependencyTableHelisaService.getTables()
                .subscribe(function (tables) {
                var _a;
                (_a = _this.tables).splice.apply(_a, __spread([0, _this.tables.length], tables));
                _this.viewTables.forEach(function (item) {
                    item.reload();
                });
            });
        };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla seleccionada
         * @param data retorna la fila que fue seleccionada
         */
        DependencyTableHelisaComponent.prototype.onSelectedDependency = function (index, event) {
            this.selectedObject = { index: index, data: event };
            this.selected.emit({ index: index, data: event.value });
            this.selectObject.emit({ index: index, data: event });
        };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla que genera el evento
         * @param event evento generado desde la tabla
         */
        DependencyTableHelisaComponent.prototype.onNextPage = function (index, event) {
            this.nextPage.emit({ index: index, data: event });
        };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla que genera el evento
         * @param event evento generado desde la tabla
         */
        DependencyTableHelisaComponent.prototype.onTotal = function (index, event) {
            this.total.emit({ index: index, data: event });
        };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla que genera el evento
         * @param event evento generado desde la tabla
         */
        DependencyTableHelisaComponent.prototype.onSort = function (index, event) {
            this.sort.emit({ index: index, data: event });
        };
        /**
         * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
         * @param index indica el indice de la tabla que genera el evento
         * @param event evento generado desde la tabla
         */
        DependencyTableHelisaComponent.prototype.onDrop = function (index, event) {
            this.drop.emit({ index: index, data: event });
        };
        /**
         * Evento que se dispara desde una tabla, emite el indice de la tabla al cual se le debe añadir una nueva fila
         * @param index indica el indice de la tabla de la cual se dispara el evento
         */
        DependencyTableHelisaComponent.prototype.onAddRow = function (index) {
            this.addRow.emit(index);
        };
        DependencyTableHelisaComponent.prototype.selectedCell = function (index, event) {
            if (this.tables[index].isCellSelection) {
                this.selectCell.emit({ index: index, data: event });
            }
        };
        DependencyTableHelisaComponent.prototype.onBookClicked = function (index, event) {
            this.bookClicked.emit({ index: index, data: event });
        };
DependencyTableHelisaComponent.ɵfac = function DependencyTableHelisaComponent_Factory(t) { return new (t || DependencyTableHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(DependencyTableHelisaService), ɵngcc0.ɵɵdirectiveInject(TableHelisaService)); };
DependencyTableHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DependencyTableHelisaComponent, selectors: [["hel-dependency-table"]], viewQuery: function DependencyTableHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewTables = _t);
    } }, inputs: { showToolTip: "showToolTip", hideDelay: "hideDelay", showDelay: "showDelay" }, outputs: { selected: "selected", selectObject: "selectObject", nextPage: "nextPage", total: "total", sort: "sort", drop: "drop", addRow: "addRow", selectCell: "selectCell", bookClicked: "bookClicked" }, features: [ɵngcc0.ɵɵProvidersFeature([DependencyTableHelisaService])], decls: 2, vars: 1, consts: [["class", "table-test", 3, "dataSource", "columnConfiguration", "isRemote", "count", "selectedIndexRow", "isDragged", "addRowButton", "configRowStylesFromColumn", "configColumnClass", "isCellSelection", "addBookButton", "showToolTip", "hideDelay", "showDelay", "selectObject", "nextPage", "total", "sort", "drop", "addRow", "selectCell", "bookClicked", 4, "ngFor", "ngForOf"], [1, "table-test", 3, "dataSource", "columnConfiguration", "isRemote", "count", "selectedIndexRow", "isDragged", "addRowButton", "configRowStylesFromColumn", "configColumnClass", "isCellSelection", "addBookButton", "showToolTip", "hideDelay", "showDelay", "selectObject", "nextPage", "total", "sort", "drop", "addRow", "selectCell", "bookClicked"], ["viewTables", ""]], template: function DependencyTableHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, DependencyTableHelisaComponent_hel_table_1_Template, 2, 14, "hel-table", 0);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tables);
    } }, directives: function () { return [ɵngcc5.NgForOf, TableHelisaComponent]; }, styles: [""] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DependencyTableHelisaComponent, [{
        type: i0.Component,
        args: [{
                selector: 'hel-dependency-table',
                template: "<div>    \n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\"\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\n    (selectObject)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\" [configColumnClass]=\"table.configColumnClass\"\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\n    (bookClicked)=\"onBookClicked(i,$event)\"\n    [showToolTip]=\"showToolTip\"\n    [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\">\n  </hel-table>\n</div>\n",
                providers: [DependencyTableHelisaService],
                styles: [""]
            }]
    }], function () { return [{ type: DependencyTableHelisaService }, { type: TableHelisaService }]; }, { showToolTip: [{
            type: i0.Input
        }], selected: [{
            type: i0.Output
        }], selectObject: [{
            type: i0.Output
        }], nextPage: [{
            type: i0.Output
        }], total: [{
            type: i0.Output
        }], sort: [{
            type: i0.Output
        }], drop: [{
            type: i0.Output
        }], addRow: [{
            type: i0.Output
        }], selectCell: [{
            type: i0.Output
        }], bookClicked: [{
            type: i0.Output
        }], hideDelay: [{
            type: i0.Input
        }], showDelay: [{
            type: i0.Input
        }], viewTables: [{
            type: i0.ViewChildren,
            args: ['viewTables']
        }] }); })();
        return DependencyTableHelisaComponent;
    }());
    DependencyTableHelisaComponent.ctorParameters = function () { return [
        { type: DependencyTableHelisaService },
        { type: TableHelisaService }
    ]; };
    DependencyTableHelisaComponent.propDecorators = {
        viewTables: [{ type: i0.ViewChildren, args: ['viewTables',] }],
        showToolTip: [{ type: i0.Input }],
        selected: [{ type: i0.Output }],
        selectObject: [{ type: i0.Output }],
        nextPage: [{ type: i0.Output }],
        total: [{ type: i0.Output }],
        sort: [{ type: i0.Output }],
        drop: [{ type: i0.Output }],
        addRow: [{ type: i0.Output }],
        selectCell: [{ type: i0.Output }],
        bookClicked: [{ type: i0.Output }],
        hideDelay: [{ type: i0.Input }],
        showDelay: [{ type: i0.Input }]
    };

    (function (InputHelisaType) {
        InputHelisaType[InputHelisaType["DEFAULT"] = 0] = "DEFAULT";
        InputHelisaType[InputHelisaType["IDENTITY"] = 1] = "IDENTITY";
        InputHelisaType[InputHelisaType["NUMERIC"] = 2] = "NUMERIC";
        InputHelisaType[InputHelisaType["DOUBLE"] = 3] = "DOUBLE";
    })(exports.InputHelisaType || (exports.InputHelisaType = {}));
    var InputHelisaComponent = /** @class */ (function () {
        function InputHelisaComponent() {
            this.DECIMAL_SEPARATOR = '.';
            this.THOUSAND_SEPARATOR = ',';
            this.placeholder = '';
            this.floatLabel = 'never';
            /** Activar o desactivar el autocompletado
             * (Caracteristica de los navegadores para campos comunes como
             * Direccion , Usuario, Password ... etc)
             */
            this.autocompleteMode = false;
            // Mostrar o no el icono de buscar
            this.isSearch = false;
            // @Input() inputFormControl: FormControl = new FormControl('');
            this.isFocused = false;
            /**
             * Deprecated
             */
            this.disabled = false;
            this.type = exports.InputHelisaType.DEFAULT;
            /**
             * Deprecated
             */
            this.setValue = new i0.EventEmitter();
            // tslint:disable-next-line:no-any
            this.blur = new i0.EventEmitter();
            this.formControlMask = new forms.FormControl('');
            this.realValue = '';
            this.inputFormReal = new forms.FormControl('');
        }
        Object.defineProperty(InputHelisaComponent.prototype, "inputFormControl", {
            set: function (formControl) {
                var _this = this;
                this.inputFormReal = formControl;
                this.inputFormReal.registerOnDisabledChange((function (isDisabled) {
                    if (isDisabled) {
                        _this.formControlMask.disable();
                    }
                    else {
                        _this.formControlMask.enable();
                    }
                }));
                this.inputFormReal.valueChanges.subscribe(function (data) {
                    _this.statusChange(_this.inputFormReal.status);
                    if (_this.getMaskedValue(data) !== _this.formControlMask.value) {
                        _this.change(data);
                        if (_this.isFocused) {
                            _this.onFocus(null);
                        }
                    }
                });
                this.formControlMask.setValidators(this.inputFormReal.validator);
                this.change(this.inputFormReal.value);
                // disable control
                if (formControl.disabled) {
                    this.formControlMask.disable({ onlySelf: true });
                }
                this.inputFormReal.statusChanges.subscribe(function (data) {
                    _this.statusChange(data);
                    if (_this.isFocused) {
                        _this.onFocus(null);
                    }
                });
            },
            enumerable: false,
            configurable: true
        });
        InputHelisaComponent.prototype.statusChange = function (data) {
            if (data === 'INVALID') {
                this.formControlMask.setErrors({ key: 'Error de validación.' });
                this.formControlMask.markAsTouched();
            }
            else {
                this.formControlMask.setErrors(null);
            }
        };
        InputHelisaComponent.prototype.ngOnInit = function () {
            if (this.isFocused) {
                this.inputText.nativeElement.focus();
            }
        };
        InputHelisaComponent.prototype.ngAfterViewInit = function () {
            // this.isParentDisabled();
        };
        /*isParentDisabled(): void {
          setTimeout(() => {
            if (this.nameInput.nativeElement.closest('.hw-disabled-mode')) {
              this.disabled = true;
            } else {
              this.disabled = false;
            }
          });
        }*/
        InputHelisaComponent.prototype.search = function () {
            this.setValue.emit(this.realValue);
        };
        InputHelisaComponent.prototype.change = function (event) {
            if (event != null) {
                event = event + '';
            }
            var position = this.inputText.nativeElement.selectionStart;
            var length = event ? event.length : 0;
            this.realValue = this.getRealValue(event);
            if (this.getMaskedValue(this.realValue) !== this.formControlMask.value) {
                this.formControlMask.setValue(this.getMaskedValue(this.realValue));
                position += this.inputText.nativeElement.value.length - length;
                this.inputText.nativeElement.selectionStart = position;
                this.inputText.nativeElement.selectionEnd = position;
            }
            this.inputFormReal.setValue(this.realValue);
        };
        InputHelisaComponent.prototype.getMaskedValue = function (str) {
            if (str == null) {
                return str;
            }
            str = str + '';
            if (this.type === exports.InputHelisaType.DEFAULT) {
                return str;
            }
            var maskedStr = '';
            if (this.type === exports.InputHelisaType.IDENTITY) {
                for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
                    if (j > 0 && j % 3 === 0) {
                        maskedStr = this.DECIMAL_SEPARATOR + maskedStr;
                    }
                    maskedStr = str[i] + maskedStr;
                }
            }
            if (this.type === exports.InputHelisaType.NUMERIC) {
                for (var i = str.length - 1, j = 0; i >= 0; i--, j++) {
                    if (j > 0 && j % 3 === 0) {
                        maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                    }
                    maskedStr = str[i] + maskedStr;
                }
            }
            if (this.type === exports.InputHelisaType.DOUBLE) {
                if (str.indexOf(this.DECIMAL_SEPARATOR) >= 0) {
                    for (var i = str.indexOf(this.DECIMAL_SEPARATOR); i < str.length; i++) {
                        maskedStr += str[i];
                    }
                }
                for (var i = (str.indexOf(this.DECIMAL_SEPARATOR) >= 0 ? str.indexOf(this.DECIMAL_SEPARATOR) : str.length) - 1, j = 0; i >= 0; i--, j++) {
                    if (j > 0 && j % 3 === 0) {
                        maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                    }
                    maskedStr = str[i] + maskedStr;
                }
            }
            return maskedStr;
        };
        InputHelisaComponent.prototype.getRealValue = function (str) {
            var e_1, _a, e_2, _b, e_3, _c;
            if (str == null) {
                return str;
            }
            str = str + '';
            var realStr = '';
            if (this.type === exports.InputHelisaType.DEFAULT) {
                return str;
            }
            if (this.type === exports.InputHelisaType.IDENTITY) {
                try {
                    for (var str_1 = __values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
                        var strItem = str_1_1.value;
                        if (strItem.match('[0-9]')) {
                            realStr += strItem;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (str_1_1 && !str_1_1.done && (_a = str_1.return)) _a.call(str_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (this.type === exports.InputHelisaType.NUMERIC) {
                try {
                    for (var str_2 = __values(str), str_2_1 = str_2.next(); !str_2_1.done; str_2_1 = str_2.next()) {
                        var strItem = str_2_1.value;
                        if (strItem.match('[0-9]')) {
                            realStr += strItem;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (str_2_1 && !str_2_1.done && (_b = str_2.return)) _b.call(str_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (this.type === exports.InputHelisaType.DOUBLE) {
                var haveDot = false;
                try {
                    for (var str_3 = __values(str), str_3_1 = str_3.next(); !str_3_1.done; str_3_1 = str_3.next()) {
                        var strItem = str_3_1.value;
                        if (strItem.match('[0-9]') || ((strItem === this.DECIMAL_SEPARATOR) && !haveDot)) {
                            realStr += strItem;
                        }
                        haveDot = haveDot || (strItem === this.DECIMAL_SEPARATOR);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (str_3_1 && !str_3_1.done && (_c = str_3.return)) _c.call(str_3);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            return realStr;
        };
        InputHelisaComponent.prototype.onFocus = function ($event) {
            if ((this.type === exports.InputHelisaType.NUMERIC || this.type === exports.InputHelisaType.DOUBLE) &&
                Number(this.getRealValue(this.inputText.nativeElement.value)) === 0) {
                this.inputText.nativeElement.select();
            }
        };
InputHelisaComponent.ɵfac = function InputHelisaComponent_Factory(t) { return new (t || InputHelisaComponent)(); };
InputHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputHelisaComponent, selectors: [["hel-input"]], viewQuery: function InputHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputText = _t.first);
    } }, inputs: { placeholder: "placeholder", floatLabel: "floatLabel", autocompleteMode: "autocompleteMode", isSearch: "isSearch", isFocused: "isFocused", disabled: "disabled", type: "type", inputFormControl: "inputFormControl", minlength: "minlength", maxlength: "maxlength" }, outputs: { setValue: "setValue", blur: "blur" }, decls: 4, vars: 8, consts: [[3, "floatLabel"], ["matInput", "", 3, "placeholder", "formControl", "autocomplete", "minlength", "maxlength", "keyup.enter", "ngModelChange", "blur", "focus"], ["inputText", ""], ["matSuffix", "", 3, "click", 4, "ngIf"], ["matSuffix", "", 3, "click"]], template: function InputHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-form-field", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("keyup.enter", function InputHelisaComponent_Template_input_keyup_enter_1_listener() { return ctx.search(); })("ngModelChange", function InputHelisaComponent_Template_input_ngModelChange_1_listener($event) { return ctx.change($event); })("blur", function InputHelisaComponent_Template_input_blur_1_listener($event) { return ctx.blur.emit($event); })("focus", function InputHelisaComponent_Template_input_focus_1_listener($event) { return ctx.onFocus($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, InputHelisaComponent_mat_icon_3_Template, 2, 0, "mat-icon", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("floatLabel", ctx.floatLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("placeholder", ctx.placeholder);
        ɵngcc0.ɵɵproperty("formControl", ctx.formControlMask)("autocomplete", ctx.autocompleteMode ? "on" : "off")("minlength", ctx.minlength)("maxlength", ctx.maxlength);
        ɵngcc0.ɵɵattribute("disabled", ctx.disabled ? "disabled" : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isSearch);
    } }, directives: [ɵngcc1.MatFormField, ɵngcc2.MatInput, ɵngcc3.DefaultValueAccessor, ɵngcc3.NgControlStatus, ɵngcc3.FormControlDirective, ɵngcc3.MinLengthValidator, ɵngcc3.MaxLengthValidator, ɵngcc5.NgIf, ɵngcc4.MatIcon, ɵngcc1.MatSuffix], styles: ["hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputHelisaComponent, [{
        type: i0.Component,
        args: [{
                selector: 'hel-input',
                template: "<mat-form-field [floatLabel]=\"floatLabel\">\n  <input #inputText matInput placeholder=\"{{placeholder}}\"\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\n  [autocomplete]=\"(autocompleteMode) ? 'on' : 'off'\" (blur)=\"blur.emit($event)\" [minlength]=\"minlength\" [maxlength]=\"maxlength\" (focus)=\"onFocus($event)\">\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\n</mat-form-field>\n",
                styles: ["::ng-deep hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
            }]
    }], function () { return []; }, { placeholder: [{
            type: i0.Input
        }], floatLabel: [{
            type: i0.Input
        }], autocompleteMode: [{
            type: i0.Input
        }], isSearch: [{
            type: i0.Input
        }], isFocused: [{
            type: i0.Input
        }], disabled: [{
            type: i0.Input
        }], type: [{
            type: i0.Input
        }], setValue: [{
            type: i0.Output
        }], blur: [{
            type: i0.Output
        }], inputFormControl: [{
            type: i0.Input
        }], minlength: [{
            type: i0.Input
        }], maxlength: [{
            type: i0.Input
        }], inputText: [{
            type: i0.ViewChild,
            args: ['inputText', { static: true }]
        }] }); })();
        return InputHelisaComponent;
    }());
    InputHelisaComponent.ctorParameters = function () { return []; };
    InputHelisaComponent.propDecorators = {
        placeholder: [{ type: i0.Input }],
        floatLabel: [{ type: i0.Input }],
        minlength: [{ type: i0.Input }],
        maxlength: [{ type: i0.Input }],
        autocompleteMode: [{ type: i0.Input }],
        isSearch: [{ type: i0.Input }],
        isFocused: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        type: [{ type: i0.Input }],
        setValue: [{ type: i0.Output }],
        blur: [{ type: i0.Output }],
        inputText: [{ type: i0.ViewChild, args: ['inputText', { static: true },] }],
        inputFormControl: [{ type: i0.Input }]
    };

    (function (ColumnType) {
        ColumnType[ColumnType["NORMAL"] = 0] = "NORMAL";
        ColumnType[ColumnType["URL"] = 1] = "URL";
    })(exports.ColumnType || (exports.ColumnType = {}));
    (function (EventScope) {
        EventScope[EventScope["USER"] = 0] = "USER";
        EventScope[EventScope["CODE_CALL"] = 1] = "CODE_CALL";
    })(exports.EventScope || (exports.EventScope = {}));
    (function (TotalType) {
        TotalType[TotalType["SUM"] = 0] = "SUM";
        TotalType[TotalType["AVERAGE"] = 1] = "AVERAGE";
        TotalType[TotalType["COUNT"] = 2] = "COUNT";
    })(exports.TotalType || (exports.TotalType = {}));
    (function (ChangeColumnConfigurationType) {
        ChangeColumnConfigurationType[ChangeColumnConfigurationType["SORT"] = 0] = "SORT";
        ChangeColumnConfigurationType[ChangeColumnConfigurationType["UNKNOWN"] = 1] = "UNKNOWN";
        ChangeColumnConfigurationType[ChangeColumnConfigurationType["TOTAL"] = 2] = "TOTAL";
    })(exports.ChangeColumnConfigurationType || (exports.ChangeColumnConfigurationType = {}));
    (function (TableHelisaType) {
        TableHelisaType[TableHelisaType["REMOTE"] = 0] = "REMOTE";
        TableHelisaType[TableHelisaType["LOCAL"] = 1] = "LOCAL";
    })(exports.TableHelisaType || (exports.TableHelisaType = {}));
    // @dynamic
    var ColumnConfigUtil = /** @class */ (function () {
        function ColumnConfigUtil() {
        }
        ColumnConfigUtil.prototype.getValue = function (obj, column) {
            return column.name.split('.').reduce(function (o, field) { return o && o[field]; }, obj);
        };
        return ColumnConfigUtil;
    }());

    var TableHelisaConnectComponent = /** @class */ (function () {
        function TableHelisaConnectComponent() {
            this.page = 0;
            this.isLastPage = false;
            this.isUsed = false;
        }
        TableHelisaConnectComponent.prototype.getBody = function (columnConfig, search) {
            return {};
        };
        TableHelisaConnectComponent.prototype.nextPage = function () {
            return this.page++;
        };
        return TableHelisaConnectComponent;
    }());

    var RowType;
    (function (RowType) {
        RowType[RowType["GROUP_TITLE"] = 0] = "GROUP_TITLE";
        RowType[RowType["GROUP_FOOTER"] = 1] = "GROUP_FOOTER";
        RowType[RowType["ROW"] = 2] = "ROW";
    })(RowType || (RowType = {}));
    var TableHelisaComponent = /** @class */ (function () {
        function TableHelisaComponent(tableService) {
            this.tableService = tableService;
            this.data = new table.MatTableDataSource([]);
            this.displayedColumns = [];
            this.displayedColumnsWithTitle = [];
            this.displayedColumnsWithSubtitle = [];
            this.displayedColumnsWithFooter = [];
            this.type = exports.TableHelisaType.LOCAL;
            this.scrollCount = 0;
            this.hasSubtitle = false;
            this.indexRowStartDrag = -1;
            this.lastIndexRowDrag = -1;
            this.dataBeforeDrag = null;
            this.dataSource$ = [];
            this.scrollX = 0;
            this.scrollY = 0;
            this.sort = new i0.EventEmitter();
            this.total = new i0.EventEmitter();
            this.search = new i0.EventEmitter();
            /**
             * Deprecado, cambiar por electObject
             */
            this.select = new i0.EventEmitter();
            this.selectCell = new i0.EventEmitter();
            this.selectObject = new i0.EventEmitter();
            this.nextPage = new i0.EventEmitter();
            this.showTitle = true;
            this.isCellSelection = false;
            this.drop = new i0.EventEmitter();
            this.isDragged = false;
            this.addRowButton = { showButton: false, text: '' };
            this.addRow = new i0.EventEmitter();
            this.bookClicked = new i0.EventEmitter();
            this.addBookButton = false;
            this.showToolTip = true;
            this.showFooter = false;
            this.showSearch = false;
            /**
             * Tiempo antes de ocultarla el mensaje del tooltip
             */
            this.hideDelay = 600;
            /**
             * Tiempo antes de mostra el mensaje del tooltip
             */
            this.showDelay = 500;
        }
        TableHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.reloadColumnConfig();
            this.tableService.nextPageReturn.subscribe(function (data) {
                if (!data.table || data.table === _this) {
                    _this.receivePage(data.obj);
                }
            });
            this.tableService.totalReturn.subscribe(function (info) {
                if (info) {
                    _this.columnConfig.forEach(function (column, idx) {
                        if (column === info.obj.column) {
                            _this.totalData[idx] = _this.getGroupValue(column, { sum: info.obj.value, count: _this.count });
                        }
                    });
                }
            });
            this.matSort.sortChange.subscribe(function (event) {
                var column = _this.columnConfig.find(function (c) { return c.name === event.active; });
                column.sortDirection = event.direction;
                _this.sort.emit({ column: column, columnConfigurations: _this.columnConfig, type: exports.ChangeColumnConfigurationType.SORT });
            });
            this.tableService.emitVisibleButton.subscribe(function (data) {
                if (data !== undefined && data != null) {
                    _this.addRowButton.showButton = data;
                }
            });
            this.reload();
        };
        TableHelisaComponent.prototype.ngAfterViewInit = function () {
            if (this.isCellSelection) {
                this.matTable.renderRows();
            }
        };
        Object.defineProperty(TableHelisaComponent.prototype, "isRemote", {
            set: function (w) {
                this.type = w ? exports.TableHelisaType.REMOTE : exports.TableHelisaType.LOCAL;
                this.tableHelisaConnectComponent = new TableHelisaConnectComponent();
                if (this.type === exports.TableHelisaType.REMOTE) {
                    this.goNextPage();
                }
                else {
                    this.tableHelisaConnectComponent.page++;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableHelisaComponent.prototype, "columnConfiguration", {
            set: function (columnConfiguration) {
                this.columnConfig = columnConfiguration;
                this.reload();
                this.reloadColumnConfig();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableHelisaComponent.prototype, "dataSource", {
            get: function () {
                return this.dataSource$;
            },
            set: function (dataSource) {
                this.dataSource$ = dataSource;
                this.rawData = dataSource;
                this.reload();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableHelisaComponent.prototype, "selectedIndexRow", {
            set: function (idRowSelected) {
                this.indexRowSelect = idRowSelected;
                if (this.rawData && this.rawData.length) {
                    if ((idRowSelected >= this.rawData.length || idRowSelected < 0)) {
                        this.indexRowSelect = 0;
                    }
                    this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
                }
            },
            enumerable: false,
            configurable: true
        });
        TableHelisaComponent.prototype.reloadColumnConfig = function () {
            var _this = this;
            this.hasSubtitle = false;
            this.displayedColumns.splice(0, this.displayedColumns.length);
            if (this.columnConfig) {
                if (this.addBookButton) {
                    var columnCount = this.columnConfig.length;
                    var countSubtitle_1 = 0;
                    var showBookButton_1 = false;
                    this.columnConfig.forEach(function (column) {
                        if (!!column.subtitle) {
                            countSubtitle_1 = countSubtitle_1 + 1;
                        }
                        if ((!showBookButton_1) && (column.name === 'bookButton')) {
                            showBookButton_1 = true;
                        }
                    });
                    var subtitleTemp = columnCount === countSubtitle_1;
                    if (!showBookButton_1) {
                        this.columnConfig.push({
                            name: 'bookButton',
                            title: '',
                            subtitle: subtitleTemp ? '' : undefined,
                            visible: true
                        });
                    }
                }
                this.columnConfig.forEach(function (column) {
                    if (column.visible) {
                        _this.displayedColumns.push(column.name);
                    }
                    if (!_this.hasSubtitle) {
                        _this.hasSubtitle = column.subtitle !== undefined;
                    }
                });
                if (this.rawData) {
                    this.dataSource = this.rawData;
                }
            }
            this.displayedColumnsWithTitle.splice(0, this.displayedColumnsWithTitle.length);
            this.displayedColumnsWithSubtitle.splice(0, this.displayedColumnsWithSubtitle.length);
            this.displayedColumnsWithFooter.splice(0, this.displayedColumnsWithFooter.length);
            this.getColumnsWithTitle().forEach(function (col) { return _this.displayedColumnsWithTitle.push(col); });
            this.getHeaderSubtitle().forEach(function (col) { return _this.displayedColumnsWithSubtitle.push(col); });
            this.footerDisplayedColumns().forEach(function (col) { return _this.displayedColumnsWithFooter.push(col); });
        };
        TableHelisaComponent.prototype.reload = function () {
            var _this = this;
            if (this.columnConfig) {
                var changeData_1 = Array();
                var haveGroup_1 = false;
                var groupFooter_1;
                this.columnConfig.forEach(function (column) {
                    if (column.totalType !== undefined && (_this.type === exports.TableHelisaType.LOCAL || _this.tableHelisaConnectComponent.page <= 1)) {
                        _this.totalData = new Array(_this.columnConfig.length);
                        _this.showFooter = true;
                        _this.total.emit({ column: column, columnConfigurations: _this.columnConfig, type: exports.ChangeColumnConfigurationType.TOTAL });
                    }
                    _this.showSearch = _this.showSearch || column.searchable;
                    haveGroup_1 = haveGroup_1 || column.groupable;
                });
                if (haveGroup_1) {
                    this.rawData = this.rawData.sort(function (a, b) {
                        var result = 0;
                        _this.columnConfig.forEach(function (column) {
                            if (result === 0) {
                                result = _this.compare(a, b);
                            }
                        });
                        return result;
                    });
                }
                if (this.rawData) {
                    this.rawData.forEach(function (row) {
                        if (haveGroup_1 && (changeData_1.length === 0 || _this.compare(changeData_1[changeData_1.length - 1].data, row) !== 0)) {
                            if (groupFooter_1) {
                                changeData_1.push({ data: groupFooter_1, rowType: RowType.GROUP_FOOTER });
                            }
                            changeData_1.push({ data: row, rowType: RowType.GROUP_TITLE });
                            groupFooter_1 = new Array(_this.columnConfig.length);
                        }
                        if (haveGroup_1) {
                            _this.addTotalGroup(groupFooter_1, row);
                        }
                        changeData_1.push({ data: row, rowType: RowType.ROW });
                    });
                    this.data = new table.MatTableDataSource(changeData_1);
                }
                if (this.rawData && this.rawData.length && this.indexRowSelect && !this.selectedObject) {
                    if (this.indexRowSelect >= this.rawData.length || this.indexRowSelect < 0) {
                        this.indexRowSelect = 0;
                    }
                    this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
                }
            }
        };
        TableHelisaComponent.prototype.addTotalGroup = function (rowTotal, row) {
            this.columnConfig.forEach(function (column, index) {
                if (column.totalType !== undefined) {
                    if (rowTotal[index] === undefined) {
                        rowTotal[index] = { sum: new ColumnConfigUtil().getValue(row, column), count: 1 };
                    }
                    else {
                        rowTotal[index].sum += new ColumnConfigUtil().getValue(row, column);
                        rowTotal[index].count++;
                    }
                }
            });
        };
        TableHelisaComponent.prototype.compare = function (a, b) {
            var ws = 0;
            this.columnConfig.forEach(function (column) {
                if (ws === 0 && column.groupable) {
                    if (new ColumnConfigUtil().getValue(a, column) < new ColumnConfigUtil().getValue(b, column)) {
                        ws = -1;
                    }
                    else if (new ColumnConfigUtil().getValue(a, column) > new ColumnConfigUtil().getValue(b, column)) {
                        ws = 1;
                    }
                }
            });
            return ws;
        };
        TableHelisaComponent.prototype.getGroupDescription = function (obj) {
            var result = '';
            this.columnConfig.forEach(function (column) {
                if (column.groupable) {
                    result += (result.length ? ' - ' : '') + (new ColumnConfigUtil().getValue(obj, column));
                }
            });
            return result;
        };
        TableHelisaComponent.prototype.isGroupTitle = function (index, item) {
            return item.rowType === RowType.GROUP_TITLE;
        };
        TableHelisaComponent.prototype.isRow = function (index, item) {
            return item.rowType === RowType.ROW;
        };
        TableHelisaComponent.prototype.isGroupFooter = function (index, item) {
            return item.rowType === RowType.GROUP_FOOTER;
        };
        TableHelisaComponent.prototype.footerDisplayedColumns = function () {
            return this.displayedColumns.map(function (name) { return 'footer-' + name; });
        };
        TableHelisaComponent.prototype.getGroupValue = function (column, data) {
            if (column.totalType === exports.TotalType.SUM) {
                return data.sum;
            }
            if (column.totalType === exports.TotalType.COUNT) {
                return data.count;
            }
            if (column.totalType === exports.TotalType.AVERAGE) {
                return 1. * data.sum / data.count;
            }
            return undefined;
        };
        TableHelisaComponent.prototype.getValue = function (obj, column) {
            return new ColumnConfigUtil().getValue(obj, column);
        };
        TableHelisaComponent.prototype.getValueTooltip = function (obj, column) {
            if (this.showToolTip) {
                return new ColumnConfigUtil().getValue(obj, column);
            }
            else {
                return null;
            }
        };
        TableHelisaComponent.prototype.searchText = function (text) {
            this.lastSearch = text;
            this.search.emit({ text: text, columnConfigurations: this.columnConfig });
        };
        TableHelisaComponent.prototype.selectRow = function (row, isUser, column) {
            if (row === undefined || row === null) {
                return;
            }
            if ((column === undefined || column === null) || (!!column && column.name !== 'bookButton')) {
                this.selectedObject = row.data;
                this.select.emit(this.selectedObject);
                this.selectObject.emit({ value: this.selectedObject, scope: isUser ? exports.EventScope.USER : exports.EventScope.CODE_CALL });
            }
            else if (!!column && column.name === 'bookButton') {
                if (this.selectedObject !== row.data) {
                    this.selectedObject = row.data;
                    this.select.emit(this.selectedObject);
                    this.selectObject.emit({ value: this.selectedObject, scope: isUser ? exports.EventScope.USER : exports.EventScope.CODE_CALL });
                }
                this.bookClicked.emit(this.selectedObject);
            }
        };
        TableHelisaComponent.prototype.onScroll = function (event) {
            var element = event.target;
            var isScrollY;
            if (this.scrollY !== element.scrollTop) {
                isScrollY = true;
                this.scrollY = element.scrollTop;
                this.scrollX = element.scrollLeft;
            }
            if (this.scrollX !== element.scrollLeft) {
                isScrollY = false;
                this.scrollY = element.scrollTop;
                this.scrollX = element.scrollLeft;
            }
            if ((element.scrollHeight - element.scrollTop < 1000) && isScrollY) {
                this.goNextPage();
            }
        };
        TableHelisaComponent.prototype.goNextPage = function () {
            if (!this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
                this.tableHelisaConnectComponent.isUsed = true;
                this.nextPage.emit({
                    page: this.tableHelisaConnectComponent.nextPage(),
                    body: this.tableHelisaConnectComponent.getBody(this.columnConfig, this.lastSearch)
                });
            }
        };
        TableHelisaComponent.prototype.receivePage = function (data) {
            if (!this.rawData) {
                this.rawData = new Array();
            }
            this.rawData = this.rawData.concat(data);
            this.dataSource = this.rawData;
            this.tableHelisaConnectComponent.isLastPage = data.length === 0;
            this.tableHelisaConnectComponent.isUsed = false;
        };
        TableHelisaComponent.prototype.dblClickCell = function () {
            this.selectCell.emit(this.selectedCells);
        };
        TableHelisaComponent.prototype.selectedCell = function (element, column) {
            this.selectRow(element, true, column);
            this.selectedCells = { column: column, row: element };
            this.selectCell.emit(this.selectedCells);
        };
        TableHelisaComponent.prototype.isSelectedCell = function (row, column) {
            if (this.isCellSelection) {
                if (this.selectedCells != null) {
                    if (this.selectedCells.column.name === column.name &&
                        this.selectedCells.row.data === row.data) {
                        return true;
                    }
                }
            }
            return false;
        };
        TableHelisaComponent.prototype.getClassToCell = function (row, column) {
            var _this = this;
            var classToCell = new Array();
            if (this.configCellStyles) {
                var found = this.configCellStyles.find(function (c) {
                    return c.cellData === _this.getValue(row, column);
                });
                if (found) {
                    classToCell.push(found.classCell);
                }
            }
            if (column.columnStyle) {
                classToCell.push(column.columnStyle);
            }
            return classToCell;
        };
        TableHelisaComponent.prototype.getClassToColumn = function () {
            return this.configColumnClass;
        };
        TableHelisaComponent.prototype.getClassToRow = function (row) {
            var _this = this;
            var classToRow = new Array();
            if (row === this.selectedObject && !this.isCellSelection) {
                classToRow.push('');
            }
            if (this.configRowStylesFromColumn) {
                var found = this.configRowStylesFromColumn.find(function (c) {
                    return c.data === _this.getValue(row, c.column);
                });
                if (found) {
                    classToRow.push(found.classRow);
                }
            }
            return classToRow;
        };
        TableHelisaComponent.prototype.onDrop = function (event) {
            if (this.isDragged && this.indexRowStartDrag >= 0) {
                var rowIndex = this.getRowIndex(event.pageY);
                var array = this.dataBeforeDrag.data;
                var rawData = this.rawData;
                dragDrop.moveItemInArray(array, this.indexRowStartDrag, rowIndex);
                dragDrop.moveItemInArray(rawData, this.indexRowStartDrag, rowIndex);
                this.drop.emit({ value: array[rowIndex].data, order: rowIndex });
                this.rawData = rawData;
                this.data = new table.MatTableDataSource(array);
                event.stopPropagation();
            }
        };
        TableHelisaComponent.prototype.tableKeydown = function (event) {
            var _this = this;
            if (!this.isCellSelection) {
                var currentIndex_1 = this.data.data.findIndex(function (row) { return row.data === _this.selectedObject; });
                var newSelection_1 = -10;
                if (event.key === 'ArrowDown') {
                    this.scrollCount++;
                    this.data.data.forEach(function (row, index) {
                        if (newSelection_1 === -10 && index > currentIndex_1 && row.rowType === RowType.ROW) {
                            newSelection_1 = index;
                        }
                    });
                }
                if (event.key === 'ArrowUp') {
                    this.scrollCount--;
                    currentIndex_1 = this.data.data.length - currentIndex_1 - 1;
                    this.data.data.reverse().forEach(function (row, index) {
                        if (newSelection_1 === -10 && index > currentIndex_1 && row.rowType === RowType.ROW) {
                            newSelection_1 = index;
                        }
                    });
                    this.data.data.reverse();
                    if (newSelection_1 !== -10) {
                        newSelection_1 = this.data.data.length - newSelection_1 - 1;
                    }
                }
                if (newSelection_1 !== -10) {
                    this.selectRow(this.data.data[newSelection_1], true);
                }
                if (Math.abs(this.scrollCount) >= 2) {
                    this.scrollCount = 0;
                }
                else {
                    event.preventDefault();
                }
            }
        };
        /**
         * Emite el evento cuando se da click al boton AddRow
         */
        TableHelisaComponent.prototype.onAddRow = function () {
            this.addRow.emit();
        };
        TableHelisaComponent.prototype.getHeaderSubtitle = function () {
            var x = this.columnConfig.map(function (column, index) {
                if (column.visible && column.subtitle !== undefined) {
                    return 'subtitle' + index;
                }
                else {
                    return null;
                }
            }).filter(function (data) { return data != null; });
            return x;
        };
        TableHelisaComponent.prototype.getColumnsWithTitle = function () {
            return this.columnConfig.filter(function (column) { return column.visible && column.title !== undefined; }).map(function (col) { return col.name; });
        };
        TableHelisaComponent.prototype.dragger = function (event) {
            if (this.isDragged && this.indexRowStartDrag >= 0) {
                var rowIndex = this.getRowIndex(event.pageY);
                if (rowIndex !== this.lastIndexRowDrag) {
                    this.lastIndexRowDrag = rowIndex;
                    // This can have a memory problem with big data
                    var array = __spread(this.dataBeforeDrag.data);
                    dragDrop.moveItemInArray(array, this.indexRowStartDrag, rowIndex);
                    this.data = new table.MatTableDataSource(array);
                }
                event.preventDefault();
                return true;
            }
        };
        TableHelisaComponent.prototype.startDrag = function (event) {
            this.indexRowStartDrag = this.getRowIndex(event.pageY);
            this.lastIndexRowDrag = this.indexRowStartDrag;
            this.dataBeforeDrag = this.data;
        };
        TableHelisaComponent.prototype.getRowIndex = function (pageY) {
            var offsetTop = 0;
            var container = this.containerTable.nativeElement;
            while ((container !== null) && (offsetTop === 0)) {
                offsetTop = container.offsetTop;
                container = container.parentElement;
            }
            var rowIndex = -1;
            var rows = this.matTableElement.nativeElement.children[1].children;
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                if (pageY - offsetTop > row.offsetTop - this.containerTable.nativeElement.scrollTop) {
                    rowIndex = i;
                }
            }
            if (rowIndex < 0) {
                rowIndex = 0;
            }
            return rowIndex;
        };
        Object.defineProperty(TableHelisaComponent.prototype, "columnType", {
            get: function () {
                return exports.ColumnType;
            },
            enumerable: false,
            configurable: true
        });
TableHelisaComponent.ɵfac = function TableHelisaComponent_Factory(t) { return new (t || TableHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(TableHelisaService)); };
TableHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableHelisaComponent, selectors: [["hel-table"]], viewQuery: function TableHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(sort.MatSort, true);
        ɵngcc0.ɵɵstaticViewQuery(table.MatTable, true);
        ɵngcc0.ɵɵstaticViewQuery(table.MatTable, true, i0.ElementRef);
        ɵngcc0.ɵɵstaticViewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.matSort = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.matTable = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.matTableElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerTable = _t.first);
    } }, inputs: { showTitle: "showTitle", isCellSelection: "isCellSelection", isDragged: "isDragged", addRowButton: "addRowButton", addBookButton: "addBookButton", showToolTip: "showToolTip", hideDelay: "hideDelay", showDelay: "showDelay", isRemote: "isRemote", columnConfiguration: "columnConfiguration", dataSource: "dataSource", selectedIndexRow: "selectedIndexRow", selectedCells: "selectedCells", count: "count", configCellStyles: "configCellStyles", configRowStylesFromColumn: "configRowStylesFromColumn", configColumnClass: "configColumnClass" }, outputs: { sort: "sort", total: "total", search: "search", select: "select", selectCell: "selectCell", selectObject: "selectObject", nextPage: "nextPage", drop: "drop", addRow: "addRow", bookClicked: "bookClicked" }, decls: 17, vars: 16, consts: [[3, "click", 4, "ngIf"], [1, "div-table-helisa"], [3, "isSearch", "setValue", 4, "ngIf"], [1, "container-table", 3, "scroll"], ["containerTable", ""], ["mat-table", "", "matSort", "", "matTable", "", "tabindex", "0", 1, "table-helisa", 3, "ngClass", "dataSource", "keydown", "drop", "dragover"], [4, "ngFor", "ngForOf"], ["matColumnDef", "groupHeader"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns", "matRowDefWhen"], [3, "click"], [3, "isSearch", "setValue"], [3, "matColumnDef", "stickyEnd"], ["mat-cell", "", 3, "helTooltip", "hideDelay", "showDelay", "selected-row", "ngClass", "dblclick", "click", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], [3, "matColumnDef", 4, "ngIf"], ["mat-header-cell", "", 3, "helTooltip", "hideDelay", "showDelay", 4, "matHeaderCellDef"], ["mat-header-cell", "", 3, "helTooltip", "hideDelay", "showDelay"], ["mat-header-cell", "", "mat-sort-header", "", 3, "helTooltip", "hideDelay", "showDelay", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "helTooltip", "hideDelay", "showDelay"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], ["mat-icon-button", "", 4, "ngIf"], ["mat-icon-button", ""], [1, "material-icons-outlined"], ["mat-cell", "", 3, "helTooltip", "hideDelay", "showDelay", "ngClass", "dblclick", "click"], [3, "href", 4, "ngIf"], [3, "href"], ["mat-footer-cell", ""], [3, "matColumnDef"], ["mat-header-cell", "", 3, "matTooltip", 4, "matHeaderCellDef"], ["mat-header-cell", "", 3, "matTooltip"], ["mat-cell", ""], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-footer-row", ""], ["mat-header-row", "", "class", "hw-head-title", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-header-row", "", 1, "hw-head-title"], ["mat-header-row", "", "class", "hw-head-subtitle", 4, "matHeaderRowDef"], ["mat-header-row", "", 1, "hw-head-subtitle"], ["mat-row", "", 3, "selected-row", "ngClass", "draggable", "click", "dragstart", 4, "matRowDef", "matRowDefColumns", "matRowDefWhen"], ["mat-row", "", 3, "ngClass", "draggable", "click", "dragstart"], ["mat-row", "", 3, "selected-row", "ngClass", 4, "matRowDef", "matRowDefColumns", "matRowDefWhen"], ["mat-row", "", 3, "ngClass"], ["mat-row", ""]], template: function TableHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TableHelisaComponent_button_0_Template, 2, 1, "button", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, TableHelisaComponent_hel_input_2_Template, 1, 1, "hel-input", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵlistener("scroll", function TableHelisaComponent_Template_div_scroll_3_listener($event) { return ctx.onScroll($event); });
        ɵngcc0.ɵɵelementStart(5, "table", 5);
        ɵngcc0.ɵɵlistener("keydown", function TableHelisaComponent_Template_table_keydown_5_listener($event) { return ctx.tableKeydown($event); })("drop", function TableHelisaComponent_Template_table_drop_5_listener($event) { return ctx.onDrop($event); })("dragover", function TableHelisaComponent_Template_table_dragover_5_listener($event) { return ctx.dragger($event); });
        ɵngcc0.ɵɵtemplate(6, TableHelisaComponent_ng_container_6_Template, 7, 5, "ng-container", 6);
        ɵngcc0.ɵɵelementContainerStart(7, 7);
        ɵngcc0.ɵɵtemplate(8, TableHelisaComponent_td_8_Template, 3, 1, "td", 8);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵtemplate(9, TableHelisaComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
        ɵngcc0.ɵɵtemplate(10, TableHelisaComponent_ng_container_10_Template, 2, 2, "ng-container", 10);
        ɵngcc0.ɵɵtemplate(11, TableHelisaComponent_ng_container_11_Template, 2, 2, "ng-container", 10);
        ɵngcc0.ɵɵtemplate(12, TableHelisaComponent_ng_container_12_Template, 2, 1, "ng-container", 10);
        ɵngcc0.ɵɵtemplate(13, TableHelisaComponent_ng_container_13_Template, 2, 2, "ng-container", 10);
        ɵngcc0.ɵɵtemplate(14, TableHelisaComponent_ng_container_14_Template, 2, 2, "ng-container", 10);
        ɵngcc0.ɵɵtemplate(15, TableHelisaComponent_tr_15_Template, 1, 0, "tr", 11);
        ɵngcc0.ɵɵtemplate(16, TableHelisaComponent_tr_16_Template, 1, 0, "tr", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !!ctx.addRowButton && ctx.addRowButton.showButton);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSearch);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngClass", ctx.getClassToColumn())("dataSource", ctx.data);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.columnConfig);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.columnConfig);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showFooter && ctx.displayedColumnsWithFooter.length > 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showTitle && ctx.displayedColumnsWithTitle.length > 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.displayedColumnsWithSubtitle.length > 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isDragged);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isDragged);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("matRowDefColumns", ɵngcc0.ɵɵpureFunction0(15, _c3))("matRowDefWhen", ctx.isGroupTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("matRowDefColumns", ctx.displayedColumnsWithFooter)("matRowDefWhen", ctx.isGroupFooter);
    } }, directives: function () { return [ɵngcc5.NgIf, ɵngcc9.MatTable, ɵngcc10.MatSort, ɵngcc5.NgClass, ɵngcc5.NgForOf, ɵngcc9.MatColumnDef, ɵngcc9.MatCellDef, ɵngcc9.MatRowDef, InputHelisaComponent, ɵngcc9.MatFooterCellDef, ɵngcc9.MatHeaderCellDef, ɵngcc9.MatHeaderCell, HelTooltipDirective, ɵngcc10.MatSortHeader, ɵngcc9.MatCell, ɵngcc8.MatButton, ExternalLinkDirective, ɵngcc9.MatFooterCell, ɵngcc11.MatTooltip, ɵngcc9.MatFooterRowDef, ɵngcc9.MatFooterRow, ɵngcc9.MatHeaderRowDef, ɵngcc9.MatHeaderRow, ɵngcc9.MatRow]; }, pipes: function () { return [ExternalLinkPipe]; }, styles: ["table[_ngcontent-%COMP%]{table-layout:fixed}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:26px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:auto;line-height:inherit}tfoot[_ngcontent-%COMP%]{display:none}tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{box-shadow:inset 0 1px 0 0 #b7b7b7}  hel-table{position:relative}  hel-table>button{align-items:flex-start;background:transparent;border:none;color:transparent;cursor:pointer;display:flex;height:26px;justify-content:center;opacity:.5;overflow:hidden;position:absolute;right:0;top:0;width:20px;z-index:101}  hel-table>button:focus{outline:none}  hel-table>button:hover{opacity:1}  hel-table>button:before{align-items:center;color:#fff;content:\"+\";display:flex;font-size:20px;height:26px;justify-content:center;position:absolute;width:20px}  hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}  hel-table .buttons-container{order:2}  hel-table .buttons-container.hasSubtitle,   hel-table .buttons-container.hasTitle{padding-top:26px}  hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}  hel-table .buttons-container>div{height:26px}  hel-table .buttons-container>div button{align-items:center;display:flex;height:26px;justify-content:center}  hel-table .buttons-container>div button>*{display:flex;height:100%}  hel-table .div-table-helisa{height:100%}  hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}  hel-table .div-table-helisa .container-table .table-helisa{width:100%}  hel-table .div-table-helisa .container-table .table-helisa   table{table-layout:fixed}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr,   hel-table .div-table-helisa .container-table .table-helisa   tfoot tr,   hel-table .div-table-helisa .container-table .table-helisa   thead tr{height:26px}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr td,   hel-table .div-table-helisa .container-table .table-helisa   tbody tr th,   hel-table .div-table-helisa .container-table .table-helisa   tfoot tr td,   hel-table .div-table-helisa .container-table .table-helisa   tfoot tr th,   hel-table .div-table-helisa .container-table .table-helisa   thead tr td,   hel-table .div-table-helisa .container-table .table-helisa   thead tr th{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}  hel-table .div-table-helisa .container-table .table-helisa   thead tr th{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr td{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr td button{height:auto;line-height:inherit}  hel-table .div-table-helisa .container-table .table-helisa   tfoot{display:none}  hel-table .div-table-helisa .container-table .table-helisa   tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}  hel-table .div-table-helisa .container-table .table-helisa .selected-row{background:silver;font-weight:700}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableHelisaComponent, [{
        type: i0.Component,
        args: [{
                selector: 'hel-table',
                template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\n<div class=\"div-table-helisa\">\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\n\n    <table [ngClass]=\"getClassToColumn()\" mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\n          <ng-container *ngIf=\"column.title != undefined\">\n            <div *ngIf=\"!column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\n                {{column.title}} </th>\n            </div>\n            <div *ngIf=\"column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\n            </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton'\"> \n                  <th mat-header-cell *matHeaderCellDef ></th>\n                  <td mat-cell *matCellDef=\"let element;\" (click)=\"selectedCell(element, column)\">\n                    <button mat-icon-button *ngIf=\"element.data === selectedObject\">\n                      <i class=\"material-icons-outlined\">description</i>\n                    </button>\n                  </td>\n          </ng-container>\n\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{ getValue(element.data, column) }}</a>\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\n        </ng-container>\n\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\n            {{column.subtitle}}</th>\n        </ng-container>\n      </ng-container>\n \n      <ng-container matColumnDef=\"groupHeader\">\n        <td mat-cell *matCellDef=\"let group\">\n          <strong>{{ getGroupDescription(group.data) }}</strong>\n        </td>\n      </ng-container>\n\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\n      </ng-container>\n\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\n          [ngClass]=\"getClassToRow(row.data)\" [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"!isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\n        </tr>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\n    </table>\n  </div>\n</div>\n",
                styles: ["table{table-layout:fixed}tbody tr,tfoot tr,thead tr{height:26px}tbody tr td,tbody tr th,tfoot tr td,tfoot tr th,thead tr td,thead tr th{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}thead tr th{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody tr td{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}tbody tr td button{height:auto;line-height:inherit}tfoot{display:none}tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}::ng-deep hel-table{position:relative}::ng-deep hel-table>button{align-items:flex-start;background:transparent;border:none;color:transparent;cursor:pointer;display:flex;height:26px;justify-content:center;opacity:.5;overflow:hidden;position:absolute;right:0;top:0;width:20px;z-index:101}::ng-deep hel-table>button:focus{outline:none}::ng-deep hel-table>button:hover{opacity:1}::ng-deep hel-table>button:before{align-items:center;color:#fff;content:\"+\";display:flex;font-size:20px;height:26px;justify-content:center;position:absolute;width:20px}::ng-deep hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}::ng-deep hel-table .buttons-container{order:2}::ng-deep hel-table .buttons-container.hasSubtitle,::ng-deep hel-table .buttons-container.hasTitle{padding-top:26px}::ng-deep hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}::ng-deep hel-table .buttons-container>div{height:26px}::ng-deep hel-table .buttons-container>div button{align-items:center;display:flex;height:26px;justify-content:center}::ng-deep hel-table .buttons-container>div button>*{display:flex;height:100%}::ng-deep hel-table .div-table-helisa{height:100%}::ng-deep hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}::ng-deep hel-table .div-table-helisa .container-table .table-helisa{width:100%}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep table{table-layout:fixed}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr{height:26px}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr th,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr th,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr th{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr th{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td button{height:auto;line-height:inherit}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot{display:none}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}::ng-deep hel-table .div-table-helisa .container-table .table-helisa .selected-row{background:silver;font-weight:700}"]
            }]
    }], function () { return [{ type: TableHelisaService }]; }, { sort: [{
            type: i0.Output
        }], total: [{
            type: i0.Output
        }], search: [{
            type: i0.Output
        }], select: [{
            type: i0.Output
        }], selectCell: [{
            type: i0.Output
        }], selectObject: [{
            type: i0.Output
        }], nextPage: [{
            type: i0.Output
        }], showTitle: [{
            type: i0.Input
        }], isCellSelection: [{
            type: i0.Input
        }], drop: [{
            type: i0.Output
        }], isDragged: [{
            type: i0.Input
        }], addRowButton: [{
            type: i0.Input
        }], addRow: [{
            type: i0.Output
        }], bookClicked: [{
            type: i0.Output
        }], addBookButton: [{
            type: i0.Input
        }], showToolTip: [{
            type: i0.Input
        }], hideDelay: [{
            type: i0.Input
        }], showDelay: [{
            type: i0.Input
        }], isRemote: [{
            type: i0.Input
        }], columnConfiguration: [{
            type: i0.Input
        }], dataSource: [{
            type: i0.Input
        }], selectedIndexRow: [{
            type: i0.Input
        }], selectedCells: [{
            type: i0.Input
        }], matSort: [{
            type: i0.ViewChild,
            args: [sort.MatSort, { static: true }]
        }], matTable: [{
            type: i0.ViewChild,
            args: [table.MatTable, { static: true }]
        }], matTableElement: [{
            type: i0.ViewChild,
            args: [table.MatTable, { read: i0.ElementRef, static: true }]
        }], containerTable: [{
            type: i0.ViewChild,
            args: ['containerTable', { static: true }]
        }], count: [{
            type: i0.Input
        }], configCellStyles: [{
            type: i0.Input
        }], configRowStylesFromColumn: [{
            type: i0.Input
        }], configColumnClass: [{
            type: i0.Input
        }] }); })();
        return TableHelisaComponent;
    }());
    TableHelisaComponent.ctorParameters = function () { return [
        { type: TableHelisaService }
    ]; };
    TableHelisaComponent.propDecorators = {
        matSort: [{ type: i0.ViewChild, args: [sort.MatSort, { static: true },] }],
        matTable: [{ type: i0.ViewChild, args: [table.MatTable, { static: true },] }],
        matTableElement: [{ type: i0.ViewChild, args: [table.MatTable, { read: i0.ElementRef, static: true },] }],
        containerTable: [{ type: i0.ViewChild, args: ['containerTable', { static: true },] }],
        sort: [{ type: i0.Output }],
        total: [{ type: i0.Output }],
        search: [{ type: i0.Output }],
        select: [{ type: i0.Output }],
        selectCell: [{ type: i0.Output }],
        selectObject: [{ type: i0.Output }],
        nextPage: [{ type: i0.Output }],
        showTitle: [{ type: i0.Input }],
        isCellSelection: [{ type: i0.Input }],
        count: [{ type: i0.Input }],
        configCellStyles: [{ type: i0.Input }],
        configRowStylesFromColumn: [{ type: i0.Input }],
        configColumnClass: [{ type: i0.Input }],
        selectedCells: [{ type: i0.Input }],
        drop: [{ type: i0.Output }],
        isDragged: [{ type: i0.Input }],
        addRowButton: [{ type: i0.Input }],
        addRow: [{ type: i0.Output }],
        bookClicked: [{ type: i0.Output }],
        addBookButton: [{ type: i0.Input }],
        showToolTip: [{ type: i0.Input }],
        hideDelay: [{ type: i0.Input }],
        showDelay: [{ type: i0.Input }],
        isRemote: [{ type: i0.Input }],
        columnConfiguration: [{ type: i0.Input }],
        dataSource: [{ type: i0.Input }],
        selectedIndexRow: [{ type: i0.Input }]
    };

    var moment = moment___namespace;
    (function (TypeCalendarEnum) {
        TypeCalendarEnum["NORMAL"] = "norma";
        TypeCalendarEnum["MONTH_YEAR"] = "mounth-year";
        TypeCalendarEnum["STRICT"] = "strict";
    })(exports.TypeCalendarEnum || (exports.TypeCalendarEnum = {}));
    var DateHelisaComponent = /** @class */ (function () {
        function DateHelisaComponent() {
            this.floatLabel = 'never';
            this.dateFormControl = new forms.FormControl('');
            this.date = new Date();
            /**
             * Formato de fecha.
             * Los formatos validos son aquellos que maneja la libreria momentjs y este: 'DD [de] MMMM [de] YYYY'
             * https://momentjs.com/docs/#/parsing/string-format/
             */
            this.dateFormat = 'DD/MM/YYYY';
            this.locale = 'es';
            this.errorMessage = 'La fecha no concuerda con el formato ';
            this.placeholder = this.dateFormat;
            this.showDatePicker = false;
            this.change = new i0.EventEmitter();
            this.isClosed = false;
            this.isDisabled = false;
            /**
             * Si este valor es diferente a TypeCalendarEnum.NORMAL no
             * será tomado en cuenta
             */
            this.typeCalendar = exports.TypeCalendarEnum.NORMAL;
            /**
             * Para evitar nuevos eventos miestras se realiza el parseo
             */
            this.isFromInputEvent = false;
            /**
             * Verificar si el formato es valido
             */
            this.invalidFormat = false;
            this.inputFormReal = new forms.FormControl('');
        }
        /*
        * TypeCalendarEnum.MONTH_YEAR = 'MM/YYYY'
        * TypeCalendarEnum.STRICT = 'DD [de] MMMM [de] YYYY'
        * */
        DateHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            moment.locale(this.locale);
            this.dateToVisualize = new forms.FormControl('', this.dateFormControl.validator);
            this.formHandler();
            this.inputFormReal = this.dateFormControl;
            this.inputFormReal.registerOnDisabledChange(function (isDisabled) {
                if (isDisabled) {
                    _this.isDisabled = true;
                    _this.dateToVisualize.disable();
                }
                else {
                    _this.isDisabled = false;
                    _this.dateToVisualize.enable();
                }
            });
            /**
             * establecer valor por defecto de la fecha
             */
            if (this.dateFormControl.value !== '' && this.dateFormControl.value !== null) {
                var incomingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
                if (incomingDate !== 'Invalid date') {
                    this.dateToVisualize.setValue(incomingDate);
                    this.dateFormControl.setValue(this.dateFormControl.value);
                }
            }
        };
        Object.defineProperty(DateHelisaComponent.prototype, "typeCalendarEnum", {
            get: function () {
                return exports.TypeCalendarEnum;
            },
            enumerable: false,
            configurable: true
        });
        DateHelisaComponent.prototype.openDatePicker = function () {
            var _this = this;
            if (this.showDatePicker && !this.isClosed) {
                this.isClosed = true;
                this.timeout = setTimeout(function () {
                    _this.datePickerShow.open();
                }, 2000);
            }
        };
        DateHelisaComponent.prototype.onKey = function (event) {
            if (event.key === ' ' && this.showDatePicker) {
                this.onBlur();
                this.isClosed = true;
                this.datePickerShow.open();
            }
        };
        DateHelisaComponent.prototype.onBlur = function () {
            clearTimeout(this.timeout);
            this.isClosed = false;
        };
        /**
         * Determina como se debe inicializar la visualizacion del calendar
         */
        DateHelisaComponent.prototype.getStartView = function () {
            // multi-year
            if (this.typeCalendar === this.typeCalendarEnum.MONTH_YEAR) {
                return 'multi-year';
            }
            else if (this.typeCalendar === this.typeCalendarEnum.STRICT) {
                return 'month';
            }
            else {
                return 'month';
            }
        };
        DateHelisaComponent.prototype.formHandler = function () {
            var _this = this;
            if (this.typeCalendar === this.typeCalendarEnum.STRICT) {
                this.dateToVisualize.valueChanges.subscribe(function (date) {
                    _this.invalidFormat = false;
                    var isValid = moment(date, _this.dateFormat, true).isValid();
                    var result = moment(date, _this.dateFormat).format(_this.dateFormat);
                    if (!!result && (result === 'Invalid date' || !isValid)) {
                        _this.invalidFormat = true;
                        return;
                    }
                    if (!!result) {
                        if (!_this.isFromInputEvent) {
                            _this.isFromInputEvent = true;
                            _this.dateToVisualize.setValue(moment(result, _this.dateFormat).format(_this.dateFormat));
                            _this.dateFormControl.setValue(moment(result, _this.dateFormat).toDate());
                            _this.isFromInputEvent = false;
                        }
                        else {
                            setTimeout(function () {
                                _this.isFromInputEvent = false;
                            }, 1500);
                        }
                    }
                });
            }
            else {
                this.dateToVisualize.valueChanges
                    .pipe(operators.tap(function (date) {
                    if (date.length > _this.dateFormat.length) {
                        _this.invalidFormat = true;
                    }
                    else {
                        _this.invalidFormat = false;
                    }
                }), operators.filter(function (date) { return date.length === _this.dateFormat.length; }))
                    .subscribe(function (date) {
                    _this.invalidFormat = false;
                    var isValid = moment(date, _this.dateFormat, true).isValid();
                    var result = moment(date, _this.dateFormat).format('YYYY-MM-DD');
                    if (!!result && (result === 'Invalid date' || !isValid)) {
                        _this.invalidFormat = true;
                        return;
                    }
                    if (!!result) {
                        if (!_this.isFromInputEvent) {
                            _this.isFromInputEvent = true;
                            var subString = result.split('-');
                            var year = parseFloat(subString[0]);
                            var month = parseFloat(subString[1]);
                            var day = parseFloat(subString[2]);
                            _this.date.setFullYear(year);
                            _this.date.setDate(day);
                            _this.date.setMonth(month - 1); // -1 por que los meses se toman como los indices en un array
                            /** cuando es de tipo MOUNTH_YEAR retorna el ultimo dia del mes seleccionado */
                            if (_this.typeCalendar === exports.TypeCalendarEnum.MONTH_YEAR) {
                                _this.date = moment(_this.date).endOf('month').toDate();
                            }
                            _this.dateToVisualize.setValue(moment(_this.date, 'YYYY-MM-DD').format(_this.dateFormat));
                            _this.dateFormControl.setValue(_this.date);
                            _this.isFromInputEvent = false;
                        }
                        else {
                            setTimeout(function () {
                                _this.isFromInputEvent = false;
                            }, 1500);
                        }
                    }
                });
            }
            this.dateFormControl.valueChanges
                .subscribe(function (date) {
                var incommingDate = moment(date, _this.dateFormat).format(_this.dateFormat);
                if (_this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
                    _this.dateToVisualize.setValue(incommingDate);
                }
            });
        };
        /**
         * Evento que se dispara luego seleccionar un mes
         */
        DateHelisaComponent.prototype.monthSelectedHandler = function (chosenMonthDate, datepicker) {
            if (this.typeCalendar === exports.TypeCalendarEnum.MONTH_YEAR) {
                datepicker.close();
                var date = moment(chosenMonthDate).endOf('month').toDate();
                this.dateToVisualize.setValue(moment(date, 'YYYY-MM-DD').format(this.dateFormat));
                this.dateFormControl.setValue(date);
            }
        };
        /**
         * Evento desde el control touch del calendar
         */
        DateHelisaComponent.prototype.dateChange = function (type, event) {
            this.dateToVisualize.setValue(moment(event.value, 'YYYY-MM-DD').format(this.dateFormat));
            this.dateFormControl.setValue(event.value);
            this.change.emit(event.value);
            this.isClosed = true;
        };
        DateHelisaComponent.prototype.getErrorMessage = function () {
            return this.errorMessage + this.dateFormat;
        };
DateHelisaComponent.ɵfac = function DateHelisaComponent_Factory(t) { return new (t || DateHelisaComponent)(); };
DateHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DateHelisaComponent, selectors: [["hel-date-helisa"]], viewQuery: function DateHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c4, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.datePickerShow = _t.first);
    } }, inputs: { floatLabel: "floatLabel", dateFormControl: "dateFormControl", dateFormat: "dateFormat", locale: "locale", errorMessage: "errorMessage", placeholder: "placeholder", showDatePicker: "showDatePicker", typeCalendar: "typeCalendar", minDate: "minDate", maxDate: "maxDate" }, outputs: { change: "change" }, decls: 8, vars: 11, consts: [[1, "example-full-width", 3, "floatLabel"], ["matInput", "", 3, "formControl", "placeholder", "keydown", "focus", "blur"], ["matInput", "", "hidden", "hide", 3, "matDatepicker", "value", "min", "max", "dateChange"], ["matSuffix", "", 3, "for", "disabled"], ["touchUi", "", 3, "startView", "monthSelected"], ["picker", ""], [4, "ngIf"]], template: function DateHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        var _r2 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "mat-form-field", 0);
        ɵngcc0.ɵɵelementStart(2, "input", 1);
        ɵngcc0.ɵɵlistener("keydown", function DateHelisaComponent_Template_input_keydown_2_listener($event) { return ctx.onKey($event); })("focus", function DateHelisaComponent_Template_input_focus_2_listener() { return ctx.openDatePicker(); })("blur", function DateHelisaComponent_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "input", 2);
        ɵngcc0.ɵɵlistener("dateChange", function DateHelisaComponent_Template_input_dateChange_3_listener($event) { return ctx.dateChange("change", $event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "mat-datepicker-toggle", 3);
        ɵngcc0.ɵɵelementStart(5, "mat-datepicker", 4, 5);
        ɵngcc0.ɵɵlistener("monthSelected", function DateHelisaComponent_Template_mat_datepicker_monthSelected_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var _r0 = ɵngcc0.ɵɵreference(6); return ctx.monthSelectedHandler($event, _r0); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, DateHelisaComponent_mat_error_7_Template, 2, 1, "mat-error", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(6);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("floatLabel", ctx.floatLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("formControl", ctx.dateToVisualize)("placeholder", ctx.placeholder);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("matDatepicker", _r0)("value", ctx.dateToVisualize.value)("min", ctx.minDate)("max", ctx.maxDate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("for", _r0)("disabled", ctx.isDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("startView", ctx.getStartView());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.invalidFormat);
    } }, directives: [ɵngcc1.MatFormField, ɵngcc2.MatInput, ɵngcc3.DefaultValueAccessor, ɵngcc3.NgControlStatus, ɵngcc3.FormControlDirective, ɵngcc12.MatDatepickerInput, ɵngcc12.MatDatepickerToggle, ɵngcc1.MatSuffix, ɵngcc12.MatDatepicker, ɵngcc5.NgIf, ɵngcc1.MatError], styles: [""] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateHelisaComponent, [{
        type: i0.Component,
        args: [{
                selector: 'hel-date-helisa',
                template: "<div>\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\n    <input matInput\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\" (keydown)=\"onKey($event)\" (focus)=\"openDatePicker()\" (blur)=\"onBlur()\">\n\n\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\n      ya que el valor es diferente cuando se escribe directamente en este\n    -->\n    <input matInput\n    [matDatepicker]=\"picker\"\n    hidden=\"hide\"\n    [value]=\"dateToVisualize.value\"\n    (dateChange)=\"dateChange('change', $event)\" [min]=\"minDate\" [max]=\"maxDate\">\n    <!--  -->\n\n    <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"isDisabled\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\n\n  </mat-form-field>\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\n  </div>\n",
                styles: [""]
            }]
    }], function () { return []; }, { floatLabel: [{
            type: i0.Input
        }], dateFormControl: [{
            type: i0.Input
        }], dateFormat: [{
            type: i0.Input
        }], locale: [{
            type: i0.Input
        }], errorMessage: [{
            type: i0.Input
        }], placeholder: [{
            type: i0.Input
        }], showDatePicker: [{
            type: i0.Input
        }], change: [{
            type: i0.Output
        }], typeCalendar: [{
            type: i0.Input
        }], datePickerShow: [{
            type: i0.ViewChild,
            args: ['picker', { static: true }]
        }], minDate: [{
            type: i0.Input
        }], maxDate: [{
            type: i0.Input
        }] }); })();
        return DateHelisaComponent;
    }());
    DateHelisaComponent.ctorParameters = function () { return []; };
    DateHelisaComponent.propDecorators = {
        datePickerShow: [{ type: i0.ViewChild, args: ['picker', { static: true },] }],
        floatLabel: [{ type: i0.Input }],
        dateFormControl: [{ type: i0.Input }],
        dateFormat: [{ type: i0.Input }],
        locale: [{ type: i0.Input }],
        errorMessage: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        showDatePicker: [{ type: i0.Input }],
        minDate: [{ type: i0.Input }],
        maxDate: [{ type: i0.Input }],
        change: [{ type: i0.Output }],
        typeCalendar: [{ type: i0.Input }]
    };

    var TreeHelisaService = /** @class */ (function () {
        function TreeHelisaService() {
            // Observable string sources
            this.emitNodeSelected = new rxjs.BehaviorSubject(1);
            // Observable string streams
            this.nodeSelected = this.emitNodeSelected.asObservable();
            // Observable string sources
            this.emitDataSource = new rxjs.BehaviorSubject(undefined);
            // Observable string streams
            this.dataSourceObservable = this.emitDataSource.asObservable();
            // Expand node observable
            this.emitExpandAllNodes = new rxjs.BehaviorSubject(null);
            this.nodeExpand = this.emitExpandAllNodes.asObservable();
            // Collapse node observable
            this.emitCollapseAllNodes = new rxjs.BehaviorSubject(null);
            this.nodeCollapse = this.emitCollapseAllNodes.asObservable();
            this.emitRefreshTree = new rxjs.Subject();
            this.refreshTreeObservable = this.emitRefreshTree.asObservable();
            this.emitRefreshTreeWithPagination = new rxjs.Subject();
            this.refreshTreeWithPaginationObservable = this.emitRefreshTreeWithPagination.asObservable();
            this.emitExpandOneNode = new rxjs.Subject();
            this.expandOneNodeObservable = this.emitExpandOneNode.asObservable();
            this.emitCollapseOneNode = new rxjs.Subject();
            this.collapseOneNodeObservable = this.emitCollapseOneNode.asObservable();
        }
        // Service message commands
        TreeHelisaService.prototype.changeNodeSelected = function (idResidentialArea) {
            this.emitNodeSelected.next(idResidentialArea);
        };
        // Service message commands
        TreeHelisaService.prototype.changeDataSource = function (data) {
            this.emitDataSource.next(data);
        };
        TreeHelisaService.prototype.expandAllNodes = function (expand) {
            this.emitExpandAllNodes.next(expand);
        };
        TreeHelisaService.prototype.collapseAllNodes = function (collapse) {
            this.emitCollapseAllNodes.next(collapse);
        };
        TreeHelisaService.prototype.refreshTree = function () {
            this.emitRefreshTree.next();
        };
        TreeHelisaService.prototype.refreshTreeWithPagination = function () {
            this.emitRefreshTreeWithPagination.next();
        };
        TreeHelisaService.prototype.expandOneNode = function (node) {
            this.emitExpandOneNode.next(node);
        };
        TreeHelisaService.prototype.collapseOneNode = function (node) {
            this.emitCollapseOneNode.next(node);
        };
TreeHelisaService.ɵfac = function TreeHelisaService_Factory(t) { return new (t || TreeHelisaService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeHelisaService, [{
        type: i0.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
        return TreeHelisaService;
    }());
    TreeHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TreeHelisaService_Factory() { return new TreeHelisaService(); }, token: TreeHelisaService, providedIn: "root" });
    TreeHelisaService.ctorParameters = function () { return []; };

    var TreeHelisaConnect = /** @class */ (function () {
        function TreeHelisaConnect() {
            this.page = 0;
            this.isLastPage = false;
            this.isUsed = false;
        }
        TreeHelisaConnect.prototype.nextPage = function () {
            return this.page = this.page + 1;
        };
        return TreeHelisaConnect;
    }());

    var TreeHelisaComponent = /** @class */ (function () {
        //#endregion ====== Variables ========
        function TreeHelisaComponent(treeHelisaService, router, elementRef) {
            this.treeHelisaService = treeHelisaService;
            this.router = router;
            this.elementRef = elementRef;
            this.selectedOptions = new Map();
            /**
             * Retorna el id del nodo removido
             */
            this.removed = new i0.EventEmitter();
            /**
             * Retorna un nodo editado
             */
            this.edited = new i0.EventEmitter();
            /**
             * Retorna un nodo sin id del nodo , pero si con el parent
             * para conocer a cual fue añadido
             */
            this.added = new i0.EventEmitter();
            this.collapseParent = new i0.EventEmitter();
            this.rangeScrolled = new i0.EventEmitter();
            this.nodeSelected = new i0.EventEmitter();
            this.dobleClick = new i0.EventEmitter();
            this.keypressDelete = new i0.EventEmitter();
            this.keypressInsert = new i0.EventEmitter();
            this.checkedOptionNode = new i0.EventEmitter();
            this.uncheckedOptionNode = new i0.EventEmitter();
            this.clickAddNode = new i0.EventEmitter();
            this.clickEditNode = new i0.EventEmitter();
            this.clickDeleteNode = new i0.EventEmitter();
            this.treeControl = new tree.NestedTreeControl(function (node) { return node.children; });
            this.dataSource = new tree$1.MatTreeNestedDataSource();
            this.isSingleClick = true;
            this.currentNode = null;
            // cargar datos pasados por el @Input
            if (!!this.data) {
                var data = this.data;
                this.data = null;
                this.receivePage(data.children);
            }
            else {
                this.dataSource.data = [];
                this.treeControl.dataNodes = [];
            }
        }
        /**
         * Obtiene la descripcion completa del nodo
         * @example Nodo padre,nodo hijo,nodo nieto
         * @param node Debe tener todos los parent llenos hacia arriba
         */
        TreeHelisaComponent.getDescription = function (node) {
            var result = [node.name];
            var concat = '';
            if (node.parent) {
                result.push(this.getDescription(node.parent));
            }
            if (result.length === 1) {
                return node.name;
            }
            result = result.reverse();
            for (var i = 0; i < result.length; i++) {
                var element = result[i];
                concat = concat + element + (i === result.length - 1 ? '' : ',');
            }
            return concat;
        };
        TreeHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            // si se cargan datos por medio del servicio
            this.treeHelisaService.dataSourceObservable.subscribe(function (res) {
                if (!!res && !!res.children) {
                    _this.selectedNode = res.id;
                    _this.receivePage(res.children);
                }
                else {
                    _this.dataSource.data = [];
                    _this.treeControl.dataNodes = [];
                }
            });
            // Observable, si cambia el nodo seleccionado por medio del servicio
            this.treeHelisaService.nodeSelected.subscribe(function (res) {
                if (!!_this.data && !!_this.data.children) {
                    _this.selectNode(_this.data, res);
                }
            });
            this.treeHelisaService.refreshTreeObservable.subscribe(function (res) {
                _this.refreshTree();
            });
            this.treeHelisaService.refreshTreeWithPaginationObservable.subscribe(function (res) {
                _this.refreshTreeWithPagination();
            });
        };
        TreeHelisaComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.treeHelisaService.nodeExpand.subscribe(function (res) {
                if (res != null) {
                    if (res) {
                        _this.tree.treeControl.expandAll();
                    }
                }
            });
            this.treeHelisaService.nodeCollapse.subscribe(function (res) {
                if (res !== null) {
                    if (res) {
                        _this.tree.treeControl.collapseAll();
                    }
                }
            });
            this.treeHelisaService.expandOneNodeObservable.subscribe(function (res) {
                if (res !== undefined) {
                    _this.treeControl.expand(res);
                }
            });
            this.treeHelisaService.collapseOneNodeObservable.subscribe(function (res) {
                if (res !== undefined) {
                    _this.treeControl.collapse(res);
                }
            });
        };
        //#region  ====== Events ===========
        TreeHelisaComponent.prototype.onRedirect = function (node) {
            var _this = this;
            this.isSingleClick = true;
            setTimeout(function () {
                if (_this.isSingleClick) {
                    _this.selectNode(node, node.id);
                    // if(!!node && !node.children){
                    if (!!node) {
                        _this.nodeSelected.emit(node.id);
                        _this.currentNode = node;
                    }
                }
            }, 350);
        };
        TreeHelisaComponent.prototype.onScroll = function (event) {
            var element = event.target;
            if (element.offsetHeight + element.scrollTop >= element.scrollHeight) {
                this.goNextPage();
            }
        };
        TreeHelisaComponent.prototype.onEdit = function (node) {
            this.clickEditNode.emit(node);
            /** @Deprecated
             *  Ya no se edita el nodo ahora solo se emite el evento 'clickEditNode'
             * retornando el nodo al cual le hicieron click en la opción delete
             */
            // node.isEditable = true;
            // this.isDisabled = true;
        };
        TreeHelisaComponent.prototype.onAdd = function (node) {
            this.clickAddNode.emit(node);
            /** @Deprecated
             *  Ya no se crea y se agrega el nodo ahora solo se emite el evento 'clickAddNode'
             * retornando el nodo al cual le hicieron click en la opción add
             */
            //   // si no tiene hijos instanciar el array
            //   if (!node.children) {
            //     node.children = [];
            //   }
            //   node.children.push({
            //     id: Math.random(),
            //     name: '',
            //     isSelected: false,
            //     parent: node,
            //     isEditable: true
            //   });
            //   if (node.children) {
            //     this.isDisabled = true;
            //     this.treeHelisaService.expandOneNode(node);
            //   }
            //   this.refreshTree();
        };
        TreeHelisaComponent.prototype.onDelete = function (node) {
            this.clickDeleteNode.emit(node);
            /** @Deprecated
             *  Ya no se elimina el nodo ahora solo se emite el evento 'clickDeleteNode'
             * retornando el nodo al cual le hicieron click en la opción delete
             */
            // // Remueve el nodo utilizando la libreria de lodash
            // _.remove(node.parent.children, node);
            // this.refreshTree();
            // this.removed.emit(node.id);
        };
        TreeHelisaComponent.prototype.onEdited = function (node, value) {
            node.name = value;
            if (node.id == null && node.name === '') {
                _.remove(node.parent.children, node);
                this.refreshTree();
            }
            else if (node.id && node.id != null && node.name.trim() !== '') {
                this.edited.emit(node);
                node.isEditable = false;
                this.selectNode(node, node.id);
            }
            else if (node.id == null && node.name.trim() !== '') {
                this.added.emit(node);
                node.isEditable = false;
            }
            this.isDisabled = false;
            this.refreshTree();
        };
        TreeHelisaComponent.prototype.onCancel = function (node, value) {
            this.isDisabled = false;
            // Si no tiene id por ser un nuevo item, lo elimina
            if (node.id == null) {
                _.remove(node.parent.children, node);
                this.refreshTree();
            }
            node.isEditable = false;
        };
        TreeHelisaComponent.prototype.onDblClick = function (node) {
            this.isSingleClick = false;
            this.dobleClick.emit(node.id);
        };
        TreeHelisaComponent.prototype.onKeyDown = function (event) {
            switch (event.key) {
                case 'Delete':
                    this.keypressDelete.emit(!!this.currentNode && this.currentNode.id ? this.currentNode.id : null);
                    break;
                case 'Insert':
                    this.keypressInsert.emit(!!this.currentNode && this.currentNode.id ? this.currentNode.id : null);
                    break;
                case 'ArrowDown':
                    this.moveDownIntoTree();
                    break;
                case 'ArrowUp':
                    this.moveUpIntoTree();
                    break;
            }
        };
        //#endregion ======= Events ========
        //#region  ======== Metodos =============
        TreeHelisaComponent.prototype.moveUpIntoTree = function () {
            if (!!this.data) {
                // si aun no hay ningun node seleccionado selecciona el primero
                if (this.currentNode == null) {
                    this.selectNode(this.data, this.data.children[0].id);
                    this.currentNode = this.data.children[0];
                    if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                        this.treeHelisaService.expandOneNode(this.currentNode);
                    }
                }
                else {
                    if (!!this.currentNode.parent && this.currentNode.id != null) {
                        // obtiene el indice del nodo seleccionado actualmente
                        var index = this.currentNode.parent.children.indexOf(this.currentNode);
                        if (this.currentNode.parent.id == null && index === 0) {
                            return 0;
                        }
                        else {
                            // si tiene nodos al mismo nivel salta al nodo anterior
                            if (index !== undefined && index === 0) {
                                this.currentNode = this.currentNode.parent;
                                this.selectNode(this.data, this.currentNode.id);
                                if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                    this.treeHelisaService.expandOneNode(this.currentNode);
                                }
                            }
                            else {
                                // si no tiene nodos al mismo nivel salta al nodo padre
                                this.currentNode = this.currentNode.parent.children[index - 1];
                                this.selectNode(this.data, this.currentNode.id);
                                if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                    this.treeHelisaService.expandOneNode(this.currentNode);
                                }
                            }
                        }
                    }
                }
            }
        };
        TreeHelisaComponent.prototype.moveDownIntoTree = function () {
            if (!!this.data) {
                if (this.currentNode == null) {
                    this.selectNode(this.data, this.data.children[0].id);
                    this.currentNode = this.data.children[0];
                    if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                        this.treeHelisaService.expandOneNode(this.currentNode);
                    }
                }
                else {
                    if (!!this.currentNode) {
                        // obtiene el indice del nodo seleccionado actualmente
                        var index = !!this.currentNode && !!this.currentNode.parent ? this.currentNode.parent.children.indexOf(this.currentNode) : null;
                        // si tiene childrens pasa al primer children
                        if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                            this.currentNode = this.currentNode.children[0];
                            this.selectNode(this.data, this.currentNode.id);
                            if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                this.treeHelisaService.expandOneNode(this.currentNode);
                            }
                        }
                        else if (index !== undefined &&
                            index === this.currentNode.parent.children.length - 1 &&
                            this.currentNode.parent.parent != null &&
                            this.currentNode.parent.parent.children != null &&
                            this.currentNode.parent.parent.children.length > 0) {
                            var indexOfParent = this.currentNode.parent.parent.children.indexOf(this.currentNode.parent);
                            this.currentNode =
                                this.currentNode.parent.parent.children[indexOfParent + 1] === undefined
                                    ? this.currentNode
                                    : this.currentNode.parent.parent.children[indexOfParent + 1];
                            this.selectNode(this.data, this.currentNode.id);
                            if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                this.treeHelisaService.expandOneNode(this.currentNode);
                            }
                        }
                        else {
                            // si no tiene nodos al mismo nivel salta al siguiente hacia abajo
                            this.currentNode = this.currentNode.parent.children[index + 1];
                            this.selectNode(this.data, this.currentNode.id);
                            if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                this.treeHelisaService.expandOneNode(this.currentNode);
                            }
                        }
                    }
                }
            }
        };
        /**
         * Verifica si el nodo tiene hijos
         */
        TreeHelisaComponent.prototype.hasChild = function (t, node) {
            return !!node.children && node.children.length > 0;
        };
        /**
         * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
         */
        TreeHelisaComponent.prototype.refreshTree = function () {
            this.data = null;
            var datasourceData = this.dataSource.data;
            this.dataSource.data = null;
            this.dataSource.data = datasourceData;
            this.treeControl.dataNodes = datasourceData;
        };
        /**
         * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
         */
        TreeHelisaComponent.prototype.refreshTreeWithPagination = function () {
            var datasourceData = this.dataSource.data;
            this.dataSource.data = null;
            this.dataSource.data = datasourceData;
            this.treeControl.dataNodes = datasourceData;
        };
        TreeHelisaComponent.prototype.goNextPage = function () {
            if (!this.treeHelisaConnect.isLastPage && !this.treeHelisaConnect.isUsed) {
                this.treeHelisaConnect.isUsed = true;
                this.rangeScrolled.emit({
                    page: this.treeHelisaConnect.nextPage()
                });
            }
        };
        TreeHelisaComponent.prototype.receivePage = function (data) {
            var _this = this;
            if (!this.data) {
                this.data = { id: null, name: 'root', isSelected: false };
            }
            if (!this.data.children) {
                this.data.children = new Array();
                this.treeHelisaConnect = new TreeHelisaConnect();
            }
            this.data.children = this.data.children.concat(data);
            this.data.children.forEach(function (node) {
                _this.fillParent(node, _this.data);
            });
            this.data.children = this.reorderByOrderIndex(this.data.children);
            this.dataSource.data = this.data.children;
            this.treeControl.dataNodes = this.data.children;
            this.treeHelisaConnect.isLastPage = data.length === 0;
            this.treeHelisaConnect.isUsed = false;
        };
        /**
         * Llenan el campo parent de todos los nodos hijos
         */
        TreeHelisaComponent.prototype.fillParent = function (node, parent) {
            var _this = this;
            node.parent = parent;
            if (node.children && node.children.length > 0) {
                node.children.forEach(function (item) {
                    _this.fillParent(item, node);
                });
            }
        };
        /**
         * coloca como true del isSelected del nodo que concuerde con el id
         */
        TreeHelisaComponent.prototype.selectNode = function (node, id) {
            if (node == null) {
                return null;
            }
            this.upSelectNode(node);
            if (!!this.selectedNode) {
                var nodeSelected = this.getNodeById(this.selectedNode);
                if (nodeSelected != null) {
                    nodeSelected.isSelected = false;
                    this.selectedNode = null;
                }
            }
            if (node.id !== undefined && node.id === id) {
                node.isSelected = true;
                this.expandAllParents(node);
                this.selectedNode = node.id;
                return node;
            }
            else if (node.children != null) {
                var i = void 0;
                var result = null;
                for (i = 0; result == null && i < node.children.length; i++) {
                    result = this.selectNode(node.children[i], id);
                }
                return result;
            }
            return null;
        };
        TreeHelisaComponent.prototype.expandAllParents = function (node) {
            if (!!node && !!node.parent) {
                this.treeHelisaService.expandOneNode(node.parent);
                this.expandAllParents(node.parent);
            }
        };
        /**
         * Elimina el isSelected de todos los nodos
         */
        TreeHelisaComponent.prototype.upSelectNode = function (node) {
            var e_1, _a;
            if (!!node && node.isSelected !== undefined) {
                node.isSelected = false;
                if (!!node.children) {
                    try {
                        for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var childrenNode = _c.value;
                            this.upSelectNode(childrenNode);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
        };
        TreeHelisaComponent.prototype.getClassNode = function (node) {
            var classNode = [];
            if (node.isSelected) {
                classNode.push('isSelected');
            }
            if (node.classNode) {
                classNode.push(node.classNode);
            }
            return classNode;
        };
        TreeHelisaComponent.prototype.onEditMode = function (node, editMode) {
            this.getSelectedOptions(node).editMode = editMode;
        };
        TreeHelisaComponent.prototype.onSelectOption = function (event, node) {
            node.isCheckedOption = event.source.selected;
            if (node.isCheckedOption) {
                this.checkedOptionNode.emit(node.id);
            }
            else {
                this.uncheckedOptionNode.emit(node.id);
            }
        };
        TreeHelisaComponent.prototype.getSelectedOptions = function (node) {
            if (this.selectedOptions.has(node.id)) {
                this.reloadSelectedOptions(node, this.selectedOptions.get(node.id).editMode);
            }
            else {
                this.reloadSelectedOptions(node, false);
            }
            return this.selectedOptions.get(node.id);
        };
        TreeHelisaComponent.prototype.reloadSelectedOptions = function (node, editMode) {
            var array = new Array();
            node.options.forEach(function (option) {
                if (option.isCheckedOption) {
                    array.push(option.id);
                }
            });
            var obj = { formControl: new forms.FormControl(array), editMode: editMode };
            this.selectedOptions.set(node.id, obj);
        };
        /**
         * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
         * @param id  number | string
         * @returns Node o null si no hay un nodo con ese id
         */
        TreeHelisaComponent.prototype.getNodeById = function (id) {
            var queue = __spread(this.dataSource.data);
            while (queue.length > 0) {
                var curr = queue.shift();
                if (curr.id === id) {
                    return curr;
                }
                else {
                    if (!!curr.children) {
                        queue.push.apply(queue, __spread(curr.children));
                    }
                }
            }
            return null;
        };
        TreeHelisaComponent.prototype.reorderByOrderIndex = function (node) {
            var _this = this;
            if (!!node && node.length > 0) {
                try {
                    node = _.orderBy(node, function (x) { return x.orderIndex; }, ['asc']);
                    node.forEach(function (element) {
                        if (!!element.children && element != null) {
                            element.children = _this.reorderByOrderIndex(element.children);
                        }
                    });
                    return node;
                }
                catch (error) {
                    console.log(error);
                }
            }
        };
TreeHelisaComponent.ɵfac = function TreeHelisaComponent_Factory(t) { return new (t || TreeHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(TreeHelisaService), ɵngcc0.ɵɵdirectiveInject(ɵngcc13.Router), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TreeHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeHelisaComponent, selectors: [["hel-tree"]], viewQuery: function TreeHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tree = _t.first);
    } }, hostBindings: function TreeHelisaComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keyup", function TreeHelisaComponent_keyup_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, ɵngcc0.ɵɵresolveDocument);
    } }, inputs: { data: "data" }, outputs: { removed: "removed", edited: "edited", added: "added", collapseParent: "collapseParent", rangeScrolled: "rangeScrolled", nodeSelected: "nodeSelected", dobleClick: "dobleClick", keypressDelete: "keypressDelete", keypressInsert: "keypressInsert", checkedOptionNode: "checkedOptionNode", uncheckedOptionNode: "uncheckedOptionNode", clickAddNode: "clickAddNode", clickEditNode: "clickEditNode", clickDeleteNode: "clickDeleteNode" }, decls: 5, vars: 3, consts: [[1, "container-tree", 3, "scroll"], [1, "example-tree", 3, "dataSource", "treeControl"], ["tree", ""], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], ["id", "nested", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], ["class", "mat-tree-node", "class", "tree-node", 3, "ngClass", "click", "dblclick", 4, "ngIf"], [1, "tree-options"], ["mat-icon-button", "", 3, "disabled", "click", 4, "ngIf"], ["class", "tree-options", 4, "ngIf"], [1, "tree-node", 3, "ngClass", "click", "dblclick"], ["mat-icon-button", "", "disabled", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "disabled", "click"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], ["multiple", "", 3, "formControl"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "value", "onSelectionChange"], [3, "isFocused", "value", "cancel", "done"], ["id", "nested"], ["class", "mat-tree-node tree-options tree-node", 4, "ngIf"], ["matTreeNodeOutlet", ""], [1, "mat-tree-node", "tree-options", "tree-node"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [1, "tree-node-text", 3, "ngClass", "click", "dblclick"]], template: function TreeHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("scroll", function TreeHelisaComponent_Template_div_scroll_0_listener($event) { return ctx.onScroll($event); });
        ɵngcc0.ɵɵelementStart(1, "mat-tree", 1, 2);
        ɵngcc0.ɵɵtemplate(3, TreeHelisaComponent_mat_tree_node_3_Template, 8, 6, "mat-tree-node", 3);
        ɵngcc0.ɵɵtemplate(4, TreeHelisaComponent_mat_nested_tree_node_4_Template, 11, 7, "mat-nested-tree-node", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [ɵngcc14.MatTree, ɵngcc14.MatTreeNodeDef, ɵngcc14.MatTreeNode, ɵngcc14.MatTreeNodeToggle, ɵngcc5.NgIf, ɵngcc5.NgClass, ɵngcc8.MatButton, ɵngcc5.NgForOf, ɵngcc4.MatIcon, ɵngcc1.MatFormField, ɵngcc15.MatSelect, ɵngcc3.NgControlStatus, ɵngcc3.FormControlDirective, ɵngcc16.MatOption, InputWithButtonComponent, ɵngcc14.MatNestedTreeNode, ɵngcc14.MatTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%]{display:none}.example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin-bottom:0;margin-top:0}.isSelected[_ngcontent-%COMP%]{background:red}.tree-options[_ngcontent-%COMP%]{display:inline}.container-tree[_ngcontent-%COMP%]{height:350px;overflow:scroll;width:100%}.tree-node[_ngcontent-%COMP%]{-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none}.tree-node-text[_ngcontent-%COMP%]{display:inline;margin-bottom:0}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeHelisaComponent, [{
        type: i0.Component,
        args: [{
                selector: 'hel-tree',
                template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n    <!-- This is the tree node template for leaf nodes -->\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      <li\n        class=\"mat-tree-node\"\n        [ngClass]=\"getClassNode(node)\"\n        (click)=\"onRedirect(node)\"\n        (dblclick)=\"onDblClick(node)\"\n        *ngIf=\"!node.isEditable\"\n        class=\"tree-node\"\n      >\n        <!-- use a disabled button to provide padding for tree leaf -->\n        <button mat-icon-button disabled></button>\n        <ng-container *ngIf=\"node.data\">\n          <ul>\n            <ng-container *ngFor=\"let col of node.data\">\n              <li *ngIf=\"col.visible\">\n                {{ col.name }}\n              </li>\n            </ng-container>\n          </ul>\n        </ng-container>\n        <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\n      </li>\n      <li class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled || node.disabledEditButton\" (click)=\"onEdit(node)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled || node.disabledAddButton\" (click)=\"onAdd(node)\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled || node.disabledDeleteButton\" (click)=\"onDelete(node)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </li>\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\n              option.name\n            }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n          <mat-icon>done</mat-icon>\n        </button>\n      </div>\n\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\n        <hel-input-with-button [isFocused]=\"true\" [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\n        </hel-input-with-button>\n      </li>\n    </mat-tree-node>\n    <!-- This is the tree node template for expandable nodes -->\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\n      <li>\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\n          <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n              {{ treeControl.isExpanded(node) ? 'remove' : 'add' }}\n            </mat-icon>\n          </button>\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" [ngClass]=\"getClassNode(node)\">\n            <ng-container *ngIf=\"node.data\">\n              <ul>\n                <ng-container *ngFor=\"let col of node.data\">\n                  <li *ngIf=\"col.visible\">\n                    {{ col.name }}\n                  </li>\n                </ng-container>\n              </ul>\n            </ng-container>\n            <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\n          </p>\n        </div>\n        <div class=\"tree-options\">\n          <li class=\"tree-options\">\n            <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled || node.disabledEditButton\" (click)=\"onEdit(node)\">\n              <mat-icon>edit</mat-icon>\n            </button>\n            <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled || node.disabledAddButton\" (click)=\"onAdd(node)\">\n              <mat-icon>add</mat-icon>\n            </button>\n            <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled || node.disabledDeleteButton\" (click)=\"onDelete(node)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </li>\n          <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n            <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n              <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n                <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\n                  option.name\n                }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n              <mat-icon>done</mat-icon>\n            </button>\n          </div>\n\n          <!-- <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\n            <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\n            </hel-input-with-button>\n          </li> -->\n        </div>\n        <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n          <ng-container matTreeNodeOutlet></ng-container>\n        </ul>\n      </li>\n    </mat-nested-tree-node>\n  </mat-tree>\n</div>\n",
                styles: [".example-tree-invisible{display:none}.example-tree li,.example-tree ul{list-style-type:none;margin-bottom:0;margin-top:0}.isSelected{background:red}.tree-options{display:inline}.container-tree{height:350px;overflow:scroll;width:100%}.tree-node{-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none}.tree-node-text{display:inline;margin-bottom:0}"]
            }]
    }], function () { return [{ type: TreeHelisaService }, { type: ɵngcc13.Router }, { type: ɵngcc0.ElementRef }]; }, { removed: [{
            type: i0.Output
        }], edited: [{
            type: i0.Output
        }], added: [{
            type: i0.Output
        }], collapseParent: [{
            type: i0.Output
        }], rangeScrolled: [{
            type: i0.Output
        }], nodeSelected: [{
            type: i0.Output
        }], dobleClick: [{
            type: i0.Output
        }], keypressDelete: [{
            type: i0.Output
        }], keypressInsert: [{
            type: i0.Output
        }], checkedOptionNode: [{
            type: i0.Output
        }], uncheckedOptionNode: [{
            type: i0.Output
        }], clickAddNode: [{
            type: i0.Output
        }], clickEditNode: [{
            type: i0.Output
        }], clickDeleteNode: [{
            type: i0.Output
        }], data: [{
            type: i0.Input
        }], onKeyDown: [{
            type: i0.HostListener,
            args: ['document:keyup', ['$event']]
        }], tree: [{
            type: i0.ViewChild,
            args: ['tree', { static: true }]
        }] }); })();
        return TreeHelisaComponent;
    }());
    TreeHelisaComponent.ctorParameters = function () { return [
        { type: TreeHelisaService },
        { type: router.Router },
        { type: i0.ElementRef }
    ]; };
    TreeHelisaComponent.propDecorators = {
        tree: [{ type: i0.ViewChild, args: ['tree', { static: true },] }],
        data: [{ type: i0.Input }],
        removed: [{ type: i0.Output }],
        edited: [{ type: i0.Output }],
        added: [{ type: i0.Output }],
        collapseParent: [{ type: i0.Output }],
        rangeScrolled: [{ type: i0.Output }],
        nodeSelected: [{ type: i0.Output }],
        dobleClick: [{ type: i0.Output }],
        keypressDelete: [{ type: i0.Output }],
        keypressInsert: [{ type: i0.Output }],
        checkedOptionNode: [{ type: i0.Output }],
        uncheckedOptionNode: [{ type: i0.Output }],
        clickAddNode: [{ type: i0.Output }],
        clickEditNode: [{ type: i0.Output }],
        clickDeleteNode: [{ type: i0.Output }],
        onKeyDown: [{ type: i0.HostListener, args: ['document:keyup', ['$event'],] }]
    };

    var AutocompleteHelisaService = /** @class */ (function () {
        function AutocompleteHelisaService() {
            this.emitChangeSource = new rxjs.BehaviorSubject([]);
            this.dataSource$ = this.emitChangeSource.asObservable();
        }
        AutocompleteHelisaService.prototype.setDataSource = function (options) {
            this.emitChangeSource.next(options);
        };
AutocompleteHelisaService.ɵfac = function AutocompleteHelisaService_Factory(t) { return new (t || AutocompleteHelisaService)(); };
AutocompleteHelisaService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AutocompleteHelisaService, factory: function (t) { return AutocompleteHelisaService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutocompleteHelisaService, [{
        type: i0.Injectable
    }], function () { return []; }, null); })();
        return AutocompleteHelisaService;
    }());
    AutocompleteHelisaService.ctorParameters = function () { return []; };

    var AutocompleteHelisaComponent = /** @class */ (function () {
        function AutocompleteHelisaComponent(autocompleteHelisaService) {
            this.autocompleteHelisaService = autocompleteHelisaService;
            this.myControl = new forms.FormControl();
            this.options = new Array();
            this.selectedValueEmmiter = new i0.EventEmitter();
            this.nextPage = new i0.EventEmitter();
            this.isRemote = false;
            this.isLoading = false;
            this.onScrollObservable = new rxjs.Subject();
        }
        AutocompleteHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.onScrollObservable.asObservable()
                .pipe(operators.debounceTime(500), operators.throttleTime(500))
                .subscribe(function () {
                _this.nextPage.emit();
            });
            if (this.isRemote) {
                this.autocompleteHelisaService.dataSource$.subscribe(function (data) {
                    setTimeout(function () {
                        _this.options = data;
                        _this.filteredOptions = rxjs.of(_this.options);
                    });
                });
            }
            this.filteredOptions = this.myControl.valueChanges.pipe(operators.startWith(''), operators.map(function (x) { return _this._checkRegex(x); }), operators.map(function (value) { return _this._filter(value); }));
        };
        AutocompleteHelisaComponent.prototype.displayFn = function (option) {
            return option ? option.displayText : undefined;
        };
        AutocompleteHelisaComponent.prototype.getService = function () {
            return this.autocompleteHelisaService;
        };
        /** Elimina caracteres extraños */
        AutocompleteHelisaComponent.prototype._checkRegex = function (value) {
            value = value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '');
            return value;
        };
        AutocompleteHelisaComponent.prototype._filter = function (value) {
            if (!(value)) {
                if (!this.isRemote) {
                    var filterValue_1 = value.toLowerCase().split(' ');
                    return this.options.filter(function (option) {
                        var ws = true;
                        filterValue_1.forEach(function (text) { return ws = ws && option.displayText.toLowerCase().indexOf(text) >= 0; });
                        return ws;
                    }).splice(0, 5);
                }
                else {
                    return this.options;
                }
            }
        };
        AutocompleteHelisaComponent.prototype.onSelected = function (event) {
            this.selectedValue = event.option.value;
            this.selectedValueEmmiter.emit(this.selectedValue.value);
        };
        AutocompleteHelisaComponent.prototype.getNextPage = function () {
            this.onScrollObservable.next();
        };
AutocompleteHelisaComponent.ɵfac = function AutocompleteHelisaComponent_Factory(t) { return new (t || AutocompleteHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(AutocompleteHelisaService)); };
AutocompleteHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AutocompleteHelisaComponent, selectors: [["hel-autocomplete"]], inputs: { myControl: "myControl", options: "options", isRemote: "isRemote" }, outputs: { selectedValueEmmiter: "selectedValueEmmiter", nextPage: "nextPage" }, features: [ɵngcc0.ɵɵProvidersFeature([AutocompleteHelisaService])], decls: 6, vars: 6, consts: [["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith", "optionSelected", "optionsScroll"], ["auto", "matAutocomplete"], [3, "value", "helTooltip", 4, "ngFor", "ngForOf"], [3, "value", "helTooltip"]], template: function AutocompleteHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-form-field");
        ɵngcc0.ɵɵelement(1, "input", 0);
        ɵngcc0.ɵɵelementStart(2, "mat-autocomplete", 1, 2);
        ɵngcc0.ɵɵlistener("optionSelected", function AutocompleteHelisaComponent_Template_mat_autocomplete_optionSelected_2_listener($event) { return ctx.onSelected($event); })("optionsScroll", function AutocompleteHelisaComponent_Template_mat_autocomplete_optionsScroll_2_listener() { return ctx.getNextPage(); });
        ɵngcc0.ɵɵtemplate(4, AutocompleteHelisaComponent_mat_option_4_Template, 2, 3, "mat-option", 3);
        ɵngcc0.ɵɵpipe(5, "async");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("displayWith", ctx.displayFn);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(5, 4, ctx.filteredOptions));
    } }, directives: function () { return [ɵngcc1.MatFormField, ɵngcc2.MatInput, ɵngcc3.DefaultValueAccessor, ɵngcc17.MatAutocompleteTrigger, ɵngcc3.NgControlStatus, ɵngcc3.FormControlDirective, ɵngcc17.MatAutocomplete, OptionsScrollDirective, ɵngcc5.NgForOf, ɵngcc16.MatOption, HelTooltipDirective]; }, pipes: function () { return [ɵngcc5.AsyncPipe]; }, styles: [""] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutocompleteHelisaComponent, [{
        type: i0.Component,
        args: [{
                selector: 'hel-autocomplete',
                template: "<mat-form-field>\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\n      {{option.displayText}}\n    </mat-option>    \n  </mat-autocomplete>\n</mat-form-field>",
                providers: [AutocompleteHelisaService],
                styles: [""]
            }]
    }], function () { return [{ type: AutocompleteHelisaService }]; }, { myControl: [{
            type: i0.Input
        }], options: [{
            type: i0.Input
        }], selectedValueEmmiter: [{
            type: i0.Output
        }], nextPage: [{
            type: i0.Output
        }], isRemote: [{
            type: i0.Input
        }] }); })();
        return AutocompleteHelisaComponent;
    }());
    AutocompleteHelisaComponent.ctorParameters = function () { return [
        { type: AutocompleteHelisaService }
    ]; };
    AutocompleteHelisaComponent.propDecorators = {
        myControl: [{ type: i0.Input }],
        options: [{ type: i0.Input }],
        selectedValueEmmiter: [{ type: i0.Output }],
        nextPage: [{ type: i0.Output }],
        isRemote: [{ type: i0.Input }]
    };

    var OptionsScrollDirective = /** @class */ (function () {
        function OptionsScrollDirective(autoComplete) {
            var _this = this;
            this.autoComplete = autoComplete;
            /**
             * This value would different depends of styles
             */
            this.thresholdPercent = .9;
            this.optionsScroll = new i0.EventEmitter();
            this.destroy = new rxjs.Subject();
            this.lastScrollTop = 0;
            this.autoComplete.opened.pipe(operators.tap(function () {
                // Note: When autocomplete raises opened, panel is not yet created (by Overlay)
                // Note: The panel will be available on next tick
                // Note: The panel wil NOT open if there are no options to display
                setTimeout(function () {
                    // Note: remove listner just for safety, in case the close event is skipped.
                    _this.removeScrollEventListener();
                    if (!!_this.autoComplete &&
                        !!_this.autoComplete.panel &&
                        !!_this.autoComplete.panel.nativeElement) {
                        _this.autoComplete.panel.nativeElement
                            .addEventListener('scroll', _this.onScroll.bind(_this), false);
                    }
                });
            }), operators.takeUntil(this.destroy)).subscribe();
            this.autoComplete.closed.pipe(operators.tap(function () { return _this.removeScrollEventListener(); }), operators.takeUntil(this.destroy)).subscribe();
        }
        OptionsScrollDirective.prototype.removeScrollEventListener = function () {
            if (!!this.autoComplete &&
                !!this.autoComplete.panel &&
                !!this.autoComplete.panel.nativeElement) {
                this.autoComplete.panel.nativeElement
                    .removeEventListener('scroll', this.onScroll);
            }
        };
        OptionsScrollDirective.prototype.ngOnDestroy = function () {
            this.destroy.next();
            this.destroy.complete();
            this.removeScrollEventListener();
        };
        OptionsScrollDirective.prototype.onScroll = function (event) {
            // Credits: how to know if it's down or up scroll "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            var st = event.target.pageYOffset || event.target.scrollTop;
            if (st > this.lastScrollTop) {
                // downscroll code
                if (this.thresholdPercent === undefined) {
                    this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
                }
                else {
                    var threshold = this.thresholdPercent * 100 * event.target.scrollHeight / 100;
                    var current = event.target.scrollTop + event.target.clientHeight;
                    // console.log(`scroll ${current}, threshold: ${threshold}`)
                    if (current > threshold) {
                        // console.log('load next page');
                        this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
                    }
                }
            }
            else {
                // upscroll code
            }
            this.lastScrollTop = st <= 0 ? 0 : st;
        };
OptionsScrollDirective.ɵfac = function OptionsScrollDirective_Factory(t) { return new (t || OptionsScrollDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc17.MatAutocomplete)); };
OptionsScrollDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: OptionsScrollDirective, selectors: [["mat-autocomplete", "optionsScroll", ""]], inputs: { thresholdPercent: "thresholdPercent" }, outputs: { optionsScroll: "optionsScroll" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OptionsScrollDirective, [{
        type: i0.Directive,
        args: [{
                selector: 'mat-autocomplete[optionsScroll]'
            }]
    }], function () { return [{ type: ɵngcc17.MatAutocomplete }]; }, { thresholdPercent: [{
            type: i0.Input
        }], optionsScroll: [{
            type: i0.Output
        }] }); })();
        return OptionsScrollDirective;
    }());
    OptionsScrollDirective.ctorParameters = function () { return [
        { type: autocomplete.MatAutocomplete }
    ]; };
    OptionsScrollDirective.propDecorators = {
        thresholdPercent: [{ type: i0.Input }],
        optionsScroll: [{ type: i0.Output }]
    };

    var HelTooltipDirective = /** @class */ (function () {
        function HelTooltipDirective(tooltip, elemRef) {
            this.elemRef = elemRef;
            /**
             * Tiempo antes de ocultarla el mensaje
             */
            this.hideDelay = 600;
            /**
             * Tiempo antes de mostra el mensaje
             */
            this.showDelay = 500;
            this.tooltip = tooltip;
        }
        HelTooltipDirective.prototype.mouseover = function () {
            var currentContent = this.elemRef.nativeElement.innerText;
            if (!!currentContent && !!this.message) {
                if ((currentContent.toUpperCase() !== this.message.toString().toUpperCase()) || this.isEllipsisActive(this.elemRef.nativeElement)) {
                    this.tooltip.message = this.message;
                }
            }
            this.tooltip.showDelay = this.showDelay;
            this.tooltip.hideDelay = this.hideDelay;
        };
        HelTooltipDirective.prototype.isEllipsisActive = function (e) {
            return (e.offsetWidth < e.scrollWidth);
        };
HelTooltipDirective.ɵfac = function HelTooltipDirective_Factory(t) { return new (t || HelTooltipDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc11.MatTooltip), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
HelTooltipDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: HelTooltipDirective, selectors: [["", "helTooltip", ""]], hostBindings: function HelTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseover", function HelTooltipDirective_mouseover_HostBindingHandler() { return ctx.mouseover(); });
    } }, inputs: { hideDelay: "hideDelay", showDelay: "showDelay", message: ["helTooltip", "message"] }, features: [ɵngcc0.ɵɵProvidersFeature([tooltip.MatTooltip])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HelTooltipDirective, [{
        type: i0.Directive,
        args: [{
                selector: '[helTooltip]',
                providers: [tooltip.MatTooltip]
            }]
    }], function () { return [{ type: ɵngcc11.MatTooltip }, { type: ɵngcc0.ElementRef }]; }, { hideDelay: [{
            type: i0.Input
        }], showDelay: [{
            type: i0.Input
        }], mouseover: [{
            type: i0.HostListener,
            args: ['mouseover']
        }], message: [{
            type: i0.Input,
            args: ['helTooltip']
        }] }); })();
        return HelTooltipDirective;
    }());
    HelTooltipDirective.ctorParameters = function () { return [
        { type: tooltip.MatTooltip },
        { type: i0.ElementRef }
    ]; };
    HelTooltipDirective.propDecorators = {
        message: [{ type: i0.Input, args: ['helTooltip',] }],
        hideDelay: [{ type: i0.Input }],
        showDelay: [{ type: i0.Input }],
        mouseover: [{ type: i0.HostListener, args: ['mouseover',] }]
    };

    var ExternalLinkDirective = /** @class */ (function () {
        function ExternalLinkDirective(platformId) {
            this.platformId = platformId;
            this.relAttr = '';
            this.targetAttr = '';
            this.hrefAttr = '';
        }
        ExternalLinkDirective.prototype.ngOnChanges = function () {
            this.hrefAttr = this.href;
            if (this.isLinkExternal()) {
                this.relAttr = 'noopener';
                this.targetAttr = '_blank';
            }
        };
        ExternalLinkDirective.prototype.isLinkExternal = function () {
            return common.isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname);
        };
ExternalLinkDirective.ɵfac = function ExternalLinkDirective_Factory(t) { return new (t || ExternalLinkDirective)(ɵngcc0.ɵɵdirectiveInject(i0.PLATFORM_ID)); };
ExternalLinkDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ExternalLinkDirective, selectors: [["a", "href", ""]], hostVars: 3, hostBindings: function ExternalLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("rel", ctx.relAttr)("target", ctx.targetAttr)("href", ctx.hrefAttr, ɵngcc0.ɵɵsanitizeUrl);
    } }, inputs: { href: "href" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ExternalLinkDirective, [{
        type: i0.Directive,
        args: [{
                selector: 'a[href]'
            }]
    }], function () { return [{ type: String, decorators: [{
                type: i0.Inject,
                args: [i0.PLATFORM_ID]
            }] }]; }, { relAttr: [{
            type: i0.HostBinding,
            args: ['attr.rel']
        }], targetAttr: [{
            type: i0.HostBinding,
            args: ['attr.target']
        }], hrefAttr: [{
            type: i0.HostBinding,
            args: ['attr.href']
        }], href: [{
            type: i0.Input
        }] }); })();
        return ExternalLinkDirective;
    }());
    ExternalLinkDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
    ]; };
    ExternalLinkDirective.propDecorators = {
        relAttr: [{ type: i0.HostBinding, args: ['attr.rel',] }],
        targetAttr: [{ type: i0.HostBinding, args: ['attr.target',] }],
        hrefAttr: [{ type: i0.HostBinding, args: ['attr.href',] }],
        href: [{ type: i0.Input }]
    };

    var ExternalLinkPipe = /** @class */ (function () {
        function ExternalLinkPipe() {
        }
        ExternalLinkPipe.prototype.transform = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return '//' + value;
        };
ExternalLinkPipe.ɵfac = function ExternalLinkPipe_Factory(t) { return new (t || ExternalLinkPipe)(); };
ExternalLinkPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "externalLink", type: ExternalLinkPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ExternalLinkPipe, [{
        type: i0.Pipe,
        args: [{
                name: 'externalLink'
            }]
    }], function () { return []; }, null); })();
        return ExternalLinkPipe;
    }());

    (function (ComboBoxHelisaState) {
        ComboBoxHelisaState[ComboBoxHelisaState["CLOSED"] = 0] = "CLOSED";
        ComboBoxHelisaState[ComboBoxHelisaState["SELECT"] = 1] = "SELECT";
        ComboBoxHelisaState[ComboBoxHelisaState["INSERT"] = 2] = "INSERT";
    })(exports.ComboBoxHelisaState || (exports.ComboBoxHelisaState = {}));
    var ComboBoxHelisaComponent = /** @class */ (function () {
        function ComboBoxHelisaComponent() {
            this.placeholder = 'Sin seleccionar';
            this.selectEmitter = new i0.EventEmitter();
            this.enabled = true;
            this.page = 0;
            this.pageSize = 50;
            this.haveNextPage = true;
            this.state = exports.ComboBoxHelisaState.CLOSED;
            this.rows = [];
        }
        ComboBoxHelisaComponent.prototype.ngOnInit = function () {
        };
        ComboBoxHelisaComponent.prototype.ngAfterViewInit = function () {
            this.getNextPage();
        };
        ComboBoxHelisaComponent.prototype.getNextPage = function () {
            var _this = this;
            if (this.haveNextPage) {
                this.listable.getData(this.page++, this.pageSize).subscribe(function (rows) {
                    rows.forEach(function (item) { return _this.rows.push(item); });
                    _this.haveNextPage = rows.length > 0;
                });
            }
        };
        Object.defineProperty(ComboBoxHelisaComponent.prototype, "comboBoxHelisaState", {
            get: function () {
                return exports.ComboBoxHelisaState;
            },
            enumerable: false,
            configurable: true
        });
        ComboBoxHelisaComponent.prototype.onFocus = function () {
            if (this.enabled) {
                this.state = exports.ComboBoxHelisaState.SELECT;
            }
        };
        ComboBoxHelisaComponent.prototype.selectItem = function (row) {
            this.selectedItem = row;
            this.selectEmitter.emit(row);
            this.state = exports.ComboBoxHelisaState.CLOSED;
        };
        ComboBoxHelisaComponent.prototype.changeToInsert = function () {
            this.state = exports.ComboBoxHelisaState.INSERT;
        };
        ComboBoxHelisaComponent.prototype.insert = function (event) {
            var _this = this;
            if (event.trim().length > 0) {
                this.editable.insert(event).subscribe(function (data) {
                    _this.rows.push(data);
                    _this.state = exports.ComboBoxHelisaState.SELECT;
                });
            }
            else {
                this.state = exports.ComboBoxHelisaState.SELECT;
            }
        };
        ComboBoxHelisaComponent.prototype.onScroll = function (event) {
            var element = event.target;
            if (element.scrollHeight - element.scrollTop < 1000) {
                this.getNextPage();
            }
        };
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
    } }, directives: [ɵngcc5.NgIf, ɵngcc5.NgForOf, ɵngcc5.NgClass, InputHelisaComponent], styles: [".combo-box-general-container[_ngcontent-%COMP%]{width:300px}.combo-box-list-container[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:row;height:100px;position:absolute}.combo-box-row[_ngcontent-%COMP%]{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.combo-box-line[_ngcontent-%COMP%]{background-color:#da0080;width:3px}.combo-box-list[_ngcontent-%COMP%]{flex:1;overflow-y:auto}.combo-box-input[_ngcontent-%COMP%]{width:100%}.combo-box-input-container[_ngcontent-%COMP%]{height:25px}.combo-box-selected-item[_ngcontent-%COMP%]{color:#7030a0}.combo-box-insert-button[_ngcontent-%COMP%]{color:#807f7f;cursor:pointer}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ComboBoxHelisaComponent, [{
        type: i0.Component,
        args: [{
                selector: 'lib-combo-box-helisa',
                template: "<div class=\"combo-box-general-container\">\n  <div class=\"combo-box-input-container\">\n    <input class=\"combo-box-input\" readonly [value]=\"selectedItem?listable.getDisplayText(selectedItem):placeholder\"\n           *ngIf=\"state==comboBoxHelisaState.CLOSED\" (focus)=\"onFocus()\"/>\n  </div>\n  <div class=\"combo-box-list-container combo-box-general-container\" *ngIf=\"state==comboBoxHelisaState.SELECT || state == comboBoxHelisaState.INSERT\">\n    <div class=\"combo-box-line\"></div>\n    <div class=\"combo-box-list\" (scroll)=\"onScroll($event)\">\n      <div *ngFor=\"let row of rows\" class=\"combo-box-row\" [ngClass]=\"{'combo-box-selected-item': selectedItem && listable.compare(selectedItem, row)}\" (dblclick)=\"selectItem(row)\">\n        {{ listable.getDisplayText(row) }}\n      </div>\n      <hel-input *ngIf=\"state==comboBoxHelisaState.INSERT\" [isFocused]=\"true\" (setValue)=\"insert($event)\"></hel-input>\n      <div *ngIf=\"editable && state==comboBoxHelisaState.SELECT\" class=\"combo-box-insert-button\" (click)=\"changeToInsert()\">{{ editable.getButtonInsertText() }}</div>\n    </div>\n  </div>\n</div>\n",
                styles: [".combo-box-general-container{width:300px}.combo-box-list-container{background-color:#fff;display:flex;flex-direction:row;height:100px;position:absolute}.combo-box-row{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.combo-box-line{background-color:#da0080;width:3px}.combo-box-list{flex:1;overflow-y:auto}.combo-box-input{width:100%}.combo-box-input-container{height:25px}.combo-box-selected-item{color:#7030a0}.combo-box-insert-button{color:#807f7f;cursor:pointer}"]
            }]
    }], function () { return []; }, { placeholder: [{
            type: i0.Input
        }], selectEmitter: [{
            type: i0.Output
        }], enabled: [{
            type: i0.Input
        }], selectedItem: [{
            type: i0.Input
        }], editable: [{
            type: i0.Input
        }], listable: [{
            type: i0.Input
        }] }); })();
        return ComboBoxHelisaComponent;
    }());
    ComboBoxHelisaComponent.ctorParameters = function () { return []; };
    ComboBoxHelisaComponent.propDecorators = {
        editable: [{ type: i0.Input }],
        listable: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        selectedItem: [{ type: i0.Input }],
        selectEmitter: [{ type: i0.Output }],
        enabled: [{ type: i0.Input }]
    };

    (function (PagingTreeInitialMode) {
        PagingTreeInitialMode[PagingTreeInitialMode["COLLAPSE"] = 0] = "COLLAPSE";
        PagingTreeInitialMode[PagingTreeInitialMode["EXPAND"] = 1] = "EXPAND";
    })(exports.PagingTreeInitialMode || (exports.PagingTreeInitialMode = {}));
    var PagingTreeHelisaComponent = /** @class */ (function () {
        function PagingTreeHelisaComponent() {
            this.pageSize = 200000;
            this.visibleLimit = 0;
            this.visibleSize = 100;
            this.treeMode = exports.PagingTreeInitialMode.EXPAND;
            this.visibleObjects = [];
            this.allNode = [];
            this.afterLoadData = new i0.EventEmitter();
        }
        PagingTreeHelisaComponent.prototype.ngOnInit = function () {
        };
        PagingTreeHelisaComponent.prototype.ngAfterViewInit = function () {
        };
        Object.defineProperty(PagingTreeHelisaComponent.prototype, "mode", {
            set: function (paramMode) {
                this.treeMode = paramMode;
                this.reset();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PagingTreeHelisaComponent.prototype, "pagingTreeHelisaListable", {
            set: function (paramService) {
                this.service = paramService;
                this.reset();
            },
            enumerable: false,
            configurable: true
        });
        PagingTreeHelisaComponent.prototype.reset = function () {
            var _this = this;
            if (this.service) {
                this.service.get(0, this.pageSize).subscribe(function (items) { return _this.loadData(items); });
            }
        };
        PagingTreeHelisaComponent.prototype.loadData = function (items) {
            var _this = this;
            this.searchNode = new Map();
            this.visibleObjects = [];
            this.allNode = [];
            items = this.sortItems(items);
            this.searchNode = new Map();
            items.forEach(function (item) {
                var node = _this.createNode(item);
                _this.allNode.push(node);
            });
            this.reSort();
            this.loadNextVisibleObjects(null);
            this.afterLoadData.emit();
        };
        PagingTreeHelisaComponent.prototype.sortItems = function (items) {
            var _this = this;
            var lAdy = new Map();
            var stack = [];
            items.forEach(function (item) {
                var idParent = item[_this.service.getIdParentField()];
                if (!idParent) {
                    stack.unshift(item);
                }
                else {
                    if (!lAdy.has(idParent)) {
                        lAdy.set(idParent, []);
                    }
                    lAdy.get(idParent).push(item);
                }
            });
            var response = new Array(items.length);
            var index = 0;
            while (stack.length > 0) {
                var last = stack.pop();
                response[index++] = last;
                var children = lAdy.get(last[this.service.getIdField()]);
                if (children) {
                    for (var i = children.length - 1; i >= 0; i--) {
                        stack.push(children[i]);
                    }
                }
            }
            return response;
        };
        PagingTreeHelisaComponent.prototype.createNode = function (item) {
            if (this.searchNode.has(item[this.service.getIdField()])) {
                throw Error('Ya existe el nodo.');
            }
            var parentInformation = this.getNodeInformationById(item[this.service.getIdParentField()]);
            var nodeInformation = {
                object: item,
                haveChildren: false,
                level: parentInformation ? parentInformation.level + 1 : 0,
                expanded: this.treeMode === exports.PagingTreeInitialMode.EXPAND,
                visible: false,
                preorder: this.searchNode.size + 1,
            };
            this.searchNode.set(item[this.service.getIdField()], nodeInformation);
            if (parentInformation) {
                parentInformation.haveChildren = true;
            }
            return nodeInformation;
        };
        PagingTreeHelisaComponent.prototype.getNodeInformationById = function (id) {
            return this.searchNode.get(id);
        };
        PagingTreeHelisaComponent.prototype.getNodeInformation = function (item) {
            return this.searchNode.get(item[this.service.getIdField()]);
        };
        PagingTreeHelisaComponent.prototype.getLevelClass = function (item) {
            return 'padding-level-' + this.getNodeInformationById(item[this.service.getIdField()]).level;
        };
        PagingTreeHelisaComponent.prototype.loadNextVisibleObjects = function (nodeFrom) {
            var _this = this;
            var visibleObjects = [];
            this.visibleObjects.forEach(function (item) {
                if (_this.getNodeInformation(item)) {
                    if (nodeFrom && _this.getNodeInformation(nodeFrom).preorder >= _this.getNodeInformation(item).preorder) {
                        visibleObjects.push(item);
                    }
                    else {
                        _this.getNodeInformationById(item[_this.service.getIdField()]).visible = false;
                    }
                }
            });
            this.visibleLimit = visibleObjects.length + this.visibleSize;
            this.allNode.forEach(function (item) {
                if (visibleObjects.length < _this.visibleLimit &&
                    (!nodeFrom || _this.getNodeInformation(nodeFrom).preorder < item.preorder)) {
                    var idParent = item.object[_this.service.getIdParentField()];
                    if (!idParent) {
                        visibleObjects.push(item.object);
                        item.visible = true;
                    }
                    else {
                        var parentInformation = _this.getNodeInformationById(idParent);
                        if (parentInformation.visible && parentInformation.expanded) {
                            visibleObjects.push(item.object);
                            item.visible = true;
                        }
                    }
                }
            });
            this.visibleObjects = visibleObjects;
        };
        PagingTreeHelisaComponent.prototype.collapseNode = function (item) {
            this.getNodeInformationById(item[this.service.getIdField()]).expanded = false;
            this.loadNextVisibleObjects(item);
        };
        PagingTreeHelisaComponent.prototype.expandNode = function (item) {
            this.getNodeInformationById(item[this.service.getIdField()]).expanded = true;
            this.loadNextVisibleObjects(item);
        };
        PagingTreeHelisaComponent.prototype.showNextPage = function () {
            if (this.visibleObjects.length > 0) {
                this.loadNextVisibleObjects(this.visibleObjects[this.visibleObjects.length - 1]);
            }
        };
        Object.defineProperty(PagingTreeHelisaComponent.prototype, "visibleData", {
            get: function () {
                return this.visibleObjects;
            },
            enumerable: false,
            configurable: true
        });
        PagingTreeHelisaComponent.prototype.removeItem = function (item) {
            this.removeById(item[this.service.getIdField()]);
        };
        PagingTreeHelisaComponent.prototype.removeById = function (id) {
            var _this = this;
            if (this.getNodeInformationById(id)) {
                var idParent_1 = this.getNodeInformationById(id).object[this.service.getIdParentField()];
                var set = new Set();
                set.add(id);
                var beginIndex = this.allNode.findIndex(function (itemSearch) { return itemSearch.object[_this.service.getIdField()] === id; });
                var lastIndex = this.allNode.length;
                for (var i = beginIndex + 1; i < this.allNode.length; i++) {
                    var itemSearch = this.allNode[i].object;
                    if (set.has(itemSearch[this.service.getIdParentField()])) {
                        set.add(itemSearch[this.service.getIdField()]);
                    }
                    else {
                        lastIndex = i;
                        break;
                    }
                }
                var deletedItems = this.allNode.splice(beginIndex, lastIndex - beginIndex);
                var parentHaveChildren_1 = false;
                deletedItems.forEach(function (deletedItem) { return _this.searchNode.delete(deletedItem.object[_this.service.getIdField()]); });
                this.allNode.forEach(function (searchItem, index) {
                    searchItem.preorder = index + 1;
                    if (searchItem.object[_this.service.getIdParentField()] === idParent_1) {
                        parentHaveChildren_1 = true;
                    }
                });
                if (idParent_1) {
                    this.getNodeInformationById(idParent_1).haveChildren = parentHaveChildren_1;
                }
                this.loadNextVisibleObjects(beginIndex > 0 ? this.allNode[beginIndex - 1].object : null);
            }
        };
        PagingTreeHelisaComponent.prototype.addItem = function (item) {
            var _this = this;
            var indexParent = this.allNode.findIndex(function (node) { return node.object[_this.service.getIdField()] === item[_this.service.getIdParentField()]; });
            if (indexParent >= 0) {
                this.allNode.push(this.createNode(item));
                this.allNode[indexParent].haveChildren = true;
                this.reSort();
                this.expandNode(this.allNode[indexParent].object);
            }
            else {
                throw Error('No existe el padre.');
            }
        };
        PagingTreeHelisaComponent.prototype.updateItem = function (item) {
            var _this = this;
            if (this.getNodeInformation(item)) {
                this.getNodeInformation(item).object = item;
                this.reSort();
                var indexParent = this.allNode.findIndex(function (node) { return node.object[_this.service.getIdField()] === item[_this.service.getIdParentField()]; });
                if (indexParent >= 0) {
                    this.expandNode(this.allNode[indexParent].object);
                }
                else {
                    this.loadNextVisibleObjects(null);
                }
            }
        };
        PagingTreeHelisaComponent.prototype.reSort = function () {
            var _this = this;
            var items = this.allNode.map(function (node) { return node.object; });
            items.sort(function (a, b) { return _this.service.compare(a, b); });
            var preorder = this.sortItems(items);
            preorder.forEach(function (object, index) { return _this.getNodeInformation(object).preorder = index + 1; });
            this.allNode.sort(function (nodeA, nodeB) { return nodeA.preorder - nodeB.preorder; });
        };
PagingTreeHelisaComponent.ɵfac = function PagingTreeHelisaComponent_Factory(t) { return new (t || PagingTreeHelisaComponent)(); };
PagingTreeHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PagingTreeHelisaComponent, selectors: [["hel-paging-tree"]], contentQueries: function PagingTreeHelisaComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c7, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c8, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nodeComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nodeTitle = _t.first);
    } }, inputs: { mode: "mode", pagingTreeHelisaListable: "pagingTreeHelisaListable" }, outputs: { afterLoadData: "afterLoadData" }, decls: 3, vars: 2, consts: [[3, "ngTemplateOutlet"], ["class", "w-100", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "w-100", 3, "ngClass"], [4, "ngIf"], ["class", "helisa-tree-row w-100", 4, "ngIf"], [1, "helisa-tree-row", "w-100"], [3, "ngClass"], [3, "click", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "click"]], template: function PagingTreeHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementContainer(1, 0);
        ɵngcc0.ɵɵtemplate(2, PagingTreeHelisaComponent_div_2_Template, 2, 2, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.nodeTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.visibleData);
    } }, directives: [ɵngcc5.NgTemplateOutlet, ɵngcc5.NgForOf, ɵngcc5.NgClass, ɵngcc5.NgIf, ɵngcc4.MatIcon], styles: [".w-100[_ngcontent-%COMP%]{width:100%}.padding-level-0[_ngcontent-%COMP%]{margin-left:0}.padding-level-1[_ngcontent-%COMP%]{margin-left:40px}.padding-level-2[_ngcontent-%COMP%]{margin-left:80px}.padding-level-3[_ngcontent-%COMP%]{margin-left:120px}.padding-level-4[_ngcontent-%COMP%]{margin-left:160px}.padding-level-5[_ngcontent-%COMP%]{margin-left:200px}.padding-level-6[_ngcontent-%COMP%]{margin-left:240px}.padding-level-7[_ngcontent-%COMP%]{margin-left:280px}.padding-level-8[_ngcontent-%COMP%]{margin-left:320px}.helisa-tree-row[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PagingTreeHelisaComponent, [{
        type: i0.Component,
        args: [{
                selector: 'hel-paging-tree',
                template: "<div>\n  <ng-container [ngTemplateOutlet]=\"nodeTitle\"></ng-container>\n  <div *ngFor=\"let item of visibleData\" [ngClass]=\"this.getLevelClass(item)\" class=\"w-100\">\n    <div *ngIf=\"getNodeInformation(item).visible\">\n      <div *ngIf=\"getNodeInformation(item) as node\" class=\"helisa-tree-row w-100\">\n        <div [ngClass]=\"{expandNode: !node.expanded && node.haveChildren, withoutNode: !node.haveChildren}\">\n          <mat-icon *ngIf=\"!node.expanded && node.haveChildren\" (click)=\"expandNode(item)\">add</mat-icon>\n          <mat-icon *ngIf=\"node.expanded && node.haveChildren\" (click)=\"collapseNode(item)\">remove</mat-icon>\n          <mat-icon *ngIf=\"!node.haveChildren\"></mat-icon>\n        </div>\n        <ng-container [ngTemplateOutlet]=\"nodeComponent\" [ngTemplateOutletContext]=\"{data: item, node: node}\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".w-100{width:100%}.padding-level-0{margin-left:0}.padding-level-1{margin-left:40px}.padding-level-2{margin-left:80px}.padding-level-3{margin-left:120px}.padding-level-4{margin-left:160px}.padding-level-5{margin-left:200px}.padding-level-6{margin-left:240px}.padding-level-7{margin-left:280px}.padding-level-8{margin-left:320px}.helisa-tree-row{align-items:center;display:flex;flex-direction:row}"]
            }]
    }], function () { return []; }, { afterLoadData: [{
            type: i0.Output
        }], mode: [{
            type: i0.Input
        }], pagingTreeHelisaListable: [{
            type: i0.Input
        }], nodeComponent: [{
            type: i0.ContentChild,
            args: ['nodeComponent']
        }], nodeTitle: [{
            type: i0.ContentChild,
            args: ['nodeTitle']
        }] }); })();
        return PagingTreeHelisaComponent;
    }());
    PagingTreeHelisaComponent.ctorParameters = function () { return []; };
    PagingTreeHelisaComponent.propDecorators = {
        afterLoadData: [{ type: i0.Output }],
        nodeComponent: [{ type: i0.ContentChild, args: ['nodeComponent',] }],
        nodeTitle: [{ type: i0.ContentChild, args: ['nodeTitle',] }],
        mode: [{ type: i0.Input }],
        pagingTreeHelisaListable: [{ type: i0.Input }]
    };

    (function (AlertInformationType) {
        AlertInformationType[AlertInformationType["AUTHORIZATION_TRANSACTION"] = 0] = "AUTHORIZATION_TRANSACTION";
        AlertInformationType[AlertInformationType["CONFIRM_DELETE_DATA"] = 1] = "CONFIRM_DELETE_DATA";
        AlertInformationType[AlertInformationType["DELETE_DATA"] = 2] = "DELETE_DATA";
        AlertInformationType[AlertInformationType["INFORMATION_NOT_VALID"] = 3] = "INFORMATION_NOT_VALID";
        AlertInformationType[AlertInformationType["LOST_DATA"] = 4] = "LOST_DATA";
        AlertInformationType[AlertInformationType["UNCOMPLETED_DATA"] = 5] = "UNCOMPLETED_DATA";
        AlertInformationType[AlertInformationType["UNCOMPLETED_SELECTED_DATA"] = 6] = "UNCOMPLETED_SELECTED_DATA";
        AlertInformationType[AlertInformationType["DEFINE_COMMERCIAL_STRUCTURE"] = 7] = "DEFINE_COMMERCIAL_STRUCTURE";
        AlertInformationType[AlertInformationType["DEFINE_PARKING_STRUCTURE"] = 8] = "DEFINE_PARKING_STRUCTURE";
        AlertInformationType[AlertInformationType["DEFINE_RESIDENCIAL_STRUCTURE"] = 9] = "DEFINE_RESIDENCIAL_STRUCTURE";
        AlertInformationType[AlertInformationType["NO_SEARCH_RESULTS"] = 10] = "NO_SEARCH_RESULTS";
    })(exports.AlertInformationType || (exports.AlertInformationType = {}));

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
    var CONTENT_BY_ALERT_TYPE = ['',
        '¿Esta seguro que desea eliminar esta información?',
        'Al anular este concepto, quedará la huella de todo lo que se hizo apoyados en su información. No es una eliminación tácita, es suprimir su uso en adelante.',
        'Rectifique. Hay información no válida',
        'Si no está seguro, puede continuar o "aplicar" y posteriormente cuando tenga clara las respuestas, usando la opción de modificar podrá completar el concepto.',
        'Si insite en grabar así, este concepto no será utilizable hasta su conclusión satisfactoria, que deberá completar posteriormente modificando el concepto.',
        'Elemento sin información requerida. Modifíquelo para completarlo.',
        'Primero defina la estructura comercial en configuración.',
        'Primero defina la estructura zona de parqueaderos en configuración.',
        'Primero defina la estructura física residencial en configuración.',
        'No fueron encontradas coincidencias con el criterio de búsqueda.',
    ];
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
            dialogRef.keydownEvents().subscribe(function (event) {
                if (event.code === 'Escape') {
                    _this.dialogRef.close(_this.onCancel());
                }
            });
        }
        AlertInformationDataHelisaComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.alertType === exports.AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === exports.AlertInformationType.DEFINE_PARKING_STRUCTURE ||
                this.alertType === exports.AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE) {
                setTimeout(function () {
                    _this.dialogRef.close();
                }, 3000);
            }
        };
        AlertInformationDataHelisaComponent.prototype.onCancel = function () {
            this.dialogRef.close();
        };
        AlertInformationDataHelisaComponent.prototype.hasTitle = function () {
            return this.alertType === exports.AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === exports.AlertInformationType.DELETE_DATA ||
                this.alertType === exports.AlertInformationType.LOST_DATA || this.alertType === exports.AlertInformationType.UNCOMPLETED_DATA;
        };
        AlertInformationDataHelisaComponent.prototype.hasContent = function () {
            return this.alertType === exports.AlertInformationType.CONFIRM_DELETE_DATA || this.alertType === exports.AlertInformationType.DELETE_DATA ||
                this.alertType === exports.AlertInformationType.INFORMATION_NOT_VALID || this.alertType === exports.AlertInformationType.LOST_DATA ||
                this.alertType === exports.AlertInformationType.UNCOMPLETED_DATA || this.alertType === exports.AlertInformationType.UNCOMPLETED_SELECTED_DATA ||
                this.alertType === exports.AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === exports.AlertInformationType.DEFINE_PARKING_STRUCTURE ||
                this.alertType === exports.AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE || this.alertType === exports.AlertInformationType.NO_SEARCH_RESULTS;
        };
        AlertInformationDataHelisaComponent.prototype.hasButtons = function () {
            return this.alertType === exports.AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === exports.AlertInformationType.CONFIRM_DELETE_DATA ||
                this.alertType === exports.AlertInformationType.DELETE_DATA || this.alertType === exports.AlertInformationType.LOST_DATA ||
                this.alertType === exports.AlertInformationType.UNCOMPLETED_DATA || this.alertType === exports.AlertInformationType.UNCOMPLETED_SELECTED_DATA;
        };
        AlertInformationDataHelisaComponent.prototype.hasCancelButton = function () {
            return this.alertType !== exports.AlertInformationType.UNCOMPLETED_SELECTED_DATA;
        };
AlertInformationDataHelisaComponent.ɵfac = function AlertInformationDataHelisaComponent_Factory(t) { return new (t || AlertInformationDataHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc7.MatDialogRef), ɵngcc0.ɵɵdirectiveInject(i1$1.MAT_DIALOG_DATA)); };
AlertInformationDataHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AlertInformationDataHelisaComponent, selectors: [["hel-alert-information-data-helisa"]], decls: 3, vars: 3, consts: [["mat-dialog-title", "", 4, "ngIf"], ["mat-dialog-content", "", 4, "ngIf"], ["mat-dialog-action", "", 4, "ngIf"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-action", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", 4, "ngIf"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function AlertInformationDataHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, AlertInformationDataHelisaComponent_h1_0_Template, 2, 1, "h1", 0);
        ɵngcc0.ɵɵtemplate(1, AlertInformationDataHelisaComponent_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, AlertInformationDataHelisaComponent_div_2_Template, 4, 3, "div", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasTitle());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasContent());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasButtons());
    } }, directives: [ɵngcc5.NgIf, ɵngcc7.MatDialogTitle, ɵngcc7.MatDialogContent, ɵngcc8.MatButton, ɵngcc7.MatDialogClose], styles: [""] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertInformationDataHelisaComponent, [{
        type: i0.Component,
        args: [{
                selector: 'hel-alert-information-data-helisa',
                template: "<h1 mat-dialog-title *ngIf=\"hasTitle()\">{{ title }}</h1>\n<div mat-dialog-content *ngIf=\"hasContent()\">{{ content }}</div>\n<div mat-dialog-action *ngIf=\"hasButtons()\">\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial *ngIf=\"hasCancelButton()\">{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\n</div>\n",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc7.MatDialogRef }, { type: undefined, decorators: [{
                type: i0.Inject,
                args: [i1$1.MAT_DIALOG_DATA]
            }] }]; }, null); })();
        return AlertInformationDataHelisaComponent;
    }());
    AlertInformationDataHelisaComponent.ctorParameters = function () { return [
        { type: i1$1.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1$1.MAT_DIALOG_DATA,] }] }
    ]; };

    var HelisaLibModule = /** @class */ (function () {
        function HelisaLibModule() {
        }
HelisaLibModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: HelisaLibModule });
HelisaLibModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function HelisaLibModule_Factory(t) { return new (t || HelisaLibModule)(); }, providers: [TableHelisaService, TreeHelisaService], imports: [[
            common.CommonModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            autocomplete.MatAutocompleteModule,
            button.MatButtonModule,
            checkbox.MatCheckboxModule,
            toolbar.MatToolbarModule,
            expansion.MatExpansionModule,
            formField.MatFormFieldModule,
            input.MatInputModule,
            select.MatSelectModule,
            core.MatOptionModule,
            list.MatListModule,
            icon.MatIconModule,
            i1.MatSnackBarModule,
            card.MatCardModule,
            layout.LayoutModule,
            tooltip.MatTooltipModule,
            button.MatButtonModule,
            sidenav.MatSidenavModule,
            icon.MatIconModule,
            list.MatListModule,
            gridList.MatGridListModule,
            card.MatCardModule,
            menu.MatMenuModule,
            input.MatInputModule,
            select.MatSelectModule,
            radio.MatRadioModule,
            progressSpinner.MatProgressSpinnerModule,
            table.MatTableModule,
            paginator.MatPaginatorModule,
            sort.MatSortModule,
            i1$1.MatDialogModule,
            tabs.MatTabsModule,
            datepicker.MatDatepickerModule,
            core.MatNativeDateModule,
            stepper.MatStepperModule,
            chips.MatChipsModule,
            dragDrop.DragDropModule,
            tree$1.MatTreeModule
        ], ɵngcc8.MatButtonModule, ɵngcc18.MatCheckboxModule, ɵngcc19.MatToolbarModule, ɵngcc20.MatExpansionModule, ɵngcc1.MatFormFieldModule, ɵngcc2.MatInputModule, ɵngcc15.MatSelectModule, ɵngcc16.MatOptionModule, ɵngcc21.MatListModule, ɵngcc4.MatIconModule, ɵngcc6.MatSnackBarModule, ɵngcc22.MatCardModule, ɵngcc23.LayoutModule, ɵngcc11.MatTooltipModule, ɵngcc8.MatButtonModule, ɵngcc24.MatSidenavModule, ɵngcc4.MatIconModule, ɵngcc21.MatListModule, ɵngcc25.MatGridListModule, ɵngcc22.MatCardModule, ɵngcc26.MatMenuModule, ɵngcc2.MatInputModule, ɵngcc15.MatSelectModule, ɵngcc27.MatRadioModule, ɵngcc28.MatProgressSpinnerModule, ɵngcc9.MatTableModule, ɵngcc29.MatPaginatorModule, ɵngcc10.MatSortModule, ɵngcc7.MatDialogModule, ɵngcc30.MatTabsModule, ɵngcc12.MatDatepickerModule, ɵngcc16.MatNativeDateModule, ɵngcc31.MatStepperModule, ɵngcc32.MatChipsModule, ɵngcc33.DragDropModule, ɵngcc14.MatTreeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(HelisaLibModule, { declarations: [InputWithButtonComponent, ToastHelisaComponent, AlertHelisaComponent, DependencyTableHelisaComponent, InputHelisaComponent, TableHelisaComponent, TreeHelisaComponent, DateHelisaComponent, AutocompleteHelisaComponent, OptionsScrollDirective, HelTooltipDirective, ExternalLinkDirective, ExternalLinkPipe, ComboBoxHelisaComponent, PagingTreeHelisaComponent, AlertInformationDataHelisaComponent], imports: [ɵngcc5.CommonModule, ɵngcc3.FormsModule, ɵngcc3.ReactiveFormsModule, ɵngcc17.MatAutocompleteModule, ɵngcc8.MatButtonModule, ɵngcc18.MatCheckboxModule, ɵngcc19.MatToolbarModule, ɵngcc20.MatExpansionModule, ɵngcc1.MatFormFieldModule, ɵngcc2.MatInputModule, ɵngcc15.MatSelectModule, ɵngcc16.MatOptionModule, ɵngcc21.MatListModule, ɵngcc4.MatIconModule, ɵngcc6.MatSnackBarModule, ɵngcc22.MatCardModule, ɵngcc23.LayoutModule, ɵngcc11.MatTooltipModule, ɵngcc8.MatButtonModule, ɵngcc24.MatSidenavModule, ɵngcc4.MatIconModule, ɵngcc21.MatListModule, ɵngcc25.MatGridListModule, ɵngcc22.MatCardModule, ɵngcc26.MatMenuModule, ɵngcc2.MatInputModule, ɵngcc15.MatSelectModule, ɵngcc27.MatRadioModule, ɵngcc28.MatProgressSpinnerModule, ɵngcc9.MatTableModule, ɵngcc29.MatPaginatorModule, ɵngcc10.MatSortModule, ɵngcc7.MatDialogModule, ɵngcc30.MatTabsModule, ɵngcc12.MatDatepickerModule, ɵngcc16.MatNativeDateModule, ɵngcc31.MatStepperModule, ɵngcc32.MatChipsModule, ɵngcc33.DragDropModule, ɵngcc14.MatTreeModule], exports: [InputWithButtonComponent, ToastHelisaComponent, AlertHelisaComponent, DependencyTableHelisaComponent, InputHelisaComponent, TableHelisaComponent, TreeHelisaComponent, DateHelisaComponent, AutocompleteHelisaComponent, OptionsScrollDirective, HelTooltipDirective, ExternalLinkDirective, ExternalLinkPipe, ɵngcc8.MatButtonModule, ɵngcc18.MatCheckboxModule, ɵngcc19.MatToolbarModule, ɵngcc20.MatExpansionModule, ɵngcc1.MatFormFieldModule, ɵngcc2.MatInputModule, ɵngcc15.MatSelectModule, ɵngcc16.MatOptionModule, ɵngcc21.MatListModule, ɵngcc4.MatIconModule, ɵngcc6.MatSnackBarModule, ɵngcc22.MatCardModule, ɵngcc23.LayoutModule, ɵngcc11.MatTooltipModule, ɵngcc8.MatButtonModule, ɵngcc24.MatSidenavModule, ɵngcc4.MatIconModule, ɵngcc21.MatListModule, ɵngcc25.MatGridListModule, ɵngcc22.MatCardModule, ɵngcc26.MatMenuModule, ɵngcc2.MatInputModule, ɵngcc15.MatSelectModule, ɵngcc27.MatRadioModule, ɵngcc28.MatProgressSpinnerModule, ɵngcc9.MatTableModule, ɵngcc29.MatPaginatorModule, ɵngcc10.MatSortModule, ɵngcc7.MatDialogModule, ɵngcc30.MatTabsModule, ɵngcc12.MatDatepickerModule, ɵngcc16.MatNativeDateModule, ɵngcc31.MatStepperModule, ɵngcc32.MatChipsModule, ɵngcc33.DragDropModule, ɵngcc14.MatTreeModule, ComboBoxHelisaComponent, PagingTreeHelisaComponent, AlertInformationDataHelisaComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HelisaLibModule, [{
        type: i0.NgModule,
        args: [{
                declarations: [
                    InputWithButtonComponent,
                    ToastHelisaComponent,
                    AlertHelisaComponent,
                    DependencyTableHelisaComponent,
                    InputHelisaComponent,
                    TableHelisaComponent,
                    TreeHelisaComponent,
                    DateHelisaComponent,
                    AutocompleteHelisaComponent,
                    OptionsScrollDirective,
                    HelTooltipDirective,
                    ExternalLinkDirective,
                    ExternalLinkPipe,
                    ComboBoxHelisaComponent,
                    PagingTreeHelisaComponent,
                    AlertInformationDataHelisaComponent
                ],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    autocomplete.MatAutocompleteModule,
                    button.MatButtonModule,
                    checkbox.MatCheckboxModule,
                    toolbar.MatToolbarModule,
                    expansion.MatExpansionModule,
                    formField.MatFormFieldModule,
                    input.MatInputModule,
                    select.MatSelectModule,
                    core.MatOptionModule,
                    list.MatListModule,
                    icon.MatIconModule,
                    i1.MatSnackBarModule,
                    card.MatCardModule,
                    layout.LayoutModule,
                    tooltip.MatTooltipModule,
                    button.MatButtonModule,
                    sidenav.MatSidenavModule,
                    icon.MatIconModule,
                    list.MatListModule,
                    gridList.MatGridListModule,
                    card.MatCardModule,
                    menu.MatMenuModule,
                    input.MatInputModule,
                    select.MatSelectModule,
                    radio.MatRadioModule,
                    progressSpinner.MatProgressSpinnerModule,
                    table.MatTableModule,
                    paginator.MatPaginatorModule,
                    sort.MatSortModule,
                    i1$1.MatDialogModule,
                    tabs.MatTabsModule,
                    datepicker.MatDatepickerModule,
                    core.MatNativeDateModule,
                    stepper.MatStepperModule,
                    chips.MatChipsModule,
                    dragDrop.DragDropModule,
                    tree$1.MatTreeModule
                ],
                exports: [
                    InputWithButtonComponent,
                    ToastHelisaComponent,
                    AlertHelisaComponent,
                    DependencyTableHelisaComponent,
                    InputHelisaComponent,
                    TableHelisaComponent,
                    TreeHelisaComponent,
                    DateHelisaComponent,
                    AutocompleteHelisaComponent,
                    OptionsScrollDirective,
                    HelTooltipDirective,
                    ExternalLinkDirective,
                    ExternalLinkPipe,
                    button.MatButtonModule,
                    checkbox.MatCheckboxModule,
                    toolbar.MatToolbarModule,
                    expansion.MatExpansionModule,
                    formField.MatFormFieldModule,
                    input.MatInputModule,
                    select.MatSelectModule,
                    core.MatOptionModule,
                    list.MatListModule,
                    icon.MatIconModule,
                    i1.MatSnackBarModule,
                    card.MatCardModule,
                    layout.LayoutModule,
                    tooltip.MatTooltipModule,
                    button.MatButtonModule,
                    sidenav.MatSidenavModule,
                    icon.MatIconModule,
                    list.MatListModule,
                    gridList.MatGridListModule,
                    card.MatCardModule,
                    menu.MatMenuModule,
                    input.MatInputModule,
                    select.MatSelectModule,
                    radio.MatRadioModule,
                    progressSpinner.MatProgressSpinnerModule,
                    table.MatTableModule,
                    paginator.MatPaginatorModule,
                    sort.MatSortModule,
                    i1$1.MatDialogModule,
                    tabs.MatTabsModule,
                    datepicker.MatDatepickerModule,
                    core.MatNativeDateModule,
                    stepper.MatStepperModule,
                    chips.MatChipsModule,
                    dragDrop.DragDropModule,
                    tree$1.MatTreeModule,
                    ComboBoxHelisaComponent,
                    PagingTreeHelisaComponent,
                    AlertInformationDataHelisaComponent
                ],
                providers: [TableHelisaService, TreeHelisaService]
            }]
    }], function () { return []; }, null); })();
        return HelisaLibModule;
    }());

    var AlertInformationDataHelisaService = /** @class */ (function () {
        function AlertInformationDataHelisaService(dialog) {
            this.dialog = dialog;
        }
        AlertInformationDataHelisaService.prototype.openDialog = function (alertType, title, content, okLabel, cancelLabel) {
            var dialogRef = this.dialog.open(AlertInformationDataHelisaComponent, {
                width: '250px',
                data: { alertType: alertType, title: title, content: content, okLabel: okLabel, cancelLabel: cancelLabel }
            });
            return dialogRef.afterClosed();
        };
AlertInformationDataHelisaService.ɵfac = function AlertInformationDataHelisaService_Factory(t) { return new (t || AlertInformationDataHelisaService)(ɵngcc0.ɵɵinject(ɵngcc7.MatDialog)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertInformationDataHelisaService, [{
        type: i0.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc7.MatDialog }]; }, null); })();
        return AlertInformationDataHelisaService;
    }());
    AlertInformationDataHelisaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlertInformationDataHelisaService_Factory() { return new AlertInformationDataHelisaService(i0.ɵɵinject(i1$1.MatDialog)); }, token: AlertInformationDataHelisaService, providedIn: "root" });
    AlertInformationDataHelisaService.ctorParameters = function () { return [
        { type: i1$1.MatDialog }
    ]; };

    /*
     * Public API Surface of helisa-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AlertHelisaComponent = AlertHelisaComponent;
    exports.AlertHelisaService = AlertHelisaService;
    exports.AlertInformationDataHelisaComponent = AlertInformationDataHelisaComponent;
    exports.AlertInformationDataHelisaService = AlertInformationDataHelisaService;
    exports.AutocompleteHelisaComponent = AutocompleteHelisaComponent;
    exports.AutocompleteHelisaService = AutocompleteHelisaService;
    exports.ColumnConfigUtil = ColumnConfigUtil;
    exports.ComboBoxHelisaComponent = ComboBoxHelisaComponent;
    exports.DateHelisaComponent = DateHelisaComponent;
    exports.DependencyTableHelisaComponent = DependencyTableHelisaComponent;
    exports.DependencyTableHelisaService = DependencyTableHelisaService;
    exports.HelTooltipDirective = HelTooltipDirective;
    exports.HelisaLibModule = HelisaLibModule;
    exports.InputHelisaComponent = InputHelisaComponent;
    exports.InputWithButtonComponent = InputWithButtonComponent;
    exports.OptionsScrollDirective = OptionsScrollDirective;
    exports.PagingTreeHelisaComponent = PagingTreeHelisaComponent;
    exports.TableHelisaComponent = TableHelisaComponent;
    exports.TableHelisaService = TableHelisaService;
    exports.ToastHelisaComponent = ToastHelisaComponent;
    exports.ToastHelisaService = ToastHelisaService;
    exports.TreeHelisaComponent = TreeHelisaComponent;
    exports.TreeHelisaConnect = TreeHelisaConnect;
    exports.TreeHelisaService = TreeHelisaService;
    exports.ɵa = ExternalLinkDirective;
    exports.ɵb = ExternalLinkPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=helisa-lib.umd.js.map