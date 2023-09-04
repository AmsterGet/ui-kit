import { FC, ReactElement } from 'react';
import { ReactComponent as Dropdown } from '@assets/icons/dropdown.svg';
import { BaseIcon, BaseIconProps } from './baseIcon';

export const DropdownIcon: FC<BaseIconProps> = (props): ReactElement => (
  <BaseIcon {...props}>
    <Dropdown />
  </BaseIcon>
);
