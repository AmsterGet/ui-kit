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
import { useFloating, flip, Placement } from '@floating-ui/react-dom';
import styles from './tooltip.module.scss';

const cx = classNames.bind(styles);
const TOOLTIP_DELAY_MS = 2000;
const SAFE_ZONE = 100;

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  className?: string;
  dynamicWidth?: boolean;
  width?: number;
  placement?: Placement;
  dataAutomationId?: string;
}

export const Tooltip: FC<TooltipProps> = ({
  content,
  className,
  dynamicWidth,
  width,
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
        className={cx('tooltip-wrapper', className)}
        onMouseDown={handleHideTooltip}
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleHideTooltip}
      >
        {children}
      </div>
      {isOpened && (
        <div
          className={cx('tooltip')}
          ref={(node) => refs.setFloating(node as HTMLElement)}
          style={{
            ...floatingStyles,
            ...styleWidth,
          }}
          data-automation-id={dataAutomationId}
        >
          <div
            className={cx('tooltip-content')}
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
