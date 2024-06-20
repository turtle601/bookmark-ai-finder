import { CSSObject } from '@emotion/react';
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

export interface IItemProps extends ComponentPropsWithoutRef<'li'> {
  externalAction?: VoidFunction;
  etcStyles?: CSSObject;
  children: ReactNode | ReactElement[];
}
