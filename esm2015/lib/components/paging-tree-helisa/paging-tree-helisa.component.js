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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYWdpbmctdHJlZS1oZWxpc2EvcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0lBSXJILFdBQVE7SUFDUixTQUFNOzs7Ozs7Ozs7QUFHUiw4Q0FRQzs7Ozs7OztJQVBDLDZFQUEyRDs7OztJQUUzRCxnRUFBcUI7Ozs7SUFFckIsc0VBQTJCOzs7Ozs7SUFFM0IsaUVBQTRCOzs7Ozs7QUFHOUIseUJBT0M7OztJQU5DLDRCQUFVOztJQUNWLDJCQUFjOztJQUNkLGtDQUFzQjs7SUFDdEIsOEJBQWtCOztJQUNsQiw2QkFBaUI7O0lBQ2pCLDhCQUFpQjs7Ozs7O0FBR25CLG9DQU9DOzs7SUFOQyxnQ0FBbUI7O0lBQ25CLCtCQUF1Qjs7SUFDdkIsc0NBQStCOztJQUMvQixrQ0FBMkI7O0lBQzNCLGlDQUEwQjs7SUFDMUIsa0NBQTBCOzs7OztBQVE1QixNQUFNLE9BQU8seUJBQXlCO0lBaUJwQztRQWZRLGFBQVEsR0FBVyxNQUFNLENBQUM7UUFDMUIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsYUFBUSxHQUEwQixxQkFBcUIsQ0FBQyxNQUFNLENBQUM7UUFDL0QsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFHOUIsWUFBTyxHQUF5QixFQUFFLENBQUM7UUFHM0Msa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQU03RCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxlQUFlO0lBQ2YsQ0FBQzs7Ozs7SUFF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QUMsSUFBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztRQUN6RSxLQUFLLENBQUMsSUFBSTs7Ozs7UUFBQyxDQUFDLENBQUksRUFBRSxDQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDOztjQUNqRCxRQUFRLEdBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDM0MsUUFBUSxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxNQUFTLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEtBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBQyxDQUFDO0lBQ3JHLENBQUM7OztZQXhPRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isd3JCQUFrRDs7YUFFbkQ7Ozs7OzRCQVlFLE1BQU07NEJBR04sWUFBWSxTQUFDLGVBQWU7bUJBWTVCLEtBQUs7dUNBTUwsS0FBSzs7Ozs7OztJQTlCTiw2Q0FBa0M7Ozs7O0lBQ2xDLGlEQUFpQzs7Ozs7SUFDakMsZ0RBQWtDOzs7OztJQUNsQyw2Q0FBdUU7Ozs7O0lBQ3ZFLG1EQUFzQzs7Ozs7SUFDdEMsNENBQTZDOzs7OztJQUM3QywrQ0FBK0M7Ozs7O0lBQy9DLDRDQUEyQzs7SUFFM0Msa0RBQzZEOztJQUU3RCxrREFDaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGVudW0gUGFnaW5nVHJlZUluaXRpYWxNb2RlIHtcclxuICBDT0xMQVBTRSxcclxuICBFWFBBTkRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD4ge1xyXG4gIGdldChsYXN0Q2hpbGRPcmRlcjogbnVtYmVyLCBzaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPFRbXT47XHJcblxyXG4gIGdldElkRmllbGQoKTogc3RyaW5nO1xyXG5cclxuICBnZXRJZFBhcmVudEZpZWxkKCk6IHN0cmluZztcclxuXHJcbiAgY29tcGFyZShhOiBULCBiOiBUKTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSGVsaXNhTm9kZTxUPiB7XHJcbiAgb2JqZWN0OiBUO1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgaGF2ZUNoaWxkcmVuOiBib29sZWFuO1xyXG4gIGV4cGFuZGVkOiBib29sZWFuO1xyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgcHJlb3JkZXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZWxpc2FOb2RlRGF0YTxUPiB7XHJcbiAgcmVhZG9ubHkgb2JqZWN0OiBUO1xyXG4gIHJlYWRvbmx5IGxldmVsOiBudW1iZXI7XHJcbiAgcmVhZG9ubHkgaGF2ZUNoaWxkcmVuOiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IGV4cGFuZGVkOiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IHZpc2libGU6IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgcHJlb3JkZXI6IG51bWJlcjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtcGFnaW5nLXRyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmctdHJlZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BhZ2luZy10cmVlLWhlbGlzYS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luZ1RyZWVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIgPSAyMDAwMDA7XHJcbiAgcHJpdmF0ZSB2aXNpYmxlTGltaXQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSB2aXNpYmxlU2l6ZTogbnVtYmVyID0gMTAwO1xyXG4gIHByaXZhdGUgdHJlZU1vZGU6IFBhZ2luZ1RyZWVJbml0aWFsTW9kZSA9IFBhZ2luZ1RyZWVJbml0aWFsTW9kZS5FWFBBTkQ7XHJcbiAgcHJpdmF0ZSB2aXNpYmxlT2JqZWN0czogQXJyYXk8VD4gPSBbXTtcclxuICBwcml2YXRlIHNlcnZpY2U6IFBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZTxUPjtcclxuICBwcml2YXRlIHNlYXJjaE5vZGU6IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+O1xyXG4gIHByaXZhdGUgYWxsTm9kZTogQXJyYXk8SGVsaXNhTm9kZTxUPj4gPSBbXTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgYWZ0ZXJMb2FkRGF0YTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAQ29udGVudENoaWxkKCdub2RlQ29tcG9uZW50JylcclxuICBub2RlQ29tcG9uZW50OiBUZW1wbGF0ZVJlZjx7IGRhdGE6IFQsIG5vZGU6IEhlbGlzYU5vZGVEYXRhPFQ+IH0+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbW9kZShwYXJhbU1vZGU6IFBhZ2luZ1RyZWVJbml0aWFsTW9kZSkge1xyXG4gICAgdGhpcy50cmVlTW9kZSA9IHBhcmFtTW9kZTtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZShwYXJhbVNlcnZpY2U6IFBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZTxUPikge1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gcGFyYW1TZXJ2aWNlO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5zZXJ2aWNlLmdldCgwLCB0aGlzLnBhZ2VTaXplKS5zdWJzY3JpYmUoKGl0ZW1zOiBUW10pID0+IHRoaXMubG9hZERhdGEoaXRlbXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZERhdGEoaXRlbXM6IFRbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlID0gbmV3IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+KCk7XHJcbiAgICB0aGlzLnZpc2libGVPYmplY3RzID0gW107XHJcbiAgICB0aGlzLmFsbE5vZGUgPSBbXTtcclxuICAgIGl0ZW1zID0gdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlID0gbmV3IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+KCk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtOiBUKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vZGU6IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmNyZWF0ZU5vZGUoaXRlbSk7XHJcbiAgICAgIHRoaXMuYWxsTm9kZS5wdXNoKG5vZGUpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMobnVsbCk7XHJcbiAgICB0aGlzLmFmdGVyTG9hZERhdGEuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzb3J0SXRlbXMoaXRlbXM6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCBsQWR5OiBNYXA8c3RyaW5nLCBUW10+ID0gbmV3IE1hcDxzdHJpbmcsIFRbXT4oKTtcclxuICAgIGNvbnN0IHN0YWNrOiBUW10gPSBbXTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW06IFQpID0+IHtcclxuICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV07XHJcbiAgICAgIGlmICghaWRQYXJlbnQpIHtcclxuICAgICAgICBzdGFjay51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghbEFkeS5oYXMoaWRQYXJlbnQpKSB7XHJcbiAgICAgICAgICBsQWR5LnNldChpZFBhcmVudCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsQWR5LmdldChpZFBhcmVudCkucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZTogVFtdID0gbmV3IEFycmF5PFQ+KGl0ZW1zLmxlbmd0aCk7XHJcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsYXN0OiBUID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHJlc3BvbnNlW2luZGV4KytdID0gbGFzdDtcclxuICAgICAgY29uc3QgY2hpbGRyZW46IFRbXSA9IGxBZHkuZ2V0KGxhc3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xyXG4gICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgc3RhY2sucHVzaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU5vZGUoaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoTm9kZS5oYXMoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1lhIGV4aXN0ZSBlbCBub2RvLicpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFyZW50SW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSk7XHJcbiAgICBjb25zdCBub2RlSW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB7XHJcbiAgICAgIG9iamVjdDogaXRlbSxcclxuICAgICAgaGF2ZUNoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgbGV2ZWw6IHBhcmVudEluZm9ybWF0aW9uID8gcGFyZW50SW5mb3JtYXRpb24ubGV2ZWwgKyAxIDogMCxcclxuICAgICAgZXhwYW5kZWQ6IHRoaXMudHJlZU1vZGUgPT09IFBhZ2luZ1RyZWVJbml0aWFsTW9kZS5FWFBBTkQsXHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcmVvcmRlcjogdGhpcy5zZWFyY2hOb2RlLnNpemUgKyAxLFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2VhcmNoTm9kZS5zZXQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSwgbm9kZUluZm9ybWF0aW9uKTtcclxuICAgIGlmIChwYXJlbnRJbmZvcm1hdGlvbikge1xyXG4gICAgICBwYXJlbnRJbmZvcm1hdGlvbi5oYXZlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVJbmZvcm1hdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkOiBzdHJpbmcpOiBIZWxpc2FOb2RlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaE5vZGUuZ2V0KGlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROb2RlSW5mb3JtYXRpb24oaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTm9kZS5nZXQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgfVxyXG5cclxuICBnZXRMZXZlbENsYXNzKGl0ZW06IFQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdwYWRkaW5nLWxldmVsLScgKyB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkubGV2ZWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWROZXh0VmlzaWJsZU9iamVjdHMobm9kZUZyb206IFQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZpc2libGVPYmplY3RzOiBUW10gPSBbXTtcclxuICAgIHRoaXMudmlzaWJsZU9iamVjdHMuZm9yRWFjaCgoaXRlbTogVCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkpIHtcclxuICAgICAgICBpZiAobm9kZUZyb20gJiYgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24obm9kZUZyb20pLnByZW9yZGVyID49IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pLnByZW9yZGVyKSB7XHJcbiAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZpc2libGVMaW1pdCA9IHZpc2libGVPYmplY3RzLmxlbmd0aCArIHRoaXMudmlzaWJsZVNpemU7XHJcbiAgICB0aGlzLmFsbE5vZGUuZm9yRWFjaCgoaXRlbTogSGVsaXNhTm9kZTxUPikgPT4ge1xyXG4gICAgICBpZiAodmlzaWJsZU9iamVjdHMubGVuZ3RoIDwgdGhpcy52aXNpYmxlTGltaXQgJiZcclxuICAgICAgICAoIW5vZGVGcm9tIHx8IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKG5vZGVGcm9tKS5wcmVvcmRlciA8IGl0ZW0ucHJlb3JkZXIpKSB7XHJcbiAgICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IGl0ZW0ub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldO1xyXG4gICAgICAgIGlmICghaWRQYXJlbnQpIHtcclxuICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbS5vYmplY3QpO1xyXG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcGFyZW50SW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWRQYXJlbnQpO1xyXG4gICAgICAgICAgaWYgKHBhcmVudEluZm9ybWF0aW9uLnZpc2libGUgJiYgcGFyZW50SW5mb3JtYXRpb24uZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtLm9iamVjdCk7XHJcbiAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlzaWJsZU9iamVjdHMgPSB2aXNpYmxlT2JqZWN0cztcclxuICB9XHJcblxyXG4gIGNvbGxhcHNlTm9kZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhpdGVtKTtcclxuICB9XHJcblxyXG4gIGV4cGFuZE5vZGUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhpdGVtKTtcclxuICB9XHJcblxyXG4gIHNob3dOZXh0UGFnZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpc2libGVPYmplY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKHRoaXMudmlzaWJsZU9iamVjdHNbdGhpcy52aXNpYmxlT2JqZWN0cy5sZW5ndGggLSAxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdmlzaWJsZURhdGEoKTogUmVhZG9ubHlBcnJheTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlT2JqZWN0cztcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVCeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQnlJZChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZXQ6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBzZXQuYWRkKGlkKTtcclxuICAgIGNvbnN0IGJlZ2luSW5kZXg6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoXHJcbiAgICAgIChpdGVtU2VhcmNoOiBIZWxpc2FOb2RlPFQ+KSA9PiBpdGVtU2VhcmNoLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSA9PT0gaWRcclxuICAgICk7XHJcbiAgICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gYmVnaW5JbmRleCArIDE7IGkgPCB0aGlzLmFsbE5vZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbVNlYXJjaDogVCA9IHRoaXMuYWxsTm9kZVtpXS5vYmplY3Q7XHJcbiAgICAgIGlmIChzZXQuaGFzKGl0ZW1TZWFyY2hbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pKSB7XHJcbiAgICAgICAgc2V0LmFkZChpdGVtU2VhcmNoW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsYXN0SW5kZXggPSBpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWxldGVkSXRlbXM6IEhlbGlzYU5vZGU8VD5bXSA9IHRoaXMuYWxsTm9kZS5zcGxpY2UoYmVnaW5JbmRleCwgbGFzdEluZGV4IC0gYmVnaW5JbmRleCk7XHJcbiAgICBkZWxldGVkSXRlbXMuZm9yRWFjaCgoZGVsZXRlZEl0ZW06IEhlbGlzYU5vZGU8VD4pID0+IHRoaXMuc2VhcmNoTm9kZS5kZWxldGUoZGVsZXRlZEl0ZW0ub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKSk7XHJcbiAgICB0aGlzLmFsbE5vZGUuZm9yRWFjaCgoc2VhcmNoSXRlbTogSGVsaXNhTm9kZTxUPiwgaW5kZXg6IG51bWJlcikgPT4gc2VhcmNoSXRlbS5wcmVvcmRlciA9IGluZGV4ICsgMSk7XHJcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMoYmVnaW5JbmRleCA+IDAgPyB0aGlzLmFsbE5vZGVbYmVnaW5JbmRleCAtIDFdLm9iamVjdCA6IG51bGwpO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleFBhcmVudDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleCgobm9kZTogSGVsaXNhTm9kZTxUPikgPT4gbm9kZS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xyXG4gICAgaWYgKGluZGV4UGFyZW50ID49IDApIHtcclxuICAgICAgdGhpcy5hbGxOb2RlLnB1c2godGhpcy5jcmVhdGVOb2RlKGl0ZW0pKTtcclxuICAgICAgdGhpcy5yZVNvcnQoKTtcclxuICAgICAgdGhpcy5leHBhbmROb2RlKHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0ub2JqZWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdObyBleGlzdGUgZWwgcGFkcmUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJdGVtKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xyXG4gICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKS5vYmplY3QgPSBpdGVtO1xyXG4gICAgICB0aGlzLnJlU29ydCgpO1xyXG4gICAgICBjb25zdCBpbmRleFBhcmVudDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcclxuICAgICAgICAobm9kZTogSGVsaXNhTm9kZTxUPikgPT4gbm9kZS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xyXG4gICAgICBpZiAoaW5kZXhQYXJlbnQgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kTm9kZSh0aGlzLmFsbE5vZGVbaW5kZXhQYXJlbnRdLm9iamVjdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlU29ydCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW1zOiBUW10gPSB0aGlzLmFsbE5vZGUubWFwKChub2RlOiBIZWxpc2FOb2RlPFQ+KSA9PiBub2RlLm9iamVjdCk7XHJcbiAgICBpdGVtcy5zb3J0KChhOiBULCBiOiBUKSA9PiB0aGlzLnNlcnZpY2UuY29tcGFyZShhLCBiKSk7XHJcbiAgICBjb25zdCBwcmVvcmRlcjogVFtdID0gdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xyXG4gICAgcHJlb3JkZXIuZm9yRWFjaCgob2JqZWN0OiBULCBpbmRleDogbnVtYmVyKSA9PiB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihvYmplY3QpLnByZW9yZGVyID0gaW5kZXggKyAxKTtcclxuICAgIHRoaXMuYWxsTm9kZS5zb3J0KChub2RlQTogSGVsaXNhTm9kZTxUPiwgbm9kZUI6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGVBLnByZW9yZGVyIC0gbm9kZUIucHJlb3JkZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=