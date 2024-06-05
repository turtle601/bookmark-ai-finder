import { createRoot } from 'react-dom/client';

import ContentScript from '@/contentScript/ContentScript';

function init() {
  const appContainer = document.createElement('div');

  const scriptModalContainer = document.createElement('div');
  const triggerModalContainer = document.createElement('div');

  scriptModalContainer.id = 'script';
  triggerModalContainer.id = 'trigger';

  document.body.appendChild(appContainer);
  document.body.appendChild(scriptModalContainer);
  document.body.appendChild(triggerModalContainer);

  const root = createRoot(appContainer);
  root.render(<ContentScript />);
}

init();
