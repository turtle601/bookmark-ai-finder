import { useInputContext } from '@/components/@common/Input/context/hooks';
import { color } from '@/styles/theme';

import type { IErrorMessageProps } from '@/components/@common/Input/ErrorMessage/type';

function ErrorMessage({ message, etcStyles = {} }: IErrorMessageProps) {
  const { isError, touched } = useInputContext();

  if (!isError)
    return (
      <span css={{ display: 'block', width: 'auto', height: '8px' }}>{''}</span>
    );

  if (!touched)
    return (
      <span css={{ display: 'block', width: 'auto', height: '8px' }}>{''}</span>
    );

  return (
    <span
      css={{
        display: 'block',
        width: 'auto',
        height: '8px',
        color: color.red200,
        ...etcStyles,
      }}
    >
      {message}
    </span>
  );
}

export default ErrorMessage;
