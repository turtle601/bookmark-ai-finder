import { ChangeEventHandler, useState, useEffect } from 'react';

import type { IInputProps } from '@/components/@common/Input/type';

export const useInput = ({ inputName, inputValue, validate }: IInputProps) => {
  const [value, setValue] = useState(inputValue);
  const [touched, setTouched] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (validate) setIsError(validate(value));
  }, [value, isError, validate]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleBlur: ChangeEventHandler<HTMLInputElement> = () => {
    setTouched(false);
  };

  const handleFocus: ChangeEventHandler<HTMLInputElement> = () => {
    setTouched(true);
  };

  return {
    name: inputName,
    value,
    touched,
    isError,
    validate,
    handleChange,
    handleFocus,
    handleBlur,
  };
};
