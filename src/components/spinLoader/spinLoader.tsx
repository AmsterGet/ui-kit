import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './spinLoader.module.scss';

const cx = classNames.bind(styles);

interface SpinLoaderLoaderProps {
  color?: string;
  className?: string;
}

export const SpinLoader: FC<SpinLoaderLoaderProps> = ({
  color = 'topaz',
  className,
}): ReactElement => (
  <div className={cx('spin-loader', className, { [`color-${color}`]: color })}>
    <div className={cx('spinner')} />
  </div>
);
