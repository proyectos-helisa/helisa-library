import { OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
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
    private treeHelisaConnect;
    formEdit: FormControl;
    /**
     * Datos del Arbol
     */
    data: Node;
    /**
     * Establece si se mostraran las opciones de
     * Creacion, edición y eliminacion del nodo
     */
    showOptionsNode: boolean;
    /**
     * Retorna el id del nodo removido
     */
    removed: EventEmitter<number>;
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
    nodeSelected: EventEmitter<number>;
    treeControl: NestedTreeControl<Node>;
    dataSource: MatTreeNestedDataSource<Node>;
    constructor(treeHelisaService: TreeHelisaService, router: Router);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onRedirect(node: Node): void;
    onScroll(event: any): void;
    onEdit(node: Node): void;
    onAdd(node: Node): void;
    onDelete(node: Node): void;
    onEdited(node: Node, value: any): void;
    onCancel(node: Node, value: string): void;
    /**
     * Verifica si el nodo tiene hijos
     */
    hasChild: (_: number, node: Node) => boolean;
    /**
     * Obtiene la descripcion completa del nodo
     * @example Nodo padre,nodo hijo,nodo nieto
     * @param node Debe tener todos los parent llenos hacia arriba
     */
    static getDescription(node: Node): string;
    /**
     * Actualiza el arbol
     */
    private refreshTree;
    private goNextPage;
    private receivePage;
    /**
     * Llenan el campo parent de todos los nodos hijos
     * @param node
     * @param parent
     */
    private fillParent;
    /**
     * coloca como true del isSelected del nodo que concuerde con el id
     * @param node
     * @param id
     */
    private selectNode;
    /**
     * Elimina el isSelected de todos los nodos
     * @param node
     */
    private upSelectNode;
}
