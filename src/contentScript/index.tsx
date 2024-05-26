import { createRoot } from 'react-dom/client';

import ContentScript from '@/contentScript/ContentScript';

function init() {
  const appContainer = document.createElement('div');
  document.body.appendChild(appContainer);

  const root = createRoot(appContainer);
  root.render(<ContentScript />);
}

init();
