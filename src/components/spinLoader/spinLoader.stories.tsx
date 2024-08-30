import type { Meta, StoryObj } from '@storybook/react';

import { SpinLoader } from './spinLoader';

const meta: Meta<typeof SpinLoader> = {
  title: 'Spinner Loader',
  component: SpinLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SpinLoader>;

export const Default: Story = {
  args: {},
};
