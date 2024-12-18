import { ReactElement, ReactNode } from 'react';
export enum NotificationType {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface NotificationProps {
  uid: string | number;
  title: string;
  onClose: (id: string | number) => void;
  icon?: ReactElement | null;
  type?: NotificationType;
  duration?: number;
  description?: ReactNode;
  className?: string;
}
