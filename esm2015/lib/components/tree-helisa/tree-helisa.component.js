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
                template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\r\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n    <!-- This is the tree node template for leaf nodes -->\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n      <li class=\"mat-tree-node\" [ngClass]=\"getClassNode(node)\"\r\n          (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" *ngIf=\"!node.isEditable\" class=\"tree-node\">\r\n        <!-- use a disabled button to provide padding for tree leaf -->\r\n        <button mat-icon-button disabled></button>\r\n        {{node.name}}\r\n      </li>\r\n      <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n        <button mat-icon-button (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\r\n                        (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\"\r\n                               (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n      </li>\r\n    </mat-tree-node>\r\n    <!-- This is the tree node template for expandable nodes -->\r\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\r\n      <li>\r\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\r\n\r\n          <button mat-icon-button matTreeNodeToggle\r\n                  [attr.aria-label]=\"'toggle ' + node.name\">\r\n            <mat-icon class=\"mat-icon-rtl-mirror\">\r\n              {{treeControl.isExpanded(node) ? 'remove' : 'add'}}\r\n            </mat-icon>\r\n          </button>\r\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\"\r\n             [ngClass]=\"getClassNode(node)\">{{node.name}}</p>\r\n        </div>\r\n        <div class=\"tree-options\">\r\n      <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n        <button mat-icon-button (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\r\n                        (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\"\r\n                               (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n      </li>\r\n</div>\r\n<ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\r\n  <ng-container matTreeNodeOutlet></ng-container>\r\n</ul>\r\n</li>\r\n</mat-nested-tree-node>\r\n</mat-tree>\r\n</div>\r\n",
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
    showOptionsNode: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBNEIsTUFBTSxtQkFBbUIsQ0FBQztBQUUvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSzdDLHVDQUVDOzs7SUFEQyxpQ0FBYTs7QUFTZixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBSTlCLFlBQW9CLGlCQUFvQyxFQUNwQyxNQUFjLEVBQ2QsVUFBc0I7UUFGdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWlCbEMsb0JBQWUsR0FHbEIsSUFBSSxHQUFHLEVBR1IsQ0FBQzs7Ozs7UUFXSSxvQkFBZSxHQUFZLElBQUksQ0FBQzs7OztRQUsvQixZQUFPLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBSzdFLFdBQU0sR0FBdUIsSUFB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O1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQjtTQUNGO0lBR0gsQ0FBQzs7O1lBbGtCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDIwSkFBMkM7O2FBRzVDOzs7O1lBbEJRLGlCQUFpQjtZQUNqQixNQUFNO1lBTG9FLFVBQVU7OzttQkE2QzFGLFNBQVMsU0FBQyxNQUFNO21CQVdoQixLQUFLOzhCQU9MLEtBQUs7c0JBS0wsTUFBTTtxQkFLTixNQUFNO29CQU1OLE1BQU07NkJBQ04sTUFBTTs0QkFDTixNQUFNOzJCQUNOLE1BQU07eUJBQ04sTUFBTTs2QkFDTixNQUFNOzZCQUNOLE1BQU07Z0NBQ04sTUFBTTtrQ0FDTixNQUFNO3dCQStMTixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUEzTzFDLGdEQUFtRDs7SUFDbkQsdUNBQXNCOztJQUN0QixtQ0FBcUM7Ozs7O0lBQ3JDLDhDQU1LOzs7OztJQUlMLG1DQUFvQjs7Ozs7O0lBT3BCLDhDQUF5Qzs7Ozs7SUFLekMsc0NBQXVGOzs7OztJQUt2RixxQ0FBZ0U7Ozs7OztJQU1oRSxvQ0FBK0Q7O0lBQy9ELDZDQUE4RTs7SUFDOUUsNENBQWlHOztJQUNqRywyQ0FBNEY7O0lBQzVGLHlDQUEwRjs7SUFDMUYsNkNBQTRHOztJQUM1Ryw2Q0FBNEc7O0lBQzVHLGdEQUErRzs7SUFDL0csa0RBQWlIOztJQUVqSCwwQ0FBK0g7O0lBQy9ILHlDQUFnRjs7SUFHaEYsNENBQThCOztJQUM5QiwwQ0FBeUI7Ozs7O0lBMlN6Qix1Q0FFQzs7Ozs7SUFoWFcsZ0RBQTRDOzs7OztJQUM1QyxxQ0FBc0I7Ozs7O0lBQ3RCLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5lc3RlZFRyZWVDb250cm9sLCBUcmVlQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcclxuaW1wb3J0IHsgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2UsIE1hdFRyZWUsIE1hdE9wdGlvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XHJcbmltcG9ydCB7IFRyZWVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBUcmVlSGVsaXNhQ29ubmVjdCB9IGZyb20gJy4vdHJlZS1oZWxpc2EtY29ubmVjdCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRyZWVIZWxpc2Ege1xyXG4gIHBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtdHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90cmVlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddLFxyXG4gIC8vIGhvc3Q6IHsgJyhkb2N1bWVudDprZXl1cCknOiAnb25LZXlEb3duKCRldmVudCknIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09IFZhcmlhYmxlcyA9PT09PT09PVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVIZWxpc2FTZXJ2aWNlOiBUcmVlSGVsaXNhU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgLy8gY2FyZ2FyIGRhdG9zIHBhc2Fkb3MgcG9yIGVsIEBJbnB1dFxyXG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7XHJcbiAgICAgIGNvbnN0IGRhdGE6IE5vZGUgPSB0aGlzLmRhdGE7XHJcbiAgICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5jaGlsZHJlbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdO1xyXG4gICAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09IFZhcmlhYmxlcyA9PT09PT09PT09PT09XHJcbiAgcHJpdmF0ZSB0cmVlSGVsaXNhQ29ubmVjdDogVHJlZUhlbGlzYUNvbm5lY3Q8Tm9kZT47XHJcbiAgZm9ybUVkaXQ6IEZvcm1Db250cm9sO1xyXG4gIEBWaWV3Q2hpbGQoJ3RyZWUnKSB0cmVlOiBNYXRUcmVlPHt9PjtcclxuICBwcml2YXRlIHNlbGVjdGVkT3B0aW9uczogTWFwPHN0cmluZyB8IG51bWJlciwge1xyXG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgZWRpdE1vZGU6IGJvb2xlYW47XHJcbiAgfT4gPSBuZXcgTWFwPHN0cmluZyB8IG51bWJlciwge1xyXG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgZWRpdE1vZGU6IGJvb2xlYW47XHJcbiAgfT4oKTtcclxuICAvKipcclxuICAgKiBEYXRvcyBkZWwgQXJib2xcclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRhOiBOb2RlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRXN0YWJsZWNlIHNpIHNlIG1vc3RyYXJhbiBsYXMgb3BjaW9uZXMgZGVcclxuICAgKiBDcmVhY2lvbiwgZWRpY2nDs24geSBlbGltaW5hY2lvbiBkZWwgbm9kb1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dPcHRpb25zTm9kZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgZWwgaWQgZGVsIG5vZG8gcmVtb3ZpZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSB1biBub2RvIGVkaXRhZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgZWRpdGVkOiBFdmVudEVtaXR0ZXI8Tm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW4gbm9kbyBzaW4gaWQgZGVsIG5vZG8gLCBwZXJvIHNpIGNvbiBlbCBwYXJlbnRcclxuICAgKiBwYXJhIGNvbm9jZXIgYSBjdWFsIGZ1ZSBhw7FhZGlkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBhZGRlZDogRXZlbnRFbWl0dGVyPE5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOb2RlPigpO1xyXG4gIEBPdXRwdXQoKSBjb2xsYXBzZVBhcmVudDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByYW5nZVNjcm9sbGVkOiBFdmVudEVtaXR0ZXI8UmVxdWVzdFRyZWVIZWxpc2E+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VHJlZUhlbGlzYT4oKTtcclxuICBAT3V0cHV0KCkgbm9kZVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBkb2JsZUNsaWNrOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBrZXlwcmVzc0RlbGV0ZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSBrZXlwcmVzc0luc2VydDogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSBjaGVja2VkT3B0aW9uTm9kZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSB1bmNoZWNrZWRPcHRpb25Ob2RlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XHJcblxyXG4gIHRyZWVDb250cm9sOiBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPiA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPigobm9kZTogTm9kZSk6IE5vZGVbXSB8IE9ic2VydmFibGU8Tm9kZVtdPiA9PiBub2RlLmNoaWxkcmVuKTtcclxuICBkYXRhU291cmNlOiBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxOb2RlPiA9IG5ldyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxOb2RlPigpO1xyXG5cclxuXHJcbiAgaXNTaW5nbGVDbGljazogYm9vbGVhbiA9IHRydWU7XHJcbiAgY3VycmVudE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBPYnRpZW5lIGxhIGRlc2NyaXBjaW9uIGNvbXBsZXRhIGRlbCBub2RvXHJcbiAgICogQGV4YW1wbGUgTm9kbyBwYWRyZSxub2RvIGhpam8sbm9kbyBuaWV0b1xyXG4gICAqIEBwYXJhbSBub2RlIERlYmUgdGVuZXIgdG9kb3MgbG9zIHBhcmVudCBsbGVub3MgaGFjaWEgYXJyaWJhXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXREZXNjcmlwdGlvbihub2RlOiBOb2RlKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW25vZGUubmFtZV07XHJcbiAgICBsZXQgY29uY2F0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpZiAobm9kZS5wYXJlbnQpIHtcclxuICAgICAgcmVzdWx0LnB1c2godGhpcy5nZXREZXNjcmlwdGlvbihub2RlLnBhcmVudCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gbm9kZS5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdCA9IHJlc3VsdC5yZXZlcnNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50OiBzdHJpbmcgPSByZXN1bHRbaV07XHJcbiAgICAgIGNvbmNhdCA9IGNvbmNhdCArIGVsZW1lbnQgKyAoKGkgPT09IHJlc3VsdC5sZW5ndGggLSAxKSA/ICcnIDogJywnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uY2F0O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHNpIHNlIGNhcmdhbiBkYXRvcyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmRhdGFTb3VyY2VPYnNlcnZhYmxlXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogTm9kZSkgPT4ge1xyXG4gICAgICAgIGlmICghIXJlcyAmJiAhIXJlcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShyZXMuY2hpbGRyZW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdO1xyXG4gICAgICAgICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUsIHNpIGNhbWJpYSBlbCBub2RvIHNlbGVjY2lvbmFkbyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVTZWxlY3RlZFxyXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IHN0cmluZyB8IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmICghIXRoaXMuZGF0YSAmJiAhIXRoaXMuZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgcmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLnJlZnJlc2hUcmVlT2JzZXJ2YWJsZVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IHZvaWQpID0+IHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UucmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbk9ic2VydmFibGVcclxuICAgICAgLnN1YnNjcmliZSgocmVzOiB2b2lkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlRXhwYW5kLnN1YnNjcmliZSgocmVzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgIHRoaXMudHJlZS50cmVlQ29udHJvbC5leHBhbmRBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUNvbGxhcHNlLnN1YnNjcmliZSgocmVzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmIChyZXMgIT09IG51bGwpIHtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuY29sbGFwc2VBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGVPYnNlcnZhYmxlXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogTm9kZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmQocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuY29sbGFwc2VPbmVOb2RlT2JzZXJ2YWJsZVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IE5vZGUpID0+IHtcclxuICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMudHJlZUNvbnRyb2wuY29sbGFwc2UocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09IEV2ZW50cyA9PT09PT09PT09PVxyXG4gIG9uUmVkaXJlY3Qobm9kZTogTm9kZSk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaXNTaW5nbGVDbGljaykge1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCBub2RlLmlkKTtcclxuXHJcbiAgICAgICAgLy8gaWYoISFub2RlICYmICFub2RlLmNoaWxkcmVuKXtcclxuICAgICAgICBpZiAoISFub2RlKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVTZWxlY3RlZC5lbWl0KG5vZGUuaWQpO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAzNTApO1xyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBpZiAoKGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgZWxlbWVudC5zY3JvbGxUb3ApID49IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FZGl0KG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIG5vZGUuaXNFZGl0YWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkFkZChub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICAvLyBzaSBubyB0aWVuZSBoaWpvcyBpbnN0YW5jaWFyIGVsIGFycmF5XHJcbiAgICBpZiAoIW5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgbm9kZS5jaGlsZHJlbi5wdXNoKFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgcGFyZW50OiBub2RlLFxyXG4gICAgICAgIGlzRWRpdGFibGU6IHRydWVcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlKG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIC8vIFJlbXVldmUgZWwgbm9kbyB1dGlsaXphbmRvIGxhIGxpYnJlcmlhIGRlIGxvZGFzaFxyXG4gICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xyXG5cclxuICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgIHRoaXMucmVtb3ZlZC5lbWl0KG5vZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0ZWQobm9kZTogTm9kZSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgIG5vZGUubmFtZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmIChub2RlLmlkID09IG51bGwgJiYgbm9kZS5uYW1lID09PSAnJykge1xyXG4gICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgIH0gZWxzZSBpZiAobm9kZS5pZCAmJiBub2RlLmlkICE9IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5lZGl0ZWQuZW1pdChub2RlKTtcclxuICAgICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICB0aGlzLmFkZGVkLmVtaXQobm9kZSk7XHJcbiAgICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwobm9kZTogTm9kZSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgLy8gU2kgbm8gdGllbmUgaWQgcG9yIHNlciB1biBudWV2byBpdGVtLCBsbyBlbGltaW5hXHJcbiAgICBpZiAobm9kZS5pZCA9PSBudWxsKSB7XHJcbiAgICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25EYmxDbGljayhub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzU2luZ2xlQ2xpY2sgPSBmYWxzZTtcclxuICAgIHRoaXMuZG9ibGVDbGljay5lbWl0KG5vZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSAnRGVsZXRlJzpcclxuICAgICAgICB0aGlzLmtleXByZXNzRGVsZXRlLmVtaXQoKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLmlkKSA/IHRoaXMuY3VycmVudE5vZGUuaWQgOiBudWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnSW5zZXJ0JzpcclxuICAgICAgICB0aGlzLmtleXByZXNzSW5zZXJ0LmVtaXQoKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLmlkKSA/IHRoaXMuY3VycmVudE5vZGUuaWQgOiBudWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcclxuICAgICAgICB0aGlzLm1vdmVEb3duSW50b1RyZWUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgdGhpcy5tb3ZlVXBJbnRvVHJlZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT09IEV2ZW50cyA9PT09PT09PVxyXG5cclxuXHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09PT0gTWV0b2RvcyA9PT09PT09PT09PT09XHJcblxyXG4gIHByaXZhdGUgbW92ZVVwSW50b1RyZWUoKTogbnVtYmVyIHtcclxuICAgIGlmICghIXRoaXMuZGF0YSkge1xyXG4gICAgICAvLyBzaSBhdW4gbm8gaGF5IG5pbmd1biBub2RlIHNlbGVjY2lvbmFkbyBzZWxlY2Npb25hIGVsIHByaW1lcm9cclxuICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuZGF0YS5jaGlsZHJlblswXS5pZCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuZGF0YS5jaGlsZHJlblswXTtcclxuICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLnBhcmVudCAmJiB0aGlzLmN1cnJlbnROb2RlLmlkICE9IG51bGwpIHtcclxuICAgICAgICAgIC8vIG9idGllbmUgZWwgaW5kaWNlIGRlbCBub2RvIHNlbGVjY2lvbmFkbyBhY3R1YWxtZW50ZVxyXG4gICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZSk7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUucGFyZW50LmlkID09IG51bGwgJiYgaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICB9IGVsc2Ugey8vIHNpIHRpZW5lIG5vZG9zIGFsIG1pc21vIG5pdmVsIHNhbHRhIGFsIG5vZG8gYW50ZXJpb3JcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIHNpIG5vIHRpZW5lIG5vZG9zIGFsIG1pc21vIG5pdmVsIHNhbHRhIGFsIG5vZG8gcGFkcmVcclxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW5baW5kZXggLSAxXTtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlRG93bkludG9UcmVlKCk6IHZvaWQge1xyXG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmRhdGEuY2hpbGRyZW5bMF0uaWQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmRhdGEuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZSkge1xyXG4gICAgICAgICAgLy8gb2J0aWVuZSBlbCBpbmRpY2UgZGVsIG5vZG8gc2VsZWNjaW9uYWRvIGFjdHVhbG1lbnRlXHJcbiAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiAhIXRoaXMuY3VycmVudE5vZGUucGFyZW50KSA/XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudE5vZGUpIDpcclxuICAgICAgICAgIG51bGw7XHJcblxyXG4gICAgICAgICAgLy8gc2kgdGllbmUgY2hpbGRyZW5zIHBhc2EgYWwgcHJpbWVyIGNoaWxkcmVuXHJcbiAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGluZGV4ID09PSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudCAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbiAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleE9mUGFyZW50OiBudW1iZXIgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnROb2RlLnBhcmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSAodGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuW2luZGV4T2ZQYXJlbnQgKyAxXSA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgOiB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW5baW5kZXhPZlBhcmVudCArIDFdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgeyAvLyBzaSBubyB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBzaWd1aWVudGUgaGFjaWEgYWJham9cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWNhIHNpIGVsIG5vZG8gdGllbmUgaGlqb3NcclxuICAgKi9cclxuICBoYXNDaGlsZCA9ICh0OiBudW1iZXIsIG5vZGU6IE5vZGUpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdHVhbGl6YSBlbCBhcmJvbCBib3JyYW5kbyB0b2RhIGxhIGRhdGEgLCBzb2xvIGN1YW5kbyBubyBzZSB1dGlsaXphIHBhZ2luYWNpb25cclxuICAgKi9cclxuICBwcml2YXRlIHJlZnJlc2hUcmVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgIGNvbnN0IGRhdGFzb3VyY2VEYXRhOiBOb2RlW10gPSB0aGlzLmRhdGFTb3VyY2UuZGF0YTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YXNvdXJjZURhdGE7XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IGRhdGFzb3VyY2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0dWFsaXphIGVsIGFyYm9sIGN1YW5kbyBzZSB1dGlsaXphIGxhIHBhZ2luYWNpb24gKEN1YW5kbyBubyAsIHV0aWxpY2UgZWwgbWV0b2RvIHJlZnJlc2hUcmVlKCkpXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YXNvdXJjZURhdGE6IE5vZGVbXSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhc291cmNlRGF0YTtcclxuICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gZGF0YXNvdXJjZURhdGE7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBwcml2YXRlIGdvTmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNMYXN0UGFnZSAmJiAhdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQpIHtcclxuICAgICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJhbmdlU2Nyb2xsZWQuZW1pdCh7XHJcbiAgICAgICAgcGFnZTogdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5uZXh0UGFnZSgpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWNlaXZlUGFnZShkYXRhOiBOb2RlW10pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kYXRhKSB7IHRoaXMuZGF0YSA9IHsgaWQ6IG51bGwsIG5hbWU6ICdyb290JywgaXNTZWxlY3RlZDogZmFsc2UgfTsgfVxyXG4gICAgaWYgKCF0aGlzLmRhdGEuY2hpbGRyZW4pIHsgdGhpcy5kYXRhLmNoaWxkcmVuID0gbmV3IEFycmF5PE5vZGU+KCk7IHRoaXMudHJlZUhlbGlzYUNvbm5lY3QgPSBuZXcgVHJlZUhlbGlzYUNvbm5lY3Q8Tm9kZT4oKTsgfVxyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gdGhpcy5kYXRhLmNoaWxkcmVuLmNvbmNhdChkYXRhKTtcclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgIHRoaXMuZmlsbFBhcmVudChub2RlLCB0aGlzLmRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbiA9IHRoaXMucmVvcmRlckJ5T3JkZXJJbmRleCh0aGlzLmRhdGEuY2hpbGRyZW4pO1xyXG5cclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy5kYXRhLmNoaWxkcmVuO1xyXG4gICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSB0aGlzLmRhdGEuY2hpbGRyZW47XHJcbiAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgPSBkYXRhLmxlbmd0aCA9PT0gMDtcclxuICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMbGVuYW4gZWwgY2FtcG8gcGFyZW50IGRlIHRvZG9zIGxvcyBub2RvcyBoaWpvc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgZmlsbFBhcmVudChub2RlOiBOb2RlLCBwYXJlbnQ6IE5vZGUpOiB2b2lkIHtcclxuXHJcbiAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcclxuICAgIGlmIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGl0ZW06IE5vZGUpID0+IHtcclxuICAgICAgICB0aGlzLmZpbGxQYXJlbnQoaXRlbSwgbm9kZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbG9jYSBjb21vIHRydWUgZGVsIGlzU2VsZWN0ZWQgZGVsIG5vZG8gcXVlIGNvbmN1ZXJkZSBjb24gZWwgaWRcclxuICAgKi9cclxuICBwcml2YXRlIHNlbGVjdE5vZGUobm9kZTogTm9kZSwgaWQ6IG51bWJlciB8IHN0cmluZyk6IE5vZGUge1xyXG5cclxuICAgIHRoaXMudXBTZWxlY3ROb2RlKG5vZGUpO1xyXG5cclxuICAgIGlmIChub2RlID09PSB1bmRlZmluZWQgfHwgbm9kZS5pZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUuaWQgPT09IGlkKSB7XHJcbiAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZXhwYW5kQWxsUGFyZW50cyhub2RlKTtcclxuICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9IGVsc2UgaWYgKG5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICBsZXQgaTogbnVtYmVyO1xyXG4gICAgICBsZXQgcmVzdWx0OiBOb2RlID0gbnVsbDtcclxuICAgICAgZm9yIChpID0gMDsgcmVzdWx0ID09IG51bGwgJiYgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICByZXN1bHQgPSB0aGlzLnNlbGVjdE5vZGUobm9kZS5jaGlsZHJlbltpXSwgaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwYW5kQWxsUGFyZW50cyhub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAoISFub2RlICYmICEhbm9kZS5wYXJlbnQpIHtcclxuICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKG5vZGUucGFyZW50KTtcclxuICAgICAgdGhpcy5leHBhbmRBbGxQYXJlbnRzKG5vZGUucGFyZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVsaW1pbmEgZWwgaXNTZWxlY3RlZCBkZSB0b2RvcyBsb3Mgbm9kb3NcclxuICAgKi9cclxuICBwcml2YXRlIHVwU2VsZWN0Tm9kZShub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAoISFub2RlICYmIG5vZGUuaXNTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoISFub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZHJlbk5vZGUgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgdGhpcy51cFNlbGVjdE5vZGUoY2hpbGRyZW5Ob2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsYXNzTm9kZShub2RlOiBOb2RlKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgY2xhc3NOb2RlOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKG5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICBjbGFzc05vZGUucHVzaCgnaXNTZWxlY3RlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUuY2xhc3NOb2RlKSB7XHJcbiAgICAgIGNsYXNzTm9kZS5wdXNoKG5vZGUuY2xhc3NOb2RlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc05vZGU7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRNb2RlKG5vZGU6IE5vZGUsIGVkaXRNb2RlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucyhub2RlKS5lZGl0TW9kZSA9IGVkaXRNb2RlO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RPcHRpb24oZXZlbnQ6IE1hdE9wdGlvblNlbGVjdGlvbkNoYW5nZSwgbm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgbm9kZS5pc0NoZWNrZWRPcHRpb24gPSBldmVudC5zb3VyY2Uuc2VsZWN0ZWQ7XHJcbiAgICBpZiAobm9kZS5pc0NoZWNrZWRPcHRpb24pIHtcclxuICAgICAgdGhpcy5jaGVja2VkT3B0aW9uTm9kZS5lbWl0KG5vZGUuaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51bmNoZWNrZWRPcHRpb25Ob2RlLmVtaXQobm9kZS5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZE9wdGlvbnMobm9kZTogTm9kZSk6IHtcclxuICAgIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcclxuICAgIGVkaXRNb2RlOiBib29sZWFuO1xyXG59IHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5oYXMobm9kZS5pZCkpIHtcclxuICAgICAgdGhpcy5yZWxvYWRTZWxlY3RlZE9wdGlvbnMobm9kZSwgdGhpcy5zZWxlY3RlZE9wdGlvbnMuZ2V0KG5vZGUuaWQpLmVkaXRNb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5nZXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbG9hZFNlbGVjdGVkT3B0aW9ucyhub2RlOiBOb2RlLCBlZGl0TW9kZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgYXJyYXk6IEFycmF5PHN0cmluZyB8IG51bWJlciB8IG51bGw+ID0gbmV3IEFycmF5PHN0cmluZyB8IG51bWJlciB8IG51bGw+KCk7XHJcbiAgICBub2RlLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBOb2RlKSA9PiB7XHJcbiAgICAgIGlmIChvcHRpb24uaXNDaGVja2VkT3B0aW9uKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChvcHRpb24uaWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9iajoge1xyXG4gICAgICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgICAgIGVkaXRNb2RlOiBib29sZWFuO1xyXG4gICAgfSA9IHsgZm9ybUNvbnRyb2w6IG5ldyBGb3JtQ29udHJvbChhcnJheSksIGVkaXRNb2RlIH07XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5zZXQobm9kZS5pZCwgb2JqKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgZWwgcHJpbWVyIE5vZGUgcXVlIGVuY3VlbnRyZSBzZWd1biBlbCBpZCBlbnZpYWRvIG8gbnVsbCBzaSBubyBoYXkgbmluZ3Vub1xyXG4gICAqIEBwYXJhbSBpZCAgbnVtYmVyIHwgc3RyaW5nXHJcbiAgICogQHJldHVybnMgTm9kZSBvIG51bGwgc2kgbm8gaGF5IHVuIG5vZG8gY29uIGVzZSBpZFxyXG4gICAqL1xyXG4gIGdldE5vZGVCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBOb2RlIHtcclxuICAgIGNvbnN0IHF1ZXVlOiBOb2RlW10gPSBbLi4udGhpcy5kYXRhU291cmNlLmRhdGFdO1xyXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgY3VycjogTm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgIGlmIChjdXJyLmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghIWN1cnIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgIHF1ZXVlLnB1c2goLi4uY3Vyci5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJlb3JkZXJCeU9yZGVySW5kZXgobm9kZTogTm9kZVtdKTogTm9kZVtdIHtcclxuICAgIGlmICghIW5vZGUgJiYgbm9kZS5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIG5vZGUgPSBfLm9yZGVyQnkobm9kZSwgKHg6IE5vZGUpID0+IHgub3JkZXJJbmRleCwgWydhc2MnXSk7XHJcbiAgICAgICAgbm9kZS5mb3JFYWNoKChlbGVtZW50OiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoISFlbGVtZW50LmNoaWxkcmVuICYmIGVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuID0gdGhpcy5yZW9yZGVyQnlPcmRlckluZGV4KGVsZW1lbnQuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09IE1ldG9kb3MgPT09PT09PT09PT09XHJcbn1cclxuIl19