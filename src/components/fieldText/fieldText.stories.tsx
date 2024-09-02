import type { Meta, StoryObj } from '@storybook/react';
import { DeleteIcon } from '@components/icons';
import { FieldText } from './fieldText';
import { ChangeEvent, useRef, useState } from 'react';

const meta: Meta<typeof FieldText> = {
  title: 'Field Text',
  component: FieldText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<HTMLInputElement>(null);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value;
      setValue(val);
      if (val === 'blur') {
        ref?.current?.blur();
      }
    };

    return <FieldText {...args} value={value} onChange={handleChange} ref={ref} />;
  },
};

export default meta;

type Story = StoryObj<typeof FieldText>;

export const Empty: Story = {
  args: {},
};

export const Required: Story = {
  args: {
    isRequired: true,
    placeholder: 'Type here',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Type here',
  },
};

export const WithHelpText: Story = {
  args: {
    helpText: 'This field is intended for ...',
  },
};

export const Clearable: Story = {
  args: {
    clearable: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'The field should not be empty',
    touched: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const NonDefaultWidth: Story = {
  args: {
    defaultWidth: false,
  },
};

export const FullyDescribed: Story = {
  args: {
    label: 'Type here',
    helpText: 'This field is intended for ...',
    isRequired: true,
    placeholder: 'Type here',
    error: 'The field should not be empty',
    touched: true,
    hasDoubleMessage: true,
    startIcon: <DeleteIcon />,
    collapsible: true,
    loading: true,
  },
};
