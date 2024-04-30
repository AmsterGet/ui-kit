import { ReactNode, FC, MouseEventHandler } from 'react';
import { ButtonProps } from '../../button';
export type ModalSize = 'default' | 'small' | 'large';
interface ModalFooterProps {
    closeHandler: MouseEventHandler<HTMLButtonElement>;
    footerNode?: ReactNode;
    okButton?: ButtonProps;
    cancelButton?: ButtonProps;
    size?: ModalSize;
}
export declare const ModalFooter: FC<ModalFooterProps>;
export {};
