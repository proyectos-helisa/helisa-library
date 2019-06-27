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
        //#endregion ======= Events ========
        //#region  ======== Metodos =============
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
                _this.treeControl.expand(_this.treeControl.dataNodes[res]);
            }
        }));
        this.treeHelisaService.collapseOneNodeObservable
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res != undefined) {
                _this.treeControl.collapse(_this.treeControl.dataNodes[res]);
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
        console.log(node.id);
        console.log(node);
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
     * Actualiza el arbol
     */
    /**
     * Actualiza el arbol
     * @private
     * @return {?}
     */
    TreeHelisaComponent.prototype.refreshTree = /**
     * Actualiza el arbol
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
            return this.selectedOptions.get(node.id);
        else {
            /** @type {?} */
            var array_1 = new Array();
            node.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                if (option.isCheckedOption)
                    array_1.push(option.id);
            }));
            /** @type {?} */
            var obj = { formControl: new FormControl(array_1), editMode: false };
            this.selectedOptions.set(node.id, obj);
            return obj;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUk3Qyx1Q0FFQzs7O0lBREMsaUNBQWE7O0FBR2Y7SUEyREUsc0NBQXNDO0lBRXRDLDZCQUFvQixpQkFBbUMsRUFDN0MsTUFBYSxFQUNiLFVBQXFCO1FBRlgsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUM3QyxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWpEdkIsb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBWSxDQUFDOzs7OztRQVdyQyxvQkFBZSxHQUFXLElBQUksQ0FBQzs7OztRQU05QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7UUFLOUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7O1FB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TUFBTTsrQkFDTixNQUFNOzZCQUNOLE1BQU07aUNBQ04sTUFBTTtpQ0FDTixNQUFNO29DQUNOLE1BQU07c0NBQ04sTUFBTTs7SUFpV1QsMEJBQUM7Q0FBQSxBQW5aRCxJQW1aQztTQTNZWSxtQkFBbUI7Ozs7OztJQUc5QixnREFBbUQ7O0lBQ25ELHVDQUFxQjs7SUFDckIsbUNBQXFDOzs7OztJQUNyQyw4Q0FBOEM7Ozs7O0lBSTlDLG1DQUFtQjs7Ozs7O0lBT25CLDhDQUF3Qzs7Ozs7SUFNeEMsc0NBQXdEOzs7OztJQUt4RCxxQ0FBNEM7Ozs7OztJQU01QyxvQ0FBMkM7O0lBQzNDLDZDQUF1RDs7SUFDdkQsNENBQWdFOztJQUNoRSwyQ0FBNkQ7O0lBQzdELHlDQUEyRDs7SUFDM0QsNkNBQXNFOztJQUN0RSw2Q0FBc0U7O0lBQ3RFLGdEQUF5RTs7SUFDekUsa0RBQTJFOztJQUUzRSwwQ0FBaUU7O0lBQ2pFLHlDQUFpRDs7SUFHakQsNENBQThCOztJQUM5QiwwQ0FBeUI7Ozs7O0lBZ016Qix1Q0FBa0Y7Ozs7O0lBNUx0RSxnREFBMkM7Ozs7O0lBQ3JELHFDQUFxQjs7Ozs7SUFDckIseUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5lc3RlZFRyZWVDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xyXG5pbXBvcnQgeyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZSwgTWF0VHJlZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XHJcbmltcG9ydCB7IFRyZWVIZWxpc2FTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLWhlbGlzYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBUcmVlSGVsaXNhQ29ubmVjdCB9IGZyb20gJy4vdHJlZS1oZWxpc2EtY29ubmVjdCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RUcmVlSGVsaXNhIHtcclxuICBwYWdlOiBudW1iZXI7ICBcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWwtdHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtaGVsaXNhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90cmVlLWhlbGlzYS5jb21wb25lbnQuc2FzcyddLFxyXG4gIGhvc3Q6e1xyXG4gICAgJyhkb2N1bWVudDprZXl1cCknOiAnb25LZXlEb3duKCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZUhlbGlzYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgLy8jcmVnaW9uICA9PT09PT0gVmFyaWFibGVzID09PT09PT09PT09PT1cclxuICBwcml2YXRlIHRyZWVIZWxpc2FDb25uZWN0OiBUcmVlSGVsaXNhQ29ubmVjdDxOb2RlPjtcclxuICBmb3JtRWRpdDpGb3JtQ29udHJvbDtcclxuICBAVmlld0NoaWxkKCd0cmVlJykgdHJlZTpNYXRUcmVlPGFueT47XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZE9wdGlvbnMgPSBuZXcgTWFwPGFueSwgYW55PigpO1xyXG4gIC8qKlxyXG4gICAqIERhdG9zIGRlbCBBcmJvbFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRhdGE6Tm9kZTtcclxuXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogRXN0YWJsZWNlIHNpIHNlIG1vc3RyYXJhbiBsYXMgb3BjaW9uZXMgZGUgXHJcbiAgICogQ3JlYWNpb24sIGVkaWNpw7NuIHkgZWxpbWluYWNpb24gZGVsIG5vZG9cclxuICAgKi9cclxuICBASW5wdXQoKSBzaG93T3B0aW9uc05vZGU6Ym9vbGVhbiA9IHRydWU7IFxyXG4gIFxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGVsIGlkIGRlbCBub2RvIHJlbW92aWRvXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSB1biBub2RvIGVkaXRhZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgZWRpdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxOb2RlPigpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIHVuIG5vZG8gc2luIGlkIGRlbCBub2RvICwgcGVybyBzaSBjb24gZWwgcGFyZW50XHJcbiAgICogcGFyYSBjb25vY2VyIGEgY3VhbCBmdWUgYcOxYWRpZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgYWRkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcbiAgQE91dHB1dCgpIGNvbGxhcHNlUGFyZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByYW5nZVNjcm9sbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0VHJlZUhlbGlzYT4oKTtcclxuICBAT3V0cHV0KCkgbm9kZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGRvYmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkga2V5cHJlc3NEZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIGtleXByZXNzSW5zZXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSBjaGVja2VkT3B0aW9uTm9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkgdW5jaGVja2VkT3B0aW9uTm9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBcclxuICB0cmVlQ29udHJvbCA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxOb2RlPihub2RlID0+IG5vZGUuY2hpbGRyZW4pO1xyXG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8Tm9kZT4oKTtcclxuXHJcblxyXG4gIGlzU2luZ2xlQ2xpY2s6IEJvb2xlYW4gPSB0cnVlOyAgXHJcbiAgY3VycmVudE5vZGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAvLyNlbmRyZWdpb24gPT09PT09IFZhcmlhYmxlcyA9PT09PT09PVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVIZWxpc2FTZXJ2aWNlOlRyZWVIZWxpc2FTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOkVsZW1lbnRSZWYpIHsgICAgXHJcbiAgICAgIFxyXG4gICAgLy9jYXJnYXIgZGF0b3MgcGFzYWRvcyBwb3IgZWwgQElucHV0XHJcbiAgICBpZiAoISF0aGlzLmRhdGEpIHsgICAgICBcclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICAgIHRoaXMucmVjZWl2ZVBhZ2UoZGF0YS5jaGlsZHJlbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdOyAgICAgXHJcbiAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gW107IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgbmdPbkluaXQoKSB7ICAgICBcclxuICAgIC8vIHNpIHNlIGNhcmdhbiBkYXRvcyBwb3IgbWVkaW8gZGVsIHNlcnZpY2lvXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLmRhdGFTb3VyY2VPYnNlcnZhYmxlICAgIFxyXG4gICAgLnN1YnNjcmliZSgocmVzKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgIGlmKCEhcmVzICYmICEhcmVzLmNoaWxkcmVuKXsgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVjZWl2ZVBhZ2UocmVzLmNoaWxkcmVuKVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gW107XHJcbiAgICAgIH0gICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlLCBzaSBjYW1iaWEgZWwgbm9kbyBzZWxlY2Npb25hZG8gcG9yIG1lZGlvIGRlbCBzZXJ2aWNpb1xyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlU2VsZWN0ZWRcclxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xyXG4gICAgICAgIGlmKCEhdGhpcy5kYXRhICYmICEhdGhpcy5kYXRhLmNoaWxkcmVuKVxyXG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEscmVzKTtcclxuICAgICAgfSlcclxuXHJcbiAgICBcclxuICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5yZWZyZXNoVHJlZU9ic2VydmFibGVcclxuICAgICAgLnN1YnNjcmliZShyZXM9PntcclxuICAgICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICAgIH0pICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkgeyAgICAgXHJcbiAgICB0aGlzLnRyZWVIZWxpc2FTZXJ2aWNlLm5vZGVFeHBhbmQuc3Vic2NyaWJlKHJlcz0+e1xyXG4gICAgICBpZihyZXMgIT0gbnVsbCl7XHJcbiAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgIHRoaXMudHJlZS50cmVlQ29udHJvbC5leHBhbmRBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlQ29sbGFwc2Uuc3Vic2NyaWJlKHJlcz0+e1xyXG4gICAgICBpZihyZXMgIT0gbnVsbCl7XHJcbiAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgIHRoaXMudHJlZS50cmVlQ29udHJvbC5jb2xsYXBzZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5leHBhbmRPbmVOb2RlT2JzZXJ2YWJsZVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7ICAgICAgICBcclxuICAgICAgICBpZiAocmVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmQodGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXNbcmVzXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5jb2xsYXBzZU9uZU5vZGVPYnNlcnZhYmxlXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHsgICAgICAgIFxyXG4gICAgICAgIGlmIChyZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzW3Jlc10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyNyZWdpb24gID09PT09PSBFdmVudHMgPT09PT09PT09PT1cclxuICBvblJlZGlyZWN0KG5vZGU6Tm9kZSl7XHJcblxyXG4gICAgdGhpcy5pc1NpbmdsZUNsaWNrID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNTaW5nbGVDbGljayl7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHRoaXMuZGF0YSxub2RlLmlkKTsgICAgXHJcblxyXG4gICAgICAgICAgICAgIC8vIGlmKCEhbm9kZSAmJiAhbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgICAgICAgICAgaWYoISFub2RlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZVNlbGVjdGVkLmVtaXQobm9kZS5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gbm9kZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSwzNTApICAgXHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChldmVudCkge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgaWYgKChlbGVtZW50Lm9mZnNldEhlaWdodCArIGVsZW1lbnQuc2Nyb2xsVG9wKSA+PSBlbGVtZW50LnNjcm9sbEhlaWdodCkgeyAgICAgIFxyXG4gICAgICB0aGlzLmdvTmV4dFBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRWRpdChub2RlOk5vZGUpe1xyXG4gICAgY29uc29sZS5sb2cobm9kZS5pZClcclxuICAgIGNvbnNvbGUubG9nKG5vZGUpXHJcbiAgICBub2RlLmlzRWRpdGFibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25BZGQobm9kZTpOb2RlKXtcclxuICAgIC8vIHNpIG5vIHRpZW5lIGhpam9zIGluc3RhbmNpYXIgZWwgYXJyYXlcclxuICAgIGlmKCFub2RlLmNoaWxkcmVuKXtcclxuICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgbm9kZS5jaGlsZHJlbi5wdXNoKFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbmFtZTogXCJcIiwgICAgICAgXHJcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgcGFyZW50IDogbm9kZSxcclxuICAgICAgICBpc0VkaXRhYmxlIDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICApOyAgICAgXHJcbiAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZShub2RlOk5vZGUpeyBcclxuICAgIC8vIFJlbXVldmUgZWwgbm9kbyB1dGlsaXphbmRvIGxhIGxpYnJlcmlhIGRlIGxvZGFzaCAgIFxyXG4gICAgXy5yZW1vdmUobm9kZS5wYXJlbnQuY2hpbGRyZW4sIG5vZGUpO1xyXG4gICAgXHJcbiAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICB0aGlzLnJlbW92ZWQuZW1pdChub2RlLmlkKTtcclxuICB9XHJcblxyXG4gIG9uRWRpdGVkKG5vZGU6Tm9kZSx2YWx1ZTphbnkpe1xyXG4gICAgXHJcbiAgICAgIG5vZGUubmFtZSA9IHZhbHVlO1xyXG5cclxuICAgICAgaWYobm9kZS5pZCA9PSBudWxsICYmIG5vZGUubmFtZSA9PSBcIlwiKXsgICAgICAgICAgICAgIFxyXG4gICAgICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hUcmVlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihub2RlLmlkICYmIG5vZGUuaWQgIT0gbnVsbCAmJiBub2RlLm5hbWUudHJpbSgpICE9PSBcIlwiKXtcclxuICAgICAgICB0aGlzLmVkaXRlZC5lbWl0KG5vZGUpO1xyXG4gICAgICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgICB9ZWxzZSBpZighIW5vZGUuaWQgJiYgbm9kZS5pZCA9PSBudWxsICYmIG5vZGUubmFtZS50cmltKCkgIT09IFwiXCIpe1xyXG4gICAgICAgIHRoaXMuYWRkZWQuZW1pdChub2RlKTtcclxuICAgICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgfSAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwobm9kZTpOb2RlLHZhbHVlOnN0cmluZyl7XHJcbiAgICAvLyBTaSBubyB0aWVuZSBpZCBwb3Igc2VyIHVuIG51ZXZvIGl0ZW0sIGxvIGVsaW1pbmFcclxuICAgIGlmKG5vZGUuaWQgPT0gbnVsbCl7XHJcbiAgICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpOyAgXHJcbiAgICB9XHJcblxyXG4gICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7IFxyXG4gIH1cclxuXHJcbiAgb25EYmxDbGljayhub2RlOk5vZGUpe1xyXG4gICAgdGhpcy5pc1NpbmdsZUNsaWNrID0gZmFsc2U7XHJcbiAgICB0aGlzLmRvYmxlQ2xpY2suZW1pdChub2RlLmlkKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihldmVudDpLZXlib2FyZEV2ZW50KXsgICAgXHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICBjYXNlICdEZWxldGUnOlxyXG4gICAgICAgIHRoaXMua2V5cHJlc3NEZWxldGUuZW1pdCgoISF0aGlzLmN1cnJlbnROb2RlICYmIHRoaXMuY3VycmVudE5vZGUuaWQpP3RoaXMuY3VycmVudE5vZGUuaWQ6bnVsbClcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnSW5zZXJ0JzpcclxuICAgICAgICB0aGlzLmtleXByZXNzSW5zZXJ0LmVtaXQoKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLmlkKT90aGlzLmN1cnJlbnROb2RlLmlkOm51bGwpXHJcbiAgICAgICAgYnJlYWs7ICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uID09PT09PT0gRXZlbnRzID09PT09PT09XHJcblxyXG5cclxuXHJcbiAgLy8jcmVnaW9uICA9PT09PT09PSBNZXRvZG9zID09PT09PT09PT09PT1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpY2Egc2kgZWwgbm9kbyB0aWVuZSBoaWpvc1xyXG4gICAqL1xyXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogTm9kZSkgPT4gISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogT2J0aWVuZSBsYSBkZXNjcmlwY2lvbiBjb21wbGV0YSBkZWwgbm9kb1xyXG4gICAqIEBleGFtcGxlIE5vZG8gcGFkcmUsbm9kbyBoaWpvLG5vZG8gbmlldG9cclxuICAgKiBAcGFyYW0gbm9kZSBEZWJlIHRlbmVyIHRvZG9zIGxvcyBwYXJlbnQgbGxlbm9zIGhhY2lhIGFycmliYVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVzY3JpcHRpb24obm9kZTpOb2RlKTpzdHJpbmd7XHJcbiAgICAgIGxldCByZXN1bHQ6c3RyaW5nW109W25vZGUubmFtZV07ICAgICAgICBcclxuICAgICAgbGV0IGNvbmNhdDpzdHJpbmc9XCJcIjtcclxuXHJcbiAgICAgIGlmKG5vZGUucGFyZW50KXsgICAgICAgICAgXHJcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5nZXREZXNjcmlwdGlvbihub2RlLnBhcmVudCkpXHJcbiAgICAgIH0gICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgaWYocmVzdWx0Lmxlbmd0aCA9PSAxKVxyXG4gICAgICAgICAgcmV0dXJuIG5vZGUubmFtZTtcclxuXHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXZlcnNlKCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IGVsZW1lbnQgPSByZXN1bHRbaV07XHJcbiAgICAgICAgICBjb25jYXQgPSBjb25jYXQgKyBlbGVtZW50ICsgKChpID09IHJlc3VsdC5sZW5ndGgtMSk/XCJcIjpcIixcIik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIHJldHVybiBjb25jYXQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0dWFsaXphIGVsIGFyYm9sXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWZyZXNoVHJlZSgpe1xyXG4gICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhU291cmNlLmRhdGE7IFxyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBudWxsOyBcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gX2RhdGE7XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IF9kYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb05leHRQYWdlKCkge1xyXG4gICAgaWYgKCF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgJiYgIXRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkKSB7XHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yYW5nZVNjcm9sbGVkLmVtaXQoe1xyXG4gICAgICAgIHBhZ2U6IHRoaXMudHJlZUhlbGlzYUNvbm5lY3QubmV4dFBhZ2UoKSAgICAgICAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWNlaXZlUGFnZShkYXRhOiBOb2RlW10pIHsgICAgXHJcbiAgICBpZighdGhpcy5kYXRhKXsgdGhpcy5kYXRhID0ge2lkOm51bGwsbmFtZTpcInJvb3RcIixpc1NlbGVjdGVkOmZhbHNlfX1cclxuICAgIGlmICghdGhpcy5kYXRhLmNoaWxkcmVuKSB7IHRoaXMuZGF0YS5jaGlsZHJlbiA9IG5ldyBBcnJheTxOb2RlPigpOyB0aGlzLnRyZWVIZWxpc2FDb25uZWN0ID0gbmV3IFRyZWVIZWxpc2FDb25uZWN0PE5vZGU+KCk7IH0gICAgXHJcbiAgICB0aGlzLmRhdGEuY2hpbGRyZW4gPSB0aGlzLmRhdGEuY2hpbGRyZW4uY29uY2F0KGRhdGEpO1xyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuLmZvckVhY2gobm9kZT0+e1xyXG4gICAgICB0aGlzLmZpbGxQYXJlbnQobm9kZSx0aGlzLmRhdGEpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMuZGF0YS5jaGlsZHJlbjsgICAgXHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IHRoaXMuZGF0YS5jaGlsZHJlbjtcclxuICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNMYXN0UGFnZSA9IGRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc1VzZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExsZW5hbiBlbCBjYW1wbyBwYXJlbnQgZGUgdG9kb3MgbG9zIG5vZG9zIGhpam9zXHJcbiAgICogQHBhcmFtIG5vZGUgXHJcbiAgICogQHBhcmFtIHBhcmVudCBcclxuICAgKi9cclxuICBwcml2YXRlIGZpbGxQYXJlbnQobm9kZTpOb2RlLHBhcmVudDpOb2RlKXtcclxuXHJcbiAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcclxuICAgIGlmKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICB0aGlzLmZpbGxQYXJlbnQoaXRlbSxub2RlKTsgICBcclxuICAgICAgfSkgICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBjb2xvY2EgY29tbyB0cnVlIGRlbCBpc1NlbGVjdGVkIGRlbCBub2RvIHF1ZSBjb25jdWVyZGUgY29uIGVsIGlkXHJcbiAgICogQHBhcmFtIG5vZGUgXHJcbiAgICogQHBhcmFtIGlkIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2VsZWN0Tm9kZShub2RlOk5vZGUsaWQ6bnVtYmVyfHN0cmluZyl7IFxyXG4gICAgICBcclxuICAgICAgdGhpcy51cFNlbGVjdE5vZGUobm9kZSlcclxuICAgICAgXHJcbiAgICAgIGlmKG5vZGUuaWQgPT0gaWQpe1xyXG4gICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWUgICBcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgfWVsc2UgaWYgKG5vZGUuY2hpbGRyZW4gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgZm9yKGk9MDsgcmVzdWx0ID09IG51bGwgJiYgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zZWxlY3ROb2RlKG5vZGUuY2hpbGRyZW5baV0sIGlkKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7IFxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEVsaW1pbmEgZWwgaXNTZWxlY3RlZCBkZSB0b2RvcyBsb3Mgbm9kb3NcclxuICAgKiBAcGFyYW0gbm9kZSBcclxuICAgKi9cclxuICBwcml2YXRlIHVwU2VsZWN0Tm9kZShub2RlOk5vZGUpe1xyXG4gICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgIGlmKCEhbm9kZS5jaGlsZHJlbilcclxuICAgICBmb3IodmFyIGk9MDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLnVwU2VsZWN0Tm9kZShub2RlLmNoaWxkcmVuW2ldKTsgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc05vZGUobm9kZTogTm9kZSk6IHN0cmluZ1tde1xyXG4gICAgbGV0IGNsYXNzTm9kZSA9IFtdO1xyXG4gICAgaWYobm9kZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgIGNsYXNzTm9kZS5wdXNoKFwiaXNTZWxlY3RlZFwiKTtcclxuICAgIH1cclxuICAgIGlmKG5vZGUuY2xhc3NOb2RlKXtcclxuICAgICAgY2xhc3NOb2RlLnB1c2gobm9kZS5jbGFzc05vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzTm9kZTtcclxuICB9XHJcblxyXG4gIG9uRWRpdE1vZGUobm9kZSwgZWRpdE1vZGUpIHtcclxuICAgIHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKG5vZGUpLmVkaXRNb2RlID0gZWRpdE1vZGU7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdE9wdGlvbihldmVudCwgbm9kZSkge1xyXG4gICAgbm9kZS5pc0NoZWNrZWRPcHRpb24gPSBldmVudC5zb3VyY2Uuc2VsZWN0ZWQ7XHJcbiAgICBpZiAobm9kZS5pc0NoZWNrZWRPcHRpb24pXHJcbiAgICAgIHRoaXMuY2hlY2tlZE9wdGlvbk5vZGUuZW1pdChub2RlLmlkKTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy51bmNoZWNrZWRPcHRpb25Ob2RlLmVtaXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZE9wdGlvbnMobm9kZTogTm9kZSk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnMuaGFzKG5vZGUuaWQpKSBcclxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmdldChub2RlLmlkKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBhcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICBub2RlLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgIGlmIChvcHRpb24uaXNDaGVja2VkT3B0aW9uKVxyXG4gICAgICAgICAgYXJyYXkucHVzaChvcHRpb24uaWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3Qgb2JqID0ge2Zvcm1Db250cm9sOiBuZXcgRm9ybUNvbnRyb2woYXJyYXkpLCBlZGl0TW9kZTogZmFsc2V9O1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5zZXQobm9kZS5pZCwgb2JqKTtcclxuICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT0gTWV0b2RvcyA9PT09PT09PT09PT1cclxufVxyXG4iXX0=