import { ComponentPropsWithoutRef } from 'react';

export interface IFormProps extends ComponentPropsWithoutRef<'form'> {
  externalAction?: (inputs?: HTMLInputElement[]) => void;
}
