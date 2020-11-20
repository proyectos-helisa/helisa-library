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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYWdpbmctdHJlZS1oZWxpc2EvcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0lBSXJILFdBQVE7SUFDUixTQUFNOzs7Ozs7Ozs7QUFHUiw4Q0FRQzs7Ozs7OztJQVBDLDZFQUEyRDs7OztJQUUzRCxnRUFBcUI7Ozs7SUFFckIsc0VBQTJCOzs7Ozs7SUFFM0IsaUVBQTRCOzs7Ozs7QUFHOUIseUJBT0M7OztJQU5DLDRCQUFVOztJQUNWLDJCQUFjOztJQUNkLGtDQUFzQjs7SUFDdEIsOEJBQWtCOztJQUNsQiw2QkFBaUI7O0lBQ2pCLDhCQUFpQjs7Ozs7O0FBR25CLG9DQU9DOzs7SUFOQyxnQ0FBbUI7O0lBQ25CLCtCQUF1Qjs7SUFDdkIsc0NBQStCOztJQUMvQixrQ0FBMkI7O0lBQzNCLGlDQUEwQjs7SUFDMUIsa0NBQTBCOzs7OztBQVE1QixNQUFNLE9BQU8seUJBQXlCO0lBaUJwQztRQWZRLGFBQVEsR0FBVyxNQUFNLENBQUM7UUFDMUIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsYUFBUSxHQUEwQixxQkFBcUIsQ0FBQyxNQUFNLENBQUM7UUFDL0QsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFHOUIsWUFBTyxHQUF5QixFQUFFLENBQUM7UUFHM0Msa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQU03RCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxlQUFlO0lBQ2YsQ0FBQzs7Ozs7SUFF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Q0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUMsQ0FBQztJQUNyRyxDQUFDOzs7WUFyUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHdyQkFBa0Q7O2FBRW5EOzs7Ozs0QkFZRSxNQUFNOzRCQUdOLFlBQVksU0FBQyxlQUFlO21CQVk1QixLQUFLO3VDQU1MLEtBQUs7Ozs7Ozs7SUE5Qk4sNkNBQWtDOzs7OztJQUNsQyxpREFBaUM7Ozs7O0lBQ2pDLGdEQUFrQzs7Ozs7SUFDbEMsNkNBQXVFOzs7OztJQUN2RSxtREFBc0M7Ozs7O0lBQ3RDLDRDQUE2Qzs7Ozs7SUFDN0MsK0NBQStDOzs7OztJQUMvQyw0Q0FBMkM7O0lBRTNDLGtEQUM2RDs7SUFFN0Qsa0RBQ2lFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBlbnVtIFBhZ2luZ1RyZWVJbml0aWFsTW9kZSB7XHJcbiAgQ09MTEFQU0UsXHJcbiAgRVhQQU5EXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+IHtcclxuICBnZXQobGFzdENoaWxkT3JkZXI6IG51bWJlciwgc2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxUW10+O1xyXG5cclxuICBnZXRJZEZpZWxkKCk6IHN0cmluZztcclxuXHJcbiAgZ2V0SWRQYXJlbnRGaWVsZCgpOiBzdHJpbmc7XHJcblxyXG4gIGNvbXBhcmUoYTogVCwgYjogVCk6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEhlbGlzYU5vZGU8VD4ge1xyXG4gIG9iamVjdDogVDtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGhhdmVDaGlsZHJlbjogYm9vbGVhbjtcclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHByZW9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVsaXNhTm9kZURhdGE8VD4ge1xyXG4gIHJlYWRvbmx5IG9iamVjdDogVDtcclxuICByZWFkb25seSBsZXZlbDogbnVtYmVyO1xyXG4gIHJlYWRvbmx5IGhhdmVDaGlsZHJlbjogYm9vbGVhbjtcclxuICByZWFkb25seSBleHBhbmRlZDogYm9vbGVhbjtcclxuICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IHByZW9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLXBhZ2luZy10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmctdHJlZS1oZWxpc2EuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmdUcmVlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyID0gMjAwMDAwO1xyXG4gIHByaXZhdGUgdmlzaWJsZUxpbWl0OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgdmlzaWJsZVNpemU6IG51bWJlciA9IDEwMDtcclxuICBwcml2YXRlIHRyZWVNb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUgPSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUuRVhQQU5EO1xyXG4gIHByaXZhdGUgdmlzaWJsZU9iamVjdHM6IEFycmF5PFQ+ID0gW107XHJcbiAgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD47XHJcbiAgcHJpdmF0ZSBzZWFyY2hOb2RlOiBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PjtcclxuICBwcml2YXRlIGFsbE5vZGU6IEFycmF5PEhlbGlzYU5vZGU8VD4+ID0gW107XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGFmdGVyTG9hZERhdGE6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnbm9kZUNvbXBvbmVudCcpXHJcbiAgbm9kZUNvbXBvbmVudDogVGVtcGxhdGVSZWY8eyBkYXRhOiBULCBub2RlOiBIZWxpc2FOb2RlRGF0YTxUPiB9PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1vZGUocGFyYW1Nb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUpIHtcclxuICAgIHRoaXMudHJlZU1vZGUgPSBwYXJhbU1vZGU7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwYWdpbmdUcmVlSGVsaXNhTGlzdGFibGUocGFyYW1TZXJ2aWNlOiBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD4pIHtcclxuICAgIHRoaXMuc2VydmljZSA9IHBhcmFtU2VydmljZTtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5zZXJ2aWNlLmdldCgwLCB0aGlzLnBhZ2VTaXplKS5zdWJzY3JpYmUoKGl0ZW1zOiBUW10pID0+IHRoaXMubG9hZERhdGEoaXRlbXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZERhdGEoaXRlbXM6IFRbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlID0gbmV3IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+KCk7XHJcbiAgICB0aGlzLnZpc2libGVPYmplY3RzID0gW107XHJcbiAgICB0aGlzLmFsbE5vZGUgPSBbXTtcclxuICAgIGl0ZW1zID0gdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlID0gbmV3IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+KCk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtOiBUKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vZGU6IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmNyZWF0ZU5vZGUoaXRlbSk7XHJcbiAgICAgIHRoaXMuYWxsTm9kZS5wdXNoKG5vZGUpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMobnVsbCk7XHJcbiAgICB0aGlzLmFmdGVyTG9hZERhdGEuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzb3J0SXRlbXMoaXRlbXM6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCBsQWR5OiBNYXA8c3RyaW5nLCBUW10+ID0gbmV3IE1hcDxzdHJpbmcsIFRbXT4oKTtcclxuICAgIGNvbnN0IHN0YWNrOiBUW10gPSBbXTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW06IFQpID0+IHtcclxuICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV07XHJcbiAgICAgIGlmICghaWRQYXJlbnQpIHtcclxuICAgICAgICBzdGFjay51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghbEFkeS5oYXMoaWRQYXJlbnQpKSB7XHJcbiAgICAgICAgICBsQWR5LnNldChpZFBhcmVudCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsQWR5LmdldChpZFBhcmVudCkucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZTogVFtdID0gbmV3IEFycmF5PFQ+KGl0ZW1zLmxlbmd0aCk7XHJcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsYXN0OiBUID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHJlc3BvbnNlW2luZGV4KytdID0gbGFzdDtcclxuICAgICAgY29uc3QgY2hpbGRyZW46IFRbXSA9IGxBZHkuZ2V0KGxhc3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xyXG4gICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgc3RhY2sucHVzaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU5vZGUoaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoTm9kZS5oYXMoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1lhIGV4aXN0ZSBlbCBub2RvLicpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFyZW50SW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSk7XHJcbiAgICBjb25zdCBub2RlSW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB7XHJcbiAgICAgIG9iamVjdDogaXRlbSxcclxuICAgICAgaGF2ZUNoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgbGV2ZWw6IHBhcmVudEluZm9ybWF0aW9uID8gcGFyZW50SW5mb3JtYXRpb24ubGV2ZWwgKyAxIDogMCxcclxuICAgICAgZXhwYW5kZWQ6IHRoaXMudHJlZU1vZGUgPT09IFBhZ2luZ1RyZWVJbml0aWFsTW9kZS5FWFBBTkQsXHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcmVvcmRlcjogdGhpcy5zZWFyY2hOb2RlLnNpemUgKyAxLFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2VhcmNoTm9kZS5zZXQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSwgbm9kZUluZm9ybWF0aW9uKTtcclxuICAgIGlmIChwYXJlbnRJbmZvcm1hdGlvbikge1xyXG4gICAgICBwYXJlbnRJbmZvcm1hdGlvbi5oYXZlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVJbmZvcm1hdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkOiBzdHJpbmcpOiBIZWxpc2FOb2RlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaE5vZGUuZ2V0KGlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROb2RlSW5mb3JtYXRpb24oaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTm9kZS5nZXQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgfVxyXG5cclxuICBnZXRMZXZlbENsYXNzKGl0ZW06IFQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdwYWRkaW5nLWxldmVsLScgKyB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkubGV2ZWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWROZXh0VmlzaWJsZU9iamVjdHMobm9kZUZyb206IFQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZpc2libGVPYmplY3RzOiBUW10gPSBbXTtcclxuICAgIHRoaXMudmlzaWJsZU9iamVjdHMuZm9yRWFjaCgoaXRlbTogVCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkpIHtcclxuICAgICAgICBpZiAobm9kZUZyb20gJiYgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24obm9kZUZyb20pLnByZW9yZGVyID49IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pLnByZW9yZGVyKSB7XHJcbiAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZpc2libGVMaW1pdCA9IHZpc2libGVPYmplY3RzLmxlbmd0aCArIHRoaXMudmlzaWJsZVNpemU7XHJcbiAgICB0aGlzLmFsbE5vZGUuZm9yRWFjaCgoaXRlbTogSGVsaXNhTm9kZTxUPikgPT4ge1xyXG4gICAgICBpZiAodmlzaWJsZU9iamVjdHMubGVuZ3RoIDwgdGhpcy52aXNpYmxlTGltaXQgJiZcclxuICAgICAgICAoIW5vZGVGcm9tIHx8IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKG5vZGVGcm9tKS5wcmVvcmRlciA8IGl0ZW0ucHJlb3JkZXIpKSB7XHJcbiAgICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IGl0ZW0ub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldO1xyXG4gICAgICAgIGlmICghaWRQYXJlbnQpIHtcclxuICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbS5vYmplY3QpO1xyXG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcGFyZW50SW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWRQYXJlbnQpO1xyXG4gICAgICAgICAgaWYgKHBhcmVudEluZm9ybWF0aW9uLnZpc2libGUgJiYgcGFyZW50SW5mb3JtYXRpb24uZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtLm9iamVjdCk7XHJcbiAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlzaWJsZU9iamVjdHMgPSB2aXNpYmxlT2JqZWN0cztcclxuICB9XHJcblxyXG4gIGNvbGxhcHNlTm9kZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhpdGVtKTtcclxuICB9XHJcblxyXG4gIGV4cGFuZE5vZGUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhpdGVtKTtcclxuICB9XHJcblxyXG4gIHNob3dOZXh0UGFnZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpc2libGVPYmplY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKHRoaXMudmlzaWJsZU9iamVjdHNbdGhpcy52aXNpYmxlT2JqZWN0cy5sZW5ndGggLSAxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdmlzaWJsZURhdGEoKTogUmVhZG9ubHlBcnJheTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlT2JqZWN0cztcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVCeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQnlJZChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQpKSB7XHJcbiAgICAgIGNvbnN0IGlkUGFyZW50OiBzdHJpbmcgPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQpLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcclxuICAgICAgY29uc3Qgc2V0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgICBzZXQuYWRkKGlkKTtcclxuICAgICAgY29uc3QgYmVnaW5JbmRleDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcclxuICAgICAgICAoaXRlbVNlYXJjaDogSGVsaXNhTm9kZTxUPikgPT4gaXRlbVNlYXJjaC5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGlkXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBsYXN0SW5kZXg6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGJlZ2luSW5kZXggKyAxOyBpIDwgdGhpcy5hbGxOb2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbVNlYXJjaDogVCA9IHRoaXMuYWxsTm9kZVtpXS5vYmplY3Q7XHJcbiAgICAgICAgaWYgKHNldC5oYXMoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSkpIHtcclxuICAgICAgICAgIHNldC5hZGQoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxhc3RJbmRleCA9IGk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGVsZXRlZEl0ZW1zOiBIZWxpc2FOb2RlPFQ+W10gPSB0aGlzLmFsbE5vZGUuc3BsaWNlKGJlZ2luSW5kZXgsIGxhc3RJbmRleCAtIGJlZ2luSW5kZXgpO1xyXG4gICAgICBsZXQgcGFyZW50SGF2ZUNoaWxkcmVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgIGRlbGV0ZWRJdGVtcy5mb3JFYWNoKChkZWxldGVkSXRlbTogSGVsaXNhTm9kZTxUPikgPT4gdGhpcy5zZWFyY2hOb2RlLmRlbGV0ZShkZWxldGVkSXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pKTtcclxuICAgICAgdGhpcy5hbGxOb2RlLmZvckVhY2goKHNlYXJjaEl0ZW06IEhlbGlzYU5vZGU8VD4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZWFyY2hJdGVtLnByZW9yZGVyID0gaW5kZXggKyAxXHJcbiAgICAgICAgaWYoc2VhcmNoSXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0gPT09IGlkUGFyZW50KSB7XHJcbiAgICAgICAgICBwYXJlbnRIYXZlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmKGlkUGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkUGFyZW50KS5oYXZlQ2hpbGRyZW4gPSBwYXJlbnRIYXZlQ2hpbGRyZW47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGJlZ2luSW5kZXggPiAwID8gdGhpcy5hbGxOb2RlW2JlZ2luSW5kZXggLSAxXS5vYmplY3QgOiBudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXhQYXJlbnQ6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoKG5vZGU6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGUub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgIGlmIChpbmRleFBhcmVudCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuYWxsTm9kZS5wdXNoKHRoaXMuY3JlYXRlTm9kZShpdGVtKSk7XHJcbiAgICAgIHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0uaGF2ZUNoaWxkcmVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZVNvcnQoKTtcclxuICAgICAgdGhpcy5leHBhbmROb2RlKHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0ub2JqZWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdObyBleGlzdGUgZWwgcGFkcmUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJdGVtKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xyXG4gICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKS5vYmplY3QgPSBpdGVtO1xyXG4gICAgICB0aGlzLnJlU29ydCgpO1xyXG4gICAgICBjb25zdCBpbmRleFBhcmVudDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcclxuICAgICAgICAobm9kZTogSGVsaXNhTm9kZTxUPikgPT4gbm9kZS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xyXG4gICAgICBpZiAoaW5kZXhQYXJlbnQgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kTm9kZSh0aGlzLmFsbE5vZGVbaW5kZXhQYXJlbnRdLm9iamVjdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlU29ydCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW1zOiBUW10gPSB0aGlzLmFsbE5vZGUubWFwKChub2RlOiBIZWxpc2FOb2RlPFQ+KSA9PiBub2RlLm9iamVjdCk7XHJcbiAgICBpdGVtcy5zb3J0KChhOiBULCBiOiBUKSA9PiB0aGlzLnNlcnZpY2UuY29tcGFyZShhLCBiKSk7XHJcbiAgICBjb25zdCBwcmVvcmRlcjogVFtdID0gdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xyXG4gICAgcHJlb3JkZXIuZm9yRWFjaCgob2JqZWN0OiBULCBpbmRleDogbnVtYmVyKSA9PiB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihvYmplY3QpLnByZW9yZGVyID0gaW5kZXggKyAxKTtcclxuICAgIHRoaXMuYWxsTm9kZS5zb3J0KChub2RlQTogSGVsaXNhTm9kZTxUPiwgbm9kZUI6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGVBLnByZW9yZGVyIC0gbm9kZUIucHJlb3JkZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=