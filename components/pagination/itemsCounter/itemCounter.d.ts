import { FC } from '../../../../node_modules/react';
export interface ItemCounterProps {
    activePage: number;
    pageSize: number;
    totalItems: number;
    ofText: string;
    itemsText: string;
}
export declare const ItemCounter: FC<ItemCounterProps>;
