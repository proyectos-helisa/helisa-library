/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var TreeHelisaComponent = /** @class */ (function () {
    //#endregion ====== Variables ========
    function TreeHelisaComponent(treeHelisaService, router, elementRef) {
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
        function (node) { return node.children; }));
        this.dataSource = new MatTreeNestedDataSource();
        this.isSingleClick = true;
        this.currentNode = null;
        // cargar datos pasados por el @Input
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
        var concat = '';
        if (node.parent) {
            result.push(this.getDescription(node.parent));
        }
        if (result.length === 1) {
            return node.name;
        }
        result = result.reverse();
        for (var i = 0; i < result.length; i++) {
            /** @type {?} */
            var element = result[i];
            concat = concat + element + (i === result.length - 1 ? '' : ',');
        }
        return concat;
    };
    /**
     * @return {?}
     */
    TreeHelisaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // si se cargan datos por medio del servicio
        this.treeHelisaService.dataSourceObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!!res && !!res.children) {
                _this.selectedNode = res.id;
                _this.receivePage(res.children);
            }
            else {
                _this.dataSource.data = [];
                _this.treeControl.dataNodes = [];
            }
        }));
        // Observable, si cambia el nodo seleccionado por medio del servicio
        this.treeHelisaService.nodeSelected.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (!!_this.data && !!_this.data.children) {
                _this.selectNode(_this.data, res);
            }
        }));
        this.treeHelisaService.refreshTreeObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.refreshTree();
        }));
        this.treeHelisaService.refreshTreeWithPaginationObservable.subscribe((/**
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
            if (res !== null) {
                if (res) {
                    _this.tree.treeControl.collapseAll();
                }
            }
        }));
        this.treeHelisaService.expandOneNodeObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res !== undefined) {
                _this.treeControl.expand(res);
            }
        }));
        this.treeHelisaService.collapseOneNodeObservable.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res !== undefined) {
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
                _this.selectNode(node, node.id);
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
        var element = (/** @type {?} */ (event.target));
        if (element.offsetHeight + element.scrollTop >= element.scrollHeight) {
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
        this.clickEditNode.emit(node);
        /** @Deprecated
         *  Ya no se edita el nodo ahora solo se emite el evento 'clickEditNode'
         * retornando el nodo al cual le hicieron click en la opción delete
         */
        // node.isEditable = true;
        // this.isDisabled = true;
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
        this.clickDeleteNode.emit(node);
        /** @Deprecated
         *  Ya no se elimina el nodo ahora solo se emite el evento 'clickDeleteNode'
         * retornando el nodo al cual le hicieron click en la opción delete
         */
        // // Remueve el nodo utilizando la libreria de lodash
        // _.remove(node.parent.children, node);
        // this.refreshTree();
        // this.removed.emit(node.id);
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
        this.isDisabled = false;
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
                    var index = !!this.currentNode && !!this.currentNode.parent ? this.currentNode.parent.children.indexOf(this.currentNode) : null;
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
                        var indexOfParent = this.currentNode.parent.parent.children.indexOf(this.currentNode.parent);
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
    };
    /**
     * Verifica si el nodo tiene hijos
     */
    /**
     * Verifica si el nodo tiene hijos
     * @param {?} t
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.hasChild = /**
     * Verifica si el nodo tiene hijos
     * @param {?} t
     * @param {?} node
     * @return {?}
     */
    function (t, node) {
        return !!node.children && node.children.length > 0;
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
        var datasourceData = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = datasourceData;
        this.treeControl.dataNodes = datasourceData;
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
        var datasourceData = this.dataSource.data;
        this.dataSource.data = null;
        this.dataSource.data = datasourceData;
        this.treeControl.dataNodes = datasourceData;
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
        function (node) {
            _this.fillParent(node, _this.data);
        }));
        this.data.children = this.reorderByOrderIndex(this.data.children);
        this.dataSource.data = this.data.children;
        this.treeControl.dataNodes = this.data.children;
        this.treeHelisaConnect.isLastPage = data.length === 0;
        this.treeHelisaConnect.isUsed = false;
    };
    /**
     * Llenan el campo parent de todos los nodos hijos
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
        if (node == null) {
            return null;
        }
        this.upSelectNode(node);
        if (!!this.selectedNode) {
            /** @type {?} */
            var nodeSelected = this.getNodeById(this.selectedNode);
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
            var i = void 0;
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
        var e_1, _a;
        if (!!node && node.isSelected !== undefined) {
            node.isSelected = false;
            if (!!node.children) {
                try {
                    for (var _b = tslib_1.__values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var childrenNode = _c.value;
                        this.upSelectNode(childrenNode);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
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
            classNode.push('isSelected');
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
        if (node.isCheckedOption) {
            this.checkedOptionNode.emit(node.id);
        }
        else {
            this.uncheckedOptionNode.emit(node.id);
        }
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
        if (this.selectedOptions.has(node.id)) {
            this.reloadSelectedOptions(node, this.selectedOptions.get(node.id).editMode);
        }
        else {
            this.reloadSelectedOptions(node, false);
        }
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
            if (option.isCheckedOption) {
                array.push(option.id);
            }
        }));
        /** @type {?} */
        var obj = { formControl: new FormControl(array), editMode: editMode };
        this.selectedOptions.set(node.id, obj);
    };
    /**
     * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
     * @param id  number | string
     * @returns Node o null si no hay un nodo con ese id
     */
    /**
     * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
     * @param {?} id  number | string
     * @return {?} Node o null si no hay un nodo con ese id
     */
    TreeHelisaComponent.prototype.getNodeById = /**
     * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
     * @param {?} id  number | string
     * @return {?} Node o null si no hay un nodo con ese id
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
                if (!!curr.children) {
                    queue.push.apply(queue, tslib_1.__spread(curr.children));
                }
            }
        }
        return null;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeHelisaComponent.prototype.reorderByOrderIndex = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        if (!!node && node.length > 0) {
            try {
                node = _.orderBy(node, (/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.orderIndex; }), ['asc']);
                node.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    if (!!element.children && element != null) {
                        element.children = _this.reorderByOrderIndex(element.children);
                    }
                }));
                return node;
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    TreeHelisaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hel-tree',
                    template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\r\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n    <!-- This is the tree node template for leaf nodes -->\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n      <li\r\n        class=\"mat-tree-node\"\r\n        [ngClass]=\"getClassNode(node)\"\r\n        (click)=\"onRedirect(node)\"\r\n        (dblclick)=\"onDblClick(node)\"\r\n        *ngIf=\"!node.isEditable\"\r\n        class=\"tree-node\"\r\n      >\r\n        <!-- use a disabled button to provide padding for tree leaf -->\r\n        <button mat-icon-button disabled></button>\r\n        <ng-container *ngIf=\"node.data\">\r\n          <ul>\r\n            <ng-container *ngFor=\"let col of node.data\">\r\n              <li *ngIf=\"col.visible\">\r\n                {{ col.name }}\r\n              </li>\r\n            </ng-container>\r\n          </ul>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\r\n      </li>\r\n      <li class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled || node.disabledEditButton\" (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled || node.disabledAddButton\" (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled || node.disabledDeleteButton\" (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\r\n              option.name\r\n            }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [isFocused]=\"true\" [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\r\n        </hel-input-with-button>\r\n      </li>\r\n    </mat-tree-node>\r\n    <!-- This is the tree node template for expandable nodes -->\r\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\r\n      <li>\r\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\r\n          <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\r\n            <mat-icon class=\"mat-icon-rtl-mirror\">\r\n              {{ treeControl.isExpanded(node) ? 'remove' : 'add' }}\r\n            </mat-icon>\r\n          </button>\r\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" [ngClass]=\"getClassNode(node)\">\r\n            <ng-container *ngIf=\"node.data\">\r\n              <ul>\r\n                <ng-container *ngFor=\"let col of node.data\">\r\n                  <li *ngIf=\"col.visible\">\r\n                    {{ col.name }}\r\n                  </li>\r\n                </ng-container>\r\n              </ul>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\r\n          </p>\r\n        </div>\r\n        <div class=\"tree-options\">\r\n          <li class=\"tree-options\">\r\n            <button mat-icon-button *ngIf=\"node.showEditButton\" [disabled]=\"this.isDisabled || node.disabledEditButton\" (click)=\"onEdit(node)\">\r\n              <mat-icon>edit</mat-icon>\r\n            </button>\r\n            <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled || node.disabledAddButton\" (click)=\"onAdd(node)\">\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n            <button mat-icon-button *ngIf=\"node.showDeleteButton\" [disabled]=\"this.isDisabled || node.disabledDeleteButton\" (click)=\"onDelete(node)\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n          </li>\r\n          <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n            <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n              <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n                <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\r\n                  option.name\r\n                }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n              <mat-icon>done</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n          <!-- <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n            <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\r\n            </hel-input-with-button>\r\n          </li> -->\r\n        </div>\r\n        <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\r\n          <ng-container matTreeNodeOutlet></ng-container>\r\n        </ul>\r\n      </li>\r\n    </mat-nested-tree-node>\r\n  </mat-tree>\r\n</div>\r\n",
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
    return TreeHelisaComponent;
}());
export { TreeHelisaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxpQkFBaUIsRUFBZSxNQUFNLG1CQUFtQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQTRCLE1BQU0sbUJBQW1CLENBQUM7QUFFL0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUc3Qyx1Q0FFQzs7O0lBREMsaUNBQWE7O0FBR2Y7SUFTRSxzQ0FBc0M7SUFFdEMsNkJBQW9CLGlCQUFvQyxFQUFVLE1BQWMsRUFBVSxVQUFzQjtRQUE1RixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFnQnhHLG9CQUFlLEdBTW5CLElBQUksR0FBRyxFQU1SLENBQUM7Ozs7UUFTTSxZQUFPLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBSzdFLFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7UUFNdEQsVUFBSyxHQUF1QixJQUFJ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dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZXN0ZWRUcmVlQ29udHJvbCwgVHJlZUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XHJcbmltcG9ydCB7IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlLCBNYXRUcmVlLCBNYXRPcHRpb25TZWxlY3Rpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGUnO1xyXG5pbXBvcnQgeyBUcmVlSGVsaXNhU2VydmljZSB9IGZyb20gJy4vdHJlZS1oZWxpc2Euc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgVHJlZUhlbGlzYUNvbm5lY3QgfSBmcm9tICcuL3RyZWUtaGVsaXNhLWNvbm5lY3QnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VHJlZUhlbGlzYSB7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RyZWUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ11cclxuICAvLyBob3N0OiB7ICcoZG9jdW1lbnQ6a2V5dXApJzogJ29uS2V5RG93bigkZXZlbnQpJyB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIHNlbGVjdGVkTm9kZTogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcclxuICAvLyNlbmRyZWdpb24gPT09PT09IFZhcmlhYmxlcyA9PT09PT09PVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVIZWxpc2FTZXJ2aWNlOiBUcmVlSGVsaXNhU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICAvLyBjYXJnYXIgZGF0b3MgcGFzYWRvcyBwb3IgZWwgQElucHV0XHJcbiAgICBpZiAoISF0aGlzLmRhdGEpIHtcclxuICAgICAgY29uc3QgZGF0YTogTm9kZSA9IHRoaXMuZGF0YTtcclxuICAgICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLmNoaWxkcmVuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW107XHJcbiAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNyZWdpb24gID09PT09PSBWYXJpYWJsZXMgPT09PT09PT09PT09PVxyXG4gIHByaXZhdGUgdHJlZUhlbGlzYUNvbm5lY3Q6IFRyZWVIZWxpc2FDb25uZWN0PE5vZGU+O1xyXG4gIGZvcm1FZGl0OiBGb3JtQ29udHJvbDtcclxuICBAVmlld0NoaWxkKCd0cmVlJykgdHJlZTogTWF0VHJlZTx7fT47XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZE9wdGlvbnM6IE1hcDxcclxuICAgIHN0cmluZyB8IG51bWJlcixcclxuICAgIHtcclxuICAgICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgICBlZGl0TW9kZTogYm9vbGVhbjtcclxuICAgIH1cclxuICA+ID0gbmV3IE1hcDxcclxuICAgIHN0cmluZyB8IG51bWJlcixcclxuICAgIHtcclxuICAgICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgICBlZGl0TW9kZTogYm9vbGVhbjtcclxuICAgIH1cclxuICA+KCk7XHJcbiAgLyoqXHJcbiAgICogRGF0b3MgZGVsIEFyYm9sXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0YTogTm9kZTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSBlbCBpZCBkZWwgbm9kbyByZW1vdmlkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIHVuIG5vZG8gZWRpdGFkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBlZGl0ZWQ6IEV2ZW50RW1pdHRlcjxOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSB1biBub2RvIHNpbiBpZCBkZWwgbm9kbyAsIHBlcm8gc2kgY29uIGVsIHBhcmVudFxyXG4gICAqIHBhcmEgY29ub2NlciBhIGN1YWwgZnVlIGHDsWFkaWRvXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGFkZGVkOiBFdmVudEVtaXR0ZXI8Tm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcbiAgQE91dHB1dCgpIGNvbGxhcHNlUGFyZW50OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJhbmdlU2Nyb2xsZWQ6IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VHJlZUhlbGlzYT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJlcXVlc3RUcmVlSGVsaXNhPigpO1xyXG4gIEBPdXRwdXQoKSBub2RlU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGRvYmxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGtleXByZXNzRGVsZXRlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIGtleXByZXNzSW5zZXJ0OiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIGNoZWNrZWRPcHRpb25Ob2RlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIHVuY2hlY2tlZE9wdGlvbk5vZGU6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkgY2xpY2tBZGROb2RlOiBFdmVudEVtaXR0ZXI8Tm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcbiAgQE91dHB1dCgpIGNsaWNrRWRpdE5vZGU6IEV2ZW50RW1pdHRlcjxOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcclxuICBAT3V0cHV0KCkgY2xpY2tEZWxldGVOb2RlOiBFdmVudEVtaXR0ZXI8Tm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcblxyXG4gIHRyZWVDb250cm9sOiBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPiA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPigobm9kZTogTm9kZSk6IE5vZGVbXSB8IE9ic2VydmFibGU8Tm9kZVtdPiA9PiBub2RlLmNoaWxkcmVuKTtcclxuICBkYXRhU291cmNlOiBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxOb2RlPiA9IG5ldyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxOb2RlPigpO1xyXG5cclxuICBpc1NpbmdsZUNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuICBjdXJyZW50Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9idGllbmUgbGEgZGVzY3JpcGNpb24gY29tcGxldGEgZGVsIG5vZG9cclxuICAgKiBAZXhhbXBsZSBOb2RvIHBhZHJlLG5vZG8gaGlqbyxub2RvIG5pZXRvXHJcbiAgICogQHBhcmFtIG5vZGUgRGViZSB0ZW5lciB0b2RvcyBsb3MgcGFyZW50IGxsZW5vcyBoYWNpYSBhcnJpYmFcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldERlc2NyaXB0aW9uKG5vZGU6IE5vZGUpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbbm9kZS5uYW1lXTtcclxuICAgIGxldCBjb25jYXQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlmIChub2RlLnBhcmVudCkge1xyXG4gICAgICByZXN1bHQucHVzaCh0aGlzLmdldERlc2NyaXB0aW9uKG5vZGUucGFyZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIG5vZGUubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQgPSByZXN1bHQucmV2ZXJzZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudDogc3RyaW5nID0gcmVzdWx0W2ldO1xyXG4gICAgICBjb25jYXQgPSBjb25jYXQgKyBlbGVtZW50ICsgKGkgPT09IHJlc3VsdC5sZW5ndGggLSAxID8gJycgOiAnLCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25jYXQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHNpIHNlIGNhcmdhbiBkYXRvcyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmRhdGFTb3VyY2VPYnNlcnZhYmxlLnN1YnNjcmliZSgocmVzOiBOb2RlKSA9PiB7XHJcbiAgICAgIGlmICghIXJlcyAmJiAhIXJlcy5jaGlsZHJlbikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlID0gcmVzLmlkO1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UocmVzLmNoaWxkcmVuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gW107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUsIHNpIGNhbWJpYSBlbCBub2RvIHNlbGVjY2lvbmFkbyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVTZWxlY3RlZC5zdWJzY3JpYmUoKHJlczogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmICghIXRoaXMuZGF0YSAmJiAhIXRoaXMuZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHJlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UucmVmcmVzaFRyZWVPYnNlcnZhYmxlLnN1YnNjcmliZSgocmVzOiB2b2lkKSA9PiB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UucmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbk9ic2VydmFibGUuc3Vic2NyaWJlKChyZXM6IHZvaWQpID0+IHtcclxuICAgICAgdGhpcy5yZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUV4cGFuZC5zdWJzY3JpYmUoKHJlczogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAocmVzICE9IG51bGwpIHtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZXhwYW5kQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVDb2xsYXBzZS5zdWJzY3JpYmUoKHJlczogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAocmVzICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgdGhpcy50cmVlLnRyZWVDb250cm9sLmNvbGxhcHNlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGVPYnNlcnZhYmxlLnN1YnNjcmliZSgocmVzOiBOb2RlKSA9PiB7XHJcbiAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKHJlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuY29sbGFwc2VPbmVOb2RlT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKHJlczogTm9kZSkgPT4ge1xyXG4gICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKHJlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8jcmVnaW9uICA9PT09PT0gRXZlbnRzID09PT09PT09PT09XHJcbiAgb25SZWRpcmVjdChub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzU2luZ2xlQ2xpY2sgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlQ2xpY2spIHtcclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUobm9kZSwgbm9kZS5pZCk7XHJcblxyXG4gICAgICAgIC8vIGlmKCEhbm9kZSAmJiAhbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgICAgaWYgKCEhbm9kZSkge1xyXG4gICAgICAgICAgdGhpcy5ub2RlU2VsZWN0ZWQuZW1pdChub2RlLmlkKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMzUwKTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgZWxlbWVudC5zY3JvbGxUb3AgPj0gZWxlbWVudC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVkaXQobm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGlja0VkaXROb2RlLmVtaXQobm9kZSk7XHJcbiAgICAvKiogQERlcHJlY2F0ZWRcclxuICAgICAqICBZYSBubyBzZSBlZGl0YSBlbCBub2RvIGFob3JhIHNvbG8gc2UgZW1pdGUgZWwgZXZlbnRvICdjbGlja0VkaXROb2RlJ1xyXG4gICAgICogcmV0b3JuYW5kbyBlbCBub2RvIGFsIGN1YWwgbGUgaGljaWVyb24gY2xpY2sgZW4gbGEgb3BjacOzbiBkZWxldGVcclxuICAgICAqL1xyXG4gICAgLy8gbm9kZS5pc0VkaXRhYmxlID0gdHJ1ZTtcclxuICAgIC8vIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkFkZChub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrQWRkTm9kZS5lbWl0KG5vZGUpO1xyXG4gICAgLyoqIEBEZXByZWNhdGVkXHJcbiAgICAgKiAgWWEgbm8gc2UgY3JlYSB5IHNlIGFncmVnYSBlbCBub2RvIGFob3JhIHNvbG8gc2UgZW1pdGUgZWwgZXZlbnRvICdjbGlja0FkZE5vZGUnXHJcbiAgICAgKiByZXRvcm5hbmRvIGVsIG5vZG8gYWwgY3VhbCBsZSBoaWNpZXJvbiBjbGljayBlbiBsYSBvcGNpw7NuIGFkZFxyXG4gICAgICovXHJcbiAgICAvLyAgIC8vIHNpIG5vIHRpZW5lIGhpam9zIGluc3RhbmNpYXIgZWwgYXJyYXlcclxuICAgIC8vICAgaWYgKCFub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAvLyAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIG5vZGUuY2hpbGRyZW4ucHVzaCh7XHJcbiAgICAvLyAgICAgaWQ6IE1hdGgucmFuZG9tKCksXHJcbiAgICAvLyAgICAgbmFtZTogJycsXHJcbiAgICAvLyAgICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICAvLyAgICAgcGFyZW50OiBub2RlLFxyXG4gICAgLy8gICAgIGlzRWRpdGFibGU6IHRydWVcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAvLyAgICAgdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUobm9kZSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGUobm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGlja0RlbGV0ZU5vZGUuZW1pdChub2RlKTtcclxuICAgIC8qKiBARGVwcmVjYXRlZFxyXG4gICAgICogIFlhIG5vIHNlIGVsaW1pbmEgZWwgbm9kbyBhaG9yYSBzb2xvIHNlIGVtaXRlIGVsIGV2ZW50byAnY2xpY2tEZWxldGVOb2RlJ1xyXG4gICAgICogcmV0b3JuYW5kbyBlbCBub2RvIGFsIGN1YWwgbGUgaGljaWVyb24gY2xpY2sgZW4gbGEgb3BjacOzbiBkZWxldGVcclxuICAgICAqL1xyXG4gICAgLy8gLy8gUmVtdWV2ZSBlbCBub2RvIHV0aWxpemFuZG8gbGEgbGlicmVyaWEgZGUgbG9kYXNoXHJcbiAgICAvLyBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcblxyXG4gICAgLy8gdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgLy8gdGhpcy5yZW1vdmVkLmVtaXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRlZChub2RlOiBOb2RlLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBub2RlLm5hbWUgPSB2YWx1ZTtcclxuICAgIGlmIChub2RlLmlkID09IG51bGwgJiYgbm9kZS5uYW1lID09PSAnJykge1xyXG4gICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgIH0gZWxzZSBpZiAobm9kZS5pZCAmJiBub2RlLmlkICE9IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5lZGl0ZWQuZW1pdChub2RlKTtcclxuICAgICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2VsZWN0Tm9kZShub2RlLCBub2RlLmlkKTtcclxuICAgIH0gZWxzZSBpZiAobm9kZS5pZCA9PSBudWxsICYmIG5vZGUubmFtZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMuYWRkZWQuZW1pdChub2RlKTtcclxuICAgICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKG5vZGU6IE5vZGUsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgLy8gU2kgbm8gdGllbmUgaWQgcG9yIHNlciB1biBudWV2byBpdGVtLCBsbyBlbGltaW5hXHJcbiAgICBpZiAobm9kZS5pZCA9PSBudWxsKSB7XHJcbiAgICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25EYmxDbGljayhub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzU2luZ2xlQ2xpY2sgPSBmYWxzZTtcclxuICAgIHRoaXMuZG9ibGVDbGljay5lbWl0KG5vZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSAnRGVsZXRlJzpcclxuICAgICAgICB0aGlzLmtleXByZXNzRGVsZXRlLmVtaXQoISF0aGlzLmN1cnJlbnROb2RlICYmIHRoaXMuY3VycmVudE5vZGUuaWQgPyB0aGlzLmN1cnJlbnROb2RlLmlkIDogbnVsbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0luc2VydCc6XHJcbiAgICAgICAgdGhpcy5rZXlwcmVzc0luc2VydC5lbWl0KCEhdGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLmlkID8gdGhpcy5jdXJyZW50Tm9kZS5pZCA6IG51bGwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgIHRoaXMubW92ZURvd25JbnRvVHJlZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd1VwJzpcclxuICAgICAgICB0aGlzLm1vdmVVcEludG9UcmVlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09PSBFdmVudHMgPT09PT09PT1cclxuXHJcbiAgLy8jcmVnaW9uICA9PT09PT09PSBNZXRvZG9zID09PT09PT09PT09PT1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVXBJbnRvVHJlZSgpOiBudW1iZXIge1xyXG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7XHJcbiAgICAgIC8vIHNpIGF1biBubyBoYXkgbmluZ3VuIG5vZGUgc2VsZWNjaW9uYWRvIHNlbGVjY2lvbmEgZWwgcHJpbWVyb1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5kYXRhLmNoaWxkcmVuWzBdLmlkKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5kYXRhLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUucGFyZW50ICYmIHRoaXMuY3VycmVudE5vZGUuaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgLy8gb2J0aWVuZSBlbCBpbmRpY2UgZGVsIG5vZG8gc2VsZWNjaW9uYWRvIGFjdHVhbG1lbnRlXHJcbiAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnROb2RlKTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuaWQgPT0gbnVsbCAmJiBpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHNpIHRpZW5lIG5vZG9zIGFsIG1pc21vIG5pdmVsIHNhbHRhIGFsIG5vZG8gYW50ZXJpb3JcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gc2kgbm8gdGllbmUgbm9kb3MgYWwgbWlzbW8gbml2ZWwgc2FsdGEgYWwgbm9kbyBwYWRyZVxyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbltpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVEb3duSW50b1RyZWUoKTogdm9pZCB7XHJcbiAgICBpZiAoISF0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuZGF0YS5jaGlsZHJlblswXS5pZCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuZGF0YS5jaGlsZHJlblswXTtcclxuICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlKSB7XHJcbiAgICAgICAgICAvLyBvYnRpZW5lIGVsIGluZGljZSBkZWwgbm9kbyBzZWxlY2Npb25hZG8gYWN0dWFsbWVudGVcclxuICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPVxyXG4gICAgICAgICAgICAhIXRoaXMuY3VycmVudE5vZGUgJiYgISF0aGlzLmN1cnJlbnROb2RlLnBhcmVudCA/IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZSkgOiBudWxsO1xyXG5cclxuICAgICAgICAgIC8vIHNpIHRpZW5lIGNoaWxkcmVucyBwYXNhIGFsIHByaW1lciBjaGlsZHJlblxyXG4gICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgaW5kZXggIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBpbmRleCA9PT0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMSAmJlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW4gIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID4gMFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4T2ZQYXJlbnQ6IG51bWJlciA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudE5vZGUucGFyZW50KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9XHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuW2luZGV4T2ZQYXJlbnQgKyAxXSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuY3VycmVudE5vZGVcclxuICAgICAgICAgICAgICAgIDogdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuW2luZGV4T2ZQYXJlbnQgKyAxXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2kgbm8gdGllbmUgbm9kb3MgYWwgbWlzbW8gbml2ZWwgc2FsdGEgYWwgc2lndWllbnRlIGhhY2lhIGFiYWpvXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbltpbmRleCArIDFdO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWNhIHNpIGVsIG5vZG8gdGllbmUgaGlqb3NcclxuICAgKi9cclxuICBoYXNDaGlsZCh0OiBudW1iZXIsIG5vZGU6IE5vZGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0dWFsaXphIGVsIGFyYm9sIGJvcnJhbmRvIHRvZGEgbGEgZGF0YSAsIHNvbG8gY3VhbmRvIG5vIHNlIHV0aWxpemEgcGFnaW5hY2lvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVmcmVzaFRyZWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xyXG4gICAgY29uc3QgZGF0YXNvdXJjZURhdGE6IE5vZGVbXSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhc291cmNlRGF0YTtcclxuICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gZGF0YXNvdXJjZURhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3R1YWxpemEgZWwgYXJib2wgY3VhbmRvIHNlIHV0aWxpemEgbGEgcGFnaW5hY2lvbiAoQ3VhbmRvIG5vICwgdXRpbGljZSBlbCBtZXRvZG8gcmVmcmVzaFRyZWUoKSlcclxuICAgKi9cclxuICBwcml2YXRlIHJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhc291cmNlRGF0YTogTm9kZVtdID0gdGhpcy5kYXRhU291cmNlLmRhdGE7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFzb3VyY2VEYXRhO1xyXG4gICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBkYXRhc291cmNlRGF0YTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc0xhc3RQYWdlICYmICF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCkge1xyXG4gICAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucmFuZ2VTY3JvbGxlZC5lbWl0KHtcclxuICAgICAgICBwYWdlOiB0aGlzLnRyZWVIZWxpc2FDb25uZWN0Lm5leHRQYWdlKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlY2VpdmVQYWdlKGRhdGE6IE5vZGVbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcclxuICAgICAgdGhpcy5kYXRhID0geyBpZDogbnVsbCwgbmFtZTogJ3Jvb3QnLCBpc1NlbGVjdGVkOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QgPSBuZXcgVHJlZUhlbGlzYUNvbm5lY3Q8Tm9kZT4oKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbiA9IHRoaXMuZGF0YS5jaGlsZHJlbi5jb25jYXQoZGF0YSk7XHJcbiAgICB0aGlzLmRhdGEuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICB0aGlzLmZpbGxQYXJlbnQobm9kZSwgdGhpcy5kYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbiA9IHRoaXMucmVvcmRlckJ5T3JkZXJJbmRleCh0aGlzLmRhdGEuY2hpbGRyZW4pO1xyXG5cclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy5kYXRhLmNoaWxkcmVuO1xyXG4gICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSB0aGlzLmRhdGEuY2hpbGRyZW47XHJcbiAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgPSBkYXRhLmxlbmd0aCA9PT0gMDtcclxuICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMbGVuYW4gZWwgY2FtcG8gcGFyZW50IGRlIHRvZG9zIGxvcyBub2RvcyBoaWpvc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgZmlsbFBhcmVudChub2RlOiBOb2RlLCBwYXJlbnQ6IE5vZGUpOiB2b2lkIHtcclxuICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xyXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbTogTm9kZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZmlsbFBhcmVudChpdGVtLCBub2RlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjb2xvY2EgY29tbyB0cnVlIGRlbCBpc1NlbGVjdGVkIGRlbCBub2RvIHF1ZSBjb25jdWVyZGUgY29uIGVsIGlkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZWxlY3ROb2RlKG5vZGU6IE5vZGUsIGlkOiBudW1iZXIgfCBzdHJpbmcpOiBOb2RlIHtcclxuICAgIGlmIChub2RlID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwU2VsZWN0Tm9kZShub2RlKTtcclxuICAgIGlmICghIXRoaXMuc2VsZWN0ZWROb2RlKSB7XHJcbiAgICAgIGNvbnN0IG5vZGVTZWxlY3RlZDogTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5SWQodGhpcy5zZWxlY3RlZE5vZGUpO1xyXG4gICAgICBpZiAobm9kZVNlbGVjdGVkICE9IG51bGwpIHtcclxuICAgICAgICBub2RlU2VsZWN0ZWQuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUuaWQgIT09IHVuZGVmaW5lZCAmJiBub2RlLmlkID09PSBpZCkge1xyXG4gICAgICBub2RlLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmV4cGFuZEFsbFBhcmVudHMobm9kZSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlID0gbm9kZS5pZDtcclxuICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9IGVsc2UgaWYgKG5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICBsZXQgaTogbnVtYmVyO1xyXG4gICAgICBsZXQgcmVzdWx0OiBOb2RlID0gbnVsbDtcclxuICAgICAgZm9yIChpID0gMDsgcmVzdWx0ID09IG51bGwgJiYgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICByZXN1bHQgPSB0aGlzLnNlbGVjdE5vZGUobm9kZS5jaGlsZHJlbltpXSwgaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwYW5kQWxsUGFyZW50cyhub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAoISFub2RlICYmICEhbm9kZS5wYXJlbnQpIHtcclxuICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKG5vZGUucGFyZW50KTtcclxuICAgICAgdGhpcy5leHBhbmRBbGxQYXJlbnRzKG5vZGUucGFyZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVsaW1pbmEgZWwgaXNTZWxlY3RlZCBkZSB0b2RvcyBsb3Mgbm9kb3NcclxuICAgKi9cclxuICBwcml2YXRlIHVwU2VsZWN0Tm9kZShub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAoISFub2RlICYmIG5vZGUuaXNTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoISFub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZHJlbk5vZGUgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgdGhpcy51cFNlbGVjdE5vZGUoY2hpbGRyZW5Ob2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsYXNzTm9kZShub2RlOiBOb2RlKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgY2xhc3NOb2RlOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKG5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICBjbGFzc05vZGUucHVzaCgnaXNTZWxlY3RlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUuY2xhc3NOb2RlKSB7XHJcbiAgICAgIGNsYXNzTm9kZS5wdXNoKG5vZGUuY2xhc3NOb2RlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc05vZGU7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRNb2RlKG5vZGU6IE5vZGUsIGVkaXRNb2RlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucyhub2RlKS5lZGl0TW9kZSA9IGVkaXRNb2RlO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RPcHRpb24oZXZlbnQ6IE1hdE9wdGlvblNlbGVjdGlvbkNoYW5nZSwgbm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgbm9kZS5pc0NoZWNrZWRPcHRpb24gPSBldmVudC5zb3VyY2Uuc2VsZWN0ZWQ7XHJcbiAgICBpZiAobm9kZS5pc0NoZWNrZWRPcHRpb24pIHtcclxuICAgICAgdGhpcy5jaGVja2VkT3B0aW9uTm9kZS5lbWl0KG5vZGUuaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51bmNoZWNrZWRPcHRpb25Ob2RlLmVtaXQobm9kZS5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZE9wdGlvbnMoXHJcbiAgICBub2RlOiBOb2RlXHJcbiAgKToge1xyXG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgZWRpdE1vZGU6IGJvb2xlYW47XHJcbiAgfSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMuaGFzKG5vZGUuaWQpKSB7XHJcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmdldChub2RlLmlkKS5lZGl0TW9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbG9hZFNlbGVjdGVkT3B0aW9ucyhub2RlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZ2V0KG5vZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWxvYWRTZWxlY3RlZE9wdGlvbnMobm9kZTogTm9kZSwgZWRpdE1vZGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGFycmF5OiBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPiA9IG5ldyBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPigpO1xyXG4gICAgbm9kZS5vcHRpb25zLmZvckVhY2goKG9wdGlvbjogTm9kZSkgPT4ge1xyXG4gICAgICBpZiAob3B0aW9uLmlzQ2hlY2tlZE9wdGlvbikge1xyXG4gICAgICAgIGFycmF5LnB1c2gob3B0aW9uLmlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvYmo6IHtcclxuICAgICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgICBlZGl0TW9kZTogYm9vbGVhbjtcclxuICAgIH0gPSB7IGZvcm1Db250cm9sOiBuZXcgRm9ybUNvbnRyb2woYXJyYXkpLCBlZGl0TW9kZSB9O1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuc2V0KG5vZGUuaWQsIG9iaik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGVsIHByaW1lciBOb2RlIHF1ZSBlbmN1ZW50cmUgc2VndW4gZWwgaWQgZW52aWFkbyBvIG51bGwgc2kgbm8gaGF5IG5pbmd1bm9cclxuICAgKiBAcGFyYW0gaWQgIG51bWJlciB8IHN0cmluZ1xyXG4gICAqIEByZXR1cm5zIE5vZGUgbyBudWxsIHNpIG5vIGhheSB1biBub2RvIGNvbiBlc2UgaWRcclxuICAgKi9cclxuICBnZXROb2RlQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKTogTm9kZSB7XHJcbiAgICBjb25zdCBxdWV1ZTogTm9kZVtdID0gWy4uLnRoaXMuZGF0YVNvdXJjZS5kYXRhXTtcclxuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGN1cnI6IE5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgICBpZiAoY3Vyci5pZCA9PT0gaWQpIHtcclxuICAgICAgICByZXR1cm4gY3VycjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoISFjdXJyLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICBxdWV1ZS5wdXNoKC4uLmN1cnIuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZW9yZGVyQnlPcmRlckluZGV4KG5vZGU6IE5vZGVbXSk6IE5vZGVbXSB7XHJcbiAgICBpZiAoISFub2RlICYmIG5vZGUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIG5vZGUgPSBfLm9yZGVyQnkobm9kZSwgKHg6IE5vZGUpID0+IHgub3JkZXJJbmRleCwgWydhc2MnXSk7XHJcbiAgICAgICAgbm9kZS5mb3JFYWNoKChlbGVtZW50OiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoISFlbGVtZW50LmNoaWxkcmVuICYmIGVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuID0gdGhpcy5yZW9yZGVyQnlPcmRlckluZGV4KGVsZW1lbnQuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uID09PT09PSBNZXRvZG9zID09PT09PT09PT09PVxyXG59XHJcbiJdfQ==