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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oZWxpc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGVsaXNhLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyZWUtaGVsaXNhL3RyZWUtaGVsaXNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUk3Qyx1Q0FFQzs7O0lBREMsaUNBQWE7O0FBR2Y7SUEyREUsc0NBQXNDO0lBRXRDLDZCQUFvQixpQkFBbUMsRUFDN0MsTUFBYSxFQUNiLFVBQXFCO1FBRlgsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUM3QyxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWpEdkIsb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBWSxDQUFDOzs7OztRQVdyQyxvQkFBZSxHQUFXLElBQUksQ0FBQzs7OztRQU05QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7UUFLOUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7O1FB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M0MsSUFBSSxFQUFDO3dCQUNILGtCQUFrQixFQUFFLG1CQUFtQjtxQkFDeEM7O2lCQUNGOzs7O2dCQW5CUSxpQkFBaUI7Z0JBQ2pCLE1BQU07Z0JBTG9FLFVBQVU7Ozt1QkE2QjFGLFNBQVMsU0FBQyxNQUFNO3VCQUtoQixLQUFLO2tDQU9MLEtBQUs7MEJBTUwsTUFBTTt5QkFLTixNQUFNO3dCQU1OLE1BQU07aUNBQ04sTUFBTTtnQ0FDTixNQUFNOytCQUNOLE1BQU07NkJBQ04sTUFBTTtpQ0FDTixNQUFNO2lDQUNOLE1BQU07b0NBQ04sTUFBTTtzQ0FDTixNQUFNOztJQW9XVCwwQkFBQztDQUFBLEFBdFpELElBc1pDO1NBOVlZLG1CQUFtQjs7Ozs7O0lBRzlCLGdEQUFtRDs7SUFDbkQsdUNBQXFCOztJQUNyQixtQ0FBcUM7Ozs7O0lBQ3JDLDhDQUE4Qzs7Ozs7SUFJOUMsbUNBQW1COzs7Ozs7SUFPbkIsOENBQXdDOzs7OztJQU14QyxzQ0FBd0Q7Ozs7O0lBS3hELHFDQUE0Qzs7Ozs7O0lBTTVDLG9DQUEyQzs7SUFDM0MsNkNBQXVEOztJQUN2RCw0Q0FBZ0U7O0lBQ2hFLDJDQUE2RDs7SUFDN0QseUNBQTJEOztJQUMzRCw2Q0FBc0U7O0lBQ3RFLDZDQUFzRTs7SUFDdEUsZ0RBQXlFOztJQUN6RSxrREFBMkU7O0lBRTNFLDBDQUFpRTs7SUFDakUseUNBQWlEOztJQUdqRCw0Q0FBOEI7O0lBQzlCLDBDQUF5Qjs7Ozs7SUFnTXpCLHVDQUFrRjs7Ozs7SUE1THRFLGdEQUEyQzs7Ozs7SUFDckQscUNBQXFCOzs7OztJQUNyQix5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmVzdGVkVHJlZUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XHJcbmltcG9ydCB7IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlLCBNYXRUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcclxuaW1wb3J0IHsgVHJlZUhlbGlzYVNlcnZpY2UgfSBmcm9tICcuL3RyZWUtaGVsaXNhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFRyZWVIZWxpc2FDb25uZWN0IH0gZnJvbSAnLi90cmVlLWhlbGlzYS1jb25uZWN0JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFRyZWVIZWxpc2Ege1xyXG4gIHBhZ2U6IG51bWJlcjsgIFxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlbC10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS1oZWxpc2EuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RyZWUtaGVsaXNhLmNvbXBvbmVudC5zYXNzJ10sXHJcbiAgaG9zdDp7XHJcbiAgICAnKGRvY3VtZW50OmtleXVwKSc6ICdvbktleURvd24oJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVlSGVsaXNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvLyNyZWdpb24gID09PT09PSBWYXJpYWJsZXMgPT09PT09PT09PT09PVxyXG4gIHByaXZhdGUgdHJlZUhlbGlzYUNvbm5lY3Q6IFRyZWVIZWxpc2FDb25uZWN0PE5vZGU+O1xyXG4gIGZvcm1FZGl0OkZvcm1Db250cm9sO1xyXG4gIEBWaWV3Q2hpbGQoJ3RyZWUnKSB0cmVlOk1hdFRyZWU8YW55PjtcclxuICBwcml2YXRlIHNlbGVjdGVkT3B0aW9ucyA9IG5ldyBNYXA8YW55LCBhbnk+KCk7XHJcbiAgLyoqXHJcbiAgICogRGF0b3MgZGVsIEFyYm9sXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0YTpOb2RlO1xyXG5cclxuICBcclxuICAvKipcclxuICAgKiBFc3RhYmxlY2Ugc2kgc2UgbW9zdHJhcmFuIGxhcyBvcGNpb25lcyBkZSBcclxuICAgKiBDcmVhY2lvbiwgZWRpY2nDs24geSBlbGltaW5hY2lvbiBkZWwgbm9kb1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dPcHRpb25zTm9kZTpib29sZWFuID0gdHJ1ZTsgXHJcbiAgXHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgZWwgaWQgZGVsIG5vZG8gcmVtb3ZpZG9cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIHVuIG5vZG8gZWRpdGFkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE5vZGU+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW4gbm9kbyBzaW4gaWQgZGVsIG5vZG8gLCBwZXJvIHNpIGNvbiBlbCBwYXJlbnRcclxuICAgKiBwYXJhIGNvbm9jZXIgYSBjdWFsIGZ1ZSBhw7FhZGlkb1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBhZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Tm9kZT4oKTtcclxuICBAT3V0cHV0KCkgY29sbGFwc2VQYXJlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJhbmdlU2Nyb2xsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlcXVlc3RUcmVlSGVsaXNhPigpO1xyXG4gIEBPdXRwdXQoKSBub2RlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgZG9ibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBrZXlwcmVzc0RlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgc3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkga2V5cHJlc3NJbnNlcnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZyB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIGNoZWNrZWRPcHRpb25Ob2RlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSB1bmNoZWNrZWRPcHRpb25Ob2RlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmcgfCBudWxsPigpO1xyXG4gIFxyXG4gIHRyZWVDb250cm9sID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPE5vZGU+KG5vZGUgPT4gbm9kZS5jaGlsZHJlbik7XHJcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxOb2RlPigpO1xyXG5cclxuXHJcbiAgaXNTaW5nbGVDbGljazogQm9vbGVhbiA9IHRydWU7ICBcclxuICBjdXJyZW50Tm9kZTogTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT0gVmFyaWFibGVzID09PT09PT09XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZUhlbGlzYVNlcnZpY2U6VHJlZUhlbGlzYVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6RWxlbWVudFJlZikgeyAgICBcclxuICAgICAgXHJcbiAgICAvL2NhcmdhciBkYXRvcyBwYXNhZG9zIHBvciBlbCBASW5wdXRcclxuICAgIGlmICghIXRoaXMuZGF0YSkgeyAgICAgIFxyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgICAgdGhpcy5yZWNlaXZlUGFnZShkYXRhLmNoaWxkcmVuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW107ICAgICBcclxuICAgICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBbXTsgXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBuZ09uSW5pdCgpIHsgICAgIFxyXG4gICAgLy8gc2kgc2UgY2FyZ2FuIGRhdG9zIHBvciBtZWRpbyBkZWwgc2VydmljaW9cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZGF0YVNvdXJjZU9ic2VydmFibGVcclxuICAgIC5zdWJzY3JpYmUoKHJlcykgPT4geyAgICAgICAgICAgIFxyXG4gICAgICBpZighIXJlcyAmJiAhIXJlcy5jaGlsZHJlbil7ICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLnJlY2VpdmVQYWdlKHJlcy5jaGlsZHJlbilcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2RlcyA9IFtdO1xyXG4gICAgICB9ICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSwgc2kgY2FtYmlhIGVsIG5vZG8gc2VsZWNjaW9uYWRvIHBvciBtZWRpbyBkZWwgc2VydmljaW9cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZVNlbGVjdGVkXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcclxuICAgICAgICBpZighIXRoaXMuZGF0YSAmJiAhIXRoaXMuZGF0YS5jaGlsZHJlbilcclxuICAgICAgICB0aGlzLnNlbGVjdE5vZGUodGhpcy5kYXRhLHJlcyk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgXHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UucmVmcmVzaFRyZWVPYnNlcnZhYmxlXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzPT57XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgICB9KSAgICAgICAgICBcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgICAgIFxyXG4gICAgdGhpcy50cmVlSGVsaXNhU2VydmljZS5ub2RlRXhwYW5kLnN1YnNjcmliZShyZXM9PntcclxuICAgICAgaWYocmVzICE9IG51bGwpe1xyXG4gICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZXhwYW5kQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2Uubm9kZUNvbGxhcHNlLnN1YnNjcmliZShyZXM9PntcclxuICAgICAgaWYocmVzICE9IG51bGwpe1xyXG4gICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuY29sbGFwc2VBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuZXhwYW5kT25lTm9kZU9ic2VydmFibGVcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4geyAgICAgICAgXHJcbiAgICAgICAgaWYgKHJlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzW3Jlc10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMudHJlZUhlbGlzYVNlcnZpY2UuY29sbGFwc2VPbmVOb2RlT2JzZXJ2YWJsZVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7ICAgICAgICBcclxuICAgICAgICBpZiAocmVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy50cmVlQ29udHJvbC5jb2xsYXBzZSh0aGlzLnRyZWVDb250cm9sLmRhdGFOb2Rlc1tyZXNdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8jcmVnaW9uICA9PT09PT0gRXZlbnRzID09PT09PT09PT09XHJcbiAgb25SZWRpcmVjdChub2RlOk5vZGUpe1xyXG5cclxuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzU2luZ2xlQ2xpY2spe1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZSh0aGlzLmRhdGEsbm9kZS5pZCk7ICAgIFxyXG5cclxuICAgICAgICAgICAgICAvLyBpZighIW5vZGUgJiYgIW5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgICAgICAgIGlmKCEhbm9kZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVTZWxlY3RlZC5lbWl0KG5vZGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sMzUwKSAgIFxyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGlmICgoZWxlbWVudC5vZmZzZXRIZWlnaHQgKyBlbGVtZW50LnNjcm9sbFRvcCkgPj0gZWxlbWVudC5zY3JvbGxIZWlnaHQpIHsgICAgICBcclxuICAgICAgdGhpcy5nb05leHRQYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVkaXQobm9kZTpOb2RlKXtcclxuICAgIGNvbnNvbGUubG9nKG5vZGUuaWQpXHJcbiAgICBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgbm9kZS5pc0VkaXRhYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uQWRkKG5vZGU6Tm9kZSl7XHJcbiAgICAvLyBzaSBubyB0aWVuZSBoaWpvcyBpbnN0YW5jaWFyIGVsIGFycmF5XHJcbiAgICBpZighbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxuICAgIG5vZGUuY2hpbGRyZW4ucHVzaChcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsICAgICAgIFxyXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHBhcmVudCA6IG5vZGUsXHJcbiAgICAgICAgaXNFZGl0YWJsZSA6IHRydWVcclxuICAgICAgfVxyXG4gICAgKTsgICAgIFxyXG4gICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGUobm9kZTpOb2RlKXsgXHJcbiAgICAvLyBSZW11ZXZlIGVsIG5vZG8gdXRpbGl6YW5kbyBsYSBsaWJyZXJpYSBkZSBsb2Rhc2ggICBcclxuICAgIF8ucmVtb3ZlKG5vZGUucGFyZW50LmNoaWxkcmVuLCBub2RlKTtcclxuICAgIFxyXG4gICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgdGhpcy5yZW1vdmVkLmVtaXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRlZChub2RlOk5vZGUsdmFsdWU6YW55KXtcclxuICAgIFxyXG4gICAgICBub2RlLm5hbWUgPSB2YWx1ZTtcclxuXHJcbiAgICAgIGlmKG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUgPT0gXCJcIil7ICAgICAgICAgICAgICBcclxuICAgICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVHJlZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYobm9kZS5pZCAmJiBub2RlLmlkICE9IG51bGwgJiYgbm9kZS5uYW1lLnRyaW0oKSAhPT0gXCJcIil7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWQuZW1pdChub2RlKTtcclxuICAgICAgICBub2RlLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgfWVsc2UgaWYoISFub2RlLmlkICYmIG5vZGUuaWQgPT0gbnVsbCAmJiBub2RlLm5hbWUudHJpbSgpICE9PSBcIlwiKXtcclxuICAgICAgICB0aGlzLmFkZGVkLmVtaXQobm9kZSk7XHJcbiAgICAgICAgbm9kZS5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICAgIH0gICAgICAgICBcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKG5vZGU6Tm9kZSx2YWx1ZTpzdHJpbmcpe1xyXG4gICAgLy8gU2kgbm8gdGllbmUgaWQgcG9yIHNlciB1biBudWV2byBpdGVtLCBsbyBlbGltaW5hXHJcbiAgICBpZihub2RlLmlkID09IG51bGwpe1xyXG4gICAgICBfLnJlbW92ZShub2RlLnBhcmVudC5jaGlsZHJlbiwgbm9kZSk7XHJcbiAgICAgIHRoaXMucmVmcmVzaFRyZWUoKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIG5vZGUuaXNFZGl0YWJsZSA9IGZhbHNlOyBcclxuICB9XHJcblxyXG4gIG9uRGJsQ2xpY2sobm9kZTpOb2RlKXtcclxuICAgIHRoaXMuaXNTaW5nbGVDbGljayA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb2JsZUNsaWNrLmVtaXQobm9kZS5pZCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZXZlbnQ6S2V5Ym9hcmRFdmVudCl7ICAgIFxyXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSAnRGVsZXRlJzpcclxuICAgICAgICB0aGlzLmtleXByZXNzRGVsZXRlLmVtaXQoKCEhdGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLmlkKT90aGlzLmN1cnJlbnROb2RlLmlkOm51bGwpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0luc2VydCc6XHJcbiAgICAgICAgdGhpcy5rZXlwcmVzc0luc2VydC5lbWl0KCghIXRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS5pZCk/dGhpcy5jdXJyZW50Tm9kZS5pZDpudWxsKVxyXG4gICAgICAgIGJyZWFrOyAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT09IEV2ZW50cyA9PT09PT09PVxyXG5cclxuXHJcblxyXG4gIC8vI3JlZ2lvbiAgPT09PT09PT0gTWV0b2RvcyA9PT09PT09PT09PT09XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWNhIHNpIGVsIG5vZG8gdGllbmUgaGlqb3NcclxuICAgKi9cclxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IE5vZGUpID0+ICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9idGllbmUgbGEgZGVzY3JpcGNpb24gY29tcGxldGEgZGVsIG5vZG9cclxuICAgKiBAZXhhbXBsZSBOb2RvIHBhZHJlLG5vZG8gaGlqbyxub2RvIG5pZXRvXHJcbiAgICogQHBhcmFtIG5vZGUgRGViZSB0ZW5lciB0b2RvcyBsb3MgcGFyZW50IGxsZW5vcyBoYWNpYSBhcnJpYmFcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldERlc2NyaXB0aW9uKG5vZGU6Tm9kZSk6c3RyaW5ne1xyXG4gICAgICBsZXQgcmVzdWx0OnN0cmluZ1tdPVtub2RlLm5hbWVdOyAgICAgICAgXHJcbiAgICAgIGxldCBjb25jYXQ6c3RyaW5nPVwiXCI7XHJcblxyXG4gICAgICBpZihub2RlLnBhcmVudCl7ICAgICAgICAgIFxyXG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZ2V0RGVzY3JpcHRpb24obm9kZS5wYXJlbnQpKVxyXG4gICAgICB9ICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgIGlmKHJlc3VsdC5sZW5ndGggPT0gMSlcclxuICAgICAgICAgIHJldHVybiBub2RlLm5hbWU7XHJcblxyXG4gICAgICByZXN1bHQgPSByZXN1bHQucmV2ZXJzZSgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHsgICAgICAgICAgICBcclxuICAgICAgICAgIGxldCBlbGVtZW50ID0gcmVzdWx0W2ldO1xyXG4gICAgICAgICAgY29uY2F0ID0gY29uY2F0ICsgZWxlbWVudCArICgoaSA9PSByZXN1bHQubGVuZ3RoLTEpP1wiXCI6XCIsXCIpOyAgICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICByZXR1cm4gY29uY2F0O1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdHVhbGl6YSBlbCBhcmJvbFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVmcmVzaFRyZWUoKXtcclxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhOyBcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbnVsbDsgXHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IF9kYXRhO1xyXG4gICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSBfZGF0YTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ29OZXh0UGFnZSgpIHtcclxuICAgIGlmICghdGhpcy50cmVlSGVsaXNhQ29ubmVjdC5pc0xhc3RQYWdlICYmICF0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCkge1xyXG4gICAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzVXNlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucmFuZ2VTY3JvbGxlZC5lbWl0KHtcclxuICAgICAgICBwYWdlOiB0aGlzLnRyZWVIZWxpc2FDb25uZWN0Lm5leHRQYWdlKCkgICAgICAgICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVjZWl2ZVBhZ2UoZGF0YTogTm9kZVtdKSB7ICAgIFxyXG4gICAgaWYoIXRoaXMuZGF0YSl7IHRoaXMuZGF0YSA9IHtpZDpudWxsLG5hbWU6XCJyb290XCIsaXNTZWxlY3RlZDpmYWxzZX19XHJcbiAgICBpZiAoIXRoaXMuZGF0YS5jaGlsZHJlbikgeyB0aGlzLmRhdGEuY2hpbGRyZW4gPSBuZXcgQXJyYXk8Tm9kZT4oKTsgdGhpcy50cmVlSGVsaXNhQ29ubmVjdCA9IG5ldyBUcmVlSGVsaXNhQ29ubmVjdDxOb2RlPigpOyB9ICAgIFxyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuID0gdGhpcy5kYXRhLmNoaWxkcmVuLmNvbmNhdChkYXRhKTtcclxuICAgIHRoaXMuZGF0YS5jaGlsZHJlbi5mb3JFYWNoKG5vZGU9PntcclxuICAgICAgdGhpcy5maWxsUGFyZW50KG5vZGUsdGhpcy5kYXRhKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSB0aGlzLmRhdGEuY2hpbGRyZW47ICAgIFxyXG4gICAgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMgPSB0aGlzLmRhdGEuY2hpbGRyZW47XHJcbiAgICB0aGlzLnRyZWVIZWxpc2FDb25uZWN0LmlzTGFzdFBhZ2UgPSBkYXRhLmxlbmd0aCA9PT0gMDtcclxuICAgIHRoaXMudHJlZUhlbGlzYUNvbm5lY3QuaXNVc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMbGVuYW4gZWwgY2FtcG8gcGFyZW50IGRlIHRvZG9zIGxvcyBub2RvcyBoaWpvc1xyXG4gICAqIEBwYXJhbSBub2RlIFxyXG4gICAqIEBwYXJhbSBwYXJlbnQgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBmaWxsUGFyZW50KG5vZGU6Tm9kZSxwYXJlbnQ6Tm9kZSl7XHJcblxyXG4gICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICBpZihub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgdGhpcy5maWxsUGFyZW50KGl0ZW0sbm9kZSk7ICAgXHJcbiAgICAgIH0pICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogY29sb2NhIGNvbW8gdHJ1ZSBkZWwgaXNTZWxlY3RlZCBkZWwgbm9kbyBxdWUgY29uY3VlcmRlIGNvbiBlbCBpZFxyXG4gICAqIEBwYXJhbSBub2RlIFxyXG4gICAqIEBwYXJhbSBpZCBcclxuICAgKi9cclxuICBwcml2YXRlIHNlbGVjdE5vZGUobm9kZTpOb2RlLGlkOm51bWJlcnxzdHJpbmcpeyBcclxuICAgICAgXHJcbiAgICAgIHRoaXMudXBTZWxlY3ROb2RlKG5vZGUpXHJcbiAgICAgIFxyXG4gICAgICBpZihub2RlLmlkID09IGlkKXtcclxuICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSB0cnVlICAgXHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgIH1lbHNlIGlmIChub2RlLmNoaWxkcmVuICE9IG51bGwpe1xyXG4gICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgIGZvcihpPTA7IHJlc3VsdCA9PSBudWxsICYmIGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuc2VsZWN0Tm9kZShub2RlLmNoaWxkcmVuW2ldLCBpZCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsOyBcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBFbGltaW5hIGVsIGlzU2VsZWN0ZWQgZGUgdG9kb3MgbG9zIG5vZG9zXHJcbiAgICogQHBhcmFtIG5vZGUgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB1cFNlbGVjdE5vZGUobm9kZTpOb2RlKXtcclxuICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICBpZighIW5vZGUuY2hpbGRyZW4pXHJcbiAgICAgZm9yKHZhciBpPTA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy51cFNlbGVjdE5vZGUobm9kZS5jaGlsZHJlbltpXSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NOb2RlKG5vZGU6IE5vZGUpOiBzdHJpbmdbXXtcclxuICAgIGxldCBjbGFzc05vZGUgPSBbXTtcclxuICAgIGlmKG5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICBjbGFzc05vZGUucHVzaChcImlzU2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBpZihub2RlLmNsYXNzTm9kZSl7XHJcbiAgICAgIGNsYXNzTm9kZS5wdXNoKG5vZGUuY2xhc3NOb2RlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc05vZGU7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRNb2RlKG5vZGUsIGVkaXRNb2RlKSB7XHJcbiAgICB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucyhub2RlKS5lZGl0TW9kZSA9IGVkaXRNb2RlO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RPcHRpb24oZXZlbnQsIG5vZGUpIHtcclxuICAgIG5vZGUuaXNDaGVja2VkT3B0aW9uID0gZXZlbnQuc291cmNlLnNlbGVjdGVkO1xyXG4gICAgaWYgKG5vZGUuaXNDaGVja2VkT3B0aW9uKVxyXG4gICAgICB0aGlzLmNoZWNrZWRPcHRpb25Ob2RlLmVtaXQobm9kZS5pZCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMudW5jaGVja2VkT3B0aW9uTm9kZS5lbWl0KG5vZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRPcHRpb25zKG5vZGU6IE5vZGUpOiBhbnkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmhhcyhub2RlLmlkKSlcclxuICAgICAgdGhpcy5yZWxvYWRTZWxlY3RlZE9wdGlvbnMobm9kZSwgdGhpcy5zZWxlY3RlZE9wdGlvbnMuZ2V0KG5vZGUuaWQpLmVkaXRNb2RlKTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5yZWxvYWRTZWxlY3RlZE9wdGlvbnMobm9kZSwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmdldChub2RlLmlkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVsb2FkU2VsZWN0ZWRPcHRpb25zKG5vZGU6IE5vZGUsIGVkaXRNb2RlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBhcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbm9kZS5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgaWYgKG9wdGlvbi5pc0NoZWNrZWRPcHRpb24pXHJcbiAgICAgICAgYXJyYXkucHVzaChvcHRpb24uaWQpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvYmogPSB7Zm9ybUNvbnRyb2w6IG5ldyBGb3JtQ29udHJvbChhcnJheSksIGVkaXRNb2RlOiBlZGl0TW9kZX07XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5zZXQobm9kZS5pZCwgb2JqKTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiA9PT09PT0gTWV0b2RvcyA9PT09PT09PT09PT1cclxufVxyXG4iXX0=