import { useShallow } from 'zustand/react/shallow';

import Fetch from '@/components/@shared/Fetch';
import Route from '@/components/domain/bookmark/Route';
import Spacer from '@/components/@common/layout/Spacer';
import BookmarkList from '@/components/domain/bookmark/BookmarkList';

import { spacer } from '@/styles/theme';
import { useBookmarkStore } from '@/store/bookmark';
import { sendMessageForChrome } from '@/utils/chrome';

function BookmarkWrapper() {
  const { path } = useBookmarkStore(
    useShallow((state) => ({
      path: state.path,
    }))
  );

  const getBookmarksData = (): Promise<chrome.bookmarks.BookmarkTreeNode[]> =>
    sendMessageForChrome('getBookmarks');

  return (
    <div>
      <Route path={path} />
      <Spacer direction="vertical" space={spacer.spacing2} />
      <Fetch
        promiseFn={getBookmarksData}
        suspense="로딩중"
        errorBoundary="에러 발생"
      >
        <BookmarkList folder={path[path.length - 1]} />
      </Fetch>
    </div>
  );
}

export default BookmarkWrapper;
