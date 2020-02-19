/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTree } from '@angular/material';
import { TreeHelisaService } from './tree-helisa.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { TreeHelisaConnect } from './tree-helisa-connect';
import { FormControl } from '@angular/forms';
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
        this.selectedOptions = new Map();
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
        this.checkedOptionNode = new EventEmitter();
        this.uncheckedOptionNode = new EventEmitter();
        this.treeControl = new NestedTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.children));
        this.dataSource = new MatTreeNestedDataSource();
        this.isSingleClick = true;
        this.currentNode = null;
        /**
         * Verifica si el nodo tiene hijos
         */
        this.hasChild = (/**
         * @param {?} t
         * @param {?} node
         * @return {?}
         */
        (t, node) => {
            return !!node.children && node.children.length > 0;
        });
        // cargar datos pasados por el @Input
        if (!!this.data) {
            /** @type {?} */
            const data = this.data;
            this.data = null;
            this.receivePage(data.children);
        }
        else {
            this.dataSource.data = [];
            this.treeControl.dataNodes = [];
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
        let concat = '';
        if (node.parent) {
            result.push(this.getDescription(node.parent));
        }
        if (result.length === 1) {
            return node.name;
        }
        result = result.reverse();
        for (let i = 0; i < result.length; i++) {
            /** @type {?} */
            const element = result[i];
            concat = concat + element + ((i === result.length - 1) ? '' : ',');
        }
        return concat;
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
                this.treeControl.dataNodes = [];
            }
        }));
        // Observable, si cambia el nodo seleccionado por medio del servicio
        this.treeHelisaService.nodeSelected
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (!!this.data && !!this.data.children) {
                this.selectNode(this.data, res);
            }
        }));
        this.treeHelisaService.refreshTreeObservable
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.refreshTree();
        }));
        this.treeHelisaService.refreshTreeWithPaginationObservable
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.refreshTreeWithPagination();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.treeHelisaService.nodeExpand.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (res != null) {
                if (res) {
                    this.tree.treeControl.expandAll();
                }
            }
        }));
        this.treeHelisaService.nodeCollapse.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (res !== null) {
                if (res) {
                    this.tree.treeControl.collapseAll();
                }
            }
        }));
        this.treeHelisaService.expandOneNodeObservable
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (res !== undefined) {
                this.treeControl.expand(res);
            }
        }));
        this.treeHelisaService.collapseOneNodeObservable
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (res !== undefined) {
                this.treeControl.collapse(res);
            }
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
        const element = (/** @type {?} */ (event.target));
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
            name: '',
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
        if (node.id == null && node.name === '') {
            _.remove(node.parent.children, node);
            this.refreshTree();
        }
        else if (node.id && node.id != null && node.name.trim() !== '') {
            this.edited.emit(node);
            node.isEditable = false;
        }
        else if (node.id == null && node.name.trim() !== '') {
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
            case 'ArrowDown':
                this.moveDownIntoTree();
                break;
            case 'ArrowUp':
                this.moveUpIntoTree();
                break;
        }
    }
    //#endregion ======= Events ========
    //#region  ======== Metodos =============
    /**
     * @private
     * @return {?}
     */
    moveUpIntoTree() {
        if (!!this.data) {
            // si aun no hay ningun node seleccionado selecciona el primero
            if (this.currentNode == null) {
                this.selectNode(this.data, this.data.children[0].id);
                this.currentNode = this.data.children[0];
                if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                    this.treeHelisaService.expandOneNode(this.currentNode);
                }
            }
            else {
                if (!!this.currentNode.parent && this.currentNode.id != null) {
                    // obtiene el indice del nodo seleccionado actualmente
                    /** @type {?} */
                    const index = this.currentNode.parent.children.indexOf(this.currentNode);
                    if (this.currentNode.parent.id == null && index === 0) {
                        return 0;
                    }
                    else { // si tiene nodos al mismo nivel salta al nodo anterior
                        if (index !== undefined && index === 0) {
                            this.currentNode = this.currentNode.parent;
                            this.selectNode(this.data, this.currentNode.id);
                            if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                this.treeHelisaService.expandOneNode(this.currentNode);
                            }
                        }
                        else { // si no tiene nodos al mismo nivel salta al nodo padre
                            this.currentNode = this.currentNode.parent.children[index - 1];
                            this.selectNode(this.data, this.currentNode.id);
                            if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                this.treeHelisaService.expandOneNode(this.currentNode);
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    moveDownIntoTree() {
        if (!!this.data) {
            if (this.currentNode == null) {
                this.selectNode(this.data, this.data.children[0].id);
                this.currentNode = this.data.children[0];
                if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                    this.treeHelisaService.expandOneNode(this.currentNode);
                }
            }
            else {
                if (!!this.currentNode) {
                    // obtiene el indice del nodo seleccionado actualmente
                    /** @type {?} */
                    const index = (!!this.currentNode && !!this.currentNode.parent) ?
                        this.currentNode.parent.children.indexOf(this.currentNode) :
                        null;
                    // si tiene childrens pasa al primer children
                    if (!!this.currentNode.children &&
                        this.currentNode.children.length > 0) {
                        this.currentNode = this.currentNode.children[0];
                        this.selectNode(this.data, this.currentNode.id);
                        if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                            this.treeHelisaService.expandOneNode(this.currentNode);
                        }
                    }
                    else if (index !== undefined &&
                        index === this.currentNode.parent.children.length - 1 &&
                        this.currentNode.parent.parent != null &&
                        this.currentNode.parent.parent.children != null &&
                        this.currentNode.parent.parent.children.length > 0) {
                        /** @type {?} */
                        const indexOfParent = this.currentNode.parent.parent.children.indexOf(this.currentNode.parent);
                        this.currentNode = (this.currentNode.parent.parent.children[indexOfParent + 1] === undefined) ?
                            this.currentNode : this.currentNode.parent.parent.children[indexOfParent + 1];
                        this.selectNode(this.data, this.currentNode.id);
                        if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                            this.treeHelisaService.expandOneNode(this.currentNode);
                        }
                    }
                    else { // si no tiene nodos al mismo nivel salta al siguiente hacia abajo
                        this.currentNode = this.currentNode.parent.children[index + 1];
                        this.selectNode(this.data, this.currentNode.id);
                        if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                            this.treeHelisaService.expandOneNode(this.currentNode);
                        }
                    }
                }
            }
        }
    }
    /**
     * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
     * @private
     * @return {?}
     */
    refreshTree() {
        this.data = null;
        /** @type {?} */
        const datasourceData = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = datasourceData;
        this.treeControl.dataNodes = datasourceData;
    }
    /**
     * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
     * @private
     * @return {?}
     */
    refreshTreeWithPagination() {
        /** @type {?} */
        const datasourceData = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = datasourceData;
        this.treeControl.dataNodes = datasourceData;
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
            this.data = { id: null, name: 'root', isSelected: false };
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
        (node) => {
            this.fillParent(node, this.data);
        }));
        this.data.children = this.reorderByOrderIndex(this.data.children);
        this.dataSource.data = this.data.children;
        this.treeControl.dataNodes = this.data.children;
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
            (item) => {
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
        if (node === undefined || node.id === undefined) {
            return null;
        }
        if (node.id === id) {
            node.isSelected = true;
            this.expandAllParents(node);
            return node;
        }
        else if (node.children != null) {
            /** @type {?} */
            let i;
            /** @type {?} */
            let result = null;
            for (i = 0; result == null && i < node.children.length; i++) {
                result = this.selectNode(node.children[i], id);
            }
            return result;
        }
        return null;
    }
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    expandAllParents(node) {
        if (!!node && !!node.parent) {
            this.treeHelisaService.expandOneNode(node.parent);
            this.expandAllParents(node.parent);
        }
    }
    /**
     * Elimina el isSelected de todos los nodos
     * @private
     * @param {?} node
     * @return {?}
     */
    upSelectNode(node) {
        if (!!node && node.isSelected !== undefined) {
            node.isSelected = false;
            if (!!node.children) {
                for (const childrenNode of node.children) {
                    this.upSelectNode(childrenNode);
                }
            }
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getClassNode(node) {
        /** @type {?} */
        const classNode = [];
        if (node.isSelected) {
            classNode.push('isSelected');
        }
        if (node.classNode) {
            classNode.push(node.classNode);
        }
        return classNode;
    }
    /**
     * @param {?} node
     * @param {?} editMode
     * @return {?}
     */
    onEditMode(node, editMode) {
        this.getSelectedOptions(node).editMode = editMode;
    }
    /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    onSelectOption(event, node) {
        node.isCheckedOption = event.source.selected;
        if (node.isCheckedOption) {
            this.checkedOptionNode.emit(node.id);
        }
        else {
            this.uncheckedOptionNode.emit(node.id);
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getSelectedOptions(node) {
        if (this.selectedOptions.has(node.id)) {
            this.reloadSelectedOptions(node, this.selectedOptions.get(node.id).editMode);
        }
        else {
            this.reloadSelectedOptions(node, false);
        }
        return this.selectedOptions.get(node.id);
    }
    /**
     * @private
     * @param {?} node
     * @param {?} editMode
     * @return {?}
     */
    reloadSelectedOptions(node, editMode) {
        /** @type {?} */
        const array = new Array();
        node.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            if (option.isCheckedOption) {
                array.push(option.id);
            }
        }));
        /** @type {?} */
        const obj = { formControl: new FormControl(array), editMode };
        this.selectedOptions.set(node.id, obj);
    }
    /**
     * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
     * @param {?} id  number | string
     * @return {?} Node o null si no hay un nodo con ese id
     */
    getNodeById(id) {
        /** @type {?} */
        const queue = [...this.dataSource.data];
        while (queue.length > 0) {
            /** @type {?} */
            const curr = queue.shift();
            if (curr.id === id) {
                return curr;
            }
            else {
                if (!!curr.children) {
                    queue.push(...curr.children);
                }
            }
        }
        return null;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    reorderByOrderIndex(node) {
        if (!!node && node.length > 0) {
            try {
                node = _.orderBy(node, (/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => x.orderIndex), ['asc']);
                node.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                (element) => {
                    if (!!element.children && element != null) {
                        element.children = this.reorderByOrderIndex(element.children);
                    }
                }));
                return node;
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
TreeHelisaComponent.decorators = [
    { type: Component, args: [{
                selector: 'hel-tree',
                template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\r\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n    <!-- This is the tree node template for leaf nodes -->\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n      <li class=\"mat-tree-node\" [ngClass]=\"getClassNode(node)\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\"\r\n        *ngIf=\"!node.isEditable\" class=\"tree-node\">\r\n        <!-- use a disabled button to provide padding for tree leaf -->\r\n        <button mat-icon-button disabled></button>\r\n        {{node.name}}\r\n      </li>\r\n      <li class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"node.showEditButton\" (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showAddButton\" (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\r\n              (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\" (done)=\"onEdited(node,$event)\">\r\n        </hel-input-with-button>\r\n      </li>\r\n    </mat-tree-node>\r\n    <!-- This is the tree node template for expandable nodes -->\r\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\r\n      <li>\r\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\r\n\r\n          <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\r\n            <mat-icon class=\"mat-icon-rtl-mirror\">\r\n              {{treeControl.isExpanded(node) ? 'remove' : 'add'}}\r\n            </mat-icon>\r\n          </button>\r\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\"\r\n            [ngClass]=\"getClassNode(node)\">{{node.name}}</p>\r\n        </div>\r\n        <div class=\"tree-options\">\r\n      <li class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"node.showEditButton\" (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showAddButton\" (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\r\n              (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\" (done)=\"onEdited(node,$event)\">\r\n        </hel-input-with-button>\r\n      </li>\r\n</div>\r\n<ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\r\n  <ng-container matTreeNodeOutlet></ng-container>\r\n</ul>\r\n</li>\r\n</mat-nested-tree-node>\r\n</mat-tree>\r\n</div>",
                styles: [".example-tree-invisible{display:none}.example-tree li,.example-tree ul{margin-top:0;margin-bottom:0;list-style-type:none}.isSelected{background:red}.tree-options{display:inline}.container-tree{overflow:scroll;height:350px;width:100%}.tree-node{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.tree-node-text{display:inline;margin-bottom:0}"]
            }] }
];
/** @nocollapse */
TreeHelisaComponent.ctorParameters = () => [
    { type: TreeHelisaService },
    { type: Router },
    { type: ElementRef }
];
TreeHelisaComponent.propDecorators = {
    tree: [{ type: ViewChild, args: ['tree',] }],
    data: [{ type: Input }],
    removed: [{ type: Output }],
    edited: [{ type: Output }],
    added: [{ type: Output }],
    collapseParent: [{ type: Output }],
    rangeScrolled: [{ type: Output }],
    nodeSelected: [{ type: Output }],
    dobleClick: [{ type: Output }],
    keypressDelete: [{ type: Output }],
    keypressInsert: [{ type: Output }],
    checkedOptionNode: [{ type: Output }],
    uncheckedOptionNode: [{ type: Output }],
    onKeyDown: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TreeHelisaComponent.prototype.treeHelisaConnect;
    /** @type {?} */
    TreeHelisaComponent.prototype.formEdit;
    /** @type {?} */
    TreeHelisaComponent.prototype.tree;
    /**
     * @type {?}
     * @private
     */
    TreeHelisaComponent.prototype.selectedOptions;
    /**
     * Datos del Arbol
     * @type {?}
     */
    TreeHelisaComponent.prototype.data;
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
    TreeHelisaComponent.prototype.checkedOptionNode;
    /** @type {?} */
    TreeHelisaComponent.prototype.uncheckedOptionNode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBNEIsTUFBTSxtQkFBbUIsQ0FBQztBQUUvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSzdDLHVDQUVDOzs7SUFEQyxpQ0FBYTs7QUFTZixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBSTlCLFlBQW9CLGlCQUFvQyxFQUNwQyxNQUFjLEVBQ2QsVUFBc0I7UUFGdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWlCbEMsb0JBQWUsR0FHbEIsSUFBSSxHQUFHLEVBR1IsQ0FBQzs7OztRQVNLLFlBQU8sR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7UUFLN0UsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDOzs7OztRQU10RCxVQUFL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LENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BCO1NBQ0Y7SUFHSCxDQUFDOzs7WUEzakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIseTBKQUEyQzs7YUFHNUM7Ozs7WUFsQlEsaUJBQWlCO1lBQ2pCLE1BQU07WUFMb0UsVUFBVTs7O21CQTZDMUYsU0FBUyxTQUFDLE1BQU07bUJBV2hCLEtBQUs7c0JBS0wsTUFBTTtxQkFLTixNQUFNO29CQU1OLE1BQU07NkJBQ04sTUFBTTs0QkFDTixNQUFNOzJCQUNOLE1BQU07eUJBQ04sTUFBTTs2QkFDTixNQUFNOzZCQUNOLE1BQU07Z0NBQ04sTUFBTTtrQ0FDTixNQUFNO3dCQStMTixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFwTzFDLGdEQUFtRDs7SUFDbkQsdUNBQXNCOztJQUN0QixtQ0FBcUM7Ozs7O0lBQ3JDLDhDQU1LOzs7OztJQUlMLG1DQUFvQjs7Ozs7SUFLcEIsc0NBQXVGOzs7OztJQUt2RixxQ0FBZ0U7Ozs7OztJQU1oRSxvQ0FBK0Q7O0lBQy9ELDZDQUE4RTs7SUFDOUUsNENBQWlHOztJQUNqRywyQ0FBNEY7O0lBQzVGLHlDQUEwRjs7SUFDMUYsNkNBQTRHOztJQUM1Ryw2Q0FBNEc7O0lBQzVHLGdEQUErRzs7SUFDL0csa0RBQWlIOztJQUVqSCwwQ0FBK0g7O0lBQy9ILHlDQUFnRjs7SUFHaEYsNENBQThCOztJQUM5QiwwQ0FBeUI7Ozs7O0lBMlN6Qix1Q0FFQzs7Ozs7SUF6V1csZ0RBQTRDOzs7OztJQUM1QyxxQ0FBc0I7Ozs7O0lBQ3RCLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5lc3RlZFRyZWVDb250cm9sLCBUcmVlQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcclxuaW1wb3J0IHsgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2UsIE1hdFRyZWUsIE1hdE9wdGlvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XHJcbmltcG9ydCB7IFRyZWVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBUcmVlSGVsaXNhQ29ubmVjdCB9IGZyb20gJy4vdHJlZS1oZWxpc2EtY29ubmVjdCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRyZWVIZWxpc2Ege1xyXG4gIHBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtdHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90cmVlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddLFxyXG4gIC8vIGhvc3Q6IHsgJyhkb2N1bWVudDprZXl1cCknOiAnb25LZXlEb3duKCRldmVudCknIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09IFZhcmlhYmxlcyA9PT09PT09PVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVIZWxpc2FTZXJ2aWNlOiBUcmVlSGVsaXNhU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgLy8gY2FyZ2FyIGRhdG9zIHBhc2Fkb3MgcG9yIGVsIEBJbnB1dFxyXG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7XHJcbiAgICAgIGNvbnN0IGRhdGE6IE5vZGUgPSB0aGlzLmRhdGE7XHJcbiAgICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5jaGlsZHJlbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdO1xyXG4gICAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09IFZhcmlhYmxlcyA9PT09PT09PT09PT09XHJcbiAgcHJpdmF0ZSB0cmVlSGVsaXNhQ29ubmVjdDogVHJlZUhlbGlzYUNvbm5lY3Q8Tm9kZT47XHJcbiAgZm9ybUVkaXQ6IEZvcm1Db250cm9sO1xyXG4gIEBWaWV3Q2hpbGQoJ3RyZWUnKSB0cmVlOiBNYXRUcmVlPHt9PjtcclxuICBwcml2YXRlIHNlbGVjdGVkT3B0aW9uczogTWFwPHN0cmluZyB8IG51bWJlciwge1xyXG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgZWRpdE1vZGU6IGJvb2xlYW47XHJcbiAgfT4gPSBuZXcgTWFwPHN0cmluZyB8IG51bWJlciwge1xyXG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgZWRpdE1vZGU6IGJvb2xlYW47XHJcbiAgfT4oKTtcclxuICAvKipcclxuICAgKiBEYXRvcyBkZWwgQXJib2xcclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRhOiBOb2RlO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGVsIGlkIGRlbCBub2RvIHJlbW92aWRvXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW4gbm9kbyBlZGl0YWRvXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGVkaXRlZDogRXZlbnRFbWl0dGVyPE5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOb2RlPigpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIHVuIG5vZG8gc2luIGlkIGRlbCBub2RvICwgcGVybyBzaSBjb24gZWwgcGFyZW50XHJcbiAgICogcGFyYSBjb25vY2VyIGEgY3VhbCBmdWUgYcOxYWRpZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgYWRkZWQ6IEV2ZW50RW1pdHRlcjxOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcclxuICBAT3V0cHV0KCkgY29sbGFwc2VQYXJlbnQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmFuZ2VTY3JvbGxlZDogRXZlbnRFbWl0dGVyPFJlcXVlc3RUcmVlSGVsaXNhPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmVxdWVzdFRyZWVIZWxpc2E+KCk7XHJcbiAgQE91dHB1dCgpIG5vZGVTZWxlY3RlZDogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgZG9ibGVDbGljazogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkga2V5cHJlc3NEZWxldGU6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkga2V5cHJlc3NJbnNlcnQ6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkgY2hlY2tlZE9wdGlvbk5vZGU6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkgdW5jaGVja2VkT3B0aW9uTm9kZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG5cclxuICB0cmVlQ29udHJvbDogTmVzdGVkVHJlZUNvbnRyb2w8Tm9kZT4gPSBuZXcgTmVzdGVkVHJlZUNvbnRyb2w8Tm9kZT4oKG5vZGU6IE5vZGUpOiBOb2RlW10gfCBPYnNlcnZhYmxlPE5vZGVbXT4gPT4gbm9kZS5jaGlsZHJlbik7XHJcbiAgZGF0YVNvdXJjZTogTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8Tm9kZT4gPSBuZXcgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8Tm9kZT4oKTtcclxuXHJcblxyXG4gIGlzU2luZ2xlQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGN1cnJlbnROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogT2J0aWVuZSBsYSBkZXNjcmlwY2lvbiBjb21wbGV0YSBkZWwgbm9kb1xyXG4gICAqIEBleGFtcGxlIE5vZG8gcGFkcmUsbm9kbyBoaWpvLG5vZG8gbmlldG9cclxuICAgKiBAcGFyYW0gbm9kZSBEZWJlIHRlbmVyIHRvZG9zIGxvcyBwYXJlbnQgbGxlbm9zIGhhY2lhIGFycmliYVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVzY3JpcHRpb24obm9kZTogTm9kZSk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtub2RlLm5hbWVdO1xyXG4gICAgbGV0IGNvbmNhdDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaWYgKG5vZGUucGFyZW50KSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZ2V0RGVzY3JpcHRpb24obm9kZS5wYXJlbnQpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIG5vZGUubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQgPSByZXN1bHQucmV2ZXJzZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudDogc3RyaW5nID0gcmVzdWx0W2ldO1xyXG4gICAgICBjb25jYXQgPSBjb25jYXQgKyBlbGVtZW50ICsgKChpID09PSByZXN1bHQubGVuZ3RoIC0gMSkgPyAnJyA6ICcsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmNhdDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBzaSBzZSBjYXJnYW4gZGF0b3MgcG9yIG1lZGlvIGRlbCBzZXJ2aWNpb1xyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5kYXRhU291cmNlT2JzZXJ2YWJsZVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IE5vZGUpID0+IHtcclxuICAgICAgICBpZiAoISFyZXMgJiYgISFyZXMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UocmVzLmNoaWxkcmVuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXTtcclxuICAgICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlLCBzaSBjYW1iaWEgZWwgbm9kbyBzZWxlY2Npb25hZG8gcG9yIG1lZGlvIGRlbCBzZXJ2aWNpb1xyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlU2VsZWN0ZWRcclxuICAgICAgLnN1YnNjcmliZSgocmVzOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoISF0aGlzLmRhdGEgJiYgISF0aGlzLmRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5yZWZyZXNoVHJlZU9ic2VydmFibGVcclxuICAgICAgLnN1YnNjcmliZSgocmVzOiB2b2lkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLnJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb25PYnNlcnZhYmxlXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogdm9pZCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUV4cGFuZC5zdWJzY3JpYmUoKHJlczogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAocmVzICE9IG51bGwpIHtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZXhwYW5kQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVDb2xsYXBzZS5zdWJzY3JpYmUoKHJlczogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAocmVzICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgdGhpcy50cmVlLnRyZWVDb250cm9sLmNvbGxhcHNlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlT2JzZXJ2YWJsZVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IE5vZGUpID0+IHtcclxuICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmNvbGxhcHNlT25lTm9kZU9ic2VydmFibGVcclxuICAgICAgLnN1YnNjcmliZSgocmVzOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvLyNyZWdpb24gID09PT09PSBFdmVudHMgPT09PT09PT09PT1cclxuICBvblJlZGlyZWN0KG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmlzU2luZ2xlQ2xpY2sgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlQ2xpY2spIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgbm9kZS5pZCk7XHJcblxyXG4gICAgICAgIC8vIGlmKCEhbm9kZSAmJiAhbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgICAgaWYgKCEhbm9kZSkge1xyXG4gICAgICAgICAgdGhpcy5ub2RlU2VsZWN0ZWQuZW1pdChub2RlLmlkKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMzUwKTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKChlbGVtZW50Lm9mZnNldEhlaWdodCArIGVsZW1lbnQuc2Nyb2xsVG9wKSA+PSBlbGVtZW50LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRWRpdChub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBub2RlLmlzRWRpdGFibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25BZGQobm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgLy8gc2kgbm8gdGllbmUgaGlqb3MgaW5zdGFuY2lhciBlbCBhcnJheVxyXG4gICAgaWYgKCFub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxuICAgIG5vZGUuY2hpbGRyZW4ucHVzaChcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHBhcmVudDogbm9kZSxcclxuICAgICAgICBpc0VkaXRhYmxlOiB0cnVlXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZShub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICAvLyBSZW11ZXZlIGVsIG5vZG8gdXRpbGl6YW5kbyBsYSBsaWJyZXJpYSBkZSBsb2Rhc2hcclxuICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuXHJcbiAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICB0aGlzLnJlbW92ZWQuZW1pdChub2RlLmlkKTtcclxuICB9XHJcblxyXG4gIG9uRWRpdGVkKG5vZGU6IE5vZGUsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICBub2RlLm5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAobm9kZS5pZCA9PSBudWxsICYmIG5vZGUubmFtZSA9PT0gJycpIHtcclxuICAgICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5vZGUuaWQgJiYgbm9kZS5pZCAhPSBudWxsICYmIG5vZGUubmFtZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMuZWRpdGVkLmVtaXQobm9kZSk7XHJcbiAgICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLmlkID09IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5hZGRlZC5lbWl0KG5vZGUpO1xyXG4gICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKG5vZGU6IE5vZGUsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIFNpIG5vIHRpZW5lIGlkIHBvciBzZXIgdW4gbnVldm8gaXRlbSwgbG8gZWxpbWluYVxyXG4gICAgaWYgKG5vZGUuaWQgPT0gbnVsbCkge1xyXG4gICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uRGJsQ2xpY2sobm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5pc1NpbmdsZUNsaWNrID0gZmFsc2U7XHJcbiAgICB0aGlzLmRvYmxlQ2xpY2suZW1pdChub2RlLmlkKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwJywgWyckZXZlbnQnXSlcclxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgJ0RlbGV0ZSc6XHJcbiAgICAgICAgdGhpcy5rZXlwcmVzc0RlbGV0ZS5lbWl0KCghIXRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCkgPyB0aGlzLmN1cnJlbnROb2RlLmlkIDogbnVsbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0luc2VydCc6XHJcbiAgICAgICAgdGhpcy5rZXlwcmVzc0luc2VydC5lbWl0KCghIXRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCkgPyB0aGlzLmN1cnJlbnROb2RlLmlkIDogbnVsbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgdGhpcy5tb3ZlRG93bkludG9UcmVlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgIHRoaXMubW92ZVVwSW50b1RyZWUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09PSBFdmVudHMgPT09PT09PT1cclxuXHJcblxyXG5cclxuICAvLyNyZWdpb24gID09PT09PT09IE1ldG9kb3MgPT09PT09PT09PT09PVxyXG5cclxuICBwcml2YXRlIG1vdmVVcEludG9UcmVlKCk6IG51bWJlciB7XHJcbiAgICBpZiAoISF0aGlzLmRhdGEpIHtcclxuICAgICAgLy8gc2kgYXVuIG5vIGhheSBuaW5ndW4gbm9kZSBzZWxlY2Npb25hZG8gc2VsZWNjaW9uYSBlbCBwcmltZXJvXHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmRhdGEuY2hpbGRyZW5bMF0uaWQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmRhdGEuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAvLyBvYnRpZW5lIGVsIGluZGljZSBkZWwgbm9kbyBzZWxlY2Npb25hZG8gYWN0dWFsbWVudGVcclxuICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudE5vZGUpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5pZCA9PSBudWxsICYmIGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgfSBlbHNlIHsvLyBzaSB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBub2RvIGFudGVyaW9yXHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBzaSBubyB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBub2RvIHBhZHJlXHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZURvd25JbnRvVHJlZSgpOiB2b2lkIHtcclxuICAgIGlmICghIXRoaXMuZGF0YSkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5kYXRhLmNoaWxkcmVuWzBdLmlkKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5kYXRhLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUpIHtcclxuICAgICAgICAgIC8vIG9idGllbmUgZWwgaW5kaWNlIGRlbCBub2RvIHNlbGVjY2lvbmFkbyBhY3R1YWxtZW50ZVxyXG4gICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9ICghIXRoaXMuY3VycmVudE5vZGUgJiYgISF0aGlzLmN1cnJlbnROb2RlLnBhcmVudCkgP1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnROb2RlKSA6XHJcbiAgICAgICAgICBudWxsO1xyXG5cclxuICAgICAgICAgIC8vIHNpIHRpZW5lIGNoaWxkcmVucyBwYXNhIGFsIHByaW1lciBjaGlsZHJlblxyXG4gICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBpbmRleCA9PT0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMSAmJlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW4gIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5kZXhPZlBhcmVudDogbnVtYmVyID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gKHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbltpbmRleE9mUGFyZW50ICsgMV0gPT09IHVuZGVmaW5lZCkgP1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlIDogdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuW2luZGV4T2ZQYXJlbnQgKyAxXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHsgLy8gc2kgbm8gdGllbmUgbm9kb3MgYWwgbWlzbW8gbml2ZWwgc2FsdGEgYWwgc2lndWllbnRlIGhhY2lhIGFiYWpvXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbltpbmRleCArIDFdO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWZXJpZmljYSBzaSBlbCBub2RvIHRpZW5lIGhpam9zXHJcbiAgICovXHJcbiAgaGFzQ2hpbGQgPSAodDogbnVtYmVyLCBub2RlOiBOb2RlKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBBY3R1YWxpemEgZWwgYXJib2wgYm9ycmFuZG8gdG9kYSBsYSBkYXRhICwgc29sbyBjdWFuZG8gbm8gc2UgdXRpbGl6YSBwYWdpbmFjaW9uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWZyZXNoVHJlZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICBjb25zdCBkYXRhc291cmNlRGF0YTogTm9kZVtdID0gdGhpcy5kYXRhU291cmNlLmRhdGE7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFzb3VyY2VEYXRhO1xyXG4gICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBkYXRhc291cmNlRGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdHVhbGl6YSBlbCBhcmJvbCBjdWFuZG8gc2UgdXRpbGl6YSBsYSBwYWdpbmFjaW9uIChDdWFuZG8gbm8gLCB1dGlsaWNlIGVsIG1ldG9kbyByZWZyZXNoVHJlZSgpKVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGFzb3VyY2VEYXRhOiBOb2RlW10gPSB0aGlzLmRhdGFTb3VyY2UuZGF0YTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YXNvdXJjZURhdGE7XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IGRhdGFzb3VyY2VEYXRhO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBnb05leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgJiYgIXRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkKSB7XHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yYW5nZVNjcm9sbGVkLmVtaXQoe1xyXG4gICAgICAgIHBhZ2U6IHRoaXMudHJlZUhlbGlzYUNvbm5lY3QubmV4dFBhZ2UoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogTm9kZVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YSkgeyB0aGlzLmRhdGEgPSB7IGlkOiBudWxsLCBuYW1lOiAncm9vdCcsIGlzU2VsZWN0ZWQ6IGZhbHNlIH07IH1cclxuICAgIGlmICghdGhpcy5kYXRhLmNoaWxkcmVuKSB7IHRoaXMuZGF0YS5jaGlsZHJlbiA9IG5ldyBBcnJheTxOb2RlPigpOyB0aGlzLnRyZWVIZWxpc2FDb25uZWN0ID0gbmV3IFRyZWVIZWxpc2FDb25uZWN0PE5vZGU+KCk7IH1cclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbiA9IHRoaXMuZGF0YS5jaGlsZHJlbi5jb25jYXQoZGF0YSk7XHJcbiAgICB0aGlzLmRhdGEuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICB0aGlzLmZpbGxQYXJlbnQobm9kZSwgdGhpcy5kYXRhKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLmRhdGEuY2hpbGRyZW4gPSB0aGlzLnJlb3JkZXJCeU9yZGVySW5kZXgodGhpcy5kYXRhLmNoaWxkcmVuKTtcclxuXHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMuZGF0YS5jaGlsZHJlbjtcclxuICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gdGhpcy5kYXRhLmNoaWxkcmVuO1xyXG4gICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XHJcbiAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGxlbmFuIGVsIGNhbXBvIHBhcmVudCBkZSB0b2RvcyBsb3Mgbm9kb3MgaGlqb3NcclxuICAgKi9cclxuICBwcml2YXRlIGZpbGxQYXJlbnQobm9kZTogTm9kZSwgcGFyZW50OiBOb2RlKTogdm9pZCB7XHJcblxyXG4gICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maWxsUGFyZW50KGl0ZW0sIG5vZGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBjb2xvY2EgY29tbyB0cnVlIGRlbCBpc1NlbGVjdGVkIGRlbCBub2RvIHF1ZSBjb25jdWVyZGUgY29uIGVsIGlkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZWxlY3ROb2RlKG5vZGU6IE5vZGUsIGlkOiBudW1iZXIgfCBzdHJpbmcpOiBOb2RlIHtcclxuXHJcbiAgICB0aGlzLnVwU2VsZWN0Tm9kZShub2RlKTtcclxuXHJcbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkIHx8IG5vZGUuaWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLmlkID09PSBpZCkge1xyXG4gICAgICBub2RlLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmV4cGFuZEFsbFBhcmVudHMobm9kZSk7XHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLmNoaWxkcmVuICE9IG51bGwpIHtcclxuICAgICAgbGV0IGk6IG51bWJlcjtcclxuICAgICAgbGV0IHJlc3VsdDogTm9kZSA9IG51bGw7XHJcbiAgICAgIGZvciAoaSA9IDA7IHJlc3VsdCA9PSBudWxsICYmIGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5zZWxlY3ROb2RlKG5vZGUuY2hpbGRyZW5baV0sIGlkKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4cGFuZEFsbFBhcmVudHMobm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgaWYgKCEhbm9kZSAmJiAhIW5vZGUucGFyZW50KSB7XHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZShub2RlLnBhcmVudCk7XHJcbiAgICAgIHRoaXMuZXhwYW5kQWxsUGFyZW50cyhub2RlLnBhcmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbGltaW5hIGVsIGlzU2VsZWN0ZWQgZGUgdG9kb3MgbG9zIG5vZG9zXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB1cFNlbGVjdE5vZGUobm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgaWYgKCEhbm9kZSAmJiBub2RlLmlzU2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgaWYgKCEhbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGRyZW5Ob2RlIG9mIG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgIHRoaXMudXBTZWxlY3ROb2RlKGNoaWxkcmVuTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc05vZGUobm9kZTogTm9kZSk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGNsYXNzTm9kZTogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChub2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgY2xhc3NOb2RlLnB1c2goJ2lzU2VsZWN0ZWQnKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlLmNsYXNzTm9kZSkge1xyXG4gICAgICBjbGFzc05vZGUucHVzaChub2RlLmNsYXNzTm9kZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NOb2RlO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0TW9kZShub2RlOiBOb2RlLCBlZGl0TW9kZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMobm9kZSkuZWRpdE1vZGUgPSBlZGl0TW9kZTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0T3B0aW9uKGV2ZW50OiBNYXRPcHRpb25TZWxlY3Rpb25DaGFuZ2UsIG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIG5vZGUuaXNDaGVja2VkT3B0aW9uID0gZXZlbnQuc291cmNlLnNlbGVjdGVkO1xyXG4gICAgaWYgKG5vZGUuaXNDaGVja2VkT3B0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZE9wdGlvbk5vZGUuZW1pdChub2RlLmlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudW5jaGVja2VkT3B0aW9uTm9kZS5lbWl0KG5vZGUuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRPcHRpb25zKG5vZGU6IE5vZGUpOiB7XHJcbiAgICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgICBlZGl0TW9kZTogYm9vbGVhbjtcclxufSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMuaGFzKG5vZGUuaWQpKSB7XHJcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmdldChub2RlLmlkKS5lZGl0TW9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbG9hZFNlbGVjdGVkT3B0aW9ucyhub2RlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZ2V0KG5vZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWxvYWRTZWxlY3RlZE9wdGlvbnMobm9kZTogTm9kZSwgZWRpdE1vZGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGFycmF5OiBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPiA9IG5ldyBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPigpO1xyXG4gICAgbm9kZS5vcHRpb25zLmZvckVhY2goKG9wdGlvbjogTm9kZSkgPT4ge1xyXG4gICAgICBpZiAob3B0aW9uLmlzQ2hlY2tlZE9wdGlvbikge1xyXG4gICAgICAgIGFycmF5LnB1c2gob3B0aW9uLmlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvYmo6IHtcclxuICAgICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgICBlZGl0TW9kZTogYm9vbGVhbjtcclxuICAgIH0gPSB7IGZvcm1Db250cm9sOiBuZXcgRm9ybUNvbnRyb2woYXJyYXkpLCBlZGl0TW9kZSB9O1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuc2V0KG5vZGUuaWQsIG9iaik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGVsIHByaW1lciBOb2RlIHF1ZSBlbmN1ZW50cmUgc2VndW4gZWwgaWQgZW52aWFkbyBvIG51bGwgc2kgbm8gaGF5IG5pbmd1bm9cclxuICAgKiBAcGFyYW0gaWQgIG51bWJlciB8IHN0cmluZ1xyXG4gICAqIEByZXR1cm5zIE5vZGUgbyBudWxsIHNpIG5vIGhheSB1biBub2RvIGNvbiBlc2UgaWRcclxuICAgKi9cclxuICBnZXROb2RlQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKTogTm9kZSB7XHJcbiAgICBjb25zdCBxdWV1ZTogTm9kZVtdID0gWy4uLnRoaXMuZGF0YVNvdXJjZS5kYXRhXTtcclxuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGN1cnI6IE5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgICBpZiAoY3Vyci5pZCA9PT0gaWQpIHtcclxuICAgICAgICByZXR1cm4gY3VycjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoISFjdXJyLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICBxdWV1ZS5wdXNoKC4uLmN1cnIuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZW9yZGVyQnlPcmRlckluZGV4KG5vZGU6IE5vZGVbXSk6IE5vZGVbXSB7XHJcbiAgICBpZiAoISFub2RlICYmIG5vZGUubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBub2RlID0gXy5vcmRlckJ5KG5vZGUsICh4OiBOb2RlKSA9PiB4Lm9yZGVySW5kZXgsIFsnYXNjJ10pO1xyXG4gICAgICAgIG5vZGUuZm9yRWFjaCgoZWxlbWVudDogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCEhZWxlbWVudC5jaGlsZHJlbiAmJiBlbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbiA9IHRoaXMucmVvcmRlckJ5T3JkZXJJbmRleChlbGVtZW50LmNoaWxkcmVuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uID09PT09PSBNZXRvZG9zID09PT09PT09PT09PVxyXG59XHJcbiJdfQ==