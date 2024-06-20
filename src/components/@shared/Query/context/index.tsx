import { Context, createContext, Dispatch } from 'react';

import type { QueryAction, IQueryState } from '@/components/@shared/Query/type';

export const QueryStateContext: Context<IQueryState | null> =
  createContext<IQueryState | null>(null);
export const QueryDisPatchContext: Context<Dispatch<QueryAction> | null> =
  createContext<Dispatch<QueryAction> | null>(null);
