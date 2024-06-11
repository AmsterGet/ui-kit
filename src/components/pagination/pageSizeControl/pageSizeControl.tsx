import { FC, ReactElement, useState } from 'react';
import classNames from 'classnames/bind';
import { Popover } from '@components/popover';
import { Button } from '@components/button';
import { ChangePageSize } from '../types';
import { SizeSelector } from './sizeSelector/sizeSelector';
import styles from './pageSizeControl.module.scss';

const cx = classNames.bind(styles);

interface PageSizeControlProps {
  size: number;
  sizeOptions: number[];
  perPageText: string;
  changeSize: ChangePageSize;
}

export const PageSizeControl: FC<PageSizeControlProps> = ({
  size,
  sizeOptions,
  perPageText,
  changeSize,
}): ReactElement => {
  const [isSizeSelectorOpened, setIsSizeSelectorOpened] = useState(false);

  const onClickOption: ChangePageSize = (newSize) => {
    changeSize(newSize);
    setIsSizeSelectorOpened(false);
  };

  return (
    <div className={cx('page-size-control')}>
      <Popover
        content={
          <SizeSelector options={sizeOptions} onClickOption={onClickOption} currentSize={size} />
        }
        placement="top"
        isOpened={isSizeSelectorOpened}
        setIsOpened={setIsSizeSelectorOpened}
      >
        <Button className={cx('size-selector-button')} variant="text">
          {size}
        </Button>
      </Popover>
      {` ${perPageText}`}
    </div>
  );
};
