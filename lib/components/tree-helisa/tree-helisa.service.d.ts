import { Observable } from 'rxjs';
import { Node } from './node';
export declare class TreeHelisaService {
    private emitNodeSelected;
    nodeSelected: Observable<string | number>;
    private emitDataSource;
    dataSourceObservable: Observable<Node>;
    private emitExpandAllNodes;
    nodeExpand: Observable<boolean>;
    private emitCollapseAllNodes;
    nodeCollapse: Observable<boolean>;
    private emitRefreshTree;
    refreshTreeObservable: Observable<void>;
    private emitRefreshTreeWithPagination;
    refreshTreeWithPaginationObservable: Observable<void>;
    private emitExpandOneNode;
    expandOneNodeObservable: Observable<Node>;
    private emitCollapseOneNode;
    collapseOneNodeObservable: Observable<Node>;
    changeNodeSelected(idResidentialArea: number | string): void;
    changeDataSource(data: Node): void;
    expandAllNodes(expand: boolean): void;
    collapseAllNodes(collapse: boolean): void;
    refreshTree(): void;
    refreshTreeWithPagination(): void;
    expandOneNode(node: Node): void;
    collapseOneNode(node: Node): void;
    constructor();
}
