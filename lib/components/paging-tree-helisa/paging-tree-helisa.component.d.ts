import { AfterViewInit, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    afterLoadData: EventEmitter<void>;
    nodeComponent: TemplateRef<{
        data: T;
        node: HelisaNodeData<T>;
    }>;
    nodeTitle: TemplateRef<any>;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    set mode(paramMode: PagingTreeInitialMode);
    set pagingTreeHelisaListable(paramService: PagingTreeHelisaListable<T>);
    reset(): void;
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
    get visibleData(): ReadonlyArray<T>;
    removeItem(item: T): void;
    removeById(id: string): void;
    addItem(item: T): void;
    updateItem(item: T): void;
    private reSort;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PagingTreeHelisaComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PagingTreeHelisaComponent<any>, "hel-paging-tree", never, { "mode": "mode"; "pagingTreeHelisaListable": "pagingTreeHelisaListable"; }, { "afterLoadData": "afterLoadData"; }, ["nodeComponent", "nodeTitle"], never>;
}
export {};

//# sourceMappingURL=paging-tree-helisa.component.d.ts.map