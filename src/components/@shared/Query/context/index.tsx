import { createContext, Dispatch, useContext } from 'react';

import type { QueryAction, QueryState } from '@/components/@shared/Query/type';

export const QueryStateContext = createContext<QueryState | null>(null);
export const QueryDisPatchContext = createContext<Dispatch<QueryAction> | null>(
  null,
);
