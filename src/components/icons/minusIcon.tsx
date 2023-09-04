import { FC, ReactElement } from 'react';
import { ReactComponent as Minus } from '@assets/icons/minus.svg';
import { BaseIcon, BaseIconProps } from './baseIcon';

export const MinusIcon: FC<BaseIconProps> = (props): ReactElement => (
  <BaseIcon {...props}>
    <Minus />
  </BaseIcon>
);
