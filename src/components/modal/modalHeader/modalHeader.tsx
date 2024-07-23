import { ReactNode, FC } from 'react';
import classNames from 'classnames/bind';
import { CloseIcon, BaseIconButton } from '@components/icons';
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
      {title && <span className={cx('modal-title')}>{title}</span>}
    </div>
    <BaseIconButton className={cx('close-modal-icon')} onClick={onClose}>
      <CloseIcon />
    </BaseIconButton>
  </div>
);
