import { Observable } from 'rxjs';
import { TotalTableHelisa } from './table-helisa.interface';
import { TableHelisaComponent } from './table-helisa.component';
export interface TableHelisaServiceInfo<T> {
    obj: T;
    table?: {} | TableHelisaComponent<T>;
}
export declare class TableHelisaService<T> {
    private emitChangeSource;
    private emitNextPage;
    totalReturn: Observable<TableHelisaServiceInfo<TotalTableHelisa>>;
    nextPageReturn: Observable<TableHelisaServiceInfo<T[]>>;
    private emitVisibleButton$;
    private emitEnabledButton$;
    /**
     * Observable para saber si se debe mostrar o esconder el boton de add row
     */
    emitVisibleButton: Observable<boolean>;
    setTotal(total: TotalTableHelisa, table?: TableHelisaComponent<TotalTableHelisa>): void;
    addPage(page: T[], table?: TableHelisaComponent<T>): void;
    /**
     * para modificar el valor de si se muestra o no el boton de add row de la tabla
     * @param change indicar si se muestra o no el boton de add row de la tabla
     */
    changeVisibilityButton(change: boolean): void;
    /**
     * para modificar el estado del boton de add row de la tabla
     * @param change indicar si se muestra o no el boton de add row de la tabla
     */
    changeEnabledButton(change: {
        isDisabled: boolean;
        text: string;
    }): void;
}
