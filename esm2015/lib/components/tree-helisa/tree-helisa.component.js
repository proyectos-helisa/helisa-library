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
        this.clickAddNode = new EventEmitter();
        this.clickEditNode = new EventEmitter();
        this.clickDeleteNode = new EventEmitter();
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
        this.clickEditNode.emit(node);
        /** @Deprecated
         *  Ya no se edita el nodo ahora solo se emite el evento 'clickEditNode'
         * retornando el nodo al cual le hicieron click en la opción delete
         */
        // node.isEditable = true;
        // this.isDisabled = true;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    onAdd(node) {
        this.clickAddNode.emit(node);
        /** @Deprecated
         *  Ya no se crea y se agrega el nodo ahora solo se emite el evento 'clickAddNode'
         * retornando el nodo al cual le hicieron click en la opción add
         */
        //   // si no tiene hijos instanciar el array
        //   if (!node.children) {
        //     node.children = [];
        //   }
        //   node.children.push({
        //     id: Math.random(),
        //     name: '',
        //     isSelected: false,
        //     parent: node,
        //     isEditable: true
        //   });
        //   if (node.children) {
        //     this.isDisabled = true;
        //     this.treeHelisaService.expandOneNode(node);
        //   }
        //   this.refreshTree();
    }
    /**
     * @param {?} node
     * @return {?}
     */
    onDelete(node) {
        this.clickDeleteNode.emit(node);
        /** @Deprecated
         *  Ya no se elimina el nodo ahora solo se emite el evento 'clickDeleteNode'
         * retornando el nodo al cual le hicieron click en la opción delete
         */
        // // Remueve el nodo utilizando la libreria de lodash
        // _.remove(node.parent.children, node);
        // this.refreshTree();
        // this.removed.emit(node.id);
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
        if (node == null) {
            return null;
        }
        this.upSelectNode(node);
        if (!!this.selectedNode) {
            /** @type {?} */
            const nodeSelected = this.getNodeById(this.selectedNode);
            if (nodeSelected != null) {
                nodeSelected.isSelected = false;
                this.selectedNode = null;
            }
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
                template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n    <!-- This is the tree node template for leaf nodes -->\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      <li\n        class=\"mat-tree-node\"\n        [ngClass]=\"getClassNode(node)\"\n        (click)=\"onRedirect(node)\"\n        (dblclick)=\"onDblClick(node)\"\n        *ngIf=\"!node.isEditable\"\n        class=\"tree-node\"\n      >\n        <!-- use a disabled button to provide padding for tree leaf -->\n        <button mat-icon-button disabled></button>\n        <ng-container *ngIf=\"node.data\">\n          <ul>\n            <ng-container *ngFor=\"let col of node.data\">\n              <li *ngIf=\"col.visible\">\n                {{ col.name }}\n              </li>\n            </ng-container>\n          </ul>\n        </ng-container>\n        <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\n      </li>\n      <li class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled || node.disabledEditButton\" (click)=\"onEdit(node)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled || node.disabledAddButton\" (click)=\"onAdd(node)\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled || node.disabledDeleteButton\" (click)=\"onDelete(node)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </li>\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\n              option.name\n            }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n          <mat-icon>done</mat-icon>\n        </button>\n      </div>\n\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\n        <hel-input-with-button [isFocused]=\"true\" [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\n        </hel-input-with-button>\n      </li>\n    </mat-tree-node>\n    <!-- This is the tree node template for expandable nodes -->\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\n      <li>\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\n          <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n              {{ treeControl.isExpanded(node) ? 'remove' : 'add' }}\n            </mat-icon>\n          </button>\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" [ngClass]=\"getClassNode(node)\">\n            <ng-container *ngIf=\"node.data\">\n              <ul>\n                <ng-container *ngFor=\"let col of node.data\">\n                  <li *ngIf=\"col.visible\">\n                    {{ col.name }}\n                  </li>\n                </ng-container>\n              </ul>\n            </ng-container>\n            <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\n          </p>\n        </div>\n        <div class=\"tree-options\">\n          <li class=\"tree-options\">\n            <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled || node.disabledEditButton\" (click)=\"onEdit(node)\">\n              <mat-icon>edit</mat-icon>\n            </button>\n            <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled || node.disabledAddButton\" (click)=\"onAdd(node)\">\n              <mat-icon>add</mat-icon>\n            </button>\n            <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled || node.disabledDeleteButton\" (click)=\"onDelete(node)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </li>\n          <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n            <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n              <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n                <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\n                  option.name\n                }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n              <mat-icon>done</mat-icon>\n            </button>\n          </div>\n\n          <!-- <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\n            <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\n            </hel-input-with-button>\n          </li> -->\n        </div>\n        <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n          <ng-container matTreeNodeOutlet></ng-container>\n        </ul>\n      </li>\n    </mat-nested-tree-node>\n  </mat-tree>\n</div>\n",
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
    clickAddNode: [{ type: Output }],
    clickEditNode: [{ type: Output }],
    clickDeleteNode: [{ type: Output }],
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
    TreeHelisaComponent.prototype.clickAddNode;
    /** @type {?} */
    TreeHelisaComponent.prototype.clickEditNode;
    /** @type {?} */
    TreeHelisaComponent.prototype.clickDeleteNode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBNEIsTUFBTSxtQkFBbUIsQ0FBQztBQUUvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRzdDLHVDQUVDOzs7SUFEQyxpQ0FBYTs7QUFTZixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBSzlCLFlBQW9CLGlCQUFvQyxFQUFVLE1BQWMsRUFBVSxVQUFzQjtRQUE1RixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFnQnhHLG9CQUFlLEdBTW5CLElBQUksR0FBRyxFQU1SLENBQUM7Ozs7UUFTTSxZQUFPLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBSzdFLFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7UUFNdEQsVUFBSyxH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QUFtRDs7SUFDbkQsdUNBQXNCOztJQUN0QixtQ0FBcUM7Ozs7O0lBQ3JDLDhDQVlJOzs7OztJQUlKLG1DQUFvQjs7Ozs7SUFLcEIsc0NBQXVGOzs7OztJQUt2RixxQ0FBZ0U7Ozs7OztJQU1oRSxvQ0FBK0Q7O0lBQy9ELDZDQUE4RTs7SUFDOUUsNENBQWlHOztJQUNqRywyQ0FBNEY7O0lBQzVGLHlDQUEwRjs7SUFDMUYsNkNBQTRHOztJQUM1Ryw2Q0FBNEc7O0lBQzVHLGdEQUErRzs7SUFDL0csa0RBQWlIOztJQUNqSCwyQ0FBc0U7O0lBQ3RFLDRDQUF1RTs7SUFDdkUsOENBQXlFOztJQUV6RSwwQ0FBK0g7O0lBQy9ILHlDQUFnRjs7SUFFaEYsNENBQThCOztJQUM5QiwwQ0FBeUI7Ozs7O0lBakViLGdEQUE0Qzs7Ozs7SUFBRSxxQ0FBc0I7Ozs7O0lBQUUseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5lc3RlZFRyZWVDb250cm9sLCBUcmVlQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlLCBNYXRUcmVlLCBNYXRPcHRpb25TZWxlY3Rpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7IFRyZWVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLWhlbGlzYS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBUcmVlSGVsaXNhQ29ubmVjdCB9IGZyb20gJy4vdHJlZS1oZWxpc2EtY29ubmVjdCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VHJlZUhlbGlzYSB7XG4gIHBhZ2U6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cmVlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddXG4gIC8vIGhvc3Q6IHsgJyhkb2N1bWVudDprZXl1cCknOiAnb25LZXlEb3duKCRldmVudCknIH1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIHNlbGVjdGVkTm9kZTogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgLy8jZW5kcmVnaW9uID09PT09PSBWYXJpYWJsZXMgPT09PT09PT1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVIZWxpc2FTZXJ2aWNlOiBUcmVlSGVsaXNhU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy8gY2FyZ2FyIGRhdG9zIHBhc2Fkb3MgcG9yIGVsIEBJbnB1dFxuICAgIGlmICghIXRoaXMuZGF0YSkge1xuICAgICAgY29uc3QgZGF0YTogTm9kZSA9IHRoaXMuZGF0YTtcbiAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgICB0aGlzLnJlY2VpdmVQYWdlKGRhdGEuY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdO1xuICAgICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBbXTtcbiAgICB9XG4gIH1cblxuICAvLyNyZWdpb24gID09PT09PSBWYXJpYWJsZXMgPT09PT09PT09PT09PVxuICBwcml2YXRlIHRyZWVIZWxpc2FDb25uZWN0OiBUcmVlSGVsaXNhQ29ubmVjdDxOb2RlPjtcbiAgZm9ybUVkaXQ6IEZvcm1Db250cm9sO1xuICBAVmlld0NoaWxkKCd0cmVlJykgdHJlZTogTWF0VHJlZTx7fT47XG4gIHByaXZhdGUgc2VsZWN0ZWRPcHRpb25zOiBNYXA8XG4gICAgc3RyaW5nIHwgbnVtYmVyLFxuICAgIHtcbiAgICAgIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgICAgIGVkaXRNb2RlOiBib29sZWFuO1xuICAgIH1cbiAgPiA9IG5ldyBNYXA8XG4gICAgc3RyaW5nIHwgbnVtYmVyLFxuICAgIHtcbiAgICAgIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgICAgIGVkaXRNb2RlOiBib29sZWFuO1xuICAgIH1cbiAgPigpO1xuICAvKipcbiAgICogRGF0b3MgZGVsIEFyYm9sXG4gICAqL1xuICBASW5wdXQoKSBkYXRhOiBOb2RlO1xuXG4gIC8qKlxuICAgKiBSZXRvcm5hIGVsIGlkIGRlbCBub2RvIHJlbW92aWRvXG4gICAqL1xuICBAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcblxuICAvKipcbiAgICogUmV0b3JuYSB1biBub2RvIGVkaXRhZG9cbiAgICovXG4gIEBPdXRwdXQoKSBlZGl0ZWQ6IEV2ZW50RW1pdHRlcjxOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcblxuICAvKipcbiAgICogUmV0b3JuYSB1biBub2RvIHNpbiBpZCBkZWwgbm9kbyAsIHBlcm8gc2kgY29uIGVsIHBhcmVudFxuICAgKiBwYXJhIGNvbm9jZXIgYSBjdWFsIGZ1ZSBhw7FhZGlkb1xuICAgKi9cbiAgQE91dHB1dCgpIGFkZGVkOiBFdmVudEVtaXR0ZXI8Tm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XG4gIEBPdXRwdXQoKSBjb2xsYXBzZVBhcmVudDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmFuZ2VTY3JvbGxlZDogRXZlbnRFbWl0dGVyPFJlcXVlc3RUcmVlSGVsaXNhPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmVxdWVzdFRyZWVIZWxpc2E+KCk7XG4gIEBPdXRwdXQoKSBub2RlU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBkb2JsZUNsaWNrOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xuICBAT3V0cHV0KCkga2V5cHJlc3NEZWxldGU6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcbiAgQE91dHB1dCgpIGtleXByZXNzSW5zZXJ0OiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XG4gIEBPdXRwdXQoKSBjaGVja2VkT3B0aW9uTm9kZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xuICBAT3V0cHV0KCkgdW5jaGVja2VkT3B0aW9uTm9kZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xuICBAT3V0cHV0KCkgY2xpY2tBZGROb2RlOiBFdmVudEVtaXR0ZXI8Tm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XG4gIEBPdXRwdXQoKSBjbGlja0VkaXROb2RlOiBFdmVudEVtaXR0ZXI8Tm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XG4gIEBPdXRwdXQoKSBjbGlja0RlbGV0ZU5vZGU6IEV2ZW50RW1pdHRlcjxOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcblxuICB0cmVlQ29udHJvbDogTmVzdGVkVHJlZUNvbnRyb2w8Tm9kZT4gPSBuZXcgTmVzdGVkVHJlZUNvbnRyb2w8Tm9kZT4oKG5vZGU6IE5vZGUpOiBOb2RlW10gfCBPYnNlcnZhYmxlPE5vZGVbXT4gPT4gbm9kZS5jaGlsZHJlbik7XG4gIGRhdGFTb3VyY2U6IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlPE5vZGU+ID0gbmV3IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlPE5vZGU+KCk7XG5cbiAgaXNTaW5nbGVDbGljazogYm9vbGVhbiA9IHRydWU7XG4gIGN1cnJlbnROb2RlOiBOb2RlID0gbnVsbDtcblxuICAvKipcbiAgICogT2J0aWVuZSBsYSBkZXNjcmlwY2lvbiBjb21wbGV0YSBkZWwgbm9kb1xuICAgKiBAZXhhbXBsZSBOb2RvIHBhZHJlLG5vZG8gaGlqbyxub2RvIG5pZXRvXG4gICAqIEBwYXJhbSBub2RlIERlYmUgdGVuZXIgdG9kb3MgbG9zIHBhcmVudCBsbGVub3MgaGFjaWEgYXJyaWJhXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldERlc2NyaXB0aW9uKG5vZGU6IE5vZGUpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW25vZGUubmFtZV07XG4gICAgbGV0IGNvbmNhdDogc3RyaW5nID0gJyc7XG5cbiAgICBpZiAobm9kZS5wYXJlbnQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZ2V0RGVzY3JpcHRpb24obm9kZS5wYXJlbnQpKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5vZGUubmFtZTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSByZXN1bHQucmV2ZXJzZSgpO1xuXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudDogc3RyaW5nID0gcmVzdWx0W2ldO1xuICAgICAgY29uY2F0ID0gY29uY2F0ICsgZWxlbWVudCArIChpID09PSByZXN1bHQubGVuZ3RoIC0gMSA/ICcnIDogJywnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uY2F0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gc2kgc2UgY2FyZ2FuIGRhdG9zIHBvciBtZWRpbyBkZWwgc2VydmljaW9cbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmRhdGFTb3VyY2VPYnNlcnZhYmxlLnN1YnNjcmliZSgocmVzOiBOb2RlKSA9PiB7XG4gICAgICBpZiAoISFyZXMgJiYgISFyZXMuY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGUgPSByZXMuaWQ7XG4gICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UocmVzLmNoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW107XG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gW107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBPYnNlcnZhYmxlLCBzaSBjYW1iaWEgZWwgbm9kbyBzZWxlY2Npb25hZG8gcG9yIG1lZGlvIGRlbCBzZXJ2aWNpb1xuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZVNlbGVjdGVkLnN1YnNjcmliZSgocmVzOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICAgIGlmICghIXRoaXMuZGF0YSAmJiAhIXRoaXMuZGF0YS5jaGlsZHJlbikge1xuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCByZXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5yZWZyZXNoVHJlZU9ic2VydmFibGUuc3Vic2NyaWJlKChyZXM6IHZvaWQpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UucmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbk9ic2VydmFibGUuc3Vic2NyaWJlKChyZXM6IHZvaWQpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUV4cGFuZC5zdWJzY3JpYmUoKHJlczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZXhwYW5kQWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUNvbGxhcHNlLnN1YnNjcmliZSgocmVzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuY29sbGFwc2VBbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKHJlczogTm9kZSkgPT4ge1xuICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKHJlcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmNvbGxhcHNlT25lTm9kZU9ic2VydmFibGUuc3Vic2NyaWJlKChyZXM6IE5vZGUpID0+IHtcbiAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKHJlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyNyZWdpb24gID09PT09PSBFdmVudHMgPT09PT09PT09PT1cbiAgb25SZWRpcmVjdChub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5pc1NpbmdsZUNsaWNrID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlQ2xpY2spIHtcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKG5vZGUsIG5vZGUuaWQpO1xuXG4gICAgICAgIC8vIGlmKCEhbm9kZSAmJiAhbm9kZS5jaGlsZHJlbil7XG4gICAgICAgIGlmICghIW5vZGUpIHtcbiAgICAgICAgICB0aGlzLm5vZGVTZWxlY3RlZC5lbWl0KG5vZGUuaWQpO1xuICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBub2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMzUwKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgaWYgKGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgZWxlbWVudC5zY3JvbGxUb3AgPj0gZWxlbWVudC5zY3JvbGxIZWlnaHQpIHtcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRWRpdChub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5jbGlja0VkaXROb2RlLmVtaXQobm9kZSk7XG4gICAgLyoqIEBEZXByZWNhdGVkXG4gICAgICogIFlhIG5vIHNlIGVkaXRhIGVsIG5vZG8gYWhvcmEgc29sbyBzZSBlbWl0ZSBlbCBldmVudG8gJ2NsaWNrRWRpdE5vZGUnXG4gICAgICogcmV0b3JuYW5kbyBlbCBub2RvIGFsIGN1YWwgbGUgaGljaWVyb24gY2xpY2sgZW4gbGEgb3BjacOzbiBkZWxldGVcbiAgICAgKi9cbiAgICAvLyBub2RlLmlzRWRpdGFibGUgPSB0cnVlO1xuICAgIC8vIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBvbkFkZChub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5jbGlja0FkZE5vZGUuZW1pdChub2RlKTtcbiAgICAvKiogQERlcHJlY2F0ZWRcbiAgICAgKiAgWWEgbm8gc2UgY3JlYSB5IHNlIGFncmVnYSBlbCBub2RvIGFob3JhIHNvbG8gc2UgZW1pdGUgZWwgZXZlbnRvICdjbGlja0FkZE5vZGUnXG4gICAgICogcmV0b3JuYW5kbyBlbCBub2RvIGFsIGN1YWwgbGUgaGljaWVyb24gY2xpY2sgZW4gbGEgb3BjacOzbiBhZGRcbiAgICAgKi9cbiAgICAvLyAgIC8vIHNpIG5vIHRpZW5lIGhpam9zIGluc3RhbmNpYXIgZWwgYXJyYXlcbiAgICAvLyAgIGlmICghbm9kZS5jaGlsZHJlbikge1xuICAgIC8vICAgICBub2RlLmNoaWxkcmVuID0gW107XG4gICAgLy8gICB9XG4gICAgLy8gICBub2RlLmNoaWxkcmVuLnB1c2goe1xuICAgIC8vICAgICBpZDogTWF0aC5yYW5kb20oKSxcbiAgICAvLyAgICAgbmFtZTogJycsXG4gICAgLy8gICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgIC8vICAgICBwYXJlbnQ6IG5vZGUsXG4gICAgLy8gICAgIGlzRWRpdGFibGU6IHRydWVcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAvLyAgICAgdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKG5vZGUpO1xuICAgIC8vICAgfVxuICAgIC8vICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xuICB9XG5cbiAgb25EZWxldGUobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHRoaXMuY2xpY2tEZWxldGVOb2RlLmVtaXQobm9kZSk7XG4gICAgLyoqIEBEZXByZWNhdGVkXG4gICAgICogIFlhIG5vIHNlIGVsaW1pbmEgZWwgbm9kbyBhaG9yYSBzb2xvIHNlIGVtaXRlIGVsIGV2ZW50byAnY2xpY2tEZWxldGVOb2RlJ1xuICAgICAqIHJldG9ybmFuZG8gZWwgbm9kbyBhbCBjdWFsIGxlIGhpY2llcm9uIGNsaWNrIGVuIGxhIG9wY2nDs24gZGVsZXRlXG4gICAgICovXG4gICAgLy8gLy8gUmVtdWV2ZSBlbCBub2RvIHV0aWxpemFuZG8gbGEgbGlicmVyaWEgZGUgbG9kYXNoXG4gICAgLy8gXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xuXG4gICAgLy8gdGhpcy5yZWZyZXNoVHJlZSgpO1xuICAgIC8vIHRoaXMucmVtb3ZlZC5lbWl0KG5vZGUuaWQpO1xuICB9XG5cbiAgb25FZGl0ZWQobm9kZTogTm9kZSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIG5vZGUubmFtZSA9IHZhbHVlO1xuICAgIGlmIChub2RlLmlkID09IG51bGwgJiYgbm9kZS5uYW1lID09PSAnJykge1xuICAgICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xuICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pZCAmJiBub2RlLmlkICE9IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIHRoaXMuZWRpdGVkLmVtaXQobm9kZSk7XG4gICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0Tm9kZShub2RlLCBub2RlLmlkKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUudHJpbSgpICE9PSAnJykge1xuICAgICAgdGhpcy5hZGRlZC5lbWl0KG5vZGUpO1xuICAgICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcbiAgfVxuXG4gIG9uQ2FuY2VsKG5vZGU6IE5vZGUsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAvLyBTaSBubyB0aWVuZSBpZCBwb3Igc2VyIHVuIG51ZXZvIGl0ZW0sIGxvIGVsaW1pbmFcbiAgICBpZiAobm9kZS5pZCA9PSBudWxsKSB7XG4gICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XG4gICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XG4gICAgfVxuXG4gICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XG4gIH1cblxuICBvbkRibENsaWNrKG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2luZ2xlQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLmRvYmxlQ2xpY2suZW1pdChub2RlLmlkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0RlbGV0ZSc6XG4gICAgICAgIHRoaXMua2V5cHJlc3NEZWxldGUuZW1pdCghIXRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCA/IHRoaXMuY3VycmVudE5vZGUuaWQgOiBudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdJbnNlcnQnOlxuICAgICAgICB0aGlzLmtleXByZXNzSW5zZXJ0LmVtaXQoISF0aGlzLmN1cnJlbnROb2RlICYmIHRoaXMuY3VycmVudE5vZGUuaWQgPyB0aGlzLmN1cnJlbnROb2RlLmlkIDogbnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5tb3ZlRG93bkludG9UcmVlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHRoaXMubW92ZVVwSW50b1RyZWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8jZW5kcmVnaW9uID09PT09PT0gRXZlbnRzID09PT09PT09XG5cbiAgLy8jcmVnaW9uICA9PT09PT09PSBNZXRvZG9zID09PT09PT09PT09PT1cblxuICBwcml2YXRlIG1vdmVVcEludG9UcmVlKCk6IG51bWJlciB7XG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7XG4gICAgICAvLyBzaSBhdW4gbm8gaGF5IG5pbmd1biBub2RlIHNlbGVjY2lvbmFkbyBzZWxlY2Npb25hIGVsIHByaW1lcm9cbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5kYXRhLmNoaWxkcmVuWzBdLmlkKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuZGF0YS5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUucGFyZW50ICYmIHRoaXMuY3VycmVudE5vZGUuaWQgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIG9idGllbmUgZWwgaW5kaWNlIGRlbCBub2RvIHNlbGVjY2lvbmFkbyBhY3R1YWxtZW50ZVxuICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudE5vZGUpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUucGFyZW50LmlkID09IG51bGwgJiYgaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzaSB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBub2RvIGFudGVyaW9yXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xuICAgICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gc2kgbm8gdGllbmUgbm9kb3MgYWwgbWlzbW8gbml2ZWwgc2FsdGEgYWwgbm9kbyBwYWRyZVxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW5baW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XG4gICAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlRG93bkludG9UcmVlKCk6IHZvaWQge1xuICAgIGlmICghIXRoaXMuZGF0YSkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmRhdGEuY2hpbGRyZW5bMF0uaWQpO1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5kYXRhLmNoaWxkcmVuWzBdO1xuICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZSkge1xuICAgICAgICAgIC8vIG9idGllbmUgZWwgaW5kaWNlIGRlbCBub2RvIHNlbGVjY2lvbmFkbyBhY3R1YWxtZW50ZVxuICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPVxuICAgICAgICAgICAgISF0aGlzLmN1cnJlbnROb2RlICYmICEhdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQgPyB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudE5vZGUpIDogbnVsbDtcblxuICAgICAgICAgIC8vIHNpIHRpZW5lIGNoaWxkcmVucyBwYXNhIGFsIHByaW1lciBjaGlsZHJlblxuICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBpbmRleCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBpbmRleCA9PT0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50ICE9IG51bGwgJiZcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbiAhPSBudWxsICYmXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID4gMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXhPZlBhcmVudDogbnVtYmVyID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbltpbmRleE9mUGFyZW50ICsgMV0gPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gdGhpcy5jdXJyZW50Tm9kZVxuICAgICAgICAgICAgICAgIDogdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuW2luZGV4T2ZQYXJlbnQgKyAxXTtcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNpIG5vIHRpZW5lIG5vZG9zIGFsIG1pc21vIG5pdmVsIHNhbHRhIGFsIHNpZ3VpZW50ZSBoYWNpYSBhYmFqb1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuW2luZGV4ICsgMV07XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcbiAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpY2Egc2kgZWwgbm9kbyB0aWVuZSBoaWpvc1xuICAgKi9cbiAgaGFzQ2hpbGQodDogbnVtYmVyLCBub2RlOiBOb2RlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsaXphIGVsIGFyYm9sIGJvcnJhbmRvIHRvZGEgbGEgZGF0YSAsIHNvbG8gY3VhbmRvIG5vIHNlIHV0aWxpemEgcGFnaW5hY2lvblxuICAgKi9cbiAgcHJpdmF0ZSByZWZyZXNoVHJlZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgIGNvbnN0IGRhdGFzb3VyY2VEYXRhOiBOb2RlW10gPSB0aGlzLmRhdGFTb3VyY2UuZGF0YTtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IG51bGw7XG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhc291cmNlRGF0YTtcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IGRhdGFzb3VyY2VEYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbGl6YSBlbCBhcmJvbCBjdWFuZG8gc2UgdXRpbGl6YSBsYSBwYWdpbmFjaW9uIChDdWFuZG8gbm8gLCB1dGlsaWNlIGVsIG1ldG9kbyByZWZyZXNoVHJlZSgpKVxuICAgKi9cbiAgcHJpdmF0ZSByZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGFzb3VyY2VEYXRhOiBOb2RlW10gPSB0aGlzLmRhdGFTb3VyY2UuZGF0YTtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IG51bGw7XG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhc291cmNlRGF0YTtcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IGRhdGFzb3VyY2VEYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnb05leHRQYWdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc0xhc3RQYWdlICYmICF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCkge1xuICAgICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5yYW5nZVNjcm9sbGVkLmVtaXQoe1xuICAgICAgICBwYWdlOiB0aGlzLnRyZWVIZWxpc2FDb25uZWN0Lm5leHRQYWdlKClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogTm9kZVtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHsgaWQ6IG51bGwsIG5hbWU6ICdyb290JywgaXNTZWxlY3RlZDogZmFsc2UgfTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRhdGEuY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuZGF0YS5jaGlsZHJlbiA9IG5ldyBBcnJheTxOb2RlPigpO1xuICAgICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdCA9IG5ldyBUcmVlSGVsaXNhQ29ubmVjdDxOb2RlPigpO1xuICAgIH1cbiAgICB0aGlzLmRhdGEuY2hpbGRyZW4gPSB0aGlzLmRhdGEuY2hpbGRyZW4uY29uY2F0KGRhdGEpO1xuICAgIHRoaXMuZGF0YS5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBOb2RlKSA9PiB7XG4gICAgICB0aGlzLmZpbGxQYXJlbnQobm9kZSwgdGhpcy5kYXRhKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbiA9IHRoaXMucmVvcmRlckJ5T3JkZXJJbmRleCh0aGlzLmRhdGEuY2hpbGRyZW4pO1xuXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSB0aGlzLmRhdGEuY2hpbGRyZW47XG4gICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSB0aGlzLmRhdGEuY2hpbGRyZW47XG4gICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XG4gICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMbGVuYW4gZWwgY2FtcG8gcGFyZW50IGRlIHRvZG9zIGxvcyBub2RvcyBoaWpvc1xuICAgKi9cbiAgcHJpdmF0ZSBmaWxsUGFyZW50KG5vZGU6IE5vZGUsIHBhcmVudDogTm9kZSk6IHZvaWQge1xuICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgIGlmIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtOiBOb2RlKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsbFBhcmVudChpdGVtLCBub2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjb2xvY2EgY29tbyB0cnVlIGRlbCBpc1NlbGVjdGVkIGRlbCBub2RvIHF1ZSBjb25jdWVyZGUgY29uIGVsIGlkXG4gICAqL1xuICBwcml2YXRlIHNlbGVjdE5vZGUobm9kZTogTm9kZSwgaWQ6IG51bWJlciB8IHN0cmluZyk6IE5vZGUge1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLnVwU2VsZWN0Tm9kZShub2RlKTtcbiAgICBpZiAoISF0aGlzLnNlbGVjdGVkTm9kZSkge1xuICAgICAgY29uc3Qgbm9kZVNlbGVjdGVkOiBOb2RlID0gdGhpcy5nZXROb2RlQnlJZCh0aGlzLnNlbGVjdGVkTm9kZSk7XG4gICAgICBpZiAobm9kZVNlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgICAgbm9kZVNlbGVjdGVkLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobm9kZS5pZCAhPT0gdW5kZWZpbmVkICYmIG5vZGUuaWQgPT09IGlkKSB7XG4gICAgICBub2RlLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5leHBhbmRBbGxQYXJlbnRzKG5vZGUpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBub2RlLmlkO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChub2RlLmNoaWxkcmVuICE9IG51bGwpIHtcbiAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICBsZXQgcmVzdWx0OiBOb2RlID0gbnVsbDtcbiAgICAgIGZvciAoaSA9IDA7IHJlc3VsdCA9PSBudWxsICYmIGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuc2VsZWN0Tm9kZShub2RlLmNoaWxkcmVuW2ldLCBpZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZXhwYW5kQWxsUGFyZW50cyhub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgaWYgKCEhbm9kZSAmJiAhIW5vZGUucGFyZW50KSB7XG4gICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUobm9kZS5wYXJlbnQpO1xuICAgICAgdGhpcy5leHBhbmRBbGxQYXJlbnRzKG5vZGUucGFyZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRWxpbWluYSBlbCBpc1NlbGVjdGVkIGRlIHRvZG9zIGxvcyBub2Rvc1xuICAgKi9cbiAgcHJpdmF0ZSB1cFNlbGVjdE5vZGUobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIGlmICghIW5vZGUgJiYgbm9kZS5pc1NlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgaWYgKCEhbm9kZS5jaGlsZHJlbikge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkcmVuTm9kZSBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgdGhpcy51cFNlbGVjdE5vZGUoY2hpbGRyZW5Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENsYXNzTm9kZShub2RlOiBOb2RlKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNsYXNzTm9kZTogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAobm9kZS5pc1NlbGVjdGVkKSB7XG4gICAgICBjbGFzc05vZGUucHVzaCgnaXNTZWxlY3RlZCcpO1xuICAgIH1cbiAgICBpZiAobm9kZS5jbGFzc05vZGUpIHtcbiAgICAgIGNsYXNzTm9kZS5wdXNoKG5vZGUuY2xhc3NOb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTm9kZTtcbiAgfVxuXG4gIG9uRWRpdE1vZGUobm9kZTogTm9kZSwgZWRpdE1vZGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucyhub2RlKS5lZGl0TW9kZSA9IGVkaXRNb2RlO1xuICB9XG5cbiAgb25TZWxlY3RPcHRpb24oZXZlbnQ6IE1hdE9wdGlvblNlbGVjdGlvbkNoYW5nZSwgbm9kZTogTm9kZSk6IHZvaWQge1xuICAgIG5vZGUuaXNDaGVja2VkT3B0aW9uID0gZXZlbnQuc291cmNlLnNlbGVjdGVkO1xuICAgIGlmIChub2RlLmlzQ2hlY2tlZE9wdGlvbikge1xuICAgICAgdGhpcy5jaGVja2VkT3B0aW9uTm9kZS5lbWl0KG5vZGUuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuY2hlY2tlZE9wdGlvbk5vZGUuZW1pdChub2RlLmlkKTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZE9wdGlvbnMoXG4gICAgbm9kZTogTm9kZVxuICApOiB7XG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgIGVkaXRNb2RlOiBib29sZWFuO1xuICB9IHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMuaGFzKG5vZGUuaWQpKSB7XG4gICAgICB0aGlzLnJlbG9hZFNlbGVjdGVkT3B0aW9ucyhub2RlLCB0aGlzLnNlbGVjdGVkT3B0aW9ucy5nZXQobm9kZS5pZCkuZWRpdE1vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbG9hZFNlbGVjdGVkT3B0aW9ucyhub2RlLCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5nZXQobm9kZS5pZCk7XG4gIH1cblxuICBwcml2YXRlIHJlbG9hZFNlbGVjdGVkT3B0aW9ucyhub2RlOiBOb2RlLCBlZGl0TW9kZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGFycmF5OiBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPiA9IG5ldyBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPigpO1xuICAgIG5vZGUub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IE5vZGUpID0+IHtcbiAgICAgIGlmIChvcHRpb24uaXNDaGVja2VkT3B0aW9uKSB7XG4gICAgICAgIGFycmF5LnB1c2gob3B0aW9uLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBvYmo6IHtcbiAgICAgIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgICAgIGVkaXRNb2RlOiBib29sZWFuO1xuICAgIH0gPSB7IGZvcm1Db250cm9sOiBuZXcgRm9ybUNvbnRyb2woYXJyYXkpLCBlZGl0TW9kZSB9O1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnNldChub2RlLmlkLCBvYmopO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldG9ybmEgZWwgcHJpbWVyIE5vZGUgcXVlIGVuY3VlbnRyZSBzZWd1biBlbCBpZCBlbnZpYWRvIG8gbnVsbCBzaSBubyBoYXkgbmluZ3Vub1xuICAgKiBAcGFyYW0gaWQgIG51bWJlciB8IHN0cmluZ1xuICAgKiBAcmV0dXJucyBOb2RlIG8gbnVsbCBzaSBubyBoYXkgdW4gbm9kbyBjb24gZXNlIGlkXG4gICAqL1xuICBnZXROb2RlQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKTogTm9kZSB7XG4gICAgY29uc3QgcXVldWU6IE5vZGVbXSA9IFsuLi50aGlzLmRhdGFTb3VyY2UuZGF0YV07XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGN1cnI6IE5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgaWYgKGN1cnIuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBjdXJyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCEhY3Vyci5jaGlsZHJlbikge1xuICAgICAgICAgIHF1ZXVlLnB1c2goLi4uY3Vyci5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW9yZGVyQnlPcmRlckluZGV4KG5vZGU6IE5vZGVbXSk6IE5vZGVbXSB7XG4gICAgaWYgKCEhbm9kZSAmJiBub2RlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5vZGUgPSBfLm9yZGVyQnkobm9kZSwgKHg6IE5vZGUpID0+IHgub3JkZXJJbmRleCwgWydhc2MnXSk7XG4gICAgICAgIG5vZGUuZm9yRWFjaCgoZWxlbWVudDogTm9kZSkgPT4ge1xuICAgICAgICAgIGlmICghIWVsZW1lbnQuY2hpbGRyZW4gJiYgZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuID0gdGhpcy5yZW9yZGVyQnlPcmRlckluZGV4KGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT0gTWV0b2RvcyA9PT09PT09PT09PT1cbn1cbiJdfQ==