import { OnInit, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTree, MatOptionSelectionChange } from '@angular/material';
import { Node } from './node';
import { TreeHelisaService } from './tree-helisa.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
export interface RequestTreeHelisa {
    page: number;
}
export declare class TreeHelisaComponent implements OnInit, AfterViewInit {
    private treeHelisaService;
    private router;
    private elementRef;
    constructor(treeHelisaService: TreeHelisaService, router: Router, elementRef: ElementRef);
    private treeHelisaConnect;
    formEdit: FormControl;
    tree: MatTree<{}>;
    private selectedOptions;
    /**
     * Datos del Arbol
     */
    data: Node;
    /**
     * Retorna el id del nodo removido
     */
    removed: EventEmitter<string | number>;
    /**
     * Retorna un nodo editado
     */
    edited: EventEmitter<Node>;
    /**
     * Retorna un nodo sin id del nodo , pero si con el parent
     * para conocer a cual fue añadido
     */
    added: EventEmitter<Node>;
    collapseParent: EventEmitter<boolean>;
    rangeScrolled: EventEmitter<RequestTreeHelisa>;
    nodeSelected: EventEmitter<number | string>;
    dobleClick: EventEmitter<number | string>;
    keypressDelete: EventEmitter<number | string | null>;
    keypressInsert: EventEmitter<number | string | null>;
    checkedOptionNode: EventEmitter<number | string | null>;
    uncheckedOptionNode: EventEmitter<number | string | null>;
    treeControl: NestedTreeControl<Node>;
    dataSource: MatTreeNestedDataSource<Node>;
    isSingleClick: boolean;
    currentNode: Node;
    /**
     * Obtiene la descripcion completa del nodo
     * @example Nodo padre,nodo hijo,nodo nieto
     * @param node Debe tener todos los parent llenos hacia arriba
     */
    static getDescription(node: Node): string;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onRedirect(node: Node): void;
    onScroll(event: Event): void;
    onEdit(node: Node): void;
    onAdd(node: Node): void;
    onDelete(node: Node): void;
    onEdited(node: Node, value: string): void;
    onCancel(node: Node, value: string): void;
    onDblClick(node: Node): void;
    onKeyDown(event: KeyboardEvent): void;
    private moveUpIntoTree;
    private moveDownIntoTree;
    /**
     * Verifica si el nodo tiene hijos
     */
    hasChild: (t: number, node: Node) => boolean;
    /**
     * Actualiza el arbol borrando toda la data , solo cuando no se utiliza paginacion
     */
    private refreshTree;
    /**
     * Actualiza el arbol cuando se utiliza la paginacion (Cuando no , utilice el metodo refreshTree())
     */
    private refreshTreeWithPagination;
    private goNextPage;
    private receivePage;
    /**
     * Llenan el campo parent de todos los nodos hijos
     */
    private fillParent;
    /**
     * coloca como true del isSelected del nodo que concuerde con el id
     */
    private selectNode;
    private expandAllParents;
    /**
     * Elimina el isSelected de todos los nodos
     */
    private upSelectNode;
    getClassNode(node: Node): string[];
    onEditMode(node: Node, editMode: boolean): void;
    onSelectOption(event: MatOptionSelectionChange, node: Node): void;
    getSelectedOptions(node: Node): {
        formControl: FormControl;
        editMode: boolean;
    };
    private reloadSelectedOptions;
    /**
     * Retorna el primer Node que encuentre segun el id enviado o null si no hay ninguno
     * @param id  number | string
     * @returns Node o null si no hay un nodo con ese id
     */
    getNodeById(id: number | string): Node;
    reorderByOrderIndex(node: Node[]): Node[];
}
