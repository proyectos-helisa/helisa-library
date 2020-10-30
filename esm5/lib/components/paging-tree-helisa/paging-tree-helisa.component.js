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
        console.log('objects : ', this.visibleObjects);
        console.log('data : ', this.visibleData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hlbGlzYS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYWdpbmctdHJlZS1oZWxpc2EvcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7OztJQUkvRixXQUFRO0lBQ1IsU0FBTTs7Ozs7Ozs7O0FBR1IsOENBUUM7Ozs7Ozs7SUFQQyw2RUFBMkQ7Ozs7SUFFM0QsZ0VBQXFCOzs7O0lBRXJCLHNFQUEyQjs7Ozs7O0lBRTNCLGlFQUE0Qjs7Ozs7O0FBRzlCLHlCQU9DOzs7SUFOQyw0QkFBVTs7SUFDViwyQkFBYzs7SUFDZCxrQ0FBc0I7O0lBQ3RCLDhCQUFrQjs7SUFDbEIsNkJBQWlCOztJQUNqQiw4QkFBaUI7Ozs7OztBQUduQixvQ0FPQzs7O0lBTkMsZ0NBQW1COztJQUNuQiwrQkFBdUI7O0lBQ3ZCLHNDQUErQjs7SUFDL0Isa0NBQTJCOztJQUMzQixpQ0FBMEI7O0lBQzFCLGtDQUEwQjs7Ozs7QUFHNUI7SUFtQkU7UUFaUSxhQUFRLEdBQVcsTUFBTSxDQUFDO1FBQzFCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLGFBQVEsR0FBMEIscUJBQXFCLENBQUMsTUFBTSxDQUFDO1FBQy9ELG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBRzlCLFlBQU8sR0FBeUIsRUFBRSxDQUFDO0lBTTNDLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFmO0lBQ0EsQ0FBQztJQUVELHNCQUNJLDJDQUFJOzs7OztRQURSLFVBQ1MsU0FBZ0M7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSwrREFBd0I7Ozs7O1FBRDVCLFVBQzZCLFlBQXlDO1lBQ3BFLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7OztPQUFBOzs7OztJQUVPLHlDQUFLOzs7O0lBQWI7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztTQUNwRjtJQUNILENBQUM7Ozs7OztJQUVPLDRDQUFROzs7OztJQUFoQixVQUFpQixLQUFVO1FBQTNCLGlCQWdCQztRQWZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBeUIsQ0FBQztRQUNuRCxLQUFLLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBTzs7Z0JBQ2QsSUFBSSxHQUFrQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNqRCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFTyw2Q0FBUzs7Ozs7SUFBakIsVUFBa0IsS0FBVTtRQUE1QixpQkEyQkM7O1lBMUJPLElBQUksR0FBcUIsSUFBSSxHQUFHLEVBQWU7O1lBQy9DLEtBQUssR0FBUSxFQUFFO1FBQ3JCLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFPOztnQkFDZCxRQUFRLEdBQVcsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM5RCxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNiLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUN4QjtnQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtRQUNILENBQUMsRUFBQyxDQUFDOztZQUNHLFFBQVEsR0FBUSxJQUFJLEtBQUssQ0FBSSxLQUFLLENBQUMsTUFBTSxDQUFDOztZQUM1QyxLQUFLLEdBQVcsQ0FBQztRQUNyQixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFDakIsSUFBSSxHQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDM0IsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDOztnQkFDbkIsUUFBUSxHQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUMvRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixLQUFLLElBQUksQ0FBQyxHQUFXLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3JELEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3pCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVPLDhDQUFVOzs7OztJQUFsQixVQUFtQixJQUFPO1FBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3hELE1BQU0sS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDbkM7O1lBQ0ssaUJBQWlCLEdBQWtCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7O1lBQ3JHLGVBQWUsR0FBa0I7WUFDckMsTUFBTSxFQUFFLElBQUk7WUFDWixZQUFZLEVBQUUsS0FBSztZQUNuQixLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUsscUJBQXFCLENBQUMsTUFBTTtZQUN4RCxPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN0RSxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLGlCQUFpQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDdkM7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVNLDBEQUFzQjs7OztJQUE3QixVQUE4QixFQUFVO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVNLHNEQUFrQjs7OztJQUF6QixVQUEwQixJQUFPO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsaURBQWE7Ozs7SUFBYixVQUFjLElBQU87UUFDbkIsT0FBTyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvRixDQUFDOzs7Ozs7SUFFTywwREFBc0I7Ozs7O0lBQTlCLFVBQStCLFFBQVc7UUFBMUMsaUJBNkJDOztZQTVCTyxjQUFjLEdBQVEsRUFBRTtRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQU87WUFDbEMsSUFBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksUUFBUSxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDcEcsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDM0I7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2lCQUM5RTthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQW1CO1lBQ3ZDLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsWUFBWTtnQkFDM0MsQ0FBQyxDQUFDLFFBQVEsSUFBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTs7b0JBQ3JFLFFBQVEsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDckUsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7aUJBQ3JCO3FCQUFNOzt3QkFDQyxpQkFBaUIsR0FBa0IsS0FBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztvQkFDOUUsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLElBQUksaUJBQWlCLENBQUMsUUFBUSxFQUFFO3dCQUMzRCxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7cUJBQ3JCO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsZ0RBQVk7Ozs7SUFBWixVQUFhLElBQU87UUFDbEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzlFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELDhDQUFVOzs7O0lBQVYsVUFBVyxJQUFPO1FBQ2hCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3RSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELGdEQUFZOzs7SUFBWjtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEY7SUFDSCxDQUFDO0lBRUQsc0JBQUksa0RBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCw4Q0FBVTs7OztJQUFWLFVBQVcsSUFBTztRQUFsQixpQkFvQkM7O1lBbkJPLEdBQUcsR0FBZ0IsSUFBSSxHQUFHLEVBQVU7UUFDMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBQ25DLFVBQVUsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7UUFDL0MsVUFBQyxVQUF5QixJQUFLLE9BQUEsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBaEYsQ0FBZ0YsRUFDaEg7O1lBQ0csU0FBUyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFXLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDM0QsVUFBVSxHQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUM1QyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hELEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO2lCQUFNO2dCQUNMLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ2QsTUFBTTthQUNQO1NBQ0Y7O1lBQ0ssWUFBWSxHQUFvQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUM3RixZQUFZLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsV0FBMEIsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQXJFLENBQXFFLEVBQUMsQ0FBQztRQUM1SCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxVQUF5QixFQUFFLEtBQWEsSUFBSyxPQUFBLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBL0IsQ0FBK0IsRUFBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNGLENBQUM7Ozs7O0lBRUQsMkNBQU87Ozs7SUFBUCxVQUFRLElBQU87UUFBZixpQkFTQzs7WUFSTyxXQUFXLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFtQixJQUFLLE9BQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFoRixDQUFnRixFQUFDO1FBQzdKLElBQUksV0FBVyxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxNQUFNLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw4Q0FBVTs7OztJQUFWLFVBQVcsSUFBTztRQUFsQixpQkFZQztRQVhDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Z0JBQ1IsV0FBVyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztZQUNoRCxVQUFDLElBQW1CLElBQUssT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQWhGLENBQWdGLEVBQUM7WUFDNUcsSUFBSSxXQUFXLElBQUksQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVPLDBDQUFNOzs7O0lBQWQ7UUFBQSxpQkFNQzs7WUFMTyxLQUFLLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxJQUFtQixJQUFLLE9BQUEsSUFBSSxDQUFDLE1BQU0sRUFBWCxDQUFXLEVBQUM7UUFDekUsS0FBSyxDQUFDLElBQUk7Ozs7O1FBQUMsVUFBQyxDQUFJLEVBQUUsQ0FBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUExQixDQUEwQixFQUFDLENBQUM7O1lBQ2pELFFBQVEsR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUMzQyxRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLE1BQVMsRUFBRSxLQUFhLElBQUssT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQXBELENBQW9ELEVBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7O1FBQUMsVUFBQyxLQUFvQixFQUFFLEtBQW9CLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQS9CLENBQStCLEVBQUMsQ0FBQztJQUNyRyxDQUFDOztnQkF0T0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDBzQkFBa0Q7O2lCQUVuRDs7Ozs7Z0NBWUUsWUFBWSxTQUFDLGVBQWU7dUJBWTVCLEtBQUs7MkNBTUwsS0FBSzs7SUFxTVIsZ0NBQUM7Q0FBQSxBQXZPRCxJQXVPQztTQWxPWSx5QkFBeUI7Ozs7OztJQUVwQyw2Q0FBa0M7Ozs7O0lBQ2xDLGlEQUFpQzs7Ozs7SUFDakMsZ0RBQWtDOzs7OztJQUNsQyw2Q0FBdUU7Ozs7O0lBQ3ZFLG1EQUFzQzs7Ozs7SUFDdEMsNENBQTZDOzs7OztJQUM3QywrQ0FBK0M7Ozs7O0lBQy9DLDRDQUEyQzs7SUFFM0Msa0RBQ2lFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGVudW0gUGFnaW5nVHJlZUluaXRpYWxNb2RlIHtcclxuICBDT0xMQVBTRSxcclxuICBFWFBBTkRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD4ge1xyXG4gIGdldChsYXN0Q2hpbGRPcmRlcjogbnVtYmVyLCBzaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPFRbXT47XHJcblxyXG4gIGdldElkRmllbGQoKTogc3RyaW5nO1xyXG5cclxuICBnZXRJZFBhcmVudEZpZWxkKCk6IHN0cmluZztcclxuXHJcbiAgY29tcGFyZShhOiBULCBiOiBUKTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSGVsaXNhTm9kZTxUPiB7XHJcbiAgb2JqZWN0OiBUO1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgaGF2ZUNoaWxkcmVuOiBib29sZWFuO1xyXG4gIGV4cGFuZGVkOiBib29sZWFuO1xyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgcHJlb3JkZXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZWxpc2FOb2RlRGF0YTxUPiB7XHJcbiAgcmVhZG9ubHkgb2JqZWN0OiBUO1xyXG4gIHJlYWRvbmx5IGxldmVsOiBudW1iZXI7XHJcbiAgcmVhZG9ubHkgaGF2ZUNoaWxkcmVuOiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IGV4cGFuZGVkOiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IHZpc2libGU6IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgcHJlb3JkZXI6IG51bWJlcjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtcGFnaW5nLXRyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmctdHJlZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BhZ2luZy10cmVlLWhlbGlzYS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luZ1RyZWVIZWxpc2FDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIgPSAyMDAwMDA7XHJcbiAgcHJpdmF0ZSB2aXNpYmxlTGltaXQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSB2aXNpYmxlU2l6ZTogbnVtYmVyID0gMTAwO1xyXG4gIHByaXZhdGUgdHJlZU1vZGU6IFBhZ2luZ1RyZWVJbml0aWFsTW9kZSA9IFBhZ2luZ1RyZWVJbml0aWFsTW9kZS5FWFBBTkQ7XHJcbiAgcHJpdmF0ZSB2aXNpYmxlT2JqZWN0czogQXJyYXk8VD4gPSBbXTtcclxuICBwcml2YXRlIHNlcnZpY2U6IFBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZTxUPjtcclxuICBwcml2YXRlIHNlYXJjaE5vZGU6IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+O1xyXG4gIHByaXZhdGUgYWxsTm9kZTogQXJyYXk8SGVsaXNhTm9kZTxUPj4gPSBbXTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnbm9kZUNvbXBvbmVudCcpXHJcbiAgbm9kZUNvbXBvbmVudDogVGVtcGxhdGVSZWY8eyBkYXRhOiBULCBub2RlOiBIZWxpc2FOb2RlRGF0YTxUPiB9PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1vZGUocGFyYW1Nb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUpIHtcclxuICAgIHRoaXMudHJlZU1vZGUgPSBwYXJhbU1vZGU7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwYWdpbmdUcmVlSGVsaXNhTGlzdGFibGUocGFyYW1TZXJ2aWNlOiBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD4pIHtcclxuICAgIHRoaXMuc2VydmljZSA9IHBhcmFtU2VydmljZTtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5nZXQoMCwgdGhpcy5wYWdlU2l6ZSkuc3Vic2NyaWJlKChpdGVtczogVFtdKSA9PiB0aGlzLmxvYWREYXRhKGl0ZW1zKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWREYXRhKGl0ZW1zOiBUW10pOiB2b2lkIHtcclxuICAgIHRoaXMuc2VhcmNoTm9kZSA9IG5ldyBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PigpO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cyA9IFtdO1xyXG4gICAgdGhpcy5hbGxOb2RlID0gW107XHJcbiAgICBjb25zb2xlLmxvZygnaXRlbXMgOiAnLCBpdGVtcyk7XHJcbiAgICBpdGVtcyA9IHRoaXMuc29ydEl0ZW1zKGl0ZW1zKTtcclxuICAgIGNvbnNvbGUubG9nKCcyaXRlbXMgOiAnLCBpdGVtcyk7XHJcbiAgICB0aGlzLnNlYXJjaE5vZGUgPSBuZXcgTWFwPHN0cmluZywgSGVsaXNhTm9kZTxUPj4oKTtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW06IFQpID0+IHtcclxuICAgICAgY29uc3Qgbm9kZTogSGVsaXNhTm9kZTxUPiA9IHRoaXMuY3JlYXRlTm9kZShpdGVtKTtcclxuICAgICAgdGhpcy5hbGxOb2RlLnB1c2gobm9kZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhudWxsKTtcclxuICAgIGNvbnNvbGUubG9nKCdhbGwgOiAnLCB0aGlzLmFsbE5vZGUpO1xyXG4gICAgY29uc29sZS5sb2coJ29iamVjdHMgOiAnLCB0aGlzLnZpc2libGVPYmplY3RzKTtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIDogJywgdGhpcy52aXNpYmxlRGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNvcnRJdGVtcyhpdGVtczogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IGxBZHk6IE1hcDxzdHJpbmcsIFRbXT4gPSBuZXcgTWFwPHN0cmluZywgVFtdPigpO1xyXG4gICAgY29uc3Qgc3RhY2s6IFRbXSA9IFtdO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogVCkgPT4ge1xyXG4gICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcclxuICAgICAgaWYgKCFpZFBhcmVudCkge1xyXG4gICAgICAgIHN0YWNrLnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFsQWR5LmhhcyhpZFBhcmVudCkpIHtcclxuICAgICAgICAgIGxBZHkuc2V0KGlkUGFyZW50LCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxBZHkuZ2V0KGlkUGFyZW50KS5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlOiBUW10gPSBuZXcgQXJyYXk8VD4oaXRlbXMubGVuZ3RoKTtcclxuICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxhc3Q6IFQgPSBzdGFjay5wb3AoKTtcclxuICAgICAgcmVzcG9uc2VbaW5kZXgrK10gPSBsYXN0O1xyXG4gICAgICBjb25zdCBjaGlsZHJlbjogVFtdID0gbEFkeS5nZXQobGFzdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTm9kZShpdGVtOiBUKTogSGVsaXNhTm9kZTxUPiB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hOb2RlLmhhcyhpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignWWEgZXhpc3RlIGVsIG5vZG8uJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJlbnRJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgIGNvbnN0IG5vZGVJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHtcclxuICAgICAgb2JqZWN0OiBpdGVtLFxyXG4gICAgICBoYXZlQ2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICBsZXZlbDogcGFyZW50SW5mb3JtYXRpb24gPyBwYXJlbnRJbmZvcm1hdGlvbi5sZXZlbCArIDEgOiAwLFxyXG4gICAgICBleHBhbmRlZDogdGhpcy50cmVlTW9kZSA9PT0gUGFnaW5nVHJlZUluaXRpYWxNb2RlLkVYUEFORCxcclxuICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByZW9yZGVyOiB0aGlzLnNlYXJjaE5vZGUuc2l6ZSArIDEsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlLnNldChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldLCBub2RlSW5mb3JtYXRpb24pO1xyXG4gICAgaWYgKHBhcmVudEluZm9ybWF0aW9uKSB7XHJcbiAgICAgIHBhcmVudEluZm9ybWF0aW9uLmhhdmVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZUluZm9ybWF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQ6IHN0cmluZyk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgY29uc29sZS5sb2coXCJwaW5jaGUgaWQgcXVlIG5vIGZ1bmNpb25hIFwiICwgaWQpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTm9kZS5nZXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5vZGVJbmZvcm1hdGlvbihpdGVtOiBUKTogSGVsaXNhTm9kZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hOb2RlLmdldChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcclxuICB9XHJcblxyXG4gIGdldExldmVsQ2xhc3MoaXRlbTogVCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3BhZGRpbmctbGV2ZWwtJyArIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5sZXZlbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZE5leHRWaXNpYmxlT2JqZWN0cyhub2RlRnJvbTogVCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmlzaWJsZU9iamVjdHM6IFRbXSA9IFtdO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cy5mb3JFYWNoKChpdGVtOiBUKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xyXG4gICAgICAgIGlmIChub2RlRnJvbSAmJiB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihub2RlRnJvbSkucHJlb3JkZXIgPj0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkucHJlb3JkZXIpIHtcclxuICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlzaWJsZUxpbWl0ID0gdmlzaWJsZU9iamVjdHMubGVuZ3RoICsgdGhpcy52aXNpYmxlU2l6ZTtcclxuICAgIHRoaXMuYWxsTm9kZS5mb3JFYWNoKChpdGVtOiBIZWxpc2FOb2RlPFQ+KSA9PiB7XHJcbiAgICAgIGlmICh2aXNpYmxlT2JqZWN0cy5sZW5ndGggPCB0aGlzLnZpc2libGVMaW1pdCAmJlxyXG4gICAgICAgICghbm9kZUZyb20gfHwgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24obm9kZUZyb20pLnByZW9yZGVyIDwgaXRlbS5wcmVvcmRlcikpIHtcclxuICAgICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gaXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV07XHJcbiAgICAgICAgaWYgKCFpZFBhcmVudCkge1xyXG4gICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtLm9iamVjdCk7XHJcbiAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJlbnRJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZFBhcmVudCk7XHJcbiAgICAgICAgICBpZiAocGFyZW50SW5mb3JtYXRpb24udmlzaWJsZSAmJiBwYXJlbnRJbmZvcm1hdGlvbi5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0ub2JqZWN0KTtcclxuICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cyA9IHZpc2libGVPYmplY3RzO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VOb2RlKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kTm9kZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd05leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHModGhpcy52aXNpYmxlT2JqZWN0c1t0aGlzLnZpc2libGVPYmplY3RzLmxlbmd0aCAtIDFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB2aXNpYmxlRGF0YSgpOiBSZWFkb25seUFycmF5PFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnZpc2libGVPYmplY3RzO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZXQ6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBzZXQuYWRkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xyXG4gICAgY29uc3QgYmVnaW5JbmRleDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcclxuICAgICAgKGl0ZW1TZWFyY2g6IEhlbGlzYU5vZGU8VD4pID0+IGl0ZW1TZWFyY2gub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldXHJcbiAgICApO1xyXG4gICAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IGJlZ2luSW5kZXggKyAxOyBpIDwgdGhpcy5hbGxOb2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1TZWFyY2g6IFQgPSB0aGlzLmFsbE5vZGVbaV0ub2JqZWN0O1xyXG4gICAgICBpZiAoc2V0LmhhcyhpdGVtU2VhcmNoW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKSkge1xyXG4gICAgICAgIHNldC5hZGQoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGFzdEluZGV4ID0gaTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGVsZXRlZEl0ZW1zOiBIZWxpc2FOb2RlPFQ+W10gPSB0aGlzLmFsbE5vZGUuc3BsaWNlKGJlZ2luSW5kZXgsIGxhc3RJbmRleCAtIGJlZ2luSW5kZXgpO1xyXG4gICAgZGVsZXRlZEl0ZW1zLmZvckVhY2goKGRlbGV0ZWRJdGVtOiBIZWxpc2FOb2RlPFQ+KSA9PiB0aGlzLnNlYXJjaE5vZGUuZGVsZXRlKGRlbGV0ZWRJdGVtLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkpO1xyXG4gICAgdGhpcy5hbGxOb2RlLmZvckVhY2goKHNlYXJjaEl0ZW06IEhlbGlzYU5vZGU8VD4sIGluZGV4OiBudW1iZXIpID0+IHNlYXJjaEl0ZW0ucHJlb3JkZXIgPSBpbmRleCArIDEpO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGJlZ2luSW5kZXggPiAwID8gdGhpcy5hbGxOb2RlW2JlZ2luSW5kZXggLSAxXS5vYmplY3QgOiBudWxsKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXhQYXJlbnQ6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoKG5vZGU6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGUub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgIGlmIChpbmRleFBhcmVudCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuYWxsTm9kZS5wdXNoKHRoaXMuY3JlYXRlTm9kZShpdGVtKSk7XHJcbiAgICAgIHRoaXMucmVTb3J0KCk7XHJcbiAgICAgIHRoaXMuZXhwYW5kTm9kZSh0aGlzLmFsbE5vZGVbaW5kZXhQYXJlbnRdLm9iamVjdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFcnJvcignTm8gZXhpc3RlIGVsIHBhZHJlLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSXRlbShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkpIHtcclxuICAgICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkub2JqZWN0ID0gaXRlbTtcclxuICAgICAgdGhpcy5yZVNvcnQoKTtcclxuICAgICAgY29uc3QgaW5kZXhQYXJlbnQ6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoXHJcbiAgICAgICAgKG5vZGU6IEhlbGlzYU5vZGU8VD4pID0+IG5vZGUub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgICAgaWYgKGluZGV4UGFyZW50ID49IDApIHtcclxuICAgICAgICB0aGlzLmV4cGFuZE5vZGUodGhpcy5hbGxOb2RlW2luZGV4UGFyZW50XS5vYmplY3QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZVNvcnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpdGVtczogVFtdID0gdGhpcy5hbGxOb2RlLm1hcCgobm9kZTogSGVsaXNhTm9kZTxUPikgPT4gbm9kZS5vYmplY3QpO1xyXG4gICAgaXRlbXMuc29ydCgoYTogVCwgYjogVCkgPT4gdGhpcy5zZXJ2aWNlLmNvbXBhcmUoYSwgYikpO1xyXG4gICAgY29uc3QgcHJlb3JkZXI6IFRbXSA9IHRoaXMuc29ydEl0ZW1zKGl0ZW1zKTtcclxuICAgIHByZW9yZGVyLmZvckVhY2goKG9iamVjdDogVCwgaW5kZXg6IG51bWJlcikgPT4gdGhpcy5nZXROb2RlSW5mb3JtYXRpb24ob2JqZWN0KS5wcmVvcmRlciA9IGluZGV4ICsgMSk7XHJcbiAgICB0aGlzLmFsbE5vZGUuc29ydCgobm9kZUE6IEhlbGlzYU5vZGU8VD4sIG5vZGVCOiBIZWxpc2FOb2RlPFQ+KSA9PiBub2RlQS5wcmVvcmRlciAtIG5vZGVCLnByZW9yZGVyKTtcclxuICB9XHJcbn1cclxuIl19