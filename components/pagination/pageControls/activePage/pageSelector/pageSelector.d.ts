import { FC } from '../../../../../../node_modules/react';
import { ChangePage } from '../../../types';
interface PageSelectorProps {
    pageText: string;
    goActionText: string;
    totalPages: number;
    selectPage: ChangePage;
}
export declare const PageSelector: FC<PageSelectorProps>;
export {};
