import { Context, createContext } from 'react';

import type {
  IInputActionContextProps,
  IInputContextProps,
} from '@/components/@common/Input/type';

export const InputContext: Context<IInputContextProps | null> =
  createContext<IInputContextProps | null>(null);
export const InputActionContext: Context<IInputActionContextProps | null> =
  createContext<IInputActionContextProps | null>(null);
