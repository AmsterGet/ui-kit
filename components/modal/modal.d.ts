import { ReactNode, FC } from 'react';
import { ButtonProps } from '../button';
import { ModalSize } from './modalFooter';
type ModalOverlay = 'default' | 'light-cyan';
interface ModalProps {
    onClose: () => void;
    title?: ReactNode;
    headerNode?: ReactNode;
    children?: ReactNode;
    footerNode?: ReactNode;
    className?: string;
    zIndex?: number;
    size?: ModalSize;
    overlay?: ModalOverlay;
    allowCloseOutside?: boolean;
    okButton?: ButtonProps;
    cancelButton?: ButtonProps;
    scrollable?: boolean;
}
export declare const Modal: FC<ModalProps>;
export {};
