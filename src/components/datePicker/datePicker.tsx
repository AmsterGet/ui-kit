import ReactDatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import classNames from 'classnames/bind';
import { FC, ReactNode, useRef, ReactElement } from 'react';
import { FieldText } from '@components/fieldText';
import { CalendarIcon } from '@components/icons';
import { DatePickerHeader } from './header/datePickerHeader';
import styles from './datePicker.module.scss';

const cx = classNames.bind(styles);

const DEFAULT_LANGUAGE = 'en';
const DEFAULT_DATE_FORMAT = 'MM-dd-yyyy';

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

export const DatePicker: FC<DatePickerProps> = ({
  onChange = () => {},
  disabled = false,
  onBlur = () => {},
  onFocus = () => {},
  endDate = undefined,
  startDate = undefined,
  headerNodes = null,
  customClassName = '',
  customTimeInput = undefined,
  shouldCloseOnSelect = true,
  popperClassName = '',
  calendarClassName = '',
  fixedHeight = false,
  language = DEFAULT_LANGUAGE,
  yearsOptions = [],
  placeholder = DEFAULT_DATE_FORMAT.toUpperCase(),
  dateFormat = DEFAULT_DATE_FORMAT,
  selects = 'start',
  value = null,
}) => {
  const inputRef = useRef(null);
  const startDateString = startDate?.toDateString();
  const endDateString = endDate?.toDateString();
  const isValidEndDate = endDate && startDate && endDate > startDate;

  const getDayClassName = (displayedDates: Date) => {
    const displayedDateString = displayedDates.toDateString();
    const isCurrentDate = displayedDateString === startDateString;
    const isEndDate = isValidEndDate && displayedDateString === endDateString;

    const isInsideSelectedRange =
      startDate && endDate && displayedDates > startDate && displayedDates < endDate;

    return cx('date', {
      'current-date': isCurrentDate,
      'selected-range': isInsideSelectedRange && !isEndDate,
      'end-date': isEndDate && isValidEndDate,
      disabled,
    });
  };

  return (
    <ReactDatePicker
      customInput={
        <FieldText
          className={cx('input')}
          defaultWidth={false}
          endIcon={<CalendarIcon />}
          ref={inputRef}
        />
      }
      placeholderText={placeholder}
      selected={value}
      startDate={startDate}
      endDate={endDate}
      minDate={selects === 'end' ? startDate : undefined}
      disabled={disabled}
      shouldCloseOnSelect={shouldCloseOnSelect}
      fixedHeight={fixedHeight}
      locale={language}
      showPopperArrow={false}
      dayClassName={getDayClassName}
      calendarClassName={cx(calendarClassName, 'calendar')}
      renderCustomHeader={(customHeaderProps: ReactDatePickerCustomHeaderProps) => (
        <DatePickerHeader
          {...customHeaderProps}
          headerNodes={headerNodes}
          customClassName={customClassName}
          yearsOptions={yearsOptions}
          locale={language}
        />
      )}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      customTimeInput={customTimeInput}
      showTimeInput={Boolean(customTimeInput)}
      popperClassName={cx(popperClassName, 'popper')}
      dateFormat={dateFormat}
      selectsStart={selects === 'start'}
      selectsEnd={selects === 'end'}
      className={cx('datepicker')}
    />
  );
};
