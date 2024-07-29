import { forwardRef, FC, ForwardedRef, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { DropdownOptionProps } from '../types';
import styles from './dropdownOption.module.scss';

const cx = classNames.bind(styles);

export const DropdownOption: FC<DropdownOptionProps> = forwardRef(
  (props: DropdownOptionProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const {
      option: { value, disabled, hidden, label, title, groupRef },
      selected,
      onChange,
      render,
      highlightHovered,
      onMouseEnter,
    } = props;
    const onChangeHandler = () => {
      if (onChange) {
        onChange(value);
      }
    };

    return (
      <div
        className={cx('dropdown-option', {
          selected,
          disabled,
          hidden,
          hover: highlightHovered,
        })}
        title={title}
        onClick={onChangeHandler}
        ref={ref}
        onMouseEnter={onMouseEnter}
      >
        <div className={cx('single-option', { 'sub-option': !!groupRef })}>
          {render ? render(props) : label}
        </div>
      </div>
    );
  },
);
