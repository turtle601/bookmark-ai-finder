import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useShallow } from 'zustand/react/shallow';

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          <div css={getModalWrapperStyle()}>
            <div css={getModalOverlayStyle()} onClick={close}></div>
            <div css={getModalContentStyle()}>{content}</div>
          </div>,
          element
        )}
    </>
  );
}

export default Modal;
