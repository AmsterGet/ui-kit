import { FC, ReactElement } from 'react';
import { ReactComponent as Delete } from '@assets/icons/delete.svg';
import { BaseIcon, BaseIconProps } from './baseIcon';

export const DeleteIcon: FC<BaseIconProps> = (props): ReactElement => (
  <BaseIcon {...props}>
    <Delete />
  </BaseIcon>
);
