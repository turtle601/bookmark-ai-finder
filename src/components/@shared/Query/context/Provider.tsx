import { useReducer } from 'react';

import {
  QueryDisPatchContext,
  QueryStateContext,
} from '@/components/@shared/Query/context';

import {
  initailState,
  reducer,
} from '@/components/@shared/Query/context/store';

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initailState);

  return (
    <QueryStateContext.Provider value={state}>
      <QueryDisPatchContext.Provider value={dispatch}>
        {children}
      </QueryDisPatchContext.Provider>
    </QueryStateContext.Provider>
  );
}
