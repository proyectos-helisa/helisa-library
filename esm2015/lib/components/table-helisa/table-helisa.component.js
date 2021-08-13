import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ChangeColumnConfigurationType, ColumnConfigUtil, EventScope, TableHelisaType, TotalType, ColumnType } from './table-helisa.interface';
import { TableHelisaService } from './table-helisa.service';
import { TableHelisaConnectComponent } from './table-helisa-connect.component';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './table-helisa.service';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@angular/material/table';
import * as ɵngcc4 from '@angular/material/sort';
import * as ɵngcc5 from '../input-helisa/input-helisa.component';
import * as ɵngcc6 from '../../directives/tooltip.directive';
import * as ɵngcc7 from '@angular/material/button';
import * as ɵngcc8 from '../../directives/external-link.directive';
import * as ɵngcc9 from '@angular/material/tooltip';
import * as ɵngcc10 from '../../pipes/external-link.pipe';

const _c0 = ["containerTable"];
function TableHelisaComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 12);
    ɵngcc0.ɵɵlistener("click", function TableHelisaComponent_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onAddRow(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.addRowButton.text);
} }
function TableHelisaComponent_hel_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "hel-input", 13);
    ɵngcc0.ɵɵlistener("setValue", function TableHelisaComponent_hel_input_2_Template_hel_input_setValue_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.searchText($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("isSearch", true);
} }
function TableHelisaComponent_ng_container_6_ng_container_2_div_1_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r17 = ɵngcc0.ɵɵnextContext(3).$implicit;
    const ctx_r26 = ɵngcc0.ɵɵnextContext();
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
    const column_r17 = ɵngcc0.ɵɵnextContext(3).$implicit;
    const ctx_r28 = ɵngcc0.ɵɵnextContext();
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
    const column_r17 = ɵngcc0.ɵɵnextContext().$implicit;
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
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 25);
    ɵngcc0.ɵɵlistener("click", function TableHelisaComponent_ng_container_6_ng_container_3_td_2_Template_td_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r37); const element_r33 = ctx.$implicit; const column_r17 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r35 = ɵngcc0.ɵɵnextContext(); return ctx_r35.selectedCell(element_r33, column_r17); });
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_6_ng_container_3_td_2_button_1_Template, 3, 0, "button", 26);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    const ctx_r32 = ɵngcc0.ɵɵnextContext(3);
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
    const element_r38 = ɵngcc0.ɵɵnextContext().$implicit;
    const column_r17 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r39 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("href", ɵngcc0.ɵɵpipeBind1(1, 2, ctx_r39.getValue(element_r38.data, column_r17)), ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r39.getValue(element_r38.data, column_r17));
} }
function TableHelisaComponent_ng_container_6_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 29);
    ɵngcc0.ɵɵlistener("dblclick", function TableHelisaComponent_ng_container_6_td_4_Template_td_dblclick_0_listener() { ɵngcc0.ɵɵrestoreView(_r43); const ctx_r42 = ɵngcc0.ɵɵnextContext(2); return ctx_r42.dblClickCell(); })("click", function TableHelisaComponent_ng_container_6_td_4_Template_td_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r43); const element_r38 = ctx.$implicit; const column_r17 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r44 = ɵngcc0.ɵɵnextContext(); return ctx_r44.selectedCell(element_r38, column_r17); });
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_6_td_4_a_1_Template, 3, 4, "a", 30);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    const column_r17 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r21 = ɵngcc0.ɵɵnextContext();
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
    const idx_r18 = ɵngcc0.ɵɵnextContext().index;
    const ctx_r22 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r22.totalData[idx_r18], " ");
} }
function TableHelisaComponent_ng_container_6_ng_container_6_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 35);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r17 = ɵngcc0.ɵɵnextContext(2).$implicit;
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
    const idx_r18 = ɵngcc0.ɵɵnextContext().index;
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
    const column_r17 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
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
    const group_r51 = ctx.$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
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
    const element_r55 = ctx.$implicit;
    const ctx_r56 = ɵngcc0.ɵɵnextContext();
    const column_r52 = ctx_r56.$implicit;
    const i_r53 = ctx_r56.index;
    const ctx_r54 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r54.getGroupValue(column_r52, element_r55.data[i_r53]), " ");
} }
function TableHelisaComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 33);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_9_td_1_Template, 3, 1, "td", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r52 = ctx.$implicit;
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
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
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
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
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
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matHeaderRowDef", ctx_r8.displayedColumnsWithSubtitle);
} }
function TableHelisaComponent_ng_container_13_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "tr", 44);
    ɵngcc0.ɵɵlistener("click", function TableHelisaComponent_ng_container_13_tr_1_Template_tr_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r63); const row_r61 = ctx.$implicit; const ctx_r62 = ɵngcc0.ɵɵnextContext(2); return ctx_r62.selectRow(row_r61, true); })("dragstart", function TableHelisaComponent_ng_container_13_tr_1_Template_tr_dragstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r63); const ctx_r64 = ɵngcc0.ɵɵnextContext(2); return ctx_r64.startDrag($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r61 = ctx.$implicit;
    const ctx_r60 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("selected-row", row_r61.data === ctx_r60.selectedObject && !ctx_r60.isCellSelection);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r60.getClassToRow(row_r61.data))("draggable", true);
} }
function TableHelisaComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_13_tr_1_Template, 1, 4, "tr", 43);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matRowDefColumns", ctx_r9.displayedColumns)("matRowDefWhen", ctx_r9.isRow);
} }
function TableHelisaComponent_ng_container_14_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 46);
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    const ctx_r65 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("selected-row", row_r66.data === ctx_r65.selectedObject && !ctx_r65.isCellSelection);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r65.getClassToRow(row_r66.data));
} }
function TableHelisaComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TableHelisaComponent_ng_container_14_tr_1_Template, 1, 3, "tr", 45);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matRowDefColumns", ctx_r10.displayedColumns)("matRowDefWhen", ctx_r10.isRow);
} }
function TableHelisaComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 47);
} }
function TableHelisaComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "tr", 47);
} }
const _c1 = function () { return ["groupHeader"]; };
var RowType;
(function (RowType) {
    RowType[RowType["GROUP_TITLE"] = 0] = "GROUP_TITLE";
    RowType[RowType["GROUP_FOOTER"] = 1] = "GROUP_FOOTER";
    RowType[RowType["ROW"] = 2] = "ROW";
})(RowType || (RowType = {}));
export class TableHelisaComponent {
    constructor(tableService) {
        this.tableService = tableService;
        this.data = new MatTableDataSource([]);
        this.displayedColumns = [];
        this.displayedColumnsWithTitle = [];
        this.displayedColumnsWithSubtitle = [];
        this.displayedColumnsWithFooter = [];
        this.type = TableHelisaType.LOCAL;
        this.scrollCount = 0;
        this.hasSubtitle = false;
        this.indexRowStartDrag = -1;
        this.lastIndexRowDrag = -1;
        this.dataBeforeDrag = null;
        this.dataSource$ = [];
        this.scrollX = 0;
        this.scrollY = 0;
        this.sort = new EventEmitter();
        this.total = new EventEmitter();
        this.search = new EventEmitter();
        /**
         * Deprecado, cambiar por electObject
         */
        this.select = new EventEmitter();
        this.selectCell = new EventEmitter();
        this.selectObject = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.showTitle = true;
        this.isCellSelection = false;
        this.drop = new EventEmitter();
        this.isDragged = false;
        this.addRowButton = { showButton: false, text: '' };
        this.addRow = new EventEmitter();
        this.bookClicked = new EventEmitter();
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
    ngOnInit() {
        this.reloadColumnConfig();
        this.tableService.nextPageReturn.subscribe((data) => {
            if (!data.table || data.table === this) {
                this.receivePage(data.obj);
            }
        });
        this.tableService.totalReturn.subscribe((info) => {
            if (info) {
                this.columnConfig.forEach((column, idx) => {
                    if (column === info.obj.column) {
                        this.totalData[idx] = this.getGroupValue(column, { sum: info.obj.value, count: this.count });
                    }
                });
            }
        });
        this.matSort.sortChange.subscribe((event) => {
            const column = this.columnConfig.find((c) => c.name === event.active);
            column.sortDirection = event.direction;
            this.sort.emit({ column, columnConfigurations: this.columnConfig, type: ChangeColumnConfigurationType.SORT });
        });
        this.tableService.emitVisibleButton.subscribe((data) => {
            if (data !== undefined && data != null) {
                this.addRowButton.showButton = data;
            }
        });
        this.reload();
    }
    ngAfterViewInit() {
        if (this.isCellSelection) {
            this.matTable.renderRows();
        }
    }
    set isRemote(w) {
        this.type = w ? TableHelisaType.REMOTE : TableHelisaType.LOCAL;
        this.tableHelisaConnectComponent = new TableHelisaConnectComponent();
        if (this.type === TableHelisaType.REMOTE) {
            this.goNextPage();
        }
        else {
            this.tableHelisaConnectComponent.page++;
        }
    }
    set columnConfiguration(columnConfiguration) {
        this.columnConfig = columnConfiguration;
        this.reload();
        this.reloadColumnConfig();
    }
    set dataSource(dataSource) {
        this.dataSource$ = dataSource;
        this.rawData = dataSource;
        this.reload();
    }
    get dataSource() {
        return this.dataSource$;
    }
    set selectedIndexRow(idRowSelected) {
        this.indexRowSelect = idRowSelected;
        if (this.rawData && this.rawData.length) {
            if ((idRowSelected >= this.rawData.length || idRowSelected < 0)) {
                this.indexRowSelect = 0;
            }
            this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
        }
    }
    reloadColumnConfig() {
        this.hasSubtitle = false;
        this.displayedColumns.splice(0, this.displayedColumns.length);
        if (this.columnConfig) {
            if (this.addBookButton) {
                const columnCount = this.columnConfig.length;
                let countSubtitle = 0;
                let showBookButton = false;
                this.columnConfig.forEach((column) => {
                    if (!!column.subtitle) {
                        countSubtitle = countSubtitle + 1;
                    }
                    if ((!showBookButton) && (column.name === 'bookButton')) {
                        showBookButton = true;
                    }
                });
                const subtitleTemp = columnCount === countSubtitle;
                if (!showBookButton) {
                    this.columnConfig.push({
                        name: 'bookButton',
                        title: '',
                        subtitle: subtitleTemp ? '' : undefined,
                        visible: true
                    });
                }
            }
            this.columnConfig.forEach((column) => {
                if (column.visible) {
                    this.displayedColumns.push(column.name);
                }
                if (!this.hasSubtitle) {
                    this.hasSubtitle = column.subtitle !== undefined;
                }
            });
            if (this.rawData) {
                this.dataSource = this.rawData;
            }
        }
        this.displayedColumnsWithTitle.splice(0, this.displayedColumnsWithTitle.length);
        this.displayedColumnsWithSubtitle.splice(0, this.displayedColumnsWithSubtitle.length);
        this.displayedColumnsWithFooter.splice(0, this.displayedColumnsWithFooter.length);
        this.getColumnsWithTitle().forEach((col) => this.displayedColumnsWithTitle.push(col));
        this.getHeaderSubtitle().forEach((col) => this.displayedColumnsWithSubtitle.push(col));
        this.footerDisplayedColumns().forEach((col) => this.displayedColumnsWithFooter.push(col));
    }
    reload() {
        if (this.columnConfig) {
            const changeData = Array();
            let haveGroup = false;
            let groupFooter;
            this.columnConfig.forEach((column) => {
                if (column.totalType !== undefined && (this.type === TableHelisaType.LOCAL || this.tableHelisaConnectComponent.page <= 1)) {
                    this.totalData = new Array(this.columnConfig.length);
                    this.showFooter = true;
                    this.total.emit({ column, columnConfigurations: this.columnConfig, type: ChangeColumnConfigurationType.TOTAL });
                }
                this.showSearch = this.showSearch || column.searchable;
                haveGroup = haveGroup || column.groupable;
            });
            if (haveGroup) {
                this.rawData = this.rawData.sort((a, b) => {
                    let result = 0;
                    this.columnConfig.forEach((column) => {
                        if (result === 0) {
                            result = this.compare(a, b);
                        }
                    });
                    return result;
                });
            }
            if (this.rawData) {
                this.rawData.forEach((row) => {
                    if (haveGroup && (changeData.length === 0 || this.compare(changeData[changeData.length - 1].data, row) !== 0)) {
                        if (groupFooter) {
                            changeData.push({ data: groupFooter, rowType: RowType.GROUP_FOOTER });
                        }
                        changeData.push({ data: row, rowType: RowType.GROUP_TITLE });
                        groupFooter = new Array(this.columnConfig.length);
                    }
                    if (haveGroup) {
                        this.addTotalGroup(groupFooter, row);
                    }
                    changeData.push({ data: row, rowType: RowType.ROW });
                });
                this.data = new MatTableDataSource(changeData);
            }
            if (this.rawData && this.rawData.length && this.indexRowSelect && !this.selectedObject) {
                if (this.indexRowSelect >= this.rawData.length || this.indexRowSelect < 0) {
                    this.indexRowSelect = 0;
                }
                this.selectRow({ data: this.rawData[this.indexRowSelect], rowType: RowType.ROW }, false);
            }
        }
    }
    addTotalGroup(rowTotal, row) {
        this.columnConfig.forEach((column, index) => {
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
    }
    compare(a, b) {
        let ws = 0;
        this.columnConfig.forEach((column) => {
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
    }
    getGroupDescription(obj) {
        let result = '';
        this.columnConfig.forEach((column) => {
            if (column.groupable) {
                result += (result.length ? ' - ' : '') + (new ColumnConfigUtil().getValue(obj, column));
            }
        });
        return result;
    }
    isGroupTitle(index, item) {
        return item.rowType === RowType.GROUP_TITLE;
    }
    isRow(index, item) {
        return item.rowType === RowType.ROW;
    }
    isGroupFooter(index, item) {
        return item.rowType === RowType.GROUP_FOOTER;
    }
    footerDisplayedColumns() {
        return this.displayedColumns.map((name) => 'footer-' + name);
    }
    getGroupValue(column, data) {
        if (column.totalType === TotalType.SUM) {
            return data.sum;
        }
        if (column.totalType === TotalType.COUNT) {
            return data.count;
        }
        if (column.totalType === TotalType.AVERAGE) {
            return 1. * data.sum / data.count;
        }
        return undefined;
    }
    getValue(obj, column) {
        return new ColumnConfigUtil().getValue(obj, column);
    }
    getValueTooltip(obj, column) {
        if (this.showToolTip) {
            return new ColumnConfigUtil().getValue(obj, column);
        }
        else {
            return null;
        }
    }
    searchText(text) {
        this.lastSearch = text;
        this.search.emit({ text, columnConfigurations: this.columnConfig });
    }
    selectRow(row, isUser, column) {
        if (row === undefined || row === null) {
            return;
        }
        if ((column === undefined || column === null) || (!!column && column.name !== 'bookButton')) {
            this.selectedObject = row.data;
            this.select.emit(this.selectedObject);
            this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
        }
        else if (!!column && column.name === 'bookButton') {
            if (this.selectedObject !== row.data) {
                this.selectedObject = row.data;
                this.select.emit(this.selectedObject);
                this.selectObject.emit({ value: this.selectedObject, scope: isUser ? EventScope.USER : EventScope.CODE_CALL });
            }
            this.bookClicked.emit(this.selectedObject);
        }
    }
    onScroll(event) {
        const element = event.target;
        let isScrollY;
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
    }
    goNextPage() {
        if (!this.tableHelisaConnectComponent.isLastPage && !this.tableHelisaConnectComponent.isUsed) {
            this.tableHelisaConnectComponent.isUsed = true;
            this.nextPage.emit({
                page: this.tableHelisaConnectComponent.nextPage(),
                body: this.tableHelisaConnectComponent.getBody(this.columnConfig, this.lastSearch)
            });
        }
    }
    receivePage(data) {
        if (!this.rawData) {
            this.rawData = new Array();
        }
        this.rawData = this.rawData.concat(data);
        this.dataSource = this.rawData;
        this.tableHelisaConnectComponent.isLastPage = data.length === 0;
        this.tableHelisaConnectComponent.isUsed = false;
    }
    dblClickCell() {
        this.selectCell.emit(this.selectedCells);
    }
    selectedCell(element, column) {
        this.selectRow(element, true, column);
        this.selectedCells = { column, row: element };
        this.selectCell.emit(this.selectedCells);
    }
    isSelectedCell(row, column) {
        if (this.isCellSelection) {
            if (this.selectedCells != null) {
                if (this.selectedCells.column.name === column.name &&
                    this.selectedCells.row.data === row.data) {
                    return true;
                }
            }
        }
        return false;
    }
    getClassToCell(row, column) {
        const classToCell = new Array();
        if (this.configCellStyles) {
            const found = this.configCellStyles.find((c) => {
                return c.cellData === this.getValue(row, column);
            });
            if (found) {
                classToCell.push(found.classCell);
            }
        }
        if (column.columnStyle) {
            classToCell.push(column.columnStyle);
        }
        return classToCell;
    }
    getClassToColumn() {
        return this.configColumnClass;
    }
    getClassToRow(row) {
        const classToRow = new Array();
        if (row === this.selectedObject && !this.isCellSelection) {
            classToRow.push('');
        }
        if (this.configRowStylesFromColumn) {
            const found = this.configRowStylesFromColumn.find((c) => {
                return c.data === this.getValue(row, c.column);
            });
            if (found) {
                classToRow.push(found.classRow);
            }
        }
        return classToRow;
    }
    onDrop(event) {
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            const rowIndex = this.getRowIndex(event.pageY);
            const array = this.dataBeforeDrag.data;
            const rawData = this.rawData;
            moveItemInArray(array, this.indexRowStartDrag, rowIndex);
            moveItemInArray(rawData, this.indexRowStartDrag, rowIndex);
            this.drop.emit({ value: array[rowIndex].data, order: rowIndex });
            this.rawData = rawData;
            this.data = new MatTableDataSource(array);
            event.stopPropagation();
        }
    }
    tableKeydown(event) {
        if (!this.isCellSelection) {
            let currentIndex = this.data.data.findIndex((row) => row.data === this.selectedObject);
            let newSelection = -10;
            if (event.key === 'ArrowDown') {
                this.scrollCount++;
                this.data.data.forEach((row, index) => {
                    if (newSelection === -10 && index > currentIndex && row.rowType === RowType.ROW) {
                        newSelection = index;
                    }
                });
            }
            if (event.key === 'ArrowUp') {
                this.scrollCount--;
                currentIndex = this.data.data.length - currentIndex - 1;
                this.data.data.reverse().forEach((row, index) => {
                    if (newSelection === -10 && index > currentIndex && row.rowType === RowType.ROW) {
                        newSelection = index;
                    }
                });
                this.data.data.reverse();
                if (newSelection !== -10) {
                    newSelection = this.data.data.length - newSelection - 1;
                }
            }
            if (newSelection !== -10) {
                this.selectRow(this.data.data[newSelection], true);
            }
            if (Math.abs(this.scrollCount) >= 2) {
                this.scrollCount = 0;
            }
            else {
                event.preventDefault();
            }
        }
    }
    /**
     * Emite el evento cuando se da click al boton AddRow
     */
    onAddRow() {
        this.addRow.emit();
    }
    getHeaderSubtitle() {
        const x = this.columnConfig.map((column, index) => {
            if (column.visible && column.subtitle !== undefined) {
                return 'subtitle' + index;
            }
            else {
                return null;
            }
        }).filter((data) => data != null);
        return x;
    }
    getColumnsWithTitle() {
        return this.columnConfig.filter((column) => column.visible && column.title !== undefined).map((col) => col.name);
    }
    dragger(event) {
        if (this.isDragged && this.indexRowStartDrag >= 0) {
            const rowIndex = this.getRowIndex(event.pageY);
            if (rowIndex !== this.lastIndexRowDrag) {
                this.lastIndexRowDrag = rowIndex;
                // This can have a memory problem with big data
                const array = [...this.dataBeforeDrag.data];
                moveItemInArray(array, this.indexRowStartDrag, rowIndex);
                this.data = new MatTableDataSource(array);
            }
            event.preventDefault();
            return true;
        }
    }
    startDrag(event) {
        this.indexRowStartDrag = this.getRowIndex(event.pageY);
        this.lastIndexRowDrag = this.indexRowStartDrag;
        this.dataBeforeDrag = this.data;
    }
    getRowIndex(pageY) {
        let offsetTop = 0;
        let container = this.containerTable.nativeElement;
        while ((container !== null) && (offsetTop === 0)) {
            offsetTop = container.offsetTop;
            container = container.parentElement;
        }
        let rowIndex = -1;
        const rows = this.matTableElement.nativeElement.children[1].children;
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (pageY - offsetTop > row.offsetTop - this.containerTable.nativeElement.scrollTop) {
                rowIndex = i;
            }
        }
        if (rowIndex < 0) {
            rowIndex = 0;
        }
        return rowIndex;
    }
    get columnType() {
        return ColumnType;
    }
}
TableHelisaComponent.ɵfac = function TableHelisaComponent_Factory(t) { return new (t || TableHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.TableHelisaService)); };
TableHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableHelisaComponent, selectors: [["hel-table"]], viewQuery: function TableHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(MatSort, true);
        ɵngcc0.ɵɵstaticViewQuery(MatTable, true);
        ɵngcc0.ɵɵstaticViewQuery(MatTable, true, ElementRef);
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
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
        ɵngcc0.ɵɵproperty("matRowDefColumns", ɵngcc0.ɵɵpureFunction0(15, _c1))("matRowDefWhen", ctx.isGroupTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("matRowDefColumns", ctx.displayedColumnsWithFooter)("matRowDefWhen", ctx.isGroupFooter);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.MatTable, ɵngcc4.MatSort, ɵngcc2.NgClass, ɵngcc2.NgForOf, ɵngcc3.MatColumnDef, ɵngcc3.MatCellDef, ɵngcc3.MatRowDef, ɵngcc5.InputHelisaComponent, ɵngcc3.MatFooterCellDef, ɵngcc3.MatHeaderCellDef, ɵngcc3.MatHeaderCell, ɵngcc6.HelTooltipDirective, ɵngcc4.MatSortHeader, ɵngcc3.MatCell, ɵngcc7.MatButton, ɵngcc8.ExternalLinkDirective, ɵngcc3.MatFooterCell, ɵngcc9.MatTooltip, ɵngcc3.MatFooterRowDef, ɵngcc3.MatFooterRow, ɵngcc3.MatHeaderRowDef, ɵngcc3.MatHeaderRow, ɵngcc3.MatRow], pipes: [ɵngcc10.ExternalLinkPipe], styles: ["table[_ngcontent-%COMP%]{table-layout:fixed}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:26px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:auto;line-height:inherit}tfoot[_ngcontent-%COMP%]{display:none}tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{box-shadow:inset 0 1px 0 0 #b7b7b7}  hel-table{position:relative}  hel-table>button{align-items:flex-start;background:transparent;border:none;color:transparent;cursor:pointer;display:flex;height:26px;justify-content:center;opacity:.5;overflow:hidden;position:absolute;right:0;top:0;width:20px;z-index:101}  hel-table>button:focus{outline:none}  hel-table>button:hover{opacity:1}  hel-table>button:before{align-items:center;color:#fff;content:\"+\";display:flex;font-size:20px;height:26px;justify-content:center;position:absolute;width:20px}  hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}  hel-table .buttons-container{order:2}  hel-table .buttons-container.hasSubtitle,   hel-table .buttons-container.hasTitle{padding-top:26px}  hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}  hel-table .buttons-container>div{height:26px}  hel-table .buttons-container>div button{align-items:center;display:flex;height:26px;justify-content:center}  hel-table .buttons-container>div button>*{display:flex;height:100%}  hel-table .div-table-helisa{height:100%}  hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}  hel-table .div-table-helisa .container-table .table-helisa{width:100%}  hel-table .div-table-helisa .container-table .table-helisa   table{table-layout:fixed}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr,   hel-table .div-table-helisa .container-table .table-helisa   tfoot tr,   hel-table .div-table-helisa .container-table .table-helisa   thead tr{height:26px}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr td,   hel-table .div-table-helisa .container-table .table-helisa   tbody tr th,   hel-table .div-table-helisa .container-table .table-helisa   tfoot tr td,   hel-table .div-table-helisa .container-table .table-helisa   tfoot tr th,   hel-table .div-table-helisa .container-table .table-helisa   thead tr td,   hel-table .div-table-helisa .container-table .table-helisa   thead tr th{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}  hel-table .div-table-helisa .container-table .table-helisa   thead tr th{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr td{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr td button{height:auto;line-height:inherit}  hel-table .div-table-helisa .container-table .table-helisa   tfoot{display:none}  hel-table .div-table-helisa .container-table .table-helisa   tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}  hel-table .div-table-helisa .container-table .table-helisa .selected-row{background:silver;font-weight:700}"] });
TableHelisaComponent.ctorParameters = () => [
    { type: TableHelisaService }
];
TableHelisaComponent.propDecorators = {
    matSort: [{ type: ViewChild, args: [MatSort, { static: true },] }],
    matTable: [{ type: ViewChild, args: [MatTable, { static: true },] }],
    matTableElement: [{ type: ViewChild, args: [MatTable, { read: ElementRef, static: true },] }],
    containerTable: [{ type: ViewChild, args: ['containerTable', { static: true },] }],
    sort: [{ type: Output }],
    total: [{ type: Output }],
    search: [{ type: Output }],
    select: [{ type: Output }],
    selectCell: [{ type: Output }],
    selectObject: [{ type: Output }],
    nextPage: [{ type: Output }],
    showTitle: [{ type: Input }],
    isCellSelection: [{ type: Input }],
    count: [{ type: Input }],
    configCellStyles: [{ type: Input }],
    configRowStylesFromColumn: [{ type: Input }],
    configColumnClass: [{ type: Input }],
    selectedCells: [{ type: Input }],
    drop: [{ type: Output }],
    isDragged: [{ type: Input }],
    addRowButton: [{ type: Input }],
    addRow: [{ type: Output }],
    bookClicked: [{ type: Output }],
    addBookButton: [{ type: Input }],
    showToolTip: [{ type: Input }],
    hideDelay: [{ type: Input }],
    showDelay: [{ type: Input }],
    isRemote: [{ type: Input }],
    columnConfiguration: [{ type: Input }],
    dataSource: [{ type: Input }],
    selectedIndexRow: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-table',
                template: "<button *ngIf=\"!!addRowButton && addRowButton.showButton\" (click)=\"onAddRow()\">{{addRowButton.text}}</button>\n<div class=\"div-table-helisa\">\n  <hel-input (setValue)=\"searchText($event)\" [isSearch]=\"true\" *ngIf=\"showSearch\"></hel-input>\n  <div class=\"container-table\" (scroll)=\"onScroll($event)\" #containerTable>\n\n    <table [ngClass]=\"getClassToColumn()\" mat-table [dataSource]=\"data\" class=\"table-helisa\" matSort\n      matTable (keydown)=\"tableKeydown($event)\" tabindex=\"0\" (drop)=\"onDrop($event)\" (dragover)=\"dragger($event)\">\n      <ng-container *ngFor=\"let column of columnConfig; let idx = index\">\n        <ng-container [matColumnDef]=\"column.name\" [stickyEnd]=\"column.name === 'bookButton'\">\n          <ng-container *ngIf=\"column.title != undefined\">\n            <div *ngIf=\"!column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\" [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef [attr.colspan]=\"column.colspanTitle\">\n                {{column.title}} </th>\n            </div>\n            <div *ngIf=\"column.sortable\">\n              <th mat-header-cell [helTooltip]=\"column.title\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matHeaderCellDef mat-sort-header\n                [attr.colspan]=\"column.colspanTitle\"> {{column.title}} </th>\n            </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"addBookButton && column.name === 'bookButton'\"> \n                  <th mat-header-cell *matHeaderCellDef ></th>\n                  <td mat-cell *matCellDef=\"let element;\" (click)=\"selectedCell(element, column)\">\n                    <button mat-icon-button *ngIf=\"element.data === selectedObject\">\n                      <i class=\"material-icons-outlined\">description</i>\n                    </button>\n                  </td>\n          </ng-container>\n\n          <td mat-cell [helTooltip]=\"getValueTooltip(element.data, column)\"  [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\" *matCellDef=\"let element\"\n            (dblclick)=\"dblClickCell()\" (click)=\"selectedCell(element, column)\"\n            [class.selected-row]=\"isSelectedCell(element, column)\" [ngClass]=\"getClassToCell(element.data, column)\">\n            <a [href]=\"getValue(element.data, column) | externalLink\" *ngIf=\"column.columnType == columnType.URL\">{{ getValue(element.data, column) }}</a>\n            {{ column.columnType != columnType.URL?getValue(element.data, column):\"\" }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef> <strong>{{ totalData[idx] }} </strong></td>\n        </ng-container>\n\n        <ng-container [matColumnDef]=\"'subtitle' + idx\" *ngIf=\"column.subtitle != undefined\">\n          <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"column.colspanSubtitle\" [matTooltip]=\"column.subtitle\">\n            {{column.subtitle}}</th>\n        </ng-container>\n      </ng-container>\n \n      <ng-container matColumnDef=\"groupHeader\">\n        <td mat-cell *matCellDef=\"let group\">\n          <strong>{{ getGroupDescription(group.data) }}</strong>\n        </td>\n      </ng-container>\n\n      <ng-container [matColumnDef]=\"'footer-'+column.name\" *ngFor=\"let column of columnConfig; let i= index\">\n        <td mat-cell *matCellDef=\"let element\"> <strong>{{ getGroupValue(column, element.data[i]) }} </strong></td>\n      </ng-container>\n\n      <ng-container *ngIf=\"showFooter && displayedColumnsWithFooter.length > 0\">\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns;sticky:true\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"showTitle && displayedColumnsWithTitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithTitle;sticky: true\" class=\"hw-head-title\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"displayedColumnsWithSubtitle.length > 0\">\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWithSubtitle\" class=\"hw-head-subtitle\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          (click)=\"selectRow(row, true)\" [class.selected-row]=\"row.data === selectedObject && !isCellSelection\"\n          [ngClass]=\"getClassToRow(row.data)\" [draggable]=\"true\" (dragstart)=\"startDrag($event)\"></tr>\n      </ng-container>\n      <ng-container *ngIf=\"!isDragged\">\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; when: isRow\"\n          [class.selected-row]=\"row.data === selectedObject && !isCellSelection\" [ngClass]=\"getClassToRow(row.data)\">\n        </tr>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroupTitle\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWithFooter; when: isGroupFooter\"></tr>\n    </table>\n  </div>\n</div>\n",
                styles: ["table{table-layout:fixed}tbody tr,tfoot tr,thead tr{height:26px}tbody tr td,tbody tr th,tfoot tr td,tfoot tr th,thead tr td,thead tr th{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}thead tr th{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody tr td{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}tbody tr td button{height:auto;line-height:inherit}tfoot{display:none}tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}::ng-deep hel-table{position:relative}::ng-deep hel-table>button{align-items:flex-start;background:transparent;border:none;color:transparent;cursor:pointer;display:flex;height:26px;justify-content:center;opacity:.5;overflow:hidden;position:absolute;right:0;top:0;width:20px;z-index:101}::ng-deep hel-table>button:focus{outline:none}::ng-deep hel-table>button:hover{opacity:1}::ng-deep hel-table>button:before{align-items:center;color:#fff;content:\"+\";display:flex;font-size:20px;height:26px;justify-content:center;position:absolute;width:20px}::ng-deep hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}::ng-deep hel-table .buttons-container{order:2}::ng-deep hel-table .buttons-container.hasSubtitle,::ng-deep hel-table .buttons-container.hasTitle{padding-top:26px}::ng-deep hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}::ng-deep hel-table .buttons-container>div{height:26px}::ng-deep hel-table .buttons-container>div button{align-items:center;display:flex;height:26px;justify-content:center}::ng-deep hel-table .buttons-container>div button>*{display:flex;height:100%}::ng-deep hel-table .div-table-helisa{height:100%}::ng-deep hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}::ng-deep hel-table .div-table-helisa .container-table .table-helisa{width:100%}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep table{table-layout:fixed}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr{height:26px}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr th,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr th,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr td,::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr th{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep thead tr th{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tbody tr td button{height:auto;line-height:inherit}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot{display:none}::ng-deep hel-table .div-table-helisa .container-table .table-helisa ::ng-deep tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}::ng-deep hel-table .div-table-helisa .container-table .table-helisa .selected-row{background:silver;font-weight:700}"]
            }]
    }], function () { return [{ type: ɵngcc1.TableHelisaService }]; }, { sort: [{
            type: Output
        }], total: [{
            type: Output
        }], search: [{
            type: Output
        }], select: [{
            type: Output
        }], selectCell: [{
            type: Output
        }], selectObject: [{
            type: Output
        }], nextPage: [{
            type: Output
        }], showTitle: [{
            type: Input
        }], isCellSelection: [{
            type: Input
        }], drop: [{
            type: Output
        }], isDragged: [{
            type: Input
        }], addRowButton: [{
            type: Input
        }], addRow: [{
            type: Output
        }], bookClicked: [{
            type: Output
        }], addBookButton: [{
            type: Input
        }], showToolTip: [{
            type: Input
        }], hideDelay: [{
            type: Input
        }], showDelay: [{
            type: Input
        }], isRemote: [{
            type: Input
        }], columnConfiguration: [{
            type: Input
        }], dataSource: [{
            type: Input
        }], selectedIndexRow: [{
            type: Input
        }], selectedCells: [{
            type: Input
        }], matSort: [{
            type: ViewChild,
            args: [MatSort, { static: true }]
        }], matTable: [{
            type: ViewChild,
            args: [MatTable, { static: true }]
        }], matTableElement: [{
            type: ViewChild,
            args: [MatTable, { read: ElementRef, static: true }]
        }], containerTable: [{
            type: ViewChild,
            args: ['containerTable', { static: true }]
        }], count: [{
            type: Input
        }], configCellStyles: [{
            type: Input
        }], configRowStylesFromColumn: [{
            type: Input
        }], configColumnClass: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUtaGVsaXNhL3RhYmxlLWhlbGlzYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUMsT0FBTyxFQUFPLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZFLE9BQU8sRUFHTCw2QkFBNkIsRUFFN0IsZ0JBQWdCLEVBS2hCLFVBQVUsRUFJVixlQUFlLEVBRWYsU0FBUyxFQUNULFVBQVUsRUFFWCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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Q0FDVixLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFLLG1CQUNWLE1BQU07QUFBSyx3QkFDWCxLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLHFCQUNWLE1BQU07QUFBSywwQkFDWCxNQUFNO0FBQUssNEJBQ1gsS0FBSztBQUFLLDBCQUNWLEtBQUs7QUFBSyx3QkFTVixLQUFLO0FBQUssd0JBS1YsS0FBSztBQUFLLHVCQStDVixLQUFLO0FBQ04sa0NBVUMsS0FBSztBQUNOLHlCQU1DLEtBQUs7QUFDTiwrQkFVQyxLQUFLO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRG9DaGVja30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNvcnQsIFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHsgTWF0VGFibGUsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuaW1wb3J0IHtcbiAgQWRkUm93QnV0dG9uLFxuICBDZWxsLFxuICBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZSxcbiAgQ29sdW1uQ29uZmlnLFxuICBDb2x1bW5Db25maWdVdGlsLFxuICBDb25maWdDZWxsU3R5bGVzLFxuICBDb25maWdSb3dTdHlsZXMsXG4gIERyb3BFbGVtZW50LFxuICBFdmVudENvbHVtbixcbiAgRXZlbnRTY29wZSxcbiAgRXZlbnRTZWFyY2gsXG4gIFJlcXVlc3RUYWJsZUhlbGlzYSxcbiAgU2VsZWN0T2JqZWN0LFxuICBUYWJsZUhlbGlzYVR5cGUsXG4gIFRvdGFsR3JvdXAsXG4gIFRvdGFsVHlwZSxcbiAgQ29sdW1uVHlwZSxcbiAgVG90YWxUYWJsZUhlbGlzYVxufSBmcm9tICcuL3RhYmxlLWhlbGlzYS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGFibGVIZWxpc2FTZXJ2aWNlLCBUYWJsZUhlbGlzYVNlcnZpY2VJbmZvIH0gZnJvbSAnLi90YWJsZS1oZWxpc2Euc2VydmljZSc7XG5pbXBvcnQgeyBUYWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWhlbGlzYS1jb25uZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvd0RhdGE8VD4ge1xuICBkYXRhOiB7fSB8IFQ7XG4gIHJvd1R5cGU6IFJvd1R5cGU7XG59XG5cbmVudW0gUm93VHlwZSB7XG4gIEdST1VQX1RJVExFLCBHUk9VUF9GT09URVIsIFJPV1xufVxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIHRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDogVGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50PFQ+O1xuICB0b3RhbERhdGE6IEFycmF5PG51bWJlcj47XG4gIHJhd0RhdGE6IEFycmF5PFQ+O1xuICBkYXRhOiBNYXRUYWJsZURhdGFTb3VyY2U8Um93RGF0YTxUPj4gPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE8VD4+KFtdKTtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhUaXRsZTogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZTogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXI6IHN0cmluZ1tdID0gW107XG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8Q29sdW1uQ29uZmlnPjtcbiAgc2VsZWN0ZWRPYmplY3Q6IFQ7XG4gIGxhc3RTZWFyY2g6IHN0cmluZztcbiAgdHlwZTogVGFibGVIZWxpc2FUeXBlID0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xuICBpbmRleFJvd1NlbGVjdDogbnVtYmVyO1xuICBwcml2YXRlIHNjcm9sbENvdW50OiBudW1iZXIgPSAwO1xuICBoYXNTdWJ0aXRsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGluZGV4Um93U3RhcnREcmFnOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBsYXN0SW5kZXhSb3dEcmFnOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBkYXRhQmVmb3JlRHJhZzogeyBkYXRhOiBSb3dEYXRhPFQ+W10gfSA9IG51bGw7XG4gIHByaXZhdGUgZGF0YVNvdXJjZSQ6IEFycmF5PFQ+ID0gW107XG4gIHByaXZhdGUgc2Nyb2xsWDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBzY3JvbGxZOiBudW1iZXIgPSAwO1xuXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCwge3N0YXRpYzogdHJ1ZX0pIG1hdFNvcnQ6IE1hdFNvcnQ7XG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUsIHtzdGF0aWM6IHRydWV9KSBtYXRUYWJsZTogTWF0VGFibGU8VD47XG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIG1hdFRhYmxlRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyVGFibGUnLCB7c3RhdGljOiB0cnVlfSkgY29udGFpbmVyVGFibGU6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xuICBAT3V0cHV0KCkgdG90YWw6IEV2ZW50RW1pdHRlcjxFdmVudENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50Q29sdW1uPigpO1xuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8RXZlbnRTZWFyY2g+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudFNlYXJjaD4oKTtcblxuICAvKipcbiAgICogRGVwcmVjYWRvLCBjYW1iaWFyIHBvciBlbGVjdE9iamVjdFxuICAgKi9cbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAT3V0cHV0KCkgc2VsZWN0Q2VsbDogRXZlbnRFbWl0dGVyPENlbGw8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsPFQ+PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0T2JqZWN0OiBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0T2JqZWN0PFQ+PigpO1xuICBAT3V0cHV0KCkgbmV4dFBhZ2U6IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VGFibGVIZWxpc2E8VD4+KCk7XG4gIEBJbnB1dCgpIHNob3dUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzQ2VsbFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBjb25maWdDZWxsU3R5bGVzOiBBcnJheTxDb25maWdDZWxsU3R5bGVzPFQ+PjtcbiAgQElucHV0KCkgY29uZmlnUm93U3R5bGVzRnJvbUNvbHVtbjogQXJyYXk8Q29uZmlnUm93U3R5bGVzPFQ+PjtcbiAgQElucHV0KCkgY29uZmlnQ29sdW1uQ2xhc3M6IEFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgpIHNlbGVjdGVkQ2VsbHM6IENlbGw8VD47XG4gIEBPdXRwdXQoKSBkcm9wOiBFdmVudEVtaXR0ZXI8RHJvcEVsZW1lbnQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRWxlbWVudDxUPj4oKTtcbiAgQElucHV0KCkgaXNEcmFnZ2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFkZFJvd0J1dHRvbjogQWRkUm93QnV0dG9uID0geyBzaG93QnV0dG9uOiBmYWxzZSwgdGV4dDogJycgfTtcbiAgQE91dHB1dCgpIGFkZFJvdzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgYm9va0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQElucHV0KCkgYWRkQm9va0J1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XG4gIHNob3dGb290ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG9jdWx0YXJsYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDYwMDtcblxuICAvKipcbiAgICogVGllbXBvIGFudGVzIGRlIG1vc3RyYSBlbCBtZW5zYWplIGRlbCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBzaG93RGVsYXk6IG51bWJlciA9IDUwMDtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVTZXJ2aWNlOiBUYWJsZUhlbGlzYVNlcnZpY2U8VD4pIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVsb2FkQ29sdW1uQ29uZmlnKCk7XG4gICAgdGhpcy50YWJsZVNlcnZpY2UubmV4dFBhZ2VSZXR1cm4uc3Vic2NyaWJlKFxuICAgICAgKGRhdGE6IFRhYmxlSGVsaXNhU2VydmljZUluZm88VFtdPik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoIWRhdGEudGFibGUgfHwgZGF0YS50YWJsZSA9PT0gdGhpcykge1xuICAgICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5vYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnRhYmxlU2VydmljZS50b3RhbFJldHVybi5zdWJzY3JpYmUoKGluZm86IFRhYmxlSGVsaXNhU2VydmljZUluZm88VG90YWxUYWJsZUhlbGlzYT4pOiB2b2lkID0+IHtcbiAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpZHg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgIGlmIChjb2x1bW4gPT09IGluZm8ub2JqLmNvbHVtbikge1xuICAgICAgICAgICAgdGhpcy50b3RhbERhdGFbaWR4XSA9IHRoaXMuZ2V0R3JvdXBWYWx1ZShjb2x1bW4sIHsgc3VtOiBpbmZvLm9iai52YWx1ZSwgY291bnQ6IHRoaXMuY291bnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm1hdFNvcnQuc29ydENoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAoZXZlbnQ6IFNvcnQpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgY29sdW1uOiBDb2x1bW5Db25maWcgPSB0aGlzLmNvbHVtbkNvbmZpZy5maW5kKChjOiBDb2x1bW5Db25maWcpOiBib29sZWFuID0+IGMubmFtZSA9PT0gZXZlbnQuYWN0aXZlKTtcbiAgICAgICAgY29sdW1uLnNvcnREaXJlY3Rpb24gPSBldmVudC5kaXJlY3Rpb247XG4gICAgICAgIHRoaXMuc29ydC5lbWl0KHsgY29sdW1uLCBjb2x1bW5Db25maWd1cmF0aW9uczogdGhpcy5jb2x1bW5Db25maWcsIHR5cGU6IENoYW5nZUNvbHVtbkNvbmZpZ3VyYXRpb25UeXBlLlNPUlQgfSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMudGFibGVTZXJ2aWNlLmVtaXRWaXNpYmxlQnV0dG9uLnN1YnNjcmliZShcbiAgICAgIChkYXRhOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5hZGRSb3dCdXR0b24uc2hvd0J1dHRvbiA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMucmVsb2FkKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLm1hdFRhYmxlLnJlbmRlclJvd3MoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaXNSZW1vdGUodzogYm9vbGVhbikge1xuICAgIHRoaXMudHlwZSA9IHcgPyBUYWJsZUhlbGlzYVR5cGUuUkVNT1RFIDogVGFibGVIZWxpc2FUeXBlLkxPQ0FMO1xuICAgIHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50ID0gbmV3IFRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudDxUPigpO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFRhYmxlSGVsaXNhVHlwZS5SRU1PVEUpIHtcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5wYWdlKys7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbHVtbkNvbmZpZ3VyYXRpb24oY29sdW1uQ29uZmlndXJhdGlvbjogQXJyYXk8Q29sdW1uQ29uZmlnPikge1xuICAgIHRoaXMuY29sdW1uQ29uZmlnID0gY29sdW1uQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLnJlbG9hZCgpO1xuICAgIHRoaXMucmVsb2FkQ29sdW1uQ29uZmlnKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBBcnJheTxUPikge1xuICAgIHRoaXMuZGF0YVNvdXJjZSQgPSBkYXRhU291cmNlO1xuICAgIHRoaXMucmF3RGF0YSA9IGRhdGFTb3VyY2U7XG4gICAgdGhpcy5yZWxvYWQoKTtcbiAgfVxuXG4gIGdldCBkYXRhU291cmNlKCk6IEFycmF5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlJDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4Um93KGlkUm93U2VsZWN0ZWQ6IG51bWJlcikge1xuICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSBpZFJvd1NlbGVjdGVkO1xuICAgIGlmICh0aGlzLnJhd0RhdGEgJiYgdGhpcy5yYXdEYXRhLmxlbmd0aCkge1xuICAgICAgaWYgKChpZFJvd1NlbGVjdGVkID49IHRoaXMucmF3RGF0YS5sZW5ndGggfHwgaWRSb3dTZWxlY3RlZCA8IDApKSB7XG4gICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RSb3coeyBkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XIH0sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbG9hZENvbHVtbkNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmhhc1N1YnRpdGxlID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKTtcblxuICAgIGlmICh0aGlzLmNvbHVtbkNvbmZpZykge1xuICAgICAgaWYgKHRoaXMuYWRkQm9va0J1dHRvbikge1xuICAgICAgICBjb25zdCBjb2x1bW5Db3VudDogbnVtYmVyID0gdGhpcy5jb2x1bW5Db25maWcubGVuZ3RoO1xuICAgICAgICBsZXQgY291bnRTdWJ0aXRsZTogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHNob3dCb29rQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCA9PiB7XG4gICAgICAgICAgaWYgKCEhY29sdW1uLnN1YnRpdGxlKSB7XG4gICAgICAgICAgICBjb3VudFN1YnRpdGxlID0gY291bnRTdWJ0aXRsZSArIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoIXNob3dCb29rQnV0dG9uKSAmJiAoY29sdW1uLm5hbWUgPT09ICdib29rQnV0dG9uJykpIHtcbiAgICAgICAgICAgIHNob3dCb29rQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdWJ0aXRsZVRlbXA6IGJvb2xlYW4gPSBjb2x1bW5Db3VudCA9PT0gY291bnRTdWJ0aXRsZTtcbiAgICAgICAgaWYgKCFzaG93Qm9va0J1dHRvbikge1xuICAgICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJ2Jvb2tCdXR0b24nLFxuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgc3VidGl0bGU6IHN1YnRpdGxlVGVtcCA/ICcnIDogdW5kZWZpbmVkICxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi52aXNpYmxlKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnB1c2goY29sdW1uLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5oYXNTdWJ0aXRsZSkge1xuICAgICAgICAgIHRoaXMuaGFzU3VidGl0bGUgPSBjb2x1bW4uc3VidGl0bGUgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5yYXdEYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFRpdGxlLnNwbGljZSgwLCB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUubGVuZ3RoKTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoU3VidGl0bGUuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhTdWJ0aXRsZS5sZW5ndGgpO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIuc3BsaWNlKDAsIHRoaXMuZGlzcGxheWVkQ29sdW1uc1dpdGhGb290ZXIubGVuZ3RoKTtcbiAgICB0aGlzLmdldENvbHVtbnNXaXRoVGl0bGUoKS5mb3JFYWNoKChjb2w6IHN0cmluZyk6IG51bWJlciA9PiB0aGlzLmRpc3BsYXllZENvbHVtbnNXaXRoVGl0bGUucHVzaChjb2wpKTtcbiAgICB0aGlzLmdldEhlYWRlclN1YnRpdGxlKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpOiBudW1iZXIgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aFN1YnRpdGxlLnB1c2goY29sKSk7XG4gICAgdGhpcy5mb290ZXJEaXNwbGF5ZWRDb2x1bW5zKCkuZm9yRWFjaCgoY29sOiBzdHJpbmcpOiBudW1iZXIgPT4gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zV2l0aEZvb3Rlci5wdXNoKGNvbCkpO1xuICB9XG5cbiAgcHVibGljIHJlbG9hZCgpOiB2b2lkIHtcbiAgICBpZih0aGlzLmNvbHVtbkNvbmZpZykge1xuICAgICAgY29uc3QgY2hhbmdlRGF0YTogQXJyYXk8Um93RGF0YTxUPj4gPSBBcnJheTxSb3dEYXRhPFQ+PigpO1xuICAgICAgbGV0IGhhdmVHcm91cDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgbGV0IGdyb3VwRm9vdGVyOiBBcnJheTxUb3RhbEdyb3VwPjtcbiAgICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4udG90YWxUeXBlICE9PSB1bmRlZmluZWQgJiYgKHRoaXMudHlwZSA9PT0gVGFibGVIZWxpc2FUeXBlLkxPQ0FMIHx8IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LnBhZ2UgPD0gMSkpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsRGF0YSA9IG5ldyBBcnJheTxudW1iZXI+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XG4gICAgICAgICAgdGhpcy5zaG93Rm9vdGVyID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRvdGFsLmVtaXQoe2NvbHVtbiwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnLCB0eXBlOiBDaGFuZ2VDb2x1bW5Db25maWd1cmF0aW9uVHlwZS5UT1RBTH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1NlYXJjaCA9IHRoaXMuc2hvd1NlYXJjaCB8fCBjb2x1bW4uc2VhcmNoYWJsZTtcbiAgICAgICAgaGF2ZUdyb3VwID0gaGF2ZUdyb3VwIHx8IGNvbHVtbi5ncm91cGFibGU7XG4gICAgICB9KTtcbiAgICAgIGlmIChoYXZlR3JvdXApIHtcbiAgICAgICAgdGhpcy5yYXdEYXRhID0gdGhpcy5yYXdEYXRhLnNvcnQoKGE6IFQsIGI6IFQpOiBudW1iZXIgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IDA7XG4gICAgICAgICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jb21wYXJlKGEsIGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5yYXdEYXRhKSB7XG4gICAgICAgIHRoaXMucmF3RGF0YS5mb3JFYWNoKChyb3c6IFQpOiB2b2lkID0+IHtcbiAgICAgICAgICBpZiAoaGF2ZUdyb3VwICYmIChjaGFuZ2VEYXRhLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNvbXBhcmUoY2hhbmdlRGF0YVtjaGFuZ2VEYXRhLmxlbmd0aCAtIDFdLmRhdGEgYXMgVCwgcm93KSAhPT0gMCkpIHtcbiAgICAgICAgICAgIGlmIChncm91cEZvb3Rlcikge1xuICAgICAgICAgICAgICBjaGFuZ2VEYXRhLnB1c2goe2RhdGE6IGdyb3VwRm9vdGVyLCByb3dUeXBlOiBSb3dUeXBlLkdST1VQX0ZPT1RFUn0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHtkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuR1JPVVBfVElUTEV9KTtcbiAgICAgICAgICAgIGdyb3VwRm9vdGVyID0gbmV3IEFycmF5PFRvdGFsR3JvdXA+KHRoaXMuY29sdW1uQ29uZmlnLmxlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXZlR3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG90YWxHcm91cChncm91cEZvb3Rlciwgcm93KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hhbmdlRGF0YS5wdXNoKHtkYXRhOiByb3csIHJvd1R5cGU6IFJvd1R5cGUuUk9XfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFJvd0RhdGE8VD4+KGNoYW5nZURhdGEpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmF3RGF0YSAmJiB0aGlzLnJhd0RhdGEubGVuZ3RoICYmIHRoaXMuaW5kZXhSb3dTZWxlY3QgJiYgIXRoaXMuc2VsZWN0ZWRPYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXhSb3dTZWxlY3QgPj0gdGhpcy5yYXdEYXRhLmxlbmd0aCB8fCB0aGlzLmluZGV4Um93U2VsZWN0IDwgMCkge1xuICAgICAgICAgIHRoaXMuaW5kZXhSb3dTZWxlY3QgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0Um93KHtkYXRhOiB0aGlzLnJhd0RhdGFbdGhpcy5pbmRleFJvd1NlbGVjdF0sIHJvd1R5cGU6IFJvd1R5cGUuUk9XfSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkVG90YWxHcm91cChyb3dUb3RhbDogQXJyYXk8VG90YWxHcm91cD4sIHJvdzogVCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChyb3dUb3RhbFtpbmRleF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XSA9IHsgc3VtOiAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShyb3csIGNvbHVtbikgYXMgbnVtYmVyKSwgY291bnQ6IDEgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3dUb3RhbFtpbmRleF0uc3VtICs9IChuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKHJvdywgY29sdW1uKSBhcyBudW1iZXIpO1xuICAgICAgICAgIHJvd1RvdGFsW2luZGV4XS5jb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbXBhcmUoYTogVCwgYjogVCk6IG51bWJlciB7XG4gICAgbGV0IHdzOiBudW1iZXIgPSAwO1xuICAgIHRoaXMuY29sdW1uQ29uZmlnLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCA9PiB7XG4gICAgICBpZiAod3MgPT09IDAgJiYgY29sdW1uLmdyb3VwYWJsZSkge1xuICAgICAgICBpZiAoKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYSwgY29sdW1uKSBhcyBudW1iZXIpIDwgKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUoYiwgY29sdW1uKSBhcyBudW1iZXIpKSB7XG4gICAgICAgICAgd3MgPSAtMTtcbiAgICAgICAgfSBlbHNlIGlmICgobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShhLCBjb2x1bW4pIGFzIG51bWJlcikgPiAobmV3IENvbHVtbkNvbmZpZ1V0aWwoKS5nZXRWYWx1ZShiLCBjb2x1bW4pIGFzIG51bWJlcikpIHtcbiAgICAgICAgICB3cyA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gd3M7XG4gIH1cblxuICBnZXRHcm91cERlc2NyaXB0aW9uKG9iajogVCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdDogc3RyaW5nID0gJyc7XG4gICAgdGhpcy5jb2x1bW5Db25maWcuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpOiB2b2lkID0+IHtcbiAgICAgIGlmIChjb2x1bW4uZ3JvdXBhYmxlKSB7XG4gICAgICAgIHJlc3VsdCArPSAocmVzdWx0Lmxlbmd0aCA/ICcgLSAnIDogJycpICsgKG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUob2JqLCBjb2x1bW4pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaXNHcm91cFRpdGxlKGluZGV4OiBudW1iZXIsIGl0ZW06IFJvd0RhdGE8VD4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS5yb3dUeXBlID09PSBSb3dUeXBlLkdST1VQX1RJVExFO1xuICB9XG5cbiAgaXNSb3coaW5kZXg6IG51bWJlciwgaXRlbTogUm93RGF0YTxUPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtLnJvd1R5cGUgPT09IFJvd1R5cGUuUk9XO1xuICB9XG5cbiAgaXNHcm91cEZvb3RlcihpbmRleDogbnVtYmVyLCBpdGVtOiBSb3dEYXRhPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW0ucm93VHlwZSA9PT0gUm93VHlwZS5HUk9VUF9GT09URVI7XG4gIH1cblxuICBmb290ZXJEaXNwbGF5ZWRDb2x1bW5zKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZENvbHVtbnMubWFwKChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4gJ2Zvb3Rlci0nICsgbmFtZSk7XG4gIH1cblxuICBnZXRHcm91cFZhbHVlKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBkYXRhOiBUb3RhbEdyb3VwKTogbnVtYmVyIHtcbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLlNVTSkgeyByZXR1cm4gZGF0YS5zdW07IH1cbiAgICBpZiAoY29sdW1uLnRvdGFsVHlwZSA9PT0gVG90YWxUeXBlLkNPVU5UKSB7IHJldHVybiBkYXRhLmNvdW50OyB9XG4gICAgaWYgKGNvbHVtbi50b3RhbFR5cGUgPT09IFRvdGFsVHlwZS5BVkVSQUdFKSB7IHJldHVybiAxLiAqIGRhdGEuc3VtIC8gZGF0YS5jb3VudDsgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRWYWx1ZShvYmo6IFQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogVCB7XG4gICAgcmV0dXJuIG5ldyBDb2x1bW5Db25maWdVdGlsKCkuZ2V0VmFsdWUob2JqLCBjb2x1bW4pIGFzIFQ7XG4gIH1cblxuICBnZXRWYWx1ZVRvb2x0aXAob2JqOiBULCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2hvd1Rvb2xUaXApIHtcbiAgICAgIHJldHVybiBuZXcgQ29sdW1uQ29uZmlnVXRpbCgpLmdldFZhbHVlKG9iaiwgY29sdW1uKSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaFRleHQodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sYXN0U2VhcmNoID0gdGV4dDtcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHsgdGV4dCwgY29sdW1uQ29uZmlndXJhdGlvbnM6IHRoaXMuY29sdW1uQ29uZmlnIH0pO1xuICB9XG5cbiAgc2VsZWN0Um93KHJvdzogUm93RGF0YTxUPiwgaXNVc2VyOiBib29sZWFuLCBjb2x1bW4/OiBDb2x1bW5Db25maWcpOiB2b2lkIHtcbiAgICBpZiAocm93ID09PSB1bmRlZmluZWQgfHwgcm93ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgoY29sdW1uID09PSB1bmRlZmluZWQgfHwgY29sdW1uID09PSBudWxsKSB8fCAoISFjb2x1bW4gJiYgY29sdW1uLm5hbWUgIT09ICdib29rQnV0dG9uJykpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSByb3cuZGF0YSBhcyBUO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcbiAgICAgIHRoaXMuc2VsZWN0T2JqZWN0LmVtaXQoeyB2YWx1ZTogdGhpcy5zZWxlY3RlZE9iamVjdCwgc2NvcGU6IGlzVXNlciA/IEV2ZW50U2NvcGUuVVNFUiA6IEV2ZW50U2NvcGUuQ09ERV9DQUxMIH0pO1xuICAgIH0gZWxzZSBpZiAoISFjb2x1bW4gJiYgY29sdW1uLm5hbWUgPT09ICdib29rQnV0dG9uJykge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmplY3QgIT09IHJvdy5kYXRhKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3QgPSByb3cuZGF0YSBhcyBUO1xuICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuc2VsZWN0ZWRPYmplY3QpO1xuICAgICAgICB0aGlzLnNlbGVjdE9iamVjdC5lbWl0KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRPYmplY3QsIHNjb3BlOiBpc1VzZXIgPyBFdmVudFNjb3BlLlVTRVIgOiBFdmVudFNjb3BlLkNPREVfQ0FMTCB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYm9va0NsaWNrZWQuZW1pdCh0aGlzLnNlbGVjdGVkT2JqZWN0KTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBsZXQgaXNTY3JvbGxZOiBib29sZWFuO1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsWSAhPT0gZWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgIGlzU2Nyb2xsWSA9IHRydWU7XG4gICAgICB0aGlzLnNjcm9sbFkgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHRoaXMuc2Nyb2xsWCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxYICE9PSBlbGVtZW50LnNjcm9sbExlZnQpIHtcbiAgICAgIGlzU2Nyb2xsWSA9IGZhbHNlO1xuICAgICAgdGhpcy5zY3JvbGxZID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB0aGlzLnNjcm9sbFggPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgaWYgKChlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wIDwgMTAwMCkgJiYgaXNTY3JvbGxZKSB7XG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzTGFzdFBhZ2UgJiYgIXRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmlzVXNlZCkge1xuICAgICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMubmV4dFBhZ2UuZW1pdCh7XG4gICAgICAgIHBhZ2U6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50Lm5leHRQYWdlKCksXG4gICAgICAgIGJvZHk6IHRoaXMudGFibGVIZWxpc2FDb25uZWN0Q29tcG9uZW50LmdldEJvZHkodGhpcy5jb2x1bW5Db25maWcsIHRoaXMubGFzdFNlYXJjaClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogVFtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJhd0RhdGEpIHtcbiAgICAgIHRoaXMucmF3RGF0YSA9IG5ldyBBcnJheTxUPigpO1xuICAgIH1cbiAgICB0aGlzLnJhd0RhdGEgPSB0aGlzLnJhd0RhdGEuY29uY2F0KGRhdGEpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucmF3RGF0YTtcbiAgICB0aGlzLnRhYmxlSGVsaXNhQ29ubmVjdENvbXBvbmVudC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XG4gICAgdGhpcy50YWJsZUhlbGlzYUNvbm5lY3RDb21wb25lbnQuaXNVc2VkID0gZmFsc2U7XG4gIH1cblxuICBkYmxDbGlja0NlbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RDZWxsLmVtaXQodGhpcy5zZWxlY3RlZENlbGxzIGFzIENlbGw8VD4pO1xuICB9XG5cbiAgc2VsZWN0ZWRDZWxsKGVsZW1lbnQ6IFJvd0RhdGE8VD4sIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RSb3coZWxlbWVudCwgdHJ1ZSwgY29sdW1uKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRDZWxscyA9IHsgY29sdW1uLCByb3c6IGVsZW1lbnQgfTtcbiAgICB0aGlzLnNlbGVjdENlbGwuZW1pdCh0aGlzLnNlbGVjdGVkQ2VsbHMpO1xuICB9XG5cbiAgaXNTZWxlY3RlZENlbGwocm93OiBSb3dEYXRhPFQ+LCBjb2x1bW46IENvbHVtbkNvbmZpZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDZWxscyAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2VsbHMuY29sdW1uLm5hbWUgPT09IGNvbHVtbi5uYW1lICYmXG4gICAgICAgICAgKHRoaXMuc2VsZWN0ZWRDZWxscy5yb3cgYXMgUm93RGF0YTxUPikuZGF0YSA9PT0gcm93LmRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRDbGFzc1RvQ2VsbChyb3c6IFQsIGNvbHVtbjogQ29sdW1uQ29uZmlnKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNsYXNzVG9DZWxsOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBpZiAodGhpcy5jb25maWdDZWxsU3R5bGVzKSB7XG4gICAgICBjb25zdCBmb3VuZDogQ29uZmlnQ2VsbFN0eWxlczxUPiA9IHRoaXMuY29uZmlnQ2VsbFN0eWxlcy5maW5kKChjOiBDb25maWdDZWxsU3R5bGVzPFQ+KTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiBjLmNlbGxEYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgY29sdW1uKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGNsYXNzVG9DZWxsLnB1c2goZm91bmQuY2xhc3NDZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbHVtbi5jb2x1bW5TdHlsZSkge1xuICAgICAgY2xhc3NUb0NlbGwucHVzaChjb2x1bW4uY29sdW1uU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NUb0NlbGw7XG4gIH1cblxuICBnZXRDbGFzc1RvQ29sdW1uKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdDb2x1bW5DbGFzcztcbiAgfVxuXG4gIGdldENsYXNzVG9Sb3cocm93OiBUKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNsYXNzVG9Sb3c6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgIGlmIChyb3cgPT09IHRoaXMuc2VsZWN0ZWRPYmplY3QgJiYgIXRoaXMuaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICBjbGFzc1RvUm93LnB1c2goJycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uKSB7XG4gICAgICBjb25zdCBmb3VuZDogQ29uZmlnUm93U3R5bGVzPFQ+ID0gdGhpcy5jb25maWdSb3dTdHlsZXNGcm9tQ29sdW1uLmZpbmQoKGM6IENvbmZpZ1Jvd1N0eWxlczxUPik6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gYy5kYXRhID09PSB0aGlzLmdldFZhbHVlKHJvdywgYy5jb2x1bW4pO1xuICAgICAgfSk7XG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgY2xhc3NUb1Jvdy5wdXNoKGZvdW5kLmNsYXNzUm93KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzVG9Sb3c7XG4gIH1cblxuICBvbkRyb3AoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0RyYWdnZWQgJiYgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZyA+PSAwKSB7XG4gICAgICBjb25zdCByb3dJbmRleDogbnVtYmVyID0gdGhpcy5nZXRSb3dJbmRleChldmVudC5wYWdlWSk7XG4gICAgICBjb25zdCBhcnJheTogUm93RGF0YTxUPltdID0gdGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhO1xuICAgICAgY29uc3QgcmF3RGF0YTogVFtdID0gdGhpcy5yYXdEYXRhO1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGFycmF5LCB0aGlzLmluZGV4Um93U3RhcnREcmFnLCByb3dJbmRleCk7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkocmF3RGF0YSwgdGhpcy5pbmRleFJvd1N0YXJ0RHJhZywgcm93SW5kZXgpO1xuICAgICAgdGhpcy5kcm9wLmVtaXQoeyB2YWx1ZTogYXJyYXlbcm93SW5kZXhdLmRhdGEgYXMgVCwgb3JkZXI6IHJvd0luZGV4IH0pO1xuICAgICAgdGhpcy5yYXdEYXRhID0gcmF3RGF0YTtcbiAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoYXJyYXkpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgdGFibGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgbGV0IGN1cnJlbnRJbmRleDogbnVtYmVyID0gdGhpcy5kYXRhLmRhdGEuZmluZEluZGV4KChyb3c6IFJvd0RhdGE8VD4pOiBib29sZWFuID0+IHJvdy5kYXRhID09PSB0aGlzLnNlbGVjdGVkT2JqZWN0KTtcbiAgICAgIGxldCBuZXdTZWxlY3Rpb246IG51bWJlciA9IC0xMDtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQrKztcbiAgICAgICAgdGhpcy5kYXRhLmRhdGEuZm9yRWFjaCgocm93OiBSb3dEYXRhPFQ+LCBpbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEwICYmIGluZGV4ID4gY3VycmVudEluZGV4ICYmIHJvdy5yb3dUeXBlID09PSBSb3dUeXBlLlJPVykge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gaW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICB0aGlzLnNjcm9sbENvdW50LS07XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IHRoaXMuZGF0YS5kYXRhLmxlbmd0aCAtIGN1cnJlbnRJbmRleCAtIDE7XG4gICAgICAgIHRoaXMuZGF0YS5kYXRhLnJldmVyc2UoKS5mb3JFYWNoKChyb3c6IFJvd0RhdGE8VD4sIGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMTAgJiYgaW5kZXggPiBjdXJyZW50SW5kZXggJiYgcm93LnJvd1R5cGUgPT09IFJvd1R5cGUuUk9XKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRhdGEuZGF0YS5yZXZlcnNlKCk7XG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gIT09IC0xMCkge1xuICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IHRoaXMuZGF0YS5kYXRhLmxlbmd0aCAtIG5ld1NlbGVjdGlvbiAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChuZXdTZWxlY3Rpb24gIT09IC0xMCkge1xuICAgICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLmRhdGEuZGF0YVtuZXdTZWxlY3Rpb25dLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNjcm9sbENvdW50KSA+PSAyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsQ291bnQgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdGUgZWwgZXZlbnRvIGN1YW5kbyBzZSBkYSBjbGljayBhbCBib3RvbiBBZGRSb3dcbiAgICovXG4gIG9uQWRkUm93KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkUm93LmVtaXQoKTtcbiAgfVxuXG5cbiAgZ2V0SGVhZGVyU3VidGl0bGUoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHg6IHN0cmluZ1tdID0gdGhpcy5jb2x1bW5Db25maWcubWFwKChjb2x1bW46IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoY29sdW1uLnZpc2libGUgJiYgY29sdW1uLnN1YnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuICdzdWJ0aXRsZScgKyBpbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pLmZpbHRlcigoZGF0YTogc3RyaW5nKTogYm9vbGVhbiA9PiBkYXRhICE9IG51bGwpO1xuICAgIHJldHVybiB4O1xuICB9XG5cbiAgZ2V0Q29sdW1uc1dpdGhUaXRsZSgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uQ29uZmlnLmZpbHRlcigoY29sdW1uOiBDb2x1bW5Db25maWcpOiBib29sZWFuID0+XG4gICAgICBjb2x1bW4udmlzaWJsZSAmJiBjb2x1bW4udGl0bGUgIT09IHVuZGVmaW5lZFxuICAgICkubWFwKChjb2w6IENvbHVtbkNvbmZpZyk6IHN0cmluZyA9PiBjb2wubmFtZSk7XG4gIH1cblxuICBkcmFnZ2VyKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNEcmFnZ2VkICYmIHRoaXMuaW5kZXhSb3dTdGFydERyYWcgPj0gMCkge1xuICAgICAgY29uc3Qgcm93SW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0Um93SW5kZXgoZXZlbnQucGFnZVkpO1xuICAgICAgaWYgKHJvd0luZGV4ICE9PSB0aGlzLmxhc3RJbmRleFJvd0RyYWcpIHtcbiAgICAgICAgdGhpcy5sYXN0SW5kZXhSb3dEcmFnID0gcm93SW5kZXg7XG4gICAgICAgIC8vIFRoaXMgY2FuIGhhdmUgYSBtZW1vcnkgcHJvYmxlbSB3aXRoIGJpZyBkYXRhXG4gICAgICAgIGNvbnN0IGFycmF5OiBSb3dEYXRhPFQ+W10gPSBbLi4udGhpcy5kYXRhQmVmb3JlRHJhZy5kYXRhXTtcbiAgICAgICAgbW92ZUl0ZW1JbkFycmF5KGFycmF5LCB0aGlzLmluZGV4Um93U3RhcnREcmFnLCByb3dJbmRleCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoYXJyYXkpO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0RHJhZyhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaW5kZXhSb3dTdGFydERyYWcgPSB0aGlzLmdldFJvd0luZGV4KGV2ZW50LnBhZ2VZKTtcbiAgICB0aGlzLmxhc3RJbmRleFJvd0RyYWcgPSB0aGlzLmluZGV4Um93U3RhcnREcmFnO1xuICAgIHRoaXMuZGF0YUJlZm9yZURyYWcgPSB0aGlzLmRhdGE7XG4gIH1cblxuICBwcml2YXRlIGdldFJvd0luZGV4KHBhZ2VZOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBvZmZzZXRUb3A6IG51bWJlciA9IDA7XG4gICAgbGV0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lclRhYmxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKChjb250YWluZXIgIT09IG51bGwpICYmIChvZmZzZXRUb3AgPT09IDApKSB7XG4gICAgICBvZmZzZXRUb3AgPSBjb250YWluZXIub2Zmc2V0VG9wO1xuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGxldCByb3dJbmRleDogbnVtYmVyID0gLTE7XG4gICAgY29uc3Qgcm93czogSFRNTENvbGxlY3Rpb24gPSB0aGlzLm1hdFRhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3c6IEhUTUxFbGVtZW50ID0gKHJvd3NbaV0gYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgaWYgKHBhZ2VZIC0gb2Zmc2V0VG9wID4gcm93Lm9mZnNldFRvcCAtIHRoaXMuY29udGFpbmVyVGFibGUubmF0aXZlRWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgcm93SW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocm93SW5kZXggPCAwKSB7IHJvd0luZGV4ID0gMDsgfVxuICAgIHJldHVybiByb3dJbmRleDtcbiAgfVxuXG4gIGdldCBjb2x1bW5UeXBlKCk6IHR5cGVvZiBDb2x1bW5UeXBlIHtcbiAgICByZXR1cm4gQ29sdW1uVHlwZTtcbiAgfVxuXG59XG4iXX0=