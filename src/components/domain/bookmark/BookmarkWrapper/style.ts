import { color } from '@/styles/theme';
import { css } from '@emotion/react';

export const getBookmarkWrapperStyle = () => {
  return css({
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
