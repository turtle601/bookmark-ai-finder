import { useMemo } from 'react';
import { color } from '@/styles/theme';

import Flex from '@/components/@common/layout/Flex';

import { useRightClickContext } from '@/components/@shared/RightClick/context';

import type { MenuProps } from '@/components/@shared/RightClick/Menu/type';

function Menu({
  id,
  children,
  gap = '0px',
  etcStyles = {},
  ...attribute
}: MenuProps) {
  const { selectedId, menuLocation } = useRightClickContext();

  const isShowMenu = useMemo(
    () => id === selectedId && !!menuLocation,
    [selectedId, menuLocation]
  );

  if (!isShowMenu) {
    return null;
  }

  return (
    <Flex
      as="ul"
      direction="column"
      gap={gap}
      etcStyles={{
        position: 'absolute',
        top: menuLocation?.mouseY,
        left: menuLocation?.mouseX,
        backgroundColor: color.white,
        listStyleType: 'none',
        zIndex: 99999,
        ...etcStyles,
      }}
      {...attribute}
    >
      {children}
    </Flex>
  );
}

export default Menu;
