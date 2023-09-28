import classNames from 'classnames/bind';
import styles from './fieldTextFlex.module.scss';
import {
  ChangeEventHandler,
  ComponentPropsWithRef,
  FC,
  FocusEventHandler,
  ForwardedRef,
  KeyboardEventHandler,
  forwardRef,
  useId,
} from 'react';

const cx = classNames.bind(styles);

const HEIGHT = 72;
const BORDER = 2;

export interface FieldTextFlexProps extends ComponentPropsWithRef<'textarea'> {
  value: string;
  readonly?: boolean;
  error?: string;
  touched?: boolean;
  label?: string;
  helpText?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>;
}

// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=13023-1859&mode=design&t=vL74fEo9Hq6GFAXW-0
export const FieldTextFlex: FC<FieldTextFlexProps> = forwardRef(
  (
    {
      value = '',
      readonly = false,
      error = '',
      placeholder = '',
      disabled = false,
      touched = false,
      className = '',
      label = '',
      helpText = '',
      onChange,
      onFocus,
      onBlur,
      onKeyUp,
      ...rest
    },
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const textAriaId = useId();
    const hasError = error && touched;

    const resizeHeight = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      event.target.style.height = `${HEIGHT}px`;
      event.target.style.height = `${event.target.scrollHeight + BORDER}px`;
    };
    return (
      <>
        {label && (
          <label htmlFor={textAriaId} className={cx('label', { disabled })}>
            {label}
          </label>
        )}
        <textarea
          id={textAriaId}
          ref={ref}
          className={cx('text-area', className, {
            disabled,
            error,
            touched,
          })}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          onInput={resizeHeight}
          {...rest}
        >
          {value}
        </textarea>
        {(hasError || helpText) && (
          <div className={cx('additional-content', { disabled })}>
            {hasError && <span className={cx('error-text')}>{error}</span>}
            {helpText && <span className={cx('help-text')}>{helpText}</span>}
          </div>
        )}
      </>
    );
  },
);
