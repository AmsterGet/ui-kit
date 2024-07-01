import { FC } from 'react';
import { ChangePage } from '../../types';
export interface PageNavigatorProps {
    activePage: number;
    totalPages: number;
    changePage: ChangePage;
    captions: {
        goTo: string;
    };
}
export declare const PageNavigator: FC<PageNavigatorProps>;
