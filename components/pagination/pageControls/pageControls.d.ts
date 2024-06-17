import { FC } from 'react';
import { ChangePage } from '../types';
type PageControlsCaptions = {
    page: string;
    goTo: string;
    goAction: string;
    of: string;
};
export interface PageControlsProps {
    activePage: number;
    totalPages: number;
    changePage: ChangePage;
    captions: PageControlsCaptions;
}
export declare const PageControls: FC<PageControlsProps>;
export {};
