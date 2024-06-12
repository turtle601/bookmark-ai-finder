import { ChangeEventHandler, ReactElement } from 'react';

import Field from '@/components/@common/Input/Field';
import Label from '@/components/@common/Input/Label';
import ErrorMessage from '@/components/@common/Input/ErrorMessage';

export interface InputActionContextProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleFocus: ChangeEventHandler<HTMLInputElement>;
  handleBlur: ChangeEventHandler<HTMLInputElement>;
  validate?: (value: string) => boolean;
}

export interface InputContextProps {
  name: string;
  value: string;
  touched: boolean;
  isError: boolean;
}

export interface InputProps {
  inputName: string;
  inputValue: string;
  validate?: (value: string) => boolean;
}

export type InputRootProps = InputProps & {
  children:
    | ReactElement<typeof Field>
    | ReactElement<typeof Label>
    | ReactElement<typeof ErrorMessage>
    | ReactElement
    | ReactElement[];
};
