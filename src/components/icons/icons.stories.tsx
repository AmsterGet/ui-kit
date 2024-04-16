import type { Meta, StoryObj } from '@storybook/react';

import { BaseIconButton } from './baseIconButton/baseIconButton';
import { CloseIcon, DeleteIcon, DropdownIcon, MinusIcon, PlusIcon } from './index';

const icons = [CloseIcon, PlusIcon, MinusIcon, DeleteIcon, DropdownIcon];

const meta: Meta<typeof BaseIconButton> = {
  title: 'Icons',
  component: BaseIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BaseIconButton>;

export const Icons: Story = {
  render: () => {
    return (
      <>
        {icons.map((Icon) => {
          return (
            <BaseIconButton>
              <Icon />
            </BaseIconButton>
          );
        })}
      </>
    );
  },
};
