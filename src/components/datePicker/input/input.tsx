import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { CalendarIcon } from '@components/icons';
import { FieldText } from '@components/fieldText';
import styles from './input.module.scss';

const cx = classNames.bind(styles);

interface InputProps {
  value: string;
  onChange: () => void;
  placeholder: string;
}
const Input: React.FC<InputProps> = ({ value, onChange, placeholder }, ref) => {
  return (
    <FieldText
      className={cx('input')}
      defaultWidth={false}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      endIcon={<CalendarIcon />}
      ref={ref}
    />
  );
};

export default forwardRef(Input);
