import ReactDatePicker, { registerLocale } from 'react-datepicker';
import classNames from 'classnames/bind';
import { FC, ReactNode, useMemo, useRef, forwardRef } from 'react';
import { be, ru, enGB, es, uk, zhCN } from 'date-fns/locale';
import { DatePickerHeader } from './header/datePickerHeader';
import Input from './input/input';
import styles from './datePicker.module.scss';

const cx = classNames.bind(styles);

const currentLanguageToLocale: { [key: string]: Locale } = {
  en: enGB,
  es,
  be,
  ru,
  uk,
  zh: zhCN,
};

const DEFAULT_LOCALE = 'en';
const DEFAULT_DATE_FORMAT = 'MM-dd-yyyy';

const CustomInput = forwardRef((props: any, ref) => {
  return <Input {...props} ref={ref} />;
});

export interface DatePickerProps {
  onChange: (data: Date | null) => void;
  onBlur: () => void;
  onFocus: () => void;
  headerNodes: ReactNode;
  disabled: boolean;
  shouldCloseOnSelect: boolean;
  fixedHeight: boolean;
  startDate: Date | null;
  endDate: Date | null;
  customClassName: string;
  popperClassName: string;
  calendarClassName: string;
  customTimeInput: ReactNode;
  language: string;
  yearsOptions: number[];
  placeholder: string;
  dateFormat: string;
  selects: 'start' | 'end' | string;
  selected: Date | null;
}

export const DatePicker: FC<DatePickerProps> = ({
  onChange = () => {},
  disabled = false,
  onBlur = () => {},
  onFocus = () => {},
  endDate = null,
  startDate = null,
  headerNodes = null,
  customClassName = '',
  customTimeInput,
  shouldCloseOnSelect = true,
  popperClassName = '',
  calendarClassName = '',
  fixedHeight = false,
  language = DEFAULT_LOCALE,
  yearsOptions = [],
  placeholder = DEFAULT_DATE_FORMAT.toUpperCase(),
  dateFormat = DEFAULT_DATE_FORMAT,
  selects = '',
  selected = null,
}) => {
  const inputRef = useRef(null);
  const startDateToString = startDate?.toDateString();
  const endDateToString = endDate?.toDateString();
  const isValidEndDate = endDate && startDate && endDate > startDate;

  useMemo(() => registerLocale(language, currentLanguageToLocale[language]), [language]);

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
      customInput={<CustomInput placeholder={placeholder} inputRef={inputRef} />}
      selected={selected}
      startDate={startDate}
      endDate={endDate}
      minDate={selects === 'end' ? startDate : null}
      disabled={disabled}
      shouldCloseOnSelect={shouldCloseOnSelect}
      fixedHeight={fixedHeight}
      locale={currentLanguageToLocale[language]}
      showPopperArrow={false}
      dayClassName={getDayClassName}
      calendarClassName={cx(calendarClassName, 'calendar')}
      renderCustomHeader={(customHeaderProps) => (
        <DatePickerHeader
          {...customHeaderProps}
          headerNodes={headerNodes}
          customClassName={customClassName}
          yearsOptions={yearsOptions}
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
