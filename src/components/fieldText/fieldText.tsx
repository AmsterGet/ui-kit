import {
  FC,
  ChangeEventHandler,
  forwardRef,
  ForwardedRef,
  ReactElement,
  ReactNode,
  ComponentPropsWithRef,
} from 'react';
import classNames from 'classnames/bind';
import { ClearIcon } from '@components/icons';
import styles from './fieldText.module.scss';

const cx = classNames.bind(styles);

interface FieldTextProps extends ComponentPropsWithRef<'input'> {
  value?: string;
  className?: string;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
}

export const FieldText: FC<FieldTextProps> = forwardRef(
  (
    {
      value,
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
      ...rest
    },
    ref: ForwardedRef<HTMLInputElement>,
  ): ReactElement => {
    const clearInput = () => {
      if (onClear) {
        onClear(value);
      }
    };

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
          })}
          title={title}
        >
          {startIcon && (
            <span className={cx('icon-container-start')}>
              <span className={cx('icon')}>{startIcon}</span>
            </span>
          )}
          <span className={cx('input-container')}>
            <input
              ref={ref}
              type={type}
              className={cx('input')}
              value={value}
              disabled={disabled}
              onChange={onChange}
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
          {clearable && (
            <span className={cx('icon-container-end')}>
              <button type="button" className={cx('clear-icon', { disabled })} onClick={clearInput}>
                <ClearIcon />
              </button>
            </span>
          )}
        </div>
        {((error && touched) || helpText) && (
          <div className={cx('additional-content', { disabled })}>
            {error && touched ? (
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
