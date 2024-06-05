import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import WindowCommand from '@/components/@shared/WindowCommand';

import {
  getModalContentStyle,
  getModalOverlayStyle,
  getModalWrapperStyle,
} from '@/components/@common/Modal/style';

import { useModalState } from '@/components/@common/Modal/context/hooks';
import { ModalProps } from '@/components/@common/Modal/type';

function Modal({ name }: ModalProps) {
  const state = useModalState();
  const { isOpen, content, zIndex } = state[name];

  console.log(state);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          <WindowCommand cmdKeys={['esc']} action={close}>
            <div css={getModalWrapperStyle(zIndex)}>
              <div css={getModalOverlayStyle(zIndex)} onClick={close}></div>
              <div css={getModalContentStyle(zIndex)}>{content}</div>
            </div>
          </WindowCommand>,
          document.getElementById(name) as HTMLElement
        )}
    </>
  );
}

export default Modal;
