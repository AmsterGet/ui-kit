import { FC, ReactElement } from 'react';
import { ReactComponent as Clear } from '@assets/icons/clear.svg';
import { BaseIcon, BaseIconProps } from './baseIcon';

export const ClearIcon: FC<BaseIconProps> = (props): ReactElement => (
  <BaseIcon {...props}>
    <Clear />
  </BaseIcon>
);
