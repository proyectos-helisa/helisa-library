/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
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
        this.afterLoadData = new EventEmitter();
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
        items = this.sortItems(items);
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
        this.afterLoadData.emit();
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
        this.removeById(item[this.service.getIdField()]);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    removeById(id) {
        if (this.getNodeInformationById(id)) {
            /** @type {?} */
            const idParent = this.getNodeInformationById(id).object[this.service.getIdParentField()];
            /** @type {?} */
            const set = new Set();
            set.add(id);
            /** @type {?} */
            const beginIndex = this.allNode.findIndex((/**
             * @param {?} itemSearch
             * @return {?}
             */
            (itemSearch) => itemSearch.object[this.service.getIdField()] === id));
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
            /** @type {?} */
            let parentHaveChildren = false;
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
            (searchItem, index) => {
                searchItem.preorder = index + 1;
                if (searchItem.object[this.service.getIdParentField()] === idParent) {
                    parentHaveChildren = true;
                }
            }));
            if (idParent) {
                this.getNodeInformationById(idParent).haveChildren = parentHaveChildren;
            }
            this.loadNextVisibleObjects(beginIndex > 0 ? this.allNode[beginIndex - 1].object : null);
        }
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
            this.allNode[indexParent].haveChildren = true;
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
                template: "<div>\r\n  <div *ngFor=\"let item of visibleData\" [ngClass]=\"this.getLevelClass(item)\">\r\n    <div *ngIf=\"getNodeInformation(item).visible\">\r\n      <div *ngIf=\"getNodeInformation(item) as node\" class=\"helisa-tree-row\">\r\n        <div>\r\n          <mat-icon *ngIf=\"!node.expanded && node.haveChildren\" (click)=\"expandNode(item)\">add</mat-icon>\r\n          <mat-icon *ngIf=\"node.expanded && node.haveChildren\" (click)=\"collapseNode(item)\">remove</mat-icon>\r\n        </div>\r\n        <ng-container [ngTemplateOutlet]=\"nodeComponent\" [ngTemplateOutletContext]=\"{data: item, node: node}\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".padding-level-0{padding-left:0}.padding-level-1{padding-left:40px}.padding-level-2{padding-left:80px}.padding-level-3{padding-left:120px}.padding-level-4{padding-left:160px}.padding-level-5{padding-left:200px}.padding-level-6{padding-left:240px}.padding-level-7{padding-left:280px}.padding-level-8{padding-left:320px}.helisa-tree-row{display:flex;flex-direction:row;align-items:center}"]
            }] }
];
/** @nocollapse */
PagingTreeHelisaComponent.ctorParameters = () => [];
PagingTreeHelisaComponent.propDecorators = {
    afterLoadData: [{ type: Output }],
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
    PagingTreeHelisaComponent.prototype.afterLoadData;
    /** @type {?} */
    PagingTreeHelisaComponent.prototype.nodeComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYWdpbmctdHJlZS1oZWxpc2EvcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0lBSXJILFdBQVE7SUFDUixTQUFNOzs7Ozs7Ozs7QUFHUiw4Q0FRQzs7Ozs7OztJQVBDLDZFQUEyRDs7OztJQUUzRCxnRUFBcUI7Ozs7SUFFckIsc0VBQTJCOzs7Ozs7SUFFM0IsaUVBQTRCOzs7Ozs7QUFHOUIseUJBT0M7OztJQU5DLDRCQUFVOztJQUNWLDJCQUFjOztJQUNkLGtDQUFzQjs7SUFDdEIsOEJBQWtCOztJQUNsQiw2QkFBaUI7O0lBQ2pCLDhCQUFpQjs7Ozs7O0FBR25CLG9DQU9DOzs7SUFOQyxnQ0FBbUI7O0lBQ25CLCtCQUF1Qjs7SUFDdkIsc0NBQStCOztJQUMvQixrQ0FBMkI7O0lBQzNCLGlDQUEwQjs7SUFDMUIsa0NBQTBCOzs7OztBQVE1QixNQUFNLE9BQU8seUJBQXlCO0lBaUJwQztRQWZRLGFBQVEsR0FBVyxNQUFNLENBQUM7UUFDMUIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsYUFBUSxHQUEwQixxQkFBcUIsQ0FBQyxNQUFNLENBQUM7UUFDL0QsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFHOUIsWUFBTyxHQUF5QixFQUFFLENBQUM7UUFHM0Msa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQU03RCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxlQUFlO0lBQ2YsQ0FBQzs7Ozs7SUFF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LENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUM7SUFDckcsQ0FBQzs7O1lBclBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix3ckJBQWtEOzthQUVuRDs7Ozs7NEJBWUUsTUFBTTs0QkFHTixZQUFZLFNBQUMsZUFBZTttQkFZNUIsS0FBSzt1Q0FNTCxLQUFLOzs7Ozs7O0lBOUJOLDZDQUFrQzs7Ozs7SUFDbEMsaURBQWlDOzs7OztJQUNqQyxnREFBa0M7Ozs7O0lBQ2xDLDZDQUF1RTs7Ozs7SUFDdkUsbURBQXNDOzs7OztJQUN0Qyw0Q0FBNkM7Ozs7O0lBQzdDLCtDQUErQzs7Ozs7SUFDL0MsNENBQTJDOztJQUUzQyxrREFDNkQ7O0lBRTdELGtEQUNpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgZW51bSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUge1xyXG4gIENPTExBUFNFLFxyXG4gIEVYUEFORFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZTxUPiB7XHJcbiAgZ2V0KGxhc3RDaGlsZE9yZGVyOiBudW1iZXIsIHNpemU6IG51bWJlcik6IE9ic2VydmFibGU8VFtdPjtcclxuXHJcbiAgZ2V0SWRGaWVsZCgpOiBzdHJpbmc7XHJcblxyXG4gIGdldElkUGFyZW50RmllbGQoKTogc3RyaW5nO1xyXG5cclxuICBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBIZWxpc2FOb2RlPFQ+IHtcclxuICBvYmplY3Q6IFQ7XHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuICBoYXZlQ2hpbGRyZW46IGJvb2xlYW47XHJcbiAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBwcmVvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhlbGlzYU5vZGVEYXRhPFQ+IHtcclxuICByZWFkb25seSBvYmplY3Q6IFQ7XHJcbiAgcmVhZG9ubHkgbGV2ZWw6IG51bWJlcjtcclxuICByZWFkb25seSBoYXZlQ2hpbGRyZW46IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgdmlzaWJsZTogYm9vbGVhbjtcclxuICByZWFkb25seSBwcmVvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1wYWdpbmctdHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luZy10cmVlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnaW5nVHJlZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgcGFnZVNpemU6IG51bWJlciA9IDIwMDAwMDtcclxuICBwcml2YXRlIHZpc2libGVMaW1pdDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHZpc2libGVTaXplOiBudW1iZXIgPSAxMDA7XHJcbiAgcHJpdmF0ZSB0cmVlTW9kZTogUGFnaW5nVHJlZUluaXRpYWxNb2RlID0gUGFnaW5nVHJlZUluaXRpYWxNb2RlLkVYUEFORDtcclxuICBwcml2YXRlIHZpc2libGVPYmplY3RzOiBBcnJheTxUPiA9IFtdO1xyXG4gIHByaXZhdGUgc2VydmljZTogUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+O1xyXG4gIHByaXZhdGUgc2VhcmNoTm9kZTogTWFwPHN0cmluZywgSGVsaXNhTm9kZTxUPj47XHJcbiAgcHJpdmF0ZSBhbGxOb2RlOiBBcnJheTxIZWxpc2FOb2RlPFQ+PiA9IFtdO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBhZnRlckxvYWREYXRhOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ25vZGVDb21wb25lbnQnKVxyXG4gIG5vZGVDb21wb25lbnQ6IFRlbXBsYXRlUmVmPHsgZGF0YTogVCwgbm9kZTogSGVsaXNhTm9kZURhdGE8VD4gfT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBtb2RlKHBhcmFtTW9kZTogUGFnaW5nVHJlZUluaXRpYWxNb2RlKSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlID0gcGFyYW1Nb2RlO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlKHBhcmFtU2VydmljZTogUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+KSB7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBwYXJhbVNlcnZpY2U7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VydmljZSkge1xyXG4gICAgICB0aGlzLnNlcnZpY2UuZ2V0KDAsIHRoaXMucGFnZVNpemUpLnN1YnNjcmliZSgoaXRlbXM6IFRbXSkgPT4gdGhpcy5sb2FkRGF0YShpdGVtcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkRGF0YShpdGVtczogVFtdKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaE5vZGUgPSBuZXcgTWFwPHN0cmluZywgSGVsaXNhTm9kZTxUPj4oKTtcclxuICAgIHRoaXMudmlzaWJsZU9iamVjdHMgPSBbXTtcclxuICAgIHRoaXMuYWxsTm9kZSA9IFtdO1xyXG4gICAgaXRlbXMgPSB0aGlzLnNvcnRJdGVtcyhpdGVtcyk7XHJcbiAgICB0aGlzLnNlYXJjaE5vZGUgPSBuZXcgTWFwPHN0cmluZywgSGVsaXNhTm9kZTxUPj4oKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW06IFQpID0+IHtcclxuICAgICAgY29uc3Qgbm9kZTogSGVsaXNhTm9kZTxUPiA9IHRoaXMuY3JlYXRlTm9kZShpdGVtKTtcclxuICAgICAgdGhpcy5hbGxOb2RlLnB1c2gobm9kZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhudWxsKTtcclxuICAgIHRoaXMuYWZ0ZXJMb2FkRGF0YS5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNvcnRJdGVtcyhpdGVtczogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IGxBZHk6IE1hcDxzdHJpbmcsIFRbXT4gPSBuZXcgTWFwPHN0cmluZywgVFtdPigpO1xyXG4gICAgY29uc3Qgc3RhY2s6IFRbXSA9IFtdO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogVCkgPT4ge1xyXG4gICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcclxuICAgICAgaWYgKCFpZFBhcmVudCkge1xyXG4gICAgICAgIHN0YWNrLnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFsQWR5LmhhcyhpZFBhcmVudCkpIHtcclxuICAgICAgICAgIGxBZHkuc2V0KGlkUGFyZW50LCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxBZHkuZ2V0KGlkUGFyZW50KS5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlOiBUW10gPSBuZXcgQXJyYXk8VD4oaXRlbXMubGVuZ3RoKTtcclxuICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxhc3Q6IFQgPSBzdGFjay5wb3AoKTtcclxuICAgICAgcmVzcG9uc2VbaW5kZXgrK10gPSBsYXN0O1xyXG4gICAgICBjb25zdCBjaGlsZHJlbjogVFtdID0gbEFkeS5nZXQobGFzdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTm9kZShpdGVtOiBUKTogSGVsaXNhTm9kZTxUPiB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hOb2RlLmhhcyhpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignWWEgZXhpc3RlIGVsIG5vZG8uJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJlbnRJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgIGNvbnN0IG5vZGVJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHtcclxuICAgICAgb2JqZWN0OiBpdGVtLFxyXG4gICAgICBoYXZlQ2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICBsZXZlbDogcGFyZW50SW5mb3JtYXRpb24gPyBwYXJlbnRJbmZvcm1hdGlvbi5sZXZlbCArIDEgOiAwLFxyXG4gICAgICBleHBhbmRlZDogdGhpcy50cmVlTW9kZSA9PT0gUGFnaW5nVHJlZUluaXRpYWxNb2RlLkVYUEFORCxcclxuICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByZW9yZGVyOiB0aGlzLnNlYXJjaE5vZGUuc2l6ZSArIDEsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlLnNldChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldLCBub2RlSW5mb3JtYXRpb24pO1xyXG4gICAgaWYgKHBhcmVudEluZm9ybWF0aW9uKSB7XHJcbiAgICAgIHBhcmVudEluZm9ybWF0aW9uLmhhdmVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZUluZm9ybWF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQ6IHN0cmluZyk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTm9kZS5nZXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5vZGVJbmZvcm1hdGlvbihpdGVtOiBUKTogSGVsaXNhTm9kZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hOb2RlLmdldChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcclxuICB9XHJcblxyXG4gIGdldExldmVsQ2xhc3MoaXRlbTogVCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3BhZGRpbmctbGV2ZWwtJyArIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5sZXZlbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZE5leHRWaXNpYmxlT2JqZWN0cyhub2RlRnJvbTogVCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmlzaWJsZU9iamVjdHM6IFRbXSA9IFtdO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cy5mb3JFYWNoKChpdGVtOiBUKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xyXG4gICAgICAgIGlmIChub2RlRnJvbSAmJiB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihub2RlRnJvbSkucHJlb3JkZXIgPj0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkucHJlb3JkZXIpIHtcclxuICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlzaWJsZUxpbWl0ID0gdmlzaWJsZU9iamVjdHMubGVuZ3RoICsgdGhpcy52aXNpYmxlU2l6ZTtcclxuICAgIHRoaXMuYWxsTm9kZS5mb3JFYWNoKChpdGVtOiBIZWxpc2FOb2RlPFQ+KSA9PiB7XHJcbiAgICAgIGlmICh2aXNpYmxlT2JqZWN0cy5sZW5ndGggPCB0aGlzLnZpc2libGVMaW1pdCAmJlxyXG4gICAgICAgICghbm9kZUZyb20gfHwgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24obm9kZUZyb20pLnByZW9yZGVyIDwgaXRlbS5wcmVvcmRlcikpIHtcclxuICAgICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gaXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV07XHJcbiAgICAgICAgaWYgKCFpZFBhcmVudCkge1xyXG4gICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtLm9iamVjdCk7XHJcbiAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJlbnRJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZFBhcmVudCk7XHJcbiAgICAgICAgICBpZiAocGFyZW50SW5mb3JtYXRpb24udmlzaWJsZSAmJiBwYXJlbnRJbmZvcm1hdGlvbi5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0ub2JqZWN0KTtcclxuICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cyA9IHZpc2libGVPYmplY3RzO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VOb2RlKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kTm9kZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd05leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHModGhpcy52aXNpYmxlT2JqZWN0c1t0aGlzLnZpc2libGVPYmplY3RzLmxlbmd0aCAtIDFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB2aXNpYmxlRGF0YSgpOiBSZWFkb25seUFycmF5PFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnZpc2libGVPYmplY3RzO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVCeUlkKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmKHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZCkpIHtcclxuICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZCkub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldO1xyXG4gICAgICBjb25zdCBzZXQ6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICAgIHNldC5hZGQoaWQpO1xyXG4gICAgICBjb25zdCBiZWdpbkluZGV4OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUuZmluZEluZGV4KFxyXG4gICAgICAgIChpdGVtU2VhcmNoOiBIZWxpc2FOb2RlPFQ+KSA9PiBpdGVtU2VhcmNoLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSA9PT0gaWRcclxuICAgICAgKTtcclxuICAgICAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gYmVnaW5JbmRleCArIDE7IGkgPCB0aGlzLmFsbE5vZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpdGVtU2VhcmNoOiBUID0gdGhpcy5hbGxOb2RlW2ldLm9iamVjdDtcclxuICAgICAgICBpZiAoc2V0LmhhcyhpdGVtU2VhcmNoW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKSkge1xyXG4gICAgICAgICAgc2V0LmFkZChpdGVtU2VhcmNoW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGFzdEluZGV4ID0gaTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkZWxldGVkSXRlbXM6IEhlbGlzYU5vZGU8VD5bXSA9IHRoaXMuYWxsTm9kZS5zcGxpY2UoYmVnaW5JbmRleCwgbGFzdEluZGV4IC0gYmVnaW5JbmRleCk7XHJcbiAgICAgIGxldCBwYXJlbnRIYXZlQ2hpbGRyZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgZGVsZXRlZEl0ZW1zLmZvckVhY2goKGRlbGV0ZWRJdGVtOiBIZWxpc2FOb2RlPFQ+KSA9PiB0aGlzLnNlYXJjaE5vZGUuZGVsZXRlKGRlbGV0ZWRJdGVtLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkpO1xyXG4gICAgICB0aGlzLmFsbE5vZGUuZm9yRWFjaCgoc2VhcmNoSXRlbTogSGVsaXNhTm9kZTxUPiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNlYXJjaEl0ZW0ucHJlb3JkZXIgPSBpbmRleCArIDFcclxuICAgICAgICBpZihzZWFyY2hJdGVtLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSA9PT0gaWRQYXJlbnQpIHtcclxuICAgICAgICAgIHBhcmVudEhhdmVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYoaWRQYXJlbnQpIHtcclxuICAgICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWRQYXJlbnQpLmhhdmVDaGlsZHJlbiA9IHBhcmVudEhhdmVDaGlsZHJlbjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMoYmVnaW5JbmRleCA+IDAgPyB0aGlzLmFsbE5vZGVbYmVnaW5JbmRleCAtIDFdLm9iamVjdCA6IG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleFBhcmVudDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleCgobm9kZTogSGVsaXNhTm9kZTxUPikgPT4gbm9kZS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xyXG4gICAgaWYgKGluZGV4UGFyZW50ID49IDApIHtcclxuICAgICAgdGhpcy5hbGxOb2RlLnB1c2godGhpcy5jcmVhdGVOb2RlKGl0ZW0pKTtcclxuICAgICAgdGhpcy5hbGxOb2RlW2luZGV4UGFyZW50XS5oYXZlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLnJlU29ydCgpO1xyXG4gICAgICB0aGlzLmV4cGFuZE5vZGUodGhpcy5hbGxOb2RlW2luZGV4UGFyZW50XS5vYmplY3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ05vIGV4aXN0ZSBlbCBwYWRyZS4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pKSB7XHJcbiAgICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pLm9iamVjdCA9IGl0ZW07XHJcbiAgICAgIHRoaXMucmVTb3J0KCk7XHJcbiAgICAgIGNvbnN0IGluZGV4UGFyZW50OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUuZmluZEluZGV4KFxyXG4gICAgICAgIChub2RlOiBIZWxpc2FOb2RlPFQ+KSA9PiBub2RlLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSA9PT0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSk7XHJcbiAgICAgIGlmIChpbmRleFBhcmVudCA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5leHBhbmROb2RlKHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0ub2JqZWN0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVTb3J0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXRlbXM6IFRbXSA9IHRoaXMuYWxsTm9kZS5tYXAoKG5vZGU6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGUub2JqZWN0KTtcclxuICAgIGl0ZW1zLnNvcnQoKGE6IFQsIGI6IFQpID0+IHRoaXMuc2VydmljZS5jb21wYXJlKGEsIGIpKTtcclxuICAgIGNvbnN0IHByZW9yZGVyOiBUW10gPSB0aGlzLnNvcnRJdGVtcyhpdGVtcyk7XHJcbiAgICBwcmVvcmRlci5mb3JFYWNoKChvYmplY3Q6IFQsIGluZGV4OiBudW1iZXIpID0+IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKG9iamVjdCkucHJlb3JkZXIgPSBpbmRleCArIDEpO1xyXG4gICAgdGhpcy5hbGxOb2RlLnNvcnQoKG5vZGVBOiBIZWxpc2FOb2RlPFQ+LCBub2RlQjogSGVsaXNhTm9kZTxUPikgPT4gbm9kZUEucHJlb3JkZXIgLSBub2RlQi5wcmVvcmRlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==