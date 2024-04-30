import { ReactNode, FC } from 'react';
import { DropdownVariant, RenderDropdownOption, DropdownOptionType, DropdownValue } from './types';
interface DropdownProps {
    options: DropdownOptionType[];
    value: DropdownValue;
    disabled?: boolean;
    error?: string;
    mobileDisabled?: boolean;
    title?: string;
    touched?: boolean;
    icon?: ReactNode;
    variant?: DropdownVariant;
    placeholder?: string;
    transparentBackground?: boolean;
    className?: string;
    toggleButtonClassName?: string;
    onChange: (value: DropdownValue) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    renderOption?: RenderDropdownOption;
}
export declare const Dropdown: FC<DropdownProps>;
export {};
