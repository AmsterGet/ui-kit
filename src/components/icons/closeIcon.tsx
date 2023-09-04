import { FC, ReactElement } from 'react';
import { ReactComponent as Close } from '@assets/icons/close.svg';
import { BaseIcon, BaseIconProps } from './baseIcon';

export const CloseIcon: FC<BaseIconProps> = (props): ReactElement => (
  <BaseIcon {...props}>
    <Close />
  </BaseIcon>
);
