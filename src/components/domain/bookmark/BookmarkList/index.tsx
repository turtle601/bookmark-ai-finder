import Flex from '@/components/@common/layout/Flex';
import Folder from '@/components/domain/bookmark/Folder';
import LinkBox from '@/components/domain/bookmark/LinkBox';

import { spacer } from '@/styles/theme';

import {
  getBookmarksData,
  isLinkBox,
} from '@/components/domain/bookmark/BookmarkList/util';

import type { BookmarkListProps } from '@/components/domain/bookmark/BookmarkList/type';

function BookmarkList({ folder, data }: BookmarkListProps) {
  const bookmarksData = getBookmarksData(folder, data || []);

  if (bookmarksData.length === 0) {
    return <div>등록한 북마크가 없습니다!!</div>;
  }

  return (
    <Flex gap={spacer.spacing4}>
      {bookmarksData.map((bookmark) => {
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
  );
}

export default BookmarkList;
