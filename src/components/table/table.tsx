import { CSSProperties, useMemo, useState, FC } from 'react';
import styles from './table.module.scss';
import classNames from 'classnames/bind';
import { ArrowDownIcon, ArrowUpIcon } from '@components/icons';
import {
  FixedColumn,
  PrimaryColumn,
  RowData,
  SortConfig,
  TableComponentProps,
  SortDirection,
} from './types';
import { Checkbox } from '@/components';

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
  onChangeSorting = () => {},
  onToggleRowSelection = () => {},
}) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: sortingColumn.key,
    direction: sortingDirection,
  });
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set(selectedRowIds));

  const sortedColumns: (PrimaryColumn | FixedColumn)[] = useMemo(() => {
    return [{ ...primaryColumn, primary: true }, ...fixedColumns.sort((a, b) => a.order - b.order)];
  }, [primaryColumn, fixedColumns]);

  const handleSort = (key: string) => {
    let direction: SortDirection = SortDirection.ASC;
    if (sortConfig && sortConfig.key === key && sortConfig.direction === SortDirection.ASC) {
      direction = SortDirection.DESC;
    }
    onChangeSorting({ key, direction });
    setSortConfig({ key, direction });
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
    const newCheckedRows = new Set(checkedRows);
    if (newCheckedRows.has(id)) {
      newCheckedRows.delete(id);
    } else {
      newCheckedRows.add(id);
    }
    setCheckedRows(newCheckedRows);
    onToggleRowSelection(id);
  };

  const handleCheckAll = () => {
    if (checkedRows.size === data.length) {
      setCheckedRows(new Set());
    } else {
      const allRows = new Set(data.map((item) => item.id));
      setCheckedRows(allRows);
    }
  };

  const isAllChecked: boolean = data.every((item) => [...checkedRows].includes(item.id));
  const isAnyChecked: boolean = data.some((item) => [...checkedRows].includes(item.id));

  const getSizeClassName = (item: RowData): string => {
    const size = item.rowConfigs?.size ?? 'default';
    return `size-${size}`;
  };

  const getSortIcon = (columnKey: string) => {
    if (sortConfig?.key === columnKey) {
      return sortConfig.direction === SortDirection.ASC ? <ArrowUpIcon /> : <ArrowDownIcon />;
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
        {sortedColumns.map((column) => (
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

            {(hoveredColumn === column.key || sortConfig?.key === column.key) &&
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
                    value={checkedRows.has(item.id)}
                    onChange={() => handleRowCheck(item.id)}
                    className={cx('checkbox-cell')}
                  />
                )}
              </div>
            )}
            <div className={cx('table-row-content')}>
              {sortedColumns.map((column) => (
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
