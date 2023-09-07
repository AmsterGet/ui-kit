import { FC, ReactElement } from 'react';
import { BaseIcon, BaseIconProps } from './baseIcon';

export type IconProps = Omit<BaseIconProps, 'children'>;

export const declareIcon =
  (IconComponent: FC): FC<IconProps> =>
  (props): ReactElement => (
    <BaseIcon {...props}>
      <IconComponent />
    </BaseIcon>
  );
