import { createRoot } from 'react-dom/client';

import Provider from '@/app/Provider';

export const makeContentScript = () => {
  const appContainer = document.createElement('div');
  const root = createRoot(appContainer);

  root.render(<Provider />);
};
