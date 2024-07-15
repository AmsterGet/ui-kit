import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from './datePicker';
import { useState } from 'react';

const meta: Meta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [startDate, setStartDate] = useState<Date | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [endDate, setEndDate] = useState<Date | null>(null);
    return (
      <>
        <DatePicker
          {...args}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={setStartDate}
          selects={'start'}
        />
        <DatePicker
          {...args}
          selected={endDate}
          startDate={startDate}
          endDate={endDate}
          onChange={setEndDate}
          selects={'end'}
        />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
