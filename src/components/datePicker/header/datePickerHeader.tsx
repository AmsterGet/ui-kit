import { FC, ReactNode, useMemo } from 'react';
import classNames from 'classnames/bind';
import { Dropdown } from '@/components/dropdown';
import { CalendarArrowIcon } from '@components/icons';
import {DropdownOptionType, DropdownValue} from '@components/dropdown/types';
import styles from './datePickerHeader.module.scss';

const cx = classNames.bind(styles);

const getYearsFrom = (start: number, amountYearsToGenerate = 20) => {
  const yearsFromCurrent = start + amountYearsToGenerate;
  return new Array(yearsFromCurrent - start).fill(undefined).map((_, i) => start - i);
};

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

  const monthList = Array(12).keys();
  const formatter = new Intl.DateTimeFormat(locale, {
    month: "long"
  });
  const getMonthName = (monthIndex: number) =>  formatter.format(new Date(year, monthIndex));
  const months = Array.from(monthList , getMonthName);

  const monthDropdownOptions = useMemo(
    () =>
      months.reduce((acc: DropdownOptionType[], monthValue, monthNumber) => {
        return acc.concat({
          value: monthNumber,
          label: monthValue,
        });
      }, []),
    [],
  );

  const yearDropdownOptions: DropdownOptionType[] = useMemo(() => {
    const yearValues = yearsOptions.length > 0 ? yearsOptions : getYearsFrom(year);
    return yearValues.reduce(
      (acc: DropdownOptionType[], yearValue) =>
        acc.concat({ value: yearValue, label: `${yearValue}` }),
      [],
    );
  }, [yearsOptions]);

  const displayedMonth = monthDropdownOptions[month].label;

  const onMonthChange = (month: DropdownValue) => {
    const stringMonth:number = month as number;
    changeMonth(stringMonth);
  }

  const onYearChange = (year: DropdownValue) => {
    const numberYear: number = year as number;
    changeYear(numberYear)
  }

  return (
    <>
      {headerNodes ? <div className={cx(customClassName)}>{headerNodes}</div> : null}
      <div className={cx('header')}>
        <i
          aria-label="Previous Months"
          onClick={prevMonthButtonDisabled ? undefined : decreaseMonth}
          className={cx('icon-prev', { disabled: prevMonthButtonDisabled })}
        >
          <CalendarArrowIcon />
        </i>
        <div className={cx('dropdowns-wrapper')}>
          <Dropdown
            options={monthDropdownOptions}
            value={displayedMonth}
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
        <i
          aria-label="Next Months"
          onClick={nextMonthButtonDisabled ? undefined : increaseMonth}
          className={cx('icon-next', { disabled: nextMonthButtonDisabled })}
        >
          <CalendarArrowIcon />
        </i>
      </div>
    </>
  );
};
