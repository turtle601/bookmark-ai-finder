import { FormEventHandler, useRef } from 'react';

import { getChildrenForInputRef } from '@/components/@common/Form/util';

import type { IFormProps } from '@/components/@common/Form/type';

function Form({ children, externalAction, ...attribute }: IFormProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    let focusFlag = false;

    Object.entries(inputRefs.current).forEach(([, element]) => {
      if (!focusFlag && element.checkValidity()) {
        element.focus();
        element.scrollIntoView();
        focusFlag = true;
      }
    });

    if (!focusFlag) {
      if (externalAction) externalAction(inputRefs.current);
    }
  };

  return (
    <form onSubmit={handleSubmit} {...attribute}>
      {getChildrenForInputRef(children, inputRefs)}
    </form>
  );
}

export default Form;
