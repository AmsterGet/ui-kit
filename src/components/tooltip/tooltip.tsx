import { FC, ReactElement, useRef, useState, ReactNode } from 'react';
import classNames from 'classnames/bind';
import { useFloating, flip, Placement } from '@floating-ui/react-dom';
import styles from './tooltip.module.scss';

const cx = classNames.bind(styles);
const TOOLTIP_DELAY_MS = 300;
const SAFE_ZONE = 100;

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  wrapperClassName?: string;
  contentClassName?: string;
  dynamicWidth?: boolean;
  width?: number;
  minWidth?: number;
  placement?: Placement;
  dataAutomationId?: string;
}

export const Tooltip: FC<TooltipProps> = ({
  content,
  wrapperClassName,
  contentClassName,
  dynamicWidth,
  width,
  minWidth = 120,
  placement = 'bottom',
  dataAutomationId,
  children,
}): ReactElement => {
  const [isOpened, setOpened] = useState(false);
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  const { refs, floatingStyles } = useFloating({
    placement,
    strategy: 'fixed',
    middleware: [
      flip({
        fallbackPlacements: ['bottom', 'top', 'right', 'left'],
      }),
    ],
  });

  const styleWidth = dynamicWidth ? null : { width: `${width}px` };
  const clientWidth = document.documentElement.clientWidth;
  const maxWidth = !styleWidth ? clientWidth - SAFE_ZONE : styleWidth;

  const handleHideTooltip = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    setOpened(false);
  };

  const handleShowTooltip = () => {
    timeoutId.current = setTimeout(() => setOpened(true), TOOLTIP_DELAY_MS);
  };

  return (
    <>
      <div
        ref={(node) => refs.setReference(node as HTMLElement)}
        className={cx('tooltip-wrapper', wrapperClassName)}
        onMouseDown={handleHideTooltip}
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleHideTooltip}
      >
        {children}
      </div>
      {isOpened && (
        <div
          className={cx('tooltip', 'tooltip-arrow')}
          ref={(node) => refs.setFloating(node as HTMLElement)}
          style={{
            ...floatingStyles,
            ...styleWidth,
            minWidth,
          }}
          data-automation-id={dataAutomationId}
          data-placement={placement}
        >
          <div
            className={cx('tooltip-content', contentClassName)}
            style={{
              maxWidth: `${maxWidth}px`,
            }}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
};
