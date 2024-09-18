import { FC, ReactNode, ChangeEventHandler, HTMLAttributes } from '../../../node_modules/react';
interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    value: boolean;
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    partiallyChecked?: boolean;
    title?: string;
}
export declare const Checkbox: FC<CheckboxProps>;
export {};
