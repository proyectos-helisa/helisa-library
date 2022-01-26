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
                template: "<div>\r\n  <ng-container [ngTemplateOutlet]=\"nodeTitle\"></ng-container>\r\n  <div *ngFor=\"let item of visibleData\" [ngClass]=\"this.getLevelClass(item)\" class=\"w-100\">\r\n    <div *ngIf=\"getNodeInformation(item).visible\">\r\n      <div *ngIf=\"getNodeInformation(item) as node\" class=\"helisa-tree-row w-100\">\r\n        <div [ngClass]=\"{expandNode: !node.expanded && node.haveChildren, withoutNode: !node.haveChildren}\">\r\n          <mat-icon *ngIf=\"!node.expanded && node.haveChildren\" (click)=\"expandNode(item)\">add</mat-icon>\r\n          <mat-icon *ngIf=\"node.expanded && node.haveChildren\" (click)=\"collapseNode(item)\">remove</mat-icon>\r\n          <mat-icon *ngIf=\"!node.haveChildren\"></mat-icon>\r\n        </div>\r\n        <ng-container [ngTemplateOutlet]=\"nodeComponent\" [ngTemplateOutletContext]=\"{data: item, node: node}\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".w-100{width:100%}.padding-level-0{margin-left:0}.padding-level-1{margin-left:40px}.padding-level-2{margin-left:80px}.padding-level-3{margin-left:120px}.padding-level-4{margin-left:160px}.padding-level-5{margin-left:200px}.padding-level-6{margin-left:240px}.padding-level-7{margin-left:280px}.padding-level-8{margin-left:320px}.helisa-tree-row{align-items:center;display:flex;flex-direction:row}"]
            },] }
];
PagingTreeHelisaComponent.ctorParameters = () => [];
PagingTreeHelisaComponent.propDecorators = {
    afterLoadData: [{ type: Output }],
    nodeComponent: [{ type: ContentChild, args: ['nodeComponent',] }],
    nodeTitle: [{ type: ContentChild, args: ['nodeTitle',] }],
    mode: [{ type: Input }],
    pagingTreeHelisaListable: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3BhZ2luZy10cmVlLWhlbGlzYS9wYWdpbmctdHJlZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUd6SCxNQUFNLENBQU4sSUFBWSxxQkFHWDtBQUhELFdBQVkscUJBQXFCO0lBQy9CLHlFQUFRLENBQUE7SUFDUixxRUFBTSxDQUFBO0FBQ1IsQ0FBQyxFQUhXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFHaEM7QUFtQ0QsTUFBTSxPQUFPLHlCQUF5QjtJQW9CcEM7UUFsQlEsYUFBUSxHQUFXLE1BQU0sQ0FBQztRQUMxQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixhQUFRLEdBQTBCLHFCQUFxQixDQUFDLE1BQU0sQ0FBQztRQUMvRCxtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUc5QixZQUFPLEdBQXlCLEVBQUUsQ0FBQztRQUczQyxrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBUzdELENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELGVBQWU7SUFDZixDQUFDO0lBRUQsSUFDSSxJQUFJLENBQUMsU0FBZ0M7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQ0ksd0JBQXdCLENBQUMsWUFBeUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2Ys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LFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG03QkFBa0Q7O2FBRW5EOzs7OzRCQVlFLE1BQU07NEJBR04sWUFBWSxTQUFDLGVBQWU7d0JBRzVCLFlBQVksU0FBQyxXQUFXO21CQVl4QixLQUFLO3VDQU1MLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBlbnVtIFBhZ2luZ1RyZWVJbml0aWFsTW9kZSB7XHJcbiAgQ09MTEFQU0UsXHJcbiAgRVhQQU5EXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+IHtcclxuICBnZXQobGFzdENoaWxkT3JkZXI6IG51bWJlciwgc2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxUW10+O1xyXG5cclxuICBnZXRJZEZpZWxkKCk6IHN0cmluZztcclxuXHJcbiAgZ2V0SWRQYXJlbnRGaWVsZCgpOiBzdHJpbmc7XHJcblxyXG4gIGNvbXBhcmUoYTogVCwgYjogVCk6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEhlbGlzYU5vZGU8VD4ge1xyXG4gIG9iamVjdDogVDtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGhhdmVDaGlsZHJlbjogYm9vbGVhbjtcclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHByZW9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVsaXNhTm9kZURhdGE8VD4ge1xyXG4gIHJlYWRvbmx5IG9iamVjdDogVDtcclxuICByZWFkb25seSBsZXZlbDogbnVtYmVyO1xyXG4gIHJlYWRvbmx5IGhhdmVDaGlsZHJlbjogYm9vbGVhbjtcclxuICByZWFkb25seSBleHBhbmRlZDogYm9vbGVhbjtcclxuICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IHByZW9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLXBhZ2luZy10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmctdHJlZS1oZWxpc2EuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmdUcmVlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyID0gMjAwMDAwO1xyXG4gIHByaXZhdGUgdmlzaWJsZUxpbWl0OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgdmlzaWJsZVNpemU6IG51bWJlciA9IDEwMDtcclxuICBwcml2YXRlIHRyZWVNb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUgPSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUuRVhQQU5EO1xyXG4gIHByaXZhdGUgdmlzaWJsZU9iamVjdHM6IEFycmF5PFQ+ID0gW107XHJcbiAgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD47XHJcbiAgcHJpdmF0ZSBzZWFyY2hOb2RlOiBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PjtcclxuICBwcml2YXRlIGFsbE5vZGU6IEFycmF5PEhlbGlzYU5vZGU8VD4+ID0gW107XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGFmdGVyTG9hZERhdGE6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnbm9kZUNvbXBvbmVudCcpXHJcbiAgbm9kZUNvbXBvbmVudDogVGVtcGxhdGVSZWY8eyBkYXRhOiBULCBub2RlOiBIZWxpc2FOb2RlRGF0YTxUPiB9PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZCgnbm9kZVRpdGxlJylcclxuICBub2RlVGl0bGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBtb2RlKHBhcmFtTW9kZTogUGFnaW5nVHJlZUluaXRpYWxNb2RlKSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlID0gcGFyYW1Nb2RlO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlKHBhcmFtU2VydmljZTogUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+KSB7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBwYXJhbVNlcnZpY2U7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5nZXQoMCwgdGhpcy5wYWdlU2l6ZSkuc3Vic2NyaWJlKChpdGVtczogVFtdKTogdm9pZCA9PiB0aGlzLmxvYWREYXRhKGl0ZW1zKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWREYXRhKGl0ZW1zOiBUW10pOiB2b2lkIHtcclxuICAgIHRoaXMuc2VhcmNoTm9kZSA9IG5ldyBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PigpO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cyA9IFtdO1xyXG4gICAgdGhpcy5hbGxOb2RlID0gW107XHJcbiAgICBpdGVtcyA9IHRoaXMuc29ydEl0ZW1zKGl0ZW1zKTtcclxuICAgIHRoaXMuc2VhcmNoTm9kZSA9IG5ldyBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PigpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogVCk6IHZvaWQgPT4ge1xyXG4gICAgICBjb25zdCBub2RlOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5jcmVhdGVOb2RlKGl0ZW0pO1xyXG4gICAgICB0aGlzLmFsbE5vZGUucHVzaChub2RlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZVNvcnQoKTtcclxuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhudWxsKTtcclxuICAgIHRoaXMuYWZ0ZXJMb2FkRGF0YS5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNvcnRJdGVtcyhpdGVtczogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IGxBZHk6IE1hcDxzdHJpbmcsIFRbXT4gPSBuZXcgTWFwPHN0cmluZywgVFtdPigpO1xyXG4gICAgY29uc3Qgc3RhY2s6IFRbXSA9IFtdO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogVCk6IHZvaWQgPT4ge1xyXG4gICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcclxuICAgICAgaWYgKCFpZFBhcmVudCkge1xyXG4gICAgICAgIHN0YWNrLnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFsQWR5LmhhcyhpZFBhcmVudCkpIHtcclxuICAgICAgICAgIGxBZHkuc2V0KGlkUGFyZW50LCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxBZHkuZ2V0KGlkUGFyZW50KS5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlOiBUW10gPSBuZXcgQXJyYXk8VD4oaXRlbXMubGVuZ3RoKTtcclxuICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxhc3Q6IFQgPSBzdGFjay5wb3AoKTtcclxuICAgICAgcmVzcG9uc2VbaW5kZXgrK10gPSBsYXN0O1xyXG4gICAgICBjb25zdCBjaGlsZHJlbjogVFtdID0gbEFkeS5nZXQobGFzdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTm9kZShpdGVtOiBUKTogSGVsaXNhTm9kZTxUPiB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hOb2RlLmhhcyhpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignWWEgZXhpc3RlIGVsIG5vZG8uJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJlbnRJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgIGNvbnN0IG5vZGVJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHtcclxuICAgICAgb2JqZWN0OiBpdGVtLFxyXG4gICAgICBoYXZlQ2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICBsZXZlbDogcGFyZW50SW5mb3JtYXRpb24gPyBwYXJlbnRJbmZvcm1hdGlvbi5sZXZlbCArIDEgOiAwLFxyXG4gICAgICBleHBhbmRlZDogdGhpcy50cmVlTW9kZSA9PT0gUGFnaW5nVHJlZUluaXRpYWxNb2RlLkVYUEFORCxcclxuICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByZW9yZGVyOiB0aGlzLnNlYXJjaE5vZGUuc2l6ZSArIDEsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZWFyY2hOb2RlLnNldChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldLCBub2RlSW5mb3JtYXRpb24pO1xyXG4gICAgaWYgKHBhcmVudEluZm9ybWF0aW9uKSB7XHJcbiAgICAgIHBhcmVudEluZm9ybWF0aW9uLmhhdmVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZUluZm9ybWF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQ6IHN0cmluZyk6IEhlbGlzYU5vZGU8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTm9kZS5nZXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5vZGVJbmZvcm1hdGlvbihpdGVtOiBUKTogSGVsaXNhTm9kZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hOb2RlLmdldChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcclxuICB9XHJcblxyXG4gIGdldExldmVsQ2xhc3MoaXRlbTogVCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3BhZGRpbmctbGV2ZWwtJyArIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5sZXZlbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZE5leHRWaXNpYmxlT2JqZWN0cyhub2RlRnJvbTogVCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmlzaWJsZU9iamVjdHM6IFRbXSA9IFtdO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cy5mb3JFYWNoKChpdGVtOiBUKTogdm9pZCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xyXG4gICAgICAgIGlmIChub2RlRnJvbSAmJiB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihub2RlRnJvbSkucHJlb3JkZXIgPj0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkucHJlb3JkZXIpIHtcclxuICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlzaWJsZUxpbWl0ID0gdmlzaWJsZU9iamVjdHMubGVuZ3RoICsgdGhpcy52aXNpYmxlU2l6ZTtcclxuICAgIHRoaXMuYWxsTm9kZS5mb3JFYWNoKChpdGVtOiBIZWxpc2FOb2RlPFQ+KTogdm9pZCA9PiB7XHJcbiAgICAgIGlmICh2aXNpYmxlT2JqZWN0cy5sZW5ndGggPCB0aGlzLnZpc2libGVMaW1pdCAmJlxyXG4gICAgICAgICghbm9kZUZyb20gfHwgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24obm9kZUZyb20pLnByZW9yZGVyIDwgaXRlbS5wcmVvcmRlcikpIHtcclxuICAgICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gaXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV07XHJcbiAgICAgICAgaWYgKCFpZFBhcmVudCkge1xyXG4gICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtLm9iamVjdCk7XHJcbiAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJlbnRJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZFBhcmVudCk7XHJcbiAgICAgICAgICBpZiAocGFyZW50SW5mb3JtYXRpb24udmlzaWJsZSAmJiBwYXJlbnRJbmZvcm1hdGlvbi5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0ub2JqZWN0KTtcclxuICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cyA9IHZpc2libGVPYmplY3RzO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VOb2RlKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kTm9kZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd05leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHModGhpcy52aXNpYmxlT2JqZWN0c1t0aGlzLnZpc2libGVPYmplY3RzLmxlbmd0aCAtIDFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB2aXNpYmxlRGF0YSgpOiBSZWFkb25seUFycmF5PFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnZpc2libGVPYmplY3RzO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVCeUlkKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQpKSB7XHJcbiAgICAgIGNvbnN0IGlkUGFyZW50OiBzdHJpbmcgPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQpLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcclxuICAgICAgY29uc3Qgc2V0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgICBzZXQuYWRkKGlkKTtcclxuICAgICAgY29uc3QgYmVnaW5JbmRleDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcclxuICAgICAgICAoaXRlbVNlYXJjaDogSGVsaXNhTm9kZTxUPik6IGJvb2xlYW4gPT4gaXRlbVNlYXJjaC5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGlkXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBsYXN0SW5kZXg6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGJlZ2luSW5kZXggKyAxOyBpIDwgdGhpcy5hbGxOb2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbVNlYXJjaDogVCA9IHRoaXMuYWxsTm9kZVtpXS5vYmplY3Q7XHJcbiAgICAgICAgaWYgKHNldC5oYXMoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSkpIHtcclxuICAgICAgICAgIHNldC5hZGQoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxhc3RJbmRleCA9IGk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGVsZXRlZEl0ZW1zOiBIZWxpc2FOb2RlPFQ+W10gPSB0aGlzLmFsbE5vZGUuc3BsaWNlKGJlZ2luSW5kZXgsIGxhc3RJbmRleCAtIGJlZ2luSW5kZXgpO1xyXG4gICAgICBsZXQgcGFyZW50SGF2ZUNoaWxkcmVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgIGRlbGV0ZWRJdGVtcy5mb3JFYWNoKChkZWxldGVkSXRlbTogSGVsaXNhTm9kZTxUPik6IGJvb2xlYW4gPT4gdGhpcy5zZWFyY2hOb2RlLmRlbGV0ZShkZWxldGVkSXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pKTtcclxuICAgICAgdGhpcy5hbGxOb2RlLmZvckVhY2goKHNlYXJjaEl0ZW06IEhlbGlzYU5vZGU8VD4sIGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICBzZWFyY2hJdGVtLnByZW9yZGVyID0gaW5kZXggKyAxO1xyXG4gICAgICAgIGlmIChzZWFyY2hJdGVtLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSA9PT0gaWRQYXJlbnQpIHtcclxuICAgICAgICAgIHBhcmVudEhhdmVDaGlsZHJlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGlkUGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkUGFyZW50KS5oYXZlQ2hpbGRyZW4gPSBwYXJlbnRIYXZlQ2hpbGRyZW47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGJlZ2luSW5kZXggPiAwID8gdGhpcy5hbGxOb2RlW2JlZ2luSW5kZXggLSAxXS5vYmplY3QgOiBudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXhQYXJlbnQ6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoKG5vZGU6IEhlbGlzYU5vZGU8VD4pOiBib29sZWFuID0+IG5vZGUub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldID09PSBpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcclxuICAgIGlmIChpbmRleFBhcmVudCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuYWxsTm9kZS5wdXNoKHRoaXMuY3JlYXRlTm9kZShpdGVtKSk7XHJcbiAgICAgIHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0uaGF2ZUNoaWxkcmVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZVNvcnQoKTtcclxuICAgICAgdGhpcy5leHBhbmROb2RlKHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0ub2JqZWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdObyBleGlzdGUgZWwgcGFkcmUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJdGVtKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKSkge1xyXG4gICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKS5vYmplY3QgPSBpdGVtO1xyXG4gICAgICB0aGlzLnJlU29ydCgpO1xyXG4gICAgICBjb25zdCBpbmRleFBhcmVudDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleChcclxuICAgICAgICAobm9kZTogSGVsaXNhTm9kZTxUPik6IGJvb2xlYW4gPT4gbm9kZS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xyXG4gICAgICBpZiAoaW5kZXhQYXJlbnQgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kTm9kZSh0aGlzLmFsbE5vZGVbaW5kZXhQYXJlbnRdLm9iamVjdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlU29ydCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW1zOiBUW10gPSB0aGlzLmFsbE5vZGUubWFwKChub2RlOiBIZWxpc2FOb2RlPFQ+KTogVCA9PiBub2RlLm9iamVjdCk7XHJcbiAgICBpdGVtcy5zb3J0KChhOiBULCBiOiBUKTogbnVtYmVyID0+IHRoaXMuc2VydmljZS5jb21wYXJlKGEsIGIpKTtcclxuICAgIGNvbnN0IHByZW9yZGVyOiBUW10gPSB0aGlzLnNvcnRJdGVtcyhpdGVtcyk7XHJcbiAgICBwcmVvcmRlci5mb3JFYWNoKChvYmplY3Q6IFQsIGluZGV4OiBudW1iZXIpOiBudW1iZXIgPT4gdGhpcy5nZXROb2RlSW5mb3JtYXRpb24ob2JqZWN0KS5wcmVvcmRlciA9IGluZGV4ICsgMSk7XHJcbiAgICB0aGlzLmFsbE5vZGUuc29ydCgobm9kZUE6IEhlbGlzYU5vZGU8VD4sIG5vZGVCOiBIZWxpc2FOb2RlPFQ+KTogbnVtYmVyID0+IG5vZGVBLnByZW9yZGVyIC0gbm9kZUIucHJlb3JkZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=