import { getOverlayStyle } from '@/components/@shared/RightClick/Overlay/style';

import { useRightClickContext } from '@/components/@shared/RightClick/context/hooks';

import type { IOverlayProps } from '@/components/@shared/RightClick/Overlay/type';

function Overlay({ children }: IOverlayProps) {
  const { setMenuLocation } = useRightClickContext();

  const closeMenu = () => {
    setMenuLocation(null);
  };

  return (
    <div css={getOverlayStyle()} onClick={closeMenu}>
      {children}
    </div>
  );
}

export default Overlay;
