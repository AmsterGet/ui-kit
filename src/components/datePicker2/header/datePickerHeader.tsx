import { FC, ReactNode, useMemo } from 'react';
import classNames from 'classnames/bind';
import { Dropdown } from '@components/dropdown';
import { CalendarArrowIcon } from '@components/icons';
import { DropdownOptionType, DropdownValue } from '@components/dropdown/types';
import { getYearsFrom } from '../utils';
import styles from './datePickerHeader.module.scss';

const cx = classNames.bind(styles);

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

export const DatePickerHeader: FC<DatePickerHeaderProps> = ({
  date = new Date(),
  changeYear = () => {},
  changeMonth = () => {},
  decreaseMonth = () => {},
  increaseMonth = () => {},
  prevMonthButtonDisabled = false,
  nextMonthButtonDisabled = false,
  headerNodes = null,
  customClassName = '',
  yearsOptions = [],
  locale,
}) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const monthDropdownOptions = useMemo(() => {
    const monthList = Array(12).keys();
    const formatter = new Intl.DateTimeFormat(locale, {
      month: 'long',
    });
    const getMonthName = (monthIndex: number) => formatter.format(new Date(year, monthIndex));
    const months = Array.from(monthList, getMonthName);

    return months.reduce((acc: DropdownOptionType[], monthValue, monthNumber) => {
      return acc.concat({
        value: monthNumber,
        label: monthValue,
      });
    }, []);
  }, []);

  const yearDropdownOptions: DropdownOptionType[] = useMemo(() => {
    const yearValues = yearsOptions.length > 0 ? yearsOptions : getYearsFrom(year);
    return yearValues.reduce(
      (acc: DropdownOptionType[], yearValue) =>
        acc.concat({ value: yearValue, label: `${yearValue}` }),
      [],
    );
  }, [yearsOptions]);

  const onMonthChange = (changedMonth: DropdownValue | DropdownValue[]) => {
    const numberMonth: number = changedMonth as number;
    changeMonth(numberMonth);
  };

  const onYearChange = (changedYear: DropdownValue | DropdownValue[]) => {
    const numberYear: number = changedYear as number;
    changeYear(numberYear);
  };

  return (
    <>
      {headerNodes && <div className={cx(customClassName)}>{headerNodes}</div>}
      <div className={cx('header')}>
        <button
          aria-label="Previous Months"
          disabled={prevMonthButtonDisabled}
          onClick={decreaseMonth}
          className={cx('button-prev', { disabled: prevMonthButtonDisabled })}
        >
          <CalendarArrowIcon />
        </button>
        <div className={cx('dropdowns-wrapper')}>
          <Dropdown
            options={monthDropdownOptions}
            value={month}
            onChange={onMonthChange}
            transparentBackground
            className={cx('dropdown', 'month-dropdown')}
            toggleButtonClassName={cx('toggle-button')}
          />
          <Dropdown
            options={yearDropdownOptions}
            value={year}
            onChange={onYearChange}
            transparentBackground
            className={cx('dropdown')}
            toggleButtonClassName={cx('toggle-button')}
          />
        </div>
        <button
          aria-label="Next Months"
          disabled={nextMonthButtonDisabled}
          onClick={increaseMonth}
          className={cx('button-next', { disabled: nextMonthButtonDisabled })}
        >
          <CalendarArrowIcon />
        </button>
      </div>
    </>
  );
};
