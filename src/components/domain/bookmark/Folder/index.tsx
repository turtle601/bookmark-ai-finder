import { useShallow } from 'zustand/react/shallow';

import { color } from '@/styles/theme';

import FolderIcon from '@/assets/folder.svg';

import Flex from '@/components/@common/layout/Flex';
import Text from '@/components/@common/Text';

import { useBookmarkStore } from '@/store/bookmark';

import type { FolderProps } from '@/components/domain/bookmark/Folder/type';

function Folder({ title }: FolderProps) {
  const { openFolder } = useBookmarkStore(
    useShallow((state) => ({
      openFolder: state.openFolder,
    })),
  );

  const viewFolderContent = () => {
    openFolder(title);
  };

  return (
    <Flex direction="column" align="center" onDoubleClick={viewFolderContent}>
      <FolderIcon />
      <Text color={color.white} label={title} />
    </Flex>
  );
}

export default Folder;
