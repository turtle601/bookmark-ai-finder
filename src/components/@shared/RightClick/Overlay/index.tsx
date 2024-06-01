import { useRightClickContext } from '@/components/@shared/RightClick/context';

import { getOverlayStyle } from '@/components/@shared/RightClick/Overlay/style';

import type { OverlayProps } from '@/components/@shared/RightClick/Overlay/type';

function Overlay({ children }: OverlayProps) {
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
