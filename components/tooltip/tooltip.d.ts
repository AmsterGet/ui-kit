import { FC, ReactNode } from 'react';
import { Placement } from '@floating-ui/react-dom';
interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    className?: string;
    dynamicWidth?: boolean;
    width?: number;
    placement?: Placement;
    dataAutomationId?: string;
}
export declare const Tooltip: FC<TooltipProps>;
export {};
