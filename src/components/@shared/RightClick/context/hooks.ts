import { useContext } from 'react';

import { RightClickContext } from '@/components/@shared/RightClick/context';

export const useRightClickContext = () => {
  const rightClickState = useContext(RightClickContext);

  if (rightClickState === null)
    throw new Error('RightClickContext가 존재하지 않습니다.');

  return rightClickState;
};
