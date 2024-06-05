import { useContext } from 'react';

import {
  ModalDisPatchContext,
  ModalStateContext,
} from '@/components/@common/Modal/context';

export function useModalState() {
  const state = useContext(ModalStateContext);
  if (state === null) throw new Error('Cannot find QueryStateProvider');
  return state;
}

export function useModalDispatch() {
  const dispatch = useContext(ModalDisPatchContext);
  if (dispatch === null) throw new Error('Cannot find QueryDisPatchProvider');
  return dispatch;
}
