import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import Modal from '@/components/@common/Modal';
import Bookmarks from '@/components/domain/bookmark/Bookmarks';

import { useModalStore } from '@/store/modal';

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
          open(<Bookmarks />);
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
