import {
  FC,
  ChangeEventHandler,
  forwardRef,
  ForwardedRef,
  ReactElement,
  ReactNode,
  HTMLAttributes,
} from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as CrossIcon } from '@assets/icons/cross.svg';
import styles from './fieldText.module.scss';

const cx = classNames.bind(styles);

interface FieldTextProps extends HTMLAttributes<HTMLInputElement> {
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
              <i className={cx('icon')}>{startIcon}</i>
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
              <i className={cx('icon')}>{endIcon}</i>
            </span>
          )}
          {clearable && (
            <span className={cx('icon-container-end')}>
              <i className={cx('clear-icon', { disabled })} onClick={clearInput}>
                <CrossIcon />
              </i>
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
