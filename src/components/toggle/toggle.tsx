import classNames from 'classnames/bind';
import {
  ChangeEventHandler,
  FC,
  HTMLAttributes,
  KeyboardEventHandler,
  ReactElement,
  ReactNode,
  useId,
  useRef,
} from 'react';
import { KeyCodes } from '@common/constants/keyCodes';
import styles from './toggle.module.scss';

const cx = classNames.bind(styles);

interface ToggleProps extends HTMLAttributes<HTMLInputElement> {
  value: boolean;
  title?: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Toggle: FC<ToggleProps> = ({
  children,
  value,
  onChange,
  className,
  disabled = false,
  title,
  ...rest
}): ReactElement => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const toggleLabelId = useId();

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
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
    <label id={toggleLabelId} title={title} className={cx('toggle', className, { disabled })}>
      <input
        ref={inputRef}
        tabIndex={disabled ? -1 : 0}
        onChange={onChange}
        checked={value}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        className={cx('input')}
        type="checkbox"
        {...rest}
      />
      <div
        aria-labelledby="rp-ui-kit-toggle-label"
        role="checkbox"
        aria-checked={value}
        className={cx('slider', 'round')}
      />
      {children && <span className={cx('children-container')}>{children}</span>}
    </label>
  );
};
