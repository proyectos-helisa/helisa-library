import { AfterViewInit, EventEmitter, OnInit, ElementRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AddRowButton, Cell, ColumnConfig, ConfigCellStyles, ConfigRowStyles, DropElement, EventColumn, EventSearch, RequestTableHelisa, SelectObject, TableHelisaType, TotalGroup, ColumnType, EmptyMessageColumn } from './table-helisa.interface';
import { TableHelisaService } from './table-helisa.service';
import { ResizeConfig, ResizeResponse } from '../dependency-table-helisa/dependency-table-helisa.component';
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
    selectHeaderCell: EventEmitter<ColumnConfig>;
    selectToImport: EventEmitter<SelectObject<T>>;
    selectObject: EventEmitter<SelectObject<T>>;
    nextPage: EventEmitter<RequestTableHelisa<T>>;
    showTitle: boolean;
    isCellSelection: boolean;
    count: number;
    configCellStyles: Array<ConfigCellStyles<T>>;
    configRowStylesFromColumn: Array<ConfigRowStyles<T>>;
    configColumnClass: Array<string>;
    selectedCells: Cell<T>;
    drop: EventEmitter<DropElement<T>>;
    isDragged: boolean;
    addRowButton: AddRowButton;
    emptyMessageForColumn: EmptyMessageColumn;
    addRow: EventEmitter<void>;
    bookClicked: EventEmitter<T>;
    addBookButton: boolean;
    showToolTip: boolean;
    tableIndex: number;
    resizeConfig: ResizeConfig;
    afterViewInit: EventEmitter<ResizeResponse>;
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
    modeImportEnabled: boolean;
    constructor(tableService: TableHelisaService<T>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    set isRemote(w: boolean);
    set columnConfiguration(columnConfiguration: Array<ColumnConfig>);
    set dataSource(dataSource: Array<T>);
    get dataSource(): Array<T>;
    set selectedIndexRow(idRowSelected: number);
    private reloadColumnConfig;
    reload(): void;
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
    selectRow(row: RowData<T>, isUser: boolean, column?: ColumnConfig): void;
    onScroll(event: Event): void;
    private goNextPage;
    private receivePage;
    dblClickCell(): void;
    selectedCell(element: RowData<T>, column: ColumnConfig): void;
    isSelectedCell(row: RowData<T>, column: ColumnConfig): boolean;
    selectedHeaderCell(column: ColumnConfig): void;
    getClassToHeaderCell(column: ColumnConfig): string[];
    getClassToCell(row: T, column: ColumnConfig): string[];
    getClassToColumn(): string[];
    getClassToRow(row: T): string[];
    onDrop(event: MouseEvent): void;
    tableKeydown(event: KeyboardEvent): void;
    arrowsEvents(event: KeyboardEvent): void;
    /**
     * Emite el evento cuando se da click al boton AddRow
     */
    onAddRow(): void;
    getHeaderSubtitle(): string[];
    getColumnsWithTitle(): string[];
    dragger(event: MouseEvent): boolean;
    startDrag(event: MouseEvent): void;
    private getRowIndex;
    get columnType(): typeof ColumnType;
    showMessageEmpty(data: MatTableDataSource<RowData<T>>): boolean;
    getMessageEmtpy(): string;
    getIfButtonDisabled(): boolean;
    getToolTipButtonMessage(): string;
    isResizingTable(): boolean;
    isResizingCell(): boolean;
    getIdForHelTable(): string;
    getIdForCellTable(idx: number): string;
}
export {};
