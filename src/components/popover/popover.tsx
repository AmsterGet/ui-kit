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
import {
  offset,
  useFloating,
  FloatingArrow,
  arrow,
  flip,
  autoUpdate,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
  Placement,
} from '@floating-ui/react';
import classNames from 'classnames/bind';
import styles from './popover.module.scss';

const cx = classNames.bind(styles);
const TRIANGLE_WIDTH = 16;
const TRIANGLE_HEIGHT = 8;
const middlePlacements : Placement[] = [
  'top',
  'right',
  'bottom',
  'left',
];
const verticalPlacements : Placement[] = [
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
];
const allPlacements : Placement[] = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
];

interface PopoverProps {
  className?: string,
  content: ReactNode,
  children: ReactNode,
  placement?: Placement,
  fallbackPlacements?: Placement[],
  title?: string,
  arrowOffset?: number,
  safeZone?: number,
  arrowColor?: string,
  dataAutomationId?: string,
  onClose?: () => void,
  onClickHandle?: (isOpened: boolean, setIsOpen: (isOpen: boolean) => void) => void,
}

export const Popover: FC<PopoverProps> = ({
  className,
  content,
  children,
  placement : initialPlacement = 'bottom',
  fallbackPlacements = allPlacements,
  title,
  arrowOffset = 16,
  safeZone = 4,
  arrowColor = 'white',
  dataAutomationId,
  onClose,
  onClickHandle,
}) : ReactElement => {
  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = (isOpened: boolean) => {
    if (!isOpened && onClose) {
      onClose();
    }

    if (onClickHandle?.length) {
      onClickHandle(isOpened, setIsOpen);
    } else {
      setIsOpen(isOpened);
    }
  };

  const { placement, refs, floatingStyles, context} = useFloating({
    open: isOpen,
    onOpenChange,
    placement: initialPlacement,
    middleware: [
      offset(({rects, placement: currentPlacement}) => ({
        mainAxis: safeZone + TRIANGLE_HEIGHT,
        alignmentAxis: ((verticalPlacements.includes(currentPlacement) ? rects.reference.height : rects.reference.width) - TRIANGLE_WIDTH) / 2 - arrowOffset,
      })),
      flip({
        fallbackAxisSideDirection: 'start',
        fallbackPlacements: fallbackPlacements,
      }),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className={cx('popover-wrapper', className)}
      >
        {children}
      </div>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className={cx('popover')}
            data-automation-id={dataAutomationId}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps}
          >
            <FloatingArrow
              ref={arrowRef}
              context={context}
              width={TRIANGLE_WIDTH}
              height={TRIANGLE_HEIGHT}
              fill={arrowColor}
              staticOffset={middlePlacements.includes(placement) ? null : arrowOffset}
            />
            {title && <div className={cx('title')}>{title}</div>}
            <div className={cx('content')}>{content}</div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};
