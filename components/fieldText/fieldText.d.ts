import { FC, ChangeEventHandler, ReactNode, ComponentPropsWithRef } from 'react';
interface FieldTextProps extends ComponentPropsWithRef<'input'> {
    value?: string;
    className?: string;
    error?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    touched?: boolean;
    title?: string;
    label?: string;
    helpText?: string;
    defaultWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    clearable?: boolean;
    onClear?: (prevValue?: string) => void;
    isRequired?: boolean;
    hasDoubleMessage?: boolean;
    type?: string;
}
export declare const FieldText: FC<FieldTextProps>;
export {};
