/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
/** @enum {number} */
const PagingTreeInitialMode = {
    COLLAPSE: 0,
    EXPAND: 1,
};
export { PagingTreeInitialMode };
PagingTreeInitialMode[PagingTreeInitialMode.COLLAPSE] = 'COLLAPSE';
PagingTreeInitialMode[PagingTreeInitialMode.EXPAND] = 'EXPAND';
/**
 * @record
 * @template T
 */
export function PagingTreeHelisaListable() { }
if (false) {
    /**
     * @param {?} lastChildOrder
     * @param {?} size
     * @return {?}
     */
    PagingTreeHelisaListable.prototype.get = function (lastChildOrder, size) { };
    /**
     * @return {?}
     */
    PagingTreeHelisaListable.prototype.getIdField = function () { };
    /**
     * @return {?}
     */
    PagingTreeHelisaListable.prototype.getIdParentField = function () { };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    PagingTreeHelisaListable.prototype.compare = function (a, b) { };
}
/**
 * @record
 * @template T
 */
function HelisaNode() { }
if (false) {
    /** @type {?} */
    HelisaNode.prototype.object;
    /** @type {?} */
    HelisaNode.prototype.level;
    /** @type {?} */
    HelisaNode.prototype.haveChildren;
    /** @type {?} */
    HelisaNode.prototype.expanded;
    /** @type {?} */
    HelisaNode.prototype.visible;
    /** @type {?} */
    HelisaNode.prototype.preorder;
}
/**
 * @record
 * @template T
 */
export function HelisaNodeData() { }
if (false) {
    /** @type {?} */
    HelisaNodeData.prototype.object;
    /** @type {?} */
    HelisaNodeData.prototype.level;
    /** @type {?} */
    HelisaNodeData.prototype.haveChildren;
    /** @type {?} */
    HelisaNodeData.prototype.expanded;
    /** @type {?} */
    HelisaNodeData.prototype.visible;
    /** @type {?} */
    HelisaNodeData.prototype.preorder;
}
/**
 * @template T
 */
export class PagingTreeHelisaComponent {
    constructor() {
        this.pageSize = 200000;
        this.visibleLimit = 0;
        this.visibleSize = 100;
        this.treeMode = PagingTreeInitialMode.EXPAND;
        this.visibleObjects = [];
        this.allNode = [];
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
    }
    /**
     * @param {?} paramMode
     * @return {?}
     */
    set mode(paramMode) {
        this.treeMode = paramMode;
        this.reset();
    }
    /**
     * @param {?} paramService
     * @return {?}
     */
    set pagingTreeHelisaListable(paramService) {
        this.service = paramService;
        this.reset();
    }
    /**
     * @private
     * @return {?}
     */
    reset() {
        if (this.service) {
            this.service.get(0, this.pageSize).subscribe((/**
             * @param {?} items
             * @return {?}
             */
            (items) => this.loadData(items)));
        }
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    loadData(items) {
        this.searchNode = new Map();
        this.visibleObjects = [];
        this.allNode = [];
        console.log('items : ', items);
        items = this.sortItems(items);
        console.log('2items : ', items);
        this.searchNode = new Map();
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const node = this.createNode(item);
            this.allNode.push(node);
        }));
        this.loadNextVisibleObjects(null);
        console.log('all : ', this.allNode);
        console.log('search : ', this.searchNode);
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    sortItems(items) {
        /** @type {?} */
        const lAdy = new Map();
        /** @type {?} */
        const stack = [];
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
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
        }));
        /** @type {?} */
        const response = new Array(items.length);
        /** @type {?} */
        let index = 0;
        while (stack.length > 0) {
            /** @type {?} */
            const last = stack.pop();
            response[index++] = last;
            /** @type {?} */
            const children = lAdy.get(last[this.service.getIdField()]);
            if (children) {
                for (let i = children.length - 1; i >= 0; i--) {
                    stack.push(children[i]);
                }
            }
        }
        return response;
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    createNode(item) {
        if (this.searchNode.has(item[this.service.getIdField()])) {
            throw Error('Ya existe el nodo.');
        }
        /** @type {?} */
        const parentInformation = this.getNodeInformationById(item[this.service.getIdParentField()]);
        /** @type {?} */
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
    /**
     * @param {?} id
     * @return {?}
     */
    getNodeInformationById(id) {
        console.log("pinche id que no funciona ", id);
        return this.searchNode.get(id);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getNodeInformation(item) {
        return this.searchNode.get(item[this.service.getIdField()]);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getLevelClass(item) {
        return 'padding-level-' + this.getNodeInformationById(item[this.service.getIdField()]).level;
    }
    /**
     * @private
     * @param {?} nodeFrom
     * @return {?}
     */
    loadNextVisibleObjects(nodeFrom) {
        /** @type {?} */
        const visibleObjects = [];
        this.visibleObjects.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (this.getNodeInformation(item)) {
                if (nodeFrom && this.getNodeInformation(nodeFrom).preorder >= this.getNodeInformation(item).preorder) {
                    visibleObjects.push(item);
                }
                else {
                    this.getNodeInformationById(item[this.service.getIdField()]).visible = false;
                }
            }
        }));
        this.visibleLimit = visibleObjects.length + this.visibleSize;
        this.allNode.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (visibleObjects.length < this.visibleLimit &&
                (!nodeFrom || this.getNodeInformation(nodeFrom).preorder < item.preorder)) {
                /** @type {?} */
                const idParent = item.object[this.service.getIdParentField()];
                if (!idParent) {
                    visibleObjects.push(item.object);
                    item.visible = true;
                }
                else {
                    /** @type {?} */
                    const parentInformation = this.getNodeInformationById(idParent);
                    if (parentInformation.visible && parentInformation.expanded) {
                        visibleObjects.push(item.object);
                        item.visible = true;
                    }
                }
            }
        }));
        this.visibleObjects = visibleObjects;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    collapseNode(item) {
        this.getNodeInformationById(item[this.service.getIdField()]).expanded = false;
        this.loadNextVisibleObjects(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    expandNode(item) {
        this.getNodeInformationById(item[this.service.getIdField()]).expanded = true;
        this.loadNextVisibleObjects(item);
    }
    /**
     * @return {?}
     */
    showNextPage() {
        if (this.visibleObjects.length > 0) {
            this.loadNextVisibleObjects(this.visibleObjects[this.visibleObjects.length - 1]);
        }
    }
    /**
     * @return {?}
     */
    get visibleData() {
        return this.visibleObjects;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeItem(item) {
        /** @type {?} */
        const set = new Set();
        set.add(item[this.service.getIdField()]);
        /** @type {?} */
        const beginIndex = this.allNode.findIndex((/**
         * @param {?} itemSearch
         * @return {?}
         */
        (itemSearch) => itemSearch.object[this.service.getIdField()] === item[this.service.getIdField()]));
        /** @type {?} */
        let lastIndex = this.allNode.length;
        for (let i = beginIndex + 1; i < this.allNode.length; i++) {
            /** @type {?} */
            const itemSearch = this.allNode[i].object;
            if (set.has(itemSearch[this.service.getIdParentField()])) {
                set.add(itemSearch[this.service.getIdField()]);
            }
            else {
                lastIndex = i;
                break;
            }
        }
        /** @type {?} */
        const deletedItems = this.allNode.splice(beginIndex, lastIndex - beginIndex);
        deletedItems.forEach((/**
         * @param {?} deletedItem
         * @return {?}
         */
        (deletedItem) => this.searchNode.delete(deletedItem.object[this.service.getIdField()])));
        this.allNode.forEach((/**
         * @param {?} searchItem
         * @param {?} index
         * @return {?}
         */
        (searchItem, index) => searchItem.preorder = index + 1));
        this.loadNextVisibleObjects(beginIndex > 0 ? this.allNode[beginIndex - 1].object : null);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        /** @type {?} */
        const indexParent = this.allNode.findIndex((/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.object[this.service.getIdField()] === item[this.service.getIdParentField()]));
        if (indexParent >= 0) {
            this.allNode.push(this.createNode(item));
            this.reSort();
            this.expandNode(this.allNode[indexParent].object);
        }
        else {
            throw Error('No existe el padre.');
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    updateItem(item) {
        if (this.getNodeInformation(item)) {
            this.getNodeInformation(item).object = item;
            this.reSort();
            /** @type {?} */
            const indexParent = this.allNode.findIndex((/**
             * @param {?} node
             * @return {?}
             */
            (node) => node.object[this.service.getIdField()] === item[this.service.getIdParentField()]));
            if (indexParent >= 0) {
                this.expandNode(this.allNode[indexParent].object);
            }
            else {
                this.loadNextVisibleObjects(null);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    reSort() {
        /** @type {?} */
        const items = this.allNode.map((/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.object));
        items.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => this.service.compare(a, b)));
        /** @type {?} */
        const preorder = this.sortItems(items);
        preorder.forEach((/**
         * @param {?} object
         * @param {?} index
         * @return {?}
         */
        (object, index) => this.getNodeInformation(object).preorder = index + 1));
        this.allNode.sort((/**
         * @param {?} nodeA
         * @param {?} nodeB
         * @return {?}
         */
        (nodeA, nodeB) => nodeA.preorder - nodeB.preorder));
    }
}
PagingTreeHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-paging-tree',
                template: "<div>\r\n  <div *ngFor=\"let item of visibleData\" [ngClass]=\"this.getLevelClass(item)\">\r\n    <div *ngIf=\"getNodeInformationById(item.id).visible\">\r\n      <div *ngIf=\"getNodeInformationById(item.id) as node\" class=\"helisa-tree-row\">\r\n        <div>\r\n          <mat-icon *ngIf=\"!node.expanded && node.haveChildren\" (click)=\"expandNode(item)\">add</mat-icon>\r\n          <mat-icon *ngIf=\"node.expanded && node.haveChildren\" (click)=\"collapseNode(item)\">remove</mat-icon>\r\n        </div>\r\n        <ng-container [ngTemplateOutlet]=\"nodeComponent\" [ngTemplateOutletContext]=\"{data: item, node: node}\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n",
                styles: [".padding-level-0{padding-left:0}.padding-level-1{padding-left:40px}.padding-level-2{padding-left:80px}.padding-level-3{padding-left:120px}.padding-level-4{padding-left:160px}.padding-level-5{padding-left:200px}.padding-level-6{padding-left:240px}.padding-level-7{padding-left:280px}.padding-level-8{padding-left:320px}.helisa-tree-row{display:flex;flex-direction:row;align-items:center}"]
            }] }
];
/** @nocollapse */
PagingTreeHelisaComponent.ctorParameters = () => [];
PagingTreeHelisaComponent.propDecorators = {
    nodeComponent: [{ type: ContentChild, args: ['nodeComponent',] }],
    mode: [{ type: Input }],
    pagingTreeHelisaListable: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingTreeHelisaComponent.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    PagingTreeHelisaComponent.prototype.visibleLimit;
    /**
     * @type {?}
     * @private
     */
    PagingTreeHelisaComponent.prototype.visibleSize;
    /**
     * @type {?}
     * @private
     */
    PagingTreeHelisaComponent.prototype.treeMode;
    /**
     * @type {?}
     * @private
     */
    PagingTreeHelisaComponent.prototype.visibleObjects;
    /**
     * @type {?}
     * @private
     */
    PagingTreeHelisaComponent.prototype.service;
    /**
     * @type {?}
     * @private
     */
    PagingTreeHelisaComponent.prototype.searchNode;
    /**
     * @type {?}
     * @private
     */
    PagingTreeHelisaComponent.prototype.allNode;
    /** @type {?} */
    PagingTreeHelisaComponent.prototype.nodeComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYWdpbmctdHJlZS1oZWxpc2EvcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7OztJQUkvRixXQUFRO0lBQ1IsU0FBTTs7Ozs7Ozs7O0FBR1IsOENBUUM7Ozs7Ozs7SUFQQyw2RUFBMkQ7Ozs7SUFFM0QsZ0VBQXFCOzs7O0lBRXJCLHNFQUEyQjs7Ozs7O0lBRTNCLGlFQUE0Qjs7Ozs7O0FBRzlCLHlCQU9DOzs7SUFOQyw0QkFBVTs7SUFDViwyQkFBYzs7SUFDZCxrQ0FBc0I7O0lBQ3RCLDhCQUFrQjs7SUFDbEIsNkJBQWlCOztJQUNqQiw4QkFBaUI7Ozs7OztBQUduQixvQ0FPQzs7O0lBTkMsZ0NBQW1COztJQUNuQiwrQkFBdUI7O0lBQ3ZCLHNDQUErQjs7SUFDL0Isa0NBQTJCOztJQUMzQixpQ0FBMEI7O0lBQzFCLGtDQUEwQjs7Ozs7QUFRNUIsTUFBTSxPQUFPLHlCQUF5QjtJQWNwQztRQVpRLGFBQVEsR0FBVyxNQUFNLENBQUM7UUFDMUIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsYUFBUSxHQUEwQixxQkFBcUIsQ0FBQyxNQUFNLENBQUM7UUFDL0QsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFHOUIsWUFBTyxHQUF5QixFQUFFLENBQUM7SUFNM0MsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsZUFBZTtJQUNmLENBQUM7Ozs7O0lBRUQsSUFDSSxJQUFJLENBQUMsU0FBZ0M7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7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Q29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgZW51bSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUge1xyXG4gIENPTExBUFNFLFxyXG4gIEVYUEFORFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZTxUPiB7XHJcbiAgZ2V0KGxhc3RDaGlsZE9yZGVyOiBudW1iZXIsIHNpemU6IG51bWJlcik6IE9ic2VydmFibGU8VFtdPjtcclxuXHJcbiAgZ2V0SWRGaWVsZCgpOiBzdHJpbmc7XHJcblxyXG4gIGdldElkUGFyZW50RmllbGQoKTogc3RyaW5nO1xyXG5cclxuICBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBIZWxpc2FOb2RlPFQ+IHtcclxuICBvYmplY3Q6IFQ7XHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuICBoYXZlQ2hpbGRyZW46IGJvb2xlYW47XHJcbiAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBwcmVvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhlbGlzYU5vZGVEYXRhPFQ+IHtcclxuICByZWFkb25seSBvYmplY3Q6IFQ7XHJcbiAgcmVhZG9ubHkgbGV2ZWw6IG51bWJlcjtcclxuICByZWFkb25seSBoYXZlQ2hpbGRyZW46IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgdmlzaWJsZTogYm9vbGVhbjtcclxuICByZWFkb25seSBwcmVvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1wYWdpbmctdHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luZy10cmVlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnaW5nVHJlZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgcGFnZVNpemU6IG51bWJlciA9IDIwMDAwMDtcclxuICBwcml2YXRlIHZpc2libGVMaW1pdDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHZpc2libGVTaXplOiBudW1iZXIgPSAxMDA7XHJcbiAgcHJpdmF0ZSB0cmVlTW9kZTogUGFnaW5nVHJlZUluaXRpYWxNb2RlID0gUGFnaW5nVHJlZUluaXRpYWxNb2RlLkVYUEFORDtcclxuICBwcml2YXRlIHZpc2libGVPYmplY3RzOiBBcnJheTxUPiA9IFtdO1xyXG4gIHByaXZhdGUgc2VydmljZTogUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+O1xyXG4gIHByaXZhdGUgc2VhcmNoTm9kZTogTWFwPHN0cmluZywgSGVsaXNhTm9kZTxUPj47XHJcbiAgcHJpdmF0ZSBhbGxOb2RlOiBBcnJheTxIZWxpc2FOb2RlPFQ+PiA9IFtdO1xyXG5cclxuICBAQ29udGVudENoaWxkKCdub2RlQ29tcG9uZW50JylcclxuICBub2RlQ29tcG9uZW50OiBUZW1wbGF0ZVJlZjx7IGRhdGE6IFQsIG5vZGU6IEhlbGlzYU5vZGVEYXRhPFQ+IH0+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbW9kZShwYXJhbU1vZGU6IFBhZ2luZ1RyZWVJbml0aWFsTW9kZSkge1xyXG4gICAgdGhpcy50cmVlTW9kZSA9IHBhcmFtTW9kZTtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZShwYXJhbVNlcnZpY2U6IFBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZTxUPikge1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gcGFyYW1TZXJ2aWNlO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5zZXJ2aWNlLmdldCgwLCB0aGlzLnBhZ2VTaXplKS5zdWJzY3JpYmUoKGl0ZW1zOiBUW10pID0+IHRoaXMubG9hZERhdGEoaXRlbXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZERhdGEoaXRlbXM6IFRbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlID0gbmV3IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+KCk7XHJcbiAgICB0aGlzLnZpc2libGVPYmplY3RzID0gW107XHJcbiAgICB0aGlzLmFsbE5vZGUgPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKCdpdGVtcyA6ICcsIGl0ZW1zKTtcclxuICAgIGl0ZW1zID0gdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xyXG4gICAgY29uc29sZS5sb2coJzJpdGVtcyA6ICcsIGl0ZW1zKTtcclxuICAgIHRoaXMuc2VhcmNoTm9kZSA9IG5ldyBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PigpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogVCkgPT4ge1xyXG4gICAgICBjb25zdCBub2RlOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5jcmVhdGVOb2RlKGl0ZW0pO1xyXG4gICAgICB0aGlzLmFsbE5vZGUucHVzaChub2RlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKG51bGwpO1xyXG4gICAgY29uc29sZS5sb2coJ2FsbCA6ICcsIHRoaXMuYWxsTm9kZSk7XHJcbiAgICBjb25zb2xlLmxvZygnc2VhcmNoIDogJywgdGhpcy5zZWFyY2hOb2RlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc29ydEl0ZW1zKGl0ZW1zOiBUW10pOiBUW10ge1xyXG4gICAgY29uc3QgbEFkeTogTWFwPHN0cmluZywgVFtdPiA9IG5ldyBNYXA8c3RyaW5nLCBUW10+KCk7XHJcbiAgICBjb25zdCBzdGFjazogVFtdID0gW107XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtOiBUKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkUGFyZW50OiBzdHJpbmcgPSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldO1xyXG4gICAgICBpZiAoIWlkUGFyZW50KSB7XHJcbiAgICAgICAgc3RhY2sudW5zaGlmdChpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWxBZHkuaGFzKGlkUGFyZW50KSkge1xyXG4gICAgICAgICAgbEFkeS5zZXQoaWRQYXJlbnQsIFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbEFkeS5nZXQoaWRQYXJlbnQpLnB1c2goaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2U6IFRbXSA9IG5ldyBBcnJheTxUPihpdGVtcy5sZW5ndGgpO1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgbGFzdDogVCA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICByZXNwb25zZVtpbmRleCsrXSA9IGxhc3Q7XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuOiBUW10gPSBsQWR5LmdldChsYXN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcclxuICAgICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVOb2RlKGl0ZW06IFQpOiBIZWxpc2FOb2RlPFQ+IHtcclxuICAgIGlmICh0aGlzLnNlYXJjaE5vZGUuaGFzKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdZYSBleGlzdGUgZWwgbm9kby4nKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcmVudEluZm9ybWF0aW9uOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xyXG4gICAgY29uc3Qgbm9kZUluZm9ybWF0aW9uOiBIZWxpc2FOb2RlPFQ+ID0ge1xyXG4gICAgICBvYmplY3Q6IGl0ZW0sXHJcbiAgICAgIGhhdmVDaGlsZHJlbjogZmFsc2UsXHJcbiAgICAgIGxldmVsOiBwYXJlbnRJbmZvcm1hdGlvbiA/IHBhcmVudEluZm9ybWF0aW9uLmxldmVsICsgMSA6IDAsXHJcbiAgICAgIGV4cGFuZGVkOiB0aGlzLnRyZWVNb2RlID09PSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUuRVhQQU5ELFxyXG4gICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJlb3JkZXI6IHRoaXMuc2VhcmNoTm9kZS5zaXplICsgMSxcclxuICAgIH07XHJcbiAgICB0aGlzLnNlYXJjaE5vZGUuc2V0KGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0sIG5vZGVJbmZvcm1hdGlvbik7XHJcbiAgICBpZiAocGFyZW50SW5mb3JtYXRpb24pIHtcclxuICAgICAgcGFyZW50SW5mb3JtYXRpb24uaGF2ZUNoaWxkcmVuID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlSW5mb3JtYXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZDogc3RyaW5nKTogSGVsaXNhTm9kZTxUPiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInBpbmNoZSBpZCBxdWUgbm8gZnVuY2lvbmEgXCIgLCBpZCk7XHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hOb2RlLmdldChpZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW06IFQpOiBIZWxpc2FOb2RlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaE5vZGUuZ2V0KGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGV2ZWxDbGFzcyhpdGVtOiBUKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAncGFkZGluZy1sZXZlbC0nICsgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLmxldmVsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkTmV4dFZpc2libGVPYmplY3RzKG5vZGVGcm9tOiBUKTogdm9pZCB7XHJcbiAgICBjb25zdCB2aXNpYmxlT2JqZWN0czogVFtdID0gW107XHJcbiAgICB0aGlzLnZpc2libGVPYmplY3RzLmZvckVhY2goKGl0ZW06IFQpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pKSB7XHJcbiAgICAgICAgaWYgKG5vZGVGcm9tICYmIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKG5vZGVGcm9tKS5wcmVvcmRlciA+PSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKS5wcmVvcmRlcikge1xyXG4gICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy52aXNpYmxlTGltaXQgPSB2aXNpYmxlT2JqZWN0cy5sZW5ndGggKyB0aGlzLnZpc2libGVTaXplO1xyXG4gICAgdGhpcy5hbGxOb2RlLmZvckVhY2goKGl0ZW06IEhlbGlzYU5vZGU8VD4pID0+IHtcclxuICAgICAgaWYgKHZpc2libGVPYmplY3RzLmxlbmd0aCA8IHRoaXMudmlzaWJsZUxpbWl0ICYmXHJcbiAgICAgICAgKCFub2RlRnJvbSB8fCB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihub2RlRnJvbSkucHJlb3JkZXIgPCBpdGVtLnByZW9yZGVyKSkge1xyXG4gICAgICAgIGNvbnN0IGlkUGFyZW50OiBzdHJpbmcgPSBpdGVtLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcclxuICAgICAgICBpZiAoIWlkUGFyZW50KSB7XHJcbiAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0ub2JqZWN0KTtcclxuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHBhcmVudEluZm9ybWF0aW9uOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkUGFyZW50KTtcclxuICAgICAgICAgIGlmIChwYXJlbnRJbmZvcm1hdGlvbi52aXNpYmxlICYmIHBhcmVudEluZm9ybWF0aW9uLmV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbS5vYmplY3QpO1xyXG4gICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZpc2libGVPYmplY3RzID0gdmlzaWJsZU9iamVjdHM7XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZU5vZGUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMoaXRlbSk7XHJcbiAgfVxyXG5cclxuICBleHBhbmROb2RlKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5leHBhbmRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMoaXRlbSk7XHJcbiAgfVxyXG5cclxuICBzaG93TmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlT2JqZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyh0aGlzLnZpc2libGVPYmplY3RzW3RoaXMudmlzaWJsZU9iamVjdHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHZpc2libGVEYXRhKCk6IFJlYWRvbmx5QXJyYXk8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZU9iamVjdHM7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNldDogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIHNldC5hZGQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgICBjb25zdCBiZWdpbkluZGV4OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUuZmluZEluZGV4KFxyXG4gICAgICAoaXRlbVNlYXJjaDogSGVsaXNhTm9kZTxUPikgPT4gaXRlbVNlYXJjaC5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV1cclxuICAgICk7XHJcbiAgICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gYmVnaW5JbmRleCArIDE7IGkgPCB0aGlzLmFsbE5vZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbVNlYXJjaDogVCA9IHRoaXMuYWxsTm9kZVtpXS5vYmplY3Q7XHJcbiAgICAgIGlmIChzZXQuaGFzKGl0ZW1TZWFyY2hbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pKSB7XHJcbiAgICAgICAgc2V0LmFkZChpdGVtU2VhcmNoW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsYXN0SW5kZXggPSBpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWxldGVkSXRlbXM6IEhlbGlzYU5vZGU8VD5bXSA9IHRoaXMuYWxsTm9kZS5zcGxpY2UoYmVnaW5JbmRleCwgbGFzdEluZGV4IC0gYmVnaW5JbmRleCk7XHJcbiAgICBkZWxldGVkSXRlbXMuZm9yRWFjaCgoZGVsZXRlZEl0ZW06IEhlbGlzYU5vZGU8VD4pID0+IHRoaXMuc2VhcmNoTm9kZS5kZWxldGUoZGVsZXRlZEl0ZW0ub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKSk7XHJcbiAgICB0aGlzLmFsbE5vZGUuZm9yRWFjaCgoc2VhcmNoSXRlbTogSGVsaXNhTm9kZTxUPiwgaW5kZXg6IG51bWJlcikgPT4gc2VhcmNoSXRlbS5wcmVvcmRlciA9IGluZGV4ICsgMSk7XHJcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMoYmVnaW5JbmRleCA+IDAgPyB0aGlzLmFsbE5vZGVbYmVnaW5JbmRleCAtIDFdLm9iamVjdCA6IG51bGwpO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleFBhcmVudDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleCgobm9kZTogSGVsaXNhTm9kZTxUPikgPT4gbm9kZS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xyXG4gICAgaWYgKGluZGV4UGFyZW50ID49IDApIHtcclxuICAgICAgdGhpcy5hbGxOb2RlLnB1c2godGhpcy5jcmVhdGVOb2RlKGl0ZW0pKTtcclxuICAgICAgdGhpcy5yZVNvcnQoKTtcclxuICAgICAgdGhpcy5leHBhbmROb2RlKHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0ub2JqZWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdObyBleGlzdGUgZWwgcGFkcmUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJdGVtKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xyXG4gICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKS5vYmplY3QgPSBpdGVtO1xyXG4gICAgICB0aGlzLnJlU29ydCgpO1xyXG4gICAgICBjb25zdCBpbmRleFBhcmVudDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcclxuICAgICAgICAobm9kZTogSGVsaXNhTm9kZTxUPikgPT4gbm9kZS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xyXG4gICAgICBpZiAoaW5kZXhQYXJlbnQgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kTm9kZSh0aGlzLmFsbE5vZGVbaW5kZXhQYXJlbnRdLm9iamVjdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlU29ydCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW1zOiBUW10gPSB0aGlzLmFsbE5vZGUubWFwKChub2RlOiBIZWxpc2FOb2RlPFQ+KSA9PiBub2RlLm9iamVjdCk7XHJcbiAgICBpdGVtcy5zb3J0KChhOiBULCBiOiBUKSA9PiB0aGlzLnNlcnZpY2UuY29tcGFyZShhLCBiKSk7XHJcbiAgICBjb25zdCBwcmVvcmRlcjogVFtdID0gdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xyXG4gICAgcHJlb3JkZXIuZm9yRWFjaCgob2JqZWN0OiBULCBpbmRleDogbnVtYmVyKSA9PiB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihvYmplY3QpLnByZW9yZGVyID0gaW5kZXggKyAxKTtcclxuICAgIHRoaXMuYWxsTm9kZS5zb3J0KChub2RlQTogSGVsaXNhTm9kZTxUPiwgbm9kZUI6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGVBLnByZW9yZGVyIC0gbm9kZUIucHJlb3JkZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=