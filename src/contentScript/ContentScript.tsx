import QueryProvider from '@/components/@shared/Query/context/Provider';
import ModalProvider from '@/components/@common/Modal/context/Provider';

import App from '@/contentScript/App';

import { modalState } from '@/components/@common/Modal/context/store';

function ContentScript() {
  return (
    <QueryProvider>
      <ModalProvider modalState={modalState}>
        <App />
      </ModalProvider>
    </QueryProvider>
  );
}

export default ContentScript;
