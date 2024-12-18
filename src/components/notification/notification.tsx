import { CSSProperties, FC, ReactElement, useEffect } from 'react';
import { NotificationProps, NotificationType } from '@components/notification/types';
import styles from './notification.module.scss';
import classNames from 'classnames/bind';
import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon } from '@/components';

const cx = classNames.bind(styles);
const ERROR_DURATION = 7000;
const DEFAULT_DURATION = 4000;

export const Notification: FC<NotificationProps> = ({
  uid,
  title,
  onClose,
  icon = null,
  type = NotificationType.INFO,
  duration = DEFAULT_DURATION,
  description,
  className,
}): ReactElement => {
  const adjustedDuration = type === NotificationType.ERROR ? ERROR_DURATION : duration;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(uid);
    }, adjustedDuration);

    return () => clearTimeout(timer);
  }, [adjustedDuration, uid, onClose]);

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
    <div
      className={cx('notification-container', type, className)}
      style={{ '--duration': `${duration}ms` } as CSSProperties}
    >
      <div className={cx('icon-wrapper')}>{getIcon()}</div>
      <div className={cx('content-wrapper')}>
        <div className={cx('title')}>{title}</div>
        {description && <div className={cx('description')}>{description}</div>}
      </div>
      <button
        className={cx('close-button')}
        onClick={() => onClose(uid)}
        aria-label="close notification"
      >
        <CloseIcon />
      </button>
    </div>
  );
};
