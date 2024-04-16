import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { ThemeProvider } from '../themeProvider';
import { ReactNode } from 'react';

// TODO: Create Storybook decorator - https://storybook.js.org/docs/react/writing-stories/decorators
const DarkWrapper = (props: { children: ReactNode }) => (
  <div
    style={{
      marginTop: '20px',
      backgroundColor: 'var(--rp-ui-base-dark-bg)',
      padding: '10px',
    }}
  >
    <ThemeProvider theme="dark">{props.children}</ThemeProvider>
  </div>
);

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <>
      <Button {...args}>Primary</Button>
      <DarkWrapper>
        <Button {...args}>Primary darkmode</Button>
      </DarkWrapper>
    </>
  ),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: (args) => (
    <>
      <Button {...args}>Ghost</Button>
      <DarkWrapper>
        <Button {...args}>Ghost darkmode</Button>
      </DarkWrapper>
    </>
  ),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  render: (args) => (
    <>
      <Button {...args}>Danger</Button>
      <DarkWrapper>
        <Button {...args}>Danger darkmode</Button>
      </DarkWrapper>
    </>
  ),
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
  render: (args) => (
    <>
      <Button {...args}>Text</Button>
      <DarkWrapper>
        <Button {...args}>Text darkmode</Button>
      </DarkWrapper>
    </>
  ),
};
