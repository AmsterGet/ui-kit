import { ReactNode, useEffect, useRef, useState, FC } from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames/bind';
import { useOnClickOutside, useWindowResize } from '@common/hooks';
import { KeyCodes } from '@common/constants/keyCodes';
import { ButtonProps } from '@components/button';
import { ModalContent } from './modalContent';
import { ModalFooter, ModalSize } from './modalFooter';
import { ModalHeader } from './modalHeader';
import styles from './modal.module.scss';

const cx = classNames.bind(styles);

const MODAL_MAX_RATIO = 0.9;
const MODAL_HEADER_AND_FOOTER_HEIGHT = 176;

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

// TODO: Fix issue with modal positioning
export const Modal: FC<ModalProps> = ({
  title,
  headerNode,
  children,
  footerNode,
  okButton,
  cancelButton,
  className,
  size = 'default',
  onClose = () => {},
  overlay = 'default',
  zIndex = 2,
  allowCloseOutside = true,
  scrollable = false,
}) => {
  const [isShown, setShown] = useState(false);
  const [modalHeight, setModalHeight] = useState(0);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const windowSize = useWindowResize();
  const windowHeight = windowSize.height;
  const modalMaxHeight = windowHeight * MODAL_MAX_RATIO;
  const modalMargin = (windowHeight - modalHeight) / 2;
  const contentMaxHeight = modalMaxHeight - MODAL_HEADER_AND_FOOTER_HEIGHT;

  const closeModal = () => {
    setShown(false);
  };

  const onKeydown = (event: KeyboardEvent) => {
    const { keyCode } = event;

    if (keyCode === KeyCodes.ESCAPE_KEY_CODE) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalRef && modalRef.current) {
      const { clientHeight } = modalRef.current;
      setModalHeight(clientHeight);
    }
  }, [children, windowSize]);

  useEffect(() => {
    setShown(true);

    if (modalRef && modalRef.current) {
      modalRef.current.focus();
    }

    document.addEventListener('keydown', onKeydown, false);

    return () => document.removeEventListener('keydown', onKeydown, false);
  }, []);

  useOnClickOutside(modalRef, allowCloseOutside ? closeModal : undefined);

  return (
    <AnimatePresence onExitComplete={onClose}>
      {isShown && (
        <div className={cx('modal', { [`overlay-${overlay}`]: overlay })} style={{ zIndex }}>
          <motion.div
            className={cx('modal-window', { [`size-${size}`]: size }, className)}
            key="modal-window"
            ref={modalRef}
            tabIndex={0}
            initial={{ opacity: 0, marginTop: -modalMargin }}
            animate={{ opacity: 1, marginTop: modalMargin }}
            exit={{ opacity: 0, marginTop: -modalMargin }}
            transition={{ duration: 0.3 }}
          >
            <ModalHeader title={title} headerNode={headerNode} onClose={closeModal} />
            {scrollable ? (
              <Scrollbars autoHeight autoHeightMax={contentMaxHeight} hideTracksWhenNotNeeded>
                <ModalContent>{children}</ModalContent>
              </Scrollbars>
            ) : (
              <ModalContent>{children}</ModalContent>
            )}
            <ModalFooter
              size={size}
              footerNode={footerNode}
              okButton={okButton}
              cancelButton={cancelButton}
              closeHandler={closeModal}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
