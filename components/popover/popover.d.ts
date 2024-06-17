import { FC, ReactNode } from 'react';
import { Placement } from '@floating-ui/react';
interface PopoverProps {
    className?: string;
    content: ReactNode;
    children: ReactNode;
    placement?: Placement;
    fallbackPlacements?: Placement[];
    title?: string;
    arrowOffset?: number;
    safeZone?: number;
    arrowColor?: string;
    dataAutomationId?: string;
    isOpened?: boolean;
    setIsOpened?: (isOpened: boolean) => void;
}
export declare const Popover: FC<PopoverProps>;
export {};
