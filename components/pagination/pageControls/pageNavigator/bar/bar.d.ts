import { FC } from 'react';
import { ChangePage } from '../../../types';
export interface BarProps {
    totalPages: number;
    activePage: number;
    changePage: ChangePage;
    captions: {
        goTo: string;
    };
}
export declare const Bar: FC<BarProps>;
