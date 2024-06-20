import { getSpacerStyle } from '@/components/@common/layout/Spacer/style';

import type {
  ISpacerProps,
  SpacerType,
} from '@/components/@common/layout/Spacer/type';

function Spacer<T extends SpacerType>({ direction, space }: ISpacerProps<T>) {
  return <div css={getSpacerStyle({ direction, space })}></div>;
}

export default Spacer;
