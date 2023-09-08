import { FC, MouseEventHandler, ReactElement, ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './baseIconButton.module.scss';

const cx = classNames.bind(styles);

export interface BaseIconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=136-2&mode=design&t=Ri0jf5ugCvGn3z3b-0
export const BaseIconButton: FC<BaseIconButtonProps> = ({
  children,
  className,
  disabled = false,
  onClick,
  ...rest
}): ReactElement => {
  return (
    <button
      className={cx('base-icon-button', className, { disabled })}
      type="button"
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
