import { ElementType } from 'react';

import Flex from '@/components/@common/layout/Flex';

import type { PolymorpicProps } from '@/type/polymorpic';
import type { CenterProps } from '@/components/@common/layout/Center/type';

const Center = <T extends ElementType = 'div'>({
  as,
  direction = 'row',
  etcStyles = {},
  children,
  ...attribute
}: PolymorpicProps<T, CenterProps>) => {
  const Element = as || 'div';

  return (
    <Flex
      as={Element}
      direction={direction}
      justify="center"
      align="center"
      etcStyles={etcStyles}
      {...attribute}
    >
      {children}
    </Flex>
  );
};

export default Center;
