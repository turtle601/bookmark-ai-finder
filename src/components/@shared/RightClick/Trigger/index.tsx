import { css } from '@emotion/react';
import {
  forwardRef,
  MouseEventHandler,
  useImperativeHandle,
  useRef,
} from 'react';

import { useRightClickContext } from '@/components/@shared/RightClick/context';

import type { TriggerProps } from '@/components/@shared/RightClick/Trigger/type';

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ id, children, showMenu, ...attribute }, ref) => {
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const { setMenuLocation, setSelectedId } = useRightClickContext();

    useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement);

    const handleRightClick =
      (idx?: string): MouseEventHandler<HTMLButtonElement> =>
      (event) => {
        event.preventDefault();

        if (triggerRef.current) {
          setMenuLocation({
            mouseX:
              event.clientX - triggerRef.current.getBoundingClientRect().left,
            mouseY:
              event.clientY - triggerRef.current.getBoundingClientRect().top,
          });

          setSelectedId(idx ? idx : null);
        }
      };

    return (
      <button
        css={css({
          position: 'relative',
          border: 'none',
          background: 'none',
          outline: 'none',
        })}
        ref={triggerRef}
        onContextMenu={handleRightClick(id)}
        {...attribute}
      >
        <>{showMenu}</>
        {children}
      </button>
    );
  },
);

export default Trigger;
