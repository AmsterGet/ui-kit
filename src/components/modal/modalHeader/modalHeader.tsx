import { ReactNode, FC } from 'react';
import classNames from 'classnames/bind';
import { BaseIconButton } from '@components/baseIconButton';
import { CloseIcon } from '@components/icons';
import styles from './modalHeader.module.scss';

const cx = classNames.bind(styles);

interface ModalHeaderProps {
  title?: ReactNode;
  onClose: () => void;
  withDescription?: boolean;
}

export const ModalHeader: FC<ModalHeaderProps> = ({ title, onClose, withDescription = false }) => (
  <div className={cx('modal-header', { 'width-description': withDescription })}>
    <div className={cx('modal-header-content')}>
      {title && <div className={cx('modal-title')}>{title}</div>}
    </div>
    <BaseIconButton className={cx('close-modal-icon')} onClick={onClose}>
      <CloseIcon />
    </BaseIconButton>
  </div>
);
