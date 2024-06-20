import { color } from '@/styles/theme';
import { SerializedStyles, css } from '@emotion/react';

export const globalStyle: SerializedStyles = css({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  'ul, ol, li': {
    listStyle: 'none',
  },

  'html, body': {
    width: '100%',
    height: '100%',
    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue'`,
    color: color.gray800,
  },

  a: {
    textDecoration: 'none',
  },

  button: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: 0,
    margin: 0,
  },

  input: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: '0',
  },

  'input[type="number"]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: '0',
  },

  'input[type="number"]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: '0',
  },
});
