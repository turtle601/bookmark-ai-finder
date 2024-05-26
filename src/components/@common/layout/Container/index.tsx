import { ElementType } from 'react';

import Flex from '@/components/@common/layout/Flex';

import { getChildrenForContainerStyle } from '@/components/@common/layout/Container/utils';

import type { PolymorpicProps } from '@/type/polymorpic';
import type { ContainerProps } from '@/components/@common/layout/Container/type';

function Container<T extends ElementType = 'div'>({
  as,
  minWidth,
  maxWidth,
  children,
  ...attribute
}: PolymorpicProps<T, ContainerProps>) {
  const Element = as || 'div';

  return (
    <Flex as={Element} direction="column" align="center" {...attribute}>
      {getChildrenForContainerStyle(children, minWidth, maxWidth)}
    </Flex>
  );
}

export default Container;