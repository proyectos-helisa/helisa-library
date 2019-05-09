import { EventEmitter, OnInit } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ColumnConfig, EventColumn, EventSearch, RequestTableHelisa, TableHelisaType, TotalGroup } from './table-helisa.interface';
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
export declare class TableHelisaComponent<T> implements OnInit {
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
    matSort: MatSort;
    sort: EventEmitter<EventColumn>;
    total: EventEmitter<EventColumn>;
    search: EventEmitter<EventSearch>;
    select: EventEmitter<T>;
    nextPage: EventEmitter<RequestTableHelisa>;
    showTitle: boolean;
    count: number;
    showFooter: boolean;
    showSearch: boolean;
    constructor(tableService: TableHelisaService<T>);
    ngOnInit(): void;
    isRemote: boolean;
    columnConfiguration: Array<ColumnConfig>;
    dataSource: Array<any>;
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
}
export {};
