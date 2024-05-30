import { useShallow } from 'zustand/react/shallow';

import Modal from '@/components/@common/Modal';
import WindowCommand from '@/components/@shared/WindowCommand';
import BookmarkWrapper from '@/components/domain/bookmark/BookmarkWrapper';

import { useModalStore } from '@/store/modal';

function ContentScript() {
  const { isOpen, open, close } = useModalStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      open: state.openModal,
      close: state.closeModal,
    }))
  );

  const cmdAction = () => {
    if (isOpen) {
      close();
      return;
    }

    open(<BookmarkWrapper />);
  };

  return (
    <WindowCommand cmdKeys={['ctrl', 'b']} action={cmdAction}>
      <Modal element={document.getElementById('modal') as HTMLElement} />
    </WindowCommand>
  );
}

export default ContentScript;
