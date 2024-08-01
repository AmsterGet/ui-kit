import { ReactNode, FC } from 'react';
interface ModalHeaderProps {
    title?: ReactNode;
    onClose: () => void;
    withDescription?: boolean;
}
export declare const ModalHeader: FC<ModalHeaderProps>;
export {};
