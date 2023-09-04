import { FC, MouseEventHandler, ReactElement, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './baseIcon.module.scss';

const cx = classNames.bind(styles);

export interface BaseIconProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=136-2&mode=design&t=Ri0jf5ugCvGn3z3b-0
export const BaseIcon: FC<BaseIconProps> = ({
  children,
  className,
  disabled = false,
  onClick,
}): ReactElement => {
  return (
    <span
      className={cx('base-icon', className, { disabled })}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </span>
  );
};
