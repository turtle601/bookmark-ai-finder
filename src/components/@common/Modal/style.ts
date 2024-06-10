import { css } from '@emotion/react';

export const getModalWrapperStyle = (zIndex: number) => {
  return css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: `${zIndex}`,
  });
};

export const getModalOverlayStyle = (zIndex: number) => {
  return css({
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: `${zIndex + 10}`,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  });
};

export const getModalContentStyle = (zIndex: number) => {
  return css({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: `${zIndex + 100}`,
  });
};
