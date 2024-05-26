import type {
  SpacerProps,
  SpacerType,
} from '@/components/@common/layout/Spacer/type';

export const getSpacerStyle = <T extends SpacerType>({
  direction,
  space,
}: SpacerProps<T>) => {
  if (direction === 'vertical') {
    return {
      width: '100%',
      height: `${space}`,
    };
  }

  return {
    width: `${space}`,
    height: 'auto',
  };
};
