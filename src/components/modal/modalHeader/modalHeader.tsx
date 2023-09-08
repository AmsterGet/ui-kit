import { ReactNode, FC } from 'react';
import classNames from 'classnames/bind';
import { CloseIcon, BaseIconButton } from '@components/icons';
import styles from './modalHeader.module.scss';

const cx = classNames.bind(styles);

interface ModalHeaderProps {
  title?: ReactNode;
  headerNode?: ReactNode;
  onClose: () => void;
}

export const ModalHeader: FC<ModalHeaderProps> = ({ title, onClose, headerNode }) => (
  <div className={cx('modal-header')}>
    <div className={cx('modal-header-content')}>
      {title && <span className={cx('modal-title')}>{title}</span>}
      {headerNode && headerNode}
    </div>
    <BaseIconButton className={cx('close-modal-icon')} onClick={onClose}>
      <CloseIcon />
    </BaseIconButton>
  </div>
);
