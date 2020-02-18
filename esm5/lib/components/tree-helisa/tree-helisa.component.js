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
         * @param {?} t
         * @param {?} node
         * @return {?}
         */
        function (t, node) {
            return !!node.children && node.children.length > 0;
        });
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
            concat = concat + element + ((i === result.length - 1) ? '' : ',');
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
            if (!!_this.data && !!_this.data.children) {
                _this.selectNode(_this.data, res);
            }
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
            if (res !== null) {
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
            if (res !== undefined) {
                _this.treeControl.expand(res);
            }
        }));
        this.treeHelisaService.collapseOneNodeObservable
            .subscribe((/**
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
            name: '',
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
                    var index = (!!this.currentNode && !!this.currentNode.parent) ?
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
                        var indexOfParent = this.currentNode.parent.parent.children.indexOf(this.currentNode.parent);
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
                    template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\r\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n    <!-- This is the tree node template for leaf nodes -->\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n      <li class=\"mat-tree-node\" [ngClass]=\"getClassNode(node)\"\r\n          (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\" *ngIf=\"!node.isEditable\" class=\"tree-node\">\r\n        <!-- use a disabled button to provide padding for tree leaf -->\r\n        <button mat-icon-button disabled></button>\r\n        {{node.name}}\r\n      </li>\r\n      <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n        <button mat-icon-button (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\r\n                        (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\"\r\n                               (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n      </li>\r\n    </mat-tree-node>\r\n    <!-- This is the tree node template for expandable nodes -->\r\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\r\n      <li>\r\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\r\n\r\n          <button mat-icon-button matTreeNodeToggle\r\n                  [attr.aria-label]=\"'toggle ' + node.name\">\r\n            <mat-icon class=\"mat-icon-rtl-mirror\">\r\n              {{treeControl.isExpanded(node) ? 'remove' : 'add'}}\r\n            </mat-icon>\r\n          </button>\r\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\"\r\n             [ngClass]=\"getClassNode(node)\">{{node.name}}</p>\r\n        </div>\r\n        <div class=\"tree-options\">\r\n      <li class=\"tree-options\" *ngIf=\"showOptionsNode && !node.isEditable\">\r\n        <button mat-icon-button (click)=\"onEdit(node)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onAdd(node)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"onDelete(node)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </li>\r\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\r\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\r\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\r\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\r\n                        (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\r\n          <mat-icon>done</mat-icon>\r\n        </button>\r\n      </div>\r\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\r\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\"\r\n                               (done)=\"onEdited(node,$event)\"></hel-input-with-button>\r\n      </li>\r\n</div>\r\n<ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\r\n  <ng-container matTreeNodeOutlet></ng-container>\r\n</ul>\r\n</li>\r\n</mat-nested-tree-node>\r\n</mat-tree>\r\n</div>\r\n",
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
        uncheckedOptionNode: [{ type: Output }],
        onKeyDown: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxpQkFBaUIsRUFBZSxNQUFNLG1CQUFtQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQTRCLE1BQU0sbUJBQW1CLENBQUM7QUFFL0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUs3Qyx1Q0FFQzs7O0lBREMsaUNBQWE7O0FBR2Y7SUFRRSxzQ0FBc0M7SUFFdEMsNkJBQW9CLGlCQUFvQyxFQUNwQyxNQUFjLEVBQ2QsVUFBc0I7UUFGdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWlCbEMsb0JBQWUsR0FHbEIsSUFBSSxHQUFHLEVBR1IsQ0FBQzs7Ozs7UUFXSSxvQkFBZSxHQUFZLElBQUksQ0FBQzs7OztRQUsvQixZQUFPLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBSzdFLFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVB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OztJQUlMLG1DQUFvQjs7Ozs7O0lBT3BCLDhDQUF5Qzs7Ozs7SUFLekMsc0NBQXVGOzs7OztJQUt2RixxQ0FBZ0U7Ozs7OztJQU1oRSxvQ0FBK0Q7O0lBQy9ELDZDQUE4RTs7SUFDOUUsNENBQWlHOztJQUNqRywyQ0FBNEY7O0lBQzVGLHlDQUEwRjs7SUFDMUYsNkNBQTRHOztJQUM1Ryw2Q0FBNEc7O0lBQzVHLGdEQUErRzs7SUFDL0csa0RBQWlIOztJQUVqSCwwQ0FBK0g7O0lBQy9ILHlDQUFnRjs7SUFHaEYsNENBQThCOztJQUM5QiwwQ0FBeUI7Ozs7O0lBMlN6Qix1Q0FFQzs7Ozs7SUFoWFcsZ0RBQTRDOzs7OztJQUM1QyxxQ0FBc0I7Ozs7O0lBQ3RCLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5lc3RlZFRyZWVDb250cm9sLCBUcmVlQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcclxuaW1wb3J0IHsgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2UsIE1hdFRyZWUsIE1hdE9wdGlvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XHJcbmltcG9ydCB7IFRyZWVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBUcmVlSGVsaXNhQ29ubmVjdCB9IGZyb20gJy4vdHJlZS1oZWxpc2EtY29ubmVjdCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRyZWVIZWxpc2Ege1xyXG4gIHBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtdHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90cmVlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddLFxyXG4gIC8vIGhvc3Q6IHsgJyhkb2N1bWVudDprZXl1cCknOiAnb25LZXlEb3duKCRldmVudCknIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09IFZhcmlhYmxlcyA9PT09PT09PVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVIZWxpc2FTZXJ2aWNlOiBUcmVlSGVsaXNhU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgLy8gY2FyZ2FyIGRhdG9zIHBhc2Fkb3MgcG9yIGVsIEBJbnB1dFxyXG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7XHJcbiAgICAgIGNvbnN0IGRhdGE6IE5vZGUgPSB0aGlzLmRhdGE7XHJcbiAgICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5jaGlsZHJlbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdO1xyXG4gICAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09IFZhcmlhYmxlcyA9PT09PT09PT09PT09XHJcbiAgcHJpdmF0ZSB0cmVlSGVsaXNhQ29ubmVjdDogVHJlZUhlbGlzYUNvbm5lY3Q8Tm9kZT47XHJcbiAgZm9ybUVkaXQ6IEZvcm1Db250cm9sO1xyXG4gIEBWaWV3Q2hpbGQoJ3RyZWUnKSB0cmVlOiBNYXRUcmVlPHt9PjtcclxuICBwcml2YXRlIHNlbGVjdGVkT3B0aW9uczogTWFwPHN0cmluZyB8IG51bWJlciwge1xyXG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgZWRpdE1vZGU6IGJvb2xlYW47XHJcbiAgfT4gPSBuZXcgTWFwPHN0cmluZyB8IG51bWJlciwge1xyXG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgZWRpdE1vZGU6IGJvb2xlYW47XHJcbiAgfT4oKTtcclxuICAvKipcclxuICAgKiBEYXRvcyBkZWwgQXJib2xcclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRhOiBOb2RlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRXN0YWJsZWNlIHNpIHNlIG1vc3RyYXJhbiBsYXMgb3BjaW9uZXMgZGVcclxuICAgKiBDcmVhY2lvbiwgZWRpY2nDs24geSBlbGltaW5hY2lvbiBkZWwgbm9kb1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dPcHRpb25zTm9kZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgZWwgaWQgZGVsIG5vZG8gcmVtb3ZpZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSB1biBub2RvIGVkaXRhZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgZWRpdGVkOiBFdmVudEVtaXR0ZXI8Tm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW4gbm9kbyBzaW4gaWQgZGVsIG5vZG8gLCBwZXJvIHNpIGNvbiBlbCBwYXJlbnRcclxuICAgKiBwYXJhIGNvbm9jZXIgYSBjdWFsIGZ1ZSBhw7FhZGlkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBhZGRlZDogRXZlbnRFbWl0dGVyPE5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOb2RlPigpO1xyXG4gIEBPdXRwdXQoKSBjb2xsYXBzZVBhcmVudDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByYW5nZVNjcm9sbGVkOiBFdmVudEVtaXR0ZXI8UmVxdWVzdFRyZWVIZWxpc2E+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VHJlZUhlbGlzYT4oKTtcclxuICBAT3V0cHV0KCkgbm9kZVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBkb2JsZUNsaWNrOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBrZXlwcmVzc0RlbGV0ZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSBrZXlwcmVzc0luc2VydDogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSBjaGVja2VkT3B0aW9uTm9kZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSB1bmNoZWNrZWRPcHRpb25Ob2RlOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XHJcblxyXG4gIHRyZWVDb250cm9sOiBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPiA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPigobm9kZTogTm9kZSk6IE5vZGVbXSB8IE9ic2VydmFibGU8Tm9kZVtdPiA9PiBub2RlLmNoaWxkcmVuKTtcclxuICBkYXRhU291cmNlOiBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxOb2RlPiA9IG5ldyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxOb2RlPigpO1xyXG5cclxuXHJcbiAgaXNTaW5nbGVDbGljazogYm9vbGVhbiA9IHRydWU7XHJcbiAgY3VycmVudE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBPYnRpZW5lIGxhIGRlc2NyaXBjaW9uIGNvbXBsZXRhIGRlbCBub2RvXHJcbiAgICogQGV4YW1wbGUgTm9kbyBwYWRyZSxub2RvIGhpam8sbm9kbyBuaWV0b1xyXG4gICAqIEBwYXJhbSBub2RlIERlYmUgdGVuZXIgdG9kb3MgbG9zIHBhcmVudCBsbGVub3MgaGFjaWEgYXJyaWJhXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXREZXNjcmlwdGlvbihub2RlOiBOb2RlKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW25vZGUubmFtZV07XHJcbiAgICBsZXQgY29uY2F0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpZiAobm9kZS5wYXJlbnQpIHtcclxuICAgICAgcmVzdWx0LnB1c2godGhpcy5nZXREZXNjcmlwdGlvbihub2RlLnBhcmVudCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gbm9kZS5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdCA9IHJlc3VsdC5yZXZlcnNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50OiBzdHJpbmcgPSByZXN1bHRbaV07XHJcbiAgICAgIGNvbmNhdCA9IGNvbmNhdCArIGVsZW1lbnQgKyAoKGkgPT09IHJlc3VsdC5sZW5ndGggLSAxKSA/ICcnIDogJywnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uY2F0O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHNpIHNlIGNhcmdhbiBkYXRvcyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmRhdGFTb3VyY2VPYnNlcnZhYmxlXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogTm9kZSkgPT4ge1xyXG4gICAgICAgIGlmICghIXJlcyAmJiAhIXJlcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShyZXMuY2hpbGRyZW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdO1xyXG4gICAgICAgICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIE9ic2VydmFibGUsIHNpIGNhbWJpYSBlbCBub2RvIHNlbGVjY2lvbmFkbyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVTZWxlY3RlZFxyXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IHN0cmluZyB8IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmICghIXRoaXMuZGF0YSAmJiAhIXRoaXMuZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgcmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLnJlZnJlc2hUcmVlT2JzZXJ2YWJsZVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IHZvaWQpID0+IHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UucmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbk9ic2VydmFibGVcclxuICAgICAgLnN1YnNjcmliZSgocmVzOiB2b2lkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlRXhwYW5kLnN1YnNjcmliZSgocmVzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgIHRoaXMudHJlZS50cmVlQ29udHJvbC5leHBhbmRBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUNvbGxhcHNlLnN1YnNjcmliZSgocmVzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmIChyZXMgIT09IG51bGwpIHtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuY29sbGFwc2VBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGVPYnNlcnZhYmxlXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogTm9kZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmQocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuY29sbGFwc2VPbmVOb2RlT2JzZXJ2YWJsZVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IE5vZGUpID0+IHtcclxuICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMudHJlZUNvbnRyb2wuY29sbGFwc2UocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09IEV2ZW50cyA9PT09PT09PT09PVxyXG4gIG9uUmVkaXJlY3Qobm9kZTogTm9kZSk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaXNTaW5nbGVDbGljaykge1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCBub2RlLmlkKTtcclxuXHJcbiAgICAgICAgLy8gaWYoISFub2RlICYmICFub2RlLmNoaWxkcmVuKXtcclxuICAgICAgICBpZiAoISFub2RlKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVTZWxlY3RlZC5lbWl0KG5vZGUuaWQpO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAzNTApO1xyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBpZiAoKGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgZWxlbWVudC5zY3JvbGxUb3ApID49IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuZ29OZXh0UGFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FZGl0KG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIG5vZGUuaXNFZGl0YWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkFkZChub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICAvLyBzaSBubyB0aWVuZSBoaWpvcyBpbnN0YW5jaWFyIGVsIGFycmF5XHJcbiAgICBpZiAoIW5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgbm9kZS5jaGlsZHJlbi5wdXNoKFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgcGFyZW50OiBub2RlLFxyXG4gICAgICAgIGlzRWRpdGFibGU6IHRydWVcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlKG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIC8vIFJlbXVldmUgZWwgbm9kbyB1dGlsaXphbmRvIGxhIGxpYnJlcmlhIGRlIGxvZGFzaFxyXG4gICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xyXG5cclxuICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgIHRoaXMucmVtb3ZlZC5lbWl0KG5vZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0ZWQobm9kZTogTm9kZSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgIG5vZGUubmFtZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmIChub2RlLmlkID09IG51bGwgJiYgbm9kZS5uYW1lID09PSAnJykge1xyXG4gICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcclxuICAgIH0gZWxzZSBpZiAobm9kZS5pZCAmJiBub2RlLmlkICE9IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5lZGl0ZWQuZW1pdChub2RlKTtcclxuICAgICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICB0aGlzLmFkZGVkLmVtaXQobm9kZSk7XHJcbiAgICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwobm9kZTogTm9kZSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgLy8gU2kgbm8gdGllbmUgaWQgcG9yIHNlciB1biBudWV2byBpdGVtLCBsbyBlbGltaW5hXHJcbiAgICBpZiAobm9kZS5pZCA9PSBudWxsKSB7XHJcbiAgICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25EYmxDbGljayhub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzU2luZ2xlQ2xpY2sgPSBmYWxzZTtcclxuICAgIHRoaXMuZG9ibGVDbGljay5lbWl0KG5vZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSAnRGVsZXRlJzpcclxuICAgICAgICB0aGlzLmtleXByZXNzRGVsZXRlLmVtaXQoKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLmlkKSA/IHRoaXMuY3VycmVudE5vZGUuaWQgOiBudWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnSW5zZXJ0JzpcclxuICAgICAgICB0aGlzLmtleXByZXNzSW5zZXJ0LmVtaXQoKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLmlkKSA/IHRoaXMuY3VycmVudE5vZGUuaWQgOiBudWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcclxuICAgICAgICB0aGlzLm1vdmVEb3duSW50b1RyZWUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgdGhpcy5tb3ZlVXBJbnRvVHJlZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT09IEV2ZW50cyA9PT09PT09PVxyXG5cclxuXHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09PT0gTWV0b2RvcyA9PT09PT09PT09PT09XHJcblxyXG4gIHByaXZhdGUgbW92ZVVwSW50b1RyZWUoKTogbnVtYmVyIHtcclxuICAgIGlmICghIXRoaXMuZGF0YSkge1xyXG4gICAgICAvLyBzaSBhdW4gbm8gaGF5IG5pbmd1biBub2RlIHNlbGVjY2lvbmFkbyBzZWxlY2Npb25hIGVsIHByaW1lcm9cclxuICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuZGF0YS5jaGlsZHJlblswXS5pZCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuZGF0YS5jaGlsZHJlblswXTtcclxuICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLnBhcmVudCAmJiB0aGlzLmN1cnJlbnROb2RlLmlkICE9IG51bGwpIHtcclxuICAgICAgICAgIC8vIG9idGllbmUgZWwgaW5kaWNlIGRlbCBub2RvIHNlbGVjY2lvbmFkbyBhY3R1YWxtZW50ZVxyXG4gICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZSk7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUucGFyZW50LmlkID09IG51bGwgJiYgaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICB9IGVsc2Ugey8vIHNpIHRpZW5lIG5vZG9zIGFsIG1pc21vIG5pdmVsIHNhbHRhIGFsIG5vZG8gYW50ZXJpb3JcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIHNpIG5vIHRpZW5lIG5vZG9zIGFsIG1pc21vIG5pdmVsIHNhbHRhIGFsIG5vZG8gcGFkcmVcclxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW5baW5kZXggLSAxXTtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlRG93bkludG9UcmVlKCk6IHZvaWQge1xyXG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmRhdGEuY2hpbGRyZW5bMF0uaWQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmRhdGEuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZSkge1xyXG4gICAgICAgICAgLy8gb2J0aWVuZSBlbCBpbmRpY2UgZGVsIG5vZG8gc2VsZWNjaW9uYWRvIGFjdHVhbG1lbnRlXHJcbiAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiAhIXRoaXMuY3VycmVudE5vZGUucGFyZW50KSA/XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudE5vZGUpIDpcclxuICAgICAgICAgIG51bGw7XHJcblxyXG4gICAgICAgICAgLy8gc2kgdGllbmUgY2hpbGRyZW5zIHBhc2EgYWwgcHJpbWVyIGNoaWxkcmVuXHJcbiAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGluZGV4ID09PSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudCAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbiAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleE9mUGFyZW50OiBudW1iZXIgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnROb2RlLnBhcmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSAodGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuW2luZGV4T2ZQYXJlbnQgKyAxXSA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgOiB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW5baW5kZXhPZlBhcmVudCArIDFdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgeyAvLyBzaSBubyB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBzaWd1aWVudGUgaGFjaWEgYWJham9cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWNhIHNpIGVsIG5vZG8gdGllbmUgaGlqb3NcclxuICAgKi9cclxuICBoYXNDaGlsZCA9ICh0OiBudW1iZXIsIG5vZGU6IE5vZGUpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdHVhbGl6YSBlbCBhcmJvbCBib3JyYW5kbyB0b2RhIGxhIGRhdGEgLCBzb2xvIGN1YW5kbyBubyBzZSB1dGlsaXphIHBhZ2luYWNpb25cclxuICAgKi9cclxuICBwcml2YXRlIHJlZnJlc2hUcmVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgIGNvbnN0IGRhdGFzb3VyY2VEYXRhOiBOb2RlW10gPSB0aGlzLmRhdGFTb3VyY2UuZGF0YTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YXNvdXJjZURhdGE7XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IGRhdGFzb3VyY2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0dWFsaXphIGVsIGFyYm9sIGN1YW5kbyBzZSB1dGlsaXphIGxhIHBhZ2luYWNpb24gKEN1YW5kbyBubyAsIHV0aWxpY2UgZWwgbWV0b2RvIHJlZnJlc2hUcmVlKCkpXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWZyZXNoVHJlZVdpdGhQYWdpbmF0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YXNvdXJjZURhdGE6IE5vZGVbXSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhc291cmNlRGF0YTtcclxuICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gZGF0YXNvdXJjZURhdGE7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBwcml2YXRlIGdvTmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNMYXN0UGFnZSAmJiAhdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQpIHtcclxuICAgICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJhbmdlU2Nyb2xsZWQuZW1pdCh7XHJcbiAgICAgICAgcGFnZTogdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5uZXh0UGFnZSgpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWNlaXZlUGFnZShkYXRhOiBOb2RlW10pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kYXRhKSB7IHRoaXMuZGF0YSA9IHsgaWQ6IG51bGwsIG5hbWU6ICdyb290JywgaXNTZWxlY3RlZDogZmFsc2UgfTsgfVxyXG4gICAgaWYgKCF0aGlzLmRhdGEuY2hpbGRyZW4pIHsgdGhpcy5kYXRhLmNoaWxkcmVuID0gbmV3IEFycmF5PE5vZGU+KCk7IHRoaXMudHJlZUhlbGlzYUNvbm5lY3QgPSBuZXcgVHJlZUhlbGlzYUNvbm5lY3Q8Tm9kZT4oKTsgfVxyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gdGhpcy5kYXRhLmNoaWxkcmVuLmNvbmNhdChkYXRhKTtcclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgIHRoaXMuZmlsbFBhcmVudChub2RlLCB0aGlzLmRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbiA9IHRoaXMucmVvcmRlckJ5T3JkZXJJbmRleCh0aGlzLmRhdGEuY2hpbGRyZW4pO1xyXG5cclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy5kYXRhLmNoaWxkcmVuO1xyXG4gICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSB0aGlzLmRhdGEuY2hpbGRyZW47XHJcbiAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgPSBkYXRhLmxlbmd0aCA9PT0gMDtcclxuICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMbGVuYW4gZWwgY2FtcG8gcGFyZW50IGRlIHRvZG9zIGxvcyBub2RvcyBoaWpvc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgZmlsbFBhcmVudChub2RlOiBOb2RlLCBwYXJlbnQ6IE5vZGUpOiB2b2lkIHtcclxuXHJcbiAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcclxuICAgIGlmIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGl0ZW06IE5vZGUpID0+IHtcclxuICAgICAgICB0aGlzLmZpbGxQYXJlbnQoaXRlbSwgbm9kZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbG9jYSBjb21vIHRydWUgZGVsIGlzU2VsZWN0ZWQgZGVsIG5vZG8gcXVlIGNvbmN1ZXJkZSBjb24gZWwgaWRcclxuICAgKi9cclxuICBwcml2YXRlIHNlbGVjdE5vZGUobm9kZTogTm9kZSwgaWQ6IG51bWJlciB8IHN0cmluZyk6IE5vZGUge1xyXG5cclxuICAgIHRoaXMudXBTZWxlY3ROb2RlKG5vZGUpO1xyXG5cclxuICAgIGlmIChub2RlID09PSB1bmRlZmluZWQgfHwgbm9kZS5pZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUuaWQgPT09IGlkKSB7XHJcbiAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZXhwYW5kQWxsUGFyZW50cyhub2RlKTtcclxuICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9IGVsc2UgaWYgKG5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICBsZXQgaTogbnVtYmVyO1xyXG4gICAgICBsZXQgcmVzdWx0OiBOb2RlID0gbnVsbDtcclxuICAgICAgZm9yIChpID0gMDsgcmVzdWx0ID09IG51bGwgJiYgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICByZXN1bHQgPSB0aGlzLnNlbGVjdE5vZGUobm9kZS5jaGlsZHJlbltpXSwgaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXhwYW5kQWxsUGFyZW50cyhub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAoISFub2RlICYmICEhbm9kZS5wYXJlbnQpIHtcclxuICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKG5vZGUucGFyZW50KTtcclxuICAgICAgdGhpcy5leHBhbmRBbGxQYXJlbnRzKG5vZGUucGFyZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVsaW1pbmEgZWwgaXNTZWxlY3RlZCBkZSB0b2RvcyBsb3Mgbm9kb3NcclxuICAgKi9cclxuICBwcml2YXRlIHVwU2VsZWN0Tm9kZShub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAoISFub2RlICYmIG5vZGUuaXNTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoISFub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZHJlbk5vZGUgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgdGhpcy51cFNlbGVjdE5vZGUoY2hpbGRyZW5Ob2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsYXNzTm9kZShub2RlOiBOb2RlKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgY2xhc3NOb2RlOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKG5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICBjbGFzc05vZGUucHVzaCgnaXNTZWxlY3RlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUuY2xhc3NOb2RlKSB7XHJcbiAgICAgIGNsYXNzTm9kZS5wdXNoKG5vZGUuY2xhc3NOb2RlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc05vZGU7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRNb2RlKG5vZGU6IE5vZGUsIGVkaXRNb2RlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucyhub2RlKS5lZGl0TW9kZSA9IGVkaXRNb2RlO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RPcHRpb24oZXZlbnQ6IE1hdE9wdGlvblNlbGVjdGlvbkNoYW5nZSwgbm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgbm9kZS5pc0NoZWNrZWRPcHRpb24gPSBldmVudC5zb3VyY2Uuc2VsZWN0ZWQ7XHJcbiAgICBpZiAobm9kZS5pc0NoZWNrZWRPcHRpb24pIHtcclxuICAgICAgdGhpcy5jaGVja2VkT3B0aW9uTm9kZS5lbWl0KG5vZGUuaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51bmNoZWNrZWRPcHRpb25Ob2RlLmVtaXQobm9kZS5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZE9wdGlvbnMobm9kZTogTm9kZSk6IHtcclxuICAgIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcclxuICAgIGVkaXRNb2RlOiBib29sZWFuO1xyXG59IHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucy5oYXMobm9kZS5pZCkpIHtcclxuICAgICAgdGhpcy5yZWxvYWRTZWxlY3RlZE9wdGlvbnMobm9kZSwgdGhpcy5zZWxlY3RlZE9wdGlvbnMuZ2V0KG5vZGUuaWQpLmVkaXRNb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5nZXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbG9hZFNlbGVjdGVkT3B0aW9ucyhub2RlOiBOb2RlLCBlZGl0TW9kZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgYXJyYXk6IEFycmF5PHN0cmluZyB8IG51bWJlciB8IG51bGw+ID0gbmV3IEFycmF5PHN0cmluZyB8IG51bWJlciB8IG51bGw+KCk7XHJcbiAgICBub2RlLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBOb2RlKSA9PiB7XHJcbiAgICAgIGlmIChvcHRpb24uaXNDaGVja2VkT3B0aW9uKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChvcHRpb24uaWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9iajoge1xyXG4gICAgICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgICAgIGVkaXRNb2RlOiBib29sZWFuO1xyXG4gICAgfSA9IHsgZm9ybUNvbnRyb2w6IG5ldyBGb3JtQ29udHJvbChhcnJheSksIGVkaXRNb2RlIH07XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5zZXQobm9kZS5pZCwgb2JqKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgZWwgcHJpbWVyIE5vZGUgcXVlIGVuY3VlbnRyZSBzZWd1biBlbCBpZCBlbnZpYWRvIG8gbnVsbCBzaSBubyBoYXkgbmluZ3Vub1xyXG4gICAqIEBwYXJhbSBpZCAgbnVtYmVyIHwgc3RyaW5nXHJcbiAgICogQHJldHVybnMgTm9kZSBvIG51bGwgc2kgbm8gaGF5IHVuIG5vZG8gY29uIGVzZSBpZFxyXG4gICAqL1xyXG4gIGdldE5vZGVCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBOb2RlIHtcclxuICAgIGNvbnN0IHF1ZXVlOiBOb2RlW10gPSBbLi4udGhpcy5kYXRhU291cmNlLmRhdGFdO1xyXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgY3VycjogTm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgIGlmIChjdXJyLmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghIWN1cnIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgIHF1ZXVlLnB1c2goLi4uY3Vyci5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJlb3JkZXJCeU9yZGVySW5kZXgobm9kZTogTm9kZVtdKTogTm9kZVtdIHtcclxuICAgIGlmICghIW5vZGUgJiYgbm9kZS5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIG5vZGUgPSBfLm9yZGVyQnkobm9kZSwgKHg6IE5vZGUpID0+IHgub3JkZXJJbmRleCwgWydhc2MnXSk7XHJcbiAgICAgICAgbm9kZS5mb3JFYWNoKChlbGVtZW50OiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoISFlbGVtZW50LmNoaWxkcmVuICYmIGVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuID0gdGhpcy5yZW9yZGVyQnlPcmRlckluZGV4KGVsZW1lbnQuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09IE1ldG9kb3MgPT09PT09PT09PT09XHJcbn1cclxuIl19