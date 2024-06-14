import { RowData, SortConfig, SortDirection } from './types';

export const sortTableData = (tableData: RowData[], sortConfig?: SortConfig): RowData[] => {
  if (sortConfig) {
    tableData.sort((a, b) => {
      const contentA = a[sortConfig.key].content || a[sortConfig.key];
      const contentB = b[sortConfig.key].content || b[sortConfig.key];
      console.log(contentA, contentB);
      if (contentA < contentB) {
        return sortConfig.direction === SortDirection.ASC ? -1 : 1;
      }
      if (contentA > contentB) {
        return sortConfig.direction === SortDirection.ASC ? 1 : -1;
      }
      return 0;
    });
  }
  return tableData;
};
