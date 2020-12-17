import { OnInit, EventEmitter, QueryList } from '@angular/core';
import { DependencyTableHelisaService, ConfigTable } from './dependency-table-helisa.service';
import { Cell, EventColumn, RequestTableHelisa, SelectObject } from '../table-helisa/table-helisa.interface';
import { TableHelisaService } from '../table-helisa/table-helisa.service';
import { TableHelisaComponent } from '../table-helisa/table-helisa.component';
export interface EventDependency<T> {
    index: number;
    data: T;
}
export declare class DependencyTableHelisaComponent<T> implements OnInit {
    private dependencyTableHelisaService;
    private tableService;
    tables: Array<ConfigTable<T>>;
    viewTables: QueryList<TableHelisaComponent<T>>;
    showToolTip: boolean;
    /**
     * deprecated, use selectObject
     */
    selected: EventEmitter<EventDependency<T>>;
    selectObject: EventEmitter<EventDependency<{} | T>>;
    nextPage: EventEmitter<EventDependency<{} | T>>;
    total: EventEmitter<EventDependency<{} | T>>;
    sort: EventEmitter<EventDependency<{} | T>>;
    drop: EventEmitter<EventDependency<{} | T>>;
    addRow: EventEmitter<number>;
    selectCell: EventEmitter<EventDependency<{} | T>>;
    bookClicked: EventEmitter<EventDependency<{} | T>>;
    selectedObject: EventDependency<{}>;
    /**
     * Tiempo antes de ocultarla el mensaje del tooltip
     */
    hideDelay: number;
    /**
     * Tiempo antes de mostra el mensaje del tooltip
     */
    showDelay: number;
    constructor(dependencyTableHelisaService: DependencyTableHelisaService<T>, tableService: TableHelisaService<T>);
    ngOnInit(): void;
    /**
     * retorna el servicio que gestiona el componente.
     */
    getService(): DependencyTableHelisaService<T>;
    /**
     * Obtiene un observable con las tablas dependientes desde el servicio.
     */
    getTables(): void;
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla seleccionada
     * @param data retorna la fila que fue seleccionada
     */
    onSelectedDependency(index: number, event: SelectObject<T>): void;
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onNextPage(index: number, event: RequestTableHelisa<T>): void;
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onTotal(index: number, event: EventColumn): void;
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onSort(index: number, event: EventColumn): void;
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onDrop(index: number, event: EventDependency<T>): void;
    /**
     * Evento que se dispara desde una tabla, emite el indice de la tabla al cual se le debe añadir una nueva fila
     * @param index indica el indice de la tabla de la cual se dispara el evento
     */
    onAddRow(index: number): void;
    selectedCell(index: number, event: Cell<T>): void;
    onBookClicked(index: number, event: EventDependency<T>): void;
}
