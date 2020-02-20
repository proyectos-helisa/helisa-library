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
                    template: "<div class=\"container-tree\" (scroll)=\"onScroll($event)\">\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n    <!-- This is the tree node template for leaf nodes -->\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      <li class=\"mat-tree-node\" [ngClass]=\"getClassNode(node)\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\"\n        *ngIf=\"!node.isEditable\" class=\"tree-node\">\n        <!-- use a disabled button to provide padding for tree leaf -->\n        <button mat-icon-button disabled></button>\n        {{node.name}}\n      </li>\n      <li class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"node.showEditButton\" (click)=\"onEdit(node)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showAddButton\" (click)=\"onAdd(node)\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" (click)=\"onDelete(node)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n\n      </li>\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\n              (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n          <mat-icon>done</mat-icon>\n        </button>\n      </div>\n\n\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\" (done)=\"onEdited(node,$event)\">\n        </hel-input-with-button>\n      </li>\n    </mat-tree-node>\n    <!-- This is the tree node template for expandable nodes -->\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" id=\"nested\">\n      <li>\n        <div class=\"mat-tree-node tree-options tree-node\" *ngIf=\"!node.isEditable\">\n\n          <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n              {{treeControl.isExpanded(node) ? 'remove' : 'add'}}\n            </mat-icon>\n          </button>\n          <p class=\"tree-node-text\" (click)=\"onRedirect(node)\" (dblclick)=\"onDblClick(node)\"\n            [ngClass]=\"getClassNode(node)\">{{node.name}}</p>\n        </div>\n        <div class=\"tree-options\">\n      <li class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"node.showEditButton\" (click)=\"onEdit(node)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showAddButton\" (click)=\"onAdd(node)\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <button mat-icon-button *ngIf=\"node.showDeleteButton\" (click)=\"onDelete(node)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </li>\n      <div *ngIf=\"node.options && node.options.length\" class=\"tree-options\">\n        <button mat-icon-button *ngIf=\"!getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, true)\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-form-field *ngIf=\"getSelectedOptions(node).editMode\">\n          <mat-select multiple [formControl]=\"getSelectedOptions(node).formControl\">\n            <mat-option *ngFor=\"let option of node.options\" [value]=\"option.id\"\n              (onSelectionChange)=\"onSelectOption($event, option)\">{{option.name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <button mat-icon-button *ngIf=\"getSelectedOptions(node).editMode\" (click)=\"onEditMode(node, false)\">\n          <mat-icon>done</mat-icon>\n        </button>\n      </div>\n      <li class=\"tree-options\" *ngIf=\"!!node.isEditable && node.isEditable\">\n        <hel-input-with-button [value]=\"node.name\" (cancel)=\"onCancel(node,$event)\" (done)=\"onEdited(node,$event)\">\n        </hel-input-with-button>\n      </li>\n</div>\n<ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n  <ng-container matTreeNodeOutlet></ng-container>\n</ul>\n</li>\n</mat-nested-tree-node>\n</mat-tree>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxpQkFBaUIsRUFBZSxNQUFNLG1CQUFtQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQTRCLE1BQU0sbUJBQW1CLENBQUM7QUFFL0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUs3Qyx1Q0FFQzs7O0lBREMsaUNBQWE7O0FBR2Y7SUFRRSxzQ0FBc0M7SUFFdEMsNkJBQW9CLGlCQUFvQyxFQUNwQyxNQUFjLEVBQ2QsVUFBc0I7UUFGdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWlCbEMsb0JBQWUsR0FHbEIsSUFBSSxHQUFHLEVBR1IsQ0FBQzs7OztRQVNLLFlBQU8sR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7UUFLN0UsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDOzs7OztRQU10RCxVQUFLLEdBQXVCLElB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dkYscUNBQWdFOzs7Ozs7SUFNaEUsb0NBQStEOztJQUMvRCw2Q0FBOEU7O0lBQzlFLDRDQUFpRzs7SUFDakcsMkNBQTRGOztJQUM1Rix5Q0FBMEY7O0lBQzFGLDZDQUE0Rzs7SUFDNUcsNkNBQTRHOztJQUM1RyxnREFBK0c7O0lBQy9HLGtEQUFpSDs7SUFFakgsMENBQStIOztJQUMvSCx5Q0FBZ0Y7O0lBR2hGLDRDQUE4Qjs7SUFDOUIsMENBQXlCOzs7OztJQTJTekIsdUNBRUM7Ozs7O0lBeldXLGdEQUE0Qzs7Ozs7SUFDNUMscUNBQXNCOzs7OztJQUN0Qix5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmVzdGVkVHJlZUNvbnRyb2wsIFRyZWVDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHsgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2UsIE1hdFRyZWUsIE1hdE9wdGlvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHsgVHJlZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL3RyZWUtaGVsaXNhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFRyZWVIZWxpc2FDb25uZWN0IH0gZnJvbSAnLi90cmVlLWhlbGlzYS1jb25uZWN0JztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VHJlZUhlbGlzYSB7XG4gIHBhZ2U6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVsLXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cmVlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddLFxuICAvLyBob3N0OiB7ICcoZG9jdW1lbnQ6a2V5dXApJzogJ29uS2V5RG93bigkZXZlbnQpJyB9XG59KVxuZXhwb3J0IGNsYXNzIFRyZWVIZWxpc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT0gVmFyaWFibGVzID09PT09PT09XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVlSGVsaXNhU2VydmljZTogVHJlZUhlbGlzYVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIGNhcmdhciBkYXRvcyBwYXNhZG9zIHBvciBlbCBASW5wdXRcbiAgICBpZiAoISF0aGlzLmRhdGEpIHtcbiAgICAgIGNvbnN0IGRhdGE6IE5vZGUgPSB0aGlzLmRhdGE7XG4gICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLmNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gW107XG4gICAgfVxuXG4gIH1cblxuICAvLyNyZWdpb24gID09PT09PSBWYXJpYWJsZXMgPT09PT09PT09PT09PVxuICBwcml2YXRlIHRyZWVIZWxpc2FDb25uZWN0OiBUcmVlSGVsaXNhQ29ubmVjdDxOb2RlPjtcbiAgZm9ybUVkaXQ6IEZvcm1Db250cm9sO1xuICBAVmlld0NoaWxkKCd0cmVlJykgdHJlZTogTWF0VHJlZTx7fT47XG4gIHByaXZhdGUgc2VsZWN0ZWRPcHRpb25zOiBNYXA8c3RyaW5nIHwgbnVtYmVyLCB7XG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgIGVkaXRNb2RlOiBib29sZWFuO1xuICB9PiA9IG5ldyBNYXA8c3RyaW5nIHwgbnVtYmVyLCB7XG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgIGVkaXRNb2RlOiBib29sZWFuO1xuICB9PigpO1xuICAvKipcbiAgICogRGF0b3MgZGVsIEFyYm9sXG4gICAqL1xuICBASW5wdXQoKSBkYXRhOiBOb2RlO1xuXG4gIC8qKlxuICAgKiBSZXRvcm5hIGVsIGlkIGRlbCBub2RvIHJlbW92aWRvXG4gICAqL1xuICBAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcblxuICAvKipcbiAgICogUmV0b3JuYSB1biBub2RvIGVkaXRhZG9cbiAgICovXG4gIEBPdXRwdXQoKSBlZGl0ZWQ6IEV2ZW50RW1pdHRlcjxOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcblxuICAvKipcbiAgICogUmV0b3JuYSB1biBub2RvIHNpbiBpZCBkZWwgbm9kbyAsIHBlcm8gc2kgY29uIGVsIHBhcmVudFxuICAgKiBwYXJhIGNvbm9jZXIgYSBjdWFsIGZ1ZSBhw7FhZGlkb1xuICAgKi9cbiAgQE91dHB1dCgpIGFkZGVkOiBFdmVudEVtaXR0ZXI8Tm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XG4gIEBPdXRwdXQoKSBjb2xsYXBzZVBhcmVudDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmFuZ2VTY3JvbGxlZDogRXZlbnRFbWl0dGVyPFJlcXVlc3RUcmVlSGVsaXNhPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmVxdWVzdFRyZWVIZWxpc2E+KCk7XG4gIEBPdXRwdXQoKSBub2RlU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBkb2JsZUNsaWNrOiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xuICBAT3V0cHV0KCkga2V5cHJlc3NEZWxldGU6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcbiAgQE91dHB1dCgpIGtleXByZXNzSW5zZXJ0OiBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XG4gIEBPdXRwdXQoKSBjaGVja2VkT3B0aW9uTm9kZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xuICBAT3V0cHV0KCkgdW5jaGVja2VkT3B0aW9uTm9kZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xuXG4gIHRyZWVDb250cm9sOiBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPiA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPigobm9kZTogTm9kZSk6IE5vZGVbXSB8IE9ic2VydmFibGU8Tm9kZVtdPiA9PiBub2RlLmNoaWxkcmVuKTtcbiAgZGF0YVNvdXJjZTogTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8Tm9kZT4gPSBuZXcgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8Tm9kZT4oKTtcblxuXG4gIGlzU2luZ2xlQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuICBjdXJyZW50Tm9kZTogTm9kZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIE9idGllbmUgbGEgZGVzY3JpcGNpb24gY29tcGxldGEgZGVsIG5vZG9cbiAgICogQGV4YW1wbGUgTm9kbyBwYWRyZSxub2RvIGhpam8sbm9kbyBuaWV0b1xuICAgKiBAcGFyYW0gbm9kZSBEZWJlIHRlbmVyIHRvZG9zIGxvcyBwYXJlbnQgbGxlbm9zIGhhY2lhIGFycmliYVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXREZXNjcmlwdGlvbihub2RlOiBOb2RlKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtub2RlLm5hbWVdO1xuICAgIGxldCBjb25jYXQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaWYgKG5vZGUucGFyZW50KSB7XG4gICAgICByZXN1bHQucHVzaCh0aGlzLmdldERlc2NyaXB0aW9uKG5vZGUucGFyZW50KSk7XG4gICAgfVxuXG5cbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5vZGUubmFtZTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSByZXN1bHQucmV2ZXJzZSgpO1xuXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudDogc3RyaW5nID0gcmVzdWx0W2ldO1xuICAgICAgY29uY2F0ID0gY29uY2F0ICsgZWxlbWVudCArICgoaSA9PT0gcmVzdWx0Lmxlbmd0aCAtIDEpID8gJycgOiAnLCcpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25jYXQ7XG4gIH1cblxuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gc2kgc2UgY2FyZ2FuIGRhdG9zIHBvciBtZWRpbyBkZWwgc2VydmljaW9cbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmRhdGFTb3VyY2VPYnNlcnZhYmxlXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IE5vZGUpID0+IHtcbiAgICAgICAgaWYgKCEhcmVzICYmICEhcmVzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgdGhpcy5yZWNlaXZlUGFnZShyZXMuY2hpbGRyZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW107XG4gICAgICAgICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyBPYnNlcnZhYmxlLCBzaSBjYW1iaWEgZWwgbm9kbyBzZWxlY2Npb25hZG8gcG9yIG1lZGlvIGRlbCBzZXJ2aWNpb1xuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZVNlbGVjdGVkXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoISF0aGlzLmRhdGEgJiYgISF0aGlzLmRhdGEuY2hpbGRyZW4pIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCByZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5yZWZyZXNoVHJlZU9ic2VydmFibGVcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogdm9pZCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UucmVmcmVzaFRyZWVXaXRoUGFnaW5hdGlvbk9ic2VydmFibGVcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogdm9pZCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb24oKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUV4cGFuZC5zdWJzY3JpYmUoKHJlczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZXhwYW5kQWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUNvbGxhcHNlLnN1YnNjcmliZSgocmVzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuY29sbGFwc2VBbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGVPYnNlcnZhYmxlXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IE5vZGUpID0+IHtcbiAgICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmQocmVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmNvbGxhcHNlT25lTm9kZU9ic2VydmFibGVcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogTm9kZSkgPT4ge1xuICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cblxuICAvLyNyZWdpb24gID09PT09PSBFdmVudHMgPT09PT09PT09PT1cbiAgb25SZWRpcmVjdChub2RlOiBOb2RlKTogdm9pZCB7XG5cbiAgICB0aGlzLmlzU2luZ2xlQ2xpY2sgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNTaW5nbGVDbGljaykge1xuXG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIG5vZGUuaWQpO1xuXG4gICAgICAgIC8vIGlmKCEhbm9kZSAmJiAhbm9kZS5jaGlsZHJlbil7XG4gICAgICAgIGlmICghIW5vZGUpIHtcbiAgICAgICAgICB0aGlzLm5vZGVTZWxlY3RlZC5lbWl0KG5vZGUuaWQpO1xuICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBub2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMzUwKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgaWYgKChlbGVtZW50Lm9mZnNldEhlaWdodCArIGVsZW1lbnQuc2Nyb2xsVG9wKSA+PSBlbGVtZW50LnNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgb25FZGl0KG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICBub2RlLmlzRWRpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgb25BZGQobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIC8vIHNpIG5vIHRpZW5lIGhpam9zIGluc3RhbmNpYXIgZWwgYXJyYXlcbiAgICBpZiAoIW5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBbXTtcbiAgICB9XG4gICAgbm9kZS5jaGlsZHJlbi5wdXNoKFxuICAgICAge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBwYXJlbnQ6IG5vZGUsXG4gICAgICAgIGlzRWRpdGFibGU6IHRydWVcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcbiAgfVxuXG4gIG9uRGVsZXRlKG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICAvLyBSZW11ZXZlIGVsIG5vZG8gdXRpbGl6YW5kbyBsYSBsaWJyZXJpYSBkZSBsb2Rhc2hcbiAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XG5cbiAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XG4gICAgdGhpcy5yZW1vdmVkLmVtaXQobm9kZS5pZCk7XG4gIH1cblxuICBvbkVkaXRlZChub2RlOiBOb2RlLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cbiAgICBub2RlLm5hbWUgPSB2YWx1ZTtcblxuICAgIGlmIChub2RlLmlkID09IG51bGwgJiYgbm9kZS5uYW1lID09PSAnJykge1xuICAgICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xuICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pZCAmJiBub2RlLmlkICE9IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIHRoaXMuZWRpdGVkLmVtaXQobm9kZSk7XG4gICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUudHJpbSgpICE9PSAnJykge1xuICAgICAgdGhpcy5hZGRlZC5lbWl0KG5vZGUpO1xuICAgICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25DYW5jZWwobm9kZTogTm9kZSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIFNpIG5vIHRpZW5lIGlkIHBvciBzZXIgdW4gbnVldm8gaXRlbSwgbG8gZWxpbWluYVxuICAgIGlmIChub2RlLmlkID09IG51bGwpIHtcbiAgICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTtcbiAgICB9XG5cbiAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2sobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IGZhbHNlO1xuICAgIHRoaXMuZG9ibGVDbGljay5lbWl0KG5vZGUuaWQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgdGhpcy5rZXlwcmVzc0RlbGV0ZS5lbWl0KCghIXRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCkgPyB0aGlzLmN1cnJlbnROb2RlLmlkIDogbnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSW5zZXJ0JzpcbiAgICAgICAgdGhpcy5rZXlwcmVzc0luc2VydC5lbWl0KCghIXRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCkgPyB0aGlzLmN1cnJlbnROb2RlLmlkIDogbnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5tb3ZlRG93bkludG9UcmVlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHRoaXMubW92ZVVwSW50b1RyZWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gIH1cblxuICAvLyNlbmRyZWdpb24gPT09PT09PSBFdmVudHMgPT09PT09PT1cblxuXG5cbiAgLy8jcmVnaW9uICA9PT09PT09PSBNZXRvZG9zID09PT09PT09PT09PT1cblxuICBwcml2YXRlIG1vdmVVcEludG9UcmVlKCk6IG51bWJlciB7XG4gICAgaWYgKCEhdGhpcy5kYXRhKSB7XG4gICAgICAvLyBzaSBhdW4gbm8gaGF5IG5pbmd1biBub2RlIHNlbGVjY2lvbmFkbyBzZWxlY2Npb25hIGVsIHByaW1lcm9cbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5kYXRhLmNoaWxkcmVuWzBdLmlkKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuZGF0YS5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUucGFyZW50ICYmIHRoaXMuY3VycmVudE5vZGUuaWQgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIG9idGllbmUgZWwgaW5kaWNlIGRlbCBub2RvIHNlbGVjY2lvbmFkbyBhY3R1YWxtZW50ZVxuICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMuY3VycmVudE5vZGUpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUucGFyZW50LmlkID09IG51bGwgJiYgaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgIH0gZWxzZSB7Ly8gc2kgdGllbmUgbm9kb3MgYWwgbWlzbW8gbml2ZWwgc2FsdGEgYWwgbm9kbyBhbnRlcmlvclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50O1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcbiAgICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIHNpIG5vIHRpZW5lIG5vZG9zIGFsIG1pc21vIG5pdmVsIHNhbHRhIGFsIG5vZG8gcGFkcmVcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xuICAgICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZURvd25JbnRvVHJlZSgpOiB2b2lkIHtcbiAgICBpZiAoISF0aGlzLmRhdGEpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5kYXRhLmNoaWxkcmVuWzBdLmlkKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuZGF0YS5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUpIHtcbiAgICAgICAgICAvLyBvYnRpZW5lIGVsIGluZGljZSBkZWwgbm9kbyBzZWxlY2Npb25hZG8gYWN0dWFsbWVudGVcbiAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiAhIXRoaXMuY3VycmVudE5vZGUucGFyZW50KSA/XG4gICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzLmN1cnJlbnROb2RlKSA6XG4gICAgICAgICAgbnVsbDtcblxuICAgICAgICAgIC8vIHNpIHRpZW5lIGNoaWxkcmVucyBwYXNhIGFsIHByaW1lciBjaGlsZHJlblxuICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiZcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsIHRoaXMuY3VycmVudE5vZGUuaWQpO1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiAmJiB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgaW5kZXggPT09IHRoaXMuY3VycmVudE5vZGUucGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUucGFyZW50LnBhcmVudCAhPSBudWxsICYmXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW4gIT0gbnVsbCAmJlxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgY29uc3QgaW5kZXhPZlBhcmVudDogbnVtYmVyID0gdGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50Tm9kZS5wYXJlbnQpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9ICh0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW5baW5kZXhPZlBhcmVudCArIDFdID09PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgOiB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5wYXJlbnQuY2hpbGRyZW5baW5kZXhPZlBhcmVudCArIDFdO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLCB0aGlzLmN1cnJlbnROb2RlLmlkKTtcbiAgICAgICAgICAgIGlmICghIXRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gJiYgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgeyAvLyBzaSBubyB0aWVuZSBub2RvcyBhbCBtaXNtbyBuaXZlbCBzYWx0YSBhbCBzaWd1aWVudGUgaGFjaWEgYWJham9cbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnBhcmVudC5jaGlsZHJlbltpbmRleCArIDFdO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSwgdGhpcy5jdXJyZW50Tm9kZS5pZCk7XG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuICYmIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmV4cGFuZE9uZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpY2Egc2kgZWwgbm9kbyB0aWVuZSBoaWpvc1xuICAgKi9cbiAgaGFzQ2hpbGQgPSAodDogbnVtYmVyLCBub2RlOiBOb2RlKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBY3R1YWxpemEgZWwgYXJib2wgYm9ycmFuZG8gdG9kYSBsYSBkYXRhICwgc29sbyBjdWFuZG8gbm8gc2UgdXRpbGl6YSBwYWdpbmFjaW9uXG4gICAqL1xuICBwcml2YXRlIHJlZnJlc2hUcmVlKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgY29uc3QgZGF0YXNvdXJjZURhdGE6IE5vZGVbXSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFzb3VyY2VEYXRhO1xuICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gZGF0YXNvdXJjZURhdGE7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsaXphIGVsIGFyYm9sIGN1YW5kbyBzZSB1dGlsaXphIGxhIHBhZ2luYWNpb24gKEN1YW5kbyBubyAsIHV0aWxpY2UgZWwgbWV0b2RvIHJlZnJlc2hUcmVlKCkpXG4gICAqL1xuICBwcml2YXRlIHJlZnJlc2hUcmVlV2l0aFBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YXNvdXJjZURhdGE6IE5vZGVbXSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFzb3VyY2VEYXRhO1xuICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gZGF0YXNvdXJjZURhdGE7XG4gIH1cblxuXG5cblxuICBwcml2YXRlIGdvTmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgJiYgIXRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkKSB7XG4gICAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCA9IHRydWU7XG4gICAgICB0aGlzLnJhbmdlU2Nyb2xsZWQuZW1pdCh7XG4gICAgICAgIHBhZ2U6IHRoaXMudHJlZUhlbGlzYUNvbm5lY3QubmV4dFBhZ2UoKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWNlaXZlUGFnZShkYXRhOiBOb2RlW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkgeyB0aGlzLmRhdGEgPSB7IGlkOiBudWxsLCBuYW1lOiAncm9vdCcsIGlzU2VsZWN0ZWQ6IGZhbHNlIH07IH1cbiAgICBpZiAoIXRoaXMuZGF0YS5jaGlsZHJlbikgeyB0aGlzLmRhdGEuY2hpbGRyZW4gPSBuZXcgQXJyYXk8Tm9kZT4oKTsgdGhpcy50cmVlSGVsaXNhQ29ubmVjdCA9IG5ldyBUcmVlSGVsaXNhQ29ubmVjdDxOb2RlPigpOyB9XG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gdGhpcy5kYXRhLmNoaWxkcmVuLmNvbmNhdChkYXRhKTtcbiAgICB0aGlzLmRhdGEuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogTm9kZSkgPT4ge1xuICAgICAgdGhpcy5maWxsUGFyZW50KG5vZGUsIHRoaXMuZGF0YSk7XG4gICAgfSk7XG5cblxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbiA9IHRoaXMucmVvcmRlckJ5T3JkZXJJbmRleCh0aGlzLmRhdGEuY2hpbGRyZW4pO1xuXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSB0aGlzLmRhdGEuY2hpbGRyZW47XG4gICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSB0aGlzLmRhdGEuY2hpbGRyZW47XG4gICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc0xhc3RQYWdlID0gZGF0YS5sZW5ndGggPT09IDA7XG4gICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMbGVuYW4gZWwgY2FtcG8gcGFyZW50IGRlIHRvZG9zIGxvcyBub2RvcyBoaWpvc1xuICAgKi9cbiAgcHJpdmF0ZSBmaWxsUGFyZW50KG5vZGU6IE5vZGUsIHBhcmVudDogTm9kZSk6IHZvaWQge1xuXG4gICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGl0ZW06IE5vZGUpID0+IHtcbiAgICAgICAgdGhpcy5maWxsUGFyZW50KGl0ZW0sIG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogY29sb2NhIGNvbW8gdHJ1ZSBkZWwgaXNTZWxlY3RlZCBkZWwgbm9kbyBxdWUgY29uY3VlcmRlIGNvbiBlbCBpZFxuICAgKi9cbiAgcHJpdmF0ZSBzZWxlY3ROb2RlKG5vZGU6IE5vZGUsIGlkOiBudW1iZXIgfCBzdHJpbmcpOiBOb2RlIHtcblxuICAgIHRoaXMudXBTZWxlY3ROb2RlKG5vZGUpO1xuICAgIGlmICghISFub2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKG5vZGUuaWQgIT09IHVuZGVmaW5lZCAmJiBub2RlLmlkID09PSBpZCkge1xuICAgICAgbm9kZS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXhwYW5kQWxsUGFyZW50cyhub2RlKTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZHJlbiAhPSBudWxsKSB7XG4gICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgbGV0IHJlc3VsdDogTm9kZSA9IG51bGw7XG4gICAgICBmb3IgKGkgPSAwOyByZXN1bHQgPT0gbnVsbCAmJiBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSB0aGlzLnNlbGVjdE5vZGUobm9kZS5jaGlsZHJlbltpXSwgaWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGV4cGFuZEFsbFBhcmVudHMobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIGlmICghIW5vZGUgJiYgISFub2RlLnBhcmVudCkge1xuICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlKG5vZGUucGFyZW50KTtcbiAgICAgIHRoaXMuZXhwYW5kQWxsUGFyZW50cyhub2RlLnBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVsaW1pbmEgZWwgaXNTZWxlY3RlZCBkZSB0b2RvcyBsb3Mgbm9kb3NcbiAgICovXG4gIHByaXZhdGUgdXBTZWxlY3ROb2RlKG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICBpZiAoISFub2RlICYmIG5vZGUuaXNTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGlmICghIW5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZHJlbk5vZGUgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgIHRoaXMudXBTZWxlY3ROb2RlKGNoaWxkcmVuTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDbGFzc05vZGUobm9kZTogTm9kZSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjbGFzc05vZGU6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKG5vZGUuaXNTZWxlY3RlZCkge1xuICAgICAgY2xhc3NOb2RlLnB1c2goJ2lzU2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuY2xhc3NOb2RlKSB7XG4gICAgICBjbGFzc05vZGUucHVzaChub2RlLmNsYXNzTm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc05vZGU7XG4gIH1cblxuICBvbkVkaXRNb2RlKG5vZGU6IE5vZGUsIGVkaXRNb2RlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMobm9kZSkuZWRpdE1vZGUgPSBlZGl0TW9kZTtcbiAgfVxuXG4gIG9uU2VsZWN0T3B0aW9uKGV2ZW50OiBNYXRPcHRpb25TZWxlY3Rpb25DaGFuZ2UsIG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICBub2RlLmlzQ2hlY2tlZE9wdGlvbiA9IGV2ZW50LnNvdXJjZS5zZWxlY3RlZDtcbiAgICBpZiAobm9kZS5pc0NoZWNrZWRPcHRpb24pIHtcbiAgICAgIHRoaXMuY2hlY2tlZE9wdGlvbk5vZGUuZW1pdChub2RlLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bmNoZWNrZWRPcHRpb25Ob2RlLmVtaXQobm9kZS5pZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25zKG5vZGU6IE5vZGUpOiB7XG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgIGVkaXRNb2RlOiBib29sZWFuO1xufSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmhhcyhub2RlLmlkKSkge1xuICAgICAgdGhpcy5yZWxvYWRTZWxlY3RlZE9wdGlvbnMobm9kZSwgdGhpcy5zZWxlY3RlZE9wdGlvbnMuZ2V0KG5vZGUuaWQpLmVkaXRNb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWxvYWRTZWxlY3RlZE9wdGlvbnMobm9kZSwgZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZ2V0KG5vZGUuaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWxvYWRTZWxlY3RlZE9wdGlvbnMobm9kZTogTm9kZSwgZWRpdE1vZGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBhcnJheTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4gPSBuZXcgQXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oKTtcbiAgICBub2RlLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBOb2RlKSA9PiB7XG4gICAgICBpZiAob3B0aW9uLmlzQ2hlY2tlZE9wdGlvbikge1xuICAgICAgICBhcnJheS5wdXNoKG9wdGlvbi5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgb2JqOiB7XG4gICAgICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgICBlZGl0TW9kZTogYm9vbGVhbjtcbiAgICB9ID0geyBmb3JtQ29udHJvbDogbmV3IEZvcm1Db250cm9sKGFycmF5KSwgZWRpdE1vZGUgfTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5zZXQobm9kZS5pZCwgb2JqKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRvcm5hIGVsIHByaW1lciBOb2RlIHF1ZSBlbmN1ZW50cmUgc2VndW4gZWwgaWQgZW52aWFkbyBvIG51bGwgc2kgbm8gaGF5IG5pbmd1bm9cbiAgICogQHBhcmFtIGlkICBudW1iZXIgfCBzdHJpbmdcbiAgICogQHJldHVybnMgTm9kZSBvIG51bGwgc2kgbm8gaGF5IHVuIG5vZG8gY29uIGVzZSBpZFxuICAgKi9cbiAgZ2V0Tm9kZUJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE5vZGUge1xuICAgIGNvbnN0IHF1ZXVlOiBOb2RlW10gPSBbLi4udGhpcy5kYXRhU291cmNlLmRhdGFdO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjdXJyOiBOb2RlID0gcXVldWUuc2hpZnQoKTtcbiAgICAgIGlmIChjdXJyLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gY3VycjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghIWN1cnIuY2hpbGRyZW4pIHtcbiAgICAgICAgICBxdWV1ZS5wdXNoKC4uLmN1cnIuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVvcmRlckJ5T3JkZXJJbmRleChub2RlOiBOb2RlW10pOiBOb2RlW10ge1xuICAgIGlmICghIW5vZGUgJiYgbm9kZS5sZW5ndGggPiAwKSB7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIG5vZGUgPSBfLm9yZGVyQnkobm9kZSwgKHg6IE5vZGUpID0+IHgub3JkZXJJbmRleCwgWydhc2MnXSk7XG4gICAgICAgIG5vZGUuZm9yRWFjaCgoZWxlbWVudDogTm9kZSkgPT4ge1xuICAgICAgICAgIGlmICghIWVsZW1lbnQuY2hpbGRyZW4gJiYgZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuID0gdGhpcy5yZW9yZGVyQnlPcmRlckluZGV4KGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuXG4gIH1cblxuICAvLyNlbmRyZWdpb24gPT09PT09IE1ldG9kb3MgPT09PT09PT09PT09XG59XG4iXX0=