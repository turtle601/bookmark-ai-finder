import { useReducer } from 'react';

import {
  ModalDisPatchContext,
  ModalStateContext,
} from '@/components/@common/Modal/context';

import { reducer } from '@/components/@common/Modal/context/store';

import type { ModalProviderProps } from '@/components/@common/Modal/type';

function ModalProvider({ modalState, children }: ModalProviderProps) {
  const [state, dispatch] = useReducer(reducer, modalState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDisPatchContext.Provider value={dispatch}>
        {children}
      </ModalDisPatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

export default ModalProvider;
