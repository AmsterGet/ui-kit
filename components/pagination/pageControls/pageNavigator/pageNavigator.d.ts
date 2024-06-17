import { FC } from 'react';
import { ChangePage } from '../../types';
export interface PageNavigatorProps {
    activePage: number;
    totalPages: number;
    changePage: ChangePage;
}
export declare const PageNavigator: FC<PageNavigatorProps>;
