import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';
import { Popover } from '@components/popover';
import { MeatballMenuIcon } from '@components/icons';
import {
  Column,
  FixedColumn,
  RowData,
  SortConfig,
  SortDirection,
  TableComponentProps,
} from './types';
import { useEffect, useState } from 'react';
import { sortTableData } from '@components/table/utils';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    selectable: true,
  },
};

export default meta;

type Story = StoryObj<TableComponentProps>;

const rowActionMenu = (
  <Popover
    placement={'bottom-end'}
    content={
      <div>
        <p>Edit</p>
        <p>Rename</p>
      </div>
    }
  >
    <MeatballMenuIcon />
  </Popover>
);

const data: RowData[] = [
  {
    id: 1,
    name: {
      content: 'Sam',
      component: (
        <a
          href={'https://example.com/profile/sam'}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          Sam
        </a>
      ),
    },
    age: 25,
    city: 'New York',
  },
  { name: 'Anna', age: 3, city: 'New York1', id: 2 },
  { name: 'Mike', age: 30, city: 'Los Angeles', config: { size: 'small' }, id: 3 },
];

const primaryColumn: Column = {
  key: 'name',
  header: 'Name',
};

const fixedColumns: FixedColumn[] = [
  {
    key: 'age',
    header: 'Age',
    align: 'right',
    width: 100,
  },
  {
    key: 'city',
    header: 'City',
    width: 150,
  },
];

export const Default: Story = {
  render: (args: TableComponentProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortConfig, setSortConfig] = useState<SortConfig>({
      key: primaryColumn.key,
      direction: SortDirection.ASC,
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingColumn, setSortingColumn] = useState<Column>(primaryColumn);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortingDirection, setSortingDirection] = useState<SortDirection>(SortDirection.ASC);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const defaultSortedData = sortTableData(data, sortConfig);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tableData, setTableData] = useState(defaultSortedData);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkedRows, setCheckedRows] = useState<Set<number | string>>(new Set([]));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const { key, direction } = sortConfig;
      const column = [...fixedColumns, primaryColumn].find((col) => col.key === key);
      setSortingDirection(direction);
      setSortingColumn(column as Column);
    }, [sortConfig]);

    return (
      <div style={{ minWidth: '700px' }}>
        <Table
          {...args}
          data={tableData}
          onChangeSorting={(sortConfigParam = sortConfig) => {
            let { direction } = sortConfigParam;
            const { key } = sortConfigParam;
            direction = direction === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;
            const sortedData = sortTableData(tableData, { key, direction });
            setSortConfig({ key, direction });
            setTableData(sortedData);
          }}
          onToggleRowSelection={(id) => {
            const newCheckedRows = new Set(checkedRows);
            if (newCheckedRows.has(id)) {
              newCheckedRows.delete(id);
            } else {
              newCheckedRows.add(id);
            }
            setCheckedRows(newCheckedRows);
            console.log('checkedRows:', checkedRows);
          }}
          onToggleAllRowsSelection={() => {
            if (checkedRows.size === data.length) {
              setCheckedRows(new Set());
            } else {
              const allRows = new Set(data.map((item) => item.id));
              setCheckedRows(allRows);
            }
          }}
          selectedRowIds={[...checkedRows]}
          sortingColumn={sortingColumn}
          sortingDirection={sortingDirection}
        />
      </div>
    );
  },
  args: {
    primaryColumn,
    fixedColumns,
    rowActionMenu,
    selectable: true,
  },
};
