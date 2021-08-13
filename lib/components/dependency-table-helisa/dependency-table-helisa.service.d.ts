import { Observable, Subject } from 'rxjs';
import { ColumnConfig, AddRowButton, ConfigRowStyles, TotalTableHelisa } from '../table-helisa/table-helisa.interface';
import { EventDependency } from './dependency-table-helisa.component';
import * as ɵngcc0 from '@angular/core';
export interface ConfigTable<T> {
    columns: Array<ColumnConfig>;
    isRemote: boolean;
    dataSource?: Array<T>;
    count?: number;
    order?: number;
    showTitle?: boolean;
    indexRowSelect?: number;
    isDragged?: boolean;
    addRowButton?: AddRowButton;
    configRowStylesFromColumn?: Array<ConfigRowStyles<T>>;
    configColumnClass?: Array<string>;
    isCellSelection?: boolean;
    addBookButton?: boolean;
}
export declare class DependencyTableHelisaService<T> {
    tables: Subject<ConfigTable<T>[]>;
    infoTables: Array<ConfigTable<T>>;
    private emitVisibilityButton$;
    emitVisibilityButton: Observable<EventDependency<boolean>>;
    private emitVisibilityAllButtons$;
    emitVisibilityAllButtons: Observable<boolean>;
    private emitIsCellSelection$;
    emitIsCellSelection: Observable<EventDependency<boolean>>;
    private emitChangeColumns$;
    emitChangeColumns: Observable<EventDependency<ColumnConfig[]>>;
    emitTotal: Subject<EventDependency<TotalTableHelisa>>;
    emitNextPage: Subject<EventDependency<T[]>>;
    constructor();
    /**
     * retorna un Observable<ConfigTable[]>
     */
    getTables(): Observable<ConfigTable<T>[]>;
    /**
     * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
     * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
     * @param configTable Objeto que contiene la configuración para la tabla.
     * @param withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
     */
    updateDependency(configTable: ConfigTable<T>, withRemoveDependency?: boolean): void;
    /**
     * Emite un evento de total con la información para la tabla correspondiente
     * @param event wrapper que contiene el indice de la tabla y la información de la pagina
     */
    setTotal(event: EventDependency<TotalTableHelisa>): void;
    /**
     * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
     * @param event wrapper que contiene el indice de la tabla y la información de la pagina
     */
    addPage(event: EventDependency<T[]>): void;
    selectIndexRow(config: ConfigTable<T>): void;
    /**
     * Muestra o esconde el boton una tabla en especifico
     * @param event para indicar el index de la tabla y en "data" true o false
     */
    changeVisibilityButton(event: EventDependency<boolean>): void;
    /**
     * Esconde los botones de todas las tablas
     * @param show indicar si se muestran o no todos los botones de las tablas
     */
    changeVisibilityAllButtons(show: boolean): void;
    /**
     * Para habilitar el manejo de selección de celda
     * @param event para indicar el index de la tabla y en "data" true o false
     */
    changeisCellSelection(event: EventDependency<boolean>): void;
    /**
     * Para habilitar el cambio de columnas
     * @param event para indicar el index de la tabla y en "data" columnas
     */
    changeColumnsByTable(event: EventDependency<ColumnConfig[]>): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DependencyTableHelisaService<any>, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DependencyTableHelisaService<any>>;
}

//# sourceMappingURL=dependency-table-helisa.service.d.ts.map