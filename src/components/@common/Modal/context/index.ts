import { Context, createContext, Dispatch } from 'react';

import { ModalAction, IModalState } from '@/components/@common/Modal/type';

export const ModalStateContext: Context<IModalState | null> =
  createContext<IModalState | null>(null);
export const ModalDisPatchContext: Context<Dispatch<ModalAction> | null> =
  createContext<Dispatch<ModalAction> | null>(null);
