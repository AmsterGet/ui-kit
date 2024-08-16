import { ReactNode, FC } from 'react';
import classNames from 'classnames/bind';
import styles from './modalContent.module.scss';

const cx = classNames.bind(styles);

interface ModalContentProps {
  scrollable?: boolean;
  children?: ReactNode;
}

export const ModalContent: FC<ModalContentProps> = ({ scrollable = false, children }) => (
  <div className={cx('modal-content', { scrollable: scrollable })}>{children}</div>
);
