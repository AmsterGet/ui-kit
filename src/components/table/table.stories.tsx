import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';
import { Popover } from '@components/popover';
import { MeatballMenuIcon } from '@components/icons';
import { TableComponentProps, RowData, FixedColumn, Column, SortDirection } from './types';
import { useState } from 'react';
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
    order: 3,
    align: 'right',
    width: 100,
  },
  {
    key: 'city',
    header: 'City',
    order: 2,
    width: 150,
  },
];

export const Default: Story = {
  render: (args: TableComponentProps) => {
    const defaultSortedData = sortTableData(data, {
      key: primaryColumn.key,
      direction: SortDirection.ASC,
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tableData, setTableData] = useState(defaultSortedData);
    return (
      <div style={{ minWidth: '700px' }}>
        <Table
          {...args}
          data={tableData}
          onChangeSorting={(sortConfig) => {
            const sortedData = sortTableData(tableData, sortConfig);
            setTableData(sortedData);
          }}
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
