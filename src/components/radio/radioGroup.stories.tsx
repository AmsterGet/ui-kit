import { ChangeEvent, ReactNode, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './radioGroup';
import { ThemeProvider } from '../themeProvider';

// TODO: Create Storybook decorator - https://storybook.js.org/docs/react/writing-stories/decorators
const DarkWrapper = (props: { children: ReactNode }) => (
  <div
    style={{
      marginTop: '20px',
      backgroundColor: 'var(--rp-ui-kit-dark-bg)',
      padding: '10px',
    }}
  >
    <ThemeProvider theme="dark">{props.children}</ThemeProvider>
  </div>
);

const meta: Meta<typeof RadioGroup> = {
  title: 'Radio button',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const options = [
      { value: '1', label: 'Option 1', disabled: false },
      { value: '2', label: 'Option 2', disabled: false },
      { value: '3', label: 'Option 3', disabled: false },
    ];

    return (
      <>
        <RadioGroup {...args} options={options} value={value} onChange={handleChange} />
        <DarkWrapper>
          <RadioGroup {...args} options={options} value={value} onChange={handleChange} />
        </DarkWrapper>
      </>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const options = [{ value: '1', label: 'Option 1', disabled: true }];

    return (
      <>
        <RadioGroup {...args} options={options} value={value} onChange={handleChange} />
        <DarkWrapper>
          <RadioGroup {...args} options={options} value={value} onChange={handleChange} />
        </DarkWrapper>
      </>
    );
  },
};
