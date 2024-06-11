import { ComponentPropsWithoutRef } from 'react';
import { CSSObject } from '@emotion/react';

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  text: string;
  etcStyles?: CSSObject;
}
