export const getKeyMap = (event: KeyboardEvent) => {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const isWindows = navigator.platform.toUpperCase().indexOf('WIN') >= 0;

  const keyMap: { [key: string]: boolean } = {
    ctrl: (isWindows && event.ctrlKey) || (isMac && event.metaKey),
    alt: event.altKey,
    shift: event.shiftKey,
    esc: event.key === 'Escape',
  };

  Array(26)
    .fill(0)
    .forEach((value, i) => {
      const char = String.fromCharCode(97 + i);
      keyMap[char] = event.key.toLowerCase() === char;
    });

  return keyMap;
};
