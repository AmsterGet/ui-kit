import { FC, ReactNode } from '../../../node_modules/react';
import { Placement } from '@floating-ui/react-dom';
interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    wrapperClassName?: string;
    contentClassName?: string;
    dynamicWidth?: boolean;
    width?: number;
    placement?: Placement;
    dataAutomationId?: string;
}
export declare const Tooltip: FC<TooltipProps>;
export {};
