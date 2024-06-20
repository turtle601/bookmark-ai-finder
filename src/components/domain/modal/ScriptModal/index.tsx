import { useCallback } from 'react';

import {
  useModalDispatch,
  useModalState,
} from '@/components/@common/Modal/context/hooks';

import Modal from '@/components/@common/Modal';
import WindowCommand from '@/components/@shared/WindowCommand';
import BookmarkWrapper from '@/components/domain/bookmark/BookmarkWrapper';

import type { ModalContent, ModalType } from '@/components/@common/Modal/type';

function ScriptModal() {
  const dispatch = useModalDispatch();
  const { script } = useModalState();

  const open = useCallback(
    (type: ModalType, content: ModalContent) => {
      dispatch({
        type: 'OPEN_MODAL',
        modalType: type,
        content,
      });
    },
    [dispatch],
  );

  const close = useCallback(
    (type: ModalType) => {
      dispatch({
        type: 'CLOSE_MODAL',
        modalType: type,
      });
    },
    [dispatch],
  );

  const cmdAction = useCallback(() => {
    if (script.isOpen) {
      close('script');
      return;
    }

    open('script', <BookmarkWrapper />);
  }, [close, open, script.isOpen]);

  return (
    <WindowCommand cmdKeys={['ctrl', 'b']} action={cmdAction}>
      <Modal name="script" />
    </WindowCommand>
  );
}

export default ScriptModal;
