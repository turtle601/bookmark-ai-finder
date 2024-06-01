import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { CSSObject } from '@emotion/react';

export interface MenuProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
  gap?: CSSObject['gap'];
  etcStyles?: CSSObject;
}
