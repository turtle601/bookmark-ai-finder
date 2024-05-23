import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global } from '@emotion/react';

import App from '@/App';
import { globalStyle } from '@/styles/global';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Global styles={globalStyle} />
    <App />
  </StrictMode>
);
