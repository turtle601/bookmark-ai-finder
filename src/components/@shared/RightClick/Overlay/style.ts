import { css } from '@emotion/react';

export const getOverlayStyle = () => {
  return css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  });
};
