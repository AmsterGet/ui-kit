import {
  ChangeEventHandler,
  forwardRef,
  ReactElement,
  ReactNode,
  useState,
  useRef,
  InputHTMLAttributes,
  MutableRefObject,
} from 'react';
import classNames from 'classnames/bind';
import { ClearIcon } from '@components/icons';
import styles from './fieldText.module.scss';
import { SpinLoader } from '@components/spinLoader';

const cx = classNames.bind(styles);

interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  className?: string;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  touched?: boolean;
  title?: string;
  label?: string;
  helpText?: string;
  defaultWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  clearable?: boolean;
  onClear?: (prevValue?: string) => void;
  isRequired?: boolean;
  hasDoubleMessage?: boolean;
  type?: string;
  displayError?: boolean;
  collapsible?: boolean;
  loading?: boolean;
}

export const FieldText = forwardRef<HTMLInputElement, FieldTextProps>(
  (
    {
      value = '',
      className,
      error,
      placeholder,
      disabled = false,
      onChange,
      touched = false,
      title,
      label,
      helpText,
      defaultWidth = true,
      startIcon,
      endIcon,
      clearable = false,
      onClear,
      isRequired = false,
      hasDoubleMessage = false,
      type = 'text',
      displayError = true,
      collapsible = false,
      loading = false,
      onFocus = () => {},
      onBlur = () => {},
      ...rest
    },
    ref,
  ): ReactElement => {
    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = ref || internalRef;
    const [focused, setFocused] = useState(false);

    const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus(event);
    };

    const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur(event);
    };

    const clearInput = () => {
      if (onClear) {
        onClear(value);
      }
    };

    const showError = displayError && error && touched;
    const helpTextElement = <span className={cx('text', 'help-text')}>{helpText}</span>;

    return (
      <>
        {label && (
          <span className={cx('label', { disabled })}>
            {label}
            {isRequired && <span className={cx('asterisk')}>*</span>}
          </span>
        )}
        <div
          className={cx('field', className, {
            error,
            touched,
            disabled,
            'default-width': defaultWidth,
            collapsed: collapsible && !focused && !value,
          })}
          title={title}
        >
          {loading ? (
            <SpinLoader />
          ) : (
            startIcon && (
              <span
                className={cx('icon-container-start')}
                onClick={() => {
                  const input = inputRef as MutableRefObject<HTMLInputElement>;
                  input.current?.focus();
                }}
              >
                <span className={cx('icon')}>{startIcon}</span>
              </span>
            )
          )}
          <span className={cx('input-container')}>
            <input
              ref={inputRef}
              type={type}
              className={cx('input')}
              value={value}
              disabled={disabled}
              onChange={onChange}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              {...rest}
            />
            {placeholder && !value && (
              <span className={cx('placeholder')}>
                {placeholder}
                {isRequired && !label && <span className={cx('asterisk')} />}
              </span>
            )}
          </span>
          {endIcon && (
            <span className={cx('icon-container-end')}>
              <span className={cx('icon')}>{endIcon}</span>
            </span>
          )}
          {clearable && value.length > 0 && (
            <span className={cx('icon-container-end')}>
              <button type="button" className={cx('clear-icon', { disabled })} onClick={clearInput}>
                <ClearIcon />
              </button>
            </span>
          )}
        </div>
        {(showError || helpText) && (
          <div className={cx('additional-content', { disabled })}>
            {showError ? (
              <>
                <span className={cx('text', 'error-text')}>{error}</span>
                {hasDoubleMessage && helpTextElement}
              </>
            ) : (
              helpText && helpTextElement
            )}
          </div>
        )}
      </>
    );
  },
);
