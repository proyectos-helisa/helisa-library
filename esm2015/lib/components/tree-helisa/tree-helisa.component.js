import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeHelisaService } from './tree-helisa.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { TreeHelisaConnect } from './tree-helisa-connect';
import { FormControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './tree-helisa.service';
import * as ɵngcc2 from '@angular/router';
import * as ɵngcc3 from '@angular/material/tree';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from '@angular/material/button';
import * as ɵngcc6 from '@angular/material/icon';
import * as ɵngcc7 from '@angular/material/form-field';
import * as ɵngcc8 from '@angular/material/select';
import * as ɵngcc9 from '@angular/forms';
import * as ɵngcc10 from '@angular/material/core';
import * as ɵngcc11 from '../input-with-button/input-with-button.component';

const _c0 = ["tree"];
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
export class TreeHelisaComponent {
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
    }
    onCancel(node, value) {
        this.isDisabled = false;
        // Si no tiene id por ser un nuevo item, lo elimina
        if (node.id == null) {
            _.remove(node.parent.children, node);
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
                node = _.orderBy(node, (x) => x.orderIndex, ['asc']);
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
TreeHelisaComponent.ɵfac = function TreeHelisaComponent_Factory(t) { return new (t || TreeHelisaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.TreeHelisaService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TreeHelisaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeHelisaComponent, selectors: [["hel-tree"]], viewQuery: function TreeHelisaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
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
    } }, directives: [ɵngcc3.MatTree, ɵngcc3.MatTreeNodeDef, ɵngcc3.MatTreeNode, ɵngcc3.MatTreeNodeToggle, ɵngcc4.NgIf, ɵngcc4.NgClass, ɵngcc5.MatButton, ɵngcc4.NgForOf, ɵngcc6.MatIcon, ɵngcc7.MatFormField, ɵngcc8.MatSelect, ɵngcc9.NgControlStatus, ɵngcc9.FormControlDirective, ɵngcc10.MatOption, ɵngcc11.InputWithButtonComponent, ɵngcc3.MatNestedTreeNode, ɵngcc3.MatTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%]{display:none}.example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin-bottom:0;margin-top:0}.isSelected[_ngcontent-%COMP%]{background:red}.tree-options[_ngcontent-%COMP%]{display:inline}.container-tree[_ngcontent-%COMP%]{height:350px;overflow:scroll;width:100%}.tree-node[_ngcontent-%COMP%]{-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none}.tree-node-text[_ngcontent-%COMP%]{display:inline;margin-bottom:0}"] });
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
    }], function () { return [{ type: ɵngcc1.TreeHelisaService }, { type: ɵngcc2.Router }, { type: ɵngcc0.ElementRef }]; }, { removed: [{
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy9saWIvY29tcG9uZW50cy90cmVlLWhlbGlzYS90cmVlLWhlbGlzYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFFbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEVBQUUsVUFBVSxrQkFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrOUJBSUc7QUFBQztBQUE2QyxZQWpCMUMsaUJBQWlCO0FBQUksWUFDckIsTUFBTTtBQUFJLFlBTmdFLFVBQVU7QUFBRztBQUFHO0FBQzdGLG1CQXlDSCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztBQUFPLG1CQWlCdkMsS0FBSztBQUFLLHNCQUtWLE1BQU07QUFBSyxxQkFLWCxNQUFNO0FBQUssb0JBTVgsTUFBTTtBQUFLLDZCQUNYLE1BQU07QUFBSyw0QkFDWCxNQUFNO0FBQUssMkJBQ1gsTUFBTTtBQUFLLHlCQUNYLE1BQU07QUFBSyw2QkFDWCxNQUFNO0FBQUssNkJBQ1gsTUFBTTtBQUFLLGdDQUNYLE1BQU07QUFBSyxrQ0FDWCxNQUFNO0FBQUssMkJBQ1gsTUFBTTtBQUFLLDRCQUNYLE1BQU07QUFBSyw4QkFDWCxNQUFNO0FBQUssd0JBcU1YLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUN4Qzs7Ozs7czFCQTFReUMsMmFBRzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBdVFLO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmVzdGVkVHJlZUNvbnRyb2wsIFRyZWVDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHsgTWF0T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZSwgTWF0VHJlZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XG5pbXBvcnQgeyBUcmVlSGVsaXNhU2VydmljZSB9IGZyb20gJy4vdHJlZS1oZWxpc2Euc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVHJlZUhlbGlzYUNvbm5lY3QgfSBmcm9tICcuL3RyZWUtaGVsaXNhLWNvbm5lY3QnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRyZWVIZWxpc2Ege1xuICBwYWdlOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbC10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdHJlZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxuICAvLyBob3N0OiB7ICcoZG9jdW1lbnQ6a2V5dXApJzogJ29uS2V5RG93bigkZXZlbnQpJyB9XG59KVxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICBzZWxlY3RlZE5vZGU6IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG4gIC8vI2VuZHJlZ2lvbiA9PT09PT0gVmFyaWFibGVzID09PT09PT09XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVlSGVsaXNhU2VydmljZTogVHJlZUhlbGlzYVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIGNhcmdhciBkYXRvcyBwYXNhZG9zIHBvciBlbCBASW5wdXRcbiAgICBpZiAoISF0aGlzLmRhdGEpIHtcbiAgICAgIGNvbnN0IGRhdGE6IE5vZGUgPSB0aGlzLmRhdGE7XG4gICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLmNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gW107XG4gICAgfVxuICB9XG5cbiAgLy8jcmVnaW9uICA9PT09PT0gVmFyaWFibGVzID09PT09PT09PT09PT1cbiAgcHJpdmF0ZSB0cmVlSGVsaXNhQ29ubmVjdDogVHJlZUhlbGlzYUNvbm5lY3Q8Tm9kZT47XG4gIGZvcm1FZGl0OiBGb3JtQ29udHJvbDtcbiAgQFZpZXdDaGlsZCgndHJlZScsIHtzdGF0aWM6IHRydWV9KSB0cmVlOiBNYXRUcmVlPHt9PjtcbiAgcHJpdmF0ZSBzZWxlY3RlZE9wdGlvbnM6IE1hcDxcbiAgICBzdHJpbmcgfCBudW1iZXIsXG4gICAge1xuICAgICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgICAgZWRpdE1vZGU6IGJvb2xlYW47XG4gICAgfVxuICA+ID0gbmV3IE1hcDxcbiAgICBzdHJpbmcgfCBudW1iZXIsXG4gICAge1xuICAgICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgICAgZWRpdE1vZGU6IGJvb2xlYW47XG4gICAgfVxuICA+KCk7XG4gIC8qKlxuICAgKiBEYXRvcyBkZWwgQXJib2xcbiAgICovXG4gIEBJbnB1dCgpIGRhdGE6IE5vZGU7XG5cbiAgLyoqXG4gICAqIFJldG9ybmEgZWwgaWQgZGVsIG5vZG8gcmVtb3ZpZG9cbiAgICovXG4gIEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBSZXRvcm5hIHVuIG5vZG8gZWRpdGFkb1xuICAgKi9cbiAgQE91dHB1dCgpIGVkaXRlZDogRXZlbnRFbWl0dGVyPE5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOb2RlPigpO1xuXG4gIC8qKlxuICAgKiBSZXRvcm5hIHVuIG5vZG8gc2luIGlkIGRlbCBub2RvICwgcGVybyBzaSBjb24gZWwgcGFyZW50XG4gICAqIHBhcmEgY29ub2NlciBhIGN1YWwgZnVlIGHDsWFkaWRvXG4gICAqL1xuICBAT3V0cHV0KCkgYWRkZWQ6IEV2ZW50RW1pdHRlcjxOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcbiAgQE91dHB1dCgpIGNvbGxhcHNlUGFyZW50OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByYW5nZVNjcm9sbGVkOiBFdmVudEVtaXR0ZXI8UmVxdWVzdFRyZWVIZWxpc2E+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VHJlZUhlbGlzYT4oKTtcbiAgQE91dHB1dCgpIG5vZGVTZWxlY3RlZDogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGRvYmxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBrZXlwcmVzc0RlbGV0ZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xuICBAT3V0cHV0KCkga2V5cHJlc3NJbnNlcnQ6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcbiAgQE91dHB1dCgpIGNoZWNrZWRPcHRpb25Ob2RlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XG4gIEBPdXRwdXQoKSB1bmNoZWNrZWRPcHRpb25Ob2RlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XG4gIEBPdXRwdXQoKSBjbGlja0FkZE5vZGU6IEV2ZW50RW1pdHRlcjxOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcbiAgQE91dHB1dCgpIGNsaWNrRWRpdE5vZGU6IEV2ZW50RW1pdHRlcjxOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcbiAgQE91dHB1dCgpIGNsaWNrRGVsZXRlTm9kZTogRXZlbnRFbWl0dGVyPE5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOb2RlPigpO1xuXG4gIHRyZWVDb250cm9sOiBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPiA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPigobm9kZTogTm9kZSk6IE5vZGVbXSB8IE9ic2VydmFibGU8Tm9kZVtdPiA9PiBub2RlLmNoaWxkcmVuKTtcbiAgZGF0YVNvdXJjZTogTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8Tm9kZT4gPSBuZXcgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8Tm9kZT4oKTtcblxuICBpc1NpbmdsZUNsaWNrOiBib29sZWFuID0gdHJ1ZTtcbiAgY3VycmVudE5vZGU6IE5vZGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBPYnRpZW5lIGxhIGRlc2NyaXBjaW9uIGNvbXBsZXRhIGRlbCBub2RvXG4gICAqIEBleGFtcGxlIE5vZG8gcGFkcmUsbm9kbyBoaWpvLG5vZG8gbmlldG9cbiAgICogQHBhcmFtIG5vZGUgRGViZSB0ZW5lciB0b2RvcyBsb3MgcGFyZW50IGxsZW5vcyBoYWNpYSBhcnJpYmFcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVzY3JpcHRpb24obm9kZTogTm9kZSk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbbm9kZS5uYW1lXTtcbiAgICBsZXQgY29uY2F0OiBzdHJpbmcgPSAnJztcblxuICAgIGlmIChub2RlLnBhcmVudCkge1xuICAgICAgcmVzdWx0LnB1c2godGhpcy5nZXREZXNjcmlwdGlvbihub2RlLnBhcmVudCkpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gbm9kZS5uYW1lO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IHJlc3VsdC5yZXZlcnNlKCk7XG5cbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50OiBzdHJpbmcgPSByZXN1bHRbaV07XG4gICAgICBjb25jYXQgPSBjb25jYXQgKyBlbGVtZW50ICsgKGkgPT09IHJlc3VsdC5sZW5ndGggLSAxID8gJycgOiAnLCcpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25jYXQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzaSBzZSBjYXJnYW4gZGF0b3MgcG9yIG1lZGlvIGRlbCBzZXJ2aWNpb1xuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZGF0YVNvdXJjZU9ic2VydmFibGUuc3Vic2NyaWJlKChyZXM6IE5vZGUpOiB2b2lkID0+IHtcbiAgICAgIGlmICghIXJlcyAmJiAhIXJlcy5jaGlsZHJlbikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZSA9IHJlcy5pZDtcbiAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShyZXMuY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBbXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE9ic2VydmFibGUsIHNpIGNhbWJpYSBlbCBub2RvIHNlbGVjY2lvbmFkbyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlU2VsZWN0ZWQuc3Vic2NyaWJlKChyZXM6IHN0cmluZyB8IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgaWYgKCEhdGhpcy5kYXRhICYmICEhdGhpcy5kYXRhLmNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHJlcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLnJlZnJlc2hUcmVlT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKHJlczogdm9pZCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5yZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKHJlczogdm9pZCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlRXhwYW5kLnN1YnNjcmliZSgocmVzOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIHRoaXMudHJlZS50cmVlQ29udHJvbC5leHBhbmRBbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlQ29sbGFwc2Uuc3Vic2NyaWJlKChyZXM6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIHRoaXMudHJlZS50cmVlQ29udHJvbC5jb2xsYXBzZUFsbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGVPYnNlcnZhYmxlLnN1YnNjcmliZSgocmVzOiBOb2RlKTogdm9pZCA9PiB7XG4gICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmQocmVzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuY29sbGFwc2VPbmVOb2RlT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKHJlczogTm9kZSk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuY29sbGFwc2UocmVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiAgPT09PT09IEV2ZW50cyA9PT09PT09PT09PVxuICBvblJlZGlyZWN0KG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2luZ2xlQ2xpY2sgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNTaW5nbGVDbGljaykge1xuICAgICAgICB0aGlzLnNlbGVjdE5vZGUobm9kZSwgbm9kZS5pZCk7XG5cbiAgICAgICAgLy8gaWYoISFub2RlICYmICFub2RlLmNoaWxkcmVuKXtcbiAgICAgICAgaWYgKCEhbm9kZSkge1xuICAgICAgICAgIHRoaXMubm9kZVNlbGVjdGVkLmVtaXQobm9kZS5pZCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAzNTApO1xuICB9XG5cbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBpZiAoZWxlbWVudC5vZmZzZXRIZWlnaHQgKyBlbGVtZW50LnNjcm9sbFRvcCA+PSBlbGVtZW50LnNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgb25FZGl0KG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrRWRpdE5vZGUuZW1pdChub2RlKTtcbiAgICAvKiogQERlcHJlY2F0ZWRcbiAgICAgKiAgWWEgbm8gc2UgZWRpdGEgZWwgbm9kbyBhaG9yYSBzb2xvIHNlIGVtaXRlIGVsIGV2ZW50byAnY2xpY2tFZGl0Tm9kZSdcbiAgICAgKiByZXRvcm5hbmRvIGVsIG5vZG8gYWwgY3VhbCBsZSBoaWNpZXJvbiBjbGljayBlbiBsYSBvcGNpw7NuIGRlbGV0ZVxuICAgICAqL1xuICAgIC8vIG5vZGUuaXNFZGl0YWJsZSA9IHRydWU7XG4gICAgLy8gdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG9uQWRkKG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrQWRkTm9kZS5lbWl0KG5vZGUpO1xuICAgIC8qKiBARGVwcmVjYXRlZFxuICAgICAqICBZYSBubyBzZSBjcmVhIHkgc2UgYWdyZWdhIGVsIG5vZG8gYWhvcmEgc29sbyBzZSBlbWl0ZSBlbCBldmVudG8gJ2NsaWNrQWRkTm9kZSdcbiAgICAgKiByZXRvcm5hbmRvIGVsIG5vZG8gYWwgY3VhbCBsZSBoaWNpZXJvbiBjbGljayBlbiBsYSBvcGNpw7NuIGFkZFxuICAgICAqL1xuICAgIC8vICAgLy8gc2kgbm8gdGllbmUgaGlqb3MgaW5zdGFuY2lhciBlbCBhcnJheVxuICAgIC8vICAgaWYgKCFub2RlLmNoaWxkcmVuKSB7XG4gICAgLy8gICAgIG5vZGUuY2hpbGRyZW4gPSBbXTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIG5vZGUuY2hpbGRyZW4ucHVzaCh7XG4gICAgLy8gICAgIGlkOiBNYXRoLnJhbmRvbSgpLFxuICAgIC8vICAgICBuYW1lOiAnJyxcbiAgICAvLyAgICAgaXNTZWxlY3RlZDogZmFsc2UsXG4gICAgLy8gICAgIHBhcmVudDogbm9kZSxcbiAgICAvLyAgICAgaXNFZGl0YWJsZTogdHJ1ZVxuICAgIC8vICAgfSk7XG4gICAgLy8gICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgIC8vICAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUobm9kZSk7XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLnJlZnJlc2hUcmVlKCk7XG4gIH1cblxuICBvbkRlbGV0ZShub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5jbGlja0RlbGV0ZU5vZGUuZW1pdChub2RlKTtcbiAgICAvKiogQERlcHJlY2F0ZWRcbiAgICAgKiAgWWEgbm8gc2UgZWxpbWluYSBlbCBub2RvIGFob3JhIHNvbG8gc2UgZW1pdGUgZWwgZXZlbnRvICdjbGlja0RlbGV0ZU5vZGUnXG4gICAgICogcmV0b3JuYW5kbyBlbCBub2RvIGFsIGN1YWwgbGUgaGljaWVyb24gY2xpY2sgZW4gbGEgb3BjacOzbiBkZWxldGVcbiAgICAgKi9cbiAgICAvLyAvLyBSZW11ZXZlIGVsIG5vZG8gdXRpbGl6YW5kbyBsYSBsaWJyZXJpYSBkZSBsb2Rhc2hcbiAgICAvLyBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XG5cbiAgICAvLyB0aGlzLnJlZnJlc2hUcmVlKCk7XG4gICAgLy8gdGhpcy5yZW1vdmVkLmVtaXQobm9kZS5pZCk7XG4gIH1cblxuICBvbkVkaXRlZChub2RlOiBOb2RlLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbm9kZS5uYW1lID0gdmFsdWU7XG4gICAgaWYgKG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUgPT09ICcnKSB7XG4gICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XG4gICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XG4gICAgfSBlbHNlIGlmIChub2RlLmlkICYmIG5vZGUuaWQgIT0gbnVsbCAmJiBub2RlLm5hbWUudHJpbSgpICE9PSAnJykge1xuICAgICAgdGhpcy5lZGl0ZWQuZW1pdChub2RlKTtcbiAgICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3ROb2RlKG5vZGUsIG5vZGUuaWQpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pZCA9PSBudWxsICYmIG5vZGUubmFtZS50cmltKCkgIT09ICcnKSB7XG4gICAgICB0aGlzLmFkZGVkLmVtaXQobm9kZSk7XG4gICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xuICB9XG5cbiAgb25DYW5jZWwobm9kZTogTm9kZSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgIC8vIFNpIG5vIHRpZW5lIGlkIHBvciBzZXIgdW4gbnVldm8gaXRlbSwgbG8gZWxpbWluYVxuICAgIGlmIChub2RlLmlkID09IG51bGwpIHtcbiAgICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcbiAgICB9XG5cbiAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2sobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IGZhbHNlO1xuICAgIHRoaXMuZG9ibGVDbGljay5lbWl0KG5vZGUuaWQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgdGhpcy5rZXlwcmVzc0RlbGV0ZS5lbWl0KCEhdGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLmlkID8gdGhpcy5jdXJyZW50Tm9kZS5pZCA6IG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0luc2VydCc6XG4gICAgICAgIHRoaXMua2V5cHJlc3NJbnNlcnQuZW1pdCghIXRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCA/IHRoaXMuY3VycmVudE5vZGUuaWQgOiBudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICB0aGlzLm1vdmVEb3duSW50b1RyZWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgdGhpcy5tb3ZlVXBJbnRvVHJlZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyNlbmRyZWdpb24gPT09PT09PSBFdmVudHMgPT09PT09PT1cblxuICAvLyNyZWdpb24gID09PT09PT09IE1ldG9kb3MgPT09PT09PT09PT09PVxuXG4gIHByaXZhdGUgbW92ZVVwSW50b1RyZWUoKTogbnVtYmVyIHtcbiAgICBpZiAoISF0aGlzLmRhdGEpIHtcbiAgICAgIC8vIHNpIGF1biBubyBoYXkgbmluZ3VuIG5vZGUgc2VsZWNjaW9uYWRvIHNlbGVjY2lvbmEgZWwgcHJpbWVyb1xuICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmRhdGEuY2hpbGRyZW5bMF0uaWQpO1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5kYXRhLmNoaWxkcmVuWzBdO1xuICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gb2J0aWVuZSBlbCBpbmRpY2UgZGVsIG5vZG8gc2VsZWNjaW9uYWRvIGFjdHVhbG1lbnRlXG4gICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuaWQgPT0gbnVsbCAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNpIHRpZW5lIG5vZG9zIGFsIG1pc21vIG5pdmVsIHNhbHRhIGFsIG5vZG8gYW50ZXJpb3JcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XG4gICAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBzaSBubyB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBub2RvIHBhZHJlXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbltpbmRleCAtIDFdO1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcbiAgICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vdmVEb3duSW50b1RyZWUoKTogdm9pZCB7XG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuZGF0YS5jaGlsZHJlblswXS5pZCk7XG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmRhdGEuY2hpbGRyZW5bMF07XG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgLy8gb2J0aWVuZSBlbCBpbmRpY2UgZGVsIG5vZG8gc2VsZWNjaW9uYWRvIGFjdHVhbG1lbnRlXG4gICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9XG4gICAgICAgICAgICAhIXRoaXMuY3VycmVudE5vZGUgJiYgISF0aGlzLmN1cnJlbnROb2RlLnBhcmVudCA/IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZSkgOiBudWxsO1xuXG4gICAgICAgICAgLy8gc2kgdGllbmUgY2hpbGRyZW5zIHBhc2EgYWwgcHJpbWVyIGNoaWxkcmVuXG4gICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGluZGV4ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGluZGV4ID09PSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQgIT0gbnVsbCAmJlxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuICE9IG51bGwgJiZcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleE9mUGFyZW50OiBudW1iZXIgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnROb2RlLnBhcmVudCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID1cbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuW2luZGV4T2ZQYXJlbnQgKyAxXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB0aGlzLmN1cnJlbnROb2RlXG4gICAgICAgICAgICAgICAgOiB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW5baW5kZXhPZlBhcmVudCArIDFdO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcbiAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2kgbm8gdGllbmUgbm9kb3MgYWwgbWlzbW8gbml2ZWwgc2FsdGEgYWwgc2lndWllbnRlIGhhY2lhIGFiYWpvXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW5baW5kZXggKyAxXTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmljYSBzaSBlbCBub2RvIHRpZW5lIGhpam9zXG4gICAqL1xuICBoYXNDaGlsZCh0OiBudW1iZXIsIG5vZGU6IE5vZGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3R1YWxpemEgZWwgYXJib2wgYm9ycmFuZG8gdG9kYSBsYSBkYXRhICwgc29sbyBjdWFuZG8gbm8gc2UgdXRpbGl6YSBwYWdpbmFjaW9uXG4gICAqL1xuICBwcml2YXRlIHJlZnJlc2hUcmVlKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgY29uc3QgZGF0YXNvdXJjZURhdGE6IE5vZGVbXSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFzb3VyY2VEYXRhO1xuICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gZGF0YXNvdXJjZURhdGE7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsaXphIGVsIGFyYm9sIGN1YW5kbyBzZSB1dGlsaXphIGxhIHBhZ2luYWNpb24gKEN1YW5kbyBubyAsIHV0aWxpY2UgZWwgbWV0b2RvIHJlZnJlc2hUcmVlKCkpXG4gICAqL1xuICBwcml2YXRlIHJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YXNvdXJjZURhdGE6IE5vZGVbXSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFzb3VyY2VEYXRhO1xuICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gZGF0YXNvdXJjZURhdGE7XG4gIH1cblxuICBwcml2YXRlIGdvTmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgJiYgIXRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkKSB7XG4gICAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCA9IHRydWU7XG4gICAgICB0aGlzLnJhbmdlU2Nyb2xsZWQuZW1pdCh7XG4gICAgICAgIHBhZ2U6IHRoaXMudHJlZUhlbGlzYUNvbm5lY3QubmV4dFBhZ2UoKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWNlaXZlUGFnZShkYXRhOiBOb2RlW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5kYXRhID0geyBpZDogbnVsbCwgbmFtZTogJ3Jvb3QnLCBpc1NlbGVjdGVkOiBmYWxzZSB9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZGF0YS5jaGlsZHJlbikge1xuICAgICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gbmV3IEFycmF5PE5vZGU+KCk7XG4gICAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0ID0gbmV3IFRyZWVIZWxpc2FDb25uZWN0PE5vZGU+KCk7XG4gICAgfVxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbiA9IHRoaXMuZGF0YS5jaGlsZHJlbi5jb25jYXQoZGF0YSk7XG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuLmZvckVhY2goKG5vZGU6IE5vZGUpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuZmlsbFBhcmVudChub2RlLCB0aGlzLmRhdGEpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gdGhpcy5yZW9yZGVyQnlPcmRlckluZGV4KHRoaXMuZGF0YS5jaGlsZHJlbik7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMuZGF0YS5jaGlsZHJlbjtcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IHRoaXMuZGF0YS5jaGlsZHJlbjtcbiAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgPSBkYXRhLmxlbmd0aCA9PT0gMDtcbiAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIExsZW5hbiBlbCBjYW1wbyBwYXJlbnQgZGUgdG9kb3MgbG9zIG5vZG9zIGhpam9zXG4gICAqL1xuICBwcml2YXRlIGZpbGxQYXJlbnQobm9kZTogTm9kZSwgcGFyZW50OiBOb2RlKTogdm9pZCB7XG4gICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGl0ZW06IE5vZGUpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5maWxsUGFyZW50KGl0ZW0sIG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGNvbG9jYSBjb21vIHRydWUgZGVsIGlzU2VsZWN0ZWQgZGVsIG5vZG8gcXVlIGNvbmN1ZXJkZSBjb24gZWwgaWRcbiAgICovXG4gIHByaXZhdGUgc2VsZWN0Tm9kZShub2RlOiBOb2RlLCBpZDogbnVtYmVyIHwgc3RyaW5nKTogTm9kZSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRoaXMudXBTZWxlY3ROb2RlKG5vZGUpO1xuICAgIGlmICghIXRoaXMuc2VsZWN0ZWROb2RlKSB7XG4gICAgICBjb25zdCBub2RlU2VsZWN0ZWQ6IE5vZGUgPSB0aGlzLmdldE5vZGVCeUlkKHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICAgIGlmIChub2RlU2VsZWN0ZWQgIT0gbnVsbCkge1xuICAgICAgICBub2RlU2VsZWN0ZWQuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChub2RlLmlkICE9PSB1bmRlZmluZWQgJiYgbm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLmV4cGFuZEFsbFBhcmVudHMobm9kZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZSA9IG5vZGUuaWQ7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xuICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgIGxldCByZXN1bHQ6IE5vZGUgPSBudWxsO1xuICAgICAgZm9yIChpID0gMDsgcmVzdWx0ID09IG51bGwgJiYgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5zZWxlY3ROb2RlKG5vZGUuY2hpbGRyZW5baV0sIGlkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBleHBhbmRBbGxQYXJlbnRzKG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICBpZiAoISFub2RlICYmICEhbm9kZS5wYXJlbnQpIHtcbiAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZShub2RlLnBhcmVudCk7XG4gICAgICB0aGlzLmV4cGFuZEFsbFBhcmVudHMobm9kZS5wYXJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbGltaW5hIGVsIGlzU2VsZWN0ZWQgZGUgdG9kb3MgbG9zIG5vZG9zXG4gICAqL1xuICBwcml2YXRlIHVwU2VsZWN0Tm9kZShub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgaWYgKCEhbm9kZSAmJiBub2RlLmlzU2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICBpZiAoISFub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGRyZW5Ob2RlIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICB0aGlzLnVwU2VsZWN0Tm9kZShjaGlsZHJlbk5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2xhc3NOb2RlKG5vZGU6IE5vZGUpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2xhc3NOb2RlOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmIChub2RlLmlzU2VsZWN0ZWQpIHtcbiAgICAgIGNsYXNzTm9kZS5wdXNoKCdpc1NlbGVjdGVkJyk7XG4gICAgfVxuICAgIGlmIChub2RlLmNsYXNzTm9kZSkge1xuICAgICAgY2xhc3NOb2RlLnB1c2gobm9kZS5jbGFzc05vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NOb2RlO1xuICB9XG5cbiAgb25FZGl0TW9kZShub2RlOiBOb2RlLCBlZGl0TW9kZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKG5vZGUpLmVkaXRNb2RlID0gZWRpdE1vZGU7XG4gIH1cblxuICBvblNlbGVjdE9wdGlvbihldmVudDogTWF0T3B0aW9uU2VsZWN0aW9uQ2hhbmdlLCBub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgbm9kZS5pc0NoZWNrZWRPcHRpb24gPSBldmVudC5zb3VyY2Uuc2VsZWN0ZWQ7XG4gICAgaWYgKG5vZGUuaXNDaGVja2VkT3B0aW9uKSB7XG4gICAgICB0aGlzLmNoZWNrZWRPcHRpb25Ob2RlLmVtaXQobm9kZS5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5jaGVja2VkT3B0aW9uTm9kZS5lbWl0KG5vZGUuaWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkT3B0aW9ucyhcbiAgICBub2RlOiBOb2RlXG4gICk6IHtcbiAgICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgZWRpdE1vZGU6IGJvb2xlYW47XG4gIH0ge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5oYXMobm9kZS5pZCkpIHtcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmdldChub2RlLmlkKS5lZGl0TW9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmdldChub2RlLmlkKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGU6IE5vZGUsIGVkaXRNb2RlOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgYXJyYXk6IEFycmF5PHN0cmluZyB8IG51bWJlciB8IG51bGw+ID0gbmV3IEFycmF5PHN0cmluZyB8IG51bWJlciB8IG51bGw+KCk7XG4gICAgbm9kZS5vcHRpb25zLmZvckVhY2goKG9wdGlvbjogTm9kZSk6IHZvaWQgPT4ge1xuICAgICAgaWYgKG9wdGlvbi5pc0NoZWNrZWRPcHRpb24pIHtcbiAgICAgICAgYXJyYXkucHVzaChvcHRpb24uaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG9iajoge1xuICAgICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgICAgZWRpdE1vZGU6IGJvb2xlYW47XG4gICAgfSA9IHsgZm9ybUNvbnRyb2w6IG5ldyBGb3JtQ29udHJvbChhcnJheSksIGVkaXRNb2RlIH07XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuc2V0KG5vZGUuaWQsIG9iaik7XG4gIH1cblxuICAvKipcbiAgICogUmV0b3JuYSBlbCBwcmltZXIgTm9kZSBxdWUgZW5jdWVudHJlIHNlZ3VuIGVsIGlkIGVudmlhZG8gbyBudWxsIHNpIG5vIGhheSBuaW5ndW5vXG4gICAqIEBwYXJhbSBpZCAgbnVtYmVyIHwgc3RyaW5nXG4gICAqIEByZXR1cm5zIE5vZGUgbyBudWxsIHNpIG5vIGhheSB1biBub2RvIGNvbiBlc2UgaWRcbiAgICovXG4gIGdldE5vZGVCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBOb2RlIHtcbiAgICBjb25zdCBxdWV1ZTogTm9kZVtdID0gWy4uLnRoaXMuZGF0YVNvdXJjZS5kYXRhXTtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY3VycjogTm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBpZiAoY3Vyci5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoISFjdXJyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgcXVldWUucHVzaCguLi5jdXJyLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlb3JkZXJCeU9yZGVySW5kZXgobm9kZTogTm9kZVtdKTogTm9kZVtdIHtcbiAgICBpZiAoISFub2RlICYmIG5vZGUubGVuZ3RoID4gMCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbm9kZSA9IF8ub3JkZXJCeShub2RlLCAoeDogTm9kZSk6IG51bWJlciA9PiB4Lm9yZGVySW5kZXgsIFsnYXNjJ10pO1xuICAgICAgICBub2RlLmZvckVhY2goKGVsZW1lbnQ6IE5vZGUpOiB2b2lkID0+IHtcbiAgICAgICAgICBpZiAoISFlbGVtZW50LmNoaWxkcmVuICYmIGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbiA9IHRoaXMucmVvcmRlckJ5T3JkZXJJbmRleChlbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyNlbmRyZWdpb24gPT09PT09IE1ldG9kb3MgPT09PT09PT09PT09XG59XG4iXX0=