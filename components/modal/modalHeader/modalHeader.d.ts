import { ReactNode, FC } from 'react';
interface ModalHeaderProps {
    title?: ReactNode;
    headerNode?: ReactNode;
    onClose: () => void;
}
export declare const ModalHeader: FC<ModalHeaderProps>;
export {};
