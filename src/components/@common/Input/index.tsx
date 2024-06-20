import Label from './Label';
import Field from './Field';
import ErrorMessage from './ErrorMessage';
import Root from './Root';

import type { IInput } from '@/components/@common/Input/type';

const Input: IInput = Object.assign(Root, {
  Label,
  ErrorMessage,
  Field,
});

export default Input;
