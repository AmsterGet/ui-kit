import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { ru } from 'date-fns/locale';
import { DatePicker } from './datePicker';
import { registerDatePickerLocale } from './utils';

const meta: Meta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | undefined>(undefined);
    registerDatePickerLocale('ru', ru);
    return (
      <>
        Single DatePicker:
        <DatePicker {...args} value={date} onChange={setDate} language={'ru'} />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
};

export const Range: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    return (
      <>
        Range DatePicker:
        <DatePicker
          {...args}
          value={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={setStartDate}
          selects={'start'}
        />
        <DatePicker
          {...args}
          value={endDate}
          startDate={startDate}
          endDate={endDate}
          onChange={setEndDate}
          selects={'end'}
        />
      </>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
