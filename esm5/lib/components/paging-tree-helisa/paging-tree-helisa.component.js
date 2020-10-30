/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
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
        console.log('items : ', items);
        items = this.sortItems(items);
        console.log('2items : ', items);
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
        console.log('all : ', this.allNode);
        console.log('search : ', this.searchNode);
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
        console.log("pinche id que no funciona ", id);
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
        var _this = this;
        /** @type {?} */
        var set = new Set();
        set.add(item[this.service.getIdField()]);
        /** @type {?} */
        var beginIndex = this.allNode.findIndex((/**
         * @param {?} itemSearch
         * @return {?}
         */
        function (itemSearch) { return itemSearch.object[_this.service.getIdField()] === item[_this.service.getIdField()]; }));
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
                    template: "<div>\r\n  <div *ngFor=\"let item of visibleData\" [ngClass]=\"this.getLevelClass(item)\">\r\n    <div *ngIf=\"getNodeInformationById(item.id).visible\">\r\n      <div *ngIf=\"getNodeInformationById(item.id) as node\" class=\"helisa-tree-row\">\r\n        <div>\r\n          <mat-icon *ngIf=\"!node.expanded && node.haveChildren\" (click)=\"expandNode(item)\">add</mat-icon>\r\n          <mat-icon *ngIf=\"node.expanded && node.haveChildren\" (click)=\"collapseNode(item)\">remove</mat-icon>\r\n        </div>\r\n        <ng-container [ngTemplateOutlet]=\"nodeComponent\" [ngTemplateOutletContext]=\"{data: item, node: node}\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n",
                    styles: [".padding-level-0{padding-left:0}.padding-level-1{padding-left:40px}.padding-level-2{padding-left:80px}.padding-level-3{padding-left:120px}.padding-level-4{padding-left:160px}.padding-level-5{padding-left:200px}.padding-level-6{padding-left:240px}.padding-level-7{padding-left:280px}.padding-level-8{padding-left:320px}.helisa-tree-row{display:flex;flex-direction:row;align-items:center}"]
                }] }
    ];
    /** @nocollapse */
    PagingTreeHelisaComponent.ctorParameters = function () { return []; };
    PagingTreeHelisaComponent.propDecorators = {
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
    PagingTreeHelisaComponent.prototype.nodeComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYWdpbmctdHJlZS1oZWxpc2EvcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7OztJQUkvRixXQUFRO0lBQ1IsU0FBTTs7Ozs7Ozs7O0FBR1IsOENBUUM7Ozs7Ozs7SUFQQyw2RUFBMkQ7Ozs7SUFFM0QsZ0VBQXFCOzs7O0lBRXJCLHNFQUEyQjs7Ozs7O0lBRTNCLGlFQUE0Qjs7Ozs7O0FBRzlCLHlCQU9DOzs7SUFOQyw0QkFBVTs7SUFDViwyQkFBYzs7SUFDZCxrQ0FBc0I7O0lBQ3RCLDhCQUFrQjs7SUFDbEIsNkJBQWlCOztJQUNqQiw4QkFBaUI7Ozs7OztBQUduQixvQ0FPQzs7O0lBTkMsZ0NBQW1COztJQUNuQiwrQkFBdUI7O0lBQ3ZCLHNDQUErQjs7SUFDL0Isa0NBQTJCOztJQUMzQixpQ0FBMEI7O0lBQzFCLGtDQUEwQjs7Ozs7QUFHNUI7SUFtQkU7UUFaUSxhQUFRLEdBQVcsTUFBTSxDQUFDO1FBQzFCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLGFBQVEsR0FBMEIscUJBQXFCLENBQUMsTUFBTSxDQUFDO1FBQy9ELG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBRzlCLFlBQU8sR0FBeUIsRUFBRSxDQUFDO0lBTTNDLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFmO0lBQ0EsQ0FBQztJQUVELHNCQUNJLDJDQUFJOzs7OztRQURSLFVBQ1MsU0FBZ0M7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFT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UUFBUSxFQUEvQixDQUErQixFQUFDLENBQUM7SUFDckcsQ0FBQzs7Z0JBck9GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwwc0JBQWtEOztpQkFFbkQ7Ozs7O2dDQVlFLFlBQVksU0FBQyxlQUFlO3VCQVk1QixLQUFLOzJDQU1MLEtBQUs7O0lBb01SLGdDQUFDO0NBQUEsQUF0T0QsSUFzT0M7U0FqT1kseUJBQXlCOzs7Ozs7SUFFcEMsNkNBQWtDOzs7OztJQUNsQyxpREFBaUM7Ozs7O0lBQ2pDLGdEQUFrQzs7Ozs7SUFDbEMsNkNBQXVFOzs7OztJQUN2RSxtREFBc0M7Ozs7O0lBQ3RDLDRDQUE2Qzs7Ozs7SUFDN0MsK0NBQStDOzs7OztJQUMvQyw0Q0FBMkM7O0lBRTNDLGtEQUNpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBlbnVtIFBhZ2luZ1RyZWVJbml0aWFsTW9kZSB7XHJcbiAgQ09MTEFQU0UsXHJcbiAgRVhQQU5EXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+IHtcclxuICBnZXQobGFzdENoaWxkT3JkZXI6IG51bWJlciwgc2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxUW10+O1xyXG5cclxuICBnZXRJZEZpZWxkKCk6IHN0cmluZztcclxuXHJcbiAgZ2V0SWRQYXJlbnRGaWVsZCgpOiBzdHJpbmc7XHJcblxyXG4gIGNvbXBhcmUoYTogVCwgYjogVCk6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEhlbGlzYU5vZGU8VD4ge1xyXG4gIG9iamVjdDogVDtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGhhdmVDaGlsZHJlbjogYm9vbGVhbjtcclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHByZW9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVsaXNhTm9kZURhdGE8VD4ge1xyXG4gIHJlYWRvbmx5IG9iamVjdDogVDtcclxuICByZWFkb25seSBsZXZlbDogbnVtYmVyO1xyXG4gIHJlYWRvbmx5IGhhdmVDaGlsZHJlbjogYm9vbGVhbjtcclxuICByZWFkb25seSBleHBhbmRlZDogYm9vbGVhbjtcclxuICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IHByZW9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLXBhZ2luZy10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmctdHJlZS1oZWxpc2EuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmdUcmVlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyID0gMjAwMDAwO1xyXG4gIHByaXZhdGUgdmlzaWJsZUxpbWl0OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgdmlzaWJsZVNpemU6IG51bWJlciA9IDEwMDtcclxuICBwcml2YXRlIHRyZWVNb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUgPSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUuRVhQQU5EO1xyXG4gIHByaXZhdGUgdmlzaWJsZU9iamVjdHM6IEFycmF5PFQ+ID0gW107XHJcbiAgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD47XHJcbiAgcHJpdmF0ZSBzZWFyY2hOb2RlOiBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PjtcclxuICBwcml2YXRlIGFsbE5vZGU6IEFycmF5PEhlbGlzYU5vZGU8VD4+ID0gW107XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ25vZGVDb21wb25lbnQnKVxyXG4gIG5vZGVDb21wb25lbnQ6IFRlbXBsYXRlUmVmPHsgZGF0YTogVCwgbm9kZTogSGVsaXNhTm9kZURhdGE8VD4gfT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBtb2RlKHBhcmFtTW9kZTogUGFnaW5nVHJlZUluaXRpYWxNb2RlKSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlID0gcGFyYW1Nb2RlO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlKHBhcmFtU2VydmljZTogUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+KSB7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBwYXJhbVNlcnZpY2U7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VydmljZSkge1xyXG4gICAgICB0aGlzLnNlcnZpY2UuZ2V0KDAsIHRoaXMucGFnZVNpemUpLnN1YnNjcmliZSgoaXRlbXM6IFRbXSkgPT4gdGhpcy5sb2FkRGF0YShpdGVtcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkRGF0YShpdGVtczogVFtdKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaE5vZGUgPSBuZXcgTWFwPHN0cmluZywgSGVsaXNhTm9kZTxUPj4oKTtcclxuICAgIHRoaXMudmlzaWJsZU9iamVjdHMgPSBbXTtcclxuICAgIHRoaXMuYWxsTm9kZSA9IFtdO1xyXG4gICAgY29uc29sZS5sb2coJ2l0ZW1zIDogJywgaXRlbXMpO1xyXG4gICAgaXRlbXMgPSB0aGlzLnNvcnRJdGVtcyhpdGVtcyk7XHJcbiAgICBjb25zb2xlLmxvZygnMml0ZW1zIDogJywgaXRlbXMpO1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlID0gbmV3IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+KCk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtOiBUKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vZGU6IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmNyZWF0ZU5vZGUoaXRlbSk7XHJcbiAgICAgIHRoaXMuYWxsTm9kZS5wdXNoKG5vZGUpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMobnVsbCk7XHJcbiAgICBjb25zb2xlLmxvZygnYWxsIDogJywgdGhpcy5hbGxOb2RlKTtcclxuICAgIGNvbnNvbGUubG9nKCdzZWFyY2ggOiAnLCB0aGlzLnNlYXJjaE5vZGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzb3J0SXRlbXMoaXRlbXM6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCBsQWR5OiBNYXA8c3RyaW5nLCBUW10+ID0gbmV3IE1hcDxzdHJpbmcsIFRbXT4oKTtcclxuICAgIGNvbnN0IHN0YWNrOiBUW10gPSBbXTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW06IFQpID0+IHtcclxuICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV07XHJcbiAgICAgIGlmICghaWRQYXJlbnQpIHtcclxuICAgICAgICBzdGFjay51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghbEFkeS5oYXMoaWRQYXJlbnQpKSB7XHJcbiAgICAgICAgICBsQWR5LnNldChpZFBhcmVudCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsQWR5LmdldChpZFBhcmVudCkucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZTogVFtdID0gbmV3IEFycmF5PFQ+KGl0ZW1zLmxlbmd0aCk7XHJcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBsYXN0OiBUID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHJlc3BvbnNlW2luZGV4KytdID0gbGFzdDtcclxuICAgICAgY29uc3QgY2hpbGRyZW46IFRbXSA9IGxBZHkuZ2V0KGxhc3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xyXG4gICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgc3RhY2sucHVzaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU5vZGUoaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoTm9kZS5oYXMoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1lhIGV4aXN0ZSBlbCBub2RvLicpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFyZW50SW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSk7XHJcbiAgICBjb25zdCBub2RlSW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB7XHJcbiAgICAgIG9iamVjdDogaXRlbSxcclxuICAgICAgaGF2ZUNoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgbGV2ZWw6IHBhcmVudEluZm9ybWF0aW9uID8gcGFyZW50SW5mb3JtYXRpb24ubGV2ZWwgKyAxIDogMCxcclxuICAgICAgZXhwYW5kZWQ6IHRoaXMudHJlZU1vZGUgPT09IFBhZ2luZ1RyZWVJbml0aWFsTW9kZS5FWFBBTkQsXHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcmVvcmRlcjogdGhpcy5zZWFyY2hOb2RlLnNpemUgKyAxLFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2VhcmNoTm9kZS5zZXQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSwgbm9kZUluZm9ybWF0aW9uKTtcclxuICAgIGlmIChwYXJlbnRJbmZvcm1hdGlvbikge1xyXG4gICAgICBwYXJlbnRJbmZvcm1hdGlvbi5oYXZlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVJbmZvcm1hdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkOiBzdHJpbmcpOiBIZWxpc2FOb2RlPFQ+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicGluY2hlIGlkIHF1ZSBubyBmdW5jaW9uYSBcIiAsIGlkKTtcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaE5vZGUuZ2V0KGlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROb2RlSW5mb3JtYXRpb24oaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTm9kZS5nZXQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgfVxyXG5cclxuICBnZXRMZXZlbENsYXNzKGl0ZW06IFQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdwYWRkaW5nLWxldmVsLScgKyB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkubGV2ZWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWROZXh0VmlzaWJsZU9iamVjdHMobm9kZUZyb206IFQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZpc2libGVPYmplY3RzOiBUW10gPSBbXTtcclxuICAgIHRoaXMudmlzaWJsZU9iamVjdHMuZm9yRWFjaCgoaXRlbTogVCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkpIHtcclxuICAgICAgICBpZiAobm9kZUZyb20gJiYgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24obm9kZUZyb20pLnByZW9yZGVyID49IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pLnByZW9yZGVyKSB7XHJcbiAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZpc2libGVMaW1pdCA9IHZpc2libGVPYmplY3RzLmxlbmd0aCArIHRoaXMudmlzaWJsZVNpemU7XHJcbiAgICB0aGlzLmFsbE5vZGUuZm9yRWFjaCgoaXRlbTogSGVsaXNhTm9kZTxUPikgPT4ge1xyXG4gICAgICBpZiAodmlzaWJsZU9iamVjdHMubGVuZ3RoIDwgdGhpcy52aXNpYmxlTGltaXQgJiZcclxuICAgICAgICAoIW5vZGVGcm9tIHx8IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKG5vZGVGcm9tKS5wcmVvcmRlciA8IGl0ZW0ucHJlb3JkZXIpKSB7XHJcbiAgICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IGl0ZW0ub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldO1xyXG4gICAgICAgIGlmICghaWRQYXJlbnQpIHtcclxuICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbS5vYmplY3QpO1xyXG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcGFyZW50SW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWRQYXJlbnQpO1xyXG4gICAgICAgICAgaWYgKHBhcmVudEluZm9ybWF0aW9uLnZpc2libGUgJiYgcGFyZW50SW5mb3JtYXRpb24uZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtLm9iamVjdCk7XHJcbiAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlzaWJsZU9iamVjdHMgPSB2aXNpYmxlT2JqZWN0cztcclxuICB9XHJcblxyXG4gIGNvbGxhcHNlTm9kZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhpdGVtKTtcclxuICB9XHJcblxyXG4gIGV4cGFuZE5vZGUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhpdGVtKTtcclxuICB9XHJcblxyXG4gIHNob3dOZXh0UGFnZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpc2libGVPYmplY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKHRoaXMudmlzaWJsZU9iamVjdHNbdGhpcy52aXNpYmxlT2JqZWN0cy5sZW5ndGggLSAxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdmlzaWJsZURhdGEoKTogUmVhZG9ubHlBcnJheTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlT2JqZWN0cztcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2V0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgc2V0LmFkZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcclxuICAgIGNvbnN0IGJlZ2luSW5kZXg6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoXHJcbiAgICAgIChpdGVtU2VhcmNoOiBIZWxpc2FOb2RlPFQ+KSA9PiBpdGVtU2VhcmNoLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSA9PT0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXVxyXG4gICAgKTtcclxuICAgIGxldCBsYXN0SW5kZXg6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBiZWdpbkluZGV4ICsgMTsgaSA8IHRoaXMuYWxsTm9kZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpdGVtU2VhcmNoOiBUID0gdGhpcy5hbGxOb2RlW2ldLm9iamVjdDtcclxuICAgICAgaWYgKHNldC5oYXMoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSkpIHtcclxuICAgICAgICBzZXQuYWRkKGl0ZW1TZWFyY2hbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxhc3RJbmRleCA9IGk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGV0ZWRJdGVtczogSGVsaXNhTm9kZTxUPltdID0gdGhpcy5hbGxOb2RlLnNwbGljZShiZWdpbkluZGV4LCBsYXN0SW5kZXggLSBiZWdpbkluZGV4KTtcclxuICAgIGRlbGV0ZWRJdGVtcy5mb3JFYWNoKChkZWxldGVkSXRlbTogSGVsaXNhTm9kZTxUPikgPT4gdGhpcy5zZWFyY2hOb2RlLmRlbGV0ZShkZWxldGVkSXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pKTtcclxuICAgIHRoaXMuYWxsTm9kZS5mb3JFYWNoKChzZWFyY2hJdGVtOiBIZWxpc2FOb2RlPFQ+LCBpbmRleDogbnVtYmVyKSA9PiBzZWFyY2hJdGVtLnByZW9yZGVyID0gaW5kZXggKyAxKTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhiZWdpbkluZGV4ID4gMCA/IHRoaXMuYWxsTm9kZVtiZWdpbkluZGV4IC0gMV0ub2JqZWN0IDogbnVsbCk7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4UGFyZW50OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUuZmluZEluZGV4KChub2RlOiBIZWxpc2FOb2RlPFQ+KSA9PiBub2RlLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSA9PT0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSk7XHJcbiAgICBpZiAoaW5kZXhQYXJlbnQgPj0gMCkge1xyXG4gICAgICB0aGlzLmFsbE5vZGUucHVzaCh0aGlzLmNyZWF0ZU5vZGUoaXRlbSkpO1xyXG4gICAgICB0aGlzLnJlU29ydCgpO1xyXG4gICAgICB0aGlzLmV4cGFuZE5vZGUodGhpcy5hbGxOb2RlW2luZGV4UGFyZW50XS5vYmplY3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ05vIGV4aXN0ZSBlbCBwYWRyZS4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pKSB7XHJcbiAgICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pLm9iamVjdCA9IGl0ZW07XHJcbiAgICAgIHRoaXMucmVTb3J0KCk7XHJcbiAgICAgIGNvbnN0IGluZGV4UGFyZW50OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUuZmluZEluZGV4KFxyXG4gICAgICAgIChub2RlOiBIZWxpc2FOb2RlPFQ+KSA9PiBub2RlLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSA9PT0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSk7XHJcbiAgICAgIGlmIChpbmRleFBhcmVudCA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5leHBhbmROb2RlKHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0ub2JqZWN0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVTb3J0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXRlbXM6IFRbXSA9IHRoaXMuYWxsTm9kZS5tYXAoKG5vZGU6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGUub2JqZWN0KTtcclxuICAgIGl0ZW1zLnNvcnQoKGE6IFQsIGI6IFQpID0+IHRoaXMuc2VydmljZS5jb21wYXJlKGEsIGIpKTtcclxuICAgIGNvbnN0IHByZW9yZGVyOiBUW10gPSB0aGlzLnNvcnRJdGVtcyhpdGVtcyk7XHJcbiAgICBwcmVvcmRlci5mb3JFYWNoKChvYmplY3Q6IFQsIGluZGV4OiBudW1iZXIpID0+IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKG9iamVjdCkucHJlb3JkZXIgPSBpbmRleCArIDEpO1xyXG4gICAgdGhpcy5hbGxOb2RlLnNvcnQoKG5vZGVBOiBIZWxpc2FOb2RlPFQ+LCBub2RlQjogSGVsaXNhTm9kZTxUPikgPT4gbm9kZUEucHJlb3JkZXIgLSBub2RlQi5wcmVvcmRlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==