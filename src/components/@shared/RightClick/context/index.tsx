import { Context, createContext } from 'react';

import type { IRightClickProps } from '@/components/@shared/RightClick/type';

export const RightClickContext: Context<IRightClickProps | null> =
  createContext<IRightClickProps | null>(null);
