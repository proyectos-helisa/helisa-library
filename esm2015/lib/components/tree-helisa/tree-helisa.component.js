/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
     */
    constructor(treeHelisaService, router) {
        this.treeHelisaService = treeHelisaService;
        this.router = router;
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
        this.treeControl = new NestedTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        node => node.children));
        this.dataSource = new MatTreeNestedDataSource();
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
    }
    //#region  ====== Events ===========
    /**
     * @param {?} node
     * @return {?}
     */
    onRedirect(node) {
        this.selectNode(this.data, node.id);
        if (!!node && !node.children) {
            this.nodeSelected.emit(node.id);
        }
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
                template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\r\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n  <!-- This is the tree node template for leaf nodes -->\r\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n    <li class=\"mat-tree-node\" [ngClass]=\"{'isSelected': node.isSelected}\"\r\n    (click)=\"onRedirect(node)\" *ngIf=\"!node.isEditable\">\r\n      <!-- use a disabled button to provide padding for tree leaf -->\r\n      <button mat-icon-button disabled></button>\r\n      {{node.name}}\r\n    </li>\r\n    <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n        <button mat-icon-button (click)=\"onEdit(node)\"><mat-icon>edit</mat-icon></button>\r\n        <button mat-icon-button (click)=\"onAdd(node)\"><mat-icon>add</mat-icon></button>\r\n        <button mat-icon-button (click)=\"onDelete(node)\"><mat-icon>delete</mat-icon></button>\r\n      </li>\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">          \r\n          <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\" (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n      </li>\r\n  </mat-tree-node>\r\n  <!-- This is the tree node template for expandable nodes -->\r\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\r\n    <li>\r\n      <div class=\"mat-tree-node tree-options\" *ngIf=\"!node.isEditable\">\r\n        <button mat-icon-button matTreeNodeToggle\r\n                [attr.aria-label]=\"'toggle ' + node.name\">\r\n          <mat-icon class=\"mat-icon-rtl-mirror\">\r\n            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n          </mat-icon>\r\n        </button>\r\n        {{node.name}}        \r\n      </div>\r\n      <div class=\"tree-options\">\r\n          <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n              <button mat-icon-button (click)=\"onEdit(node)\"><mat-icon>edit</mat-icon></button>\r\n              <button mat-icon-button (click)=\"onAdd(node)\"><mat-icon>add</mat-icon></button>\r\n              <button mat-icon-button (click)=\"onDelete(node)\"><mat-icon>delete</mat-icon></button>\r\n            </li>\r\n            <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n                <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\" (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n            </li>\r\n      </div>\r\n      <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\r\n        <ng-container matTreeNodeOutlet></ng-container>\r\n      </ul>\r\n    </li>       \r\n  </mat-nested-tree-node>\r\n</mat-tree>\r\n</div>\r\n",
                styles: [".example-tree-invisible{display:none}.example-tree li,.example-tree ul{margin-top:0;margin-bottom:0;list-style-type:none}.isSelected{background:red}.tree-options{display:inline}.container-tree{overflow:scroll;height:350px;width:100%}"]
            }] }
];
/** @nocollapse */
TreeHelisaComponent.ctorParameters = () => [
    { type: TreeHelisaService },
    { type: Router }
];
TreeHelisaComponent.propDecorators = {
    data: [{ type: Input }],
    showOptionsNode: [{ type: Input }],
    removed: [{ type: Output }],
    edited: [{ type: Output }],
    added: [{ type: Output }],
    collapseParent: [{ type: Output }],
    rangeScrolled: [{ type: Output }],
    nodeSelected: [{ type: Output }]
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
    TreeHelisaComponent.prototype.treeControl;
    /** @type {?} */
    TreeHelisaComponent.prototype.dataSource;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBSzFELHVDQUVDOzs7SUFEQyxpQ0FBYTs7QUFRZixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUE0QzlCLFlBQW9CLGlCQUFtQyxFQUM3QyxNQUFhO1FBREgsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUM3QyxXQUFNLEdBQU4sTUFBTSxDQUFPOzs7OztRQTlCZCxvQkFBZSxHQUFXLElBQUksQ0FBQzs7OztRQU05QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQzs7OztRQUtyQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7UUFNbEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDakMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzdDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDdEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFB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bml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRUcmVlQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcclxuaW1wb3J0IHsgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGUnO1xyXG5pbXBvcnQgeyBUcmVlSGVsaXNhU2VydmljZSB9IGZyb20gJy4vdHJlZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgVHJlZUhlbGlzYUNvbm5lY3QgfSBmcm9tICcuL3RyZWUtaGVsaXNhLWNvbm5lY3QnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VHJlZUhlbGlzYSB7XHJcbiAgcGFnZTogbnVtYmVyOyAgXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLXRyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdHJlZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXSAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvLyNyZWdpb24gID09PT09PSBWYXJpYWJsZXMgPT09PT09PT09PT09PVxyXG4gIHByaXZhdGUgdHJlZUhlbGlzYUNvbm5lY3Q6IFRyZWVIZWxpc2FDb25uZWN0PE5vZGU+O1xyXG4gIGZvcm1FZGl0OkZvcm1Db250cm9sO1xyXG4gIC8qKlxyXG4gICAqIERhdG9zIGRlbCBBcmJvbFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRhdGE6Tm9kZTtcclxuXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogRXN0YWJsZWNlIHNpIHNlIG1vc3RyYXJhbiBsYXMgb3BjaW9uZXMgZGUgXHJcbiAgICogQ3JlYWNpb24sIGVkaWNpw7NuIHkgZWxpbWluYWNpb24gZGVsIG5vZG9cclxuICAgKi9cclxuICBASW5wdXQoKSBzaG93T3B0aW9uc05vZGU6Ym9vbGVhbiA9IHRydWU7IFxyXG4gIFxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGVsIGlkIGRlbCBub2RvIHJlbW92aWRvXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSB1biBub2RvIGVkaXRhZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgZWRpdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxOb2RlPigpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIHVuIG5vZG8gc2luIGlkIGRlbCBub2RvICwgcGVybyBzaSBjb24gZWwgcGFyZW50XHJcbiAgICogcGFyYSBjb25vY2VyIGEgY3VhbCBmdWUgYcOxYWRpZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgYWRkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcbiAgQE91dHB1dCgpIGNvbGxhcHNlUGFyZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByYW5nZVNjcm9sbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VHJlZUhlbGlzYT4oKTtcclxuICBAT3V0cHV0KCkgbm9kZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgXHJcbiAgdHJlZUNvbnRyb2wgPSBuZXcgTmVzdGVkVHJlZUNvbnRyb2w8Tm9kZT4obm9kZSA9PiBub2RlLmNoaWxkcmVuKTtcclxuICBkYXRhU291cmNlID0gbmV3IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlPE5vZGU+KCk7XHJcblxyXG5cclxuXHJcbiAgLy8jZW5kcmVnaW9uID09PT09PSBWYXJpYWJsZXMgPT09PT09PT1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVlSGVsaXNhU2VydmljZTpUcmVlSGVsaXNhU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOlJvdXRlcikgeyAgICBcclxuICAgICAgXHJcbiAgICAvL2NhcmdhciBkYXRvcyBwYXNhZG9zIHBvciBlbCBASW5wdXRcclxuICAgIGlmICghIXRoaXMuZGF0YSkgeyAgICAgIFxyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLmNoaWxkcmVuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW11cclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBuZ09uSW5pdCgpIHsgICAgIFxyXG4gICAgLy8gc2kgc2UgY2FyZ2FuIGRhdG9zIHBvciBtZWRpbyBkZWwgc2VydmljaW9cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZGF0YVNvdXJjZU9ic2VydmFibGUgICAgXHJcbiAgICAuc3Vic2NyaWJlKChyZXMpID0+IHsgICAgICAgICAgICBcclxuICAgICAgaWYoISFyZXMgJiYgISFyZXMuY2hpbGRyZW4peyAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShyZXMuY2hpbGRyZW4pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW107XHJcbiAgICAgIH0gICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlLCBzaSBjYW1iaWEgZWwgbm9kbyBzZWxlY2Npb25hZG8gcG9yIG1lZGlvIGRlbCBzZXJ2aWNpb1xyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlU2VsZWN0ZWRcclxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xyXG4gICAgICAgIGlmKCEhdGhpcy5kYXRhICYmICEhdGhpcy5kYXRhLmNoaWxkcmVuKVxyXG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEscmVzKTtcclxuICAgICAgfSlcclxuICAgXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8jcmVnaW9uICA9PT09PT0gRXZlbnRzID09PT09PT09PT09XHJcbiAgb25SZWRpcmVjdChub2RlOk5vZGUpe1xyXG4gICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSxub2RlLmlkKTsgICAgXHJcblxyXG4gICAgaWYoISFub2RlICYmICFub2RlLmNoaWxkcmVuKXtcclxuICAgICAgdGhpcy5ub2RlU2VsZWN0ZWQuZW1pdChub2RlLmlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICBpZiAoKGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgZWxlbWVudC5zY3JvbGxUb3ApID49IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7ICAgICAgXHJcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FZGl0KG5vZGU6Tm9kZSl7XHJcbiAgICBub2RlLmlzRWRpdGFibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25BZGQobm9kZTpOb2RlKXtcclxuICAgIC8vIHNpIG5vIHRpZW5lIGhpam9zIGluc3RhbmNpYXIgZWwgYXJyYXlcclxuICAgIGlmKCFub2RlLmNoaWxkcmVuKXtcclxuICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgbm9kZS5jaGlsZHJlbi5wdXNoKFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbmFtZTogXCJcIiwgICAgICAgXHJcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgcGFyZW50IDogbm9kZSxcclxuICAgICAgICBpc0VkaXRhYmxlIDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICApOyAgICAgXHJcbiAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZShub2RlOk5vZGUpeyBcclxuICAgIC8vIFJlbXVldmUgZWwgbm9kbyB1dGlsaXphbmRvIGxhIGxpYnJlcmlhIGRlIGxvZGFzaCAgIFxyXG4gICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xyXG4gICAgXHJcbiAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICB0aGlzLnJlbW92ZWQuZW1pdChub2RlLmlkKTtcclxuICB9XHJcblxyXG4gIG9uRWRpdGVkKG5vZGU6Tm9kZSx2YWx1ZTphbnkpe1xyXG4gICAgXHJcbiAgICAgIG5vZGUubmFtZSA9IHZhbHVlO1xyXG5cclxuICAgICAgaWYobm9kZS5pZCA9PSBudWxsICYmIG5vZGUubmFtZSA9PSBcIlwiKXsgICAgICAgICAgICAgIFxyXG4gICAgICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihub2RlLmlkICYmIG5vZGUuaWQgIT0gbnVsbCAmJiBub2RlLm5hbWUudHJpbSgpICE9PSBcIlwiKXtcclxuICAgICAgICB0aGlzLmVkaXRlZC5lbWl0KG5vZGUpO1xyXG4gICAgICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9ZWxzZSBpZighIW5vZGUuaWQgJiYgbm9kZS5pZCA9PSBudWxsICYmIG5vZGUubmFtZS50cmltKCkgIT09IFwiXCIpe1xyXG4gICAgICAgIHRoaXMuYWRkZWQuZW1pdChub2RlKTtcclxuICAgICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgfSAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwobm9kZTpOb2RlLHZhbHVlOnN0cmluZyl7XHJcbiAgICAvLyBTaSBubyB0aWVuZSBpZCBwb3Igc2VyIHVuIG51ZXZvIGl0ZW0sIGxvIGVsaW1pbmFcclxuICAgIGlmKG5vZGUuaWQgPT0gbnVsbCl7XHJcbiAgICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpOyAgXHJcbiAgICB9XHJcblxyXG4gICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7IFxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uID09PT09PT0gRXZlbnRzID09PT09PT09XHJcblxyXG5cclxuXHJcbiAgLy8jcmVnaW9uICA9PT09PT09PSBNZXRvZG9zID09PT09PT09PT09PT1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpY2Egc2kgZWwgbm9kbyB0aWVuZSBoaWpvc1xyXG4gICAqL1xyXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogTm9kZSkgPT4gISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogT2J0aWVuZSBsYSBkZXNjcmlwY2lvbiBjb21wbGV0YSBkZWwgbm9kb1xyXG4gICAqIEBleGFtcGxlIE5vZG8gcGFkcmUsbm9kbyBoaWpvLG5vZG8gbmlldG9cclxuICAgKiBAcGFyYW0gbm9kZSBEZWJlIHRlbmVyIHRvZG9zIGxvcyBwYXJlbnQgbGxlbm9zIGhhY2lhIGFycmliYVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVzY3JpcHRpb24obm9kZTpOb2RlKTpzdHJpbmd7XHJcbiAgICAgIGxldCByZXN1bHQ6c3RyaW5nW109W25vZGUubmFtZV07ICAgICAgICBcclxuICAgICAgbGV0IGNvbmNhdDpzdHJpbmc9XCJcIjtcclxuXHJcbiAgICAgIGlmKG5vZGUucGFyZW50KXsgICAgICAgICAgXHJcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5nZXREZXNjcmlwdGlvbihub2RlLnBhcmVudCkpXHJcbiAgICAgIH0gICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgaWYocmVzdWx0Lmxlbmd0aCA9PSAxKVxyXG4gICAgICAgICAgcmV0dXJuIG5vZGUubmFtZTtcclxuXHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXZlcnNlKCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IGVsZW1lbnQgPSByZXN1bHRbaV07XHJcbiAgICAgICAgICBjb25jYXQgPSBjb25jYXQgKyBlbGVtZW50ICsgKChpID09IHJlc3VsdC5sZW5ndGgtMSk/XCJcIjpcIixcIik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIHJldHVybiBjb25jYXQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0dWFsaXphIGVsIGFyYm9sXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWZyZXNoVHJlZSgpe1xyXG4gICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhU291cmNlLmRhdGE7IFxyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBudWxsOyBcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gX2RhdGE7IFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb05leHRQYWdlKCkge1xyXG4gICAgaWYgKCF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgJiYgIXRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkKSB7XHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yYW5nZVNjcm9sbGVkLmVtaXQoe1xyXG4gICAgICAgIHBhZ2U6IHRoaXMudHJlZUhlbGlzYUNvbm5lY3QubmV4dFBhZ2UoKSAgICAgICAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWNlaXZlUGFnZShkYXRhOiBOb2RlW10pIHsgICAgXHJcbiAgICBpZighdGhpcy5kYXRhKXsgdGhpcy5kYXRhID0ge2lkOm51bGwsbmFtZTpcInJvb3RcIixpc1NlbGVjdGVkOmZhbHNlfX1cclxuICAgIGlmICghdGhpcy5kYXRhLmNoaWxkcmVuKSB7IHRoaXMuZGF0YS5jaGlsZHJlbiA9IG5ldyBBcnJheTxOb2RlPigpOyB0aGlzLnRyZWVIZWxpc2FDb25uZWN0ID0gbmV3IFRyZWVIZWxpc2FDb25uZWN0PE5vZGU+KCk7IH0gICAgXHJcbiAgICB0aGlzLmRhdGEuY2hpbGRyZW4gPSB0aGlzLmRhdGEuY2hpbGRyZW4uY29uY2F0KGRhdGEpO1xyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuLmZvckVhY2gobm9kZT0+e1xyXG4gICAgICB0aGlzLmZpbGxQYXJlbnQobm9kZSx0aGlzLmRhdGEpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMuZGF0YS5jaGlsZHJlbjtcclxuICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNMYXN0UGFnZSA9IGRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExsZW5hbiBlbCBjYW1wbyBwYXJlbnQgZGUgdG9kb3MgbG9zIG5vZG9zIGhpam9zXHJcbiAgICogQHBhcmFtIG5vZGUgXHJcbiAgICogQHBhcmFtIHBhcmVudCBcclxuICAgKi9cclxuICBwcml2YXRlIGZpbGxQYXJlbnQobm9kZTpOb2RlLHBhcmVudDpOb2RlKXtcclxuXHJcbiAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcclxuICAgIGlmKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICB0aGlzLmZpbGxQYXJlbnQoaXRlbSxub2RlKTsgICBcclxuICAgICAgfSkgICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBjb2xvY2EgY29tbyB0cnVlIGRlbCBpc1NlbGVjdGVkIGRlbCBub2RvIHF1ZSBjb25jdWVyZGUgY29uIGVsIGlkXHJcbiAgICogQHBhcmFtIG5vZGUgXHJcbiAgICogQHBhcmFtIGlkIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2VsZWN0Tm9kZShub2RlOk5vZGUsaWQ6bnVtYmVyKXsgXHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnVwU2VsZWN0Tm9kZShub2RlKVxyXG4gICAgICBcclxuICAgICAgaWYobm9kZS5pZCA9PSBpZCl7XHJcbiAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gdHJ1ZSAgIFxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICB9ZWxzZSBpZiAobm9kZS5jaGlsZHJlbiAhPSBudWxsKXtcclxuICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICBmb3IoaT0wOyByZXN1bHQgPT0gbnVsbCAmJiBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnNlbGVjdE5vZGUobm9kZS5jaGlsZHJlbltpXSwgaWQpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDsgXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRWxpbWluYSBlbCBpc1NlbGVjdGVkIGRlIHRvZG9zIGxvcyBub2Rvc1xyXG4gICAqIEBwYXJhbSBub2RlIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgdXBTZWxlY3ROb2RlKG5vZGU6Tm9kZSl7XHJcbiAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgaWYoISFub2RlLmNoaWxkcmVuKVxyXG4gICAgIGZvcih2YXIgaT0wOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMudXBTZWxlY3ROb2RlKG5vZGUuY2hpbGRyZW5baV0pOyAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT0gTWV0b2RvcyA9PT09PT09PT09PT1cclxufVxyXG4iXX0=