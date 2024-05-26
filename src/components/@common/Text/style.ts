import { css } from '@emotion/react';

import { fontWeight } from '@/styles/fontWeight';
import { typography } from '@/styles/typography';

import type { TextProps } from '@/components/@common/Text/type';

export const getTextStyle = ({
  fontType = 'medium4',
  fontWeightType = 'regular',
  color,
  etcStyles,
}: Omit<TextProps, 'label'>) => {
  return css({
    color,
    fontWeight: fontWeight[fontWeightType],
    ...typography[fontType],
    ...etcStyles,
  });
};
