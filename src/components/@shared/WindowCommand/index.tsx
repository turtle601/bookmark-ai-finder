import { useEffect, useRef } from 'react';

import { getKeyMap } from '@/components/@shared/WindowCommand/util';

import type { CommandProps } from '@/components/@shared/WindowCommand/type';

function WindowCommand({ cmdKeys, action, children }: CommandProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();

      const keyMap = getKeyMap(event);
      const allCommandsPressed = cmdKeys.every((cmd) => keyMap[cmd]);

      if (allCommandsPressed) action();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cmdKeys, action]);

  return <>{children}</>;
}

export default WindowCommand;
