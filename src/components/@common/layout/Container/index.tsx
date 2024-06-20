import { ElementType } from 'react';

import Flex from '@/components/@common/layout/Flex';

import { getChildrenForContainerStyle } from '@/components/@common/layout/Container/utils';

import type { PolymorpicProps } from '@/type/polymorpic';
import type { IContainerProps } from '@/components/@common/layout/Container/type';

function Container<T extends ElementType = 'div'>({
  as,
  minWidth,
  maxWidth,
  etcStyles,
  children,
  ...attribute
}: PolymorpicProps<T, IContainerProps>) {
  const Element = as || 'div';

  return (
    <Flex
      as={Element}
      direction="column"
      align="center"
      etcStyles={etcStyles}
      {...attribute}
    >
      {getChildrenForContainerStyle(children, minWidth, maxWidth)}
    </Flex>
  );
}

export default Container;
