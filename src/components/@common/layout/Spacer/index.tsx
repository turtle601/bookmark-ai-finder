import { getSpacerStyle } from '@/components/@common/layout/Spacer/style';

import type {
  SpacerProps,
  SpacerType,
} from '@/components/@common/layout/Spacer/type';

function Spacer<T extends SpacerType>({ direction, space }: SpacerProps<T>) {
  return <div css={getSpacerStyle({ direction, space })}></div>;
}

export default Spacer;
