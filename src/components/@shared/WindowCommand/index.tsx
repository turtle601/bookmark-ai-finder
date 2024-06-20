import { useEffect } from 'react';

import { getKeyMap } from '@/components/@shared/WindowCommand/util';

import type { ICommandProps } from '@/components/@shared/WindowCommand/type';

function WindowCommand({ cmdKeys, action, children }: ICommandProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyMap = getKeyMap(event);
      const allCommandsPressed = cmdKeys.every((cmd) => keyMap[cmd]);

      if (allCommandsPressed) {
        event.preventDefault();
        action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cmdKeys, action]);

  return <>{children}</>;
}

export default WindowCommand;
