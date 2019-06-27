import { Node } from './node';
export declare class TreeHelisaService {
    private emitNodeSelected;
    nodeSelected: import("rxjs").Observable<number>;
    changeNodeSelected(idResidentialArea: number): void;
    private emitDataSource;
    dataSourceObservable: import("rxjs").Observable<Node>;
    changeDataSource(data: Node): void;
    private emitExpandAllNodes;
    nodeExpand: import("rxjs").Observable<boolean>;
    expandAllNodes(expand: boolean): void;
    private emitCollapseAllNodes;
    nodeCollapse: import("rxjs").Observable<boolean>;
    collapseAllNodes(collapse: boolean): void;
    private emitRefreshTree;
    refreshTreeObservable: import("rxjs").Observable<void>;
    refreshTree(): void;
    private emitExpandOneNode;
    expandOneNodeObservable: import("rxjs").Observable<Node>;
    expandOneNode(node: Node): void;
    private emitCollapseOneNode;
    collapseOneNodeObservable: import("rxjs").Observable<Node>;
    collapseOneNode(node: Node): void;
    constructor();
}
