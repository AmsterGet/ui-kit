import { FC, ReactNode } from 'react';
type Mode = 'info' | 'warning' | 'error';
interface SystemMessageProps {
    children?: ReactNode;
    mode?: Mode;
    header?: string;
    caption?: ReactNode;
    widthByContent?: boolean;
}
export declare const SystemMessage: FC<SystemMessageProps>;
export {};
