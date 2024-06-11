import { color } from '@/styles/theme';
import { css } from '@emotion/react';

export const getEditNameModalWrapper = () => {
  return css({
    width: '400px',
    padding: '16px 12px',
    height: 'auto',
    minWidth: '400px',
    maxWidth: '800px',
    borderRadius: '10px',
    backgroundColor: color.white,
  });
};

export const getInputLabelStyle = () => {
  return {
    marginLeft: '4px',
    fontWeight: '600',
    color: color.gray800,
  };
};

export const getInputFieldStyle = () => {
  return {
    outline: 'none',
    width: '90%',
    padding: '12px',
    color: color.black,
    border: '0.125rem solid transparent',
    borderRadius: '10px',
    backgroundColor: color.gray200,
    '&:focus': {
      border: `0.125rem solid ${color.blue500}`,
      '&::placeholder': {
        opacity: 0,
      },
    },
    '&:placeholder': {
      color: color.gray500,
    },
  };
};

export const getInputErrorMessageStyle = () => {
  return {
    fontSize: '12px',
    marginLeft: '8px',
  };
};
