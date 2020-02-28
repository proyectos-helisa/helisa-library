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
            concat = concat + element + (i === result.length - 1 ? '' : ',');
        }
        return concat;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // si se cargan datos por medio del servicio
        this.treeHelisaService.dataSourceObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (!!res && !!res.children) {
                this.selectedNode = res.id;
                this.receivePage(res.children);
            }
            else {
                this.dataSource.data = [];
                this.treeControl.dataNodes = [];
            }
        }));
        // Observable, si cambia el nodo seleccionado por medio del servicio
        this.treeHelisaService.nodeSelected.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (!!this.data && !!this.data.children) {
                this.selectNode(this.data, res);
            }
        }));
        this.treeHelisaService.refreshTreeObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.refreshTree();
        }));
        this.treeHelisaService.refreshTreeWithPaginationObservable.subscribe((/**
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
        this.treeHelisaService.expandOneNodeObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (res !== undefined) {
                this.treeControl.expand(res);
            }
        }));
        this.treeHelisaService.collapseOneNodeObservable.subscribe((/**
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
                this.selectNode(node, node.id);
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
        if (element.offsetHeight + element.scrollTop >= element.scrollHeight) {
            this.goNextPage();
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    onEdit(node) {
        node.isEditable = true;
        this.isDisabled = true;
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
            id: Math.random(),
            name: '',
            isSelected: false,
            parent: node,
            isEditable: true
        });
        if (node.children) {
            this.isDisabled = true;
            this.treeHelisaService.expandOneNode(node);
        }
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
            this.selectNode(node, node.id);
        }
        else if (node.id == null && node.name.trim() !== '') {
            this.added.emit(node);
            node.isEditable = false;
        }
        this.isDisabled = false;
        this.refreshTree();
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    onCancel(node, value) {
        this.isDisabled = false;
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
                this.keypressDelete.emit(!!this.currentNode && this.currentNode.id ? this.currentNode.id : null);
                break;
            case 'Insert':
                this.keypressInsert.emit(!!this.currentNode && this.currentNode.id ? this.currentNode.id : null);
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
                    else {
                        // si tiene nodos al mismo nivel salta al nodo anterior
                        if (index !== undefined && index === 0) {
                            this.currentNode = this.currentNode.parent;
                            this.selectNode(this.data, this.currentNode.id);
                            if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                                this.treeHelisaService.expandOneNode(this.currentNode);
                            }
                        }
                        else {
                            // si no tiene nodos al mismo nivel salta al nodo padre
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
                    const index = !!this.currentNode && !!this.currentNode.parent ? this.currentNode.parent.children.indexOf(this.currentNode) : null;
                    // si tiene childrens pasa al primer children
                    if (!!this.currentNode.children && this.currentNode.children.length > 0) {
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
                        this.currentNode =
                            this.currentNode.parent.parent.children[indexOfParent + 1] === undefined
                                ? this.currentNode
                                : this.currentNode.parent.parent.children[indexOfParent + 1];
                        this.selectNode(this.data, this.currentNode.id);
                        if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                            this.treeHelisaService.expandOneNode(this.currentNode);
                        }
                    }
                    else {
                        // si no tiene nodos al mismo nivel salta al siguiente hacia abajo
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
     * Verifica si el nodo tiene hijos
     * @param {?} t
     * @param {?} node
     * @return {?}
     */
    hasChild(t, node) {
        return !!node.children && node.children.length > 0;
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
        if (!!node) {
            if (!!this.selectedNode) {
                /** @type {?} */
                const nodeSelected = this.getNodeById(this.selectedNode);
                if (nodeSelected !== undefined) {
                    nodeSelected.isSelected = false;
                }
            }
        }
        if (!!!node) {
            return null;
        }
        if (node.id !== undefined && node.id === id) {
            node.isSelected = true;
            this.expandAllParents(node);
            this.selectedNode = node.id;
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
                template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\r\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n    <!-- This is the tree node template for leaf nodes -->\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n      <li\r\n        class=\"mat-tree-node\"\r\n        [ngClass]=\"getClassNode(node)\"\r\n        (click)=\"onRedirect(node)\"\r\n        (dblclick)=\"onDblClick(node)\"\r\n        *ngIf=\"!node.isEditable\"\r\n        class=\"tree-node\"\r\n      >\r\n        <!-- use a disabled button to provide padding for tree leaf -->\r\n        <button mat-icon-button disabled></button>\r\n        <ng-container *ngIf=\"node.data\">\r\n          <ul>\r\n            <ng-container *ngFor=\"let col of node.data\">\r\n              <li *ngIf=\"col.visible\">\r\n                {{ col.name }}\r\n              </li>\r\n            </ng-container>\r\n          </ul>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\r\n      </li>\r\n      <li class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled\" (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled\" (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled\" (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\r\n              option.name\r\n            }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [isFocused]=\"true\" [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\r\n        </hel-input-with-button>\r\n      </li>\r\n    </mat-tree-node>\r\n    <!-- This is the tree node template for expandable nodes -->\r\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\r\n      <li>\r\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\r\n          <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\r\n            <mat-icon class=\"mat-icon-rtl-mirror\">\r\n              {{ treeControl.isExpanded(node) ? 'remove' : 'add' }}\r\n            </mat-icon>\r\n          </button>\r\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" [ngClass]=\"getClassNode(node)\">\r\n            <ng-container *ngIf=\"node.data\">\r\n              <ul>\r\n                <ng-container *ngFor=\"let col of node.data\">\r\n                  <li *ngIf=\"col.visible\">\r\n                    {{ col.name }}\r\n                  </li>\r\n                </ng-container>\r\n              </ul>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\r\n          </p>\r\n        </div>\r\n        <div class=\"tree-options\">\r\n          <li class=\"tree-options\">\r\n            <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled\" (click)=\"onEdit(node)\">\r\n              <mat-icon>edit</mat-icon>\r\n            </button>\r\n            <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled\" (click)=\"onAdd(node)\">\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n            <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled\" (click)=\"onDelete(node)\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n          </li>\r\n          <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n            <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n              <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n                <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\r\n                  option.name\r\n                }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n              <mat-icon>done</mat-icon>\r\n            </button>\r\n          </div>\r\n          <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n            <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\r\n            </hel-input-with-button>\r\n          </li>\r\n        </div>\r\n        <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\r\n          <ng-container matTreeNodeOutlet></ng-container>\r\n        </ul>\r\n      </li>\r\n    </mat-nested-tree-node>\r\n  </mat-tree>\r\n</div>\r\n",
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
    /** @type {?} */
    TreeHelisaComponent.prototype.isDisabled;
    /** @type {?} */
    TreeHelisaComponent.prototype.selectedNode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBNEIsTUFBTSxtQkFBbUIsQ0FBQztBQUUvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRzdDLHVDQUVDOzs7SUFEQyxpQ0FBYTs7QUFTZixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBSzlCLFlBQW9CLGlCQUFvQyxFQUFVLE1BQWMsRUFBVSxVQUFzQjtRQUE1RixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFnQnhHLG9CQUFlLEdBTW5CLElBQUksR0FBRyxFQU1SLENBQUM7Ozs7UUFTTSxZQUFPLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBSzdFLFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7UUFNdEQsVUFBSyxH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UUFBUSxDQUFDOzs7O0lBblAxQyx5Q0FBb0I7O0lBQ3BCLDJDQUFxQzs7Ozs7SUFnQnJDLGdEQUFtRDs7SUFDbkQsdUNBQXNCOztJQUN0QixtQ0FBcUM7Ozs7O0lBQ3JDLDhDQVlJOzs7OztJQUlKLG1DQUFvQjs7Ozs7SUFLcEIsc0NBQXVGOzs7OztJQUt2RixxQ0FBZ0U7Ozs7OztJQU1oRSxvQ0FBK0Q7O0lBQy9ELDZDQUE4RTs7SUFDOUUsNENBQWlHOztJQUNqRywyQ0FBNEY7O0lBQzVGLHlDQUEwRjs7SUFDMUYsNkNBQTRHOztJQUM1Ryw2Q0FBNEc7O0lBQzVHLGdEQUErRzs7SUFDL0csa0RBQWlIOztJQUVqSCwwQ0FBK0g7O0lBQy9ILHlDQUFnRjs7SUFFaEYsNENBQThCOztJQUM5QiwwQ0FBeUI7Ozs7O0lBOURiLGdEQUE0Qzs7Ozs7SUFBRSxxQ0FBc0I7Ozs7O0lBQUUseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmVzdGVkVHJlZUNvbnRyb2wsIFRyZWVDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xyXG5pbXBvcnQgeyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZSwgTWF0VHJlZSwgTWF0T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcclxuaW1wb3J0IHsgVHJlZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL3RyZWUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFRyZWVIZWxpc2FDb25uZWN0IH0gZnJvbSAnLi90cmVlLWhlbGlzYS1jb25uZWN0JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRyZWVIZWxpc2Ege1xyXG4gIHBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtdHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90cmVlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXHJcbiAgLy8gaG9zdDogeyAnKGRvY3VtZW50OmtleXVwKSc6ICdvbktleURvd24oJGV2ZW50KScgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICBzZWxlY3RlZE5vZGU6IG51bWJlciB8IHN0cmluZyB8IG51bGw7XHJcbiAgLy8jZW5kcmVnaW9uID09PT09PSBWYXJpYWJsZXMgPT09PT09PT1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVlSGVsaXNhU2VydmljZTogVHJlZUhlbGlzYVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgLy8gY2FyZ2FyIGRhdG9zIHBhc2Fkb3MgcG9yIGVsIEBJbnB1dFxyXG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7XHJcbiAgICAgIGNvbnN0IGRhdGE6IE5vZGUgPSB0aGlzLmRhdGE7XHJcbiAgICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5jaGlsZHJlbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdO1xyXG4gICAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jcmVnaW9uICA9PT09PT0gVmFyaWFibGVzID09PT09PT09PT09PT1cclxuICBwcml2YXRlIHRyZWVIZWxpc2FDb25uZWN0OiBUcmVlSGVsaXNhQ29ubmVjdDxOb2RlPjtcclxuICBmb3JtRWRpdDogRm9ybUNvbnRyb2w7XHJcbiAgQFZpZXdDaGlsZCgndHJlZScpIHRyZWU6IE1hdFRyZWU8e30+O1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRPcHRpb25zOiBNYXA8XHJcbiAgICBzdHJpbmcgfCBudW1iZXIsXHJcbiAgICB7XHJcbiAgICAgIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcclxuICAgICAgZWRpdE1vZGU6IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgPiA9IG5ldyBNYXA8XHJcbiAgICBzdHJpbmcgfCBudW1iZXIsXHJcbiAgICB7XHJcbiAgICAgIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcclxuICAgICAgZWRpdE1vZGU6IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgPigpO1xyXG4gIC8qKlxyXG4gICAqIERhdG9zIGRlbCBBcmJvbFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRhdGE6IE5vZGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgZWwgaWQgZGVsIG5vZG8gcmVtb3ZpZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSB1biBub2RvIGVkaXRhZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgZWRpdGVkOiBFdmVudEVtaXR0ZXI8Tm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW4gbm9kbyBzaW4gaWQgZGVsIG5vZG8gLCBwZXJvIHNpIGNvbiBlbCBwYXJlbnRcclxuICAgKiBwYXJhIGNvbm9jZXIgYSBjdWFsIGZ1ZSBhw7FhZGlkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBhZGRlZDogRXZlbnRFbWl0dGVyPE5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOb2RlPigpO1xyXG4gIEBPdXRwdXQoKSBjb2xsYXBzZVBhcmVudDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByYW5nZVNjcm9sbGVkOiBFdmVudEVtaXR0ZXI8UmVxdWVzdFRyZWVIZWxpc2E+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VHJlZUhlbGlzYT4oKTtcclxuICBAT3V0cHV0KCkgbm9kZVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBkb2JsZUNsaWNrOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBrZXlwcmVzc0RlbGV0ZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSBrZXlwcmVzc0luc2VydDogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSBjaGVja2VkT3B0aW9uTm9kZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSB1bmNoZWNrZWRPcHRpb25Ob2RlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XHJcblxyXG4gIHRyZWVDb250cm9sOiBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPiA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPigobm9kZTogTm9kZSk6IE5vZGVbXSB8IE9ic2VydmFibGU8Tm9kZVtdPiA9PiBub2RlLmNoaWxkcmVuKTtcclxuICBkYXRhU291cmNlOiBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxOb2RlPiA9IG5ldyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxOb2RlPigpO1xyXG5cclxuICBpc1NpbmdsZUNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuICBjdXJyZW50Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9idGllbmUgbGEgZGVzY3JpcGNpb24gY29tcGxldGEgZGVsIG5vZG9cclxuICAgKiBAZXhhbXBsZSBOb2RvIHBhZHJlLG5vZG8gaGlqbyxub2RvIG5pZXRvXHJcbiAgICogQHBhcmFtIG5vZGUgRGViZSB0ZW5lciB0b2RvcyBsb3MgcGFyZW50IGxsZW5vcyBoYWNpYSBhcnJpYmFcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldERlc2NyaXB0aW9uKG5vZGU6IE5vZGUpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbbm9kZS5uYW1lXTtcclxuICAgIGxldCBjb25jYXQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlmIChub2RlLnBhcmVudCkge1xyXG4gICAgICByZXN1bHQucHVzaCh0aGlzLmdldERlc2NyaXB0aW9uKG5vZGUucGFyZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIG5vZGUubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQgPSByZXN1bHQucmV2ZXJzZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudDogc3RyaW5nID0gcmVzdWx0W2ldO1xyXG4gICAgICBjb25jYXQgPSBjb25jYXQgKyBlbGVtZW50ICsgKGkgPT09IHJlc3VsdC5sZW5ndGggLSAxID8gJycgOiAnLCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25jYXQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHNpIHNlIGNhcmdhbiBkYXRvcyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmRhdGFTb3VyY2VPYnNlcnZhYmxlLnN1YnNjcmliZSgocmVzOiBOb2RlKSA9PiB7XHJcbiAgICAgIGlmICghIXJlcyAmJiAhIXJlcy5jaGlsZHJlbikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlID0gcmVzLmlkO1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UocmVzLmNoaWxkcmVuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gW107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUsIHNpIGNhbWJpYSBlbCBub2RvIHNlbGVjY2lvbmFkbyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVTZWxlY3RlZC5zdWJzY3JpYmUoKHJlczogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmICghIXRoaXMuZGF0YSAmJiAhIXRoaXMuZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHJlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UucmVmcmVzaFRyZWVPYnNlcnZhYmxlLnN1YnNjcmliZSgocmVzOiB2b2lkKSA9PiB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UucmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbk9ic2VydmFibGUuc3Vic2NyaWJlKChyZXM6IHZvaWQpID0+IHtcclxuICAgICAgdGhpcy5yZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUV4cGFuZC5zdWJzY3JpYmUoKHJlczogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAocmVzICE9IG51bGwpIHtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZXhwYW5kQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVDb2xsYXBzZS5zdWJzY3JpYmUoKHJlczogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAocmVzICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgdGhpcy50cmVlLnRyZWVDb250cm9sLmNvbGxhcHNlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGVPYnNlcnZhYmxlLnN1YnNjcmliZSgocmVzOiBOb2RlKSA9PiB7XHJcbiAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKHJlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuY29sbGFwc2VPbmVOb2RlT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKHJlczogTm9kZSkgPT4ge1xyXG4gICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKHJlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8jcmVnaW9uICA9PT09PT0gRXZlbnRzID09PT09PT09PT09XHJcbiAgb25SZWRpcmVjdChub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzU2luZ2xlQ2xpY2sgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlQ2xpY2spIHtcclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUobm9kZSwgbm9kZS5pZCk7XHJcblxyXG4gICAgICAgIC8vIGlmKCEhbm9kZSAmJiAhbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgICAgaWYgKCEhbm9kZSkge1xyXG4gICAgICAgICAgdGhpcy5ub2RlU2VsZWN0ZWQuZW1pdChub2RlLmlkKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMzUwKTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgZWxlbWVudC5zY3JvbGxUb3AgPj0gZWxlbWVudC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVkaXQobm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgbm9kZS5pc0VkaXRhYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkFkZChub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICAvLyBzaSBubyB0aWVuZSBoaWpvcyBpbnN0YW5jaWFyIGVsIGFycmF5XHJcbiAgICBpZiAoIW5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgbm9kZS5jaGlsZHJlbi5wdXNoKHtcclxuICAgICAgaWQ6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgcGFyZW50OiBub2RlLFxyXG4gICAgICBpc0VkaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZShub2RlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlKG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIC8vIFJlbXVldmUgZWwgbm9kbyB1dGlsaXphbmRvIGxhIGxpYnJlcmlhIGRlIGxvZGFzaFxyXG4gICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xyXG5cclxuICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgIHRoaXMucmVtb3ZlZC5lbWl0KG5vZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0ZWQobm9kZTogTm9kZSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbm9kZS5uYW1lID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUgPT09ICcnKSB7XHJcbiAgICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLmlkICYmIG5vZGUuaWQgIT0gbnVsbCAmJiBub2RlLm5hbWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICB0aGlzLmVkaXRlZC5lbWl0KG5vZGUpO1xyXG4gICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZWxlY3ROb2RlKG5vZGUsIG5vZGUuaWQpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLmlkID09IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5hZGRlZC5lbWl0KG5vZGUpO1xyXG4gICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwobm9kZTogTm9kZSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAvLyBTaSBubyB0aWVuZSBpZCBwb3Igc2VyIHVuIG51ZXZvIGl0ZW0sIGxvIGVsaW1pbmFcclxuICAgIGlmIChub2RlLmlkID09IG51bGwpIHtcclxuICAgICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbkRibENsaWNrKG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb2JsZUNsaWNrLmVtaXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICBjYXNlICdEZWxldGUnOlxyXG4gICAgICAgIHRoaXMua2V5cHJlc3NEZWxldGUuZW1pdCghIXRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCA/IHRoaXMuY3VycmVudE5vZGUuaWQgOiBudWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnSW5zZXJ0JzpcclxuICAgICAgICB0aGlzLmtleXByZXNzSW5zZXJ0LmVtaXQoISF0aGlzLmN1cnJlbnROb2RlICYmIHRoaXMuY3VycmVudE5vZGUuaWQgPyB0aGlzLmN1cnJlbnROb2RlLmlkIDogbnVsbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgdGhpcy5tb3ZlRG93bkludG9UcmVlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgIHRoaXMubW92ZVVwSW50b1RyZWUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT09IEV2ZW50cyA9PT09PT09PVxyXG5cclxuICAvLyNyZWdpb24gID09PT09PT09IE1ldG9kb3MgPT09PT09PT09PT09PVxyXG5cclxuICBwcml2YXRlIG1vdmVVcEludG9UcmVlKCk6IG51bWJlciB7XHJcbiAgICBpZiAoISF0aGlzLmRhdGEpIHtcclxuICAgICAgLy8gc2kgYXVuIG5vIGhheSBuaW5ndW4gbm9kZSBzZWxlY2Npb25hZG8gc2VsZWNjaW9uYSBlbCBwcmltZXJvXHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmRhdGEuY2hpbGRyZW5bMF0uaWQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmRhdGEuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAvLyBvYnRpZW5lIGVsIGluZGljZSBkZWwgbm9kbyBzZWxlY2Npb25hZG8gYWN0dWFsbWVudGVcclxuICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudE5vZGUpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5pZCA9PSBudWxsICYmIGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2kgdGllbmUgbm9kb3MgYWwgbWlzbW8gbml2ZWwgc2FsdGEgYWwgbm9kbyBhbnRlcmlvclxyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBzaSBubyB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBub2RvIHBhZHJlXHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZURvd25JbnRvVHJlZSgpOiB2b2lkIHtcclxuICAgIGlmICghIXRoaXMuZGF0YSkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5kYXRhLmNoaWxkcmVuWzBdLmlkKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5kYXRhLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUpIHtcclxuICAgICAgICAgIC8vIG9idGllbmUgZWwgaW5kaWNlIGRlbCBub2RvIHNlbGVjY2lvbmFkbyBhY3R1YWxtZW50ZVxyXG4gICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9XHJcbiAgICAgICAgICAgICEhdGhpcy5jdXJyZW50Tm9kZSAmJiAhIXRoaXMuY3VycmVudE5vZGUucGFyZW50ID8gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnROb2RlKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgLy8gc2kgdGllbmUgY2hpbGRyZW5zIHBhc2EgYWwgcHJpbWVyIGNoaWxkcmVuXHJcbiAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBpbmRleCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGluZGV4ID09PSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudCAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbiAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiAwXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXhPZlBhcmVudDogbnVtYmVyID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID1cclxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW5baW5kZXhPZlBhcmVudCArIDFdID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8gdGhpcy5jdXJyZW50Tm9kZVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW5baW5kZXhPZlBhcmVudCArIDFdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzaSBubyB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBzaWd1aWVudGUgaGFjaWEgYWJham9cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpY2Egc2kgZWwgbm9kbyB0aWVuZSBoaWpvc1xyXG4gICAqL1xyXG4gIGhhc0NoaWxkKHQ6IG51bWJlciwgbm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3R1YWxpemEgZWwgYXJib2wgYm9ycmFuZG8gdG9kYSBsYSBkYXRhICwgc29sbyBjdWFuZG8gbm8gc2UgdXRpbGl6YSBwYWdpbmFjaW9uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWZyZXNoVHJlZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICBjb25zdCBkYXRhc291cmNlRGF0YTogTm9kZVtdID0gdGhpcy5kYXRhU291cmNlLmRhdGE7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFzb3VyY2VEYXRhO1xyXG4gICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBkYXRhc291cmNlRGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdHVhbGl6YSBlbCBhcmJvbCBjdWFuZG8gc2UgdXRpbGl6YSBsYSBwYWdpbmFjaW9uIChDdWFuZG8gbm8gLCB1dGlsaWNlIGVsIG1ldG9kbyByZWZyZXNoVHJlZSgpKVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGFzb3VyY2VEYXRhOiBOb2RlW10gPSB0aGlzLmRhdGFTb3VyY2UuZGF0YTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YXNvdXJjZURhdGE7XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IGRhdGFzb3VyY2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb05leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgJiYgIXRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkKSB7XHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yYW5nZVNjcm9sbGVkLmVtaXQoe1xyXG4gICAgICAgIHBhZ2U6IHRoaXMudHJlZUhlbGlzYUNvbm5lY3QubmV4dFBhZ2UoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogTm9kZVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YSkge1xyXG4gICAgICB0aGlzLmRhdGEgPSB7IGlkOiBudWxsLCBuYW1lOiAncm9vdCcsIGlzU2VsZWN0ZWQ6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICB0aGlzLmRhdGEuY2hpbGRyZW4gPSBuZXcgQXJyYXk8Tm9kZT4oKTtcclxuICAgICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdCA9IG5ldyBUcmVlSGVsaXNhQ29ubmVjdDxOb2RlPigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gdGhpcy5kYXRhLmNoaWxkcmVuLmNvbmNhdChkYXRhKTtcclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgIHRoaXMuZmlsbFBhcmVudChub2RlLCB0aGlzLmRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gdGhpcy5yZW9yZGVyQnlPcmRlckluZGV4KHRoaXMuZGF0YS5jaGlsZHJlbik7XHJcblxyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSB0aGlzLmRhdGEuY2hpbGRyZW47XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IHRoaXMuZGF0YS5jaGlsZHJlbjtcclxuICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNMYXN0UGFnZSA9IGRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExsZW5hbiBlbCBjYW1wbyBwYXJlbnQgZGUgdG9kb3MgbG9zIG5vZG9zIGhpam9zXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBmaWxsUGFyZW50KG5vZGU6IE5vZGUsIHBhcmVudDogTm9kZSk6IHZvaWQge1xyXG4gICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maWxsUGFyZW50KGl0ZW0sIG5vZGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbG9jYSBjb21vIHRydWUgZGVsIGlzU2VsZWN0ZWQgZGVsIG5vZG8gcXVlIGNvbmN1ZXJkZSBjb24gZWwgaWRcclxuICAgKi9cclxuICBwcml2YXRlIHNlbGVjdE5vZGUobm9kZTogTm9kZSwgaWQ6IG51bWJlciB8IHN0cmluZyk6IE5vZGUge1xyXG4gICAgdGhpcy51cFNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICBpZiAoISFub2RlKSB7XHJcbiAgICAgIGlmICghIXRoaXMuc2VsZWN0ZWROb2RlKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZVNlbGVjdGVkOiBOb2RlID0gdGhpcy5nZXROb2RlQnlJZCh0aGlzLnNlbGVjdGVkTm9kZSk7XHJcbiAgICAgICAgaWYgKG5vZGVTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBub2RlU2VsZWN0ZWQuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCEhIW5vZGUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5pZCAhPT0gdW5kZWZpbmVkICYmIG5vZGUuaWQgPT09IGlkKSB7XHJcbiAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZXhwYW5kQWxsUGFyZW50cyhub2RlKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBub2RlLmlkO1xyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZHJlbiAhPSBudWxsKSB7XHJcbiAgICAgIGxldCBpOiBudW1iZXI7XHJcbiAgICAgIGxldCByZXN1bHQ6IE5vZGUgPSBudWxsO1xyXG4gICAgICBmb3IgKGkgPSAwOyByZXN1bHQgPT0gbnVsbCAmJiBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMuc2VsZWN0Tm9kZShub2RlLmNoaWxkcmVuW2ldLCBpZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBhbmRBbGxQYXJlbnRzKG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIGlmICghIW5vZGUgJiYgISFub2RlLnBhcmVudCkge1xyXG4gICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUobm9kZS5wYXJlbnQpO1xyXG4gICAgICB0aGlzLmV4cGFuZEFsbFBhcmVudHMobm9kZS5wYXJlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRWxpbWluYSBlbCBpc1NlbGVjdGVkIGRlIHRvZG9zIGxvcyBub2Rvc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgdXBTZWxlY3ROb2RlKG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIGlmICghIW5vZGUgJiYgbm9kZS5pc1NlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIGlmICghIW5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkcmVuTm9kZSBvZiBub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICB0aGlzLnVwU2VsZWN0Tm9kZShjaGlsZHJlbk5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NOb2RlKG5vZGU6IE5vZGUpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBjbGFzc05vZGU6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAobm9kZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgIGNsYXNzTm9kZS5wdXNoKCdpc1NlbGVjdGVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5jbGFzc05vZGUpIHtcclxuICAgICAgY2xhc3NOb2RlLnB1c2gobm9kZS5jbGFzc05vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzTm9kZTtcclxuICB9XHJcblxyXG4gIG9uRWRpdE1vZGUobm9kZTogTm9kZSwgZWRpdE1vZGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKG5vZGUpLmVkaXRNb2RlID0gZWRpdE1vZGU7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdE9wdGlvbihldmVudDogTWF0T3B0aW9uU2VsZWN0aW9uQ2hhbmdlLCBub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBub2RlLmlzQ2hlY2tlZE9wdGlvbiA9IGV2ZW50LnNvdXJjZS5zZWxlY3RlZDtcclxuICAgIGlmIChub2RlLmlzQ2hlY2tlZE9wdGlvbikge1xyXG4gICAgICB0aGlzLmNoZWNrZWRPcHRpb25Ob2RlLmVtaXQobm9kZS5pZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVuY2hlY2tlZE9wdGlvbk5vZGUuZW1pdChub2RlLmlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkT3B0aW9ucyhcclxuICAgIG5vZGU6IE5vZGVcclxuICApOiB7XHJcbiAgICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgICBlZGl0TW9kZTogYm9vbGVhbjtcclxuICB9IHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5oYXMobm9kZS5pZCkpIHtcclxuICAgICAgdGhpcy5yZWxvYWRTZWxlY3RlZE9wdGlvbnMobm9kZSwgdGhpcy5zZWxlY3RlZE9wdGlvbnMuZ2V0KG5vZGUuaWQpLmVkaXRNb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5nZXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbG9hZFNlbGVjdGVkT3B0aW9ucyhub2RlOiBOb2RlLCBlZGl0TW9kZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgYXJyYXk6IEFycmF5PHN0cmluZyB8IG51bWJlciB8IG51bGw+ID0gbmV3IEFycmF5PHN0cmluZyB8IG51bWJlciB8IG51bGw+KCk7XHJcbiAgICBub2RlLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBOb2RlKSA9PiB7XHJcbiAgICAgIGlmIChvcHRpb24uaXNDaGVja2VkT3B0aW9uKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChvcHRpb24uaWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9iajoge1xyXG4gICAgICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgICAgIGVkaXRNb2RlOiBib29sZWFuO1xyXG4gICAgfSA9IHsgZm9ybUNvbnRyb2w6IG5ldyBGb3JtQ29udHJvbChhcnJheSksIGVkaXRNb2RlIH07XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5zZXQobm9kZS5pZCwgb2JqKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgZWwgcHJpbWVyIE5vZGUgcXVlIGVuY3VlbnRyZSBzZWd1biBlbCBpZCBlbnZpYWRvIG8gbnVsbCBzaSBubyBoYXkgbmluZ3Vub1xyXG4gICAqIEBwYXJhbSBpZCAgbnVtYmVyIHwgc3RyaW5nXHJcbiAgICogQHJldHVybnMgTm9kZSBvIG51bGwgc2kgbm8gaGF5IHVuIG5vZG8gY29uIGVzZSBpZFxyXG4gICAqL1xyXG4gIGdldE5vZGVCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBOb2RlIHtcclxuICAgIGNvbnN0IHF1ZXVlOiBOb2RlW10gPSBbLi4udGhpcy5kYXRhU291cmNlLmRhdGFdO1xyXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgY3VycjogTm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgIGlmIChjdXJyLmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghIWN1cnIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgIHF1ZXVlLnB1c2goLi4uY3Vyci5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJlb3JkZXJCeU9yZGVySW5kZXgobm9kZTogTm9kZVtdKTogTm9kZVtdIHtcclxuICAgIGlmICghIW5vZGUgJiYgbm9kZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbm9kZSA9IF8ub3JkZXJCeShub2RlLCAoeDogTm9kZSkgPT4geC5vcmRlckluZGV4LCBbJ2FzYyddKTtcclxuICAgICAgICBub2RlLmZvckVhY2goKGVsZW1lbnQ6IE5vZGUpID0+IHtcclxuICAgICAgICAgIGlmICghIWVsZW1lbnQuY2hpbGRyZW4gJiYgZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4gPSB0aGlzLnJlb3JkZXJCeU9yZGVySW5kZXgoZWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09IE1ldG9kb3MgPT09PT09PT09PT09XHJcbn1cclxuIl19