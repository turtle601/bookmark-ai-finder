import { css } from '@emotion/react';

import { useRightClickContext } from '@/components/@shared/RightClick/context';

import type { ItemProps } from '@/components/@shared/RightClick/Item/type';

function Item({
  children,
  externalAction,
  etcStyles,
  ...attribute
}: ItemProps) {
  const { setMenuLocation } = useRightClickContext();

  const handleClickItem = () => {
    if (externalAction) externalAction();
    setMenuLocation(null);
  };

  return (
    <li
      css={css({ cursor: 'pointer', ...etcStyles })}
      onClick={handleClickItem}
      {...attribute}
    >
      {children}
    </li>
  );
}

export default Item;
