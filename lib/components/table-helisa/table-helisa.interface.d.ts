import { SortDirection } from '@angular/material/sort';
import { RowData } from './table-helisa.component';
export declare enum ColumnType {
    NORMAL = 0,
    URL = 1,
    ICON = 2
}
export interface ColumnConfig {
    name: string;
    title?: string;
    visible?: boolean;
    sortable?: boolean;
    groupable?: boolean;
    totalType?: TotalType;
    searchable?: boolean;
    sortDirection?: SortDirection;
    subtitle?: string;
    colspanTitle?: number;
    colspanSubtitle?: number;
    columnStyle?: string;
    columnType?: ColumnType;
    isSelectable?: boolean;
    headerStyle?: string;
}
export interface AddRowButton {
    text: string;
    showButton: boolean;
    isDisabled?: boolean;
    toolTipText?: string;
}
export interface EmptyMessageColumn {
    text: string;
    isEnabled: boolean;
}
export declare enum EventScope {
    USER = 0,
    CODE_CALL = 1
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
export interface RequestTableHelisa<T> {
    page: number;
    body: {} | T;
}
export interface DropElement<T> {
    value: T;
    order: number;
}
export interface SelectObject<T> {
    value: T;
    scope: EventScope;
    keyActionImport?: string;
}
export declare enum TableHelisaType {
    REMOTE = 0,
    LOCAL = 1
}
export interface Cell<T> {
    column: ColumnConfig;
    row: RowData<T> | T;
}
export interface ConfigCellStyles<T> {
    cellData: T;
    classCell: string;
}
export interface ConfigRowStyles<T> {
    column: ColumnConfig;
    data: {} | T;
    classRow: string;
}
export declare class ColumnConfigUtil<T> {
    getValue(obj: T, column: ColumnConfig): T | number | string;
}
