import { createContext } from 'react';

import type {
  InputActionContextProps,
  InputContextProps,
} from '@/components/@common/Input/type';

export const InputContext = createContext<InputContextProps | null>(null);
export const InputActionContext = createContext<InputActionContextProps | null>(
  null,
);
