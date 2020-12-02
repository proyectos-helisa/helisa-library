import { ColumnConfig } from './table-helisa.interface';
export declare class TableHelisaConnectComponent<T> {
    page: number;
    isLastPage: boolean;
    isUsed: boolean;
    constructor();
    getBody(columnConfig: Array<ColumnConfig>, search: string): {};
    nextPage(): number;
}
