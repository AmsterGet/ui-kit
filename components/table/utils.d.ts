import { Column, RowData, SortConfig } from './types';
export declare const sortTableData: (tableData: RowData[], sortConfig?: SortConfig) => RowData[];
export declare const getColumnsKeys: (columns: Column[]) => string[];
