import { FC } from 'react';
import { ChangePageSize } from '../types';
interface PageSizeControlProps {
    size: number;
    sizeOptions: number[];
    perPageText: string;
    changeSize: ChangePageSize;
}
export declare const PageSizeControl: FC<PageSizeControlProps>;
export {};
