import { createContext, useContext } from 'react';

import type { RightClickProps } from '@/components/@shared/RightClick/type';

export const RightClickContext = createContext<RightClickProps | null>(null);

export const useRightClickContext = () => {
  const rightClickState = useContext(RightClickContext);

  if (rightClickState === null)
    throw new Error('RightClickContext가 존재하지 않습니다.');

  return rightClickState;
};
