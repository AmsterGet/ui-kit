import { ReactNode } from 'react';

export interface Column {
  key: string;
  header: string;
}
export interface PrimaryColumn extends Column {
  primary: boolean;
}
export interface FixedColumn extends Column {
  width: string | number;
  align?: 'left' | 'center' | 'right';
}
export interface RowConfigs {
  size?: 'small' | 'medium' | 'large';
}
export interface DetailedCellData {
  content: string | number;
  component: ReactNode;
}
export interface RowData {
  id: string | number;
  [key: string]: DetailedCellData | RowConfigs | string | number | any;
  rowConfigs?: RowConfigs;
}
export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}
export interface SortConfig {
  key: string;
  direction: SortDirection;
}
export interface TableComponentProps {
  data: RowData[];
  primaryColumn: Column;
  fixedColumns: FixedColumn[];
  rowActionMenu?: ReactNode;
  selectable?: boolean;
  className?: string;
  headerClassName?: string;
  rowClassName?: string;
  selectedRowIds?: (string | number)[];
  sortingDirection?: SortDirection;
  sortingColumn?: Column;
  sortableColumns?: string[];
  onChangeSorting?: (sortConfig?: SortConfig) => void;
  onToggleRowSelection?: (id: string | number) => void;
  onToggleAllRowsSelection?: () => void;
}
