import {
  ChangeEventHandler,
  HTMLAttributes,
  ReactNode,
  useRef,
  FC,
  ReactElement,
  KeyboardEvent,
} from 'react';
import classNames from 'classnames/bind';
import { KeyCodes } from '@common/constants/keyCodes';
import styles from './radio.module.scss';

const cx = classNames.bind(styles);

export type RadioValue = string | number;

export type RadioOption = {
  value: RadioValue;
  label: string;
  disabled: boolean;
};

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  option: RadioOption;
  value?: RadioValue;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=2350-8765&mode=design&t=zqqBqKhYYsKNDax7-0
export const Radio: FC<RadioProps> = ({
  option,
  value,
  onChange,
  onFocus,
  onBlur,
  className,
  ...rest
}): ReactElement => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isChecked = String(option.value) === String(value);

  const handleKeyDown = (event: KeyboardEvent<HTMLLabelElement>) => {
    const { keyCode } = event;

    if (keyCode === KeyCodes.SPACE_KEY_CODE) {
      event.preventDefault();
      inputRef.current?.click();

      return;
    }

    if (keyCode === KeyCodes.ENTER_KEY_CODE) {
      event.preventDefault();
      inputRef.current?.click();
    }
  };

  return (
    // eslint-disable-next-line
    <label
      id="rp-ui-kit-radio-label"
      className={cx(className, 'radio-button', {
        disabled: option.disabled,
      })}
      tabIndex={option.disabled ? -1 : 0}
      onKeyDown={option.disabled ? undefined : handleKeyDown}
    >
      <input
        tabIndex={-1}
        ref={inputRef}
        type="radio"
        className={cx('input')}
        disabled={option.disabled}
        onChange={onChange}
        value={option.value}
        checked={isChecked}
        {...rest}
      />
      <span
        role="radio"
        aria-labelledby="rp-ui-kit-radio-label"
        aria-checked={isChecked}
        className={cx('toggler', {
          disabled: option.disabled,
          checked: isChecked,
        })}
      />
      <span className={cx('children-container')}>{option.label}</span>
    </label>
  );
};
