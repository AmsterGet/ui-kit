import { ReactNode, FC } from '../../../../node_modules/react';
interface ModalHeaderProps {
    title?: ReactNode;
    onClose: () => void;
    withDescription?: boolean;
}
export declare const ModalHeader: FC<ModalHeaderProps>;
export {};
