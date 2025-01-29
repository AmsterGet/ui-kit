import { FC, ReactNode, ReactElement } from '../../../../node_modules/react';
interface DatePickerProps {
    onChange?: (date: Date | any) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    headerNodes?: ReactNode;
    disabled?: boolean;
    shouldCloseOnSelect?: boolean;
    fixedHeight?: boolean;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    customClassName?: string;
    popperClassName?: string;
    calendarClassName?: string;
    customTimeInput?: ReactElement;
    language?: string;
    yearsOptions?: number[];
    placeholder?: string;
    dateFormat?: string;
    selects?: 'start' | 'end' | 'none';
    value?: Date | null;
}
export declare const DatePicker2: FC<DatePickerProps>;
export {};
