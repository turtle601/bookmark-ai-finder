import { color, spacer } from '@/styles/theme';

import FolderIcon from '@/assets/folder.svg';

import Flex from '@/components/@common/layout/Flex';
import Spacer from '@/components/@common/layout/Spacer';
import Text from '@/components/@common/Text';

import type { FolderProps } from '@/components/domain/bookmark/Folder/type';

function Folder({ title }: FolderProps) {
  const viewFolderContent = () => {
    console.log('폴더 내용 보기');
  };

  return (
    <Flex>
      <Flex direction="column" align="center" onDoubleClick={viewFolderContent}>
        <FolderIcon />
        <Spacer direction="vertical" space={spacer.spacing0} />
        <Text color={color.white} label={title} />
      </Flex>
    </Flex>
  );
}

export default Folder;
