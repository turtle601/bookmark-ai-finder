import { ComponentPropsWithoutRef } from 'react';
import { CSSObject } from '@emotion/react';

export interface ILabelProps extends ComponentPropsWithoutRef<'label'> {
  text: string;
  etcStyles?: CSSObject;
}
