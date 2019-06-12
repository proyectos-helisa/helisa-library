/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { TreeHelisaService } from './tree-helisa.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { TreeHelisaConnect } from './tree-helisa-connect';
/**
 * @record
 */
export function RequestTreeHelisa() { }
if (false) {
    /** @type {?} */
    RequestTreeHelisa.prototype.page;
}
export class TreeHelisaComponent {
    //#endregion ====== Variables ========
    /**
     * @param {?} treeHelisaService
     * @param {?} router
     * @param {?} elementRef
     */
    constructor(treeHelisaService, router, elementRef) {
        this.treeHelisaService = treeHelisaService;
        this.router = router;
        this.elementRef = elementRef;
        /**
         * Establece si se mostraran las opciones de
         * Creacion, edición y eliminacion del nodo
         */
        this.showOptionsNode = true;
        /**
         * Retorna el id del nodo removido
         */
        this.removed = new EventEmitter();
        /**
         * Retorna un nodo editado
         */
        this.edited = new EventEmitter();
        /**
         * Retorna un nodo sin id del nodo , pero si con el parent
         * para conocer a cual fue añadido
         */
        this.added = new EventEmitter();
        this.collapseParent = new EventEmitter();
        this.rangeScrolled = new EventEmitter();
        this.nodeSelected = new EventEmitter();
        this.dobleClick = new EventEmitter();
        this.keypressDelete = new EventEmitter();
        this.keypressInsert = new EventEmitter();
        this.treeControl = new NestedTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        node => node.children));
        this.dataSource = new MatTreeNestedDataSource();
        this.isSingleClick = true;
        this.currentNode = null;
        //#endregion ======= Events ========
        //#region  ======== Metodos =============
        /**
         * Verifica si el nodo tiene hijos
         */
        this.hasChild = (/**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */
        (_, node) => !!node.children && node.children.length > 0);
        //cargar datos pasados por el @Input
        if (!!this.data) {
            /** @type {?} */
            let data = this.data;
            this.data = null;
            this.receivePage(data.children);
        }
        else {
            this.dataSource.data = [];
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // si se cargan datos por medio del servicio
        this.treeHelisaService.dataSourceObservable
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (!!res && !!res.children) {
                this.receivePage(res.children);
            }
            else {
                this.dataSource.data = [];
            }
        }));
        // Observable, si cambia el nodo seleccionado por medio del servicio
        this.treeHelisaService.nodeSelected
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (!!this.data && !!this.data.children)
                this.selectNode(this.data, res);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.elementRef.nativeElement
            .addEventListener('keydown', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            console.log(event);
        }));
    }
    //#region  ====== Events ===========
    /**
     * @param {?} node
     * @return {?}
     */
    onRedirect(node) {
        this.isSingleClick = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.isSingleClick) {
                this.selectNode(this.data, node.id);
                // if(!!node && !node.children){
                if (!!node) {
                    this.nodeSelected.emit(node.id);
                    this.currentNode = node;
                }
            }
        }), 350);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        /** @type {?} */
        const element = event.target;
        if ((element.offsetHeight + element.scrollTop) >= element.scrollHeight) {
            this.goNextPage();
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    onEdit(node) {
        console.log(node.id);
        console.log(node);
        node.isEditable = true;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    onAdd(node) {
        // si no tiene hijos instanciar el array
        if (!node.children) {
            node.children = [];
        }
        node.children.push({
            id: null,
            name: "",
            isSelected: false,
            parent: node,
            isEditable: true
        });
        this.refreshTree();
    }
    /**
     * @param {?} node
     * @return {?}
     */
    onDelete(node) {
        // Remueve el nodo utilizando la libreria de lodash   
        _.remove(node.parent.children, node);
        this.refreshTree();
        this.removed.emit(node.id);
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    onEdited(node, value) {
        node.name = value;
        if (node.id == null && node.name == "") {
            _.remove(node.parent.children, node);
            this.refreshTree();
        }
        else if (node.id && node.id != null && node.name.trim() !== "") {
            this.edited.emit(node);
            node.isEditable = false;
        }
        else if (!!node.id && node.id == null && node.name.trim() !== "") {
            this.added.emit(node);
            node.isEditable = false;
        }
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    onCancel(node, value) {
        // Si no tiene id por ser un nuevo item, lo elimina
        if (node.id == null) {
            _.remove(node.parent.children, node);
            this.refreshTree();
        }
        node.isEditable = false;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    onDblClick(node) {
        this.isSingleClick = false;
        this.dobleClick.emit(node.id);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        switch (event.key) {
            case 'Delete':
                this.keypressDelete.emit((!!this.currentNode && this.currentNode.id) ? this.currentNode.id : null);
                break;
            case 'Insert':
                this.keypressInsert.emit((!!this.currentNode && this.currentNode.id) ? this.currentNode.id : null);
                break;
        }
    }
    /**
     * Obtiene la descripcion completa del nodo
     * \@example Nodo padre,nodo hijo,nodo nieto
     * @param {?} node Debe tener todos los parent llenos hacia arriba
     * @return {?}
     */
    static getDescription(node) {
        /** @type {?} */
        let result = [node.name];
        /** @type {?} */
        let concat = "";
        if (node.parent) {
            result.push(this.getDescription(node.parent));
        }
        if (result.length == 1)
            return node.name;
        result = result.reverse();
        for (let i = 0; i < result.length; i++) {
            /** @type {?} */
            let element = result[i];
            concat = concat + element + ((i == result.length - 1) ? "" : ",");
        }
        return concat;
    }
    /**
     * Actualiza el arbol
     * @private
     * @return {?}
     */
    refreshTree() {
        /** @type {?} */
        let _data = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = _data;
    }
    /**
     * @private
     * @return {?}
     */
    goNextPage() {
        if (!this.treeHelisaConnect.isLastPage && !this.treeHelisaConnect.isUsed) {
            this.treeHelisaConnect.isUsed = true;
            this.rangeScrolled.emit({
                page: this.treeHelisaConnect.nextPage()
            });
        }
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    receivePage(data) {
        if (!this.data) {
            this.data = { id: null, name: "root", isSelected: false };
        }
        if (!this.data.children) {
            this.data.children = new Array();
            this.treeHelisaConnect = new TreeHelisaConnect();
        }
        this.data.children = this.data.children.concat(data);
        this.data.children.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            this.fillParent(node, this.data);
        }));
        this.dataSource.data = this.data.children;
        this.treeHelisaConnect.isLastPage = data.length === 0;
        this.treeHelisaConnect.isUsed = false;
    }
    /**
     * Llenan el campo parent de todos los nodos hijos
     * @private
     * @param {?} node
     * @param {?} parent
     * @return {?}
     */
    fillParent(node, parent) {
        node.parent = parent;
        if (node.children && node.children.length > 0) {
            node.children.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                this.fillParent(item, node);
            }));
        }
    }
    /**
     * coloca como true del isSelected del nodo que concuerde con el id
     * @private
     * @param {?} node
     * @param {?} id
     * @return {?}
     */
    selectNode(node, id) {
        this.upSelectNode(node);
        if (node.id == id) {
            node.isSelected = true;
            return node;
        }
        else if (node.children != null) {
            /** @type {?} */
            var i;
            /** @type {?} */
            var result = null;
            for (i = 0; result == null && i < node.children.length; i++) {
                result = this.selectNode(node.children[i], id);
            }
            return result;
        }
        return null;
    }
    /**
     * Elimina el isSelected de todos los nodos
     * @private
     * @param {?} node
     * @return {?}
     */
    upSelectNode(node) {
        node.isSelected = false;
        if (!!node.children)
            for (var i = 0; i < node.children.length; i++) {
                this.upSelectNode(node.children[i]);
            }
    }
}
TreeHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-tree',
                template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\" >\r\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n  <!-- This is the tree node template for leaf nodes -->\r\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n    <li class=\"mat-tree-node\" [ngStyle]=\"{'color': node.colorStyle}\" [ngClass]=\"{'isSelected': node.isSelected}\"\r\n    (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" *ngIf=\"!node.isEditable\">\r\n      <!-- use a disabled button to provide padding for tree leaf -->\r\n      <button mat-icon-button disabled></button>\r\n      <label (keydown)=\"onKeyDown($event)\">{{node.name}}</label>\r\n    </li>\r\n    <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n        <button mat-icon-button (click)=\"onEdit(node)\"><mat-icon>edit</mat-icon></button>\r\n        <button mat-icon-button (click)=\"onAdd(node)\"><mat-icon>add</mat-icon></button>\r\n        <button mat-icon-button (click)=\"onDelete(node)\"><mat-icon>delete</mat-icon></button>\r\n      </li>\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">          \r\n          <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\" (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n      </li>\r\n  </mat-tree-node>\r\n  <!-- This is the tree node template for expandable nodes -->\r\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\r\n    <li>\r\n      <div class=\"mat-tree-node tree-options\"  *ngIf=\"!node.isEditable\" \r\n      [ngStyle]=\"{'color': node.colorStyle}\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" [ngClass]=\"{'isSelected': node.isSelected}\">\r\n        <button mat-icon-button matTreeNodeToggle\r\n                [attr.aria-label]=\"'toggle ' + node.name\">\r\n          <mat-icon class=\"mat-icon-rtl-mirror\">\r\n            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n          </mat-icon>\r\n        </button>\r\n        {{node.name}}        \r\n      </div>\r\n      <div class=\"tree-options\">\r\n          <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n              <button mat-icon-button (click)=\"onEdit(node)\"><mat-icon>edit</mat-icon></button>\r\n              <button mat-icon-button (click)=\"onAdd(node)\"><mat-icon>add</mat-icon></button>\r\n              <button mat-icon-button (click)=\"onDelete(node)\"><mat-icon>delete</mat-icon></button>\r\n            </li>\r\n            <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n                <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\" (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n            </li>\r\n      </div>\r\n      <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\r\n        <ng-container matTreeNodeOutlet></ng-container>\r\n      </ul>\r\n    </li>       \r\n  </mat-nested-tree-node>\r\n</mat-tree>\r\n</div>\r\n",
                host: {
                    '(document:keyup)': 'onKeyDown($event)'
                },
                styles: [".example-tree-invisible{display:none}.example-tree li,.example-tree ul{margin-top:0;margin-bottom:0;list-style-type:none}.isSelected{background:red}.tree-options{display:inline}.container-tree{overflow:scroll;height:350px;width:100%}"]
            }] }
];
/** @nocollapse */
TreeHelisaComponent.ctorParameters = () => [
    { type: TreeHelisaService },
    { type: Router },
    { type: ElementRef }
];
TreeHelisaComponent.propDecorators = {
    data: [{ type: Input }],
    showOptionsNode: [{ type: Input }],
    removed: [{ type: Output }],
    edited: [{ type: Output }],
    added: [{ type: Output }],
    collapseParent: [{ type: Output }],
    rangeScrolled: [{ type: Output }],
    nodeSelected: [{ type: Output }],
    dobleClick: [{ type: Output }],
    keypressDelete: [{ type: Output }],
    keypressInsert: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TreeHelisaComponent.prototype.treeHelisaConnect;
    /** @type {?} */
    TreeHelisaComponent.prototype.formEdit;
    /**
     * Datos del Arbol
     * @type {?}
     */
    TreeHelisaComponent.prototype.data;
    /**
     * Establece si se mostraran las opciones de
     * Creacion, edición y eliminacion del nodo
     * @type {?}
     */
    TreeHelisaComponent.prototype.showOptionsNode;
    /**
     * Retorna el id del nodo removido
     * @type {?}
     */
    TreeHelisaComponent.prototype.removed;
    /**
     * Retorna un nodo editado
     * @type {?}
     */
    TreeHelisaComponent.prototype.edited;
    /**
     * Retorna un nodo sin id del nodo , pero si con el parent
     * para conocer a cual fue añadido
     * @type {?}
     */
    TreeHelisaComponent.prototype.added;
    /** @type {?} */
    TreeHelisaComponent.prototype.collapseParent;
    /** @type {?} */
    TreeHelisaComponent.prototype.rangeScrolled;
    /** @type {?} */
    TreeHelisaComponent.prototype.nodeSelected;
    /** @type {?} */
    TreeHelisaComponent.prototype.dobleClick;
    /** @type {?} */
    TreeHelisaComponent.prototype.keypressDelete;
    /** @type {?} */
    TreeHelisaComponent.prototype.keypressInsert;
    /** @type {?} */
    TreeHelisaComponent.prototype.treeControl;
    /** @type {?} */
    TreeHelisaComponent.prototype.dataSource;
    /** @type {?} */
    TreeHelisaComponent.prototype.isSingleClick;
    /** @type {?} */
    TreeHelisaComponent.prototype.currentNode;
    /**
     * Verifica si el nodo tiene hijos
     * @type {?}
     */
    TreeHelisaComponent.prototype.hasChild;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaComponent.prototype.treeHelisaService;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUsxRCx1Q0FFQzs7O0lBREMsaUNBQWE7O0FBV2YsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQWlEOUIsWUFBb0IsaUJBQW1DLEVBQzdDLE1BQWEsRUFDYixVQUFxQjtRQUZYLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDN0MsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLGVBQVUsR0FBVixVQUFVLENBQVc7Ozs7O1FBcEN0QixvQkFBZSxHQUFXLElBQUksQ0FBQzs7OztRQU05QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQzs7OztRQUtyQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7UUFNbEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDakMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzdDLGtCQUFhLEdBQUcsSUFB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S0FBSztzQkFNTCxNQUFNO3FCQUtOLE1BQU07b0JBTU4sTUFBTTs2QkFDTixNQUFNOzRCQUNOLE1BQU07MkJBQ04sTUFBTTt5QkFDTixNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTs7Ozs7OztJQW5DUCxnREFBbUQ7O0lBQ25ELHVDQUFxQjs7Ozs7SUFJckIsbUNBQW1COzs7Ozs7SUFPbkIsOENBQXdDOzs7OztJQU14QyxzQ0FBK0M7Ozs7O0lBSy9DLHFDQUE0Qzs7Ozs7O0lBTTVDLG9DQUEyQzs7SUFDM0MsNkNBQXVEOztJQUN2RCw0Q0FBZ0U7O0lBQ2hFLDJDQUFvRDs7SUFDcEQseUNBQWtEOztJQUNsRCw2Q0FBNkQ7O0lBQzdELDZDQUE2RDs7SUFFN0QsMENBQWlFOztJQUNqRSx5Q0FBaUQ7O0lBR2pELDRDQUE4Qjs7SUFDOUIsMENBQXlCOzs7OztJQThKekIsdUNBQWtGOzs7OztJQTFKdEUsZ0RBQTJDOzs7OztJQUNyRCxxQ0FBcUI7Ozs7O0lBQ3JCLHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRUcmVlQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcclxuaW1wb3J0IHsgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGUnO1xyXG5pbXBvcnQgeyBUcmVlSGVsaXNhU2VydmljZSB9IGZyb20gJy4vdHJlZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgVHJlZUhlbGlzYUNvbm5lY3QgfSBmcm9tICcuL3RyZWUtaGVsaXNhLWNvbm5lY3QnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VHJlZUhlbGlzYSB7XHJcbiAgcGFnZTogbnVtYmVyOyAgXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLXRyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdHJlZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXSxcclxuICBob3N0OntcclxuICAgICcoZG9jdW1lbnQ6a2V5dXApJzogJ29uS2V5RG93bigkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09IFZhcmlhYmxlcyA9PT09PT09PT09PT09XHJcbiAgcHJpdmF0ZSB0cmVlSGVsaXNhQ29ubmVjdDogVHJlZUhlbGlzYUNvbm5lY3Q8Tm9kZT47XHJcbiAgZm9ybUVkaXQ6Rm9ybUNvbnRyb2w7XHJcbiAgLyoqXHJcbiAgICogRGF0b3MgZGVsIEFyYm9sXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0YTpOb2RlO1xyXG5cclxuICBcclxuICAvKipcclxuICAgKiBFc3RhYmxlY2Ugc2kgc2UgbW9zdHJhcmFuIGxhcyBvcGNpb25lcyBkZSBcclxuICAgKiBDcmVhY2lvbiwgZWRpY2nDs24geSBlbGltaW5hY2lvbiBkZWwgbm9kb1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dPcHRpb25zTm9kZTpib29sZWFuID0gdHJ1ZTsgXHJcbiAgXHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgZWwgaWQgZGVsIG5vZG8gcmVtb3ZpZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIHVuIG5vZG8gZWRpdGFkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW4gbm9kbyBzaW4gaWQgZGVsIG5vZG8gLCBwZXJvIHNpIGNvbiBlbCBwYXJlbnRcclxuICAgKiBwYXJhIGNvbm9jZXIgYSBjdWFsIGZ1ZSBhw7FhZGlkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBhZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcclxuICBAT3V0cHV0KCkgY29sbGFwc2VQYXJlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJhbmdlU2Nyb2xsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlcXVlc3RUcmVlSGVsaXNhPigpO1xyXG4gIEBPdXRwdXQoKSBub2RlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgZG9ibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBrZXlwcmVzc0RlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkga2V5cHJlc3NJbnNlcnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IG51bGw+KCk7XHJcbiAgXHJcbiAgdHJlZUNvbnRyb2wgPSBuZXcgTmVzdGVkVHJlZUNvbnRyb2w8Tm9kZT4obm9kZSA9PiBub2RlLmNoaWxkcmVuKTtcclxuICBkYXRhU291cmNlID0gbmV3IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlPE5vZGU+KCk7XHJcblxyXG5cclxuICBpc1NpbmdsZUNsaWNrOiBCb29sZWFuID0gdHJ1ZTsgIFxyXG4gIGN1cnJlbnROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgLy8jZW5kcmVnaW9uID09PT09PSBWYXJpYWJsZXMgPT09PT09PT1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVlSGVsaXNhU2VydmljZTpUcmVlSGVsaXNhU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOlJvdXRlcixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjpFbGVtZW50UmVmKSB7ICAgIFxyXG4gICAgICBcclxuICAgIC8vY2FyZ2FyIGRhdG9zIHBhc2Fkb3MgcG9yIGVsIEBJbnB1dFxyXG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7ICAgICAgXHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICB0aGlzLmRhdGEgPSBudWxsO1xyXG4gICAgICB0aGlzLnJlY2VpdmVQYWdlKGRhdGEuY2hpbGRyZW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIG5nT25Jbml0KCkgeyAgICAgXHJcbiAgICAvLyBzaSBzZSBjYXJnYW4gZGF0b3MgcG9yIG1lZGlvIGRlbCBzZXJ2aWNpb1xyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5kYXRhU291cmNlT2JzZXJ2YWJsZSAgICBcclxuICAgIC5zdWJzY3JpYmUoKHJlcykgPT4geyAgICAgICAgICAgIFxyXG4gICAgICBpZighIXJlcyAmJiAhIXJlcy5jaGlsZHJlbil7ICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLnJlY2VpdmVQYWdlKHJlcy5jaGlsZHJlbilcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXTtcclxuICAgICAgfSAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUsIHNpIGNhbWJpYSBlbCBub2RvIHNlbGVjY2lvbmFkbyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVTZWxlY3RlZFxyXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XHJcbiAgICAgICAgaWYoISF0aGlzLmRhdGEgJiYgISF0aGlzLmRhdGEuY2hpbGRyZW4pXHJcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSxyZXMpO1xyXG4gICAgICB9KVxyXG4gICAgIFxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8jcmVnaW9uICA9PT09PT0gRXZlbnRzID09PT09PT09PT09XHJcbiAgb25SZWRpcmVjdChub2RlOk5vZGUpe1xyXG5cclxuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzU2luZ2xlQ2xpY2spe1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsbm9kZS5pZCk7ICAgIFxyXG5cclxuICAgICAgICAgICAgICAvLyBpZighIW5vZGUgJiYgIW5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgICAgICAgIGlmKCEhbm9kZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVTZWxlY3RlZC5lbWl0KG5vZGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sMzUwKSAgIFxyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGlmICgoZWxlbWVudC5vZmZzZXRIZWlnaHQgKyBlbGVtZW50LnNjcm9sbFRvcCkgPj0gZWxlbWVudC5zY3JvbGxIZWlnaHQpIHsgICAgICBcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVkaXQobm9kZTpOb2RlKXtcclxuICAgIGNvbnNvbGUubG9nKG5vZGUuaWQpXHJcbiAgICBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgbm9kZS5pc0VkaXRhYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uQWRkKG5vZGU6Tm9kZSl7XHJcbiAgICAvLyBzaSBubyB0aWVuZSBoaWpvcyBpbnN0YW5jaWFyIGVsIGFycmF5XHJcbiAgICBpZighbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxuICAgIG5vZGUuY2hpbGRyZW4ucHVzaChcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsICAgICAgIFxyXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHBhcmVudCA6IG5vZGUsXHJcbiAgICAgICAgaXNFZGl0YWJsZSA6IHRydWVcclxuICAgICAgfVxyXG4gICAgKTsgICAgIFxyXG4gICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGUobm9kZTpOb2RlKXsgXHJcbiAgICAvLyBSZW11ZXZlIGVsIG5vZG8gdXRpbGl6YW5kbyBsYSBsaWJyZXJpYSBkZSBsb2Rhc2ggICBcclxuICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuICAgIFxyXG4gICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgdGhpcy5yZW1vdmVkLmVtaXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRlZChub2RlOk5vZGUsdmFsdWU6YW55KXtcclxuICAgIFxyXG4gICAgICBub2RlLm5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICAgIGlmKG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUgPT0gXCJcIil7ICAgICAgICAgICAgICBcclxuICAgICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYobm9kZS5pZCAmJiBub2RlLmlkICE9IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gXCJcIil7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWQuZW1pdChub2RlKTtcclxuICAgICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgfWVsc2UgaWYoISFub2RlLmlkICYmIG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUudHJpbSgpICE9PSBcIlwiKXtcclxuICAgICAgICB0aGlzLmFkZGVkLmVtaXQobm9kZSk7XHJcbiAgICAgICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0gICAgICAgICBcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKG5vZGU6Tm9kZSx2YWx1ZTpzdHJpbmcpe1xyXG4gICAgLy8gU2kgbm8gdGllbmUgaWQgcG9yIHNlciB1biBudWV2byBpdGVtLCBsbyBlbGltaW5hXHJcbiAgICBpZihub2RlLmlkID09IG51bGwpe1xyXG4gICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlOyBcclxuICB9XHJcblxyXG4gIG9uRGJsQ2xpY2sobm9kZTpOb2RlKXtcclxuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb2JsZUNsaWNrLmVtaXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZXZlbnQ6S2V5Ym9hcmRFdmVudCl7ICAgIFxyXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSAnRGVsZXRlJzpcclxuICAgICAgICB0aGlzLmtleXByZXNzRGVsZXRlLmVtaXQoKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLmlkKT90aGlzLmN1cnJlbnROb2RlLmlkOm51bGwpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0luc2VydCc6XHJcbiAgICAgICAgdGhpcy5rZXlwcmVzc0luc2VydC5lbWl0KCghIXRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCk/dGhpcy5jdXJyZW50Tm9kZS5pZDpudWxsKVxyXG4gICAgICAgIGJyZWFrOyAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT09IEV2ZW50cyA9PT09PT09PVxyXG5cclxuXHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09PT0gTWV0b2RvcyA9PT09PT09PT09PT09XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWNhIHNpIGVsIG5vZG8gdGllbmUgaGlqb3NcclxuICAgKi9cclxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IE5vZGUpID0+ICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9idGllbmUgbGEgZGVzY3JpcGNpb24gY29tcGxldGEgZGVsIG5vZG9cclxuICAgKiBAZXhhbXBsZSBOb2RvIHBhZHJlLG5vZG8gaGlqbyxub2RvIG5pZXRvXHJcbiAgICogQHBhcmFtIG5vZGUgRGViZSB0ZW5lciB0b2RvcyBsb3MgcGFyZW50IGxsZW5vcyBoYWNpYSBhcnJpYmFcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldERlc2NyaXB0aW9uKG5vZGU6Tm9kZSk6c3RyaW5ne1xyXG4gICAgICBsZXQgcmVzdWx0OnN0cmluZ1tdPVtub2RlLm5hbWVdOyAgICAgICAgXHJcbiAgICAgIGxldCBjb25jYXQ6c3RyaW5nPVwiXCI7XHJcblxyXG4gICAgICBpZihub2RlLnBhcmVudCl7ICAgICAgICAgIFxyXG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZ2V0RGVzY3JpcHRpb24obm9kZS5wYXJlbnQpKVxyXG4gICAgICB9ICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgIGlmKHJlc3VsdC5sZW5ndGggPT0gMSlcclxuICAgICAgICAgIHJldHVybiBub2RlLm5hbWU7XHJcblxyXG4gICAgICByZXN1bHQgPSByZXN1bHQucmV2ZXJzZSgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHsgICAgICAgICAgICBcclxuICAgICAgICAgIGxldCBlbGVtZW50ID0gcmVzdWx0W2ldO1xyXG4gICAgICAgICAgY29uY2F0ID0gY29uY2F0ICsgZWxlbWVudCArICgoaSA9PSByZXN1bHQubGVuZ3RoLTEpP1wiXCI6XCIsXCIpOyAgICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICByZXR1cm4gY29uY2F0O1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdHVhbGl6YSBlbCBhcmJvbFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVmcmVzaFRyZWUoKXtcclxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhOyBcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDsgXHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IF9kYXRhOyBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpIHtcclxuICAgIGlmICghdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc0xhc3RQYWdlICYmICF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCkge1xyXG4gICAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucmFuZ2VTY3JvbGxlZC5lbWl0KHtcclxuICAgICAgICBwYWdlOiB0aGlzLnRyZWVIZWxpc2FDb25uZWN0Lm5leHRQYWdlKCkgICAgICAgICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogTm9kZVtdKSB7ICAgIFxyXG4gICAgaWYoIXRoaXMuZGF0YSl7IHRoaXMuZGF0YSA9IHtpZDpudWxsLG5hbWU6XCJyb290XCIsaXNTZWxlY3RlZDpmYWxzZX19XHJcbiAgICBpZiAoIXRoaXMuZGF0YS5jaGlsZHJlbikgeyB0aGlzLmRhdGEuY2hpbGRyZW4gPSBuZXcgQXJyYXk8Tm9kZT4oKTsgdGhpcy50cmVlSGVsaXNhQ29ubmVjdCA9IG5ldyBUcmVlSGVsaXNhQ29ubmVjdDxOb2RlPigpOyB9ICAgIFxyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gdGhpcy5kYXRhLmNoaWxkcmVuLmNvbmNhdChkYXRhKTtcclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbi5mb3JFYWNoKG5vZGU9PntcclxuICAgICAgdGhpcy5maWxsUGFyZW50KG5vZGUsdGhpcy5kYXRhKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSB0aGlzLmRhdGEuY2hpbGRyZW47XHJcbiAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgPSBkYXRhLmxlbmd0aCA9PT0gMDtcclxuICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMbGVuYW4gZWwgY2FtcG8gcGFyZW50IGRlIHRvZG9zIGxvcyBub2RvcyBoaWpvc1xyXG4gICAqIEBwYXJhbSBub2RlIFxyXG4gICAqIEBwYXJhbSBwYXJlbnQgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBmaWxsUGFyZW50KG5vZGU6Tm9kZSxwYXJlbnQ6Tm9kZSl7XHJcblxyXG4gICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICBpZihub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgdGhpcy5maWxsUGFyZW50KGl0ZW0sbm9kZSk7ICAgXHJcbiAgICAgIH0pICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogY29sb2NhIGNvbW8gdHJ1ZSBkZWwgaXNTZWxlY3RlZCBkZWwgbm9kbyBxdWUgY29uY3VlcmRlIGNvbiBlbCBpZFxyXG4gICAqIEBwYXJhbSBub2RlIFxyXG4gICAqIEBwYXJhbSBpZCBcclxuICAgKi9cclxuICBwcml2YXRlIHNlbGVjdE5vZGUobm9kZTpOb2RlLGlkOm51bWJlcil7IFxyXG4gICAgICBcclxuICAgICAgdGhpcy51cFNlbGVjdE5vZGUobm9kZSlcclxuICAgICAgXHJcbiAgICAgIGlmKG5vZGUuaWQgPT0gaWQpe1xyXG4gICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWUgICBcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgfWVsc2UgaWYgKG5vZGUuY2hpbGRyZW4gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgZm9yKGk9MDsgcmVzdWx0ID09IG51bGwgJiYgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zZWxlY3ROb2RlKG5vZGUuY2hpbGRyZW5baV0sIGlkKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7IFxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEVsaW1pbmEgZWwgaXNTZWxlY3RlZCBkZSB0b2RvcyBsb3Mgbm9kb3NcclxuICAgKiBAcGFyYW0gbm9kZSBcclxuICAgKi9cclxuICBwcml2YXRlIHVwU2VsZWN0Tm9kZShub2RlOk5vZGUpe1xyXG4gICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgIGlmKCEhbm9kZS5jaGlsZHJlbilcclxuICAgICBmb3IodmFyIGk9MDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLnVwU2VsZWN0Tm9kZShub2RlLmNoaWxkcmVuW2ldKTsgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09IE1ldG9kb3MgPT09PT09PT09PT09XHJcbn1cclxuIl19