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
        this.isModeAssociation = false;
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
    getUniqueId(item) {
        return this.getNodeInformationById(item[this.service.getIdField()]).object[this.service.getIdField()];
    }
    scrollToItem(item) {
        const idString = this.getUniqueId(item);
        if (idString) {
            const element = document.getElementById(idString);
            if (!!element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                });
            }
        }
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
    getClassAssociation() {
        return (this.isModeAssociation ? 'width-custom-1' : 'width-custom-full');
    }
    getLevelClass(item) {
        return 'padding-level-' + this.getNodeInformationById(item[this.service.getIdField()]).level;
    }
    getRowClassAssociation() {
        return (this.isModeAssociation ? 'helisa-tree-row-association' : '');
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
    expandNode(item, isScrollToItem = false) {
        this.getNodeInformationById(item[this.service.getIdField()]).expanded = true;
        this.loadNextVisibleObjects(item);
        if (isScrollToItem) {
            this.scrollToItem(item);
        }
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
                template: "<div>\n  <ng-container [ngTemplateOutlet]=\"nodeTitle\"></ng-container>\n  <div *ngIf=\"isModeAssociation\" class=\"w-100 flex-custom-titles hw-color-white hw-bg-blue\">\n    <ng-container [ngTemplateOutlet]=\"otherTitlesColumnsComponent\"></ng-container>\n  </div>\n  <div class=\"w-100\" [ngClass]=\"{'flex-custom-padding': isModeAssociation}\">\n    <div *ngFor=\"let item of visibleData\" class=\"w-100 flex-custom\" [ngClass]=\"getRowClassAssociation()\">\n      <div *ngIf=\"getNodeInformation(item).visible\" [ngClass]=\"getClassAssociation()\">\n        <div [id]=\"getUniqueId(item)\" *ngIf=\"getNodeInformation(item) as node\" [ngClass]=\"this.getLevelClass(item)\" class=\"helisa-tree-row w-100\">\n          <div [ngClass]=\"{expandNode: !node.expanded && node.haveChildren, withoutNode: !node.haveChildren}\">\n            <mat-icon *ngIf=\"!node.expanded && node.haveChildren\" (click)=\"expandNode(item)\">add</mat-icon>\n            <mat-icon *ngIf=\"node.expanded && node.haveChildren\" (click)=\"collapseNode(item)\">remove</mat-icon>\n            <mat-icon *ngIf=\"!node.haveChildren\"></mat-icon>\n          </div>\n          <ng-container [ngTemplateOutlet]=\"nodeComponent\" [ngTemplateOutletContext]=\"{data: item, node: node}\"></ng-container>\n        </div>\n      </div>\n      <div *ngIf=\"isModeAssociation\" class=\"d-flex width-custom-2\">\n        <ng-container [ngTemplateOutlet]=\"otherColumnsComponent\" [ngTemplateOutletContext]=\"{data: item, node: getNodeInformation(item)}\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".w-100{width:100%}.padding-level-0{margin-left:0}.padding-level-1{margin-left:40px}.padding-level-2{margin-left:80px}.padding-level-3{margin-left:120px}.padding-level-4{margin-left:160px}.padding-level-5{margin-left:200px}.padding-level-6{margin-left:240px}.padding-level-7{margin-left:280px}.padding-level-8{margin-left:320px}.helisa-tree-row{align-items:center;display:flex;flex-direction:row}.helisa-tree-row-association:hover{background-color:#f2f2f2}.flex-custom-titles{display:flex;flex-direction:row;justify-content:space-between;position:absolute}.flex-custom-padding{padding-top:26px}.flex-custom{display:flex;flex-direction:row;justify-content:space-between}.flex-custom-titles>div,.flex-custom>div{display:flex}.width-custom-1,.width-custom-2{width:50%}.width-custom-full{width:100%}"]
            },] }
];
PagingTreeHelisaComponent.ctorParameters = () => [];
PagingTreeHelisaComponent.propDecorators = {
    isModeAssociation: [{ type: Input }],
    afterLoadData: [{ type: Output }],
    nodeComponent: [{ type: ContentChild, args: ['nodeComponent',] }],
    otherColumnsComponent: [{ type: ContentChild, args: ['otherColumnsComponent',] }],
    otherTitlesColumnsComponent: [{ type: ContentChild, args: ['otherTitlesColumnsComponent',] }],
    nodeTitle: [{ type: ContentChild, args: ['nodeTitle',] }],
    mode: [{ type: Input }],
    pagingTreeHelisaListable: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3BhZ2luZy10cmVlLWhlbGlzYS9wYWdpbmctdHJlZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUd6SCxNQUFNLENBQU4sSUFBWSxxQkFHWDtBQUhELFdBQVkscUJBQXFCO0lBQy9CLHlFQUFRLENBQUE7SUFDUixxRUFBTSxDQUFBO0FBQ1IsQ0FBQyxFQUhXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFHaEM7QUFtQ0QsTUFBTSxPQUFPLHlCQUF5QjtJQTRCcEM7UUExQlEsYUFBUSxHQUFXLE1BQU0sQ0FBQztRQUMxQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixhQUFRLEdBQTBCLHFCQUFxQixDQUFDLE1BQU0sQ0FBQztRQUMvRCxtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUc5QixZQUFPLEdBQXlCLEVBQUUsQ0FBQztRQUVsQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFHNUMsa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWU3RCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlO0lBQ2YsQ0FBQztJQUVELElBQ0ksSUFBSSxDQUFDLFNBQWdDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxJQUNJLHdCQUF3QixDQUFDLFlBQXlDO1FBQ3BFLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQzVCLElB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NUIsWUFBWSxTQUFDLHVCQUF1QjswQ0FHcEMsWUFBWSxTQUFDLDZCQUE2Qjt3QkFHMUMsWUFBWSxTQUFDLFdBQVc7bUJBWXhCLEtBQUs7dUNBTUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gUGFnaW5nVHJlZUluaXRpYWxNb2RlIHtcbiAgQ09MTEFQU0UsXG4gIEVYUEFORFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZTxUPiB7XG4gIGdldChsYXN0Q2hpbGRPcmRlcjogbnVtYmVyLCBzaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPFRbXT47XG5cbiAgZ2V0SWRGaWVsZCgpOiBzdHJpbmc7XG5cbiAgZ2V0SWRQYXJlbnRGaWVsZCgpOiBzdHJpbmc7XG5cbiAgY29tcGFyZShhOiBULCBiOiBUKTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSGVsaXNhTm9kZTxUPiB7XG4gIG9iamVjdDogVDtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgaGF2ZUNoaWxkcmVuOiBib29sZWFuO1xuICBleHBhbmRlZDogYm9vbGVhbjtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgcHJlb3JkZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWxpc2FOb2RlRGF0YTxUPiB7XG4gIHJlYWRvbmx5IG9iamVjdDogVDtcbiAgcmVhZG9ubHkgbGV2ZWw6IG51bWJlcjtcbiAgcmVhZG9ubHkgaGF2ZUNoaWxkcmVuOiBib29sZWFuO1xuICByZWFkb25seSBleHBhbmRlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgdmlzaWJsZTogYm9vbGVhbjtcbiAgcmVhZG9ubHkgcHJlb3JkZXI6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLXBhZ2luZy10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luZy10cmVlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luZy10cmVlLWhlbGlzYS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nVHJlZUhlbGlzYUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyID0gMjAwMDAwO1xuICBwcml2YXRlIHZpc2libGVMaW1pdDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSB2aXNpYmxlU2l6ZTogbnVtYmVyID0gMTAwO1xuICBwcml2YXRlIHRyZWVNb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUgPSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUuRVhQQU5EO1xuICBwcml2YXRlIHZpc2libGVPYmplY3RzOiBBcnJheTxUPiA9IFtdO1xuICBwcml2YXRlIHNlcnZpY2U6IFBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZTxUPjtcbiAgcHJpdmF0ZSBzZWFyY2hOb2RlOiBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PjtcbiAgcHJpdmF0ZSBhbGxOb2RlOiBBcnJheTxIZWxpc2FOb2RlPFQ+PiA9IFtdO1xuXG4gIEBJbnB1dCgpIGlzTW9kZUFzc29jaWF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGFmdGVyTG9hZERhdGE6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAQ29udGVudENoaWxkKCdub2RlQ29tcG9uZW50JylcbiAgbm9kZUNvbXBvbmVudDogVGVtcGxhdGVSZWY8eyBkYXRhOiBULCBub2RlOiBIZWxpc2FOb2RlRGF0YTxUPiB9PjtcblxuICBAQ29udGVudENoaWxkKCdvdGhlckNvbHVtbnNDb21wb25lbnQnKVxuICBvdGhlckNvbHVtbnNDb21wb25lbnQ6IFRlbXBsYXRlUmVmPHsgZGF0YTogVCwgbm9kZTogSGVsaXNhTm9kZURhdGE8VD4gfT47XG5cbiAgQENvbnRlbnRDaGlsZCgnb3RoZXJUaXRsZXNDb2x1bW5zQ29tcG9uZW50JylcbiAgb3RoZXJUaXRsZXNDb2x1bW5zQ29tcG9uZW50OiBUZW1wbGF0ZVJlZjx7IGRhdGE6IFQsIG5vZGU6IEhlbGlzYU5vZGVEYXRhPFQ+IH0+O1xuXG4gIEBDb250ZW50Q2hpbGQoJ25vZGVUaXRsZScpXG4gIG5vZGVUaXRsZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1vZGUocGFyYW1Nb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUpIHtcbiAgICB0aGlzLnRyZWVNb2RlID0gcGFyYW1Nb2RlO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwYWdpbmdUcmVlSGVsaXNhTGlzdGFibGUocGFyYW1TZXJ2aWNlOiBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD4pIHtcbiAgICB0aGlzLnNlcnZpY2UgPSBwYXJhbVNlcnZpY2U7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcbiAgICAgIHRoaXMuc2VydmljZS5nZXQoMCwgdGhpcy5wYWdlU2l6ZSkuc3Vic2NyaWJlKChpdGVtczogVFtdKTogdm9pZCA9PiB0aGlzLmxvYWREYXRhKGl0ZW1zKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRGF0YShpdGVtczogVFtdKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hOb2RlID0gbmV3IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+KCk7XG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cyA9IFtdO1xuICAgIHRoaXMuYWxsTm9kZSA9IFtdO1xuICAgIGl0ZW1zID0gdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xuICAgIHRoaXMuc2VhcmNoTm9kZSA9IG5ldyBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PigpO1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW06IFQpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IG5vZGU6IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmNyZWF0ZU5vZGUoaXRlbSk7XG4gICAgICB0aGlzLmFsbE5vZGUucHVzaChub2RlKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlU29ydCgpO1xuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhudWxsKTtcbiAgICB0aGlzLmFmdGVyTG9hZERhdGEuZW1pdCgpO1xuICB9XG5cbiAgZ2V0VW5pcXVlSWQoaXRlbTogVCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV07XG4gIH1cblxuICBzY3JvbGxUb0l0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgIGNvbnN0IGlkU3RyaW5nOiBzdHJpbmcgPSB0aGlzLmdldFVuaXF1ZUlkKGl0ZW0pO1xuICAgIGlmIChpZFN0cmluZykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkU3RyaW5nKTtcbiAgICAgIGlmICghIWVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgYmxvY2s6IFwic3RhcnRcIixcbiAgICAgICAgICBpbmxpbmU6IFwibmVhcmVzdFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc29ydEl0ZW1zKGl0ZW1zOiBUW10pOiBUW10ge1xuICAgIGNvbnN0IGxBZHk6IE1hcDxzdHJpbmcsIFRbXT4gPSBuZXcgTWFwPHN0cmluZywgVFtdPigpO1xuICAgIGNvbnN0IHN0YWNrOiBUW10gPSBbXTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtOiBUKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcbiAgICAgIGlmICghaWRQYXJlbnQpIHtcbiAgICAgICAgc3RhY2sudW5zaGlmdChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghbEFkeS5oYXMoaWRQYXJlbnQpKSB7XG4gICAgICAgICAgbEFkeS5zZXQoaWRQYXJlbnQsIFtdKTtcbiAgICAgICAgfVxuICAgICAgICBsQWR5LmdldChpZFBhcmVudCkucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCByZXNwb25zZTogVFtdID0gbmV3IEFycmF5PFQ+KGl0ZW1zLmxlbmd0aCk7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsYXN0OiBUID0gc3RhY2sucG9wKCk7XG4gICAgICByZXNwb25zZVtpbmRleCsrXSA9IGxhc3Q7XG4gICAgICBjb25zdCBjaGlsZHJlbjogVFtdID0gbEFkeS5nZXQobGFzdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XG4gICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU5vZGUoaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xuICAgIGlmICh0aGlzLnNlYXJjaE5vZGUuaGFzKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pKSB7XG4gICAgICB0aHJvdyBFcnJvcignWWEgZXhpc3RlIGVsIG5vZG8uJyk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudEluZm9ybWF0aW9uOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xuICAgIGNvbnN0IG5vZGVJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHtcbiAgICAgIG9iamVjdDogaXRlbSxcbiAgICAgIGhhdmVDaGlsZHJlbjogZmFsc2UsXG4gICAgICBsZXZlbDogcGFyZW50SW5mb3JtYXRpb24gPyBwYXJlbnRJbmZvcm1hdGlvbi5sZXZlbCArIDEgOiAwLFxuICAgICAgZXhwYW5kZWQ6IHRoaXMudHJlZU1vZGUgPT09IFBhZ2luZ1RyZWVJbml0aWFsTW9kZS5FWFBBTkQsXG4gICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgIHByZW9yZGVyOiB0aGlzLnNlYXJjaE5vZGUuc2l6ZSArIDEsXG4gICAgfTtcbiAgICB0aGlzLnNlYXJjaE5vZGUuc2V0KGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0sIG5vZGVJbmZvcm1hdGlvbik7XG4gICAgaWYgKHBhcmVudEluZm9ybWF0aW9uKSB7XG4gICAgICBwYXJlbnRJbmZvcm1hdGlvbi5oYXZlQ2hpbGRyZW4gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZUluZm9ybWF0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQ6IHN0cmluZyk6IEhlbGlzYU5vZGU8VD4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaE5vZGUuZ2V0KGlkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXROb2RlSW5mb3JtYXRpb24oaXRlbTogVCk6IEhlbGlzYU5vZGU8VD4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaE5vZGUuZ2V0KGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xuICB9XG5cbiAgZ2V0Q2xhc3NBc3NvY2lhdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5pc01vZGVBc3NvY2lhdGlvbiA/ICd3aWR0aC1jdXN0b20tMScgOiAnd2lkdGgtY3VzdG9tLWZ1bGwnKTtcbiAgfVxuXG4gIGdldExldmVsQ2xhc3MoaXRlbTogVCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdwYWRkaW5nLWxldmVsLScgKyB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkubGV2ZWw7XG4gIH1cblxuICBnZXRSb3dDbGFzc0Fzc29jaWF0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmlzTW9kZUFzc29jaWF0aW9uID8gJ2hlbGlzYS10cmVlLXJvdy1hc3NvY2lhdGlvbicgOiAnJyk7XG4gIH1cblxuICBwcml2YXRlIGxvYWROZXh0VmlzaWJsZU9iamVjdHMobm9kZUZyb206IFQpOiB2b2lkIHtcbiAgICBjb25zdCB2aXNpYmxlT2JqZWN0czogVFtdID0gW107XG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cy5mb3JFYWNoKChpdGVtOiBUKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkpIHtcbiAgICAgICAgaWYgKG5vZGVGcm9tICYmIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKG5vZGVGcm9tKS5wcmVvcmRlciA+PSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKS5wcmVvcmRlcikge1xuICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudmlzaWJsZUxpbWl0ID0gdmlzaWJsZU9iamVjdHMubGVuZ3RoICsgdGhpcy52aXNpYmxlU2l6ZTtcbiAgICB0aGlzLmFsbE5vZGUuZm9yRWFjaCgoaXRlbTogSGVsaXNhTm9kZTxUPik6IHZvaWQgPT4ge1xuICAgICAgaWYgKHZpc2libGVPYmplY3RzLmxlbmd0aCA8IHRoaXMudmlzaWJsZUxpbWl0ICYmXG4gICAgICAgICghbm9kZUZyb20gfHwgdGhpcy5nZXROb2RlSW5mb3JtYXRpb24obm9kZUZyb20pLnByZW9yZGVyIDwgaXRlbS5wcmVvcmRlcikpIHtcbiAgICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IGl0ZW0ub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldO1xuICAgICAgICBpZiAoIWlkUGFyZW50KSB7XG4gICAgICAgICAgdmlzaWJsZU9iamVjdHMucHVzaChpdGVtLm9iamVjdCk7XG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnRJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZFBhcmVudCk7XG4gICAgICAgICAgaWYgKHBhcmVudEluZm9ybWF0aW9uLnZpc2libGUgJiYgcGFyZW50SW5mb3JtYXRpb24uZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbS5vYmplY3QpO1xuICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnZpc2libGVPYmplY3RzID0gdmlzaWJsZU9iamVjdHM7XG4gIH1cblxuICBjb2xsYXBzZU5vZGUoaXRlbTogVCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5leHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhpdGVtKTtcbiAgfVxuXG4gIGV4cGFuZE5vZGUoaXRlbTogVCwgaXNTY3JvbGxUb0l0ZW06IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5leHBhbmRlZCA9IHRydWU7XG4gICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGl0ZW0pO1xuICAgIGlmIChpc1Njcm9sbFRvSXRlbSkge1xuICAgICAgdGhpcy5zY3JvbGxUb0l0ZW0oaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd05leHRQYWdlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZpc2libGVPYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyh0aGlzLnZpc2libGVPYmplY3RzW3RoaXMudmlzaWJsZU9iamVjdHMubGVuZ3RoIC0gMV0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2aXNpYmxlRGF0YSgpOiBSZWFkb25seUFycmF5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlT2JqZWN0cztcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcbiAgfVxuXG4gIHJlbW92ZUJ5SWQoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWQpKSB7XG4gICAgICBjb25zdCBpZFBhcmVudDogc3RyaW5nID0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkKS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV07XG4gICAgICBjb25zdCBzZXQ6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICBzZXQuYWRkKGlkKTtcbiAgICAgIGNvbnN0IGJlZ2luSW5kZXg6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoXG4gICAgICAgIChpdGVtU2VhcmNoOiBIZWxpc2FOb2RlPFQ+KTogYm9vbGVhbiA9PiBpdGVtU2VhcmNoLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSA9PT0gaWRcbiAgICAgICk7XG4gICAgICBsZXQgbGFzdEluZGV4OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gYmVnaW5JbmRleCArIDE7IGkgPCB0aGlzLmFsbE5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbVNlYXJjaDogVCA9IHRoaXMuYWxsTm9kZVtpXS5vYmplY3Q7XG4gICAgICAgIGlmIChzZXQuaGFzKGl0ZW1TZWFyY2hbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pKSB7XG4gICAgICAgICAgc2V0LmFkZChpdGVtU2VhcmNoW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0SW5kZXggPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBkZWxldGVkSXRlbXM6IEhlbGlzYU5vZGU8VD5bXSA9IHRoaXMuYWxsTm9kZS5zcGxpY2UoYmVnaW5JbmRleCwgbGFzdEluZGV4IC0gYmVnaW5JbmRleCk7XG4gICAgICBsZXQgcGFyZW50SGF2ZUNoaWxkcmVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgICBkZWxldGVkSXRlbXMuZm9yRWFjaCgoZGVsZXRlZEl0ZW06IEhlbGlzYU5vZGU8VD4pOiBib29sZWFuID0+IHRoaXMuc2VhcmNoTm9kZS5kZWxldGUoZGVsZXRlZEl0ZW0ub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKSk7XG4gICAgICB0aGlzLmFsbE5vZGUuZm9yRWFjaCgoc2VhcmNoSXRlbTogSGVsaXNhTm9kZTxUPiwgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICBzZWFyY2hJdGVtLnByZW9yZGVyID0gaW5kZXggKyAxO1xuICAgICAgICBpZiAoc2VhcmNoSXRlbS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0gPT09IGlkUGFyZW50KSB7XG4gICAgICAgICAgcGFyZW50SGF2ZUNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoaWRQYXJlbnQpIHtcbiAgICAgICAgdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkUGFyZW50KS5oYXZlQ2hpbGRyZW4gPSBwYXJlbnRIYXZlQ2hpbGRyZW47XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMoYmVnaW5JbmRleCA+IDAgPyB0aGlzLmFsbE5vZGVbYmVnaW5JbmRleCAtIDFdLm9iamVjdCA6IG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4UGFyZW50OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUuZmluZEluZGV4KChub2RlOiBIZWxpc2FOb2RlPFQ+KTogYm9vbGVhbiA9PiBub2RlLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSA9PT0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSk7XG4gICAgaWYgKGluZGV4UGFyZW50ID49IDApIHtcbiAgICAgIHRoaXMuYWxsTm9kZS5wdXNoKHRoaXMuY3JlYXRlTm9kZShpdGVtKSk7XG4gICAgICB0aGlzLmFsbE5vZGVbaW5kZXhQYXJlbnRdLmhhdmVDaGlsZHJlbiA9IHRydWU7XG4gICAgICB0aGlzLnJlU29ydCgpO1xuICAgICAgdGhpcy5leHBhbmROb2RlKHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0ub2JqZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoJ05vIGV4aXN0ZSBlbCBwYWRyZS4nKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVJdGVtKGl0ZW06IFQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkpIHtcbiAgICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pLm9iamVjdCA9IGl0ZW07XG4gICAgICB0aGlzLnJlU29ydCgpO1xuICAgICAgY29uc3QgaW5kZXhQYXJlbnQ6IG51bWJlciA9IHRoaXMuYWxsTm9kZS5maW5kSW5kZXgoXG4gICAgICAgIChub2RlOiBIZWxpc2FOb2RlPFQ+KTogYm9vbGVhbiA9PiBub2RlLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSA9PT0gaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXSk7XG4gICAgICBpZiAoaW5kZXhQYXJlbnQgPj0gMCkge1xuICAgICAgICB0aGlzLmV4cGFuZE5vZGUodGhpcy5hbGxOb2RlW2luZGV4UGFyZW50XS5vYmplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVTb3J0KCk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW1zOiBUW10gPSB0aGlzLmFsbE5vZGUubWFwKChub2RlOiBIZWxpc2FOb2RlPFQ+KTogVCA9PiBub2RlLm9iamVjdCk7XG4gICAgaXRlbXMuc29ydCgoYTogVCwgYjogVCk6IG51bWJlciA9PiB0aGlzLnNlcnZpY2UuY29tcGFyZShhLCBiKSk7XG4gICAgY29uc3QgcHJlb3JkZXI6IFRbXSA9IHRoaXMuc29ydEl0ZW1zKGl0ZW1zKTtcbiAgICBwcmVvcmRlci5mb3JFYWNoKChvYmplY3Q6IFQsIGluZGV4OiBudW1iZXIpOiBudW1iZXIgPT4gdGhpcy5nZXROb2RlSW5mb3JtYXRpb24ob2JqZWN0KS5wcmVvcmRlciA9IGluZGV4ICsgMSk7XG4gICAgdGhpcy5hbGxOb2RlLnNvcnQoKG5vZGVBOiBIZWxpc2FOb2RlPFQ+LCBub2RlQjogSGVsaXNhTm9kZTxUPik6IG51bWJlciA9PiBub2RlQS5wcmVvcmRlciAtIG5vZGVCLnByZW9yZGVyKTtcbiAgfVxufVxuIl19