import { useEffect, useMemo, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import Folder from '@/components/domain/bookmark/Folder';
import LinkBox from '@/components/domain/bookmark/LinkBox';
import Flex from '@/components/@common/layout/Flex';

import {
  getBookmarksData,
  isLinkBox,
} from '@/components/domain/bookmark/Bookmarks/util';

import { useBookmarkStore } from '@/store/bookmark';
import Text from '@/components/@common/Text';
import { spacer } from '@/styles/theme';
import Spacer from '@/components/@common/layout/Spacer';

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<
    chrome.bookmarks.BookmarkTreeNode[] | undefined
  >([]);

  const { path } = useBookmarkStore(
    useShallow((state) => ({
      path: state.path,
    }))
  );

  const folderPathTitle = useMemo(() => {
    return path
      .map((folder, idx) => {
        if (idx === 0 && folder === '') {
          return 'root';
        }

        return folder;
      })
      .join(' > ');
  }, [path]);

  useEffect(() => {
    chrome.runtime.sendMessage(
      { action: 'getBookmarks' },
      (response: chrome.bookmarks.BookmarkTreeNode[]) => {
        const bookmarksData = getBookmarksData(path[path.length - 1], response);
        setBookmarks(bookmarksData);
      }
    );
  }, [path, getBookmarksData]);

  if (!bookmarks) return <div>등록한 북마크가 없습니다!!</div>;

  return (
    <div>
      <Text
        fontType="large4"
        fontWeightType="semibold"
        label={folderPathTitle}
        etcStyles={{
          padding: '1rem',
        }}
      />
      <Spacer direction="vertical" space={spacer.spacing2} />
      <Flex gap="24px">
        {bookmarks.map((bookmark) => {
          return (
            <>
              {isLinkBox(bookmark) ? (
                <LinkBox url={bookmark?.url} title={bookmark.title} size={32} />
              ) : (
                <Folder title={bookmark.title} />
              )}
            </>
          );
        })}
      </Flex>
    </div>
  );
}

export default Bookmarks;
