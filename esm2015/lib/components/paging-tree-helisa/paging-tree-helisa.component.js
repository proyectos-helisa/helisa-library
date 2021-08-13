import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/material/icon';

const _c0 = ["nodeComponent"];
const _c1 = ["nodeTitle"];
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
const _c2 = function (a0, a1) { return { expandNode: a0, withoutNode: a1 }; };
const _c3 = function (a0, a1) { return { data: a0, node: a1 }; };
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
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(6, _c2, !node_r4.expanded && node_r4.haveChildren, !node_r4.haveChildren));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !node_r4.expanded && node_r4.haveChildren);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", node_r4.expanded && node_r4.haveChildren);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !node_r4.haveChildren);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.nodeComponent)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(9, _c3, item_r1, node_r4));
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
export var PagingTreeInitialMode;
(function (PagingTreeInitialMode) {
    PagingTreeInitialMode[PagingTreeInitialMode["COLLAPSE"] = 0] = "COLLAPSE";
    PagingTreeInitialMode[PagingTreeInitialMode["EXPAND"] = 1] = "EXPAND";
})(PagingTreeInitialMode || (PagingTreeInitialMode = {}));
export class PagingTreeHelisaComponent {
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
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c0, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c1, true);
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
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc2.MatIcon], styles: [".w-100[_ngcontent-%COMP%]{width:100%}.padding-level-0[_ngcontent-%COMP%]{margin-left:0}.padding-level-1[_ngcontent-%COMP%]{margin-left:40px}.padding-level-2[_ngcontent-%COMP%]{margin-left:80px}.padding-level-3[_ngcontent-%COMP%]{margin-left:120px}.padding-level-4[_ngcontent-%COMP%]{margin-left:160px}.padding-level-5[_ngcontent-%COMP%]{margin-left:200px}.padding-level-6[_ngcontent-%COMP%]{margin-left:240px}.padding-level-7[_ngcontent-%COMP%]{margin-left:280px}.padding-level-8[_ngcontent-%COMP%]{margin-left:320px}.helisa-tree-row[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row}"] });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvaGVsaXNhLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvcGFnaW5nLXRyZWUtaGVsaXNhL3BhZ2luZy10cmVlLWhlbGlzYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFlLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd6SCxNQUFNLENBQU4sSUFBWSxxQkFHWDtBQUhELFdBQVkscUJBQXFCO0FBQ2hDLElBQUMseUVBQVEsQ0FBQTtBQUFDLElBQ1QscUVBQU0sQ0FBQTtBQUNSLENBQUMsRUFIVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBR2hDO0FBbUNELE1BQU0sT0FBTyx5QkFBeUI7QUFBRyxJQW9CdkM7QUFDRixRQW5CVSxhQUFRLEdBQVcsTUFBTSxDQUFDO0FBQ3BDLFFBQVUsaUJBQVksR0FBVyxDQUFDLENBQUM7QUFDbkMsUUFBVSxnQkFBVyxHQUFXLEdBQUcsQ0FBQztBQUNwQyxRQUFVLGFBQVEsR0FBMEIscUJBQXFCLENBQUMsTUFBTSxDQUFDO0FBQ3pFLFFBQVUsbUJBQWMsR0FBYSxFQUFFLENBQUM7QUFDeEMsUUFFVSxZQUFPLEdBQXlCLEVBQUUsQ0FBQztBQUM3QyxRQUVFLGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7QUFDL0QsSUFRRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQUssSUFDYixDQUFDO0FBQ0gsSUFDRSxlQUFlO0FBQUssSUFDcEIsQ0FBQztBQUNILElBQ0UsSUFDSSxJQUFJLENBQUMsU0FBZ0M7QUFDM0MsUUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztBQUM5QixRQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqQixJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksd0JBQXdCLENBQUMsWUFBeUM7QUFDeEUsUUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztBQUNoQyxRQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqQixJQUFFLENBQUM7QUFDSCxJQUNTLEtBQUs7QUFBSyxRQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUN0QixZQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBVSxFQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDL0YsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ1UsUUFBUSxDQUFDLEtBQVU7QUFBSSxRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUF5QixDQUFDO0FBQ3ZELFFBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsUUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUN0QixRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBeUIsQ0FBQztBQUN2RCxRQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFPLEVBQVEsRUFBRTtBQUNwQyxZQUFNLE1BQU0sSUFBSSxHQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hELFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLFFBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QixJQUFFLENBQUM7QUFDSCxJQUNVLFNBQVMsQ0FBQyxLQUFVO0FBQUksUUFDOUIsTUFBTSxJQUFJLEdBQXFCLElBQUksR0FBRyxFQUFlLENBQUM7QUFDMUQsUUFBSSxNQUFNLEtBQUssR0FBUSxFQUFFLENBQUM7QUFDMUIsUUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBTyxFQUFRLEVBQUU7QUFDcEMsWUFBTSxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDckUsWUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3JCLGdCQUFRLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDakMsb0JBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDakMsaUJBQVM7QUFDVCxnQkFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxhQUFPO0FBQ1AsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQUksTUFBTSxRQUFRLEdBQVEsSUFBSSxLQUFLLENBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JELFFBQUksSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDO0FBQzFCLFFBQUksT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUM3QixZQUFNLE1BQU0sSUFBSSxHQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNsQyxZQUFNLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUMvQixZQUFNLE1BQU0sUUFBUSxHQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLFlBQU0sSUFBSSxRQUFRLEVBQUU7QUFDcEIsZ0JBQVEsS0FBSyxJQUFJLENBQUMsR0FBVyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQy9ELG9CQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQUksT0FBTyxRQUFRLENBQUM7QUFDcEIsSUFBRSxDQUFDO0FBQ0gsSUFDVSxVQUFVLENBQUMsSUFBTztBQUFJLFFBQzVCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQzlELFlBQU0sTUFBTSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN4QyxTQUFLO0FBQ0wsUUFBSSxNQUFNLGlCQUFpQixHQUFrQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEgsUUFBSSxNQUFNLGVBQWUsR0FBa0I7QUFDM0MsWUFBTSxNQUFNLEVBQUUsSUFBSTtBQUNsQixZQUFNLFlBQVksRUFBRSxLQUFLO0FBQ3pCLFlBQU0sS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLFlBQU0sUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUsscUJBQXFCLENBQUMsTUFBTTtBQUM5RCxZQUFNLE9BQU8sRUFBRSxLQUFLO0FBQ3BCLFlBQU0sUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDeEMsU0FBSyxDQUFDO0FBQ04sUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQzFFLFFBQUksSUFBSSxpQkFBaUIsRUFBRTtBQUMzQixZQUFNLGlCQUFpQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDNUMsU0FBSztBQUNMLFFBQUksT0FBTyxlQUFlLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0gsSUFDUyxzQkFBc0IsQ0FBQyxFQUFVO0FBQUksUUFDMUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxJQUFFLENBQUM7QUFDSCxJQUNTLGtCQUFrQixDQUFDLElBQU87QUFBSSxRQUNuQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoRSxJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWEsQ0FBQyxJQUFPO0FBQUksUUFDdkIsT0FBTyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNqRyxJQUFFLENBQUM7QUFDSCxJQUNVLHNCQUFzQixDQUFDLFFBQVc7QUFBSSxRQUM1QyxNQUFNLGNBQWMsR0FBUSxFQUFFLENBQUM7QUFDbkMsUUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQU8sRUFBUSxFQUFFO0FBQ2xELFlBQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDekMsZ0JBQVEsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO0FBQzlHLG9CQUFVLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsaUJBQVM7QUFBQyxxQkFBSztBQUNmLG9CQUFVLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN2RixpQkFBUztBQUNULGFBQU87QUFDUCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNqRSxRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBbUIsRUFBUSxFQUFFO0FBQ3ZELFlBQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZO0FBQ25ELGdCQUFRLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDbkYsZ0JBQVEsTUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUM5RSxnQkFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLG9CQUFVLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLG9CQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQzlCLGlCQUFTO0FBQUMscUJBQUs7QUFDZixvQkFBVSxNQUFNLGlCQUFpQixHQUFrQixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekYsb0JBQVUsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLElBQUksaUJBQWlCLENBQUMsUUFBUSxFQUFFO0FBQ3ZFLHdCQUFZLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLHdCQUFZLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ2hDLHFCQUFXO0FBQ1gsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDekMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxZQUFZLENBQUMsSUFBTztBQUFJLFFBQ3RCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUNsRixRQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVUsQ0FBQyxJQUFPO0FBQUksUUFDcEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ2pGLFFBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLElBQUUsQ0FBQztBQUNILElBQ0UsWUFBWTtBQUFLLFFBQ2YsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDeEMsWUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZGLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksV0FBVztBQUFLLFFBQ2xCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVUsQ0FBQyxJQUFPO0FBQUksUUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxVQUFVLENBQUMsRUFBVTtBQUFJLFFBQ3ZCLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3pDLFlBQU0sTUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUN2RyxZQUFNLE1BQU0sR0FBRyxHQUFnQixJQUFJLEdBQUcsRUFBVSxDQUFDO0FBQ2pELFlBQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsQixZQUFNLE1BQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUMvQyxDQUFDLFVBQXlCLEVBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FDNUYsQ0FBQztBQUNSLFlBQU0sSUFBSSxTQUFTLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDbEQsWUFBTSxLQUFLLElBQUksQ0FBQyxHQUFXLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pFLGdCQUFRLE1BQU0sVUFBVSxHQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3JELGdCQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNsRSxvQkFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RCxpQkFBUztBQUFDLHFCQUFLO0FBQ2Ysb0JBQVUsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUN4QixvQkFBVSxNQUFNO0FBQ2hCLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFlBQU0sTUFBTSxZQUFZLEdBQW9CLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUM7QUFDcEcsWUFBTSxJQUFJLGtCQUFrQixHQUFZLEtBQUssQ0FBQztBQUM5QyxZQUFNLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUEwQixFQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0ksWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQXlCLEVBQUUsS0FBYSxFQUFRLEVBQUU7QUFDOUUsZ0JBQVEsVUFBVSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLGdCQUFRLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBSyxRQUFRLEVBQUU7QUFDN0Usb0JBQVUsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLGlCQUFTO0FBQ1QsWUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULFlBQU0sSUFBSSxRQUFRLEVBQUU7QUFDcEIsZ0JBQVEsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUNoRixhQUFPO0FBQ1AsWUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvRixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxPQUFPLENBQUMsSUFBTztBQUFJLFFBQ2pCLE1BQU0sV0FBVyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBbUIsRUFBVyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0ssUUFBSSxJQUFJLFdBQVcsSUFBSSxDQUFDLEVBQUU7QUFDMUIsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDL0MsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDcEQsWUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEIsWUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEQsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLE1BQU0sS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsVUFBVSxDQUFDLElBQU87QUFBSSxRQUNwQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN2QyxZQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2xELFlBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLFlBQU0sTUFBTSxXQUFXLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ2hELENBQUMsSUFBbUIsRUFBVyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUgsWUFBTSxJQUFJLFdBQVcsSUFBSSxDQUFDLEVBQUU7QUFDNUIsZ0JBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFELGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ1UsTUFBTTtBQUFLLFFBQ2pCLE1BQU0sS0FBSyxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBbUIsRUFBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pGLFFBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUksRUFBRSxDQUFJLEVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25FLFFBQUksTUFBTSxRQUFRLEdBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRCxRQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFTLEVBQUUsS0FBYSxFQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqSCxRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBb0IsRUFBRSxLQUFvQixFQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvRyxJQUFFLENBQUM7QUFDSDtxREExUEMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxpQkFBaUI7R0FDM0I7Ozs7Ozs7b1hBQWtEOzs7Ozs7O1NBRW5EOzs7eXRCQUNJO0FBQUM7QUFBcUQ7QUFFakMsNEJBU3ZCLE1BQU07QUFDUCw0QkFFQyxZQUFZLFNBQUMsZUFBZTtBQUMxQix3QkFFRixZQUFZLFNBQUMsV0FBVztBQUN0QixtQkFXRixLQUFLO0FBQ04sdUNBS0MsS0FBSztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUge1xuICBDT0xMQVBTRSxcbiAgRVhQQU5EXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+IHtcbiAgZ2V0KGxhc3RDaGlsZE9yZGVyOiBudW1iZXIsIHNpemU6IG51bWJlcik6IE9ic2VydmFibGU8VFtdPjtcblxuICBnZXRJZEZpZWxkKCk6IHN0cmluZztcblxuICBnZXRJZFBhcmVudEZpZWxkKCk6IHN0cmluZztcblxuICBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBIZWxpc2FOb2RlPFQ+IHtcbiAgb2JqZWN0OiBUO1xuICBsZXZlbDogbnVtYmVyO1xuICBoYXZlQ2hpbGRyZW46IGJvb2xlYW47XG4gIGV4cGFuZGVkOiBib29sZWFuO1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBwcmVvcmRlcjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGlzYU5vZGVEYXRhPFQ+IHtcbiAgcmVhZG9ubHkgb2JqZWN0OiBUO1xuICByZWFkb25seSBsZXZlbDogbnVtYmVyO1xuICByZWFkb25seSBoYXZlQ2hpbGRyZW46IGJvb2xlYW47XG4gIHJlYWRvbmx5IGV4cGFuZGVkOiBib29sZWFuO1xuICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuO1xuICByZWFkb25seSBwcmVvcmRlcjogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtcGFnaW5nLXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdUcmVlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIgPSAyMDAwMDA7XG4gIHByaXZhdGUgdmlzaWJsZUxpbWl0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHZpc2libGVTaXplOiBudW1iZXIgPSAxMDA7XG4gIHByaXZhdGUgdHJlZU1vZGU6IFBhZ2luZ1RyZWVJbml0aWFsTW9kZSA9IFBhZ2luZ1RyZWVJbml0aWFsTW9kZS5FWFBBTkQ7XG4gIHByaXZhdGUgdmlzaWJsZU9iamVjdHM6IEFycmF5PFQ+ID0gW107XG4gIHByaXZhdGUgc2VydmljZTogUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+O1xuICBwcml2YXRlIHNlYXJjaE5vZGU6IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+O1xuICBwcml2YXRlIGFsbE5vZGU6IEFycmF5PEhlbGlzYU5vZGU8VD4+ID0gW107XG5cbiAgQE91dHB1dCgpXG4gIGFmdGVyTG9hZERhdGE6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAQ29udGVudENoaWxkKCdub2RlQ29tcG9uZW50JylcbiAgbm9kZUNvbXBvbmVudDogVGVtcGxhdGVSZWY8eyBkYXRhOiBULCBub2RlOiBIZWxpc2FOb2RlRGF0YTxUPiB9PjtcblxuICBAQ29udGVudENoaWxkKCdub2RlVGl0bGUnKVxuICBub2RlVGl0bGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlKHBhcmFtTW9kZTogUGFnaW5nVHJlZUluaXRpYWxNb2RlKSB7XG4gICAgdGhpcy50cmVlTW9kZSA9IHBhcmFtTW9kZTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlKHBhcmFtU2VydmljZTogUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+KSB7XG4gICAgdGhpcy5zZXJ2aWNlID0gcGFyYW1TZXJ2aWNlO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuZ2V0KDAsIHRoaXMucGFnZVNpemUpLnN1YnNjcmliZSgoaXRlbXM6IFRbXSk6IHZvaWQgPT4gdGhpcy5sb2FkRGF0YShpdGVtcykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZERhdGEoaXRlbXM6IFRbXSk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoTm9kZSA9IG5ldyBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PigpO1xuICAgIHRoaXMudmlzaWJsZU9iamVjdHMgPSBbXTtcbiAgICB0aGlzLmFsbE5vZGUgPSBbXTtcbiAgICBpdGVtcyA9IHRoaXMuc29ydEl0ZW1zKGl0ZW1zKTtcbiAgICB0aGlzLnNlYXJjaE5vZGUgPSBuZXcgTWFwPHN0cmluZywgSGVsaXNhTm9kZTxUPj4oKTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtOiBUKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBub2RlOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5jcmVhdGVOb2RlKGl0ZW0pO1xuICAgICAgdGhpcy5hbGxOb2RlLnB1c2gobm9kZSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZVNvcnQoKTtcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMobnVsbCk7XG4gICAgdGhpcy5hZnRlckxvYWREYXRhLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydEl0ZW1zKGl0ZW1zOiBUW10pOiBUW10ge1xuICAgIGNvbnN0IGxBZHk6IE1hcDxzdHJpbmcsIFRbXT4gPSBuZXcgTWFwPHN0cmluZywgVFtdPigpO1xuICAgIGNvbnN0IHN0YWNrOiBUW10gPSBbXTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtOiBUKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcbiAgICAgIGlmICghaWRQYXJlbnQpIHtcbiAgICAgICAgc3RhY2sudW5zaGlmdChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghbEFkeS5oYXMoaWRQYXJlbnQpKSB7XG4gICAgICAgICAgbEFkeS5zZXQoaWRQYXJlbnQsIFtdKTtcbiAgICAgICAgfVxuICAgICAgICBsQWR5LmdldChpZFBhcmVudCkucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCByZXNwb25zZTogVFtdID0gbmV3IEFycmF5PFQ+KGl0ZW1zLmxlbmd0aCk7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsYXN0OiBUID0gc3RhY2sucG9wKCk7XG4gICAgICByZXNwb25zZVtpbmRleCsrXSA9IGxhc3Q7XG4gICAgICBjb25zdCBjaGlsZHJlbjogVFtdID0gbEFkeS5nZXQobGFzdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XG4gICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU5vZGUoaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xuICAgIGlmICh0aGlzLnNlYXJjaE5vZGUuaGFzKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pKSB7XG4gICAgICB0aHJvdyBFcnJvcignWWEgZXhpc3RlIGVsIG5vZG8uJyk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudEluZm9ybWF0aW9uOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xuICAgIGNvbnN0IG5vZGVJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHtcbiAgICAgIG9iamVjdDogaXRlbSxcbiAgICAgIGhhdmVDaGlsZHJlbjogZmFsc2UsXG4gICAgICBsZXZlbDogcGFyZW50SW5mb3JtYXRpb24gPyBwYXJlbnRJbmZvcm1hdGlvbi5sZXZlbCArIDEgOiAwLFxuICAgICAgZXhwYW5kZWQ6IHRoaXMudHJlZU1vZGUgPT09IFBhZ2luZ1RyZWVJbml0aWFsTW9kZS5FWFBBTkQsXG4gICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgIHByZW9yZGVyOiB0aGlzLnNlYXJjaE5vZGUuc2l6ZSArIDEsXG4gICAgfTtcbiAgICB0aGlzLnNlYXJjaE5vZGUuc2V0KGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0sIG5vZGVJbmZvcm1hdGlvbik7XG4gICAgaWYgKHBhcmVudEluZm9ybWF0aW9uKSB7XG4gICAgICBwYXJlbnRJbmZvcm1hdGlvbi5oYXZlQ2hpbGRyZW4gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZUluZm9ybWF0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQ6IHN0cmluZyk6IEhlbGlzYU5vZGU8VD4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaE5vZGUuZ2V0KGlkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXROb2RlSW5mb3JtYXRpb24oaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaE5vZGUuZ2V0KGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xuICB9XG5cbiAgZ2V0TGV2ZWxDbGFzcyhpdGVtOiBUKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3BhZGRpbmctbGV2ZWwtJyArIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5sZXZlbDtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE5leHRWaXNpYmxlT2JqZWN0cyhub2RlRnJvbTogVCk6IHZvaWQge1xuICAgIGNvbnN0IHZpc2libGVPYmplY3RzOiBUW10gPSBbXTtcbiAgICB0aGlzLnZpc2libGVPYmplY3RzLmZvckVhY2goKGl0ZW06IFQpOiB2b2lkID0+IHtcbiAgICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xuICAgICAgICBpZiAobm9kZUZyb20gJiYgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24obm9kZUZyb20pLnByZW9yZGVyID49IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pLnByZW9yZGVyKSB7XG4gICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy52aXNpYmxlTGltaXQgPSB2aXNpYmxlT2JqZWN0cy5sZW5ndGggKyB0aGlzLnZpc2libGVTaXplO1xuICAgIHRoaXMuYWxsTm9kZS5mb3JFYWNoKChpdGVtOiBIZWxpc2FOb2RlPFQ+KTogdm9pZCA9PiB7XG4gICAgICBpZiAodmlzaWJsZU9iamVjdHMubGVuZ3RoIDwgdGhpcy52aXNpYmxlTGltaXQgJiZcbiAgICAgICAgKCFub2RlRnJvbSB8fCB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihub2RlRnJvbSkucHJlb3JkZXIgPCBpdGVtLnByZW9yZGVyKSkge1xuICAgICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gaXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV07XG4gICAgICAgIGlmICghaWRQYXJlbnQpIHtcbiAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0ub2JqZWN0KTtcbiAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHBhcmVudEluZm9ybWF0aW9uOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkUGFyZW50KTtcbiAgICAgICAgICBpZiAocGFyZW50SW5mb3JtYXRpb24udmlzaWJsZSAmJiBwYXJlbnRJbmZvcm1hdGlvbi5leHBhbmRlZCkge1xuICAgICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtLm9iamVjdCk7XG4gICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudmlzaWJsZU9iamVjdHMgPSB2aXNpYmxlT2JqZWN0cztcbiAgfVxuXG4gIGNvbGxhcHNlTm9kZShpdGVtOiBUKTogdm9pZCB7XG4gICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGl0ZW0pO1xuICB9XG5cbiAgZXhwYW5kTm9kZShpdGVtOiBUKTogdm9pZCB7XG4gICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLmV4cGFuZGVkID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMoaXRlbSk7XG4gIH1cblxuICBzaG93TmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmlzaWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKHRoaXMudmlzaWJsZU9iamVjdHNbdGhpcy52aXNpYmxlT2JqZWN0cy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZpc2libGVEYXRhKCk6IFJlYWRvbmx5QXJyYXk8VD4ge1xuICAgIHJldHVybiB0aGlzLnZpc2libGVPYmplY3RzO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpdGVtOiBUKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVCeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xuICB9XG5cbiAgcmVtb3ZlQnlJZChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZCkpIHtcbiAgICAgIGNvbnN0IGlkUGFyZW50OiBzdHJpbmcgPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQpLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcbiAgICAgIGNvbnN0IHNldDogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICAgIHNldC5hZGQoaWQpO1xuICAgICAgY29uc3QgYmVnaW5JbmRleDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcbiAgICAgICAgKGl0ZW1TZWFyY2g6IEhlbGlzYU5vZGU8VD4pOiBib29sZWFuID0+IGl0ZW1TZWFyY2gub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpZFxuICAgICAgKTtcbiAgICAgIGxldCBsYXN0SW5kZXg6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBiZWdpbkluZGV4ICsgMTsgaSA8IHRoaXMuYWxsTm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtU2VhcmNoOiBUID0gdGhpcy5hbGxOb2RlW2ldLm9iamVjdDtcbiAgICAgICAgaWYgKHNldC5oYXMoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSkpIHtcbiAgICAgICAgICBzZXQuYWRkKGl0ZW1TZWFyY2hbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3RJbmRleCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGRlbGV0ZWRJdGVtczogSGVsaXNhTm9kZTxUPltdID0gdGhpcy5hbGxOb2RlLnNwbGljZShiZWdpbkluZGV4LCBsYXN0SW5kZXggLSBiZWdpbkluZGV4KTtcbiAgICAgIGxldCBwYXJlbnRIYXZlQ2hpbGRyZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGRlbGV0ZWRJdGVtcy5mb3JFYWNoKChkZWxldGVkSXRlbTogSGVsaXNhTm9kZTxUPik6IGJvb2xlYW4gPT4gdGhpcy5zZWFyY2hOb2RlLmRlbGV0ZShkZWxldGVkSXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pKTtcbiAgICAgIHRoaXMuYWxsTm9kZS5mb3JFYWNoKChzZWFyY2hJdGVtOiBIZWxpc2FOb2RlPFQ+LCBpbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgIHNlYXJjaEl0ZW0ucHJlb3JkZXIgPSBpbmRleCArIDE7XG4gICAgICAgIGlmIChzZWFyY2hJdGVtLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSA9PT0gaWRQYXJlbnQpIHtcbiAgICAgICAgICBwYXJlbnRIYXZlQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChpZFBhcmVudCkge1xuICAgICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWRQYXJlbnQpLmhhdmVDaGlsZHJlbiA9IHBhcmVudEhhdmVDaGlsZHJlbjtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhiZWdpbkluZGV4ID4gMCA/IHRoaXMuYWxsTm9kZVtiZWdpbkluZGV4IC0gMV0ub2JqZWN0IDogbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkSXRlbShpdGVtOiBUKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXhQYXJlbnQ6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoKG5vZGU6IEhlbGlzYU5vZGU8VD4pOiBib29sZWFuID0+IG5vZGUub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcbiAgICBpZiAoaW5kZXhQYXJlbnQgPj0gMCkge1xuICAgICAgdGhpcy5hbGxOb2RlLnB1c2godGhpcy5jcmVhdGVOb2RlKGl0ZW0pKTtcbiAgICAgIHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0uaGF2ZUNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVTb3J0KCk7XG4gICAgICB0aGlzLmV4cGFuZE5vZGUodGhpcy5hbGxOb2RlW2luZGV4UGFyZW50XS5vYmplY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcignTm8gZXhpc3RlIGVsIHBhZHJlLicpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUl0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xuICAgICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkub2JqZWN0ID0gaXRlbTtcbiAgICAgIHRoaXMucmVTb3J0KCk7XG4gICAgICBjb25zdCBpbmRleFBhcmVudDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcbiAgICAgICAgKG5vZGU6IEhlbGlzYU5vZGU8VD4pOiBib29sZWFuID0+IG5vZGUub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcbiAgICAgIGlmIChpbmRleFBhcmVudCA+PSAwKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kTm9kZSh0aGlzLmFsbE5vZGVbaW5kZXhQYXJlbnRdLm9iamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZVNvcnQoKTogdm9pZCB7XG4gICAgY29uc3QgaXRlbXM6IFRbXSA9IHRoaXMuYWxsTm9kZS5tYXAoKG5vZGU6IEhlbGlzYU5vZGU8VD4pOiBUID0+IG5vZGUub2JqZWN0KTtcbiAgICBpdGVtcy5zb3J0KChhOiBULCBiOiBUKTogbnVtYmVyID0+IHRoaXMuc2VydmljZS5jb21wYXJlKGEsIGIpKTtcbiAgICBjb25zdCBwcmVvcmRlcjogVFtdID0gdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xuICAgIHByZW9yZGVyLmZvckVhY2goKG9iamVjdDogVCwgaW5kZXg6IG51bWJlcik6IG51bWJlciA9PiB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihvYmplY3QpLnByZW9yZGVyID0gaW5kZXggKyAxKTtcbiAgICB0aGlzLmFsbE5vZGUuc29ydCgobm9kZUE6IEhlbGlzYU5vZGU8VD4sIG5vZGVCOiBIZWxpc2FOb2RlPFQ+KTogbnVtYmVyID0+IG5vZGVBLnByZW9yZGVyIC0gbm9kZUIucHJlb3JkZXIpO1xuICB9XG59XG4iXX0=