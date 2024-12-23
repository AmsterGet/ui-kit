import { ReactElement } from '../../../node_modules/react';
export declare enum SystemAlertType {
    INFO = "info",
    SUCCESS = "success",
    ERROR = "error"
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
