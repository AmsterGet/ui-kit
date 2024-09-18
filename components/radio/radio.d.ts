import { ChangeEventHandler, HTMLAttributes, ReactNode, FC } from '../../../node_modules/react';
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
