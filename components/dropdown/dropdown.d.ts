import { ReactNode, FC } from '../../../node_modules/react';
import { DropdownVariant, RenderDropdownOption, DropdownOptionType, DropdownValue } from './types';
export interface DropdownProps {
    options: DropdownOptionType[];
    value: DropdownValue | DropdownValue[];
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
    isListWidthLimited?: boolean;
    multiSelect?: boolean;
    optionAll?: DropdownOptionType;
    isOptionAllVisible?: boolean;
    onSelectAll?: () => void;
    footer?: ReactNode;
}
export declare const Dropdown: FC<DropdownProps>;
