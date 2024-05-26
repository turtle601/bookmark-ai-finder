import { FlexProps } from '@/components/@common/layout/Flex/type';

export const getFlexStyle = ({
  direction,
  justify,
  align,
  gap,
  etcStyles,
}: FlexProps) => {
  return {
    display: 'flex',
    width: '100%',
    height: 'auto',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: gap,
    ...etcStyles,
  };
};
