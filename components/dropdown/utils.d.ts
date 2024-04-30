import { DropdownValue, DropdownOptionType } from './types';
export declare const calculateDefaultIndex: (options: DropdownOptionType[], selectedValue: DropdownValue) => number;
export declare const calculateNextIndex: (options: DropdownOptionType[], index?: number) => number;
export declare const calculatePrevIndex: (options: DropdownOptionType[], index?: number) => number;
