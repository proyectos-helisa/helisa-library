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
     * @private
     * @return {?}
     */
    PagingTreeHelisaComponent.prototype.reset = /**
     * @private
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
        function (searchItem, index) { return searchItem.preorder = index + 1; }));
        this.loadNextVisibleObjects(beginIndex > 0 ? this.allNode[beginIndex - 1].object : null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYWdpbmctdHJlZS1oZWxpc2EvcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0lBSXJILFdBQVE7SUFDUixTQUFNOzs7Ozs7Ozs7QUFHUiw4Q0FRQzs7Ozs7OztJQVBDLDZFQUEyRDs7OztJQUUzRCxnRUFBcUI7Ozs7SUFFckIsc0VBQTJCOzs7Ozs7SUFFM0IsaUVBQTRCOzs7Ozs7QUFHOUIseUJBT0M7OztJQU5DLDRCQUFVOztJQUNWLDJCQUFjOztJQUNkLGtDQUFzQjs7SUFDdEIsOEJBQWtCOztJQUNsQiw2QkFBaUI7O0lBQ2pCLDhCQUFpQjs7Ozs7O0FBR25CLG9DQU9DOzs7SUFOQyxnQ0FBbUI7O0lBQ25CLCtCQUF1Qjs7SUFDdkIsc0NBQStCOztJQUMvQixrQ0FBMkI7O0lBQzNCLGlDQUEwQjs7SUFDMUIsa0NBQTBCOzs7OztBQUc1QjtJQXNCRTtRQWZRLGFBQVEsR0FBVyxNQUFNLENBQUM7UUFDMUIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsYUFBUSxHQUEwQixxQkFBcUIsQ0FBQyxNQUFNLENBQUM7UUFDL0QsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFHOUIsWUFBTyxHQUF5QixFQUFFLENBQUM7UUFHM0Msa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQU03RCxDQUFDOzs7O0lBRUQsNENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELG1EQUFlOzs7SUFBZjtJQUNBLENBQUM7SUFFRCxzQkFD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QUFlO3VCQVk1QixLQUFLOzJDQU1MLEtBQUs7O0lBb01SLGdDQUFDO0NBQUEsQUF6T0QsSUF5T0M7U0FwT1kseUJBQXlCOzs7Ozs7SUFFcEMsNkNBQWtDOzs7OztJQUNsQyxpREFBaUM7Ozs7O0lBQ2pDLGdEQUFrQzs7Ozs7SUFDbEMsNkNBQXVFOzs7OztJQUN2RSxtREFBc0M7Ozs7O0lBQ3RDLDRDQUE2Qzs7Ozs7SUFDN0MsK0NBQStDOzs7OztJQUMvQyw0Q0FBMkM7O0lBRTNDLGtEQUM2RDs7SUFFN0Qsa0RBQ2lFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBlbnVtIFBhZ2luZ1RyZWVJbml0aWFsTW9kZSB7XHJcbiAgQ09MTEFQU0UsXHJcbiAgRVhQQU5EXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+IHtcclxuICBnZXQobGFzdENoaWxkT3JkZXI6IG51bWJlciwgc2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxUW10+O1xyXG5cclxuICBnZXRJZEZpZWxkKCk6IHN0cmluZztcclxuXHJcbiAgZ2V0SWRQYXJlbnRGaWVsZCgpOiBzdHJpbmc7XHJcblxyXG4gIGNvbXBhcmUoYTogVCwgYjogVCk6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEhlbGlzYU5vZGU8VD4ge1xyXG4gIG9iamVjdDogVDtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGhhdmVDaGlsZHJlbjogYm9vbGVhbjtcclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHByZW9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVsaXNhTm9kZURhdGE8VD4ge1xyXG4gIHJlYWRvbmx5IG9iamVjdDogVDtcclxuICByZWFkb25seSBsZXZlbDogbnVtYmVyO1xyXG4gIHJlYWRvbmx5IGhhdmVDaGlsZHJlbjogYm9vbGVhbjtcclxuICByZWFkb25seSBleHBhbmRlZDogYm9vbGVhbjtcclxuICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IHByZW9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLXBhZ2luZy10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmctdHJlZS1oZWxpc2EuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmdUcmVlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyID0gMjAwMDAwO1xyXG4gIHByaXZhdGUgdmlzaWJsZUxpbWl0OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgdmlzaWJsZVNpemU6IG51bWJlciA9IDEwMDtcclxuICBwcml2YXRlIHRyZWVNb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUgPSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUuRVhQQU5EO1xyXG4gIHByaXZhdGUgdmlzaWJsZU9iamVjdHM6IEFycmF5PFQ+ID0gW107XHJcbiAgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD47XHJcbiAgcHJpdmF0ZSBzZWFyY2hOb2RlOiBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PjtcclxuICBwcml2YXRlIGFsbE5vZGU6IEFycmF5PEhlbGlzYU5vZGU8VD4+ID0gW107XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGFmdGVyTG9hZERhdGE6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnbm9kZUNvbXBvbmVudCcpXHJcbiAgbm9kZUNvbXBvbmVudDogVGVtcGxhdGVSZWY8eyBkYXRhOiBULCBub2RlOiBIZWxpc2FOb2RlRGF0YTxUPiB9PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1vZGUocGFyYW1Nb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUpIHtcclxuICAgIHRoaXMudHJlZU1vZGUgPSBwYXJhbU1vZGU7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwYWdpbmdUcmVlSGVsaXNhTGlzdGFibGUocGFyYW1TZXJ2aWNlOiBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD4pIHtcclxuICAgIHRoaXMuc2VydmljZSA9IHBhcmFtU2VydmljZTtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5nZXQoMCwgdGhpcy5wYWdlU2l6ZSkuc3Vic2NyaWJlKChpdGVtczogVFtdKSA9PiB0aGlzLmxvYWREYXRhKGl0ZW1zKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWREYXRhKGl0ZW1zOiBUW10pOiB2b2lkIHtcclxuICAgIHRoaXMuc2VhcmNoTm9kZSA9IG5ldyBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PigpO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cyA9IFtdO1xyXG4gICAgdGhpcy5hbGxOb2RlID0gW107XHJcbiAgICBpdGVtcyA9IHRoaXMuc29ydEl0ZW1zKGl0ZW1zKTtcclxuICAgIHRoaXMuc2VhcmNoTm9kZSA9IG5ldyBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PigpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogVCkgPT4ge1xyXG4gICAgICBjb25zdCBub2RlOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5jcmVhdGVOb2RlKGl0ZW0pO1xyXG4gICAgICB0aGlzLmFsbE5vZGUucHVzaChub2RlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKG51bGwpO1xyXG4gICAgdGhpcy5hZnRlckxvYWREYXRhLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc29ydEl0ZW1zKGl0ZW1zOiBUW10pOiBUW10ge1xyXG4gICAgY29uc3QgbEFkeTogTWFwPHN0cmluZywgVFtdPiA9IG5ldyBNYXA8c3RyaW5nLCBUW10+KCk7XHJcbiAgICBjb25zdCBzdGFjazogVFtdID0gW107XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtOiBUKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkUGFyZW50OiBzdHJpbmcgPSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldO1xyXG4gICAgICBpZiAoIWlkUGFyZW50KSB7XHJcbiAgICAgICAgc3RhY2sudW5zaGlmdChpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWxBZHkuaGFzKGlkUGFyZW50KSkge1xyXG4gICAgICAgICAgbEFkeS5zZXQoaWRQYXJlbnQsIFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbEFkeS5nZXQoaWRQYXJlbnQpLnB1c2goaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2U6IFRbXSA9IG5ldyBBcnJheTxUPihpdGVtcy5sZW5ndGgpO1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgbGFzdDogVCA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICByZXNwb25zZVtpbmRleCsrXSA9IGxhc3Q7XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuOiBUW10gPSBsQWR5LmdldChsYXN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcclxuICAgICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVOb2RlKGl0ZW06IFQpOiBIZWxpc2FOb2RlPFQ+IHtcclxuICAgIGlmICh0aGlzLnNlYXJjaE5vZGUuaGFzKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdZYSBleGlzdGUgZWwgbm9kby4nKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcmVudEluZm9ybWF0aW9uOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xyXG4gICAgY29uc3Qgbm9kZUluZm9ybWF0aW9uOiBIZWxpc2FOb2RlPFQ+ID0ge1xyXG4gICAgICBvYmplY3Q6IGl0ZW0sXHJcbiAgICAgIGhhdmVDaGlsZHJlbjogZmFsc2UsXHJcbiAgICAgIGxldmVsOiBwYXJlbnRJbmZvcm1hdGlvbiA/IHBhcmVudEluZm9ybWF0aW9uLmxldmVsICsgMSA6IDAsXHJcbiAgICAgIGV4cGFuZGVkOiB0aGlzLnRyZWVNb2RlID09PSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUuRVhQQU5ELFxyXG4gICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJlb3JkZXI6IHRoaXMuc2VhcmNoTm9kZS5zaXplICsgMSxcclxuICAgIH07XHJcbiAgICB0aGlzLnNlYXJjaE5vZGUuc2V0KGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0sIG5vZGVJbmZvcm1hdGlvbik7XHJcbiAgICBpZiAocGFyZW50SW5mb3JtYXRpb24pIHtcclxuICAgICAgcGFyZW50SW5mb3JtYXRpb24uaGF2ZUNoaWxkcmVuID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlSW5mb3JtYXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZDogc3RyaW5nKTogSGVsaXNhTm9kZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hOb2RlLmdldChpZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW06IFQpOiBIZWxpc2FOb2RlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaE5vZGUuZ2V0KGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGV2ZWxDbGFzcyhpdGVtOiBUKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAncGFkZGluZy1sZXZlbC0nICsgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLmxldmVsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkTmV4dFZpc2libGVPYmplY3RzKG5vZGVGcm9tOiBUKTogdm9pZCB7XHJcbiAgICBjb25zdCB2aXNpYmxlT2JqZWN0czogVFtdID0gW107XHJcbiAgICB0aGlzLnZpc2libGVPYmplY3RzLmZvckVhY2goKGl0ZW06IFQpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pKSB7XHJcbiAgICAgICAgaWYgKG5vZGVGcm9tICYmIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKG5vZGVGcm9tKS5wcmVvcmRlciA+PSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKS5wcmVvcmRlcikge1xyXG4gICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy52aXNpYmxlTGltaXQgPSB2aXNpYmxlT2JqZWN0cy5sZW5ndGggKyB0aGlzLnZpc2libGVTaXplO1xyXG4gICAgdGhpcy5hbGxOb2RlLmZvckVhY2goKGl0ZW06IEhlbGlzYU5vZGU8VD4pID0+IHtcclxuICAgICAgaWYgKHZpc2libGVPYmplY3RzLmxlbmd0aCA8IHRoaXMudmlzaWJsZUxpbWl0ICYmXHJcbiAgICAgICAgKCFub2RlRnJvbSB8fCB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihub2RlRnJvbSkucHJlb3JkZXIgPCBpdGVtLnByZW9yZGVyKSkge1xyXG4gICAgICAgIGNvbnN0IGlkUGFyZW50OiBzdHJpbmcgPSBpdGVtLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcclxuICAgICAgICBpZiAoIWlkUGFyZW50KSB7XHJcbiAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0ub2JqZWN0KTtcclxuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHBhcmVudEluZm9ybWF0aW9uOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkUGFyZW50KTtcclxuICAgICAgICAgIGlmIChwYXJlbnRJbmZvcm1hdGlvbi52aXNpYmxlICYmIHBhcmVudEluZm9ybWF0aW9uLmV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbS5vYmplY3QpO1xyXG4gICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZpc2libGVPYmplY3RzID0gdmlzaWJsZU9iamVjdHM7XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZU5vZGUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMoaXRlbSk7XHJcbiAgfVxyXG5cclxuICBleHBhbmROb2RlKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5leHBhbmRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMoaXRlbSk7XHJcbiAgfVxyXG5cclxuICBzaG93TmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlT2JqZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyh0aGlzLnZpc2libGVPYmplY3RzW3RoaXMudmlzaWJsZU9iamVjdHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHZpc2libGVEYXRhKCk6IFJlYWRvbmx5QXJyYXk8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZU9iamVjdHM7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUJ5SWQoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2V0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgc2V0LmFkZChpZCk7XHJcbiAgICBjb25zdCBiZWdpbkluZGV4OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUuZmluZEluZGV4KFxyXG4gICAgICAoaXRlbVNlYXJjaDogSGVsaXNhTm9kZTxUPikgPT4gaXRlbVNlYXJjaC5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGlkXHJcbiAgICApO1xyXG4gICAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IGJlZ2luSW5kZXggKyAxOyBpIDwgdGhpcy5hbGxOb2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1TZWFyY2g6IFQgPSB0aGlzLmFsbE5vZGVbaV0ub2JqZWN0O1xyXG4gICAgICBpZiAoc2V0LmhhcyhpdGVtU2VhcmNoW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKSkge1xyXG4gICAgICAgIHNldC5hZGQoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGFzdEluZGV4ID0gaTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGVsZXRlZEl0ZW1zOiBIZWxpc2FOb2RlPFQ+W10gPSB0aGlzLmFsbE5vZGUuc3BsaWNlKGJlZ2luSW5kZXgsIGxhc3RJbmRleCAtIGJlZ2luSW5kZXgpO1xyXG4gICAgZGVsZXRlZEl0ZW1zLmZvckVhY2goKGRlbGV0ZWRJdGVtOiBIZWxpc2FOb2RlPFQ+KSA9PiB0aGlzLnNlYXJjaE5vZGUuZGVsZXRlKGRlbGV0ZWRJdGVtLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkpO1xyXG4gICAgdGhpcy5hbGxOb2RlLmZvckVhY2goKHNlYXJjaEl0ZW06IEhlbGlzYU5vZGU8VD4sIGluZGV4OiBudW1iZXIpID0+IHNlYXJjaEl0ZW0ucHJlb3JkZXIgPSBpbmRleCArIDEpO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGJlZ2luSW5kZXggPiAwID8gdGhpcy5hbGxOb2RlW2JlZ2luSW5kZXggLSAxXS5vYmplY3QgOiBudWxsKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXhQYXJlbnQ6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoKG5vZGU6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGUub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgIGlmIChpbmRleFBhcmVudCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuYWxsTm9kZS5wdXNoKHRoaXMuY3JlYXRlTm9kZShpdGVtKSk7XHJcbiAgICAgIHRoaXMucmVTb3J0KCk7XHJcbiAgICAgIHRoaXMuZXhwYW5kTm9kZSh0aGlzLmFsbE5vZGVbaW5kZXhQYXJlbnRdLm9iamVjdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFcnJvcignTm8gZXhpc3RlIGVsIHBhZHJlLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSXRlbShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkpIHtcclxuICAgICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkub2JqZWN0ID0gaXRlbTtcclxuICAgICAgdGhpcy5yZVNvcnQoKTtcclxuICAgICAgY29uc3QgaW5kZXhQYXJlbnQ6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoXHJcbiAgICAgICAgKG5vZGU6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGUub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgICAgaWYgKGluZGV4UGFyZW50ID49IDApIHtcclxuICAgICAgICB0aGlzLmV4cGFuZE5vZGUodGhpcy5hbGxOb2RlW2luZGV4UGFyZW50XS5vYmplY3QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZVNvcnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpdGVtczogVFtdID0gdGhpcy5hbGxOb2RlLm1hcCgobm9kZTogSGVsaXNhTm9kZTxUPikgPT4gbm9kZS5vYmplY3QpO1xyXG4gICAgaXRlbXMuc29ydCgoYTogVCwgYjogVCkgPT4gdGhpcy5zZXJ2aWNlLmNvbXBhcmUoYSwgYikpO1xyXG4gICAgY29uc3QgcHJlb3JkZXI6IFRbXSA9IHRoaXMuc29ydEl0ZW1zKGl0ZW1zKTtcclxuICAgIHByZW9yZGVyLmZvckVhY2goKG9iamVjdDogVCwgaW5kZXg6IG51bWJlcikgPT4gdGhpcy5nZXROb2RlSW5mb3JtYXRpb24ob2JqZWN0KS5wcmVvcmRlciA9IGluZGV4ICsgMSk7XHJcbiAgICB0aGlzLmFsbE5vZGUuc29ydCgobm9kZUE6IEhlbGlzYU5vZGU8VD4sIG5vZGVCOiBIZWxpc2FOb2RlPFQ+KSA9PiBub2RlQS5wcmVvcmRlciAtIG5vZGVCLnByZW9yZGVyKTtcclxuICB9XHJcbn1cclxuIl19