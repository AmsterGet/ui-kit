import { CSSProperties, useMemo, useState, FC } from 'react';
import styles from './table.module.scss';
import classNames from 'classnames/bind';
import { ArrowDownIcon, ArrowUpIcon } from '@components/icons';
import { FixedColumn, PrimaryColumn, RowData, TableComponentProps, SortDirection } from './types';
import { Checkbox } from '@components/checkbox';
import { getColumnsKeys } from './utils';

const cx = classNames.bind(styles);

export const Table: FC<TableComponentProps> = ({
  data,
  primaryColumn,
  fixedColumns,
  rowActionMenu,
  className = '',
  selectable = false,
  selectedRowIds = [],
  sortingDirection = SortDirection.ASC,
  sortingColumn = primaryColumn,
  sortableColumns = getColumnsKeys([primaryColumn, ...fixedColumns]),
  onChangeSorting = () => {},
  onToggleRowSelection = () => {},
  onToggleAllRowsSelection = () => {},
}) => {
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const columns: (PrimaryColumn | FixedColumn)[] = useMemo(() => {
    return [{ ...primaryColumn, primary: true }, ...fixedColumns];
  }, [primaryColumn, fixedColumns]);

  const handleSort = (key: string) => {
    if (!sortableColumns.includes(key)) return;
    onChangeSorting({ key, direction: sortingDirection });
  };

  const getCellStyle = (column: FixedColumn): CSSProperties => {
    return {
      width: column.width,
      textAlign: column.align,
    };
  };

  const handleMouseEnter = (key: string) => {
    setHoveredColumn(key);
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
  };

  const handleRowMouseEnter = (index: number) => {
    setHoveredRow(index);
  };

  const handleRowMouseLeave = () => {
    setHoveredRow(null);
  };

  const handleRowCheck = (id: number | string) => {
    onToggleRowSelection(id);
  };

  const handleCheckAll = () => {
    onToggleAllRowsSelection();
  };

  const isAllChecked: boolean = data.every((item) => selectedRowIds.includes(item.id));
  const isAnyChecked: boolean = data.some((item) => selectedRowIds.includes(item.id));

  const getSizeClassName = (item: RowData): string => {
    const size = item.rowConfigs?.size ?? 'default';
    return `size-${size}`;
  };

  const getSortIcon = (columnKey: string) => {
    if (!sortableColumns.includes(columnKey)) return;
    if (sortingColumn?.key === columnKey) {
      return sortingDirection === SortDirection.ASC ? <ArrowUpIcon /> : <ArrowDownIcon />;
    }
    return <ArrowUpIcon />;
  };

  return (
    <div className={cx('table', className)}>
      <div className={cx('table-header')}>
        {selectable && (
          <div className={cx('table-header-cell', 'checkbox-cell')}>
            {isAnyChecked && (
              <Checkbox
                value={isAllChecked}
                partiallyChecked={isAnyChecked}
                onChange={handleCheckAll}
                className={cx('checkbox-cell')}
              />
            )}
          </div>
        )}
        {columns.map((column) => (
          <button
            key={column.key}
            className={cx('table-header-cell', {
              [`align-${(column as FixedColumn).align}`]: 'align' in column,
              'primary-cell': 'primary' in column && column.primary,
            })}
            style={getCellStyle(column as FixedColumn)}
            onClick={() => handleSort(column.key)}
            onMouseEnter={() => handleMouseEnter(column.key)}
            onMouseLeave={handleMouseLeave}
          >
            <span>{column.header}</span>

            {(hoveredColumn === column.key || sortingColumn?.key === column.key) &&
              getSortIcon(column.key)}
          </button>
        ))}
        {rowActionMenu && <div className={cx('table-header-cell', 'action-menu-cell')} />}
      </div>

      <div className={cx('table-body')}>
        {data.map((item, index) => (
          <div
            key={item.id}
            className={cx('table-row', getSizeClassName(item))}
            onMouseEnter={() => handleRowMouseEnter(index)}
            onMouseLeave={handleRowMouseLeave}
          >
            {selectable && (
              <div className={cx('table-cell', 'checkbox-cell')}>
                {(isAnyChecked || hoveredRow === index) && (
                  <Checkbox
                    value={selectedRowIds.includes(item.id)}
                    onChange={() => handleRowCheck(item.id)}
                    className={cx('checkbox-cell')}
                  />
                )}
              </div>
            )}
            <div className={cx('table-row-content')}>
              {columns.map((column) => (
                <div
                  key={column.key}
                  className={cx('table-cell', 'table-cell', {
                    'primary-cell': 'primary' in column && column.primary,
                  })}
                  style={getCellStyle(column as FixedColumn)}
                >
                  {item[column.key].component || item[column.key].content || item[column.key]}
                </div>
              ))}

              {rowActionMenu && (
                <div className={cx('table-cell', 'action-menu-cell')}>{rowActionMenu}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
