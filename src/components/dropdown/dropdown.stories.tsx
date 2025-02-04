import type { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';
import { Dropdown, DropdownProps } from './dropdown';
import { DropdownValue } from '@components/dropdown/types';
import { Button } from '@components/button';
import './stories.scss';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    options: [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
      { value: 6, label: '6' },
      { value: 7, label: '7' },
      { value: 8, label: '8' },
      { value: 9, label: '9' },
    ],
    onChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

interface FooterApplyProps {
  selected: number;
  total: number;
  onApply: () => void;
}

const FooterApply: FC<FooterApplyProps> = ({ selected, total, onApply }) => {
  return (
    <div className={'apply-container'}>
      <p className={'info-text'}>{`${selected} of ${total} selected`}</p>
      <Button onClick={onApply} variant={'text'}>
        Apply
      </Button>
    </div>
  );
};

export const Default: Story = {
  args: {
    value: 1,
  },
};

export const MultiSelect: Story = {
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<DropdownValue | DropdownValue[]>([]);

    return (
      <div>
        <Dropdown
          {...args}
          onChange={(value) => {
            setSelectedValues(value);
          }}
          value={selectedValues}
          footer={
            <FooterApply
              selected={Array.isArray(selectedValues) ? selectedValues.length : 0}
              total={args.options.length}
              onApply={() => {}}
            />
          }
        />
      </div>
    );
  },
  args: {
    options: [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
      { value: 6, label: '6' },
      { value: 7, label: '7' },
      { value: 8, label: '8' },
      { value: 9, label: '9' },
    ],
    className: 'dropdown-default',
    value: 1,
    multiSelect: true,
    placeholder: 'Select value',
    isOptionAllVisible: true,
    optionAll: { value: 'all', label: 'All' },
  },
};

export const Ghost: Story = {
  args: {
    value: 2,
    variant: 'ghost',
  },
};

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
  },
};
