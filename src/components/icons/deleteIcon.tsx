import { FC } from 'react';
import { ReactComponent as Delete } from '@assets/icons/delete.svg';
import { declareIcon, IconProps } from './baseIcon';

export const DeleteIcon: FC<IconProps> = declareIcon(Delete);
