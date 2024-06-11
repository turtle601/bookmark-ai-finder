import Label from './Label';
import Field from './Field';
import ErrorMessage from './ErrorMessage';
import Root from './Root';

const Input = Object.assign(Root, {
  Label,
  ErrorMessage,
  Field,
});

export default Input;
