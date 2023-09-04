import { FC, ReactElement } from 'react';
import { ReactComponent as Plus } from '@assets/icons/plus.svg';
import { BaseIcon, BaseIconProps } from './baseIcon';

export const PlusIcon: FC<BaseIconProps> = (props): ReactElement => (
  <BaseIcon {...props}>
    <Plus />
  </BaseIcon>
);
