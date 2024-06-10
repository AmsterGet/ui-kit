import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { ChangePageSize } from '../../types';
import styles from './sizeSelector.module.scss';

const cx = classNames.bind(styles);

export interface SizeSelectorProps {
  currentSize: number;
  options: number[];
  onClickOption: ChangePageSize;
}

export const SizeSelector: FC<SizeSelectorProps> = ({
  currentSize,
  options,
  onClickOption,
}): ReactElement => {
  return (
    <div className={cx('size-selector')}>
      {options.map((size) => (
        <button
          key={size}
          className={cx('size-option', { selected: size === currentSize })}
          onClick={() => {
            onClickOption(size);
          }}
        >
          {size}
        </button>
      ))}
    </div>
  );
};
