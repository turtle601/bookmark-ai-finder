import { createRoot } from 'react-dom/client';

import Popup from './Popup';

function init() {
  const appContainer = document.createElement('div');
  document.body.appendChild(appContainer);

  const root = createRoot(appContainer);
  root.render(<Popup />);
}

init();
