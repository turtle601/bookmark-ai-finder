import { ComponentPropsWithoutRef } from 'react';

export interface FormProps extends ComponentPropsWithoutRef<'form'> {
  externalSubmitEvent?: (inputs?: HTMLInputElement[]) => void;
}
