import { AfterViewInit, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
export declare enum PagingTreeInitialMode {
    COLLAPSE = 0,
    EXPAND = 1
}
export interface PagingTreeHelisaListable<T> {
    get(lastChildOrder: number, size: number): Observable<T[]>;
    getIdField(): string;
    getIdParentField(): string;
    compare(a: T, b: T): number;
}
interface HelisaNode<T> {
    object: T;
    level: number;
    haveChildren: boolean;
    expanded: boolean;
    visible: boolean;
    preorder: number;
}
export interface HelisaNodeData<T> {
    readonly object: T;
    readonly level: number;
    readonly haveChildren: boolean;
    readonly expanded: boolean;
    readonly visible: boolean;
    readonly preorder: number;
}
export declare class PagingTreeHelisaComponent<T> implements OnInit, AfterViewInit {
    private pageSize;
    private visibleLimit;
    private visibleSize;
    private treeMode;
    private visibleObjects;
    private service;
    private searchNode;
    private allNode;
    nodeComponent: TemplateRef<{
        data: T;
        node: HelisaNodeData<T>;
    }>;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    mode: PagingTreeInitialMode;
    pagingTreeHelisaListable: PagingTreeHelisaListable<T>;
    private reset;
    private loadData;
    private sortItems;
    private createNode;
    getNodeInformationById(id: string): HelisaNode<T>;
    getNodeInformation(item: T): HelisaNode<T>;
    getLevelClass(item: T): string;
    private loadNextVisibleObjects;
    collapseNode(item: T): void;
    expandNode(item: T): void;
    showNextPage(): void;
    readonly visibleData: ReadonlyArray<T>;
    removeItem(item: T): void;
    addItem(item: T): void;
    updateItem(item: T): void;
    private reSort;
}
export {};