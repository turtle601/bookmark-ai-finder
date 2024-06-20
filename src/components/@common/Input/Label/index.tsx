import { useInputContext } from '@/components/@common/Input/context/hooks';

import type { ILabelProps } from '@/components/@common/Input/Label/type';

function Label({ text, etcStyles = {}, ...attribute }: ILabelProps) {
  const { name } = useInputContext();

  return (
    <label htmlFor={name} css={{ ...etcStyles }} {...attribute}>
      {text}
    </label>
  );
}

export default Label;
