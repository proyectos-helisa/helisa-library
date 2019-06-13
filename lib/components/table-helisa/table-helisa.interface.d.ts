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
export declare enum TableHelisaType {
    REMOTE = 0,
    LOCAL = 1
}
export interface SelectedCell {
    columnObj: any;
    row: any;
}
export declare abstract class ColumnConfigUtil {
    static getValue(obj: any, column: ColumnConfig): any;
}
