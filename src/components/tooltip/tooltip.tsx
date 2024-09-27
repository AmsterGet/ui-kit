/*
 * Copyright 2024 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FC, ReactElement, useRef, useState, ReactNode } from 'react';
import classNames from 'classnames/bind';
import {
  useFloating,
  flip,
  Placement,
  FloatingArrow,
  arrow,
  offset,
  autoUpdate,
} from '@floating-ui/react';
import styles from './tooltip.module.scss';

const cx = classNames.bind(styles);
const TOOLTIP_DELAY_MS = 300;
const SAFE_ZONE = 100;
const TRIANGLE_WIDTH = 16;
const TRIANGLE_HEIGHT = 8;
const placements: Placement[] = ['top', 'right', 'bottom', 'left'];

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
  arrowColor?: string;
  safeZone?: number;
  zIndex?: number;
}

export const Tooltip: FC<TooltipProps> = ({
  content,
  wrapperClassName,
  contentClassName,
  dynamicWidth,
  width,
  minWidth = 120,
  safeZone = 4,
  zIndex = 9,
  placement = 'bottom',
  arrowColor = 'rgba(34, 34, 34, 0.91)',
  dataAutomationId,
  children,
}): ReactElement => {
  const [isOpened, setOpened] = useState(false);
  const arrowRef = useRef(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  const { refs, floatingStyles, context } = useFloating({
    open: isOpened,
    placement,
    middleware: [
      offset({
        mainAxis: safeZone + TRIANGLE_HEIGHT,
      }),
      flip({
        fallbackAxisSideDirection: 'start',
        fallbackPlacements: placements,
      }),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
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
        ref={refs.setReference}
        className={cx('tooltip-wrapper', wrapperClassName)}
        onMouseDown={handleHideTooltip}
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleHideTooltip}
      >
        {children}
      </div>
      {isOpened && (
        <div
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            ...styleWidth,
            minWidth,
            zIndex,
          }}
          data-automation-id={dataAutomationId}
        >
          <FloatingArrow
            ref={arrowRef}
            context={context}
            width={TRIANGLE_WIDTH}
            height={TRIANGLE_HEIGHT}
            fill={arrowColor}
          />
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
