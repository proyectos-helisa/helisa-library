import { AfterViewInit, EventEmitter, OnInit, ElementRef } from '@angular/core';
import { MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { AddRowButton, Cell, ColumnConfig, ConfigCellStyles, ConfigRowStyles, DropElement, EventColumn, EventSearch, RequestTableHelisa, SelectObject, TableHelisaType, TotalGroup, ColumnType } from './table-helisa.interface';
import { TableHelisaService } from './table-helisa.service';
interface RowData {
    data: any;
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
    data: MatTableDataSource<RowData>;
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
    matSort: MatSort;
    matTable: MatTable<any>;
    matTableElement: ElementRef;
    containerTable: ElementRef;
    sort: EventEmitter<EventColumn>;
    total: EventEmitter<EventColumn>;
    search: EventEmitter<EventSearch>;
    /**
     * Deprecado, cambiar por electObject
     */
    select: EventEmitter<T>;
    selectCell: EventEmitter<Cell>;
    selectObject: EventEmitter<SelectObject<T>>;
    nextPage: EventEmitter<RequestTableHelisa>;
    showTitle: boolean;
    isCellSelection: boolean;
    count: number;
    configCellStyles: Array<ConfigCellStyles>;
    configRowStylesFromColumn: Array<ConfigRowStyles>;
    selectedCells: Cell;
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
    private _dataSource;
    dataSource: Array<any>;
    selectedIndexRow: number;
    private prepareDataSource;
    private addTotalGroup;
    private compare;
    getGroupDescription(obj: any): string;
    isGroupTitle(index: any, item: any): boolean;
    isRow(index: any, item: any): boolean;
    isGroupFooter(index: any, item: any): boolean;
    footerDisplayedColumns(): Array<string>;
    getGroupValue(column: ColumnConfig, data: TotalGroup): number;
    getValue(obj: any, column: ColumnConfig): any;
    getValueTooltip(obj: any, column: ColumnConfig): any;
    searchText(text: any): void;
    selectRow(row: any, isUser: any): void;
    onScroll(event: any): void;
    private goNextPage;
    private receivePage;
    dblClickCell(): void;
    selectedCell(element: any, column: ColumnConfig): void;
    isSelectedCell(row: any, column: ColumnConfig): boolean;
    getClassToCell(row: any, column: ColumnConfig): string[];
    getClassToRow(row: any): string[];
    onDrop(event: any): void;
    tableKeydown(event: KeyboardEvent): void;
    /**
     * Emite el evento cuando se da click al boton AddRow
     */
    onAddRow(): void;
    onBookClicked(selectedObject: any): void;
    getHeaderSubtitle(): string[];
    getColumnsWithTitle(): string[];
    dragger(event: any): boolean;
    startDrag(event: any): void;
    private getRowIndex;
    readonly columnType: typeof ColumnType;
}
export {};
