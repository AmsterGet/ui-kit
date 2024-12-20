import { ReactElement } from 'react';
export enum SystemAlertType {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface SystemAlertProps {
  uid: string | number;
  title: string;
  onClose: (id: string | number) => void;
  icon?: ReactElement | null;
  type?: SystemAlertType;
  duration?: number;
  className?: string;
}
