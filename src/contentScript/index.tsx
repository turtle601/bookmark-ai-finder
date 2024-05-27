import { createRoot } from 'react-dom/client';

import ContentScript from '@/contentScript/ContentScript';

function init() {
  const appContainer = document.createElement('div');
  const modalContainer = document.createElement('div');
  modalContainer.id = 'modal';

  document.body.appendChild(appContainer);
  document.body.appendChild(modalContainer);

  const root = createRoot(appContainer);
  root.render(<ContentScript />);
}

init();
