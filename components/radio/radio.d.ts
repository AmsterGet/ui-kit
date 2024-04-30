import { ChangeEventHandler, HTMLAttributes, ReactNode, FC } from 'react';
export type RadioValue = string | number;
export type RadioOption = {
    value: RadioValue;
    label: string;
    disabled: boolean;
};
export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
    option: RadioOption;
    value?: RadioValue;
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export declare const Radio: FC<RadioProps>;
