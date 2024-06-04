import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './popover';

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {

  render: (args) => (
    <div style={{minWidth: '500px', minHeight: '500px', padding: '200px'}}>
      <Popover {...args} title={'hello title'} content={<div>hello popover content</div>}>
        <div style={{width: '300px', height: '100px', backgroundColor: 'green'}}/>
      </Popover>
    </div>
  ),
};
