import { EventEmitter, Component, Input, ViewChild, Output, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, ViewChildren, ElementRef, HostListener, Directive, PLATFORM_ID, HostBinding, Pipe, ContentChild, NgModule } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatTableModule } from '@angular/material/table';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import * as moment_ from 'moment';
import { tap, filter, debounceTime, throttleTime, startWith, map, takeUntil } from 'rxjs/operators';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { Router } from '@angular/router';
import { remove, orderBy } from 'lodash';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '@angular/cdk/layout';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/form-field';
import * as ɵngcc2 from '@angular/material/input';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from '@angular/material/icon';
import * as ɵngcc5 from '@angular/common';
import * as ɵngcc6 from '@angular/material/snack-bar';
import * as ɵngcc7 from '@angular/material/dialog';
import * as ɵngcc8 from '@angular/material/button';
import * as ɵngcc9 from '@angular/material/table';
import * as ɵngcc10 from '@angular/material/sort';
import * as ɵngcc11 from '@angular/material/tooltip';
import * as ɵngcc12 from '@angular/material/datepicker';
import * as ɵngcc13 from '@angular/router';
import * as ɵngcc14 from '@angular/material/tree';
import * as ɵngcc15 from '@angular/material/select';
import * as ɵngcc16 from '@angular/material/core';
import * as ɵngcc17 from '@angular/material/autocomplete';

const _c0 = ["inputText"];
function InputWithButtonComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.requiredMessage, " ");
} }
function ToastHelisaComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const submessage_r2 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(submessage_r2);
} }
function ToastHelisaComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ToastHelisaComponent_ng_container_3_span_1_Template, 2, 1, "span", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.data.subMessages);
} }
function AlertHelisaComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("mat-dialog-close", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.cancelLabel);
} }
const _c1 = ["viewTables"];
function DependencyTableHelisaComponent_hel_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "hel-table", 1, 2);
    ɵngcc0.ɵɵlistener("selectObject", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_selectObject_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onSelectedDependency(i_r2, $event); })("nextPage", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_nextPage_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onNextPage(i_r2, $event); })("total", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_total_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onTotal(i_r2, $event); })("sort", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_sort_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onSort(i_r2, $event); })("drop", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onDrop(i_r2, $event); })("addRow", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_addRow_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onAddRow(i_r2); })("selectCell", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_selectCell_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.selectedCell(i_r2, $event); })("bookClicked", function DependencyTableHelisaComponent_hel_table_1_Template_hel_table_bookClicked_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r2 = ctx.index; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onBookClicked(i_r2, $event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("dataSource", table_r1.dataSource)("columnConfiguration", table_r1.columns)("isRemote", table_r1.isRemote)("count", table_r1.count)("selectedIndexRow", table_r1.indexRowSelect)("isDragged", table_r1.isDragged)("addRowButton", table_r1.addRowButton)("configRowStylesFromColumn", table_r1.configRowStylesFromColumn)("configColumnClass", table_r1.configColumnClass)("isCellSelection", table_r1.isCellSelection)("addBookButton", table_r1.addBookButton != null ? table_r1.addBookButton : false)("showToolTip", ctx_r0.showToolTip)("hideDelay", ctx_r0.hideDelay)("showDelay", ctx_r0.showDelay);
} }
function InputHelisaComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 4);
    ɵngcc0.ɵɵlistener("click", function InputHelisaComponent_mat_icon_3_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.search(); });
    ɵngcc0.ɵɵtext(1, "search");
    ɵngcc0.ɵɵelementEnd();
} }
const _c2 = ["containerTable"];
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
const _c3 = function () { return ["groupHeader"]; };
const _c4 = ["picker"];
function DateHelisaComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-error");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.getErrorMessage());
} }
const _c5 = ["tree"];
function TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_2_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r13 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", col_r13.name, " ");
} }
function TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_2_ng_container_2_li_1_Template, 2, 1, "li", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r13 = ctx.$implicit;
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
    const node_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", node_r3.data);
} }
function TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", node_r3.name, "");
} }
function TreeHelisaComponent_mat_tree_node_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 10);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); const node_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onRedirect(node_r3); })("dblclick", function TreeHelisaComponent_mat_tree_node_3_li_1_Template_li_dblclick_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); const node_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onDblClick(node_r3); });
    ɵngcc0.ɵɵelement(1, "button", 11);
    ɵngcc0.ɵɵtemplate(2, TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_2_Template, 3, 1, "ng-container", 12);
    ɵngcc0.ɵɵtemplate(3, TreeHelisaComponent_mat_tree_node_3_li_1_ng_container_3_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r4.getClassNode(node_r3));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", node_r3.data);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !node_r3.data);
} }
function TreeHelisaComponent_mat_tree_node_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); const node_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onEdit(node_r3); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "edit");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r5.isDisabled || node_r3.disabledEditButton);
} }
function TreeHelisaComponent_mat_tree_node_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r30); const node_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.onAdd(node_r3); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "add");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r6.isDisabled || node_r3.disabledAddButton);
} }
function TreeHelisaComponent_mat_tree_node_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); const node_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.onDelete(node_r3); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "delete");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r7.isDisabled || node_r3.disabledDeleteButton);
} }
function TreeHelisaComponent_mat_tree_node_3_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_div_6_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r41); const node_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r39 = ɵngcc0.ɵɵnextContext(); return ctx_r39.onEditMode(node_r3, true); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "more_vert");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function TreeHelisaComponent_mat_tree_node_3_div_6_mat_form_field_2_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-option", 19);
    ɵngcc0.ɵɵlistener("onSelectionChange", function TreeHelisaComponent_mat_tree_node_3_div_6_mat_form_field_2_mat_option_2_Template_mat_option_onSelectionChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); const option_r43 = ctx.$implicit; const ctx_r44 = ɵngcc0.ɵɵnextContext(4); return ctx_r44.onSelectOption($event, option_r43); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r43 = ctx.$implicit;
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
    const node_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r37 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("formControl", ctx_r37.getSelectedOptions(node_r3).formControl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", node_r3.options);
} }
function TreeHelisaComponent_mat_tree_node_3_div_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r49 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_tree_node_3_div_6_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r49); const node_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r47 = ɵngcc0.ɵɵnextContext(); return ctx_r47.onEditMode(node_r3, false); });
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
    const node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r8.getSelectedOptions(node_r3).editMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.getSelectedOptions(node_r3).editMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.getSelectedOptions(node_r3).editMode);
} }
function TreeHelisaComponent_mat_tree_node_3_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r53 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 7);
    ɵngcc0.ɵɵelementStart(1, "hel-input-with-button", 20);
    ɵngcc0.ɵɵlistener("cancel", function TreeHelisaComponent_mat_tree_node_3_li_7_Template_hel_input_with_button_cancel_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); const node_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r51 = ɵngcc0.ɵɵnextContext(); return ctx_r51.onCancel(node_r3, $event); })("done", function TreeHelisaComponent_mat_tree_node_3_li_7_Template_hel_input_with_button_done_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); const node_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r54 = ɵngcc0.ɵɵnextContext(); return ctx_r54.onEdited(node_r3, $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ɵngcc0.ɵɵnextContext().$implicit;
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
    const node_r3 = ctx.$implicit;
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
    const col_r66 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", col_r66.name, " ");
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_5_ng_container_2_li_1_Template, 2, 1, "li", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r66 = ctx.$implicit;
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
    const node_r57 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", node_r57.data);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r57 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", node_r57.name, "");
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r73 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵelementStart(1, "button", 25);
    ɵngcc0.ɵɵelementStart(2, "mat-icon", 26);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "p", 27);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_div_2_Template_p_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r73); const node_r57 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r71 = ɵngcc0.ɵɵnextContext(); return ctx_r71.onRedirect(node_r57); })("dblclick", function TreeHelisaComponent_mat_nested_tree_node_4_div_2_Template_p_dblclick_4_listener() { ɵngcc0.ɵɵrestoreView(_r73); const node_r57 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r74 = ɵngcc0.ɵɵnextContext(); return ctx_r74.onDblClick(node_r57); });
    ɵngcc0.ɵɵtemplate(5, TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_5_Template, 3, 1, "ng-container", 12);
    ɵngcc0.ɵɵtemplate(6, TreeHelisaComponent_mat_nested_tree_node_4_div_2_ng_container_6_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r57 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r58 = ɵngcc0.ɵɵnextContext();
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
    const _r79 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r79); const node_r57 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r77 = ɵngcc0.ɵɵnextContext(); return ctx_r77.onEdit(node_r57); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "edit");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r57 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r59 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r59.isDisabled || node_r57.disabledEditButton);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r83 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r83); const node_r57 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r81 = ɵngcc0.ɵɵnextContext(); return ctx_r81.onAdd(node_r57); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "add");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r57 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r60 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r60.isDisabled || node_r57.disabledAddButton);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r87 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_button_7_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r87); const node_r57 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r85 = ɵngcc0.ɵɵnextContext(); return ctx_r85.onDelete(node_r57); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "delete");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r57 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r61 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r61.isDisabled || node_r57.disabledDeleteButton);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_8_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r94 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_div_8_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r94); const node_r57 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r92 = ɵngcc0.ɵɵnextContext(); return ctx_r92.onEditMode(node_r57, true); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon");
    ɵngcc0.ɵɵtext(2, "more_vert");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_8_mat_form_field_2_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    const _r98 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-option", 19);
    ɵngcc0.ɵɵlistener("onSelectionChange", function TreeHelisaComponent_mat_nested_tree_node_4_div_8_mat_form_field_2_mat_option_2_Template_mat_option_onSelectionChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r98); const option_r96 = ctx.$implicit; const ctx_r97 = ɵngcc0.ɵɵnextContext(4); return ctx_r97.onSelectOption($event, option_r96); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r96 = ctx.$implicit;
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
    const node_r57 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r90 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("formControl", ctx_r90.getSelectedOptions(node_r57).formControl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", node_r57.options);
} }
function TreeHelisaComponent_mat_nested_tree_node_4_div_8_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r102 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function TreeHelisaComponent_mat_nested_tree_node_4_div_8_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r102); const node_r57 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r100 = ɵngcc0.ɵɵnextContext(); return ctx_r100.onEditMode(node_r57, false); });
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
    const node_r57 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r62 = ɵngcc0.ɵɵnextContext();
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
    const node_r57 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
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
    const option_r2 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", option_r2)("helTooltip", option_r2.displayText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", option_r2.displayText, " ");
} }
function ComboBoxHelisaComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 4);
    ɵngcc0.ɵɵlistener("focus", function ComboBoxHelisaComponent_input_2_Template_input_focus_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onFocus(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", ctx_r0.selectedItem ? ctx_r0.listable.getDisplayText(ctx_r0.selectedItem) : ctx_r0.placeholder);
} }
const _c6 = function (a0) { return { "combo-box-selected-item": a0 }; };
function ComboBoxHelisaComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵlistener("dblclick", function ComboBoxHelisaComponent_div_3_div_3_Template_div_dblclick_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const row_r7 = ctx.$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.selectItem(row_r7); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c6, ctx_r4.selectedItem && ctx_r4.listable.compare(ctx_r4.selectedItem, row_r7)));
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
const _c7 = ["nodeComponent"];
const _c8 = ["nodeTitle"];
function PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 9);
    ɵngcc0.ɵɵlistener("click", function PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_2_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const item_r1 = ɵngcc0.ɵɵnextContext(3).$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.expandNode(item_r1); });
    ɵngcc0.ɵɵtext(1, "add");
    ɵngcc0.ɵɵelementEnd();
} }
function PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 9);
    ɵngcc0.ɵɵlistener("click", function PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_3_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const item_r1 = ɵngcc0.ɵɵnextContext(3).$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.collapseNode(item_r1); });
    ɵngcc0.ɵɵtext(1, "remove");
    ɵngcc0.ɵɵelementEnd();
} }
function PagingTreeHelisaComponent_div_2_div_1_div_1_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-icon");
} }
const _c9 = function (a0, a1) { return { expandNode: a0, withoutNode: a1 }; };
const _c10 = function (a0, a1) { return { data: a0, node: a1 }; };
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
    const node_r4 = ctx.ngIf;
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
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
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.getNodeInformation(item_r1));
} }
function PagingTreeHelisaComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, PagingTreeHelisaComponent_div_2_div_1_Template, 2, 1, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.getLevelClass(item_r1));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.getNodeInformation(item_r1).visible);
} }
function AlertInformationDataHelisaComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h1", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.title);
} }
function AlertInformationDataHelisaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.content);
} }
function AlertInformationDataHelisaComponent_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
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
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.hasCancelButton());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("mat-dialog-close", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.okLabel);
} }
class InputWithButtonComponent {
    constructor() {
        this.placeholder = '';
        this.inputFormControl = new FormControl('', Validators.required);
        this.requiredMessage = 'El campo es requerido';
        this.value = '';
        this.isFocused = false;
        this.done = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    ngOnInit() {
        if (this.value !== '') {
            this.inputFormControl.setValue(this.value);
        }
        this.nameField.nativeElement.focus();
    }
    onDone() {
        if (this.inputFormControl.valid) {
            this.done.emit(this.inputFormControl.value);
        }
    }
    onCancel() {
        this.cancel.emit();
    }
}
InputWithButtonComponent.ɵfac = function InputWithButtonComponent_Factory(t) { return new (t || InputWithButtonComponent)(); };
InputWithButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputWithButtonComponent, selectors: [["hel-input-with-button"]], viewQuery: function InputWithButtonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
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
InputWithButtonComponent.ctorParameters = () => [];
InputWithButtonComponent.propDecorators = {
    placeholder: [{ type: Input }],
    inputFormControl: [{ type: Input }],
    requiredMessage: [{ type: Input }],
    value: [{ type: Input }],
    isFocused: [{ type: Input }],
    nameField: [{ type: ViewChild, args: ['inputText', { static: true },] }],
    done: [{ type: Output }],
    cancel: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputWithButtonComponent, [{
        type: Component,
        args: [{
                selector: 'hel-input-with-button',
                template: "<div>\n  <mat-form-field>\n    <input #inputText  matInput [placeholder]=\"placeholder\" [formControl]= \"inputFormControl\">    \n    <mat-icon matSuffix (click)=\"onDone()\">done</mat-icon>\n    <mat-icon matSuffix (click)=\"onCancel()\">close</mat-icon>\n    <mat-error *ngIf=\"inputFormControl.hasError('required')\">\n      {{ requiredMessage }}\n    </mat-error>\n  </mat-form-field>\n</div>\n",
                styles: [""]
            }]
    }], function () { return []; }, { placeholder: [{
            type: Input
        }], inputFormControl: [{
            type: Input
        }], requiredMessage: [{
            type: Input
        }], value: [{
            type: Input
        }], isFocused: [{
            type: Input
        }], done: [{
            type: Output
        }], cancel: [{
            type: Output
        }], nameField: [{
            type: ViewChild,
            args: ['inputText', { static: true }]
        }] }); })();

// @dynamic
class ToastHelisaComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() { }
}
ToastHelisaComponent.ɵfac = function ToastHelisaComponent_Factory(t) { return new (t || ToastHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(MAT_SNACK_BAR_DATA)); };
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
ToastHelisaComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-toast',
                template: "<div [ngClass]=\"'toast-'+data.type\">\n  <span class=\"toast-message\">{{ data.message }}</span>\n  <ng-container *ngIf=\"!!data && !!data.subMessages\">\n    <span class=\"toast-sub-message\" *ngFor=\"let submessage of data.subMessages\">{{ submessage }}</span>\n  </ng-container>    \n</div>\n",
                styles: [""]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_SNACK_BAR_DATA]
            }] }]; }, null); })();

class ToastHelisaService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.durationInSeconds = 5;
    }
    showToast(type, message, subMessages) {
        subMessages = subMessages ? subMessages : [];
        this.snackBar.openFromComponent(ToastHelisaComponent, {
            data: { message, type, subMessages },
            duration: this.durationInSeconds * 1000
        });
    }
}
ToastHelisaService.ɵfac = function ToastHelisaService_Factory(t) { return new (t || ToastHelisaService)(ɵngcc0.ɵɵinject(ɵngcc6.MatSnackBar)); };
ToastHelisaService.ɵprov = ɵɵdefineInjectable({ factory: function ToastHelisaService_Factory() { return new ToastHelisaService(ɵɵinject(MatSnackBar)); }, token: ToastHelisaService, providedIn: "root" });
ToastHelisaService.ctorParameters = () => [
    { type: MatSnackBar }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastHelisaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc6.MatSnackBar }]; }, null); })();

var ToastType;
(function (ToastType) {
    ToastType["DONE"] = "done";
    ToastType["ERROR"] = "error";
    ToastType["INFO"] = "info";
})(ToastType || (ToastType = {}));

var AlertHelisaType;
(function (AlertHelisaType) {
    AlertHelisaType["ERROR"] = "ERROR";
    AlertHelisaType["CONFIRMATION"] = "CONFIRMATION";
})(AlertHelisaType || (AlertHelisaType = {}));

class AlertHelisaComponent {
    constructor(dialogRef, data) {
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
        this.hasCancel = data.type === AlertHelisaType.CONFIRMATION;
        dialogRef.disableClose = true;
        dialogRef.keydownEvents().subscribe((event) => {
            if (event.code === 'Escape') {
                this.dialogRef.close(this.onCancel());
            }
        });
    }
    ngOnInit() {
    }
    onCancel() {
        this.dialogRef.close();
    }
}
AlertHelisaComponent.ɵfac = function AlertHelisaComponent_Factory(t) { return new (t || AlertHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc7.MatDialogRef), ɵngcc0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
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
AlertHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-alert',
                template: "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  {{ content }}\n</div>\n<div mat-dialog-actions>\n    <button mat-button *ngIf=\"hasCancel\" [mat-dialog-close]=\"false\" >{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>{{okLabel}}</button>\n</div>",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc7.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

class AlertHelisaService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(type, title, content, okLabel, cancelLabel) {
        const dialogRef = this.dialog.open(AlertHelisaComponent, {
            width: '250px',
            data: { title, content, type, okLabel, cancelLabel }
        });
        return dialogRef.afterClosed();
    }
}
AlertHelisaService.ɵfac = function AlertHelisaService_Factory(t) { return new (t || AlertHelisaService)(ɵngcc0.ɵɵinject(ɵngcc7.MatDialog)); };
AlertHelisaService.ɵprov = ɵɵdefineInjectable({ factory: function AlertHelisaService_Factory() { return new AlertHelisaService(ɵɵinject(MatDialog)); }, token: AlertHelisaService, providedIn: "root" });
AlertHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertHelisaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc7.MatDialog }]; }, null); })();

class DependencyTableHelisaService {
    constructor() {
        this.tables = new Subject();
        this.infoTables = new Array();
        this.emitVisibilityButton$ = new Subject();
        this.emitVisibilityButton = this.emitVisibilityButton$.asObservable();
        this.emitVisibilityAllButtons$ = new Subject();
        this.emitVisibilityAllButtons = this.emitVisibilityAllButtons$.asObservable();
        this.emitIsCellSelection$ = new Subject();
        this.emitIsCellSelection = this.emitIsCellSelection$.asObservable();
        this.emitChangeColumns$ = new Subject();
        this.emitChangeColumns = this.emitChangeColumns$.asObservable();
        this.emitTotal = new Subject();
        this.emitNextPage = new Subject();
    }
    /**
     * retorna un Observable<ConfigTable[]>
     */
    getTables() {
        return this.tables;
    }
    /**
     * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
     * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
     * @param configTable Objeto que contiene la configuración para la tabla.
     * @param withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
     */
    updateDependency(configTable, withRemoveDependency = false) {
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
    }
    /**
     * Emite un evento de total con la información para la tabla correspondiente
     * @param event wrapper que contiene el indice de la tabla y la información de la pagina
     */
    setTotal(event) {
        this.emitTotal.next(event);
    }
    /**
     * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
     * @param event wrapper que contiene el indice de la tabla y la información de la pagina
     */
    addPage(event) {
        this.emitNextPage.next(event);
    }
    selectIndexRow(config) {
        if (this.infoTables[config.order]) {
            this.infoTables[config.order].indexRowSelect = config.indexRowSelect;
            this.tables.next(this.infoTables);
        }
    }
    /**
     * Muestra o esconde el boton una tabla en especifico
     * @param event para indicar el index de la tabla y en "data" true o false
     */
    changeVisibilityButton(event) {
        this.emitVisibilityButton$.next(event);
    }
    /**
     * Esconde los botones de todas las tablas
     * @param show indicar si se muestran o no todos los botones de las tablas
     */
    changeVisibilityAllButtons(show) {
        this.emitVisibilityAllButtons$.next(show);
    }
    /**
     * Para habilitar el manejo de selección de celda
     * @param event para indicar el index de la tabla y en "data" true o false
     */
    changeisCellSelection(event) {
        this.emitIsCellSelection$.next(event);
    }
    /**
     * Para habilitar el cambio de columnas
     * @param event para indicar el index de la tabla y en "data" columnas
     */
    changeColumnsByTable(event) {
        this.emitChangeColumns$.next(event);
    }
}
DependencyTableHelisaService.ɵfac = function DependencyTableHelisaService_Factory(t) { return new (t || DependencyTableHelisaService)(); };
DependencyTableHelisaService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DependencyTableHelisaService, factory: DependencyTableHelisaService.ɵfac });
DependencyTableHelisaService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DependencyTableHelisaService, [{
        type: Injectable
    }], function () { return []; }, null); })();

class TableHelisaService {
    constructor() {
        this.emitChangeSource = new Subject();
        this.emitNextPage = new Subject();
        this.totalReturn = this.emitChangeSource.asObservable();
        this.nextPageReturn = this.emitNextPage.asObservable();
        this.emitVisibleButton$ = new Subject();
        /**
         * Observable para saber si se debe mostrar o esconder el boton de add row
         */
        this.emitVisibleButton = this.emitVisibleButton$.asObservable();
    }
    setTotal(total, table) {
        this.emitChangeSource.next({ obj: total, table });
    }
    addPage(page, table) {
        this.emitNextPage.next({ obj: page, table });
    }
    /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param change indicar si se muestra o no el boton de add row de la tabla
     */
    changeVisibilityButton(change) {
        this.emitVisibleButton$.next(change);
    }
}
TableHelisaService.ɵfac = function TableHelisaService_Factory(t) { return new (t || TableHelisaService)(); };
TableHelisaService.ɵprov = ɵɵdefineInjectable({ factory: function TableHelisaService_Factory() { return new TableHelisaService(); }, token: TableHelisaService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TableHelisaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class DependencyTableHelisaComponent {
    constructor(dependencyTableHelisaService, tableService) {
        this.dependencyTableHelisaService = dependencyTableHelisaService;
        this.tableService = tableService;
        this.tables = [];
        this.showToolTip = true;
        /**
         * deprecated, use selectObject
         */
        this.selected = new EventEmitter();
        this.selectObject = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.total = new EventEmitter();
        this.sort = new EventEmitter();
        this.drop = new EventEmitter();
        this.addRow = new EventEmitter();
        this.selectCell = new EventEmitter();
        this.bookClicked = new EventEmitter();
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
    ngOnInit() {
        this.getTables();
        this.dependencyTableHelisaService.emitNextPage.subscribe((event) => {
            this.tableService.addPage(event.data, this.viewTables.toArray()[event.index]);
        });
        this.dependencyTableHelisaService.emitTotal.subscribe((event) => {
            this.tableService.setTotal(event.data, this.viewTables[event.index]);
        });
        // Observable para mostrar o esconder el boton de una tabla
        this.dependencyTableHelisaService.emitVisibilityButton.subscribe((data) => {
            if (!!data && data.index !== undefined) {
                const table = this.tables[data.index];
                if (!!table) {
                    table.addRowButton.showButton = data.data;
                }
            }
        });
        // Observable para mostrar o esconder los botones de todas las tablas
        this.dependencyTableHelisaService.emitVisibilityAllButtons.subscribe((data) => {
            if (data !== undefined && data != null) {
                this.tables.forEach((element) => {
                    if (!!element.addRowButton) {
                        element.addRowButton.showButton = data;
                    }
                });
            }
        });
        // Observable para manejo de selección de celdas
        this.dependencyTableHelisaService.emitIsCellSelection.subscribe((data) => {
            if (!!data && data.index !== undefined) {
                const table = this.tables[data.index];
                if (table) {
                    table.isCellSelection = data.data;
                }
            }
        });
        // Observable para manejo de columnas
        this.dependencyTableHelisaService.emitChangeColumns.subscribe((data) => {
            if (!!data && data.index !== undefined) {
                const table = this.tables[data.index];
                if (table) {
                    table.columns = data.data;
                }
            }
        });
    }
    /**
     * retorna el servicio que gestiona el componente.
     */
    getService() {
        return this.dependencyTableHelisaService;
    }
    /**
     * Obtiene un observable con las tablas dependientes desde el servicio.
     */
    getTables() {
        this.dependencyTableHelisaService.getTables()
            .subscribe((tables) => {
            this.tables.splice(0, this.tables.length, ...tables);
            this.viewTables.forEach((item) => {
                item.reload();
            });
        });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla seleccionada
     * @param data retorna la fila que fue seleccionada
     */
    onSelectedDependency(index, event) {
        this.selectedObject = { index, data: event };
        this.selected.emit({ index, data: event.value });
        this.selectObject.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onNextPage(index, event) {
        this.nextPage.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onTotal(index, event) {
        this.total.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onSort(index, event) {
        this.sort.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onDrop(index, event) {
        this.drop.emit({ index, data: event });
    }
    /**
     * Evento que se dispara desde una tabla, emite el indice de la tabla al cual se le debe añadir una nueva fila
     * @param index indica el indice de la tabla de la cual se dispara el evento
     */
    onAddRow(index) {
        this.addRow.emit(index);
    }
    selectedCell(index, event) {
        if (this.tables[index].isCellSelection) {
            this.selectCell.emit({ index, data: event });
        }
    }
    onBookClicked(index, event) {
        this.bookClicked.emit({ index, data: event });
    }
}
DependencyTableHelisaComponent.ɵfac = function DependencyTableHelisaComponent_Factory(t) { return new (t || DependencyTableHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(DependencyTableHelisaService), ɵngcc0.ɵɵdirectiveInject(TableHelisaService)); };
DependencyTableHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DependencyTableHelisaComponent, selectors: [["hel-dependency-table"]], viewQuery: function DependencyTableHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewTables = _t);
    } }, inputs: { showToolTip: "showToolTip", hideDelay: "hideDelay", showDelay: "showDelay" }, outputs: { selected: "selected", selectObject: "selectObject", nextPage: "nextPage", total: "total", sort: "sort", drop: "drop", addRow: "addRow", selectCell: "selectCell", bookClicked: "bookClicked" }, features: [ɵngcc0.ɵɵProvidersFeature([DependencyTableHelisaService])], decls: 2, vars: 1, consts: [["class", "table-test", 3, "dataSource", "columnConfiguration", "isRemote", "count", "selectedIndexRow", "isDragged", "addRowButton", "configRowStylesFromColumn", "configColumnClass", "isCellSelection", "addBookButton", "showToolTip", "hideDelay", "showDelay", "selectObject", "nextPage", "total", "sort", "drop", "addRow", "selectCell", "bookClicked", 4, "ngFor", "ngForOf"], [1, "table-test", 3, "dataSource", "columnConfiguration", "isRemote", "count", "selectedIndexRow", "isDragged", "addRowButton", "configRowStylesFromColumn", "configColumnClass", "isCellSelection", "addBookButton", "showToolTip", "hideDelay", "showDelay", "selectObject", "nextPage", "total", "sort", "drop", "addRow", "selectCell", "bookClicked"], ["viewTables", ""]], template: function DependencyTableHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, DependencyTableHelisaComponent_hel_table_1_Template, 2, 14, "hel-table", 0);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tables);
    } }, directives: function () { return [ɵngcc5.NgForOf, TableHelisaComponent]; }, styles: [""] });
DependencyTableHelisaComponent.ctorParameters = () => [
    { type: DependencyTableHelisaService },
    { type: TableHelisaService }
];
DependencyTableHelisaComponent.propDecorators = {
    viewTables: [{ type: ViewChildren, args: ['viewTables',] }],
    showToolTip: [{ type: Input }],
    selected: [{ type: Output }],
    selectObject: [{ type: Output }],
    nextPage: [{ type: Output }],
    total: [{ type: Output }],
    sort: [{ type: Output }],
    drop: [{ type: Output }],
    addRow: [{ type: Output }],
    selectCell: [{ type: Output }],
    bookClicked: [{ type: Output }],
    hideDelay: [{ type: Input }],
    showDelay: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DependencyTableHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-dependency-table',
                template: "<div>    \n  <hel-table #viewTables *ngFor=\"let table of tables; let i = index;\" class=\"table-test\"\n    [dataSource]=\"table.dataSource\" [columnConfiguration]=\"table.columns\" [isRemote]=\"table.isRemote\" [count]=\"table.count\"\n    (selectObject)=\"onSelectedDependency(i, $event)\" [selectedIndexRow]=\"table.indexRowSelect\" (nextPage)=\"onNextPage(i, $event)\"\n    (total)=\"onTotal(i, $event)\" (sort)=\"onSort(i, $event)\" [isDragged]=\"table.isDragged\" (drop)=\"onDrop(i, $event)\"\n    (addRow)=\"onAddRow(i)\" [addRowButton]=\"table.addRowButton\" [configRowStylesFromColumn]=\"table.configRowStylesFromColumn\" [configColumnClass]=\"table.configColumnClass\"\n    [isCellSelection]=\"table.isCellSelection\" (selectCell)=\"selectedCell(i, $event)\"\n    [addBookButton]=\"(table.addBookButton != null)?table.addBookButton:false\"\n    (bookClicked)=\"onBookClicked(i,$event)\"\n    [showToolTip]=\"showToolTip\"\n    [hideDelay]=\"hideDelay\" [showDelay]=\"showDelay\">\n  </hel-table>\n</div>\n",
                providers: [DependencyTableHelisaService],
                styles: [""]
            }]
    }], function () { return [{ type: DependencyTableHelisaService }, { type: TableHelisaService }]; }, { showToolTip: [{
            type: Input
        }], selected: [{
            type: Output
        }], selectObject: [{
            type: Output
        }], nextPage: [{
            type: Output
        }], total: [{
            type: Output
        }], sort: [{
            type: Output
        }], drop: [{
            type: Output
        }], addRow: [{
            type: Output
        }], selectCell: [{
            type: Output
        }], bookClicked: [{
            type: Output
        }], hideDelay: [{
            type: Input
        }], showDelay: [{
            type: Input
        }], viewTables: [{
            type: ViewChildren,
            args: ['viewTables']
        }] }); })();

var InputHelisaType;
(function (InputHelisaType) {
    InputHelisaType[InputHelisaType["DEFAULT"] = 0] = "DEFAULT";
    InputHelisaType[InputHelisaType["IDENTITY"] = 1] = "IDENTITY";
    InputHelisaType[InputHelisaType["NUMERIC"] = 2] = "NUMERIC";
    InputHelisaType[InputHelisaType["DOUBLE"] = 3] = "DOUBLE";
})(InputHelisaType || (InputHelisaType = {}));
class InputHelisaComponent {
    constructor() {
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
        this.type = InputHelisaType.DEFAULT;
        /**
         * Deprecated
         */
        this.setValue = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.blur = new EventEmitter();
        this.formControlMask = new FormControl('');
        this.realValue = '';
        this.inputFormReal = new FormControl('');
    }
    set inputFormControl(formControl) {
        this.inputFormReal = formControl;
        this.inputFormReal.registerOnDisabledChange(((isDisabled) => {
            if (isDisabled) {
                this.formControlMask.disable();
            }
            else {
                this.formControlMask.enable();
            }
        }));
        this.inputFormReal.valueChanges.subscribe((data) => {
            this.statusChange(this.inputFormReal.status);
            if (this.getMaskedValue(data) !== this.formControlMask.value) {
                this.change(data);
                if (this.isFocused) {
                    this.onFocus(null);
                }
            }
        });
        this.formControlMask.setValidators(this.inputFormReal.validator);
        this.change(this.inputFormReal.value);
        // disable control
        if (formControl.disabled) {
            this.formControlMask.disable({ onlySelf: true });
        }
        this.inputFormReal.statusChanges.subscribe((data) => {
            this.statusChange(data);
            if (this.isFocused) {
                this.onFocus(null);
            }
        });
    }
    statusChange(data) {
        if (data === 'INVALID') {
            this.formControlMask.setErrors({ key: 'Error de validación.' });
            this.formControlMask.markAsTouched();
        }
        else {
            this.formControlMask.setErrors(null);
        }
    }
    ngOnInit() {
        if (this.isFocused) {
            this.inputText.nativeElement.focus();
        }
    }
    ngAfterViewInit() {
        // this.isParentDisabled();
    }
    /*isParentDisabled(): void {
      setTimeout(() => {
        if (this.nameInput.nativeElement.closest('.hw-disabled-mode')) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      });
    }*/
    search() {
        this.setValue.emit(this.realValue);
    }
    change(event) {
        if (event != null) {
            event = event + '';
        }
        let position = this.inputText.nativeElement.selectionStart;
        const length = event ? event.length : 0;
        this.realValue = this.getRealValue(event);
        if (this.getMaskedValue(this.realValue) !== this.formControlMask.value) {
            this.formControlMask.setValue(this.getMaskedValue(this.realValue));
            position += this.inputText.nativeElement.value.length - length;
            this.inputText.nativeElement.selectionStart = position;
            this.inputText.nativeElement.selectionEnd = position;
        }
        this.inputFormReal.setValue(this.realValue);
    }
    getMaskedValue(str) {
        if (str == null) {
            return str;
        }
        str = str + '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        let maskedStr = '';
        if (this.type === InputHelisaType.IDENTITY) {
            for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.DECIMAL_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type === InputHelisaType.NUMERIC) {
            for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        if (this.type === InputHelisaType.DOUBLE) {
            if (str.indexOf(this.DECIMAL_SEPARATOR) >= 0) {
                for (let i = str.indexOf(this.DECIMAL_SEPARATOR); i < str.length; i++) {
                    maskedStr += str[i];
                }
            }
            for (let i = (str.indexOf(this.DECIMAL_SEPARATOR) >= 0 ? str.indexOf(this.DECIMAL_SEPARATOR) : str.length) - 1, j = 0; i >= 0; i--, j++) {
                if (j > 0 && j % 3 === 0) {
                    maskedStr = this.THOUSAND_SEPARATOR + maskedStr;
                }
                maskedStr = str[i] + maskedStr;
            }
        }
        return maskedStr;
    }
    getRealValue(str) {
        if (str == null) {
            return str;
        }
        str = str + '';
        let realStr = '';
        if (this.type === InputHelisaType.DEFAULT) {
            return str;
        }
        if (this.type === InputHelisaType.IDENTITY) {
            for (const strItem of str) {
                if (strItem.match('[0-9]')) {
                    realStr += strItem;
                }
            }
        }
        if (this.type === InputHelisaType.NUMERIC) {
            for (const strItem of str) {
                if (strItem.match('[0-9]')) {
                    realStr += strItem;
                }
            }
        }
        if (this.type === InputHelisaType.DOUBLE) {
            let haveDot = false;
            for (const strItem of str) {
                if (strItem.match('[0-9]') || ((strItem === this.DECIMAL_SEPARATOR) && !haveDot)) {
                    realStr += strItem;
                }
                haveDot = haveDot || (strItem === this.DECIMAL_SEPARATOR);
            }
        }
        return realStr;
    }
    onFocus($event) {
        if ((this.type === InputHelisaType.NUMERIC || this.type === InputHelisaType.DOUBLE) &&
            Number(this.getRealValue(this.inputText.nativeElement.value)) === 0) {
            this.inputText.nativeElement.select();
        }
    }
}
InputHelisaComponent.ɵfac = function InputHelisaComponent_Factory(t) { return new (t || InputHelisaComponent)(); };
InputHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputHelisaComponent, selectors: [["hel-input"]], viewQuery: function InputHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
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
InputHelisaComponent.ctorParameters = () => [];
InputHelisaComponent.propDecorators = {
    placeholder: [{ type: Input }],
    floatLabel: [{ type: Input }],
    minlength: [{ type: Input }],
    maxlength: [{ type: Input }],
    autocompleteMode: [{ type: Input }],
    isSearch: [{ type: Input }],
    isFocused: [{ type: Input }],
    disabled: [{ type: Input }],
    type: [{ type: Input }],
    setValue: [{ type: Output }],
    blur: [{ type: Output }],
    inputText: [{ type: ViewChild, args: ['inputText', { static: true },] }],
    inputFormControl: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-input',
                template: "<mat-form-field [floatLabel]=\"floatLabel\">\n  <input #inputText matInput placeholder=\"{{placeholder}}\"\n  (keyup.enter)=\"search()\" [formControl]= \"formControlMask\"\n  [attr.disabled]=\"disabled ? 'disabled' : null\" (ngModelChange)=\"change($event)\"\n  [autocomplete]=\"(autocompleteMode) ? 'on' : 'off'\" (blur)=\"blur.emit($event)\" [minlength]=\"minlength\" [maxlength]=\"maxlength\" (focus)=\"onFocus($event)\">\n  <mat-icon matSuffix (click)=\"search()\" *ngIf=\"isSearch\">search</mat-icon>\n</mat-form-field>\n",
                styles: ["::ng-deep hel-autocomplete .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix input{text-overflow:ellipsis}"]
            }]
    }], function () { return []; }, { placeholder: [{
            type: Input
        }], floatLabel: [{
            type: Input
        }], autocompleteMode: [{
            type: Input
        }], isSearch: [{
            type: Input
        }], isFocused: [{
            type: Input
        }], disabled: [{
            type: Input
        }], type: [{
            type: Input
        }], setValue: [{
            type: Output
        }], blur: [{
            type: Output
        }], inputFormControl: [{
            type: Input
        }], minlength: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], inputText: [{
            type: ViewChild,
            args: ['inputText', { static: true }]
        }] }); })();

var ColumnType;
(function (ColumnType) {
    ColumnType[ColumnType["NORMAL"] = 0] = "NORMAL";
    ColumnType[ColumnType["URL"] = 1] = "URL";
})(ColumnType || (ColumnType = {}));
var EventScope;
(function (EventScope) {
    EventScope[EventScope["USER"] = 0] = "USER";
    EventScope[EventScope["CODE_CALL"] = 1] = "CODE_CALL";
})(EventScope || (EventScope = {}));
var TotalType;
(function (TotalType) {
    TotalType[TotalType["SUM"] = 0] = "SUM";
    TotalType[TotalType["AVERAGE"] = 1] = "AVERAGE";
    TotalType[TotalType["COUNT"] = 2] = "COUNT";
})(TotalType || (TotalType = {}));
var ChangeColumnConfigurationType;
(function (ChangeColumnConfigurationType) {
    ChangeColumnConfigurationType[ChangeColumnConfigurationType["SORT"] = 0] = "SORT";
    ChangeColumnConfigurationType[ChangeColumnConfigurationType["UNKNOWN"] = 1] = "UNKNOWN";
    ChangeColumnConfigurationType[ChangeColumnConfigurationType["TOTAL"] = 2] = "TOTAL";
})(ChangeColumnConfigurationType || (ChangeColumnConfigurationType = {}));
var TableHelisaType;
(function (TableHelisaType) {
    TableHelisaType[TableHelisaType["REMOTE"] = 0] = "REMOTE";
    TableHelisaType[TableHelisaType["LOCAL"] = 1] = "LOCAL";
})(TableHelisaType || (TableHelisaType = {}));
// @dynamic
class ColumnConfigUtil {
    getValue(obj, column) {
        return column.name.split('.').reduce((o, field) => o && o[field], obj);
    }
}

class TableHelisaConnectComponent {
    constructor() {
        this.page = 0;
        this.isLastPage = false;
        this.isUsed = false;
    }
    getBody(columnConfig, search) {
        return {};
    }
    nextPage() {
        return this.page++;
    }
}

var RowType;
(function (RowType) {
    RowType[RowType["GROUP_TITLE"] = 0] = "GROUP_TITLE";
    RowType[RowType["GROUP_FOOTER"] = 1] = "GROUP_FOOTER";
    RowType[RowType["ROW"] = 2] = "ROW";
})(RowType || (RowType = {}));
class TableHelisaComponent {
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
TableHelisaComponent.ɵfac = function TableHelisaComponent_Factory(t) { return new (t || TableHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(TableHelisaService)); };
TableHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TableHelisaComponent, selectors: [["hel-table"]], viewQuery: function TableHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(MatSort, true);
        ɵngcc0.ɵɵstaticViewQuery(MatTable, true);
        ɵngcc0.ɵɵstaticViewQuery(MatTable, true, ElementRef);
        ɵngcc0.ɵɵstaticViewQuery(_c2, true);
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
        ɵngcc0.ɵɵproperty("matRowDefColumns", ɵngcc0.ɵɵpureFunction0(15, _c3))("matRowDefWhen", ctx.isGroupTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("matRowDefColumns", ctx.displayedColumnsWithFooter)("matRowDefWhen", ctx.isGroupFooter);
    } }, directives: function () { return [ɵngcc5.NgIf, ɵngcc9.MatTable, ɵngcc10.MatSort, ɵngcc5.NgClass, ɵngcc5.NgForOf, ɵngcc9.MatColumnDef, ɵngcc9.MatCellDef, ɵngcc9.MatRowDef, InputHelisaComponent, ɵngcc9.MatFooterCellDef, ɵngcc9.MatHeaderCellDef, ɵngcc9.MatHeaderCell, HelTooltipDirective, ɵngcc10.MatSortHeader, ɵngcc9.MatCell, ɵngcc8.MatButton, ExternalLinkDirective, ɵngcc9.MatFooterCell, ɵngcc11.MatTooltip, ɵngcc9.MatFooterRowDef, ɵngcc9.MatFooterRow, ɵngcc9.MatHeaderRowDef, ɵngcc9.MatHeaderRow, ɵngcc9.MatRow]; }, pipes: function () { return [ExternalLinkPipe]; }, styles: ["table[_ngcontent-%COMP%]{table-layout:fixed}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:26px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{box-shadow:inset 0 1px 0 0 #b6b6b6}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:auto;line-height:inherit}tfoot[_ngcontent-%COMP%]{display:none}tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{box-shadow:inset 0 1px 0 0 #b7b7b7}  hel-table{position:relative}  hel-table>button{align-items:flex-start;background:transparent;border:none;color:transparent;cursor:pointer;display:flex;height:26px;justify-content:center;opacity:.5;overflow:hidden;position:absolute;right:0;top:0;width:20px;z-index:101}  hel-table>button:focus{outline:none}  hel-table>button:hover{opacity:1}  hel-table>button:before{align-items:center;color:#fff;content:\"+\";display:flex;font-size:20px;height:26px;justify-content:center;position:absolute;width:20px}  hel-table>button+.div-table-helisa .container-table .table-helisa thead tr th:last-child{padding-right:20px}  hel-table .buttons-container{order:2}  hel-table .buttons-container.hasSubtitle,   hel-table .buttons-container.hasTitle{padding-top:26px}  hel-table .buttons-container.hasTitle.hasSubtitle{padding-top:52px}  hel-table .buttons-container>div{height:26px}  hel-table .buttons-container>div button{align-items:center;display:flex;height:26px;justify-content:center}  hel-table .buttons-container>div button>*{display:flex;height:100%}  hel-table .div-table-helisa{height:100%}  hel-table .div-table-helisa .container-table{display:flex;height:100%;width:100%}  hel-table .div-table-helisa .container-table .table-helisa{width:100%}  hel-table .div-table-helisa .container-table .table-helisa   table{table-layout:fixed}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr,   hel-table .div-table-helisa .container-table .table-helisa   tfoot tr,   hel-table .div-table-helisa .container-table .table-helisa   thead tr{height:26px}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr td,   hel-table .div-table-helisa .container-table .table-helisa   tbody tr th,   hel-table .div-table-helisa .container-table .table-helisa   tfoot tr td,   hel-table .div-table-helisa .container-table .table-helisa   tfoot tr th,   hel-table .div-table-helisa .container-table .table-helisa   thead tr td,   hel-table .div-table-helisa .container-table .table-helisa   thead tr th{overflow:hidden;padding:2px 10px 0;text-overflow:ellipsis}  hel-table .div-table-helisa .container-table .table-helisa   thead tr th{background:#579380;color:#fff;font-size:18px;text-transform:uppercase}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr{box-shadow:inset 0 1px 0 0 #b6b6b6}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr td{border:none;box-shadow:inset 1px 0 0 0 #b7b7b7}  hel-table .div-table-helisa .container-table .table-helisa   tbody tr td button{height:auto;line-height:inherit}  hel-table .div-table-helisa .container-table .table-helisa   tfoot{display:none}  hel-table .div-table-helisa .container-table .table-helisa   tfoot tr td{box-shadow:inset 0 1px 0 0 #b7b7b7}  hel-table .div-table-helisa .container-table .table-helisa .selected-row{background:silver;font-weight:700}"] });
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
    }], function () { return [{ type: TableHelisaService }]; }, { sort: [{
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

const moment = moment_;
var TypeCalendarEnum;
(function (TypeCalendarEnum) {
    TypeCalendarEnum["NORMAL"] = "norma";
    TypeCalendarEnum["MONTH_YEAR"] = "mounth-year";
    TypeCalendarEnum["STRICT"] = "strict";
})(TypeCalendarEnum || (TypeCalendarEnum = {}));
class DateHelisaComponent {
    constructor() {
        this.floatLabel = 'never';
        this.dateFormControl = new FormControl('');
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
        this.change = new EventEmitter();
        this.isClosed = false;
        this.isDisabled = false;
        /**
         * Si este valor es diferente a TypeCalendarEnum.NORMAL no
         * será tomado en cuenta
         */
        this.typeCalendar = TypeCalendarEnum.NORMAL;
        /**
         * Para evitar nuevos eventos miestras se realiza el parseo
         */
        this.isFromInputEvent = false;
        /**
         * Verificar si el formato es valido
         */
        this.invalidFormat = false;
        this.inputFormReal = new FormControl('');
    }
    /*
    * TypeCalendarEnum.MONTH_YEAR = 'MM/YYYY'
    * TypeCalendarEnum.STRICT = 'DD [de] MMMM [de] YYYY'
    * */
    ngOnInit() {
        moment.locale(this.locale);
        this.dateToVisualize = new FormControl('', this.dateFormControl.validator);
        this.formHandler();
        this.inputFormReal = this.dateFormControl;
        this.inputFormReal.registerOnDisabledChange((isDisabled) => {
            if (isDisabled) {
                this.isDisabled = true;
                this.dateToVisualize.disable();
            }
            else {
                this.isDisabled = false;
                this.dateToVisualize.enable();
            }
        });
        /**
         * establecer valor por defecto de la fecha
         */
        if (this.dateFormControl.value !== '' && this.dateFormControl.value !== null) {
            const incomingDate = moment(this.dateFormControl.value, this.dateFormat).format(this.dateFormat);
            if (incomingDate !== 'Invalid date') {
                this.dateToVisualize.setValue(incomingDate);
                this.dateFormControl.setValue(this.dateFormControl.value);
            }
        }
    }
    get typeCalendarEnum() {
        return TypeCalendarEnum;
    }
    openDatePicker() {
        if (this.showDatePicker && !this.isClosed) {
            this.isClosed = true;
            this.timeout = setTimeout(() => {
                this.datePickerShow.open();
            }, 2000);
        }
    }
    onKey(event) {
        if (event.key === ' ' && this.showDatePicker) {
            this.onBlur();
            this.isClosed = true;
            this.datePickerShow.open();
        }
    }
    onBlur() {
        clearTimeout(this.timeout);
        this.isClosed = false;
    }
    /**
     * Determina como se debe inicializar la visualizacion del calendar
     */
    getStartView() {
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
    }
    formHandler() {
        if (this.typeCalendar === this.typeCalendarEnum.STRICT) {
            this.dateToVisualize.valueChanges.subscribe((date) => {
                this.invalidFormat = false;
                const isValid = moment(date, this.dateFormat, true).isValid();
                const result = moment(date, this.dateFormat).format(this.dateFormat);
                if (!!result && (result === 'Invalid date' || !isValid)) {
                    this.invalidFormat = true;
                    return;
                }
                if (!!result) {
                    if (!this.isFromInputEvent) {
                        this.isFromInputEvent = true;
                        this.dateToVisualize.setValue(moment(result, this.dateFormat).format(this.dateFormat));
                        this.dateFormControl.setValue(moment(result, this.dateFormat).toDate());
                        this.isFromInputEvent = false;
                    }
                    else {
                        setTimeout(() => {
                            this.isFromInputEvent = false;
                        }, 1500);
                    }
                }
            });
        }
        else {
            this.dateToVisualize.valueChanges
                .pipe(tap((date) => {
                if (date.length > this.dateFormat.length) {
                    this.invalidFormat = true;
                }
                else {
                    this.invalidFormat = false;
                }
            }), filter((date) => date.length === this.dateFormat.length))
                .subscribe((date) => {
                this.invalidFormat = false;
                const isValid = moment(date, this.dateFormat, true).isValid();
                const result = moment(date, this.dateFormat).format('YYYY-MM-DD');
                if (!!result && (result === 'Invalid date' || !isValid)) {
                    this.invalidFormat = true;
                    return;
                }
                if (!!result) {
                    if (!this.isFromInputEvent) {
                        this.isFromInputEvent = true;
                        const subString = result.split('-');
                        const year = parseFloat(subString[0]);
                        const month = parseFloat(subString[1]);
                        const day = parseFloat(subString[2]);
                        this.date.setFullYear(year);
                        this.date.setDate(day);
                        this.date.setMonth(month - 1); // -1 por que los meses se toman como los indices en un array
                        /** cuando es de tipo MOUNTH_YEAR retorna el ultimo dia del mes seleccionado */
                        if (this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
                            this.date = moment(this.date).endOf('month').toDate();
                        }
                        this.dateToVisualize.setValue(moment(this.date, 'YYYY-MM-DD').format(this.dateFormat));
                        this.dateFormControl.setValue(this.date);
                        this.isFromInputEvent = false;
                    }
                    else {
                        setTimeout(() => {
                            this.isFromInputEvent = false;
                        }, 1500);
                    }
                }
            });
        }
        this.dateFormControl.valueChanges
            .subscribe((date) => {
            const incommingDate = moment(date, this.dateFormat).format(this.dateFormat);
            if (this.dateFormControl.value !== '' && incommingDate !== 'Invalid date') {
                this.dateToVisualize.setValue(incommingDate);
            }
        });
    }
    /**
     * Evento que se dispara luego seleccionar un mes
     */
    monthSelectedHandler(chosenMonthDate, datepicker) {
        if (this.typeCalendar === TypeCalendarEnum.MONTH_YEAR) {
            datepicker.close();
            const date = moment(chosenMonthDate).endOf('month').toDate();
            this.dateToVisualize.setValue(moment(date, 'YYYY-MM-DD').format(this.dateFormat));
            this.dateFormControl.setValue(date);
        }
    }
    /**
     * Evento desde el control touch del calendar
     */
    dateChange(type, event) {
        this.dateToVisualize.setValue(moment(event.value, 'YYYY-MM-DD').format(this.dateFormat));
        this.dateFormControl.setValue(event.value);
        this.change.emit(event.value);
        this.isClosed = true;
    }
    getErrorMessage() {
        return this.errorMessage + this.dateFormat;
    }
}
DateHelisaComponent.ɵfac = function DateHelisaComponent_Factory(t) { return new (t || DateHelisaComponent)(); };
DateHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DateHelisaComponent, selectors: [["hel-date-helisa"]], viewQuery: function DateHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c4, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.datePickerShow = _t.first);
    } }, inputs: { floatLabel: "floatLabel", dateFormControl: "dateFormControl", dateFormat: "dateFormat", locale: "locale", errorMessage: "errorMessage", placeholder: "placeholder", showDatePicker: "showDatePicker", typeCalendar: "typeCalendar", minDate: "minDate", maxDate: "maxDate" }, outputs: { change: "change" }, decls: 8, vars: 11, consts: [[1, "example-full-width", 3, "floatLabel"], ["matInput", "", 3, "formControl", "placeholder", "keydown", "focus", "blur"], ["matInput", "", "hidden", "hide", 3, "matDatepicker", "value", "min", "max", "dateChange"], ["matSuffix", "", 3, "for", "disabled"], ["touchUi", "", 3, "startView", "monthSelected"], ["picker", ""], [4, "ngIf"]], template: function DateHelisaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = ɵngcc0.ɵɵgetCurrentView();
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
        ɵngcc0.ɵɵlistener("monthSelected", function DateHelisaComponent_Template_mat_datepicker_monthSelected_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const _r0 = ɵngcc0.ɵɵreference(6); return ctx.monthSelectedHandler($event, _r0); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, DateHelisaComponent_mat_error_7_Template, 2, 1, "mat-error", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(6);
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
DateHelisaComponent.ctorParameters = () => [];
DateHelisaComponent.propDecorators = {
    datePickerShow: [{ type: ViewChild, args: ['picker', { static: true },] }],
    floatLabel: [{ type: Input }],
    dateFormControl: [{ type: Input }],
    dateFormat: [{ type: Input }],
    locale: [{ type: Input }],
    errorMessage: [{ type: Input }],
    placeholder: [{ type: Input }],
    showDatePicker: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    change: [{ type: Output }],
    typeCalendar: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-date-helisa',
                template: "<div>\n  <mat-form-field class=\"example-full-width\" [floatLabel]=\"floatLabel\">\n    <input matInput\n    [formControl]= \"dateToVisualize\" [placeholder]=\"placeholder\" (keydown)=\"onKey($event)\" (focus)=\"openDatePicker()\" (blur)=\"onBlur()\">\n\n\n    <!-- NO BORRAR!!! Este input no es visible y solo es necesario para disparar el evento cuan se selecciona una fecha desde el calendar\n      ya que el valor es diferente cuando se escribe directamente en este\n    -->\n    <input matInput\n    [matDatepicker]=\"picker\"\n    hidden=\"hide\"\n    [value]=\"dateToVisualize.value\"\n    (dateChange)=\"dateChange('change', $event)\" [min]=\"minDate\" [max]=\"maxDate\">\n    <!--  -->\n\n    <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"isDisabled\"></mat-datepicker-toggle>\n    <mat-datepicker touchUi #picker [startView]=\"getStartView()\" (monthSelected)=\"monthSelectedHandler($event,picker)\"></mat-datepicker>\n\n  </mat-form-field>\n  <mat-error *ngIf=\"invalidFormat\">{{getErrorMessage()}}</mat-error>\n  </div>\n",
                styles: [""]
            }]
    }], function () { return []; }, { floatLabel: [{
            type: Input
        }], dateFormControl: [{
            type: Input
        }], dateFormat: [{
            type: Input
        }], locale: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], showDatePicker: [{
            type: Input
        }], change: [{
            type: Output
        }], typeCalendar: [{
            type: Input
        }], datePickerShow: [{
            type: ViewChild,
            args: ['picker', { static: true }]
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }] }); })();

class TreeHelisaService {
    constructor() {
        // Observable string sources
        this.emitNodeSelected = new BehaviorSubject(1);
        // Observable string streams
        this.nodeSelected = this.emitNodeSelected.asObservable();
        // Observable string sources
        this.emitDataSource = new BehaviorSubject(undefined);
        // Observable string streams
        this.dataSourceObservable = this.emitDataSource.asObservable();
        // Expand node observable
        this.emitExpandAllNodes = new BehaviorSubject(null);
        this.nodeExpand = this.emitExpandAllNodes.asObservable();
        // Collapse node observable
        this.emitCollapseAllNodes = new BehaviorSubject(null);
        this.nodeCollapse = this.emitCollapseAllNodes.asObservable();
        this.emitRefreshTree = new Subject();
        this.refreshTreeObservable = this.emitRefreshTree.asObservable();
        this.emitRefreshTreeWithPagination = new Subject();
        this.refreshTreeWithPaginationObservable = this.emitRefreshTreeWithPagination.asObservable();
        this.emitExpandOneNode = new Subject();
        this.expandOneNodeObservable = this.emitExpandOneNode.asObservable();
        this.emitCollapseOneNode = new Subject();
        this.collapseOneNodeObservable = this.emitCollapseOneNode.asObservable();
    }
    // Service message commands
    changeNodeSelected(idResidentialArea) {
        this.emitNodeSelected.next(idResidentialArea);
    }
    // Service message commands
    changeDataSource(data) {
        this.emitDataSource.next(data);
    }
    expandAllNodes(expand) {
        this.emitExpandAllNodes.next(expand);
    }
    collapseAllNodes(collapse) {
        this.emitCollapseAllNodes.next(collapse);
    }
    refreshTree() {
        this.emitRefreshTree.next();
    }
    refreshTreeWithPagination() {
        this.emitRefreshTreeWithPagination.next();
    }
    expandOneNode(node) {
        this.emitExpandOneNode.next(node);
    }
    collapseOneNode(node) {
        this.emitCollapseOneNode.next(node);
    }
}
TreeHelisaService.ɵfac = function TreeHelisaService_Factory(t) { return new (t || TreeHelisaService)(); };
TreeHelisaService.ɵprov = ɵɵdefineInjectable({ factory: function TreeHelisaService_Factory() { return new TreeHelisaService(); }, token: TreeHelisaService, providedIn: "root" });
TreeHelisaService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeHelisaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class TreeHelisaConnect {
    constructor() {
        this.page = 0;
        this.isLastPage = false;
        this.isUsed = false;
    }
    nextPage() {
        return this.page = this.page + 1;
    }
}

class TreeHelisaComponent {
    //#endregion ====== Variables ========
    constructor(treeHelisaService, router, elementRef) {
        this.treeHelisaService = treeHelisaService;
        this.router = router;
        this.elementRef = elementRef;
        this.selectedOptions = new Map();
        /**
         * Retorna el id del nodo removido
         */
        this.removed = new EventEmitter();
        /**
         * Retorna un nodo editado
         */
        this.edited = new EventEmitter();
        /**
         * Retorna un nodo sin id del nodo , pero si con el parent
         * para conocer a cual fue añadido
         */
        this.added = new EventEmitter();
        this.collapseParent = new EventEmitter();
        this.rangeScrolled = new EventEmitter();
        this.nodeSelected = new EventEmitter();
        this.dobleClick = new EventEmitter();
        this.keypressDelete = new EventEmitter();
        this.keypressInsert = new EventEmitter();
        this.checkedOptionNode = new EventEmitter();
        this.uncheckedOptionNode = new EventEmitter();
        this.clickAddNode = new EventEmitter();
        this.clickEditNode = new EventEmitter();
        this.clickDeleteNode = new EventEmitter();
        this.treeControl = new NestedTreeControl((node) => node.children);
        this.dataSource = new MatTreeNestedDataSource();
        this.isSingleClick = true;
        this.currentNode = null;
        // cargar datos pasados por el @Input
        if (!!this.data) {
            const data = this.data;
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
    static getDescription(node) {
        let result = [node.name];
        let concat = '';
        if (node.parent) {
            result.push(this.getDescription(node.parent));
        }
        if (result.length === 1) {
            return node.name;
        }
        result = result.reverse();
        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            concat = concat + element + (i === result.length - 1 ? '' : ',');
        }
        return concat;
    }
    ngOnInit() {
        // si se cargan datos por medio del servicio
        this.treeHelisaService.dataSourceObservable.subscribe((res) => {
            if (!!res && !!res.children) {
                this.selectedNode = res.id;
                this.receivePage(res.children);
            }
            else {
                this.dataSource.data = [];
                this.treeControl.dataNodes = [];
            }
        });
        // Observable, si cambia el nodo seleccionado por medio del servicio
        this.treeHelisaService.nodeSelected.subscribe((res) => {
            if (!!this.data && !!this.data.children) {
                this.selectNode(this.data, res);
            }
        });
        this.treeHelisaService.refreshTreeObservable.subscribe((res) => {
            this.refreshTree();
        });
        this.treeHelisaService.refreshTreeWithPaginationObservable.subscribe((res) => {
            this.refreshTreeWithPagination();
        });
    }
    ngAfterViewInit() {
        this.treeHelisaService.nodeExpand.subscribe((res) => {
            if (res != null) {
                if (res) {
                    this.tree.treeControl.expandAll();
                }
            }
        });
        this.treeHelisaService.nodeCollapse.subscribe((res) => {
            if (res !== null) {
                if (res) {
                    this.tree.treeControl.collapseAll();
                }
            }
        });
        this.treeHelisaService.expandOneNodeObservable.subscribe((res) => {
            if (res !== undefined) {
                this.treeControl.expand(res);
            }
        });
        this.treeHelisaService.collapseOneNodeObservable.subscribe((res) => {
            if (res !== undefined) {
                this.treeControl.collapse(res);
            }
        });
    }
    //#region  ====== Events ===========
    onRedirect(node) {
        this.isSingleClick = true;
        setTimeout(() => {
            if (this.isSingleClick) {
                this.selectNode(node, node.id);
                // if(!!node && !node.children){
                if (!!node) {
                    this.nodeSelected.emit(node.id);
                    this.currentNode = node;
                }
            }
        }, 350);
    }
    onScroll(event) {
        const element = event.target;
        if (element.offsetHeight + element.scrollTop >= element.scrollHeight) {
            this.goNextPage();
        }
    }
    onEdit(node) {
        this.clickEditNode.emit(node);
        /** @Deprecated
         *  Ya no se edita el nodo ahora solo se emite el evento 'clickEditNode'
         * retornando el nodo al cual le hicieron click en la opción delete
         */
        // node.isEditable = true;
        // this.isDisabled = true;
    }
    onAdd(node) {
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
    }
    onDelete(node) {
        this.clickDeleteNode.emit(node);
        /** @Deprecated
         *  Ya no se elimina el nodo ahora solo se emite el evento 'clickDeleteNode'
         * retornando el nodo al cual le hicieron click en la opción delete
         */
        // // Remueve el nodo utilizando la libreria de lodash
        // _.remove(node.parent.children, node);
        // this.refreshTree();
        // this.removed.emit(node.id);
    }
    onEdited(node, value) {
        node.name = value;
        if (node.id == null && node.name === '') {
            remove(node.parent.children, node);
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
    }
    onCancel(node, value) {
        this.isDisabled = false;
        // Si no tiene id por ser un nuevo item, lo elimina
        if (node.id == null) {
            remove(node.parent.children, node);
            this.refreshTree();
        }
        node.isEditable = false;
    }
    onDblClick(node) {
        this.isSingleClick = false;
        this.dobleClick.emit(node.id);
    }
    onKeyDown(event) {
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
    }
    //#endregion ======= Events ========
    //#region  ======== Metodos =============
    moveUpIntoTree() {
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
                    const index = this.currentNode.parent.children.indexOf(this.currentNode);
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
    }
    moveDownIntoTree() {
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
                    const index = !!this.currentNode && !!this.currentNode.parent ? this.currentNode.parent.children.indexOf(this.currentNode) : null;
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
                        const indexOfParent = this.currentNode.parent.parent.children.indexOf(this.currentNode.parent);
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
    }
    /**
     * Verifica si el nodo tiene hijos
     */
    hasChild(t, node) {
        return !!node.children && node.children.length > 0;
    }
    /**
     * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
     */
    refreshTree() {
        this.data = null;
        const datasourceData = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = datasourceData;
        this.treeControl.dataNodes = datasourceData;
    }
    /**
     * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
     */
    refreshTreeWithPagination() {
        const datasourceData = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = datasourceData;
        this.treeControl.dataNodes = datasourceData;
    }
    goNextPage() {
        if (!this.treeHelisaConnect.isLastPage && !this.treeHelisaConnect.isUsed) {
            this.treeHelisaConnect.isUsed = true;
            this.rangeScrolled.emit({
                page: this.treeHelisaConnect.nextPage()
            });
        }
    }
    receivePage(data) {
        if (!this.data) {
            this.data = { id: null, name: 'root', isSelected: false };
        }
        if (!this.data.children) {
            this.data.children = new Array();
            this.treeHelisaConnect = new TreeHelisaConnect();
        }
        this.data.children = this.data.children.concat(data);
        this.data.children.forEach((node) => {
            this.fillParent(node, this.data);
        });
        this.data.children = this.reorderByOrderIndex(this.data.children);
        this.dataSource.data = this.data.children;
        this.treeControl.dataNodes = this.data.children;
        this.treeHelisaConnect.isLastPage = data.length === 0;
        this.treeHelisaConnect.isUsed = false;
    }
    /**
     * Llenan el campo parent de todos los nodos hijos
     */
    fillParent(node, parent) {
        node.parent = parent;
        if (node.children && node.children.length > 0) {
            node.children.forEach((item) => {
                this.fillParent(item, node);
            });
        }
    }
    /**
     * coloca como true del isSelected del nodo que concuerde con el id
     */
    selectNode(node, id) {
        if (node == null) {
            return null;
        }
        this.upSelectNode(node);
        if (!!this.selectedNode) {
            const nodeSelected = this.getNodeById(this.selectedNode);
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
            let i;
            let result = null;
            for (i = 0; result == null && i < node.children.length; i++) {
                result = this.selectNode(node.children[i], id);
            }
            return result;
        }
        return null;
    }
    expandAllParents(node) {
        if (!!node && !!node.parent) {
            this.treeHelisaService.expandOneNode(node.parent);
            this.expandAllParents(node.parent);
        }
    }
    /**
     * Elimina el isSelected de todos los nodos
     */
    upSelectNode(node) {
        if (!!node && node.isSelected !== undefined) {
            node.isSelected = false;
            if (!!node.children) {
                for (const childrenNode of node.children) {
                    this.upSelectNode(childrenNode);
                }
            }
        }
    }
    getClassNode(node) {
        const classNode = [];
        if (node.isSelected) {
            classNode.push('isSelected');
        }
        if (node.classNode) {
            classNode.push(node.classNode);
        }
        return classNode;
    }
    onEditMode(node, editMode) {
        this.getSelectedOptions(node).editMode = editMode;
    }
    onSelectOption(event, node) {
        node.isCheckedOption = event.source.selected;
        if (node.isCheckedOption) {
            this.checkedOptionNode.emit(node.id);
        }
        else {
            this.uncheckedOptionNode.emit(node.id);
        }
    }
    getSelectedOptions(node) {
        if (this.selectedOptions.has(node.id)) {
            this.reloadSelectedOptions(node, this.selectedOptions.get(node.id).editMode);
        }
        else {
            this.reloadSelectedOptions(node, false);
        }
        return this.selectedOptions.get(node.id);
    }
    reloadSelectedOptions(node, editMode) {
        const array = new Array();
        node.options.forEach((option) => {
            if (option.isCheckedOption) {
                array.push(option.id);
            }
        });
        const obj = { formControl: new FormControl(array), editMode };
        this.selectedOptions.set(node.id, obj);
    }
    /**
     * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
     * @param id  number | string
     * @returns Node o null si no hay un nodo con ese id
     */
    getNodeById(id) {
        const queue = [...this.dataSource.data];
        while (queue.length > 0) {
            const curr = queue.shift();
            if (curr.id === id) {
                return curr;
            }
            else {
                if (!!curr.children) {
                    queue.push(...curr.children);
                }
            }
        }
        return null;
    }
    reorderByOrderIndex(node) {
        if (!!node && node.length > 0) {
            try {
                node = orderBy(node, (x) => x.orderIndex, ['asc']);
                node.forEach((element) => {
                    if (!!element.children && element != null) {
                        element.children = this.reorderByOrderIndex(element.children);
                    }
                });
                return node;
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
TreeHelisaComponent.ɵfac = function TreeHelisaComponent_Factory(t) { return new (t || TreeHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(TreeHelisaService), ɵngcc0.ɵɵdirectiveInject(ɵngcc13.Router), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TreeHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeHelisaComponent, selectors: [["hel-tree"]], viewQuery: function TreeHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c5, true);
    } if (rf & 2) {
        let _t;
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
TreeHelisaComponent.ctorParameters = () => [
    { type: TreeHelisaService },
    { type: Router },
    { type: ElementRef }
];
TreeHelisaComponent.propDecorators = {
    tree: [{ type: ViewChild, args: ['tree', { static: true },] }],
    data: [{ type: Input }],
    removed: [{ type: Output }],
    edited: [{ type: Output }],
    added: [{ type: Output }],
    collapseParent: [{ type: Output }],
    rangeScrolled: [{ type: Output }],
    nodeSelected: [{ type: Output }],
    dobleClick: [{ type: Output }],
    keypressDelete: [{ type: Output }],
    keypressInsert: [{ type: Output }],
    checkedOptionNode: [{ type: Output }],
    uncheckedOptionNode: [{ type: Output }],
    clickAddNode: [{ type: Output }],
    clickEditNode: [{ type: Output }],
    clickDeleteNode: [{ type: Output }],
    onKeyDown: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-tree',
                template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n    <!-- This is the tree node template for leaf nodes -->\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      <li\n        class=\"mat-tree-node\"\n        [ngClass]=\"getClassNode(node)\"\n        (click)=\"onRedirect(node)\"\n        (dblclick)=\"onDblClick(node)\"\n        *ngIf=\"!node.isEditable\"\n        class=\"tree-node\"\n      >\n        <!-- use a disabled button to provide padding for tree leaf -->\n        <button mat-icon-button disabled></button>\n        <ng-container *ngIf=\"node.data\">\n          <ul>\n            <ng-container *ngFor=\"let col of node.data\">\n              <li *ngIf=\"col.visible\">\n                {{ col.name }}\n              </li>\n            </ng-container>\n          </ul>\n        </ng-container>\n        <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\n      </li>\n      <li class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled || node.disabledEditButton\" (click)=\"onEdit(node)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled || node.disabledAddButton\" (click)=\"onAdd(node)\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled || node.disabledDeleteButton\" (click)=\"onDelete(node)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </li>\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\n              option.name\n            }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n          <mat-icon>done</mat-icon>\n        </button>\n      </div>\n\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\n        <hel-input-with-button [isFocused]=\"true\" [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\n        </hel-input-with-button>\n      </li>\n    </mat-tree-node>\n    <!-- This is the tree node template for expandable nodes -->\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\n      <li>\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\n          <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n              {{ treeControl.isExpanded(node) ? 'remove' : 'add' }}\n            </mat-icon>\n          </button>\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" [ngClass]=\"getClassNode(node)\">\n            <ng-container *ngIf=\"node.data\">\n              <ul>\n                <ng-container *ngFor=\"let col of node.data\">\n                  <li *ngIf=\"col.visible\">\n                    {{ col.name }}\n                  </li>\n                </ng-container>\n              </ul>\n            </ng-container>\n            <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\n          </p>\n        </div>\n        <div class=\"tree-options\">\n          <li class=\"tree-options\">\n            <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled || node.disabledEditButton\" (click)=\"onEdit(node)\">\n              <mat-icon>edit</mat-icon>\n            </button>\n            <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled || node.disabledAddButton\" (click)=\"onAdd(node)\">\n              <mat-icon>add</mat-icon>\n            </button>\n            <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled || node.disabledDeleteButton\" (click)=\"onDelete(node)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </li>\n          <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n            <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n              <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n                <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\n                  option.name\n                }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n              <mat-icon>done</mat-icon>\n            </button>\n          </div>\n\n          <!-- <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\n            <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\n            </hel-input-with-button>\n          </li> -->\n        </div>\n        <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n          <ng-container matTreeNodeOutlet></ng-container>\n        </ul>\n      </li>\n    </mat-nested-tree-node>\n  </mat-tree>\n</div>\n",
                styles: [".example-tree-invisible{display:none}.example-tree li,.example-tree ul{list-style-type:none;margin-bottom:0;margin-top:0}.isSelected{background:red}.tree-options{display:inline}.container-tree{height:350px;overflow:scroll;width:100%}.tree-node{-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none}.tree-node-text{display:inline;margin-bottom:0}"]
            }]
    }], function () { return [{ type: TreeHelisaService }, { type: ɵngcc13.Router }, { type: ɵngcc0.ElementRef }]; }, { removed: [{
            type: Output
        }], edited: [{
            type: Output
        }], added: [{
            type: Output
        }], collapseParent: [{
            type: Output
        }], rangeScrolled: [{
            type: Output
        }], nodeSelected: [{
            type: Output
        }], dobleClick: [{
            type: Output
        }], keypressDelete: [{
            type: Output
        }], keypressInsert: [{
            type: Output
        }], checkedOptionNode: [{
            type: Output
        }], uncheckedOptionNode: [{
            type: Output
        }], clickAddNode: [{
            type: Output
        }], clickEditNode: [{
            type: Output
        }], clickDeleteNode: [{
            type: Output
        }], data: [{
            type: Input
        }], onKeyDown: [{
            type: HostListener,
            args: ['document:keyup', ['$event']]
        }], tree: [{
            type: ViewChild,
            args: ['tree', { static: true }]
        }] }); })();

class AutocompleteHelisaService {
    constructor() {
        this.emitChangeSource = new BehaviorSubject([]);
        this.dataSource$ = this.emitChangeSource.asObservable();
    }
    setDataSource(options) {
        this.emitChangeSource.next(options);
    }
}
AutocompleteHelisaService.ɵfac = function AutocompleteHelisaService_Factory(t) { return new (t || AutocompleteHelisaService)(); };
AutocompleteHelisaService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AutocompleteHelisaService, factory: AutocompleteHelisaService.ɵfac });
AutocompleteHelisaService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutocompleteHelisaService, [{
        type: Injectable
    }], function () { return []; }, null); })();

class AutocompleteHelisaComponent {
    constructor(autocompleteHelisaService) {
        this.autocompleteHelisaService = autocompleteHelisaService;
        this.myControl = new FormControl();
        this.options = new Array();
        this.selectedValueEmmiter = new EventEmitter();
        this.nextPage = new EventEmitter();
        this.isRemote = false;
        this.isLoading = false;
        this.onScrollObservable = new Subject();
    }
    ngOnInit() {
        this.onScrollObservable.asObservable()
            .pipe(debounceTime(500), throttleTime(500))
            .subscribe(() => {
            this.nextPage.emit();
        });
        if (this.isRemote) {
            this.autocompleteHelisaService.dataSource$.subscribe((data) => {
                setTimeout(() => {
                    this.options = data;
                    this.filteredOptions = of(this.options);
                });
            });
        }
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((x) => this._checkRegex(x)), map((value) => this._filter(value)));
    }
    displayFn(option) {
        return option ? option.displayText : undefined;
    }
    getService() {
        return this.autocompleteHelisaService;
    }
    /** Elimina caracteres extraños */
    _checkRegex(value) {
        value = value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '');
        return value;
    }
    _filter(value) {
        if (!(value)) {
            if (!this.isRemote) {
                const filterValue = value.toLowerCase().split(' ');
                return this.options.filter((option) => {
                    let ws = true;
                    filterValue.forEach((text) => ws = ws && option.displayText.toLowerCase().indexOf(text) >= 0);
                    return ws;
                }).splice(0, 5);
            }
            else {
                return this.options;
            }
        }
    }
    onSelected(event) {
        this.selectedValue = event.option.value;
        this.selectedValueEmmiter.emit(this.selectedValue.value);
    }
    getNextPage() {
        this.onScrollObservable.next();
    }
}
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
        const _r0 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("displayWith", ctx.displayFn);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(5, 4, ctx.filteredOptions));
    } }, directives: function () { return [ɵngcc1.MatFormField, ɵngcc2.MatInput, ɵngcc3.DefaultValueAccessor, ɵngcc17.MatAutocompleteTrigger, ɵngcc3.NgControlStatus, ɵngcc3.FormControlDirective, ɵngcc17.MatAutocomplete, OptionsScrollDirective, ɵngcc5.NgForOf, ɵngcc16.MatOption, HelTooltipDirective]; }, pipes: function () { return [ɵngcc5.AsyncPipe]; }, styles: [""] });
AutocompleteHelisaComponent.ctorParameters = () => [
    { type: AutocompleteHelisaService }
];
AutocompleteHelisaComponent.propDecorators = {
    myControl: [{ type: Input }],
    options: [{ type: Input }],
    selectedValueEmmiter: [{ type: Output }],
    nextPage: [{ type: Output }],
    isRemote: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutocompleteHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-autocomplete',
                template: "<mat-form-field>\n  <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"> \n  <mat-autocomplete  [displayWith]=\"displayFn\" #auto=\"matAutocomplete\" (optionSelected)=\"onSelected($event)\" (optionsScroll)=\"getNextPage()\">\n    <mat-option *ngFor=\"let option of filteredOptions | async; let idx = index\"  [value]=\"option\" [helTooltip]=\"option.displayText\">\n      {{option.displayText}}\n    </mat-option>    \n  </mat-autocomplete>\n</mat-form-field>",
                providers: [AutocompleteHelisaService],
                styles: [""]
            }]
    }], function () { return [{ type: AutocompleteHelisaService }]; }, { myControl: [{
            type: Input
        }], options: [{
            type: Input
        }], selectedValueEmmiter: [{
            type: Output
        }], nextPage: [{
            type: Output
        }], isRemote: [{
            type: Input
        }] }); })();

class OptionsScrollDirective {
    constructor(autoComplete) {
        this.autoComplete = autoComplete;
        /**
         * This value would different depends of styles
         */
        this.thresholdPercent = .9;
        this.optionsScroll = new EventEmitter();
        this.destroy = new Subject();
        this.lastScrollTop = 0;
        this.autoComplete.opened.pipe(tap(() => {
            // Note: When autocomplete raises opened, panel is not yet created (by Overlay)
            // Note: The panel will be available on next tick
            // Note: The panel wil NOT open if there are no options to display
            setTimeout(() => {
                // Note: remove listner just for safety, in case the close event is skipped.
                this.removeScrollEventListener();
                if (!!this.autoComplete &&
                    !!this.autoComplete.panel &&
                    !!this.autoComplete.panel.nativeElement) {
                    this.autoComplete.panel.nativeElement
                        .addEventListener('scroll', this.onScroll.bind(this), false);
                }
            });
        }), takeUntil(this.destroy)).subscribe();
        this.autoComplete.closed.pipe(tap(() => this.removeScrollEventListener()), takeUntil(this.destroy)).subscribe();
    }
    removeScrollEventListener() {
        if (!!this.autoComplete &&
            !!this.autoComplete.panel &&
            !!this.autoComplete.panel.nativeElement) {
            this.autoComplete.panel.nativeElement
                .removeEventListener('scroll', this.onScroll);
        }
    }
    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
        this.removeScrollEventListener();
    }
    onScroll(event) {
        // Credits: how to know if it's down or up scroll "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        const st = event.target.pageYOffset || event.target.scrollTop;
        if (st > this.lastScrollTop) {
            // downscroll code
            if (this.thresholdPercent === undefined) {
                this.optionsScroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
            }
            else {
                const threshold = this.thresholdPercent * 100 * event.target.scrollHeight / 100;
                const current = event.target.scrollTop + event.target.clientHeight;
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
    }
}
OptionsScrollDirective.ɵfac = function OptionsScrollDirective_Factory(t) { return new (t || OptionsScrollDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc17.MatAutocomplete)); };
OptionsScrollDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: OptionsScrollDirective, selectors: [["mat-autocomplete", "optionsScroll", ""]], inputs: { thresholdPercent: "thresholdPercent" }, outputs: { optionsScroll: "optionsScroll" } });
OptionsScrollDirective.ctorParameters = () => [
    { type: MatAutocomplete }
];
OptionsScrollDirective.propDecorators = {
    thresholdPercent: [{ type: Input }],
    optionsScroll: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OptionsScrollDirective, [{
        type: Directive,
        args: [{
                selector: 'mat-autocomplete[optionsScroll]'
            }]
    }], function () { return [{ type: ɵngcc17.MatAutocomplete }]; }, { thresholdPercent: [{
            type: Input
        }], optionsScroll: [{
            type: Output
        }] }); })();

class HelTooltipDirective {
    constructor(tooltip, elemRef) {
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
    mouseover() {
        const currentContent = this.elemRef.nativeElement.innerText;
        if (!!currentContent && !!this.message) {
            if ((currentContent.toUpperCase() !== this.message.toString().toUpperCase()) || this.isEllipsisActive(this.elemRef.nativeElement)) {
                this.tooltip.message = this.message;
            }
        }
        this.tooltip.showDelay = this.showDelay;
        this.tooltip.hideDelay = this.hideDelay;
    }
    isEllipsisActive(e) {
        return (e.offsetWidth < e.scrollWidth);
    }
}
HelTooltipDirective.ɵfac = function HelTooltipDirective_Factory(t) { return new (t || HelTooltipDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc11.MatTooltip), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
HelTooltipDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: HelTooltipDirective, selectors: [["", "helTooltip", ""]], hostBindings: function HelTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseover", function HelTooltipDirective_mouseover_HostBindingHandler() { return ctx.mouseover(); });
    } }, inputs: { hideDelay: "hideDelay", showDelay: "showDelay", message: ["helTooltip", "message"] }, features: [ɵngcc0.ɵɵProvidersFeature([MatTooltip])] });
HelTooltipDirective.ctorParameters = () => [
    { type: MatTooltip },
    { type: ElementRef }
];
HelTooltipDirective.propDecorators = {
    message: [{ type: Input, args: ['helTooltip',] }],
    hideDelay: [{ type: Input }],
    showDelay: [{ type: Input }],
    mouseover: [{ type: HostListener, args: ['mouseover',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HelTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[helTooltip]',
                providers: [MatTooltip]
            }]
    }], function () { return [{ type: ɵngcc11.MatTooltip }, { type: ɵngcc0.ElementRef }]; }, { hideDelay: [{
            type: Input
        }], showDelay: [{
            type: Input
        }], mouseover: [{
            type: HostListener,
            args: ['mouseover']
        }], message: [{
            type: Input,
            args: ['helTooltip']
        }] }); })();

class ExternalLinkDirective {
    constructor(platformId) {
        this.platformId = platformId;
        this.relAttr = '';
        this.targetAttr = '';
        this.hrefAttr = '';
    }
    ngOnChanges() {
        this.hrefAttr = this.href;
        if (this.isLinkExternal()) {
            this.relAttr = 'noopener';
            this.targetAttr = '_blank';
        }
    }
    isLinkExternal() {
        return isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname);
    }
}
ExternalLinkDirective.ɵfac = function ExternalLinkDirective_Factory(t) { return new (t || ExternalLinkDirective)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
ExternalLinkDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ExternalLinkDirective, selectors: [["a", "href", ""]], hostVars: 3, hostBindings: function ExternalLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("rel", ctx.relAttr)("target", ctx.targetAttr)("href", ctx.hrefAttr, ɵngcc0.ɵɵsanitizeUrl);
    } }, inputs: { href: "href" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
ExternalLinkDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ExternalLinkDirective.propDecorators = {
    relAttr: [{ type: HostBinding, args: ['attr.rel',] }],
    targetAttr: [{ type: HostBinding, args: ['attr.target',] }],
    hrefAttr: [{ type: HostBinding, args: ['attr.href',] }],
    href: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ExternalLinkDirective, [{
        type: Directive,
        args: [{
                selector: 'a[href]'
            }]
    }], function () { return [{ type: String, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { relAttr: [{
            type: HostBinding,
            args: ['attr.rel']
        }], targetAttr: [{
            type: HostBinding,
            args: ['attr.target']
        }], hrefAttr: [{
            type: HostBinding,
            args: ['attr.href']
        }], href: [{
            type: Input
        }] }); })();

class ExternalLinkPipe {
    transform(value, ...args) {
        return '//' + value;
    }
}
ExternalLinkPipe.ɵfac = function ExternalLinkPipe_Factory(t) { return new (t || ExternalLinkPipe)(); };
ExternalLinkPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "externalLink", type: ExternalLinkPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ExternalLinkPipe, [{
        type: Pipe,
        args: [{
                name: 'externalLink'
            }]
    }], null, null); })();

var ComboBoxHelisaState;
(function (ComboBoxHelisaState) {
    ComboBoxHelisaState[ComboBoxHelisaState["CLOSED"] = 0] = "CLOSED";
    ComboBoxHelisaState[ComboBoxHelisaState["SELECT"] = 1] = "SELECT";
    ComboBoxHelisaState[ComboBoxHelisaState["INSERT"] = 2] = "INSERT";
})(ComboBoxHelisaState || (ComboBoxHelisaState = {}));
class ComboBoxHelisaComponent {
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
    } }, directives: [ɵngcc5.NgIf, ɵngcc5.NgForOf, ɵngcc5.NgClass, InputHelisaComponent], styles: [".combo-box-general-container[_ngcontent-%COMP%]{width:300px}.combo-box-list-container[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:row;height:100px;position:absolute}.combo-box-row[_ngcontent-%COMP%]{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.combo-box-line[_ngcontent-%COMP%]{background-color:#da0080;width:3px}.combo-box-list[_ngcontent-%COMP%]{flex:1;overflow-y:auto}.combo-box-input[_ngcontent-%COMP%]{width:100%}.combo-box-input-container[_ngcontent-%COMP%]{height:25px}.combo-box-selected-item[_ngcontent-%COMP%]{color:#7030a0}.combo-box-insert-button[_ngcontent-%COMP%]{color:#807f7f;cursor:pointer}"] });
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

var PagingTreeInitialMode;
(function (PagingTreeInitialMode) {
    PagingTreeInitialMode[PagingTreeInitialMode["COLLAPSE"] = 0] = "COLLAPSE";
    PagingTreeInitialMode[PagingTreeInitialMode["EXPAND"] = 1] = "EXPAND";
})(PagingTreeInitialMode || (PagingTreeInitialMode = {}));
class PagingTreeHelisaComponent {
    constructor() {
        this.pageSize = 200000;
        this.visibleLimit = 0;
        this.visibleSize = 100;
        this.treeMode = PagingTreeInitialMode.EXPAND;
        this.visibleObjects = [];
        this.allNode = [];
        this.afterLoadData = new EventEmitter();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    set mode(paramMode) {
        this.treeMode = paramMode;
        this.reset();
    }
    set pagingTreeHelisaListable(paramService) {
        this.service = paramService;
        this.reset();
    }
    reset() {
        if (this.service) {
            this.service.get(0, this.pageSize).subscribe((items) => this.loadData(items));
        }
    }
    loadData(items) {
        this.searchNode = new Map();
        this.visibleObjects = [];
        this.allNode = [];
        items = this.sortItems(items);
        this.searchNode = new Map();
        items.forEach((item) => {
            const node = this.createNode(item);
            this.allNode.push(node);
        });
        this.reSort();
        this.loadNextVisibleObjects(null);
        this.afterLoadData.emit();
    }
    sortItems(items) {
        const lAdy = new Map();
        const stack = [];
        items.forEach((item) => {
            const idParent = item[this.service.getIdParentField()];
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
        const response = new Array(items.length);
        let index = 0;
        while (stack.length > 0) {
            const last = stack.pop();
            response[index++] = last;
            const children = lAdy.get(last[this.service.getIdField()]);
            if (children) {
                for (let i = children.length - 1; i >= 0; i--) {
                    stack.push(children[i]);
                }
            }
        }
        return response;
    }
    createNode(item) {
        if (this.searchNode.has(item[this.service.getIdField()])) {
            throw Error('Ya existe el nodo.');
        }
        const parentInformation = this.getNodeInformationById(item[this.service.getIdParentField()]);
        const nodeInformation = {
            object: item,
            haveChildren: false,
            level: parentInformation ? parentInformation.level + 1 : 0,
            expanded: this.treeMode === PagingTreeInitialMode.EXPAND,
            visible: false,
            preorder: this.searchNode.size + 1,
        };
        this.searchNode.set(item[this.service.getIdField()], nodeInformation);
        if (parentInformation) {
            parentInformation.haveChildren = true;
        }
        return nodeInformation;
    }
    getNodeInformationById(id) {
        return this.searchNode.get(id);
    }
    getNodeInformation(item) {
        return this.searchNode.get(item[this.service.getIdField()]);
    }
    getLevelClass(item) {
        return 'padding-level-' + this.getNodeInformationById(item[this.service.getIdField()]).level;
    }
    loadNextVisibleObjects(nodeFrom) {
        const visibleObjects = [];
        this.visibleObjects.forEach((item) => {
            if (this.getNodeInformation(item)) {
                if (nodeFrom && this.getNodeInformation(nodeFrom).preorder >= this.getNodeInformation(item).preorder) {
                    visibleObjects.push(item);
                }
                else {
                    this.getNodeInformationById(item[this.service.getIdField()]).visible = false;
                }
            }
        });
        this.visibleLimit = visibleObjects.length + this.visibleSize;
        this.allNode.forEach((item) => {
            if (visibleObjects.length < this.visibleLimit &&
                (!nodeFrom || this.getNodeInformation(nodeFrom).preorder < item.preorder)) {
                const idParent = item.object[this.service.getIdParentField()];
                if (!idParent) {
                    visibleObjects.push(item.object);
                    item.visible = true;
                }
                else {
                    const parentInformation = this.getNodeInformationById(idParent);
                    if (parentInformation.visible && parentInformation.expanded) {
                        visibleObjects.push(item.object);
                        item.visible = true;
                    }
                }
            }
        });
        this.visibleObjects = visibleObjects;
    }
    collapseNode(item) {
        this.getNodeInformationById(item[this.service.getIdField()]).expanded = false;
        this.loadNextVisibleObjects(item);
    }
    expandNode(item) {
        this.getNodeInformationById(item[this.service.getIdField()]).expanded = true;
        this.loadNextVisibleObjects(item);
    }
    showNextPage() {
        if (this.visibleObjects.length > 0) {
            this.loadNextVisibleObjects(this.visibleObjects[this.visibleObjects.length - 1]);
        }
    }
    get visibleData() {
        return this.visibleObjects;
    }
    removeItem(item) {
        this.removeById(item[this.service.getIdField()]);
    }
    removeById(id) {
        if (this.getNodeInformationById(id)) {
            const idParent = this.getNodeInformationById(id).object[this.service.getIdParentField()];
            const set = new Set();
            set.add(id);
            const beginIndex = this.allNode.findIndex((itemSearch) => itemSearch.object[this.service.getIdField()] === id);
            let lastIndex = this.allNode.length;
            for (let i = beginIndex + 1; i < this.allNode.length; i++) {
                const itemSearch = this.allNode[i].object;
                if (set.has(itemSearch[this.service.getIdParentField()])) {
                    set.add(itemSearch[this.service.getIdField()]);
                }
                else {
                    lastIndex = i;
                    break;
                }
            }
            const deletedItems = this.allNode.splice(beginIndex, lastIndex - beginIndex);
            let parentHaveChildren = false;
            deletedItems.forEach((deletedItem) => this.searchNode.delete(deletedItem.object[this.service.getIdField()]));
            this.allNode.forEach((searchItem, index) => {
                searchItem.preorder = index + 1;
                if (searchItem.object[this.service.getIdParentField()] === idParent) {
                    parentHaveChildren = true;
                }
            });
            if (idParent) {
                this.getNodeInformationById(idParent).haveChildren = parentHaveChildren;
            }
            this.loadNextVisibleObjects(beginIndex > 0 ? this.allNode[beginIndex - 1].object : null);
        }
    }
    addItem(item) {
        const indexParent = this.allNode.findIndex((node) => node.object[this.service.getIdField()] === item[this.service.getIdParentField()]);
        if (indexParent >= 0) {
            this.allNode.push(this.createNode(item));
            this.allNode[indexParent].haveChildren = true;
            this.reSort();
            this.expandNode(this.allNode[indexParent].object);
        }
        else {
            throw Error('No existe el padre.');
        }
    }
    updateItem(item) {
        if (this.getNodeInformation(item)) {
            this.getNodeInformation(item).object = item;
            this.reSort();
            const indexParent = this.allNode.findIndex((node) => node.object[this.service.getIdField()] === item[this.service.getIdParentField()]);
            if (indexParent >= 0) {
                this.expandNode(this.allNode[indexParent].object);
            }
            else {
                this.loadNextVisibleObjects(null);
            }
        }
    }
    reSort() {
        const items = this.allNode.map((node) => node.object);
        items.sort((a, b) => this.service.compare(a, b));
        const preorder = this.sortItems(items);
        preorder.forEach((object, index) => this.getNodeInformation(object).preorder = index + 1);
        this.allNode.sort((nodeA, nodeB) => nodeA.preorder - nodeB.preorder);
    }
}
PagingTreeHelisaComponent.ɵfac = function PagingTreeHelisaComponent_Factory(t) { return new (t || PagingTreeHelisaComponent)(); };
PagingTreeHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PagingTreeHelisaComponent, selectors: [["hel-paging-tree"]], contentQueries: function PagingTreeHelisaComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c7, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c8, true);
    } if (rf & 2) {
        let _t;
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
PagingTreeHelisaComponent.ctorParameters = () => [];
PagingTreeHelisaComponent.propDecorators = {
    afterLoadData: [{ type: Output }],
    nodeComponent: [{ type: ContentChild, args: ['nodeComponent',] }],
    nodeTitle: [{ type: ContentChild, args: ['nodeTitle',] }],
    mode: [{ type: Input }],
    pagingTreeHelisaListable: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PagingTreeHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-paging-tree',
                template: "<div>\n  <ng-container [ngTemplateOutlet]=\"nodeTitle\"></ng-container>\n  <div *ngFor=\"let item of visibleData\" [ngClass]=\"this.getLevelClass(item)\" class=\"w-100\">\n    <div *ngIf=\"getNodeInformation(item).visible\">\n      <div *ngIf=\"getNodeInformation(item) as node\" class=\"helisa-tree-row w-100\">\n        <div [ngClass]=\"{expandNode: !node.expanded && node.haveChildren, withoutNode: !node.haveChildren}\">\n          <mat-icon *ngIf=\"!node.expanded && node.haveChildren\" (click)=\"expandNode(item)\">add</mat-icon>\n          <mat-icon *ngIf=\"node.expanded && node.haveChildren\" (click)=\"collapseNode(item)\">remove</mat-icon>\n          <mat-icon *ngIf=\"!node.haveChildren\"></mat-icon>\n        </div>\n        <ng-container [ngTemplateOutlet]=\"nodeComponent\" [ngTemplateOutletContext]=\"{data: item, node: node}\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".w-100{width:100%}.padding-level-0{margin-left:0}.padding-level-1{margin-left:40px}.padding-level-2{margin-left:80px}.padding-level-3{margin-left:120px}.padding-level-4{margin-left:160px}.padding-level-5{margin-left:200px}.padding-level-6{margin-left:240px}.padding-level-7{margin-left:280px}.padding-level-8{margin-left:320px}.helisa-tree-row{align-items:center;display:flex;flex-direction:row}"]
            }]
    }], function () { return []; }, { afterLoadData: [{
            type: Output
        }], mode: [{
            type: Input
        }], pagingTreeHelisaListable: [{
            type: Input
        }], nodeComponent: [{
            type: ContentChild,
            args: ['nodeComponent']
        }], nodeTitle: [{
            type: ContentChild,
            args: ['nodeTitle']
        }] }); })();

var AlertInformationType;
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
})(AlertInformationType || (AlertInformationType = {}));

const TITLE_BY_ALERT_TYPE = ['!Esta transacción requiere autorización!',
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
const CONTENT_BY_ALERT_TYPE = ['',
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
const OK_LABEL_BY_ALERT_TYPE = ['Solicitarla',
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
const CANCEL_LABEL_BY_ALERT_TYPE = ['Negarla',
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
class AlertInformationDataHelisaComponent {
    constructor(dialogRef, data) {
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
        dialogRef.keydownEvents().subscribe((event) => {
            if (event.code === 'Escape') {
                this.dialogRef.close(this.onCancel());
            }
        });
    }
    ngOnInit() {
        if (this.alertType === AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === AlertInformationType.DEFINE_PARKING_STRUCTURE ||
            this.alertType === AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE) {
            setTimeout(() => {
                this.dialogRef.close();
            }, 3000);
        }
    }
    onCancel() {
        this.dialogRef.close();
    }
    hasTitle() {
        return this.alertType === AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === AlertInformationType.DELETE_DATA ||
            this.alertType === AlertInformationType.LOST_DATA || this.alertType === AlertInformationType.UNCOMPLETED_DATA;
    }
    hasContent() {
        return this.alertType === AlertInformationType.CONFIRM_DELETE_DATA || this.alertType === AlertInformationType.DELETE_DATA ||
            this.alertType === AlertInformationType.INFORMATION_NOT_VALID || this.alertType === AlertInformationType.LOST_DATA ||
            this.alertType === AlertInformationType.UNCOMPLETED_DATA || this.alertType === AlertInformationType.UNCOMPLETED_SELECTED_DATA ||
            this.alertType === AlertInformationType.DEFINE_COMMERCIAL_STRUCTURE || this.alertType === AlertInformationType.DEFINE_PARKING_STRUCTURE ||
            this.alertType === AlertInformationType.DEFINE_RESIDENCIAL_STRUCTURE || this.alertType === AlertInformationType.NO_SEARCH_RESULTS;
    }
    hasButtons() {
        return this.alertType === AlertInformationType.AUTHORIZATION_TRANSACTION || this.alertType === AlertInformationType.CONFIRM_DELETE_DATA ||
            this.alertType === AlertInformationType.DELETE_DATA || this.alertType === AlertInformationType.LOST_DATA ||
            this.alertType === AlertInformationType.UNCOMPLETED_DATA || this.alertType === AlertInformationType.UNCOMPLETED_SELECTED_DATA;
    }
    hasCancelButton() {
        return this.alertType !== AlertInformationType.UNCOMPLETED_SELECTED_DATA;
    }
}
AlertInformationDataHelisaComponent.ɵfac = function AlertInformationDataHelisaComponent_Factory(t) { return new (t || AlertInformationDataHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc7.MatDialogRef), ɵngcc0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
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
AlertInformationDataHelisaComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertInformationDataHelisaComponent, [{
        type: Component,
        args: [{
                selector: 'hel-alert-information-data-helisa',
                template: "<h1 mat-dialog-title *ngIf=\"hasTitle()\">{{ title }}</h1>\n<div mat-dialog-content *ngIf=\"hasContent()\">{{ content }}</div>\n<div mat-dialog-action *ngIf=\"hasButtons()\">\n    <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial *ngIf=\"hasCancelButton()\">{{cancelLabel}}</button>\n    <button mat-button [mat-dialog-close]=\"true\" >{{okLabel}}</button>\n</div>\n",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc7.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

class HelisaLibModule {
}
HelisaLibModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: HelisaLibModule });
HelisaLibModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function HelisaLibModule_Factory(t) { return new (t || HelisaLibModule)(); }, providers: [TableHelisaService, TreeHelisaService], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatExpansionModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatOptionModule,
            MatListModule,
            MatIconModule,
            MatSnackBarModule,
            MatCardModule,
            LayoutModule,
            MatTooltipModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatGridListModule,
            MatCardModule,
            MatMenuModule,
            MatInputModule,
            MatSelectModule,
            MatRadioModule,
            MatProgressSpinnerModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatDialogModule,
            MatTabsModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatStepperModule,
            MatChipsModule,
            DragDropModule,
            MatTreeModule
        ], MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatListModule,
        MatIconModule,
        MatSnackBarModule,
        MatCardModule,
        LayoutModule,
        MatTooltipModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatStepperModule,
        MatChipsModule,
        DragDropModule,
        MatTreeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(HelisaLibModule, { declarations: function () { return [InputWithButtonComponent, ToastHelisaComponent, AlertHelisaComponent, DependencyTableHelisaComponent, InputHelisaComponent, TableHelisaComponent, TreeHelisaComponent, DateHelisaComponent, AutocompleteHelisaComponent, OptionsScrollDirective, HelTooltipDirective, ExternalLinkDirective, ExternalLinkPipe, ComboBoxHelisaComponent, PagingTreeHelisaComponent, AlertInformationDataHelisaComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatListModule,
        MatIconModule,
        MatSnackBarModule,
        MatCardModule,
        LayoutModule,
        MatTooltipModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatStepperModule,
        MatChipsModule,
        DragDropModule,
        MatTreeModule]; }, exports: function () { return [InputWithButtonComponent, ToastHelisaComponent, AlertHelisaComponent, DependencyTableHelisaComponent, InputHelisaComponent, TableHelisaComponent, TreeHelisaComponent, DateHelisaComponent, AutocompleteHelisaComponent, OptionsScrollDirective, HelTooltipDirective, ExternalLinkDirective, ExternalLinkPipe, MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatListModule,
        MatIconModule,
        MatSnackBarModule,
        MatCardModule,
        LayoutModule,
        MatTooltipModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatStepperModule,
        MatChipsModule,
        DragDropModule,
        MatTreeModule, ComboBoxHelisaComponent, PagingTreeHelisaComponent, AlertInformationDataHelisaComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HelisaLibModule, [{
        type: NgModule,
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
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatToolbarModule,
                    MatExpansionModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    MatOptionModule,
                    MatListModule,
                    MatIconModule,
                    MatSnackBarModule,
                    MatCardModule,
                    LayoutModule,
                    MatTooltipModule,
                    MatButtonModule,
                    MatSidenavModule,
                    MatIconModule,
                    MatListModule,
                    MatGridListModule,
                    MatCardModule,
                    MatMenuModule,
                    MatInputModule,
                    MatSelectModule,
                    MatRadioModule,
                    MatProgressSpinnerModule,
                    MatTableModule,
                    MatPaginatorModule,
                    MatSortModule,
                    MatDialogModule,
                    MatTabsModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatStepperModule,
                    MatChipsModule,
                    DragDropModule,
                    MatTreeModule
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
                    MatButtonModule,
                    MatCheckboxModule,
                    MatToolbarModule,
                    MatExpansionModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    MatOptionModule,
                    MatListModule,
                    MatIconModule,
                    MatSnackBarModule,
                    MatCardModule,
                    LayoutModule,
                    MatTooltipModule,
                    MatButtonModule,
                    MatSidenavModule,
                    MatIconModule,
                    MatListModule,
                    MatGridListModule,
                    MatCardModule,
                    MatMenuModule,
                    MatInputModule,
                    MatSelectModule,
                    MatRadioModule,
                    MatProgressSpinnerModule,
                    MatTableModule,
                    MatPaginatorModule,
                    MatSortModule,
                    MatDialogModule,
                    MatTabsModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatStepperModule,
                    MatChipsModule,
                    DragDropModule,
                    MatTreeModule,
                    ComboBoxHelisaComponent,
                    PagingTreeHelisaComponent,
                    AlertInformationDataHelisaComponent
                ],
                providers: [TableHelisaService, TreeHelisaService]
            }]
    }], null, null); })();

class AlertInformationDataHelisaService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(alertType, title, content, okLabel, cancelLabel) {
        const dialogRef = this.dialog.open(AlertInformationDataHelisaComponent, {
            width: '250px',
            data: { alertType, title, content, okLabel, cancelLabel }
        });
        return dialogRef.afterClosed();
    }
}
AlertInformationDataHelisaService.ɵfac = function AlertInformationDataHelisaService_Factory(t) { return new (t || AlertInformationDataHelisaService)(ɵngcc0.ɵɵinject(ɵngcc7.MatDialog)); };
AlertInformationDataHelisaService.ɵprov = ɵɵdefineInjectable({ factory: function AlertInformationDataHelisaService_Factory() { return new AlertInformationDataHelisaService(ɵɵinject(MatDialog)); }, token: AlertInformationDataHelisaService, providedIn: "root" });
AlertInformationDataHelisaService.ctorParameters = () => [
    { type: MatDialog }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertInformationDataHelisaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc7.MatDialog }]; }, null); })();

/*
 * Public API Surface of helisa-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlertHelisaComponent, AlertHelisaService, AlertHelisaType, AlertInformationDataHelisaComponent, AlertInformationDataHelisaService, AlertInformationType, AutocompleteHelisaComponent, AutocompleteHelisaService, ChangeColumnConfigurationType, ColumnConfigUtil, ColumnType, ComboBoxHelisaComponent, ComboBoxHelisaState, DateHelisaComponent, DependencyTableHelisaComponent, DependencyTableHelisaService, EventScope, HelTooltipDirective, HelisaLibModule, InputHelisaComponent, InputHelisaType, InputWithButtonComponent, OptionsScrollDirective, PagingTreeHelisaComponent, PagingTreeInitialMode, TableHelisaComponent, TableHelisaService, TableHelisaType, ToastHelisaComponent, ToastHelisaService, ToastType, TotalType, TreeHelisaComponent, TreeHelisaConnect, TreeHelisaService, TypeCalendarEnum, ExternalLinkDirective as ɵa, ExternalLinkPipe as ɵb };

//# sourceMappingURL=helisa-lib.js.map