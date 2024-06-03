import { useContext } from 'react';

import {
  QueryDisPatchContext,
  QueryStateContext,
} from '@/components/@shared/Query/context';

export function useQueryState() {
  const state = useContext(QueryStateContext);
  if (state === null) throw new Error('Cannot find QueryStateProvider');
  return state;
}

export function useQueryDispatch() {
  const dispatch = useContext(QueryDisPatchContext);
  if (dispatch === null) throw new Error('Cannot find QueryDisPatchProvider');
  return dispatch;
}
