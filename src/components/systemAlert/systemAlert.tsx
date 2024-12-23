import { FC, ReactElement, useEffect } from 'react';
import { SystemAlertProps, SystemAlertType } from './types';
import styles from './systemAlert.module.scss';
import classNames from 'classnames/bind';
import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon } from '@components/icons';

const cx = classNames.bind(styles);
const ERROR_DURATION = 7000;
const DEFAULT_DURATION = 4000;

export const SystemAlert: FC<SystemAlertProps> = ({
  title,
  onClose,
  icon = null,
  type = SystemAlertType.INFO,
  duration = DEFAULT_DURATION,
  className,
}): ReactElement => {
  const adjustedDuration = type === SystemAlertType.ERROR ? ERROR_DURATION : duration;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, adjustedDuration);

    return () => clearTimeout(timer);
  }, [adjustedDuration, onClose]);

  const getIcon = (): ReactElement | null => {
    switch (type) {
      case 'info':
        return <InfoIcon />;
      case 'success':
        return <SuccessIcon />;
      case 'error':
        return <ErrorIcon />;
      default:
        return icon;
    }
  };
  return (
    <div className={cx('system-alert', type, className)}>
      <div className={cx('icon-wrapper')}>{getIcon()}</div>
      <div className={cx('content-wrapper')}>
        <h2 className={cx('title')}>{title}</h2>
      </div>
      <button
        className={cx('close-button')}
        onClick={() => onClose()}
        aria-label="close system alert"
      >
        <CloseIcon />
      </button>
    </div>
  );
};
