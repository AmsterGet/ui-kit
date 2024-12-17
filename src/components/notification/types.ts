import { ReactNode } from 'react';

export interface NotificationProps {
  uid: string | number;
  title: string;
  onClose: (id: string | number) => void;
  icon?: ReactNode;
  type?: 'info' | 'success' | 'error';
  duration?: number;
  description?: ReactNode;
  className?: string;
}
