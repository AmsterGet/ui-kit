import { ReactElement } from '../../../node_modules/react';
export declare enum SystemAlertType {
    INFO = "info",
    SUCCESS = "success",
    ERROR = "error"
}
export interface SystemAlertProps {
    title: string;
    onClose: () => void;
    icon?: ReactElement | null;
    type?: SystemAlertType;
    duration?: number;
    className?: string;
}
