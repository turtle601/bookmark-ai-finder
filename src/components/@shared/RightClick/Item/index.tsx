import { css } from '@emotion/react';

import { useRightClickContext } from '@/components/@shared/RightClick/context/hooks';

import type { IItemProps } from '@/components/@shared/RightClick/Item/type';

function Item({
  children,
  externalAction,
  etcStyles,
  ...attribute
}: IItemProps) {
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
