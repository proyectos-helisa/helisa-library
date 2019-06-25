import { Observable } from "rxjs";
import { TotalTableHelisa } from "./table-helisa.interface";
import { TableHelisaComponent } from "./table-helisa.component";
export interface TableHelisaServiceInfo<T> {
    obj: T;
    table?: TableHelisaComponent<any>;
}
export declare class TableHelisaService<T> {
    private emitChangeSource;
    private emitNextPage;
    totalReturn: Observable<TableHelisaServiceInfo<TotalTableHelisa>>;
    nextPageReturn: Observable<TableHelisaServiceInfo<T[]>>;
    setTotal(total: TotalTableHelisa, table?: TableHelisaComponent<T>): void;
    addPage(page: T[], table?: TableHelisaComponent<T>): void;
}
