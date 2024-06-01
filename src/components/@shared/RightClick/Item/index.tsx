import { css } from '@emotion/react';

import { useRightClickContext } from '@/components/@shared/RightClick/context';

import type { ItemProps } from '@/components/@shared/RightClick/Item/type';

function Item({ children, onClick, etcStyles, ...attribute }: ItemProps) {
  const { setMenuLocation } = useRightClickContext();

  const handleClickItem = () => {
    if (onClick) onClick();
    setMenuLocation(null);
  };

  return (
    <li onClick={handleClickItem} css={css({ ...etcStyles })} {...attribute}>
      {children}
    </li>
  );
}

export default Item;
