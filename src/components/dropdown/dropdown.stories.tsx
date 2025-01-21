import type { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';
import { Dropdown, DropdownProps } from './dropdown';
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
  render: (args: DropdownProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValues, setSelectedValues] = useState<Set<number | string | boolean>>(
      new Set([]),
    );

    return (
      <div>
        <Dropdown
          {...args}
          onChange={(value) => {
            const newSelectedValues = new Set(selectedValues);
            if (newSelectedValues.has(value)) {
              newSelectedValues.delete(value);
            } else {
              newSelectedValues.add(value);
            }
            setSelectedValues(newSelectedValues);
          }}
          onSelectAll={() => {
            if (selectedValues.size === args.options.length) {
              setSelectedValues(new Set());
            } else {
              const allValues = new Set(args.options.map((item) => item.value));
              setSelectedValues(allValues);
            }
          }}
          value={[...selectedValues]}
          footer={
            <FooterApply
              selected={selectedValues.size}
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
