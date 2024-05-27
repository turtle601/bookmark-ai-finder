import { css } from '@emotion/react';
import { color } from '@/styles/theme';

export const getModalWrapperStyle = () =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 999,
  });

export const getModalOverlayStyle = () => {
  return css({
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    opacity: 0.2,
  });
};

export const getModalContentStyle = () =>
  css({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 10,
    width: '75%',
    height: '75%',
    minWidth: '400px',
    maxWidth: '800px',
    minHeight: '600px',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: `inset 0 0 10px ${color.gray300}, 0 0 10px ${color.gray800}`,
  });
