import { css } from '@emotion/react';

import type {
  SpacerProps,
  SpacerType,
} from '@/components/@common/layout/Spacer/type';

export const getSpacerStyle = <T extends SpacerType>({
  direction,
  space,
}: SpacerProps<T>) => {
  if (direction === 'vertical') {
    return css({
      width: '1px',
      height: `${space}`,
    });
  }

  return css({
    width: `${space}`,
    height: '1px',
  });
};
