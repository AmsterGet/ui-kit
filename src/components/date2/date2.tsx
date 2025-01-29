import ReactDatePicker from 'react-datepicker';
import { FC, ReactNode, ReactElement } from 'react';

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

export const Date2: FC<DatePickerProps> = ({
  onChange = () => {},
  disabled = false,
  onBlur = () => {},
  onFocus = () => {},
  endDate = undefined,
  startDate = undefined,
  customTimeInput = undefined,
  shouldCloseOnSelect = true,
  fixedHeight = false,
  language = DEFAULT_LANGUAGE,
  placeholder = DEFAULT_DATE_FORMAT.toUpperCase(),
  dateFormat = DEFAULT_DATE_FORMAT,
  selects = 'start',
  value = null,
}) => {
  return (
    <ReactDatePicker
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
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      customTimeInput={customTimeInput}
      showTimeInput={Boolean(customTimeInput)}
      dateFormat={dateFormat}
      selectsStart={selects === 'start'}
      selectsEnd={selects === 'end'}
    />
  );
};
