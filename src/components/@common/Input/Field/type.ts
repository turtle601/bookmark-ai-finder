import { ComponentPropsWithoutRef } from 'react';
import { CSSObject } from '@emotion/react';

export interface FieldProps extends ComponentPropsWithoutRef<'input'> {
  as?: React.HTMLInputTypeAttribute;
  etcStyles?: CSSObject;
}
