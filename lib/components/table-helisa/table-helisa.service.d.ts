import { Observable } from "rxjs";
import { TotalTableHelisa } from "./table-helisa.interface";
import { TableHelisaComponent } from "./table-helisa.component";
export interface TableHelisaServiceInfo<T> {
    obj: T;
    table?: TableHelisaComponent<any>;
}
export interface TableHelisaConfig {
    selectedRow?: boolean;
}
export declare class TableHelisaService<T> {
    private emitChangeSource;
    private emitNextPage;
    private configTable;
    totalReturn: Observable<TableHelisaServiceInfo<TotalTableHelisa>>;
    nextPageReturn: Observable<TableHelisaServiceInfo<T[]>>;
    setTotal(total: TotalTableHelisa, table?: TableHelisaComponent<T>): void;
    addPage(page: T[], table?: TableHelisaComponent<T>): void;
    setSelectedCells(configTable: TableHelisaConfig): void;
    getSelectedCells(): TableHelisaConfig;
}
