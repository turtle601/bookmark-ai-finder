import { ComponentPropsWithoutRef } from 'react';
import { CSSObject } from '@emotion/react';

export interface IErrorMessageProps extends ComponentPropsWithoutRef<'span'> {
  message: string;
  etcStyles?: CSSObject;
}
