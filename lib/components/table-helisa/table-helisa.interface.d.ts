import { SortDirection } from "@angular/material";
export interface ColumnConfig {
    name: string;
    title: string;
    visible?: boolean;
    sortable?: boolean;
    groupable?: boolean;
    totalType?: TotalType;
    searchable?: boolean;
    sortDirection?: SortDirection;
}
export interface AddRowButton {
    text: string;
    showButton: boolean;
}
export declare enum TotalType {
    SUM = 0,
    AVERAGE = 1,
    COUNT = 2
}
export declare enum ChangeColumnConfigurationType {
    SORT = 0,
    UNKNOWN = 1,
    TOTAL = 2
}
export interface EventColumn {
    column: ColumnConfig;
    columnConfigurations: Array<ColumnConfig>;
    type: ChangeColumnConfigurationType;
}
export interface TotalTableHelisa {
    column: ColumnConfig;
    value: number;
}
export interface TotalGroup {
    sum: number;
    count: number;
}
export interface EventSearch {
    text: string;
    columnConfigurations: Array<ColumnConfig>;
}
export interface RequestTableHelisa {
    page: number;
    body: any;
}
export interface DropElement<T> {
    value: T;
    order: number;
}
export declare enum TableHelisaType {
    REMOTE = 0,
    LOCAL = 1
}
export interface Cell {
    column: ColumnConfig;
    row: any;
}
export interface ConfigCellStyles {
    cellData: any;
    classCell: string;
}
export interface ConfigRowStyles {
    column: ColumnConfig;
    data: any;
    classRow: string;
}
export declare abstract class ColumnConfigUtil {
    static getValue(obj: any, column: ColumnConfig): any;
}
