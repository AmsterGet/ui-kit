import { FC, ReactNode, ChangeEventHandler, HTMLAttributes } from 'react';
interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    value: boolean;
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export declare const Checkbox: FC<CheckboxProps>;
export {};
