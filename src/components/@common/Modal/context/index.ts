import { createContext, Dispatch } from 'react';

import { ModalAction, ModalState } from '@/components/@common/Modal/type';

export const ModalStateContext = createContext<ModalState | null>(null);
export const ModalDisPatchContext = createContext<Dispatch<ModalAction> | null>(
  null
);
