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
        this.upSelectNode(node);
        if (!!!node) {
            return null;
        }
        if (node.id !== undefined && node.id === id) {
            node.isSelected = true;
            this.expandAllParents(node);
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
                    template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\r\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n    <!-- This is the tree node template for leaf nodes -->\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n      <li\r\n        class=\"mat-tree-node\"\r\n        [ngClass]=\"getClassNode(node)\"\r\n        (click)=\"onRedirect(node)\"\r\n        (dblclick)=\"onDblClick(node)\"\r\n        *ngIf=\"!node.isEditable\"\r\n        class=\"tree-node\"\r\n      >\r\n        <!-- use a disabled button to provide padding for tree leaf -->\r\n        <button mat-icon-button disabled></button>\r\n        <ng-container *ngIf=\"node.data\">\r\n          <ul>\r\n            <ng-container *ngFor=\"let col of node.data\">\r\n              <li *ngIf=\"col.visible\">\r\n                {{ col.name }}\r\n              </li>\r\n            </ng-container>\r\n          </ul>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\r\n      </li>\r\n      <li class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"node.showEditButton\" (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled\" (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\r\n              option.name\r\n            }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\r\n        </hel-input-with-button>\r\n      </li>\r\n    </mat-tree-node>\r\n    <!-- This is the tree node template for expandable nodes -->\r\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\r\n      <li>\r\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\r\n          <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\r\n            <mat-icon class=\"mat-icon-rtl-mirror\">\r\n              {{ treeControl.isExpanded(node) ? 'remove' : 'add' }}\r\n            </mat-icon>\r\n          </button>\r\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" [ngClass]=\"getClassNode(node)\">\r\n            <ng-container *ngIf=\"node.data\">\r\n              <ul>\r\n                <ng-container *ngFor=\"let col of node.data\">\r\n                  <li *ngIf=\"col.visible\">\r\n                    {{ col.name }}\r\n                  </li>\r\n                </ng-container>\r\n              </ul>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!node.data\"> {{ node.name }}</ng-container>\r\n          </p>\r\n        </div>\r\n        <div class=\"tree-options\">\r\n          <li class=\"tree-options\">\r\n            <button mat-icon-button *ngIf=\"node.showEditButton\" (click)=\"onEdit(node)\">\r\n              <mat-icon>edit</mat-icon>\r\n            </button>\r\n            <button mat-icon-button *ngIf=\"node.showAddButton\" [disabled]=\"this.isDisabled\" (click)=\"onAdd(node)\">\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n            <button mat-icon-button *ngIf=\"node.showDeleteButton\" (click)=\"onDelete(node)\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n          </li>\r\n          <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n            <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n              <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n                <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\" (onSelectionChange)=\"onSelectOption($event, option)\">{{\r\n                  option.name\r\n                }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n              <mat-icon>done</mat-icon>\r\n            </button>\r\n          </div>\r\n          <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n            <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node, $event)\" (done)=\"onEdited(node, $event)\">\r\n            </hel-input-with-button>\r\n          </li>\r\n        </div>\r\n        <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\r\n          <ng-container matTreeNodeOutlet></ng-container>\r\n        </ul>\r\n      </li>\r\n    </mat-nested-tree-node>\r\n  </mat-tree>\r\n</div>\r\n",
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
        onKeyDown: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
    };
    return TreeHelisaComponent;
}());
export { TreeHelisaComponent };
if (false) {
    /** @type {?} */
    TreeHelisaComponent.prototype.isDisabled;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxpQkFBaUIsRUFBZSxNQUFNLG1CQUFtQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQTRCLE1BQU0sbUJBQW1CLENBQUM7QUFFL0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUc3Qyx1Q0FFQzs7O0lBREMsaUNBQWE7O0FBR2Y7SUFTRSxzQ0FBc0M7SUFFdEMsNkJBQW9CLGlCQUFvQyxFQUFVLE1BQWMsRUFBVSxVQUFzQjtRQUE1RixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFnQnhHLG9CQUFlLEdBTW5CLElBQUksR0FBRyxFQU1SLENBQUM7Ozs7UUFTTSxZQUFPLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBSzdFLFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7UUFNdEQsVUFBSyxHQUF1QixJQUFJ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QixFQUFFLENBQUMsUUFBUSxDQUFDOztJQTBUNUMsMEJBQUM7Q0FBQSxBQWpqQkQsSUFpakJDO1NBM2lCWSxtQkFBbUI7OztJQUM5Qix5Q0FBb0I7Ozs7O0lBaUJwQixnREFBbUQ7O0lBQ25ELHVDQUFzQjs7SUFDdEIsbUNBQXFDOzs7OztJQUNyQyw4Q0FZSTs7Ozs7SUFJSixtQ0FBb0I7Ozs7O0lBS3BCLHNDQUF1Rjs7Ozs7SUFLdkYscUNBQWdFOzs7Ozs7SUFNaEUsb0NBQStEOztJQUMvRCw2Q0FBOEU7O0lBQzlFLDRDQUFpRzs7SUFDakcsMkNBQTRGOztJQUM1Rix5Q0FBMEY7O0lBQzFGLDZDQUE0Rzs7SUFDNUcsNkNBQTRHOztJQUM1RyxnREFBK0c7O0lBQy9HLGtEQUFpSDs7SUFFakgsMENBQStIOztJQUMvSCx5Q0FBZ0Y7O0lBRWhGLDRDQUE4Qjs7SUFDOUIsMENBQXlCOzs7OztJQTlEYixnREFBNEM7Ozs7O0lBQUUscUNBQXNCOzs7OztJQUFFLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5lc3RlZFRyZWVDb250cm9sLCBUcmVlQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcclxuaW1wb3J0IHsgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2UsIE1hdFRyZWUsIE1hdE9wdGlvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XHJcbmltcG9ydCB7IFRyZWVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBUcmVlSGVsaXNhQ29ubmVjdCB9IGZyb20gJy4vdHJlZS1oZWxpc2EtY29ubmVjdCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RUcmVlSGVsaXNhIHtcclxuICBwYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVsLXRyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLWhlbGlzYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdHJlZS1oZWxpc2EuY29tcG9uZW50LnNhc3MnXVxyXG4gIC8vIGhvc3Q6IHsgJyhkb2N1bWVudDprZXl1cCknOiAnb25LZXlEb3duKCRldmVudCknIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT0gVmFyaWFibGVzID09PT09PT09XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZUhlbGlzYVNlcnZpY2U6IFRyZWVIZWxpc2FTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIC8vIGNhcmdhciBkYXRvcyBwYXNhZG9zIHBvciBlbCBASW5wdXRcclxuICAgIGlmICghIXRoaXMuZGF0YSkge1xyXG4gICAgICBjb25zdCBkYXRhOiBOb2RlID0gdGhpcy5kYXRhO1xyXG4gICAgICB0aGlzLmRhdGEgPSBudWxsO1xyXG4gICAgICB0aGlzLnJlY2VpdmVQYWdlKGRhdGEuY2hpbGRyZW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXTtcclxuICAgICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09IFZhcmlhYmxlcyA9PT09PT09PT09PT09XHJcbiAgcHJpdmF0ZSB0cmVlSGVsaXNhQ29ubmVjdDogVHJlZUhlbGlzYUNvbm5lY3Q8Tm9kZT47XHJcbiAgZm9ybUVkaXQ6IEZvcm1Db250cm9sO1xyXG4gIEBWaWV3Q2hpbGQoJ3RyZWUnKSB0cmVlOiBNYXRUcmVlPHt9PjtcclxuICBwcml2YXRlIHNlbGVjdGVkT3B0aW9uczogTWFwPFxyXG4gICAgc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAge1xyXG4gICAgICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgICAgIGVkaXRNb2RlOiBib29sZWFuO1xyXG4gICAgfVxyXG4gID4gPSBuZXcgTWFwPFxyXG4gICAgc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAge1xyXG4gICAgICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgICAgIGVkaXRNb2RlOiBib29sZWFuO1xyXG4gICAgfVxyXG4gID4oKTtcclxuICAvKipcclxuICAgKiBEYXRvcyBkZWwgQXJib2xcclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRhOiBOb2RlO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGVsIGlkIGRlbCBub2RvIHJlbW92aWRvXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW4gbm9kbyBlZGl0YWRvXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGVkaXRlZDogRXZlbnRFbWl0dGVyPE5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOb2RlPigpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIHVuIG5vZG8gc2luIGlkIGRlbCBub2RvICwgcGVybyBzaSBjb24gZWwgcGFyZW50XHJcbiAgICogcGFyYSBjb25vY2VyIGEgY3VhbCBmdWUgYcOxYWRpZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgYWRkZWQ6IEV2ZW50RW1pdHRlcjxOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcclxuICBAT3V0cHV0KCkgY29sbGFwc2VQYXJlbnQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmFuZ2VTY3JvbGxlZDogRXZlbnRFbWl0dGVyPFJlcXVlc3RUcmVlSGVsaXNhPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmVxdWVzdFRyZWVIZWxpc2E+KCk7XHJcbiAgQE91dHB1dCgpIG5vZGVTZWxlY3RlZDogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgZG9ibGVDbGljazogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkga2V5cHJlc3NEZWxldGU6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkga2V5cHJlc3NJbnNlcnQ6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkgY2hlY2tlZE9wdGlvbk5vZGU6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkgdW5jaGVja2VkT3B0aW9uTm9kZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG5cclxuICB0cmVlQ29udHJvbDogTmVzdGVkVHJlZUNvbnRyb2w8Tm9kZT4gPSBuZXcgTmVzdGVkVHJlZUNvbnRyb2w8Tm9kZT4oKG5vZGU6IE5vZGUpOiBOb2RlW10gfCBPYnNlcnZhYmxlPE5vZGVbXT4gPT4gbm9kZS5jaGlsZHJlbik7XHJcbiAgZGF0YVNvdXJjZTogTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8Tm9kZT4gPSBuZXcgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8Tm9kZT4oKTtcclxuXHJcbiAgaXNTaW5nbGVDbGljazogYm9vbGVhbiA9IHRydWU7XHJcbiAgY3VycmVudE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBPYnRpZW5lIGxhIGRlc2NyaXBjaW9uIGNvbXBsZXRhIGRlbCBub2RvXHJcbiAgICogQGV4YW1wbGUgTm9kbyBwYWRyZSxub2RvIGhpam8sbm9kbyBuaWV0b1xyXG4gICAqIEBwYXJhbSBub2RlIERlYmUgdGVuZXIgdG9kb3MgbG9zIHBhcmVudCBsbGVub3MgaGFjaWEgYXJyaWJhXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXREZXNjcmlwdGlvbihub2RlOiBOb2RlKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW25vZGUubmFtZV07XHJcbiAgICBsZXQgY29uY2F0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpZiAobm9kZS5wYXJlbnQpIHtcclxuICAgICAgcmVzdWx0LnB1c2godGhpcy5nZXREZXNjcmlwdGlvbihub2RlLnBhcmVudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHJldHVybiBub2RlLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0ID0gcmVzdWx0LnJldmVyc2UoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IHN0cmluZyA9IHJlc3VsdFtpXTtcclxuICAgICAgY29uY2F0ID0gY29uY2F0ICsgZWxlbWVudCArIChpID09PSByZXN1bHQubGVuZ3RoIC0gMSA/ICcnIDogJywnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uY2F0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBzaSBzZSBjYXJnYW4gZGF0b3MgcG9yIG1lZGlvIGRlbCBzZXJ2aWNpb1xyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5kYXRhU291cmNlT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKHJlczogTm9kZSkgPT4ge1xyXG4gICAgICBpZiAoISFyZXMgJiYgISFyZXMuY2hpbGRyZW4pIHtcclxuICAgICAgICB0aGlzLnJlY2VpdmVQYWdlKHJlcy5jaGlsZHJlbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlLCBzaSBjYW1iaWEgZWwgbm9kbyBzZWxlY2Npb25hZG8gcG9yIG1lZGlvIGRlbCBzZXJ2aWNpb1xyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlU2VsZWN0ZWQuc3Vic2NyaWJlKChyZXM6IHN0cmluZyB8IG51bWJlcikgPT4ge1xyXG4gICAgICBpZiAoISF0aGlzLmRhdGEgJiYgISF0aGlzLmRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCByZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLnJlZnJlc2hUcmVlT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKHJlczogdm9pZCkgPT4ge1xyXG4gICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLnJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb25PYnNlcnZhYmxlLnN1YnNjcmliZSgocmVzOiB2b2lkKSA9PiB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVFeHBhbmQuc3Vic2NyaWJlKChyZXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgdGhpcy50cmVlLnRyZWVDb250cm9sLmV4cGFuZEFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlQ29sbGFwc2Uuc3Vic2NyaWJlKChyZXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKHJlcyAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgIHRoaXMudHJlZS50cmVlQ29udHJvbC5jb2xsYXBzZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKHJlczogTm9kZSkgPT4ge1xyXG4gICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChyZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmNvbGxhcHNlT25lTm9kZU9ic2VydmFibGUuc3Vic2NyaWJlKChyZXM6IE5vZGUpID0+IHtcclxuICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy50cmVlQ29udHJvbC5jb2xsYXBzZShyZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09IEV2ZW50cyA9PT09PT09PT09PVxyXG4gIG9uUmVkaXJlY3Qobm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5pc1NpbmdsZUNsaWNrID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5pc1NpbmdsZUNsaWNrKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgbm9kZS5pZCk7XHJcblxyXG4gICAgICAgIC8vIGlmKCEhbm9kZSAmJiAhbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgICAgaWYgKCEhbm9kZSkge1xyXG4gICAgICAgICAgdGhpcy5ub2RlU2VsZWN0ZWQuZW1pdChub2RlLmlkKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMzUwKTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgZWxlbWVudC5zY3JvbGxUb3AgPj0gZWxlbWVudC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVkaXQobm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgbm9kZS5pc0VkaXRhYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uQWRkKG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIC8vIHNpIG5vIHRpZW5lIGhpam9zIGluc3RhbmNpYXIgZWwgYXJyYXlcclxuICAgIGlmICghbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICBub2RlLmNoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbiAgICBub2RlLmNoaWxkcmVuLnB1c2goe1xyXG4gICAgICBpZDogbnVsbCxcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICBwYXJlbnQ6IG5vZGUsXHJcbiAgICAgIGlzRWRpdGFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGUobm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgLy8gUmVtdWV2ZSBlbCBub2RvIHV0aWxpemFuZG8gbGEgbGlicmVyaWEgZGUgbG9kYXNoXHJcbiAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcblxyXG4gICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgdGhpcy5yZW1vdmVkLmVtaXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRlZChub2RlOiBOb2RlLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBub2RlLm5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAobm9kZS5pZCA9PSBudWxsICYmIG5vZGUubmFtZSA9PT0gJycpIHtcclxuICAgICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5vZGUuaWQgJiYgbm9kZS5pZCAhPSBudWxsICYmIG5vZGUubmFtZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMuZWRpdGVkLmVtaXQobm9kZSk7XHJcbiAgICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLmlkID09IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5hZGRlZC5lbWl0KG5vZGUpO1xyXG4gICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwobm9kZTogTm9kZSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAvLyBTaSBubyB0aWVuZSBpZCBwb3Igc2VyIHVuIG51ZXZvIGl0ZW0sIGxvIGVsaW1pbmFcclxuICAgIGlmIChub2RlLmlkID09IG51bGwpIHtcclxuICAgICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbkRibENsaWNrKG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb2JsZUNsaWNrLmVtaXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICBjYXNlICdEZWxldGUnOlxyXG4gICAgICAgIHRoaXMua2V5cHJlc3NEZWxldGUuZW1pdCghIXRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCA/IHRoaXMuY3VycmVudE5vZGUuaWQgOiBudWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnSW5zZXJ0JzpcclxuICAgICAgICB0aGlzLmtleXByZXNzSW5zZXJ0LmVtaXQoISF0aGlzLmN1cnJlbnROb2RlICYmIHRoaXMuY3VycmVudE5vZGUuaWQgPyB0aGlzLmN1cnJlbnROb2RlLmlkIDogbnVsbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgdGhpcy5tb3ZlRG93bkludG9UcmVlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgIHRoaXMubW92ZVVwSW50b1RyZWUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT09IEV2ZW50cyA9PT09PT09PVxyXG5cclxuICAvLyNyZWdpb24gID09PT09PT09IE1ldG9kb3MgPT09PT09PT09PT09PVxyXG5cclxuICBwcml2YXRlIG1vdmVVcEludG9UcmVlKCk6IG51bWJlciB7XHJcbiAgICBpZiAoISF0aGlzLmRhdGEpIHtcclxuICAgICAgLy8gc2kgYXVuIG5vIGhheSBuaW5ndW4gbm9kZSBzZWxlY2Npb25hZG8gc2VsZWNjaW9uYSBlbCBwcmltZXJvXHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmRhdGEuY2hpbGRyZW5bMF0uaWQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmRhdGEuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAvLyBvYnRpZW5lIGVsIGluZGljZSBkZWwgbm9kbyBzZWxlY2Npb25hZG8gYWN0dWFsbWVudGVcclxuICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudE5vZGUpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5pZCA9PSBudWxsICYmIGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2kgdGllbmUgbm9kb3MgYWwgbWlzbW8gbml2ZWwgc2FsdGEgYWwgbm9kbyBhbnRlcmlvclxyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBzaSBubyB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBub2RvIHBhZHJlXHJcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZURvd25JbnRvVHJlZSgpOiB2b2lkIHtcclxuICAgIGlmICghIXRoaXMuZGF0YSkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5kYXRhLmNoaWxkcmVuWzBdLmlkKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5kYXRhLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUpIHtcclxuICAgICAgICAgIC8vIG9idGllbmUgZWwgaW5kaWNlIGRlbCBub2RvIHNlbGVjY2lvbmFkbyBhY3R1YWxtZW50ZVxyXG4gICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9XHJcbiAgICAgICAgICAgICEhdGhpcy5jdXJyZW50Tm9kZSAmJiAhIXRoaXMuY3VycmVudE5vZGUucGFyZW50ID8gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnROb2RlKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgLy8gc2kgdGllbmUgY2hpbGRyZW5zIHBhc2EgYWwgcHJpbWVyIGNoaWxkcmVuXHJcbiAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBpbmRleCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGluZGV4ID09PSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudCAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbiAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiAwXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXhPZlBhcmVudDogbnVtYmVyID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID1cclxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW5baW5kZXhPZlBhcmVudCArIDFdID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8gdGhpcy5jdXJyZW50Tm9kZVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW5baW5kZXhPZlBhcmVudCArIDFdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzaSBubyB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBzaWd1aWVudGUgaGFjaWEgYWJham9cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpY2Egc2kgZWwgbm9kbyB0aWVuZSBoaWpvc1xyXG4gICAqL1xyXG4gIGhhc0NoaWxkKHQ6IG51bWJlciwgbm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3R1YWxpemEgZWwgYXJib2wgYm9ycmFuZG8gdG9kYSBsYSBkYXRhICwgc29sbyBjdWFuZG8gbm8gc2UgdXRpbGl6YSBwYWdpbmFjaW9uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWZyZXNoVHJlZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICBjb25zdCBkYXRhc291cmNlRGF0YTogTm9kZVtdID0gdGhpcy5kYXRhU291cmNlLmRhdGE7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFzb3VyY2VEYXRhO1xyXG4gICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBkYXRhc291cmNlRGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdHVhbGl6YSBlbCBhcmJvbCBjdWFuZG8gc2UgdXRpbGl6YSBsYSBwYWdpbmFjaW9uIChDdWFuZG8gbm8gLCB1dGlsaWNlIGVsIG1ldG9kbyByZWZyZXNoVHJlZSgpKVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGFzb3VyY2VEYXRhOiBOb2RlW10gPSB0aGlzLmRhdGFTb3VyY2UuZGF0YTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YXNvdXJjZURhdGE7XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IGRhdGFzb3VyY2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb05leHRQYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgJiYgIXRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkKSB7XHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yYW5nZVNjcm9sbGVkLmVtaXQoe1xyXG4gICAgICAgIHBhZ2U6IHRoaXMudHJlZUhlbGlzYUNvbm5lY3QubmV4dFBhZ2UoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogTm9kZVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YSkge1xyXG4gICAgICB0aGlzLmRhdGEgPSB7IGlkOiBudWxsLCBuYW1lOiAncm9vdCcsIGlzU2VsZWN0ZWQ6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICB0aGlzLmRhdGEuY2hpbGRyZW4gPSBuZXcgQXJyYXk8Tm9kZT4oKTtcclxuICAgICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdCA9IG5ldyBUcmVlSGVsaXNhQ29ubmVjdDxOb2RlPigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gdGhpcy5kYXRhLmNoaWxkcmVuLmNvbmNhdChkYXRhKTtcclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgIHRoaXMuZmlsbFBhcmVudChub2RlLCB0aGlzLmRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gdGhpcy5yZW9yZGVyQnlPcmRlckluZGV4KHRoaXMuZGF0YS5jaGlsZHJlbik7XHJcblxyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSB0aGlzLmRhdGEuY2hpbGRyZW47XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IHRoaXMuZGF0YS5jaGlsZHJlbjtcclxuICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNMYXN0UGFnZSA9IGRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExsZW5hbiBlbCBjYW1wbyBwYXJlbnQgZGUgdG9kb3MgbG9zIG5vZG9zIGhpam9zXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBmaWxsUGFyZW50KG5vZGU6IE5vZGUsIHBhcmVudDogTm9kZSk6IHZvaWQge1xyXG4gICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maWxsUGFyZW50KGl0ZW0sIG5vZGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbG9jYSBjb21vIHRydWUgZGVsIGlzU2VsZWN0ZWQgZGVsIG5vZG8gcXVlIGNvbmN1ZXJkZSBjb24gZWwgaWRcclxuICAgKi9cclxuICBwcml2YXRlIHNlbGVjdE5vZGUobm9kZTogTm9kZSwgaWQ6IG51bWJlciB8IHN0cmluZyk6IE5vZGUge1xyXG4gICAgdGhpcy51cFNlbGVjdE5vZGUobm9kZSk7XHJcbiAgICBpZiAoISEhbm9kZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLmlkICE9PSB1bmRlZmluZWQgJiYgbm9kZS5pZCA9PT0gaWQpIHtcclxuICAgICAgbm9kZS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5leHBhbmRBbGxQYXJlbnRzKG5vZGUpO1xyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZHJlbiAhPSBudWxsKSB7XHJcbiAgICAgIGxldCBpOiBudW1iZXI7XHJcbiAgICAgIGxldCByZXN1bHQ6IE5vZGUgPSBudWxsO1xyXG4gICAgICBmb3IgKGkgPSAwOyByZXN1bHQgPT0gbnVsbCAmJiBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMuc2VsZWN0Tm9kZShub2RlLmNoaWxkcmVuW2ldLCBpZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHBhbmRBbGxQYXJlbnRzKG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIGlmICghIW5vZGUgJiYgISFub2RlLnBhcmVudCkge1xyXG4gICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUobm9kZS5wYXJlbnQpO1xyXG4gICAgICB0aGlzLmV4cGFuZEFsbFBhcmVudHMobm9kZS5wYXJlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRWxpbWluYSBlbCBpc1NlbGVjdGVkIGRlIHRvZG9zIGxvcyBub2Rvc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgdXBTZWxlY3ROb2RlKG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIGlmICghIW5vZGUgJiYgbm9kZS5pc1NlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIGlmICghIW5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkcmVuTm9kZSBvZiBub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICB0aGlzLnVwU2VsZWN0Tm9kZShjaGlsZHJlbk5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NOb2RlKG5vZGU6IE5vZGUpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBjbGFzc05vZGU6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAobm9kZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgIGNsYXNzTm9kZS5wdXNoKCdpc1NlbGVjdGVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5jbGFzc05vZGUpIHtcclxuICAgICAgY2xhc3NOb2RlLnB1c2gobm9kZS5jbGFzc05vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzTm9kZTtcclxuICB9XHJcblxyXG4gIG9uRWRpdE1vZGUobm9kZTogTm9kZSwgZWRpdE1vZGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKG5vZGUpLmVkaXRNb2RlID0gZWRpdE1vZGU7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdE9wdGlvbihldmVudDogTWF0T3B0aW9uU2VsZWN0aW9uQ2hhbmdlLCBub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBub2RlLmlzQ2hlY2tlZE9wdGlvbiA9IGV2ZW50LnNvdXJjZS5zZWxlY3RlZDtcclxuICAgIGlmIChub2RlLmlzQ2hlY2tlZE9wdGlvbikge1xyXG4gICAgICB0aGlzLmNoZWNrZWRPcHRpb25Ob2RlLmVtaXQobm9kZS5pZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVuY2hlY2tlZE9wdGlvbk5vZGUuZW1pdChub2RlLmlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkT3B0aW9ucyhcclxuICAgIG5vZGU6IE5vZGVcclxuICApOiB7XHJcbiAgICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgICBlZGl0TW9kZTogYm9vbGVhbjtcclxuICB9IHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5oYXMobm9kZS5pZCkpIHtcclxuICAgICAgdGhpcy5yZWxvYWRTZWxlY3RlZE9wdGlvbnMobm9kZSwgdGhpcy5zZWxlY3RlZE9wdGlvbnMuZ2V0KG5vZGUuaWQpLmVkaXRNb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5nZXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbG9hZFNlbGVjdGVkT3B0aW9ucyhub2RlOiBOb2RlLCBlZGl0TW9kZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgYXJyYXk6IEFycmF5PHN0cmluZyB8IG51bWJlciB8IG51bGw+ID0gbmV3IEFycmF5PHN0cmluZyB8IG51bWJlciB8IG51bGw+KCk7XHJcbiAgICBub2RlLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBOb2RlKSA9PiB7XHJcbiAgICAgIGlmIChvcHRpb24uaXNDaGVja2VkT3B0aW9uKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChvcHRpb24uaWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9iajoge1xyXG4gICAgICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgICAgIGVkaXRNb2RlOiBib29sZWFuO1xyXG4gICAgfSA9IHsgZm9ybUNvbnRyb2w6IG5ldyBGb3JtQ29udHJvbChhcnJheSksIGVkaXRNb2RlIH07XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5zZXQobm9kZS5pZCwgb2JqKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgZWwgcHJpbWVyIE5vZGUgcXVlIGVuY3VlbnRyZSBzZWd1biBlbCBpZCBlbnZpYWRvIG8gbnVsbCBzaSBubyBoYXkgbmluZ3Vub1xyXG4gICAqIEBwYXJhbSBpZCAgbnVtYmVyIHwgc3RyaW5nXHJcbiAgICogQHJldHVybnMgTm9kZSBvIG51bGwgc2kgbm8gaGF5IHVuIG5vZG8gY29uIGVzZSBpZFxyXG4gICAqL1xyXG4gIGdldE5vZGVCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBOb2RlIHtcclxuICAgIGNvbnN0IHF1ZXVlOiBOb2RlW10gPSBbLi4udGhpcy5kYXRhU291cmNlLmRhdGFdO1xyXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgY3VycjogTm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgIGlmIChjdXJyLmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghIWN1cnIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgIHF1ZXVlLnB1c2goLi4uY3Vyci5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJlb3JkZXJCeU9yZGVySW5kZXgobm9kZTogTm9kZVtdKTogTm9kZVtdIHtcclxuICAgIGlmICghIW5vZGUgJiYgbm9kZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbm9kZSA9IF8ub3JkZXJCeShub2RlLCAoeDogTm9kZSkgPT4geC5vcmRlckluZGV4LCBbJ2FzYyddKTtcclxuICAgICAgICBub2RlLmZvckVhY2goKGVsZW1lbnQ6IE5vZGUpID0+IHtcclxuICAgICAgICAgIGlmICghIWVsZW1lbnQuY2hpbGRyZW4gJiYgZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4gPSB0aGlzLnJlb3JkZXJCeU9yZGVySW5kZXgoZWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09IE1ldG9kb3MgPT09PT09PT09PT09XHJcbn1cclxuIl19