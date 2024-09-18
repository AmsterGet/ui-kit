import { FC } from '../../../../../node_modules/react';
import { ChangePage } from '../../types';
interface ActivePageProps {
    activePage: number;
    totalPages: number;
    pageText: string;
    goToText: string;
    goActionText: string;
    changePage: ChangePage;
}
export declare const ActivePage: FC<ActivePageProps>;
export {};
