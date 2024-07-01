import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  args: {},
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(20);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(2);

    return (
      <div style={{ width: '900px' }}>
        <Pagination
          pageSize={pageSize}
          activePage={page}
          totalItems={400}
          totalPages={400 / pageSize}
          pageSizeOptions={[10, 20, 30, 40, 50]}
          changePage={(newPage) => {
            setPage(newPage);
          }}
          changePageSize={(size) => {
            setPageSize(size);
          }}
        />
      </div>
    );
  },
};
