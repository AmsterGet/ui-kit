import { Meta, StoryObj } from '@storybook/react';
import { FieldTextFlex, FieldTextFlexProps } from './fieldTextFlex';
import { ChangeEvent, useState } from 'react';

const meta: Meta<FieldTextFlexProps> = {
  title: 'Field Text Flex',
  component: FieldTextFlex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    };

    return <FieldTextFlex {...args} value={value} onChange={handleChange} />;
  },
};

export default meta;

type Story = StoryObj<FieldTextFlexProps>;

export const Empty: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: { label: 'Label' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
export const DisabledWithLabel: Story = {
  args: { disabled: true, label: 'Disabled label' },
};

export const ReadOnly: Story = {
  args: { readOnly: true },
};

export const WithError: Story = {
  args: { error: 'Error', touched: true },
};

export const WithHelpText: Story = {
  args: { helpText: 'Help text' },
};

export const WithPlaceholder: Story = {
  args: { placeholder: 'Placeholder' },
};

export const FullyDescribed: Story = {
  args: {
    label: 'Label',
    error: 'Error',
    touched: true,
    helpText: 'Help text',
    placeholder: 'Placeholder',
  },
};
