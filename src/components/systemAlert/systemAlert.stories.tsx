import { Meta, StoryObj } from '@storybook/react';
import { SystemAlert } from './systemAlert';
import { SystemAlertType } from '@components/systemAlert/types';

const meta: Meta<typeof SystemAlert> = {
  title: 'SystemAlert',
  component: SystemAlert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Ab dignissimos exercitationem laudantium magni voluptas.',
    onClose: () => {},
    type: SystemAlertType.SUCCESS,
  },
};

export default meta;

type Story = StoryObj<typeof SystemAlert>;

export const Default: Story = {
  render: (args) => (
    <div style={{ minHeight: '500px', padding: '200px' }}>
      <SystemAlert {...args}></SystemAlert>
    </div>
  ),
};
