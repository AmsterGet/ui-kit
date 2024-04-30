import { FC, MouseEventHandler, ReactNode, HTMLAttributes } from 'react';
export interface BaseIconButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
export declare const BaseIconButton: FC<BaseIconButtonProps>;
