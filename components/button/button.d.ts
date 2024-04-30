import { FC, ReactNode, ComponentPropsWithRef, MouseEventHandler } from 'react';
type IconPlace = 'start' | 'end';
type ButtonVariant = 'primary' | 'ghost' | 'danger' | 'text';
type ButtonWidth = 'content' | 'wide-content' | 'parent';
export interface ButtonProps extends ComponentPropsWithRef<'button'> {
    children?: ReactNode;
    icon?: ReactNode;
    iconPlace?: IconPlace;
    adjustWidthOn?: ButtonWidth;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    title?: string;
    className?: string;
    variant?: ButtonVariant;
}
export declare const Button: FC<ButtonProps>;
export {};
