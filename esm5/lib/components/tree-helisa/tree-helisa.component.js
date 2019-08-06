/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
var TreeHelisaComponent = /** @class */ (function () {
    //#endregion ====== Variables ========
    function TreeHelisaComponent(treeHelisaService, router, elementRef) {
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
        function (node) { return node.children; }));
        this.dataSource = new MatTreeNestedDataSource();
        this.isSingleClick = true;
        this.currentNode = null;
        /**
         * Verifica si el nodo tiene hijos
         */
        this.hasChild = (/**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */
        function (_, node) { return !!node.children && node.children.length > 0; });
        //cargar datos pasados por el @Input
        if (!!this.data) {
            /** @type {?} */
            var data = this.data;
            this.data = null;
            this.receivePage(data.children);
        }
        else {
            this.dataSource.data = [];
            this.treeControl.dataNodes = [];
        }
    }
    /**
     * @return {?}
     */
    TreeHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // si se cargan datos por medio del servicio
        this.treeHelisaService.dataSourceObservable
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!!res && !!res.children) {
                _this.receivePage(res.children);
            }
            else {
                _this.dataSource.data = [];
                _this.treeControl.dataNodes = [];
            }
        }));
        // Observable, si cambia el nodo seleccionado por medio del servicio
        this.treeHelisaService.nodeSelected
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!!_this.data && !!_this.data.children)
                _this.selectNode(_this.data, res);
        }));
        this.treeHelisaService.refreshTreeObservable
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.refreshTree();
        }));
        this.treeHelisaService.refreshTreeWithPaginationObservable
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.refreshTreeWithPagination();
        }));
    };
    /**
     * @return {?}
     */
    TreeHelisaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.treeHelisaService.nodeExpand.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res != null) {
                if (res) {
                    _this.tree.treeControl.expandAll();
                }
            }
        }));
        this.treeHelisaService.nodeCollapse.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res != null) {
                if (res) {
                    _this.tree.treeControl.collapseAll();
                }
            }
        }));
        this.treeHelisaService.expandOneNodeObservable
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res != undefined) {
                _this.treeControl.expand(res);
            }
        }));
        this.treeHelisaService.collapseOneNodeObservable
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res != undefined) {
                _this.treeControl.collapse(res);
            }
        }));
    };
    //#region  ====== Events ===========
    //#region  ====== Events ===========
    /**
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.onRedirect = 
    //#region  ====== Events ===========
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        this.isSingleClick = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.isSingleClick) {
                _this.selectNode(_this.data, node.id);
                // if(!!node && !node.children){
                if (!!node) {
                    _this.nodeSelected.emit(node.id);
                    _this.currentNode = node;
                }
            }
        }), 350);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TreeHelisaComponent.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var element = event.target;
        if ((element.offsetHeight + element.scrollTop) >= element.scrollHeight) {
            this.goNextPage();
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.onEdit = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        node.isEditable = true;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.onAdd = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
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
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.onDelete = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        // Remueve el nodo utilizando la libreria de lodash   
        _.remove(node.parent.children, node);
        this.refreshTree();
        this.removed.emit(node.id);
    };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    TreeHelisaComponent.prototype.onEdited = /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) {
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
    };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    TreeHelisaComponent.prototype.onCancel = /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) {
        // Si no tiene id por ser un nuevo item, lo elimina
        if (node.id == null) {
            _.remove(node.parent.children, node);
            this.refreshTree();
        }
        node.isEditable = false;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.onDblClick = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.isSingleClick = false;
        this.dobleClick.emit(node.id);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TreeHelisaComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    //#endregion ======= Events ========
    //#region  ======== Metodos =============
    //#endregion ======= Events ========
    //#region  ======== Metodos =============
    /**
     * @private
     * @return {?}
     */
    TreeHelisaComponent.prototype.moveUpIntoTree = 
    //#endregion ======= Events ========
    //#region  ======== Metodos =============
    /**
     * @private
     * @return {?}
     */
    function () {
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
                    var index = this.currentNode.parent.children.indexOf(this.currentNode);
                    if (this.currentNode.parent.id == null && index == 0) {
                        return 0;
                    }
                    else { // si tiene nodos al mismo nivel salta al nodo anterior
                        if (index != undefined && index == 0) {
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
    };
    /**
     * @private
     * @return {?}
     */
    TreeHelisaComponent.prototype.moveDownIntoTree = /**
     * @private
     * @return {?}
     */
    function () {
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
                    var index = (!!this.currentNode && !!this.currentNode.parent) ? this.currentNode.parent.children.indexOf(this.currentNode) : null;
                    // si tiene childrens pasa al primer children
                    if (!!this.currentNode.children &&
                        this.currentNode.children.length > 0) {
                        this.currentNode = this.currentNode.children[0];
                        this.selectNode(this.data, this.currentNode.id);
                        if (!!this.currentNode.children && this.currentNode.children.length > 0) {
                            this.treeHelisaService.expandOneNode(this.currentNode);
                        }
                    }
                    // Si es el ultimo nodo del array pasa al nodo hermano del padre (tio) hacia abajo
                    else if (index != undefined &&
                        index == this.currentNode.parent.children.length - 1 &&
                        this.currentNode.parent.parent != null &&
                        this.currentNode.parent.parent.children != null &&
                        this.currentNode.parent.parent.children.length > 0) {
                        /** @type {?} */
                        var indexOfParent = this.currentNode.parent.parent.children.indexOf(this.currentNode.parent);
                        this.currentNode = (this.currentNode.parent.parent.children[indexOfParent + 1] == undefined) ? this.currentNode : this.currentNode.parent.parent.children[indexOfParent + 1];
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
    };
    /**
     * Obtiene la descripcion completa del nodo
     * @example Nodo padre,nodo hijo,nodo nieto
     * @param node Debe tener todos los parent llenos hacia arriba
     */
    /**
     * Obtiene la descripcion completa del nodo
     * \@example Nodo padre,nodo hijo,nodo nieto
     * @param {?} node Debe tener todos los parent llenos hacia arriba
     * @return {?}
     */
    TreeHelisaComponent.getDescription = /**
     * Obtiene la descripcion completa del nodo
     * \@example Nodo padre,nodo hijo,nodo nieto
     * @param {?} node Debe tener todos los parent llenos hacia arriba
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var result = [node.name];
        /** @type {?} */
        var concat = "";
        if (node.parent) {
            result.push(this.getDescription(node.parent));
        }
        if (result.length == 1)
            return node.name;
        result = result.reverse();
        for (var i = 0; i < result.length; i++) {
            /** @type {?} */
            var element = result[i];
            concat = concat + element + ((i == result.length - 1) ? "" : ",");
        }
        return concat;
    };
    /**
     * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
     */
    /**
     * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
     * @private
     * @return {?}
     */
    TreeHelisaComponent.prototype.refreshTree = /**
     * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
     * @private
     * @return {?}
     */
    function () {
        this.data = null;
        /** @type {?} */
        var _data = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = _data;
        this.treeControl.dataNodes = _data;
    };
    /**
     * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
     */
    /**
     * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
     * @private
     * @return {?}
     */
    TreeHelisaComponent.prototype.refreshTreeWithPagination = /**
     * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _data = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = _data;
        this.treeControl.dataNodes = _data;
    };
    /**
     * @private
     * @return {?}
     */
    TreeHelisaComponent.prototype.goNextPage = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.treeHelisaConnect.isLastPage && !this.treeHelisaConnect.isUsed) {
            this.treeHelisaConnect.isUsed = true;
            this.rangeScrolled.emit({
                page: this.treeHelisaConnect.nextPage()
            });
        }
    };
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    TreeHelisaComponent.prototype.receivePage = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
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
        function (node) {
            _this.fillParent(node, _this.data);
        }));
        this.dataSource.data = this.data.children;
        this.treeControl.dataNodes = this.data.children;
        this.treeHelisaConnect.isLastPage = data.length === 0;
        this.treeHelisaConnect.isUsed = false;
    };
    /**
     * Llenan el campo parent de todos los nodos hijos
     * @param node
     * @param parent
     */
    /**
     * Llenan el campo parent de todos los nodos hijos
     * @private
     * @param {?} node
     * @param {?} parent
     * @return {?}
     */
    TreeHelisaComponent.prototype.fillParent = /**
     * Llenan el campo parent de todos los nodos hijos
     * @private
     * @param {?} node
     * @param {?} parent
     * @return {?}
     */
    function (node, parent) {
        var _this = this;
        node.parent = parent;
        if (node.children && node.children.length > 0) {
            node.children.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.fillParent(item, node);
            }));
        }
    };
    /**
     * coloca como true del isSelected del nodo que concuerde con el id
     * @param node
     * @param id
     */
    /**
     * coloca como true del isSelected del nodo que concuerde con el id
     * @private
     * @param {?} node
     * @param {?} id
     * @return {?}
     */
    TreeHelisaComponent.prototype.selectNode = /**
     * coloca como true del isSelected del nodo que concuerde con el id
     * @private
     * @param {?} node
     * @param {?} id
     * @return {?}
     */
    function (node, id) {
        this.upSelectNode(node);
        if (node == undefined || node.id == undefined) {
            return null;
        }
        if (node.id == id) {
            node.isSelected = true;
            this.expandAllParents(node);
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
    };
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.expandAllParents = /**
     * @private
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!!node && !!node.parent) {
            this.treeHelisaService.expandOneNode(node.parent);
            this.expandAllParents(node.parent);
        }
    };
    /**
     * Elimina el isSelected de todos los nodos
     * @param node
     */
    /**
     * Elimina el isSelected de todos los nodos
     * @private
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.upSelectNode = /**
     * Elimina el isSelected de todos los nodos
     * @private
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!!node && node.isSelected != undefined) {
            node.isSelected = false;
            if (!!node.children)
                for (var i = 0; i < node.children.length; i++) {
                    this.upSelectNode(node.children[i]);
                }
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.getClassNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var classNode = [];
        if (node.isSelected) {
            classNode.push("isSelected");
        }
        if (node.classNode) {
            classNode.push(node.classNode);
        }
        return classNode;
    };
    /**
     * @param {?} node
     * @param {?} editMode
     * @return {?}
     */
    TreeHelisaComponent.prototype.onEditMode = /**
     * @param {?} node
     * @param {?} editMode
     * @return {?}
     */
    function (node, editMode) {
        this.getSelectedOptions(node).editMode = editMode;
    };
    /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.onSelectOption = /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    function (event, node) {
        node.isCheckedOption = event.source.selected;
        if (node.isCheckedOption)
            this.checkedOptionNode.emit(node.id);
        else
            this.uncheckedOptionNode.emit(node.id);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.getSelectedOptions = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.selectedOptions.has(node.id))
            this.reloadSelectedOptions(node, this.selectedOptions.get(node.id).editMode);
        else
            this.reloadSelectedOptions(node, false);
        return this.selectedOptions.get(node.id);
    };
    /**
     * @private
     * @param {?} node
     * @param {?} editMode
     * @return {?}
     */
    TreeHelisaComponent.prototype.reloadSelectedOptions = /**
     * @private
     * @param {?} node
     * @param {?} editMode
     * @return {?}
     */
    function (node, editMode) {
        /** @type {?} */
        var array = new Array();
        node.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (option.isCheckedOption)
                array.push(option.id);
        }));
        /** @type {?} */
        var obj = { formControl: new FormControl(array), editMode: editMode };
        this.selectedOptions.set(node.id, obj);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TreeHelisaComponent.prototype.getNodeById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var queue = tslib_1.__spread(this.dataSource.data);
        while (queue.length > 0) {
            /** @type {?} */
            var curr = queue.shift();
            if (curr.id === id) {
                return curr;
            }
            else {
                if (!!curr.children)
                    queue.push.apply(queue, tslib_1.__spread(curr.children));
            }
        }
        return null;
    };
    TreeHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-tree',
                    template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\r\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n    <!-- This is the tree node template for leaf nodes -->\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n      <li class=\"mat-tree-node\" [ngClass]=\"getClassNode(node)\"\r\n          (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" *ngIf=\"!node.isEditable\" class=\"tree-node\">\r\n        <!-- use a disabled button to provide padding for tree leaf -->\r\n        <button mat-icon-button disabled></button>\r\n        {{node.name}}\r\n      </li>\r\n      <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n        <button mat-icon-button (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\r\n                        (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\"\r\n                               (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n      </li>\r\n    </mat-tree-node>\r\n    <!-- This is the tree node template for expandable nodes -->\r\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\r\n      <li>\r\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\r\n\r\n          <button mat-icon-button matTreeNodeToggle\r\n                  [attr.aria-label]=\"'toggle ' + node.name\">\r\n            <mat-icon class=\"mat-icon-rtl-mirror\">\r\n              {{treeControl.isExpanded(node) ? 'remove' : 'add'}}\r\n            </mat-icon>\r\n          </button>\r\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\"\r\n             [ngClass]=\"getClassNode(node)\">{{node.name}}</p>\r\n        </div>\r\n        <div class=\"tree-options\">\r\n      <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n        <button mat-icon-button (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\r\n                        (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\"\r\n                               (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n      </li>\r\n</div>\r\n<ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\r\n  <ng-container matTreeNodeOutlet></ng-container>\r\n</ul>\r\n</li>\r\n</mat-nested-tree-node>\r\n</mat-tree>\r\n</div>\r\n",
                    host: {
                        '(document:keyup)': 'onKeyDown($event)'
                    },
                    styles: [".example-tree-invisible{display:none}.example-tree li,.example-tree ul{margin-top:0;margin-bottom:0;list-style-type:none}.isSelected{background:red}.tree-options{display:inline}.container-tree{overflow:scroll;height:350px;width:100%}.tree-node{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.tree-node-text{display:inline;margin-bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    TreeHelisaComponent.ctorParameters = function () { return [
        { type: TreeHelisaService },
        { type: Router },
        { type: ElementRef }
    ]; };
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
        uncheckedOptionNode: [{ type: Output }]
    };
    return TreeHelisaComponent;
}());
export { TreeHelisaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFJN0MsdUNBRUM7OztJQURDLGlDQUFhOztBQUdmO0lBMkRFLHNDQUFzQztJQUV0Qyw2QkFBb0IsaUJBQW1DLEVBQzdDLE1BQWEsRUFDYixVQUFxQjtRQUZYLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDN0MsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLGVBQVUsR0FBVixVQUFVLENBQVc7UUFqRHZCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQVksQ0FBQzs7Ozs7UUFXckMsb0JBQWUsR0FBVyxJQUFJLENBQUM7Ozs7UUFNOUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBSzlDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOzs7OztR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Q04sTUFBTTtpQ0FDTixNQUFNO2lDQUNOLE1BQU07b0NBQ04sTUFBTTtzQ0FDTixNQUFNOztJQTBlVCwwQkFBQztDQUFBLEFBNWhCRCxJQTRoQkM7U0FwaEJZLG1CQUFtQjs7Ozs7O0lBRzlCLGdEQUFtRDs7SUFDbkQsdUNBQXFCOztJQUNyQixtQ0FBcUM7Ozs7O0lBQ3JDLDhDQUE4Qzs7Ozs7SUFJOUMsbUNBQW1COzs7Ozs7SUFPbkIsOENBQXdDOzs7OztJQU14QyxzQ0FBd0Q7Ozs7O0lBS3hELHFDQUE0Qzs7Ozs7O0lBTTVDLG9DQUEyQzs7SUFDM0MsNkNBQXVEOztJQUN2RCw0Q0FBZ0U7O0lBQ2hFLDJDQUE2RDs7SUFDN0QseUNBQTJEOztJQUMzRCw2Q0FBc0U7O0lBQ3RFLDZDQUFzRTs7SUFDdEUsZ0RBQXlFOztJQUN6RSxrREFBMkU7O0lBRTNFLDBDQUFpRTs7SUFDakUseUNBQWlEOztJQUdqRCw0Q0FBOEI7O0lBQzlCLDBDQUF5Qjs7Ozs7SUE4UnpCLHVDQUFrRjs7Ozs7SUExUnRFLGdEQUEyQzs7Ozs7SUFDckQscUNBQXFCOzs7OztJQUNyQix5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmVzdGVkVHJlZUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XHJcbmltcG9ydCB7IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlLCBNYXRUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcclxuaW1wb3J0IHsgVHJlZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL3RyZWUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFRyZWVIZWxpc2FDb25uZWN0IH0gZnJvbSAnLi90cmVlLWhlbGlzYS1jb25uZWN0JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRyZWVIZWxpc2Ege1xyXG4gIHBhZ2U6IG51bWJlcjsgIFxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RyZWUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ10sXHJcbiAgaG9zdDp7XHJcbiAgICAnKGRvY3VtZW50OmtleXVwKSc6ICdvbktleURvd24oJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvLyNyZWdpb24gID09PT09PSBWYXJpYWJsZXMgPT09PT09PT09PT09PVxyXG4gIHByaXZhdGUgdHJlZUhlbGlzYUNvbm5lY3Q6IFRyZWVIZWxpc2FDb25uZWN0PE5vZGU+O1xyXG4gIGZvcm1FZGl0OkZvcm1Db250cm9sO1xyXG4gIEBWaWV3Q2hpbGQoJ3RyZWUnKSB0cmVlOk1hdFRyZWU8YW55PjtcclxuICBwcml2YXRlIHNlbGVjdGVkT3B0aW9ucyA9IG5ldyBNYXA8YW55LCBhbnk+KCk7XHJcbiAgLyoqXHJcbiAgICogRGF0b3MgZGVsIEFyYm9sXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0YTpOb2RlO1xyXG5cclxuICBcclxuICAvKipcclxuICAgKiBFc3RhYmxlY2Ugc2kgc2UgbW9zdHJhcmFuIGxhcyBvcGNpb25lcyBkZSBcclxuICAgKiBDcmVhY2lvbiwgZWRpY2nDs24geSBlbGltaW5hY2lvbiBkZWwgbm9kb1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dPcHRpb25zTm9kZTpib29sZWFuID0gdHJ1ZTsgXHJcbiAgXHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgZWwgaWQgZGVsIG5vZG8gcmVtb3ZpZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIHVuIG5vZG8gZWRpdGFkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW4gbm9kbyBzaW4gaWQgZGVsIG5vZG8gLCBwZXJvIHNpIGNvbiBlbCBwYXJlbnRcclxuICAgKiBwYXJhIGNvbm9jZXIgYSBjdWFsIGZ1ZSBhw7FhZGlkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBhZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcclxuICBAT3V0cHV0KCkgY29sbGFwc2VQYXJlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJhbmdlU2Nyb2xsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlcXVlc3RUcmVlSGVsaXNhPigpO1xyXG4gIEBPdXRwdXQoKSBub2RlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgZG9ibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBrZXlwcmVzc0RlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkga2V5cHJlc3NJbnNlcnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIGNoZWNrZWRPcHRpb25Ob2RlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSB1bmNoZWNrZWRPcHRpb25Ob2RlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIFxyXG4gIHRyZWVDb250cm9sID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPE5vZGU+KG5vZGUgPT4gbm9kZS5jaGlsZHJlbik7XHJcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxOb2RlPigpO1xyXG5cclxuXHJcbiAgaXNTaW5nbGVDbGljazogQm9vbGVhbiA9IHRydWU7ICBcclxuICBjdXJyZW50Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT0gVmFyaWFibGVzID09PT09PT09XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZUhlbGlzYVNlcnZpY2U6VHJlZUhlbGlzYVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6RWxlbWVudFJlZikgeyAgICBcclxuICAgIC8vY2FyZ2FyIGRhdG9zIHBhc2Fkb3MgcG9yIGVsIEBJbnB1dFxyXG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7ICAgICAgXHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICB0aGlzLmRhdGEgPSBudWxsO1xyXG4gICAgICB0aGlzLnJlY2VpdmVQYWdlKGRhdGEuY2hpbGRyZW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXTsgICAgIFxyXG4gICAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IFtdOyBcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIG5nT25Jbml0KCkgeyAgICAgXHJcbiAgICAvLyBzaSBzZSBjYXJnYW4gZGF0b3MgcG9yIG1lZGlvIGRlbCBzZXJ2aWNpb1xyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5kYXRhU291cmNlT2JzZXJ2YWJsZSAgICBcclxuICAgIC5zdWJzY3JpYmUoKHJlcykgPT4geyAgICAgICAgICAgIFxyXG4gICAgICBpZighIXJlcyAmJiAhIXJlcy5jaGlsZHJlbil7ICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLnJlY2VpdmVQYWdlKHJlcy5jaGlsZHJlbilcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IFtdO1xyXG4gICAgICB9ICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSwgc2kgY2FtYmlhIGVsIG5vZG8gc2VsZWNjaW9uYWRvIHBvciBtZWRpbyBkZWwgc2VydmljaW9cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZVNlbGVjdGVkXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcclxuICAgICAgICBpZighIXRoaXMuZGF0YSAmJiAhIXRoaXMuZGF0YS5jaGlsZHJlbilcclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLHJlcyk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgXHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UucmVmcmVzaFRyZWVPYnNlcnZhYmxlXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzPT57XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5yZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uT2JzZXJ2YWJsZVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcz0+e1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbigpO1xyXG4gICAgICB9KSAgICBcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgICAgIFxyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlRXhwYW5kLnN1YnNjcmliZShyZXM9PntcclxuICAgICAgaWYocmVzICE9IG51bGwpe1xyXG4gICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZXhwYW5kQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUNvbGxhcHNlLnN1YnNjcmliZShyZXM9PntcclxuICAgICAgaWYocmVzICE9IG51bGwpe1xyXG4gICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuY29sbGFwc2VBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZU9ic2VydmFibGVcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4geyAgICAgICAgXHJcbiAgICAgICAgaWYgKHJlcyAhPSB1bmRlZmluZWQpIHsgICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChyZXMpOyAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmNvbGxhcHNlT25lTm9kZU9ic2VydmFibGVcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4geyAgICAgICAgXHJcbiAgICAgICAgaWYgKHJlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMudHJlZUNvbnRyb2wuY29sbGFwc2UocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8jcmVnaW9uICA9PT09PT0gRXZlbnRzID09PT09PT09PT09XHJcbiAgb25SZWRpcmVjdChub2RlOk5vZGUpe1xyXG5cclxuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzU2luZ2xlQ2xpY2spe1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsbm9kZS5pZCk7ICAgIFxyXG5cclxuICAgICAgICAgICAgICAvLyBpZighIW5vZGUgJiYgIW5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgICAgICAgIGlmKCEhbm9kZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVTZWxlY3RlZC5lbWl0KG5vZGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sMzUwKSAgIFxyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGlmICgoZWxlbWVudC5vZmZzZXRIZWlnaHQgKyBlbGVtZW50LnNjcm9sbFRvcCkgPj0gZWxlbWVudC5zY3JvbGxIZWlnaHQpIHsgICAgICBcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVkaXQobm9kZTpOb2RlKXsgIFxyXG4gICAgbm9kZS5pc0VkaXRhYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uQWRkKG5vZGU6Tm9kZSl7XHJcbiAgICAvLyBzaSBubyB0aWVuZSBoaWpvcyBpbnN0YW5jaWFyIGVsIGFycmF5XHJcbiAgICBpZighbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxuICAgIG5vZGUuY2hpbGRyZW4ucHVzaChcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsICAgICAgIFxyXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHBhcmVudCA6IG5vZGUsXHJcbiAgICAgICAgaXNFZGl0YWJsZSA6IHRydWVcclxuICAgICAgfVxyXG4gICAgKTsgICAgIFxyXG4gICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGUobm9kZTpOb2RlKXsgXHJcbiAgICAvLyBSZW11ZXZlIGVsIG5vZG8gdXRpbGl6YW5kbyBsYSBsaWJyZXJpYSBkZSBsb2Rhc2ggICBcclxuICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuICAgIFxyXG4gICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgdGhpcy5yZW1vdmVkLmVtaXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRlZChub2RlOk5vZGUsdmFsdWU6YW55KXtcclxuICAgIFxyXG4gICAgICBub2RlLm5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICAgIGlmKG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUgPT0gXCJcIil7ICAgICAgICAgICAgICBcclxuICAgICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYobm9kZS5pZCAmJiBub2RlLmlkICE9IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gXCJcIil7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWQuZW1pdChub2RlKTtcclxuICAgICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgfWVsc2UgaWYoISFub2RlLmlkICYmIG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUudHJpbSgpICE9PSBcIlwiKXtcclxuICAgICAgICB0aGlzLmFkZGVkLmVtaXQobm9kZSk7XHJcbiAgICAgICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0gICAgICAgICBcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKG5vZGU6Tm9kZSx2YWx1ZTpzdHJpbmcpe1xyXG4gICAgLy8gU2kgbm8gdGllbmUgaWQgcG9yIHNlciB1biBudWV2byBpdGVtLCBsbyBlbGltaW5hXHJcbiAgICBpZihub2RlLmlkID09IG51bGwpe1xyXG4gICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlOyBcclxuICB9XHJcblxyXG4gIG9uRGJsQ2xpY2sobm9kZTpOb2RlKXtcclxuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb2JsZUNsaWNrLmVtaXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZXZlbnQ6S2V5Ym9hcmRFdmVudCl7ICAgICAgXHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICBjYXNlICdEZWxldGUnOlxyXG4gICAgICAgIHRoaXMua2V5cHJlc3NEZWxldGUuZW1pdCgoISF0aGlzLmN1cnJlbnROb2RlICYmIHRoaXMuY3VycmVudE5vZGUuaWQpP3RoaXMuY3VycmVudE5vZGUuaWQ6bnVsbClcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnSW5zZXJ0JzpcclxuICAgICAgICB0aGlzLmtleXByZXNzSW5zZXJ0LmVtaXQoKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLmlkKT90aGlzLmN1cnJlbnROb2RlLmlkOm51bGwpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6ICAgICAgICBcclxuICAgICAgICB0aGlzLm1vdmVEb3duSW50b1RyZWUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dVcCc6ICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5tb3ZlVXBJbnRvVHJlZSgpO1xyXG4gICAgICAgIGJyZWFrOyAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT09IEV2ZW50cyA9PT09PT09PVxyXG5cclxuXHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09PT0gTWV0b2RvcyA9PT09PT09PT09PT09XHJcblxyXG4gIHByaXZhdGUgbW92ZVVwSW50b1RyZWUoKXtcclxuICAgIGlmKCEhdGhpcy5kYXRhKXtcclxuICAgICAgLy8gc2kgYXVuIG5vIGhheSBuaW5ndW4gbm9kZSBzZWxlY2Npb25hZG8gc2VsZWNjaW9uYSBlbCBwcmltZXJvXHJcbiAgICAgIGlmKHRoaXMuY3VycmVudE5vZGUgPT0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSx0aGlzLmRhdGEuY2hpbGRyZW5bMF0uaWQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmRhdGEuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBpZighIXRoaXMuY3VycmVudE5vZGUucGFyZW50ICYmIHRoaXMuY3VycmVudE5vZGUuaWQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAvLyBvYnRpZW5lIGVsIGluZGljZSBkZWwgbm9kbyBzZWxlY2Npb25hZG8gYWN0dWFsbWVudGVcclxuICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKHRoaXMuY3VycmVudE5vZGUucGFyZW50LmlkID09IG51bGwgJiYgaW5kZXggPT0gMCl7IFxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgIH1lbHNley8vIHNpIHRpZW5lIG5vZG9zIGFsIG1pc21vIG5pdmVsIHNhbHRhIGFsIG5vZG8gYW50ZXJpb3JcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCAmJiBpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBzaSBubyB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBub2RvIHBhZHJlXHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVEb3duSW50b1RyZWUoKXsgICAgICBcclxuICAgIGlmKCEhdGhpcy5kYXRhKXtcclxuICAgICAgaWYodGhpcy5jdXJyZW50Tm9kZSA9PSBudWxsKXtcclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLHRoaXMuZGF0YS5jaGlsZHJlblswXS5pZCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuZGF0YS5jaGlsZHJlblswXTtcclxuICAgICAgICBpZighIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmKCEhdGhpcy5jdXJyZW50Tm9kZSl7XHJcbiAgICAgICAgICAvLyBvYnRpZW5lIGVsIGluZGljZSBkZWwgbm9kbyBzZWxlY2Npb25hZG8gYWN0dWFsbWVudGVcclxuICAgICAgICAgIGxldCBpbmRleCA9ICghIXRoaXMuY3VycmVudE5vZGUgJiYgISF0aGlzLmN1cnJlbnROb2RlLnBhcmVudCk/dGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnROb2RlKTogbnVsbDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gc2kgdGllbmUgY2hpbGRyZW5zIHBhc2EgYWwgcHJpbWVyIGNoaWxkcmVuXHJcbiAgICAgICAgICBpZighIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSx0aGlzLmN1cnJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgaWYoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBTaSBlcyBlbCB1bHRpbW8gbm9kbyBkZWwgYXJyYXkgcGFzYSBhbCBub2RvIGhlcm1hbm8gZGVsIHBhZHJlICh0aW8pIGhhY2lhIGFiYWpvXHJcbiAgICAgICAgICBlbHNlIGlmKGluZGV4ICE9IHVuZGVmaW5lZCAmJiAgXHJcbiAgICAgICAgICAgIGluZGV4ID09IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDEgJiZcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50ICE9IG51bGwgJiZcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuICE9IG51bGwgJiZcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG5cclxuICAgICAgICAgICAgbGV0IGluZGV4T2ZQYXJlbnQgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnROb2RlLnBhcmVudCk7IFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gKHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbltpbmRleE9mUGFyZW50ICsgMV0gPT0gdW5kZWZpbmVkKT8gdGhpcy5jdXJyZW50Tm9kZSA6IHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbltpbmRleE9mUGFyZW50ICsgMV07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICBpZighIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1lbHNleyAvLyBzaSBubyB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBzaWd1aWVudGUgaGFjaWEgYWJham9cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgIGlmKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWNhIHNpIGVsIG5vZG8gdGllbmUgaGlqb3NcclxuICAgKi9cclxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IE5vZGUpID0+ICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9idGllbmUgbGEgZGVzY3JpcGNpb24gY29tcGxldGEgZGVsIG5vZG9cclxuICAgKiBAZXhhbXBsZSBOb2RvIHBhZHJlLG5vZG8gaGlqbyxub2RvIG5pZXRvXHJcbiAgICogQHBhcmFtIG5vZGUgRGViZSB0ZW5lciB0b2RvcyBsb3MgcGFyZW50IGxsZW5vcyBoYWNpYSBhcnJpYmFcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldERlc2NyaXB0aW9uKG5vZGU6Tm9kZSk6c3RyaW5ne1xyXG4gICAgICBsZXQgcmVzdWx0OnN0cmluZ1tdPVtub2RlLm5hbWVdOyAgICAgICAgXHJcbiAgICAgIGxldCBjb25jYXQ6c3RyaW5nPVwiXCI7XHJcblxyXG4gICAgICBpZihub2RlLnBhcmVudCl7ICAgICAgICAgIFxyXG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZ2V0RGVzY3JpcHRpb24obm9kZS5wYXJlbnQpKVxyXG4gICAgICB9ICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgIGlmKHJlc3VsdC5sZW5ndGggPT0gMSlcclxuICAgICAgICAgIHJldHVybiBub2RlLm5hbWU7XHJcblxyXG4gICAgICByZXN1bHQgPSByZXN1bHQucmV2ZXJzZSgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHsgICAgICAgICAgICBcclxuICAgICAgICAgIGxldCBlbGVtZW50ID0gcmVzdWx0W2ldO1xyXG4gICAgICAgICAgY29uY2F0ID0gY29uY2F0ICsgZWxlbWVudCArICgoaSA9PSByZXN1bHQubGVuZ3RoLTEpP1wiXCI6XCIsXCIpOyAgICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICByZXR1cm4gY29uY2F0O1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdHVhbGl6YSBlbCBhcmJvbCBib3JyYW5kbyB0b2RhIGxhIGRhdGEgLCBzb2xvIGN1YW5kbyBubyBzZSB1dGlsaXphIHBhZ2luYWNpb25cclxuICAgKi9cclxuICBwcml2YXRlIHJlZnJlc2hUcmVlKCl7XHJcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xyXG4gICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhU291cmNlLmRhdGE7IFxyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBfZGF0YTtcclxuICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gX2RhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3R1YWxpemEgZWwgYXJib2wgY3VhbmRvIHNlIHV0aWxpemEgbGEgcGFnaW5hY2lvbiAoQ3VhbmRvIG5vICwgdXRpbGljZSBlbCBtZXRvZG8gcmVmcmVzaFRyZWUoKSkgICAgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCl7ICAgIFxyXG4gICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhU291cmNlLmRhdGE7IFxyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBfZGF0YTtcclxuICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gX2RhdGE7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBwcml2YXRlIGdvTmV4dFBhZ2UoKSB7XHJcbiAgICBpZiAoIXRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNMYXN0UGFnZSAmJiAhdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQpIHtcclxuICAgICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJhbmdlU2Nyb2xsZWQuZW1pdCh7XHJcbiAgICAgICAgcGFnZTogdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5uZXh0UGFnZSgpICAgICAgICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlY2VpdmVQYWdlKGRhdGE6IE5vZGVbXSkgeyAgICBcclxuICAgIGlmKCF0aGlzLmRhdGEpeyB0aGlzLmRhdGEgPSB7aWQ6bnVsbCxuYW1lOlwicm9vdFwiLGlzU2VsZWN0ZWQ6ZmFsc2V9fVxyXG4gICAgaWYgKCF0aGlzLmRhdGEuY2hpbGRyZW4pIHsgdGhpcy5kYXRhLmNoaWxkcmVuID0gbmV3IEFycmF5PE5vZGU+KCk7IHRoaXMudHJlZUhlbGlzYUNvbm5lY3QgPSBuZXcgVHJlZUhlbGlzYUNvbm5lY3Q8Tm9kZT4oKTsgfSAgICBcclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbiA9IHRoaXMuZGF0YS5jaGlsZHJlbi5jb25jYXQoZGF0YSk7XHJcbiAgICB0aGlzLmRhdGEuY2hpbGRyZW4uZm9yRWFjaChub2RlPT57XHJcbiAgICAgIHRoaXMuZmlsbFBhcmVudChub2RlLHRoaXMuZGF0YSk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy5kYXRhLmNoaWxkcmVuOyAgICBcclxuICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gdGhpcy5kYXRhLmNoaWxkcmVuO1xyXG4gICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XHJcbiAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGxlbmFuIGVsIGNhbXBvIHBhcmVudCBkZSB0b2RvcyBsb3Mgbm9kb3MgaGlqb3NcclxuICAgKiBAcGFyYW0gbm9kZSBcclxuICAgKiBAcGFyYW0gcGFyZW50IFxyXG4gICAqL1xyXG4gIHByaXZhdGUgZmlsbFBhcmVudChub2RlOk5vZGUscGFyZW50Ok5vZGUpe1xyXG5cclxuICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xyXG4gICAgaWYobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgIHRoaXMuZmlsbFBhcmVudChpdGVtLG5vZGUpOyAgIFxyXG4gICAgICB9KSAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbG9jYSBjb21vIHRydWUgZGVsIGlzU2VsZWN0ZWQgZGVsIG5vZG8gcXVlIGNvbmN1ZXJkZSBjb24gZWwgaWRcclxuICAgKiBAcGFyYW0gbm9kZSBcclxuICAgKiBAcGFyYW0gaWQgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZWxlY3ROb2RlKG5vZGU6Tm9kZSxpZDpudW1iZXJ8c3RyaW5nKXsgXHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnVwU2VsZWN0Tm9kZShub2RlKVxyXG4gICBcclxuICAgICAgaWYobm9kZSA9PSB1bmRlZmluZWQgfHwgbm9kZS5pZCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKG5vZGUuaWQgPT0gaWQpe1xyXG4gICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWVcclxuICAgICAgICB0aGlzLmV4cGFuZEFsbFBhcmVudHMobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgIH1lbHNlIGlmIChub2RlLmNoaWxkcmVuICE9IG51bGwpe1xyXG4gICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgIGZvcihpPTA7IHJlc3VsdCA9PSBudWxsICYmIGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuc2VsZWN0Tm9kZShub2RlLmNoaWxkcmVuW2ldLCBpZCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsOyBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwYW5kQWxsUGFyZW50cyhub2RlOk5vZGUpe1xyXG4gICAgaWYoISFub2RlICYmICEhbm9kZS5wYXJlbnQpe1xyXG4gICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUobm9kZS5wYXJlbnQpO1xyXG4gICAgICB0aGlzLmV4cGFuZEFsbFBhcmVudHMobm9kZS5wYXJlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRWxpbWluYSBlbCBpc1NlbGVjdGVkIGRlIHRvZG9zIGxvcyBub2Rvc1xyXG4gICAqIEBwYXJhbSBub2RlIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgdXBTZWxlY3ROb2RlKG5vZGU6IE5vZGUpIHtcclxuICAgIGlmICghIW5vZGUgJiYgbm9kZS5pc1NlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgaWYgKCEhbm9kZS5jaGlsZHJlbilcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHRoaXMudXBTZWxlY3ROb2RlKG5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsYXNzTm9kZShub2RlOiBOb2RlKTogc3RyaW5nW117XHJcbiAgICBsZXQgY2xhc3NOb2RlID0gW107XHJcbiAgICBpZihub2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgY2xhc3NOb2RlLnB1c2goXCJpc1NlbGVjdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgaWYobm9kZS5jbGFzc05vZGUpe1xyXG4gICAgICBjbGFzc05vZGUucHVzaChub2RlLmNsYXNzTm9kZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NOb2RlO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0TW9kZShub2RlLCBlZGl0TW9kZSkge1xyXG4gICAgdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMobm9kZSkuZWRpdE1vZGUgPSBlZGl0TW9kZTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0T3B0aW9uKGV2ZW50LCBub2RlKSB7XHJcbiAgICBub2RlLmlzQ2hlY2tlZE9wdGlvbiA9IGV2ZW50LnNvdXJjZS5zZWxlY3RlZDtcclxuICAgIGlmIChub2RlLmlzQ2hlY2tlZE9wdGlvbilcclxuICAgICAgdGhpcy5jaGVja2VkT3B0aW9uTm9kZS5lbWl0KG5vZGUuaWQpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnVuY2hlY2tlZE9wdGlvbk5vZGUuZW1pdChub2RlLmlkKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkT3B0aW9ucyhub2RlOiBOb2RlKTogYW55IHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5oYXMobm9kZS5pZCkpXHJcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmdldChub2RlLmlkKS5lZGl0TW9kZSk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIGZhbHNlKTtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5nZXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbG9hZFNlbGVjdGVkT3B0aW9ucyhub2RlOiBOb2RlLCBlZGl0TW9kZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgYXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG5vZGUub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIGlmIChvcHRpb24uaXNDaGVja2VkT3B0aW9uKVxyXG4gICAgICAgIGFycmF5LnB1c2gob3B0aW9uLmlkKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb2JqID0ge2Zvcm1Db250cm9sOiBuZXcgRm9ybUNvbnRyb2woYXJyYXkpLCBlZGl0TW9kZTogZWRpdE1vZGV9O1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuc2V0KG5vZGUuaWQsIG9iaik7XHJcbiAgfVxyXG5cclxuICBnZXROb2RlQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKSA6IE5vZGV7XHJcbiAgICBsZXQgcXVldWU6IE5vZGVbXSA9IFsuLi50aGlzLmRhdGFTb3VyY2UuZGF0YV07XHJcbiAgICB3aGlsZShxdWV1ZS5sZW5ndGggPiAwKXtcclxuICAgICAgbGV0IGN1cnIgPSBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgICBpZihjdXJyLmlkID09PSBpZCl7XHJcbiAgICAgICAgcmV0dXJuIGN1cnI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYoISFjdXJyLmNoaWxkcmVuKVxyXG4gICAgICAgICAgcXVldWUucHVzaCguLi5jdXJyLmNoaWxkcmVuKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT0gTWV0b2RvcyA9PT09PT09PT09PT1cclxufVxyXG4iXX0=