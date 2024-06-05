import { css } from '@emotion/react';
import { color } from '@/styles/theme';

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
    opacity: 0.2,
  });
};

export const getModalContentStyle = (zIndex: number) => {
  return css({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: `${zIndex + 100}`,
    width: '500px',
    height: '300px',
    minWidth: '400px',
    maxWidth: '800px',
    minHeight: '300px',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: `inset 0 0 10px ${color.gray300}, 0 0 10px ${color.gray800}`,
  });
};
