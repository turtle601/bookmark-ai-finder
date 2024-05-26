import { ElementType } from 'react';

import { getTextStyle } from '@/components/@common/Text/style';

import type { TextProps } from '@/components/@common/Text/type';
import type { PolymorpicProps } from '@/type/polymorpic';

function Text<T extends ElementType = 'span'>({
  as,
  color,
  fontType = 'medium4',
  fontWeightType = 'regular',
  label,
  etcStyles,
  ...attribute
}: PolymorpicProps<T, TextProps>) {
  const Element = as || 'span';

  return (
    <Element
      css={getTextStyle({
        color,
        fontType,
        fontWeightType,
        etcStyles,
      })}
      {...attribute}
    >
      {label}
    </Element>
  );
}

export default Text;
