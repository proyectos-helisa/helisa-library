import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
export var PagingTreeInitialMode;
(function (PagingTreeInitialMode) {
    PagingTreeInitialMode[PagingTreeInitialMode["COLLAPSE"] = 0] = "COLLAPSE";
    PagingTreeInitialMode[PagingTreeInitialMode["EXPAND"] = 1] = "EXPAND";
})(PagingTreeInitialMode || (PagingTreeInitialMode = {}));
export class PagingTreeHelisaComponent {
    constructor() {
        this.pageSize = 10000;
        this.visibleLimit = 0;
        this.visibleSize = 10000;
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
    ngAfterViewChecked() {
        if (this.itemToScroll) {
            const idString = this.getUniqueId(this.itemToScroll);
            if (idString) {
                const element = document.getElementById(idString);
                if (!!element) {
                    element.scrollIntoView({
                        behavior: "auto",
                        block: "start",
                        inline: "start",
                    });
                }
            }
            this.itemToScroll = undefined;
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
        this.expandToItem(item);
        this.itemToScroll = item;
    }
    scrollToTargetAdjusted(item, offset) {
        const idString = this.getUniqueId(item);
        if (idString) {
            const element = document.getElementById(idString);
            var headerOffset = offset;
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
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
        const node = this.getNodeInformationById(item[this.service.getIdField()]);
        return 'padding-level-' + node.level;
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
    expandToItem(item) {
        const node = this.getNodeInformationById(item[this.service.getIdField()]);
        if (!node.expanded) {
            const idParent = node.object[this.service.getIdParentField()];
            const parent = this.allNode.find((parent) => parent.object[this.service.getIdField()] === idParent);
            if (idParent && parent) {
                this.expandToItem(parent.object);
            }
            this.expandNode(item);
        }
    }
}
PagingTreeHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-paging-tree',
                template: "<div>\n  <ng-container [ngTemplateOutlet]=\"nodeTitle\"></ng-container>\n  <div *ngIf=\"isModeAssociation\" class=\"w-100 flex-custom-titles hw-color-white hw-bg-blue\">\n    <ng-container [ngTemplateOutlet]=\"otherTitlesColumnsComponent\"></ng-container>\n  </div>\n  <div class=\"w-100\" [ngClass]=\"{'flex-custom-padding': isModeAssociation}\">\n    <div *ngFor=\"let item of visibleData; let i=index\" class=\"w-100 flex-custom\" [ngClass]=\"getRowClassAssociation()\">\n      <div *ngIf=\"getNodeInformation(item).visible\" [ngClass]=\"getClassAssociation()\">\n        <div [id]=\"getUniqueId(item)\" *ngIf=\"getNodeInformation(item) as node\" [ngClass]=\"this.getLevelClass(item)\" class=\"helisa-tree-row w-100\">\n          <div [ngClass]=\"{expandNode: !node.expanded && node.haveChildren, withoutNode: !node.haveChildren}\">\n            <mat-icon *ngIf=\"!node.expanded && node.haveChildren\" (click)=\"expandNode(item)\">add</mat-icon>\n            <mat-icon *ngIf=\"node.expanded && node.haveChildren\" (click)=\"collapseNode(item)\">remove</mat-icon>\n            <mat-icon *ngIf=\"!node.haveChildren\"></mat-icon>\n          </div>\n          <ng-container [ngTemplateOutlet]=\"nodeComponent\" [ngTemplateOutletContext]=\"{data: item, node: node}\"></ng-container>\n        </div>\n      </div>\n      <div *ngIf=\"isModeAssociation\" class=\"d-flex width-custom-2\">\n        <ng-container [ngTemplateOutlet]=\"otherColumnsComponent\" [ngTemplateOutletContext]=\"{data: item, node: getNodeInformation(item)}\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".w-100{width:100%}.padding-level-0{margin-left:0}.padding-level-1{margin-left:40px}.padding-level-2{margin-left:80px}.padding-level-3{margin-left:120px}.padding-level-4{margin-left:160px}.padding-level-5{margin-left:200px}.padding-level-6{margin-left:240px}.padding-level-7{margin-left:280px}.padding-level-8{margin-left:320px}.padding-last-level{margin-left:360px}.helisa-tree-row{align-items:center;display:flex;flex-direction:row}.helisa-tree-row-association:hover{background-color:#f2f2f2}.flex-custom-titles{display:flex;flex-direction:row;justify-content:space-between;position:absolute}.flex-custom-padding{padding-top:26px}.flex-custom{display:flex;flex-direction:row;justify-content:space-between}.flex-custom-titles>div,.flex-custom>div{display:flex}.width-custom-1,.width-custom-2{width:50%}.width-custom-full{width:100%}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9oZWxpc2EtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3BhZ2luZy10cmVlLWhlbGlzYS9wYWdpbmctdHJlZS1oZWxpc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFHM0ksTUFBTSxDQUFOLElBQVkscUJBR1g7QUFIRCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBUSxDQUFBO0lBQ1IscUVBQU0sQ0FBQTtBQUNSLENBQUMsRUFIVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBR2hDO0FBbUNELE1BQU0sT0FBTyx5QkFBeUI7SUE4QnBDO1FBNUJRLGFBQVEsR0FBVyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxLQUFLLENBQUM7UUFDNUIsYUFBUSxHQUEwQixxQkFBcUIsQ0FBQyxNQUFNLENBQUM7UUFDL0QsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFHOUIsWUFBTyxHQUF5QixFQUFFLENBQUM7UUFFbEMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBRzVDLGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFpQjdELENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELGVBQWU7SUFDZixDQUFDO0lBRUQsSUFDSSxJQUFJLENBQUMsU0FBZ0M7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQ0ksd0JBQXdCLENBQUMsWUFBeUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDNUIs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Q0FBQyxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7OztZQWhVRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsZ2tEQUFrRDs7YUFFbkQ7Ozs7Z0NBWUUsS0FBSzs0QkFFTCxNQUFNOzRCQUdOLFlBQVksU0FBQyxlQUFlO29DQUc1QixZQUFZLFNBQUMsdUJBQXVCOzBDQUdwQyxZQUFZLFNBQUMsNkJBQTZCO3dCQUcxQyxZQUFZLFNBQUMsV0FBVzttQkFjeEIsS0FBSzt1Q0FNTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgQWZ0ZXJWaWV3Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUge1xuICBDT0xMQVBTRSxcbiAgRVhQQU5EXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5nVHJlZUhlbGlzYUxpc3RhYmxlPFQ+IHtcbiAgZ2V0KGxhc3RDaGlsZE9yZGVyOiBudW1iZXIsIHNpemU6IG51bWJlcik6IE9ic2VydmFibGU8VFtdPjtcblxuICBnZXRJZEZpZWxkKCk6IHN0cmluZztcblxuICBnZXRJZFBhcmVudEZpZWxkKCk6IHN0cmluZztcblxuICBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBIZWxpc2FOb2RlPFQ+IHtcbiAgb2JqZWN0OiBUO1xuICBsZXZlbDogbnVtYmVyO1xuICBoYXZlQ2hpbGRyZW46IGJvb2xlYW47XG4gIGV4cGFuZGVkOiBib29sZWFuO1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBwcmVvcmRlcjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGlzYU5vZGVEYXRhPFQ+IHtcbiAgcmVhZG9ubHkgb2JqZWN0OiBUO1xuICByZWFkb25seSBsZXZlbDogbnVtYmVyO1xuICByZWFkb25seSBoYXZlQ2hpbGRyZW46IGJvb2xlYW47XG4gIHJlYWRvbmx5IGV4cGFuZGVkOiBib29sZWFuO1xuICByZWFkb25seSB2aXNpYmxlOiBib29sZWFuO1xuICByZWFkb25seSBwcmVvcmRlcjogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWwtcGFnaW5nLXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5nLXRyZWUtaGVsaXNhLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdUcmVlSGVsaXNhQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkIHtcblxuICBwcml2YXRlIHBhZ2VTaXplOiBudW1iZXIgPSAxMDAwMDtcbiAgcHJpdmF0ZSB2aXNpYmxlTGltaXQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgdmlzaWJsZVNpemU6IG51bWJlciA9IDEwMDAwO1xuICBwcml2YXRlIHRyZWVNb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUgPSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUuRVhQQU5EO1xuICBwcml2YXRlIHZpc2libGVPYmplY3RzOiBBcnJheTxUPiA9IFtdO1xuICBwcml2YXRlIHNlcnZpY2U6IFBhZ2luZ1RyZWVIZWxpc2FMaXN0YWJsZTxUPjtcbiAgcHJpdmF0ZSBzZWFyY2hOb2RlOiBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PjtcbiAgcHJpdmF0ZSBhbGxOb2RlOiBBcnJheTxIZWxpc2FOb2RlPFQ+PiA9IFtdO1xuXG4gIEBJbnB1dCgpIGlzTW9kZUFzc29jaWF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGFmdGVyTG9hZERhdGE6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAQ29udGVudENoaWxkKCdub2RlQ29tcG9uZW50JylcbiAgbm9kZUNvbXBvbmVudDogVGVtcGxhdGVSZWY8eyBkYXRhOiBULCBub2RlOiBIZWxpc2FOb2RlRGF0YTxUPiB9PjtcblxuICBAQ29udGVudENoaWxkKCdvdGhlckNvbHVtbnNDb21wb25lbnQnKVxuICBvdGhlckNvbHVtbnNDb21wb25lbnQ6IFRlbXBsYXRlUmVmPHsgZGF0YTogVCwgbm9kZTogSGVsaXNhTm9kZURhdGE8VD4gfT47XG5cbiAgQENvbnRlbnRDaGlsZCgnb3RoZXJUaXRsZXNDb2x1bW5zQ29tcG9uZW50JylcbiAgb3RoZXJUaXRsZXNDb2x1bW5zQ29tcG9uZW50OiBUZW1wbGF0ZVJlZjx7IGRhdGE6IFQsIG5vZGU6IEhlbGlzYU5vZGVEYXRhPFQ+IH0+O1xuXG4gIEBDb250ZW50Q2hpbGQoJ25vZGVUaXRsZScpXG4gIG5vZGVUaXRsZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBwcml2YXRlIGl0ZW1Ub1Njcm9sbDogVDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1vZGUocGFyYW1Nb2RlOiBQYWdpbmdUcmVlSW5pdGlhbE1vZGUpIHtcbiAgICB0aGlzLnRyZWVNb2RlID0gcGFyYW1Nb2RlO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwYWdpbmdUcmVlSGVsaXNhTGlzdGFibGUocGFyYW1TZXJ2aWNlOiBQYWdpbmdUcmVlSGVsaXNhTGlzdGFibGU8VD4pIHtcbiAgICB0aGlzLnNlcnZpY2UgPSBwYXJhbVNlcnZpY2U7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcbiAgICAgIHRoaXMuc2VydmljZS5nZXQoMCwgdGhpcy5wYWdlU2l6ZSkuc3Vic2NyaWJlKChpdGVtczogVFtdKTogdm9pZCA9PiB0aGlzLmxvYWREYXRhKGl0ZW1zKSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLml0ZW1Ub1Njcm9sbCkge1xuICAgICAgY29uc3QgaWRTdHJpbmc6IHN0cmluZyA9IHRoaXMuZ2V0VW5pcXVlSWQodGhpcy5pdGVtVG9TY3JvbGwpO1xuICAgICAgaWYgKGlkU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZFN0cmluZyk7XG4gICAgICAgIGlmICghIWVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcImF1dG9cIixcbiAgICAgICAgICAgIGJsb2NrOiBcInN0YXJ0XCIsXG4gICAgICAgICAgICBpbmxpbmU6IFwic3RhcnRcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5pdGVtVG9TY3JvbGwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRGF0YShpdGVtczogVFtdKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hOb2RlID0gbmV3IE1hcDxzdHJpbmcsIEhlbGlzYU5vZGU8VD4+KCk7XG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cyA9IFtdO1xuICAgIHRoaXMuYWxsTm9kZSA9IFtdO1xuICAgIGl0ZW1zID0gdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xuICAgIHRoaXMuc2VhcmNoTm9kZSA9IG5ldyBNYXA8c3RyaW5nLCBIZWxpc2FOb2RlPFQ+PigpO1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW06IFQpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IG5vZGU6IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmNyZWF0ZU5vZGUoaXRlbSk7XG4gICAgICB0aGlzLmFsbE5vZGUucHVzaChub2RlKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlU29ydCgpO1xuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhudWxsKTtcbiAgICB0aGlzLmFmdGVyTG9hZERhdGEuZW1pdCgpO1xuICB9XG5cbiAgZ2V0VW5pcXVlSWQoaXRlbTogVCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV07XG4gIH1cblxuICBzY3JvbGxUb0l0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kVG9JdGVtKGl0ZW0pO1xuICAgIHRoaXMuaXRlbVRvU2Nyb2xsID0gaXRlbTtcbiAgfVxuXG4gIHNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQoaXRlbTogVCwgb2Zmc2V0OiBudW1iZXIpIHtcbiAgICBjb25zdCBpZFN0cmluZzogc3RyaW5nID0gdGhpcy5nZXRVbmlxdWVJZChpdGVtKTtcbiAgICBpZiAoaWRTdHJpbmcpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZFN0cmluZyk7XG4gICAgICB2YXIgaGVhZGVyT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgdmFyIGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgdmFyIG9mZnNldFBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gaGVhZGVyT2Zmc2V0O1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNvcnRJdGVtcyhpdGVtczogVFtdKTogVFtdIHtcbiAgICBjb25zdCBsQWR5OiBNYXA8c3RyaW5nLCBUW10+ID0gbmV3IE1hcDxzdHJpbmcsIFRbXT4oKTtcbiAgICBjb25zdCBzdGFjazogVFtdID0gW107XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogVCk6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV07XG4gICAgICBpZiAoIWlkUGFyZW50KSB7XG4gICAgICAgIHN0YWNrLnVuc2hpZnQoaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWxBZHkuaGFzKGlkUGFyZW50KSkge1xuICAgICAgICAgIGxBZHkuc2V0KGlkUGFyZW50LCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgbEFkeS5nZXQoaWRQYXJlbnQpLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcmVzcG9uc2U6IFRbXSA9IG5ldyBBcnJheTxUPihpdGVtcy5sZW5ndGgpO1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbGFzdDogVCA9IHN0YWNrLnBvcCgpO1xuICAgICAgcmVzcG9uc2VbaW5kZXgrK10gPSBsYXN0O1xuICAgICAgY29uc3QgY2hpbGRyZW46IFRbXSA9IGxBZHkuZ2V0KGxhc3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xuICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgc3RhY2sucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVOb2RlKGl0ZW06IFQpOiBIZWxpc2FOb2RlPFQ+IHtcbiAgICBpZiAodGhpcy5zZWFyY2hOb2RlLmhhcyhpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ1lhIGV4aXN0ZSBlbCBub2RvLicpO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnRJbmZvcm1hdGlvbjogSGVsaXNhTm9kZTxUPiA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKTtcbiAgICBjb25zdCBub2RlSW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB7XG4gICAgICBvYmplY3Q6IGl0ZW0sXG4gICAgICBoYXZlQ2hpbGRyZW46IGZhbHNlLFxuICAgICAgbGV2ZWw6IHBhcmVudEluZm9ybWF0aW9uID8gcGFyZW50SW5mb3JtYXRpb24ubGV2ZWwgKyAxIDogMCxcbiAgICAgIGV4cGFuZGVkOiB0aGlzLnRyZWVNb2RlID09PSBQYWdpbmdUcmVlSW5pdGlhbE1vZGUuRVhQQU5ELFxuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICBwcmVvcmRlcjogdGhpcy5zZWFyY2hOb2RlLnNpemUgKyAxLFxuICAgIH07XG4gICAgdGhpcy5zZWFyY2hOb2RlLnNldChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldLCBub2RlSW5mb3JtYXRpb24pO1xuICAgIGlmIChwYXJlbnRJbmZvcm1hdGlvbikge1xuICAgICAgcGFyZW50SW5mb3JtYXRpb24uaGF2ZUNoaWxkcmVuID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVJbmZvcm1hdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkOiBzdHJpbmcpOiBIZWxpc2FOb2RlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hOb2RlLmdldChpZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW06IFQpOiBIZWxpc2FOb2RlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hOb2RlLmdldChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKTtcbiAgfVxuXG4gIGdldENsYXNzQXNzb2NpYXRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMuaXNNb2RlQXNzb2NpYXRpb24gPyAnd2lkdGgtY3VzdG9tLTEnIDogJ3dpZHRoLWN1c3RvbS1mdWxsJyk7XG4gIH1cblxuICBnZXRMZXZlbENsYXNzKGl0ZW06IFQpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5vZGU6IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XG4gICAgcmV0dXJuICdwYWRkaW5nLWxldmVsLScgKyBub2RlLmxldmVsO1xuICB9XG5cbiAgZ2V0Um93Q2xhc3NBc3NvY2lhdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5pc01vZGVBc3NvY2lhdGlvbiA/ICdoZWxpc2EtdHJlZS1yb3ctYXNzb2NpYXRpb24nIDogJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTmV4dFZpc2libGVPYmplY3RzKG5vZGVGcm9tOiBUKTogdm9pZCB7XG4gICAgY29uc3QgdmlzaWJsZU9iamVjdHM6IFRbXSA9IFtdO1xuICAgIHRoaXMudmlzaWJsZU9iamVjdHMuZm9yRWFjaCgoaXRlbTogVCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pKSB7XG4gICAgICAgIGlmIChub2RlRnJvbSAmJiB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihub2RlRnJvbSkucHJlb3JkZXIgPj0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb24oaXRlbSkucHJlb3JkZXIpIHtcbiAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpdGVtW3RoaXMuc2VydmljZS5nZXRJZEZpZWxkKCldKS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnZpc2libGVMaW1pdCA9IHZpc2libGVPYmplY3RzLmxlbmd0aCArIHRoaXMudmlzaWJsZVNpemU7XG4gICAgdGhpcy5hbGxOb2RlLmZvckVhY2goKGl0ZW06IEhlbGlzYU5vZGU8VD4pOiB2b2lkID0+IHtcbiAgICAgIGlmICh2aXNpYmxlT2JqZWN0cy5sZW5ndGggPCB0aGlzLnZpc2libGVMaW1pdCAmJlxuICAgICAgICAoIW5vZGVGcm9tIHx8IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKG5vZGVGcm9tKS5wcmVvcmRlciA8IGl0ZW0ucHJlb3JkZXIpKSB7XG4gICAgICAgIGNvbnN0IGlkUGFyZW50OiBzdHJpbmcgPSBpdGVtLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRQYXJlbnRGaWVsZCgpXTtcbiAgICAgICAgaWYgKCFpZFBhcmVudCkge1xuICAgICAgICAgIHZpc2libGVPYmplY3RzLnB1c2goaXRlbS5vYmplY3QpO1xuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50SW5mb3JtYXRpb246IEhlbGlzYU5vZGU8VD4gPSB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaWRQYXJlbnQpO1xuICAgICAgICAgIGlmIChwYXJlbnRJbmZvcm1hdGlvbi52aXNpYmxlICYmIHBhcmVudEluZm9ybWF0aW9uLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICB2aXNpYmxlT2JqZWN0cy5wdXNoKGl0ZW0ub2JqZWN0KTtcbiAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy52aXNpYmxlT2JqZWN0cyA9IHZpc2libGVPYmplY3RzO1xuICB9XG5cbiAgY29sbGFwc2VOb2RlKGl0ZW06IFQpOiB2b2lkIHtcbiAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHMoaXRlbSk7XG4gIH1cblxuICBleHBhbmROb2RlKGl0ZW06IFQpOiB2b2lkIHtcbiAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbkJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkuZXhwYW5kZWQgPSB0cnVlO1xuICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhpdGVtKTtcbiAgfVxuXG4gIHNob3dOZXh0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aXNpYmxlT2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxvYWROZXh0VmlzaWJsZU9iamVjdHModGhpcy52aXNpYmxlT2JqZWN0c1t0aGlzLnZpc2libGVPYmplY3RzLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmlzaWJsZURhdGEoKTogUmVhZG9ubHlBcnJheTxUPiB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZU9iamVjdHM7XG4gIH1cblxuICByZW1vdmVJdGVtKGl0ZW06IFQpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUJ5SWQoaXRlbVt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XG4gIH1cblxuICByZW1vdmVCeUlkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGlkKSkge1xuICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZCkub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldO1xuICAgICAgY29uc3Qgc2V0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgc2V0LmFkZChpZCk7XG4gICAgICBjb25zdCBiZWdpbkluZGV4OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUuZmluZEluZGV4KFxuICAgICAgICAoaXRlbVNlYXJjaDogSGVsaXNhTm9kZTxUPik6IGJvb2xlYW4gPT4gaXRlbVNlYXJjaC5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGlkXG4gICAgICApO1xuICAgICAgbGV0IGxhc3RJbmRleDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGJlZ2luSW5kZXggKyAxOyBpIDwgdGhpcy5hbGxOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1TZWFyY2g6IFQgPSB0aGlzLmFsbE5vZGVbaV0ub2JqZWN0O1xuICAgICAgICBpZiAoc2V0LmhhcyhpdGVtU2VhcmNoW3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldKSkge1xuICAgICAgICAgIHNldC5hZGQoaXRlbVNlYXJjaFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdEluZGV4ID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZGVsZXRlZEl0ZW1zOiBIZWxpc2FOb2RlPFQ+W10gPSB0aGlzLmFsbE5vZGUuc3BsaWNlKGJlZ2luSW5kZXgsIGxhc3RJbmRleCAtIGJlZ2luSW5kZXgpO1xuICAgICAgbGV0IHBhcmVudEhhdmVDaGlsZHJlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgZGVsZXRlZEl0ZW1zLmZvckVhY2goKGRlbGV0ZWRJdGVtOiBIZWxpc2FOb2RlPFQ+KTogYm9vbGVhbiA9PiB0aGlzLnNlYXJjaE5vZGUuZGVsZXRlKGRlbGV0ZWRJdGVtLm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSkpO1xuICAgICAgdGhpcy5hbGxOb2RlLmZvckVhY2goKHNlYXJjaEl0ZW06IEhlbGlzYU5vZGU8VD4sIGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgc2VhcmNoSXRlbS5wcmVvcmRlciA9IGluZGV4ICsgMTtcbiAgICAgICAgaWYgKHNlYXJjaEl0ZW0ub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldID09PSBpZFBhcmVudCkge1xuICAgICAgICAgIHBhcmVudEhhdmVDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGlkUGFyZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uQnlJZChpZFBhcmVudCkuaGF2ZUNoaWxkcmVuID0gcGFyZW50SGF2ZUNoaWxkcmVuO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkTmV4dFZpc2libGVPYmplY3RzKGJlZ2luSW5kZXggPiAwID8gdGhpcy5hbGxOb2RlW2JlZ2luSW5kZXggLSAxXS5vYmplY3QgOiBudWxsKTtcbiAgICB9XG4gIH1cblxuICBhZGRJdGVtKGl0ZW06IFQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleFBhcmVudDogbnVtYmVyID0gdGhpcy5hbGxOb2RlLmZpbmRJbmRleCgobm9kZTogSGVsaXNhTm9kZTxUPik6IGJvb2xlYW4gPT4gbm9kZS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xuICAgIGlmIChpbmRleFBhcmVudCA+PSAwKSB7XG4gICAgICB0aGlzLmFsbE5vZGUucHVzaCh0aGlzLmNyZWF0ZU5vZGUoaXRlbSkpO1xuICAgICAgdGhpcy5hbGxOb2RlW2luZGV4UGFyZW50XS5oYXZlQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgdGhpcy5yZVNvcnQoKTtcbiAgICAgIHRoaXMuZXhwYW5kTm9kZSh0aGlzLmFsbE5vZGVbaW5kZXhQYXJlbnRdLm9iamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKCdObyBleGlzdGUgZWwgcGFkcmUuJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSXRlbShpdGVtOiBUKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKGl0ZW0pKSB7XG4gICAgICB0aGlzLmdldE5vZGVJbmZvcm1hdGlvbihpdGVtKS5vYmplY3QgPSBpdGVtO1xuICAgICAgdGhpcy5yZVNvcnQoKTtcbiAgICAgIGNvbnN0IGluZGV4UGFyZW50OiBudW1iZXIgPSB0aGlzLmFsbE5vZGUuZmluZEluZGV4KFxuICAgICAgICAobm9kZTogSGVsaXNhTm9kZTxUPik6IGJvb2xlYW4gPT4gbm9kZS5vYmplY3RbdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0gPT09IGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkUGFyZW50RmllbGQoKV0pO1xuICAgICAgaWYgKGluZGV4UGFyZW50ID49IDApIHtcbiAgICAgICAgdGhpcy5leHBhbmROb2RlKHRoaXMuYWxsTm9kZVtpbmRleFBhcmVudF0ub2JqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZE5leHRWaXNpYmxlT2JqZWN0cyhudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlU29ydCgpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtczogVFtdID0gdGhpcy5hbGxOb2RlLm1hcCgobm9kZTogSGVsaXNhTm9kZTxUPik6IFQgPT4gbm9kZS5vYmplY3QpO1xuICAgIGl0ZW1zLnNvcnQoKGE6IFQsIGI6IFQpOiBudW1iZXIgPT4gdGhpcy5zZXJ2aWNlLmNvbXBhcmUoYSwgYikpO1xuICAgIGNvbnN0IHByZW9yZGVyOiBUW10gPSB0aGlzLnNvcnRJdGVtcyhpdGVtcyk7XG4gICAgcHJlb3JkZXIuZm9yRWFjaCgob2JqZWN0OiBULCBpbmRleDogbnVtYmVyKTogbnVtYmVyID0+IHRoaXMuZ2V0Tm9kZUluZm9ybWF0aW9uKG9iamVjdCkucHJlb3JkZXIgPSBpbmRleCArIDEpO1xuICAgIHRoaXMuYWxsTm9kZS5zb3J0KChub2RlQTogSGVsaXNhTm9kZTxUPiwgbm9kZUI6IEhlbGlzYU5vZGU8VD4pOiBudW1iZXIgPT4gbm9kZUEucHJlb3JkZXIgLSBub2RlQi5wcmVvcmRlcik7XG4gIH1cblxuICBwdWJsaWMgZXhwYW5kVG9JdGVtKGl0ZW06IFQpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlOiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5nZXROb2RlSW5mb3JtYXRpb25CeUlkKGl0ZW1bdGhpcy5zZXJ2aWNlLmdldElkRmllbGQoKV0pO1xuICAgIGlmICghbm9kZS5leHBhbmRlZCkge1xuICAgICAgY29uc3QgaWRQYXJlbnQ6IHN0cmluZyA9IG5vZGUub2JqZWN0W3RoaXMuc2VydmljZS5nZXRJZFBhcmVudEZpZWxkKCldO1xuICAgICAgY29uc3QgcGFyZW50OiBIZWxpc2FOb2RlPFQ+ID0gdGhpcy5hbGxOb2RlLmZpbmQoKHBhcmVudDogSGVsaXNhTm9kZTxUPikgPT4gcGFyZW50Lm9iamVjdFt0aGlzLnNlcnZpY2UuZ2V0SWRGaWVsZCgpXSA9PT0gaWRQYXJlbnQpO1xuICAgICAgaWYoaWRQYXJlbnQgJiYgcGFyZW50KSB7XG4gICAgICAgIHRoaXMuZXhwYW5kVG9JdGVtKHBhcmVudC5vYmplY3QpO1xuICAgICAgfVxuICAgICAgdGhpcy5leHBhbmROb2RlKGl0ZW0pO1xuICAgIH1cbiAgfVxufVxuIl19