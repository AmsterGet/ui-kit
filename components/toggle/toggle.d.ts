import { ChangeEventHandler, FC, HTMLAttributes, ReactNode } from 'react';
interface ToggleProps extends HTMLAttributes<HTMLInputElement> {
    value: boolean;
    title?: string;
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export declare const Toggle: FC<ToggleProps>;
export {};
