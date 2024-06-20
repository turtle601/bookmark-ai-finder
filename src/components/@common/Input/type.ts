import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ChangeEventHandler, ReactElement } from 'react';

import Field from '@/components/@common/Input/Field';
import Label from '@/components/@common/Input/Label';
import ErrorMessage from '@/components/@common/Input/ErrorMessage';

import { ILabelProps } from '@/components/@common/Input/Label/type';
import { IErrorMessageProps } from '@/components/@common/Input/ErrorMessage/type';
import { IField } from '@/components/@common/Input/Field/type';

export interface IInputActionContextProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleFocus: ChangeEventHandler<HTMLInputElement>;
  handleBlur: ChangeEventHandler<HTMLInputElement>;
  validate?: (value: string) => boolean;
}

export interface IInputContextProps {
  name: string;
  value: string;
  touched: boolean;
  isError: boolean;
}

export interface IInputProps {
  inputName: string;
  inputValue: string;
  validate?: (value: string) => boolean;
}

export type InputRootProps = IInputProps & {
  children:
    | ReactElement<typeof Field>
    | ReactElement<typeof Label>
    | ReactElement<typeof ErrorMessage>
    | ReactElement
    | ReactElement[];
};

export type IInput = (({
  inputName,
  inputValue,
  validate,
  children,
}: InputRootProps) => EmotionJSX.Element) & {
  Label: ({ text, etcStyles, ...attribute }: ILabelProps) => EmotionJSX.Element;
  ErrorMessage: ({
    message,
    etcStyles,
  }: IErrorMessageProps) => EmotionJSX.Element;
  Field: IField;
};
