import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './itemCounter.module.scss';

const cx = classNames.bind(styles);

export interface ItemCounterProps {
  activePage: number;
  pageSize: number;
  totalItems: number;
  ofText: string;
  itemsText: string;
}

export const ItemCounter: FC<ItemCounterProps> = ({
  activePage,
  pageSize,
  totalItems,
  ofText,
  itemsText,
}): ReactElement => {
  const endIndex = activePage * pageSize;
  const startIndex = endIndex - pageSize;
  return (
    <div className={cx('item-counter')}>
      {`${startIndex + 1} - ${endIndex < totalItems ? endIndex : totalItems}`}
      {` ${ofText} ${totalItems} ${itemsText}`}
    </div>
  );
};
