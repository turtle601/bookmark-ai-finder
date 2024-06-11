import { ComponentPropsWithoutRef } from 'react';
import { CSSObject } from '@emotion/react';

export interface ErrorMessageProps extends ComponentPropsWithoutRef<'span'> {
  message: string;
  etcStyles?: CSSObject;
}
