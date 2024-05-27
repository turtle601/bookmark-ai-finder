import Modal from '@/components/@common/Modal';
import { useModalStore } from '@/store/modal';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

function ContentScript() {
  const { isOpen, open, close } = useModalStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      open: state.openModal,
      close: state.closeModal,
    }))
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        if (isOpen) {
          close();
        } else {
          open(
            <div
              css={css({
                color: 'white',
              })}
            >
              안녕하세요
            </div>
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return <Modal element={document.getElementById('modal') as HTMLElement} />;
}

export default ContentScript;
