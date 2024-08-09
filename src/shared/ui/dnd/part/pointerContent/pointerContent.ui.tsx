import React, { ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';

import { useDnDContext } from '@/shared/ui/dnd/model';
import { THIRD_LAYER_ZIDENX } from '@/shared/config/constant';

import type { CSSObject } from '@emotion/react';

interface IPointerContentProps extends ComponentPropsWithoutRef<'div'> {
  dragEndType?: 'reset' | 'leftSide';
  customStyle?: (mouseX?: number, mouseY?: number) => CSSObject;
}

const PointerContentComponent: React.FC<IPointerContentProps> = ({
  customStyle = () => {},
  dragEndType = 'reset',
  ...attribute
}) => {
  const { mousePosition, dragStartContent } = useDnDContext();

  const mouseX = mousePosition?.x || 0;
  const mouseY =
    dragEndType === 'leftSide' ? mousePosition?.y || 56 : mousePosition?.y || 0;

  const isShow = Boolean(dragStartContent);

  return (
    isShow && (
      <div
        css={css({
          position: 'absolute',
          transform: `translate(${mouseX}px, ${mouseY}px)`,
          zIndex: `${THIRD_LAYER_ZIDENX}`,
          pointerEvents: 'none',
          ...customStyle(mouseX, mouseY),
        })}
        {...attribute}
      >
        {dragStartContent}
      </div>
    )
  );
};

export type PointerContentFC = React.NamedExoticComponent<IPointerContentProps>;

const PointerContent: PointerContentFC = React.memo(PointerContentComponent);

export default PointerContent;
