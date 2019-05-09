import { Node } from './node';
export declare class TreeHelisaService {
    private emitNodeSelected;
    nodeSelected: import("rxjs").Observable<number>;
    changeNodeSelected(idResidentialArea: number): void;
    private emitDataSource;
    dataSourceObservable: import("rxjs").Observable<Node>;
    changeDataSource(data: Node): void;
    constructor();
}
