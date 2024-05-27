import { ElementType } from 'react';

import { getFlexStyle } from '@/components/@common/layout/Flex/style';

import type { FlexProps } from '@/components/@common/layout/Flex/type';
import type { PolymorpicProps } from '@/type/polymorpic';

function Flex<T extends ElementType = 'div'>({
  as,
  direction = 'row',
  justify = 'start',
  align = 'auto',
  gap = '0px',
  etcStyles = {},
  children,
  ...attribute
}: PolymorpicProps<T, FlexProps>) {
  const Element = as || 'div';

  return (
    <Element
      css={getFlexStyle({
        direction,
        justify,
        align,
        gap,
        etcStyles,
      })}
      {...attribute}
    >
      {children}
    </Element>
  );
}

export default Flex;
