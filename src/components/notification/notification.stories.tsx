import { Meta, StoryObj } from '@storybook/react';
import { Notification } from './notification';

const meta: Meta<typeof Notification> = {
  title: 'Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    uid: '1',
    title: 'Ab dignissimos exercitationem laudantium magni voluptas.',
    onClose: () => {},
    type: 'success',
  },
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  render: (args) => (
    <div style={{ minHeight: '500px', padding: '200px' }}>
      <Notification {...args}></Notification>
    </div>
  ),
};
