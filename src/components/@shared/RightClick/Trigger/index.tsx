import { css } from '@emotion/react';
import { forwardRef } from 'react';

import type { TriggerProps } from '@/components/@shared/RightClick/Trigger/type';

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, showMenu, ...attribute }, ref) => {
    return (
      <button
        css={css({
          position: 'relative',
        })}
        ref={ref}
        {...attribute}
      >
        <>{showMenu}</>
        {children}
      </button>
    );
  }
);

export default Trigger;
