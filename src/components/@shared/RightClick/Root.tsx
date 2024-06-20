import { PropsWithChildren, useState } from 'react';
import { RightClickContext } from '@/components/@shared/RightClick/context';

import type { IMenuLocation } from '@/components/@shared/RightClick/type';

function Root({ children }: PropsWithChildren) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [menuLocation, setMenuLocation] = useState<IMenuLocation | null>(null);

  return (
    <RightClickContext.Provider
      value={{
        selectedId,
        menuLocation,
        setSelectedId,
        setMenuLocation,
      }}
    >
      {children}
    </RightClickContext.Provider>
  );
}

export default Root;
