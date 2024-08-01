import { FC, ReactNode } from 'react';
export interface DatePickerHeaderProps {
    changeYear: (year: number) => void;
    changeMonth: (month: number) => void;
    decreaseMonth: () => void;
    increaseMonth: () => void;
    headerNodes: ReactNode;
    date: Date;
    prevMonthButtonDisabled: boolean;
    nextMonthButtonDisabled: boolean;
    customClassName: string;
    yearsOptions: number[];
    locale: string;
}
export declare const DatePickerHeader: FC<DatePickerHeaderProps>;
