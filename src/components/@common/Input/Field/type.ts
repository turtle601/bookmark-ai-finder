import {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { CSSObject } from '@emotion/react';

export interface IFieldProps extends ComponentPropsWithoutRef<'input'> {
  as?: React.HTMLInputTypeAttribute;
  etcStyles?: CSSObject;
}
export interface IFieldAttribute {
  focus: () => void;
  checkValidity: () => boolean;
  scrollIntoView: () => void;
  value: string;
}

export type IField = ForwardRefExoticComponent<
  IFieldProps & RefAttributes<IFieldAttribute>
>;
