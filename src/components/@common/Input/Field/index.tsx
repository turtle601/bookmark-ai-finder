import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';

import {
  useInputActionContext,
  useInputContext,
} from '@/components/@common/Input/context/hooks';

import type { FieldProps } from '@/components/@common/Input/Field/type';

function Field(
  { as = 'text', etcStyles = {}, ...attribute }: FieldProps,
  ref: Ref<HTMLInputElement>
) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { name, value, touched } = useInputContext();
  const { handleBlur, handleChange, handleFocus, validate } =
    useInputActionContext();

  useImperativeHandle(
    ref,
    (): any => ({
      focus: () => {
        inputRef.current?.focus();
      },

      checkValidity: () => {
        if (validate) {
          return validate(inputRef.current?.value ?? '');
        }

        return true;
      },

      scrollIntoView: () => {
        inputRef.current?.scrollIntoView();
      },
    }),
    [inputRef]
  );

  return (
    <input
      id={name}
      type={as || 'text'}
      ref={inputRef}
      value={value}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onChange={handleChange}
      css={{
        display: 'block',
        ...etcStyles,
      }}
      {...attribute}
    />
  );
}

export default forwardRef(Field);
