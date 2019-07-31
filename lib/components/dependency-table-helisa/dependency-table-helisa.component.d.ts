import { OnInit, EventEmitter, QueryList } from '@angular/core';
import { DependencyTableHelisaService, ConfigTable } from './dependency-table-helisa.service';
import { RequestTableHelisa, SelectObject } from '../table-helisa/table-helisa.interface';
import { TableHelisaService } from '../table-helisa/table-helisa.service';
import { TableHelisaComponent } from '../table-helisa/table-helisa.component';
export interface EventDependency {
    index: number;
    data: any;
}
export declare class DependencyTableHelisaComponent implements OnInit {
    private dependencyTableHelisaService;
    private tableService;
    tables: Array<ConfigTable>;
    viewTables: QueryList<TableHelisaComponent<any>>;
    /**
     * deprecated, use selectObject
     */
    selected: EventEmitter<EventDependency>;
    selectObject: EventEmitter<EventDependency>;
    nextPage: EventEmitter<EventDependency>;
    total: EventEmitter<EventDependency>;
    sort: EventEmitter<EventDependency>;
    drop: EventEmitter<EventDependency>;
    addRow: EventEmitter<number>;
    selectCell: EventEmitter<EventDependency>;
    selectedObject: EventDependency;
    constructor(dependencyTableHelisaService: DependencyTableHelisaService, tableService: TableHelisaService<any>);
    ngOnInit(): void;
    /**
     * retorna el servicio que gestiona el componente.
     */
    getService(): DependencyTableHelisaService;
    /**
     * Obtiene un observable con las tablas dependientes desde el servicio.
     */
    getTables(): void;
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla seleccionada
     * @param data retorna la fila que fue seleccionada
     */
    onSelectedDependency(index: number, event: SelectObject<any>): void;
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onNextPage(index: number, event: RequestTableHelisa): void;
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onTotal(index: number, event: any): void;
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onSort(index: number, event: any): void;
    /**
     * Evento que se dispara desde una tabla, emitiendo un nuevo evento con el inidice de la tabla que dispara el evento y el evento generado.
     * @param index indica el indice de la tabla que genera el evento
     * @param event evento generado desde la tabla
     */
    onDrop(index: number, event: any): void;
    /**
     * Evento que se dispara desde una tabla, emite el indice de la tabla al cual se le debe añadir una nueva fila
     * @param index indica el indice de la tabla de la cual se dispara el evento
     */
    onAddRow(index: number): void;
    selectedCell(index: number, event: any): void;
}
