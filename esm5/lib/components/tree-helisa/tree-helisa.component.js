/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        node.isSelected = false;
        if (!!node.children)
            for (var i = 0; i < node.children.length; i++) {
                this.upSelectNode(node.children[i]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUs3Qyx1Q0FFQzs7O0lBREMsaUNBQWE7O0FBR2Y7SUEyREUsc0NBQXNDO0lBRXRDLDZCQUFvQixpQkFBbUMsRUFDN0MsTUFBYSxFQUNiLFVBQXFCO1FBRlgsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUM3QyxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWpEdkIsb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBWSxDQUFDOzs7OztRQVdyQyxvQkFBZSxHQUFXLElBQUksQ0FBQzs7OztRQU05QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7UUFLOUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7O1FB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IE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmVzdGVkVHJlZUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XHJcbmltcG9ydCB7IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlLCBNYXRUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcclxuaW1wb3J0IHsgVHJlZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL3RyZWUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFRyZWVIZWxpc2FDb25uZWN0IH0gZnJvbSAnLi90cmVlLWhlbGlzYS1jb25uZWN0JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IHRha2UsIHJlZHVjZSwgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRyZWVIZWxpc2Ege1xyXG4gIHBhZ2U6IG51bWJlcjsgIFxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RyZWUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ10sXHJcbiAgaG9zdDp7XHJcbiAgICAnKGRvY3VtZW50OmtleXVwKSc6ICdvbktleURvd24oJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvLyNyZWdpb24gID09PT09PSBWYXJpYWJsZXMgPT09PT09PT09PT09PVxyXG4gIHByaXZhdGUgdHJlZUhlbGlzYUNvbm5lY3Q6IFRyZWVIZWxpc2FDb25uZWN0PE5vZGU+O1xyXG4gIGZvcm1FZGl0OkZvcm1Db250cm9sO1xyXG4gIEBWaWV3Q2hpbGQoJ3RyZWUnKSB0cmVlOk1hdFRyZWU8YW55PjtcclxuICBwcml2YXRlIHNlbGVjdGVkT3B0aW9ucyA9IG5ldyBNYXA8YW55LCBhbnk+KCk7XHJcbiAgLyoqXHJcbiAgICogRGF0b3MgZGVsIEFyYm9sXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0YTpOb2RlO1xyXG5cclxuICBcclxuICAvKipcclxuICAgKiBFc3RhYmxlY2Ugc2kgc2UgbW9zdHJhcmFuIGxhcyBvcGNpb25lcyBkZSBcclxuICAgKiBDcmVhY2lvbiwgZWRpY2nDs24geSBlbGltaW5hY2lvbiBkZWwgbm9kb1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dPcHRpb25zTm9kZTpib29sZWFuID0gdHJ1ZTsgXHJcbiAgXHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgZWwgaWQgZGVsIG5vZG8gcmVtb3ZpZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIHVuIG5vZG8gZWRpdGFkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW4gbm9kbyBzaW4gaWQgZGVsIG5vZG8gLCBwZXJvIHNpIGNvbiBlbCBwYXJlbnRcclxuICAgKiBwYXJhIGNvbm9jZXIgYSBjdWFsIGZ1ZSBhw7FhZGlkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBhZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcclxuICBAT3V0cHV0KCkgY29sbGFwc2VQYXJlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJhbmdlU2Nyb2xsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlcXVlc3RUcmVlSGVsaXNhPigpO1xyXG4gIEBPdXRwdXQoKSBub2RlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgZG9ibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBrZXlwcmVzc0RlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkga2V5cHJlc3NJbnNlcnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIGNoZWNrZWRPcHRpb25Ob2RlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSB1bmNoZWNrZWRPcHRpb25Ob2RlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIFxyXG4gIHRyZWVDb250cm9sID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPE5vZGU+KG5vZGUgPT4gbm9kZS5jaGlsZHJlbik7XHJcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxOb2RlPigpO1xyXG5cclxuXHJcbiAgaXNTaW5nbGVDbGljazogQm9vbGVhbiA9IHRydWU7ICBcclxuICBjdXJyZW50Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT0gVmFyaWFibGVzID09PT09PT09XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZUhlbGlzYVNlcnZpY2U6VHJlZUhlbGlzYVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6RWxlbWVudFJlZikgeyAgICBcclxuICAgICAgXHJcbiAgICAvL2NhcmdhciBkYXRvcyBwYXNhZG9zIHBvciBlbCBASW5wdXRcclxuICAgIGlmICghIXRoaXMuZGF0YSkgeyAgICAgIFxyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLmNoaWxkcmVuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW107ICAgICBcclxuICAgICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBbXTsgXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBuZ09uSW5pdCgpIHsgICAgIFxyXG4gICAgLy8gc2kgc2UgY2FyZ2FuIGRhdG9zIHBvciBtZWRpbyBkZWwgc2VydmljaW9cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZGF0YVNvdXJjZU9ic2VydmFibGUgICAgXHJcbiAgICAuc3Vic2NyaWJlKChyZXMpID0+IHsgICAgICAgICAgICBcclxuICAgICAgaWYoISFyZXMgJiYgISFyZXMuY2hpbGRyZW4peyAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShyZXMuY2hpbGRyZW4pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBbXTtcclxuICAgICAgfSAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUsIHNpIGNhbWJpYSBlbCBub2RvIHNlbGVjY2lvbmFkbyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVTZWxlY3RlZFxyXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XHJcbiAgICAgICAgaWYoISF0aGlzLmRhdGEgJiYgISF0aGlzLmRhdGEuY2hpbGRyZW4pXHJcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSxyZXMpO1xyXG4gICAgICB9KVxyXG5cclxuICAgIFxyXG4gICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLnJlZnJlc2hUcmVlT2JzZXJ2YWJsZVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcz0+e1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UucmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbk9ic2VydmFibGVcclxuICAgICAgLnN1YnNjcmliZShyZXM9PntcclxuICAgICAgICB0aGlzLnJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb24oKTtcclxuICAgICAgfSkgICAgXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7ICAgICBcclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUV4cGFuZC5zdWJzY3JpYmUocmVzPT57XHJcbiAgICAgIGlmKHJlcyAhPSBudWxsKXtcclxuICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgdGhpcy50cmVlLnRyZWVDb250cm9sLmV4cGFuZEFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVDb2xsYXBzZS5zdWJzY3JpYmUocmVzPT57XHJcbiAgICAgIGlmKHJlcyAhPSBudWxsKXtcclxuICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgdGhpcy50cmVlLnRyZWVDb250cm9sLmNvbGxhcHNlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGVPYnNlcnZhYmxlXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHsgICAgICAgIFxyXG4gICAgICAgIGlmIChyZXMgIT0gdW5kZWZpbmVkKSB7ICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmQocmVzKTsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5jb2xsYXBzZU9uZU5vZGVPYnNlcnZhYmxlXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHsgICAgICAgIFxyXG4gICAgICAgIGlmIChyZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09IEV2ZW50cyA9PT09PT09PT09PVxyXG4gIG9uUmVkaXJlY3Qobm9kZTpOb2RlKXtcclxuXHJcbiAgICB0aGlzLmlzU2luZ2xlQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5pc1NpbmdsZUNsaWNrKXtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLG5vZGUuaWQpOyAgICBcclxuXHJcbiAgICAgICAgICAgICAgLy8gaWYoISFub2RlICYmICFub2RlLmNoaWxkcmVuKXtcclxuICAgICAgICAgICAgICBpZighIW5vZGUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlU2VsZWN0ZWQuZW1pdChub2RlLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9LDM1MCkgICBcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICBpZiAoKGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgZWxlbWVudC5zY3JvbGxUb3ApID49IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7ICAgICAgXHJcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FZGl0KG5vZGU6Tm9kZSl7ICBcclxuICAgIG5vZGUuaXNFZGl0YWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkFkZChub2RlOk5vZGUpe1xyXG4gICAgLy8gc2kgbm8gdGllbmUgaGlqb3MgaW5zdGFuY2lhciBlbCBhcnJheVxyXG4gICAgaWYoIW5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICBub2RlLmNoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbiAgICBub2RlLmNoaWxkcmVuLnB1c2goXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBuYW1lOiBcIlwiLCAgICAgICBcclxuICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICBwYXJlbnQgOiBub2RlLFxyXG4gICAgICAgIGlzRWRpdGFibGUgOiB0cnVlXHJcbiAgICAgIH1cclxuICAgICk7ICAgICBcclxuICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlKG5vZGU6Tm9kZSl7IFxyXG4gICAgLy8gUmVtdWV2ZSBlbCBub2RvIHV0aWxpemFuZG8gbGEgbGlicmVyaWEgZGUgbG9kYXNoICAgXHJcbiAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcbiAgICBcclxuICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgIHRoaXMucmVtb3ZlZC5lbWl0KG5vZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0ZWQobm9kZTpOb2RlLHZhbHVlOmFueSl7XHJcbiAgICBcclxuICAgICAgbm9kZS5uYW1lID0gdmFsdWU7XHJcblxyXG4gICAgICBpZihub2RlLmlkID09IG51bGwgJiYgbm9kZS5uYW1lID09IFwiXCIpeyAgICAgICAgICAgICAgXHJcbiAgICAgICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKG5vZGUuaWQgJiYgbm9kZS5pZCAhPSBudWxsICYmIG5vZGUubmFtZS50cmltKCkgIT09IFwiXCIpe1xyXG4gICAgICAgIHRoaXMuZWRpdGVkLmVtaXQobm9kZSk7XHJcbiAgICAgICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICAgIH1lbHNlIGlmKCEhbm9kZS5pZCAmJiBub2RlLmlkID09IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gXCJcIil7XHJcbiAgICAgICAgdGhpcy5hZGRlZC5lbWl0KG5vZGUpO1xyXG4gICAgICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9ICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbChub2RlOk5vZGUsdmFsdWU6c3RyaW5nKXtcclxuICAgIC8vIFNpIG5vIHRpZW5lIGlkIHBvciBzZXIgdW4gbnVldm8gaXRlbSwgbG8gZWxpbWluYVxyXG4gICAgaWYobm9kZS5pZCA9PSBudWxsKXtcclxuICAgICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7ICBcclxuICAgIH1cclxuXHJcbiAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTsgXHJcbiAgfVxyXG5cclxuICBvbkRibENsaWNrKG5vZGU6Tm9kZSl7XHJcbiAgICB0aGlzLmlzU2luZ2xlQ2xpY2sgPSBmYWxzZTtcclxuICAgIHRoaXMuZG9ibGVDbGljay5lbWl0KG5vZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGV2ZW50OktleWJvYXJkRXZlbnQpeyAgICAgIFxyXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSAnRGVsZXRlJzpcclxuICAgICAgICB0aGlzLmtleXByZXNzRGVsZXRlLmVtaXQoKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLmlkKT90aGlzLmN1cnJlbnROb2RlLmlkOm51bGwpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0luc2VydCc6XHJcbiAgICAgICAgdGhpcy5rZXlwcmVzc0luc2VydC5lbWl0KCghIXRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCk/dGhpcy5jdXJyZW50Tm9kZS5pZDpudWxsKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd0Rvd24nOiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tb3ZlRG93bkludG9UcmVlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93VXAnOiAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMubW92ZVVwSW50b1RyZWUoKTtcclxuICAgICAgICBicmVhazsgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09PSBFdmVudHMgPT09PT09PT1cclxuXHJcblxyXG5cclxuICAvLyNyZWdpb24gID09PT09PT09IE1ldG9kb3MgPT09PT09PT09PT09PVxyXG5cclxuICBwcml2YXRlIG1vdmVVcEludG9UcmVlKCl7XHJcbiAgICBpZighIXRoaXMuZGF0YSl7XHJcbiAgICAgIC8vIHNpIGF1biBubyBoYXkgbmluZ3VuIG5vZGUgc2VsZWNjaW9uYWRvIHNlbGVjY2lvbmEgZWwgcHJpbWVyb1xyXG4gICAgICBpZih0aGlzLmN1cnJlbnROb2RlID09IG51bGwpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsdGhpcy5kYXRhLmNoaWxkcmVuWzBdLmlkKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5kYXRhLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGlmKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYoISF0aGlzLmN1cnJlbnROb2RlLnBhcmVudCAmJiB0aGlzLmN1cnJlbnROb2RlLmlkICE9IG51bGwpe1xyXG4gICAgICAgICAgLy8gb2J0aWVuZSBlbCBpbmRpY2UgZGVsIG5vZG8gc2VsZWNjaW9uYWRvIGFjdHVhbG1lbnRlXHJcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZih0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5pZCA9PSBudWxsICYmIGluZGV4ID09IDApeyBcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICB9ZWxzZXsvLyBzaSB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBub2RvIGFudGVyaW9yXHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSB1bmRlZmluZWQgJiYgaW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gc2kgbm8gdGllbmUgbm9kb3MgYWwgbWlzbW8gbml2ZWwgc2FsdGEgYWwgbm9kbyBwYWRyZVxyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbltpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlRG93bkludG9UcmVlKCl7ICAgICAgXHJcbiAgICBpZighIXRoaXMuZGF0YSl7XHJcbiAgICAgIGlmKHRoaXMuY3VycmVudE5vZGUgPT0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSx0aGlzLmRhdGEuY2hpbGRyZW5bMF0uaWQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmRhdGEuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBpZighIXRoaXMuY3VycmVudE5vZGUpe1xyXG4gICAgICAgICAgLy8gb2J0aWVuZSBlbCBpbmRpY2UgZGVsIG5vZG8gc2VsZWNjaW9uYWRvIGFjdHVhbG1lbnRlXHJcbiAgICAgICAgICBsZXQgaW5kZXggPSAoISF0aGlzLmN1cnJlbnROb2RlICYmICEhdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQpP3RoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZSk6IG51bGw7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIHNpIHRpZW5lIGNoaWxkcmVucyBwYXNhIGFsIHByaW1lciBjaGlsZHJlblxyXG4gICAgICAgICAgaWYoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICAmJlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgIGlmKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gU2kgZXMgZWwgdWx0aW1vIG5vZG8gZGVsIGFycmF5IHBhc2EgYWwgbm9kbyBoZXJtYW5vIGRlbCBwYWRyZSAodGlvKSBoYWNpYSBhYmFqb1xyXG4gICAgICAgICAgZWxzZSBpZihpbmRleCAhPSB1bmRlZmluZWQgJiYgIFxyXG4gICAgICAgICAgICBpbmRleCA9PSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudCAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbiAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbmRleE9mUGFyZW50ID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQpOyBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9ICh0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW5baW5kZXhPZlBhcmVudCArIDFdID09IHVuZGVmaW5lZCk/IHRoaXMuY3VycmVudE5vZGUgOiB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW5baW5kZXhPZlBhcmVudCArIDFdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSx0aGlzLmN1cnJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgaWYoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ZWxzZXsgLy8gc2kgbm8gdGllbmUgbm9kb3MgYWwgbWlzbW8gbml2ZWwgc2FsdGEgYWwgc2lndWllbnRlIGhhY2lhIGFiYWpvXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbltpbmRleCArIDFdO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICBpZighIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWZXJpZmljYSBzaSBlbCBub2RvIHRpZW5lIGhpam9zXHJcbiAgICovXHJcbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlOiBOb2RlKSA9PiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xyXG5cclxuICAvKipcclxuICAgKiBPYnRpZW5lIGxhIGRlc2NyaXBjaW9uIGNvbXBsZXRhIGRlbCBub2RvXHJcbiAgICogQGV4YW1wbGUgTm9kbyBwYWRyZSxub2RvIGhpam8sbm9kbyBuaWV0b1xyXG4gICAqIEBwYXJhbSBub2RlIERlYmUgdGVuZXIgdG9kb3MgbG9zIHBhcmVudCBsbGVub3MgaGFjaWEgYXJyaWJhXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXREZXNjcmlwdGlvbihub2RlOk5vZGUpOnN0cmluZ3tcclxuICAgICAgbGV0IHJlc3VsdDpzdHJpbmdbXT1bbm9kZS5uYW1lXTsgICAgICAgIFxyXG4gICAgICBsZXQgY29uY2F0OnN0cmluZz1cIlwiO1xyXG5cclxuICAgICAgaWYobm9kZS5wYXJlbnQpeyAgICAgICAgICBcclxuICAgICAgICByZXN1bHQucHVzaCh0aGlzLmdldERlc2NyaXB0aW9uKG5vZGUucGFyZW50KSlcclxuICAgICAgfSAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICBpZihyZXN1bHQubGVuZ3RoID09IDEpXHJcbiAgICAgICAgICByZXR1cm4gbm9kZS5uYW1lO1xyXG5cclxuICAgICAgcmVzdWx0ID0gcmVzdWx0LnJldmVyc2UoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICBsZXQgZWxlbWVudCA9IHJlc3VsdFtpXTtcclxuICAgICAgICAgIGNvbmNhdCA9IGNvbmNhdCArIGVsZW1lbnQgKyAoKGkgPT0gcmVzdWx0Lmxlbmd0aC0xKT9cIlwiOlwiLFwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgcmV0dXJuIGNvbmNhdDtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBBY3R1YWxpemEgZWwgYXJib2wgYm9ycmFuZG8gdG9kYSBsYSBkYXRhICwgc29sbyBjdWFuZG8gbm8gc2UgdXRpbGl6YSBwYWdpbmFjaW9uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWZyZXNoVHJlZSgpe1xyXG4gICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhOyBcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gX2RhdGE7XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IF9kYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0dWFsaXphIGVsIGFyYm9sIGN1YW5kbyBzZSB1dGlsaXphIGxhIHBhZ2luYWNpb24gKEN1YW5kbyBubyAsIHV0aWxpY2UgZWwgbWV0b2RvIHJlZnJlc2hUcmVlKCkpICAgIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbigpeyAgICBcclxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhOyBcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gX2RhdGE7XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IF9kYXRhO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBnb05leHRQYWdlKCkge1xyXG4gICAgaWYgKCF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgJiYgIXRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkKSB7XHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yYW5nZVNjcm9sbGVkLmVtaXQoe1xyXG4gICAgICAgIHBhZ2U6IHRoaXMudHJlZUhlbGlzYUNvbm5lY3QubmV4dFBhZ2UoKSAgICAgICAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWNlaXZlUGFnZShkYXRhOiBOb2RlW10pIHsgICAgXHJcbiAgICBpZighdGhpcy5kYXRhKXsgdGhpcy5kYXRhID0ge2lkOm51bGwsbmFtZTpcInJvb3RcIixpc1NlbGVjdGVkOmZhbHNlfX1cclxuICAgIGlmICghdGhpcy5kYXRhLmNoaWxkcmVuKSB7IHRoaXMuZGF0YS5jaGlsZHJlbiA9IG5ldyBBcnJheTxOb2RlPigpOyB0aGlzLnRyZWVIZWxpc2FDb25uZWN0ID0gbmV3IFRyZWVIZWxpc2FDb25uZWN0PE5vZGU+KCk7IH0gICAgXHJcbiAgICB0aGlzLmRhdGEuY2hpbGRyZW4gPSB0aGlzLmRhdGEuY2hpbGRyZW4uY29uY2F0KGRhdGEpO1xyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuLmZvckVhY2gobm9kZT0+e1xyXG4gICAgICB0aGlzLmZpbGxQYXJlbnQobm9kZSx0aGlzLmRhdGEpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMuZGF0YS5jaGlsZHJlbjsgICAgXHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IHRoaXMuZGF0YS5jaGlsZHJlbjtcclxuICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNMYXN0UGFnZSA9IGRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExsZW5hbiBlbCBjYW1wbyBwYXJlbnQgZGUgdG9kb3MgbG9zIG5vZG9zIGhpam9zXHJcbiAgICogQHBhcmFtIG5vZGUgXHJcbiAgICogQHBhcmFtIHBhcmVudCBcclxuICAgKi9cclxuICBwcml2YXRlIGZpbGxQYXJlbnQobm9kZTpOb2RlLHBhcmVudDpOb2RlKXtcclxuXHJcbiAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcclxuICAgIGlmKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICB0aGlzLmZpbGxQYXJlbnQoaXRlbSxub2RlKTsgICBcclxuICAgICAgfSkgICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBjb2xvY2EgY29tbyB0cnVlIGRlbCBpc1NlbGVjdGVkIGRlbCBub2RvIHF1ZSBjb25jdWVyZGUgY29uIGVsIGlkXHJcbiAgICogQHBhcmFtIG5vZGUgXHJcbiAgICogQHBhcmFtIGlkIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2VsZWN0Tm9kZShub2RlOk5vZGUsaWQ6bnVtYmVyfHN0cmluZyl7IFxyXG4gICAgICBcclxuICAgICAgdGhpcy51cFNlbGVjdE5vZGUobm9kZSkgICAgICBcclxuICAgICAgXHJcbiAgICAgIGlmKG5vZGUuaWQgPT0gaWQpe1xyXG4gICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWVcclxuICAgICAgICB0aGlzLmV4cGFuZEFsbFBhcmVudHMobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgIH1lbHNlIGlmIChub2RlLmNoaWxkcmVuICE9IG51bGwpe1xyXG4gICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgIGZvcihpPTA7IHJlc3VsdCA9PSBudWxsICYmIGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuc2VsZWN0Tm9kZShub2RlLmNoaWxkcmVuW2ldLCBpZCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsOyBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwYW5kQWxsUGFyZW50cyhub2RlOk5vZGUpe1xyXG4gICAgaWYoISFub2RlICYmICEhbm9kZS5wYXJlbnQpe1xyXG4gICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUobm9kZS5wYXJlbnQpO1xyXG4gICAgICB0aGlzLmV4cGFuZEFsbFBhcmVudHMobm9kZS5wYXJlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRWxpbWluYSBlbCBpc1NlbGVjdGVkIGRlIHRvZG9zIGxvcyBub2Rvc1xyXG4gICAqIEBwYXJhbSBub2RlIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgdXBTZWxlY3ROb2RlKG5vZGU6Tm9kZSl7XHJcbiAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgaWYoISFub2RlLmNoaWxkcmVuKVxyXG4gICAgIGZvcih2YXIgaT0wOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMudXBTZWxlY3ROb2RlKG5vZGUuY2hpbGRyZW5baV0pOyAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsYXNzTm9kZShub2RlOiBOb2RlKTogc3RyaW5nW117XHJcbiAgICBsZXQgY2xhc3NOb2RlID0gW107XHJcbiAgICBpZihub2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgY2xhc3NOb2RlLnB1c2goXCJpc1NlbGVjdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgaWYobm9kZS5jbGFzc05vZGUpe1xyXG4gICAgICBjbGFzc05vZGUucHVzaChub2RlLmNsYXNzTm9kZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NOb2RlO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0TW9kZShub2RlLCBlZGl0TW9kZSkge1xyXG4gICAgdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMobm9kZSkuZWRpdE1vZGUgPSBlZGl0TW9kZTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0T3B0aW9uKGV2ZW50LCBub2RlKSB7XHJcbiAgICBub2RlLmlzQ2hlY2tlZE9wdGlvbiA9IGV2ZW50LnNvdXJjZS5zZWxlY3RlZDtcclxuICAgIGlmIChub2RlLmlzQ2hlY2tlZE9wdGlvbilcclxuICAgICAgdGhpcy5jaGVja2VkT3B0aW9uTm9kZS5lbWl0KG5vZGUuaWQpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnVuY2hlY2tlZE9wdGlvbk5vZGUuZW1pdChub2RlLmlkKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkT3B0aW9ucyhub2RlOiBOb2RlKTogYW55IHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5oYXMobm9kZS5pZCkpXHJcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmdldChub2RlLmlkKS5lZGl0TW9kZSk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIGZhbHNlKTtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5nZXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbG9hZFNlbGVjdGVkT3B0aW9ucyhub2RlOiBOb2RlLCBlZGl0TW9kZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgYXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG5vZGUub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIGlmIChvcHRpb24uaXNDaGVja2VkT3B0aW9uKVxyXG4gICAgICAgIGFycmF5LnB1c2gob3B0aW9uLmlkKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb2JqID0ge2Zvcm1Db250cm9sOiBuZXcgRm9ybUNvbnRyb2woYXJyYXkpLCBlZGl0TW9kZTogZWRpdE1vZGV9O1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuc2V0KG5vZGUuaWQsIG9iaik7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09IE1ldG9kb3MgPT09PT09PT09PT09XHJcbn1cclxuIl19