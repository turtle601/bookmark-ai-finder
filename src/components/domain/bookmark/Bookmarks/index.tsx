import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import Folder from '@/components/domain/bookmark/Folder';
import LinkBox from '@/components/domain/bookmark/LinkBox';
import Flex from '@/components/@common/layout/Flex';
import Spacer from '@/components/@common/layout/Spacer';

import { spacer } from '@/styles/theme';
import { useBookmarkStore } from '@/store/bookmark';

import {
  getBookmarksData,
  isLinkBox,
} from '@/components/domain/bookmark/Bookmarks/util';
import Route from '@/components/domain/bookmark/Route';

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<
    chrome.bookmarks.BookmarkTreeNode[] | undefined
  >([]);

  const { path } = useBookmarkStore(
    useShallow((state) => ({
      path: state.path,
    }))
  );

  useEffect(() => {
    chrome.runtime.sendMessage(
      { action: 'getBookmarks' },
      (response: chrome.bookmarks.BookmarkTreeNode[]) => {
        const bookmarksData = getBookmarksData(path[path.length - 1], response);
        setBookmarks(bookmarksData);
      }
    );
  });

  if (!bookmarks) return <div>등록한 북마크가 없습니다!!</div>;

  return (
    <div>
      <Route path={path} />
      <Spacer direction="vertical" space={spacer.spacing2} />
      <Flex gap={spacer.spacing4}>
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
