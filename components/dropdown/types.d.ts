import { MouseEventHandler, ReactNode } from 'react';
export type DropdownVariant = 'default' | 'ghost';
export type DropdownValue = string | boolean | number;
export type RenderDropdownOption = (props: DropdownOptionProps) => ReactNode;
export type DropdownOptionType = {
    value: DropdownValue;
    label: string;
    disabled?: boolean;
    hidden?: boolean;
    title?: string;
    groupRef?: string;
};
export interface DropdownOptionProps {
    selected?: boolean;
    onChange?: (value: DropdownValue) => void;
    highlightHovered?: boolean;
    render?: RenderDropdownOption;
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    option: DropdownOptionType;
}
