import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './spinLoader.module.scss';

const cx = classNames.bind(styles);

interface SpinLoaderProps {
  color?: string;
  className?: string;
}

export const SpinLoader: FC<SpinLoaderProps> = ({ color = 'topaz', className }): ReactElement => (
  <div className={cx('spin-loader', className)}>
    <div className={cx('spinner', { [`color-${color}`]: color })} />
  </div>
);
