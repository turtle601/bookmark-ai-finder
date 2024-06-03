import { useShallow } from 'zustand/react/shallow';

import Modal from '@/components/@common/Modal';
import WindowCommand from '@/components/@shared/WindowCommand';
import BookmarkWrapper from '@/components/domain/bookmark/BookmarkWrapper';

import { useModalStore } from '@/store/modal';
import { QueryProvider } from '@/components/@shared/Query/context/Provider';

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
      <QueryProvider>
        <Modal element={document.getElementById('modal') as HTMLElement} />
      </QueryProvider>
    </WindowCommand>
  );
}

export default ContentScript;
