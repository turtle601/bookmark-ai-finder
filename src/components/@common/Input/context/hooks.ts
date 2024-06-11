import { useContext } from 'react';

import {
  InputActionContext,
  InputContext,
} from '@/components/@common/Input/context';

export const useInputContext = () => {
  const state = useContext(InputContext);
  if (state === null) throw new Error('Cannot find InputContext');
  return state;
};

export const useInputActionContext = () => {
  const state = useContext(InputActionContext);
  if (state === null) throw new Error('Cannot find InputContext');
  return state;
};
