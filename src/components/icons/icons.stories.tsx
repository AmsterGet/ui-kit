import type { Meta, StoryObj } from '@storybook/react';

import { BaseIcon } from './baseIcon/baseIcon';
import { CloseIcon, DeleteIcon, DropdownIcon, MinusIcon, PlusIcon } from './index';

const icons = [CloseIcon, PlusIcon, MinusIcon, DeleteIcon, DropdownIcon];

const meta: Meta<typeof BaseIcon> = {
  title: 'Icons',
  component: BaseIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BaseIcon>;

export const Icons: Story = {
  render: () => {
    return (
      <div>
        {icons.map((Icon) => {
          return <Icon />;
        })}
      </div>
    );
  },
};
