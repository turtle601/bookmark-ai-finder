import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useShallow } from 'zustand/react/shallow';

import WindowCommand from '@/components/@shared/WindowCommand';

import { useModalStore } from '@/store/modal';

import {
  getModalContentStyle,
  getModalOverlayStyle,
  getModalWrapperStyle,
} from '@/components/@common/Modal/style';

import type { ModalProps } from '@/components/@common/Modal/type';

function Modal({ element }: ModalProps) {
  const { isOpen, content, close } = useModalStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      content: state.content,
      close: state.closeModal,
    }))
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [isOpen]);

  return (
    <WindowCommand cmdKeys={['esc']} action={close}>
      {isOpen &&
        createPortal(
          <div css={getModalWrapperStyle()}>
            <div css={getModalOverlayStyle()} onClick={close}></div>
            <div css={getModalContentStyle()}>{content}</div>
          </div>,
          element
        )}
    </WindowCommand>
  );
}

export default Modal;
