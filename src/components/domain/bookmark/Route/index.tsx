import { css } from '@emotion/react';
import { MouseEventHandler, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import Text from '@/components/@common/Text';
import Flex from '@/components/@common/layout/Flex';
import Spacer from '@/components/@common/layout/Spacer';

import { color, spacer } from '@/styles/theme';
import { useBookmarkStore } from '@/store/bookmark';

import {
  getFolderPath,
  isLastListItem,
  isRoot,
} from '@/components/domain/bookmark/Route/util';

import type { RouteProps } from '@/components/domain/bookmark/Route/type';

function Route({ path }: RouteProps) {
  const folderPathList = useMemo(getFolderPath(path), [path]);

  const { pickFolder } = useBookmarkStore(
    useShallow((state) => ({
      pickFolder: state.pickFolder,
    })),
  );

  const selectFolder =
    (folder: string, idx: number): MouseEventHandler<HTMLButtonElement> =>
    (e) => {
      e.preventDefault();
      pickFolder(isRoot(folder, idx) ? '' : folder);
    };

  return (
    <Flex>
      {folderPathList.map((folder, idx) => {
        return (
          <>
            <button
              css={css({
                cursor: 'pointer',
                backgroundColor: 'transparent',
                outline: 'none',
                border: 'none',
              })}
              type="button"
              onClick={selectFolder(folder, idx)}
            >
              <Text
                label={folder}
                fontType="medium8"
                fontWeightType="semibold"
                color={color.white}
                etcStyles={{
                  '&:hover': {
                    color: color.gray700,
                  },
                }}
              />
            </button>
            {isLastListItem(folderPathList, idx) && (
              <>
                <Spacer direction="horizontal" space={spacer.spacing1} />
                <Text
                  label="-"
                  fontType="medium8"
                  fontWeightType="bold"
                  color={color.white}
                />
                <Spacer direction="horizontal" space={spacer.spacing1} />
              </>
            )}
          </>
        );
      })}
    </Flex>
  );
}

export default Route;
