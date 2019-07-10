import { Observable, Subject } from 'rxjs';
import { ColumnConfig } from '../table-helisa/table-helisa.interface';
import { EventDependency } from './dependency-table-helisa.component';
export interface ConfigTable {
    columns: Array<ColumnConfig>;
    isRemote: boolean;
    dataSource?: Array<any>;
    count?: number;
    order?: number;
    showTitle?: boolean;
    indexRowSelect?: number;
    isDragged?: Boolean;
}
export declare class DependencyTableHelisaService {
    tables: Subject<ConfigTable[]>;
    infoTables: Array<ConfigTable>;
    emitTotal: Subject<EventDependency>;
    emitNextPage: Subject<EventDependency>;
    constructor();
    /**
     * retorna un Observable<ConfigTable[]>
     */
    getTables(): Observable<ConfigTable[]>;
    /**
     * Actualiza las dependencias, agrendo la tabla que envian en el orden correspondiente o al final.
     * También remueve las dependecias que hay apartir de la tabla segun se indique en el parametro.
     * @param configTable Objeto que contiene la configuración para la tabla.
     * @param withRemoveDependency boolean por defecto es false, si es 'true' indica que remueva las dependencias apartir de el.
     */
    updateDependency(configTable: ConfigTable, withRemoveDependency?: boolean): void;
    /**
     * Emite un evento de total con la información para la tabla correspondiente
     * @param event wrapper que contiene el indice de la tabla y la información de la pagina
     */
    setTotal(event: EventDependency): void;
    /**
     * Emite un evento de agregar pagina con la pagina para la tabla correspondiente
     * @param event wrapper que contiene el indice de la tabla y la información de la pagina
     */
    addPage(event: EventDependency): void;
    selectIndexRow(config: ConfigTable): void;
}
