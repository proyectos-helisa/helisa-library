import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
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
PagingTreeHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-paging-tree',
                template: "<div>\r\n  <div *ngFor=\"let item of visibleData\" [ngClass]=\"this.getLevelClass(item)\" class=\"w-100\">\r\n    <div *ngIf=\"getNodeInformation(item).visible\">\r\n      <div *ngIf=\"getNodeInformation(item) as node\" class=\"helisa-tree-row w-100\">\r\n        <div [ngClass]=\"{expandNode: !node.expanded && node.haveChildren, withoutNode: !node.haveChildren}\">\r\n          <mat-icon *ngIf=\"!node.expanded && node.haveChildren\" (click)=\"expandNode(item)\">add</mat-icon>\r\n          <mat-icon *ngIf=\"node.expanded && node.haveChildren\" (click)=\"collapseNode(item)\">remove</mat-icon>\r\n          <mat-icon *ngIf=\"!node.haveChildren\"></mat-icon>\r\n        </div>\r\n        <ng-container [ngTemplateOutlet]=\"nodeComponent\" [ngTemplateOutletContext]=\"{data: item, node: node}\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".w-100{width:100%}.padding-level-0{margin-left:0}.padding-level-1{margin-left:40px}.padding-level-2{margin-left:80px}.padding-level-3{margin-left:120px}.padding-level-4{margin-left:160px}.padding-level-5{margin-left:200px}.padding-level-6{margin-left:240px}.padding-level-7{margin-left:280px}.padding-level-8{margin-left:320px}.helisa-tree-row{align-items:center;display:flex;flex-direction:row}"]
            },] }
];
PagingTreeHelisaComponent.ctorParameters = () => [];
PagingTreeHelisaComponent.propDecorators = {
    afterLoadData: [{ type: Output }],
    nodeComponent: [{ type: ContentChild, args: ['nodeComponent',] }],
    mode: [{ type: Input }],
    pagingTreeHelisaListable: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3BhZ2luZy10cmVlLWhlbGlzYS9wYWdpbmctdHJlZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUd6SCxNQUFNLENBQU4sSUFBWSxxQkFHWDtBQUhELFdBQVkscUJBQXFCO0lBQy9CLHlFQUFRLENBQUE7SUFDUixxRUFBTSxDQUFBO0FBQ1IsQ0FBQyxFQUhXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFHaEM7QUFtQ0QsTUFBTSxPQUFPLHlCQUF5QjtJQWlCcEM7UUFmUSxhQUFRLEdBQVcsTUFBTSxDQUFDO1FBQzFCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLGFBQVEsR0FBMEIscUJBQXFCLENBQUMsTUFBTSxDQUFDO1FBQy9ELG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBRzlCLFlBQU8sR0FBeUIsRUFBRSxDQUFDO1FBRzNDLGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFNN0QsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtJQUNmLENBQUM7SUFFRCxJQUNJLElBQUksQ0FBQyxTQUFnQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsSUFDSSx3QkFBd0IsQ0FBQyxZQUF5QztRQUNwRSxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVUsRUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzFGO0lBQ0gsQ0FBQztJQUVPLFFBQVEsQ0FBQyxLQUFVO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBeUIsQ0FBQztRQUNuRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBTyxFQUFRLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEdBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8sU0FBUyxDQUFDLEtBQVU7UUFDMUIsTUFBTSxJQUFJLEdBQXFCLElBQUksR0FBRyxFQUFlLENBQUM7UUFDdEQsTUFBTSxLQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFPLEVBQVEsRUFBRTtZQUM5QixNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDYixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sUUFBUSxHQUFRLElBQUksS0FBSyxDQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7UUFDdEIsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixNQUFNLElBQUksR0FBTSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDNUIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE1BQU0sUUFBUSxHQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksUUFBUSxFQUFFO2dCQUNaLEtBQUssSUFBSSxDQUFDLEdBQVcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDckQsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDekI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVPLFVBQVUsQ0FBQyxJQUFPO1FBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3hELE1BQU0sS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDbkM7UUFDRCxNQUFNLGlCQUFpQixHQUFrQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUcsTUFBTSxlQUFlLEdBQWtCO1lBQ3JDLE1BQU0sRUFBRSxJQUFJO1lBQ1osWUFBWSxFQUFFLEtBQUs7WUFDbkIsS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLHFCQUFxQixDQUFDLE1BQU07WUFDeEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUNuQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN0RSxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLGlCQUFpQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDdkM7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRU0sc0JBQXNCLENBQUMsRUFBVTtRQUN0QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxJQUFPO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxhQUFhLENBQUMsSUFBTztRQUNuQixPQUFPLGdCQUFnQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQy9GLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxRQUFXO1FBQ3hDLE1BQU0sY0FBYyxHQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQU8sRUFBUSxFQUFFO1lBQzVDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7b0JBQ3BHLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzNCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztpQkFDOUU7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFtQixFQUFRLEVBQUU7WUFDakQsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZO2dCQUMzQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMzRSxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsTUFBTSxpQkFBaUIsR0FBa0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMvRSxJQUFJLGlCQUFpQixDQUFDLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU7d0JBQzNELGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztxQkFDckI7aUJBQ0Y7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFPO1FBQ2xCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUM5RSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFPO1FBQ2hCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3RSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQU87UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELFVBQVUsQ0FBQyxFQUFVO1FBQ25CLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sUUFBUSxHQUFXLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7WUFDakcsTUFBTSxHQUFHLEdBQWdCLElBQUksR0FBRyxFQUFVLENBQUM7WUFDM0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNaLE1BQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUMvQyxDQUFDLFVBQXlCLEVBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FDNUYsQ0FBQztZQUNGLElBQUksU0FBUyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzVDLEtBQUssSUFBSSxDQUFDLEdBQVcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pFLE1BQU0sVUFBVSxHQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUM3QyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQ3hELEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNoRDtxQkFBTTtvQkFDTCxTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUNkLE1BQU07aUJBQ1A7YUFDRjtZQUNELE1BQU0sWUFBWSxHQUFvQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQzlGLElBQUksa0JBQWtCLEdBQVksS0FBSyxDQUFDO1lBQ3hDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUEwQixFQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUF5QixFQUFFLEtBQWEsRUFBUSxFQUFFO2dCQUN0RSxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ25FLGtCQUFrQixHQUFHLElBQUksQ0FBQztpQkFDM0I7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7YUFDekU7WUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxRjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsSUFBTztRQUNiLE1BQU0sV0FBVyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBbUIsRUFBVyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkssSUFBSSxXQUFXLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxNQUFNLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFPO1FBQ2hCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLE1BQU0sV0FBVyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUNoRCxDQUFDLElBQW1CLEVBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RILElBQUksV0FBVyxJQUFJLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25EO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztTQUNGO0lBQ0gsQ0FBQztJQUVPLE1BQU07UUFDWixNQUFNLEtBQUssR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQW1CLEVBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBSSxFQUFFLENBQUksRUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxRQUFRLEdBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBUyxFQUFFLEtBQWEsRUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFvQixFQUFFLEtBQW9CLEVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdHLENBQUM7OztZQXRQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsKzJCQUFrRDs7YUFFbkQ7Ozs7NEJBWUUsTUFBTTs0QkFHTixZQUFZLFNBQUMsZUFBZTttQkFZNUIsS0FBSzt1Q0FNTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgZW51bSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUge1xyXG4gIENPTExBUFNFLFxyXG4gIEVYUEFORFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZTxUPiB7XHJcbiAgZ2V0KGxhc3RDaGlsZE9yZGVyOiBudW1iZXIsIHNpemU6IG51bWJlcik6IE9ic2VydmFibGU8VFtdPjtcclxuXHJcbiAgZ2V0SWRGaWVsZCgpOiBzdHJpbmc7XHJcblxyXG4gIGdldElkUGFyZW50RmllbGQoKTogc3RyaW5nO1xyXG5cclxuICBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBIZWxpc2FOb2RlPFQ+IHtcclxuICBvYmplY3Q6IFQ7XHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuICBoYXZlQ2hpbGRyZW46IGJvb2xlYW47XHJcbiAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBwcmVvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhlbGlzYU5vZGVEYXRhPFQ+IHtcclxuICByZWFkb25seSBvYmplY3Q6IFQ7XHJcbiAgcmVhZG9ubHkgbGV2ZWw6IG51bWJlcjtcclxuICByZWFkb25seSBoYXZlQ2hpbGRyZW46IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgdmlzaWJsZTogYm9vbGVhbjtcclxuICByZWFkb25seSBwcmVvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC1wYWdpbmctdHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luZy10cmVlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnaW5nVHJlZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgcGFnZVNpemU6IG51bWJlciA9IDIwMDAwMDtcclxuICBwcml2YXRlIHZpc2libGVMaW1pdDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHZpc2libGVTaXplOiBudW1iZXIgPSAxMDA7XHJcbiAgcHJpdmF0ZSB0cmVlTW9kZTogUGFnaW5nVHJlZUluaXRpYWxNb2RlID0gUGFnaW5nVHJlZUluaXRpYWxNb2RlLkVYUEFORDtcclxuICBwcml2YXRlIHZpc2libGVPYmplY3RzOiBBcnJheTxUPiA9IFtdO1xyXG4gIHByaXZhdGUgc2VydmljZTogUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+O1xyXG4gIHByaXZhdGUgc2VhcmNoTm9kZTogTWFwPHN0cmluZywgSGVsaXNhTm9kZTxUPj47XHJcbiAgcHJpdmF0ZSBhbGxOb2RlOiBBcnJheTxIZWxpc2FOb2RlPFQ+PiA9IFtdO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBhZnRlckxvYWREYXRhOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ25vZGVDb21wb25lbnQnKVxyXG4gIG5vZGVDb21wb25lbnQ6IFRlbXBsYXRlUmVmPHsgZGF0YTogVCwgbm9kZTogSGVsaXNhTm9kZURhdGE8VD4gfT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBtb2RlKHBhcmFtTW9kZTogUGFnaW5nVHJlZUluaXRpYWxNb2RlKSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlID0gcGFyYW1Nb2RlO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlKHBhcmFtU2VydmljZTogUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+KSB7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBwYXJhbVNlcnZpY2U7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5nZXQoMCwgdGhpcy5wYWdlU2l6ZSkuc3Vic2NyaWJlKChpdGVtczogVFtdKTogdm9pZCA9PiB0aGlzLmxvYWREYXRhKGl0ZW1zKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWREYXRhKGl0ZW1zOiBUW10pOiB2b2lkIHtcclxuICAgIHRoaXMuc2VhcmNoTm9kZSA9IG5ldyBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PigpO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cyA9IFtdO1xyXG4gICAgdGhpcy5hbGxOb2RlID0gW107XHJcbiAgICBpdGVtcyA9IHRoaXMuc29ydEl0ZW1zKGl0ZW1zKTtcclxuICAgIHRoaXMuc2VhcmNoTm9kZSA9IG5ldyBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PigpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogVCk6IHZvaWQgPT4ge1xyXG4gICAgICBjb25zdCBub2RlOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5jcmVhdGVOb2RlKGl0ZW0pO1xyXG4gICAgICB0aGlzLmFsbE5vZGUucHVzaChub2RlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZVNvcnQoKTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhudWxsKTtcclxuICAgIHRoaXMuYWZ0ZXJMb2FkRGF0YS5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNvcnRJdGVtcyhpdGVtczogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IGxBZHk6IE1hcDxzdHJpbmcsIFRbXT4gPSBuZXcgTWFwPHN0cmluZywgVFtdPigpO1xyXG4gICAgY29uc3Qgc3RhY2s6IFRbXSA9IFtdO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogVCk6IHZvaWQgPT4ge1xyXG4gICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcclxuICAgICAgaWYgKCFpZFBhcmVudCkge1xyXG4gICAgICAgIHN0YWNrLnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFsQWR5LmhhcyhpZFBhcmVudCkpIHtcclxuICAgICAgICAgIGxBZHkuc2V0KGlkUGFyZW50LCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxBZHkuZ2V0KGlkUGFyZW50KS5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlOiBUW10gPSBuZXcgQXJyYXk8VD4oaXRlbXMubGVuZ3RoKTtcclxuICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxhc3Q6IFQgPSBzdGFjay5wb3AoKTtcclxuICAgICAgcmVzcG9uc2VbaW5kZXgrK10gPSBsYXN0O1xyXG4gICAgICBjb25zdCBjaGlsZHJlbjogVFtdID0gbEFkeS5nZXQobGFzdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTm9kZShpdGVtOiBUKTogSGVsaXNhTm9kZTxUPiB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hOb2RlLmhhcyhpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignWWEgZXhpc3RlIGVsIG5vZG8uJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJlbnRJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgIGNvbnN0IG5vZGVJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHtcclxuICAgICAgb2JqZWN0OiBpdGVtLFxyXG4gICAgICBoYXZlQ2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICBsZXZlbDogcGFyZW50SW5mb3JtYXRpb24gPyBwYXJlbnRJbmZvcm1hdGlvbi5sZXZlbCArIDEgOiAwLFxyXG4gICAgICBleHBhbmRlZDogdGhpcy50cmVlTW9kZSA9PT0gUGFnaW5nVHJlZUluaXRpYWxNb2RlLkVYUEFORCxcclxuICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByZW9yZGVyOiB0aGlzLnNlYXJjaE5vZGUuc2l6ZSArIDEsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlLnNldChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldLCBub2RlSW5mb3JtYXRpb24pO1xyXG4gICAgaWYgKHBhcmVudEluZm9ybWF0aW9uKSB7XHJcbiAgICAgIHBhcmVudEluZm9ybWF0aW9uLmhhdmVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZUluZm9ybWF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQ6IHN0cmluZyk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTm9kZS5nZXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5vZGVJbmZvcm1hdGlvbihpdGVtOiBUKTogSGVsaXNhTm9kZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hOb2RlLmdldChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcclxuICB9XHJcblxyXG4gIGdldExldmVsQ2xhc3MoaXRlbTogVCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3BhZGRpbmctbGV2ZWwtJyArIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5sZXZlbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZE5leHRWaXNpYmxlT2JqZWN0cyhub2RlRnJvbTogVCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmlzaWJsZU9iamVjdHM6IFRbXSA9IFtdO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cy5mb3JFYWNoKChpdGVtOiBUKTogdm9pZCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xyXG4gICAgICAgIGlmIChub2RlRnJvbSAmJiB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihub2RlRnJvbSkucHJlb3JkZXIgPj0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkucHJlb3JkZXIpIHtcclxuICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlzaWJsZUxpbWl0ID0gdmlzaWJsZU9iamVjdHMubGVuZ3RoICsgdGhpcy52aXNpYmxlU2l6ZTtcclxuICAgIHRoaXMuYWxsTm9kZS5mb3JFYWNoKChpdGVtOiBIZWxpc2FOb2RlPFQ+KTogdm9pZCA9PiB7XHJcbiAgICAgIGlmICh2aXNpYmxlT2JqZWN0cy5sZW5ndGggPCB0aGlzLnZpc2libGVMaW1pdCAmJlxyXG4gICAgICAgICghbm9kZUZyb20gfHwgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24obm9kZUZyb20pLnByZW9yZGVyIDwgaXRlbS5wcmVvcmRlcikpIHtcclxuICAgICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gaXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV07XHJcbiAgICAgICAgaWYgKCFpZFBhcmVudCkge1xyXG4gICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtLm9iamVjdCk7XHJcbiAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJlbnRJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZFBhcmVudCk7XHJcbiAgICAgICAgICBpZiAocGFyZW50SW5mb3JtYXRpb24udmlzaWJsZSAmJiBwYXJlbnRJbmZvcm1hdGlvbi5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0ub2JqZWN0KTtcclxuICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cyA9IHZpc2libGVPYmplY3RzO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VOb2RlKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kTm9kZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd05leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHModGhpcy52aXNpYmxlT2JqZWN0c1t0aGlzLnZpc2libGVPYmplY3RzLmxlbmd0aCAtIDFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB2aXNpYmxlRGF0YSgpOiBSZWFkb25seUFycmF5PFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnZpc2libGVPYmplY3RzO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVCeUlkKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQpKSB7XHJcbiAgICAgIGNvbnN0IGlkUGFyZW50OiBzdHJpbmcgPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQpLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcclxuICAgICAgY29uc3Qgc2V0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgICBzZXQuYWRkKGlkKTtcclxuICAgICAgY29uc3QgYmVnaW5JbmRleDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcclxuICAgICAgICAoaXRlbVNlYXJjaDogSGVsaXNhTm9kZTxUPik6IGJvb2xlYW4gPT4gaXRlbVNlYXJjaC5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGlkXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBsYXN0SW5kZXg6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGJlZ2luSW5kZXggKyAxOyBpIDwgdGhpcy5hbGxOb2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbVNlYXJjaDogVCA9IHRoaXMuYWxsTm9kZVtpXS5vYmplY3Q7XHJcbiAgICAgICAgaWYgKHNldC5oYXMoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSkpIHtcclxuICAgICAgICAgIHNldC5hZGQoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxhc3RJbmRleCA9IGk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGVsZXRlZEl0ZW1zOiBIZWxpc2FOb2RlPFQ+W10gPSB0aGlzLmFsbE5vZGUuc3BsaWNlKGJlZ2luSW5kZXgsIGxhc3RJbmRleCAtIGJlZ2luSW5kZXgpO1xyXG4gICAgICBsZXQgcGFyZW50SGF2ZUNoaWxkcmVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgIGRlbGV0ZWRJdGVtcy5mb3JFYWNoKChkZWxldGVkSXRlbTogSGVsaXNhTm9kZTxUPik6IGJvb2xlYW4gPT4gdGhpcy5zZWFyY2hOb2RlLmRlbGV0ZShkZWxldGVkSXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pKTtcclxuICAgICAgdGhpcy5hbGxOb2RlLmZvckVhY2goKHNlYXJjaEl0ZW06IEhlbGlzYU5vZGU8VD4sIGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICBzZWFyY2hJdGVtLnByZW9yZGVyID0gaW5kZXggKyAxO1xyXG4gICAgICAgIGlmIChzZWFyY2hJdGVtLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSA9PT0gaWRQYXJlbnQpIHtcclxuICAgICAgICAgIHBhcmVudEhhdmVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGlkUGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkUGFyZW50KS5oYXZlQ2hpbGRyZW4gPSBwYXJlbnRIYXZlQ2hpbGRyZW47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGJlZ2luSW5kZXggPiAwID8gdGhpcy5hbGxOb2RlW2JlZ2luSW5kZXggLSAxXS5vYmplY3QgOiBudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXhQYXJlbnQ6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoKG5vZGU6IEhlbGlzYU5vZGU8VD4pOiBib29sZWFuID0+IG5vZGUub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgIGlmIChpbmRleFBhcmVudCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuYWxsTm9kZS5wdXNoKHRoaXMuY3JlYXRlTm9kZShpdGVtKSk7XHJcbiAgICAgIHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0uaGF2ZUNoaWxkcmVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZVNvcnQoKTtcclxuICAgICAgdGhpcy5leHBhbmROb2RlKHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0ub2JqZWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdObyBleGlzdGUgZWwgcGFkcmUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJdGVtKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xyXG4gICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKS5vYmplY3QgPSBpdGVtO1xyXG4gICAgICB0aGlzLnJlU29ydCgpO1xyXG4gICAgICBjb25zdCBpbmRleFBhcmVudDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcclxuICAgICAgICAobm9kZTogSGVsaXNhTm9kZTxUPik6IGJvb2xlYW4gPT4gbm9kZS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xyXG4gICAgICBpZiAoaW5kZXhQYXJlbnQgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kTm9kZSh0aGlzLmFsbE5vZGVbaW5kZXhQYXJlbnRdLm9iamVjdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlU29ydCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW1zOiBUW10gPSB0aGlzLmFsbE5vZGUubWFwKChub2RlOiBIZWxpc2FOb2RlPFQ+KTogVCA9PiBub2RlLm9iamVjdCk7XHJcbiAgICBpdGVtcy5zb3J0KChhOiBULCBiOiBUKTogbnVtYmVyID0+IHRoaXMuc2VydmljZS5jb21wYXJlKGEsIGIpKTtcclxuICAgIGNvbnN0IHByZW9yZGVyOiBUW10gPSB0aGlzLnNvcnRJdGVtcyhpdGVtcyk7XHJcbiAgICBwcmVvcmRlci5mb3JFYWNoKChvYmplY3Q6IFQsIGluZGV4OiBudW1iZXIpOiBudW1iZXIgPT4gdGhpcy5nZXROb2RlSW5mb3JtYXRpb24ob2JqZWN0KS5wcmVvcmRlciA9IGluZGV4ICsgMSk7XHJcbiAgICB0aGlzLmFsbE5vZGUuc29ydCgobm9kZUE6IEhlbGlzYU5vZGU8VD4sIG5vZGVCOiBIZWxpc2FOb2RlPFQ+KTogbnVtYmVyID0+IG5vZGVBLnByZW9yZGVyIC0gbm9kZUIucHJlb3JkZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=