import { ChangeEventHandler, ReactNode, InputHTMLAttributes } from '../../../node_modules/react';
interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    className?: string;
    error?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: ChangeEventHandler<HTMLInputElement>;
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
    displayError?: boolean;
    collapsible?: boolean;
    loading?: boolean;
}
export declare const FieldText: import('../../../node_modules/react').ForwardRefExoticComponent<FieldTextProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export {};
