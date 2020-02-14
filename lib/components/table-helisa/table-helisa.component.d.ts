import { AfterViewInit, EventEmitter, OnInit, ElementRef } from '@angular/core';
import { MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { AddRowButton, Cell, ColumnConfig, ConfigCellStyles, ConfigRowStyles, DropElement, EventColumn, EventSearch, RequestTableHelisa, SelectObject, TableHelisaType, TotalGroup, ColumnType } from './table-helisa.interface';
import { TableHelisaService } from './table-helisa.service';
export interface RowData<T> {
    data: {} | T;
    rowType: RowType;
}
declare enum RowType {
    GROUP_TITLE = 0,
    GROUP_FOOTER = 1,
    ROW = 2
}
export declare class TableHelisaComponent<T> implements OnInit, AfterViewInit {
    private tableService;
    private tableHelisaConnectComponent;
    totalData: Array<number>;
    rawData: Array<T>;
    data: MatTableDataSource<RowData<T>>;
    displayedColumns: string[];
    displayedColumnsWithTitle: string[];
    displayedColumnsWithSubtitle: string[];
    displayedColumnsWithFooter: string[];
    columnConfig: Array<ColumnConfig>;
    selectedObject: T;
    lastSearch: string;
    type: TableHelisaType;
    indexRowSelect: number;
    private scrollCount;
    hasSubtitle: boolean;
    private indexRowStartDrag;
    private lastIndexRowDrag;
    private dataBeforeDrag;
    private dataSource$;
    private scrollX;
    private scrollY;
    matSort: MatSort;
    matTable: MatTable<T>;
    matTableElement: ElementRef;
    containerTable: ElementRef;
    sort: EventEmitter<EventColumn>;
    total: EventEmitter<EventColumn>;
    search: EventEmitter<EventSearch>;
    /**
     * Deprecado, cambiar por electObject
     */
    select: EventEmitter<T>;
    selectCell: EventEmitter<Cell<T>>;
    selectObject: EventEmitter<SelectObject<T>>;
    nextPage: EventEmitter<RequestTableHelisa<T>>;
    showTitle: boolean;
    isCellSelection: boolean;
    count: number;
    configCellStyles: Array<ConfigCellStyles<T>>;
    configRowStylesFromColumn: Array<ConfigRowStyles<T>>;
    selectedCells: Cell<T>;
    drop: EventEmitter<DropElement<T>>;
    isDragged: boolean;
    addRowButton: AddRowButton;
    addRow: EventEmitter<void>;
    bookClicked: EventEmitter<T>;
    addBookButton: boolean;
    showToolTip: boolean;
    showFooter: boolean;
    showSearch: boolean;
    /**
     * Tiempo antes de ocultarla el mensaje del tooltip
     */
    hideDelay: number;
    /**
     * Tiempo antes de mostra el mensaje del tooltip
     */
    showDelay: number;
    constructor(tableService: TableHelisaService<T>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    isRemote: boolean;
    columnConfiguration: Array<ColumnConfig>;
    dataSource: Array<T>;
    selectedIndexRow: number;
    private prepareDataSource;
    private addTotalGroup;
    private compare;
    getGroupDescription(obj: T): string;
    isGroupTitle(index: number, item: RowData<T>): boolean;
    isRow(index: number, item: RowData<T>): boolean;
    isGroupFooter(index: number, item: RowData<T>): boolean;
    footerDisplayedColumns(): Array<string>;
    getGroupValue(column: ColumnConfig, data: TotalGroup): number;
    getValue(obj: T, column: ColumnConfig): T;
    getValueTooltip(obj: T, column: ColumnConfig): string;
    searchText(text: string): void;
    selectRow(row: RowData<T>, isUser: boolean): void;
    onScroll(event: Event): void;
    private goNextPage;
    private receivePage;
    dblClickCell(): void;
    selectedCell(element: RowData<T>, column: ColumnConfig): void;
    isSelectedCell(row: RowData<T>, column: ColumnConfig): boolean;
    getClassToCell(row: T, column: ColumnConfig): string[];
    getClassToRow(row: T): string[];
    onDrop(event: MouseEvent): void;
    tableKeydown(event: KeyboardEvent): void;
    /**
     * Emite el evento cuando se da click al boton AddRow
     */
    onAddRow(): void;
    onBookClicked(selectedObject: T): void;
    getHeaderSubtitle(): string[];
    getColumnsWithTitle(): string[];
    dragger(event: MouseEvent): boolean;
    startDrag(event: MouseEvent): void;
    private getRowIndex;
    readonly columnType: typeof ColumnType;
}
export {};
