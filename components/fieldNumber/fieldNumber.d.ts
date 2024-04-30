import { FC, HTMLAttributes, FocusEventHandler } from 'react';
type FieldNumberValue = number | string;
interface FieldNumberProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'onFocus'> {
    onChange: (value: number | string) => void;
    value?: FieldNumberValue;
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    postfix?: string;
    min?: number;
    max?: number;
    title?: string;
    error?: string;
    touched?: boolean;
    onFocus?: () => void | FocusEventHandler<HTMLInputElement>;
}
export declare const FieldNumber: FC<FieldNumberProps>;
export {};
