import { FC } from 'react';
import { ReactComponent as Close } from '@assets/icons/close.svg';
import { declareIcon, IconProps } from './baseIcon';

export const CloseIcon: FC<IconProps> = declareIcon(Close);
