import { useMemo } from 'react';

import { useInput } from '@/components/@common/Input/hooks/useInput';
import {
  InputActionContext,
  InputContext,
} from '@/components/@common/Input/context';

import type { InputRootProps } from '@/components/@common/Input/type';
import { css } from '@emotion/react';

function Root({ inputName, inputValue, validate, children }: InputRootProps) {
  const {
    name,
    value,
    touched,
    isError,
    handleChange,
    handleFocus,
    handleBlur,
  } = useInput({
    inputName,
    inputValue,
    validate,
  });

  const state = useMemo(() => {
    return { name, value, touched, isError };
  }, [name, value, touched, isError]);

  const action = useMemo(
    () => ({
      handleChange,
      handleFocus,
      handleBlur,
      validate,
    }),
    [handleChange, handleFocus, handleBlur, validate],
  );

  return (
    <InputContext.Provider value={state}>
      <InputActionContext.Provider value={action}>
        <div
          css={css({
            width: '100%',
          })}
        >
          {children}
        </div>
      </InputActionContext.Provider>
    </InputContext.Provider>
  );
}

export default Root;
