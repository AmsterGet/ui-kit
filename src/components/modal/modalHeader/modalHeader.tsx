import { ReactNode, FC } from 'react';
import classNames from 'classnames/bind';
import { CloseIcon, BaseIconButton } from '@components/icons';
import styles from './modalHeader.module.scss';

const cx = classNames.bind(styles);

interface ModalHeaderProps {
  title?: ReactNode;
  headerContentClassName?: string;
  headerNode?: ReactNode;
  headerDescription?: string;
  onClose: () => void;
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  title,
  headerContentClassName = '',
  headerDescription,
  onClose,
  headerNode,
}) => (
  <div className={cx('modal-header')}>
    <div className={cx('modal-header-content', headerContentClassName)}>
      {title && <span className={cx('modal-title')}>{title}</span>}
      {headerNode && headerNode}
      {headerDescription ? (
        <span className={cx('modal-header-description')}>{headerDescription}</span>
      ) : (
        <div className={cx('modal-header-spacer')} />
      )}
    </div>
    <BaseIconButton className={cx('close-modal-icon')} onClick={onClose}>
      <CloseIcon />
    </BaseIconButton>
  </div>
);
