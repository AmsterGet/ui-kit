import { Meta, StoryObj } from '@storybook/react';
import { Notification } from './notification';
import { NotificationType } from '@components/notification/types';

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
    type: NotificationType.SUCCESS,
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
