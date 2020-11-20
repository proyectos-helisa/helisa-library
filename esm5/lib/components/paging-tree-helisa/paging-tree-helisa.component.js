/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
/** @enum {number} */
var PagingTreeInitialMode = {
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
var PagingTreeHelisaComponent = /** @class */ (function () {
    function PagingTreeHelisaComponent() {
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
    PagingTreeHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(PagingTreeHelisaComponent.prototype, "mode", {
        set: /**
         * @param {?} paramMode
         * @return {?}
         */
        function (paramMode) {
            this.treeMode = paramMode;
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagingTreeHelisaComponent.prototype, "pagingTreeHelisaListable", {
        set: /**
         * @param {?} paramService
         * @return {?}
         */
        function (paramService) {
            this.service = paramService;
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.service) {
            this.service.get(0, this.pageSize).subscribe((/**
             * @param {?} items
             * @return {?}
             */
            function (items) { return _this.loadData(items); }));
        }
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.loadData = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        this.searchNode = new Map();
        this.visibleObjects = [];
        this.allNode = [];
        items = this.sortItems(items);
        this.searchNode = new Map();
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var node = _this.createNode(item);
            _this.allNode.push(node);
        }));
        this.loadNextVisibleObjects(null);
        this.afterLoadData.emit();
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.sortItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        /** @type {?} */
        var lAdy = new Map();
        /** @type {?} */
        var stack = [];
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
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
        }));
        /** @type {?} */
        var response = new Array(items.length);
        /** @type {?} */
        var index = 0;
        while (stack.length > 0) {
            /** @type {?} */
            var last = stack.pop();
            response[index++] = last;
            /** @type {?} */
            var children = lAdy.get(last[this.service.getIdField()]);
            if (children) {
                for (var i = children.length - 1; i >= 0; i--) {
                    stack.push(children[i]);
                }
            }
        }
        return response;
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.createNode = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.searchNode.has(item[this.service.getIdField()])) {
            throw Error('Ya existe el nodo.');
        }
        /** @type {?} */
        var parentInformation = this.getNodeInformationById(item[this.service.getIdParentField()]);
        /** @type {?} */
        var nodeInformation = {
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
    };
    /**
     * @param {?} id
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.getNodeInformationById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.searchNode.get(id);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.getNodeInformation = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return this.searchNode.get(item[this.service.getIdField()]);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.getLevelClass = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return 'padding-level-' + this.getNodeInformationById(item[this.service.getIdField()]).level;
    };
    /**
     * @private
     * @param {?} nodeFrom
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.loadNextVisibleObjects = /**
     * @private
     * @param {?} nodeFrom
     * @return {?}
     */
    function (nodeFrom) {
        var _this = this;
        /** @type {?} */
        var visibleObjects = [];
        this.visibleObjects.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (_this.getNodeInformation(item)) {
                if (nodeFrom && _this.getNodeInformation(nodeFrom).preorder >= _this.getNodeInformation(item).preorder) {
                    visibleObjects.push(item);
                }
                else {
                    _this.getNodeInformationById(item[_this.service.getIdField()]).visible = false;
                }
            }
        }));
        this.visibleLimit = visibleObjects.length + this.visibleSize;
        this.allNode.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (visibleObjects.length < _this.visibleLimit &&
                (!nodeFrom || _this.getNodeInformation(nodeFrom).preorder < item.preorder)) {
                /** @type {?} */
                var idParent = item.object[_this.service.getIdParentField()];
                if (!idParent) {
                    visibleObjects.push(item.object);
                    item.visible = true;
                }
                else {
                    /** @type {?} */
                    var parentInformation = _this.getNodeInformationById(idParent);
                    if (parentInformation.visible && parentInformation.expanded) {
                        visibleObjects.push(item.object);
                        item.visible = true;
                    }
                }
            }
        }));
        this.visibleObjects = visibleObjects;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.collapseNode = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.getNodeInformationById(item[this.service.getIdField()]).expanded = false;
        this.loadNextVisibleObjects(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.expandNode = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.getNodeInformationById(item[this.service.getIdField()]).expanded = true;
        this.loadNextVisibleObjects(item);
    };
    /**
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.showNextPage = /**
     * @return {?}
     */
    function () {
        if (this.visibleObjects.length > 0) {
            this.loadNextVisibleObjects(this.visibleObjects[this.visibleObjects.length - 1]);
        }
    };
    Object.defineProperty(PagingTreeHelisaComponent.prototype, "visibleData", {
        get: /**
         * @return {?}
         */
        function () {
            return this.visibleObjects;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.removeItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.removeById(item[this.service.getIdField()]);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.removeById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        if (this.getNodeInformationById(id)) {
            /** @type {?} */
            var idParent_1 = this.getNodeInformationById(id).object[this.service.getIdParentField()];
            /** @type {?} */
            var set = new Set();
            set.add(id);
            /** @type {?} */
            var beginIndex = this.allNode.findIndex((/**
             * @param {?} itemSearch
             * @return {?}
             */
            function (itemSearch) { return itemSearch.object[_this.service.getIdField()] === id; }));
            /** @type {?} */
            var lastIndex = this.allNode.length;
            for (var i = beginIndex + 1; i < this.allNode.length; i++) {
                /** @type {?} */
                var itemSearch = this.allNode[i].object;
                if (set.has(itemSearch[this.service.getIdParentField()])) {
                    set.add(itemSearch[this.service.getIdField()]);
                }
                else {
                    lastIndex = i;
                    break;
                }
            }
            /** @type {?} */
            var deletedItems = this.allNode.splice(beginIndex, lastIndex - beginIndex);
            /** @type {?} */
            var parentHaveChildren_1 = false;
            deletedItems.forEach((/**
             * @param {?} deletedItem
             * @return {?}
             */
            function (deletedItem) { return _this.searchNode.delete(deletedItem.object[_this.service.getIdField()]); }));
            this.allNode.forEach((/**
             * @param {?} searchItem
             * @param {?} index
             * @return {?}
             */
            function (searchItem, index) {
                searchItem.preorder = index + 1;
                if (searchItem.object[_this.service.getIdParentField()] === idParent_1) {
                    parentHaveChildren_1 = true;
                }
            }));
            if (idParent_1) {
                this.getNodeInformationById(idParent_1).haveChildren = parentHaveChildren_1;
            }
            this.loadNextVisibleObjects(beginIndex > 0 ? this.allNode[beginIndex - 1].object : null);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.addItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        /** @type {?} */
        var indexParent = this.allNode.findIndex((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.object[_this.service.getIdField()] === item[_this.service.getIdParentField()]; }));
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
    /**
     * @param {?} item
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.updateItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (this.getNodeInformation(item)) {
            this.getNodeInformation(item).object = item;
            this.reSort();
            /** @type {?} */
            var indexParent = this.allNode.findIndex((/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.object[_this.service.getIdField()] === item[_this.service.getIdParentField()]; }));
            if (indexParent >= 0) {
                this.expandNode(this.allNode[indexParent].object);
            }
            else {
                this.loadNextVisibleObjects(null);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.reSort = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var items = this.allNode.map((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.object; }));
        items.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return _this.service.compare(a, b); }));
        /** @type {?} */
        var preorder = this.sortItems(items);
        preorder.forEach((/**
         * @param {?} object
         * @param {?} index
         * @return {?}
         */
        function (object, index) { return _this.getNodeInformation(object).preorder = index + 1; }));
        this.allNode.sort((/**
         * @param {?} nodeA
         * @param {?} nodeB
         * @return {?}
         */
        function (nodeA, nodeB) { return nodeA.preorder - nodeB.preorder; }));
    };
    PagingTreeHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-paging-tree',
                    template: "<div>\r\n  <div *ngFor=\"let item of visibleData\" [ngClass]=\"this.getLevelClass(item)\">\r\n    <div *ngIf=\"getNodeInformation(item).visible\">\r\n      <div *ngIf=\"getNodeInformation(item) as node\" class=\"helisa-tree-row\">\r\n        <div>\r\n          <mat-icon *ngIf=\"!node.expanded && node.haveChildren\" (click)=\"expandNode(item)\">add</mat-icon>\r\n          <mat-icon *ngIf=\"node.expanded && node.haveChildren\" (click)=\"collapseNode(item)\">remove</mat-icon>\r\n        </div>\r\n        <ng-container [ngTemplateOutlet]=\"nodeComponent\" [ngTemplateOutletContext]=\"{data: item, node: node}\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".padding-level-0{padding-left:0}.padding-level-1{padding-left:40px}.padding-level-2{padding-left:80px}.padding-level-3{padding-left:120px}.padding-level-4{padding-left:160px}.padding-level-5{padding-left:200px}.padding-level-6{padding-left:240px}.padding-level-7{padding-left:280px}.padding-level-8{padding-left:320px}.helisa-tree-row{display:flex;flex-direction:row;align-items:center}"]
                }] }
    ];
    /** @nocollapse */
    PagingTreeHelisaComponent.ctorParameters = function () { return []; };
    PagingTreeHelisaComponent.propDecorators = {
        afterLoadData: [{ type: Output }],
        nodeComponent: [{ type: ContentChild, args: ['nodeComponent',] }],
        mode: [{ type: Input }],
        pagingTreeHelisaListable: [{ type: Input }]
    };
    return PagingTreeHelisaComponent;
}());
export { PagingTreeHelisaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYWdpbmctdHJlZS1oZWxpc2EvcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0lBSXJILFdBQVE7SUFDUixTQUFNOzs7Ozs7Ozs7QUFHUiw4Q0FRQzs7Ozs7OztJQVBDLDZFQUEyRDs7OztJQUUzRCxnRUFBcUI7Ozs7SUFFckIsc0VBQTJCOzs7Ozs7SUFFM0IsaUVBQTRCOzs7Ozs7QUFHOUIseUJBT0M7OztJQU5DLDRCQUFVOztJQUNWLDJCQUFjOztJQUNkLGtDQUFzQjs7SUFDdEIsOEJBQWtCOztJQUNsQiw2QkFBaUI7O0lBQ2pCLDhCQUFpQjs7Ozs7O0FBR25CLG9DQU9DOzs7SUFOQyxnQ0FBbUI7O0lBQ25CLCtCQUF1Qjs7SUFDdkIsc0NBQStCOztJQUMvQixrQ0FBMkI7O0lBQzNCLGlDQUEwQjs7SUFDMUIsa0NBQTBCOzs7OztBQUc1QjtJQXNCRTtRQWZRLGFBQVEsR0FBVyxNQUFNLENBQUM7UUFDMUIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsYUFBUSxHQUEwQixxQkFBcUIsQ0FBQyxNQUFNLENBQUM7UUFDL0QsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFHOUIsWUFBTyxHQUF5QixFQUFFLENBQUM7UUFHM0Msa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQU03RCxDQUFDOzs7O0lBRUQsNENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELG1EQUFlOzs7SUFBZjtJQUNBLENBQUM7SUFFRCxzQkFD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QyxDQUFDLEVBQTFCLENBQTBCLEVBQUMsQ0FBQzs7WUFDakQsUUFBUSxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsTUFBUyxFQUFFLEtBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBcEQsQ0FBb0QsRUFBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7Ozs7UUFBQyxVQUFDLEtBQW9CLEVBQUUsS0FBb0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBL0IsQ0FBK0IsRUFBQyxDQUFDO0lBQ3JHLENBQUM7O2dCQXJQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0Isd3JCQUFrRDs7aUJBRW5EOzs7OztnQ0FZRSxNQUFNO2dDQUdOLFlBQVksU0FBQyxlQUFlO3VCQVk1QixLQUFLOzJDQU1MLEtBQUs7O0lBaU5SLGdDQUFDO0NBQUEsQUF0UEQsSUFzUEM7U0FqUFkseUJBQXlCOzs7Ozs7SUFFcEMsNkNBQWtDOzs7OztJQUNsQyxpREFBaUM7Ozs7O0lBQ2pDLGdEQUFrQzs7Ozs7SUFDbEMsNkNBQXVFOzs7OztJQUN2RSxtREFBc0M7Ozs7O0lBQ3RDLDRDQUE2Qzs7Ozs7SUFDN0MsK0NBQStDOzs7OztJQUMvQyw0Q0FBMkM7O0lBRTNDLGtEQUM2RDs7SUFFN0Qsa0RBQ2lFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBlbnVtIFBhZ2luZ1RyZWVJbml0aWFsTW9kZSB7XHJcbiAgQ09MTEFQU0UsXHJcbiAgRVhQQU5EXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+IHtcclxuICBnZXQobGFzdENoaWxkT3JkZXI6IG51bWJlciwgc2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxUW10+O1xyXG5cclxuICBnZXRJZEZpZWxkKCk6IHN0cmluZztcclxuXHJcbiAgZ2V0SWRQYXJlbnRGaWVsZCgpOiBzdHJpbmc7XHJcblxyXG4gIGNvbXBhcmUoYTogVCwgYjogVCk6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEhlbGlzYU5vZGU8VD4ge1xyXG4gIG9iamVjdDogVDtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGhhdmVDaGlsZHJlbjogYm9vbGVhbjtcclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHByZW9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVsaXNhTm9kZURhdGE8VD4ge1xyXG4gIHJlYWRvbmx5IG9iamVjdDogVDtcclxuICByZWFkb25seSBsZXZlbDogbnVtYmVyO1xyXG4gIHJlYWRvbmx5IGhhdmVDaGlsZHJlbjogYm9vbGVhbjtcclxuICByZWFkb25seSBleHBhbmRlZDogYm9vbGVhbjtcclxuICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IHByZW9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLXBhZ2luZy10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmctdHJlZS1oZWxpc2EuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmdUcmVlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyID0gMjAwMDAwO1xyXG4gIHByaXZhdGUgdmlzaWJsZUxpbWl0OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgdmlzaWJsZVNpemU6IG51bWJlciA9IDEwMDtcclxuICBwcml2YXRlIHRyZWVNb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUgPSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUuRVhQQU5EO1xyXG4gIHByaXZhdGUgdmlzaWJsZU9iamVjdHM6IEFycmF5PFQ+ID0gW107XHJcbiAgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD47XHJcbiAgcHJpdmF0ZSBzZWFyY2hOb2RlOiBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PjtcclxuICBwcml2YXRlIGFsbE5vZGU6IEFycmF5PEhlbGlzYU5vZGU8VD4+ID0gW107XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGFmdGVyTG9hZERhdGE6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnbm9kZUNvbXBvbmVudCcpXHJcbiAgbm9kZUNvbXBvbmVudDogVGVtcGxhdGVSZWY8eyBkYXRhOiBULCBub2RlOiBIZWxpc2FOb2RlRGF0YTxUPiB9PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1vZGUocGFyYW1Nb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUpIHtcclxuICAgIHRoaXMudHJlZU1vZGUgPSBwYXJhbU1vZGU7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwYWdpbmdUcmVlSGVsaXNhTGlzdGFibGUocGFyYW1TZXJ2aWNlOiBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD4pIHtcclxuICAgIHRoaXMuc2VydmljZSA9IHBhcmFtU2VydmljZTtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5zZXJ2aWNlLmdldCgwLCB0aGlzLnBhZ2VTaXplKS5zdWJzY3JpYmUoKGl0ZW1zOiBUW10pID0+IHRoaXMubG9hZERhdGEoaXRlbXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZERhdGEoaXRlbXM6IFRbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlID0gbmV3IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+KCk7XHJcbiAgICB0aGlzLnZpc2libGVPYmplY3RzID0gW107XHJcbiAgICB0aGlzLmFsbE5vZGUgPSBbXTtcclxuICAgIGl0ZW1zID0gdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlID0gbmV3IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+KCk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtOiBUKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vZGU6IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmNyZWF0ZU5vZGUoaXRlbSk7XHJcbiAgICAgIHRoaXMuYWxsTm9kZS5wdXNoKG5vZGUpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMobnVsbCk7XHJcbiAgICB0aGlzLmFmdGVyTG9hZERhdGEuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzb3J0SXRlbXMoaXRlbXM6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCBsQWR5OiBNYXA8c3RyaW5nLCBUW10+ID0gbmV3IE1hcDxzdHJpbmcsIFRbXT4oKTtcclxuICAgIGNvbnN0IHN0YWNrOiBUW10gPSBbXTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW06IFQpID0+IHtcclxuICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV07XHJcbiAgICAgIGlmICghaWRQYXJlbnQpIHtcclxuICAgICAgICBzdGFjay51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghbEFkeS5oYXMoaWRQYXJlbnQpKSB7XHJcbiAgICAgICAgICBsQWR5LnNldChpZFBhcmVudCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsQWR5LmdldChpZFBhcmVudCkucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZTogVFtdID0gbmV3IEFycmF5PFQ+KGl0ZW1zLmxlbmd0aCk7XHJcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsYXN0OiBUID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHJlc3BvbnNlW2luZGV4KytdID0gbGFzdDtcclxuICAgICAgY29uc3QgY2hpbGRyZW46IFRbXSA9IGxBZHkuZ2V0KGxhc3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xyXG4gICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgc3RhY2sucHVzaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU5vZGUoaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoTm9kZS5oYXMoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1lhIGV4aXN0ZSBlbCBub2RvLicpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFyZW50SW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSk7XHJcbiAgICBjb25zdCBub2RlSW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB7XHJcbiAgICAgIG9iamVjdDogaXRlbSxcclxuICAgICAgaGF2ZUNoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgbGV2ZWw6IHBhcmVudEluZm9ybWF0aW9uID8gcGFyZW50SW5mb3JtYXRpb24ubGV2ZWwgKyAxIDogMCxcclxuICAgICAgZXhwYW5kZWQ6IHRoaXMudHJlZU1vZGUgPT09IFBhZ2luZ1RyZWVJbml0aWFsTW9kZS5FWFBBTkQsXHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcmVvcmRlcjogdGhpcy5zZWFyY2hOb2RlLnNpemUgKyAxLFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2VhcmNoTm9kZS5zZXQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSwgbm9kZUluZm9ybWF0aW9uKTtcclxuICAgIGlmIChwYXJlbnRJbmZvcm1hdGlvbikge1xyXG4gICAgICBwYXJlbnRJbmZvcm1hdGlvbi5oYXZlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVJbmZvcm1hdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkOiBzdHJpbmcpOiBIZWxpc2FOb2RlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaE5vZGUuZ2V0KGlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROb2RlSW5mb3JtYXRpb24oaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTm9kZS5nZXQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgfVxyXG5cclxuICBnZXRMZXZlbENsYXNzKGl0ZW06IFQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdwYWRkaW5nLWxldmVsLScgKyB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkubGV2ZWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWROZXh0VmlzaWJsZU9iamVjdHMobm9kZUZyb206IFQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZpc2libGVPYmplY3RzOiBUW10gPSBbXTtcclxuICAgIHRoaXMudmlzaWJsZU9iamVjdHMuZm9yRWFjaCgoaXRlbTogVCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkpIHtcclxuICAgICAgICBpZiAobm9kZUZyb20gJiYgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24obm9kZUZyb20pLnByZW9yZGVyID49IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pLnByZW9yZGVyKSB7XHJcbiAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZpc2libGVMaW1pdCA9IHZpc2libGVPYmplY3RzLmxlbmd0aCArIHRoaXMudmlzaWJsZVNpemU7XHJcbiAgICB0aGlzLmFsbE5vZGUuZm9yRWFjaCgoaXRlbTogSGVsaXNhTm9kZTxUPikgPT4ge1xyXG4gICAgICBpZiAodmlzaWJsZU9iamVjdHMubGVuZ3RoIDwgdGhpcy52aXNpYmxlTGltaXQgJiZcclxuICAgICAgICAoIW5vZGVGcm9tIHx8IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKG5vZGVGcm9tKS5wcmVvcmRlciA8IGl0ZW0ucHJlb3JkZXIpKSB7XHJcbiAgICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IGl0ZW0ub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldO1xyXG4gICAgICAgIGlmICghaWRQYXJlbnQpIHtcclxuICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbS5vYmplY3QpO1xyXG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcGFyZW50SW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWRQYXJlbnQpO1xyXG4gICAgICAgICAgaWYgKHBhcmVudEluZm9ybWF0aW9uLnZpc2libGUgJiYgcGFyZW50SW5mb3JtYXRpb24uZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtLm9iamVjdCk7XHJcbiAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlzaWJsZU9iamVjdHMgPSB2aXNpYmxlT2JqZWN0cztcclxuICB9XHJcblxyXG4gIGNvbGxhcHNlTm9kZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhpdGVtKTtcclxuICB9XHJcblxyXG4gIGV4cGFuZE5vZGUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhpdGVtKTtcclxuICB9XHJcblxyXG4gIHNob3dOZXh0UGFnZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpc2libGVPYmplY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKHRoaXMudmlzaWJsZU9iamVjdHNbdGhpcy52aXNpYmxlT2JqZWN0cy5sZW5ndGggLSAxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdmlzaWJsZURhdGEoKTogUmVhZG9ubHlBcnJheTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlT2JqZWN0cztcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVCeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQnlJZChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQpKSB7XHJcbiAgICAgIGNvbnN0IGlkUGFyZW50OiBzdHJpbmcgPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQpLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcclxuICAgICAgY29uc3Qgc2V0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgICBzZXQuYWRkKGlkKTtcclxuICAgICAgY29uc3QgYmVnaW5JbmRleDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcclxuICAgICAgICAoaXRlbVNlYXJjaDogSGVsaXNhTm9kZTxUPikgPT4gaXRlbVNlYXJjaC5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGlkXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBsYXN0SW5kZXg6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGJlZ2luSW5kZXggKyAxOyBpIDwgdGhpcy5hbGxOb2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbVNlYXJjaDogVCA9IHRoaXMuYWxsTm9kZVtpXS5vYmplY3Q7XHJcbiAgICAgICAgaWYgKHNldC5oYXMoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSkpIHtcclxuICAgICAgICAgIHNldC5hZGQoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxhc3RJbmRleCA9IGk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGVsZXRlZEl0ZW1zOiBIZWxpc2FOb2RlPFQ+W10gPSB0aGlzLmFsbE5vZGUuc3BsaWNlKGJlZ2luSW5kZXgsIGxhc3RJbmRleCAtIGJlZ2luSW5kZXgpO1xyXG4gICAgICBsZXQgcGFyZW50SGF2ZUNoaWxkcmVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgIGRlbGV0ZWRJdGVtcy5mb3JFYWNoKChkZWxldGVkSXRlbTogSGVsaXNhTm9kZTxUPikgPT4gdGhpcy5zZWFyY2hOb2RlLmRlbGV0ZShkZWxldGVkSXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pKTtcclxuICAgICAgdGhpcy5hbGxOb2RlLmZvckVhY2goKHNlYXJjaEl0ZW06IEhlbGlzYU5vZGU8VD4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZWFyY2hJdGVtLnByZW9yZGVyID0gaW5kZXggKyAxXHJcbiAgICAgICAgaWYoc2VhcmNoSXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0gPT09IGlkUGFyZW50KSB7XHJcbiAgICAgICAgICBwYXJlbnRIYXZlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmKGlkUGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkUGFyZW50KS5oYXZlQ2hpbGRyZW4gPSBwYXJlbnRIYXZlQ2hpbGRyZW47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGJlZ2luSW5kZXggPiAwID8gdGhpcy5hbGxOb2RlW2JlZ2luSW5kZXggLSAxXS5vYmplY3QgOiBudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXhQYXJlbnQ6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoKG5vZGU6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGUub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgIGlmIChpbmRleFBhcmVudCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuYWxsTm9kZS5wdXNoKHRoaXMuY3JlYXRlTm9kZShpdGVtKSk7XHJcbiAgICAgIHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0uaGF2ZUNoaWxkcmVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZVNvcnQoKTtcclxuICAgICAgdGhpcy5leHBhbmROb2RlKHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0ub2JqZWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdObyBleGlzdGUgZWwgcGFkcmUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJdGVtKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xyXG4gICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKS5vYmplY3QgPSBpdGVtO1xyXG4gICAgICB0aGlzLnJlU29ydCgpO1xyXG4gICAgICBjb25zdCBpbmRleFBhcmVudDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcclxuICAgICAgICAobm9kZTogSGVsaXNhTm9kZTxUPikgPT4gbm9kZS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xyXG4gICAgICBpZiAoaW5kZXhQYXJlbnQgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kTm9kZSh0aGlzLmFsbE5vZGVbaW5kZXhQYXJlbnRdLm9iamVjdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlU29ydCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW1zOiBUW10gPSB0aGlzLmFsbE5vZGUubWFwKChub2RlOiBIZWxpc2FOb2RlPFQ+KSA9PiBub2RlLm9iamVjdCk7XHJcbiAgICBpdGVtcy5zb3J0KChhOiBULCBiOiBUKSA9PiB0aGlzLnNlcnZpY2UuY29tcGFyZShhLCBiKSk7XHJcbiAgICBjb25zdCBwcmVvcmRlcjogVFtdID0gdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xyXG4gICAgcHJlb3JkZXIuZm9yRWFjaCgob2JqZWN0OiBULCBpbmRleDogbnVtYmVyKSA9PiB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihvYmplY3QpLnByZW9yZGVyID0gaW5kZXggKyAxKTtcclxuICAgIHRoaXMuYWxsTm9kZS5zb3J0KChub2RlQTogSGVsaXNhTm9kZTxUPiwgbm9kZUI6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGVBLnByZW9yZGVyIC0gbm9kZUIucHJlb3JkZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=