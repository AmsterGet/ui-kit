import { ReactNode, FC, MouseEventHandler } from 'react';
import classNames from 'classnames/bind';
import { Button, ButtonProps } from '@components/button';
import styles from './modalFooter.module.scss';

const cx = classNames.bind(styles);

export type ModalSize = 'default' | 'small' | 'large';

interface ModalFooterProps {
  closeHandler: MouseEventHandler<HTMLButtonElement>;
  footerNode?: ReactNode;
  okButton?: ButtonProps;
  cancelButton?: ButtonProps;
  size?: ModalSize;
}

export const ModalFooter: FC<ModalFooterProps> = ({
  footerNode,
  closeHandler,
  okButton,
  cancelButton,
  size,
}) => {
  return (
    <div className={cx('modal-footer', { 'with-extra-node': footerNode, [`size-${size}`]: size })}>
      {footerNode && footerNode}
      <div className={cx('buttons-block')}>
        {cancelButton && (
          <div className={cx('button-container')}>
            <Button
              variant="ghost"
              adjustWidthOn={size === 'small' ? 'parent' : 'content'}
              onClick={closeHandler}
              {...cancelButton}
            />
          </div>
        )}
        {okButton && (
          <div className={cx('button-container')}>
            <Button adjustWidthOn={size === 'small' ? 'parent' : 'content'} {...okButton} />
          </div>
        )}
      </div>
    </div>
  );
};
