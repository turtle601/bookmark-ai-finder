import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { CSSObject } from '@emotion/react';

export interface IMenuProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
  gap?: CSSObject['gap'];
  etcStyles?: CSSObject;
}
