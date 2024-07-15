import { FC, ReactNode, useMemo } from 'react';
import classNames from 'classnames/bind';
import { Dropdown } from '@/components/dropdown';
import { CalendarArrowIcon } from '@components/icons';
import { DropdownOptionType, DropdownValue } from '@components/dropdown/types';
import styles from './datePickerHeader.module.scss';

const cx = classNames.bind(styles);

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];
const getYearsFrom = (start: number, amountYearsToGenerate = 20) => {
  const yearsFromCurrent = start + amountYearsToGenerate;
  return new Array(yearsFromCurrent - start).fill(undefined).map((_, i) => start - i);
};

export interface DatePickerHeaderProps {
  changeYear: (year: any) => void;
  changeMonth: (month: any) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  headerNodes: ReactNode;
  date: Date;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  customClassName: string;
  yearsOptions: number[];
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
}) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const monthDropdownOptions = useMemo(
    () =>
      months.reduce((acc: { value: number; label: string }[], monthValue, monthNumber) => {
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
      (acc: { value: number; label: string }[], yearValue) =>
        acc.concat({ value: yearValue, label: `${yearValue}` }),
      [],
    );
  }, [yearsOptions]);

  const displayedYear: DropdownValue =
    yearDropdownOptions.find(({ value }) => value === year)?.label || '';

  const displayedMonth = monthDropdownOptions[month].label;

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
            onChange={changeMonth}
            transparentBackground
            className={cx('dropdown', 'month-dropdown')}
            toggleButtonClassName={cx('toggle-button')}
          />
          <Dropdown
            options={yearDropdownOptions}
            value={displayedYear}
            onChange={changeYear}
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
