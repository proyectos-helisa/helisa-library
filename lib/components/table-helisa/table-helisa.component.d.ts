import { EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatTable } from '@angular/material';
import { ColumnConfig, EventColumn, EventSearch, RequestTableHelisa, TableHelisaType, TotalGroup, Cell, ConfigCellStyles, ConfigRowStyles } from './table-helisa.interface';
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
    columnConfig: Array<ColumnConfig>;
    selectedObject: T;
    lastSearch: string;
    type: TableHelisaType;
    isSetSelectedRow: boolean;
    matSort: MatSort;
    matTable: MatTable<any>;
    sort: EventEmitter<EventColumn>;
    total: EventEmitter<EventColumn>;
    search: EventEmitter<EventSearch>;
    select: EventEmitter<T>;
    selectCell: EventEmitter<Cell[]>;
    nextPage: EventEmitter<RequestTableHelisa>;
    showTitle: boolean;
    multipleCell: boolean;
    count: number;
    configCellStyles: Array<ConfigCellStyles>;
    configRowStylesFromColumn: Array<ConfigRowStyles>;
    selectedCells: Array<Cell>;
    showFooter: boolean;
    showSearch: boolean;
    constructor(tableService: TableHelisaService<T>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    isRemote: boolean;
    columnConfiguration: Array<ColumnConfig>;
    dataSource: Array<any>;
    selectedRow: T;
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
    searchText(text: any): void;
    selectRow(row: any): void;
    onScroll(event: any): void;
    private goNextPage;
    private receivePage;
    selectedCell(element: any, column: ColumnConfig): void;
    isSelectedCell(element: any, column: ColumnConfig): number;
    getClassToCell(row: any, column: ColumnConfig): string;
    getClassToRow(row: any): string;
}
export {};
