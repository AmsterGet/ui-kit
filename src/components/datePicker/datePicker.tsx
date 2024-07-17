import ReactDatePicker from 'react-datepicker';
import classNames from 'classnames/bind';
import { FC, ReactNode, useRef, forwardRef, ReactElement } from 'react';
import { DatePickerHeader } from './header/datePickerHeader';
import Input from './input/input';
import styles from './datePicker.module.scss';

const cx = classNames.bind(styles);

const DEFAULT_LOCALE = 'en';
const DEFAULT_DATE_FORMAT = 'MM-dd-yyyy';

const CustomInput = forwardRef((props: any, ref) => {
  return <Input {...props} ref={ref} />;
});

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
  locale?: string;
  yearsOptions?: number[];
  placeholder?: string;
  dateFormat?: string;
  selects?: 'start' | 'end' | string;
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
  locale = DEFAULT_LOCALE,
  yearsOptions = [],
  placeholder = DEFAULT_DATE_FORMAT.toUpperCase(),
  dateFormat = DEFAULT_DATE_FORMAT,
  selects = '',
  value = null,
}) => {
  const inputRef = useRef(null);
  const startDateToString = startDate?.toDateString();
  const endDateToString = endDate?.toDateString();
  const isValidEndDate = endDate && startDate && endDate > startDate;

  const getDayClassName = (displayedDates: Date) => {
    const displayedDateToString = displayedDates.toDateString();
    const isCurrentDate = displayedDateToString === startDateToString;
    const isEndDate = isValidEndDate && displayedDateToString === endDateToString;

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
      customInput={<CustomInput customPlaceholder={placeholder} inputRef={inputRef} />}
      selected={value}
      startDate={startDate}
      endDate={endDate}
      minDate={selects === 'end' ? startDate : undefined}
      disabled={disabled}
      shouldCloseOnSelect={shouldCloseOnSelect}
      fixedHeight={fixedHeight}
      locale={locale}
      showPopperArrow={false}
      dayClassName={getDayClassName}
      calendarClassName={cx(calendarClassName, 'calendar')}
      renderCustomHeader={(customHeaderProps) => (
        <DatePickerHeader
          {...customHeaderProps}
          headerNodes={headerNodes}
          customClassName={customClassName}
          yearsOptions={yearsOptions}
          locale={locale}
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
