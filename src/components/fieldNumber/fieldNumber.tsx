import {
  FC,
  HTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
  ReactElement,
  useMemo,
  useRef,
} from 'react';
import classNames from 'classnames/bind';
import { KeyCodes } from '@common/constants/keyCodes';
import { BaseIconButton, PlusIcon, MinusIcon } from '@components/icons';
import { DEFAULT_WIDTH_CH, ALLOWED_KEY_CODES, MAX_WIDTH_CH } from './constants.js';
import styles from './fieldNumber.module.scss';

const cx = classNames.bind(styles);

type FieldNumberValue = number | string;

interface FieldNumberProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'onFocus'> {
  onChange: (value: number | string) => void;
  value?: FieldNumberValue;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  postfix?: string;
  min?: number;
  max?: number;
  title?: string;
  error?: string;
  touched?: boolean;
  onFocus?: () => void | FocusEventHandler<HTMLInputElement>;
}

export const FieldNumber: FC<FieldNumberProps> = ({
  value = '',
  placeholder = '0',
  disabled = false,
  onChange,
  onFocus,
  onBlur,
  label,
  postfix = '',
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  title,
  error,
  touched = false,
  ...rest
}): ReactElement => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let newValue: FieldNumberValue = event.target.value.replace(/^0(?=\d+|^\d)/g, '');
    if (newValue === '') {
      onChange('');
      return;
    }
    newValue = +newValue;
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { keyCode } = event;

    if (ALLOWED_KEY_CODES.includes(keyCode)) {
      return;
    }

    if (
      keyCode < KeyCodes.NUMBER_START_KEY_CODE ||
      keyCode > KeyCodes.NUMBER_END_KEY_CODE ||
      event.shiftKey
    ) {
      event.preventDefault();
    }
  };
  const handleDecrease = () => {
    const newValue = +value - 1;
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };
  const handleIncrease = () => {
    const newValue = +value + 1;
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };
  const placeholderValue = placeholder + postfix;
  const inputWidth = useMemo(() => {
    let width = (String(value) || placeholderValue).length;
    if (postfix && !value) {
      width += 1;
    }

    return width > MAX_WIDTH_CH ? `${MAX_WIDTH_CH}ch` : `${width || DEFAULT_WIDTH_CH}ch`;
  }, [placeholderValue, postfix, value]);
  const handleInputFieldClick: MouseEventHandler<HTMLDivElement> = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
    if (onFocus) {
      onFocus();
    }
  };

  return (
    <div className={cx('field-number', { disabled })}>
      {label && <span className={cx('label')}>{label}</span>}
      <div
        className={cx('input-container', {
          filled: !!value || value === 0,
          error,
          disabled,
          touched,
        })}
        title={title}
      >
        <BaseIconButton
          className={cx('sign', 'minus')}
          disabled={disabled}
          onClick={handleDecrease}
        >
          <MinusIcon />
        </BaseIconButton>
        <span className={cx('input-field', { disabled })} onClick={handleInputFieldClick}>
          <input
            ref={inputRef}
            className={cx('input')}
            type="number"
            value={value}
            placeholder={placeholderValue}
            disabled={disabled}
            min={min}
            max={max}
            onKeyDown={disabled ? undefined : handleKeyDown}
            onChange={disabled ? undefined : handleChange}
            onFocus={disabled ? undefined : onFocus}
            style={{ width: inputWidth }}
            {...rest}
          />
          {!!postfix && (value === 0 || !!value) && <span>{postfix.slice(0, 1)}</span>}
        </span>
        <BaseIconButton className={cx('sign', 'plus')} disabled={disabled} onClick={handleIncrease}>
          <PlusIcon />
        </BaseIconButton>
      </div>
    </div>
  );
};
