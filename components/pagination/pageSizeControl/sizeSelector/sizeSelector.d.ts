import { FC } from 'react';
import { ChangePageSize } from '../../types';
export interface SizeSelectorProps {
    currentSize: number;
    options: number[];
    onClickOption: ChangePageSize;
}
export declare const SizeSelector: FC<SizeSelectorProps>;
