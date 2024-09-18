import { FC } from '../../../node_modules/react';
import { ChangePageSize, ChangePage } from './types';
type PaginationCaptions = {
    items?: string;
    of?: string;
    page?: string;
    goTo?: string;
    goAction?: string;
    perPage?: string;
};
export interface PaginationProps {
    activePage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
    pageSizeOptions: number[];
    changePage: ChangePage;
    changePageSize: ChangePageSize;
    captions?: PaginationCaptions;
}
export declare const Pagination: FC<PaginationProps>;
export {};
