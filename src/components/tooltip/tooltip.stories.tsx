import { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './tooltip';

const Hello: FC<ContentProps> = ({ isTooltipOpen }) => (
  <span>Hello, tooltip is {isTooltipOpen ? 'opened' : 'closed'}</span>
);
interface ContentProps {
  isTooltipOpen?: boolean;
}
const Content = () => <div style={{ width: '100px', height: '100px' }}>Hello!</div>;

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {},
  render: () => (
    <Tooltip content={<Content />}>
      <Hello />
    </Tooltip>
  ),
};
