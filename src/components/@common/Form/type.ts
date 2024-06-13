import { ComponentPropsWithoutRef } from 'react';

export interface FormProps extends ComponentPropsWithoutRef<'form'> {
  externalAction?: (inputs?: HTMLInputElement[]) => void;
}
