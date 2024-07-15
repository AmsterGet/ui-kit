import { forwardRef, ForwardRefRenderFunction } from 'react';
import classNames from 'classnames/bind';
import { CalendarIcon } from '@components/icons';
import { FieldText } from '@components/fieldText';
import styles from './input.module.scss';

const cx = classNames.bind(styles);

interface InputProps {
  value: string;
  onChange: () => void;
  onClick: () => void;
  customPlaceholder: string;
}
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { value, onChange, customPlaceholder, onClick },
  ref,
) => {
  return (
    <FieldText
      className={cx('input')}
      defaultWidth={false}
      onChange={onChange}
      value={value}
      placeholder={customPlaceholder}
      endIcon={<CalendarIcon />}
      onClick={onClick}
      ref={ref}
    />
  );
};

export default forwardRef(Input);
