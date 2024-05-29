export const isRoot = (folder: string, idx: number) =>
  idx === 0 && (folder === '' || folder === 'root');

export const getFolderPath = (path: string[]) => () => {
  return path.map((folder, idx) => {
    if (isRoot(folder, idx)) {
      return 'root';
    }

    return folder;
  });
};

export const isLastListItem = (list: unknown[], idx: number) =>
  idx !== list.length - 1;
