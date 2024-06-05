import {
  useModalDispatch,
  useModalState,
} from '@/components/@common/Modal/context/hooks';

import Modal from '@/components/@common/Modal';
import WindowCommand from '@/components/@shared/WindowCommand';
import BookmarkWrapper from '@/components/domain/bookmark/BookmarkWrapper';

function App() {
  const dispatch = useModalDispatch();
  const { script } = useModalState();

  const cmdAction = () => {
    if (script.isOpen) {
      dispatch({
        type: 'CLOSE_MODAL',
        modalType: 'script',
      });

      return;
    }

    dispatch({
      type: 'OPEN_MODAL',
      modalType: 'script',
      content: <BookmarkWrapper />,
    });
  };

  return (
    <>
      <WindowCommand cmdKeys={['ctrl', 'b']} action={cmdAction}>
        <Modal name="script" />
      </WindowCommand>
      <Modal name="trigger" />
    </>
  );
}

export default App;
